const { createCanvas, C, memframe, cellRow } = require('./arr');
const c = createCanvas(2200, 1480);
memframe(c, 440, 300, 1660, 970, 'werkgeheugen');
function varbox(x, y, w, h, val) {
  c.rect(x, y, w, h, { fill: '#e2e2e2', fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.1 });
  c.txt(x + w / 2, y + h / 2 + 14, val, 42, C.GRAY, 700);
}
// getallen -> array
varbox(560, 560, 360, 150, '0x12478');
c.bubble(740, 400, 260, 110, 'getallen', 740, 558, 40);
c.arrow(925, 635, 1330, 635, { strokeWidth: 2.6, head: 16 });
cellRow(c, 1340, 575, 120, 120, [5, 42, 2], { size: 46, weight: 700 });
c.bubble(1620, 350, 440, 150, ['start bij adres', '0x12478'], 1460, 572, 36);
// age (waarde)
varbox(560, 980, 360, 150, '5');
c.bubble(740, 840, 200, 100, 'age', 740, 978, 40);
c.save('.', 'geheugen', 'NEW');
