const { createCanvas, C } = require('./excal');
const { file } = require('./_icons');
const c = createCanvas(1580, 700);
c.rect(80, 230, 380, 240, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.6, roughness: 1.1 });
c.txt(270, 360, 'C# programma', 42, C.GRAY, 700);
file(c, 1200, 220, 300, 260, 'doeeeeeem.txt', null, 46);
// schrijven: programma -> bestand
c.arrow(470, 300, 1190, 300, { strokeWidth: 3.2, head: 22 });
c.txt(830, 262, 'StreamWriter.WriteLine()', 34, C.GRAY, 600);
// lezen: bestand -> programma
c.arrow(1190, 410, 470, 410, { strokeWidth: 3.2, head: 22 });
c.txt(830, 452, 'StreamReader.ReadLine()', 34, C.GRAY, 600);
c.txt(830, 540, 'een stream verbindt je programma met het bestand', 30, C.RED_DARK, 600);
c.save(__dirname, 'streamdiagram', 'NEW');
