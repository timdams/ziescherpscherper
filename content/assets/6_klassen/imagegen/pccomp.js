// H8 - pccomp: object met referentie naar een ander object (compositie in geheugen)
const { createCanvas, C, region, REGION } = require('./arr');
const c = createCanvas(2000, 1120);
region(c, 40, 40, 560, 1040, REGION.STACK, 'STACK', '#3a7d34');
region(c, 660, 40, 1300, 1040, REGION.HEAP, 'HEAP', '#b9881f');
c.line(625, 60, 625, 1060, { strokeWidth: 3, strokeLineDash: [16, 13], roughness: 0.5, disableMultiStroke: true });

function cbox3d(x, y, w, h, tc, sc, fc) {
  const d = 42;
  c.poly([[x, y], [x + d, y - d], [x + w + d, y - d], [x + w, y]], { fill: tc, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 1.8, roughness: 1.1 });
  c.poly([[x + w, y], [x + w + d, y - d], [x + w + d, y + h - d], [x + w, y + h]], { fill: sc, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 1.8, roughness: 1.1 });
  c.rect(x, y, w, h, { fill: fc, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.2, roughness: 1.05 });
}
function vbox(x, y, w, h, t) {
  c.rect(x, y, w, h, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.05 });
  c.txt(x + w / 2, y + h / 2 + 16, t, 46, C.GRAY, 700);
}

// stack: mijnSuperPC -> 0x3342
vbox(120, 430, 360, 200, '0x3342');
c.bubble(300, 210, 320, 140, 'mijnSuperPC', 300, 428, 44);

// PC-object (blauw)
cbox3d(840, 220, 840, 540, '#cdddf2', '#b6cbe8', '#dde9f8');
c.lines(1300, 300, ['PC-object', '(adres: 0x3342)'], 40, C.GRAY, 600);
// arrow 0x3342 -> PC-object
c.line(480, 520, 700, 520, { strokeWidth: 2.6 });
c.line(700, 520, 700, 430, { strokeWidth: 2.6 });
c.arrow(700, 430, 832, 430, { strokeWidth: 2.6, head: 16 });

// cHardeSchijf -> 0x7897 (binnen PC-object)
vbox(1120, 560, 380, 150, '0x7897');
c.bubble(1310, 410, 360, 120, 'cHardeSchijf', 1310, 558, 40);

// HardeSchijf-object (rood)
cbox3d(1470, 850, 440, 200, '#f5d6d6', '#eec1c1', '#fae3e3');
c.lines(1700, 930, ['HardeSchijf-object', '(adres: 0x7897)'], 38, C.GRAY, 600);
// arrow 0x7897 -> HardeSchijf-object
c.line(1310, 710, 1310, 940, { strokeWidth: 2.6 });
c.arrow(1310, 940, 1462, 940, { strokeWidth: 2.6, head: 16 });

c.save(__dirname, 'pccomp', 'NEW');
