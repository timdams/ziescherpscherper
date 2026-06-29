// H3 - convertpars: overzicht van alle omzettingen (parsing, casting, Convert.To)
const { createCanvas, C } = require('./excal');
const { drawCasting } = require('./casting');
const c = createCanvas(1400, 860);

// grote gestippelde box: alle andere datatypes
const Bx = 440, By = 60, Bw = 900, Bh = 740, Bcx = Bx + Bw / 2;
c.rect(Bx, By, Bw, Bh, { fill: 'none', stroke: C.GRAY, strokeWidth: 2.4, strokeLineDash: [12, 10], roughness: 1.3 });

// label linksboven binnen de box
c.lines(Bx + 30, By + 50, ['Alle andere', 'datatypes'], 34, C.GRAY, 600, 'start', 1.05);
// notitie rechtsboven binnen de box
c.txt(Bx + Bw - 30, By + 44, 'Alle numerieke datatypes:', 24, C.GRAY, 500, 'end');
c.txt(Bx + Bw - 30, By + 74, 'onderlinge casting mogelijk.', 24, C.GRAY, 500, 'end');

// casting-ellips (numerieke datatypes)
drawCasting(c, Bcx, 320, 360, 185, 0.9);

// bool onderaan met Convert.To-pijlen
const boolY = 705, boolW = 140, boolH = 72;
c.cell(Bcx - boolW / 2, boolY, boolW, boolH, 'bool', { size: 38 });
const aTop = 525, aBot = boolY - 12;
c.arrow(Bcx - 45, aBot, Bcx - 45, aTop, { strokeWidth: 2.6, head: 16 });   // omhoog
c.arrow(Bcx + 45, aTop, Bcx + 45, aBot, { strokeWidth: 2.6, head: 16 });   // omlaag
c.txt(Bcx - 70, 625, 'Convert.ToX()', 30, C.GRAY, 600, 'end');
c.txt(Bcx + 70, 625, 'Convert.ToBoolean()', 30, C.GRAY, 600, 'start');

// links: string met parsing / .ToString()
const sY = 430;
c.txt(120, sY + 12, 'string', 44, C.RED_DARK, 700);
c.arrow(205, sY - 30, Bx - 5, sY - 30, { strokeWidth: 2.6, head: 16 });   // string -> box (parsing)
c.arrow(Bx - 5, sY + 30, 205, sY + 30, { strokeWidth: 2.6, head: 16 });   // box -> string (.ToString)
c.txt(322, sY - 48, 'Parsing', 32, C.GRAY, 600);
c.txt(322, sY + 78, '.ToString()', 32, C.GRAY, 600);

c.save('.', 'convertpars', 'NEW');
