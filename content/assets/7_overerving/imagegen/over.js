// H9 - gedeelde helpers voor overerving (klassediagrammen + gestapelde objecten)
const { createCanvas, C } = require('./excal');

// kleuren per klasse-soort (front, stroke)
const COL = {
  gray:   ['#eef0f2', '#7a7a7a'],
  purple: ['#e3d4ea', '#9b7bb0'],
  green:  ['#d9ead3', '#6aa84f'],
  blue:   ['#cfe0f5', '#6d9eeb'],
  yellow: ['#fde6b8', '#e0a800'],
  orange: ['#fde2c8', '#e69138'],
  white:  ['#ffffff', '#7a7a7a'],
};
// 3D-laagkleuren (front, side, top, stroke)
const COL3 = {
  gray:   ['#f1f1f1', '#dedede', '#f8f8f8', '#7a7a7a'],
  purple: ['#e3d4ea', '#d2bedd', '#efe4f4', '#9b7bb0'],
  green:  ['#d9ead3', '#c5dcbd', '#e8f2e3', '#6aa84f'],
  blue:   ['#cfe0f5', '#bccfee', '#e2ecfa', '#6d9eeb'],
};

function clsbox(c, x, y, w, h, name, colKey, size) {
  const [f, s] = COL[colKey] || COL.white;
  c.rect(x, y, w, h, { fill: f, fillStyle: 'solid', stroke: s, strokeWidth: 2.6, roughness: 1.05 });
  const arr = Array.isArray(name) ? name : [name];
  const sz = size || 38, sy = y + h / 2 - (arr.length - 1) * sz * 0.62 + sz * 0.34;
  arr.forEach((t, i) => c.txt(x + w / 2, sy + i * sz * 1.15, t, sz, C.GRAY, 600));
}
// gevulde driehoek-pijlpunt (top wijst omhoog), tip op (x,y)
function thead(c, x, y, s) {
  c.poly([[x, y], [x - s, y + s * 1.5], [x + s, y + s * 1.5]], { fill: C.GRAY, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 1.6, roughness: 0.7 });
}
// overervingspijl recht omhoog van kind (yc) naar ouder (yp)
function inhUp(c, x, yc, yp) {
  c.line(x, yc, x, yp + 22, { strokeWidth: 2.6 });
  thead(c, x, yp, 13);
}
// twee+ kinderen die via een bus naar één ouder gaan
function inhBus(c, parentCx, parentBot, busY, childTops) {
  childTops.forEach(([cx, cy]) => c.line(cx, cy, cx, busY, { strokeWidth: 2.6 }));
  const xs = childTops.map(p => p[0]);
  c.line(Math.min(...xs), busY, Math.max(...xs), busY, { strokeWidth: 2.6 });
  c.line(parentCx, busY, parentCx, parentBot + 22, { strokeWidth: 2.6 });
  thead(c, parentCx, parentBot, 13);
}
// gewone boom-verbinding (geen pijlpunt) - voor animals
function treeBus(c, parentBot, parentCx, busY, childTops) {
  c.line(parentCx, parentBot, parentCx, busY, { strokeWidth: 2.4 });
  const xs = childTops.map(p => p[0]);
  c.line(Math.min(...xs), busY, Math.max(...xs), busY, { strokeWidth: 2.4 });
  childTops.forEach(([cx, cy]) => c.line(cx, busY, cx, cy, { strokeWidth: 2.4 }));
}
// gestapelde 3D-doos; layers = [[colKey,h], ...] van ONDER naar boven
function stackBox(c, x, yBottom, w, layers, label, d) {
  d = d || 50; let y = yBottom, topY = yBottom;
  layers.forEach(([key, h]) => {
    const [f, sd, , st] = COL3[key]; const yt = y - h;
    c.rect(x, yt, w, h, { fill: f, fillStyle: 'solid', stroke: st, strokeWidth: 2.2, roughness: 1 });
    c.poly([[x + w, yt], [x + w + d, yt - d], [x + w + d, yt + h - d], [x + w, yt + h]], { fill: sd, fillStyle: 'solid', stroke: st, strokeWidth: 2, roughness: 1 });
    y = yt; topY = yt;
  });
  const tk = layers[layers.length - 1][0]; const [, , tp, st] = COL3[tk];
  c.poly([[x, topY], [x + d, topY - d], [x + w + d, topY - d], [x + w, topY]], { fill: tp, fillStyle: 'solid', stroke: st, strokeWidth: 2, roughness: 1 });
  if (label) c.txt(x + w / 2, yBottom + 52, label, 42, C.GRAY, 600);
}


