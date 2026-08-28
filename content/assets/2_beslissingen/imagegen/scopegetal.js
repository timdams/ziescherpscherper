// H5 - dezelfde code, twee plaatsen voor de declaratie van getal.
// De balk toont hoe ver de scope van getal reikt en waarom de laatste
// Console.WriteLine links niet en rechts wel mag.
// Draaien vanuit de imagegen-map:  node scopegetal.js
const { createCanvas, C } = require('./excal');
const { scopebar, cross, check, codeblock, markeer } = require('./shelpers');

const c = createCanvas(1800, 730);

const SIZE = 30;              // codegrootte
const IND = 34;               // inspringing per niveau

// scheidingslijn tussen de twee panelen
c.line(890, 140, 890, 655, { strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });

// ================= links: declaratie binnen de if =================
const LX = 70;
const L = [
  { t: 'bool iLoveCSharp = true;', ind: 0, y: 175 },
  { t: 'if (iLoveCSharp)', ind: 0, y: 245 },
  { t: '{', ind: 0, y: 297 },
  { t: 'int getal;', ind: 1, y: 349 },
  { t: 'getal = int.Parse(Console.ReadLine());', ind: 1, y: 401 },
  { t: '}', ind: 0, y: 453 },
  { t: 'Console.WriteLine(getal);', ind: 0, y: 523 },
];
const lEind = markeer(c, LX, L[6], 25, true, { size: SIZE, indent: IND });
codeblock(c, LX, L, { size: SIZE, indent: IND });
cross(c, lEind + 46, 500);
scopebar(c, 650, 315, 465, 'scope van getal');

c.txt(439, 100, 'declaratie binnen de if', 38, C.RED_DARK, 700);
c.txt(439, 690, 'getal verdwijnt bij de accolade van de if', 32, C.GRAY, 600);

// ================= rechts: declaratie voor de if =================
const RX = 960;
const R = [
  { t: 'bool iLoveCSharp = true;', ind: 0, y: 175 },
  { t: '{', ind: 0, y: 245 },
  { t: 'int getal = 0;', ind: 1, y: 297 },
  { t: 'if (iLoveCSharp)', ind: 1, y: 349 },
  { t: '{', ind: 1, y: 401 },
  { t: 'getal = int.Parse(Console.ReadLine());', ind: 2, y: 453 },
  { t: '}', ind: 1, y: 505 },
  { t: 'Console.WriteLine(getal);', ind: 1, y: 557 },
  { t: '}', ind: 0, y: 609 },
];
const rEind = markeer(c, RX, R[7], 25, false, { size: SIZE, indent: IND });
codeblock(c, RX, R, { size: SIZE, indent: IND });
check(c, rEind + 46, 534);
scopebar(c, 1570, 263, 621, 'scope van getal');

c.txt(1350, 100, 'declaratie vóór de if', 38, C.RED_DARK, 700);
c.txt(1350, 690, 'getal leeft tot de buitenste accolade', 32, C.GRAY, 600);

c.save('.', 'scopegetal', '');
