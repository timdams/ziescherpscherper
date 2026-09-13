import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { venster } from "../../stijl/anim";
import { C } from "../../stijl/kleuren";
import { EindKaart, Haak, VertellerBallon } from "../../stijl/reel";
import { CSharp } from "./CSharp";
import { Lek } from "./Lek";
import { Logbericht } from "./Logbericht";
import { Server, knipper } from "./onderdelen";
import { Servers } from "./Servers";
import { FASE, TEKSTEN } from "./tijdlijn";
import { Toren } from "./Toren";
import { Wereldwijd } from "./Wereldwijd";

export { DUUR } from "./tijdlijn";

// Instagram-reel over Log4Shell (H7, verteller-kader in 1_bibliotheken.md).

const HaakServer: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = venster(f, -30, FASE.afhankelijk, 15);
  if (zicht <= 0) return null;
  return <Server x={540} y={1215} w={260} h={330} seed={8000} alarm={knipper(f)} log={((f % 45) + 1) / 45} opacity={zicht} />;
};

export const ReelLog4Shell: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: C.OFFWHITE }}>
    <Haak
      boven={["In december"]}
      groot="2021"
      onder={["werd er wereldwijd", "slecht geslapen."]}
      tot={FASE.afhankelijk}
      seed={8050}
      ovaalBreedte={820}
      ovaalHoogte={360}
      onderAfstand={390}
    />
    <HaakServer />
    <Toren />
    <Lek />
    <Servers />
    <Logbericht />
    <Wereldwijd />
    <CSharp />
    <VertellerBallon teksten={TEKSTEN} van={FASE.afhankelijk} tot={FASE.einde} />
    <EindKaart
      start={FASE.einde}
      hoofdstuk="hoofdstuk 7: methoden"
      bron={["Meer van dit soort verhalen:", "Cyberboswachters, gratis online"]}
    />
  </AbsoluteFill>
);
