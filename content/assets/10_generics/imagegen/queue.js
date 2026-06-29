// queue: FIFO-wachtrij, Enqueue() achteraan in, Dequeue() vooraan uit
const { createCanvas, C } = require('./excal');
const c = createCanvas(2000, 660);

// 3D-container (top + rechterzijde), licht rood front
function container(x, y, w, h, d) {
  c.poly([[x, y], [x + d, y - d], [x + w + d, y - d], [x + w, y]], { fill: C.BOX_TOP, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2, roughness: 1.3 });
  c.poly([[x + w, y], [x + w + d, y - d], [x + w + d, y + h - d], [x + w, y + h]], { fill: C.BOX_SIDE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2, roughness: 1.3 });
  c.rect(x, y, w, h, { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED_DARK, strokeWidth: 2.6, roughness: 1.3 });
}

c.txt(420, 70, 'FIFO', 50, C.RED_DARK, 700);

const x = 380, y = 150, w = 1180, h = 340, d = 44;
container(x, y, w, h, d);
c.txt(x + w / 2, y + 60, 'Queue', 44, C.GRAY, 700);

// 4 vakjes binnenin
const n = 4, cw = 150, gap = 14, cy = y + 110, chh = 180;
const start = x + (w - (n * cw + (n - 1) * gap)) / 2;
const midY = cy + chh / 2;
for (let i = 0; i < n; i++) c.rect(start + i * (cw + gap), cy, cw, chh, { roughness: 1.5 });

// bronvakje + Enqueue() (label links van de container, boven de pijl)
c.rect(70, 300, 130, 130);
c.txt(285, 285, 'Enqueue()', 34, C.GRAY, 700);
c.arrow(205, 365, start - 12, midY, { strokeWidth: 2.4 });

// doelvakje + Dequeue() (label in de ruimte rechts van de container)
c.rect(1820, 300, 130, 130);
c.txt(1700, 285, 'Dequeue()', 34, C.GRAY, 700);
c.arrow(x + w + d, midY, 1815, 365, { strokeWidth: 2.4 });

// kantlabels uitgelijnd met de uiteinden van de queue
c.txt(x + 60, y + h + 90, 'Achterkant', 38, C.GRAY, 600);
c.txt(x + w - 60, y + h + 90, 'Voorkant', 38, C.GRAY, 600);

c.save(__dirname, 'queue');
