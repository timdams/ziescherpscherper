// H5 - de ternaire operator ontleed: de test, de waarde bij true en de waarde
// bij false, en welke van de twee in de variabele belandt.
// Draaien vanuit de imagegen-map:  node ternairontleed.js
const { createCanvas, C } = require('./excal');
const { tokens } = require('./ehelpers');

const c = createCanvas(1450, 750);

const Y = 340;   // basislijn van de codelijn

// ---------- de codelijn ----------
tokens(c, Y, [
  ['string boodschap =', 304],
  ['leeftijd >= 18', 655],
  ['?', 840, { color: C.RED, size: 54 }],
  ['"Welkom"', 967],
  [':', 1093, { color: C.RED, size: 54 }],
  ['"Te jong"', 1231],
  [';', 1330],
], 46, C.GRAY, 700);

// ---------- wat elk stuk is ----------
c.bubble(655, 90, 250, 110, ['de booleaanse', 'test'], 655, 283, 30);
c.bubble(967, 90, 180, 110, ['waarde', 'bij true'], 967, 283, 30);
c.bubble(1231, 90, 190, 110, ['waarde', 'bij false'], 1231, 283, 30);

// ---------- drie operanden ----------
c.path('M 520 398 Q 919 438 1318 398', { stroke: C.RED, strokeWidth: 2.6, roughness: 1.4 });
c.txt(919, 486, 'drie operanden, vandaar de naam ternair', 32, C.RED_DARK, 700);

// ---------- wat er uiteindelijk in boodschap zit ----------
c.line(120, 530, 1330, 530, { strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });
c.txt(120, 580, 'boodschap krijgt:', 32, C.RED_DARK, 700, 'start');

c.txt(300, 662, 'leeftijd = 20', 34, C.GRAY, 700);
c.arrow(420, 650, 500, 650, { stroke: C.RED, strokeWidth: 2.4, head: 14 });
c.cell(530, 605, 250, 90, '"Welkom"', { size: 34 });

c.txt(920, 662, 'leeftijd = 12', 34, C.GRAY, 700);
c.arrow(1040, 650, 1120, 650, { stroke: C.RED, strokeWidth: 2.4, head: 14 });
c.cell(1150, 605, 250, 90, '"Te jong"', { size: 34 });

c.save('.', 'ternairontleed', '');
