const { createCanvas, C } = require('./excal');
const { file } = require('./_icons');
const c = createCanvas(1580, 640);
// object met velden
c.rect(110, 180, 400, 300, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.6, roughness: 1.1 });
c.txt(310, 245, 'Student-object', 40, C.GRAY, 700);
['naam = "Barry"', 'leeftijd = 25', 'uitgeschreven = true'].forEach((t, i) => c.txt(150, 320 + i * 56, t, 32, C.GRAY, 500, 'start'));
// JSON-bestand
file(c, 1050, 170, 420, 360, null, ['{', '  "naam": "Barry",', '  "leeftijd": 25,', '  "uitgeschreven": true', '}'], 0, 36);
c.txt(1260, 150, 'student.json', 32, C.GRAY, 600);
// serialiseren -> / deserialiseren <-
c.arrow(530, 270, 1030, 270, { strokeWidth: 2.8, head: 18 });
c.txt(780, 232, 'serialiseren', 36, C.RED_DARK, 700);
c.arrow(1030, 410, 530, 410, { strokeWidth: 2.8, head: 18 });
c.txt(780, 452, 'deserialiseren', 36, C.RED_DARK, 700);
c.save(__dirname, 'serialiseren', 'NEW');
