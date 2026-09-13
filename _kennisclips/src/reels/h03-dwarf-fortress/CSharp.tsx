import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { bezig, getypt, venster, voortgang } from "../../stijl/anim";
import { Regels, kolomX, rijY, tekenBreedte, type Raster, type Regel } from "../../stijl/code";
import { C } from "../../stijl/kleuren";
import { ConsolePaneel } from "../../stijl/panelen";
import { Ruw, rechthoek } from "../../stijl/ruw";
import { FortRaster } from "./fort";
import { FASE } from "./tijdlijn";

// Het fort als raw string literal, met de UTF8-regel uit dezelfde pagina. Toegevoegd, niet uit het kader:
// deze code. De uitvoer is echt: op .NET 10 (13 september 2026) gaf ze exact het fort, zonder de inspringing.

// Breder dan gewoonlijk, zodat de lange UTF8-regel op 30 px past.
const PANEEL = rechthoek(40, 590, 1000, 510, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.4, seed: 7500 });
const CODE: Raster = { x: 70, y: 612, grootte: 30, hoogte: 40 };
const CONSOLE = { x: 40, y: 1125, w: 1000, h: 355 };
const UIT_GROOTTE = 30;
const UIT = { x: CONSOLE.x + (CONSOLE.w - 16 * UIT_GROOTTE * 0.6) / 2, y: CONSOLE.y + 60 + 22, grootte: UIT_GROOTTE, hoogte: 36 };

const UTF8 = "Console.OutputEncoding = System.Text.Encoding.UTF8;";
const MARKERING = rechthoek(kolomX(CODE, 0) - 6, rijY(CODE, 0) + 4, UTF8.length * tekenBreedte(CODE) + 12, CODE.hoogte - 8, {
  fill: C.RED_LIGHT,
  fillStyle: "solid",
  stroke: "none",
  roughness: 1.2,
  seed: 7501,
});
const PER_TEKEN = 0.6;

export const CSharp: React.FC = () => {
  const f = useCurrentFrame();
  const s = FASE.csharp;
  const u = FASE.utf8;
  const zicht = venster(f, s, FASE.einde, 15);
  if (zicht <= 0) return null;

  const typ = (rij: number, tekst: string, start: number): Regel => ({
    rij,
    tekst: getypt(tekst, f, start, PER_TEKEN),
    cursor: bezig(f, start, start + tekst.length * PER_TEKEN + 6),
  });
  // Rij 0 blijft vrij tot de UTF8-regel er als allereerste lijn bij komt.
  const code: Regel[] = [
    typ(0, UTF8, u + 12),
    typ(1, 'string fort = """', s + 15),
    { rij: 9, tekst: '    """;', opacity: voortgang(f, s + 62, 6) },
    typ(10, "Console.WriteLine(fort);", s + 72),
  ];

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <Ruw vorm={PANEEL} />
      <Ruw vorm={MARKERING} opacity={voortgang(f, u + 45, 10)} />
      <Regels raster={CODE} regels={code} kleur={C.GRAY} keywords />
      <FortRaster
        x={kolomX(CODE, 4)}
        y={rijY(CODE, 2)}
        grootte={CODE.grootte}
        hoogte={CODE.hoogte}
        thema="code"
        rijOpacity={(r) => voortgang(f, s + 32 + r * 4, 6)}
      />

      <ConsolePaneel vak={CONSOLE} />
      <FortRaster {...UIT} thema="console" rijOpacity={(r) => voortgang(f, u + 58 + r * 4, 5)} />
    </AbsoluteFill>
  );
};
