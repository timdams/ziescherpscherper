import React from "react";
import { AbsoluteFill } from "remotion";
import { Regels, type Regel } from "../../stijl/code";
import { C } from "../../stijl/kleuren";
import { ConsolePaneel } from "../../stijl/panelen";
import { Ruw, rechthoek } from "../../stijl/ruw";
import { CODE, CODE_VAK, CONSOLE_VAK, UIT } from "./maten";

const PANEEL = rechthoek(CODE_VAK.x, CODE_VAK.y, CODE_VAK.w, CODE_VAK.h, {
  fill: C.WHITE,
  fillStyle: "solid",
  strokeWidth: 2.4,
  seed: 11,
});

/**
 * Code links, console rechts. `onderCode` ligt onder de codetekst (markeerstift),
 * `bovenCode` en `bovenUitvoer` erboven (knip-lijnen, arcering, pijlen).
 */
export const Werkblad: React.FC<{
  code: Regel[];
  uitvoer: Regel[];
  onderCode?: React.ReactNode;
  bovenCode?: React.ReactNode;
  bovenUitvoer?: React.ReactNode;
  uitvoerOpacity?: number;
  binnen?: number;
}> = ({ code, uitvoer, onderCode, bovenCode, bovenUitvoer, uitvoerOpacity = 1, binnen = 1 }) => (
  <AbsoluteFill style={{ opacity: binnen, transform: `translateY(${(1 - binnen) * 40}px)` }}>
    <Ruw vorm={PANEEL} />
    {onderCode}
    <Regels raster={CODE} regels={code} kleur={C.GRAY} keywords />
    {bovenCode}
    <ConsolePaneel vak={CONSOLE_VAK} />
    <AbsoluteFill style={{ opacity: uitvoerOpacity }}>
      <Regels raster={UIT} regels={uitvoer} kleur={C.CONSOLE_TEKST} gewicht={500} />
      {bovenUitvoer}
    </AbsoluteFill>
  </AbsoluteFill>
);
