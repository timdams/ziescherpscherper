const { createCanvas, C, memframe, cellRow } = require('./arr');
const c = createCanvas(2300, 1500);
memframe(c, 440, 270, 1640, 1010, 'werkgeheugen');
function varbox(x, y, w, h, val) {
  c.rect(x, y, w, h, { fill: '#e2e2e2', fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.1 });
  c.txt(x + w / 2, y + h / 2 + 14, val, 42, C.GRAY, 700);
}
// ploegen -> Beerschot/Antwerp
varbox(520, 520, 340, 150, '0x6587');
c.bubble(690, 365, 250, 110, 'ploegen', 690, 518, 40);
c.arrow(865, 595, 1325, 595, { strokeWidth: 2.6, head: 16 });
cellRow(c, 1330, 535, 280, 120, ['Beerschot', 'Antwerp'], { size: 40, weight: 700 });
c.bubble(1650, 330, 430, 150, ['start bij', 'adres 0x6587'], 1470, 532, 36);
// nieuwePloegen -> Anderlecht/Brugge
varbox(520, 940, 340, 150, '0x8974');
c.bubble(690, 790, 350, 110, 'nieuwePloegen', 690, 938, 40);
c.arrow(865, 1015, 1325, 1015, { strokeWidth: 2.6, head: 16 });
cellRow(c, 1330, 955, 300, 120, ['Anderlecht', 'Brugge'], { size: 38, weight: 700 });
c.bubble(1680, 750, 430, 150, ['start bij', 'adres 0x8974'], 1480, 952, 36);
c.save('.', 'refbeervoor', 'NEW');
