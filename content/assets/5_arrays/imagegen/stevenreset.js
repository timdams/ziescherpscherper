// H8 arrays - Stagiair Steven: een array vervangen binnen een methode werkt niet door.
// De parameter krijgt een kopie van het adres; die kopie wordt verlegd, Main niet.
// Draaien vanuit de imagegen-map:  node stevenreset.js
const { createCanvas, C, memframe, cellRow } = require('./arr');

const c = createCanvas(1800, 1320);

function varbox(x, y, w, h, val, o = {}) {
  c.rect(x, y, w, h, { fill: '#e2e2e2', fillStyle: 'solid', stroke: o.stroke || C.GRAY, strokeWidth: 2.4, roughness: 1.1 });
  c.txt(x + w / 2, y + h / 2 + 14, val, 42, C.GRAY, 700);
}

// ---------- Main: wijst naar de originele array ----------
memframe(c, 70, 130, 730, 330, 'Main');
c.bubble(435, 195, 280, 95, 'scores', 435, 308, 38);
varbox(265, 310, 340, 120, '0x12478');
c.arrow(618, 370, 1160, 368, { strokeWidth: 2.6, head: 16 });

cellRow(c, 1180, 300, 140, 140, [10, 25, 3], { size: 46, weight: 700 });
c.txt(1390, 265, 'de originele array', 36, C.GRAY, 600);
c.txt(1390, 500, '0x12478', 36, C.RED_DARK, 700);

// ---------- Reset: de kopie van het adres wordt overschreven ----------
c.txt(435, 545, 'scores = new int[scores.Length];', 42, C.RED_DARK, 700);
memframe(c, 70, 580, 730, 570, 'Reset(int[] scores)');
c.bubble(435, 655, 280, 90, 'scores', 435, 758, 38);

varbox(265, 760, 340, 120, '0x12478');
c.line(365, 818, 505, 818, { stroke: C.RED, strokeWidth: 3, roughness: 1.1 });

// bij de aanroep wees de kopie naar diezelfde originele array
c.arrow(618, 800, 1170, 445, { strokeWidth: 2.2, strokeLineDash: [14, 10], roughness: 0.8, disableMultiStroke: true, head: 15 });
c.txt(1010, 775, 'zo stond het bij de aanroep', 34, C.GRAY, 600);

c.arrow(435, 890, 435, 935, { stroke: C.RED, strokeWidth: 2.8, head: 13 });
varbox(265, 945, 340, 120, '0x9A21', { stroke: C.RED });
c.arrow(618, 1002, 1160, 975, { stroke: C.RED, strokeWidth: 2.6, head: 16 });

cellRow(c, 1180, 900, 140, 140, [0, 0, 0], { size: 46, weight: 700 });
c.txt(1390, 865, 'de nieuwe, lege array', 36, C.GRAY, 600);
c.txt(1390, 1090, '0x9A21', 36, C.RED_DARK, 700);

c.lines(900, 1215, ['enkel de kopie van de wegwijzer wordt verlegd,', 'de array van Main blijft onaangeroerd'], 40, C.GRAY, 600, 'middle', 1.15);

c.save('.', 'stevenreset', '');
