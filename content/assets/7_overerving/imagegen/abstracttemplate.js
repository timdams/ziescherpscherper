const { createCanvas, dierBox } = require('./over');
const c = createCanvas(1960, 860);
dierBox(c, 80, 140, 780, 500, {});
dierBox(c, 1100, 140, 780, 500, { sub: 'purple', subName: 'Paard', subH: 160, ret: ['return', '"Hinnikhinnik"'], retColor: 'purple' });
c.save(__dirname, 'abstracttemplate', 'NEW');
