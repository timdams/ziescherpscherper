// H7 - lokalefunctie: een lokale functie zit opgesloten in Main
// Draaien vanuit de imagegen-map:  node lokalefunctie.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1400, 700);
const RD = C.RED_DARK;

// ---------- Main ----------
c.rect(520, 80, 760, 560, { strokeWidth: 2.4, roughness: 1.3 });
c.txt(900, 145, 'Main', 44, C.GRAY, 700);
c.txt(580, 240, 'TimVindtDitNietLeuk();', 34, RD, 700, 'start');
c.carrow(660, 260, 620, 300, 660, 336, { strokeWidth: 2.2, head: 14, roughness: 1 });

// de lokale functie zelf
c.rect(600, 340, 620, 200, { strokeWidth: 2.2, roughness: 1.3 });
c.txt(910, 410, 'TimVindtDitNietLeuk', 36, C.GRAY, 700);
c.txt(910, 475, 'lokale functie', 32, RD, 700);

// ---------- een andere methode ----------
c.rect(80, 320, 380, 200, { strokeWidth: 2.2, roughness: 1.3 });
c.txt(270, 385, 'een andere methode', 34, C.GRAY, 700);
c.txt(270, 455, 'TimVindtDitNietLeuk();', 30, RD, 700);

c.arrow(470, 420, 495, 420, { stroke: C.RED, strokeWidth: 2.6, head: 15 });
c.line(492, 396, 532, 444, { stroke: C.RED, strokeWidth: 3.2 });
c.line(532, 396, 492, 444, { stroke: C.RED, strokeWidth: 3.2 });
c.txt(270, 590, 'kan er niet bij', 34, RD, 700);

c.save(__dirname, 'lokalefunctie', '');
