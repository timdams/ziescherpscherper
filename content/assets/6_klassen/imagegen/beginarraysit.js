// beginarraysit -> introNEW: lege array van Student-referenties (alles null)
const { createCanvas, C } = require('./excal');
const c = createCanvas(1500, 620);

// kolomtitels + scheidingslijn
c.txt(280, 80, 'STACK', 46, C.GRAY, 700);
c.txt(1080, 80, 'HEAP', 46, C.GRAY, 700);
c.line(660, 30, 660, 590, { strokeLineDash: [12, 12], roughness: 1.2, strokeWidth: 2 });

// stack: mijnKlas -> 0x8974
c.bubble(230, 150, 250, 110, 'mijnKlas', 200, 400, 40);
c.cell(70, 400, 300, 150, '0x8974', { size: 46 });

// pijl stack -> heap
c.arrow(370, 475, 820, 475, { strokeWidth: 2.4 });

// heap: array met twee null-cellen
c.bubble(950, 140, 320, 130, ['start bij', 'adres 0x8974'], 950, 400, 38);
c.cell(830, 400, 250, 150, 'null', { size: 44 });
c.cell(1080, 400, 250, 150, 'null', { size: 44 });
c.txt(1350, 490, '... 20 stuks', 38, C.GRAY, 600, 'start');

c.save(__dirname, 'beginarraysit');
