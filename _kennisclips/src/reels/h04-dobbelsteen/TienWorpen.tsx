import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { POP, venster, voortgang } from "../../stijl/anim";
import { Dobbelsteen } from "./onderdelen";
import { FASE, LUS_FRAMEWORK } from "./tijdlijn";

// "Een dobbelsteen die in een lus telkens een nieuwe Random maakte, gooide zo tien keer na elkaar
// hetzelfde getal." De worpen komen uit de echte run op .NET Framework.

const X = [220, 380, 540, 700, 860];

export const TienWorpen: React.FC = () => {
  const f = useCurrentFrame();
  const s = FASE.lus;
  const zicht = venster(f, s, FASE.huidig, 15);
  if (zicht <= 0) return null;
  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      {LUS_FRAMEWORK.map((waarde, i) => (
        <Dobbelsteen
          key={i}
          waarde={waarde}
          x={X[i % 5]}
          y={i < 5 ? 820 : 1000}
          grootte={130}
          seed={6200 + i * 10}
          opacity={voortgang(f, s + 10 + i * 8, 8)}
          schaal={0.4 + 0.6 * voortgang(f, s + 10 + i * 8, 16, POP)}
        />
      ))}
    </AbsoluteFill>
  );
};
