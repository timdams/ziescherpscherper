// H3 - char eenGetal = '7': het teken 7 staat in de doos, maar intern zit er 55 in.
// Draaien vanuit de imagegen-map:  node charalsgetal.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1560, 480);

// ---------- de char-doos met het teken erin ----------
c.box3d(170, 160, 300, 200, "'7'", { size: 96 });
c.txtSegs(320, 425, [
  { t: 'char eenGetal = ', color: C.GRAY, weight: 500 },
  { t: "'7'", color: C.RED_DARK, weight: 700 },
  { t: ';', color: C.GRAY, weight: 500 },
], 36, 'middle');

// ---------- pijl naar wat er echt in het geheugen staat ----------
c.arrow(500, 260, 770, 260, { stroke: C.RED, strokeWidth: 2.4, head: 15 });
c.txt(635, 222, 'in het geheugen', 30, C.RED_DARK, 700);

// ---------- de UNICODE-waarde ----------
c.cell(800, 175, 220, 170, '55', { size: 68 });
c.txtSegs(910, 420, [{ t: 'de UNICODE-waarde van ', color: C.GRAY, weight: 400 }, { t: "'7'", color: C.RED_DARK, weight: 700 }], 30, 'middle');

// ---------- opmerking ----------
c.bubble(1300, 70, 400, 175, ['wil je hiermee rekenen?', 'eerst converteren', '(hoofdstuk 4)'], 1045, 290, 34);

c.save('.', 'charalsgetal', '');
