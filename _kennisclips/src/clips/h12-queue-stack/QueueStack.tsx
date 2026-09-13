import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { C } from "../../stijl/kleuren";
import { AfsluitKaart, TitelKaart } from "../../stijl/titelkaart";
import { S1_DUUR, S1Queue } from "./S1Queue";
import { S2_DUUR, S2Stack } from "./S2Stack";
import { S3_DUUR, S3NaastElkaar } from "./S3NaastElkaar";

// H12, content/11_arraysvanklassen/dict.md, secties Queue<> en Stack<>.
// Scenario 6 in future/kennisclips-scenarios.md.
const TITEL_DUUR = 90;
const AFSLUITER_DUUR = 150;
const OVERGANG = 15;
const DUREN = [TITEL_DUUR, S1_DUUR, S2_DUUR, S3_DUUR, AFSLUITER_DUUR];

export const DUUR = DUREN.reduce((som, d) => som + d, 0) - OVERGANG * (DUREN.length - 1);

const timing = linearTiming({ durationInFrames: OVERGANG });

export const QueueStack: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: C.OFFWHITE }}>
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={TITEL_DUUR}>
        <TitelKaart onderwerp="Queue en Stack" feit="FIFO en LIFO" seed={3001} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={timing} />
      <TransitionSeries.Sequence durationInFrames={S1_DUUR}>
        <S1Queue />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={timing} />
      <TransitionSeries.Sequence durationInFrames={S2_DUUR}>
        <S2Stack />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={timing} />
      <TransitionSeries.Sequence durationInFrames={S3_DUUR}>
        <S3NaastElkaar />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={timing} />
      <TransitionSeries.Sequence durationInFrames={AFSLUITER_DUUR}>
        <AfsluitKaart tekst="Zie Scherp Scherper, hoofdstuk 12" seed={3002} />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  </AbsoluteFill>
);
