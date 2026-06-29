const { createCanvas, C, region, REGION } = require('./arr');
const { stackBox, COL } = require('./over');
const c = createCanvas(1700, 1120);
region(c, 40, 40, 560, 1040, REGION.STACK, 'STACK', '#3a7d34');
region(c, 660, 40, 1000, 1040, REGION.HEAP, 'HEAP', '#b9881f');
c.line(625, 60, 625, 1060, { strokeWidth: 3, strokeLineDash: [16, 13], roughness: 0.5, disableMultiStroke: true });

function vbox(x, y, w, h, t, colKey) {
  const [f, s] = COL[colKey];
  c.rect(x, y, w, h, { fill: f, fillStyle: 'solid', stroke: s, strokeWidth: 2.4, roughness: 1.05 });
  c.txt(x + w / 2, y + h / 2 + 16, t, 46, C.GRAY, 700);
}
// eenHuis -> Huis-object
vbox(120, 300, 360, 200, '0x6721', 'purple');
c.bubble(300, 130, 300, 130, 'eenHuis', 300, 298, 44);
stackBox(c, 1080, 480, 230, [['gray', 90], ['purple', 200]], null, 46);
c.line(480, 400, 760, 400, { strokeWidth: 2.6 });
c.line(760, 400, 760, 360, { strokeWidth: 2.6 });
c.arrow(760, 360, 1072, 360, { strokeWidth: 2.6, head: 16 });
// groteVilla -> Villa-object
vbox(120, 760, 360, 200, '0x5679', 'blue');
c.bubble(300, 590, 320, 130, 'groteVilla', 300, 758, 44);
stackBox(c, 1080, 1030, 230, [['gray', 90], ['purple', 200], ['blue', 200]], null, 46);
c.line(480, 860, 760, 860, { strokeWidth: 2.6 });
c.line(760, 860, 760, 910, { strokeWidth: 2.6 });
c.arrow(760, 910, 1072, 910, { strokeWidth: 2.6, head: 16 });
c.save(__dirname, 'overervinggeheugen', 'NEW');
