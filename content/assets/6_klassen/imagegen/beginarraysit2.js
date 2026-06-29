// beginarraysit2: array met 0x2344, null, 0x6721 -> twee Student-objecten op de heap
const { createCanvas, C } = require('./excal');
const c = createCanvas(1700, 1040);

c.txt(300, 70, 'STACK', 46, C.GRAY, 700);
c.txt(1150, 70, 'HEAP', 46, C.GRAY, 700);
c.line(640, 20, 640, 950, { strokeLineDash: [12, 12], roughness: 1.2, strokeWidth: 2 });

// stack
c.bubble(240, 130, 250, 110, 'mijnKlas', 210, 360, 40);
c.cell(80, 360, 300, 150, '0x8974', { size: 46 });
c.arrow(380, 435, 770, 435, { strokeWidth: 2.4 });

// array (3 cellen) in heap
const ax = 780, ay = 360, cw = 230, ch = 150;
c.cell(ax, ay, cw, ch, '0x2344', { size: 40 });
c.cell(ax + cw, ay, cw, ch, 'null', { size: 42 });
c.cell(ax + 2 * cw, ay, cw, ch, '0x6721', { size: 40 });
c.txt(ax + 3 * cw + 20, ay + 95, '... 20 stuks', 36, C.GRAY, 600, 'start');

// objecten
c.box3d(640, 820, 360, 150, ['Student-object', '(adres: 0x2344)'], { size: 32, depth: 28 });
c.box3d(960, 630, 360, 150, ['Student-object', '(adres: 0x6721)'], { size: 32, depth: 28 });

// 0x2344 cel -> object (recht naar onder, in de bovenkant)
c.arrow(ax + 0.5 * cw, ay + ch, ax + 0.5 * cw, 820, { strokeWidth: 2.2 });
// 0x6721 cel -> object (omlaag, dan van rechts in de zijkant)
const sx = ax + 2.5 * cw;
c.line(sx, ay + ch, sx, 705, { strokeWidth: 2.2 });
c.arrow(sx, 705, 1322, 705, { strokeWidth: 2.2 });

c.save(__dirname, 'beginarraysit2');
