import React from "react";
import { AbsoluteFill } from "remotion";
import { C } from "../../stijl/kleuren";
import { EindKaart, Haak, VertellerBallon } from "../../stijl/reel";
import { Computer } from "./Computer";
import { CSharp } from "./CSharp";
import { Klok } from "./Klok";
import { Lus } from "./Lus";
import { FASE, TEKSTEN } from "./tijdlijn";

export { DUUR } from "./tijdlijn";

// Instagram-reel over de roostertool die nooit stopte (H6, verteller-kader in 0_loops_intro.md).
export const ReelRoostertool: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: C.OFFWHITE }}>
    <Haak
      boven={["Twee uur gewacht op", "een rooster dat klaar was na"]}
      groot="4"
      onder={["minuten."]}
      tot={FASE.verhaal}
      seed={5300}
      ovaalBreedte={420}
      ovaalHoogte={360}
    />
    <Computer />
    <Klok />
    <Lus />
    <CSharp />
    <VertellerBallon teksten={TEKSTEN} van={FASE.verhaal} tot={FASE.einde} />
    <EindKaart start={FASE.einde} hoofdstuk="hoofdstuk 6: herhalingen" bron={[]} />
  </AbsoluteFill>
);
