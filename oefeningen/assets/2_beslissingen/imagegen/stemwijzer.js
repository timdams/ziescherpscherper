// H5 oefeningen - de beslissingsboom van de Stemwijzer, met verzonnen partijen.
// Vervangt stemwijzer.png (de stemwijzer van GuntherD, met echte partijen).
// De vragen en uitkomsten moeten exact overeenkomen met de oefening Stemwijzer in
// oefeningen/5_beslissingen/a_practica.md: pas je hier iets aan, pas dan ook de opgave en
// de oplossing aan.
// Draaien vanuit de imagegen-map:  node stemwijzer.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1700, 900);

const RIJ = [70, 255, 440, 625, 810];   // basislijn van de vragen per niveau
const VRAAG = 38;
const LEAF_H = 66;

function vraag(x, niveau, tekst) {
  c.txt(x, RIJ[niveau], tekst, VRAAG, C.GRAY, 700);
  return { x, y: RIJ[niveau], blad: false };
}

function partij(x, niveau, naam) {
  const w = naam.length * 17 + 60;
  const top = RIJ[niveau] - 46;
  c.rect(x - w / 2, top, w, LEAF_H, { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 7,
    fillWeight: 1.5, stroke: C.RED, strokeWidth: 2.4 });
  c.txt(x, top + LEAF_H / 2 + 34 * 0.34, naam, 34, C.RED_DARK, 700);
  return { x, y: RIJ[niveau], blad: true };
}

// Een tak van een vraag naar het volgende element, met JA of NEE ernaast.
function tak(van, naar, label) {
  const kant = naar.x < van.x ? -1 : 1;
  const x1 = van.x + kant * 30, y1 = van.y + 22;
  const x2 = naar.x - kant * 20, y2 = naar.y - (naar.blad ? 58 : 50);
  c.line(x1, y1, x2, y2, { stroke: C.GRAY, strokeWidth: 2.4 });
  // het label staat loodrecht naast het midden van de lijn, aan de buitenkant van de boom
  const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy);
  const nx = (kant < 0 ? -dy : dy) / len, ny = (kant < 0 ? dx : -dx) / len;
  const halfBreed = label.length * 7;
  const cx = (x1 + x2) / 2 + nx * (34 + halfBreed * Math.abs(nx));
  const cy = (y1 + y2) / 2 + ny * 34;
  c.txt(cx, cy + 10, label, 30, C.GRAY, 700);
}

// ---------- boom ----------
const q1 = vraag(850, 0, 'Sta je op voor 8 uur?');

const q2 = vraag(450, 1, 'Eet je elke dag friet?');
const q5 = vraag(1250, 1, 'Drink je koffie?');
tak(q1, q2, 'NEE');
tak(q1, q5, 'JA');

// links: laat opstaan
const frietfront = partij(200, 2, 'Frietfront');
const q3 = vraag(640, 2, 'Heb je een huisdier?');
tak(q2, frietfront, 'JA');
tak(q2, q3, 'NEE');

const q4 = vraag(390, 3, 'Geloof je nog in Sinterklaas?');
const knuffel = partij(770, 3, 'Knuffelpartij');
tak(q3, q4, 'NEE');
tak(q3, knuffel, 'JA');

const blancoLinks = partij(220, 4, 'Blanco');
const sint = partij(540, 4, 'Sintunie');
tak(q4, blancoLinks, 'NEE');
tak(q4, sint, 'JA');

// rechts: vroeg op
const q6 = vraag(1110, 2, 'Staat alles in je agenda?');
const water = partij(1500, 2, 'Waterpartij');
tak(q5, q6, 'JA');
tak(q5, water, 'NEE');

const q7 = vraag(1070, 3, 'Heb je vrienden?');
const planning = partij(1430, 3, 'Planningspartij');
tak(q6, q7, 'NEE');
tak(q6, planning, 'JA');

const blancoRechts = partij(930, 4, 'Blanco');
const gezellig = partij(1280, 4, 'Gezelligheidspartij');
tak(q7, blancoRechts, 'NEE');
tak(q7, gezellig, 'JA');

c.save('.', 'stemwijzer', 'NEW');
