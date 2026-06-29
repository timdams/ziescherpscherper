// H6 - mmethods: SchrijfNaam roept SchrijfT, SchrijfI, SchrijfM (elk naar het scherm)
const { createCanvas, C } = require('./excal');
const { codebox, monitor } = require('./mhelpers');
const c = createCanvas(2020, 1180);

const RD = C.RED_DARK;
codebox(c, 40, 300, 620, 180, null, [{ t: 'SchrijfNaam();', color: RD, weight: 700 }], { codeSize: 48, pad: 36 });

codebox(c, 760, 80, 520, 180, 'SchrijfNaam', [], { titleSize: 58 });
c.carrow(380, 360, 600, 190, 752, 180, { strokeWidth: 2.4, head: 16, roughness: 1 });

c.line(1020, 260, 1000, 300, { strokeWidth: 2.4 });
c.line(1000, 300, 1000, 965, { strokeWidth: 2.4 });

function methode(yTop, naam, letter) {
  codebox(c, 1080, yTop, 460, 170, naam, [], { titleSize: 54 });
  const my = yTop + 85;
  c.arrow(1000, my, 1075, my, { strokeWidth: 2.4, head: 15 });
  monitor(c, 1820, yTop - 25, 300, 200, letter, 66);
  c.arrow(1575, my, 1660, my, { strokeWidth: 2.6, head: 16 });
}
methode(360, 'SchrijfT', 'T');
methode(620, 'SchrijfI', 'I');
methode(880, 'SchrijfM', 'M');

c.save(__dirname, 'mmethods', 'NEW');
