import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { BEWEEG, bezig, getypt, voortgang } from "../../stijl/anim";
import { tekenBreedte, type Regel } from "../../stijl/code";
import { C } from "../../stijl/kleuren";
import { Ruw, pijl } from "../../stijl/ruw";
import { Onderschrift } from "../../stijl/tekst";
import { ART, OPEN_AT, WRITELINE } from "./data";
import { CODE, UIT } from "./maten";
import { uitvoerStrook } from "./vormen";
import { Werkblad } from "./Werkblad";

// Scène 1: met @ plak je de tekening in je code, maar de inspringing komt mee op het scherm.
export const S1_DUUR = 510;

const STROOK = uitvoerStrook(1, 6, 4, 5);
const PIJL = pijl(1185, 918, 1168, 668, { stroke: C.RED_DARK, strokeWidth: 2.6, seed: 9 });

export const S1Probleem: React.FC = () => {
  const f = useCurrentFrame();
  const inspringen = voortgang(f, 270, 40, BEWEEG);
  const verschuif = voortgang(f, 325, 40, BEWEEG);

  const code: Regel[] = [
    { rij: 0, tekst: getypt(OPEN_AT, f, 18, 1.2), cursor: bezig(f, 18, 46) },
    // de tekening wordt in één keer geplakt, regel per regel zichtbaar
    ...ART.map(
      (a, i): Regel => ({
        rij: i + 1,
        tekst: i === 5 ? a + '";' : a,
        dx: inspringen * 4 * tekenBreedte(CODE),
        opacity: voortgang(f, 48 + i * 5, 8),
      }),
    ),
    { rij: 7, tekst: getypt(WRITELINE, f, 85, 1), cursor: bezig(f, 85, 116) },
  ];

  // Na @" volgt een enter, dus de uitvoer begint met een lege regel.
  const uitvoer: Regel[] = [""].concat(ART).map((tekst, i) => ({
    rij: i,
    tekst,
    dx: verschuif * 4 * tekenBreedte(UIT),
    opacity: voortgang(f, 125 + i * 5, 8),
  }));

  return (
    <AbsoluteFill>
      <Werkblad
        binnen={voortgang(f, 0, 20)}
        code={code}
        uitvoer={uitvoer}
        bovenUitvoer={<Ruw vorm={STROOK} toon={voortgang(f, 368, 24)} richting="vanBoven" />}
      />
      <Onderschrift van={150} tot={262} regels={["Met `@` plak je een tekening zo in je code"]} />
      <Onderschrift
        van={268}
        tot={395}
        regels={["Eén nadeel: ook de spaties waarmee je inspringt,", "horen bij de string"]}
      />
      <Onderschrift van={400} tot={S1_DUUR + 20} regels={["Die inspringing komt mee op het scherm"]} />
      <Ruw vorm={PIJL} toon={voortgang(f, 412, 22)} richting="vanOnder" />
    </AbsoluteFill>
  );
};
