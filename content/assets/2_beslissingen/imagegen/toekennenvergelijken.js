// H5 - het verschil tussen de toekenningsoperator = en de vergelijkingsoperator ==
// Draaien vanuit de imagegen-map:  node toekennenvergelijken.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1560, 670);

c.line(780, 60, 780, 620, { stroke: C.GRAY, strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });

// ================= links: toekennen =================
c.txt(390, 100, 'x = 5', 54, C.RED_DARK, 700);
c.txt(390, 158, 'toekennen', 34, C.GRAY, 600);

// geheugenvakje met naamplaatje
c.rect(215, 290, 180, 46, { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 6, fillWeight: 1.5,
  stroke: C.RED, strokeWidth: 2.4 });
c.txt(305, 325, 'x', 38, C.RED_DARK, 700);
c.rect(215, 336, 180, 120);
c.txt(305, 412, '5', 52, C.GRAY, 700);

// de rechtse waarde die in de variabele gaat
c.txt(620, 412, '5', 52, C.GRAY, 700);
c.arrow(578, 396, 425, 396, { stroke: C.RED, strokeWidth: 2.6, head: 16 });

c.lines(390, 570, ['zet de rechtse waarde', 'in de linkse variabele'], 34, C.GRAY, 600);

// ================= rechts: vergelijken =================
c.txt(1170, 100, 'x == 5', 54, C.RED_DARK, 700);
c.txt(1170, 158, 'vergelijken', 34, C.GRAY, 600);

// weegschaal
c.line(1010, 270, 1330, 270, { strokeWidth: 3, roughness: 1.2 });
c.poly([[1170, 272], [1128, 358], [1212, 358]], { fill: C.WHITE, fillStyle: 'solid', strokeWidth: 2.2 });
c.line(1108, 360, 1232, 360, { strokeWidth: 2.6 });

c.line(1050, 272, 1050, 312, { strokeWidth: 2.2 });
c.poly([[1008, 312], [1092, 312], [1080, 340], [1020, 340]], { fill: C.WHITE, fillStyle: 'solid', strokeWidth: 2.2 });
c.line(1290, 272, 1290, 312, { strokeWidth: 2.2 });
c.poly([[1248, 312], [1332, 312], [1320, 340], [1260, 340]], { fill: C.WHITE, fillStyle: 'solid', strokeWidth: 2.2 });

c.txt(1050, 248, 'x', 44, C.GRAY, 700);
c.txt(1290, 248, '5', 44, C.GRAY, 700);

// het resultaat van de vergelijking
c.arrow(1170, 378, 1170, 418, { stroke: C.RED, strokeWidth: 2.6, head: 15 });
c.rect(1035, 430, 270, 80, { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 6, fillWeight: 1.5,
  stroke: C.RED, strokeWidth: 2.4 });
c.txt(1170, 484, 'true of false', 40, C.GRAY, 700);

c.lines(1170, 570, ['vergelijkt links met rechts', 'en geeft een bool terug'], 34, C.GRAY, 600);

c.save('.', 'toekennenvergelijken', '');
