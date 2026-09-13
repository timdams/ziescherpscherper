import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { POP, venster, voortgang } from "../../stijl/anim";
import { C } from "../../stijl/kleuren";
import { Ruw, doos3d } from "../../stijl/ruw";
import { label } from "../../stijl/tekst";
import { FASE } from "./tijdlijn";

// "Terwijl de rest van de wereld in 3D speelde": een doos in 3D links, het fort (Wereld.tsx) klein rechts.

const DOOS = doos3d(120, 880, 270, 230, { seed: 7200, diepte: 60 });

export const DrieD: React.FC = () => {
  const f = useCurrentFrame();
  const s = FASE.driedee;
  const zicht = venster(f, s, FASE.diep, 12);
  if (zicht <= 0) return null;
  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <AbsoluteFill
        style={{
          opacity: voortgang(f, s + 5, 10),
          transform: `scale(${0.7 + 0.3 * voortgang(f, s + 5, 18, POP)})`,
          transformOrigin: "255px 995px",
        }}
      >
        <Ruw vorm={DOOS} />
        <div style={label(255, 935, 120, C.RED_DARK)}>3D</div>
      </AbsoluteFill>
      <div style={{ ...label(285, 1185, 44), opacity: voortgang(f, s + 20, 12) }}>de rest van de wereld</div>
      <div style={{ ...label(790, 1185, 44), opacity: voortgang(f, s + 40, 12) }}>Dwarf Fortress</div>
    </AbsoluteFill>
  );
};
