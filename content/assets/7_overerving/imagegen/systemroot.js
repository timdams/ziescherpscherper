const { createCanvas, C, clsbox, inhBus, inhUp, thead } = require('./over');
const c = createCanvas(2240, 1300);

// regio's
c.rect(420, 40, 1760, 560, { fill: '#f6dada', fillStyle: 'solid', stroke: '#cc7a7a', strokeWidth: 2.4, roughness: 1.05 });
c.txt(1300, 110, 'Voorbeelden van ingebouwde klassen in .NET', 40, C.GRAY, 700);
c.rect(40, 660, 1520, 600, { fill: '#fdf3da', fillStyle: 'solid', stroke: '#cbb05a', strokeWidth: 2.4, roughness: 1.05 });
// titel rechts van alle verticale lijnen (x=240, 720, 1170)
c.txt(1200, 720, 'Zelfgemaakte klassen', 30, C.GRAY, 700, 'start');

// System.Object (groen) – cx=630, bottom=250
c.rect(470, 160, 320, 90, { fill: '#3c8c40', fillStyle: 'solid', stroke: '#2e6b30', strokeWidth: 2.6, roughness: 1.05 });
c.txt(630, 215, 'System.Object', 34, '#ffffff', 700);

// .NET kinderen
clsbox(c, 850, 360, 200, 80, 'Console', 'white', 30);
clsbox(c, 1090, 360, 200, 80, 'Random', 'white', 30);
clsbox(c, 1330, 360, 180, 80, 'string', 'white', 30);
clsbox(c, 1550, 360, 320, 80, 'System.ValueType', 'white', 30);
clsbox(c, 1600, 500, 150, 70, 'int', 'white', 30);
clsbox(c, 1810, 500, 150, 70, 'float', 'white', 30);

// zelfgemaakte klassen
clsbox(c, 130, 790, 220, 70, 'Gebouw', 'white', 30);
clsbox(c, 60, 930, 190, 70, 'Huis', 'white', 30);
clsbox(c, 280, 930, 240, 70, 'Appartement', 'white', 30);
clsbox(c, 60, 1070, 190, 70, 'Villa', 'white', 30);
clsbox(c, 580, 790, 280, 70, 'Levend Wezen', 'white', 28);
clsbox(c, 540, 930, 170, 70, 'Dier', 'white', 30);
clsbox(c, 760, 930, 170, 70, 'Plant', 'white', 30);
clsbox(c, 540, 1070, 170, 70, 'Paard', 'white', 30);
clsbox(c, 760, 1070, 170, 70, 'Tulp', 'white', 30);
clsbox(c, 1020, 790, 300, 70, 'Homo Habilis', 'white', 30);
clsbox(c, 1020, 930, 300, 70, 'Homo Erectus', 'white', 30);
clsbox(c, 1020, 1070, 300, 80, ['Homo Sapiens', 'Sapiens'], 'white', 26);

// ---- verbindingen (alle met overervingspijl naar superklasse) ----

// Enkel overervingspijlpunt aan System.Object (bottom y=250, cx=630)
thead(c, 630, 250, 13);
// Hoofdstam van net onder System.Object tot aan bus 2 (y=640, tussen de regio's)
c.line(630, 272, 630, 640, { strokeWidth: 2.6 });

// Bus 1 (y=320): horizontale bus van stam naar .NET kinderen
// Uitgebreid van cx=630 tot cx System.ValueType=1710
c.line(630, 320, 1710, 320, { strokeWidth: 2.6 });
[950, 1190, 1420, 1710].forEach(cx => c.line(cx, 360, cx, 320, { strokeWidth: 2.6 }));

// System.ValueType (cx=1710, bottom=440) → int (cx=1675) + float (cx=1885)
inhBus(c, 1710, 440, 470, [[1675, 500], [1885, 500]]);

// Bus 2 (y=640): horizontale bus van stam naar zelfgemaakte rootklassen
// Stam raakt de bus bij cx=630 (tussen Gebouw cx=240 en Homo Habilis cx=1170)
c.line(240, 640, 1170, 640, { strokeWidth: 2.6 });
[240, 720, 1170].forEach(cx => c.line(cx, 790, cx, 640, { strokeWidth: 2.6 }));

// Gebouw-boom: Huis+Appartement → Gebouw (cx=240, bottom=860); Villa → Huis (cx=155, bottom=1000)
inhBus(c, 240, 860, 900, [[155, 930], [400, 930]]);
inhUp(c, 155, 1070, 1000);

// Levend Wezen-boom: Dier+Plant → Levend Wezen (cx=720, bottom=860)
inhBus(c, 720, 860, 900, [[625, 930], [845, 930]]);
inhUp(c, 625, 1070, 1000);  // Paard → Dier
inhUp(c, 845, 1070, 1000);  // Tulp → Plant

// Homo-boom (lineaire keten, pijl naar echte superklasse)
inhUp(c, 1170, 930, 860);   // Homo Erectus → Homo Habilis
inhUp(c, 1170, 1070, 1000); // Homo Sapiens Sapiens → Homo Erectus

c.save(__dirname, 'systemroot', 'NEW');
