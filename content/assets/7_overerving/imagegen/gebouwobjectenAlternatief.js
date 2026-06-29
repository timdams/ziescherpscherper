// alternatief: overerving als geneste kaders (Villa bevat Huis bevat Gebouw)
const { createCanvas, C, COL } = require('./over');
const c = createCanvas(1500, 760);
function frame(x, y, w, h, label, colKey) {
  const [f, s] = COL[colKey];
  c.rect(x, y, w, h, { fill: f, fillStyle: 'solid', stroke: s, strokeWidth: 2.8, roughness: 1.05 });
  c.txt(x + w / 2, y + 46, label, 36, C.GRAY, 700);
}
// Gebouw
frame(40, 120, 300, 200, 'Gebouw', 'gray');
// Huis = Gebouw erin
frame(380, 90, 320, 320, 'Huis', 'purple');
frame(420, 200, 240, 170, 'Gebouw', 'gray');
// Appartement
frame(740, 90, 320, 320, 'Appartement', 'green');
frame(780, 200, 240, 170, 'Gebouw', 'gray');
// Villa = Huis (= Gebouw) erin
frame(1100, 60, 360, 600, 'Villa', 'blue');
frame(1140, 200, 280, 420, 'Huis', 'purple');
frame(1180, 330, 200, 260, 'Gebouw', 'gray');
c.save(__dirname, 'gebouwobjectenAlternatief', '');
