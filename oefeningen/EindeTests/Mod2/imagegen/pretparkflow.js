// Vaardigheidsproef 2025-26, oefening 3 - welke methode roept welke op (vervangt het mermaid-blok)
// Draaien vanuit de imagegen-map:  node pretparkflow.js
const { createCanvas, C } = require('./excal');
const { proc } = require('./flow');

const c = createCanvas(1160, 840);
const P = { strokeWidth: 2.6, head: 15 };
const X = 450, W = 560, H = 84;

proc(c, X, 70, W, H, 'Hoofdmethode: Pretparkbeheer');
c.arrow(X, 112, X, 184, P);

proc(c, X, 230, W, H, 'Methode 1: KanOpen');
c.arrow(X, 272, X, 374, P);
c.txt(X - 20, 335, 'Park kan open', 28, C.GRAY, 600, 'end');

proc(c, X, 420, W, H, 'Methode 2: BerekenBezoekersCapaciteit');
c.arrow(X, 462, X, 544, P);

proc(c, X, 590, W, H, 'Methode 3: BerekenDagOmzet');
c.arrow(X, 632, X, 724, P);

proc(c, X, 770, W, H, 'Methode 4: ToonRapport');

// Park kan niet open: rechtstreeks van KanOpen naar ToonRapport
const B = 900;
c.line(X + W / 2, 230, B, 230, { strokeWidth: 2.6 });
c.line(B, 230, B, 770, { strokeWidth: 2.6 });
c.arrow(B, 770, X + W / 2 + 6, 770, P);
c.txt(B + 20, 500, 'Park kan niet open', 28, C.GRAY, 600, 'start');

c.save('.', 'pretparkflow', '');
