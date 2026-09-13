import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { bezig, getypt, herschrijf, venster, voortgang } from "../../stijl/anim";
import { Regels, kolomX, rijY, tekenBreedte, type Raster, type Regel } from "../../stijl/code";
import { C } from "../../stijl/kleuren";
import { ConsolePaneel } from "../../stijl/panelen";
import { Ruw, rechthoek } from "../../stijl/ruw";
import { Noot } from "../../stijl/tekst";
import { FASE } from "./tijdlijn";

// De bug uit "Oneindige loops" in 1_while_dowhile.md: teller-- waar teller++ moest staan. De console
// loopt vol met 0, -1, -2, ... tot de fix, daarna 0 tot en met 9. Beide uitvoeren nagekeken in .NET.
// Toegevoegd: de fix als animatie (het commentaar in het boek zegt "dit had teller++ moeten zijn").

const PANEEL = rechthoek(50, 612, 980, 290, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.4, seed: 5600 });
const CODE: Raster = { x: 80, y: 640, grootte: 32, hoogte: 42 };
const UIT: Raster = { x: 94, y: 1010, grootte: 34, hoogte: 42 };
const CONSOLE_VAK = { x: 50, y: 940, w: 980, h: 520 };

const REGELS = ["int teller = 0;", "while(teller<10)", "{", "  Console.WriteLine(teller);", "  teller--;", "}"];
const TYPEN = [1175, 1192, 1204, 1208, 1228, 1238];
const PER_TEKEN = 0.6;

const markeer = (rij: number, kol: number, n: number, seed: number) =>
  rechthoek(kolomX(CODE, kol) - 5, rijY(CODE, rij) + 5, n * tekenBreedte(CODE) + 10, CODE.hoogte - 10, {
    fill: C.RED_LIGHT,
    fillStyle: "solid",
    stroke: "none",
    roughness: 1.2,
    seed,
  });
const M_START = markeer(0, 0, 15, 5601);
const M_CONDITIE = markeer(1, 6, 9, 5602);
const M_AANPASSING = markeer(4, 2, 8, 5603);
const midden = (rij: number) => rijY(CODE, rij) + CODE.hoogte / 2;

const FIX = 1480;
const WIS_LINES = 1495;

export const CSharp: React.FC = () => {
  const f = useCurrentFrame();
  const s = FASE.code;
  const zicht = venster(f, s, FASE.einde, 15);
  if (zicht <= 0) return null;

  const code: Regel[] = REGELS.map((tekst, i) => {
    const fix = i === 4 && f >= FIX;
    return {
      rij: i,
      tekst: fix ? herschrijf(f, FIX, tekst, 3, "++;", 4) : getypt(tekst, f, TYPEN[i], PER_TEKEN),
      cursor: fix ? bezig(f, FIX, FIX + 30) : bezig(f, TYPEN[i], TYPEN[i] + tekst.length * PER_TEKEN + 6),
    };
  });

  const uitvoer: Regel[] = [];
  if (f >= 1325 && f < WIS_LINES) {
    // Oneindig: 0, -1, -2, ... Twee frames per regel, de laatste tien blijven in beeld.
    const aantal = Math.floor((Math.min(f, FASE.juist) - 1325) / 2) + 1;
    const eerste = Math.max(0, aantal - 10);
    for (let i = eerste; i < aantal; i++) uitvoer.push({ rij: i - eerste, tekst: String(-i) });
  } else if (f >= 1505) {
    for (let i = 0; i < 10; i++) {
      if (f >= 1505 + i * 4) uitvoer.push({ rij: i, tekst: String(i) });
    }
  }

  const drieZaken = 1 - voortgang(f, FASE.eindeloos, 12);

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <Ruw vorm={PANEEL} />
      <Ruw vorm={M_START} opacity={voortgang(f, 1260, 10) * drieZaken} />
      <Ruw vorm={M_CONDITIE} opacity={voortgang(f, 1275, 10) * drieZaken} />
      <Ruw vorm={M_AANPASSING} opacity={voortgang(f, 1290, 10)} />
      <Regels raster={CODE} regels={code} kleur={C.GRAY} keywords />

      <Noot tekst="startsituatie" x={420} y={midden(0)} grootte={40} opacity={venster(f, 1262, FASE.eindeloos + 5, 10)} />
      <Noot tekst="conditie" x={440} y={midden(1)} grootte={40} opacity={venster(f, 1277, FASE.eindeloos + 5, 10)} />
      <Noot tekst="verandert de conditie" x={640} y={midden(4)} grootte={40} opacity={venster(f, 1292, FASE.eindeloos + 5, 10)} />
      <Noot tekst="de verkeerde kant op" x={640} y={midden(4)} grootte={40} opacity={venster(f, FASE.eindeloos + 5, FASE.juist + 5, 10)} />
      <Noot tekst="de juiste richting" x={640} y={midden(4)} grootte={40} opacity={venster(f, FIX + 20, FASE.einde + 20, 10)} />

      <ConsolePaneel vak={CONSOLE_VAK} />
      <Regels raster={UIT} regels={uitvoer} kleur={C.CONSOLE_TEKST} gewicht={500} />
    </AbsoluteFill>
  );
};