// DIER-objectdoos met (optioneel) subklasse-laag en return-waarde
function dierBox(c, x, gyt, w, gh, opts) {
  opts = opts || {}; const d = 44;
  if (opts.sub) {
    const [f, sd, , st] = COL3[opts.sub]; const sy = gyt + gh, sh = opts.subH || 140;
    c.poly([[x + w, sy], [x + w + d, sy - d], [x + w + d, sy + sh - d], [x + w, sy + sh]], { fill: sd, fillStyle: 'solid', stroke: st, strokeWidth: 2, roughness: 1 });
    c.rect(x, sy, w, sh, { fill: f, fillStyle: 'solid', stroke: st, strokeWidth: 2.2, roughness: 1 });
    c.txt(x + w / 2, sy + sh / 2 + 14, opts.subName, 40, C.GRAY, 700);
  }
  const [gf, gsd, gtp, gst] = COL3.gray;
  c.poly([[x, gyt], [x + d, gyt - d], [x + w + d, gyt - d], [x + w, gyt]], { fill: gtp, fillStyle: 'solid', stroke: gst, strokeWidth: 2, roughness: 1 });
  c.poly([[x + w, gyt], [x + w + d, gyt - d], [x + w + d, gyt + gh - d], [x + w, gyt + gh]], { fill: gsd, fillStyle: 'solid', stroke: gst, strokeWidth: 2, roughness: 1 });
  c.rect(x, gyt, w, gh, { fill: gf, fillStyle: 'solid', stroke: gst, strokeWidth: 2.4, roughness: 1 });
  c.txt(x + w / 2, gyt + 56, 'DIER', 42, C.GRAY, 800);
  c.txt(x + w / 2, gyt + 116, 'abstract MaakGeluid', 36, C.GRAY, 600);
  const mw = w * 0.62, mh = gh * 0.44, mx = x + (w - mw) / 2, my = gyt + 150, md = 22;
  c.poly([[mx + mw, my], [mx + mw + md, my - md], [mx + mw + md, my + mh - md], [mx + mw, my + mh]], { fill: '#ffffff', fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 1.8, roughness: 1 });
  c.poly([[mx, my], [mx + md, my - md], [mx + mw + md, my - md], [mx + mw, my]], { fill: '#fbfbfb', fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 1.8, roughness: 1 });
  c.rect(mx, my, mw, mh, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2, roughness: 1 });
  if (opts.ret) {
    const [rf, , , rst] = COL3[opts.retColor || 'purple'];
    const rw = mw * 0.7, rh = mh * 0.62, rx = mx + (mw - rw) / 2, ry = my + (mh - rh) / 2;
    c.rect(rx, ry, rw, rh, { fill: rf, fillStyle: 'solid', stroke: rst, strokeWidth: 2.2, roughness: 1 });
    const arr = Array.isArray(opts.ret) ? opts.ret : [opts.ret];
    const sy2 = ry + rh / 2 - (arr.length - 1) * 18 + 12;
    arr.forEach((t, i) => c.txt(rx + rw / 2, sy2 + i * 36, t, 32, C.GRAY, 600));
  }
}

module.exports = { createCanvas, C, COL, COL3, clsbox, thead, inhUp, inhBus, treeBus, stackBox, dierBox };
