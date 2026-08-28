// H5 - ifflownobrace: if zonder accolades. Enkel de eerste boodschap hangt aan de
// test, de tweede staat na het samenkomen en verschijnt dus altijd.
// Draaien vanuit de imagegen-map:  node ifflownobrace.js
const { createCanvas, C } = require('./excal');
const { terminal, connector, decision, proc } = require('./flow');
const c = createCanvas(640, 680);

const X = 250, Rx = 530;
terminal(c, X, 32);
c.arrow(X, 54, X, 72, { strokeWidth: 2.6, head: 15 });

decision(c, X, 155, 300, 160, 'tijd < 20 ?');
// true omlaag naar de eerste boodschap
c.arrow(X, 235, X, 297, { strokeWidth: 2.6, head: 15 });
c.txt(X - 42, 285, 'true', 30, C.GRAY, 600, 'end');
proc(c, X, 350, 340, 90, ['Schrijf', '"Doe zo voort."']);

// connector na de eerste boodschap, waar de false-tak aansluit
c.arrow(X, 395, X, 428, { strokeWidth: 2.6, head: 14 });
connector(c, X, 445);

// false rechtsom naar diezelfde connector
c.line(400, 155, Rx, 155, { strokeWidth: 2.6 });
c.line(Rx, 155, Rx, 445, { strokeWidth: 2.6 });
c.arrow(Rx, 445, X + 16, 445, { strokeWidth: 2.6, head: 14 });
c.txt(Rx, 137, 'false', 30, C.GRAY, 600);

// de tweede boodschap staat na het samenkomen en draait dus altijd
c.arrow(X, 458, X, 487, { strokeWidth: 2.6, head: 15 });
proc(c, X, 540, 340, 90, ['Schrijf', '"Je bent er bijna!"']);
c.arrow(X, 585, X, 612, { strokeWidth: 2.6, head: 15 });
terminal(c, X, 634);

c.save('.', 'ifflownobrace', 'NEW');
