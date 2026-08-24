// H2 - getal++ geeft eerst de waarde af en verhoogt dan, ++getal doet het omgekeerd.
const { createCanvas, C } = require('./excal');
const { slot } = require('./vhelpers');
const { badge } = require('./ehelpers');
const c = createCanvas(1540, 840);

c.line(815, 55, 815, 795, { stroke: C.GRAY, strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });

// ================= links: getal++ =================
c.txt(447, 100, 'int som = getal++;', 48, C.GRAY, 700);

badge(c, 105, 305, 1);
slot(c, 165, 230, 220, 150, 'getal', '1');
c.txt(447, 270, 'geeft 1', 30, C.RED_DARK, 700);
c.arrow(395, 305, 500, 305, { stroke: C.RED, strokeWidth: 2.4, head: 15 });
slot(c, 510, 230, 220, 150, 'som', '1');
c.txt(447, 425, 'eerst de waarde afgeven', 34, C.RED_DARK, 700);

badge(c, 105, 595, 2);
slot(c, 165, 520, 220, 150, 'getal', '1');
c.txt(447, 560, '+1', 30, C.RED_DARK, 700);
c.arrow(395, 595, 500, 595, { stroke: C.RED, strokeWidth: 2.4, head: 15 });
slot(c, 510, 520, 220, 150, 'getal', '2');
c.txt(447, 715, 'dan pas verhogen', 34, C.RED_DARK, 700);

c.txt(447, 790, 'som wordt 1', 40, C.GRAY, 700);

// ================= rechts: ++getal =================
c.txt(1188, 100, 'int som = ++getal;', 48, C.GRAY, 700);

badge(c, 850, 305, 1);
slot(c, 905, 230, 220, 150, 'getal', '1');
c.txt(1188, 270, '+1', 30, C.RED_DARK, 700);
c.arrow(1135, 305, 1240, 305, { stroke: C.RED, strokeWidth: 2.4, head: 15 });
slot(c, 1250, 230, 220, 150, 'getal', '2');
c.txt(1188, 425, 'eerst verhogen', 34, C.RED_DARK, 700);

badge(c, 850, 595, 2);
slot(c, 905, 520, 220, 150, 'getal', '2');
c.txt(1188, 560, 'geeft 2', 30, C.RED_DARK, 700);
c.arrow(1135, 595, 1240, 595, { stroke: C.RED, strokeWidth: 2.4, head: 15 });
slot(c, 1250, 520, 220, 150, 'som', '2');
c.txt(1188, 715, 'dan de waarde afgeven', 34, C.RED_DARK, 700);

c.txt(1188, 790, 'som wordt 2', 40, C.GRAY, 700);

c.save('.', 'increment', '');
