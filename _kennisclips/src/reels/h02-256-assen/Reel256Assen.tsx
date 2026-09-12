import React from "react";
import { AbsoluteFill } from "remotion";
import { C } from "../../stijl/kleuren";
import { EindKaart, Haak } from "../../stijl/reel";
import { CSharp } from "./CSharp";
import { Reglement } from "./Reglement";
import { Spoorscene } from "./Spoorscene";
import { Teller } from "./Teller";
import { FASE } from "./tijdlijn";
import { VertellerBalk } from "./VertellerBalk";

export { DUUR } from "./tijdlijn";

// Instagram-reel over de Zwitserse trein met 256 assen (H2, verteller-kader in 1_datatypes.md).
// Alles hangt aan één tijdlijn (tijdlijn.ts), zodat de trein doorrijdt over de scènes heen.
export const Reel256Assen: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: C.OFFWHITE }}>
    <Haak
      boven={["In Zwitserland mag", "een trein niet exact"]}
      groot="256"
      onder={["assen hebben."]}
      tot={FASE.reglement}
    />
    <Spoorscene />
    <Teller />
    <Reglement />
    <CSharp />
    <VertellerBalk />
    <EindKaart
      start={FASE.einde}
      hoofdstuk="hoofdstuk 2: datatypes"
      bron={["Bron: de Zwitserse Fahrdienstvorschriften", "en Matt Parker, Humble Pi (2019)"]}
    />
  </AbsoluteFill>
);
