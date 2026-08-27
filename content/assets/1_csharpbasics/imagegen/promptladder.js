// H4 (Programmeren met A.I.) - alle prompts uit dit hoofdstuk op een as:
// links doet de A.I. het denkwerk, rechts doe jij het.
// Draaien vanuit de imagegen-map:  node promptladder.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(2420, 610);

const LIGHT = '#c9c9c9';
const AXY = 340;                       // hoogte van de as
const X0 = 520, XN = 2000, N = 8;      // eerste en laatste kaartje
const STEP = (XN - X0) / (N - 1);
const CW = 380, CH = 110;              // kaartje
const TOPY = 110, BOTY = 440;          // bovenste en onderste rij

// ---------- de as ----------
c.arrow(320, AXY, 2205, AXY, { stroke: C.GRAY, strokeWidth: 2.6, roughness: 1.1, head: 20 });
c.lines(300, AXY - 12, ['A.I. doet', 'het denkwerk'], 32, C.RED_DARK, 700, 'end', 1.22);
c.lines(2225, AXY - 12, ['jij doet', 'het denkwerk'], 32, C.RED_DARK, 700, 'start', 1.22);

// ---------- de prompts, in volgorde van wie het werk doet ----------
const items = [
  { t: 'De verboden prompt',      w: 'A.I.', n: ' schrijft de oplossing', bad: true },
  { t: 'Vergelijkings-prompt',    w: 'A.I.', n: ' legt de verschillen uit' },
  { t: 'Maak een variant-prompt', w: 'A.I.', n: ' levert enkel de opgave' },
  { t: 'Zoek-de-fout-prompt',     w: 'jij',  n: ' zoekt de ingebouwde fouten' },
  { t: 'Tutor-vergelijkings-prompt', w: 'jij', n: ' duidt de verschillen aan' },
  { t: 'Wees-de-compiler-prompt', w: 'jij',  n: ' voorspelt de output' },
  { t: 'Vereenvoudigings-prompt', w: 'jij',  n: ' maakt de code korter' },
  { t: 'De ultieme prompt',       w: 'A.I.', n: ' daagt uit, jij zoekt zelf' },
];

items.forEach((it, i) => {
  const cx = X0 + i * STEP;
  const boven = i % 2 === 0;
  const cy = boven ? TOPY : BOTY;

  // steeltje van het kaartje naar de as
  if (boven) c.line(cx, cy + CH, cx, AXY - 18, { stroke: LIGHT, strokeWidth: 1.8, roughness: 1, strokeLineDash: [9, 10] });
  else       c.line(cx, AXY + 18, cx, cy,      { stroke: LIGHT, strokeWidth: 1.8, roughness: 1, strokeLineDash: [9, 10] });

  // het kaartje
  c.rect(cx - CW / 2, cy, CW, CH, it.bad
    ? { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 7, fillWeight: 1.6, stroke: C.RED, strokeWidth: 2.6, roughness: 1.5 }
    : { strokeWidth: 2.2, roughness: 1.5 });

  c.txt(cx, cy + 46, it.t, 32, C.RED_DARK, 700);
  c.txtSegs(cx, cy + 86, [
    { t: it.w, color: C.RED_DARK, weight: 700 },
    { t: it.n, color: C.GRAY, weight: 500 },
  ], 26, 'middle');

  // markering op de as
  if (it.bad) {
    c.circle(cx, AXY, 36, { fill: C.WHITE, fillStyle: 'solid', stroke: C.RED, strokeWidth: 2.6 });
    c.line(cx - 13, AXY + 13, cx + 13, AXY - 13, { stroke: C.RED, strokeWidth: 2.6, roughness: 1.2 });
  } else {
    c.circle(cx, AXY, 20, { fill: C.RED, fillStyle: 'solid', stroke: C.RED, strokeWidth: 2 });
  }
});

c.save('.', 'promptladder', '');
