// H1 - solprojhier: een solution met meerdere projecten
const { createCanvas, C } = require('./excal');
const { projectBox } = require('./hierarchie');
const c = createCanvas(900, 520);

// buitenste container: de solution
c.rect(30, 30, 840, 460, { fill: C.OFFWHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.6, roughness: 1.2 });
c.txt(450, 80, 'Solution', 40, C.GRAY, 700);

// twee projecten (zelfde stijl als huiswerk)
projectBox(c, 70, 120, 300, 330, 'Project 1');
projectBox(c, 410, 120, 300, 330, 'Project 2');

// "..." vakje voor "geen limiet"
c.rect(750, 120, 90, 330, { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 7, fillWeight: 1.4, stroke: C.RED_DARK, strokeWidth: 2.4, roughness: 1.3 });
c.txt(795, 290, '...', 44, C.RED_DARK, 700);

c.save('.', 'solprojhier', 'NEW');
