// H3 - + met strings en getallen: van links naar rechts, en de linkse operand
// bepaalt het type. Drie regels uit de cursustekst, stap voor stap.
// Draaien vanuit de imagegen-map:  node volgorde.js
const { createCanvas, C } = require('./excal');
const { tokens, ring } = require('./ehelpers');

const c = createCanvas(1400, 800);

const SZ = 60, R = C.RED_DARK;
const A = { stroke: C.RED, strokeWidth: 2.4, head: 15 };

// rij: y-basislijn, stap 1 tokens + ring, stap 2 tokens + ring, resultaat
function rij(y, s1, r1, s2, r2, res, l1, l2) {
  tokens(c, y, s1, SZ);
  ring(c, r1[0], y - 20, r1[1], 96);
  c.arrow(490, y - 20, 585, y - 20, A);
  c.txt(538, y + 36, l1, 28, R, 700);
  tokens(c, y, s2, SZ);
  ring(c, r2[0], y - 20, r2[1], 96);
  c.arrow(925, y - 20, 1045, y - 20, A);
  c.txt(985, y + 36, l2, 28, R, 700);
  c.cell(1075, y - 68, 200, 96, res, { size: 56 });
}

rij(140,
  [['"1"', 130, { color: R }], ['+', 215], ['1', 280], ['+', 360], ['1', 425]], [205, 240],
  [['"11"', 690, { color: R }], ['+', 790], ['1', 855]], [772, 270],
  '"111"', 'string + int', 'string + int');

c.line(80, 260, 1320, 260, { stroke: C.GRAY, strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });

rij(400,
  [['1', 130], ['+', 215], ['1', 280], ['+', 360], ['"1"', 435, { color: R }]], [205, 240],
  [['2', 690], ['+', 765], ['"1"', 850, { color: R }]], [772, 270],
  '"21"', 'int + int', 'int + string');

c.line(80, 520, 1320, 520, { stroke: C.GRAY, strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });

rij(660,
  [['"1"', 130, { color: R }], ['+', 215], ['(1 + 1)', 355]], [355, 220],
  [['"1"', 690, { color: R }], ['+', 780], ['2', 845]], [772, 270],
  '"12"', 'haakjes eerst', 'string + int');

c.save('.', 'volgorde', '');
