// H2 - bitliniaal: het aantal bits bepaalt het bereik van een geheel getal.
// Onderaan een short van dichtbij, met de bit die het teken bewaart.
const { createCanvas, C } = require('./excal');
const c = createCanvas(2120, 1250);

const BAR_X = 300, CW = 24, BH = 58;

// een rij: typenaam links, balk van n bitvakjes, bits-label rechts, bereik eronder
function bitbar(y, name, bits, bereik, aantal) {
  const w = bits * CW;
  c.txt(BAR_X - 40, y + BH * 0.72, name, 46, C.RED_DARK, 700, 'end');
  c.rect(BAR_X, y, w, BH, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.2 });
  for (let i = 1; i < bits; i++)
    c.line(BAR_X + i * CW, y + 4, BAR_X + i * CW, y + BH - 4, { strokeWidth: 1.2, roughness: 1.7 });
  c.txt(BAR_X + w + 26, y + BH * 0.72, bits + ' bits', 36, C.GRAY, 600, 'start');
  c.txt(BAR_X, y + BH + 44, bereik, 32, C.GRAY, 400, 'start');
  c.txt(BAR_X, y + BH + 84, aantal, 30, C.RED_DARK, 600, 'start');
}

bitbar(70, 'byte', 8, '0 tot 255', '256 waarden');
bitbar(250, 'short', 16, '-32 768 tot 32 767', '65 536 waarden');
bitbar(430, 'int', 32, '-2 147 483 648 tot 2 147 483 647', 'ruim 4 miljard waarden');
bitbar(610, 'long', 64, '-9 223 372 036 854 775 808 tot 9 223 372 036 854 775 807', 'ruim 18 triljoen waarden');

// scheiding tussen de ladder en de close-up
c.line(140, 820, 1980, 820, { strokeWidth: 2, roughness: 1.2, strokeLineDash: [12, 12], stroke: '#b0b0b0' });

// close-up: 1 short = 16 bits, de eerste is de tekenbit
const ZX = 300, ZY = 910, ZW = 100, ZH = 110;
c.txt(260, ZY + 75, 'short', 46, C.RED_DARK, 700, 'end');
c.txt(ZX + ZW / 2, ZY - 26, '1 bit voor het teken', 32, C.RED_DARK, 700);
c.cell(ZX, ZY, ZW, ZH, '');
for (let i = 1; i < 16; i++)
  c.rect(ZX + i * ZW, ZY, ZW, ZH, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.2, roughness: 1.3 });

const AL = ZX + ZW + 10, AR = ZX + 16 * ZW - 10;
c.arrow(AL, ZY + ZH + 40, AR, ZY + ZH + 40, { strokeWidth: 2.6, head: 16 });
c.arrow(AR, ZY + ZH + 40, AL, ZY + ZH + 40, { strokeWidth: 2.6, head: 16 });
c.txt((AL + AR) / 2, ZY + ZH + 96, '15 bits blijven over voor de waarde', 34, C.GRAY, 600);
c.txt((AL + AR) / 2, ZY + ZH + 150, 'het grootste positieve getal halveert daardoor', 32, C.GRAY, 400);

c.save('.', 'bitliniaal', '');
