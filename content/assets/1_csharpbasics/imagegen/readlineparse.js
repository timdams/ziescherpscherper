// H3 - readlineparse: wat de gebruiker typt komt als string binnen,
// double.Parse maakt er een double van. Concrete variant van readline.js.
// Draaien vanuit de imagegen-map:  node readlineparse.js
const { createCanvas, C } = require('./excal');
const { keyboard } = require('./iconen');
const c = createCanvas(1500, 470);

const cy = 230;

// toetsenbord (links) + wat de gebruiker typt
keyboard(c, 45, cy - 60);
c.txtSegs(150, cy + 125, [
  { t: 'gebruiker typt ', color: C.GRAY, weight: 400 },
  { t: '72,5', color: C.RED_DARK, weight: 700 },
], 30, 'middle');

// C# applicatie container
const Cx = 620, Cy = 50, Cw = 840, Ch = 380;
c.rect(Cx, Cy, Cw, Ch, { fill: C.OFFWHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.6, roughness: 1.2 });
c.txt(Cx + Cw / 2, Cy + 50, 'C# applicatie', 38, C.GRAY, 600);

// box 1: de string
const B1 = 650, B2 = 1180, BW = 260, BY = 160, BH = 150;
c.rect(B1, BY, BW, BH, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.2, roughness: 1.3 });
c.txt(B1 + BW / 2, BY + BH / 2 + 17, '"72,5"', 50, C.RED_DARK, 700);
c.txt(B1 + BW / 2, BY + BH + 44, 'string', 34, C.RED_DARK, 700);

// pijl met double.Parse
c.arrow(B1 + BW + 20, cy + 5, B2 - 15, cy + 5, { strokeWidth: 2.6, head: 16 });
c.txt((B1 + BW + B2) / 2, cy - 22, 'double.Parse()', 30, C.GRAY, 600);

// box 2: de double
c.rect(B2, BY, BW, BH, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.2, roughness: 1.3 });
c.txt(B2 + BW / 2, BY + BH / 2 + 17, '72,5', 50, C.GRAY, 700);
c.txt(B2 + BW / 2, BY + BH + 44, 'double', 34, C.RED_DARK, 700);

// pijl in (als laatste, zodat ze bovenop de container-vulling ligt)
c.arrow(285, cy, B1 - 15, cy, { strokeWidth: 3, head: 20 });
c.txt(440, cy - 100, 'IN', 56, C.RED, 700);
c.txt(440, cy + 70, 'Console.ReadLine()', 34, C.GRAY, 600);

c.save('.', 'readlineparse', '');
