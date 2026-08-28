// H6 - bakkerroutelus: dezelfde route als in H5, maar de test stuurt je nu terug
// naar de vorige plek in het algoritme in plaats van naar een stopbord.
// Draaien vanuit de imagegen-map:  node bakkerroutelus.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1580, 600);

const TY = 330;   // hoogte van het pad

// ---------- het pad ----------
c.line(120, TY, 1340, TY, { strokeWidth: 3, roughness: 1.3, strokeLineDash: [18, 14] });
function chevron(x) {   // richtingsteken op het pad
  c.line(x, TY - 15, x + 17, TY, { strokeWidth: 2.6, roughness: 1 });
  c.line(x + 17, TY, x, TY + 15, { strokeWidth: 2.6, roughness: 1 });
}
[400, 960, 1250].forEach(chevron);

// ---------- wegwijzer met paal naar het pad ----------
function bord(x, y, w, h, tekst) {
  c.rect(x, y, w, h, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 2.4 });
  c.txt(x + w / 2, y + h / 2 + 12, tekst, 34, C.RED_DARK, 700);
  c.line(x + w / 2, y + h, x + w / 2, TY - 8, { strokeWidth: 2.6 });
}

// ---------- thuis ----------
c.rect(110, 200, 160, 130);
c.poly([[85, 200], [190, 115], [295, 200]],
  { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 7, fillWeight: 1.6, stroke: C.RED_DARK, strokeWidth: 2.4 });
c.rect(165, 255, 50, 75);
c.txt(190, 80, 'thuis', 36, C.GRAY, 700);

// ---------- de bakker ----------
c.rect(620, 180, 260, 150);
c.rect(608, 148, 284, 34,
  { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 7, fillWeight: 1.6, stroke: C.RED_DARK, strokeWidth: 2.4 });
c.txt(750, 240, 'BAKKER', 40, C.GRAY, 700);
c.rect(715, 260, 70, 70);

// ---------- de test ----------
bord(1000, 165, 290, 78, 'Bakker toe?');
c.txt(1180, 300, 'nee', 30, C.GRAY, 700, 'start');

// ---------- de lus: terug naar de vorige plek ----------
c.carrow(1145, 352, 870, 600, 600, 345,
  { stroke: C.RED_DARK, strokeWidth: 2.8, head: 17, strokeLineDash: [16, 12] });
c.txt(1090, 430, 'ja', 30, C.GRAY, 700, 'start');
c.txt(870, 550, 'wandel naar de volgende bakker', 34, C.RED_DARK, 700);

// ---------- het brood ----------
c.ellipse(1440, 255, 190, 105,
  { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 8, fillWeight: 1.6, stroke: C.RED_DARK, strokeWidth: 2.6 });
[-45, 0, 45].forEach(dx => c.line(1440 + dx - 16, 237, 1440 + dx + 12, 271, { stroke: C.RED_DARK, strokeWidth: 2.2 }));
c.txt(1440, 395, 'smullen maar', 36, C.GRAY, 700);

c.save('.', 'bakkerroutelus', '');
