// H7 - oneindig: SchrijfNaam roept zichzelf aan, de stack loopt vol
// Draaien vanuit de imagegen-map:  node oneindig.js
const { createCanvas, C } = require('./excal');
const { codebox } = require('./mhelpers');

const c = createCanvas(1760, 890);
const RD = C.RED_DARK;
const FX = 900, FW = 560, FH = 110;

// ---------- de melding, linksboven ----------
c.txt(340, 210, 'de stack raakt vol', 44, RD, 700);
c.txt(340, 280, 'StackOverflowException', 48, RD, 700);
c.carrow(580, 252, 740, 210, 885, 230, { stroke: C.RED, strokeWidth: 2.4, head: 16, roughness: 1 });

// ---------- links: Main met de aanroep ----------
codebox(c, 60, 520, 560, 200, 'Main',
  [{ t: 'SchrijfNaam();', color: RD, weight: 700 }],
  { codeSize: 40, titleSize: 44, pad: 40 });
c.carrow(660, 610, 790, 650, 880, 715, { strokeWidth: 2.4, head: 16, roughness: 1 });

// ---------- de stack ----------
// het volgende frame past er niet meer bij
c.rect(FX, 180, FW, FH, { fill: C.OFFWHITE, fillStyle: 'solid', stroke: C.RED,
  strokeWidth: 2.2, roughness: 1.3, strokeLineDash: [12, 10] });
c.txt(FX + FW / 2, 180 + FH / 2 + 40 * 0.34, 'enzovoort', 40, RD, 600);

[660, 540, 420, 300].forEach(y => {
  c.rect(FX, y, FW, FH, { strokeWidth: 2.2, roughness: 1.3 });
  c.txt(FX + FW / 2, y + FH / 2 + 40 * 0.34, 'SchrijfNaam', 40, C.GRAY, 600);
});
c.txt(FX + FW / 2, 825, 'de stack', 40, C.GRAY, 700);

// ---------- rechts: de stapel groeit ----------
c.arrow(1520, 740, 1520, 200, { stroke: C.RED, strokeWidth: 2.4, head: 16 });
c.lines(1552, 420, ['elke aanroep', 'stapelt er een', 'frame bij'], 30, RD, 700, 'start', 1.2);

c.save(__dirname, 'oneindig', 'NEW');
