import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { venster, voortgang } from "../../stijl/anim";
import { LAAG_BOVEN, LAAG_ONDER } from "./fort";
import { FASE } from "./tijdlijn";
import { MIDDEN, SpelVenster, schuin } from "./Wereld";

// "De wereld wordt laag per laag gesimuleerd": een laag erboven en een laag eronder, schuin zoals het fort
// zelf in deze fase. Het fort (in Wereld.tsx) is de middelste laag.

const Laag: React.FC<{ midden: number; rooster: string[]; opacity: number }> = ({ midden, rooster, opacity }) => (
  <AbsoluteFill
    style={{
      opacity,
      transform: `translate(0px, ${midden - MIDDEN.y}px) scale(0.75) ${schuin(0)}`,
      transformOrigin: `${MIDDEN.x}px ${MIDDEN.y}px`,
    }}
  >
    <SpelVenster rooster={rooster} />
  </AbsoluteFill>
);

export const Lagen: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = venster(f, FASE.lagen, FASE.water - 15, 12);
  if (zicht <= 0) return null;
  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <Laag midden={790} rooster={LAAG_BOVEN} opacity={voortgang(f, FASE.lagen + 10, 12)} />
      <Laag midden={1210} rooster={LAAG_ONDER} opacity={voortgang(f, FASE.lagen + 25, 12)} />
    </AbsoluteFill>
  );
};
