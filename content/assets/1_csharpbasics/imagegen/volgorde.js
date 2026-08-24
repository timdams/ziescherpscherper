// H2 - volgorde van berekeningen: 3+5*2 tegenover (3+5)*2, stap per stap.
const { createCanvas, C } = require('./excal');
const { badge, tokens, ring } = require('./ehelpers');
const c = createCanvas(1700, 830);

c.line(800, 60, 800, 780, { stroke: C.GRAY, strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });

// ================= links: keer en delen eerst =================
c.txt(432, 95, 'keer en delen eerst', 38, C.RED_DARK, 700);

tokens(c, 235, [['3', 270], ['+', 350], ['5', 435], ['*', 515], ['2', 595]]);
ring(c, 515, 215, 250, 108);
badge(c, 175, 215, 1);

c.arrow(432, 292, 432, 344, { stroke: C.GRAY, strokeWidth: 2.4, head: 15 });

tokens(c, 430, [['3', 345], ['+', 425], ['10', 520]]);
ring(c, 432, 410, 300, 108);
badge(c, 175, 410, 2);

c.arrow(432, 480, 432, 552, { stroke: C.GRAY, strokeWidth: 2.4, head: 15 });

c.cell(342, 570, 180, 115, '13', { size: 66 });
c.txt(432, 745, 'een int', 34, C.RED_DARK, 700);

// ================= rechts: haakjes eerst =================
c.txt(1240, 95, 'haakjes gaan voor alles', 38, C.RED_DARK, 700);

tokens(c, 235, [['(', 1015], ['3', 1080], ['+', 1160], ['5', 1240], [')', 1305], ['*', 1385], ['2', 1465]]);
ring(c, 1163, 215, 365, 120);
badge(c, 895, 215, 1);

c.arrow(1240, 292, 1240, 344, { stroke: C.GRAY, strokeWidth: 2.4, head: 15 });

tokens(c, 430, [['8', 1155], ['*', 1235], ['2', 1315]]);
ring(c, 1235, 410, 280, 108);
badge(c, 895, 410, 2);

c.arrow(1240, 480, 1240, 552, { stroke: C.GRAY, strokeWidth: 2.4, head: 15 });

c.cell(1150, 570, 180, 115, '16', { size: 66 });
c.txt(1240, 745, 'een int', 34, C.RED_DARK, 700);

c.save('.', 'volgorde', '');
