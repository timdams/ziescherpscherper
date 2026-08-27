// H4 - waarom bankers rounding bestaat: de afrondfouten heffen elkaar op.
// Draaien vanuit de imagegen-map:  node bankersom.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1700, 920);

const W = 150, H = 100, GAP = 14, X0 = 380;
const cx = i => X0 + i * (W + GAP) + W / 2;
const bx = i => X0 + i * (W + GAP);

const Y_BOVEN = 60, Y_REEKS = 380, Y_BANK = 700;
const LX = 336, RX = 1380;

const reeks = ['0.5', '1.5', '2.5', '3.5', '4.5', '5.5'];
const boven = ['1', '2', '3', '4', '5', '6'];
const bank = ['0', '2', '2', '4', '4', '6'];
const dBoven = ['+0.5', '+0.5', '+0.5', '+0.5', '+0.5', '+0.5'];
const dBank = ['-0.5', '+0.5', '-0.5', '+0.5', '-0.5', '+0.5'];

// ---------- boven: alles naar boven afgerond ----------
boven.forEach((v, i) => {
  c.rect(bx(i), Y_BOVEN, W, H, { strokeWidth: 2.2, roughness: 1.4 });
  c.txt(cx(i), Y_BOVEN + 68, v, 46, C.GRAY, 700);
});

// ---------- midden: de echte reeks ----------
reeks.forEach((v, i) => c.cell(bx(i), Y_REEKS, W, H, v, { size: 40 }));

// ---------- onder: bankers rounding ----------
bank.forEach((v, i) => {
  c.rect(bx(i), Y_BANK, W, H, { strokeWidth: 2.2, roughness: 1.4 });
  c.txt(cx(i), Y_BANK + 68, v, 46, C.GRAY, 700);
});

// ---------- pijlen met de fout die elke afronding maakt ----------
for (let i = 0; i < 6; i++) {
  c.arrow(cx(i), Y_REEKS - 10, cx(i), Y_BOVEN + H + 12, { stroke: C.GRAY, strokeWidth: 2.4, head: 14 });
  c.txt(cx(i) + 16, 278, dBoven[i], 28, C.RED_DARK, 700, 'start');

  c.arrow(cx(i), Y_REEKS + H + 10, cx(i), Y_BANK - 12, { stroke: C.GRAY, strokeWidth: 2.4, head: 14 });
  c.txt(cx(i) + 16, 598, dBank[i], 28, dBank[i][0] === '+' ? C.RED_DARK : C.GRAY, 700, 'start');
}

// ---------- namen links ----------
c.txt(LX, Y_BOVEN + 62, 'altijd naar boven', 38, C.RED_DARK, 700, 'end');
c.txt(LX, Y_REEKS + 62, 'de echte reeks', 38, C.RED_DARK, 700, 'end');
c.txt(LX, Y_BANK + 62, 'bankers rounding', 38, C.RED_DARK, 700, 'end');

// ---------- sommen rechts ----------
c.txt(RX, Y_BOVEN + 46, 'som = 21', 38, C.GRAY, 700, 'start');
c.txt(RX, Y_BOVEN + 96, 'fout = +3', 34, C.RED_DARK, 700, 'start');
c.txt(RX, Y_REEKS + 62, 'echte som = 18', 38, C.GRAY, 700, 'start');
c.txt(RX, Y_BANK + 46, 'som = 18', 38, C.GRAY, 700, 'start');
c.txt(RX, Y_BANK + 96, 'fout = 0', 34, C.RED_DARK, 700, 'start');

c.txt((X0 + 1350) / 2, 872, 'elk resultaat is een even getal', 32, C.GRAY, 500);

c.save('.', 'bankersom', '');
