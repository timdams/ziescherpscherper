// H1 - variabele = gereserveerd plekje in het geheugen: naam (identifier) vs adres
const { createCanvas, C } = require('./excal');
const { slot } = require('./vhelpers');
const c = createCanvas(1560, 760);

// ---------- de declaratie ----------
c.txt(110, 120, 'int mijnLeeftijd = 37;', 46, C.GRAY, 700, 'start');
c.carrow(468, 128, 600, 196, 700, 310, { stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.3, head: 16 });

// ---------- de geheugenstrook ----------
const y = 330, w = 200, h = 180, gap = 26, x0 = 228;
const adressen = ['0x4234FE13EEF', '0x4234FE13EF0', '0x4234FE13EF1', '0x4234FE13EF2', '0x4234FE13EF3'];
for (let i = 0; i < 5; i++) {
  const x = x0 + i * (w + gap);
  if (i === 2) slot(c, x, y, w, h, 'mijnLeeftijd', '37', { nameSize: 28, valueSize: 62 });
  else slot(c, x, y, w, h, '', '');
  const mid = i === 2;
  c.txt(x + w / 2, 562, adressen[i], mid ? 28 : 24, mid ? C.RED_DARK : C.GRAY, mid ? 700 : 400);
}
c.txt(160, 450, '...', 60, C.GRAY, 700);
c.txt(1400, 450, '...', 60, C.GRAY, 700);

// ---------- naam vs adres ----------
c.txt(1430, 242, 'jij gebruikt deze naam', 34, C.RED_DARK, 700, 'end');
c.carrow(1122, 252, 1000, 238, 858, 296, { stroke: C.RED, strokeWidth: 2.2, roughness: 1.4, head: 15 });

c.txt(780, 668, 'de computer gebruikt dit adres', 34, C.RED_DARK, 700);
c.arrow(780, 634, 780, 588, { stroke: C.RED, strokeWidth: 2.2, roughness: 1.4, head: 15 });

c.save('.', 'geheugen', 'NEW');
