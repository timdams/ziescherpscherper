import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { venster } from "../../stijl/anim";
import { C } from "../../stijl/kleuren";
import { EindKaart, Haak, VertellerBallon } from "../../stijl/reel";
import { CSharp } from "./CSharp";
import { Dobbelsteen } from "./onderdelen";
import { Tikjes } from "./Tikjes";
import { TienWorpen } from "./TienWorpen";
import { FASE, LUS_FRAMEWORK, TEKSTEN } from "./tijdlijn";
import { Waarschuwing } from "./Waarschuwing";

export { DUUR } from "./tijdlijn";

// Instagram-reel over de dobbelsteen die tien keer hetzelfde gooide (H4, verteller-kader in random.md).

const HaakWorpen: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = venster(f, -30, FASE.waarschuwing, 15);
  if (zicht <= 0) return null;
  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      {LUS_FRAMEWORK.map((waarde, i) => (
        <Dobbelsteen
          key={i}
          waarde={waarde}
          x={260 + (i % 5) * 140}
          y={i < 5 ? 1070 : 1210}
          grootte={110}
          seed={6400 + i * 10}
        />
      ))}
    </AbsoluteFill>
  );
};

export const ReelDobbelsteen: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: C.OFFWHITE }}>
    <Haak
      boven={["Een dobbelsteen gooide"]}
      groot="10"
      onder={["keer na elkaar", "hetzelfde getal."]}
      tot={FASE.waarschuwing}
      seed={6000}
      ovaalBreedte={560}
      ovaalHoogte={360}
    />
    <HaakWorpen />
    <Waarschuwing />
    <Tikjes />
    <TienWorpen />
    <CSharp />
    <VertellerBallon teksten={TEKSTEN} van={FASE.waarschuwing} tot={FASE.einde} />
    <EindKaart
      start={FASE.einde}
      hoofdstuk="hoofdstuk 4: werken met data"
      bron={["De getallen zijn echt: dezelfde code", "op .NET Framework 4 en .NET 10"]}
    />
  </AbsoluteFill>
);
