// H3 - char + char: 'A' (65) en 'B' (66) opgeteld geeft de int 131, geen letter.
// Draaien vanuit de imagegen-map:  node charplus.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1300, 540);

const BW = 220, BH = 200, BY = 150;

function charDoos(x, code, letter, getal, type) {
  c.txtSegs(x + BW / 2, 78, [
    { t: code, color: C.GRAY, weight: 500 },
    { t: letter, color: C.RED_DARK, weight: 700 },
    { t: ';', color: C.GRAY, weight: 500 },
  ], 32, 'middle');
  c.box3d(x, BY, BW, BH, '', {});
  c.txt(x + BW / 2, BY + 100, letter, 84, C.GRAY, 700);
  c.txt(x + BW / 2, BY + 165, getal, 40, C.RED_DARK, 700);
  c.txt(x + BW / 2, BY + BH + 62, type, 44, C.RED_DARK, 700);
}

charDoos(150, "char letter1 = ", "'A'", '65', 'char');
c.txt(445, BY + BH / 2 + 28, '+', 84, C.GRAY, 700);
charDoos(520, "char letter2 = ", "'B'", '66', 'char');
c.txt(815, BY + BH / 2 + 28, '=', 84, C.GRAY, 700);

// ---------- het resultaat ----------
c.txt(1010, 78, 'letter1 + letter2', 32, C.GRAY, 500);
c.cell(890, BY, 240, BH, '131', { size: 84 });
c.txt(1010, BY + BH + 62, 'int', 44, C.RED_DARK, 700);
c.txt(1010, BY + BH + 108, 'geen letter meer', 30, C.GRAY, 400);

c.save('.', 'charplus', '');
