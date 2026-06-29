// H5 - fullflow: faculteit (factorial) als volledige flowchart
const { createCanvas, C } = require('./excal');
const { terminal, connector, proc, decision, io } = require('./flow');
const c = createCanvas(620, 880);

const X = 200;
terminal(c, X, 40);
c.arrow(X, 60, X, 92, { strokeWidth: 2.6, head: 15 });

io(c, X, 130, 240, 72, 'Lees N in');
c.arrow(X, 166, X, 212, { strokeWidth: 2.6, head: 15 });

proc(c, X, 250, 240, 72, 'M=1, F=1');
c.arrow(X, 286, X, 326, { strokeWidth: 2.6, head: 14 });

connector(c, X, 340);
c.arrow(X, 353, X, 392, { strokeWidth: 2.6, head: 15 });

proc(c, X, 430, 240, 72, 'F=F*M');
c.arrow(X, 466, X, 488, { strokeWidth: 2.6, head: 15 });

decision(c, X, 560, 240, 140, 'M==N?');

// true -> toon F
c.arrow(X, 630, X, 684, { strokeWidth: 2.6, head: 15 });
c.txt(158, 662, 'true', 28, C.GRAY, 600, 'end');
io(c, X, 720, 300, 72, 'Toon F op scherm');
c.arrow(X, 756, X, 808, { strokeWidth: 2.6, head: 15 });
terminal(c, X, 830);

// false -> M=M+1 en terug naar connector
c.txt(330, 540, 'false', 28, C.GRAY, 600);
c.arrow(320, 560, 370, 560, { strokeWidth: 2.6, head: 15 });
proc(c, 460, 560, 180, 72, 'M=M+1');
c.line(460, 524, 460, 340, { strokeWidth: 2.6 });
c.arrow(460, 340, 213, 340, { strokeWidth: 2.6, head: 15 });

c.save('.', 'fullflow', 'NEW');
