// H6 - de geneste for uit de cursus met de zeven stukken genummerd in de volgorde
// waarin ze uitgevoerd worden. De twee lussen rechts tonen waar je telkens naartoe
// terugspringt: na de update van de inner loop naar de test van de inner loop,
// en pas daarna naar de update en de test van de outer loop.
// Draaien vanuit de imagegen-map:  node nestvolgorde.js
const { createCanvas, C } = require('./excal');
const { badge } = require('./ehelpers');

const c = createCanvas(1300, 670);

const SIZE = 32;              // codegrootte
const CW = SIZE * 0.42;       // geschatte tekenbreedte
const PAD = 10;               // ruimte tussen tekst en accentkader
const LBL = 23;               // labeltekst onder de kaders
const w = n => n * CW;

// accentkader rond een stuk code op (x, baseline y) met n tekens breed
function vak(x, y, n) {
  c.rect(x - PAD, y - SIZE * 1.23, w(n) + 2 * PAD, SIZE * 1.67,
    { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED, strokeWidth: 2.4, roughness: 1.3 });
}
const code = (x, y, t) => c.txt(x, y, t, SIZE, C.GRAY, 600, 'start');
const label = (x, y, t) => c.txt(x, y, t, LBL, C.GRAY, 600);

const Y1 = 180, Y2 = 242, Y3 = 350, Y4 = 412, Y5 = 474, Y6 = 536, Y7 = 598;
const LX = 110, IX = 144, BX = 178;

// ============ outer for ============
code(LX, Y1, 'for (');
vak(190, Y1, 10); code(190, Y1, 'int i = 1;');
vak(360, Y1, 7);  code(360, Y1, 'i <= 3;');
vak(484, Y1, 3);  code(484, Y1, 'i++');
code(550, Y1, ')');

badge(c, 257, 100, 1, 48); label(257, 222, 'setup');
badge(c, 407, 100, 2, 48); label(407, 222, 'test');
badge(c, 504, 100, 7, 48); label(504, 222, 'update');

code(LX, Y2, '{');

// ============ inner for ============
code(IX, Y3, 'for (');
vak(224, Y3, 10); code(224, Y3, 'int j = 1;');
vak(394, Y3, 7);  code(394, Y3, 'j <= 5;');
vak(518, Y3, 3);  code(518, Y3, 'j++');
code(584, Y3, ')');

badge(c, 291, 280, 3, 48); label(291, 392, 'setup');
badge(c, 441, 280, 4, 48); label(441, 392, 'test');
badge(c, 538, 280, 6, 48); label(538, 392, 'update');

code(IX, Y4, '{');

// ============ codeblok van de inner loop ============
vak(BX, Y5, 36);
code(BX, Y5, 'Console.WriteLine($"A:{i}, B: {j}");');
badge(c, 716, 463, 5, 48);

code(IX, Y6, '}');
code(LX, Y7, '}');

// ============ terugsprongen ============
const lus = { stroke: C.RED, strokeWidth: 2.6, roughness: 1.2, head: 16 };

// inner loop: van het einde van het inner codeblok terug naar de inner header
c.line(175, 525, 800, 525, lus);
c.line(800, 525, 800, 339, lus);
c.arrow(800, 339, 615, 339, lus);
c.lines(818, 440, ['terug naar stap 4,', '5 keer'], 26, C.RED_DARK, 700, 'start', 1.35);

// outer loop: van het einde van het outer codeblok terug naar de outer header
c.line(140, 587, 1050, 587, lus);
c.line(1050, 587, 1050, 169, lus);
c.arrow(1050, 169, 581, 169, lus);
c.lines(1070, 370, ['terug naar stap 2,', '3 keer'], 26, C.RED_DARK, 700, 'start', 1.35);

c.save('.', 'nestvolgorde', '');
