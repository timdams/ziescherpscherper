// H3 - char '1', string "1" en int 1: drie datatypes, drie notaties, dezelfde output.
// Draaien vanuit de imagegen-map:  node charstringint.js
const { createCanvas, C } = require('./excal');
const { monitor } = require('./mhelpers');

const c = createCanvas(1620, 1010);

const BOX_W = 300, BOX_H = 180, BOX_Y = 160;

function kolom(cx, code, literal, waarde, type, uitleg) {
  c.txtSegs(cx, 78, [
    { t: code, color: C.GRAY, weight: 500 },
    { t: literal, color: C.RED_DARK, weight: 700 },
    { t: ';', color: C.GRAY, weight: 500 },
  ], 34, 'middle');
  c.box3d(cx - BOX_W / 2, BOX_Y, BOX_W, BOX_H, waarde, { size: 72 });
  c.txt(cx, BOX_Y + BOX_H + 62, type, 48, C.RED_DARK, 700);
  c.txt(cx, BOX_Y + BOX_H + 112, uitleg, 30, C.GRAY, 400);
}

kolom(290, 'char eenKarakter = ', "'1'", "'1'", 'char', 'één enkel teken');
kolom(810, 'string eenString = ', '"1"', '"1"', 'string', '0, 1 of meer tekens');
kolom(1330, 'int eenGetal = ', '1', '1', 'int', 'een echt getal');

// ---------- pijlen naar het scherm ----------
const A = { stroke: C.RED, strokeWidth: 2.4, head: 15 };
c.arrow(290, 520, 600, 612, A);
c.arrow(810, 520, 810, 612, A);
c.arrow(1330, 520, 1020, 612, A);

// ---------- console ----------
monitor(c, 810, 625, 560, 300, '');
c.lines(600, 715, ['1', '1', '1'], 54, C.GRAY, 700, 'start', 1.25);

c.save('.', 'charstringint', '');
