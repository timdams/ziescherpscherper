// dictionAlternatief: dictionary als kluisjes - een sleutel opent juist een waarde
const { createCanvas, C } = require('./excal');
const c = createCanvas(1700, 980);

c.txt(850, 90, 'Dictionary', 60, C.RED_DARK, 700);
c.txt(850, 150, 'elke sleutel opent juist een waarde', 34, C.GRAY, 600);

const data = [['123', 'Tim Dams'], ['6463', 'James Bond'], ['666', 'The beast'], ['700', 'James Bond']];
const lw = 320, lh = 440, gap = 46, startX = 200, y = 350;
const HIT = 2; // index van het opgezochte kluisje (666)

function locker(x, key, value, highlight) {
  c.rect(x, y, lw, lh, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.6, roughness: 1.1 });
  const cx = x + lw / 2;
  // sleutelplaatje bovenaan
  c.rect(cx - 110, y + 34, 220, 78, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED, strokeWidth: 2.4, roughness: 1.2 });
  c.txt(cx, y + 34 + 52, key, 40, C.RED_DARK, 700);
  // sleutelgat
  c.circle(cx, y + 210, 42, { fill: C.OFFWHITE, stroke: C.GRAY, strokeWidth: 2.4 });
  c.poly([[cx - 13, y + 222], [cx + 13, y + 222], [cx + 6, y + 262], [cx - 6, y + 262]], { fill: C.OFFWHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4 });
  // waardekaart onderaan
  c.rect(cx - 130, y + lh - 110, 260, 72, highlight
    ? { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED, strokeWidth: 2.6, roughness: 1.2 }
    : { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2, roughness: 1.3 });
  c.txt(cx, y + lh - 110 + 47, '"' + value + '"', 30, C.GRAY, 700);
}

data.forEach(([k, v], i) => locker(startX + i * (lw + gap), k, v, i === HIT));

// annotatie op het eerste kluisje
const x0 = startX;
c.txt(150, y + 73, 'sleutel', 32, C.GRAY, 600, 'end');
c.arrow(165, y + 73, x0 + 38, y + 73, { strokeWidth: 2.2 });
c.txt(150, y + lh - 74, 'waarde', 32, C.GRAY, 600, 'end');
c.arrow(165, y + lh - 74, x0 + 28, y + lh - 74, { strokeWidth: 2.2 });

// opzoek-voorbeeld: namen[666] -> direct naar het juiste kluisje
const hx = startX + HIT * (lw + gap) + lw / 2;
c.rect(hx - 170, 200, 340, 84, { fill: C.WHITE, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 2.6, roughness: 1.1 });
c.txt(hx, 254, 'namen[666]', 40, C.RED_DARK, 700);
c.arrow(hx, 286, hx, y + 26, { strokeWidth: 2.8, head: 20 });

c.txt(850, 930, 'Geen index of volgorde: je vraagt de sleutel, je krijgt de waarde.', 30, C.GRAY, 600);

c.save(__dirname, 'dictionAlternatief', '');
