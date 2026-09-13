// Gedeelde flowchart-vormen (hand-drawn) voor hoofdstuk 2_beslissingen.
// Zie CLAUDE.md > "Afbeeldingen moderniseren".
const { C } = require('./excal');

function label(c, cx, cy, lbl, size) {
  const arr = Array.isArray(lbl) ? lbl : [lbl];
  const lh = 1.06, startY = cy - (arr.length - 1) * size * lh / 2 + size * 0.34;
  arr.forEach((s, i) => c.txt(cx, startY + i * size * lh, s, size, C.GRAY, 600));
}

// start/einde (accent-rondje)
function terminal(c, cx, cy, d = 42) {
  c.circle(cx, cy, d, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 2.4, roughness: 1.3 });
}
// kleine verbindingsknoop
function connector(c, cx, cy, d = 26) {
  c.circle(cx, cy, d, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2, roughness: 1.3 });
}
// procesblok (rechthoek)
function proc(c, cx, cy, w, h, lbl, size = 30) {
  c.rect(cx - w / 2, cy - h / 2, w, h, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.2, roughness: 1.2 });
  label(c, cx, cy, lbl, size);
}
// beslissing (ruit, accent)
function decision(c, cx, cy, w, h, lbl, size = 30) {
  c.poly([[cx, cy - h / 2], [cx + w / 2, cy], [cx, cy + h / 2], [cx - w / 2, cy]],
    { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 2.4, roughness: 1.2 });
  label(c, cx, cy, lbl, size);
}
// in-/uitvoer (parallellogram)
function io(c, cx, cy, w, h, lbl, size = 30) {
  const s = h * 0.42;
  c.poly([[cx - w / 2 + s, cy - h / 2], [cx + w / 2 + s, cy - h / 2], [cx + w / 2 - s, cy + h / 2], [cx - w / 2 - s, cy + h / 2]],
    { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.2, roughness: 1.2 });
  label(c, cx, cy, lbl, size);
}

module.exports = { terminal, connector, proc, decision, io };
