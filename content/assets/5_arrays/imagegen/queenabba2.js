const { base, vslot, C } = require('./_sh');
const c = base(1900);
vslot(c, 140, 470, 420, 180, '0x6721');
c.bubble(350, 300, 300, 140, 'a', 350, 468, 46);
c.box3d(1080, 330, 420, 230, 'Abba', { depth: 42, size: 44 });
// b verwijst nu OOK naar Abba (zelfde adres)
vslot(c, 140, 930, 420, 180, '0x6721');
c.bubble(350, 760, 300, 140, 'b', 350, 928, 46);
c.box3d(1080, 820, 420, 230, 'Queen', { depth: 42, size: 44 });
// a en b voegen samen tot een verticale bus, dan een finale pijl naar Abba
c.line(560, 560, 720, 560, { strokeWidth: 2.6 });
c.line(560, 1020, 720, 1020, { strokeWidth: 2.6 });
c.line(720, 1020, 720, 472, { strokeWidth: 2.6 });
c.arrow(720, 472, 1072, 472, { strokeWidth: 2.6, head: 16 });
c.save('.', 'queenabba2', 'NEW');
