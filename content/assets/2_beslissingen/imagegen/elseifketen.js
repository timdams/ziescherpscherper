// H5 - de if - else if - else keten: elke false zakt door naar de volgende test,
// elke true verlaat de keten meteen langs onder.
// Draaien vanuit de imagegen-map:  node elseifketen.js
const { createCanvas, C } = require('./excal');
const { terminal, proc, decision } = require('./flow');

const c = createCanvas(1520, 590);

const ARR = { strokeWidth: 2.6, head: 15 };
const C1 = 300, C2 = 780, C3 = 1260;
const DY = 160;    // hoogte van de ruiten
const BY = 345;    // hoogte van de procesblokken
const MERGE = 480; // samenvoeglijn onderaan

// ---------- start ----------
terminal(c, C1, 45);
c.arrow(C1, 66, C1, 85, ARR);

// ---------- de twee tests ----------
decision(c, C1, DY, 290, 140, 'x > 100');
decision(c, C2, DY, 290, 140, 'x > 10');

// false van test 1 gaat naar test 2
c.arrow(C1 + 145, DY, C2 - 153, DY, ARR);
c.txt((C1 + C2) / 2, DY - 24, 'false', 30, C.GRAY, 600);

// false van test 2 gaat naar de else-tak
c.line(C2 + 145, DY, C3, DY, { strokeWidth: 2.6 });
c.arrow(C3, DY, C3, BY - 58, ARR);
c.txt((C2 + 145 + C3) / 2, DY - 24, 'false', 30, C.GRAY, 600);
c.txt(C3 + 22, DY + 66, 'else', 30, C.GRAY, 600, 'start');

// ---------- true-takken omlaag ----------
c.arrow(C1, DY + 70, C1, BY - 58, ARR);
c.txt(C1 - 22, DY + 108, 'true', 30, C.GRAY, 600, 'end');
c.arrow(C2, DY + 70, C2, BY - 58, ARR);
c.txt(C2 - 22, DY + 108, 'true', 30, C.GRAY, 600, 'end');

// ---------- wat er dan gebeurt ----------
proc(c, C1, BY, 340, 100, ['Schrijf', '"Groter dan 100"']);
proc(c, C2, BY, 340, 100, ['Schrijf', '"Groter dan 10"']);
proc(c, C3, BY, 380, 100, ['Schrijf "Getal kleiner', 'dan of gelijk 10"']);

// ---------- alles komt weer samen ----------
[C1, C2, C3].forEach(x => c.line(x, BY + 50, x, MERGE, { strokeWidth: 2.6 }));
c.line(C1, MERGE, C3, MERGE, { strokeWidth: 2.6 });
c.arrow(C2, MERGE, C2, MERGE + 55, ARR);
terminal(c, C2, MERGE + 80);

c.save('.', 'elseifketen', '');
