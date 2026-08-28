// Helpers voor de expressie-afbeeldingen van H2: genummerd stapbolletje,
// losse tokens op vaste posities en een rode ovaal om een deel aan te duiden.
const { C } = require('./excal');

// Genummerd bolletje dat de volgorde van een stap aangeeft.
function badge(c, cx, cy, n, dia = 64) {
  c.circle(cx, cy, dia, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED, strokeWidth: 2.4, roughness: 1.3 });
  c.txt(cx, cy + dia * 0.26, String(n), dia * 0.72, C.RED_DARK, 700);
}

// Rij losse tokens op vaste x-posities, zodat we er nadien rond kunnen tekenen.
// list: [tekst, x] of [tekst, x, {size, color, weight}]
function tokens(c, y, list, size = 72, color = C.GRAY, weight = 700) {
  list.forEach(([s, x, o]) => c.txt(x, y, s, (o && o.size) || size,
    (o && o.color) || color, (o && o.weight) || weight));
}

// Rode ovaal die een stuk van de expressie omcirkelt.
function ring(c, cx, cy, w, h) {
  c.ellipse(cx, cy, w, h, { fill: 'none', stroke: C.RED, strokeWidth: 2.8, roughness: 1.7 });
}

module.exports = { badge, tokens, ring };
