const { C } = require('./excal');
function folder(c, x, y, w, h, label) {
  c.poly([[x, y], [x + 10, y - 24], [x + w * 0.4, y - 24], [x + w * 0.5, y], [x, y]], { fill: '#f3e2a6', fillStyle: 'solid', stroke: '#c8a83a', strokeWidth: 2, roughness: 1.1 });
  c.rect(x, y, w, h, { fill: '#fdeeb8', fillStyle: 'solid', stroke: '#c8a83a', strokeWidth: 2.4, roughness: 1.1 });
  c.txt(x + w / 2, y + h / 2 + 13, label, 36, C.GRAY, 700);
}
function file(c, x, y, w, h, title, lines, ts, cs) {
  const ear = 30;
  c.poly([[x, y], [x + w - ear, y], [x + w, y + ear], [x + w, y + h], [x, y + h]], { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.1 });
  c.line(x + w - ear, y, x + w - ear, y + ear, { strokeWidth: 1.8 });
  c.line(x + w - ear, y + ear, x + w, y + ear, { strokeWidth: 1.8 });
  if (title) c.txt(x + w / 2, y + (ts || 50), title, ts ? ts - 6 : 34, C.GRAY, 700);
  (lines || []).forEach((t, i) => c.txt(x + 26, y + (title ? 100 : 56) + i * (cs || 40), t, cs ? cs - 6 : 30, C.GRAY, 500, 'start'));
}
module.exports = { folder, file };
