// H5 - kortsluiten: bij && stopt C# zodra de linkse operand false is
// Draaien vanuit de imagegen-map:  node kortsluiten.js
const { createCanvas, C } = require('./excal');
const { terminal } = require('./flow');

const c = createCanvas(1700, 650);

const TY = 380;   // hoogte van de weg

// de expressie die we volgen
c.txt(850, 80, 'bool test = (5 > 10) && (Console.ReadLine() == "ja");', 36, C.GRAY, 600);

// ---------- de weg ----------
c.line(120, TY, 480, TY, { strokeWidth: 3, roughness: 1.3, strokeLineDash: [18, 14] });
// het stuk dat niet meer afgelegd wordt
c.line(480, TY, 1300, TY, { strokeWidth: 1.6, roughness: 1.3, strokeLineDash: [10, 14] });

function chevron(x) {
  c.line(x, TY - 15, x + 17, TY, { strokeWidth: 2.6, roughness: 1 });
  c.line(x + 17, TY, x, TY + 15, { strokeWidth: 2.6, roughness: 1 });
}
[250, 350].forEach(chevron);

// ---------- start ----------
terminal(c, 150, TY, 46);
c.txt(150, 322, 'start', 34, C.GRAY, 700);

// ---------- eerste test: de slagboom gaat dicht ----------
c.rect(350, 148, 280, 78, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 2.4 });
c.txt(490, 200, '5 > 10', 40, C.RED_DARK, 700);
c.line(490, 226, 490, 250, { strokeWidth: 2.6 });

c.rect(468, 250, 24, 150, { fill: C.GRAY, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2 });
c.rect(492, 356, 250, 26, { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 7, fillWeight: 1.8,
  stroke: C.RED_DARK, strokeWidth: 2.4 });
c.txt(617, 428, 'false', 42, C.RED_DARK, 700);

// ---------- de EN-operator op de weg ----------
c.circle(850, TY, 76, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.2 });
c.txt(850, 396, '&&', 48, C.GRAY, 700);

// ---------- tweede test: wordt nooit bereikt ----------
c.rect(985, 138, 330, 108, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2,
  strokeLineDash: [12, 10] });
c.lines(1150, 186, ['Console.ReadLine()', '== "ja"'], 34, C.GRAY, 600);
c.line(1150, 246, 1150, 372, { strokeWidth: 2, strokeLineDash: [10, 8] });
c.lines(1180, 300, ['wordt nooit', 'uitgevoerd'], 34, C.RED_DARK, 700, 'start');

// ---------- de kortsluiting zelf ----------
c.carrow(720, 442, 1060, 566, 1420, 402, { stroke: C.RED, strokeWidth: 2.8, head: 18 });
c.txt(1060, 608, 'het antwoord ligt al vast', 34, C.RED_DARK, 700);

// ---------- resultaat ----------
c.rect(1440, 340, 200, 100, { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 6, fillWeight: 1.6,
  stroke: C.RED, strokeWidth: 2.4 });
c.txt(1540, 406, 'false', 48, C.GRAY, 700);

c.save('.', 'kortsluiten', '');
