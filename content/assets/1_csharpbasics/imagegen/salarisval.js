// H2 - de salarisval: (1 / 2) is een int-deling en geeft 0, (1.0 / 2) geeft 0.5.
const { createCanvas, C } = require('./excal');
const { badge, tokens, ring } = require('./ehelpers');
const c = createCanvas(1760, 990);

c.line(880, 55, 880, 930, { stroke: C.GRAY, strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });

// ================= links: met (1 / 2) =================
c.txt(60, 95, 'double helft = 10000.0 * (1 / 2);', 40, C.GRAY, 600, 'start');

badge(c, 140, 222, 1);
tokens(c, 240, [['1', 380], ['/', 455], ['2', 530]], 76);
ring(c, 455, 222, 265, 108);
c.txt(380, 320, 'int', 30, C.RED_DARK, 700);
c.txt(530, 320, 'int', 30, C.RED_DARK, 700);

c.arrow(455, 348, 455, 400, { stroke: C.GRAY, strokeWidth: 2.4, head: 15 });

c.cell(365, 415, 180, 110, '0', { size: 64 });
c.lines(600, 470, ['int / int', 'blijft int'], 32, C.RED_DARK, 700, 'start', 1.2);

badge(c, 140, 665, 2);
c.arrow(455, 545, 455, 608, { stroke: C.GRAY, strokeWidth: 2.4, head: 15 });

tokens(c, 690, [['10000.0', 370], ['*', 505], ['0', 580]], 64);

c.arrow(455, 725, 455, 782, { stroke: C.GRAY, strokeWidth: 2.4, head: 15 });

c.cell(310, 795, 290, 110, '0.0 euro', { size: 52 });
c.txt(455, 950, 'je krijgt niets van mij', 36, C.RED_DARK, 700);

// ================= rechts: met (1.0 / 2) =================
c.txt(960, 95, 'double helft = 10000.0 * (1.0 / 2);', 40, C.GRAY, 600, 'start');

badge(c, 1055, 222, 1);
tokens(c, 240, [['1.0', 1285], ['/', 1370], ['2', 1450]], 76);
ring(c, 1367, 222, 300, 108);
c.txt(1285, 320, 'double', 30, C.RED_DARK, 700);
c.txt(1450, 320, 'int', 30, C.RED_DARK, 700);

c.arrow(1370, 348, 1370, 400, { stroke: C.GRAY, strokeWidth: 2.4, head: 15 });

c.cell(1280, 415, 180, 110, '0.5', { size: 60 });
c.lines(1510, 470, ['double / int', 'wordt double'], 32, C.RED_DARK, 700, 'start', 1.2);

badge(c, 1055, 665, 2);
c.arrow(1370, 545, 1370, 608, { stroke: C.GRAY, strokeWidth: 2.4, head: 15 });

tokens(c, 690, [['10000.0', 1285], ['*', 1420], ['0.5', 1505]], 64);

c.arrow(1370, 725, 1370, 782, { stroke: C.GRAY, strokeWidth: 2.4, head: 15 });

c.cell(1195, 795, 350, 110, '5000.0 euro', { size: 52 });
c.txt(1370, 950, 'de helft van het salaris', 36, C.RED_DARK, 700);

c.save('.', 'salarisval', '');
