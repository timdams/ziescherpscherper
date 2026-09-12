import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { venster } from "../../stijl/anim";
import { C } from "../../stijl/kleuren";
import { EindKaart, Haak, VertellerBallon } from "../../stijl/reel";
import { CSharp } from "./CSharp";
import { Delen } from "./Delen";
import { Forums } from "./Forums";
import { Games } from "./Games";
import { Machine } from "./Machine";
import { REEKS_666 } from "./random";
import { Wereld } from "./Tegels";
import { FASE, TEKSTEN } from "./tijdlijn";
import { WereldScene } from "./WereldScene";

export { DUUR } from "./tijdlijn";

// Instagram-reel over seeds in games (H4, verteller-kader in content/3_data/random.md).

const HaakWereld: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = venster(f, -30, FASE.games, 15);
  if (zicht <= 0) return null;
  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <Wereld x={260} y={1080} T={70} getallen={REEKS_666} kolommen={8} zichtbaar={REEKS_666.length} />
    </AbsoluteFill>
  );
};

export const ReelMinecraftSeeds: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: C.OFFWHITE }}>
    <Haak
      boven={["Met dit ene getal"]}
      groot="666"
      onder={["ligt je hele", "Minecraft-wereld vast."]}
      tot={FASE.games}
      seed={620}
    />
    <HaakWereld />
    <Games />
    <Machine />
    <WereldScene />
    <Delen />
    <Forums />
    <CSharp />
    <VertellerBallon teksten={TEKSTEN} van={FASE.games} tot={FASE.einde} />
    <EindKaart
      start={FASE.einde}
      hoofdstuk="hoofdstuk 4: werken met data"
      bron={["De getallen zijn echt: new Random(666)", "met Next(0, 10), nagekeken in .NET 10"]}
    />
  </AbsoluteFill>
);
