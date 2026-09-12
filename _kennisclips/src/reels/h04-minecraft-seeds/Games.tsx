import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { POP, bezig, getypt, venster, voortgang } from "../../stijl/anim";
import { MONO } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";
import { Ruw, rechthoek, samen, veelhoek } from "../../stijl/ruw";
import { handOp } from "./hulp";
import { FASE } from "./tijdlijn";

// "Balatro-spelers in the house? Minecrafters misschien?" Een speelkaart en een blok, zonder logo's.

const KAART = samen(
  rechthoek(180, 690, 240, 320, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.6, seed: 1100 }),
  veelhoek(
    [
      [300, 770],
      [355, 850],
      [300, 930],
      [245, 850],
    ],
    { fill: C.RED, fillStyle: "solid", stroke: C.RED_DARK, strokeWidth: 2.2, seed: 1101 },
  ),
);
const KUBUS = samen(
  veelhoek(
    [
      [780, 700],
      [900, 760],
      [780, 820],
      [660, 760],
    ],
    { fill: C.RED_LIGHT, fillStyle: "hachure", hachureGap: 8, fillWeight: 1.8, stroke: C.GRAY, strokeWidth: 2.6, seed: 1102 },
  ),
  veelhoek(
    [
      [660, 760],
      [780, 820],
      [780, 960],
      [660, 900],
    ],
    { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.6, seed: 1103 },
  ),
  veelhoek(
    [
      [780, 820],
      [900, 760],
      [900, 900],
      [780, 960],
    ],
    { fill: C.GRAY, fillStyle: "hachure", hachureGap: 8, fillWeight: 1.4, strokeWidth: 2.6, seed: 1104 },
  ),
);
const VELD = rechthoek(620, 1190, 320, 100, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.6, seed: 1105 });

export const Games: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = venster(f, FASE.games, FASE.pseudo, 15);
  if (zicht <= 0) return null;
  const s = FASE.games;
  const kaartPop = voortgang(f, s + 10, 20, POP);
  const kubusPop = voortgang(f, s + 30, 20, POP);

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <AbsoluteFill style={{ opacity: voortgang(f, s + 10, 8), transform: `scale(${0.8 + 0.2 * kaartPop})`, transformOrigin: "300px 850px" }}>
        <Ruw vorm={KAART} />
        <div style={handOp(300, 1030, 56)}>Balatro</div>
      </AbsoluteFill>
      <AbsoluteFill style={{ opacity: voortgang(f, s + 30, 8), transform: `scale(${0.8 + 0.2 * kubusPop})`, transformOrigin: "780px 830px" }}>
        <Ruw vorm={KUBUS} />
        <div style={handOp(780, 1030, 56)}>Minecraft</div>
      </AbsoluteFill>
      <AbsoluteFill style={{ opacity: voortgang(f, s + 100, 12) }}>
        <div style={{ ...handOp(660, 1132, 44), textAlign: "left", left: 624 }}>seed</div>
        <Ruw vorm={VELD} />
        <div
          style={{
            position: "absolute",
            left: 650,
            top: 1190,
            height: 100,
            lineHeight: "100px",
            fontFamily: MONO,
            fontSize: 64,
            fontWeight: 700,
            color: C.RED_DARK,
            whiteSpace: "pre",
          }}
        >
          {getypt("666", f, s + 115, 5)}
          {bezig(f, s + 115, s + 140) ? (
            <span style={{ display: "inline-block", width: 4, height: 60, marginLeft: 2, verticalAlign: "middle", background: C.RED_DARK }} />
          ) : null}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
