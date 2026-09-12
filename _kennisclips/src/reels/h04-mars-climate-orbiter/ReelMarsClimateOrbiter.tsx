import React from "react";
import { AbsoluteFill } from "remotion";
import { C } from "../../stijl/kleuren";
import { EindKaart, Haak, VertellerBallon } from "../../stijl/reel";
import { Afspraak } from "./Afspraak";
import { Computers } from "./Computers";
import { Ruimte } from "./Ruimte";
import { FASE, TEKSTEN } from "./tijdlijn";
import { Weegschaal } from "./Weegschaal";

export { DUUR } from "./tijdlijn";

// Instagram-reel over de Mars Climate Orbiter (H4, verteller-kader in 4_converteren_casting.md).
export const ReelMarsClimateOrbiter: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: C.OFFWHITE }}>
    <Haak
      boven={["Een ruimtesonde van"]}
      groot="125"
      onder={["miljoen dollar,", "verloren door een getal", "zonder eenheid."]}
      tot={FASE.verlies}
      seed={610}
      ovaalBreedte={720}
      ovaalHoogte={380}
      onderAfstand={400}
    />
    <Ruimte />
    <Computers />
    <Weegschaal />
    <Afspraak />
    <VertellerBallon teksten={TEKSTEN} van={FASE.verlies} tot={FASE.einde} />
    <EindKaart
      start={FASE.einde}
      hoofdstuk="hoofdstuk 4: werken met data"
      bron={["Bron: NASA, Mars Climate Orbiter", "Mishap Investigation Board (1999)"]}
    />
  </AbsoluteFill>
);
