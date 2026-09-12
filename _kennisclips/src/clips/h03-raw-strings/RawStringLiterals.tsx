import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { C } from "../../stijl/kleuren";
import { INTRO_DUUR, Intro } from "./Intro";
import { S1_DUUR, S1Probleem } from "./S1Probleem";
import { S2_DUUR, S2DrieAanhalingstekens } from "./S2DrieAanhalingstekens";
import { S3_DUUR, S3Knip } from "./S3Knip";
import { S4_DUUR, S4Letterlijk } from "./S4Letterlijk";
import { S5_DUUR, S5Afsluiter } from "./S5Afsluiter";

// H3, content/2_tekst/7_unicode.md, sectie "Raw string literals".
const OVERGANG = 15;
const DUREN = [INTRO_DUUR, S1_DUUR, S2_DUUR, S3_DUUR, S4_DUUR, S5_DUUR];

export const DUUR = DUREN.reduce((som, d) => som + d, 0) - OVERGANG * (DUREN.length - 1);

const timing = linearTiming({ durationInFrames: OVERGANG });

export const RawStringLiterals: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: C.OFFWHITE }}>
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={INTRO_DUUR}>
        <Intro />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={timing} />
      <TransitionSeries.Sequence durationInFrames={S1_DUUR}>
        <S1Probleem />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={timing} />
      <TransitionSeries.Sequence durationInFrames={S2_DUUR}>
        <S2DrieAanhalingstekens />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={timing} />
      <TransitionSeries.Sequence durationInFrames={S3_DUUR}>
        <S3Knip />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={timing} />
      <TransitionSeries.Sequence durationInFrames={S4_DUUR}>
        <S4Letterlijk />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={timing} />
      <TransitionSeries.Sequence durationInFrames={S5_DUUR}>
        <S5Afsluiter />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  </AbsoluteFill>
);
