// H4 Math - methoden in elkaar schuiven: links de afstand tussen speler en
// monster als rechthoekszijden, rechts hoe C# Math.Sqrt(Math.Pow(dx, 2) +
// Math.Pow(dy, 2)) van binnen naar buiten uitrekent.
// Draaien vanuit de imagegen-map:  node binnennaarbuiten.js
const { createCanvas, C } = require('./excal');
const { badge } = require('./ehelpers');

const c = createCanvas(1520, 800);
const G = { stroke: C.GRAY, strokeWidth: 2.2, head: 14 };
const A = { stroke: C.RED, strokeWidth: 2.4, head: 15 };

// ---------- links: het speelveld ----------
const OX = 110, OY = 740, E = 40;                 // oorsprong en pixels per eenheid
const S = [OX + 3 * E, OY - 4 * E];               // speler (3, 4)
const M = [OX + 9 * E, OY - 12 * E];              // monster (9, 12)
const H = [S[0], M[1]];                           // rechte hoek

c.arrow(OX, OY, OX, 175, G);
c.arrow(OX, OY, 700, OY, G);
c.txt(714, 752, 'x', 30, C.GRAY, 500, 'start');
c.txt(88, 192, 'y', 30, C.GRAY, 500, 'end');

c.line(S[0], S[1], H[0], H[1], { stroke: C.GRAY, strokeWidth: 2.2 });
c.line(H[0], H[1], M[0], M[1], { stroke: C.GRAY, strokeWidth: 2.2 });
c.line(S[0], S[1], M[0], M[1], { stroke: C.RED, strokeWidth: 2.8 });
c.line(H[0], H[1] + 24, H[0] + 24, H[1] + 24, { stroke: C.GRAY, strokeWidth: 1.8 });
c.line(H[0] + 24, H[1], H[0] + 24, H[1] + 24, { stroke: C.GRAY, strokeWidth: 1.8 });

[S, M].forEach(p => c.circle(p[0], p[1], 20, { fill: C.RED, fillStyle: 'solid', stroke: C.RED, roughness: 0.8 }));
c.txt(S[0], S[1] + 45, 'speler (3, 4)', 30, C.GRAY, 600);
c.txt(M[0] + 30, M[1] - 8, 'monster (9, 12)', 30, C.GRAY, 600, 'start');
c.txt(S[0] - 18, 430, 'dy = 8', 32, C.GRAY, 700, 'end');
c.txt(350, 232, 'dx = 6', 32, C.GRAY, 700);
c.txt(405, 432, 'afstand = 10', 32, C.RED_DARK, 700, 'start');

c.txt(260, 682, 'double dx = monsterX - spelerX;  //6', 26, C.GRAY, 500, 'start');
c.txt(260, 720, 'double dy = monsterY - spelerY;  //8', 26, C.GRAY, 500, 'start');

c.line(750, 120, 750, 780, { stroke: C.GRAY, strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });

// ---------- rechts: van binnen naar buiten ----------
c.txt(1140, 92, 'Math.Sqrt(Math.Pow(dx, 2) + Math.Pow(dy, 2))', 32, C.GRAY, 700);

c.rect(800, 145, 670, 495, { strokeWidth: 2.4, roughness: 1.5 });
c.txt(830, 200, 'Math.Sqrt', 34, C.GRAY, 700, 'start');

[[970, 'dx', '6', '36'], [1300, 'dy', '8', '64']].forEach(([cx, v, n, res], i) => {
  c.rect(cx - 125, 245, 250, 120, { strokeWidth: 2.2 });
  c.txt(cx, 298, 'Math.Pow(' + v + ', 2)', 30, C.GRAY, 700);
  c.txt(cx, 340, 'Math.Pow(' + n + ', 2)', 30, C.RED_DARK, 700);
  c.arrow(cx, 372, cx, 412, G);
  c.cell(cx - 85, 420, 170, 70, res, { size: 40 });
  badge(c, i ? 1425 : 845, 455, i + 1, 54);
});

c.txt(1135, 470, '+', 52, C.GRAY, 700);
c.arrow(970, 495, 1085, 522, G);
c.arrow(1300, 495, 1185, 522, G);
c.cell(1050, 530, 170, 70, '100', { size: 40 });
badge(c, 1290, 565, 3, 54);

c.arrow(1135, 607, 1135, 688, A);
c.txt(1110, 678, 'Math.Sqrt(100)', 30, C.RED_DARK, 700, 'end');
c.cell(995, 695, 280, 70, 'afstand = 10', { size: 38 });
badge(c, 1330, 730, 4, 54);

c.save('.', 'binnennaarbuiten', '');
