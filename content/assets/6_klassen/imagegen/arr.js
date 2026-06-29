// Gedeelde helpers voor H5 arrays-afbeeldingen (intro-stijl).
const { createCanvas, C } = require('./excal');

// achtergrondregio (bv. STACK groen / HEAP geel)
function region(c, x, y, w, h, fill, title, titleColor) {
  c.rect(x, y, w, h, { fill, fillStyle: 'solid', stroke: titleColor || C.GRAY, strokeWidth: 2.4, roughness: 1.05 });
  if (title) c.txt(x + w / 2, y + 60, title, 46, titleColor || C.GRAY, 700);
}

// hand-drawn wolk (geheugen)
function cloud(c, cx, cy, w, h) {
  const n = 12, rx = w / 2, ry = h / 2, pts = [];
  for (let i = 0; i < n; i++) { const a = i / n * 2 * Math.PI - Math.PI / 2; pts.push([cx + Math.cos(a) * rx, cy + Math.sin(a) * ry]); }
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)} `;
  const r = (Math.min(w, h) / n) * 1.8;
  for (let i = 0; i < n; i++) { const p = pts[(i + 1) % n]; d += `A ${r.toFixed(1)} ${r.toFixed(1)} 0 0 1 ${p[0].toFixed(1)} ${p[1].toFixed(1)} `; }
  d += 'Z';
  c.path(d, { fill: C.OFFWHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.5, bowing: 1.5 });
}

// rij witte waarde-cellen
function cellRow(c, x, y, cw, ch, values, o = {}) {
  values.forEach((v, i) => {
    c.rect(x + i * cw, y, cw, ch, { fill: o.fill || C.WHITE, fillStyle: 'solid', stroke: o.stroke || C.GRAY, strokeWidth: 2, roughness: 1.2 });
    if (v !== '' && v !== undefined) c.txt(x + i * cw + cw / 2, y + ch / 2 + (o.size || 34) * 0.34, String(v), o.size || 34, o.color || C.GRAY, o.weight || 600);
  });
}

// rode vuilbak (garbage collected)
function trashcan(c, cx, cy, s = 1) {
  const w = 60 * s, h = 66 * s;
  c.poly([[cx - w / 2, cy - h / 2], [cx + w / 2, cy - h / 2], [cx + w / 2 - 9 * s, cy + h / 2], [cx - w / 2 + 9 * s, cy + h / 2]],
    { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 6, fillWeight: 1.6, stroke: C.RED, strokeWidth: 2.4, roughness: 1.2 });
  c.rect(cx - w / 2 - 7 * s, cy - h / 2 - 13 * s, w + 14 * s, 13 * s, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED, strokeWidth: 2.4, roughness: 1.2 });
  c.rect(cx - 13 * s, cy - h / 2 - 24 * s, 26 * s, 11 * s, { fill: C.WHITE, fillStyle: 'solid', stroke: C.RED, strokeWidth: 2, roughness: 1.2 });
  for (const dx of [-w / 4, 0, w / 4]) c.line(cx + dx, cy - h / 2 + 9 * s, cx + dx * 0.7, cy + h / 2 - 7 * s, { stroke: C.RED, strokeWidth: 1.8, roughness: 1 });
}

// rood gearceerd vlak (markeert object als garbage)
function garbage(c, x, y, w, h) {
  c.rect(x, y, w, h, { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 7, fillWeight: 1.6, stroke: C.RED, strokeWidth: 2.4, roughness: 1.2 });
}


// werkgeheugen-kader (gestippelde rechthoek met label)
function memframe(c, x, y, w, h, label) {
  c.rect(x, y, w, h, { fill: 'none', stroke: C.GRAY, strokeWidth: 2.6, strokeLineDash: [18, 13], roughness: 0.8, disableMultiStroke: true });
  c.txt(x + 34, y + 56, label || 'werkgeheugen', 42, C.GRAY, 700, 'start');
}

const REGION = { STACK: '#e7f3e1', HEAP: '#fdf3da', SLOT: '#ece1f0' };

module.exports = { createCanvas, C, region, cloud, memframe, cellRow, trashcan, garbage, REGION };
