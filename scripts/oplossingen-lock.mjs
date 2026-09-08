#!/usr/bin/env node
/**
 * Vergrendelt de oplossingen in een gerenderde oefeningen-build.
 *
 * Werkt NA `quarto render oefeningen/`, op de klaargemaakte HTML. Van elke callout met
 * title="Oplossing" wordt de body eruit geknipt, versleuteld met AES-GCM en vervangen door
 * een placeholder. De callout zelf blijft staan, dus de pagina ziet er hetzelfde uit.
 * oplossingen.html (include-after-body) zet ze in de browser terug voor wie de sleutel heeft.
 *
 * Gebruik:
 *   node scripts/oplossingen-lock.mjs build/oefeningen --code <sleutel>
 *   node scripts/oplossingen-lock.mjs build/oefeningen        (leest OPLOSSING_SLEUTEL)
 *
 * Het script is idempotent: een tweede keer draaien over dezelfde build doet niets.
 */

import { readFile, writeFile } from "node:fs/promises";
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { webcrypto } from "node:crypto";

const { subtle } = webcrypto;

// Moet gelijklopen met oefeningen/oplossingen.html.
const ITERATIES = 210000;
const CANARIE = "zss-ok";

// De tekst die bezoekers zonder sleutel te zien krijgen. Pas dit aan naar wat je wil
// meegeven over hoe men aan de sleutel geraakt.
const MELDING = `<p class="opl-melding"><strong>Deze oplossing is afgeschermd.</strong><br>
Studenten krijgen de sleutel van hun lesgever. Heb je de sleutel al eens op dit toestel
gebruikt, dan verschijnt de oplossing hier vanzelf.</p>`;

const b64 = (bytes) => Buffer.from(bytes).toString("base64");

async function maakSleutel(code, salt) {
  const basis = await subtle.importKey(
    "raw",
    Buffer.from(code, "utf8"),
    "PBKDF2",
    false,
    ["deriveKey"]
  );
  return subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: ITERATIES, hash: "SHA-256" },
    basis,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt"]
  );
}

async function versleutel(sleutel, tekst) {
  const iv = webcrypto.getRandomValues(new Uint8Array(12));
  const cipher = new Uint8Array(
    await subtle.encrypt(
      { name: "AES-GCM", iv },
      sleutel,
      Buffer.from(tekst, "utf8")
    )
  );
  const samen = new Uint8Array(iv.length + cipher.length);
  samen.set(iv, 0);
  samen.set(cipher, iv.length);
  return b64(samen);
}

/**
 * Zoekt vanaf de openende tag op startIdx de bijhorende sluittag.
 * Telt zowel div als section: staat er een kop in de oplossing, dan maakt Quarto van de
 * body een <section> in plaats van een <div>. Veilig op Quarto-output, want code in de
 * pagina is ge-escaped: een letterlijke "<div" binnen een codeblok bestaat niet.
 */
function sluitendeTag(html, startIdx) {
  const re = /<(\/?)(?:div|section)\b[^>]*?(\/?)>/gi;
  re.lastIndex = startIdx;
  let diepte = 0;
  let m;
  while ((m = re.exec(html)) !== null) {
    if (m[1] === "/") {
      diepte -= 1;
      if (diepte === 0) return m.index;
    } else if (m[2] !== "/") {
      diepte += 1;
    }
  }
  return -1;
}

