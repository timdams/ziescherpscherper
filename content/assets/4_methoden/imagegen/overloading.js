// H7 - overloading: drie versies met dezelfde naam, de compiler kiest op het type van de parameter
// Draaien vanuit de imagegen-map:  node overloading.js
const { createCanvas, C } = require('./excal');
const { codebox } = require('./mhelpers');

const c = createCanvas(1900, 1000);
const RD = C.RED_DARK;

// ---------- kolomlabels ----------
c.txt(250, 85, 'de aanroep', 36, RD, 700);
c.txt(1020, 85, 'dezelfde naam, andere parameterlijst', 36, RD, 700);
c.txt(1740, 85, 'op het scherm', 36, RD, 700);

const BOX_X = 700, BOX_W = 640, BOX_H = 178;

function rij(top, aanroep, type, regels, uitvoer) {
  const mid = top + BOX_H / 2;

  c.txt(250, mid + 16, aanroep, 46, C.GRAY, 700);

  c.arrow(430, mid, 685, mid, { stroke: C.RED, strokeWidth: 2.4, head: 15 });
  c.txt(557, mid - 22, type, 32, RD, 700);

  codebox(c, BOX_X, top, BOX_W, BOX_H, null, regels, { codeSize: 32, pad: 30 });

  c.arrow(BOX_X + BOX_W + 40, mid, 1600, mid, { strokeWidth: 2.4, head: 15 });
  c.rect(1620, mid - 52, 220, 104, { strokeWidth: 2.2, roughness: 1.3 });
  c.txt(1730, mid + 16, uitvoer, 44, C.GRAY, 700);
}

rij(170, 'Verdubbel(21)', 'int', [
  'static int Verdubbel(int getal)',
  '{',
  { t: 'return getal * 2;', indent: 34 },
  '}',
], '42');

rij(470, 'Verdubbel(2.5)', 'double', [
  'static double Verdubbel(double getal)',
  '{',
  { t: 'return getal * 2;', indent: 34 },
  '}',
], '5');

rij(770, 'Verdubbel("ha")', 'string', [
  'static string Verdubbel(string tekst)',
  '{',
  { t: 'return tekst + tekst;', indent: 34 },
  '}',
], 'haha');

c.save(__dirname, 'overloading', '');
