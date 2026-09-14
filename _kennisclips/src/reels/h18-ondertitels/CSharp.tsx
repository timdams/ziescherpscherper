import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { bezig, getypt, venster, voortgang } from "../../stijl/anim";
import { Regels, kolomX, rijY, tekenBreedte, type Raster, type Regel } from "../../stijl/code";
import { C } from "../../stijl/kleuren";
import { ConsolePaneel } from "../../stijl/panelen";
import { Ruw, rechthoek } from "../../stijl/ruw";
import { Noot } from "../../stijl/tekst";
import { FASE } from "./tijdlijn";

// Toegevoegd, niet uit het kader: deze code. Het echte programma uit het verhaal staat niet in het boek.
// GetFiles met een searchPattern komt uit fileinfo.md, File.Exists en Path.ChangeExtension uit
// bestandenintro.md. Gedraaid in .NET 10 op een testmap met vijf .avi's (Gladiator en Shrek met .srt):
// de uitvoer is Amelie.srt, Matrix.srt, Memento.srt.

const PANEEL = rechthoek(40, 610, 1000, 470, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.4, seed: 9300 });
const CODE: Raster = { x: 66, y: 636, grootte: 30, hoogte: 42 };
const UIT: Raster = { x: 80, y: 1196, grootte: 40, hoogte: 56 };
const CONSOLE_VAK = { x: 40, y: 1110, w: 1000, h: 360 };

const REGELS = [
  'string map = @"D:\\Films";',
  'string[] films = Directory.GetFiles(map, "*.avi");',
  "foreach (string film in films)",
  "{",
  '    string srt = Path.ChangeExtension(film, ".srt");',
  "    if (!File.Exists(srt))",
  "    {",
  "        Console.WriteLine(Path.GetFileName(srt));",
  "    }",
  "}",
];
const PER_TEKEN = 0.4;
const TYPEN: number[] = [];
{
  let t = FASE.code + 8;
  REGELS.forEach((r) => {
    TYPEN.push(t);
    t += r.length * PER_TEKEN + 4;
  });
}
const UITVOER = ["Amelie.srt", "Matrix.srt", "Memento.srt"];

const markeer = (rij: number, kol: number, n: number, seed: number) =>
  rechthoek(kolomX(CODE, kol) - 5, rijY(CODE, rij) + 5, n * tekenBreedte(CODE) + 10, CODE.hoogte - 10, {
    fill: C.RED_LIGHT,
    fillStyle: "solid",
    stroke: "none",
    roughness: 1.2,
    seed,
  });
const M_GETFILES = markeer(1, 27, 8, 9301);
const M_PATROON = markeer(1, 41, 7, 9302);
const M_EXISTS = markeer(5, 9, 11, 9303);
const M_EXTENSIE = markeer(4, 17, 20, 9304);

export const CSharp: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = venster(f, FASE.code + 2, FASE.einde, 15);
  if (zicht <= 0) return null;

  const code: Regel[] = REGELS.map((tekst, i) => ({
    rij: i,
    tekst: getypt(tekst, f, TYPEN[i], PER_TEKEN),
    cursor: bezig(f, TYPEN[i], TYPEN[i] + tekst.length * PER_TEKEN + 4),
  }));
  const uitvoer: Regel[] = UITVOER.filter((_, i) => f >= 1445 + i * 15).map((tekst, i) => ({ rij: i, tekst }));
  const eerste = 1 - voortgang(f, FASE.exists, 10);
  const tweede = 1 - voortgang(f, FASE.extensie, 10);

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <Ruw vorm={PANEEL} />
      <Ruw vorm={M_GETFILES} opacity={voortgang(f, 1320, 10) * eerste} />
      <Ruw vorm={M_PATROON} opacity={voortgang(f, 1335, 10) * eerste} />
      <Ruw vorm={M_EXISTS} opacity={voortgang(f, 1395, 10) * tweede} />
      <Ruw vorm={M_EXTENSIE} opacity={voortgang(f, 1500, 10)} />
      <Regels raster={CODE} regels={code} kleur={C.GRAY} keywords />
      <Noot
        tekst="(vereenvoudigd)"
        x={640}
        y={rijY(CODE, 0) + CODE.hoogte / 2}
        grootte={40}
        kleur={C.GRAY}
        opacity={voortgang(f, 1290, 12)}
      />
      <ConsolePaneel vak={CONSOLE_VAK} />
      <Regels raster={UIT} regels={uitvoer} kleur={C.CONSOLE_TEKST} gewicht={500} />
    </AbsoluteFill>
  );
};
