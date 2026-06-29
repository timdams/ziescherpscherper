const { createCanvas, clsbox, inhUp } = require('./over');
const c = createCanvas(460, 740);
clsbox(c, 40, 30, 380, 150, 'Homo Habilis', 'blue', 42);
clsbox(c, 40, 290, 380, 160, 'Homo Erectus', 'orange', 42);
clsbox(c, 40, 560, 380, 160, ['Homo Sapiens', 'Sapiens'], 'white', 40);
inhUp(c, 230, 290, 180);
inhUp(c, 230, 560, 450);
c.save(__dirname, 'homo', 'NEW');
