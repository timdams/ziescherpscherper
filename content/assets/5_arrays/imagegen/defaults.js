// Wat zit er in een verse array? Defaultwaarden per datatype.
const { createCanvas, C, cellRow } = require('./arr');
const c = createCanvas(1600, 960);

const X = 460, CW = 200, CH = 130;

function row(y, label, values, o) {
  c.txt(90, y + CH / 2 + 15, label, 46, C.RED_DARK, 700, 'start');
  cellRow(c, X, y, CW, CH, values, o);
}

row(130, 'new int[5]', [0, 0, 0, 0, 0], { size: 50, weight: 700 });
row(370, 'new bool[5]', ['false', 'false', 'false', 'false', 'false'], { size: 40, weight: 600 });
row(610, 'new string[5]', ['null', 'null', 'null', 'null', 'null'], { size: 46, weight: 700, color: C.RED_DARK });

c.txt(620, 905, 'null is niet hetzelfde als een lege tekst', 44, C.RED_DARK, 700, 'start');
c.carrow(598, 878, 545, 830, 528, 754, { stroke: C.RED, strokeWidth: 2.6, head: 18 });

c.save('.', 'defaults', '');
