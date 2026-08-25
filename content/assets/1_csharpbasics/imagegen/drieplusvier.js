// H3 - drieplusvier: dezelfde invoer "3" en "4", twee keer opgeteld.
// Als strings plakt de + ze aan elkaar ("34"), na int.Parse telt hij op (7).
// Draaien vanuit de imagegen-map:  node drieplusvier.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1500, 680);

const W = 170, H = 140, AX = 270, BX = 530, RX = 900, RW = 230;
const Y1 = 110, Y2 = 440;
const mid = (y) => y + H / 2 + 50 * 0.34;   // basislijn voor tekst van 50px in een box

function rij(y, a, b, res, kleur, resCell, uitleg) {
  c.rect(AX, y, W, H, { strokeWidth: 2.4, roughness: 1.4 });
  c.txt(AX + W / 2, mid(y), a, 50, kleur, 700);
  c.rect(BX, y, W, H, { strokeWidth: 2.4, roughness: 1.4 });
  c.txt(BX + W / 2, mid(y), b, 50, kleur, 700);
  c.txt((AX + W + BX) / 2, mid(y) + 4, '+', 60, C.GRAY, 700);

  c.arrow(BX + W + 20, y + H / 2, RX - 20, y + H / 2, { strokeWidth: 2.6, head: 16 });

  if (resCell) c.cell(RX, y, RW, H, res, { size: 52 });
  else {
    c.rect(RX, y, RW, H, { strokeWidth: 2.4, roughness: 1.4 });
    c.txt(RX + RW / 2, mid(y), res, 52, C.GRAY, 700);
  }
  c.txt(RX + RW / 2, y + H + 46, uitleg, 30, C.GRAY, 400);
}

// ---------- rij 1: twee strings ----------
c.txt(215, mid(Y1), 'string', 40, C.RED_DARK, 700, 'end');
rij(Y1, '"3"', '"4"', '"34"', C.RED_DARK, true, 'aan elkaar geplakt');

// ---------- rij 2: twee ints ----------
c.txt(215, mid(Y2), 'int', 40, C.RED_DARK, 700, 'end');
rij(Y2, '3', '4', '7', C.GRAY, false, 'opgeteld');

// ---------- int.Parse van rij 1 naar rij 2 ----------
c.arrow(AX + W / 2, Y1 + H + 22, AX + W / 2, Y2 - 18, { stroke: C.RED, strokeWidth: 2.4, head: 14 });
c.arrow(BX + W / 2, Y1 + H + 22, BX + W / 2, Y2 - 18, { stroke: C.RED, strokeWidth: 2.4, head: 14 });
c.txt((AX + W + BX) / 2, (Y1 + H + Y2) / 2 + 12, 'int.Parse()', 32, C.RED_DARK, 700);

// ---------- opmerking bij "34" ----------
c.bubble(1330, 60, 270, 120, ['geen crash,', 'gewoon fout'], RX + RW + 8, Y1 + 62, 34);

c.save('.', 'drieplusvier', '');
