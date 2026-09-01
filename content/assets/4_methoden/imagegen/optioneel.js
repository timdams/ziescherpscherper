// H7 - optioneel: een weggelaten optionele parameter schuift op, tenzij je de naam erbij zet
// Draaien vanuit de imagegen-map:  node optioneel.js
const { createCanvas, C } = require('./excal');
const { slot } = require('./vhelpers');
const { callTokens } = require('./phelpers');

const c = createCanvas(1820, 990);
const RD = C.RED_DARK;

// ---------- de signatuur, één keer bovenaan ----------
c.txtSegs(910, 82, [
  { t: 'static void ToonFactuur(string ', weight: 700 },
  { t: 'klant', color: RD, weight: 700 },
  { t: ', int ', weight: 700 },
  { t: 'korting', color: RD, weight: 700 },
  { t: ' = 0, int ', weight: 700 },
  { t: 'btw', color: RD, weight: 700 },
  { t: ' = 21)', weight: 700 },
], 40, 'middle');

const SX = [140, 445, 750], SW = 270, SH = 190;
const CENTERS = SX.map(x => x + SW / 2);
const PIJL = { stroke: C.RED, strokeWidth: 2.4, head: 14, roughness: 1 };

// Eén rij: de aanroep, de drie parameters en wat er op het scherm komt.
function rij(top, tweedeDeel, doelIndex, waarden, uitvoer) {
  const pos = callTokens(c, CENTERS[1], top + 52, [
    { t: 'ToonFactuur(' },
    { t: '"Tim"', color: RD, key: 'k' },
    { t: ', ' },
    { t: tweedeDeel, color: RD, key: 'p' },
    { t: ');' },
  ], 46);

  const slotY = top + 150;
  ['klant', 'korting', 'btw'].forEach((naam, i) => {
    slot(c, SX[i], slotY, SW, SH, naam, waarden[i].v,
      { valueColor: waarden[i].c, valueSize: 44, sub: waarden[i].s });
  });

  // "Tim" duikt onder de andere pijl door naar klant
  c.carrow(pos.k.left, top + 72, (pos.k.left + CENTERS[0]) / 2, top + 138, CENTERS[0], slotY - 8, PIJL);
  // de tweede waarde gaat naar de parameter die op die plaats staat
  c.carrow(pos.p.cx, top + 72, (pos.p.cx + CENTERS[doelIndex]) / 2, top + 120, CENTERS[doelIndex], slotY - 8, PIJL);

  c.arrow(1040, slotY + SH / 2, 1130, slotY + SH / 2, { strokeWidth: 2.4, head: 14 });
  c.rect(1150, slotY + SH / 2 - 55, 620, 110, { strokeWidth: 2.2, roughness: 1.3 });
  c.txt(1185, slotY + SH / 2 + 10, uitvoer, 30, C.GRAY, 700, 'start');
}

// ---------- 1. zonder naam: de 6 schuift in korting ----------
rij(150, '6', 1, [
  { v: '"Tim"', c: C.GRAY },
  { v: '6', c: RD },
  { v: '21', c: C.GRAY, s: 'default' },
], 'Factuur voor Tim: 6% korting, 21% btw');
c.txt(1150, 540, 'de 6 was voor btw bedoeld', 32, RD, 700, 'start');

// ---------- 2. met de naam erbij: korting houdt zijn default ----------
rij(600, 'btw: 6', 2, [
  { v: '"Tim"', c: C.GRAY },
  { v: '0', c: C.GRAY, s: 'default' },
  { v: '6', c: RD },
], 'Factuur voor Tim: 0% korting, 6% btw');

c.save(__dirname, 'optioneel', '');
