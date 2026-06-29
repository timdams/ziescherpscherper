// H7 - methodeAlternatief: een methode is een machine (input -> verwerking -> output)
const { createCanvas, C } = require('./excal');
const c = createCanvas(1600, 760);

// de machine
const mx = 600, my = 280, mw = 420, mh = 280;
c.rect(mx, my, mw, mh, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 3, roughness: 1.1 });
// tandwieltjes bovenop
function gear(cx, cy, r) {
  c.circle(cx, cy, r * 2, { fill: C.WHITE, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 2.4 });
  for (let a = 0; a < 8; a++) { const ang = a * Math.PI / 4; c.line(cx + Math.cos(ang) * r, cy + Math.sin(ang) * r, cx + Math.cos(ang) * (r + 14), cy + Math.sin(ang) * (r + 14), { strokeWidth: 2.6, roughness: 1 }); }
}
gear(mx + 150, my + 110, 38);
gear(mx + 250, my + 150, 30);
c.txt(mx + mw / 2, my + 240, 'BerekenBtw', 40, C.RED_DARK, 700);

// inputs links
function tag(x, y, t) {
  c.rect(x, y, 280, 80, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.2 });
  c.txt(x + 140, y + 52, t, 32, C.GRAY, 700);
}
tag(120, 300, 'bedrag = 100');
tag(120, 440, 'tarief = 21');
c.txt(260, 270, 'parameters', 30, C.RED_DARK, 700);
c.arrow(400, 340, mx - 6, 380, { strokeWidth: 2.6, head: 16 });
c.arrow(400, 480, mx - 6, 460, { strokeWidth: 2.6, head: 16 });

// output rechts
c.arrow(mx + mw + 6, 420, 1230, 420, { strokeWidth: 2.8, head: 18 });
c.txt(1130, 385, 'return', 30, C.RED_DARK, 700, 'start');
c.rect(1240, 360, 240, 120, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED, strokeWidth: 2.6, roughness: 1.2 });
c.txt(1360, 432, '21.0', 48, C.RED_DARK, 700);

c.save(__dirname, 'methodeAlternatief', '');
