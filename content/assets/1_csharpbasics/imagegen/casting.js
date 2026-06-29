// Gedeelde tekening: gestippelde ellips met numerieke datatypes rond (Casting).
// Gebruikt door castingnum.js en convertpars.js.
const { C } = require('./excal');

// dubbele pijl tussen twee punten (pijlpunt aan beide kanten)
function diarrow(c, x1, y1, x2, y2, o) {
  c.arrow(x1, y1, x2, y2, o);
  c.arrow(x2, y2, x1, y1, o);
}

// cx,cy = midden; rx,ry = halve assen van de ellips; s = schaal voor tekst
function drawCasting(c, cx, cy, rx, ry, s = 1) {
  // gestippelde ellips
  c.ellipse(cx, cy, rx * 2, ry * 2, { fill: 'none', stroke: C.GRAY, strokeWidth: 2.2, strokeLineDash: [10, 9], roughness: 1.3 });

  const tSize = 36 * s, cSize = 38 * s;
  // labelpositie (radius) en pijl-clearance
  const rxL = rx * 0.74, ryL = ry * 0.72;
  const rtx = 92 * s, rty = 58 * s;          // pijlstart vanuit midden
  const ahx = 78 * s, ahy = 50 * s;          // pijlstop voor het label

  const types = [
    ['int', -90], ['short', -45], ['...', 0], ['double', 45],
    ['float', 90], ['decimal', 135], ['char', 180], ['long', -135],
  ];
  types.forEach(([lbl, deg]) => {
    const r = deg * Math.PI / 180, dx = Math.cos(r), dy = Math.sin(r);
    diarrow(c,
      cx + dx * rtx, cy + dy * rty,
      cx + dx * (rxL - ahx), cy + dy * (ryL - ahy),
      { strokeWidth: 2.6 * s, head: 13 * s, roughness: 1.2 });
    c.txt(cx + dx * rxL, cy + dy * ryL + tSize * 0.32, lbl, tSize, C.RED_DARK, 700);
  });

  // midden
  c.txt(cx, cy + cSize * 0.32, '(Casting)', cSize, C.GRAY, 700);
}

module.exports = { drawCasting, diarrow };
