// H5 - ifelse: conditie -> If code (true) / Else code (false)
const { createCanvas, C } = require('./excal');
const { terminal, proc, decision } = require('./flow');
const c = createCanvas(700, 560);

const X = 340;
terminal(c, X, 45);
c.arrow(X, 66, X, 98, { strokeWidth: 2.6, head: 15 });

decision(c, X, 175, 260, 150, 'conditie');

// false -> links naar Else code
c.line(210, 175, 120, 175, { strokeWidth: 2.6 });
c.arrow(120, 175, 120, 272, { strokeWidth: 2.6, head: 15 });
c.txt(120, 157, 'Conditie is false', 27, C.GRAY, 600);
proc(c, 120, 315, 200, 80, 'Else code');

// true -> rechts naar If code
c.line(470, 175, 560, 175, { strokeWidth: 2.6 });
c.arrow(560, 175, 560, 272, { strokeWidth: 2.6, head: 15 });
c.txt(560, 157, 'Conditie is true', 27, C.GRAY, 600);
proc(c, 560, 315, 200, 80, 'If code');

// samenvoegen onderaan
c.line(120, 355, 120, 440, { strokeWidth: 2.6 });
c.line(560, 355, 560, 440, { strokeWidth: 2.6 });
c.line(120, 440, 560, 440, { strokeWidth: 2.6 });
c.arrow(X, 440, X, 485, { strokeWidth: 2.6, head: 15 });
terminal(c, X, 508);

c.save('.', 'ifelse', 'NEW');
