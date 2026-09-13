import React from "react";
import { AbsoluteFill } from "remotion";
import { C } from "../../stijl/kleuren";
import { EindKaart, Haak, VertellerBallon } from "../../stijl/reel";
import { Backend } from "./Backend";
import { CSharp } from "./CSharp";
import { DrieD } from "./DrieD";
import { Dwerg } from "./Dwerg";
import { Jaren } from "./Jaren";
import { Lagen } from "./Lagen";
import { FASE, TEKSTEN } from "./tijdlijn";
import { Wereld } from "./Wereld";

export { DUUR } from "./tijdlijn";

// Instagram-reel over Dwarf Fortress (H3, verteller-kader in 7_unicode.md).

export const ReelDwarfFortress: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: C.OFFWHITE }}>
    <Haak
      boven={["Tarn Adams begon in"]}
      groot="2002"
      onder={["aan een spel uit", "niets dan tekens."]}
      tot={FASE.ultiem}
      seed={7000}
      ovaalBreedte={820}
      ovaalHoogte={360}
      onderAfstand={390}
    />
    <Lagen />
    <Wereld />
    <Jaren />
    <DrieD />
    <Dwerg />
    <Backend />
    <CSharp />
    <VertellerBallon teksten={TEKSTEN} van={FASE.ultiem} tot={FASE.einde} />
    <EindKaart
      start={FASE.einde}
      hoofdstuk="hoofdstuk 3: tekst gebruiken in code"
      bron={["Het fort is zelf getekend", "en sterk vereenvoudigd"]}
    />
  </AbsoluteFill>
);
