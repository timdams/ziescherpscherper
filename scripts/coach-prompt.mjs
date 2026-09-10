#!/usr/bin/env node
/**
 * Zet een coach-knop bij elke oefening in een gerenderde oefeningen-build.
 *
 * Werkt NA `quarto render oefeningen/`, op de klaargemaakte HTML. Per hoofdstukmap met een
 * bijhorend databestand in oefeningen/_coach/ krijgt elke oefening (elke h1 op de pagina)
 * een knop. Achter die knop zit een prompt waarmee een A.I. de student coacht zonder de
 * oplossing te geven. De prompt bestaat uit drie stukken:
 *
 *   1. het sjabloon met de coachregels        -> oefeningen/_coach/_prompt.md
 *   2. de leerstofgrens van het hoofdstuk     -> oefeningen/_coach/<map>.md, deel "Leerstof"
 *   3. de opgave                              -> uit de gerenderde pagina zelf
 *      + aanpak en valkuilen                  -> oefeningen/_coach/<map>.md, deel "Oefeningen"
 *
 * De oplossingen worden er bewust uit geknipt: de student ziet de prompt die hij plakt, dus
 * alles wat erin staat is meteen weggegeven. Draai dit script na oplossingen-lock.mjs, dan
 * kan er ook per ongeluk geen oplossing in belanden.
 *
 * Gebruik:
 *   node scripts/coach-prompt.mjs build/oefeningen
 *
 * Het script is idempotent: een tweede keer draaien over dezelfde build doet niets.
 */

import { readFile, writeFile } from "node:fs/promises";
import { readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, sep, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HIER = dirname(fileURLToPath(import.meta.url));
const COACHMAP = join(HIER, "..", "oefeningen", "_coach");
const MERK = "zss-coach-data";
const ALKLAAR = Symbol("pagina had de knoppen al");

// ---------------------------------------------------------------- markdown lezen

/**
 * Leest een coach-databestand. Verwacht twee delen op niveau 1 ("# Leerstof" en
 * "# Oefeningen"), met daarin koppen van niveau 2 en 3. Bewust een minimale parser:
 * het formaat moet leesbaar blijven in de editor, niet uitbreidbaar zijn.
 */
function leesCoachData(tekst) {
  const zonderComment = tekst.replace(/<!--[\s\S]*?-->/g, "");
  const data = { kent: "", kentniet: "", oefeningen: new Map() };

  let deel = null;
  let oefening = null;
  let vak = null;
  const regels = zonderComment.split(/\r?\n/);

  const zetVak = (naam) => {
    vak = naam;
    if (oefening && naam && !oefening[naam]) oefening[naam] = [];
  };

  for (const regel of regels) {
    const n1 = /^# +(.*\S)\s*$/.exec(regel);
    if (n1) {
      deel = n1[1].toLowerCase();
      oefening = null;
      vak = null;
      continue;
    }
    const n2 = /^## +(.*\S)\s*$/.exec(regel);
    if (n2) {
      if (deel === "leerstof") {
        const kop = n2[1].toLowerCase();
        vak = kop.includes("niet") ? "kentniet" : "kent";
        oefening = null;
      } else if (deel === "oefeningen") {
        oefening = { titel: n2[1], nota: [], aanpak: [], valkuilen: [] };
        data.oefeningen.set(normaliseer(n2[1]), oefening);
        vak = null;
      }
      continue;
    }
    const n3 = /^### +(.*\S)\s*$/.exec(regel);
    if (n3 && oefening) {
      const kop = n3[1].toLowerCase();
      zetVak(kop.startsWith("nota") ? "nota" : kop.startsWith("aanpak") ? "aanpak" : "valkuilen");
      continue;
    }

    if (deel === "leerstof" && (vak === "kent" || vak === "kentniet")) {
      data[vak] += regel + "\n";
    } else if (oefening && vak) {
      oefening[vak].push(regel);
    }
  }

  data.kent = data.kent.trim();
  data.kentniet = data.kentniet.trim();
  for (const oef of data.oefeningen.values()) {
    for (const naam of ["nota", "aanpak", "valkuilen"]) {
      oef[naam] = oef[naam].join("\n").trim();
    }
  }
  return data;
}

/** Titels vergelijken zonder te struikelen over (*Essential*), hoofdletters of streepjes. */
function normaliseer(titel) {
  return titel
    .replace(/\([^)]*\)/g, " ")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

// ---------------------------------------------------------------- html naar tekst

const ENTITEITEN = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&apos;": "'",
  "&nbsp;": " ",
  "&hellip;": "...",
  "&mdash;": "-",
  "&ndash;": "-",
  "&eacute;": "é",
  "&egrave;": "è",
  "&euml;": "ë",
  "&euro;": "€",
};

