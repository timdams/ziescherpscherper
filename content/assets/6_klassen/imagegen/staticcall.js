// H8 - staticcall: instantie-methode mag alles; static-methode enkel static
const { createCanvas, C } = require('./excal');
const c = createCanvas(1520, 640);
const GREEN = '#5f9b3f';
function box(x, y, w, h, lines) {
  c.rect(x, y, w, h, { fill: '#f4f6f7', fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.6, roughness: 1.05 });
  const arr = Array.isArray(lines) ? lines : [lines];
  const s = 34, startY = y + h / 2 - (arr.length - 1) * s * 0.6 + s * 0.34;
  arr.forEach((t, i) => c.txt(x + w / 2, startY + i * s * 1.15, t, s, C.GRAY, 600));
}
box(40, 230, 340, 170, ['methode in', 'instantie']);
box(560, 40, 440, 160, ['instantie variabelen', 'en methoden']);
box(560, 440, 440, 160, ['static variabelen', 'en methoden']);
box(1140, 230, 340, 170, 'static methode');

// instantie-methode -> beide (groen, mag)
c.line(380, 315, 470, 315, { stroke: GREEN, strokeWidth: 9, roughness: 1 });
c.line(470, 315, 470, 120, { stroke: GREEN, strokeWidth: 9, roughness: 1 });
c.arrow(470, 120, 552, 120, { stroke: GREEN, strokeWidth: 9, head: 26, roughness: 1 });
c.line(470, 315, 470, 520, { stroke: GREEN, strokeWidth: 9, roughness: 1 });
c.arrow(470, 520, 552, 520, { stroke: GREEN, strokeWidth: 9, head: 26, roughness: 1 });

// static-methode -> static (groen, mag)
c.line(1140, 315, 1050, 315, { stroke: GREEN, strokeWidth: 9, roughness: 1 });
c.line(1050, 315, 1050, 520, { stroke: GREEN, strokeWidth: 9, roughness: 1 });
c.arrow(1050, 520, 1008, 520, { stroke: GREEN, strokeWidth: 9, head: 26, roughness: 1 });
// static-methode -> instantie (rood, mag NIET)
c.line(1050, 315, 1050, 120, { stroke: C.RED, strokeWidth: 9, roughness: 1 });
c.arrow(1050, 120, 1008, 120, { stroke: C.RED, strokeWidth: 9, head: 26, roughness: 1 });
// kruis op de verboden pijl
c.line(1010, 175, 1090, 235, { stroke: C.RED, strokeWidth: 6, roughness: 1 });
c.line(1090, 175, 1010, 235, { stroke: C.RED, strokeWidth: 6, roughness: 1 });

c.save(__dirname, 'staticcall', 'NEW');
