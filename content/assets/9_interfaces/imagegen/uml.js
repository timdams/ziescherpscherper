const { createCanvas, C, lollipop } = require('./iface');
const c = createCanvas(1120, 450);
function clsbox(x, y, w, h, name, stereo) {
  c.rect(x, y, w, h, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.6, roughness: 1.05 });
  c.txt(x + w / 2, y + h / 2 - 6, name, 44, C.GRAY, 800);
  c.txt(x + w / 2, y + h / 2 + 46, stereo, 36, C.GRAY, 400);
}
clsbox(80, 150, 380, 240, 'WerkStudent', 'Klasse');
lollipop(c, 160, 70, 160, 150, 'IVerkortTraject');
clsbox(660, 150, 380, 240, 'IVerkortTraject', 'Interface');
c.save(__dirname, 'uml', 'NEW');
