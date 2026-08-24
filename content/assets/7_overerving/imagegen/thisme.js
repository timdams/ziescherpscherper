/*
 * Excalidraw-stijl generator voor content/assets/7_overerving/thisme.png
 * VS-code-screenshot: class Monster; na 'this.' toont IntelliSense alles wat de
 * klasse aanbiedt (eigen leden Levens/Kracht/Aanval + overgeerfde object-methoden),
 * ongeacht access modifiers. Aanval is geselecteerd met tooltip 'void Monster.Aanval()'.
 * Zie CLAUDE.md > "Afbeeldingen moderniseren".
 *
 * Run:  node thisme.js  ->  thisme.svg + thismeNEW.png
 */
const { createCanvas, C, COL, kw, ty, me, id, approxW, codeLine, editorPanel } = require('./codepanel');

const c = createCanvas(1000, 940);
editorPanel(c, 40, 40, 920, 875, 112, 176, 690);

const S = 40, i0 = 80, i1 = 124, i2 = 168;
codeLine(c, i0, 104, [kw('class '), ty('Monster')], S);
codeLine(c, i0, 160, [id('{')], S);
c.txt(i1, 204, '0 references', 27, COL.REFS, 500, 'start');
codeLine(c, i1, 250, [kw('public '), kw('int '), id('Levens'), id(' '), id('{ '), kw('get; set;'), id(' }')], S);
c.txt(i1, 296, '0 references', 27, COL.REFS, 500, 'start');
codeLine(c, i1, 342, [kw('public '), kw('int '), id('Kracht'), id(' '), id('{ '), kw('get; set;'), id(' }')], S);
c.txt(i1, 428, '0 references', 27, COL.REFS, 500, 'start');
codeLine(c, i1, 474, [kw('public '), kw('void '), me('Aanval'), id('()')], S);
codeLine(c, i1, 532, [id('{')], S);
const lThis = codeLine(c, i2, 590, [kw('this'), id('.')], S);
codeLine(c, i1, 648, [id('}')], S);
codeLine(c, i0, 706, [id('}')], S);

// knipperende cursor na 'this.'
const curX = lThis[lThis.length - 1].x1 + 2;
c.line(curX, 562, curX, 600, { stroke: COL.CODE, strokeWidth: 2, roughness: 0.3, disableMultiStroke: true });

// ---- IntelliSense-popup ----
function methodIcon(x, y) { // magenta blokje (VS methode-icoon)
  c.rect(x - 12, y - 12, 24, 24, { fill: '#C64EA6', fillStyle: 'solid', stroke: '#8E2F76', strokeWidth: 1.6, roughness: 0.8 });
}
function propIcon(x, y) {   // moersleutel (VS property-icoon)
  c.circle(x - 4, y - 5, 14, { fill: 'none', stroke: '#5A6572', strokeWidth: 2.2, roughness: 0.9 });
  c.line(x - 1, y - 1, x + 10, y + 10, { stroke: '#5A6572', strokeWidth: 3.4, roughness: 0.7, disableMultiStroke: true });
}
const rows = [
  { name: 'Aanval', kind: 'm', sel: true },
  { name: 'Equals', kind: 'm' },
  { name: 'GetHashCode', kind: 'm' },
  { name: 'GetType', kind: 'm' },
  { name: 'Kracht', kind: 'p' },
  { name: 'Levens', kind: 'p' },
];
const px = 250, py = 606, pw = 330, rowH = 48, ph = rows.length * rowH + 12;
c.rect(px, py, pw, ph, { fill: C.WHITE, fillStyle: 'solid', stroke: '#a8a8a8', strokeWidth: 2, roughness: 0.5, bowing: 0.3 });
rows.forEach((r, i) => {
  const ry = py + 6 + i * rowH, cy = ry + rowH / 2;
  if (r.sel) c.rect(px + 4, ry, pw - 8, rowH, { fill: '#cfe8fb', fillStyle: 'solid', stroke: '#7fb2e0', strokeWidth: 1.6, roughness: 0.6 });
  if (r.kind === 'm') methodIcon(px + 28, cy); else propIcon(px + 28, cy);
  c.txt(px + 58, cy + 12, r.name, 34, COL.CODE, 600, 'start');
});

// ---- tooltip bij het geselecteerde lid (Aanval) ----
const ttx = px + pw + 18, tty = py + 4, ttw = 360, tth = 54;
c.rect(ttx, tty, ttw, tth, { fill: '#fbfbe8', fillStyle: 'solid', stroke: '#c9c9a0', strokeWidth: 1.6, roughness: 0.5, bowing: 0.3 });
codeLine(c, ttx + 18, tty + 36, [kw('void '), ty('Monster'), id('.'), me('Aanval'), id('()')], 30);

c.save(__dirname, 'thisme', 'NEW');
