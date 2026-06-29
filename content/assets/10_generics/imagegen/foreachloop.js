const { createCanvas, C } = require('./excal');
const c = createCanvas(1420, 780);
const vals = ['1.2', '0.89', '3.15', '0.1'], cw = 210, ch = 150, x0 = 150, y = 180;
c.txt(x0, y - 40, 'metingen', 40, C.GRAY, 700, 'start');
vals.forEach((v, i) => {
  const hl = i === 0;
  c.rect(x0 + i * cw, y, cw, ch, hl ? { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED, strokeWidth: 2.8, roughness: 1.2 } : { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2, roughness: 1.2 });
  c.txt(x0 + i * cw + cw / 2, y + ch / 2 + 16, v, 44, C.GRAY, 700);
});
// iteration variable
c.txt(x0 + 180, 500, 'meting', 38, C.RED_DARK, 700);
c.rect(x0, 525, 360, 150, { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 7, fillWeight: 1.6, stroke: C.RED_DARK, strokeWidth: 2.6, roughness: 1.2 });
c.txt(x0 + 180, 612, '1.2', 50, C.GRAY, 700);
c.arrow(x0 + cw / 2, y + ch + 10, x0 + 180, 520, { strokeWidth: 2.8, head: 18 });
// lus-pijl: herhaalt voor elk element
c.carrow(x0 + 360, 600, 1150, 720, 1100, y + ch / 2, { strokeWidth: 2.6, head: 16, roughness: 1 });
c.lines(1100, 500, ['elk element komt', 'één voor één', 'in meting'], 32, C.GRAY, 600, 'middle', 1.15);
c.save(__dirname, 'foreachloop', 'NEW');
