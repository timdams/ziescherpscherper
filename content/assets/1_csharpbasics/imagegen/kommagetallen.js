// H2 - kommagetallen: float, double en decimal winnen elk op 1 van de 3 criteria.
const { createCanvas, C } = require('./excal');
const c = createCanvas(2060, 790);

const LBL_X = 370, SW = 420;          // labelkolom rechts uitgelijnd, breedte van een balk
const COLS = [620, 1180, 1740];       // middens van de drie kolommen
const NAMES = ['float', 'double', 'decimal'];

// kolomkoppen
NAMES.forEach((n, i) => c.cell(COLS[i] - 115, 50, 230, 86, n, { size: 44 }));

// een balk: frac = hoe vol, win = of dit type op dit criterium het beste scoort
function slider(cx, y, frac, tekst, win) {
  const x = cx - SW / 2, h = 46;
  c.rect(x, y, SW, h, { fill: 'none', stroke: '#b8b8b8', strokeWidth: 2, roughness: 1.2, strokeLineDash: [9, 8] });
  if (win)
    c.rect(x, y, SW * frac, h, { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 7, fillWeight: 1.6,
      stroke: C.RED, strokeWidth: 3.2, roughness: 1.3 });
  else
    c.rect(x, y, SW * frac, h, { fill: '#e6e6e6', fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.2, roughness: 1.3 });
  c.txt(cx, y + h + 42, tekst, 32, win ? C.RED_DARK : C.GRAY, win ? 700 : 500);
}

// rij = criterium, met per kolom een balk
function rij(y, naam, hint, data) {
  c.txt(LBL_X, y + 36, naam, 44, C.GRAY, 700, 'end');
  c.txt(LBL_X, y + 78, hint, 28, '#8a8a8a', 400, 'end');
  data.forEach((d, i) => slider(COLS[i], y, d[0], d[1], d[2]));
}

rij(230, 'bereik', '(meer is beter)', [
  [0.42, 'max 3,4E38', false], [1.00, 'max 1,7E308', true], [0.30, 'max 7,9E28', false]]);
rij(430, 'precisie', '(meer is beter)', [
  [0.28, '6 tot 9 cijfers', false], [0.58, '15 tot 17 cijfers', false], [1.00, '28 tot 29 cijfers', true]]);
rij(630, 'geheugen', '(minder is beter)', [
  [0.25, '32 bits', true], [0.50, '64 bits', false], [1.00, '128 bits', false]]);

c.save('.', 'kommagetallen', '');