function ontsmet(tekst) {
  return tekst
    .replace(/&(amp|lt|gt|quot|#39|apos|nbsp|hellip|mdash|ndash|eacute|egrave|euml|euro);/g, (m) => ENTITEITEN[m])
    .replace(/&#(\d+);/g, (m, code) => String.fromCharCode(Number(code)));
}

/**
 * Zoekt vanaf de openende tag op startIdx de bijhorende sluittag. Telt div en section samen,
 * net zoals oplossingen-lock.mjs: code in de pagina is ge-escaped, dus een letterlijke "<div"
 * binnen een codeblok bestaat niet.
 */
function sluitendeTag(html, startIdx) {
  const re = /<(\/?)(?:div|section)\b[^>]*?(\/?)>/gi;
  re.lastIndex = startIdx;
  let diepte = 0;
  let m;
  while ((m = re.exec(html)) !== null) {
    if (m[1] === "/") {
      diepte -= 1;
      if (diepte === 0) return m.index + m[0].length;
    } else if (m[2] !== "/") {
      diepte += 1;
    }
  }
  return -1;
}

/** Knipt de oplossing en de lessen-callouts weg. Wat overblijft is de opgave. */
function zonderOplossingen(html) {
  const re = /<div\b[^>]*class="[^"]*\bcallout\b[^"]*"[^>]*title="([^"]*)"[^>]*>/gi;
  const stukken = [];
  let m;
  while ((m = re.exec(html)) !== null) {
    const titel = ontsmet(m[1]).toLowerCase();
    if (!/oplossing|les\(sen\)|lessen uit/.test(titel)) continue;
    const einde = sluitendeTag(html, m.index);
    if (einde === -1) continue;
    stukken.push([m.index, einde]);
    re.lastIndex = einde;
  }
  let uit = html;
  for (const [van, tot] of stukken.reverse()) {
    uit = uit.slice(0, van) + uit.slice(tot);
  }
  return uit;
}

function htmlNaarTekst(html) {
  html = html.replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, " ");
  const codeblokken = [];
  let t = html.replace(/<pre\b[\s\S]*?<\/pre>/gi, (blok) => {
    const taal = /\b(java|csharp|cs|c-sharp)\b/i.test(blok) ? "csharp" : "text";
    const inhoud = ontsmet(blok.replace(/<[^>]*>/g, "")).replace(/\s+$/, "");
    codeblokken.push("```" + taal + "\n" + inhoud + "\n```");
    return `@@CODE${codeblokken.length - 1}@@`;
  });

  t = t.replace(/<img\b[^>]*alt="([^"]*)"[^>]*>/gi, (m, alt) => (alt.trim() ? `[afbeelding: ${alt}]` : "[afbeelding]"));
  t = t.replace(/<img\b[^>]*>/gi, "[afbeelding]");
  t = t.replace(/<br\s*\/?>/gi, "\n");
  t = t.replace(/<h([2-6])\b[^>]*>/gi, (m, niveau) => "\n" + "#".repeat(Number(niveau)) + " ");
  t = t.replace(/<li\b[^>]*>/gi, "\n- ");
  t = t.replace(/<\/(th|td)>/gi, " | ");
  t = t.replace(/<\/(p|div|section|li|tr|h[1-6]|blockquote|table|ul|ol)>/gi, "\n");
  t = t.replace(/<[^>]*>/g, "");
  t = ontsmet(t);

  t = t
    .split("\n")
    .map((regel) => regel.replace(/[ \t]+$/, "").replace(/^\s*\|\s*$/, ""))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return t.replace(/@@CODE(\d+)@@/g, (m, i) => "\n" + codeblokken[Number(i)] + "\n");
}

// ---------------------------------------------------------------- pagina bewerken

const KNOP = (id) =>
  `<button type="button" class="coach-knop" data-coach="${id}" title="Laat een A.I. je coachen bij deze oefening">` +
  `<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" focusable="false">` +
  `<path fill="currentColor" d="M8 1 1 4.2l7 3.2 7-3.2L8 1Zm0 7.6L3.4 6.5v2.8C3.4 10.9 5.5 12 8 12s4.6-1.1 4.6-2.7V6.5L8 8.6Z"/>` +
  `<path fill="currentColor" d="M14.4 5.6v4.1h1.1V5.1l-1.1.5Z"/></svg> Coach</button>`;

