// H1 - huiswerk: solution-hierarchie (solution > project > items)
const { createCanvas, C } = require('./excal');
const { projectBox } = require('./hierarchie');
const c = createCanvas(460, 520);

// buitenste container: de solution
c.rect(30, 30, 400, 460, { fill: C.OFFWHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.6, roughness: 1.2 });
c.txt(230, 80, 'Huiswerk', 40, C.GRAY, 700);

// het project met zijn items
projectBox(c, 80, 120, 300, 330, 'Opdracht1');

c.save('.', 'huiswerk', 'NEW');
