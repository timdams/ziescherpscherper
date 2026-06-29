const { createCanvas, clsbox, inhUp, inhBus } = require('./over');
const c = createCanvas(900, 740);
clsbox(c, 290, 30, 320, 110, 'Gebouw', 'gray', 40);
clsbox(c, 20, 250, 350, 180, 'Huis', 'purple', 42);
clsbox(c, 530, 250, 350, 180, 'Appartement', 'green', 40);
clsbox(c, 20, 540, 350, 160, 'Villa', 'blue', 42);
inhBus(c, 450, 140, 195, [[195, 250], [705, 250]]);
inhUp(c, 195, 540, 430);
c.save(__dirname, 'klasgebouwen', 'NEW');
