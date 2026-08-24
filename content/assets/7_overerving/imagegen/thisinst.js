/*
 * Excalidraw-stijl generator voor content/assets/7_overerving/thisinst.png
 * VS-code-screenshot: class Monster met constructor. Twee pijlen tonen dat
 *   'Levens = 5;'      -> de parameter Levens (in de constructor-signatuur)
 *   'this.Levens = 5;' -> de property Levens
 * Zie CLAUDE.md > "Afbeeldingen moderniseren".
 *
 * Run:  node thisinst.js  ->  thisinst.svg + thisinstNEW.png
 */
const { createCanvas, C, COL, kw, ty, me, id, codeLine, editorPanel } = require('./codepanel');

const c = createCanvas(860, 700);
editorPanel(c, 40, 40, 780, 620, 112, 182, 636);

const S = 40, i1 = 124, i2 = 168, i0 = 80;
codeLine(c, i0, 110, [kw('class '), ty('Monster')], S);
codeLine(c, i0, 168, [id('{')], S);
c.txt(i1, 214, '0 references', 27, COL.REFS, 500, 'start');
const l4 = codeLine(c, i1, 262, [kw('public '), me('Monster'), id('('), kw('int '), id('Levens'), id(')')], S);
codeLine(c, i1, 320, [id('{')], S);
const l6 = codeLine(c, i2, 378, [id('Levens = 5;')], S);
const l7 = codeLine(c, i2, 436, [kw('this'), id('.Levens = 5;')], S);
codeLine(c, i1, 494, [id('}')], S);
c.txt(i1, 548, '1 reference', 27, COL.REFS, 500, 'start');
const l11 = codeLine(c, i1, 596, [kw('public '), kw('int '), id('Levens'), id(' '), id('{ '), kw('get; set;'), id(' }')], S);
codeLine(c, i0, 654, [id('}')], S);

const paramLev = l4.find(p => p.t === 'Levens');
const propLev = l11.find(p => p.t === 'Levens');
const l7end = l7[l7.length - 1].x1;

// pijl 1: 'Levens = 5;' -> parameter Levens (omhoog)
c.arrow(l6[0].x0 + 8, 360, paramLev.cx, 274, { stroke: C.RED_DARK, strokeWidth: 4, head: 22, roughness: 1.1 });
// pijl 2: 'this.Levens = 5;' -> property Levens (omlaag)
c.arrow(l7end - 24, 452, propLev.cx, 572, { stroke: C.RED_DARK, strokeWidth: 4, head: 22, roughness: 1.1 });

c.save(__dirname, 'thisinst', 'NEW');
