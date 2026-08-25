// H3 - dezelfde regel code op drie pc's: Environment.UserName geeft op elke machine iets anders.
// Draaien vanuit de imagegen-map:  node driepcs.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1800, 560);

// ---------- de ene regel code, bovenaan ----------
c.txtSegs(900, 75, [
  { t: 'Console.WriteLine($"Hallo {', color: C.GRAY, weight: 500 },
  { t: 'Environment.UserName', color: C.RED_DARK, weight: 700 },
  { t: '}!");', color: C.GRAY, weight: 500 },
], 38, 'middle');

// ---------- laptop ----------
const SCR_W = 470, SCR_H = 170, SCR_Y = 265;
function laptop(cx, uitvoer, pcnaam) {
  const x = cx - SCR_W / 2;
  // scherm
  c.rect(x, SCR_Y, SCR_W, SCR_H, { fill: C.WHITE, fillStyle: 'solid', strokeWidth: 2.8, roughness: 1.1 });
  c.rect(x + 16, SCR_Y + 16, SCR_W - 32, SCR_H - 32, { fill: C.OFFWHITE, fillStyle: 'solid', strokeWidth: 1.6, roughness: 1.2 });
  c.txt(cx, SCR_Y + SCR_H / 2 + 40 * 0.34, uitvoer, 40, C.GRAY, 700);
  // toetsenbordgedeelte
  const sb = SCR_Y + SCR_H;
  c.poly([[x + 4, sb], [x + SCR_W - 4, sb], [x + SCR_W + 40, sb + 38], [x - 40, sb + 38]],
    { fill: C.BOX_SIDE, fillStyle: 'solid', strokeWidth: 2.4, roughness: 1.2 });
  // naam van de pc
  c.txt(cx, sb + 38 + 48, pcnaam, 30, C.RED_DARK, 700);
}

const CX = [330, 900, 1470];
laptop(CX[0], 'Hallo Tim!', 'LAPTOP-TIM');
laptop(CX[1], 'Hallo Sarah!', 'PC-SARAH');
laptop(CX[2], 'Hallo student42!', 'AP-LOKAAL-12');

// ---------- pijlen: dezelfde code naar elke pc ----------
const A = { stroke: C.RED, strokeWidth: 2.4, head: 15 };
c.carrow(860, 108, 500, 125, CX[0] + 10, SCR_Y - 14, A);
c.arrow(900, 108, 900, SCR_Y - 14, A);
c.carrow(940, 108, 1300, 125, CX[2] - 10, SCR_Y - 14, A);

c.save('.', 'driepcs', '');
