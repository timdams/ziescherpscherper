const { createCanvas, C, classbox3d, methodRow, lollipop, YEL_F, YEL_L } = require('./iface');
const c = createCanvas(960, 960);
classbox3d(c, 60, 170, 760, 700, 'ZORRO');
methodRow(c, 350, 400, 300, 'RoepPaard', 300, 64);
methodRow(c, 350, 400, 392, 'HeeftSnor', 300, 64);
// interface-methoden in geel gestippeld sub-kader
c.rect(110, 480, 660, 350, { fill: YEL_F, fillStyle: 'solid', stroke: YEL_L, strokeWidth: 2.6, strokeLineDash: [12, 8], roughness: 1.05 });
lollipop(c, 470, 70, 470, 480, 'ISuperHeld');
['SchietLasers', 'VerlaagKracht', 'Power'].forEach((n, i) => methodRow(c, 350, 400, 530 + i * 92, n, 300, 64, { dashed: true }));
c.save(__dirname, 'intzorro2', 'NEW');
