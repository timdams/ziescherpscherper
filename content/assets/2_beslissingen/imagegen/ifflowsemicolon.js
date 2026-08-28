// H5 - ifflowsemicolon: de puntkomma sluit de if meteen af. Beide takken komen
// samen voor het blok, dus verschijnen beide boodschappen altijd.
// Draaien vanuit de imagegen-map:  node ifflowsemicolon.js
const { createCanvas, C } = require('./excal');
const { terminal, connector, decision, proc } = require('./flow');
const c = createCanvas(640, 690);

const X = 250, Rx = 530;
terminal(c, X, 32);
c.arrow(X, 54, X, 72, { strokeWidth: 2.6, head: 15 });

decision(c, X, 155, 300, 160, 'naam == "neo" ?');
// true omlaag naar de connector, vlak onder de ruit: de if heeft geen eigen code
c.arrow(X, 235, X, 289, { strokeWidth: 2.6, head: 14 });
c.txt(X - 42, 270, 'true', 30, C.GRAY, 600, 'end');
connector(c, X, 305);

// false rechtsom naar dezelfde connector
c.line(400, 155, Rx, 155, { strokeWidth: 2.6 });
c.line(Rx, 155, Rx, 305, { strokeWidth: 2.6 });
c.arrow(Rx, 305, X + 16, 305, { strokeWidth: 2.6, head: 14 });
c.txt(Rx, 137, 'false', 30, C.GRAY, 600);

// het blok erna hoort bij niets meer en draait dus altijd
c.arrow(X, 318, X, 347, { strokeWidth: 2.6, head: 15 });
proc(c, X, 400, 340, 90, ['Schrijf', '"Take the red pill?"']);
c.arrow(X, 445, X, 492, { strokeWidth: 2.6, head: 15 });
proc(c, X, 545, 340, 90, ['Schrijf', '"Or the blue pill?"']);
c.arrow(X, 590, X, 617, { strokeWidth: 2.6, head: 15 });
terminal(c, X, 640);

c.save('.', 'ifflowsemicolon', 'NEW');
