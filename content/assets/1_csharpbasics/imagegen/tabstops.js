// H2 - tabstops: de cursor "hinkelt" met elke \t naar de volgende vaste tabstop.
// Draaien vanuit de imagegen-map:  node tabstops.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1600, 470);

const X0 = 130, colW = 34, BASE = 320;
const x = col => X0 + col * colW;
const stops = [8, 16, 24, 32, 40];
const digits = ['1', '2', '3', '4', '5'];

// ---------- de codestring bovenaan (input) ----------
const segs = [{ t: '"', color: C.GRAY, weight: 600 }];
for (let i = 1; i <= 5; i++) {
  segs.push({ t: '\\t', color: C.RED, weight: 700 });
  segs.push({ t: String(i), color: C.GRAY, weight: 600 });
}
segs.push({ t: '"', color: C.GRAY, weight: 600 });
c.txtSegs(810, 95, segs, 46, 'middle');

// ---------- de liniaal (baseline met tickjes) ----------
c.line(X0 - 10, BASE, x(40) + 14, BASE, { stroke: C.GRAY, strokeWidth: 1.8 });
for (let col = 0; col <= 40; col++) {
  c.line(x(col), BASE, x(col), BASE + 9, { stroke: C.GRAY, strokeWidth: 1.2, roughness: 1.1 });
}

// cursor-start op kolom 0
c.line(X0, BASE - 20, X0, BASE, { stroke: C.RED, strokeWidth: 3 });
c.txt(X0, BASE + 40, '0', 28, C.GRAY, 600);
c.txt(X0, BASE + 78, 'start', 26, C.GRAY, 500);

// ---------- tabstops + gelande cijfers ----------
stops.forEach((col, i) => {
  const xc = x(col);
  c.line(xc, 258, xc, BASE - 2, { stroke: C.RED, strokeWidth: 1.4, strokeLineDash: [8, 8], roughness: 1 });
  c.txt(xc, BASE - 8, digits[i], 46, C.GRAY, 700);
  c.txt(xc, BASE + 40, String(col), 28, C.RED_DARK, 700);
});

// ---------- de "hink"-boogjes: elke \t een sprong ----------
let prev = 0;
stops.forEach(col => {
  const xa = x(prev), xb = x(col), mid = (xa + xb) / 2;
  c.carrow(xa + 6, 250, mid, 168, xb - 6, 250, { stroke: C.RED_DARK, strokeWidth: 2.4, head: 13 });
  c.txt(mid, 158, '\\t', 34, C.RED, 700);
  prev = col;
});

c.txt(810, 425, 'de tabstops liggen vast: om de 8 posities', 30, C.GRAY, 500, 'middle');

c.save('.', 'tabstops', '');
