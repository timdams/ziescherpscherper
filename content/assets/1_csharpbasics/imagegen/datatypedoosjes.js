// H2 - datatypedoosjes: de vijf datatypes die het vaakst terugkomen,
// elk als een doosje met een voorbeeldwaarde erin.
const { createCanvas, C } = require('./excal');
const c = createCanvas(1420, 910);

const BH = 170;

function doosje(x, y, w, waarde, type, uitleg, size) {
  c.box3d(x, y, w, BH, waarde, { size: size });
  c.txt(x + w / 2, y + BH + 62, type, 46, C.RED_DARK, 700);
  c.txt(x + w / 2, y + BH + 112, uitleg, 32, C.GRAY, 400);
}

doosje(150, 140, 300, '42', 'int', 'gehele getallen', 56);
doosje(550, 140, 320, '3,14', 'double', 'kommagetallen', 52);
doosje(970, 140, 280, 'true', 'bool', 'true of false', 48);

doosje(347, 570, 240, "'A'", 'char', 'een teken', 56);
doosje(687, 570, 360, '"Hallo"', 'string', 'tekst', 48);

c.save('.', 'datatypedoosjes', '');
