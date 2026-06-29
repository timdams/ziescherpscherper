const { createCanvas, stackBox } = require('./over');

const W = 1200, H = 780;
const c = createCanvas(W, H);
const { C } = c;

const x = 80, yB = 660, w = 200, d = 50;
stackBox(c, x, yB, w, [['gray', 100], ['purple', 230], ['blue', 230]], 'Villa');

const purpleBottom = yB - 100;           // 560
const purpleTop    = purpleBottom - 230; // 330
const midY         = Math.round((purpleTop + purpleBottom) / 2); // 445

// brace starts just past the 3D side panel (x + w + d)
const xOpen = x + w + d + 15;  // 345
const xTip  = xOpen + 70;      // 415

// } brace: two quadratic bezier segments
c.path(
  `M ${xOpen} ${purpleTop} Q ${xTip} ${purpleTop}, ${xTip} ${midY}` +
  ` Q ${xTip} ${purpleBottom}, ${xOpen} ${purpleBottom}`,
  { stroke: C.GRAY, strokeWidth: 3, roughness: 1.2, bowing: 0.8 }
);

// short connector from tip to text
c.line(xTip, midY, xTip + 20, midY, { strokeWidth: 2.5, roughness: 0.8 });

// label
const tx = xTip + 34;
c.txt(tx, midY - 22, 'scope van', 38, C.GRAY, 600, 'start');
c.txt(tx, midY + 30, 'private bool heeftDeurbel', 36, C.RED_DARK, 700, 'start');

c.save(__dirname, 'privscope', 'NEW');
