// H20 - try/catch/finally: finally wordt altijd uitgevoerd
const { createCanvas, C } = require('./excal');
const { terminal, proc, decision } = require('./flow');
const c = createCanvas(900, 980);
const X = 320;
terminal(c, X, 45);
c.arrow(X, 66, X, 118, { strokeWidth: 2.6, head: 15 });
proc(c, X, 185, 400, 110, ['try-blok', '(riskante code)']);
c.arrow(X, 240, X, 300, { strokeWidth: 2.6, head: 15 });
decision(c, X, 410, 360, 190, ['exception', 'opgetreden?']);
// nee -> rechtstreeks naar finally
c.arrow(X, 505, X, 690, { strokeWidth: 2.6, head: 15 });
c.txt(285, 590, 'nee', 30, C.GRAY, 600, 'end');
// ja -> catch -> finally
c.line(500, 410, 650, 410, { strokeWidth: 2.6 });
c.txt(575, 388, 'ja', 30, C.GRAY, 600);
c.line(650, 410, 650, 460, { strokeWidth: 2.6 });
proc(c, 650, 520, 300, 120, ['catch-blok', '(verwerk fout)']);
c.line(650, 580, 650, 700, { strokeWidth: 2.6 });
c.arrow(650, 700, 530, 700, { strokeWidth: 2.6, head: 15 });
// finally
proc(c, X, 745, 440, 110, ['finally-blok', '(altijd uitgevoerd)']);
c.arrow(X, 800, X, 858, { strokeWidth: 2.6, head: 15 });
terminal(c, X, 905);
c.save(__dirname, 'exceptionflow', 'NEW');
