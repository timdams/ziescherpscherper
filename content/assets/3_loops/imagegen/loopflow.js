// H5 - loopflow: beslissingsboom 'welke loop kies ik?'
const { createCanvas, C } = require('./excal');
const { proc, decision } = require('./flow');
const c = createCanvas(1400, 620);

// loop-keuze als accent-cirkel
function leaf(cx, cy, naam) {
  c.circle(cx, cy, 120, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 2.6, roughness: 1.3 });
  c.txt(cx, cy + 11, naam, 32, C.RED_DARK, 700);
}
// tak naar een blad: eerst uit de ruit (horizontaal), dan omlaag
function branch(vx, lx, lbl) {
  c.line(vx, 375, lx, 375, { strokeWidth: 2.6 });
  c.arrow(lx, 375, lx, 490, { strokeWidth: 2.6, head: 14 });
  c.txt((vx + lx) / 2, 358, lbl, 26, C.GRAY, 600);
}

// topvraag
proc(c, 700, 55, 330, 70, 'Welke loop heb ik nodig?', 30);
c.arrow(700, 90, 700, 113, { strokeWidth: 2.6, head: 14 });

// middenbeslissing
decision(c, 700, 195, 460, 170, ['Weet je op voorhand hoe', 'vaak de loop moet', 'uitgevoerd worden?'], 24);

// naar de twee subbomen (uit de ruit, dan omlaag)
c.line(470, 195, 330, 195, { strokeWidth: 2.6 });
c.arrow(330, 195, 330, 300, { strokeWidth: 2.6, head: 14 });
c.txt(400, 178, 'nee', 26, C.GRAY, 600);
decision(c, 330, 375, 380, 150, ['Moet de loop minstens 1', 'maal uitgevoerd worden?'], 24);

c.line(930, 195, 1070, 195, { strokeWidth: 2.6 });
c.arrow(1070, 195, 1070, 300, { strokeWidth: 2.6, head: 14 });
c.txt(1000, 178, 'ja', 26, C.GRAY, 600);
decision(c, 1070, 375, 380, 150, ['Heb je een teller/index', 'nodig tijdens de iteratie?'], 24);

// bladeren (linker subboom: vertices 140/520, rechter: 880/1260)
branch(140, 70, 'nee');   leaf(70, 550, 'while');
branch(520, 590, 'ja');   leaf(590, 550, 'do...while');
branch(880, 810, 'nee');  leaf(810, 550, 'foreach');
branch(1260, 1330, 'ja'); leaf(1330, 550, 'for');

c.save('.', 'loopflow', 'NEW');
