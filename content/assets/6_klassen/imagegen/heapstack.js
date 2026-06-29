const { createCanvas, region, REGION } = require('./arr');
const c = createCanvas(1500, 1000);
region(c, 40, 40, 560, 920, REGION.STACK, 'STACK', '#3a7d34');
region(c, 660, 40, 800, 920, REGION.HEAP, 'HEAP', '#b9881f');
c.line(625, 60, 625, 940, { strokeWidth: 3, strokeLineDash: [16, 13], roughness: 0.5, disableMultiStroke: true });
c.save(__dirname, 'heapstack', 'NEW');
