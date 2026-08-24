/*
 * codepanel.js - gedeelde helpers om VS-code-screenshots in Excalidraw-stijl
 * te tekenen (thisinst / thisme). Handgeschreven code met VS-syntaxkleuren.
 * Zie CLAUDE.md > "Afbeeldingen moderniseren".
 */
const { createCanvas, C } = require('./excal');

// VS-light syntaxkleuren
const COL = {
  BLUE: '#1414CC',  // keywords (public, int, void, this, class, get, set)
  TEAL: '#2B91AF',  // klasse/type-namen (Monster)
  METH: '#795E26',  // methodenamen (Aanval, Monster())
  CODE: '#1f1f1f',  // gewone identifiers/tekst
  REFS: '#9AA0A6',  // "0 references"
};
const kw = t => ({ t, color: COL.BLUE, weight: 600 });
const ty = t => ({ t, color: COL.TEAL, weight: 600 });
const me = t => ({ t, color: COL.METH, weight: 600 });
const id = t => ({ t, color: COL.CODE, weight: 600 });

// benaderende glyph-breedte van Caveat (proportioneel handschrift), gekalibreerd
function approxW(s, size) {
  let w = 0;
  for (const ch of s) {
    if (ch === ' ') w += size * 0.26;
    else if ('iIlj.,;:|!\'()'.includes(ch)) w += size * 0.22;
    else if ('mwMW'.includes(ch)) w += size * 0.60;
    else w += size * 0.42;
  }
  return w;
}
// render 1 coderegel als losse gekleurde segmenten; geeft posities per token terug
function codeLine(c, x, y, segs, size) {
  let cx = x; const pos = [];
  segs.forEach(seg => {
    c.txt(cx, y, seg.t, size, seg.color || COL.CODE, seg.weight || 600, 'start');
    const w = approxW(seg.t, size);
    pos.push({ t: seg.t, x0: cx, x1: cx + w, cx: cx + w / 2 });
    cx += w;
  });
  return pos;
}
// wit editor-paneel met VS-indentgeleider (stippellijn)
function editorPanel(c, x, y, w, h, guideX, guideY0, guideY1) {
  c.rect(x, y, w, h, { fill: C.WHITE, fillStyle: 'solid', stroke: '#d9d9d9', strokeWidth: 2, roughness: 0.6, bowing: 0.3 });
  if (guideX) c.line(guideX, guideY0, guideX, guideY1, { stroke: '#cfcfcf', strokeWidth: 1.5, roughness: 0.4, strokeLineDash: [4, 6], disableMultiStroke: true });
}

module.exports = { createCanvas, C, COL, kw, ty, me, id, approxW, codeLine, editorPanel };
