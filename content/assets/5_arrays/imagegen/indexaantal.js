// H8 arrays - "vanaf welke index en hoeveel elementen": hetzelfde idee bij Array.Clear
// en bij de overload van Array.Copy.
// Draaien vanuit de imagegen-map:  node indexaantal.js
const { createCanvas, C, cellRow } = require('./arr');

const c = createCanvas(1820, 1160);

const X = 300, CW = 230, CH = 105;
const mid = i => X + i * CW + CW / 2;
const idx = y => [0, 1, 2, 3, 4].forEach(i => c.txt(mid(i), y, String(i), 30, C.GRAY, 600));

// ================= Clear =================
c.txt(150, 85, 'Array.Clear(scores, 0, 2);', 46, C.RED_DARK, 700, 'start');

const A1 = 175, A2 = 390;
idx(A1 - 22);
c.txt(X - 25, A1 + CH / 2 + 13, 'scores', 38, C.GRAY, 700, 'end');
cellRow(c, X, A1, CW, CH, [12, 8, 20, 15, 3], { size: 38, weight: 700 });

[0, 1].forEach(i => c.arrow(mid(i), A1 + CH + 12, mid(i), A2 - 14, { stroke: C.RED, strokeWidth: 2.6, head: 14 }));

c.txt(X - 25, A2 + CH / 2 + 13, 'na Clear', 38, C.GRAY, 700, 'end');
c.cell(X, A2, CW, CH, '0', { size: 38 });
c.cell(X + CW, A2, CW, CH, '0', { size: 38 });
cellRow(c, X + 2 * CW, A2, CW, CH, [20, 15, 3], { size: 38, weight: 700 });

c.lines(1480, 310, ['vanaf index 0,', '2 elementen op de', 'standaardwaarde 0'], 34, C.GRAY, 600, 'start', 1.2);

// ================= scheiding =================
c.line(120, 585, 1780, 585, { strokeWidth: 3, strokeLineDash: [16, 13], roughness: 0.5, disableMultiStroke: true });

// ================= Copy =================
c.txt(150, 675, 'Array.Copy(myColors, 1, copyColors, 3, 2);', 46, C.RED_DARK, 700, 'start');

const B1 = 765, B2 = 975;
idx(B1 - 22);
c.txt(X - 25, B1 + CH / 2 + 13, 'myColors', 38, C.GRAY, 700, 'end');
cellRow(c, X, B1, CW, CH, ['yellow'], { size: 34, weight: 700 });
c.cell(X + CW, B1, CW, CH, 'red', { size: 34 });
c.cell(X + 2 * CW, B1, CW, CH, 'orange', { size: 34 });
cellRow(c, X + 3 * CW, B1, CW, CH, ['green', 'blue'], { size: 34, weight: 700 });

c.arrow(mid(1), B1 + CH + 12, mid(3), B2 - 14, { stroke: C.RED, strokeWidth: 2.6, head: 14 });
c.arrow(mid(2), B1 + CH + 12, mid(4), B2 - 14, { stroke: C.RED, strokeWidth: 2.6, head: 14 });

c.txt(X - 25, B2 + CH / 2 + 13, 'copyColors', 38, C.GRAY, 700, 'end');
cellRow(c, X, B2, CW, CH, ['', '', ''], { size: 34, weight: 700 });
c.cell(X + 3 * CW, B2, CW, CH, 'red', { size: 34 });
c.cell(X + 4 * CW, B2, CW, CH, 'orange', { size: 34 });
idx(B2 + CH + 45);

c.lines(1480, 900, ['2 elementen vanaf', 'index 1 komen op', 'index 3 terecht'], 34, C.GRAY, 600, 'start', 1.2);

c.save('.', 'indexaantal', '');
