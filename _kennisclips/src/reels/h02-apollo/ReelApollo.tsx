import React from "react";
import { AbsoluteFill } from "remotion";
import { C } from "../../stijl/kleuren";
import { EindKaart, Haak, VertellerBallon } from "../../stijl/reel";
import { CSharp } from "./CSharp";
import { Geheugen } from "./Geheugen";
import { Gsm } from "./Gsm";
import { Maan } from "./Maan";
import { FASE, TEKSTEN } from "./tijdlijn";
import { Toestellen } from "./Toestellen";
import { Weefsel } from "./Weefsel";

export { DUUR } from "./tijdlijn";

// Instagram-reel over de Apollo Guidance Computer (H2, verteller-kader in 1_datatypes.md).
export const ReelApollo: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: C.OFFWHITE }}>
    <Haak
      boven={["De computer die mensen", "op de maan zette, had"]}
      groot="4 KB"
      onder={["werkgeheugen."]}
      tot={FASE.verhaal}
      seed={4000}
      ovaalBreedte={760}
      ovaalHoogte={380}
      onderAfstand={400}
    />
    <Maan />
    <Geheugen />
    <Gsm />
    <Toestellen />
    <CSharp />
    <Weefsel />
    <VertellerBallon teksten={TEKSTEN} van={FASE.verhaal} tot={FASE.einde} />
    <EindKaart start={FASE.einde} hoofdstuk="hoofdstuk 2: datatypes" bron={[]} />
  </AbsoluteFill>
);
