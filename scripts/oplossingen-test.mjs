/**
 * Test de ontgrendel-JS van oefeningen/oplossingen.html tegen een echt vergrendelde pagina.
 *
 * Draai eerst:
 *   quarto render oefeningen/
 *   node scripts/oplossingen-lock.mjs build/oefeningen --code testsleutel123
 * en dan:
 *   node scripts/oplossingen-test.mjs [pad/naar/pagina.html]
 */
import { readFile } from "node:fs/promises";
import { webcrypto } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import { JSDOM } from "jsdom";

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const PAGINA = process.argv[2] || "build/oefeningen/14_advancedovererving/A_Practica.html";
const SLEUTEL = "testsleutel123";

const bron = await readFile(join(REPO, "oefeningen/oplossingen.html"), "utf8");
const script = bron.replace(/^[\s\S]*?<script>/, "").replace(/<\/script>[\s\S]*$/, "");
const html = await readFile(join(REPO, PAGINA), "utf8");

async function draai(zoekterm, opslag) {
  const dom = new JSDOM(html, {
    url: "https://www.ziescherp.be/oefeningen/test.html" + zoekterm,
    runScripts: "outside-only",
    pretendToBeVisual: true,
  });
  const w = dom.window;
  Object.defineProperty(w, "crypto", { value: webcrypto, configurable: true });
  w.TextEncoder = TextEncoder;
  w.TextDecoder = TextDecoder;
  if (opslag) w.localStorage.setItem("zss-oplossingen-sleutel", opslag);

  w.eval(script);
  await new Promise((r) => setTimeout(r, 400));
  return w;
}

const tel = (w) => w.document.querySelectorAll("[data-opl]").length;
// Niet op de HTML-tekst zoeken: het ontgrendelscript staat zelf onderaan de body en
// vernoemt die klassenamen, dus dat geeft altijd een treffer.
const heeft = (w, sel) => w.document.querySelector(sel) !== null;

let fouten = 0;
function check(naam, ok, extra = "") {
  console.log(`${ok ? "  ok  " : "  FOUT"}  ${naam}${extra ? "  (" + extra + ")" : ""}`);
  if (!ok) fouten += 1;
}

const aantalSlots = (html.match(/data-opl=/g) || []).length;
console.log(`Pagina: ${PAGINA} (${aantalSlots} vergrendelde oplossingen)\n`);

console.log("1. zonder sleutel");
{
  const w = await draai("");
  check("oplossingen blijven dicht", tel(w) === aantalSlots, `${tel(w)} slots`);
  check("geen balk", !heeft(w, ".opl-balk"));
  check("geen foutmelding", !heeft(w, ".opl-fout"));
}

console.log("\n2. juiste sleutel via de link");
{
  const w = await draai("?sleutel=" + SLEUTEL);
  check("alle slots ontgrendeld", tel(w) === 0, `${tel(w)} slots over`);
  check("sleutel onthouden", w.localStorage.getItem("zss-oplossingen-sleutel") === SLEUTEL);
  check("sleutel uit de adresbalk", !w.location.search.includes("sleutel"), w.location.search || "(leeg)");
  check("balk getoond", heeft(w, ".opl-balk"));
  check("inhoud terug", heeft(w, "main .sourceCode"));
}

console.log("\n3. verkeerde sleutel via de link");
{
  const w = await draai("?sleutel=fout-fout-fout");
  check("oplossingen blijven dicht", tel(w) === aantalSlots, `${tel(w)} slots`);
  check("foutmelding getoond", heeft(w, ".opl-fout"));
  check("niets onthouden", w.localStorage.getItem("zss-oplossingen-sleutel") === null);
}

console.log("\n4. sleutel al onthouden (volgende pagina)");
{
  const w = await draai("", SLEUTEL);
  check("alle slots ontgrendeld", tel(w) === 0, `${tel(w)} slots over`);
  check("balk getoond", heeft(w, ".opl-balk"));
}

console.log("\n5. oude, ongeldige sleutel in de opslag");
{
  const w = await draai("", "verouderd");
  check("oplossingen blijven dicht", tel(w) === aantalSlots);
  check("opslag opgekuist", w.localStorage.getItem("zss-oplossingen-sleutel") === null);
  check("geen foutmelding zonder link", !heeft(w, ".opl-fout"));
}

console.log(fouten === 0 ? "\nAlles in orde." : `\n${fouten} controles mislukt.`);
process.exit(fouten === 0 ? 0 : 1);
