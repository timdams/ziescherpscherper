import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { BEWEEG, bezig, getypt, herschrijf, venster, voortgang } from "../../stijl/anim";
import { kolomX, rijY, tekenBreedte, type Regel } from "../../stijl/code";
import { C } from "../../stijl/kleuren";
import { Ruw, pijl } from "../../stijl/ruw";
import { Noot, Onderschrift } from "../../stijl/tekst";
import { ART, OPEN_AT, SLUIT_RAW, WRITELINE, inspring } from "./data";
import { CODE, UIT } from "./maten";
import { markeer, uitvoerStrook } from "./vormen";
import { Werkblad } from "./Werkblad";

// Scène 2: @" wordt """, en de string sluit af met """ op een eigen lijn.
export const S2_DUUR = 420;

const LAATSTE_AT = inspring(ART[5], 4) + '";';
const MARK_OPEN = markeer(0, 16, 3, 21);
const MARK_SLUIT = markeer(7, 4, 3, 22);
const STROOK = uitvoerStrook(1, 6, 4, 5);
const MIDDEN_0 = rijY(CODE, 0) + CODE.hoogte / 2;
const MIDDEN_7 = rijY(CODE, 7) + CODE.hoogte / 2;
const PIJL_OPEN = pijl(
  kolomX(CODE, 19) + 62,
  MIDDEN_0,
  kolomX(CODE, 19) + 14,
  MIDDEN_0,
  { stroke: C.RED_DARK, strokeWidth: 2.6, seed: 23 },
  14,
);
const PIJL_SLUIT = pijl(
  kolomX(CODE, 8) + 62,
  MIDDEN_7,
  kolomX(CODE, 8) + 14,
  MIDDEN_7,
  { stroke: C.RED_DARK, strokeWidth: 2.6, seed: 24 },
  14,
);

export const S2DrieAanhalingstekens: React.FC = () => {
  const f = useCurrentFrame();
  const zak = voortgang(f, 84, 14, BEWEEG);

  const code: Regel[] = [
    { rij: 0, tekst: herschrijf(f, 30, OPEN_AT, 2, '"""', 4), cursor: bezig(f, 30, 56) },
    ...ART.map(
      (a, i): Regel =>
        i === 5
          ? { rij: 6, tekst: herschrijf(f, 64, LAATSTE_AT, 2, "", 4), cursor: bezig(f, 64, 78) }
          : { rij: i + 1, tekst: inspring(a, 4) },
    ),
    { rij: 7, tekst: getypt(SLUIT_RAW, f, 100, 3), cursor: bezig(f, 100, 130) },
    { rij: 7, dy: zak * CODE.hoogte, tekst: WRITELINE },
  ];

  const uitvoer: Regel[] = [""].concat(ART).map((tekst, i) => ({
    rij: i,
    tekst,
    dx: 4 * tekenBreedte(UIT),
  }));

  return (
    <AbsoluteFill>
      <Werkblad
        code={code}
        uitvoer={uitvoer}
        uitvoerOpacity={1 - 0.7 * voortgang(f, 0, 20)}
        onderCode={
          <>
            <Ruw vorm={MARK_OPEN} toon={voortgang(f, 138, 14)} />
            <Ruw vorm={MARK_SLUIT} toon={voortgang(f, 152, 14)} />
          </>
        }
        bovenCode={
          <>
            <Ruw vorm={PIJL_OPEN} toon={voortgang(f, 165, 12)} richting="vanRechts" />
            <Noot tekst="begin" x={kolomX(CODE, 19) + 74} y={MIDDEN_0} opacity={venster(f, 165, S2_DUUR + 20)} />
            <Ruw vorm={PIJL_SLUIT} toon={voortgang(f, 172, 12)} richting="vanRechts" />
            <Noot tekst="einde" x={kolomX(CODE, 8) + 74} y={MIDDEN_7} opacity={venster(f, 172, S2_DUUR + 20)} />
          </>
        }
        bovenUitvoer={<Ruw vorm={STROOK} />}
      />
      <Onderschrift
        van={170}
        tot={292}
        regels={["Sinds C# 11 is er een modernere manier: de raw string literal"]}
      />
      <Onderschrift
        van={298}
        tot={S2_DUUR + 20}
        regels={["Drie aanhalingstekens, elk op een eigen lijn"]}
      />
    </AbsoluteFill>
  );
};
