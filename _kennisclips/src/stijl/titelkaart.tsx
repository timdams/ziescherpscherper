import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { POP, voortgang } from "./anim";
import { HAND, handBreedte } from "./fonts";
import { C } from "./kleuren";
import { Ruw, lijn } from "./ruw";

/**
 * Titelkaart van een kennisclip (1920x1080): het onderwerp in Caveat 170 px met een rode onderlijn,
 * eronder één feit.
 */
export const TitelKaart: React.FC<{ onderwerp: string; feit: string; seed?: number }> = ({
  onderwerp,
  feit,
  seed = 1,
}) => {
  const f = useCurrentFrame();
  const pop = voortgang(f, 0, 26, POP);
  const breedte = Math.min(1600, handBreedte(onderwerp, 170) * 0.9);
  const onderlijn = lijn(960 - breedte / 2, 612, 960 + breedte / 2, 604, {
    stroke: C.RED,
    strokeWidth: 5,
    roughness: 1.3,
    seed,
  });
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
        {onderwerp}
      </div>
      <Ruw vorm={onderlijn} toon={voortgang(f, 22, 26)} />
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
        {feit}
      </div>
    </AbsoluteFill>
  );
};

/** Afsluiter van een kennisclip: één regel in Caveat met een rode onderlijn, bv. het hoofdstuk. */
export const AfsluitKaart: React.FC<{ tekst: string; seed?: number }> = ({ tekst, seed = 2 }) => {
  const f = useCurrentFrame();
  const breedte = Math.min(1600, handBreedte(tekst, 84) * 0.9);
  const onderlijn = lijn(960 - breedte / 2, 600, 960 + breedte / 2, 594, {
    stroke: C.RED,
    strokeWidth: 4,
    roughness: 1.3,
    seed,
  });
  return (
    <AbsoluteFill style={{ opacity: voortgang(f, 0, 15) }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 470,
          textAlign: "center",
          fontFamily: HAND,
          fontSize: 84,
          fontWeight: 700,
          lineHeight: 1,
          color: C.GRAY,
        }}
      >
        {tekst}
      </div>
      <Ruw vorm={onderlijn} toon={voortgang(f, 20, 25)} />
    </AbsoluteFill>
  );
};
