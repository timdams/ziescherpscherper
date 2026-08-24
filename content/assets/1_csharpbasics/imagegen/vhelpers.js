// Helpers voor H1-variabelen: geheugenvakje met naamplaatje + vuilnisbak.
const { C } = require('./excal');

// Een geheugenvakje: witte doos met (optioneel) een rood naamplaatje bovenaan
// en een waarde eronder. Zonder naam is het gewoon een naamloos stukje geheugen.
function slot(c, x, y, w, h, name, value, o = {}) {
  const nh = o.nameH || 54;
  c.rect(x, y, w, h, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.4 });
  if (name) {
    c.rect(x + 9, y + 9, w - 18, nh, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED, strokeWidth: 2, roughness: 1.3 });
    c.txt(x + w / 2, y + 9 + nh * 0.72, name, o.nameSize || 28, C.RED_DARK, 700);
  }
  if (value !== undefined && value !== '') {
    const top = name ? y + nh + 24 : y;
    const size = o.valueSize || 54;
    const mid = top + (y + h - top) / 2;
    const shift = o.sub ? 20 : 0;
    c.txt(x + w / 2, mid + size * 0.34 - shift, value, size, o.valueColor || C.GRAY, 700);
    if (o.sub) c.txt(x + w / 2, mid + 36, o.sub, 26, C.GRAY, 400);
  }
}

// Vuilnisbak: deksel + schuine bak met twee ribbels.
function bin(c, x, y, w, h) {
  c.rect(x - 10, y, w + 20, 20, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.2, roughness: 1.4 });
  c.line(x + w / 2, y - 14, x + w / 2, y, { strokeWidth: 2.2 });
  c.poly([[x, y + 26], [x + w, y + 26], [x + w - 18, y + h], [x + 18, y + h]],
    { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.2, roughness: 1.3 });
  c.line(x + w * 0.34, y + 44, x + w * 0.30, y + h - 12, { strokeWidth: 1.8, roughness: 1.6 });
  c.line(x + w * 0.66, y + 44, x + w * 0.70, y + h - 12, { strokeWidth: 1.8, roughness: 1.6 });
}

module.exports = { slot, bin };
