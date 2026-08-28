// H5 - voorrang van && op ||: dezelfde operanden, twee groeperingen, twee resultaten
// Draaien vanuit de imagegen-map:  node voorrang.js
const { createCanvas, C } = require('./excal');
const { badge, tokens, ring } = require('./ehelpers');

const c = createCanvas(1700, 900);

c.line(850, 60, 850, 810, { stroke: C.GRAY, strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });

const ARR = { stroke: C.GRAY, strokeWidth: 2.4, head: 15 };

// ================= links: && gaat voor || =================
c.txt(430, 100, '&& gaat voor ||', 38, C.RED_DARK, 700);
c.txt(430, 168, 'isLid || isStudent && heeftKaart', 40, C.GRAY, 700);
c.arrow(430, 196, 430, 244, ARR);

tokens(c, 320, [['true', 195], ['||', 298], ['false', 427], ['&&', 541], ['false', 654]], 50);
ring(c, 541, 302, 388, 100);
badge(c, 90, 302, 1);
c.arrow(430, 372, 430, 418, ARR);

tokens(c, 500, [['true', 312], ['||', 419], ['false', 536]], 50);
ring(c, 430, 482, 375, 100);
badge(c, 90, 482, 2);
c.arrow(430, 552, 430, 616, ARR);

c.cell(340, 630, 180, 115, 'true', { size: 56 });
c.txt(430, 800, 'een lid mag binnen zonder kaart', 34, C.RED_DARK, 700);

// ================= rechts: haakjes gaan voor alles =================
c.txt(1305, 100, 'haakjes gaan voor alles', 38, C.RED_DARK, 700);
c.txt(1305, 168, '(isLid || isStudent) && heeftKaart', 40, C.GRAY, 700);
c.arrow(1305, 196, 1305, 244, ARR);

tokens(c, 320, [['(', 996], ['true', 1060], ['||', 1163], ['false', 1293], [')', 1368],
  ['&&', 1459], ['false', 1573]], 50);
ring(c, 1182, 302, 443, 100);
badge(c, 905, 302, 1);
c.arrow(1305, 372, 1305, 418, ARR);

tokens(c, 500, [['true', 1187], ['&&', 1294], ['false', 1412]], 50);
ring(c, 1305, 482, 375, 100);
badge(c, 905, 482, 2);
c.arrow(1305, 552, 1305, 616, ARR);

c.cell(1215, 630, 180, 115, 'false', { size: 56 });
c.txt(1305, 800, 'iedereen heeft een kaart nodig', 34, C.RED_DARK, 700);

// ================= de gebruikte waarden =================
c.txt(850, 870, 'isLid = true, isStudent = false, heeftKaart = false', 30, C.GRAY, 600);

c.save('.', 'voorrang', '');
