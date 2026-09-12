import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { BEWEEG, POP, venster, voortgang } from "../../stijl/anim";
import { MONO } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";
import { Ruw, lijn, rechthoek, samen, type Vak } from "../../stijl/ruw";
import { Op, cijfer, handOp } from "./hulp";
import { REEKS_666 } from "./random";
import { Wereld } from "./Tegels";
import { FASE } from "./tijdlijn";

// "Vandaar dat je in Minecraft je seed aan iemand anders kan doorgeven, en die op zijn eigen pc
// precies jouw wereld terugkrijgt."

const LINKS: Vak = { x: 80, y: 700, w: 400, h: 280 };
const RECHTS: Vak = { x: 600, y: 700, w: 400, h: 280 };
const midden = (s: Vak) => s.x + s.w / 2;

const monitor = (s: Vak, seed: number) =>
  samen(
    rechthoek(s.x, s.y, s.w, s.h, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.6, seed }),
    lijn(midden(s), s.y + s.h, midden(s), s.y + s.h + 50, { strokeWidth: 2.6, seed: seed + 1 }),
    lijn(midden(s) - 80, s.y + s.h + 52, midden(s) + 80, s.y + s.h + 50, { strokeWidth: 2.6, seed: seed + 2 }),
  );
const MONITOR_L = monitor(LINKS, 1500);
const MONITOR_R = monitor(RECHTS, 1510);
const BRIEFJE = rechthoek(-70, -40, 140, 80, { fill: C.WHITE, fillStyle: "solid", stroke: C.RED, strokeWidth: 2.6, seed: 1520 });

const seedLabel = (s: Vak): React.CSSProperties => ({
  position: "absolute",
  left: s.x,
  width: s.w,
  top: s.y + 22,
  textAlign: "center",
  fontFamily: MONO,
  fontSize: 30,
  fontWeight: 700,
  lineHeight: 1,
  color: C.GRAY,
});

export const Delen: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = venster(f, FASE.delen, FASE.forums, 15);
  if (zicht <= 0) return null;
  const s = FASE.delen;
  const pop = voortgang(f, s, 20, POP);
  const vlieg = voortgang(f, s + 40, 60, BEWEEG);

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <AbsoluteFill style={{ transform: `scale(${0.8 + 0.2 * pop})`, transformOrigin: "540px 840px" }}>
        <Ruw vorm={MONITOR_L} />
        <Ruw vorm={MONITOR_R} />
        <div style={handOp(midden(LINKS), 1055, 46)}>jouw pc</div>
        <div style={handOp(midden(RECHTS), 1055, 46)}>pc van je vriend</div>
      </AbsoluteFill>

      <AbsoluteFill style={{ opacity: voortgang(f, s + 10, 15) }}>
        <div style={seedLabel(LINKS)}>seed 666</div>
        <Wereld x={LINKS.x + 40} y={LINKS.y + 80} T={40} getallen={REEKS_666} kolommen={8} zichtbaar={REEKS_666.length} />
      </AbsoluteFill>

      <Op
        x={midden(LINKS) + (midden(RECHTS) - midden(LINKS)) * vlieg}
        y={740 - 120 * Math.sin(Math.PI * vlieg)}
        opacity={venster(f, s + 25, s + 115, 10)}
      >
        <Ruw vorm={BRIEFJE} />
        <div style={cijfer(140, 80, 44, C.RED_DARK)}>666</div>
      </Op>

      <div style={{ ...seedLabel(RECHTS), opacity: voortgang(f, s + 105, 10) }}>seed 666</div>
      <Wereld x={RECHTS.x + 40} y={RECHTS.y + 80} T={40} getallen={REEKS_666} kolommen={8} zichtbaar={(f - (s + 155)) / 3} />

      <div style={{ ...handOp(540, 790, 96, C.RED_DARK, 120), opacity: voortgang(f, s + 260, 12) }}>=</div>
    </AbsoluteFill>
  );
};
