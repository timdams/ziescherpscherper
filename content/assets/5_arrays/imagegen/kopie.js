// H8 arrays - een array echt kopieren: twee aparte arrays op twee adressen.
// Tegenhanger van refbeer.js (waar beide variabelen naar dezelfde array wijzen).
// Draaien vanuit de imagegen-map:  node kopie.js
const { createCanvas, C, memframe, cellRow } = require('./arr');

const c = createCanvas(2500, 1280);

function varbox(x, y, w, h, val) {
  c.rect(x, y, w, h, { fill: '#e2e2e2', fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.1 });
  c.txt(x + w / 2, y + h / 2 + 14, val, 42, C.GRAY, 700);
}

memframe(c, 440, 150, 1900, 980, 'werkgeheugen');

// ---------- ploegen -> originele array ----------
varbox(520, 390, 340, 150, '0x6587');
c.bubble(690, 235, 250, 110, 'ploegen', 690, 388, 40);
c.arrow(870, 462, 1320, 462, { strokeWidth: 2.6, head: 16 });
cellRow(c, 1330, 400, 280, 120, ['Beerschot', 'Antwerp'], { size: 40, weight: 700 });
c.bubble(2110, 190, 400, 150, ['start bij', 'adres 0x6587'], 1905, 400, 36);

// ---------- kopie -> eigen, nieuwe array ----------
varbox(520, 850, 340, 150, '0x9A21');
c.bubble(690, 695, 250, 110, 'kopie', 690, 848, 40);
c.arrow(870, 922, 1320, 922, { strokeWidth: 2.6, head: 16 });
cellRow(c, 1330, 860, 280, 120, ['Beerschot', 'Antwerp'], { size: 40, weight: 700 });
c.bubble(2110, 645, 400, 150, ['start bij', 'adres 0x9A21'], 1905, 862, 36);

// ---------- element per element overgezet ----------
c.arrow(1470, 545, 1470, 835, { stroke: C.RED, strokeWidth: 2.6, head: 14 });
c.arrow(1750, 545, 1750, 835, { stroke: C.RED, strokeWidth: 2.6, head: 14 });
c.txt(1400, 705, 'kopie[i] = ploegen[i]', 38, C.RED_DARK, 700, 'end');

c.save('.', 'kopie', '');
