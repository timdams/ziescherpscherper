const { base, vslot, C } = require('./_sh');
const c = base(1820);
vslot(c, 140, 470, 420, 180, '0x6721');
c.bubble(350, 300, 320, 140, 'nummers', 350, 468, 44);
vslot(c, 140, 930, 420, 180, '0x6721');
c.bubble(350, 760, 420, 140, 'andereNummers', 350, 928, 42);
c.box3d(1080, 520, 440, 240, '4,5,10', { depth: 42, size: 46 });
// beide referenties naar dezelfde array (lijnen voegen samen)
c.line(560, 560, 720, 560, { strokeWidth: 2.6 });
c.line(560, 1020, 720, 1020, { strokeWidth: 2.6 });
c.line(720, 560, 720, 640, { strokeWidth: 2.6 });
c.line(720, 1020, 720, 640, { strokeWidth: 2.6 });
c.arrow(720, 640, 1072, 640, { strokeWidth: 2.6, head: 16 });
c.save('.', 'refarr', 'NEW');
