// H6 - dezelfde som-code, twee plaatsen voor de declaratie van som.
// Links staat de declaratie binnen de accolades van de while, waardoor som elke
// ronde opnieuw wordt aangemaakt op 0. Rechts staat ze ervoor en overleeft som
// alle iteraties. De balk toont hoe ver de scope van som reikt.
// Draaien vanuit de imagegen-map:  node scopeloop.js
const { createCanvas, C } = require('./excal');
const { scopebar, cross, check, codeblock, markeer } = require('./shelpers');

const c = createCanvas(1400, 740);

const SIZE = 32;              // codegrootte
const IND = 34;               // inspringing per niveau

// scheidingslijn tussen de twee panelen
c.line(720, 130, 720, 600, { strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });

// ================= links: declaratie binnen de loop =================
const LX = 70;
const L = [
  { t: 'int teller = 1;', ind: 0, y: 170 },
  { t: 'while(teller <= 10)', ind: 0, y: 224 },
  { t: '{', ind: 0, y: 278 },
  { t: 'int som = 0;', ind: 1, y: 332 },
  { t: 'som = som + teller;', ind: 1, y: 386 },
  { t: 'Console.WriteLine(som);', ind: 1, y: 440 },
  { t: 'teller++;', ind: 1, y: 494 },
  { t: '}', ind: 0, y: 548 },
];
const lEind = markeer(c, LX, L[3], 12, true, { size: SIZE, indent: IND });
codeblock(c, LX, L, { size: SIZE, indent: IND });
cross(c, lEind + 46, 322);
scopebar(c, 470, 300, 562, 'scope van som');

c.txt(330, 90, 'declaratie binnen de loop', 38, C.RED_DARK, 700);
c.txt(330, 655, 'som wordt elke ronde opnieuw aangemaakt op 0', 30, C.GRAY, 600);
c.txt(330, 700, 'op het scherm: 1  2  3  ...  10', 30, C.RED_DARK, 700);

// ================= rechts: declaratie voor de loop =================
const RX = 790;
const R = [
  { t: 'int teller = 1;', ind: 0, y: 170 },
  { t: 'int som = 0;', ind: 0, y: 224 },
  { t: 'while(teller <= 10)', ind: 0, y: 278 },
  { t: '{', ind: 0, y: 332 },
  { t: 'som = som + teller;', ind: 1, y: 386 },
  { t: 'teller++;', ind: 1, y: 440 },
  { t: '}', ind: 0, y: 494 },
  { t: 'Console.WriteLine(som);', ind: 0, y: 548 },
];
const rEind = markeer(c, RX, R[1], 12, false, { size: SIZE, indent: IND });
codeblock(c, RX, R, { size: SIZE, indent: IND });
check(c, rEind + 46, 214);
scopebar(c, 1160, 192, 562, 'scope van som');

c.txt(1050, 90, 'declaratie vóór de loop', 38, C.RED_DARK, 700);
c.txt(1050, 655, 'som leeft van vóór de loop tot erna', 30, C.GRAY, 600);
c.txt(1050, 700, 'op het scherm: 55', 30, C.RED_DARK, 700);

c.save('.', 'scopeloop', '');
