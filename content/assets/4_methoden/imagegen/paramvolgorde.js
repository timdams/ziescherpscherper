// H7 - paramvolgorde: de positie van je actuele parameter bepaalt in welke formele parameter ze belandt
// Draaien vanuit de imagegen-map:  node paramvolgorde.js
const { createCanvas, C } = require('./excal');
const { slot } = require('./vhelpers');
const { callTokens } = require('./phelpers');

const c = createCanvas(1700, 720);
const RD = C.RED_DARK;

// ---------- de signatuur, één keer bovenaan ----------
c.txtSegs(850, 88, [
  { t: 'static void ToonDeling(double ', weight: 700 },
  { t: 'teller', color: RD, weight: 700 },
  { t: ', double ', weight: 700 },
  { t: 'noemer', color: RD, weight: 700 },
  { t: ')', weight: 700 },
], 42, 'middle');

// Eén paneel: de aanroep, de twee formele parameters en wat er op het scherm komt.
function paneel(px, eerste, tweede, uitvoer) {
  const cx = px + 380;
  const pos = callTokens(c, cx, 200, [
    { t: 'ToonDeling(' },
    { t: eerste, color: RD, key: 'p1' },
    { t: ', ' },
    { t: tweede, color: RD, key: 'p2' },
    { t: ');' },
  ], 48);

  slot(c, px + 80, 290, 270, 150, 'teller', eerste, { valueColor: RD });
  slot(c, px + 410, 290, 270, 150, 'noemer', tweede, { valueColor: RD });

  c.carrow(pos.p1.cx, 222, pos.p1.cx - 60, 262, px + 215, 285,
    { stroke: C.RED, strokeWidth: 2.4, head: 14, roughness: 1 });
  c.carrow(pos.p2.cx, 222, pos.p2.cx + 60, 262, px + 545, 285,
    { stroke: C.RED, strokeWidth: 2.4, head: 14, roughness: 1 });

  c.arrow(cx, 460, cx, 520, { strokeWidth: 2.4, head: 14 });
  c.rect(px + 60, 530, 640, 110, { strokeWidth: 2.2, roughness: 1.3 });
  c.txt(px + 100, 600, uitvoer, 36, C.GRAY, 700, 'start');
  c.txt(px + 60, 685, 'op het scherm', 32, RD, 700, 'start');
}

paneel(60, '3.5', '2.1', '1,6666666666666665');
paneel(880, '2.1', '3.5', '0,6');

c.save(__dirname, 'paramvolgorde', '');
