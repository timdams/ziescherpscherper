// H1 - lokale variabele moet je zelf initialiseren, instantievariabelen krijgen een standaardwaarde
const { createCanvas, C } = require('./excal');
const { slot } = require('./vhelpers');
const c = createCanvas(1700, 650);

c.line(575, 50, 575, 600, { stroke: C.GRAY, strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });

// ================= links: lokale variabele =================
c.txt(300, 110, 'lokale variabele', 40, C.RED_DARK, 700);
slot(c, 175, 165, 250, 180, 'getal', '?', { nameSize: 30, valueSize: 70 });
c.txt(300, 410, 'jij moet zelf een waarde geven', 32, C.GRAY, 600);
c.rect(85, 455, 430, 110, { fill: C.WHITE, fillStyle: 'solid', stroke: C.RED, strokeWidth: 2.6, roughness: 1.4 });
c.lines(300, 500, ['use of unassigned', 'local variable'], 34, C.RED_DARK, 700, 'middle', 1.15);

// ================= rechts: instantievariabele =================
// kader rond het hele rechtse deel: dit komt pas veel later aan bod
c.rect(608, 58, 1044, 382, { fill: 'none', stroke: C.RED, strokeWidth: 2.6, roughness: 1.3, strokeLineDash: [16, 11] });
c.txt(1130, 500, 'deze komen pas in hoofdstuk 9 aan bod', 34, C.RED_DARK, 700);

c.txt(1130, 110, 'instantievariabele', 40, C.RED_DARK, 700);
c.txt(1130, 168, 'krijgt automatisch een beginwaarde', 32, C.GRAY, 600);

const bs = String.fromCharCode(92); // backslash voor de char-literal
const types = [['int', '0'], ['double', '0.0'], ['bool', 'false'], ['char', "'" + bs + "0'", 54]];
const w = 180, h = 180, gap = 24, x0 = 632, y = 220;
types.forEach(([t, v, vs], i) => {
  slot(c, x0 + i * (w + gap), y, w, h, t, v, { nameSize: 30, valueSize: vs || 40 });
});

// string: de literal "" leest niet, dus zetten we het in woorden
const sx = x0 + 4 * (w + gap);
slot(c, sx, y, w, h, 'string', '', { nameSize: 30 });
c.lines(sx + w / 2, 338, ['lege', 'string'], 38, C.GRAY, 700, 'middle', 1.05);

c.save('.', 'beginwaarden', 'NEW');
