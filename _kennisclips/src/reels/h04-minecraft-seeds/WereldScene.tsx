import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { venster, voortgang } from "../../stijl/anim";
import { HAND, MONO } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";
import { Ruw, pijl, rechthoek } from "../../stijl/ruw";
import { handOp } from "./hulp";
import { REEKS_666 } from "./random";
import { Tegel, Wereld, soortVoor, type Soort } from "./Tegels";
import { FASE } from "./tijdlijn";

// "ligt met die ene waarde je hele wereld vast: elk dorp, elke grot, elke erts-ader."

const T = 100;
const GX = 140;
const GY = 700;
const START = FASE.wereld + 20;
const STAP = 7;

const LEGENDE: { soort: Soort; tekst: string; x: number; y: number }[] = [
  { soort: "gras", tekst: "0-3: gras", x: 140, y: 1140 },
  { soort: "steen", tekst: "4-5: steen", x: 420, y: 1140 },
  { soort: "water", tekst: "6: water", x: 700, y: 1140 },
  { soort: "erts", tekst: "7: erts-ader", x: 140, y: 1230 },
  { soort: "grot", tekst: "8: grot", x: 420, y: 1230 },
  { soort: "dorp", tekst: "9: dorp", x: 700, y: 1230 },
];
const MARKERINGEN = LEGENDE.map((l, i) =>
  rechthoek(l.x - 10, l.y - 8, 270, 80, { fill: C.RED_LIGHT, fillStyle: "solid", stroke: "none", roughness: 1.2, seed: 1450 + i }),
);
const KAARTJE = rechthoek(560, 592, 70, 80, { fill: C.WHITE, fillStyle: "solid", stroke: C.RED, strokeWidth: 2.6, seed: 1460 });
const PIJLTJE = pijl(470, 632, 545, 632, { strokeWidth: 2.4, seed: 1461 }, 14);

export const WereldScene: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = venster(f, FASE.wereld, FASE.delen, 15);
  if (zicht <= 0) return null;

  const zichtbaar = (f - START) / STAP;
  const bezig = f >= START && zichtbaar < REEKS_666.length + 1;
  const huidig = Math.max(0, Math.min(REEKS_666.length - 1, Math.floor(zichtbaar)));
  const getal = REEKS_666[huidig];

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <AbsoluteFill style={{ opacity: voortgang(f, START - 10, 10) }}>
        <div
          style={{
            position: "absolute",
            left: 140,
            top: 612,
            fontFamily: MONO,
            fontSize: 40,
            fontWeight: 700,
            lineHeight: 1,
            color: C.GRAY,
          }}
        >
          a.Next(0, 10)
        </div>
        <Ruw vorm={PIJLTJE} />
        <Ruw vorm={KAARTJE} />
        <div
          style={{
            position: "absolute",
            left: 560,
            top: 592,
            width: 70,
            height: 80,
            lineHeight: "80px",
            textAlign: "center",
            fontFamily: MONO,
            fontSize: 50,
            fontWeight: 700,
            color: C.RED_DARK,
          }}
        >
          {getal}
        </div>
      </AbsoluteFill>

      <Wereld x={GX} y={GY} T={T} getallen={REEKS_666} kolommen={8} zichtbaar={zichtbaar} />

      {LEGENDE.map((l, i) => (
        <React.Fragment key={l.soort}>
          <Ruw vorm={MARKERINGEN[i]} opacity={bezig && soortVoor(getal) === l.soort ? 1 : 0} />
          <Tegel soort={l.soort} x={l.x} y={l.y} T={64} opacity={voortgang(f, FASE.wereld + 5 + i * 3, 10)} />
          <div
            style={{
              position: "absolute",
              left: l.x + 78,
              top: l.y,
              height: 64,
              lineHeight: "64px",
              fontFamily: HAND,
              fontSize: 40,
              fontWeight: 700,
              color: C.GRAY,
              whiteSpace: "nowrap",
              opacity: voortgang(f, FASE.wereld + 5 + i * 3, 10),
            }}
          >
            {l.tekst}
          </div>
        </React.Fragment>
      ))}
      <div style={{ ...handOp(540, 1335, 34), fontWeight: 400, opacity: voortgang(f, FASE.wereld + 30, 15) }}>
        (sterk vereenvoudigd)
      </div>
    </AbsoluteFill>
  );
};
