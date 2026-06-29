const { createCanvas, classbox, conn } = require('./uml');
const c = createCanvas(900, 440);
classbox(c, 300, 30, 300, 100, 'Huis');
classbox(c, 20, 300, 300, 100, 'Slaapkamer');
classbox(c, 560, 300, 300, 100, 'Badkamer');
conn(c, 345, 130, 170, 300, true);   // Huis <>- Slaapkamer (compositie)
conn(c, 555, 130, 710, 300, true);   // Huis <>- Badkamer
c.save(__dirname, 'compuml', 'NEW');
