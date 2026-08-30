// H7 - signatuur: de onderdelen van een methode-signatuur
// Draaien vanuit de imagegen-map:  node signatuur.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1520, 820);
const RD = C.RED_DARK;
const Y = 400;

// ---------- de signatuur zelf ----------
c.txt(120, Y, 'static', 54, C.GRAY, 700, 'start');
c.txt(310, Y, 'int', 54, C.GRAY, 700, 'start');
c.txt(430, Y, 'BerekenFaculteit', 54, C.GRAY, 700, 'start');
c.txt(810, Y, '(int grens)', 54, C.GRAY, 700, 'start');

// ---------- labels boven ----------
c.txt(188, 190, 'toverwoord, zie H11', 34, RD, 700);
c.line(188, 212, 188, 340, { stroke: C.RED, strokeWidth: 2 });

c.txt(611, 190, 'de naam kies je zelf', 34, RD, 700);
c.line(611, 212, 611, 340, { stroke: C.RED, strokeWidth: 2 });

// ---------- labels onder ----------
c.txt(344, 560, 'wat de methode teruggeeft', 34, RD, 700);
c.line(344, 528, 344, 424, { stroke: C.RED, strokeWidth: 2 });

c.txt(935, 560, 'formele parameter: type en naam', 34, RD, 700);
c.line(935, 528, 935, 424, { stroke: C.RED, strokeWidth: 2 });

// ---------- ballon rechts ----------
c.bubble(1270, 210, 360, 110, 'de methode-signatuur', 1080, 372, 34);

// ---------- de body ----------
c.txt(120, 665, '{', 44, C.GRAY, 500, 'start');
c.txt(180, 720, '//code van de methode', 36, C.GRAY, 400, 'start');
c.txt(120, 775, '}', 44, C.GRAY, 500, 'start');

c.save(__dirname, 'signatuur', '');
