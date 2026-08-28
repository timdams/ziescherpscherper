// H6 - het rij/kolom-model bij geneste loops, met de maaltafels als raster.
// De outer loop gaat rij per rij naar beneden, de inner loop overloopt binnen elke
// rij de kolommen van links naar rechts. De twee ballonnen tonen waar Write en
// WriteLine staan.
// Draaien vanuit de imagegen-map:  node rijkolom.js
const { createCanvas, C } = require('./excal');

const c = createCanvas(1300, 810);

const GX = 330, GY = 250;         // linkerbovenhoek van het raster
const CW = 112, CH = 92;          // celgrootte
const PX = 122, PY = 104;         // afstand tussen twee cellen
const N = 5;

const colX = k => GX + k * PX;
const rowY = r => GY + r * PY;

// ============ kopteksten ============
c.txt(630, 150, 'kolom', 38, C.RED_DARK, 700);
c.txt(630, 190, 'de inner loop', 27, C.GRAY, 600);
c.txt(290, 232, 'rij', 38, C.RED_DARK, 700);

for (let k = 0; k < N; k++) c.txt(colX(k) + CW / 2, 232, String(k + 1), 34, C.GRAY, 700);
for (let r = 0; r < N; r++) c.txt(290, rowY(r) + 58, String(r + 1), 34, C.GRAY, 700);

// ============ het raster met de maaltafels ============
for (let r = 0; r < N; r++) {
  for (let k = 0; k < N; k++) {
    c.rect(colX(k), rowY(r), CW, CH, { strokeWidth: 2.2, roughness: 1.5 });
    c.txt(colX(k) + CW / 2, rowY(r) + 40, String((r + 1) * (k + 1)), 34, C.GRAY, 700);
  }
}

// ============ de inner loop: per rij van links naar rechts ============
const pijl = { stroke: C.RED, strokeWidth: 2.4, roughness: 1.2, head: 15 };
for (let r = 0; r < N; r++) c.arrow(318, rowY(r) + 70, 936, rowY(r) + 70, pijl);

// ============ de outer loop: rij per rij naar beneden ============
c.arrow(240, 262, 240, 746, { stroke: C.RED, strokeWidth: 2.8, roughness: 1.2, head: 18 });
c.lines(215, 478, ['de outer', 'loop'], 27, C.RED_DARK, 700, 'end', 1.3);

// ============ waar staat welke uitvoer ============
c.bubble(1110, 150, 310, 155,
  ['Console.Write()', 'staat in de inner loop', 'en zet ze naast elkaar'], 942, 320, 25);
c.bubble(1110, 430, 310, 155,
  ['Console.WriteLine()', 'staat in de outer loop', 'en sluit de rij af'], 942, 736, 25);

c.save('.', 'rijkolom', '');
