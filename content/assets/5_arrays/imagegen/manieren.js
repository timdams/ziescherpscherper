// Manier 1 vs manier 3: bestaat de array al of niet?
const { createCanvas, C, cellRow } = require('./arr');
const c = createCanvas(2000, 800);

function varbox(x, y, w, h) {
  c.rect(x, y, w, h, { fill: '#e2e2e2', fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.1 });
}

// scheidingslijn tussen de twee manieren
c.line(1000, 60, 1000, 750, { strokeWidth: 2.6, roughness: 1.2 });

// ---------- links: manier 1 ----------
c.txt(80, 105, 'manier 1', 52, C.RED_DARK, 700, 'start');
c.txt(80, 190, 'string[ ] myColors;', 44, C.GRAY, 600, 'start');

c.bubble(330, 250, 300, 110, 'myColors', 330, 428, 44);
varbox(180, 430, 300, 140);
c.arrow(490, 500, 655, 500, { strokeWidth: 2.6, head: 16, strokeLineDash: [14, 10], disableMultiStroke: true });

c.rect(675, 430, 265, 140, { fill: 'none', stroke: C.RED, strokeWidth: 2.6, strokeLineDash: [16, 12], roughness: 1, disableMultiStroke: true });
c.lines(807, 487, ['nog geen', 'array'], 42, C.RED_DARK, 700, 'middle', 1.15);

// ---------- rechts: manier 3 ----------
c.txt(1080, 105, 'manier 3', 52, C.RED_DARK, 700, 'start');
c.txt(1080, 190, 'string[ ] myColors = new string[5];', 40, C.GRAY, 600, 'start');

c.bubble(1250, 250, 300, 110, 'myColors', 1250, 428, 44);
varbox(1100, 430, 300, 140);
c.arrow(1410, 500, 1498, 500, { strokeWidth: 2.6, head: 16 });

cellRow(c, 1510, 430, 82, 140, ['', '', '', '', '']);

c.arrow(1510, 630, 1920, 630, { strokeWidth: 3, head: 20 });
c.arrow(1920, 630, 1510, 630, { strokeWidth: 3, head: 20 });
c.txt(1715, 700, '5 elementen', 44, C.GRAY, 600);

c.save('.', 'manieren', '');
