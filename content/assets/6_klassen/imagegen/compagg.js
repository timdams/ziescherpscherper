const { createCanvas, classbox, conn } = require('./uml');
const c = createCanvas(1180, 700);
classbox(c, 460, 20, 260, 90, 'Huis');
classbox(c, 320, 210, 300, 95, 'Slaapkamer');
classbox(c, 820, 210, 300, 95, 'Badkamer');
classbox(c, 330, 410, 300, 95, 'Computer');
classbox(c, 20, 580, 300, 95, 'Harde Schijf');
classbox(c, 350, 580, 300, 95, 'Processor');
classbox(c, 690, 580, 300, 95, 'Geluidskaart');
// compositie (gevulde ruit) bij Huis
conn(c, 490, 110, 470, 210, true);
conn(c, 690, 110, 970, 210, true);
// aggregatie (open ruit)
conn(c, 470, 305, 480, 410, false);   // Slaapkamer <>- Computer
conn(c, 330, 457, 170, 580, false);   // Computer <>- Harde Schijf
conn(c, 480, 505, 500, 580, false);   // Computer <>- Processor
conn(c, 630, 457, 840, 580, false);   // Computer <>- Geluidskaart
c.save(__dirname, 'compagg', 'NEW');
