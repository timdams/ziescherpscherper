import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { BEWEEG, POP, WEG, venster, voortgang } from "../../stijl/anim";
import { HAND, MONO } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";
import { Ruw, rechthoek } from "../../stijl/ruw";
import { PANEEL } from "./maten";
import { FASE, OVERLOOP_KLAAR, RIMPEL, bitsOp, getoond } from "./tijdlijn";

// Het paneel van de teller: eerst een gewoon getal, daarna de 8 bits waarin dat getal zit.

const PANEEL_VORM = rechthoek(PANEEL.x, PANEEL.y, PANEEL.w, PANEEL.h, {
  fill: C.WHITE,
  fillStyle: "solid",
  strokeWidth: 2.6,
  seed: 12,
});

const CEL_X = 120;
const CEL_Y = 752;
const CEL_B = 80;
const CEL_H = 100;
const GEWICHTEN = [128, 64, 32, 16, 8, 4, 2, 1];

const CEL_WIT = GEWICHTEN.map((_, i) =>
  rechthoek(CEL_X + i * CEL_B, CEL_Y, CEL_B, CEL_H, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.2, seed: 200 + i }),
);
const CEL_ROOD = GEWICHTEN.map((_, i) =>
  rechthoek(CEL_X + i * CEL_B, CEL_Y, CEL_B, CEL_H, {
    fill: C.RED_LIGHT,
    fillStyle: "hachure",
    hachureGap: 8,
    fillWeight: 2,
    stroke: C.RED,
    strokeWidth: 2.4,
    seed: 210 + i,
  }),
);
// De negende bit: past niet meer in het paneel.
const SPOOKCEL = rechthoek(CEL_X - CEL_B, CEL_Y, CEL_B, CEL_H, { stroke: C.RED, strokeWidth: 2.4, seed: 220 });

const celTekst = (i: number): React.CSSProperties => ({
  position: "absolute",
  left: CEL_X + i * CEL_B,
  top: CEL_Y,
  width: CEL_B,
  height: CEL_H,
  lineHeight: `${CEL_H}px`,
  textAlign: "center",
  fontFamily: MONO,
  fontSize: 56,
  fontWeight: 700,
  color: C.GRAY,
});

export const Teller: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = venster(f, FASE.teller, FASE.oplossing, 15);
  if (zicht <= 0) return null;

  const naarBits = voortgang(f, FASE.bits, 40, BEWEEG);
  const grootte = 180 + (64 - 180) * naarBits;
  const cx = 540 + (905 - 540) * naarBits;
  const cy = 800 + 2 * naarBits;
  const bits = bitsOp(f);
  const valt = voortgang(f, OVERLOOP_KLAAR + 14, 36, WEG);
  const spook = f >= OVERLOOP_KLAAR - RIMPEL ? 1 - valt : 0;

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <Ruw vorm={PANEEL_VORM} />
      <div
        style={{
          position: "absolute",
          left: 110,
          top: 646,
          fontFamily: HAND,
          fontSize: 40,
          fontWeight: 700,
          lineHeight: 1.2,
          color: C.GRAY,
        }}
      >
        aantal assen
      </div>

      {GEWICHTEN.map((gewicht, i) => {
        const start = FASE.bits + 20 + i * 5;
        const zichtbaar = voortgang(f, start, 6);
        if (zichtbaar <= 0) return null;
        return (
          <React.Fragment key={i}>
            <Ruw
              vorm={bits[i] ? CEL_ROOD[i] : CEL_WIT[i]}
              schaal={0.5 + 0.5 * voortgang(f, start, 14, POP)}
              opacity={zichtbaar}
            />
            <div style={{ ...celTekst(i), opacity: zichtbaar }}>{bits[i]}</div>
            <div
              style={{
                ...celTekst(i),
                top: 706,
                height: 40,
                lineHeight: "40px",
                fontFamily: HAND,
                fontSize: 34,
                opacity: voortgang(f, FASE.bits + 60, 15),
              }}
            >
              {gewicht}
            </div>
          </React.Fragment>
        );
      })}

      <div
        style={{
          position: "absolute",
          left: cx,
          top: cy,
          transform: "translate(-50%, -50%)",
          fontFamily: MONO,
          fontSize: grootte,
          fontWeight: 700,
          lineHeight: 1,
          color: f >= OVERLOOP_KLAAR ? C.RED_DARK : C.GRAY,
          whiteSpace: "nowrap",
        }}
      >
        <span style={{ position: "absolute", right: "100%", opacity: naarBits, whiteSpace: "pre" }}>{"= "}</span>
        {getoond(f)}
      </div>

      {spook > 0 ? (
        <AbsoluteFill
          style={{
            opacity: spook,
            transform: `translate(${-valt * 40}px, ${valt * 320}px) rotate(${-valt * 30}deg)`,
            transformOrigin: `${CEL_X - CEL_B / 2}px ${CEL_Y + CEL_H / 2}px`,
          }}
        >
          <Ruw vorm={SPOOKCEL} streep="10 8" />
          <div style={{ ...celTekst(-1), color: C.RED_DARK }}>1</div>
        </AbsoluteFill>
      ) : null}
    </AbsoluteFill>
  );
};
