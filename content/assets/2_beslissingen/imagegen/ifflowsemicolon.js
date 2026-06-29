// H4 - ifflowsemicolon: if(...);  lege statement -> C en D draaien altijd
const { createCanvas, C } = require('./excal');
const { terminal, connector, decision, io } = require('./flow');
const c = createCanvas(560, 660);

const X = 210, Rx = 470;
terminal(c, X, 32);
c.arrow(X, 54, X, 72, { strokeWidth: 2.6, head: 15 });

decision(c, X, 155, 300, 160, 'number < 5 ?');
// true omlaag naar connector, vlak onder de ruit
c.arrow(X, 235, X, 289, { strokeWidth: 2.6, head: 14 });
c.txt(168, 270, 'true', 30, C.GRAY, 600, 'end');
connector(c, X, 305);

// false rechtsom naar dezelfde connector
c.line(360, 155, Rx, 155, { strokeWidth: 2.6 });
c.line(Rx, 155, Rx, 305, { strokeWidth: 2.6 });
c.arrow(Rx, 305, X + 16, 305, { strokeWidth: 2.6, head: 14 });
c.txt(Rx, 137, 'false', 30, C.GRAY, 600);

c.arrow(X, 318, X, 358, { strokeWidth: 2.6, head: 15 });
io(c, X, 395, 260, 72, 'schrijf "C"');
c.arrow(X, 431, X, 477, { strokeWidth: 2.6, head: 15 });
io(c, X, 515, 260, 72, 'schrijf "D"');
c.arrow(X, 551, X, 588, { strokeWidth: 2.6, head: 15 });
terminal(c, X, 610);

c.save('.', 'ifflowsemicolon', 'NEW');
