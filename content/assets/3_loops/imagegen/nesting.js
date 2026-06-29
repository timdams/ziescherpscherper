// H5 - nesting: geneste while-loops (outer + inner)
const { createCanvas, C } = require('./excal');
const { terminal, connector, decision, proc } = require('./flow');
const c = createCanvas(1320, 1090);

const X = 250;            // outer spine
const IX = 760;           // inner spine
const Rx = 1250;          // outer terugkoppel-kolom

// --- container voor de outer-loop body (eerst tekenen) ---
c.rect(470, 440, 720, 540, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 2.4, roughness: 1.2 });
c.txt(700, 425, 'while code outer loop', 30, C.RED_DARK, 700);

// --- outer start + merge ---
terminal(c, X, 40);
c.line(X, 60, X, 120, { strokeWidth: 2.6 });
c.arrow(X, 120, X, 198, { strokeWidth: 2.6, head: 15 });

decision(c, X, 300, 300, 200, ['conditie', 'outer loop'], 30);

// outer false -> omlaag naar einde
c.arrow(X, 400, X, 990, { strokeWidth: 2.6, head: 15 });
c.txt(240, 548, 'Conditie outer loop', 28, C.GRAY, 600, 'end');
c.txt(240, 582, 'is false', 28, C.GRAY, 600, 'end');
terminal(c, X, 1013);

// outer true -> container in
c.line(400, 300, IX, 300, { strokeWidth: 2.6 });
c.txt(585, 280, 'conditie outer loop is true', 28, C.GRAY, 600);
c.line(IX, 300, IX, 457, { strokeWidth: 2.6 });

// --- inner loop ---
connector(c, IX, 470);
c.arrow(IX, 483, IX, 578, { strokeWidth: 2.6, head: 15 });
decision(c, IX, 680, 300, 200, ['conditie', 'inner loop'], 30);

// inner true -> inner code en terug naar inner connector
c.line(910, 680, 1050, 680, { strokeWidth: 2.6 });
c.txt(1015, 712, 'Conditie inner loop is true', 28, C.GRAY, 600, 'middle');
c.line(1050, 680, 1050, 648, { strokeWidth: 2.6 });
proc(c, 1050, 600, 250, 92, 'while code inner loop', 26);
c.line(1050, 554, 1050, 505, { strokeWidth: 2.6 });
c.arrow(1050, 505, 773, 505, { strokeWidth: 2.6, head: 15 });

// inner false -> onderaan container, terug naar outer top
c.arrow(IX, 780, IX, 915, { strokeWidth: 2.6, head: 15 });
c.txt(498, 858, 'Conditie inner loop is false', 28, C.GRAY, 600, 'start');
connector(c, IX, 935);
c.line(IX, 948, IX, 1010, { strokeWidth: 2.6 });
c.line(IX, 1010, Rx, 1010, { strokeWidth: 2.6 });
c.line(Rx, 1010, Rx, 120, { strokeWidth: 2.6 });
c.arrow(Rx, 120, X + 16, 120, { strokeWidth: 2.6, head: 15 });

c.save('.', 'nesting', 'NEW');
