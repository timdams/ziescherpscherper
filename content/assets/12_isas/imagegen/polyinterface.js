/*
 * Excalidraw-stijl generator voor content/assets/12_isas/polyinterface.png
 * UML-schema: Mens (basisklasse) met subklassen Leraar/Student/Politieker/Advocaat;
 * Politieker en Advocaat implementeren de interface IVloeker (lollipop-notatie).
 * Zie CLAUDE.md > "Afbeeldingen moderniseren".
 *
 * Run:  node polyinterface.js  ->  polyinterface.svg + polyinterfaceNEW.png
 */
const { createCanvas, C } = require('./excal');
const c = createCanvas(1500, 560);

// ---- klassedoos (wit, grijze rand, grijze vette tekst) ----
function classBox(x, y, w, h, label) {
  c.rect(x, y, w, h, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.6, roughness: 1.3, bowing: 1 });
  c.txt(x + w / 2, y + h / 2 + 15, label, 46, C.GRAY, 700);
}

// basisklasse links, subklassen onderaan
const MENS = { x: 60, y: 120, w: 230, h: 100 };
classBox(MENS.x, MENS.y, MENS.w, MENS.h, 'Mens');

const subY = 380, subH = 110;
const subs = [
  { cx: 270,  w: 200, label: 'Leraar' },
  { cx: 520,  w: 200, label: 'Student' },
  { cx: 780,  w: 220, label: 'Politieker' },
  { cx: 1050, w: 220, label: 'Advocaat' },
];
subs.forEach(s => classBox(s.cx - s.w / 2, subY, s.w, subH, s.label));

// ---- overerving: holle driehoek naar Mens + bus naar de subklassen ----
const busY = 310, riserX = MENS.x + MENS.w / 2; // 175
// holle (witte) generalisatie-driehoek in de onderkant van Mens
const tipY = MENS.y + MENS.h + 4; // net onder de doos
c.poly([[riserX, tipY], [riserX - 24, tipY + 40], [riserX + 24, tipY + 40]],
  { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.6, roughness: 1.1 });
c.line(riserX, tipY + 40, riserX, busY, { strokeWidth: 2.4 });      // verticale riser
c.line(riserX, busY, subs[3].cx, busY, { strokeWidth: 2.4 });      // horizontale bus
subs.forEach(s => c.line(s.cx, busY, s.cx, subY, { strokeWidth: 2.4 })); // drops naar elke subklasse

// ---- lollipop: geimplementeerde interface (rode cirkel + label) ----
function lollipop(cx, label) {
  c.line(cx, subY - 14, cx, subY, { strokeWidth: 2.4 });            // steeltje naar dooskop
  c.circle(cx, subY - 30, 30, { fill: C.WHITE, fillStyle: 'solid', stroke: C.RED, strokeWidth: 2.8, roughness: 1.1 });
  c.txt(cx + 26, subY - 20, label, 34, C.RED_DARK, 700, 'start');
}
lollipop(846, 'IVloeker');   // boven Politieker (rechts)
lollipop(1128, 'IVloeker');  // boven Advocaat (rechts)

// ---- interface-legende rechtsboven ----
const L = { x: 1090, y: 40, w: 350, h: 150 };
const Lcx = L.x + L.w / 2;
c.rect(L.x, L.y, L.w, L.h, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 3, roughness: 1.2, bowing: 1 });
c.txt(Lcx, L.y + 52, 'IVloeker', 44, C.RED_DARK, 700);
const it = c.txt(Lcx, L.y + 94, 'Interface met methode:', 30, C.GRAY, 400);
it.setAttribute('font-style', 'italic');
c.txt(Lcx, L.y + 134, 'Vloek()', 36, C.GRAY, 500);

c.save(__dirname, 'polyinterface', 'NEW');
