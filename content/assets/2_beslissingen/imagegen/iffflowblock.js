// H4 - iffflowblock: if MET accolades; "Klein" en "Einde" beide conditioneel
const { createCanvas, C } = require('./excal');
const { terminal, proc, decision } = require('./flow');
const c = createCanvas(620, 700);

const X = 210, Rx = 500;
terminal(c, X, 32);
c.arrow(X, 54, X, 77, { strokeWidth: 2.6, head: 15 });

decision(c, X, 170, 320, 180, 'nummer < 5 ?');
c.arrow(X, 262, X, 343, { strokeWidth: 2.6, head: 15 });
c.txt(168, 310, 'true', 30, C.GRAY, 600, 'end');

proc(c, X, 380, 400, 72, 'Schrijf "Klein"');
c.arrow(X, 417, X, 483, { strokeWidth: 2.6, head: 15 });

proc(c, X, 520, 400, 72, 'Schrijf "Einde"');
// merge na Einde
c.line(X, 557, X, 605, { strokeWidth: 2.6 });
c.arrow(X, 605, X, 633, { strokeWidth: 2.6, head: 15 });
terminal(c, X, 655);

// false-tak rechtsom, sluit aan na "Einde"
c.line(370, 170, Rx, 170, { strokeWidth: 2.6 });
c.line(Rx, 170, Rx, 605, { strokeWidth: 2.6 });
c.arrow(Rx, 605, X + 16, 605, { strokeWidth: 2.6, head: 15 });
c.txt(Rx, 152, 'false', 30, C.GRAY, 600);

c.save('.', 'iffflowblock', 'NEW');
