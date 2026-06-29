// H5 - while: pre-test loop
const { createCanvas, C } = require('./excal');
const { terminal, proc, decision } = require('./flow');
const c = createCanvas(760, 600);

const X = 270;
terminal(c, X, 40);
c.line(X, 60, X, 110, { strokeWidth: 2.6 });
c.arrow(X, 110, X, 228, { strokeWidth: 2.6, head: 15 });

decision(c, X, 330, 240, 200, 'conditie');

// false -> omlaag naar einde
c.arrow(X, 430, X, 520, { strokeWidth: 2.6, head: 15 });
c.txt(150, 470, 'Conditie is false', 27, C.GRAY, 600, 'end');
terminal(c, X, 543);

// true -> while code en terug naar boven
c.line(390, 330, 560, 330, { strokeWidth: 2.6 });
c.txt(490, 360, 'Conditie is true', 27, C.GRAY, 600);
c.line(560, 330, 560, 256, { strokeWidth: 2.6 });
proc(c, 560, 210, 300, 92, 'while code');
c.line(560, 164, 560, 110, { strokeWidth: 2.6 });
c.arrow(560, 110, 286, 110, { strokeWidth: 2.6, head: 15 });

c.save('.', 'while', 'NEW');
