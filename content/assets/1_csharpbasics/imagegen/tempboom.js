// H4 converteren - expressieboom van (tempGisteren + tempVandaag) / 2 met
// 20 en 25: links zonder cast (elk tussenresultaat int, dus 22.0), rechts met
// (double) op de operanden (22.5). Elk tussenresultaat draagt zijn type.
// Draaien vanuit de imagegen-map:  node tempboom.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1400, 880);
const L = { stroke: C.GRAY, strokeWidth: 2.2 };
const A = { stroke: C.GRAY, strokeWidth: 2.2, head: 14 };
const CAST = { stroke: C.RED, strokeWidth: 2.4, head: 13 };

const BW = 110, BH = 60;           // waardebox
const Y1 = 80, Y1B = 235, Y2 = 440, Y3 = 640, YF = 770;   // bovenkanten van de rijen
const OP1 = 390, OP2 = 590;        // middelpunten van de operator-bolletjes

// waardebox met het type eronder
function val(cx, top, v, type, o = {}) {
  const w = o.w || BW;
  c.rect(cx - w / 2, top, w, BH, { strokeWidth: 2.2 });
  c.txt(cx, top + BH / 2 + 14, v, 40, C.GRAY, 700);
  c.txt(cx, top + BH + 30, type, 26, o.typeColor || C.GRAY, 500);
}
function op(cx, cy, s, label) {
  c.circle(cx, cy, 52, { strokeWidth: 2.2 });
  c.txt(cx, cy + 15, s, 44, C.GRAY, 700);
  c.txt(cx + 38, cy + 32, label, 26, C.RED_DARK, 700, 'start');
}
// lijn van een punt naar de rand van een bolletje
function toOp(x1, y1, cx, cy) {
  const a = Math.atan2(cy - y1, cx - x1);
  c.line(x1, y1, cx - 27 * Math.cos(a), cy - 27 * Math.sin(a), L);
}

function paneel(ox, code, cast) {
  const l1 = ox + 170, l2 = ox + 350, l3 = ox + 520, o1 = ox + 260, o2 = ox + 390;
  c.txt(ox + 340, 48, code, 30, C.GRAY, 700);

  val(l1, Y1, '20', 'int');
  val(l2, Y1, '25', 'int');
  let from = Y1 + BH + 40;              // onderkant van het typelabel
  if (cast) {
    [l1, l2].forEach((x, i) => {
      c.arrow(x, from, x, Y1B - 8, CAST);
      c.txt(x + 14, from + 30, '(double)', 26, C.RED_DARK, 700, 'start');
      val(x, Y1B, i === 0 ? '20.0' : '25.0', 'double', { typeColor: C.RED_DARK });
    });
    from = Y1B + BH + 40;
  }
  toOp(l1, from, o1, OP1);
  toOp(l2, from, o1, OP1);
  op(o1, OP1, '+', cast ? 'double + int' : 'int + int');
  c.line(o1, OP1 + 27, o1, Y2 - 4, L);

  val(o1, Y2, cast ? '45.0' : '45', cast ? 'double' : 'int', { typeColor: cast ? C.RED_DARK : C.GRAY });
  val(l3, Y2, '2', 'int');
  toOp(o1, Y2 + BH + 40, o2, OP2);
  toOp(l3, Y2 + BH + 40, o2, OP2);
  op(o2, OP2, '/', cast ? 'double / int' : 'int / int');
  c.line(o2, OP2 + 27, o2, Y3 - 4, L);

  val(o2, Y3, cast ? '22.5' : '22', cast ? 'double' : 'int', { typeColor: cast ? C.RED_DARK : C.GRAY });
  c.arrow(o2, Y3 + BH + 40, o2, YF - 8, A);
  c.cell(ox + 110, YF, 460, 70, cast ? 'double tempGemiddeld = 22.5' : 'double tempGemiddeld = 22.0', { size: 34 });
}

paneel(0, '(tempGisteren + tempVandaag) / 2', false);
c.line(700, 30, 700, 860, { stroke: C.GRAY, strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });
paneel(720, '((double)tempGisteren + (double)tempVandaag) / 2', true);

c.save('.', 'tempboom', '');
