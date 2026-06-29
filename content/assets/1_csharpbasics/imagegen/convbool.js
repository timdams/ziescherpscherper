// H3 - convbool: bool <-> alle andere datatypes via Convert.To
const { createCanvas, C } = require('./excal');
const c = createCanvas(900, 600);

// bovenste box: alle andere datatypes (gestippeld)
const bx = 270, bw = 360, by = 40, bh = 120, bcx = bx + bw / 2;
c.rect(bx, by, bw, bh, { fill: 'none', stroke: C.GRAY, strokeWidth: 2.2, strokeLineDash: [11, 9], roughness: 1.4 });
c.lines(bcx, by + bh / 2 - 14, ['Alle andere', 'datatypes'], 38, C.GRAY, 600, 'middle', 1.05);

// onderaan: bool (accentvakje)
const boolY = 470, boolW = 150, boolH = 78;
c.cell(bcx - boolW / 2, boolY, boolW, boolH, 'bool', { size: 40 });

// twee verticale pijlen tussen box en bool
const aTop = by + bh + 12, aBot = boolY - 12;
c.arrow(400, aBot, 400, aTop, { strokeWidth: 2.8, head: 18 });   // omhoog: bool -> andere
c.arrow(500, aTop, 500, aBot, { strokeWidth: 2.8, head: 18 });   // omlaag: andere -> bool

// labels naast de pijlen (geen overlap met de lijnen)
c.txt(372, 320, 'Convert.ToX()', 34, C.GRAY, 600, 'end');
c.txt(528, 320, 'Convert.ToBoolean()', 34, C.GRAY, 600, 'start');

c.save('.', 'convbool', 'NEW');
