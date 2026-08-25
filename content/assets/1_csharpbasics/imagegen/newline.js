// H2 - de entertoets splitst in twee bewegingen: \r (carriage return) en \n (line feed).
// Draaien vanuit de imagegen-map:  node newline.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1520, 660);

// ---------- de Enter-toets ----------
const keyX = 90, keyY = 250, keyW = 300, keyH = 175;
c.rect(keyX, keyY, keyW, keyH, { strokeWidth: 2.8, roughness: 1.3 });
c.txt(240, 325, 'Enter', 64, C.GRAY, 700);
// return-glyph ↵ onder het woord
c.line(310, 350, 310, 372, { strokeWidth: 2.6 });
c.arrow(310, 372, 195, 372, { strokeWidth: 2.6, head: 13 });
c.txt(240, 470, 'de entertoets', 34, C.RED_DARK, 700);

// ---------- vork naar de twee bewegingen ----------
c.carrow(395, 315, 560, 200, 690, 200, { stroke: C.RED, strokeWidth: 2.6, head: 15 });
c.carrow(395, 360, 560, 500, 690, 500, { stroke: C.RED, strokeWidth: 2.6, head: 15 });
c.txt(500, 355, 'twee bewegingen', 28, C.GRAY, 600);

// ---------- paneel \r : carriage return ----------
c.rect(700, 90, 760, 230, { fill: 'none', stroke: C.GRAY, strokeWidth: 1.6,
  roughness: 1.3, strokeLineDash: [10, 8] });
c.txt(760, 215, '\\r', 70, C.RED, 700);
c.line(880, 175, 1360, 175, { stroke: C.GRAY, strokeWidth: 1.4 });
c.txt(895, 168, 'een regel tekst', 30, C.GRAY, 500, 'start');
c.rect(1085, 142, 10, 32, { fill: C.RED, fillStyle: 'solid', stroke: C.RED, strokeWidth: 1.5, roughness: 0.8 });
c.carrow(1088, 182, 985, 240, 892, 196, { stroke: C.RED_DARK, strokeWidth: 2.4, head: 13 });
c.txt(1080, 292, 'carriage return: terug naar het begin van de regel', 28, C.GRAY, 500, 'middle');

// ---------- paneel \n : line feed ----------
c.rect(700, 380, 760, 230, { fill: 'none', stroke: C.GRAY, strokeWidth: 1.6,
  roughness: 1.3, strokeLineDash: [10, 8] });
c.txt(760, 505, '\\n', 70, C.RED, 700);
c.line(880, 452, 1230, 452, { stroke: C.GRAY, strokeWidth: 1.4 });
c.txt(895, 445, 'regel 1', 30, C.GRAY, 500, 'start');
c.line(880, 548, 1230, 548, { stroke: C.GRAY, strokeWidth: 1.4 });
c.txt(895, 541, 'regel 2', 30, C.GRAY, 500, 'start');
c.arrow(1080, 462, 1080, 532, { stroke: C.RED_DARK, strokeWidth: 2.4, head: 13 });
c.txt(1080, 590, 'line feed: naar de volgende regel', 28, C.GRAY, 500, 'middle');

c.save('.', 'newline', '');
