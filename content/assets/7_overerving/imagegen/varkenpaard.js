const { createCanvas, C, region, REGION } = require('./arr');
const { COL } = require('./over');

const W = 2100, H = 980;
const c = createCanvas(W, H);

// Regions
region(c, 40, 40, 520, 900, REGION.STACK, 'STACK', '#3a7d34');
region(c, 620, 40, 1440, 900, REGION.HEAP, 'HEAP', '#b9881f');
c.line(595, 60, 595, 920, {
  strokeWidth: 3, strokeLineDash: [16, 13], roughness: 0.5, disableMultiStroke: true
});

// Heap-object in platte 2D stijl (abstracttemplateAlternatief-stijl)
function heapObject(c, x, y, w, opts) {
  const [cf, cs] = COL[opts.color || 'purple'];
  const mainH = 270, bodyH = 120, subH = 100;

  // DIER-sectie
  c.rect(x, y, w, mainH, {
    fill: '#f2f2f2', fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.6, roughness: 1.35
  });
  c.txt(x + w / 2, y + 48, 'DIER', 42, C.GRAY, 800);
  c.line(x + 20, y + 68, x + w - 20, y + 68, { strokeWidth: 1.8, roughness: 1.8 });
  c.txt(x + w / 2, y + 106, 'abstract MaakGeluid()', 28, '#888888', 600);

  // Method body (gekleurd — de override van de subklasse)
  const bx = x + 40, by = y + 126, bw = w - 80;
  c.rect(bx, by, bw, bodyH, {
    fill: cf, fillStyle: 'solid', stroke: cs, strokeWidth: 2.2, roughness: 1.2
  });
  const arr = Array.isArray(opts.ret) ? opts.ret : [opts.ret];
  const textY = by + bodyH / 2 - (arr.length - 1) * 17 + 12;
  arr.forEach((t, i) => c.txt(bx + bw / 2, textY + i * 34, t, 28, C.GRAY, 600));

  // Subklasse-label
  c.rect(x, y + mainH, w, subH, {
    fill: cf, fillStyle: 'solid', stroke: cs, strokeWidth: 2.6, roughness: 1.35
  });
  c.txt(x + w / 2, y + mainH + subH / 2 + 14, opts.subName, 40, C.GRAY, 700);
}

// ── someAnimal → Varken (groen) ───────────────────────────────────
const [gf, gs] = COL.green;
c.bubble(310, 130, 360, 110, 'someAnimal', 310, 268, 42);
c.rect(110, 270, 360, 150, { fill: gf, fillStyle: 'solid', stroke: gs, strokeWidth: 2.4, roughness: 1.05 });
c.txt(290, 353, '0x7f2a', 40, C.GRAY, 700);

// ── anotherAnimal → Paard (paars) ────────────────────────────────
const [pf, ps] = COL.purple;
c.bubble(310, 560, 440, 110, 'anotherAnimal', 310, 698, 42);
c.rect(90, 700, 400, 150, { fill: pf, fillStyle: 'solid', stroke: ps, strokeWidth: 2.4, roughness: 1.05 });
c.txt(290, 783, '0x3bc1', 40, C.GRAY, 700);

// ── Heap objecten ─────────────────────────────────────────────────
const OW = 520;

// Varken (groen) – rechts boven
const VX = 1450, VY = 110;
heapObject(c, VX, VY, OW, {
  color: 'green', subName: 'Varken', ret: ['return "Oinoink";']
});

// Paard (paars) – links midden
const PX = 660, PY = 530;
heapObject(c, PX, PY, OW, {
  color: 'purple', subName: 'Paard', ret: ['return "Hinnikhinnik";']
});

// ── Pijlen (L-vorm) ───────────────────────────────────────────────
const AO = { strokeWidth: 2.6, head: 16 };
const LO = { strokeWidth: 2.6, roughness: 1.2 };

// body-mid y van elk object
const vaY = VY + 126 + 60;  // = 296  (midden van Varken body)
const paY = PY + 126 + 60;  // = 716  (midden van Paard body)

// someAnimal (right ≈ x470, y345) → Varken
c.line(470, 345, 595, 345, LO);
c.line(595, 345, 595, vaY, LO);
c.arrow(595, vaY, VX, vaY, AO);

// anotherAnimal (right ≈ x490, y775) → Paard
c.line(490, 775, 595, 775, LO);
c.line(595, 775, 595, paY, LO);
c.arrow(595, paY, PX, paY, AO);

c.save(__dirname, 'varkenpaard', 'NEW');
