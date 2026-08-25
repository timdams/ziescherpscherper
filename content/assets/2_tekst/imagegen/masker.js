// H3 - het masker 000.00 als sjabloon: 12.3 wordt aangevuld met nullen,
// 99999.3 steekt eruit maar wordt niet afgekapt.
// Draaien vanuit de imagegen-map:  node masker.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1620, 660);

const DOTX = 900, W = 90, H = 90, GAP = 30;
const intX = i => DOTX - GAP - W * (i + 1);          // i = 0 is het cijfer net voor de punt
const fracX = i => DOTX + GAP + W * i;
const A = { stroke: C.RED, strokeWidth: 2.4, head: 15 };

function punt(y) { c.txt(DOTX, y + H / 2 + 24, '.', 64, C.GRAY, 700); }
function vakje(x, y, s, uitMasker) {
  if (uitMasker) c.cell(x, y, W, H, s, { size: 52 });
  else { c.rect(x, y, W, H); c.txt(x + W / 2, y + H / 2 + 18, s, 52, C.GRAY, 700); }
}

// ---------- het masker ----------
const Y1 = 60;
const Y2 = 270, Y3 = 440;
c.txt(300, Y1 + H / 2 + 14, 'masker', 40, C.RED_DARK, 700, 'end');
[2, 1, 0].forEach(i => vakje(intX(i), Y1, '0', true));
punt(Y1);
[0, 1].forEach(i => vakje(fracX(i), Y1, '0', true));

// gestippeld kader: de breedte van het masker
c.rect(intX(2) - 22, 240, fracX(1) + W + 22 - (intX(2) - 22), Y3 + H + 16 - 240,
  { fill: 'none', stroke: C.GRAY, strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });

// ---------- 12.3 ----------
c.txt(300, Y2 + H / 2 + 18, '12.3', 52, C.GRAY, 700, 'end');
c.arrow(320, Y2 + H / 2, intX(2) - 54, Y2 + H / 2, A);
vakje(intX(2), Y2, '0', true);
vakje(intX(1), Y2, '1', false);
vakje(intX(0), Y2, '2', false);
punt(Y2);
vakje(fracX(0), Y2, '3', false);
vakje(fracX(1), Y2, '0', true);
c.bubble(1400, Y2 - 40, 300, 120, ['aangevuld', 'met 0'], fracX(1) + W + 34, Y2 + 30, 36);

// ---------- 99999.3 ----------
c.txt(300, Y3 + H / 2 + 18, '99999.3', 52, C.GRAY, 700, 'end');
c.arrow(320, Y3 + H / 2, intX(4) - 54, Y3 + H / 2, A);
[4, 3].forEach(i => vakje(intX(i) - 30, Y3, '9', false));
[2, 1, 0].forEach(i => vakje(intX(i), Y3, '9', false));
punt(Y3);
vakje(fracX(0), Y3, '3', false);
vakje(fracX(1), Y3, '0', true);
c.txt(intX(3) - 30, Y3 + H + 66, 'past niet in het masker, wordt toch getoond', 30, C.RED_DARK, 700, 'start');

c.save('.', 'masker', '');
