// H3 - pars: parsing en .ToString() tussen string en alle andere datatypes
// (Dit is het linkse stuk van convertpars.)
const { createCanvas, C } = require('./excal');
const c = createCanvas(1300, 400);

const cy = 200;

// links: string
c.txt(120, cy + 14, 'string', 48, C.RED_DARK, 700);

// rechts: gestippelde box "Alle andere datatypes"
const Bx = 900, By = 60, Bw = 340, Bh = 280, Bcx = Bx + Bw / 2;
c.rect(Bx, By, Bw, Bh, { fill: 'none', stroke: C.GRAY, strokeWidth: 2.4, strokeLineDash: [12, 10], roughness: 1.3 });
c.lines(Bcx, cy - 14, ['Alle andere', 'datatypes'], 38, C.GRAY, 600, 'middle', 1.05);

// twee horizontale pijlen ertussen
c.arrow(230, cy - 35, Bx - 6, cy - 35, { strokeWidth: 2.8, head: 18 });   // string -> box (parsing)
c.arrow(Bx - 6, cy + 35, 230, cy + 35, { strokeWidth: 2.8, head: 18 });   // box -> string (.ToString)

// labels (buiten de pijllijnen)
c.txt(560, cy - 70, 'Parsing', 34, C.GRAY, 600);
c.txt(560, cy + 100, '.ToString()', 34, C.GRAY, 600);

c.save('.', 'pars', 'NEW');
