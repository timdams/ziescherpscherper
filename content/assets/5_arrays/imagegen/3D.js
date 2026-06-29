const { createCanvas, C, cellRow } = require('./arr');
const c = createCanvas(1280, 1020);
c.rect(60, 250, 1060, 700, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 3, roughness: 1.05 });
function layer(ox, oy, vals) {
  cellRow(c, ox, oy, 140, 120, vals[0], { size: 46 });
  cellRow(c, ox, oy + 120, 140, 120, vals[1], { size: 46 });
}
layer(110, 310, [[3,4],[5,4]]);
layer(330, 480, [[12,34],[35,24]]);
layer(550, 650, [[-12,27],[3,24]]);
c.bubble(940, 40, 320, 120, 'temperaturen', 1100, 255, 46);
c.save('.', '3D', 'NEW');
