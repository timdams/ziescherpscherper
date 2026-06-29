const { createCanvas, C, memframe, cellRow, trashcan, garbage } = require('./arr');
const c = createCanvas(2300, 1500);
memframe(c, 440, 270, 1720, 1010, 'werkgeheugen');
function varbox(x, y, w, h, val) {
  c.rect(x, y, w, h, { fill: '#e2e2e2', fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.1 });
  c.txt(x + w / 2, y + h / 2 + 14, val, 42, C.GRAY, 700);
}
// ploegen -> Beerschot/Antwerp
varbox(520, 520, 340, 150, '0x6587');
c.bubble(690, 365, 250, 110, 'ploegen', 690, 518, 40);
c.arrow(865, 590, 1325, 590, { strokeWidth: 2.6, head: 16 });
cellRow(c, 1330, 530, 280, 120, ['Beerschot', 'Antwerp'], { size: 40, weight: 700 });
c.bubble(1650, 320, 430, 150, ['start bij', 'adres 0x6587'], 1470, 527, 36);
// nieuwePloegen -> ook naar Beerschot (zelfde adres)
varbox(520, 940, 340, 150, '0x6587');
c.bubble(690, 790, 350, 110, 'nieuwePloegen', 690, 938, 40);
c.line(865, 1015, 1180, 1015, { strokeWidth: 2.6 });
c.line(1180, 1015, 1180, 660, { strokeWidth: 2.6 });
c.arrow(1180, 660, 1325, 660, { strokeWidth: 2.6, head: 16 });
// Anderlecht/Brugge = garbage + vuilbak
garbage(c, 1330, 955, 300, 120);
garbage(c, 1630, 955, 300, 120);
c.txt(1480, 1028, 'Anderlecht', 38, C.RED_DARK, 700);
c.txt(1780, 1028, 'Brugge', 38, C.RED_DARK, 700);
trashcan(c, 2010, 930, 1.35);
c.save('.', 'refbeer', 'NEW');
