// H4 - Floor, Ceiling en (int) op de getallenas: welke kant gaat elke methode uit.
// Draaien vanuit de imagegen-map:  node afrondrichting.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(2260, 920);

const UNIT = 260, X0 = 1288;
const x = v => X0 + v * UNIT;
const AXL = x(-3.3), AXR = x(3.3);
const AXY = 175;
const LIGHT = '#c9c9c9';
const DOTS = [-2.7, 2.7];

// ---------- de nullijn loopt door de hele figuur ----------
c.line(X0, 95, X0, 850, { stroke: C.RED, strokeWidth: 2, roughness: 1, strokeLineDash: [13, 11] });
c.txt(X0, 890, 'nul', 34, C.RED_DARK, 700);

// ---------- de getallenas ----------
c.line(AXL, AXY, AXR, AXY, { stroke: C.GRAY, strokeWidth: 2.6, roughness: 1.2 });
for (let v = -3; v <= 3; v++) {
  c.line(x(v), AXY - 13, x(v), AXY + 13, { stroke: C.GRAY, strokeWidth: 2, roughness: 1.2 });
  c.txt(x(v), AXY + 58, String(v), 32, C.GRAY, 500);
}

c.txt(390, AXY + 12, 'de getallenas', 38, C.GRAY, 600, 'end');

// ---------- de twee getallen die we afronden ----------
DOTS.forEach(v => {
  c.circle(x(v), AXY, 22, { fill: C.RED, fillStyle: 'solid', stroke: C.RED, strokeWidth: 2 });
  c.txt(x(v), 128, String(v), 42, C.RED_DARK, 700);
  c.line(x(v), AXY + 22, x(v), 800, { stroke: LIGHT, strokeWidth: 1.6, roughness: 1, strokeLineDash: [9, 11] });
});

// ---------- een baan per methode ----------
const lanes = [
  { y: 400, name: ['Math.Floor'], note: 'richting min oneindig', col: C.GRAY,
    hops: [[-2.7, -3], [2.7, 2]] },
  { y: 590, name: ['Math.Ceiling'], note: 'richting plus oneindig', col: C.GRAY,
    hops: [[-2.7, -2], [2.7, 3]] },
  { y: 780, name: ['(int)', 'Math.Truncate'], note: 'richting nul', col: C.RED,
    hops: [[-2.7, -2], [2.7, 2]] },
];

lanes.forEach(L => {
  // lichte kopie van de as, zodat je de posities kan aflezen
  c.line(AXL, L.y, AXR, L.y, { stroke: LIGHT, strokeWidth: 1.5, roughness: 1, strokeLineDash: [11, 13] });
  for (let v = -3; v <= 3; v++)
    c.line(x(v), L.y - 8, x(v), L.y + 8, { stroke: LIGHT, strokeWidth: 1.5, roughness: 1 });

  const lbl = L.col === C.RED ? C.RED_DARK : C.GRAY;
  L.hops.forEach(h => {
    const from = x(h[0]), to = x(h[1]), dir = to > from ? 1 : -1;
    c.circle(from, L.y, 15, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 1.8 });
    c.arrow(from + dir * 12, L.y, to - dir * 8, L.y, { stroke: L.col, strokeWidth: 3, head: 15 });
    c.circle(to, L.y, 20, { fill: L.col, fillStyle: 'solid', stroke: L.col, strokeWidth: 2 });
    c.txt(to, L.y + 56, String(h[1]), 40, lbl, 700);
  });

  // naam en betekenis links van de baan
  const n = L.name.length;
  const top = L.y - (n === 1 ? 6 : 40);
  L.name.forEach((s, i) => c.txt(390, top + i * 44, s, 38, C.RED_DARK, 700, 'end'));
  c.txt(390, top + n * 44 + 2, L.note, 28, C.GRAY, 500, 'end');
});

c.save('.', 'afrondrichting', '');