const OPLOSSING_OPEN = /<div [^>]*class="callout[^"]*"[^>]*\btitle="Oplossing"[^>]*>/gi;
const BODY_OPEN = /<(?:div|section) [^>]*class="[^"]*\bcallout-body-container\b[^"]*"[^>]*>/i;

/** Verzamelt de te vergrendelen fragmenten in één HTML-bestand. */
function zoekOplossingen(html) {
  const gevonden = [];
  let voorbij = 0;
  OPLOSSING_OPEN.lastIndex = 0;
  let m;
  while ((m = OPLOSSING_OPEN.exec(html)) !== null) {
    if (m.index < voorbij) continue; // genest in een al verwerkte oplossing

    const naOpen = m.index + m[0].length;
    const rest = html.slice(naOpen);
    const body = BODY_OPEN.exec(rest);
    if (!body) continue;

    // De eerste callout-body-container na de opening is de body van deze callout zelf:
    // de callout-header ertussen bevat er geen.
    const bodyOpenIdx = naOpen + body.index;
    const inhoudStart = bodyOpenIdx + body[0].length;
    const inhoudEinde = sluitendeTag(html, bodyOpenIdx);
    if (inhoudEinde === -1) continue;

    const inhoud = html.slice(inhoudStart, inhoudEinde);
    if (inhoud.includes("data-opl=")) continue; // al vergrendeld

    gevonden.push({ start: inhoudStart, einde: inhoudEinde, inhoud });
    voorbij = inhoudEinde;
  }
  return gevonden;
}

/**
 * Ruwe platte tekst, zo dicht mogelijk bij wat Quarto in search.json zet: tags weg,
 * entiteiten (&lt;) blijven staan, witruimte samengetrokken. Tags worden door niets
 * vervangen en niet door een spatie: elk token in een codeblok zit in een eigen <span>,
 * en met spaties eromtrent zou "Main(string[] args)" als "Main ( string [] args )"
 * uitkomen en nergens meer op matchen.
 */
function platteTekst(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

const GROEP = 8;

/** Alle woordgroepen van GROEP woorden uit een tekst. */
function woordgroepen(tekst) {
  const w = tekst.split(" ");
  const set = new Set();
  for (let i = 0; i + GROEP <= w.length; i += 1) set.add(w.slice(i, i + GROEP).join(" "));
  return set;
}

/** Knipt uit een tekst elk stuk weg dat als woordgroep in de oplossingen voorkomt. */
function schrap(tekst, groepen) {
  const w = tekst.split(" ");
  if (w.length < GROEP) return { tekst, geraakt: false };
  const weg = new Array(w.length).fill(false);
  let geraakt = false;
  for (let i = 0; i + GROEP <= w.length; i += 1) {
    if (groepen.has(w.slice(i, i + GROEP).join(" "))) {
      geraakt = true;
      for (let j = i; j < i + GROEP; j += 1) weg[j] = true;
    }
  }
  if (!geraakt) return { tekst, geraakt: false };
  return {
    tekst: w.filter((_, i) => !weg[i]).join(" ").replace(/\s+/g, " ").trim(),
    geraakt: true,
  };
}

/**
 * Haalt de oplossingen ook uit de zoekindex.
 * Een kop binnenin een oplossing krijgt van Quarto een eigen zoekresultaat, en een
 * oplossing binnen een sectie wordt bij de tekst van die sectie geplakt. Beide moeten weg,
 * anders toont de zoekfunctie het antwoord aan wie de sleutel niet heeft.
 */
async function kuisZoekindex(map, perPagina) {
  const pad = join(map, "search.json");
  let index;
  try {
    index = JSON.parse(await readFile(pad, "utf8"));
  } catch {
    console.warn("Geen search.json gevonden, zoekindex overgeslagen.");
    return { verwijderd: 0, ingekort: 0 };
  }

  let verwijderd = 0;
  let ingekort = 0;
  const uit = [];

  for (const entry of index) {
    const [pagina, anker] = String(entry.href || "").split("#");
    const gegevens = perPagina.get(pagina);
    if (!gegevens) {
      uit.push(entry);
      continue;
    }
    if (anker && gegevens.ankers.has(anker)) {
      verwijderd += 1; // deze sectie stond volledig in een oplossing
      continue;
    }
    const { tekst, geraakt } = schrap(
      platteTekst(String(entry.text || "")),
      gegevens.groepen
    );
    if (geraakt) {
      ingekort += 1;
      if (!tekst) {
        verwijderd += 1;
        continue;
      }
      entry.text = tekst;
    }
    uit.push(entry);
  }

  await writeFile(pad, JSON.stringify(uit), "utf8");

  // Nacontrole: blijft er nog een herkenbaar stuk oplossing in de index staan? Woordgroepen
  // van acht woorden zijn lang genoeg om toeval uit te sluiten en kort genoeg om een
  // gedeeltelijke match te zien.
  const rest = new Map();
  for (const entry of uit) {
    const pagina = String(entry.href || "").split("#")[0];
    if (!perPagina.has(pagina)) continue;
    rest.set(pagina, (rest.get(pagina) || "") + " " + platteTekst(String(entry.text || "")));
  }
  const lekken = [];
  for (const [pagina, gegevens] of perPagina) {
    const hooi = rest.get(pagina);
    if (!hooi) continue;
    let raak = 0;
    const voorbeelden = [];
    for (const stuk of gegevens.tekst) {
      const w = stuk.split(" ");
      for (let i = 0; i + 8 <= w.length; i += 8) {
        const groep = w.slice(i, i + 8).join(" ");
        if (hooi.includes(groep)) {
          raak += 1;
          if (voorbeelden.length < 3) voorbeelden.push(groep);
        }
      }
    }
    if (raak > 0) lekken.push({ pagina, raak, voorbeelden });
  }
  lekken.sort((a, b) => b.raak - a.raak);
  return { verwijderd, ingekort, lekken };
}

/**
 * Sommige pagina's zijn van kop tot staart een uitwerking. Die dragen in hun frontmatter
 * <meta name="zss-opl-pagina"> en worden in hun geheel vergrendeld. Zo'n pagina in een
 * callout wikkelen werkt niet: bij twee koppen van hetzelfde niveau splitst Quarto de
 * body in zustersecties en valt de helft buiten het slot.
 */
function zoekVolledigePagina(html) {
  if (!html.includes('<meta name="zss-opl-pagina"')) return null;
  const mainOpen = /<main\b[^>]*>/i.exec(html);
  const mainEinde = html.indexOf("</main>");
  if (!mainOpen || mainEinde === -1) return null;

  let start = mainOpen.index + mainOpen[0].length;
  // De titelbalk zelf mag blijven staan, die verklapt niets.
  const kop = html.indexOf("</header>", start);
  if (kop !== -1 && kop < mainEinde) start = kop + "</header>".length;

  const inhoud = html.slice(start, mainEinde);
  if (inhoud.includes("data-opl=")) return null;
  return { start, einde: mainEinde, inhoud };
}

/**
 * Haalt uit "Op deze pagina" de items weg die naar een kop binnen een oplossing wijzen.
 * Dat lost twee dingen op: die koppen verklappen de opbouw van het antwoord, en hun
 * links wijzen na het vergrendelen naar een anker dat niet meer bestaat.
 */
function kuisToc(html, ankers) {
  const navStart = html.search(/<nav\b[^>]*id="TOC"/i);
  if (navStart === -1) return html;

  let uit = html;
  let bezig = true;
  while (bezig) {
    bezig = false;
    const navEinde = uit.indexOf("</nav>", navStart);
    if (navEinde === -1) break;

    for (const anker of ankers) {
      const link = uit.indexOf(`href="#${anker}"`, navStart);
      if (link === -1 || link > navEinde) continue;

      const liStart = uit.lastIndexOf("<li", link);
      if (liStart === -1 || liStart < navStart) continue;

      const re = /<(\/?)li\b[^>]*>/gi;
      re.lastIndex = liStart;
      let diepte = 0;
      let liEinde = -1;
      let m;
      while ((m = re.exec(uit)) !== null) {
        diepte += m[1] === "/" ? -1 : 1;
        if (diepte === 0) {
          liEinde = re.lastIndex;
          break;
        }
      }
      if (liEinde === -1) continue;

      uit = uit.slice(0, liStart) + uit.slice(liEinde);
      bezig = true;
      break;
    }
  }

  // Lijsten die door het opkuisen leeg achterblijven, mogen weg.
  let vorig;
  do {
    vorig = uit;
    uit = uit.replace(/<ul\b[^>]*>\s*<\/ul>/gi, "");
  } while (uit !== vorig);

  return uit;
}

function htmlBestanden(map) {
  const uit = [];
  for (const naam of readdirSync(map)) {
    if (naam === "site_libs" || naam === ".quarto") continue;
    const pad = join(map, naam);
    if (statSync(pad).isDirectory()) uit.push(...htmlBestanden(pad));
    else if (naam.endsWith(".html")) uit.push(pad);
  }
  return uit;
}

async function main() {
  const args = process.argv.slice(2);
  const map = args.find((a) => !a.startsWith("--"));
  const codeIdx = args.indexOf("--code");
  const code =
    codeIdx !== -1 ? args[codeIdx + 1] : process.env.OPLOSSING_SLEUTEL;

  if (!map) {
    console.error("Gebruik: node scripts/oplossingen-lock.mjs <build-map> [--code <sleutel>]");
    process.exit(1);
  }
  if (!code) {
    console.error(
      "Geen sleutel. Geef --code mee of zet OPLOSSING_SLEUTEL.\n" +
        "Zonder sleutel stopt dit script bewust, zodat een build nooit stilletjes\n" +
        "alle oplossingen open publiceert."
    );
    process.exit(1);
  }

  const salt = webcrypto.getRandomValues(new Uint8Array(16));
  const sleutel = await maakSleutel(code, salt);
  const saltB64 = b64(salt);
  const canarie = await versleutel(sleutel, CANARIE);
  const metas =
    `<meta name="zss-opl-salt" content="${saltB64}">\n` +
    `<meta name="zss-opl-check" content="${canarie}">\n`;

  let bestanden = 0;
  let oplossingen = 0;
  const perPagina = new Map();
  const restanten = [];

  for (const pad of htmlBestanden(map)) {
    const origineel = await readFile(pad, "utf8");
    const heelDeBladzijde = zoekVolledigePagina(origineel);
    const gevonden = heelDeBladzijde
      ? [heelDeBladzijde]
      : zoekOplossingen(origineel);

    // De posities in `gevonden` gelden voor `origineel`, dus eerst knippen en pas daarna
    // iets aan de <head> toevoegen. Andersom schuift alles op en belandt de knip midden
    // in een tag.
    let html = origineel;

    if (gevonden.length > 0) {
      const ankers = new Set();
      const tekst = [];
      for (const { inhoud } of gevonden) {
        for (const m of inhoud.matchAll(/\bid="([^"]+)"/g)) ankers.add(m[1]);
        const plat = platteTekst(inhoud);
        if (plat) tekst.push(plat);
      }
      const groepen = new Set();
      for (const stuk of tekst) for (const g of woordgroepen(stuk)) groepen.add(g);
      const relatief = pad.slice(map.length).replace(/^[\\/]/, "").replace(/\\/g, "/");
      perPagina.set(relatief, { ankers, tekst, groepen });

      // Van achter naar voor vervangen, zodat de eerder gevonden posities blijven kloppen.
      for (let i = gevonden.length - 1; i >= 0; i -= 1) {
        const { start, einde, inhoud } = gevonden[i];
        const payload = await versleutel(sleutel, inhoud);
        const klasse = heelDeBladzijde ? "opl-slot opl-slot-pagina" : "opl-slot";
        const vervanging = `\n<div class="${klasse}" data-opl="${payload}">\n${MELDING}\n</div>\n`;
        html = html.slice(0, start) + vervanging + html.slice(einde);
      }
      html = kuisToc(html, ankers);
      bestanden += 1;
      oplossingen += gevonden.length;

      // Nacontrole op de pagina zelf: blijft er nog een herkenbaar stuk oplossing staan?
      // Een enkele treffer is meestal onschuldig (een opgave die dezelfde zin gebruikt als
      // haar uitwerking); een reeks treffers wijst op inhoud die buiten het slot viel.
      const overblijft = platteTekst(html);
      let raak = 0;
      const voorbeelden = [];
      for (const stuk of tekst) {
        const w = stuk.split(" ");
        for (let i = 0; i + GROEP <= w.length; i += GROEP) {
          const groep = w.slice(i, i + GROEP).join(" ");
          if (overblijft.includes(groep)) {
            raak += 1;
            if (voorbeelden.length < 3) voorbeelden.push(groep);
          }
        }
      }
      if (raak > 0) restanten.push({ pagina: relatief, raak, voorbeelden });
    }

    // Elke pagina krijgt het salt en de controlewaarde, ook pagina's zonder oplossingen.
    // Zo werkt een sleutellink naar het overzicht net zo goed als een link naar een practicum.
    if (!html.includes('<meta name="zss-opl-salt"')) {
      html = html.replace("</head>", `${metas}</head>`);
    }

    if (html !== origineel) await writeFile(pad, html, "utf8");
  }

  if (oplossingen === 0) {
    console.error("Geen enkele oplossing gevonden. Is de build wel gerenderd?");
    process.exit(1);
  }

  const zoek = await kuisZoekindex(map, perPagina);
  console.log(
    `Vergrendeld: ${oplossingen} oplossingen in ${bestanden} bestanden onder ${map}.\n` +
      `Zoekindex: ${zoek.verwijderd} resultaten verwijderd, ${zoek.ingekort} ingekort.`
  );
  restanten.sort((a, b) => b.raak - a.raak);
  if (restanten.length > 0) {
    console.warn("\nPagina's waar nog oplossingstekst in de HTML staat, nakijken:");
    for (const r of restanten.slice(0, 10)) {
      console.warn(`  ${r.pagina}: ${r.raak} woordgroepen`);
      for (const v of r.voorbeelden) console.warn(`      ${JSON.stringify(v)}`);
    }
    if (restanten.length > 10) console.warn(`  ... en ${restanten.length - 10} pagina's meer`);
  }
  if (zoek.lekken && zoek.lekken.length > 0) {
    console.error("\nLet op: er staat nog oplossingstekst in de zoekindex:");
    for (const l of zoek.lekken.slice(0, 5)) {
      console.error(`  ${l.pagina}: ${l.raak} woordgroepen`);
      for (const v of l.voorbeelden) console.error(`      ${JSON.stringify(v)}`);
    }
    if (zoek.lekken.length > 5) console.error(`  ... en ${zoek.lekken.length - 5} pagina's meer`);
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
