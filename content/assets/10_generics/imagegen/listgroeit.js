const { createCanvas, C } = require('./excal');
const c = createCanvas(1560, 740);
// vaste array
c.txt(80, 100, 'array : vaste lengte', 40, C.GRAY, 700, 'start');
const cw = 140, ch = 130, ay = 150;
for (let i = 0; i < 5; i++) {
  c.rect(80 + i * cw, ay, cw, ch, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.2, roughness: 1.2 });
  if (i < 2) c.txt(80 + i * cw + cw / 2, ay + ch / 2 + 12, ['Reinhardt', 'Mercy'][i], 22, C.GRAY, 600);
}
c.txt(80 + 5 * cw + 40, ay + ch / 2 + 12, 'grootte ligt vast', 30, C.GRAY, 600, 'start');
// List groeit
c.txt(80, 470, 'List : groeit met Add()', 40, C.GRAY, 700, 'start');
const ly = 520;
function lc(x, t, dashed) {
  const o = { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 2.6, roughness: 1.2 };
  if (dashed) o.strokeLineDash = [10, 7];
  c.rect(x, ly, cw, ch, o);
  c.txt(x + cw / 2, ly + ch / 2 + 12, t, 24, C.GRAY, 700);
}
lc(80, 'Reinhardt'); lc(80 + cw, 'Mercy'); lc(80 + 2 * cw, 'Tracer', true);
c.arrow(80 + 2 * cw - 10, ly - 30, 80 + 2 * cw + cw / 2, ly - 6, { strokeWidth: 2.6, head: 15 });
c.txt(80 + 2 * cw + 40, ly - 50, 'Add("Tracer")', 32, C.RED_DARK, 700, 'start');
c.txt(80 + 3 * cw + 30, ly + ch / 2 + 12, '. . .  blijft groeien', 32, C.GRAY, 600, 'start');
c.save(__dirname, 'listgroeit', 'NEW');
