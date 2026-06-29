// H6 - timsoft: Main roept (2x) de methode ToonTitel, die naar het scherm schrijft
const { createCanvas, C } = require('./excal');
const { codebox, monitor } = require('./mhelpers');
const c = createCanvas(1700, 950);

const RD = C.RED_DARK;
codebox(c, 60, 150, 1000, 540, 'Main', [
  { t: 'ToonTitel();', color: RD, weight: 700 },
  'Console.WriteLine("Welkom!");',
  'Console.WriteLine("Geef je naam aub");',
  '//....',
  'Console.WriteLine("Vaarwel");',
  { t: 'ToonTitel();', color: RD, weight: 700 },
], { titleSize: 54, codeSize: 46, lh: 1.45 });

codebox(c, 820, 720, 380, 130, 'ToonTitel', [], { titleSize: 50 });
monitor(c, 1500, 700, 320, 200, 'Timsoft XP', 40);

c.carrow(250, 282, 740, 150, 995, 712, { strokeWidth: 2.4, head: 16, roughness: 1 });
c.carrow(250, 615, 770, 540, 1025, 712, { strokeWidth: 2.4, head: 16, roughness: 1 });
c.arrow(1235, 785, 1335, 785, { strokeWidth: 2.8, head: 18 });

c.save(__dirname, 'timsoft', 'NEW');
