// Gedeelde iconen (hand-drawn): toetsenbord en scherm.
// Gebruikt door inuit.js en readline.js.
const { C } = require('./excal');

// toetsenbord; x,y = linkerbovenhoek
function keyboard(c, x, y) {
  const w = 210, h = 120;
  c.rect(x, y, w, h, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.2 });
  const cols = 6, rows = 3, gx = 14, gy = 16, kw = (w - gx * 2) / cols - 6, kh = (h - gy * 2) / rows - 6;
  for (let r = 0; r < rows; r++)
    for (let col = 0; col < cols; col++)
      c.rect(x + gx + col * (kw + 6), y + gy + r * (kh + 6), kw, kh, { fill: C.OFFWHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 1.4, roughness: 1.4 });
  c.rect(x + 50, y + h - 4, w - 100, 6, { fill: C.OFFWHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 1.4, roughness: 1.2 });
}

// scherm; cx = horizontale as, y = bovenkant
function monitor(c, cx, y) {
  const w = 210, h = 130;
  c.rect(cx - w / 2, y, w, h, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.6, roughness: 1.2 });
  c.rect(cx - w / 2 + 14, y + 14, w - 28, h - 28, { fill: C.OFFWHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 1.4, roughness: 1.3 });
  c.line(cx, y + h, cx, y + h + 26, { strokeWidth: 3 });
  c.line(cx - 36, y + h + 26, cx + 36, y + h + 26, { strokeWidth: 3 });
}

module.exports = { keyboard, monitor };
