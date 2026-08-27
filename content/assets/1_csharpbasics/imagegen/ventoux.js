// H4 (Programmeren met A.I.) - de vergelijking bij de verboden prompt: de Tour-winnaar
// fietst de Mont Ventoux met jou achterop zijn rug, tegenover zelf trappen.
// Draaien vanuit de imagegen-map:  node ventoux.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(2200, 900);
const LIGHT = '#c9c9c9';

// lokale fietscoordinaten (oorsprong = contactpunt met de helling) naar het canvas
function place(ox, oy, ang, s) {
  const co = Math.cos(ang), si = Math.sin(ang);
  return (px, py) => [ox + (px * co - py * si) * s, oy + (px * si + py * co) * s];
}

function fietser(ox, oy, ang, s, metPassagier) {
  const P = place(ox, oy, ang, s);
  const L = (a, b, o = {}) => {
    const p = P(a[0], a[1]), q = P(b[0], b[1]);
    c.line(p[0], p[1], q[0], q[1], { stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.3, ...o });
  };
  const O = (pt, d, o = {}) => {
    const p = P(pt[0], pt[1]);
    c.circle(p[0], p[1], d * s, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.3, ...o });
  };
  // romp als langwerpige vierhoek rond de as a-b, zodat de mens uit het kader springt
  const romp = (a, b, w1, w2, o = {}) => {
    const dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy);
    const px = -dy / len, py = dx / len;
    c.poly([[a[0] + px * w1, a[1] + py * w1], [b[0] + px * w2, b[1] + py * w2],
            [b[0] - px * w2, b[1] - py * w2], [a[0] - px * w1, a[1] - py * w1]].map(p => P(p[0], p[1])),
      { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 3, roughness: 1.3, ...o });
  };

  // ---------- de fiets ----------
  const R = [-72, -42], F = [72, -42], BB = [0, -38], S = [-48, -116], H = [60, -110];
  const FR = { stroke: C.GRAY, strokeWidth: 2.2, roughness: 1.2 };
  O(R, 84, FR); O(F, 84, FR);
  [[R, BB], [BB, S], [S, R], [BB, H], [S, H], [H, F]].forEach(g => L(g[0], g[1], FR));

  // ---------- de renner ----------
  const HIP = [-46, -130], SH = [-16, -200];
  L(HIP, [-12, -88], { strokeWidth: 3 });   L([-12, -88], [-16, -44], { strokeWidth: 3 });
  L(HIP, [12, -104], { strokeWidth: 3.4 }); L([12, -104], [16, -32], { strokeWidth: 3.4 });
  L(SH, [60, -116], { strokeWidth: 3 });
  romp(HIP, SH, 12, 15);
  O([-4, -224], 42, { strokeWidth: 3 });

  if (metPassagier) {
    // hangt op zijn rug: benen rond het middel, arm rond de nek
    const RD = { stroke: C.RED, strokeWidth: 2.6 };
    romp([-58, -150], [-30, -218], 11, 13, { fill: C.RED_LIGHT, fillStyle: 'hachure',
      hachureGap: 6, fillWeight: 1.4, stroke: C.RED, strokeWidth: 2.6 });
    L([-34, -212], [-2, -198], RD);
    L([-58, -150], [-30, -140], RD); L([-30, -140], [-6, -146], RD);
    L([-54, -142], [-28, -130], RD); L([-28, -130], [-6, -136], RD);
    O([-42, -240], 36, { stroke: C.RED, strokeWidth: 2.8 });
  } else {
    // zweet
    const d1 = P(26, -244), d2 = P(38, -226);
    c.line(d1[0], d1[1], d1[0] + 22, d1[1] - 14, { stroke: LIGHT, strokeWidth: 2.4, roughness: 1.1 });
    c.line(d2[0], d2[1], d2[0] + 26, d2[1] - 6, { stroke: LIGHT, strokeWidth: 2.4, roughness: 1.1 });
  }
}

function paneel(x0, tag, tagRood, metPassagier, regel1, regel2) {
  const BASE = 700, LX = x0 + 70, PX = x0 + 700, RX = x0 + 960, PY = 260;

  c.line(x0 + 20, BASE, x0 + 1010, BASE, { stroke: LIGHT, strokeWidth: 2, roughness: 1.2 });
  c.poly([[LX, BASE], [PX, PY], [RX, BASE]], { fill: LIGHT, fillStyle: 'hachure',
    hachureGap: 30, fillWeight: 0.9, stroke: C.GRAY, strokeWidth: 2.6, roughness: 1.4, bowing: 1.2 });

  // vlag op de top
  c.line(PX, PY, PX, PY - 80, { strokeWidth: 2.4, roughness: 1.2 });
  c.poly([[PX, PY - 80], [PX + 76, PY - 60], [PX, PY - 42]], { fill: C.RED_LIGHT,
    fillStyle: 'hachure', hachureGap: 6, fillWeight: 1.4, stroke: C.RED, strokeWidth: 2.2 });
  c.txt(PX - 40, PY - 48, 'Mont Ventoux', 30, C.GRAY, 500, 'end');

  // etiket linksboven
  c.rect(x0 + 40, 55, 320, 78, tagRood
    ? { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 7, fillWeight: 1.6, stroke: C.RED, strokeWidth: 2.6, roughness: 1.5 }
    : { strokeWidth: 2.2, roughness: 1.5 });
  c.txt(x0 + 200, 107, tag, 34, C.RED_DARK, 700);

  // de fietser, halverwege de klim
  const t = 0.5;
  fietser(LX + t * (PX - LX), BASE + t * (PY - BASE), Math.atan2(PY - BASE, PX - LX), 1.25, metPassagier);

  c.txt(x0 + 515, 800, regel1, 40, C.RED_DARK, 700);
  c.txt(x0 + 515, 850, regel2, 32, C.GRAY, 500);
}

paneel(40, 'de verboden prompt', true, true,
  'de winnaar fietst, jij hangt achterop',
  'je geraakt boven, maar leerde niets');

c.line(1100, 55, 1100, 870, { stroke: LIGHT, strokeWidth: 2, roughness: 1, strokeLineDash: [12, 12] });

paneel(1140, 'zelf trappen', false, false,
  'jij fietst zelf naar boven',
  'trager, maar je gebruikte je eigen spieren');

c.save('.', 'ventoux', '');
