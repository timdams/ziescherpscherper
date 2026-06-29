// stack: LIFO-toren, Push() bovenaan in, Pop() bovenaan uit
const { createCanvas, C } = require('./excal');
const c = createCanvas(1500, 1120);

// verticale 3D-container met OPEN bovenkant (depth naar links-boven)
function container(x, y, w, h, d) {
  // linkerzijvlak
  c.poly([[x, y], [x - d, y - d], [x - d, y + h - d], [x, y + h]],
    { fill: C.BOX_SIDE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2, roughness: 0.9, bowing: 0.6 });
  // open bovenkant (kijkt in de doos -> lichte vulling)
  c.poly([[x, y], [x - d, y - d], [x + w - d, y - d], [x + w, y]],
    { fill: C.OFFWHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2, roughness: 0.9, bowing: 0.6 });
  // voorvlak
  c.rect(x, y, w, h, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 2.4, roughness: 0.8, bowing: 0.5 });
}

c.txt(560, 70, 'LIFO', 50, C.RED_DARK, 700);

const x = 520, y = 240, w = 320, h = 760, d = 46;
container(x, y, w, h, d);
c.txt(x + w / 2, y + 70, 'Stack', 44, C.GRAY, 700);
c.txt(x + w + 60, 210, 'Bovenkant', 36, C.GRAY, 600, 'start');
c.txt(x + w + 60, y + h - 10, 'Onderkant', 36, C.GRAY, 600, 'start');

// 3 vakjes gestapeld
const cw = 200, chh = 190, cx = x + (w - cw) / 2;
for (let i = 0; i < 3; i++) c.rect(cx, 340 + i * (chh + 10), cw, chh, { roughness: 1.4 });

// bronvakje links + Push() (label boven de pijl, links van de container)
c.rect(80, 300, 140, 140);
c.txt(330, 285, 'Push()', 36, C.GRAY, 700);
c.arrow(225, 370, 655, 335, { strokeWidth: 2.4 });

// doelvakje rechts + Pop() (label boven de pijl, rechts van de container)
c.rect(1240, 300, 140, 140);
c.txt(1010, 320, 'Pop()', 36, C.GRAY, 700);
c.arrow(705, 335, 1235, 370, { strokeWidth: 2.4 });

c.save(__dirname, 'stack');
