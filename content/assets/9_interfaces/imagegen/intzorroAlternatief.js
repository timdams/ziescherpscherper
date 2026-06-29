// alternatief: interface = contactdoos-vorm, klasse = stekker met passende pinnen
const { createCanvas, C } = require('./excal');
const GREEN_F = '#e2eed8', GREEN_T = '#cfe0c2', GREEN_S = '#bcd3ab', GREEN_L = '#6a9a4f';
const YEL_F = '#fdf3da', YEL_L = '#cbb05a', PIN = '#d7dde2';
const c = createCanvas(1720, 820);

// ZORRO als 3D-doos (stekker links)
const d = 46;
function box3d(x, y, w, h, fill, top, side, st, name) {
  c.poly([[x, y], [x + d, y - d], [x + w + d, y - d], [x + w, y]], { fill: top, fillStyle: 'solid', stroke: st, strokeWidth: 2, roughness: 1.1 });
  c.poly([[x + w, y], [x + w + d, y - d], [x + w + d, y + h - d], [x + w, y + h]], { fill: side, fillStyle: 'solid', stroke: st, strokeWidth: 2, roughness: 1.1 });
  c.rect(x, y, w, h, { fill, fillStyle: 'solid', stroke: st, strokeWidth: 2.4, roughness: 1.05 });
  if (name) c.txt(x + w / 2, y + 70, name, 48, C.GRAY, 800);
}
box3d(80, 230, 420, 430, GREEN_F, GREEN_T, GREEN_S, GREEN_L, 'ZORRO');

// contactdoos ISuperHeld (rechts)
c.rect(1180, 230, 460, 430, { fill: YEL_F, fillStyle: 'solid', stroke: YEL_L, strokeWidth: 2.8, roughness: 1.05 });
c.txt(1410, 320, 'ISuperHeld', 48, C.GRAY, 800);
c.txt(1410, 372, 'interface', 36, C.GRAY, 400);

// drie pinnen (methodes) van ZORRO die in de doos passen
const methods = ['SchietLasers', 'VerlaagKracht', 'Power'];
methods.forEach((m, i) => {
  const y = 470 + i * 70;
  // pin-staaf van klasse naar doos
  c.rect(500, y - 26, 700, 52, { fill: PIN, fillStyle: 'solid', stroke: '#9aa3ab', strokeWidth: 2.2, roughness: 1 });
  c.txt(820, y + 12, m, 32, C.GRAY, 700);
  // gat (notch) in de contactdoos
  c.rect(1150, y - 32, 70, 64, { fill: C.WHITE, fillStyle: 'solid', stroke: YEL_L, strokeWidth: 2.4, roughness: 1 });
});

c.txt(820, 700, 'ZORRO past in elke ISuperHeld-vorm', 36, C.GRAY, 600);
c.save(__dirname, 'intzorroAlternatief', '');
