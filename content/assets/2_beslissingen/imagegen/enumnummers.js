// H5 - de namen van een enum en de getallen die er intern onder liggen. Boven de
// standaardnummering met de twee castrichtingen, onder de zelfgekozen nummers waar
// de gaten zichtbaar zijn en (Weekdagen)99 naast de reeks belandt.
// Draaien vanuit de imagegen-map:  node enumnummers.js
const { createCanvas, C } = require('./excal');
const { cross } = require('./shelpers');

const c = createCanvas(1650, 900);

const NAMEN = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'];

// ================= paneel 1: standaard genummerd vanaf 0 =================
c.txt(240, 62, 'standaard krijgen ze de nummers 0 tot 6', 32, C.RED_DARK, 700, 'start');
c.txt(240, 108, 'enum Weekdagen {Maandag, Dinsdag, Woensdag, Donderdag, Vrijdag, Zaterdag, Zondag}',
  26, C.GRAY, 600, 'start');

const X0 = 300, BW = 150, PITCH = 160;
const cx = i => X0 + i * PITCH + BW / 2;

const NAAM_Y = 150, NAAM_H = 68;
const NUM_Y = 280, NUM_H = 64;

NAMEN.forEach((naam, i) => {
  const x = X0 + i * PITCH;
  c.rect(x, NAAM_Y, BW, NAAM_H, { strokeWidth: 2.2, roughness: 1.4 });
  c.txt(cx(i), NAAM_Y + NAAM_H / 2 + 9, naam, 26, C.GRAY, 700);
  // stippellijn die de naam met zijn getal verbindt
  c.line(cx(i), NAAM_Y + NAAM_H + 8, cx(i), NUM_Y - 8,
    { strokeWidth: 1.8, roughness: 1, strokeLineDash: [9, 9] });
  c.cell(x, NUM_Y, BW, NUM_H, String(i), { size: 34 });
});

// de twee castrichtingen, buiten de rijen zodat niets elkaar raakt
const castO = { stroke: C.RED, strokeWidth: 2.6, roughness: 1.2, head: 15 };
c.arrow(190, NAAM_Y + 12, 190, NUM_Y + NUM_H - 8, castO);
c.txt(172, 257, '(int)', 30, C.RED_DARK, 700, 'end');

c.arrow(1470, NUM_Y + NUM_H - 8, 1470, NAAM_Y + 12, castO);
c.txt(1490, 257, '(Weekdagen)', 30, C.RED_DARK, 700, 'start');

// ================= scheiding =================
c.line(140, 412, 1540, 412, { strokeWidth: 2, roughness: 1.2, strokeLineDash: [14, 11] });

// ================= paneel 2: zelf gekozen nummers =================
c.txt(240, 494, 'je kan de nummers ook zelf kiezen', 32, C.RED_DARK, 700, 'start');
c.txt(240, 540, 'enum Weekdagen {Maandag=1, Dinsdag, Woensdag, Donderdag, Vrijdag, Zaterdag=50, Zondag=60}',
  26, C.GRAY, 600, 'start');

const AS_Y = 740, TICK_TOP = 722, TICK_BOT = 758;
const asO = { stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.3 };

// de as in twee stukken, met een breuk waar de nummering springt
c.line(240, AS_Y, 1000, AS_Y, asO);
c.line(1040, AS_Y, 1540, AS_Y, asO);
c.line(996, TICK_BOT + 4, 1016, TICK_TOP - 4, asO);
c.line(1024, TICK_BOT + 4, 1044, TICK_TOP - 4, asO);

const PUNTEN = [
  ['Maandag', 1, 330], ['Dinsdag', 2, 480], ['Woensdag', 3, 630],
  ['Donderdag', 4, 780], ['Vrijdag', 5, 930],
  ['Zaterdag', 50, 1120], ['Zondag', 60, 1270],
];

PUNTEN.forEach(([naam, nr, x]) => {
  c.line(x, TICK_TOP, x, TICK_BOT, { stroke: C.RED, strokeWidth: 2.8, roughness: 1.1 });
  c.txt(x, 700, naam, 26, C.GRAY, 700);
  c.txt(x, 798, String(nr), 30, C.RED_DARK, 700);
});

// wat er in het gat zit
c.arrow(1020, 832, 1020, 772, { strokeWidth: 2, roughness: 0.8, head: 12 });
c.txt(1020, 862, '6 tot 49 worden niet gebruikt', 26, C.GRAY, 600);

// een cast van een getal dat nergens op de as staat
c.txt(1450, 636, '(Weekdagen)99', 30, C.RED_DARK, 700);
c.arrow(1450, 652, 1450, 712, { stroke: C.RED, strokeWidth: 2.6, roughness: 1.2, head: 14 });
cross(c, 1450, AS_Y, 16);
c.txt(1420, 862, 'geen naam op deze plek', 26, C.GRAY, 600);

c.save('.', 'enumnummers', '');
