// H3 - string interpolation als invulblad: de accolades zijn lege vakjes waar de
// waarde van de variabelen in terechtkomt.
// Draaien vanuit de imagegen-map:  node interpolatie.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1350, 760);

// ---------- de twee variabelen ----------
const BW = 300, BH = 150, BY = 110;
function variabele(cx, code, literal, waarde) {
  c.txtSegs(cx, 68, [
    { t: code, color: C.GRAY, weight: 500 },
    { t: literal, color: C.RED_DARK, weight: 700 },
    { t: ';', color: C.GRAY, weight: 500 },
  ], 34, 'middle');
  c.box3d(cx - BW / 2, BY, BW, BH, waarde, { size: 60 });
}
variabele(635, 'string naam = ', '"Finkelstein"', '"Finkelstein"');
variabele(995, 'int leeftijd = ', '13', '13');

// ---------- de code met lege vakjes ----------
const CY = 400, CH = 90, SZ = 40;
const S1 = { x: 520, w: 230 }, S2 = { x: 940, w: 110 };
const tY = CY + CH / 2 + SZ * 0.34;

c.txtSegs(S1.x - 12, tY, [
  { t: 'string zin = ', color: C.GRAY, weight: 500 },
  { t: '$', color: C.RED, weight: 700 },
  { t: '"Ik ben ', color: C.GRAY, weight: 500 },
], SZ, 'end');
c.cell(S1.x, CY, S1.w, CH, '{naam}', { size: SZ });
c.txt((S1.x + S1.w + S2.x) / 2, tY, 'en ik ben', SZ, C.GRAY, 500);
c.cell(S2.x, CY, S2.w, CH, '{leeftijd}', { size: 32 });
c.txt(S2.x + S2.w + 12, tY, 'jaar.";', SZ, C.GRAY, 500, 'start');

// pijlen van de variabelen naar de vakjes
const A = { stroke: C.RED, strokeWidth: 2.4, head: 15 };
c.arrow(635, BY + BH + 8, 635, CY - 12, A);
c.arrow(995, BY + BH + 8, 995, CY - 12, A);

// ---------- het resultaat ----------
const RY = 600, rY = RY + CH / 2 + SZ * 0.34;
c.arrow(785, CY + CH + 10, 785, RY - 14, A);
c.txt(805, 555, 'ingevuld', 32, C.RED_DARK, 700, 'start');

c.txtSegs(S1.x - 12, rY, [
  { t: 'zin', color: C.RED_DARK, weight: 700 },
  { t: ' = "Ik ben ', color: C.GRAY, weight: 500 },
], SZ, 'end');
c.rect(S1.x, RY, S1.w, CH);
c.txt(S1.x + S1.w / 2, rY, 'Finkelstein', SZ, C.RED_DARK, 700);
c.txt((S1.x + S1.w + S2.x) / 2, rY, 'en ik ben', SZ, C.GRAY, 500);
c.rect(S2.x, RY, S2.w, CH);
c.txt(S2.x + S2.w / 2, rY, '13', SZ, C.RED_DARK, 700);
c.txt(S2.x + S2.w + 12, rY, 'jaar."', SZ, C.GRAY, 500, 'start');

c.save('.', 'interpolatie', '');
