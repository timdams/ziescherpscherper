const { createCanvas, C, clsbox, inhUp } = require('./over');
const c = createCanvas(1640, 740);
// klassen links
clsbox(c, 80, 60, 520, 170, null, 'gray', 44);
c.txt(340, 120, 'Vliegtuig', 46, C.GRAY, 700);
c.txt(340, 185, 'virtual Vlieg()', 36, C.GRAY, 600);
clsbox(c, 80, 470, 520, 170, null, 'blue', 44);
c.txt(340, 530, 'Raket', 46, C.GRAY, 700);
c.txt(340, 595, 'override Vlieg()', 36, C.GRAY, 600);
inhUp(c, 340, 470, 230);
// console-output rechts
function out(x, y, w, h, txt) {
  c.rect(x, y, w, h, { fill: C.OFFWHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.1 });
  c.txt(x + w / 2, y + h / 2 + 12, txt, 32, C.GRAY, 600);
}
out(960, 75, 620, 140, '"Het vliegtuig vliegt door de wolken."');
out(960, 485, 620, 140, '"De raket verdwijnt in de ruimte."');
// pijlen klasse -> output
c.arrow(640, 145, 952, 145, { strokeWidth: 2.6, head: 16 });
c.txt(800, 110, 'topGun.Vlieg()', 32, C.RED_DARK, 700);
c.arrow(640, 555, 952, 555, { strokeWidth: 2.6, head: 16 });
c.txt(800, 520, 'spaceX1.Vlieg()', 32, C.RED_DARK, 700);
c.save(__dirname, 'virtualoverride', 'NEW');
