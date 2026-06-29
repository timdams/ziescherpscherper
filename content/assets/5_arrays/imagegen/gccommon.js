const { createCanvas, C, region, REGION, trashcan, garbage } = require('./arr');
const GREEN = '#3a7d34', HEAPC = '#b9881f', PURPLE = '#e3d4ea';

function refbox(c, x, y, w, h, label) {
  c.rect(x, y, w, h, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.1 });
  c.txt(x + w / 2, y + h / 2 + 12, label || 'referentie', 34, C.GRAY, 700);
}

function scene(opts = {}) {
  const c = createCanvas(2360, 1480);
  region(c, 40, 40, 720, 1400, REGION.STACK, 'STACK', GREEN);
  region(c, 820, 40, 1500, 1400, REGION.HEAP, 'HEAP', HEAPC);
  c.line(790, 60, 790, 1420, { strokeWidth: 3, strokeLineDash: [16, 13], roughness: 0.5, disableMultiStroke: true });

  // stack-kolom met 4 slots
  c.rect(150, 250, 500, 1120, { fill: PURPLE, fillStyle: 'solid', stroke: '#9b7bb0', strokeWidth: 2.4, roughness: 1.05 });
  for (let i = 1; i < 4; i++) c.line(150, 250 + i * 280, 650, 250 + i * 280, { stroke: '#9b7bb0', strokeWidth: 2, roughness: 1 });
  refbox(c, 190, 300, 320, 95);
  c.txt(360, 470, '. . .', 40, C.GRAY, 700);
  c.txt(360, 740, '. . .', 40, C.GRAY, 700);
  refbox(c, 190, 850, 320, 95);
  c.txt(360, 1020, '. . .', 40, C.GRAY, 700);
  c.txt(360, 1300, '. . .', 40, C.GRAY, 700);

  // heap-objecten
  c.box3d(920, 250, 580, 270, '', { depth: 44 });               // bigbox (gerefereerd)
  c.box3d(1110, 1090, 910, 210, '', { depth: 44 });             // bottombox (gerefereerd)
  refbox(c, 1210, 1140, 320, 95);                               // referentie in bottombox
  c.box3d(1960, 250, 230, 230, '', { depth: 44 });              // cube rechtsboven (gerefereerd)

  // twee niet-gerefereerde cubes (garbage)
  if (!opts.removed) {
    c.box3d(920, 650, 210, 210, '', { depth: 44 });
    c.box3d(1270, 650, 250, 210, '', { depth: 44 });
    if (opts.garb) {
      garbage(c, 920, 650, 210, 210);
      garbage(c, 1270, 650, 250, 210);
      trashcan(c, 1025, 600, 1.15);
      trashcan(c, 1395, 600, 1.15);
    }
  }

  // pijlen
  c.arrow(515, 347, 912, 347, { strokeWidth: 2.6, head: 16 });                 // slot0 -> bigbox
  c.line(515, 897, 860, 897, { strokeWidth: 2.6 });                            // slot2 -> bottombox
  c.line(860, 897, 860, 1175, { strokeWidth: 2.6 });
  c.arrow(860, 1175, 1105, 1175, { strokeWidth: 2.6, head: 16 });
  c.line(1530, 1187, 2075, 1187, { strokeWidth: 2.6 });                        // referentie -> cube rechtsboven
  c.arrow(2075, 1187, 2075, 490, { strokeWidth: 2.6, head: 16 });
  return c;
}
module.exports = { scene };
