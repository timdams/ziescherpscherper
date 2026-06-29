const { createCanvas, C } = require('./excal');
const c = createCanvas(1800, 520);

const BW = 108, BH = 95;

// ── Array: vaste grootte (left column) ──────────────────────────────────
c.txt(60, 52, 'new string[5]', 38, C.GRAY, 700, 'start');

const AY = 78, AX0 = 60;
for (let i = 0; i < 5; i++) {
  c.rect(AX0 + i * BW, AY, BW, BH, {
    fill: i < 2 ? C.WHITE : '#dddddd',
    fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.2, roughness: 1.3,
  });
  if (i < 2) c.txt(AX0 + i * BW + BW / 2, AY + BH / 2 + 12, ['Reinhardt', 'Mercy'][i], 22, C.GRAY, 600);
  c.txt(AX0 + i * BW + BW / 2, AY + BH + 24, String(i), 24, C.GRAY, 500);
}

// Solid red wall at right edge
const WX = AX0 + 5 * BW; // = 600
c.line(WX, AY - 6, WX, AY + BH + 6, { stroke: C.RED_DARK, strokeWidth: 5, roughness: 0.4 });

// Label to the right of wall (stays within left column, < divider at 763)
c.txt(WX + 12, AY + BH / 2 - 14, 'namen[5]?', 27, C.RED_DARK, 700, 'start');
c.txt(WX + 12, AY + BH / 2 + 18, '>> fout!', 26, C.RED, 600, 'start');

// Under array
c.txt(AX0 + (5 * BW) / 2, AY + BH + 58, 'Grootte vastgelegd bij aanmaak — nooit veranderbaar', 25, C.GRAY, 500);

// ── Vertical divider ─────────────────────────────────────────────────────
c.line(763, 20, 763, 498, { stroke: '#cccccc', strokeWidth: 1.5, roughness: 0.4 });

// ── List: groeit mee (right column) ──────────────────────────────────────
const LX0 = 820;
c.txt(LX0, 52, 'new List<string>()', 38, C.GRAY, 700, 'start');

const LS = { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 2.6, roughness: 1.3 };
const LY1 = 78, LY2 = 295;
const NAMES = ['Reinhardt', 'Mercy', 'Tracer'];

function drawListRow(y, count) {
  for (let i = 0; i < count; i++) {
    c.rect(LX0 + i * BW, y, BW, BH, LS);
    c.txt(LX0 + i * BW + BW / 2, y + BH / 2 + 12, NAMES[i], 22, C.GRAY, 600);
  }
  // dashed open right edge + right arrow
  const ox = LX0 + count * BW;
  c.line(ox, y, ox + 50, y, { stroke: C.RED_DARK, strokeWidth: 2.2, strokeLineDash: [8, 6], roughness: 0.7 });
  c.line(ox, y + BH, ox + 50, y + BH, { stroke: C.RED_DARK, strokeWidth: 2.2, strokeLineDash: [8, 6], roughness: 0.7 });
  c.arrow(ox + 15, y + BH / 2, ox + 60, y + BH / 2, { stroke: C.RED_DARK, strokeWidth: 2.2, head: 12, roughness: 1.0 });
  return ox;
}

drawListRow(LY1, 2);
const ox2 = drawListRow(LY2, 3);
c.txt(ox2 + 76, LY2 + BH / 2 + 10, '. . .  groeit door', 30, C.GRAY, 600, 'start');

// Down arrow between states
const ARRX = LX0 + BW; // center of 2-box row
c.arrow(ARRX, LY1 + BH + 10, ARRX, LY2 - 10, {
  stroke: C.GRAY, strokeWidth: 2.4, head: 14, roughness: 1.1,
});
c.txt(ARRX + 18, (LY1 + BH + LY2) / 2, '.Add("Tracer")', 28, C.RED_DARK, 700, 'start');

// Under list
c.txt(LX0 + (3 * BW) / 2, LY2 + BH + 58, 'Groeit automatisch mee', 26, C.GRAY, 500);

c.save(__dirname, 'listgroeit', 'NEW');
