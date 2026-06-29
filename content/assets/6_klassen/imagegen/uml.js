const { createCanvas, C } = require('./excal');

function classbox(c, x, y, w, h, name) {
  c.rect(x, y, w, h, { fill: '#eef0f2', fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.6, roughness: 1.05 });
  c.txt(x + w / 2, y + h / 2 + 14, name, 40, C.GRAY, 700);
}

// connector met ruit aan de 'geheel'-kant (px,py); filled = compositie, open = aggregatie
function conn(c, px, py, cx, cy, filled) {
  const ang = Math.atan2(cy - py, cx - px);
  const al = [Math.cos(ang), Math.sin(ang)], pe = [-Math.sin(ang), Math.cos(ang)];
  const len = 50, half = 22;
  const tip = [px, py];
  const far = [px + al[0] * len, py + al[1] * len];
  const s1 = [px + al[0] * len / 2 + pe[0] * half, py + al[1] * len / 2 + pe[1] * half];
  const s2 = [px + al[0] * len / 2 - pe[0] * half, py + al[1] * len / 2 - pe[1] * half];
  c.line(far[0], far[1], cx, cy, { strokeWidth: 2.6, roughness: 1.1 });
  c.poly([tip, s1, far, s2], { fill: filled ? C.GRAY : C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1 });
}

module.exports = { createCanvas, C, classbox, conn };
