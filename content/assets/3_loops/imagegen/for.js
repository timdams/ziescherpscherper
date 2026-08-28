// H6 - for: setup, finish test, for code + update als lus.
// De drie delen dragen nu ook de code uit het voorbeeld (for (int i = 0; i < 11; i += 2))
// en een volgnummer, zodat zichtbaar wordt welk stuk wanneer loopt: de setup één keer,
// de test voor elke ronde, de update pas na het codeblok.
// Draaien vanuit de imagegen-map:  node for.js
const { createCanvas, C } = require('./excal');
const { terminal, proc, decision } = require('./flow');
const { badge } = require('./ehelpers');
const c = createCanvas(880, 720);

const X = 250;

// naam van het onderdeel met daaronder de bijhorende code uit het voorbeeld
function tweeregels(cx, cy, naam, code) {
  c.txt(cx, cy - 6, naam, 30, C.GRAY, 600);
  c.txt(cx, cy + 34, code, 28, C.RED_DARK, 700);
}

terminal(c, X, 32);
c.arrow(X, 55, X, 70, { strokeWidth: 2.6, head: 15 });

// setup: gebeurt maar één keer, daarom ligt hij buiten de lus
proc(c, X, 130, 340, 100, []);
tweeregels(X, 130, 'setup', 'int i = 0');
badge(c, 45, 130, 1, 52);
c.arrow(X, 180, X, 320, { strokeWidth: 2.6, head: 15 });

// finish test: wordt voor elke ronde opnieuw gecontroleerd
decision(c, X, 430, 280, 200, []);
tweeregels(X, 430, 'finish test', 'i < 11');
badge(c, 45, 430, 2, 52);

// false -> omlaag naar het einde
c.arrow(X, 530, X, 618, { strokeWidth: 2.6, head: 15 });
c.txt(55, 575, 'Conditie is false', 27, C.GRAY, 600, 'start');
terminal(c, X, 645);

// true -> for code, dan update, terug naar de test
c.arrow(390, 430, 516, 430, { strokeWidth: 2.6, head: 15 });
c.txt(445, 500, 'Conditie is true', 27, C.GRAY, 600);
proc(c, 650, 430, 260, 80, 'for code');
c.line(650, 390, 650, 330, { strokeWidth: 2.6 });

// update: staat na het codeblok, niet ervoor
proc(c, 650, 280, 260, 100, []);
tweeregels(650, 280, 'update', 'i += 2');
badge(c, 470, 280, 3, 52);
c.line(650, 230, 650, 205, { strokeWidth: 2.6 });
c.arrow(650, 205, 266, 205, { strokeWidth: 2.6, head: 15 });
c.lines(650, 140, ['terug naar de test,', 'niet naar de setup'], 25, C.GRAY, 600, 'middle', 1.4);

c.save('.', 'for', '');
