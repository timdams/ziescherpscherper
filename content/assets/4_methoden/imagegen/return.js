// H6 - return: Main roept GetNameAuthor; de methode geeft "Tim Dams" terug
const { createCanvas, C } = require('./excal');
const { codebox } = require('./mhelpers');
const c = createCanvas(1700, 560);

codebox(c, 60, 90, 820, 300, 'Main', [
  'string myName = GetNameAuthor();',
], { titleSize: 54, codeSize: 48, lh: 1.3 });

codebox(c, 1180, 70, 440, 170, 'GetNameAuthor', [], { titleSize: 52 });

// aanroep vertrekt vanaf de haakjes () van de methode-aanroep
c.carrow(650, 208, 900, 110, 1170, 150, { strokeWidth: 2.4, head: 16, roughness: 1 });
// resultaat keert terug en wijst naar het =-teken
c.carrow(1300, 245, 720, 470, 360, 244, { strokeWidth: 2.4, head: 16, roughness: 1 });
c.txt(900, 505, '"Tim Dams"', 48, C.RED_DARK, 700);

c.save(__dirname, 'return', 'NEW');
