// H6 - recursie: BerekenSomRecursief roept zichzelf (cascade) en geeft terug
const { createCanvas, C } = require('./excal');
const { codebox } = require('./mhelpers');
const c = createCanvas(1680, 1140);

const RD = C.RED_DARK;
const code = [
  'int som = start;',
  'if(start < stop)',
  '{',
  '    start++;',
  { t: '    return som += BerekenSomRecursief(start, stop);', color: RD, weight: 700 },
  '}',
  'return som;',
];
const OPT = { titleSize: 36, codeSize: 28, lh: 1.22, pad: 24 };
const W = 560, H = 340;

// drie geneste oproepen (cascade naar rechtsonder)
codebox(c, 220, 40, W, H, 'BerekenSomRecursief', code, OPT);
c.txt(205, 60, 'start==1, stop == 3', 28, C.GRAY, 600, 'end');

codebox(c, 430, 400, W, H, 'BerekenSomRecursief', code, OPT);
c.txt(1035, 415, 'start==2, stop==3', 28, C.GRAY, 600, 'start');

codebox(c, 640, 760, W, H, 'BerekenSomRecursief', code, OPT);
c.txt(1245, 775, 'start==3, stop==3', 28, C.GRAY, 600, 'start');

// recursieve oproepen (omlaag naar volgende doos)
c.carrow(640, 290, 700, 360, 760, 400, { strokeWidth: 2.4, head: 15, roughness: 1 });
c.carrow(850, 650, 910, 720, 970, 760, { strokeWidth: 2.4, head: 15, roughness: 1 });

// returns (omhoog-links) met tussenresultaten
c.carrow(640, 1020, 360, 840, 440, 640, { strokeWidth: 2.4, head: 15, roughness: 1 });
c.txt(360, 800, '3', 34, C.GRAY, 700);
c.carrow(430, 640, 250, 470, 320, 290, { strokeWidth: 2.4, head: 15, roughness: 1 });
c.txt(225, 460, '5', 34, C.GRAY, 700);

// eindresultaat naar buiten
c.arrow(220, 300, 70, 300, { strokeWidth: 2.4, head: 15 });
c.txt(140, 280, '6', 34, C.GRAY, 700);

c.save(__dirname, 'recursie', 'NEW');
