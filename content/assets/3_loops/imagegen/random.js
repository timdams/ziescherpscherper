// H3 - random: bereik van Random schalen (*7.5 daarna +5)
const { createCanvas, C } = require('./excal');
const c = createCanvas(1360, 520);

function axis(y) {
  c.line(20, y, 1340, y, { stroke: C.GRAY, strokeWidth: 2, strokeLineDash: [16, 14], roughness: 0.6, disableMultiStroke: true });
}
function bar(x1, x2, y, label) {
  c.rect(x1, y - 22, x2 - x1, 44, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 2.2, roughness: 1.1 });
  c.txt((x1 + x2) / 2, y + 10, label, 30, C.GRAY, 700);
}
function dotted(x1, y1, x2, y2, label, lx, ly) {
  c.arrow(x1, y1, x2, y2, { stroke: C.GRAY, strokeWidth: 2, strokeLineDash: [2, 8], roughness: 0.6, disableMultiStroke: true, head: 16 });
  c.txt(lx, ly, label, 36, C.GRAY, 700);
}

// drie assen
axis(70); axis(235); axis(420);

// balken
bar(130, 610, 70, 'Bereik NextDouble()');
c.txt(135, 118, '0.0', 30, C.GRAY, 600, 'start');
c.txt(610, 118, '1.0', 30, C.GRAY, 600, 'middle');

bar(130, 940, 235, 'Bereik na * 7.5');
c.txt(135, 283, '0.0', 30, C.GRAY, 600, 'start');
c.txt(940, 283, '7.5', 30, C.GRAY, 600, 'middle');

bar(360, 1170, 420, 'Bereik na +5');
c.txt(360, 468, '5', 30, C.GRAY, 600, 'middle');
c.txt(1170, 468, '12.5', 30, C.GRAY, 600, 'middle');

// schuine pijlen, getal NAAST de lijn
dotted(620, 96, 936, 210, '* 7.5', 870, 130);
dotted(135, 262, 356, 394, '+5', 175, 365);
dotted(940, 262, 1166, 394, '+5', 1110, 360);

c.save('.', 'random', 'NEW');
