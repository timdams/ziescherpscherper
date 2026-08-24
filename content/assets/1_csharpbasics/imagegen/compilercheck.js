// H1 - de compiler beoordeelt een literal op zijn waarde, een variabele op zijn type
const { createCanvas, C } = require('./excal');
const { slot } = require('./vhelpers');
const c = createCanvas(1700, 1000);

c.line(760, 60, 760, 950, { stroke: C.GRAY, strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });

function band(cx) {
  c.rect(cx - 190, 450, 380, 92, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED, strokeWidth: 2.6, roughness: 1.4 });
  c.txt(cx, 512, 'compiler', 44, C.RED_DARK, 700);
}

// ================= links: een literal, de compiler leest de waarde =================
c.txt(390, 108, 'sbyte start = 127;', 40, C.GRAY, 700);
c.box3d(300, 268, 180, 108, '127', { size: 48, depth: 26 });
c.txt(258, 336, 'literal', 32, C.RED_DARK, 700, 'end');
c.arrow(390, 392, 390, 620, { stroke: C.GRAY, strokeWidth: 2.6, roughness: 1.2, head: 18 });
band(390);
slot(c, 270, 650, 240, 170, 'sbyte start', '127', { nameSize: 28, valueSize: 56 });
// vinkje
c.path('M 590 500 L 618 532 L 672 462', { stroke: C.GRAY, strokeWidth: 6, roughness: 1.3 });
c.txt(390, 890, 'de compiler kijkt naar de waarde', 32, C.GRAY, 600);
c.txt(390, 934, '127 past in een sbyte', 32, C.GRAY, 600);

// ================= rechts: een variabele, de compiler leest het type =================
c.txt(1150, 100, 'int x = 127;', 40, C.GRAY, 700);
c.txt(1150, 152, 'sbyte y = x;', 40, C.GRAY, 700);
slot(c, 1050, 250, 200, 150, 'int x', '127', { nameSize: 28, valueSize: 48 });
c.txt(1330, 296, 'de waarde is bekend,', 30, C.GRAY, 600, 'start');
c.txt(1330, 334, 'maar dat helpt niet', 30, C.RED_DARK, 700, 'start');
c.carrow(1400, 358, 1330, 392, 1262, 368, { stroke: C.RED, strokeWidth: 2.2, roughness: 1.4, head: 15 });
c.arrow(1150, 408, 1150, 442, { stroke: C.GRAY, strokeWidth: 2.6, roughness: 1.2, head: 18 });
band(1150);
slot(c, 1030, 650, 240, 170, 'sbyte y', '', { nameSize: 28 });
// kruisje
c.line(1380, 462, 1450, 532, { stroke: C.RED, strokeWidth: 6, roughness: 1.3 });
c.line(1450, 462, 1380, 532, { stroke: C.RED, strokeWidth: 6, roughness: 1.3 });
c.txt(1150, 890, 'de compiler kijkt naar het type', 32, C.RED_DARK, 700);
c.txt(1150, 934, 'een int past niet in een sbyte', 32, C.RED_DARK, 700);

c.save('.', 'compilercheck', 'NEW');
