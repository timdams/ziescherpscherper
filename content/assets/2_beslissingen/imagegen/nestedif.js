// H4 - nestedif: geneste if/else (temperatuur + dokter van wacht)
// Pijl komt van boven binnen (zoals in de klassieke nested-if flowchart).
const { createCanvas, C } = require('./excal');
const { proc, decision } = require('./flow');
const c = createCanvas(1180, 830);

// pijl van boven binnen
c.arrow(400, 5, 400, 50, { strokeWidth: 2.6, head: 16 });

// buitenste beslissing
decision(c, 400, 130, 380, 160, ['huidigeTemperatuur', '< MAX_TEMP'], 30);

// --- true (links): temperatuur normaal ---
c.line(210, 130, 170, 130, { strokeWidth: 2.6 });
c.arrow(170, 130, 170, 322, { strokeWidth: 2.6, head: 15 });
c.txt(152, 235, 'true', 30, C.GRAY, 600, 'end');
proc(c, 170, 360, 300, 72, 'Temperatuur normaal');
c.line(170, 396, 170, 745, { strokeWidth: 2.6 });

// --- false (rechts): temperatuur te hoog ---
c.line(590, 130, 740, 130, { strokeWidth: 2.6 });
c.arrow(740, 130, 740, 211, { strokeWidth: 2.6, head: 15 });
c.txt(655, 112, 'false', 30, C.GRAY, 600);
proc(c, 740, 250, 320, 72, 'Temperatuur te hoog!');
c.arrow(740, 286, 740, 332, { strokeWidth: 2.6, head: 15 });

// binnenste beslissing
decision(c, 740, 410, 340, 150, ['dokterVanWacht', '== ""'], 30);

// binnenste true (links): geen dokter
c.line(570, 410, 560, 410, { strokeWidth: 2.6 });
c.arrow(560, 410, 560, 542, { strokeWidth: 2.6, head: 15 });
c.txt(525, 470, 'true', 30, C.GRAY, 600, 'end');
proc(c, 560, 585, 330, 84, ['Oei oei! Geen', 'dokter van wacht!'], 28);

// binnenste false (rechts): dokter gecontacteerd
c.line(910, 410, 960, 410, { strokeWidth: 2.6 });
c.arrow(960, 410, 960, 542, { strokeWidth: 2.6, head: 15 });
c.txt(1000, 470, 'false', 30, C.GRAY, 600, 'start');
proc(c, 960, 585, 330, 84, ['{dokterVanWacht}', 'gecontacteerd'], 28);

// samenvoegen binnenste tak
c.line(560, 627, 560, 690, { strokeWidth: 2.6 });
c.line(960, 627, 960, 690, { strokeWidth: 2.6 });
c.line(560, 690, 960, 690, { strokeWidth: 2.6 });
c.line(760, 690, 760, 745, { strokeWidth: 2.6 });

// finale samenvoeging (true-tak + else-blok) en uitgaande pijl
c.line(170, 745, 760, 745, { strokeWidth: 2.6 });
c.arrow(465, 745, 465, 800, { strokeWidth: 2.6, head: 16 });

c.save('.', 'nestedif', 'NEW');
