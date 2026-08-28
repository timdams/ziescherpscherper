// H5 - volgorde in een if - else if keten: dezelfde twee tests, twee volgordes.
// Rechts slokt de brede test de strengere op, waardoor die tak dood ligt.
// Draaien vanuit de imagegen-map:  node volgordeval.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1730, 700);

// scheidingslijn tussen de twee panelen
c.line(885, 70, 885, 620, { strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });

const ROW_W = 330, ROW_H = 80;
const YS = [230, 340, 450];

// een regel uit de keten: 'hit' draait, 'dead' wordt nooit bereikt, anders gewoon
function row(cx, y, text, kind) {
  const styles = {
    hit: { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED, strokeWidth: 2.6 },
    dead: { fill: C.WHITE, fillStyle: 'solid', stroke: C.RED, strokeWidth: 2.4, strokeLineDash: [11, 9] },
    plain: { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.2 },
  };
  c.rect(cx - ROW_W / 2, y - ROW_H / 2, ROW_W, ROW_H, { roughness: 1.3, ...styles[kind] });
  c.txt(cx, y + 12, text, 34, C.GRAY, 700);
}

function panel(cx, annX, title, rows, caption) {
  const mid = (cx + annX) / 2;
  c.txt(mid, 120, title, 38, C.RED_DARK, 700);
  rows.forEach((r, i) => {
    row(cx, YS[i], r.code, r.kind);
    if (r.cell) {
      c.arrow(cx + ROW_W / 2 + 10, YS[i], annX - 148, YS[i], { stroke: C.RED, strokeWidth: 2.6, head: 15 });
      c.cell(annX - 140, YS[i] - 45, 280, 90, r.cell, { size: 34 });
    } else {
      c.txt(annX, YS[i] + 10, r.note, 28, r.noteColor || C.GRAY, 700);
    }
  });
  c.txt(mid, 565, caption, 32, C.RED_DARK, 700);
}

// ================= links: strengste test eerst =================
panel(285, 650, 'juiste volgorde', [
  { code: 'if (x > 100)', kind: 'hit', cell: '"Groter dan 100"' },
  { code: 'else if (x > 10)', kind: 'plain', note: 'niet meer getest' },
  { code: 'else', kind: 'plain', note: 'niet meer getest' },
], 'elke waarde komt in de juiste tak');

// ================= rechts: brede test eerst =================
panel(1145, 1510, 'verkeerde volgorde', [
  { code: 'if (x > 10)', kind: 'hit', cell: '"Groter dan 10"' },
  { code: 'else if (x > 100)', kind: 'dead', note: 'wordt nooit bereikt', noteColor: C.RED_DARK },
  { code: 'else', kind: 'plain', note: 'niet meer getest' },
], '"Groter dan 100" verschijnt nooit');

// ================= de waarde die we volgen =================
c.txt(885, 655, 'we volgen x = 110 door beide ketens', 30, C.GRAY, 600);

c.save('.', 'volgordeval', '');
