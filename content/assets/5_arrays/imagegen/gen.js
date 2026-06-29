/*
 * Excalidraw-stijl generator voor content/assets/5_arrays/intro.png
 * Zie Scherp Scherper - huisstijl-afbeeldingen (zie CLAUDE.md > "Afbeeldingen moderniseren").
 *
 * Deps:  npm i roughjs jsdom @fontsource/caveat @resvg/resvg-js
 * Fonts: caveat-700.ttf / caveat-400.ttf nodig voor de PNG-render
 *        (woff2 -> ttf met: python -m fonttools ... of fonttools, flavor=None).
 * Run:   node gen.js   ->  schrijft intro.svg  +  introNEW.png
 *
 * Stijl-parameters staan bovenaan; pas die aan om snel te itereren.
 */
const { JSDOM } = require('jsdom');
const rough = require('roughjs');
const fs = require('fs');
const path = require('path');

// ---- huisstijl ----
const RED = '#FF0000';        // ap-red       : accentranden
const RED_DARK = '#B30000';   // ap-red-dark  : zware randen + labels
const RED_LIGHT = '#FFE5E5';  // ap-red-light : accentvulling
const GRAY = '#4D4D4D';       // gray         : tekst
const OFFWHITE = '#f8f9fa';   // offwhite     : achtergrond
const ROUGHNESS = 1.5, BOWING = 1.2;

const W = 920, H = 760;
const dom = new JSDOM('<!DOCTYPE html><body></body>');
const document = dom.window.document;
const SVGNS = 'http://www.w3.org/2000/svg';

const svg = document.createElementNS(SVGNS, 'svg');
svg.setAttribute('xmlns', SVGNS);
svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
svg.setAttribute('width', W);
svg.setAttribute('height', H);
svg.setAttribute('font-family', 'Caveat, cursive');
const rc = rough.svg(svg);

const bg = document.createElementNS(SVGNS, 'rect');
bg.setAttribute('width', W); bg.setAttribute('height', H); bg.setAttribute('fill', OFFWHITE);
svg.appendChild(bg);

function txt(x, y, s, size, color, weight, anchor) {
  const t = document.createElementNS(SVGNS, 'text');
  t.setAttribute('x', x); t.setAttribute('y', y);
  t.setAttribute('font-size', size); t.setAttribute('fill', color || GRAY);
  t.setAttribute('font-weight', weight || 400);
  t.setAttribute('text-anchor', anchor || 'middle');
  t.setAttribute('font-family', 'Caveat, cursive');
  t.textContent = s; svg.appendChild(t);
}
const rrect = (x, y, w, h, o) => svg.appendChild(rc.rectangle(x, y, w, h, o));
const rline = (x1, y1, x2, y2, o) => svg.appendChild(rc.line(x1, y1, x2, y2, o));

function bubble(cx, top, w, h, label, tailToX, tailToY) {
  rrect(cx - w / 2, top, w, h, { fill: '#fff', fillStyle: 'solid', stroke: GRAY, strokeWidth: 2.2, roughness: ROUGHNESS, bowing: BOWING });
  rline(cx + w * 0.08, top + h, tailToX, tailToY, { stroke: GRAY, strokeWidth: 2.2, roughness: 1.8 });
  txt(cx, top + h / 2 + 12, label, 38, RED_DARK, 700);
}
function valbox(cx, top, size, value) {
  rrect(cx - size / 2, top, size, size, { fill: RED_LIGHT, fillStyle: 'hachure', hachureGap: 6, fillWeight: 1.5, stroke: RED, strokeWidth: 2.4, roughness: ROUGHNESS, bowing: 1 });
  txt(cx, top + size / 2 + 14, value, 40, GRAY, 700);
}

// ---- inhoud ----
txt(40, 70, 'Zonder', 50, RED, 700, 'start');
txt(255, 70, 'arrays:', 50, GRAY, 700, 'start');
txt(40, 430, 'Met', 50, RED, 700, 'start');
txt(170, 430, 'arrays:', 50, GRAY, 700, 'start');

const days = [['dag1', '34'], ['dag2', '45'], ['dag7', '23']];
const cols = [180, 430, 760];
days.forEach(([lbl, val], i) => {
  const cx = cols[i], boxTop = 230;
  bubble(cx, 95, 200, 90, lbl, cx - 8, boxTop);
  valbox(cx, boxTop, 96, val);
});
txt(600, 300, '. . .', 60, GRAY, 700);

rline(40, 390, W - 40, 390, { stroke: GRAY, strokeWidth: 1.6, roughness: 2.2 });

const cells = ['34', '45', '0', '34', '12', '0', '23'];
const n = cells.length, aLeft = 150, aTop = 560, cellW = 84, cellH = 96, pad = 14;
rrect(aLeft - pad, aTop - pad, n * cellW + pad * 2, cellH + pad * 2, { fill: RED_LIGHT, fillStyle: 'solid', stroke: RED_DARK, strokeWidth: 3, roughness: 1.4, bowing: 1.5 });
cells.forEach((v, i) => {
  const x = aLeft + i * cellW;
  rrect(x, aTop, cellW, cellH, { fill: '#fff', fillStyle: 'solid', stroke: GRAY, strokeWidth: 2, roughness: ROUGHNESS, bowing: 1 });
  txt(x + cellW / 2, aTop + cellH / 2 + 15, v, 40, GRAY, 700);
});
const lastCx = aLeft + (n - 0.5) * cellW;
bubble(lastCx + 30, aTop - 135, 190, 84, 'regen', lastCx, aTop - pad);

// ---- font inbedden (optioneel) ----
try {
  const woff2 = require.resolve('@fontsource/caveat/files/caveat-latin-700-normal.woff2');
  const b = fs.readFileSync(woff2).toString('base64');
  const style = document.createElementNS(SVGNS, 'style');
  style.textContent = `@font-face{font-family:'Caveat';font-weight:700;src:url(data:font/woff2;base64,${b}) format('woff2');}`;
  svg.insertBefore(style, svg.firstChild);
} catch (e) { console.warn('font niet ingebed:', e.message); }

fs.writeFileSync(path.join(__dirname, 'intro.svg'), svg.outerHTML);
console.log('intro.svg geschreven');

// ---- PNG-render (optioneel, vereist caveat ttf) ----
try {
  const { Resvg } = require('@resvg/resvg-js');
  const fonts = ['caveat-700.ttf', 'caveat-400.ttf'].map(f => path.join(__dirname, f)).filter(fs.existsSync);
  const r = new Resvg(svg.outerHTML, { font: { fontFiles: fonts, defaultFontFamily: 'Caveat', loadSystemFonts: false }, background: 'white' });
  fs.writeFileSync(path.join(__dirname, '..', 'introNEW.png'), r.render().asPng());
  console.log('introNEW.png geschreven');
} catch (e) { console.warn('PNG niet gerenderd:', e.message); }
