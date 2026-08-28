// H5 - twee keer dezelfde variabelenaam: binnen een lopende scope kan het niet,
// na een afgesloten scope wel. De balken tonen waar elke getal leeft.
// Draaien vanuit de imagegen-map:  node gelijkenamen.js
const { createCanvas, C } = require('./excal');
const { scopebar, cross, check, codeblock, markeer } = require('./shelpers');

const c = createCanvas(1460, 640);

const SIZE = 32;              // codegrootte
const IND = 34;               // inspringing per niveau
const OPT = { size: SIZE, indent: IND };

// scheidingslijn tussen de twee panelen
c.line(709, 145, 709, 560, { strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });

// ================= links: het tweede blok zit in de eerste scope =================
const LX = 90;
const L = [
  { t: 'int getal = 0;', ind: 0, y: 185 },
  { t: '{', ind: 0, y: 239 },
  { t: 'int getal = 5;', ind: 1, y: 293 },
  { t: '}', ind: 0, y: 347 },
];
const lEind = markeer(c, LX, L[2], 14, true, OPT);
codeblock(c, LX, L, OPT);
cross(c, lEind + 42, 279);
scopebar(c, 430, 149, 359, 'scope van getal');

c.txt(359, 108, 'niet toegestaan', 38, C.RED_DARK, 700);
c.txt(359, 585, 'de naam getal is hier nog bezet', 32, C.GRAY, 600);

// ================= rechts: twee blokken na elkaar =================
const RX = 790;
const R = [
  { t: '{', ind: 0, y: 185 },
  { t: 'int getal = 0;', ind: 1, y: 239 },
  { t: '}', ind: 0, y: 293 },
  { t: '//Verder in code', ind: 0, y: 347, size: 28, weight: 500 },
  { t: '{', ind: 0, y: 401 },
  { t: 'int getal = 5;', ind: 1, y: 455 },
  { t: '}', ind: 0, y: 509 },
];
const r1 = markeer(c, RX, R[1], 14, false, OPT);
const r2 = markeer(c, RX, R[5], 14, false, OPT);
codeblock(c, RX, R, OPT);
check(c, r1 + 42, 226);
check(c, r2 + 42, 442);
scopebar(c, 1130, 203, 305, 'scope van getal');
scopebar(c, 1130, 419, 521, 'scope van getal');

c.txt(1059, 108, 'wel toegestaan', 38, C.RED_DARK, 700);
c.txt(1059, 585, 'de eerste scope is gesloten voor de tweede opent', 32, C.GRAY, 600);

c.save('.', 'gelijkenamen', '');
