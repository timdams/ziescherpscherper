const { createCanvas, C, cellRow } = require('./arr');
const c = createCanvas(1320, 800);
c.rect(60, 150, 840, 510, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 3, roughness: 1.05 });
const rows = [[34,45,0,34,12,0,23],[34,5,0,74,1,4,5],[7,45,8,24,12,12,13],[34,4,0,34,2,0,23]];
rows.forEach((r, i) => cellRow(c, 100, 190 + i * 115, 110, 115, r, { size: 42 }));
c.bubble(1090, 30, 230, 120, 'regen', 890, 165, 46);
c.save('.', '2d', 'NEW');
