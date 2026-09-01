// Gedeelde helpers voor H6/H7 methoden-afbeeldingen: 3D-codedoos + monitor.
const { C } = require('./excal');

// 3D-doos met titel (gecentreerd bovenaan) en links uitgelijnde coderegels.
// lines: array van {t, color} of gewone string (grijs).
function codebox(c, x, y, w, h, title, lines, o = {}) {
  const depth = o.depth || 30;
  c.poly([[x, y], [x + depth, y - depth], [x + w + depth, y - depth], [x + w, y]],
    { fill: C.BOX_TOP, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 1.8, roughness: 1.2 });
  c.poly([[x + w, y], [x + w + depth, y - depth], [x + w + depth, y + h - depth], [x + w, y + h]],
    { fill: C.BOX_SIDE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 1.8, roughness: 1.2 });
  c.rect(x, y, w, h, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2, roughness: 1.2 });
  const tSize = o.titleSize || 38;
  let cy = y + 14;
  if (title) { c.txt(x + w / 2, y + tSize + 8, title, tSize, C.GRAY, 700); cy = y + tSize + 30; }
  const cSize = o.codeSize || 30, lh = o.lh || 1.18, pad = o.pad || 28;
  (lines || []).forEach((ln, i) => {
    const yPos = cy + cSize + i * cSize * lh;
    if (Array.isArray(ln)) {
      c.txtSegs(x + pad, yPos, ln, cSize);
    } else {
      const t = typeof ln === 'string' ? ln : ln.t;
      const col = typeof ln === 'string' ? C.GRAY : (ln.color || C.GRAY);
      const xOff = (typeof ln === 'object' && ln.indent) ? ln.indent : 0;
      c.txt(x + pad + xOff, yPos, t, cSize, col, ln.weight || 500, 'start');
    }
  });
  return { fx: x, fy: y, fw: w, fh: h };
}

// monitor (scherm met label)
function monitor(c, cx, cyTop, w, h, label, size = 44) {
  c.rect(cx - w / 2, cyTop, w, h, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.8, roughness: 1.1 });
  c.rect(cx - w / 2 + 16, cyTop + 16, w - 32, h - 32, { fill: C.OFFWHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 1.6, roughness: 1.2 });
  c.txt(cx, cyTop + h / 2 + size * 0.34, label, size, C.GRAY, 700);
  c.line(cx, cyTop + h, cx, cyTop + h + 30, { strokeWidth: 3 });
  c.line(cx - 44, cyTop + h + 30, cx + 44, cyTop + h + 30, { strokeWidth: 3 });
}

module.exports = { codebox, monitor };
