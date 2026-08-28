// Helpers voor de scope-afbeeldingen van H5: een verticale balk die de levensduur
// van een variabele aanduidt, een kruisje/vinkje en een blok coderegels.
const { C } = require('./excal');

// Verticale balk met een haakje boven en onder. Het label staat rechts van de balk,
// op halve hoogte, zodat het nooit door de balk of de code loopt.
function scopebar(c, x, top, bot, label, size = 28) {
  const o = { stroke: C.RED, strokeWidth: 3, roughness: 1.2 };
  const tick = 16;
  c.line(x, top, x, bot, o);
  c.line(x, top, x - tick, top, o);
  c.line(x, bot, x - tick, bot, o);
  if (label) c.txt(x + 22, (top + bot) / 2 + size * 0.34, label, size, C.RED_DARK, 700, 'start');
}

// Rood kruisje voor "kan niet".
function cross(c, cx, cy, s = 15) {
  const o = { stroke: C.RED, strokeWidth: 3.2, roughness: 1.3 };
  c.line(cx - s, cy - s, cx + s, cy + s, o);
  c.line(cx + s, cy - s, cx - s, cy + s, o);
}

// Vinkje voor "kan wel".
function check(c, cx, cy, s = 15) {
  const o = { stroke: C.RED_DARK, strokeWidth: 3.2, roughness: 1.3 };
  c.line(cx - s, cy, cx - s * 0.25, cy + s * 0.8, o);
  c.line(cx - s * 0.25, cy + s * 0.8, cx + s, cy - s * 0.9, o);
}

// Blok coderegels. Een regel is {t, y, ind} met ind het inspringniveau.
function codeblock(c, x, rows, o = {}) {
  const size = o.size || 30, indent = o.indent || 34, weight = o.weight || 600;
  rows.forEach(r => {
    if (!r.t) return;
    c.txt(x + (r.ind || 0) * indent, r.y, r.t, r.size || size, r.color || C.GRAY,
      r.weight || weight, 'start');
  });
}

// Kader rond een coderegel. dood = gestreept (die regel mag niet), anders gevuld.
// Geeft de rechterrand van het kader terug, handig om er een teken naast te zetten.
function markeer(c, x, row, chars, dood, o = {}) {
  const size = o.size || 30, indent = o.indent || 34, cw = size * 0.42;
  const bx = x + (row.ind || 0) * indent - 12;
  const w = chars * cw + 26;
  c.rect(bx, row.y - size * 1.23, w, size * 1.67, dood
    ? { fill: C.WHITE, fillStyle: 'solid', stroke: C.RED, strokeWidth: 2.4, strokeLineDash: [11, 9], roughness: 1.3 }
    : { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED, strokeWidth: 2.4, roughness: 1.3 });
  return bx + w;
}

module.exports = { scopebar, cross, check, codeblock, markeer };
