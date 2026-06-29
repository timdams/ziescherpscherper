// H1 - compileAlternatief: van broncode naar werkend programma
const { createCanvas, C } = require('./excal');
const c = createCanvas(1290, 620);

// gecentreerd tekstblok (verticaal gecentreerd rond cy)
function blockText(cx, cy, arr, size, color, weight) {
  const lh = 1.12;
  const startY = cy - (arr.length - 1) * size * lh / 2 + size * 0.34;
  arr.forEach((s, i) => c.txt(cx, startY + i * size * lh, s, size, color, weight));
}

// 1. broncode (papier met code)
function paper(x, y, w, h) {
  c.rect(x, y, w, h, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.2 });
}
paper(70, 130, 360, 320);
blockText(250, 290, ['Algoritme in hogere', 'programmeertaal;'], 40, C.GRAY, 600);
c.txt(250, 505, 'jij schrijft dit', 30, C.GRAY, 500);

// 2. compiler (machine)
function gear(cx, cy, r) {
  c.circle(cx, cy, r * 2, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 2.6 });
  for (let a = 0; a < 8; a++) {
    const ang = a * Math.PI / 4;
    c.line(cx + Math.cos(ang) * r, cy + Math.sin(ang) * r, cx + Math.cos(ang) * (r + 22), cy + Math.sin(ang) * (r + 22), { strokeWidth: 3.2, roughness: 1 });
  }
  c.circle(cx, cy, r * 0.7, { fill: C.OFFWHITE, stroke: C.RED_DARK, strokeWidth: 2 });
}
gear(720, 290, 70);
c.txt(720, 480, 'Compiler', 36, C.RED_DARK, 700);
c.txt(720, 520, 'vertaalt je code', 28, C.GRAY, 500);

// 3. programma (.exe)
c.rect(900, 130, 320, 320, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.2 });
blockText(1060, 290, ['Je algoritme', 'in machinetaal'], 40, C.GRAY, 600);
c.txt(1060, 505, 'Compiler maakt dit', 30, C.GRAY, 500);


// pijlen (gewone flow)
c.arrow(440, 290, 630, 290, { strokeWidth: 2.8, head: 18 });
c.arrow(810, 290, 895, 290, { strokeWidth: 2.8, head: 18 });


c.save(__dirname, 'compilesimpleAlternatief', '');
