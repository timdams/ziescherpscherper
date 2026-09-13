import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { BEWEEG, bezig, getypt, venster, voortgang } from "../../stijl/anim";
import { Regels, kolomX, rijY, tekenBreedte, type Raster, type Regel } from "../../stijl/code";
import { C } from "../../stijl/kleuren";
import { ConsolePaneel } from "../../stijl/panelen";
import { Ruw, rechthoek } from "../../stijl/ruw";
import { Noot } from "../../stijl/tekst";
import { EEN_FRAMEWORK, EEN_NU, FASE, LUS_FRAMEWORK, LUS_NU } from "./tijdlijn";

// Dezelfde code op twee runtimes, met de echte uitvoer (zie tijdlijn.ts). Daarna de raad uit het boek:
// maak de generator één keer aan. Toegevoegd, niet uit het kader: deze code met de lus en de dobbelsteen,
// en de uitvoer van de verbeterde code op beide runtimes.

const PANEEL = rechthoek(50, 612, 980, 260, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.4, seed: 6300 });
const CODE: Raster = { x: 90, y: 636, grootte: 30, hoogte: 44 };
const OUD = { x: 50, y: 910, w: 470, h: 560 };
const NIEUW = { x: 560, y: 910, w: 470, h: 560 };
const uitRaster = (vak: { x: number; y: number }): Raster => ({ x: vak.x + 44, y: vak.y + 80, grootte: 34, hoogte: 38 });

const VOOR = [
  "for (int i = 0; i < 10; i++)",
  "{",
  "    Random dobbelsteen = new Random();",
  "    Console.WriteLine(dobbelsteen.Next(1, 7));",
  "}",
];
const TYPEN = [1115, 1134, 1138, 1162, 1192];
const PER_TEKEN = 0.6;

const OMLIJNING = rechthoek(NIEUW.x - 8, NIEUW.y - 8, NIEUW.w + 16, NIEUW.h + 16, {
  stroke: C.RED,
  strokeWidth: 4,
  roughness: 1.3,
  seed: 6301,
});
const MARKERING = rechthoek(kolomX(CODE, 0) - 5, rijY(CODE, 0) + 6, 34 * tekenBreedte(CODE) + 10, CODE.hoogte - 12, {
  fill: C.RED_LIGHT,
  fillStyle: "solid",
  stroke: "none",
  roughness: 1.2,
  seed: 6302,
});

const VERHUIS = FASE.een + 5;

export const CSharp: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = venster(f, FASE.huidig, FASE.einde, 15);
  if (zicht <= 0) return null;

  let code: Regel[];
  if (f < VERHUIS) {
    code = VOOR.map((tekst, i) => ({
      rij: i,
      tekst: getypt(tekst, f, TYPEN[i], PER_TEKEN),
      cursor: bezig(f, TYPEN[i], TYPEN[i] + tekst.length * PER_TEKEN + 6),
    }));
  } else {
    // In drie stappen, zodat geen regel door een andere schuift: de generator verdwijnt uit de lus,
    // de lus zakt een rij, en de generator verschijnt erboven.
    const uit = voortgang(f, VERHUIS, 10);
    const zak = voortgang(f, VERHUIS + 10, 20, BEWEEG);
    const h = CODE.hoogte;
    code = [
      { rij: 2, tekst: VOOR[2], opacity: 1 - uit },
      { rij: 0, tekst: "Random dobbelsteen = new Random();", opacity: voortgang(f, VERHUIS + 30, 10) },
      { rij: 1, tekst: VOOR[0], dy: -h * (1 - zak) },
      { rij: 2, tekst: VOOR[1], dy: -h * (1 - zak) },
      { rij: 3, tekst: VOOR[3] },
      { rij: 4, tekst: VOOR[4] },
    ];
  }

  // Bij de verhuis verdwijnt de oude uitvoer (en de dimming en de omlijning), daarna draait de nieuwe code.
  const weg = voortgang(f, VERHUIS, 12);
  const worpen = (waarden: number[], start: number, opacity: number): Regel[] =>
    waarden.map((w, i) => ({ rij: i, tekst: String(w), opacity: opacity * voortgang(f, start + i * 3, 4) }));

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <Ruw vorm={PANEEL} />
      <Ruw vorm={MARKERING} opacity={voortgang(f, VERHUIS + 40, 10)} />
      <Regels raster={CODE} regels={code} kleur={C.GRAY} keywords />
      <Noot tekst="één generator" x={720} y={rijY(CODE, 0) + CODE.hoogte / 2} grootte={40} opacity={voortgang(f, VERHUIS + 45, 12)} />

      <AbsoluteFill style={{ opacity: 1 - 0.6 * voortgang(f, FASE.fora + 5, 15) * (1 - weg) }}>
        <ConsolePaneel vak={OUD} label=".NET Framework" />
        <Regels raster={uitRaster(OUD)} regels={worpen(LUS_FRAMEWORK, 1200, 1 - weg)} kleur={C.CONSOLE_TEKST} gewicht={500} />
        <Regels raster={uitRaster(OUD)} regels={worpen(EEN_FRAMEWORK, VERHUIS + 55, 1)} kleur={C.CONSOLE_TEKST} gewicht={500} />
      </AbsoluteFill>
      <ConsolePaneel vak={NIEUW} label=".NET 10" />
      <Regels raster={uitRaster(NIEUW)} regels={worpen(LUS_NU, 1215, 1 - weg)} kleur={C.CONSOLE_TEKST} gewicht={500} />
      <Regels raster={uitRaster(NIEUW)} regels={worpen(EEN_NU, VERHUIS + 63, 1)} kleur={C.CONSOLE_TEKST} gewicht={500} />
      <Ruw vorm={OMLIJNING} toon={voortgang(f, FASE.fora + 15, 25)} opacity={1 - weg} />
    </AbsoluteFill>
  );
};
