import React from "react";
import { AbsoluteFill } from "remotion";
import { Regels, type Raster, type Regel } from "./code";
import { C } from "./kleuren";
import { CONSOLE_BALK, ConsolePaneel } from "./panelen";
import { Ruw, rechthoek, type Vak, type Vorm } from "./ruw";

/** Waar het codepaneel, de console en hun tekstrasters staan op een liggend canvas (1920x1080). */
export type Indeling = { codeVak: Vak; consoleVak: Vak; code: Raster; uit: Raster };

// Code links, console rechts, onderaan plaats voor het onderschrift (raw string literals, H3).
export const NAAST_ELKAAR: Indeling = {
  codeVak: { x: 70, y: 150, w: 960, h: 720 },
  consoleVak: { x: 1090, y: 150, w: 760, h: 720 },
  code: { x: 130, y: 210, grootte: 40, hoogte: 62 },
  uit: { x: 1134, y: 150 + CONSOLE_BALK + 40, grootte: 36, hoogte: 56 },
};

// Code en console bovenaan naast elkaar, daaronder ruimte voor een tekening (Queue en Stack, H12).
export const BOVEN: Indeling = {
  codeVak: { x: 60, y: 50, w: 900, h: 390 },
  consoleVak: { x: 1000, y: 50, w: 860, h: 390 },
  code: { x: 100, y: 78, grootte: 30, hoogte: 48 },
  uit: { x: 1044, y: 50 + CONSOLE_BALK + 26, grootte: 34, hoogte: 54 },
};

const panelen: { [sleutel: string]: Vorm } = {};
const paneel = (v: Vak) => {
  const sleutel = `${v.x}-${v.y}-${v.w}-${v.h}`;
  if (!panelen[sleutel]) {
    panelen[sleutel] = rechthoek(v.x, v.y, v.w, v.h, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.4, seed: 11 });
  }
  return panelen[sleutel];
};

/**
 * Code in een ruw wit paneel en een console. `onderCode` ligt onder de codetekst (markeerstift),
 * `bovenCode` en `bovenUitvoer` erboven (knip-lijnen, arcering, pijlen).
 */
export const Werkblad: React.FC<{
  indeling?: Indeling;
  code: Regel[];
  uitvoer: Regel[];
  onderCode?: React.ReactNode;
  bovenCode?: React.ReactNode;
  bovenUitvoer?: React.ReactNode;
  uitvoerOpacity?: number;
  binnen?: number;
  consoleLabel?: string;
}> = ({
  indeling = NAAST_ELKAAR,
  code,
  uitvoer,
  onderCode,
  bovenCode,
  bovenUitvoer,
  uitvoerOpacity = 1,
  binnen = 1,
  consoleLabel,
}) => (
  <AbsoluteFill style={{ opacity: binnen, transform: `translateY(${(1 - binnen) * 40}px)` }}>
    <Ruw vorm={paneel(indeling.codeVak)} />
    {onderCode}
    <Regels raster={indeling.code} regels={code} kleur={C.GRAY} keywords />
    {bovenCode}
    <ConsolePaneel vak={indeling.consoleVak} label={consoleLabel} />
    <AbsoluteFill style={{ opacity: uitvoerOpacity }}>
      <Regels raster={indeling.uit} regels={uitvoer} kleur={C.CONSOLE_TEKST} gewicht={500} />
      {bovenUitvoer}
    </AbsoluteFill>
  </AbsoluteFill>
);
