// stackAlternatief: stack als echte stapel, enkel de bovenkant is bereikbaar
const { createCanvas, C } = require('./excal');
const c = createCanvas(1400, 1000);

c.txt(700, 90, 'Stack', 64, C.RED_DARK, 700);
c.txt(700, 150, 'last in, first out', 34, C.GRAY, 600);

const cxm = 700, bw = 320, bh = 110, sp = 118;
const blocks = [['10', '1'], ['20', '2'], ['30', '3'], ['40', '4']]; // [waarde, volgorde erin]
const bottomY = 820;
blocks.forEach(([val, ord], i) => {
  const y = bottomY - i * sp;
  const top = i === blocks.length - 1;
  c.rect(cxm - bw / 2, y, bw, bh, top
    ? { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED, strokeWidth: 2.8, roughness: 1.3 }
    : { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2, roughness: 1.3 });
  c.txt(cxm, y + bh / 2 + 14, val, 40, C.GRAY, 700);
  // volgorde-badge links
  c.circle(cxm - bw / 2, y + bh / 2, 48, { fill: top ? C.RED_LIGHT : C.OFFWHITE, stroke: C.GRAY, strokeWidth: 2 });
  c.txt(cxm - bw / 2, y + bh / 2 + 11, ord, 30, C.GRAY, 700);
});

// bodem
c.line(cxm - bw / 2 - 20, bottomY + bh + 6, cxm + bw / 2 + 20, bottomY + bh + 6, { strokeWidth: 3, roughness: 1 });

// top-marker
const topY = bottomY - 3 * sp;
c.txt(cxm + bw / 2 + 120, topY + 20, 'de top', 34, C.RED_DARK, 700, 'start');
c.arrow(cxm + bw / 2 + 110, topY + 30, cxm + bw / 2 + 8, topY + 40, { strokeWidth: 2.2 });

// Push() : gebogen pijl die bovenop legt
c.txt(330, 300, 'Push()', 40, C.GRAY, 700);
c.txt(330, 345, 'legt er bovenop', 28, C.GRAY, 500);
c.carrow(360, 370, 470, 450, cxm - 70, topY - 6, { strokeWidth: 2.6, head: 20 });

// Pop() : gebogen pijl die de bovenste wegneemt
c.txt(1010, 300, 'Pop()', 40, C.GRAY, 700);
c.txt(1010, 345, 'neemt de bovenste', 28, C.GRAY, 500);
c.carrow(cxm + 70, topY - 6, 940, 430, 1050, 360, { strokeWidth: 2.6, head: 20 });

c.txt(700, 960, 'Je komt enkel bij de bovenste, niet bij de blokken eronder.', 30, C.GRAY, 600);

c.save(__dirname, 'stackAlternatief', '');
