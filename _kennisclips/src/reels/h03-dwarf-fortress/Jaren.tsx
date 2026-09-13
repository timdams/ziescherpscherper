import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { POP, venster, voortgang } from "../../stijl/anim";
import { Kaartje } from "../../stijl/kaartje";
import { C } from "../../stijl/kleuren";
import { Ruw, lijn, pijl, samen } from "../../stijl/ruw";
import { label } from "../../stijl/tekst";
import { FASE } from "./tijdlijn";

// 2002: Tarn Adams begint eraan, het jaar van GTA Vice City en Morrowind. 2006: de eerste publieke versie.

const JAAR_X = (jaar: number) => 250 + (jaar - 2002) * 145;
const AS_Y = 1150;
const AS = samen(
  pijl(110, AS_Y, 975, AS_Y, { strokeWidth: 2.8, seed: 7100 }, 18),
  ...[2002, 2003, 2004, 2005, 2006].map((jaar, i) =>
    lijn(JAAR_X(jaar), AS_Y - 16, JAAR_X(jaar), AS_Y + 16, { strokeWidth: 2.8, roughness: 0.8, seed: 7101 + i }),
  ),
);
const VIER_JAAR = lijn(JAAR_X(2002), AS_Y, JAAR_X(2006), AS_Y, { stroke: C.RED, strokeWidth: 7, roughness: 1, seed: 7110 });

export const Jaren: React.FC = () => {
  const f = useCurrentFrame();
  const s = FASE.jaren;
  const p = FASE.publiek;
  const zicht = venster(f, s, FASE.driedee, 15);
  if (zicht <= 0) return null;
  const kaart = (start: number) => ({ opacity: voortgang(f, start, 10), schaal: 0.6 + 0.4 * voortgang(f, start, 16, POP) });

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <Ruw vorm={AS} toon={voortgang(f, s, 25)} />
      <div style={{ ...label(JAAR_X(2002), AS_Y + 34, 60), opacity: voortgang(f, s + 10, 10) }}>2002</div>
      <Kaartje tekst="Tarn Adams begint" x={JAAR_X(2002)} y={850} w={360} h={84} grootte={44} seed={7120} accent={1} {...kaart(s + 12)} />
      <Kaartje tekst="GTA Vice City" x={JAAR_X(2002)} y={950} w={360} h={84} grootte={44} seed={7121} {...kaart(s + 40)} />
      <Kaartje tekst="Morrowind" x={JAAR_X(2002)} y={1050} w={360} h={84} grootte={44} seed={7122} {...kaart(s + 60)} />

      <Ruw vorm={VIER_JAAR} toon={voortgang(f, p + 5, 40)} />
      <div style={{ ...label(JAAR_X(2006), AS_Y + 34, 60, C.RED_DARK), opacity: voortgang(f, p + 35, 10) }}>2006</div>
      <Kaartje
        tekst="eerste publieke versie"
        x={JAAR_X(2006)}
        y={1050}
        w={390}
        h={84}
        grootte={44}
        seed={7123}
        accent={1}
        {...kaart(p + 45)}
      />
    </AbsoluteFill>
  );
};
