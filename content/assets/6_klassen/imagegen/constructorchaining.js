// H10 - this()-delegatie: alle constructors leiden naar de hoofdconstructor
const { createCanvas, C } = require('./excal');
const { codebox } = require('./mhelpers');
const c = createCanvas(1820, 820);
const RD = C.RED_DARK;
// twee "doorgeef"-constructors links
codebox(c, 80, 120, 640, 190, null, [
  'public Microfoon()',
  { t: '    : this("Onbekend", true)', color: RD, weight: 700 },
  '{ }',
], { codeSize: 32, lh: 1.35, pad: 30 });
codebox(c, 80, 430, 640, 190, null, [
  'public Microfoon(string merk)',
  { t: '    : this(merk, false)', color: RD, weight: 700 },
  '{ }',
], { codeSize: 32, lh: 1.35, pad: 30 });
// de hoofdconstructor rechts
codebox(c, 1060, 230, 700, 360, 'de hoofdconstructor', [
  'public Microfoon(string merk,',
  '       bool isUitverkocht)',
  '{',
  '    Merk = merk;',
  '    IsUitverkocht = isUitverkocht;',
  '}',
], { titleSize: 40, codeSize: 32, lh: 1.3, pad: 30 });
// this()-pijlen naar de hoofdconstructor
c.carrow(720, 215, 900, 300, 1052, 360, { strokeWidth: 2.6, head: 16, roughness: 1 });
c.carrow(720, 520, 900, 470, 1052, 430, { strokeWidth: 2.6, head: 16, roughness: 1 });
c.txt(880, 250, 'this(...)', 32, RD, 700);
c.txt(880, 540, 'this(...)', 32, RD, 700);
c.save(__dirname, 'constructorchaining', 'NEW');
