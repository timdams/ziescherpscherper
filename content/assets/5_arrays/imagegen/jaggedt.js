const { createCanvas, C, cellRow } = require('./arr');
const c = createCanvas(1320, 1000);
c.rect(60, 230, 1080, 640, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 3, roughness: 1.05 });
const rows = [[34,45,0,34,12],[34,5,0,74],[7,45,8,24,12,12,13],[34,4]];
rows.forEach((r, i) => cellRow(c, 100, 270 + i * 135, 125, 135, r, { size: 44 }));
c.bubble(1090, 40, 290, 120, 'jaggedArray', 1010, 235, 46);
c.save('.', 'jaggedt', 'NEW');
