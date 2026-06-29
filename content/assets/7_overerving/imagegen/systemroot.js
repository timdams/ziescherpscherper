const { createCanvas, C, clsbox, treeBus } = require('./over');
const c = createCanvas(2240, 1300);

// regio's
c.rect(420, 40, 1760, 560, { fill: '#f6dada', fillStyle: 'solid', stroke: '#cc7a7a', strokeWidth: 2.4, roughness: 1.05 });
c.txt(1300, 110, 'Voorbeelden van ingebouwde klassen in .NET', 40, C.GRAY, 700);
c.rect(40, 660, 1520, 600, { fill: '#fdf3da', fillStyle: 'solid', stroke: '#cbb05a', strokeWidth: 2.4, roughness: 1.05 });
c.txt(800, 730, 'Zelfgemaakte klassen', 40, C.GRAY, 700);

// System.Object (groen)
c.rect(470, 160, 320, 90, { fill: '#3c8c40', fillStyle: 'solid', stroke: '#2e6b30', strokeWidth: 2.6, roughness: 1.05 });
c.txt(630, 215, 'System.Object', 34, '#ffffff', 700);

// .NET kinderen
clsbox(c, 850, 360, 200, 80, 'Console', 'white', 30);
clsbox(c, 1090, 360, 200, 80, 'Random', 'white', 30);
clsbox(c, 1330, 360, 180, 80, 'string', 'white', 30);
clsbox(c, 1550, 360, 320, 80, 'System.ValueType', 'white', 30);
clsbox(c, 1600, 500, 150, 70, 'int', 'white', 30);
clsbox(c, 1810, 500, 150, 70, 'float', 'white', 30);
treeBus(c, 250, 630, 320, [[950, 360], [1190, 360], [1420, 360], [1710, 360]]);
treeBus(c, 440, 1710, 470, [[1675, 500], [1885, 500]]);

// zelfgemaakte: 3 boompjes (witte vakjes)
clsbox(c, 130, 790, 220, 70, 'Gebouw', 'white', 30);
clsbox(c, 60, 930, 190, 70, 'Huis', 'white', 30);
clsbox(c, 280, 930, 240, 70, 'Appartement', 'white', 30);
clsbox(c, 60, 1070, 190, 70, 'Villa', 'white', 30);
treeBus(c, 860, 240, 900, [[155, 930], [400, 930]]);
treeBus(c, 1000, 155, 1000, [[155, 1070]]);

clsbox(c, 580, 790, 280, 70, 'Levend Wezen', 'white', 28);
clsbox(c, 540, 930, 170, 70, 'Dier', 'white', 30);
clsbox(c, 760, 930, 170, 70, 'Plant', 'white', 30);
clsbox(c, 540, 1070, 170, 70, 'Paard', 'white', 30);
clsbox(c, 760, 1070, 170, 70, 'Tulp', 'white', 30);
treeBus(c, 860, 720, 900, [[625, 930], [845, 930]]);
treeBus(c, 1000, 625, 1000, [[625, 1070]]);
treeBus(c, 1000, 845, 1000, [[845, 1070]]);

clsbox(c, 1020, 790, 300, 70, 'Homo Habilis', 'white', 30);
clsbox(c, 1020, 930, 300, 70, 'Homo Erectus', 'white', 30);
clsbox(c, 1020, 1070, 300, 80, ['Homo Sapiens', 'Sapiens'], 'white', 26);
c.line(1170, 1000, 1170, 930, { strokeWidth: 2.4 });
c.line(1170, 1140, 1170, 1070, { strokeWidth: 2.4 });

// roots -> System.Object
treeBus(c, 250, 630, 605, [[240, 790], [720, 790], [1170, 790]]);

c.save(__dirname, 'systemroot', 'NEW');
