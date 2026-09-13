import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { POP, venster, voortgang } from "../../stijl/anim";
import { HAND } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";
import { Ruw, rechthoek } from "../../stijl/ruw";
import { Weegschaal } from "../../stijl/weegschaal";
import { FASE } from "./tijdlijn";

// "Een sexy frontend is minder waard dan een backend die gewoon werkt." Toegevoegd: de weegschaal als beeld.

const BACKEND = rechthoek(-330, -174, 260, 160, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.8, seed: 7403 });
const FRONTEND = rechthoek(190, -94, 150, 80, { fill: C.RED_LIGHT, fillStyle: "solid", stroke: C.RED, strokeWidth: 2.6, seed: 7404 });

const blokTekst = (x: number, y: number, w: number, h: number, grootte: number, kleur: string): React.CSSProperties => ({
  position: "absolute",
  left: x,
  top: y,
  width: w,
  height: h,
  lineHeight: `${h}px`,
  textAlign: "center",
  fontFamily: HAND,
  fontSize: grootte,
  fontWeight: 700,
  color: kleur,
  whiteSpace: "nowrap",
});

export const Backend: React.FC = () => {
  const f = useCurrentFrame();
  const s = FASE.backend;
  const zicht = venster(f, s, FASE.csharp, 15);
  if (zicht <= 0) return null;
  const hoek = -0.13 * voortgang(f, s + 45, 30, POP);
  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <Weegschaal x={540} y={1040} hoek={hoek} seed={7400}>
        <div style={{ opacity: voortgang(f, s + 10, 10) }}>
          <Ruw vorm={FRONTEND} />
          <div style={blokTekst(190, -94, 150, 80, 40, C.RED_DARK)}>frontend</div>
        </div>
        <div style={{ opacity: voortgang(f, s + 30, 10) }}>
          <Ruw vorm={BACKEND} />
          <div style={blokTekst(-330, -174, 260, 160, 64, C.GRAY)}>backend</div>
        </div>
      </Weegschaal>
    </AbsoluteFill>
  );
};
