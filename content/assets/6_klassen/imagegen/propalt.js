// H8 - alternatieve property-voorstelling: tank 'energie' met kranen (get/set)
const { createCanvas, C } = require('./excal');
const PIPE = '#cfd4d8';

function padlock(c, cx, cy, s) {
  s = s || 1; const w = 64 * s, h = 52 * s;
  c.path(`M ${cx - w * 0.27} ${cy} A ${w * 0.27} ${w * 0.3} 0 1 1 ${cx + w * 0.27} ${cy}`, { stroke: C.RED_DARK, strokeWidth: 6 * s, fill: 'none', roughness: 0.7 });
  c.rect(cx - w / 2, cy, w, h, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 3 * s, roughness: 1 });
  c.circle(cx, cy + h * 0.45, 12 * s, { fill: C.RED_DARK, fillStyle: 'solid', stroke: C.RED_DARK });
}
function valve(c, cx, cy, r) {
  c.circle(cx, cy, r * 2, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 3 });
  c.line(cx - r, cy, cx + r, cy, { stroke: C.GRAY, strokeWidth: 3 });
  c.line(cx, cy - r, cx, cy + r, { stroke: C.GRAY, strokeWidth: 3 });
  c.circle(cx, cy, r * 0.5, { fill: C.OFFWHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2 });
}
function gear(c, cx, cy, r) {
  c.circle(cx, cy, r * 2, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.6 });
  for (let a = 0; a < 8; a++) { const ang = a * Math.PI / 4; c.line(cx + Math.cos(ang) * r, cy + Math.sin(ang) * r, cx + Math.cos(ang) * (r + 12), cy + Math.sin(ang) * (r + 12), { strokeWidth: 3.2 }); }
  c.circle(cx, cy, r * 0.62, { fill: C.OFFWHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2 });
}

function scene(opts) {
  const c = createCanvas(1520, 920);
  c.rect(120, 150, 1280, 700, { fill: '#eef4e8', fillStyle: 'solid', stroke: '#6a9a4f', strokeWidth: 3, roughness: 1.05 });
  c.txt(300, 230, 'SithLord', 48, C.GRAY, 700);
  const tx = 880, ty = 320, tw = 340, th = 420, tcx = tx + tw / 2;
  c.rect(tx, ty, tw, th, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 3, roughness: 1.05 });
  c.rect(tx, ty + th * 0.42, tw, th * 0.58, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED, strokeWidth: 2.2, roughness: 1 });
  c.txt(tcx, ty + th * 0.74, 'energie', 46, C.GRAY, 700);
  padlock(c, tx + tw - 8, ty - 30, 1.15);

  // SET = inlaat bovenaan (van buiten in de tank)
  if (opts.set) {
    c.rect(tcx - 26, 150, 52, ty - 150, { fill: PIPE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1 });
    c.arrow(tcx, 168, tcx, ty + 26, { strokeWidth: 4, head: 20, stroke: C.RED });
    valve(c, tcx, 236, 46);
    if (opts.privSet) padlock(c, tcx + 92, 232, 0.95);
    c.txt(tcx + (opts.privSet ? 156 : 92), 248, 'set', 46, C.RED_DARK, 700, 'start');
  }
  // GET = uitlaat links: pijl vertrekt vanuit energie, door de kraan, naar buiten
  if (opts.get) {
    const gy = ty + th * 0.66;
    c.rect(120, gy - 26, tx - 120, 52, { fill: PIPE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1 });
    c.arrow(tx - 10, gy, 60, gy, { strokeWidth: 4, head: 22, stroke: C.RED });
    if (opts.gear) gear(c, 690, gy, 50);
    valve(c, 470, gy, 46);
    c.txt(470, gy - 72, 'get', 46, C.RED_DARK, 700);
    c.txt(60, gy + 84, 'buitenwereld', 38, C.GRAY, 600, 'start');
  }
  return c;
}
module.exports = { scene };
