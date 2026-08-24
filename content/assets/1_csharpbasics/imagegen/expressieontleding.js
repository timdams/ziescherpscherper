// H2 - een volledig statement ontleed: operanden, operator, en het resultaat
// dat van rechts naar links in de variabele terechtkomt.
const { createCanvas, C } = require('./excal');
const { tokens, ring } = require('./ehelpers');
const c = createCanvas(1540, 1010);

// ---------- ballonnen boven de expressie ----------
const bTop = 120, bH = 125, tgtY = 385;
c.bubble(560, bTop, 300, bH, ['operand'], 790, tgtY, 40);
c.bubble(880, bTop, 300, bH, ['operator'], 880, tgtY, 40);
c.bubble(1200, bTop, 300, bH, ['operand'], 970, tgtY, 40);

// ---------- het statement ----------
tokens(c, 460, [['int', 205], ['resultaat', 480], ['=', 700],
                ['3', 790], ['+', 880], ['2', 970], [';', 1022]], 84);
ring(c, 480, 435, 356, 128);

// ---------- accolade onder de expressie ----------
c.path('M 762 505 Q 762 528 785 528 L 855 528 Q 880 528 880 550 Q 880 528 905 528 L 975 528 Q 998 528 998 505',
  { stroke: C.RED, strokeWidth: 2.4, roughness: 1.4 });

// het resultaat van de expressie
c.cell(795, 585, 170, 115, '5', { size: 72 });
c.lines(1030, 528, ['twee operanden:', 'een binaire operator'], 36, C.RED_DARK, 700, 'start', 1.2);
c.txt(1000, 655, 'een int', 34, C.RED_DARK, 700, 'start');

// en dat resultaat gaat van rechts naar links de variabele in
c.carrow(788, 645, 570, 740, 480, 522, { stroke: C.RED, strokeWidth: 2.8, roughness: 1.3, head: 18 });
c.txt(600, 775, 'het resultaat gaat naar de variabele', 38, C.RED_DARK, 700);

// ---------- unaire operator ----------
c.line(120, 840, 1420, 840, { stroke: C.GRAY, strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });

tokens(c, 950, [['-', 560, { color: C.RED_DARK }], ['6', 635]], 84);
ring(c, 560, 925, 86, 100);
c.lines(730, 912, ['één operand:', 'een unaire operator'], 38, C.RED_DARK, 700, 'start', 1.2);

c.save('.', 'expressieontleding', '');
