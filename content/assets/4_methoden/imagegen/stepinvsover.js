// H7 - stepinvsover: bij step over blijf je in Main, bij step in beland je in Verdubbel
// Draaien vanuit de imagegen-map:  node stepinvsover.js
// Let op: Caveat heeft geen [ en ] glyph, vandaar Main() zonder string[] args.
const { createCanvas, C } = require('./excal');
const { codebox } = require('./mhelpers');

const c = createCanvas(1620, 780);
const RD = C.RED_DARK;

const BW = 700, BH = 440, BY = 170, CS = 30, PAD = 64;
const regels = [
  'static void Main()',
  '{',
  { t: 'int getal = 5;', indent: 30 },
  { t: 'int dubbel = Verdubbel(getal);', indent: 30 },
  { t: 'Console.WriteLine(dubbel);', indent: 30 },
  '}',
  '',
  'static int Verdubbel(int getal)',
  '{',
  { t: 'return getal * 2;', indent: 30 },
  '}',
];

// basislijn van coderegel i binnen een codebox die op BY start
const lijn = i => BY + 14 + CS + i * CS * 1.18;

function paneel(x, kop, naarLijn, ctrlX, ctrlY, eindX, label) {
  c.txt(x + BW / 2, 100, kop, 44, RD, 700);
  codebox(c, x, BY, BW, BH, null, regels, { codeSize: CS, pad: PAD });

  // breakpoint: hier staat de uitvoer gepauzeerd
  c.circle(x + 32, lijn(3) - 10, 24, { fill: C.RED, fillStyle: 'solid', stroke: C.RED, strokeWidth: 1.6 });

  c.carrow(x + 470, lijn(3) - 10, x + ctrlX, ctrlY, x + eindX, lijn(naarLijn) - 8,
    { stroke: C.RED, strokeWidth: 2.6, head: 16, roughness: 1 });

  c.lines(x + BW / 2, 680, label, 34, RD, 700, 'middle', 1.15);
}

paneel(60, 'step over', 4, 630, lijn(3) + 16, 445,
  ['de methode draait wel,', 'maar je stapt er niet in']);

paneel(860, 'step in', 9, 660, (lijn(3) + lijn(9)) / 2, 365,
  ['je stapt binnen in Verdubbel en', 'gaat daar lijn per lijn verder']);

c.save(__dirname, 'stepinvsover', '');
