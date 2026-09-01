// H7 - vraagint: dezelfde Main, eerst met herhaalde lijnen en daarna met een eigen methode
// Draaien vanuit de imagegen-map:  node vraagint.js
// Let op: Caveat heeft geen [ en ] glyph, vandaar Main() zonder string[] args.
const { createCanvas, C } = require('./excal');
const { codebox } = require('./mhelpers');

const c = createCanvas(2120, 910);
const RD = C.RED_DARK;

const LX = 60, RX = 1100, BW = 960, CS = 28;

// ---------- links: zonder methode ----------
c.txt(LX + BW / 2, 125, 'zonder methode', 38, RD, 700);
codebox(c, LX, 200, BW, 350, null, [
  'static void Main()',
  '{',
  { t: 'Console.WriteLine("Geef leeftijd");', indent: 30 },
  { t: 'int leeftijd = int.Parse(Console.ReadLine());', indent: 30 },
  { t: 'Console.WriteLine("Geef gewicht");', indent: 30 },
  { t: 'int gewicht = int.Parse(Console.ReadLine());', indent: 30 },
  { t: 'Console.WriteLine("Geef lengte");', indent: 30 },
  { t: 'int lengte = int.Parse(Console.ReadLine());', indent: 30 },
  '}',
], { codeSize: CS, pad: 30 });
c.txt(LX + BW / 2, 612, 'dezelfde twee lijnen, drie keer overgetypt', 34, RD, 700);

// ---------- rechts: met methode ----------
c.txt(RX + BW / 2, 125, 'met methode', 38, RD, 700);
codebox(c, RX, 200, BW, 260, null, [
  'static void Main()',
  '{',
  { t: 'int leeftijd = VraagInt("Geef leeftijd");', indent: 30 },
  { t: 'int gewicht = VraagInt("Geef gewicht");', indent: 30 },
  { t: 'int lengte = VraagInt("Geef lengte");', indent: 30 },
  '}',
], { codeSize: CS, pad: 30 });

c.arrow(RX + 480, 475, RX + 480, 545, { stroke: C.RED, strokeWidth: 2.6, head: 16 });

codebox(c, RX, 585, BW, 230, null, [
  'static int VraagInt(string zin)',
  '{',
  { t: 'Console.WriteLine(zin);', indent: 30 },
  { t: 'return int.Parse(Console.ReadLine());', indent: 30 },
  '}',
], { codeSize: CS, pad: 30 });

c.txt(RX + BW / 2, 872, 'één keer schrijven, drie keer gebruiken', 34, RD, 700);

c.save(__dirname, 'vraagint', '');
