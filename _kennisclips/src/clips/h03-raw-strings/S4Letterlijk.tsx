import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { POP, WEG, bezig, herschrijf, voortgang } from "../../stijl/anim";
import { kolomX, rijY, tekenBreedte, type Regel } from "../../stijl/code";
import { C } from "../../stijl/kleuren";
import { Ruw, lijn } from "../../stijl/ruw";
import { Onderschrift } from "../../stijl/tekst";
import { ART, BACKSLASHES, OPEN_RAW, SLUIT_RAW, WRITELINE, inspring } from "./data";
import { UIT } from "./maten";
import { markeer } from "./vormen";
import { Werkblad } from "./Werkblad";

// Scène 4: backslashes blijven letterlijk staan, en met $ ervoor werkt interpolatie.
export const S4_DUUR = 360;

const CODE_MARKERING = BACKSLASHES.map((b, k) => markeer(b.rij + 1, b.kol + 4, 1, 40 + k));
// Onderaan de rij, onder de voet van het teken en boven de volgende rij.
const UITVOER_STREEP = BACKSLASHES.map((b, k) =>
  lijn(
    kolomX(UIT, b.kol) + 1,
    rijY(UIT, b.rij) + 55,
    kolomX(UIT, b.kol) + tekenBreedte(UIT) - 1,
    rijY(UIT, b.rij) + 54,
    { stroke: C.RED, strokeWidth: 3.2, roughness: 1, seed: 60 + k },
  ),
);
const MARK_DOLLAR = markeer(0, 16, 1, 70);

export const S4Letterlijk: React.FC = () => {
  const f = useCurrentFrame();
  const weg = 1 - voortgang(f, 196, 14, WEG);

  const code: Regel[] = [
    { rij: 0, tekst: herschrijf(f, 212, OPEN_RAW, 3, '$"""', 3), cursor: bezig(f, 212, 240) },
    ...ART.map((a, i): Regel => ({ rij: i + 1, tekst: inspring(a, 4) })),
    { rij: 7, tekst: SLUIT_RAW },
    { rij: 8, tekst: WRITELINE },
  ];

  const uitvoer: Regel[] = ART.map((tekst, i) => ({ rij: i, tekst }));

  return (
    <AbsoluteFill>
      <Werkblad
        code={code}
        uitvoer={uitvoer}
        onderCode={
          <>
            {CODE_MARKERING.map((vorm, k) => (
              <Ruw
                key={k}
                vorm={vorm}
                schaal={0.4 + 0.6 * voortgang(f, 20 + k * 6, 14, POP)}
                opacity={voortgang(f, 20 + k * 6, 5) * weg}
              />
            ))}
            <Ruw vorm={MARK_DOLLAR} toon={voortgang(f, 242, 12)} />
          </>
        }
        bovenUitvoer={
          <>
            {UITVOER_STREEP.map((vorm, k) => (
              <Ruw key={k} vorm={vorm} toon={voortgang(f, 30 + k * 6, 10)} opacity={weg} />
            ))}
          </>
        }
      />
      <Onderschrift
        van={45}
        tot={200}
        regels={["Backslashes, aanhalingstekens en escape-codes zoals `\\t`", "worden net als bij `@` letterlijk genomen"]}
      />
      <Onderschrift
        van={250}
        tot={S4_DUUR + 20}
        regels={["Ook hier kan je een `$` voor zetten om interpolatie te gebruiken"]}
      />
    </AbsoluteFill>
  );
};
