// H7 arrays - een array meegeven aan een methode (by reference) versus een los int-element (by value)
// Draaien vanuit de imagegen-map:  node byrefmethode.js
const { createCanvas, C, memframe, cellRow } = require('./arr');

const c = createCanvas(2560, 1170);

function varbox(x, y, w, h, val) {
  c.rect(x, y, w, h, { fill: '#e2e2e2', fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.1 });
  c.txt(x + w / 2, y + h / 2 + 14, val, 42, C.GRAY, 700);
}

// scheiding tussen de twee situaties
c.line(1280, 70, 1280, 1110, { strokeWidth: 3, strokeLineDash: [16, 13], roughness: 0.5, disableMultiStroke: true });

// ---------- links: de array zelf meegeven (by reference) ----------
c.txt(650, 92, 'PasAan(verdiepnummers);', 48, C.RED_DARK, 700);

memframe(c, 70, 140, 580, 350, 'Main');
c.bubble(360, 215, 400, 95, 'verdiepnummers', 360, 330, 38);
varbox(190, 330, 340, 120, '0x12478');

memframe(c, 70, 620, 580, 350, 'PasAan(int[] inarr)');
c.bubble(360, 695, 300, 95, 'inarr', 360, 810, 38);
varbox(190, 810, 340, 120, '0x12478');

// de ene array waar beide adressen naar wijzen
c.cell(810, 545, 130, 130, '0', { size: 48 });
cellRow(c, 940, 545, 130, 130, [2, 3], { size: 48, weight: 700 });
c.txt(875, 480, 'inarr[0] = 0', 38, C.RED_DARK, 700);
c.arrow(875, 495, 875, 535, { stroke: C.RED, strokeWidth: 2.4, head: 13 });
c.txt(875, 730, 'was 1', 34, C.GRAY, 600);

c.arrow(535, 390, 790, 560, { strokeWidth: 2.6, head: 16 });
c.arrow(535, 830, 790, 660, { strokeWidth: 2.6, head: 16 });

c.lines(650, 1040, ['beide verwijzen naar dezelfde array,', 'de wijziging werkt door'], 40, C.GRAY, 600, 'middle', 1.15);

// ---------- rechts: een element meegeven (by value) ----------
c.txt(1910, 92, 'PasAan(getallen[0]);', 48, C.RED_DARK, 700);

memframe(c, 1330, 140, 580, 350, 'Main');
c.bubble(1620, 215, 320, 95, 'getallen', 1620, 330, 38);
varbox(1450, 330, 340, 120, '0x33B10');

memframe(c, 1330, 620, 580, 350, 'PasAan(int inGetal)');
c.bubble(1620, 695, 260, 95, 'inGetal', 1620, 810, 38);
c.cell(1520, 810, 200, 120, '0', { size: 48 });

cellRow(c, 2070, 545, 130, 130, [1, 2, 3], { size: 48, weight: 700 });
c.arrow(1795, 390, 2050, 560, { strokeWidth: 2.6, head: 16 });

c.arrow(2065, 640, 1745, 845, { stroke: C.RED, strokeWidth: 2.6, head: 16 });
c.txt(2030, 760, 'kopie van de waarde', 34, C.RED_DARK, 700, 'start');

c.lines(1910, 1040, ['de methode krijgt een kopie,', 'de array blijft ongewijzigd'], 40, C.GRAY, 600, 'middle', 1.15);

c.save('.', 'byrefmethode', '');
