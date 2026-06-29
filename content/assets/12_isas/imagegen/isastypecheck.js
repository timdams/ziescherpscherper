const { createCanvas, C } = require('./excal');
const c = createCanvas(1500, 640);
c.txt(710, 100, 'is Voertuig', 40, C.GRAY, 700);
c.txt(1140, 100, 'as Voertuig', 40, C.GRAY, 700);
function cell(x, y, w, t, ok) {
  c.rect(x, y, w, 120, { fill: ok ? '#d9ead3' : '#f8d7d4', fillStyle: 'solid', stroke: ok ? '#5a9440' : '#c0392b', strokeWidth: 2.6, roughness: 1.1 });
  c.txt(x + w / 2, y + 74, t, 38, C.GRAY, 700);
}
// rij 1: mijnAuto
c.txt(310, 230, 'mijnAuto', 42, C.GRAY, 700, 'end');
c.txt(310, 280, '(een Auto)', 30, C.GRAY, 500, 'end');
cell(610, 170, 200, 'true', true);
cell(1010, 170, 280, 'Voertuig-ref', true);
// rij 2: rambo
c.txt(310, 440, 'rambo', 42, C.GRAY, 700, 'end');
c.txt(310, 490, '(een Persoon)', 30, C.GRAY, 500, 'end');
cell(610, 380, 200, 'false', false);
cell(1010, 380, 280, 'null', false);
c.save(__dirname, 'isastypecheck', 'NEW');
