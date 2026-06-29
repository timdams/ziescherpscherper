// H5 - dowhile: post-test loop
const { createCanvas, C } = require('./excal');
const { terminal, proc, decision } = require('./flow');
const c = createCanvas(760, 660);

const X = 270;
terminal(c, X, 40);
c.line(X, 60, X, 100, { strokeWidth: 2.6 });
c.arrow(X, 100, X, 123, { strokeWidth: 2.6, head: 15 });

proc(c, X, 170, 320, 92, 'do while code');
c.arrow(X, 216, X, 298, { strokeWidth: 2.6, head: 15 });

decision(c, X, 400, 240, 200, 'conditie');

// false -> omlaag naar einde
c.arrow(X, 500, X, 590, { strokeWidth: 2.6, head: 15 });
c.txt(150, 540, 'Conditie is false', 27, C.GRAY, 600, 'end');
terminal(c, X, 613);

// true -> terug naar boven van do-while code
c.line(390, 400, 560, 400, { strokeWidth: 2.6 });
c.txt(490, 430, 'Conditie is true', 27, C.GRAY, 600);
c.line(560, 400, 560, 100, { strokeWidth: 2.6 });
c.arrow(560, 100, 286, 100, { strokeWidth: 2.6, head: 15 });

c.save('.', 'dowhile', 'NEW');
