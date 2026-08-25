// H4 converteren - widening en narrowing als overgieten: een klein glas (int)
// past zonder verlies in een grote emmer (double); omgekeerd loopt het glas over
// en moet je casten.
// Draaien vanuit de imagegen-map:  node widening.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1400, 680);
const A = { stroke: C.RED, strokeWidth: 2.6, head: 15 };
const G = { stroke: C.GRAY, strokeWidth: 2.4, head: 15 };

// bak: trapezium dat naar onder versmalt, met een vloeistofniveau (0..1) en een waarde erin
function bak(cx, top, wTop, wBot, h, level, value, label) {
  const sl = (wTop - wBot) / 2 / h;                 // horizontale inloop per px hoogte
  c.poly([[cx - wTop / 2, top], [cx + wTop / 2, top], [cx + wBot / 2, top + h], [cx - wBot / 2, top + h]],
    { strokeWidth: 2.4, roughness: 1.4 });
  const ly = top + h * (1 - level), lw = wBot + 2 * sl * (top + h - ly);
  c.poly([[cx - lw / 2, ly], [cx + lw / 2, ly], [cx + wBot / 2, top + h], [cx - wBot / 2, top + h]],
    { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 7, fillWeight: 1.4, stroke: C.RED, strokeWidth: 2, roughness: 1.4 });
  c.txt(cx, ly + (top + h - ly) / 2 + 15, value, 42, C.GRAY, 700);
  c.txt(cx, top + h + 40, label, 32, C.RED_DARK, 700);
}

// ---------- links: widening ----------
c.txt(350, 60, 'secundaireMeting = hoofdMeting;', 36, C.GRAY, 700);
bak(180, 130, 150, 120, 150, 0.7, '20', 'int');
bak(480, 290, 290, 240, 240, 0.4, '20.0', 'double');
c.carrow(262, 175, 380, 120, 450, 275, G);
c.txt(350, 630, 'widening: past zonder verlies, geen cast nodig', 30, C.GRAY, 500);

c.line(700, 30, 700, 660, { stroke: C.GRAY, strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });

// ---------- rechts: narrowing ----------
c.txt(1050, 60, 'secundaireMeting = (int)hoofdMeting;', 36, C.GRAY, 700);
bak(880, 110, 290, 240, 230, 0.5, '20.4', 'double');
bak(1200, 370, 150, 120, 150, 1.0, '20', 'int');
c.carrow(1030, 180, 1150, 130, 1180, 355, A);
c.txt(1085, 150, '(int)', 34, C.RED_DARK, 700);
// wat overloopt
[[1290, 395], [1305, 440], [1292, 485]].forEach(([x, y]) =>
  c.ellipse(x, y, 16, 22, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED, strokeWidth: 1.8 }));
c.txt(1330, 452, '.4', 38, C.RED_DARK, 700, 'start');
c.txt(1050, 630, 'narrowing: loopt over, dus cast verplicht', 30, C.GRAY, 500);

c.save('.', 'widening', '');
