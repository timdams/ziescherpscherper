// Vaardigheidsproef OOP juni 2020, opgave 2 - klassendiagram reddingswerkers.
// Vervangt 1920schema.png: zelfde klassen en leden, plus de constructor en RapportStatus van
// SpecialeBrandweer die de tekst vraagt maar het oude diagram niet toonde.
// Draaien vanuit de imagegen-map:  node schema1920.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1560, 1250);
const RIJ = 46, KOP = 110, TITEL = 48, ONDER = 22;

// Een klassevak: kop met naam en soort, dan secties met een titel en regels.
function klasse(x, y, w, naam, soort, secties, opts = {}) {
  const h = KOP + secties.reduce((som, s) => som + TITEL + s.regels.length * RIJ, 0) + ONDER;
  const rand = { stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.1 };
  if (opts.gestippeld) rand.strokeLineDash = [12, 10];
  c.rect(x, y, w, h, { fill: C.WHITE, fillStyle: 'solid', ...rand });
  c.rect(x, y, w, KOP, { fill: C.RED_LIGHT, fillStyle: 'solid', ...rand });
  c.txt(x + w / 2, y + 52, naam, 44, C.GRAY, 700);
  c.txt(x + w / 2, y + 92, soort, 30, C.GRAY, 400);
  let yy = y + KOP;
  for (const s of secties) {
    c.txt(x + 26, yy + 34, s.titel, 30, C.RED_DARK, 700, 'start');
    yy += TITEL;
    for (const r of s.regels) {
      c.txt(x + 46, yy + 32, r, 32, C.GRAY, 400, 'start');
      yy += RIJ;
    }
  }
  return { x, y, w, h, midden: x + w / 2, onder: y + h };
}

// Holle driehoek (overerving) met de punt op (x, y), naar boven wijzend.
function erft(x, y) {
  c.poly([[x, y], [x - 20, y + 36], [x + 20, y + 36]], { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1 });
}

// ---------- boven ----------
const rw = klasse(420, 40, 560, 'ReddingsWerker', 'abstracte klasse', [
  { titel: 'Properties', regels: ['RisicoGraad { get; set; } : int'] },
  { titel: 'Methoden', regels: ['RapportStatus() : string  (abstract)', 'ReddingsWerker(int risicograadIn)'] },
], { gestippeld: true });

klasse(1120, 40, 400, 'IRampGebiedResponder', 'interface', [
  { titel: 'Methoden', regels: ['Vertrek() : void'] },
]);

// ---------- midden ----------
const bw = klasse(80, 520, 540, 'Brandweer', 'klasse', [
  { titel: 'Methoden', regels: ['Brandweer(int risicograadIn)', 'RapportStatus() : string'] },
]);
const po = klasse(860, 520, 540, 'Politie', 'klasse', [
  { titel: 'Methoden', regels: ['Politie(int risicograadIn)', 'RapportStatus() : string'] },
]);

// Brandweer en Politie erven van ReddingsWerker
const knik = 460;
c.line(bw.midden, bw.y, bw.midden, knik, { strokeWidth: 2.4 });
c.line(po.midden, po.y, po.midden, knik, { strokeWidth: 2.4 });
c.line(bw.midden, knik, po.midden, knik, { strokeWidth: 2.4 });
c.line(rw.midden, knik, rw.midden, rw.onder + 36, { strokeWidth: 2.4 });
erft(rw.midden, rw.onder + 2);

// ---------- onder ----------
const sb = klasse(80, 900, 540, 'SpecialeBrandweer', 'klasse', [
  { titel: 'Methoden', regels: ['SpecialeBrandweer()', 'RapportStatus() : string', 'Vertrek() : void'] },
]);
c.line(bw.midden, sb.y, bw.midden, bw.onder + 36, { strokeWidth: 2.4 });
erft(bw.midden, bw.onder + 2);

// SpecialeBrandweer heeft de interface IRampGebiedResponder (lollipop rechts)
const ly = sb.y + 70;
c.line(sb.x + sb.w, ly, sb.x + sb.w + 62, ly, { strokeWidth: 2.4 });
c.circle(sb.x + sb.w + 90, ly, 56, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1 });
c.txt(sb.x + sb.w + 136, ly + 12, 'IRampGebiedResponder', 36, C.GRAY, 700, 'start');

c.save('.', '1920schema', 'NEW');
