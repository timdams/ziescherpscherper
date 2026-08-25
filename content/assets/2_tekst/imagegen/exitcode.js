// H3 - Environment.Exit: het programma stopt meteen, de regels erna worden overgeslagen,
// en het getal tussen de haakjes is de exitcode die in het consolevenster verschijnt.
// Draaien vanuit de imagegen-map:  node exitcode.js
const { createCanvas, C } = require('./excal');
const { codebox, monitor } = require('./mhelpers');

const c = createCanvas(1800, 730);

const BOX_W = 560, BOX_H = 252, BOX_Y = 150, MON_Y = 520, MON_W = 480, MON_H = 150;
const CODE = 30, LH = 1.18, PAD = 28, TITLE = 38;
// baseline van coderegel i (zelfde formule als in codebox)
const lineY = i => BOX_Y + TITLE + 30 + CODE + i * CODE * LH;

function kolom(cx, kop, regels, uitvoer) {
  c.txt(cx, 90, kop, 44, C.RED_DARK, 700);
  codebox(c, cx - BOX_W / 2, BOX_Y, BOX_W, BOX_H, 'Main', regels, { codeSize: CODE, titleSize: TITLE, pad: PAD, lh: LH });
  monitor(c, cx, MON_Y, MON_W, MON_H, uitvoer, 38);
}

const A = { stroke: C.RED, strokeWidth: 2.4, head: 15 };

// ---------- links: loopt gewoon tot het einde ----------
const LX = 450;
kolom(LX, 'zonder Exit', [
  'Console.WriteLine("Start");',
  'Console.WriteLine("Stap 1");',
  'Console.WriteLine("Stap 2");',
  'Console.WriteLine("Klaar");',
], 'exited with code 0');
c.arrow(LX, BOX_Y + BOX_H + 12, LX, MON_Y - 14, A);

// ---------- rechts: stopt bij Exit ----------
const RX = 1330;
kolom(RX, 'met Exit', [
  'Console.WriteLine("Start");',
  'Console.WriteLine("Stap 1");',
  { t: 'Environment.Exit(1);', color: C.RED_DARK, weight: 700 },
  'Console.WriteLine("Stap 2");',
  'Console.WriteLine("Klaar");',
], 'exited with code 1');

// doorstrepen van de regels na Exit (breedte ~ 0,42 x fontgrootte per teken)
const bx = RX - BOX_W / 2 + PAD;
[3, 4].forEach((i, k) => {
  const w = (k === 0 ? 'Console.WriteLine("Stap 2");' : 'Console.WriteLine("Klaar");').length * 0.37 * CODE;
  c.line(bx - 6, lineY(i) - CODE * 0.32, bx + w + 6, lineY(i) - CODE * 0.32, { stroke: C.RED, strokeWidth: 2.4, roughness: 1.6 });
});
c.txt(RX + BOX_W / 2 - PAD, (lineY(3) + lineY(4)) / 2, 'overgeslagen', 28, C.RED_DARK, 700, 'end');

// pijl vertrekt al bij de Exit-regel, langs de zijkant van de doos naar de monitor
const exitY = lineY(2) - CODE * 0.32;
c.carrow(RX + BOX_W / 2 + 50, exitY, RX + BOX_W / 2 + 240, MON_Y - 20, RX + MON_W / 2 - 60, MON_Y - 14, A);

// scheidingslijn
c.line(900, 60, 900, 700, { stroke: C.GRAY, strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });

c.save('.', 'exitcode', '');
