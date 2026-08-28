// H4 - ifflow: if zonder accolades-blok; "Klein" conditioneel, "Einde" altijd
const { createCanvas, C } = require('./excal');
const { terminal, proc, decision } = require('./flow');
const c = createCanvas(620, 870);

const X = 210, Rx = 500;
terminal(c, X, 45);
c.arrow(X, 66, X, 113, { strokeWidth: 2.6, head: 15 });

proc(c, X, 150, 400, 72, 'nummer krijgt waarde 3');
c.arrow(X, 187, X, 258, { strokeWidth: 2.6, head: 15 });

decision(c, X, 350, 320, 180, 'nummer < 5 ?');
// true omlaag
c.arrow(X, 442, X, 533, { strokeWidth: 2.6, head: 15 });
c.txt(168, 495, 'true', 30, C.GRAY, 600, 'end');

proc(c, X, 570, 400, 72, 'Schrijf "Klein"');
// merge tussen Klein en Einde
c.line(X, 607, X, 650, { strokeWidth: 2.6 });
c.arrow(X, 650, X, 684, { strokeWidth: 2.6, head: 15 });

proc(c, X, 720, 400, 72, 'Schrijf "Einde"');
c.arrow(X, 757, X, 793, { strokeWidth: 2.6, head: 15 });
terminal(c, X, 815);

// false-tak rechtsom, sluit aan voor "Einde"
c.line(370, 350, Rx, 350, { strokeWidth: 2.6 });
c.line(Rx, 350, Rx, 650, { strokeWidth: 2.6 });
c.arrow(Rx, 650, X + 16, 650, { strokeWidth: 2.6, head: 15 });
c.txt(Rx, 332, 'false', 30, C.GRAY, 600);

c.save('.', 'ifflow', 'NEW');
