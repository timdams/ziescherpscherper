const { createCanvas, C, region, REGION } = require('./arr');
const { dierBox, COL } = require('./over');
const c = createCanvas(2040, 1120);
region(c, 40, 40, 520, 1040, REGION.STACK, 'STACK', '#3a7d34');
region(c, 620, 40, 1380, 1040, REGION.HEAP, 'HEAP', '#b9881f');
c.line(585, 60, 585, 1060, { strokeWidth: 3, strokeLineDash: [16, 13], roughness: 0.5, disableMultiStroke: true });
function vbox(x, y, w, h, t) {
  c.rect(x, y, w, h, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.05 });
  c.txt(x + w / 2, y + h / 2 + 14, t, 40, C.GRAY, 700);
}
// someAnimal -> Varken
vbox(90, 170, 400, 150, 'someAnimal');
dierBox(c, 1380, 200, 540, 340, { sub: 'green', subName: 'Varken', subH: 150, ret: ['return', '"Oinoink"'], retColor: 'green' });
c.arrow(490, 245, 1372, 360, { strokeWidth: 2.6, head: 16 });
// anotherAnimal -> Paard
vbox(90, 520, 400, 150, 'anotherAnimal');
dierBox(c, 760, 640, 540, 340, { sub: 'purple', subName: 'Paard', subH: 150, ret: ['return', '"Hinnikhinnik"'], retColor: 'purple' });
c.arrow(490, 595, 752, 800, { strokeWidth: 2.6, head: 16 });
c.save(__dirname, 'varkenpaard', 'NEW');
