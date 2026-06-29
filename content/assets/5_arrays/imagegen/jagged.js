const { createCanvas, C, cellRow } = require('./arr');
const c = createCanvas(1480, 1180);
const icx = 150, icw = 70, ich = 100, icy = 120, hx = 440, hcw = 100;
c.txt(120, 70, 'Index', 42, C.GRAY, 700, 'start');
// kolomkoppen 0..9
for (let i = 0; i < 10; i++) c.txt(hx + i * hcw + hcw / 2, 80, String(i), 38, C.GRAY, 600);
// indexkolom
for (let i = 0; i < 10; i++) {
  c.rect(icx, icy + i * ich, icw, ich, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2, roughness: 1.2 });
  c.txt(110, icy + i * ich + ich / 2 + 12, String(i), 36, C.GRAY, 600, 'end');
  c.arrow(icx + icw + 8, icy + i * ich + ich / 2, hx - 12, icy + i * ich + ich / 2, { strokeWidth: 2.4, head: 14 });
}
const rows = [[1,5,9,13,2],[4,13,19,21,2,5],[1,5,3,2],[9,2,7,4,6,13,17,1,4]];
rows.forEach((r, i) => cellRow(c, hx, icy + i * ich + 4, hcw, ich - 8, r, { size: 38 }));
for (let i = 4; i < 10; i++) c.txt(hx + 110, icy + i * ich + ich / 2 + 12, '. . . .', 40, C.GRAY, 700);
c.save('.', 'jagged', 'NEW');
