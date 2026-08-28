// H6 - dezelfde loop (even getallen van 0 tot en met 10), links met een while en
// rechts met een for. De drie stukken (startsituatie, conditie, aanpassing) staan
// bij de while op drie plaatsen en bij de for naast elkaar in de kop. De bolletjes
// koppelen ze aan elkaar.
// Draaien vanuit de imagegen-map:  node whilevsfor.js
const { createCanvas, C } = require('./excal');
const { badge } = require('./ehelpers');

const c = createCanvas(1400, 700);

const SIZE = 32;              // codegrootte
const CW = SIZE * 0.42;       // geschatte tekenbreedte
const PAD = 10;               // ruimte tussen tekst en accentkader
const LBL = 26;               // labels bij de bolletjes
const w = n => n * CW;        // breedte van n tekens

// accentkader rond een stuk code op (x, baseline y) met n tekens breed
function vak(x, y, n) {
  c.rect(x - PAD, y - SIZE * 1.23, w(n) + 2 * PAD, SIZE * 1.67,
    { fill: C.RED_LIGHT, fillStyle: 'solid', stroke: C.RED, strokeWidth: 2.4, roughness: 1.3 });
}
const code = (x, y, t) => c.txt(x, y, t, SIZE, C.GRAY, 600, 'start');
// stippellijntje van een kader naar zijn bolletje
const leider = (x1, y, x2) => c.line(x1, y, x2, y,
  { stroke: C.RED, strokeWidth: 1.8, strokeLineDash: [7, 7], roughness: 1 });

// scheidingslijn tussen de twee panelen
c.line(740, 150, 740, 540, { strokeWidth: 2, strokeLineDash: [12, 10], roughness: 1.2 });

// ================= links: de while =================
c.txt(420, 110, 'met een while', 38, C.RED_DARK, 700);

const LX = 150;
vak(LX, 180, 10);                       // int i = 0;
code(LX, 180, 'int i = 0;');
leider(LX + w(10) + PAD, 169, 494);

code(LX, 234, 'while (');
vak(244, 234, 6);                       // i < 11
code(244, 234, 'i < 11');
code(352, 234, ')');
leider(378, 223, 494);                  // start na het sluitende haakje

code(LX, 288, '{');
code(LX + 34, 342, 'Console.WriteLine(i);');
vak(LX + 34, 396, 10);                  // i = i + 2;
code(LX + 34, 396, 'i = i + 2;');
leider(LX + 34 + w(10) + PAD, 385, 494);
code(LX, 450, '}');

badge(c, 520, 169, 1, 46);
c.txt(555, 180, 'startsituatie', LBL, C.RED_DARK, 700, 'start');
badge(c, 520, 223, 2, 46);
c.txt(555, 234, 'conditie', LBL, C.RED_DARK, 700, 'start');
badge(c, 520, 385, 3, 46);
c.txt(555, 396, 'aanpassing', LBL, C.RED_DARK, 700, 'start');

c.txt(420, 585, 'de drie stukken staan uit elkaar', 30, C.GRAY, 600);
c.txt(420, 635, 'je leest het hele blok om te tellen', 30, C.RED_DARK, 700);

// ================= rechts: de for =================
c.txt(1015, 110, 'met een for', 38, C.RED_DARK, 700);

const RX = 780, HY = 250;
code(RX, HY, 'for (');
vak(867, HY, 10);                       // int i = 0;
code(867, HY, 'int i = 0;');
vak(1035, HY, 7);                       // i < 11;
code(1035, HY, 'i < 11;');
vak(1163, HY, 6);                       // i += 2
code(1163, HY, 'i += 2');
code(1274, HY, ')');

badge(c, 934, 178, 1, 46);
badge(c, 1082, 178, 2, 46);
badge(c, 1203, 178, 3, 46);

c.txt(934, 296, 'setup', LBL, C.RED_DARK, 700);
c.txt(1082, 296, 'finish test', LBL, C.RED_DARK, 700);
c.txt(1203, 296, 'update', LBL, C.RED_DARK, 700);

code(RX, 356, '{');
code(RX + 34, 410, 'Console.WriteLine(i);');
code(RX, 464, '}');

c.txt(1015, 585, 'dezelfde drie stukken staan in de kop', 30, C.GRAY, 600);
c.txt(1015, 635, 'het codeblok doet enkel nog het werk', 30, C.RED_DARK, 700);

c.save('.', 'whilevsfor', '');
