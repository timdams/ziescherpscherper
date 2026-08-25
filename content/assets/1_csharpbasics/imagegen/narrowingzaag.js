// H4 converteren - narrowing: bij (int) wordt alles na de komma weggegooid,
// er wordt niet afgerond. Twee rijen: 20.4 -> 20 en 20.9 -> 20.
// Draaien vanuit de imagegen-map:  node narrowingzaag.js
const { createCanvas, C } = require('./excal');
const { slot, bin } = require('./vhelpers');

const c = createCanvas(1200, 700);
const A = { stroke: C.RED, strokeWidth: 2.4, head: 15 };
const G = { stroke: C.GRAY, strokeWidth: 2.2, head: 15 };

// Eén rij: T = bovenkant van de rij; heel = deel voor de komma, rest = deel erna.
function rij(T, waarde, heel, rest, extra) {
  const mid = T + 75;
  slot(c, 70, T, 230, 150, 'double', waarde, { valueSize: 50 });

  c.arrow(310, mid, 440, mid, A);
  c.txt(375, mid - 18, '(int)', 30, C.RED_DARK, 700);

  // de waarde, doorgeknipt tussen het gehele deel en het deel na de komma
  c.txt(495, mid + 22, heel, 64, C.GRAY, 700);
  c.txt(592, mid + 22, rest, 64, C.RED_DARK, 700);
  c.line(543, mid - 42, 543, mid + 42, { stroke: C.RED, strokeWidth: 2.6, strokeLineDash: [10, 8], roughness: 1.2 });

  c.arrow(650, mid, 880, mid, G);
  slot(c, 900, T, 200, 150, 'int', heel, { valueSize: 50 });
  if (extra) c.txt(1000, T + 185, extra, 28, C.RED_DARK, 700);

  // het deel na de komma valt in de vuilnisbak
  c.carrow(592, mid + 40, 592, mid + 120, 592, T + 200, A);
  bin(c, 552, T + 218, 80, 75);
  c.txt(650, T + 278, 'weggegooid', 28, C.GRAY, 400, 'start');
}

rij(40, '20.4', '20', '.4');
c.line(60, 355, 1140, 355, { stroke: C.GRAY, strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });
rij(390, '20.9', '20', '.9', 'niet 21');

c.save('.', 'narrowingzaag', '');
