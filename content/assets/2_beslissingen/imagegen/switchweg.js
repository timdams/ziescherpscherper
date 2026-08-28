// H5 - de weg die een switch aflegt. Links vindt option de match bij case 2 en
// springt break er weer uit, rechts past geen enkele case en komt default aan de beurt.
// Draaien vanuit de imagegen-map:  node switchweg.js
const { createCanvas, C } = require('./excal');
const { cross, check, codeblock, markeer } = require('./shelpers');

const c = createCanvas(1520, 960);

const SIZE = 28;              // codegrootte
const IND = 32;               // inspringing per niveau
const STEP = 46;              // regelafstand
const Y0 = 170;               // basislijn van de eerste coderegel

// de coderegels, identiek in beide panelen
const CODE = [
  ['switch (option)', 0],
  ['{', 0],
  ['case 1:', 1],
  ['Console.WriteLine("Afbreken gekozen");', 2],
  ['break;', 2],
  ['case 2:', 1],
  ['Console.WriteLine("Opslaan gekozen");', 2],
  ['break;', 2],
  ['case 3:', 1],
  ['Console.WriteLine("Laden gekozen");', 2],
  ['break;', 2],
  ['default:', 1],
  ['Console.WriteLine("Onbekende keuze");', 2],
  ['break;', 2],
  ['}', 0],
];
const rows = CODE.map(([t, ind], i) => ({ t, ind, y: Y0 + i * STEP }));
const midY = i => rows[i].y - SIZE * 0.34;      // verticaal midden van regel i

const trackO = { stroke: C.RED, strokeWidth: 2.6, roughness: 1.2 };
const arrowO = { stroke: C.RED, strokeWidth: 2.6, roughness: 1.2, head: 15 };

// scheidingslijn tussen de twee panelen
c.line(828, 130, 828, 875, { strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });

// ================= links: option bevat 2 =================
const LX = 210, LTRACK = 120, LMARK = 360;

markeer(c, LX, rows[6], 37, false, { size: SIZE, indent: IND });
codeblock(c, LX, rows, { size: SIZE, indent: IND });

// de weg zakt tot bij case 2 en draait daar naar binnen
c.line(LTRACK, 200, LTRACK, midY(5), trackO);
c.arrow(LTRACK, midY(5), LX + IND - 18, midY(5), arrowO);

cross(c, LMARK, midY(2));
check(c, LMARK, midY(5));

// break schiet uit de switch, tot onder de sluitende accolade
c.line(370, midY(7), 775, midY(7), trackO);
c.line(775, midY(7), 775, 860, trackO);
c.arrow(775, 860, 300, 860, arrowO);

c.txt(445, 100, 'option bevat 2', 38, C.RED_DARK, 700);
c.txt(445, 915, 'break springt uit de switch', 30, C.GRAY, 600);

// ================= rechts: option bevat 7 =================
const RX = 970, RTRACK = 880, RMARK = 1120;

markeer(c, RX, rows[12], 37, false, { size: SIZE, indent: IND });
codeblock(c, RX, rows, { size: SIZE, indent: IND });

c.line(RTRACK, 200, RTRACK, midY(11), trackO);
c.arrow(RTRACK, midY(11), RX + IND - 18, midY(11), arrowO);

cross(c, RMARK, midY(2));
cross(c, RMARK, midY(5));
cross(c, RMARK, midY(8));
check(c, RMARK, midY(11));

c.txt(1170, 100, 'option bevat 7', 38, C.RED_DARK, 700);
c.txt(1170, 915, 'geen enkele case past, dus default', 30, C.GRAY, 600);

c.save('.', 'switchweg', '');
