// Array.Resize: de array groeit niet, ze wordt vervangen door een nieuwe.
const { createCanvas, C, cellRow } = require('./arr');
const c = createCanvas(1560, 1340);

function varbox(x, y, w, h) {
  c.rect(x, y, w, h, { fill: '#e2e2e2', fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.1 });
}

// ---------- voor ----------
c.txt(90, 160, 'voor', 52, C.RED_DARK, 700, 'start');
c.bubble(430, 100, 290, 110, 'cijfers', 430, 288, 44);
varbox(290, 290, 280, 130);
c.arrow(580, 355, 690, 355, { strokeWidth: 2.6, head: 16 });
cellRow(c, 700, 290, 140, 130, [8, 12, 5], { size: 48, weight: 700 });

// ---------- de oproep ----------
c.txt(780, 530, 'Array.Resize(ref cijfers, 5);', 54, C.RED_DARK, 700);
c.arrow(780, 570, 780, 665, { strokeWidth: 3, head: 20 });

// ---------- na ----------
c.txt(90, 800, 'na', 52, C.RED_DARK, 700, 'start');

// de oude array: bestaat nog, maar niemand wijst er nog naar
c.cell(700, 760, 140, 130, '8', { size: 48 });
c.cell(840, 760, 140, 130, '12', { size: 48 });
c.cell(980, 760, 140, 130, '5', { size: 48 });
c.lines(1180, 820, ['de oude array:', 'niemand wijst er', 'nog naar'], 38, C.RED_DARK, 700, 'start', 1.15);

c.bubble(430, 740, 290, 110, 'cijfers', 430, 928, 44);
varbox(290, 930, 280, 130);
c.carrow(580, 995, 665, 1070, 690, 1120, { strokeWidth: 2.8, head: 18 });

// waarden worden gekopieerd naar de nieuwe array
[770, 910, 1050].forEach(x => c.arrow(x, 900, x, 1048,
  { stroke: C.RED, strokeWidth: 2.2, head: 14, strokeLineDash: [12, 9], disableMultiStroke: true }));
c.txt(1180, 990, 'gekopieerd', 42, C.RED_DARK, 600, 'start');

cellRow(c, 700, 1060, 140, 130, [8, 12, 5, 0, 0], { size: 48, weight: 700 });
c.txt(1050, 1265, 'de nieuwe array', 44, C.GRAY, 600);

c.save('.', 'resize', '');
