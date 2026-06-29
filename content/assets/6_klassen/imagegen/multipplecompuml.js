// H8 - multipplecompuml: aggregatie met multipliciteiten
const { createCanvas, C, classbox } = require('./uml');
const c = createCanvas(1060, 500);

function diamond(c, px, py, ax, ay) { // open ruit, wijst in richting (ax,ay)
  const pe = [-ay, ax], len = 46, half = 20;
  const tip = [px, py], far = [px + ax * len, py + ay * len];
  const s1 = [px + ax * len / 2 + pe[0] * half, py + ay * len / 2 + pe[1] * half];
  const s2 = [px + ax * len / 2 - pe[0] * half, py + ay * len / 2 - pe[1] * half];
  c.poly([tip, s1, far, s2], { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1 });
  return far;
}

classbox(c, 340, 60, 320, 95, 'Computer');
classbox(c, 10, 370, 300, 100, 'Harde Schijf');
classbox(c, 350, 370, 300, 100, 'Processor');
classbox(c, 710, 370, 300, 100, 'Geluidskaart');

// Harde Schijf (links)
let f = diamond(c, 340, 108, -1, 0);
c.line(f[0], f[1], 160, 108, { strokeWidth: 2.6 });
c.line(160, 108, 160, 370, { strokeWidth: 2.6 });
c.txt(305, 60, '1', 44, C.GRAY, 700);
c.txt(120, 350, '0..4', 44, C.GRAY, 700, 'end');

// Processor (onder)
f = diamond(c, 500, 155, 0, 1);
c.line(f[0], f[1], 500, 370, { strokeWidth: 2.6 });
c.txt(455, 145, '1', 44, C.GRAY, 700, 'end');
c.txt(460, 350, '1..8', 44, C.GRAY, 700, 'end');

// Geluidskaart (rechts)
f = diamond(c, 660, 108, 1, 0);
c.line(f[0], f[1], 860, 108, { strokeWidth: 2.6 });
c.line(860, 108, 860, 370, { strokeWidth: 2.6 });
c.txt(695, 60, '1', 44, C.GRAY, 700);
c.txt(820, 350, '0..1', 44, C.GRAY, 700, 'end');

c.save(__dirname, 'multipplecompuml', 'NEW');
