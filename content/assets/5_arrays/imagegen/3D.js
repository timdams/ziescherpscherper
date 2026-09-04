const { createCanvas, C, cellRow } = require('./arr');
const c = createCanvas(1240, 850);
c.rect(60, 250, 1080, 530, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 3, roughness: 1.05 });
function layer(ox, oy, vals) {
  cellRow(c, ox, oy, 140, 120, vals[0], { size: 46 });
  cellRow(c, ox, oy + 120, 140, 120, vals[1], { size: 46 });
}
// horizontale stap (340) is groter dan de breedte van een blok (280),
// zodat de blokken elkaar nooit overlappen en geen enkel cijfer verdwijnt
layer(120, 310, [[3, 4], [5, 4]]);
layer(460, 400, [[12, 34], [35, 24]]);
layer(800, 490, [[-12, 27], [3, 24]]);
c.bubble(940, 35, 320, 120, "temperaturen", 1140, 245, 46);
c.save('.', '3D', 'NEW');
