// H6 - soortenloops: de drie categorieen loops uit de intro naast elkaar
// (definite, indefinite, oneindig).
// Draaien vanuit de imagegen-map:  node soortenloops.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1760, 370);

const MID = 150;    // hoogte waarop de drie tekeningen uitgelijnd staan
const NAAM = 280;   // basislijn van de categorienaam
const UITLEG = 330; // basislijn van de uitleg eronder

function bijschrift(cx, naam, uitleg) {
  c.txt(cx, NAAM, naam, 38, C.RED_DARK, 700);
  c.txt(cx, UITLEG, uitleg, 30, C.GRAY, 600);
}
function pijlpunt(x, y, ang, o = {}) {   // losse pijlpunt op een boog
  const len = o.head || 16, sp = 0.5;
  c.line(x, y, x - len * Math.cos(ang - sp), y - len * Math.sin(ang - sp), o);
  c.line(x, y, x - len * Math.cos(ang + sp), y - len * Math.sin(ang + sp), o);
}

// ---------- definite: een baan met een gekende finish ----------
c.line(110, MID, 570, MID, { strokeWidth: 3, roughness: 1.3 });
[130, 210, 290, 500].forEach(x => c.line(x, MID - 15, x, MID + 15, { strokeWidth: 2.4 }));
['1', '2', '3'].forEach((s, i) => c.txt(130 + i * 80, MID + 55, s, 30, C.GRAY, 700));
c.txt(500, MID + 55, '100', 30, C.GRAY, 700);
c.txt(395, MID + 12, '...', 40, C.GRAY, 700);
c.line(570, MID, 570, 70, { strokeWidth: 2.6 });
c.poly([[570, 70], [640, 90], [570, 110]],
  { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 7, fillWeight: 1.6, stroke: C.RED_DARK, strokeWidth: 2.4 });
bijschrift(374, 'definite loop', 'je weet vooraf: 100 keer');

// ---------- indefinite: invoer tot de sentinel verschijnt ----------
c.txt(1000, 85, 'invoer van de gebruiker', 30, C.GRAY, 600);
['7', '3', '12'].forEach((v, i) => {
  const x = 760 + i * 96;
  c.rect(x, 115, 88, 70);
  c.txt(x + 44, 161, v, 34, C.GRAY, 700);
});
c.rect(1048, 115, 88, 70, { strokeLineDash: [10, 8] });
c.txt(1092, 161, '?', 34, C.GRAY, 700);
c.cell(1152, 115, 88, 70, '-1');
c.txt(1196, 220, 'stop', 28, C.RED_DARK, 700);
bijschrift(1000, 'indefinite loop', 'stoppen bij -1, hoe vaak weet je niet');

// ---------- oneindig: een kring zonder uitgang ----------
const RO = { stroke: C.RED_DARK, strokeWidth: 2.8, roughness: 1.3, head: 17 };
c.path(`M 1420 ${MID} A 80 80 0 0 1 1580 ${MID}`, RO);
c.path(`M 1580 ${MID} A 80 80 0 0 1 1420 ${MID}`, RO);
pijlpunt(1580, MID, Math.PI / 2, RO);
pijlpunt(1420, MID, -Math.PI / 2, RO);
bijschrift(1500, 'oneindige loop', 'gewenst (game loop) of een bug');

c.save('.', 'soortenloops', '');
