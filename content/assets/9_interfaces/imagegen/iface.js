// H10 - gedeelde helpers voor interface-afbeeldingen
const { createCanvas, C } = require('./excal');
const GREEN_F = '#e2eed8', GREEN_T = '#cfe0c2', GREEN_S = '#bcd3ab', GREEN_L = '#6a9a4f';
const YEL_F = '#fdf3da', YEL_L = '#cbb05a';
const IMPL_F = '#ef6b63', IMPL_S = '#c0392b', IMPL_T = '#5e120c';

function classbox3d(c, x, y, w, h, name) {
  const d = 48;
  c.poly([[x, y], [x + d, y - d], [x + w + d, y - d], [x + w, y]], { fill: GREEN_T, fillStyle: 'solid', stroke: GREEN_L, strokeWidth: 2, roughness: 1.1 });
  c.poly([[x + w, y], [x + w + d, y - d], [x + w + d, y + h - d], [x + w, y + h]], { fill: GREEN_S, fillStyle: 'solid', stroke: GREEN_L, strokeWidth: 2, roughness: 1.1 });
  c.rect(x, y, w, h, { fill: GREEN_F, fillStyle: 'solid', stroke: GREEN_L, strokeWidth: 2.4, roughness: 1.05 });
  if (name) c.txt(x + w / 2, y + 66, name, 46, C.GRAY, 800);
}
// methoderegel: naam links + vakje rechts. opts: {empty, dashed}
function methodRow(c, nameX, boxX, y, name, bw, bh, opts) {
  opts = opts || {};
  c.txt(nameX, y + bh / 2 + 13, name, 38, C.GRAY, 600, 'end');
  if (opts.empty) {
    c.rect(boxX, y, bw, bh, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.2, roughness: 1.1 });
  } else {
    const o = { fill: IMPL_F, fillStyle: 'solid', stroke: IMPL_S, strokeWidth: 2.4, roughness: 1.1 };
    if (opts.dashed) o.strokeLineDash = [10, 7];
    c.rect(boxX, y, bw, bh, o);
    c.txt(boxX + bw / 2, y + bh / 2 + 13, 'implementatie', 36, IMPL_T, 700);
  }
}
// lollipop interface-symbool: cirkel + lijn naar (toX,toY), label rechts
function lollipop(c, cx, cy, toX, toY, label, dia) {
  dia = dia || 56;
  c.line(cx, cy + dia / 2, toX, toY, { strokeWidth: 2.6 });
  c.circle(cx, cy, dia, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.6, roughness: 1 });
  if (label) c.txt(cx + dia / 2 + 24, cy + 14, label, 40, C.GRAY, 700, 'start');
}

module.exports = { createCanvas, C, classbox3d, methodRow, lollipop, YEL_F, YEL_L, IMPL_F, IMPL_S, IMPL_T };