function bewerkPagina(html, coach, meldingen, pagina) {
  // coach.html noemt dit merk ook, dus zoeken we specifiek naar het gegevensblok zelf.
  if (html.includes(`id="${MERK}" type="application/json"`)) return ALKLAAR;

  const sectieRe = /<section id="([^"]+)" class="level1">/g;
  const secties = [];
  let m;
  while ((m = sectieRe.exec(html)) !== null) {
    secties.push({ id: m[1], start: m.index });
  }
  if (secties.length === 0) return null;

  // De laatste sectie loopt tot het einde van de inhoud, niet tot het einde van het bestand:
  // daarachter staan de voettekst en de scripts van de pagina.
  const grensMain = html.indexOf("</main>");
  const grens = grensMain === -1 ? html.length : grensMain;

  const oefeningen = {};
  const injecties = [];

  for (let i = 0; i < secties.length; i++) {
    const start = secties[i].start;
    const einde = i + 1 < secties.length ? secties[i + 1].start : grens;
    const blok = html.slice(start, einde);

    const kop = /<h1\b[^>]*>([\s\S]*?)<\/h1>/.exec(blok);
    if (!kop) continue;
    const titel = ontsmet(kop[1].replace(/<[^>]*>/g, "")).replace(/\s+/g, " ").trim();
    const sleutel = normaliseer(titel);
    const gegevens = coach.oefeningen.get(sleutel);
    if (!gegevens) {
      meldingen.push(`geen coach-data voor "${titel}" (${pagina})`);
      continue;
    }
    gegevens.gebruikt = true;

    const opgave = htmlNaarTekst(zonderOplossingen(blok.slice(kop.index + kop[0].length)));
    if (!opgave) {
      meldingen.push(`lege opgave voor "${titel}" (${pagina})`);
      continue;
    }

    const achtergrond = [
      gegevens.nota && `Over deze oefening: ${gegevens.nota}`,
      gegevens.aanpak && `Bedoelde aanpak:\n${gegevens.aanpak}`,
      gegevens.valkuilen && `Waar het meestal misloopt:\n${gegevens.valkuilen}`,
    ]
      .filter(Boolean)
      .join("\n\n");

    oefeningen[secties[i].id] = { titel, opgave, achtergrond };
    injecties.push({ positie: start + kop.index + kop[0].length - "</h1>".length, id: secties[i].id });
  }

  if (injecties.length === 0) return null;

  let uit = html;
  for (const injectie of injecties.reverse()) {
    uit = uit.slice(0, injectie.positie) + KNOP(injectie.id) + uit.slice(injectie.positie);
  }

  const lading = {
    hoofdstuk: coach.hoofdstuk,
    kent: coach.kent,
    kentniet: coach.kentniet,
    sjabloon: coach.sjabloon,
    oefeningen,
  };
  const script =
    `<script id="${MERK}" type="application/json">` +
    JSON.stringify(lading).replace(/</g, "\\u003c") +
    `</script>\n`;

  const sluit = uit.lastIndexOf("</body>");
  return sluit === -1 ? uit + script : uit.slice(0, sluit) + script + uit.slice(sluit);
}

// ---------------------------------------------------------------- lopen

function alleBestanden(map) {
  const uit = [];
  for (const naam of readdirSync(map)) {
    const pad = join(map, naam);
    if (statSync(pad).isDirectory()) uit.push(...alleBestanden(pad));
    else if (naam.endsWith(".html")) uit.push(pad);
  }
  return uit;
}

async function main() {
  const doel = process.argv[2] || join("build", "oefeningen");
  if (!existsSync(doel)) {
    console.error(`Map ${doel} bestaat niet. Render eerst de oefeningen.`);
    process.exit(1);
  }

  const sjabloon = (await readFile(join(COACHMAP, "_prompt.md"), "utf8"))
    .replace(/^<!--[\s\S]*?-->\s*/, "")
    .trim();

  const perHoofdstuk = new Map();
  const overgeslagen = new Set();
  const meldingen = [];
  let knoppen = 0;
  let paginas = 0;

  for (const pad of alleBestanden(doel)) {
    const relatief = relative(doel, pad);
    const map = relatief.split(sep)[0];
    if (!map || map.endsWith(".html")) continue;

    if (!perHoofdstuk.has(map)) {
      const bron = join(COACHMAP, `${map}.md`);
      if (!existsSync(bron)) {
        perHoofdstuk.set(map, null);
      } else {
        const data = leesCoachData(await readFile(bron, "utf8"));
        data.hoofdstuk = (/^(\d+)/.exec(map) || [, "?"])[1];
        data.sjabloon = sjabloon;
        perHoofdstuk.set(map, data);
      }
    }
    const coach = perHoofdstuk.get(map);
    if (!coach) continue;

    const html = await readFile(pad, "utf8");
    const nieuw = bewerkPagina(html, coach, meldingen, relatief);
    if (nieuw === ALKLAAR) {
      overgeslagen.add(map);
      continue;
    }
    if (!nieuw) continue;
    await writeFile(pad, nieuw, "utf8");
    paginas += 1;
    knoppen += (nieuw.match(/class="coach-knop"/g) || []).length;
  }

  // Een hoofdstuk waarvan een pagina al bewerkt was, zeggen we niets over: de titels die
  // daar horen bij een knop die er al staat.
  for (const [map, coach] of perHoofdstuk) {
    if (!coach || overgeslagen.has(map)) continue;
    for (const [, oef] of coach.oefeningen) {
      if (!oef.gebruikt) meldingen.push(`coach-data voor "${oef.titel}" (${map}.md) hoort bij geen enkele oefening`);
    }
  }

  for (const melding of meldingen) console.warn(`  let op: ${melding}`);
  console.log(`Coach-knop gezet bij ${knoppen} oefening(en) op ${paginas} pagina('s).`);
}

main().catch((fout) => {
  console.error(fout);
  process.exit(1);
});
