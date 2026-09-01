// H8 arrays - BinarySearch halveert de zoekruimte: kijk in het midden, gooi een helft weg,
// herhaal op wat overblijft.
// Draaien vanuit de imagegen-map:  node binarysearch.js
const { createCanvas, C, cellRow } = require('./arr');

const c = createCanvas(1800, 860);

const X = 250, CW = 280, CH = 120;
const mid = i => X + i * CW + CW / 2;

c.txt(900, 90, 'Array.BinarySearch(metingen, 224);', 46, C.RED_DARK, 700);
c.txt(900, 145, 'de array staat gesorteerd', 32, C.GRAY, 600);

// ---------- stap 1: het midden van de hele array ----------
const Y1 = 235;
[0, 1, 2, 3, 4].forEach(i => c.txt(mid(i), Y1 - 25, String(i), 30, C.GRAY, 600));
c.txt(X - 30, Y1 + CH / 2 + 13, 'stap 1', 38, C.GRAY, 700, 'end');
cellRow(c, X, Y1, CW, CH, [-6, 34], { size: 40, weight: 700 });
c.cell(X + 2 * CW, Y1, CW, CH, '156', { size: 40 });
cellRow(c, X + 3 * CW, Y1, CW, CH, [224, 1023], { size: 40, weight: 700 });

c.txt(mid(2), Y1 + CH + 48, '224 is groter dan 156, dus de hele linkerhelft valt weg', 36, C.RED_DARK, 700);

// ---------- stap 2: opnieuw het midden, van wat overblijft ----------
const Y2 = 520;
c.txt(X - 30, Y2 + CH / 2 + 13, 'stap 2', 38, C.GRAY, 700, 'end');
const weg = [-6, 34, 156];
weg.forEach((v, i) => {
  c.rect(X + i * CW, Y2, CW, CH, { fill: '#e2e2e2', fillStyle: 'solid', stroke: '#9a9a9a', strokeWidth: 2, roughness: 1.2 });
  c.txt(mid(i), Y2 + CH / 2 + 14, String(v), 40, '#9a9a9a', 700);
});
c.txt(mid(1), Y2 + CH + 52, 'deze drie zijn afgevoerd', 34, '#8a8a8a', 600);
c.cell(X + 3 * CW, Y2, CW, CH, '224', { size: 40 });
cellRow(c, X + 4 * CW, Y2, CW, CH, [1023], { size: 40, weight: 700 });

c.arrow(mid(3), Y2 + CH + 60, mid(3), Y2 + CH + 18, { stroke: C.RED, strokeWidth: 2.6, head: 14 });
c.txt(mid(3), Y2 + CH + 100, 'gevonden op index 3', 38, C.RED_DARK, 700);

c.txt(900, 812, 'twee vergelijkingen in plaats van vier', 38, C.GRAY, 600);

c.save('.', 'binarysearch', '');
