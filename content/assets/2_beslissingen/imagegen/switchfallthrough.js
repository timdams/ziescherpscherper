// H5 - twee case-labels boven elkaar: case 2 heeft geen eigen code en valt door
// naar de code van case 3, die dus bij beide waarden uitgevoerd wordt.
// Draaien vanuit de imagegen-map:  node switchfallthrough.js
const { createCanvas, C } = require('./excal');
const { scopebar, codeblock, markeer } = require('./shelpers');

const c = createCanvas(1390, 400);

const SIZE = 28;
const IND = 32;
const X = 420;

const rows = [
  { t: 'case 2:', ind: 0, y: 110 },
  { t: 'case 3:', ind: 0, y: 190 },
  { t: 'Console.WriteLine("Laden of opslaan gekozen");', ind: 1, y: 282 },
  { t: 'break;', ind: 1, y: 338 },
];

const trackO = { stroke: C.RED, strokeWidth: 2.6, roughness: 1.2 };
const arrowO = { stroke: C.RED, strokeWidth: 2.6, roughness: 1.2, head: 15 };

// twee ingangen die op dezelfde weg uitkomen
c.txt(175, 110, 'option bevat 2', 30, C.RED_DARK, 700);
c.txt(175, 190, 'option bevat 3', 30, C.RED_DARK, 700);
c.arrow(285, 100, 372, 100, arrowO);
c.arrow(285, 180, 372, 180, arrowO);

c.line(378, 82, 378, 228, trackO);
c.arrow(378, 228, 420, 272, arrowO);

markeer(c, X, rows[2], 46, false, { size: SIZE, indent: IND });
codeblock(c, X, rows, { size: SIZE, indent: IND });

c.txt(545, 110, 'geen eigen code, dus valt door', 28, C.RED_DARK, 700, 'start');
scopebar(c, 1045, 250, 355, 'wordt uitgevoerd bij 2 én 3', 28);

c.save('.', 'switchfallthrough', '');
