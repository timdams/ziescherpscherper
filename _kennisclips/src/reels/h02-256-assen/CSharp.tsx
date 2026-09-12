import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { bezig, getypt, venster, voortgang } from "../../stijl/anim";
import { Regels, type Raster, type Regel } from "../../stijl/code";
import { MONO } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";
import { ConsolePaneel } from "../../stijl/panelen";
import { Ruw, rechthoek } from "../../stijl/ruw";
import { FASE } from "./tijdlijn";

// Toegevoegd, niet uit het verteller-kader: dezelfde overloop met een byte in C#.
const CODE_PANEEL = rechthoek(80, 640, 920, 260, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.4, seed: 400 });
const CODE: Raster = { x: 124, y: 668, grootte: 48, hoogte: 70 };
const REGELS = ["byte assen = 255;", "assen++;", "Console.WriteLine(assen);"];

export const CSharp: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = venster(f, FASE.csharp, FASE.einde, 15);
  if (zicht <= 0) return null;
  const s = FASE.csharp;

  const regels: Regel[] = [
    { rij: 0, tekst: getypt(REGELS[0], f, s + 12, 1.2), cursor: bezig(f, s + 12, s + 36) },
    { rij: 1, tekst: getypt(REGELS[1], f, s + 110, 1.5), cursor: bezig(f, s + 110, s + 126) },
    { rij: 2, tekst: getypt(REGELS[2], f, s + 130, 1), cursor: bezig(f, s + 130, s + 158) },
  ];

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <Ruw vorm={CODE_PANEEL} />
      <Regels raster={CODE} regels={regels} kleur={C.GRAY} keywords />
      <ConsolePaneel vak={{ x: 80, y: 940, w: 920, h: 230 }} />
      <div
        style={{
          position: "absolute",
          left: 124,
          top: 1040,
          fontFamily: MONO,
          fontSize: 64,
          fontWeight: 500,
          lineHeight: 1,
          color: C.CONSOLE_TEKST,
          opacity: voortgang(f, s + 165, 8),
        }}
      >
        0
      </div>
    </AbsoluteFill>
  );
};
