const { createCanvas, C, region, REGION } = require('./arr');
const c = createCanvas(1600, 720);
region(c, 40, 40, 540, 640, REGION.STACK, 'STACK', '#3a7d34');
region(c, 640, 40, 920, 640, REGION.HEAP, 'HEAP', '#b9881f');
c.line(610, 60, 610, 660, { strokeWidth: 3, strokeLineDash: [16, 13], roughness: 0.5, disableMultiStroke: true });
c.rect(110, 350, 380, 210, { fill: '#e3d4ea', fillStyle: 'solid', stroke: '#9b7bb0', strokeWidth: 2.4, roughness: 1.05 });
c.txt(300, 472, 'null', 52, C.GRAY, 700);
c.bubble(300, 170, 280, 130, 'stud1', 300, 348, 44);
// pijl richting de heap, maar er is geen object
c.arrow(490, 455, 900, 455, { strokeWidth: 2.8, head: 18, stroke: C.RED, strokeLineDash: [11, 8] });
c.line(912, 423, 974, 487, { stroke: C.RED, strokeWidth: 5 });
c.line(974, 423, 912, 487, { stroke: C.RED, strokeWidth: 5 });
c.txt(1030, 410, 'geen object!', 42, C.RED_DARK, 700, 'start');
c.txt(1030, 470, '(de heap is hier leeg)', 30, C.GRAY, 600, 'start');
c.txt(800, 632, 'stud1.Naam   ->   NullReferenceException', 38, C.GRAY, 700);
c.save(__dirname, 'nullreferentie', 'NEW');
