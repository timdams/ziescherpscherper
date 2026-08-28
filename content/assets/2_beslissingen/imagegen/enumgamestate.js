// H5 - de gamestate-enum als toestandsmachine. De vijf toegelaten waarden staan als
// bollen, de pijlen tonen hoe een spel ertussen springt, en de variabele onderaan
// bevat er altijd precies een van.
// Draaien vanuit de imagegen-map:  node enumgamestate.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1320, 615);

c.txt(80, 70, 'enum gamestate {Intro, Startmenu, Ingame, Gameover, Optionsscreen}',
  28, C.GRAY, 600, 'start');

// ---------- de vijf toestanden ----------
const EW = 230, EH = 104;
const state = (cx, cy, label) => {
  c.ellipse(cx, cy, EW, EH, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED_DARK,
    strokeWidth: 2.4, roughness: 1.3 });
  c.txt(cx, cy + 10, label, 30, C.GRAY, 700);
};

state(250, 210, 'Intro');
state(660, 210, 'Startmenu');
state(1090, 210, 'Ingame');
state(1090, 500, 'Gameover');
state(660, 500, 'Optionsscreen');

// ---------- de overgangen ----------
const o = { stroke: C.RED, strokeWidth: 2.6, roughness: 1.2, head: 15 };

c.arrow(370, 210, 530, 210, o);            // Intro -> Startmenu
c.arrow(780, 210, 960, 210, o);            // Startmenu -> Ingame
c.arrow(1090, 275, 1090, 436, o);          // Ingame -> Gameover
c.carrow(1000, 452, 860, 330, 740, 256, o); // Gameover -> Startmenu
c.arrow(620, 268, 620, 438, o);            // Startmenu -> Optionsscreen
c.arrow(700, 438, 700, 268, o);            // Optionsscreen -> Startmenu

// ---------- de variabele die er een van bevat ----------
c.rect(110, 445, 280, 115, { strokeWidth: 2.4, roughness: 1.3 });
c.txt(250, 490, 'playerGameState', 26, C.RED_DARK, 700);
c.txt(250, 538, 'Intro', 34, C.GRAY, 700);

c.arrow(250, 441, 250, 274, { stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.2, head: 14 });
c.txt(268, 370, 'bevat er altijd precies één', 26, C.GRAY, 600, 'start');

c.save('.', 'enumgamestate', '');
