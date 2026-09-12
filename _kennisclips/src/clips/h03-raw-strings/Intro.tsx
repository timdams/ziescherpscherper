import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { POP, voortgang } from "../../stijl/anim";
import { HAND } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";
import { Ruw, lijn } from "../../stijl/ruw";

export const INTRO_DUUR = 90;

const ONDERLIJN = lijn(470, 612, 1450, 604, {
  stroke: C.RED,
  strokeWidth: 5,
  roughness: 1.3,
  seed: 1,
});

export const Intro: React.FC = () => {
  const f = useCurrentFrame();
  const pop = voortgang(f, 0, 26, POP);
  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 350,
          textAlign: "center",
          fontFamily: HAND,
          fontSize: 170,
          fontWeight: 700,
          lineHeight: 1,
          color: C.GRAY,
          opacity: voortgang(f, 0, 12),
          transform: `scale(${0.85 + 0.15 * pop})`,
        }}
      >
        Raw string literals
      </div>
      <Ruw vorm={ONDERLIJN} toon={voortgang(f, 22, 26)} />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 650,
          textAlign: "center",
          fontFamily: HAND,
          fontSize: 66,
          fontWeight: 700,
          color: C.RED_DARK,
          opacity: voortgang(f, 42, 16),
        }}
      >
        sinds C# 11
      </div>
    </AbsoluteFill>
  );
};
