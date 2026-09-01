// Helpers voor de parameter-afbeeldingen van H7: een methode-aanroep opgebouwd
// uit losse stukken, zodat we vanaf een parameter een pijl kunnen laten vertrekken.
const { C } = require('./excal');

// Breedte-schatting voor Caveat: smalle tekens tellen minder mee dan brede.
const NARROW = `iljt.,;:'"()[]{}| !`;
const WIDE = 'mwMW';
function textWidth(s, size) {
  let w = 0;
  for (const ch of s) {
    if (NARROW.includes(ch)) w += 0.19;
    else if (WIDE.includes(ch)) w += 0.62;
    else if (ch >= 'A' && ch <= 'Z') w += 0.48;
    else w += 0.42;
  }
  return w * size;
}

// Zet een reeks stukken tekst na elkaar neer, gecentreerd rond cx.
// parts: [{ t, color, weight, key }]. Stukken met een key krijgen hun
// x-positie terug, zodat er een pijl uit kan vertrekken.
function callTokens(c, cx, y, parts, size = 46) {
  const total = parts.reduce((a, p) => a + textWidth(p.t, size), 0);
  let x = cx - total / 2;
  const pos = {};
  parts.forEach(p => {
    const w = textWidth(p.t, size);
    c.txt(x, y, p.t, size, p.color || C.GRAY, p.weight || 700, 'start');
    if (p.key) pos[p.key] = { cx: x + w / 2, left: x, right: x + w };
    x += w;
  });
  return pos;
}

module.exports = { callTokens, textWidth };
