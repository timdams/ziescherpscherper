import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { bezig, getypt, venster, voortgang } from "../../stijl/anim";
import { Regels, type Raster, type Regel } from "../../stijl/code";
import { MONO } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";
import { ConsolePaneel } from "../../stijl/panelen";
import { Ruw, rechthoek } from "../../stijl/ruw";
import { REEKS_666 } from "./random";
import { FASE } from "./tijdlijn";

// new Random(666) uit het boek, met Next(0, 10) zodat de getallen kort blijven.
// Twee runs, twee keer exact dezelfde uitvoer (echte .NET-getallen, zie random.ts).

const PANEEL = rechthoek(80, 640, 920, 300, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.4, seed: 1700 });
const RASTER: Raster = { x: 120, y: 668, grootte: 40, hoogte: 64 };
const OPEN = "Random a = new Random(666);";
const TOON = "Console.WriteLine(a.Next(0, 10));";
const RUN_1 = { x: 80, y: 980, w: 440, h: 250 };
const RUN_2 = { x: 560, y: 980, w: 440, h: 250 };

const Uitvoer: React.FC<{ x: number; y: number; start: number; f: number }> = ({ x, y, start, f }) => (
  <>
    {REEKS_666.slice(0, 3).map((n, j) => (
      <div
        key={j}
        style={{
          position: "absolute",
          left: x + 40,
          top: y + 84 + j * 50,
          fontFamily: MONO,
          fontSize: 44,
          fontWeight: 500,
          lineHeight: 1,
          color: C.CONSOLE_TEKST,
          opacity: voortgang(f, start + j * 8, 8),
        }}
      >
        {n}
      </div>
    ))}
  </>
);

export const CSharp: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = venster(f, FASE.csharp, FASE.einde, 15);
  if (zicht <= 0) return null;
  const s = FASE.csharp;

  const regels: Regel[] = [
    { rij: 0, tekst: getypt(OPEN, f, s + 10, 1), cursor: bezig(f, s + 10, s + 38) },
    { rij: 1, tekst: getypt(TOON, f, s + 42, 0.8), cursor: bezig(f, s + 42, s + 70) },
    { rij: 2, tekst: f >= s + 72 ? TOON : "" },
    { rij: 3, tekst: f >= s + 78 ? TOON : "" },
  ];

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <Ruw vorm={PANEEL} />
      <Regels raster={RASTER} regels={regels} kleur={C.GRAY} />
      <AbsoluteFill style={{ opacity: voortgang(f, s + 85, 12) }}>
        <ConsolePaneel vak={RUN_1} label="run 1" />
        <Uitvoer x={RUN_1.x} y={RUN_1.y} start={s + 95} f={f} />
      </AbsoluteFill>
      <AbsoluteFill style={{ opacity: voortgang(f, 1670, 12) }}>
        <ConsolePaneel vak={RUN_2} label="run 2" />
        <Uitvoer x={RUN_2.x} y={RUN_2.y} start={1685} f={f} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
