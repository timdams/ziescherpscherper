// H3 - Het copyright-teken opzoeken in de UNICODE-tabel en op drie manieren in C# tonen, telkens dezelfde output.
// Draaien vanuit de imagegen-map:  node drieweg.js
const { createCanvas, C } = require('./excal');
const { codebox, monitor } = require('./mhelpers');

const c = createCanvas(1620, 900);

// ---------- UNICODE-tabel (fragment) ----------
const CW = 150, CH = 120, TY = 50;
const cellen = [['¨', '00A8'], ['©', '00A9'], ['ª', '00AA']];
const TX0 = 810 - CW * 1.5;
cellen.forEach(([teken, code], i) => {
  const x = TX0 + i * CW;
  const accent = i === 1;
  c.rect(x, TY, CW, CH, accent
    ? { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 6, fillWeight: 1.5, stroke: C.RED, strokeWidth: 2.4 }
    : {});
  c.txt(x + CW / 2, TY + 62, teken, 54, accent ? C.RED_DARK : C.GRAY, 700);
  c.txt(x + CW / 2, TY + 104, code, 30, accent ? C.RED_DARK : C.GRAY, 500);
});
c.txt(TX0 - 30, TY + CH / 2 + 12, 'UNICODE-tabel', 36, C.RED_DARK, 700, 'end');

// ---------- pijlen van het teken naar de drie manieren ----------
const A = { stroke: C.RED, strokeWidth: 2.4, head: 15 };
const BOX_Y = 330, BOX_W = 440, BOX_H = 165, DEPTH = 30;
const cols = [290, 810, 1330];
c.arrow(770, TY + CH + 8, cols[0], BOX_Y - DEPTH - 14, A);
c.arrow(810, TY + CH + 8, cols[1], BOX_Y - DEPTH - 14, A);
c.arrow(850, TY + CH + 8, cols[2], BOX_Y - DEPTH - 14, A);

// ---------- drie codedozen ----------
const G = (t) => ({ t, color: C.GRAY, weight: 500 });
const R = (t) => ({ t, color: C.RED_DARK, weight: 700 });
const opt = { codeSize: 32, titleSize: 34, pad: 24, depth: DEPTH };

codebox(c, cols[0] - BOX_W / 2, BOX_Y, BOX_W, BOX_H, 'Manier 1: plakken', [
  [G('Console.WriteLine('), R('"©"'), G(');')],
], opt);

codebox(c, cols[1] - BOX_W / 2, BOX_Y, BOX_W, BOX_H, 'Manier 2: casten', [
  [G('char copyright = '), R('(char)0x00A9'), G(';')],
  [G('Console.WriteLine(copyright);')],
], opt);

codebox(c, cols[2] - BOX_W / 2, BOX_Y, BOX_W, BOX_H, 'Manier 2: korter', [
  [G('Console.WriteLine("'), R(String.fromCharCode(92) + 'u00A9'), G('");')],
], opt);

// ---------- pijlen naar het scherm ----------
const MON_Y = 600;
c.arrow(cols[0], BOX_Y + BOX_H + 10, 600, MON_Y - 12, A);
c.arrow(cols[1], BOX_Y + BOX_H + 10, 810, MON_Y - 12, A);
c.arrow(cols[2], BOX_Y + BOX_H + 10, 1020, MON_Y - 12, A);

// ---------- console ----------
monitor(c, 810, MON_Y, 560, 230, '©', 130);

c.save('.', 'drieweg', '');
