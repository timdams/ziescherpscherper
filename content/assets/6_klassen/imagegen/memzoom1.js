const { createCanvas, C, region, REGION } = require('./arr');
const c = createCanvas(1600, 700);
region(c, 40, 40, 560, 620, REGION.STACK, 'STACK', '#3a7d34');
region(c, 660, 40, 900, 620, REGION.HEAP, 'HEAP', '#b9881f');
c.line(625, 60, 625, 640, { strokeWidth: 3, strokeLineDash: [16, 13], roughness: 0.5, disableMultiStroke: true });
c.rect(120, 400, 360, 200, { fill: '#e3d4ea', fillStyle: 'solid', stroke: '#9b7bb0', strokeWidth: 2.4, roughness: 1.05 });
c.txt(300, 515, 'null', 48, C.GRAY, 700);
c.bubble(300, 190, 260, 130, 'stud', 300, 398, 44);
c.save(__dirname, 'memzoom1', 'NEW');
