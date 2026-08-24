// H1 - een nieuwe waarde overschrijft de oude (links) tenzij je ze eerst kopieert (rechts)
const { createCanvas, C } = require('./excal');
const { slot, bin } = require('./vhelpers');
const c = createCanvas(1760, 900);

// scheidingslijn tussen de twee situaties
c.line(860, 60, 860, 840, { stroke: C.GRAY, strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });

// ================= links: gewoon overschrijven =================
c.txt(445, 70, 'zonder kopie', 36, C.RED_DARK, 700);
c.txt(110, 140, 'int temperatuurGisteren = 20;', 32, C.GRAY, 600, 'start');
c.txt(110, 188, 'temperatuurGisteren = 25;', 32, C.GRAY, 600, 'start');

slot(c, 295, 250, 300, 190, 'temperatuurGisteren', '25', { nameSize: 26, valueSize: 60 });

// de oude waarde valt uit het vakje
c.carrow(290, 348, 215, 380, 178, 462, { stroke: C.RED, strokeWidth: 2.4, roughness: 1.4, head: 15 });
c.txt(175, 540, '20', 52, C.GRAY, 700);
c.line(133, 528, 217, 526, { stroke: C.RED, strokeWidth: 2.6, roughness: 1.8 });
bin(c, 105, 580, 150, 150);

c.txt(445, 806, 'de oude waarde is weg', 34, C.RED_DARK, 700);

// ================= rechts: eerst kopiëren =================
c.txt(1305, 70, 'met een extra variabele', 36, C.RED_DARK, 700);
c.txt(920, 140, 'int temperatuurEerGisteren = temperatuurGisteren;', 32, C.GRAY, 600, 'start');
c.txt(920, 188, 'temperatuurGisteren = 25;', 32, C.GRAY, 600, 'start');

slot(c, 920, 250, 340, 190, 'temperatuurEerGisteren', '20', { nameSize: 24, valueSize: 60 });
slot(c, 1330, 250, 340, 190, 'temperatuurGisteren', '25', { nameSize: 26, valueSize: 60 });

c.carrow(1425, 452, 1295, 545, 1168, 452, { stroke: C.RED, strokeWidth: 2.4, roughness: 1.3, head: 15 });
c.txt(1295, 548, '20', 42, C.GRAY, 700);
c.txt(1295, 622, 'eerst kopiëren', 34, C.RED_DARK, 700);

c.txt(1305, 806, 'nu heb je allebei de waarden', 34, C.RED_DARK, 700);

c.save('.', 'overschrijven', 'NEW');
