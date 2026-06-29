const { createCanvas, C, classbox3d, methodRow, lollipop, YEL_F, YEL_L } = require('./iface');
const c = createCanvas(1560, 820);
classbox3d(c, 80, 130, 720, 620, 'ZORRO');
const rows = ['RoepPaard', 'HeeftSnor', 'SchietLasers', 'VerlaagKracht', 'Power'];
rows.forEach((n, i) => methodRow(c, 370, 410, 270 + i * 92, n, 300, 66));
// interface ISuperHeld (los)
c.rect(900, 230, 560, 330, { fill: YEL_F, fillStyle: 'solid', stroke: YEL_L, strokeWidth: 2.6, roughness: 1.05 });
lollipop(c, 1180, 80, 1180, 230, 'ISuperHeld');
['SchietLasers', 'VerlaagKracht', 'Power'].forEach((n, i) => methodRow(c, 1130, 1160, 290 + i * 90, n, 260, 64, { empty: true }));
c.save(__dirname, 'intzorro', 'NEW');
