import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { IN, venster, voortgang } from "../../stijl/anim";
import { C } from "../../stijl/kleuren";
import { Op } from "../../stijl/op";
import { Ruw, cirkel, ellips, lijn, rechthoek, samen, veelhoek } from "../../stijl/ruw";
import { FASE } from "./tijdlijn";

// De maan en de maanlander. Tijdens de haak hangt de lander boven de maan, bij de eerste ballon landt hij.

const MAAN = samen(
  // Zelfde seed als de arcering: anders heeft de witte ondergrond een andere krabbel en steekt ze uit.
  ellips(540, 1780, 1700, 800, { fill: C.WHITE, fillStyle: "solid", stroke: "none", seed: 4011 }),
  ellips(540, 1780, 1700, 800, { fill: C.GRAY, fillStyle: "hachure", hachureGap: 16, fillWeight: 1, strokeWidth: 2.6, seed: 4011 }),
  ellips(300, 1455, 130, 40, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2, seed: 4012 }),
  ellips(760, 1480, 170, 50, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2, seed: 4013 }),
  ellips(540, 1430, 80, 26, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2, seed: 4014 }),
);

// Lokale coördinaten: (0, 0) is het midden van de afdaaltrap, de voetjes staan op y 112.
const LANDER = samen(
  lijn(-70, 30, -140, 110, { strokeWidth: 3, seed: 4020 }),
  lijn(70, 30, 140, 110, { strokeWidth: 3, seed: 4021 }),
  lijn(-165, 112, -115, 112, { strokeWidth: 3, seed: 4022 }),
  lijn(115, 112, 165, 112, { strokeWidth: 3, seed: 4023 }),
  rechthoek(-95, -40, 190, 80, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.6, seed: 4024 }),
  rechthoek(-95, -40, 190, 80, { fill: C.GRAY, fillStyle: "hachure", hachureGap: 10, fillWeight: 1, stroke: "none", seed: 4025 }),
  veelhoek(
    [
      [-60, -40],
      [-75, -90],
      [-35, -135],
      [40, -135],
      [75, -90],
      [60, -40],
    ],
    { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.6, seed: 4026 },
  ),
  veelhoek(
    [
      [-30, -115],
      [5, -115],
      [-5, -92],
      [-38, -94],
    ],
    { fill: C.GRAY, fillStyle: "solid", strokeWidth: 2, seed: 4027 },
  ),
  lijn(40, -135, 65, -175, { strokeWidth: 2.4, seed: 4028 }),
  cirkel(68, -182, 18, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.2, seed: 4029 }),
);

const HANGT = 1190;
// De voetjes (y 112) staan dan net in de ruwe rand van de maan. Op de wiskundige rand (1268) leek hij
// te zweven: de getekende rand ligt waar de voetjes staan zo'n 25 px lager.
const GELAND = 1296;

export const Maan: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = venster(f, -30, FASE.geheugen, 15);
  if (zicht <= 0) return null;
  const land = voortgang(f, FASE.verhaal + 10, 100, IN);
  const y = HANGT + (GELAND - HANGT) * land + Math.sin(f / 8) * 5 * (1 - land);
  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <Ruw vorm={MAAN} />
      <Op x={540} y={y}>
        <Ruw vorm={LANDER} />
      </Op>
    </AbsoluteFill>
  );
};
