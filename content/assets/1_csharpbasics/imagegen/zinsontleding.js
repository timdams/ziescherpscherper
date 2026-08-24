// H1 - statement ontleed als een zin: keyword/datatype, identifier, waarde, puntkomma
const { createCanvas, C } = require('./excal');
const c = createCanvas(1620, 800);

// ---------- Nederlandse zin ----------
const zinY = 118;
c.txt(300, zinY, 'Tim eet een appel', 60, C.GRAY, 600, 'start');
c.txt(692, zinY, '.', 60, C.RED_DARK, 700, 'start');
c.ellipse(702, zinY - 12, 58, 58, { fill: 'none', stroke: C.RED, strokeWidth: 2.6, roughness: 1.8 });
c.arrow(822, zinY - 16, 748, zinY - 14, { stroke: C.RED, strokeWidth: 2.2, head: 14 });
c.txt(842, zinY - 6, 'een zin eindigt met een punt', 34, C.RED_DARK, 700, 'start');

// ---------- ballonnen boven het statement ----------
const bTop = 250, bH = 122, tgtY = 500;
c.bubble(352, bTop, 300, bH, ['datatype', '(een keyword)'], 352, tgtY, 34);
c.bubble(690, bTop, 300, bH, ['identifier', '(die naam kies jij)'], 707, tgtY, 34);
c.bubble(1010, bTop, 290, bH, ['de waarde', 'die erin gaat'], 1048, tgtY, 34);

// ---------- het C#-statement ----------
const codeY = 560;
c.txt(300, codeY, 'int', 84, C.GRAY, 700, 'start');
c.txt(620, codeY, 'getal', 84, C.GRAY, 700, 'start');
c.txt(940, codeY, '=', 84, C.GRAY, 700, 'start');
c.txt(1030, codeY, '3', 84, C.GRAY, 700, 'start');
c.txt(1130, codeY, ';', 84, C.RED_DARK, 700, 'start');
c.ellipse(1145, codeY - 14, 64, 78, { fill: 'none', stroke: C.RED, strokeWidth: 2.6, roughness: 1.8 });
c.arrow(1250, codeY - 40, 1188, codeY - 26, { stroke: C.RED, strokeWidth: 2.2, head: 14 });
c.lines(1270, codeY - 30, ['een statement eindigt', 'met een puntkomma'], 34, C.RED_DARK, 700, 'start', 1.15);

// ---------- accolade onder het statement ----------
c.path('M 300 630 Q 300 655 330 655 L 700 655 Q 730 655 730 680 Q 730 655 760 655 L 1140 655 Q 1170 655 1170 630',
  { stroke: C.RED, strokeWidth: 2.4, roughness: 1.4 });
c.txt(730, 720, 'één statement', 40, C.RED_DARK, 700);

c.save('.', 'zinsontleding', 'NEW');
