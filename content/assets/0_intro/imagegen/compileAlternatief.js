// H1 - compileAlternatief: van broncode naar werkend programma
const { createCanvas, C } = require('./excal');
const c = createCanvas(1700, 620);

// 1. broncode (papier met code)
function paper(x, y, w, h) {
  c.rect(x, y, w, h, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.2 });
}
paper(70, 130, 360, 320);
c.txt(250, 180, 'Program.cs', 34, C.GRAY, 700);
c.line(110, 200, 390, 200, { strokeWidth: 1.6, roughness: 1.5 });
c.txt(105, 345, 'Console.WriteLine("Hallo!");', 26, C.GRAY, 600, 'start');
c.txt(250, 500, 'jij schrijft dit', 30, C.GRAY, 500);

// 2. compiler (machine)
function gear(cx, cy, r) {
  c.circle(cx, cy, r * 2, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 2.6 });
  for (let a = 0; a < 8; a++) {
    const ang = a * Math.PI / 4;
    c.line(cx + Math.cos(ang) * r, cy + Math.sin(ang) * r, cx + Math.cos(ang) * (r + 22), cy + Math.sin(ang) * (r + 22), { strokeWidth: 3.2, roughness: 1 });
  }
  c.circle(cx, cy, r * 0.7, { fill: C.OFFWHITE, stroke: C.RED_DARK, strokeWidth: 2 });
}
gear(720, 290, 70);
c.txt(720, 480, 'C#-compiler', 36, C.RED_DARK, 700);
c.txt(720, 520, 'vertaalt je code', 28, C.GRAY, 500);

// 3. programma (.exe)
c.rect(900, 160, 320, 260, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.2 });
c.txt(1060, 240, 'app.exe', 40, C.GRAY, 700);
c.txt(1060, 310, '0100 1011', 32, C.GRAY, 500);
c.txt(1060, 480, 'machinetaal', 30, C.GRAY, 500);

// 4. uitvoer (console)
c.rect(1320, 170, 320, 240, { fill: '#1e1e1e', fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.1 });
c.rect(1320, 170, 320, 44, { fill: C.GRAY, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 1 });
c.txt(1480, 202, 'console', 26, C.WHITE, 700);
c.txt(1345, 310, '> Hallo!', 34, '#7CFC7C', 700, 'start');
c.txt(1480, 480, 'wat de gebruiker ziet', 28, C.GRAY, 500);

// pijlen (gewone flow)
c.arrow(440, 290, 630, 290, { strokeWidth: 2.8, head: 18 });
c.arrow(810, 290, 895, 290, { strokeWidth: 2.8, head: 18 });
c.arrow(1230, 290, 1315, 290, { strokeWidth: 2.8, head: 18 });
c.txt(850, 236, 'indien', 24, C.GRAY, 600);
c.txt(850, 264, 'foutloos', 24, C.GRAY, 600);

// foutpijl: compiler stuurt je terug naar de code
c.carrow(695, 368, 530, 580, 435, 425, { strokeWidth: 2.6, head: 16, stroke: C.RED_DARK, roughness: 1.4 });
c.txt(548, 558, 'indien fout (compiler error)', 26, C.RED_DARK, 600);

c.save(__dirname, 'compileNEW', '');
