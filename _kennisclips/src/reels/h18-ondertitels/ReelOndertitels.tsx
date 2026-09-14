import React from "react";
import { AbsoluteFill } from "remotion";
import { C } from "../../stijl/kleuren";
import { EindKaart, Haak, VertellerBallon } from "../../stijl/reel";
import { CSharp } from "./CSharp";
import { Draaitafel } from "./Draaitafel";
import { Lijstje } from "./Lijstje";
import { Filmmap, Mp3map } from "./Mappen";
import { FASE, TEKSTEN } from "./tijdlijn";

export { DUUR } from "./tijdlijn";

// Instagram-reel over het eerste programma met bestanden: films zonder ondertitels en opgekuiste
// mp3's (H18, verteller-kader in bestandenintro.md).
export const ReelOndertitels: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: C.OFFWHITE }}>
    <Haak
      boven={["Mijn eerste programma", "met bestanden zocht"]}
      groot=".srt"
      onder={["die ontbraken."]}
      tot={FASE.verhaal}
      seed={9000}
    />
    <Filmmap />
    <Lijstje />
    <Mp3map />
    <Draaitafel />
    <CSharp />
    <VertellerBallon teksten={TEKSTEN} van={FASE.verhaal} tot={FASE.einde} />
    <EindKaart
      start={FASE.einde}
      hoofdstuk="hoofdstuk 18: bestandsverwerking"
      bron={["De code is vereenvoudigd", "en nagekeken in .NET 10"]}
    />
  </AbsoluteFill>
);
