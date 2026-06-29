// H3 - readline: invoer inlezen en converteren naar het juiste type
const { createCanvas, C } = require('./excal');
const { keyboard } = require('./iconen');
const c = createCanvas(1500, 440);

const cy = 230;

// toetsenbord (links)
keyboard(c, 45, cy - 60);

// C# applicatie container
const Cx = 620, Cy = 50, Cw = 840, Ch = 360;
c.rect(Cx, Cy, Cw, Ch, { fill: C.OFFWHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.6, roughness: 1.2 });
c.txt(Cx + Cw / 2, Cy + 50, 'C# applicatie', 38, C.GRAY, 600);

// stap 1: conversie
c.rect(660, 160, 300, 150, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.2, roughness: 1.3 });
c.lines(810, 222, ['Conversie van String', 'naar type x'], 32, C.GRAY, 600, 'middle', 1.1);

// pijl tussen de twee stappen
c.arrow(970, 235, 1090, 235, { strokeWidth: 2.6, head: 16 });

// stap 2: bewaren
c.rect(1105, 160, 320, 150, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.2, roughness: 1.3 });
c.lines(1265, 222, ['Input bewaren in', 'variabele van type x'], 32, C.GRAY, 600, 'middle', 1.1);

// pijl in (als laatste, zodat ze bovenop de container-vulling ligt en tot in de box loopt)
c.arrow(285, cy, 645, cy, { strokeWidth: 3, head: 20 });
c.txt(440, cy - 100, 'IN', 56, C.RED, 700);
c.txt(440, cy + 70, 'Console.ReadLine()', 34, C.GRAY, 600);

c.save('.', 'readline', 'NEW');
