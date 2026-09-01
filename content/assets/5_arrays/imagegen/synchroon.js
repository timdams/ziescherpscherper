// H8 arrays - twee synchrone arrays: de prijs staat op dezelfde index als het product,
// en wat er misloopt zodra je er maar een van sorteert.
// Draaien vanuit de imagegen-map:  node synchroon.js
const { createCanvas, C, cellRow } = require('./arr');

const c = createCanvas(2200, 780);

const CW = 230, CH = 105;
const Y1 = 200, Y2 = 350;

function paneel(x0, kop, producten, prijzen) {
  c.txt(x0 + 345, 95, kop, 44, C.RED_DARK, 700);
  // indexnummers boven de bovenste rij
  [0, 1, 2].forEach(i => c.txt(x0 + i * CW + CW / 2, 172, String(i), 32, C.GRAY, 600));
  c.txt(x0 - 20, Y1 + CH / 2 + 13, 'producten', 38, C.GRAY, 700, 'end');
  c.txt(x0 - 20, Y2 + CH / 2 + 13, 'prijzen', 38, C.GRAY, 700, 'end');
  cellRow(c, x0, Y1, CW, CH, producten, { size: 34, weight: 700 });
  cellRow(c, x0, Y2, CW, CH, prijzen, { size: 34, weight: 700 });
}

// kolom index k in beide rijen omkaderen
function kolom(x0, k, kleur) {
  c.rect(x0 + k * CW - 12, Y1 - 12, CW + 24, Y2 + CH - Y1 + 24,
    { fill: 'none', stroke: kleur, strokeWidth: 2.8, strokeLineDash: [14, 11], roughness: 0.7, disableMultiStroke: true });
}

// ---------- links: synchroon ----------
paneel(300, 'zoals je ze aanmaakt', ['appelen', 'peren', 'meloenen'], ['3.3', '6.2', '2.9']);
kolom(300, 1, C.RED);
c.lines(645, 545, ['index 1 in beide arrays:', 'peren kost 6.2'], 36, C.RED_DARK, 700, 'middle', 1.15);
c.txt(645, 700, 'de prijs staat op dezelfde index als het product', 38, C.GRAY, 600);

// ---------- scheiding ----------
c.line(1130, 60, 1130, 730, { strokeWidth: 3, strokeLineDash: [16, 13], roughness: 0.5, disableMultiStroke: true });

// ---------- rechts: na het sorteren van een array ----------
paneel(1430, 'Array.Sort(producten);', ['appelen', 'meloenen', 'peren'], ['3.3', '6.2', '2.9']);
kolom(1430, 2, C.RED);
c.lines(1775, 545, ['index 2 in beide arrays:', 'peren kost 2.9?'], 36, C.RED_DARK, 700, 'middle', 1.15);
c.txt(1775, 700, 'de namen verhuisden, de prijzen bleven staan', 38, C.GRAY, 600);

c.save('.', 'synchroon', '');
