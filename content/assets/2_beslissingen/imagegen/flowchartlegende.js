// H4 - flowchartlegende: de drie vormen die in de flowcharts van dit hoofdstuk terugkomen
// Draaien vanuit de imagegen-map:  node flowchartlegende.js
const { createCanvas, C } = require('./excal');
const { terminal, proc, decision } = require('./flow');

const c = createCanvas(1150, 700);

const SX = 280;   // midden van de vormenkolom
const TX = 620;   // begin van de uitleg

// scheidingslijnen tussen de drie items
[180, 330].forEach(y => c.line(60, y, 1090, y,
  { stroke: C.GRAY, strokeWidth: 1.5, roughness: 1.1, strokeLineDash: [12, 12] }));

// ---------- 1. start / einde ----------
terminal(c, SX, 95, 68);
c.txt(TX, 107, 'start of einde van het programma', 34, C.GRAY, 600, 'start');

// ---------- 2. opdracht ----------
proc(c, SX, 255, 340, 88, 'Vraag een brood', 30);
c.txt(TX, 267, 'een opdracht die uitgevoerd wordt', 34, C.GRAY, 600, 'start');

// ---------- 3. test ----------
c.arrow(SX, 365, SX, 413, { strokeWidth: 2.6, head: 15 });
decision(c, SX, 505, 360, 170, 'Bakker toe ?', 30);

// true gaat naar beneden, false naar rechts (zoals in de flowcharts verderop)
c.arrow(SX, 592, SX, 645, { strokeWidth: 2.6, head: 15 });
c.txt(SX - 22, 632, 'true', 28, C.GRAY, 600, 'end');
c.arrow(465, 505, 560, 505, { strokeWidth: 2.6, head: 15 });
c.txt(508, 478, 'false', 28, C.GRAY, 600);

c.lines(TX, 490, ['een test met twee uitgangen',
                  'welke pijl je volgt hangt af van de test'], 34, C.GRAY, 600, 'start', 1.25);

c.save('.', 'flowchartlegende', '');
