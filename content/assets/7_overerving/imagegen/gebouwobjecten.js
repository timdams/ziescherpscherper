const { createCanvas, stackBox } = require('./over');
const c = createCanvas(1500, 700);
const yB = 580;
stackBox(c, 60, yB, 200, [['gray', 100]], 'Gebouw');
stackBox(c, 440, yB, 200, [['gray', 100], ['purple', 230]], 'Huis');
stackBox(c, 820, yB, 200, [['gray', 100], ['green', 230]], 'Appartement');
stackBox(c, 1180, yB, 200, [['gray', 100], ['purple', 230], ['blue', 230]], 'Villa');
c.save(__dirname, 'gebouwobjecten', 'NEW');
