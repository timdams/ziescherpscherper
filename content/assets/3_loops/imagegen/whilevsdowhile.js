// H6 - de while- en de do while-flowchart naast elkaar, zodat het verschil
// (test vooraan versus test achteraan) in een oogopslag te zien is.
// Beide schema's zijn dezelfde als while.js en dowhile.js; enkel de verticale
// spreiding van de while is uitgerekt zodat start en einde op dezelfde hoogte
// liggen als bij de do while.
// Draaien vanuit de imagegen-map:  node whilevsdowhile.js
const { createCanvas, C } = require('./excal');
const { terminal, proc, decision } = require('./flow');

const c = createCanvas(1500, 830);

const DY = 75;                 // ruimte bovenaan voor de kop van elke kolom
const SW = { strokeWidth: 2.6 };
const AR = { strokeWidth: 2.6, head: 15 };

// scheidingslijn tussen de twee panelen
c.line(830, 120, 830, 720, { strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });

// ================= links: while (test vooraan) =================
const XL = 330;
c.txt(XL, 60, 'while', 42, C.RED_DARK, 700);

terminal(c, XL, 40 + DY);
c.line(XL, 61 + DY, XL, 120 + DY, SW);
c.arrow(XL, 120 + DY, XL, 273 + DY, AR);

decision(c, XL, 375 + DY, 240, 200, 'conditie');

// false -> omlaag naar einde
c.arrow(XL, 475 + DY, XL, 590 + DY, AR);
c.txt(XL - 140, 538 + DY, 'Conditie is false', 27, C.GRAY, 600, 'end');
terminal(c, XL, 613 + DY);

// true -> while code en terug naar boven
c.line(XL + 120, 375 + DY, XL + 290, 375 + DY, SW);
c.txt(XL + 205, 405 + DY, 'Conditie is true', 27, C.GRAY, 600);
c.line(XL + 290, 375 + DY, XL + 290, 281 + DY, SW);
proc(c, XL + 290, 235 + DY, 300, 92, 'while code');
c.line(XL + 290, 189 + DY, XL + 290, 120 + DY, SW);
c.arrow(XL + 290, 120 + DY, XL + 16, 120 + DY, AR);

c.txt(XL, 760, 'de test staat vóór het codeblok', 30, C.GRAY, 600);
c.txt(XL, 805, 'draait 0 of meer keer', 30, C.RED_DARK, 700);

// ================= rechts: do while (test achteraan) =================
const XR = 1170;
c.txt(XR, 60, 'do while', 42, C.RED_DARK, 700);

terminal(c, XR, 40 + DY);
c.line(XR, 61 + DY, XR, 100 + DY, SW);
c.arrow(XR, 100 + DY, XR, 123 + DY, AR);

proc(c, XR, 170 + DY, 320, 92, 'do while code');
c.arrow(XR, 216 + DY, XR, 298 + DY, AR);

decision(c, XR, 400 + DY, 240, 200, 'conditie');

// false -> omlaag naar einde
c.arrow(XR, 500 + DY, XR, 590 + DY, AR);
c.txt(XR - 140, 538 + DY, 'Conditie is false', 27, C.GRAY, 600, 'end');
terminal(c, XR, 613 + DY);

// true -> terug naar boven van de do while code
c.line(XR + 120, 400 + DY, XR + 290, 400 + DY, SW);
c.txt(XR + 205, 430 + DY, 'Conditie is true', 27, C.GRAY, 600);
c.line(XR + 290, 400 + DY, XR + 290, 100 + DY, SW);
c.arrow(XR + 290, 100 + DY, XR + 16, 100 + DY, AR);

c.txt(XR, 760, 'de test staat ná het codeblok', 30, C.GRAY, 600);
c.txt(XR, 805, 'draait minstens 1 keer', 30, C.RED_DARK, 700);

c.save('.', 'whilevsdowhile', '');
