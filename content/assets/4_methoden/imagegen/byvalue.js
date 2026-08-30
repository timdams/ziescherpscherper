// H7 - byvalue: JaartjeOuder krijgt een kopie van mijnLeeftijd
// Draaien vanuit de imagegen-map:  node byvalue.js
const { createCanvas, C } = require('./excal');
const { slot } = require('./vhelpers');

const c = createCanvas(1700, 870);
const RD = C.RED_DARK;

function paneel(y, waardeMethode, kleur) {
  c.rect(80, y, 560, 260, { strokeWidth: 2.2, roughness: 1.3 });
  c.txt(360, y + 62, 'Main', 42, C.GRAY, 700);
  slot(c, 180, y + 100, 360, 130, 'mijnLeeftijd', '40');

  c.rect(1060, y, 560, 260, { strokeWidth: 2.2, roughness: 1.3 });
  c.txt(1340, y + 62, 'JaartjeOuder', 42, C.GRAY, 700);
  slot(c, 1160, y + 100, 360, 130, 'leeftijd', waardeMethode, { valueColor: kleur });
}

// ---------- 1. bij de aanroep ----------
c.txt(80, 92, 'bij de aanroep', 38, RD, 700, 'start');
paneel(130, '40', C.GRAY);
c.arrow(655, 255, 1045, 255, { stroke: C.RED, strokeWidth: 2.4, head: 15 });
c.txt(850, 222, 'een kopie van de waarde', 32, RD, 700);

// ---------- 2. na leeftijd++ ----------
c.txt(80, 502, 'na leeftijd++ in de methode', 38, RD, 700, 'start');
paneel(540, '41', RD);
c.line(1045, 665, 655, 665, { stroke: C.RED, strokeWidth: 2.2, strokeLineDash: [12, 10] });
c.line(820, 635, 880, 695, { stroke: C.RED, strokeWidth: 3 });
c.line(880, 635, 820, 695, { stroke: C.RED, strokeWidth: 3 });
c.txt(850, 750, 'de wijziging raakt', 32, RD, 700);
c.txt(850, 786, 'het origineel niet', 32, RD, 700);

c.save(__dirname, 'byvalue', '');
