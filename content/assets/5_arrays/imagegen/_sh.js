// gedeelde stukjes voor queenabba/refarr
const { createCanvas, C, region, REGION } = require('./arr');
function base(W) {
  const c = createCanvas(W, 1480);
  region(c, 40, 40, 780, 1400, REGION.STACK, 'STACK', '#3a7d34');
  region(c, 880, 40, W - 880 - 40, 1400, REGION.HEAP, 'HEAP', '#b9881f');
  c.line(850, 60, 850, 1420, { strokeWidth: 3, strokeLineDash: [16, 13], roughness: 0.5, disableMultiStroke: true });
  return c;
}
function vslot(c, x, y, w, h, addr) {
  c.rect(x, y, w, h, { fill: '#e3d4ea', fillStyle: 'solid', stroke: '#9b7bb0', strokeWidth: 2.4, roughness: 1.05 });
  c.txt(x + w / 2, y + h / 2 + 14, addr, 46, C.GRAY, 700);
}
module.exports = { base, vslot, C };
