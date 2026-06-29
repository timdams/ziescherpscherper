// H3 - castingnum: onderlinge casting tussen numerieke datatypes
const { createCanvas, C } = require('./excal');
const { drawCasting } = require('./casting');
const c = createCanvas(940, 620);

drawCasting(c, 470, 320, 430, 270, 1);

// notitie rechtsboven (uit het origineel)
c.txt(910, 44, 'Alle numerieke datatypes:', 28, C.GRAY, 500, 'end');
c.txt(910, 78, 'onderlinge casting mogelijk.', 28, C.GRAY, 500, 'end');

c.save('.', 'castingnum', 'NEW');
