// H3 - een string is een reeks char-elementen: "Hallo" als vijf vakjes naast elkaar.
// Draaien vanuit de imagegen-map:  node stringketting.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1650, 440);

const X0 = 300, W = 150, Y = 190, H = 150;
const letters = ['H', 'a', 'l', 'l', 'o'];

// ---------- de code ----------
c.txtSegs(675, 78, [
  { t: 'string groet = ', color: C.GRAY, weight: 500 },
  { t: '"Hallo"', color: C.RED_DARK, weight: 700 },
  { t: ';', color: C.GRAY, weight: 500 },
], 44, 'middle');

c.arrow(675, 106, 675, 162, { stroke: C.RED, strokeWidth: 2.4, head: 14 });

// ---------- de vijf char-vakjes ----------
letters.forEach((ch, i) => {
  const x = X0 + i * W;
  c.cell(x, Y, W, H, ch, { size: 66 });
  c.txt(x + W / 2, Y + H + 52, String(i), 36, C.RED_DARK, 700);
});

c.txt(270, Y + H + 52, 'index', 32, C.GRAY, 400, 'end');

// ---------- opmerking ----------
c.bubble(1360, 95, 380, 150, ['elk vakje', 'is 1 char'], 1075, 272, 36);

c.save('.', 'stringketting', '');
