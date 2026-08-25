// H3 - dezelfde regel zonder en met $: zonder blijft {naam} letterlijk staan.
// Draaien vanuit de imagegen-map:  node metzonderdollar.js
const { createCanvas, C } = require('./excal');
const { monitor } = require('./mhelpers');
const { ring } = require('./ehelpers');

const c = createCanvas(1640, 620);

c.txtSegs(820, 62, [
  { t: 'string naam = ', color: C.GRAY, weight: 500 },
  { t: '"Finkelstein"', color: C.RED_DARK, weight: 700 },
  { t: ';', color: C.GRAY, weight: 500 },
], 34, 'middle');

const SZ = 33, CODE_Y = 218, MON_Y = 300;

function kolom(cx, kop, metDollar, uitvoer) {
  c.txt(cx, 150, kop, 44, C.RED_DARK, 700);
  const xs = cx - 45;                       // hier staat de $ (of niets)
  c.txt(xs - (metDollar ? 16 : 2), CODE_Y, 'Console.WriteLine(', SZ, C.GRAY, 500, 'end');
  let rest = xs;
  if (metDollar) {
    c.txt(xs + 10, CODE_Y, '$', SZ + 4, C.RED, 700);
    ring(c, xs + 10, CODE_Y - 12, 40, 58);
    rest = xs + 38;
  }
  c.txt(rest, CODE_Y, '"Hallo {naam}, welkom!");', SZ, C.GRAY, 500, 'start');
  c.arrow(cx, CODE_Y + 26, cx, MON_Y - 12, { stroke: C.RED, strokeWidth: 2.4, head: 15 });
  monitor(c, cx, MON_Y, 580, 170, uitvoer, 40);
}

kolom(410, 'zonder $', false, 'Hallo {naam}, welkom!');
kolom(1230, 'met $', true, 'Hallo Finkelstein, welkom!');

c.line(820, 110, 820, 560, { stroke: C.GRAY, strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });

c.save('.', 'metzonderdollar', '');
