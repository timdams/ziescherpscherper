// H3 - {number:F2} ontleed: expressie, dubbelpunt, format specifier, en wat er
// met 12.345 gebeurt.
// Draaien vanuit de imagegen-map:  node formatspec.js
const { createCanvas, C } = require('./excal');
const { tokens } = require('./ehelpers');

const c = createCanvas(1500, 820);

// ---------- ballonnen ----------
const bTop = 90, bH = 125, tgt = 395;
c.bubble(320, bTop, 260, bH, ['expressie'], 640, tgt, 40);
c.bubble(760, bTop, 420, bH, ['dubbelpunt:', 'hier begint de opmaak'], 800, tgt, 38);
c.bubble(1210, bTop, 320, bH, ['format specifier'], 905, tgt, 40);

// ---------- de accolades ----------
tokens(c, 470, [
  ['{', 470], ['number', 640], [':', 800, { color: C.RED_DARK }], ['F2', 905, { color: C.RED_DARK }], ['}', 1000],
], 84);

// ---------- wat ermee gebeurt ----------
const Y = 620, H = 110;
c.txt(370, Y - 44, 'number', 34, C.RED_DARK, 700);
c.box3d(250, Y, 240, H, '12.345', { size: 56 });
c.arrow(520, Y + H / 2, 900, Y + H / 2, { stroke: C.RED, strokeWidth: 2.6, head: 16 });
c.txt(710, Y + H / 2 - 24, 'F2', 40, C.RED_DARK, 700);
c.txt(710, Y + H / 2 + 52, 'afgerond, niet afgekapt', 32, C.GRAY, 400);
c.cell(930, Y, 240, H, '12.35', { size: 56 });

c.save('.', 'formatspec', '');
