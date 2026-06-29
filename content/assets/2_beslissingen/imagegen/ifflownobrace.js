// H4 - ifflownobrace: if zonder accolades -> enkel C conditioneel, D altijd
const { createCanvas, C } = require('./excal');
const { terminal, connector, decision, io } = require('./flow');
const c = createCanvas(560, 700);

const X = 210, Rx = 470;
terminal(c, X, 32);
c.arrow(X, 54, X, 72, { strokeWidth: 2.6, head: 15 });

decision(c, X, 155, 300, 160, 'number < 5 ?');
// true omlaag naar C
c.arrow(X, 235, X, 306, { strokeWidth: 2.6, head: 15 });
c.txt(168, 285, 'true', 30, C.GRAY, 600, 'end');
io(c, X, 345, 260, 72, 'schrijf "C"');

// connector na C, waar false aansluit
c.arrow(X, 381, X, 428, { strokeWidth: 2.6, head: 14 });
connector(c, X, 445);

// false rechtsom naar de connector na C
c.line(360, 155, Rx, 155, { strokeWidth: 2.6 });
c.line(Rx, 155, Rx, 445, { strokeWidth: 2.6 });
c.arrow(Rx, 445, X + 16, 445, { strokeWidth: 2.6, head: 14 });
c.txt(Rx, 137, 'false', 30, C.GRAY, 600);

c.arrow(X, 458, X, 498, { strokeWidth: 2.6, head: 15 });
io(c, X, 535, 260, 72, 'schrijf "D"');
c.arrow(X, 571, X, 608, { strokeWidth: 2.6, head: 15 });
terminal(c, X, 630);

c.save('.', 'ifflownobrace', 'NEW');
