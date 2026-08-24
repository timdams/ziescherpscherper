// H2 - int gedeeld door int: alles na de komma wordt afgekapt, niet afgerond.
const { createCanvas, C } = require('./excal');
const { slot, bin } = require('./vhelpers');
const { tokens } = require('./ehelpers');
const c = createCanvas(1700, 830);

c.txt(170, 105, 'int result = 9 / 2;', 44, C.GRAY, 600, 'start');

// ---------- stap 1: de deling ----------
tokens(c, 290, [['9', 170], ['/', 255], ['2', 340]], 88);
c.lines(255, 378, ['een int gedeeld', 'door een int'], 32, C.RED_DARK, 700, 'middle', 1.2);

c.arrow(400, 262, 505, 262, { stroke: C.GRAY, strokeWidth: 2.4, head: 16 });

// ---------- stap 2: het echte resultaat wordt doormidden geknipt ----------
tokens(c, 290, [['4', 590], ['.5', 685]], 88);
c.line(635, 200, 635, 340, { stroke: C.RED, strokeWidth: 2.8, strokeLineDash: [11, 9], roughness: 1.2 });
c.txt(637, 168, 'het echte resultaat', 32, C.GRAY, 500);

// het stuk na de komma valt in de vuilbak
c.carrow(690, 338, 655, 440, 616, 505, { stroke: C.RED, strokeWidth: 2.6, roughness: 1.3, head: 16 });
bin(c, 535, 520, 150, 150);
c.lines(610, 725, ['alles na de komma', 'wordt weggegooid'], 34, C.RED_DARK, 700, 'middle', 1.15);

c.arrow(755, 262, 860, 262, { stroke: C.GRAY, strokeWidth: 2.4, head: 16 });

// ---------- stap 3: wat er in de variabele belandt ----------
slot(c, 890, 175, 300, 190, 'result', '4', { nameSize: 30, valueSize: 72 });
c.txt(1040, 412, 'een int', 34, C.RED_DARK, 700);

// ---------- rechts: afkappen is geen afronden ----------
c.line(1250, 60, 1250, 780, { stroke: C.GRAY, strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });

c.rect(1300, 190, 360, 180, { fill: 'none', stroke: C.RED, strokeWidth: 2.6, roughness: 1.4 });
c.txt(1375, 300, '4.9', 62, C.GRAY, 700);
c.arrow(1440, 278, 1512, 278, { stroke: C.GRAY, strokeWidth: 2.4, head: 15 });
c.txt(1578, 300, '4', 62, C.GRAY, 700);
c.lines(1480, 440, ['niet 5!', 'C# rondt niet af'], 38, C.RED_DARK, 700, 'middle', 1.2);

c.save('.', 'truncatie', '');
