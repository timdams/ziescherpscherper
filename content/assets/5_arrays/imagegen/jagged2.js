const { createCanvas, C, cellRow } = require('./arr');
const c = createCanvas(1620, 960);
const rows = [
  [6,34,23,-8,123,87,19,12],
  [2,43,3,22,-73,78,17,22,9,255,127],
  [16,4,17,63,7,-31,-18,32,8],
  [0,-125,33,99,981,31,16],
];
const cw = 120, ch = 120, gx = 60, gy = 320;
rows.forEach((r, i) => cellRow(c, gx, gy + i * ch, cw, ch, r, { size: 38 }));
function cellTop(row, col) { return [gx + col * cw + cw / 2, gy + row * ch]; }
function cellRight(row, col) { return [gx + (col + 1) * cw, gy + row * ch + ch / 2]; }
// Index [0][5] -> rij0 kol5
let p = cellTop(0, 5);
c.txt(860, 150, 'Index [0] [5]', 34, C.GRAY, 600, 'start');
c.arrow(880, 170, p[0], p[1] - 6, { strokeWidth: 2.4, head: 14 });
// Index [1][9] -> rij1 kol9
p = cellTop(1, 9);
c.txt(1330, 250, 'Index [1] [9]', 34, C.GRAY, 600, 'start');
c.arrow(1360, 280, p[0] + 20, p[1] - 6, { strokeWidth: 2.4, head: 14 });
// Index [2][7] -> rij2 kol7 (rechts)
p = cellRight(2, 7);
c.txt(1290, p[1], 'Index [2] [7]', 34, C.GRAY, 600, 'start');
c.arrow(1280, p[1], p[0] + 8, p[1], { strokeWidth: 2.4, head: 14 });
// Index [3][2] -> rij3 kol2 (onder)
p = [gx + 2 * cw + cw / 2, gy + 3 * ch + ch];
c.txt(p[0], 900, 'Index [3] [2]', 34, C.GRAY, 600);
c.arrow(p[0], 870, p[0], p[1] + 6, { strokeWidth: 2.4, head: 14 });
c.save('.', 'jagged2', 'NEW');
