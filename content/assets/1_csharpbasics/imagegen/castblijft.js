// H4 converteren - casten verandert de variabele niet: enkel een kopie van de
// waarde wordt omgezet en aan de andere variabele toegekend.
// Draaien vanuit de imagegen-map:  node castblijft.js
const { createCanvas, C } = require('./excal');
const { slot } = require('./vhelpers');

const c = createCanvas(1400, 470);
const A = { stroke: C.GRAY, strokeWidth: 2.4, head: 15 };

// de regel code die we uitbeelden
c.txt(700, 62, 'secundaireMeting = (int)hoofdMeting;', 42, C.GRAY, 700);

// ---------- links: de bronvariabele ----------
slot(c, 90, 130, 300, 200, 'hoofdMeting', '20.4', { sub: 'double', valueSize: 54 });
c.txt(240, 380, 'blijft 20.4, blijft double', 30, C.RED_DARK, 700);

// ---------- midden: de waarde reist door de (int)-stempel ----------
c.arrow(400, 230, 600, 230, A);
c.txt(500, 205, '20.4', 38, C.GRAY, 700);

c.rect(620, 185, 160, 90, { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 6,
  fillWeight: 1.5, stroke: C.RED, strokeWidth: 2.4 });
c.txt(700, 245, '(int)', 44, C.RED_DARK, 700);

c.arrow(800, 230, 1000, 230, A);
c.txt(900, 205, '20', 38, C.GRAY, 700);

// ---------- rechts: de doelvariabele ----------
slot(c, 1010, 130, 300, 200, 'secundaireMeting', '20', { sub: 'int', valueSize: 54 });
c.txt(1160, 380, 'krijgt 20', 30, C.RED_DARK, 700);

c.save('.', 'castblijft', '');
