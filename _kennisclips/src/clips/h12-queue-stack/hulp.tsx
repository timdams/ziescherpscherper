import React from "react";
import { useCurrentFrame } from "remotion";
import { POP, opBaan, voortgang, type Sleutel } from "../../stijl/anim";
import { Kaartje } from "../../stijl/kaartje";

// label staat in stijl/tekst.tsx.
export { label } from "../../stijl/tekst";

/** Een kaartje dat op zijn eigen frame verschijnt en een baan van sleutelpunten volgt. */
export type Kaart = {
  tekst: string;
  seed: number;
  verschijnt: number;
  baan: Sleutel[];
  weg?: number;
  accent?: number;
};

export const KaartOpBaan: React.FC<{ k: Kaart; w: number; h: number; grootte?: number }> = ({
  k,
  w,
  h,
  grootte = 34,
}) => {
  const f = useCurrentFrame();
  if (f < k.verschijnt) return null;
  const plaats = opBaan(f, k.baan);
  const pop = voortgang(f, k.verschijnt, 12, POP);
  const weg = k.weg === undefined ? 0 : voortgang(f, k.weg, 12);
  return (
    <Kaartje
      tekst={k.tekst}
      x={plaats.x}
      y={plaats.y}
      w={w}
      h={h}
      seed={k.seed}
      grootte={grootte}
      accent={k.accent === undefined ? 0 : voortgang(f, k.accent, 10)}
      schaal={plaats.s * (0.6 + 0.4 * pop)}
      opacity={voortgang(f, k.verschijnt, 8) * (1 - weg)}
    />
  );
};
