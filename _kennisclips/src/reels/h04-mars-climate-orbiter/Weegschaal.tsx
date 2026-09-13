import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { POP, venster, voortgang } from "../../stijl/anim";
import { HAND, MONO } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";
import { Ruw, rechthoek } from "../../stijl/ruw";
import { Weegschaal as Schaal, opPlank } from "../../stijl/weegschaal";
import { FASE } from "./tijdlijn";

// Toegevoegd, niet uit het kader: hoeveel die twee eenheden verschillen.
// 1 pound-force seconde is 4,448 newton-seconden.

const P = { x: 540, y: 880 };
const BLOK_GROOT = rechthoek(-320, -124, 130, 110, { fill: C.WHITE, fillStyle: "solid", stroke: C.RED, strokeWidth: 2.6, seed: 963 });
const BLOK_KLEIN = rechthoek(250, -74, 70, 60, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.4, seed: 964 });

const GROOT_X = -255;
const KLEIN_X = 285;

const blokTekst = (x: number, y: number, w: number, h: number, grootte: number, kleur: string): React.CSSProperties => ({
  position: "absolute",
  left: x,
  top: y,
  width: w,
  height: h,
  lineHeight: `${h}px`,
  textAlign: "center",
  fontFamily: MONO,
  fontSize: grootte,
  fontWeight: 700,
  color: kleur,
});

const label = (x: number, top: number): React.CSSProperties => ({
  position: "absolute",
  left: x - 180,
  width: 360,
  top,
  textAlign: "center",
  fontFamily: HAND,
  fontSize: 38,
  fontWeight: 700,
  lineHeight: 1.1,
  color: C.GRAY,
  whiteSpace: "nowrap",
});

export const Weegschaal: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = venster(f, FASE.betekenis, FASE.les, 15);
  if (zicht <= 0) return null;

  const a = -0.14 * voortgang(f, FASE.betekenis + 40, 30, POP);
  const links = opPlank(P.x, P.y, a, GROOT_X);
  const rechts = opPlank(P.x, P.y, a, KLEIN_X);

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <Schaal x={P.x} y={P.y} hoek={a} seed={960}>
        <Ruw vorm={BLOK_GROOT} />
        <div style={blokTekst(-320, -124, 130, 110, 56, C.RED_DARK)}>1</div>
        <Ruw vorm={BLOK_KLEIN} />
        <div style={blokTekst(250, -74, 70, 60, 36, C.GRAY)}>1</div>
      </Schaal>
      <div style={label(links.x - 10, links.y + 36)}>1 pound-force seconde</div>
      <div style={label(rechts.x, rechts.y + 36)}>1 newton-seconde</div>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 1090,
          textAlign: "center",
          fontFamily: HAND,
          fontSize: 46,
          fontWeight: 700,
          lineHeight: 1.2,
          color: C.RED_DARK,
          opacity: voortgang(f, FASE.betekenis + 80, 15),
        }}
      >
        <div>1 pound-force seconde</div>
        <div>is ongeveer 4,45 newton-seconden</div>
      </div>
    </AbsoluteFill>
  );
};
