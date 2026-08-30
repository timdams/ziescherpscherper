// H7 - paden: niet elk pad door de methode geeft iets terug
// Draaien vanuit de imagegen-map:  node paden.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1500, 730);
const RD = C.RED_DARK;

// ---------- de methode ----------
c.rect(120, 120, 1000, 440, { strokeWidth: 2.4, roughness: 1.3 });
c.txt(620, 190, 'static string Beoordeel(int punten)', 34, C.GRAY, 700);

// de beslissing
c.poly([[420, 250], [570, 330], [420, 410], [270, 330]], { strokeWidth: 2.2, roughness: 1.3 });
c.txt(420, 342, 'punten >= 10?', 30, C.GRAY, 600);

// ja-pad
c.arrow(575, 330, 715, 330, { strokeWidth: 2.4, head: 15 });
c.txt(645, 302, 'ja', 32, C.GRAY, 700);
c.rect(730, 275, 340, 110, { strokeWidth: 2.2, roughness: 1.3 });
c.txt(900, 342, 'return "geslaagd";', 30, C.GRAY, 600);
c.arrow(1075, 330, 1180, 330, { strokeWidth: 2.4, head: 15 });
c.txt(1200, 340, 'terug naar de', 30, C.GRAY, 700, 'start');
c.txt(1200, 378, 'aanroeper', 30, C.GRAY, 700, 'start');

// nee-pad
c.line(420, 412, 420, 500, { strokeWidth: 2.4 });
c.txt(462, 465, 'nee', 32, C.GRAY, 700, 'start');
c.arrow(420, 500, 420, 680, { stroke: C.RED, strokeWidth: 2.6, head: 18 });
c.txt(470, 625, 'hier komt niets terug', 34, RD, 700, 'start');
c.txt(470, 682, 'Not all code paths return a value', 34, RD, 700, 'start');

c.save(__dirname, 'paden', '');
