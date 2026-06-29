// Gedeelde tekening: een project-vakje met Program.cs + Andere items.
// Gebruikt door huiswerk.js en solprojhier.js zodat beide stijlmatchen.
const { C } = require('./excal');

// x,y = linkerbovenhoek; w,h = afmeting; titel = projectnaam
function projectBox(c, x, y, w, h, titel) {
  c.rect(x, y, w, h, { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 7, fillWeight: 1.4, stroke: C.RED_DARK, strokeWidth: 2.4, roughness: 1.3 });
  c.txt(x + w / 2, y + 48, titel, 34, C.RED_DARK, 700);
  const iw = w - 100, ih = 78, ix = x + 50;
  c.rect(ix, y + 88, iw, ih, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2, roughness: 1.3 });
  c.txt(ix + iw / 2, y + 88 + ih / 2 + 11, 'Program.cs', 30, C.GRAY, 600);
  c.rect(ix, y + 200, iw, ih, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2, roughness: 1.3 });
  c.txt(ix + iw / 2, y + 200 + ih / 2 + 11, 'Andere items', 30, C.GRAY, 600);
}

module.exports = { projectBox };
