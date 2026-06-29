// H4 - ifelseflow: if/else; conditie false -> links, true -> rechts
const { createCanvas, C } = require('./excal');
const { terminal, proc, decision } = require('./flow');
const c = createCanvas(720, 560);

const Cx = 360;
terminal(c, Cx, 45);
c.arrow(Cx, 66, Cx, 98, { strokeWidth: 2.6, head: 15 });

decision(c, Cx, 175, 300, 150, 'waterpeil > MAX');

// false -> links
const Lx = 130;
c.line(210, 175, Lx, 175, { strokeWidth: 2.6 });
c.arrow(Lx, 175, Lx, 263, { strokeWidth: 2.6, head: 15 });
c.txt(Lx, 157, 'Conditie is false', 28, C.GRAY, 600);
proc(c, Lx, 305, 210, 84, ['"Waterpeil is', 'in orde."']);

// true -> rechts
const Rx = 590;
c.line(510, 175, Rx, 175, { strokeWidth: 2.6 });
c.arrow(Rx, 175, Rx, 263, { strokeWidth: 2.6, head: 15 });
c.txt(Rx, 157, 'Conditie is true', 28, C.GRAY, 600);
proc(c, Rx, 305, 210, 84, ['"Waterpeil staat', 'te hoog!"']);

// samenvoegen onderaan
c.line(Lx, 347, Lx, 445, { strokeWidth: 2.6 });
c.line(Rx, 347, Rx, 445, { strokeWidth: 2.6 });
c.line(Lx, 445, Rx, 445, { strokeWidth: 2.6 });
c.arrow(Cx, 445, Cx, 488, { strokeWidth: 2.6, head: 15 });
terminal(c, Cx, 512);

c.save('.', 'ifelseflow', 'NEW');
