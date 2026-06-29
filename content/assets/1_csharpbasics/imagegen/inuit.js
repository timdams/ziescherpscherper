// H0/H3 - inuit: invoer (toetsenbord) -> C# applicatie -> uitvoer (scherm)
const { createCanvas, C } = require('./excal');
const { keyboard, monitor } = require('./iconen');
const c = createCanvas(1460, 430);

const cy = 220;

// toetsenbord (links)
keyboard(c, 45, cy - 60);

// pijl in
c.arrow(285, cy, 575, cy, { strokeWidth: 3, head: 20 });
c.txt(430, cy - 90, 'IN', 56, C.RED, 700);
c.txt(430, cy + 70, 'Console.ReadLine()', 34, C.GRAY, 600);

// C# applicatie
c.rect(610, cy - 65, 240, 130, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.2 });
c.txt(730, cy + 12, 'C# applicatie', 38, C.GRAY, 600);

// pijl uit
c.arrow(885, cy, 1175, cy, { strokeWidth: 3, head: 20 });
c.txt(1030, cy - 90, 'UIT', 56, C.RED, 700);
c.txt(1030, cy + 70, 'Console.WriteLine()', 34, C.GRAY, 600);

// scherm (rechts)
monitor(c, 1330, cy - 80);

c.save('.', 'inuit', 'NEW');
