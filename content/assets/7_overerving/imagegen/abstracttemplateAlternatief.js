const { createCanvas, C } = require('./excal');
const { COL3 } = require('./over');

const W = 1500, H = 820;
const c = createCanvas(W, H);

const bw = 660, d_bx = (W - bw) / 2; // class box width, centered x

// ── DIER (abstract) ──────────────────────────────────────────────
const DY = 40, DH = 320;
c.rect(d_bx, DY, bw, DH, {
  fill: '#f2f2f2', fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.8, roughness: 1.4
});
c.txt(d_bx + bw / 2, DY + 54, 'DIER', 46, C.GRAY, 800);
c.line(d_bx + 24, DY + 74, d_bx + bw - 24, DY + 74, { strokeWidth: 1.8, roughness: 1.8 });

// Method signature (abstract = cursive convention, grayed)
c.txt(d_bx + bw / 2, DY + 118, 'abstract MaakGeluid()', 30, '#888888', 600);

// Body placeholder: dashed box that's visually empty
const pmx = d_bx + 60, pmy = DY + 138, pmw = bw - 120, pmh = 150;
c.rect(pmx, pmy, pmw, pmh, {
  fill: '#e8e8e8', fillStyle: 'solid', stroke: '#b0b0b0', strokeWidth: 2.2,
  roughness: 1.5, strokeLineDash: [14, 8]
});
c.txt(pmx + 34, pmy + 46, '{', 44, '#c8c8c8', 400, 'start');
c.txt(pmx + 34, pmy + pmh - 18, '}', 44, '#c8c8c8', 400, 'start');
// visual "emptiness" cue
c.txt(pmx + pmw / 2, pmy + pmh / 2 + 4, '?', 64, '#d8d8d8', 700);

// ── Inheritance arrow (down) ──────────────────────────────────────
const iax = d_bx + bw / 2;
const iaY1 = DY + DH, iaY2 = 530;
c.line(iax, iaY1 + 4, iax, iaY2 - 20, { strokeWidth: 2.6, roughness: 1.3 });
// open triangle arrowhead pointing UP (child → parent convention)
c.poly([
  [iax, iaY1 + 4],
  [iax - 16, iaY1 + 28],
  [iax + 16, iaY1 + 28]
], { fill: C.OFFWHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.2, roughness: 0.8 });
c.txt(iax + 18, (iaY1 + iaY2) / 2 + 6, 'extends', 30, C.GRAY, 600, 'start');

// ── PAARD (concrete) ──────────────────────────────────────────────
const [pf, , , pst] = COL3.purple;
const PY = 530, PH = 250;
c.rect(d_bx, PY, bw, PH, {
  fill: pf, fillStyle: 'solid', stroke: pst, strokeWidth: 2.8, roughness: 1.4
});
c.txt(d_bx + bw / 2, PY + 54, 'Paard', 46, C.GRAY, 800);
c.line(d_bx + 24, PY + 74, d_bx + bw - 24, PY + 74, { strokeWidth: 1.8, roughness: 1.8, stroke: pst });

// Override method signature
c.txt(d_bx + bw / 2, PY + 118, 'override MaakGeluid()', 30, '#6b4b80', 600);

// Body: solid filled box
const omx = d_bx + 60, omy = PY + 138, omw = bw - 120, omh = 88;
c.rect(omx, omy, omw, omh, {
  fill: '#d8c6ea', fillStyle: 'solid', stroke: pst, strokeWidth: 2.4, roughness: 1.3
});
c.txt(omx + 34, omy + 40, '{', 38, pst, 400, 'start');
c.txt(omx + omw / 2, omy + 44, 'return "Hinnikhinnik";', 30, C.GRAY, 600);
c.txt(omx + 34, omy + omh - 12, '}', 38, pst, 400, 'start');

// ── curved "override" arrow from empty body (DIER) to filled body (PAARD) ──
// from right edge of dier placeholder → right edge of paard body
const arrX1 = pmx + pmw + 12, arrY1 = pmy + pmh / 2;
const arrX2 = omx + omw + 12, arrY2 = omy + omh / 2;
const cpX = arrX1 + 160, cpY = (arrY1 + arrY2) / 2;
c.carrow(arrX1, arrY1, cpX, cpY, arrX2, arrY2, {
  stroke: '#9b7bb0', strokeWidth: 2.4, roughness: 1.6, head: 18
});
c.txt(cpX + 30, cpY, 'override', 30, '#9b7bb0', 700, 'start');

c.save(__dirname, 'abstracttemplateAlternatief', 'NEW');
