const { createCanvas, C } = require('./excal');
const { folder, file } = require('./_icons');
const c = createCanvas(1320, 640);
folder(c, 120, 100, 220, 110, 'c:\\');
folder(c, 320, 270, 220, 110, 'temp');
file(c, 520, 440, 320, 130, 'mijnData.txt');
// boomlijnen
c.line(160, 210, 160, 325, { strokeWidth: 2.4 }); c.line(160, 325, 320, 325, { strokeWidth: 2.4 });
c.line(360, 380, 360, 505, { strokeWidth: 2.4 }); c.line(360, 505, 520, 505, { strokeWidth: 2.4 });
// full path-bubble naar het bestand
c.bubble(1010, 120, 460, 150, ['full path:', 'c:\\temp\\mijnData.txt'], 840, 500, 34);
c.save(__dirname, 'folderpad', 'NEW');
