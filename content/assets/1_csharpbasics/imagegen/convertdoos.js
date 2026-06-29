// H3 - convertdoos: Convert.ToX() als doos tussen twee primitieve datatypes
const { createCanvas, C } = require('./excal');
const c = createCanvas(1320, 420);

const cy = 215;
// links: invoer
c.lines(190, cy - 22, ['Eender welk', 'primitief datatype'], 38, C.GRAY, 600, 'middle', 1.05);
// pijl in
c.arrow(360, cy, 545, cy, { strokeWidth: 2.8, head: 18 });
// 3D-doos met Convert.ToX()
c.box3d(560, cy - 55, 320, 130, 'Convert.ToX()', { depth: 28, size: 34 });
// pijl uit
c.arrow(910, cy, 1095, cy, { strokeWidth: 2.8, head: 18 });
// rechts: uitvoer
c.lines(1200, cy - 22, ['Eender welk', 'primitief datatype'], 38, C.GRAY, 600, 'middle', 1.05);

c.save('.', 'convertdoos', 'NEW');
