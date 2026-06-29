// objeeindsit: array vol (3 adressen) + 3 objecten, twee stackvars mijnKlas & jos
const { createCanvas, C } = require('./excal');
const c = createCanvas(1760, 1080);

c.txt(300, 60, 'STACK', 46, C.GRAY, 700);
c.txt(1150, 60, 'HEAP', 46, C.GRAY, 700);
c.line(640, 20, 640, 1050, { strokeLineDash: [12, 12], roughness: 1.2, strokeWidth: 2 });

// stack-variabelen
c.bubble(240, 170, 250, 110, 'mijnKlas', 210, 440, 40);
c.cell(80, 440, 300, 150, '0x8974', { size: 46 });
c.bubble(240, 700, 200, 110, 'jos', 210, 910, 40);
c.cell(80, 910, 300, 150, '0x5615', { size: 46 });

// array
const ax = 780, ay = 440, cw = 230, ch = 150;
c.cell(ax, ay, cw, ch, '0x2344', { size: 40 });
c.cell(ax + cw, ay, cw, ch, '0x6721', { size: 40 });
c.cell(ax + 2 * cw, ay, cw, ch, '0x5615', { size: 40 });
c.arrow(380, 515, 770, 515, { strokeWidth: 2.4 });

// objecten
c.box3d(1300, 120, 360, 150, ['Student-object', '(adres: 0x6721)'], { size: 32 });
c.box3d(820, 760, 360, 150, ['Student-object', '(adres: 0x2344)'], { size: 32 });
c.box3d(1300, 860, 360, 150, ['Student-object', '(adres: 0x5615)'], { size: 32 });

// cel 0x2344 -> object (recht naar onder)
c.arrow(ax + 0.5 * cw, ay + ch, ax + 0.5 * cw, 760, { strokeWidth: 2.2 });
// cel 0x6721 -> object boven-rechts
c.line(ax + 1.5 * cw, ay, ax + 1.5 * cw, 345, { strokeWidth: 2.2 });
c.line(ax + 1.5 * cw, 345, 1480, 345, { strokeWidth: 2.2 });
c.arrow(1480, 345, 1480, 272, { strokeWidth: 2.2 });
// cel 0x5615 -> object onder-rechts
c.line(ax + 2.5 * cw, ay + ch, ax + 2.5 * cw, 790, { strokeWidth: 2.2 });
c.line(ax + 2.5 * cw, 790, 1480, 790, { strokeWidth: 2.2 });
c.arrow(1480, 790, 1480, 858, { strokeWidth: 2.2 });
// jos -> object 0x5615
c.arrow(380, 985, 1298, 985, { strokeWidth: 2.4 });

c.save(__dirname, 'objeeindsit');
