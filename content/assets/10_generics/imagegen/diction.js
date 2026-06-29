// diction: Dictionary met Keys -> Values
const { createCanvas, C } = require('./excal');
const c = createCanvas(1100, 760);

// 3D-container
function container(x, y, w, h, d) {
  c.poly([[x, y], [x + d, y - d], [x + w + d, y - d], [x + w, y]], { fill: C.BOX_TOP, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2, roughness: 1.1 });
  c.poly([[x + w, y], [x + w + d, y - d], [x + w + d, y + h - d], [x + w, y + h]], { fill: C.BOX_SIDE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2, roughness: 1.1 });
  c.rect(x, y, w, h, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 2.6, roughness: 1 });
}

const x = 60, y = 90, w = 940, h = 600, d = 40;
container(x, y, w, h, d);
c.txt(x + w / 2, y + 70, 'Dictionary', 46, C.GRAY, 700);

// kolomtitels (onderstreept)
c.txt(280, y + 160, 'Keys', 40, C.GRAY, 700);
c.line(215, y + 175, 345, y + 175, { strokeWidth: 2, roughness: 1.5 });
c.txt(740, y + 160, 'Values', 40, C.GRAY, 700);
c.line(665, y + 175, 815, y + 175, { strokeWidth: 2, roughness: 1.5 });

const rows = [['123', '"Tim Dams"'], ['6463', '"James Bond"'], ['666', '"The beast"'], ['700', '"James Bond"']];
const kx = 150, vx = 600, rw = 260, rh = 78, ry0 = y + 205;
rows.forEach(([k, v], i) => {
  const ry = ry0 + i * (rh + 8);
  c.rect(kx, ry, rw, rh, { roughness: 1.5 });
  c.txt(kx + rw / 2, ry + rh / 2 + 12, k, 34, C.GRAY, 700);
  c.rect(vx, ry, rw, rh, { roughness: 1.5 });
  c.txt(vx + rw / 2, ry + rh / 2 + 12, v, 30, C.GRAY, 700);
  c.arrow(kx + rw + 12, ry + rh / 2, vx - 12, ry + rh / 2, { strokeWidth: 2.2, head: 14 });
});

c.save(__dirname, 'diction');
