// H8 - gedeelde vocabulaire voor property-afbeeldingen (SithLord/energie)
const { createCanvas, C } = require('./excal');
const GREEN_F = '#e2eed8', GREEN_T = '#cfe0c2', GREEN_S = '#bcd3ab', GREEN_L = '#6a9a4f';
const PURP_F = '#e3d4ea', PURP_L = '#9b7bb0';

function classbox(c, x, y, w, h, name) {
  const d = 46;
  c.poly([[x, y], [x + d, y - d], [x + w + d, y - d], [x + w, y]], { fill: GREEN_T, fillStyle: 'solid', stroke: GREEN_L, strokeWidth: 2, roughness: 1.1 });
  c.poly([[x + w, y], [x + w + d, y - d], [x + w + d, y + h - d], [x + w, y + h]], { fill: GREEN_S, fillStyle: 'solid', stroke: GREEN_L, strokeWidth: 2, roughness: 1.1 });
  c.rect(x, y, w, h, { fill: GREEN_F, fillStyle: 'solid', stroke: GREEN_L, strokeWidth: 2.4, roughness: 1.05 });
  c.txt(x + w / 2, y + 78, name, 50, C.GRAY, 700);
}
function cylinder(c, cx, top, w, h, label) {
  const rx = w / 2, ry = h * 0.15;
  c.rect(cx - rx, top + ry, w, h - 2 * ry, { fill: C.WHITE, fillStyle: 'solid', stroke: C.WHITE, strokeWidth: 1 });
  c.line(cx - rx, top + ry, cx - rx, top + h - ry, { stroke: C.GRAY, strokeWidth: 2.6 });
  c.line(cx + rx, top + ry, cx + rx, top + h - ry, { stroke: C.GRAY, strokeWidth: 2.6 });
  c.path(`M ${cx - rx} ${top + h - ry} A ${rx} ${ry} 0 0 0 ${cx + rx} ${top + h - ry}`, { stroke: C.GRAY, strokeWidth: 2.6, fill: 'none' });
  c.ellipse(cx, top + ry, w, ry * 2, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.6 });
  c.txt(cx, top + h * 0.62, label, 46, C.GRAY, 600);
}
function padlock(c, cx, cy, s) {
  s = s || 1; const w = 70 * s, h = 58 * s;
  c.path(`M ${cx - w * 0.27} ${cy} A ${w * 0.27} ${w * 0.3} 0 1 1 ${cx + w * 0.27} ${cy}`, { stroke: C.RED_DARK, strokeWidth: 6 * s, fill: 'none', roughness: 0.7 });
  c.rect(cx - w / 2, cy, w, h, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 3 * s, roughness: 1 });
  c.circle(cx, cy + h * 0.45, 14 * s, { fill: C.RED_DARK, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 2 });
}
function hexagon(c, cx, cy, w, h) {
  const hw = w / 2, hh = h / 2, k = hw * 0.3;
  c.poly([[cx - hw + k, cy - hh], [cx + hw - k, cy - hh], [cx + hw, cy], [cx + hw - k, cy + hh], [cx - hw + k, cy + hh], [cx - hw, cy]], { fill: PURP_F, fillStyle: 'solid', stroke: PURP_L, strokeWidth: 2.6, roughness: 1.1 });
}
function gear(c, cx, cy, r) {
  c.circle(cx, cy, r * 2, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.6 });
  for (let a = 0; a < 8; a++) { const ang = a * Math.PI / 4; c.line(cx + Math.cos(ang) * r, cy + Math.sin(ang) * r, cx + Math.cos(ang) * (r + 13), cy + Math.sin(ang) * (r + 13), { strokeWidth: 3.4 }); }
  c.circle(cx, cy, r * 0.66, { fill: C.OFFWHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2 });
}
function barrow(c, xs, xe, y) {
  const dir = xe > xs ? 1 : -1, bh = 24, hh = 48, head = 64, xb = xe - dir * head;
  c.poly([[xs, y - bh], [xb, y - bh], [xb, y - hh], [xe, y], [xb, y + hh], [xb, y + bh], [xs, y + bh]], { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED, strokeWidth: 2.4, roughness: 1.05 });
}
function barrowV(c, ys, ye, x) {
  const dir = ye > ys ? 1 : -1, bw = 24, hw = 48, head = 64, yb = ye - dir * head;
  c.poly([[x - bw, ys], [x - bw, yb], [x - hw, yb], [x, ye], [x + hw, yb], [x + bw, yb], [x + bw, ys]], { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED, strokeWidth: 2.4, roughness: 1.05 });
}

function scene(opts) {
  const c = createCanvas(1500, 820);
  classbox(c, 360, 150, 1000, 560, 'SithLord');
  hexagon(c, 480, 470, 380, 350);
  const tipX = 1010;
  if (opts.set && opts.get) {
    barrow(c, 60, tipX, 385);
    barrow(c, tipX, 60, 565);
    cylinder(c, 1170, 320, 300, 280, 'energie');
    padlock(c, 1360, 290, 1.25);
    c.txt(470, 398, 'SET', 42, C.GRAY, 700);
    c.txt(480, 485, 'Energie property', 42, C.GRAY, 700);
    c.txt(470, 578, 'Get', 42, C.GRAY, 700);
  } else if (opts.get && !opts.set) {
    barrow(c, tipX, 60, 540);
    if (opts.gear) gear(c, 690, 540, 56);
    cylinder(c, 1170, 320, 300, 280, 'energie');
    padlock(c, 1360, 290, 1.25);
    c.txt(480, 430, 'Energie property', 42, C.GRAY, 700);
    c.txt(360, 553, 'Get', 42, C.GRAY, 700);
  } else if (opts.set && !opts.get) {
    barrow(c, 60, tipX, 420);
    cylinder(c, 1170, 320, 300, 280, 'energie');
    padlock(c, 1360, 290, 1.25);
    c.txt(360, 433, 'SET', 42, C.GRAY, 700);
    c.txt(480, 545, 'Energie property', 42, C.GRAY, 700);
  } else if (opts.privSet) {
    barrow(c, tipX, 60, 500);                 // publieke Get
    barrowV(c, 760, 600, 1090);               // private SET van onder
    cylinder(c, 1170, 320, 300, 280, 'energie');
    padlock(c, 1360, 290, 1.25);
    padlock(c, 1090, 700, 1.1);               // slot op de set
    c.txt(480, 415, 'Energie property', 42, C.GRAY, 700);
    c.txt(360, 513, 'Get', 42, C.GRAY, 700);
    c.txt(1040, 690, 'SET', 42, C.GRAY, 700, 'end');
  }
  return c;
}
module.exports = { scene };
