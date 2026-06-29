const { base, vslot, C } = require('./_sh');
const { cellRow } = require('./arr');
const c = base(1820);
vslot(c, 140, 470, 420, 180, '0x6721');
c.bubble(350, 300, 320, 140, 'nummers', 350, 468, 44);
vslot(c, 140, 930, 420, 180, '0x6721');
c.bubble(350, 760, 420, 140, 'andereNummers', 350, 928, 42);
// array-object met paarse cellen
c.box3d(1080, 500, 540, 270, '', { depth: 42 });
cellRow(c, 1120, 570, 150, 140, [999, 5, 10], { fill: '#e3d4ea', stroke: '#9b7bb0', size: 44, weight: 700 });
c.line(560, 560, 720, 560, { strokeWidth: 2.6 });
c.line(560, 1020, 720, 1020, { strokeWidth: 2.6 });
c.line(720, 560, 720, 640, { strokeWidth: 2.6 });
c.line(720, 1020, 720, 640, { strokeWidth: 2.6 });
c.arrow(720, 640, 1072, 640, { strokeWidth: 2.6, head: 16 });
c.save('.', 'refarr2', 'NEW');
