// H5 - if: conditie -> If code (true), anders rechtstreeks verder
const { createCanvas, C } = require('./excal');
const { terminal, proc, decision } = require('./flow');
const c = createCanvas(760, 540);

const X = 340;
terminal(c, X, 45);
c.arrow(X, 66, X, 103, { strokeWidth: 2.6, head: 15 });

decision(c, X, 175, 260, 150, 'conditie');

// true -> rechts naar If code
c.line(470, 175, 590, 175, { strokeWidth: 2.6 });
c.arrow(590, 175, 590, 262, { strokeWidth: 2.6, head: 15 });
c.txt(565, 157, 'Conditie is true', 27, C.GRAY, 600);
proc(c, 590, 300, 180, 72, 'If code');

// If code sluit terug aan op de hoofdlijn
c.line(590, 336, 590, 430, { strokeWidth: 2.6 });
c.arrow(590, 430, 356, 430, { strokeWidth: 2.6, head: 15 });

// false -> rechtstreeks omlaag
c.line(X, 250, X, 430, { strokeWidth: 2.6 });
c.txt(212, 330, 'Conditie is false', 27, C.GRAY, 600, 'end');

c.arrow(X, 430, X, 467, { strokeWidth: 2.6, head: 15 });
terminal(c, X, 489);

c.save('.', 'if', 'NEW');
