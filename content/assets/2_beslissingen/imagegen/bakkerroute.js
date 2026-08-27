// H4 - bakkerroute: de route naar de bakker, met twee tests die de weg bepalen
// Draaien vanuit de imagegen-map:  node bakkerroute.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1620, 670);

const TY = 340;   // hoogte van het pad

// ---------- het pad ----------
c.line(120, TY, 1450, TY, { strokeWidth: 3, roughness: 1.3, strokeLineDash: [18, 14] });
function chevron(x) {   // richtingsteken op het pad
  c.line(x, TY - 15, x + 17, TY, { strokeWidth: 2.6, roughness: 1 });
  c.line(x + 17, TY, x, TY + 15, { strokeWidth: 2.6, roughness: 1 });
}
[330, 640, 1300].forEach(chevron);

// ---------- wegwijzer met paal naar het pad ----------
function bord(x, y, w, h, tekst) {
  c.rect(x, y, w, h, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 2.4 });
  c.txt(x + w / 2, y + h / 2 + 12, tekst, 34, C.RED_DARK, 700);
  c.line(x + w / 2, y + h, x + w / 2, TY - 8, { strokeWidth: 2.6 });
}

// ---------- stopbord aan het einde van een doodlopende tak ----------
function stopbord(cx, cy, r) {
  const pts = [];
  for (let i = 0; i < 8; i++) {
    const a = Math.PI / 8 + i * Math.PI / 4;
    pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
  }
  c.poly(pts, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 2.6 });
  c.txt(cx, cy + 11, 'STOP', 32, C.RED_DARK, 700);
}

// ---------- thuis ----------
c.rect(110, 210, 160, 130);
c.poly([[85, 210], [190, 125], [295, 210]],
  { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 7, fillWeight: 1.6, stroke: C.RED_DARK, strokeWidth: 2.4 });
c.rect(165, 265, 50, 75);
c.txt(190, 85, 'thuis', 36, C.GRAY, 700);

// ---------- test 1: geld op? ----------
bord(350, 185, 250, 78, 'Geld op?');
c.arrow(475, 352, 475, 445, { strokeWidth: 2.6, head: 15, strokeLineDash: [16, 12] });
c.txt(500, 410, 'ja', 30, C.GRAY, 700, 'start');
stopbord(475, 512, 58);
c.txt(475, 615, 'je blijft thuis', 34, C.GRAY, 600);
c.txt(515, 315, 'nee', 30, C.GRAY, 700, 'start');

// ---------- de bakker ----------
c.rect(700, 190, 260, 150);
c.rect(688, 158, 284, 34,
  { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 7, fillWeight: 1.6, stroke: C.RED_DARK, strokeWidth: 2.4 });
c.txt(830, 250, 'BAKKER', 40, C.GRAY, 700);
c.rect(795, 270, 70, 70);

// ---------- test 2: bakker toe? ----------
bord(1020, 185, 290, 78, 'Bakker toe?');
c.arrow(1165, 352, 1165, 445, { strokeWidth: 2.6, head: 15, strokeLineDash: [16, 12] });
c.txt(1190, 410, 'ja', 30, C.GRAY, 700, 'start');
stopbord(1165, 512, 58);
c.txt(1165, 615, 'je keert huiswaarts', 34, C.GRAY, 600);
c.txt(1210, 315, 'nee', 30, C.GRAY, 700, 'start');

// ---------- het brood ----------
c.ellipse(1450, 270, 190, 105,
  { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 8, fillWeight: 1.6, stroke: C.RED_DARK, strokeWidth: 2.6 });
[-45, 0, 45].forEach(dx => c.line(1450 + dx - 16, 252, 1450 + dx + 12, 286, { stroke: C.RED_DARK, strokeWidth: 2.2 }));
c.txt(1450, 410, 'smullen maar', 36, C.GRAY, 700);

c.save('.', 'bakkerroute', '');
