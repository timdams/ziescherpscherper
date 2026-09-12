import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { BEWEEG, voortgang } from "../../stijl/anim";
import { tekenBreedte, type Regel } from "../../stijl/code";
import { Ruw } from "../../stijl/ruw";
import { Onderschrift } from "../../stijl/tekst";
import { ART, OPEN_RAW, SLUIT_RAW, WRITELINE, inspring } from "./data";
import { CODE, UIT } from "./maten";
import { codeStrook, knip, uitvoerStrook } from "./vormen";
import { Werkblad } from "./Werkblad";

// Scène 3: de positie van de sluitende """ bepaalt hoeveel inspringing er weggeknipt wordt.
export const S3_DUUR = 660;

const STREEP = "18 12";
const KNIP_4 = knip(4, 1, 7, 31);
const KNIP_2 = knip(2, 1, 7, 32);
const STROOK_4 = codeStrook(1, 6, 4, 33);
const STROOK_2 = codeStrook(1, 6, 2, 34);
const UITVOER_2 = uitvoerStrook(0, 6, 2, 35);

export const S3Knip: React.FC = () => {
  const f = useCurrentFrame();
  const schuif = voortgang(f, 275, 36, BEWEEG);
  const uitSchuif = voortgang(f, 325, 36, BEWEEG);

  const code: Regel[] = [
    { rij: 0, tekst: OPEN_RAW },
    ...ART.map((a, i): Regel => ({ rij: i + 1, tekst: inspring(a, 4) })),
    { rij: 7, tekst: SLUIT_RAW, dx: -2 * tekenBreedte(CODE) * schuif },
    { rij: 8, tekst: WRITELINE },
  ];

  const uitvoer: Regel[] = ART.map((tekst, i) => ({
    rij: i,
    tekst,
    dx: 2 * tekenBreedte(UIT) * uitSchuif,
    opacity: voortgang(f, 128 + i * 6, 8),
  }));

  return (
    <AbsoluteFill>
      <Werkblad
        code={code}
        uitvoer={uitvoer}
        bovenCode={
          <>
            <Ruw vorm={STROOK_4} toon={voortgang(f, 72, 30)} richting="vanBoven" opacity={1 - schuif} />
            <Ruw vorm={STROOK_2} opacity={schuif} />
            <Ruw
              vorm={KNIP_4}
              toon={voortgang(f, 25, 40, BEWEEG)}
              richting="vanOnder"
              streep={STREEP}
              opacity={1 - schuif}
            />
            <Ruw vorm={KNIP_2} streep={STREEP} opacity={schuif} />
          </>
        }
        bovenUitvoer={<Ruw vorm={UITVOER_2} toon={voortgang(f, 368, 22)} richting="vanBoven" />}
      />
      <Onderschrift van={78} tot={262} regels={['De sluitende `"""` bepaalt wat er weggeknipt wordt']} />
      <Onderschrift
        van={275}
        tot={470}
        regels={['Schuif je de sluitende `"""` twee plaatsen naar links,', "dan blijven er twee spaties over"]}
      />
      <Onderschrift
        van={482}
        tot={S3_DUUR + 20}
        regels={["Elke lijn moet minstens even ver inspringen", 'als de sluitende `"""`']}
      />
    </AbsoluteFill>
  );
};
