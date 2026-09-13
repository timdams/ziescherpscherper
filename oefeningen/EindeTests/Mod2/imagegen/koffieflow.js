// Vaardigheidsproef 2025-26, oefening 1 - flowchart koffiezet repareren (vervangt het mermaid-blok)
// Draaien vanuit de imagegen-map:  node koffieflow.js
const { createCanvas, C } = require('./excal');
const { proc, decision } = require('./flow');

const c = createCanvas(1520, 980);
const P = { strokeWidth: 2.6, head: 15 };
const lbl = (x, y, t, anchor = 'middle') => c.txt(x, y, t, 28, C.GRAY, 600, anchor);

// ---------- hoofdas links ----------
const X = 300;
proc(c, X, 80, 360, 90, ['Coffee machine', 'not working']);
c.arrow(X, 125, X, 181, P);

decision(c, X, 270, 380, 170, ['Machine has', 'power?']);
c.arrow(X, 355, X, 406, P);
lbl(X - 18, 392, 'Yes', 'end');

decision(c, X, 500, 420, 180, ['Out of beans', 'or water?']);
c.arrow(X, 590, X, 646, P);
lbl(X - 18, 630, 'No', 'end');

decision(c, X, 730, 340, 160, 'Filter warning?');
c.arrow(X, 810, X, 876, P);
lbl(X - 18, 855, 'No', 'end');

proc(c, X, 920, 340, 80, 'Send for repair');

// ---------- middenkolom ----------
const M = 780;
// Machine has power? -> No -> Plug in and turn on
c.arrow(490, 270, 606, 270, P);
lbl(548, 252, 'No');
proc(c, M, 270, 340, 80, 'Plug in and turn on');

// Out of beans or water? -> Yes -> Refill beans and water
c.arrow(510, 500, 606, 500, P);
lbl(558, 482, 'Yes');
proc(c, M, 500, 340, 80, 'Refill beans and water');

// Filter warning? -> Yes -> Replace or clean filter -> Refill beans and water
c.arrow(470, 730, 606, 730, P);
lbl(538, 712, 'Yes');
proc(c, M, 730, 340, 80, 'Replace or clean filter');
c.arrow(M, 690, M, 545, P);

// ---------- rechterkolom ----------
const R = 1180;
// Plug in and turn on -> Device starts smoking!
c.arrow(950, 270, 1006, 270, P);
proc(c, R, 270, 340, 80, 'Device starts smoking!');

// Refill beans and water -> Device fixed?
c.arrow(950, 500, 1016, 500, P);
decision(c, R, 500, 320, 170, 'Device fixed?');

// Device fixed? -> Yes -> Fixed
c.arrow(R, 585, R, 686, P);
lbl(R - 18, 650, 'Yes', 'end');
proc(c, R, 730, 240, 80, 'Fixed');

// ---------- terug naar de start ----------
// Device starts smoking! en Device fixed? (No) komen samen in een baan uiterst rechts
const B = 1440;
c.line(1350, 270, B, 270, { strokeWidth: 2.6 });
c.line(1340, 500, B, 500, { strokeWidth: 2.6 });
lbl(1390, 482, 'No');
c.line(B, 500, B, 80, { strokeWidth: 2.6 });
c.arrow(B, 80, 485, 80, P);

c.save('.', 'koffieflow', '');
