import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { POP, venster, voortgang } from "../../stijl/anim";
import { HAND } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";
import { Ruw, veelhoek } from "../../stijl/ruw";
import { label } from "../../stijl/tekst";
import { Dobbelsteen, Machine } from "./onderdelen";
import { FASE, WORPEN_AB } from "./tijdlijn";

// De oude waarschuwing, en twee generators vlak na elkaar die dezelfde worpen geven.

const DRIEHOEK = veelhoek(
  [
    [540, 660],
    [740, 1000],
    [340, 1000],
  ],
  { fill: C.RED_LIGHT, fillStyle: "solid", stroke: C.RED, strokeWidth: 4, roughness: 1.3, seed: 6010 },
);

const LINKS = [190, 310, 430];
const RECHTS = [650, 770, 890];

export const Waarschuwing: React.FC = () => {
  const f = useCurrentFrame();
  const s = FASE.waarschuwing;
  const g = FASE.generators;
  if (f < s - 5 || f >= FASE.framework) return null;

  const bord = venster(f, s, g + 15, 15);
  // De machines staan tot het eerste frame van de volgende scène, die ze op dezelfde plek overneemt.
  const machine = (start: number) => (f < FASE.framework ? voortgang(f, start, 10) : 0);

  return (
    <AbsoluteFill>
      {bord > 0 ? (
        <AbsoluteFill
          style={{
            opacity: bord,
            transform: `scale(${0.7 + 0.3 * voortgang(f, s + 5, 18, POP)})`,
            transformOrigin: "540px 850px",
          }}
        >
          <Ruw vorm={DRIEHOEK} />
          <div
            style={{
              position: "absolute",
              left: 440,
              width: 200,
              top: 770,
              textAlign: "center",
              fontFamily: HAND,
              fontSize: 200,
              fontWeight: 700,
              lineHeight: 1,
              color: C.RED_DARK,
            }}
          >
            !
          </div>
          <div style={label(540, 1030, 44)}>vorige edities</div>
        </AbsoluteFill>
      ) : null}

      <Machine x={310} y={850} seed={6040} opacity={machine(g)} schaal={0.7 + 0.3 * voortgang(f, g, 16, POP)} />
      <Machine x={770} y={850} seed={6042} opacity={machine(g + 10)} schaal={0.7 + 0.3 * voortgang(f, g + 10, 16, POP)} />
      <div style={{ ...label(310, 690, 56), opacity: venster(f, g, FASE.framework, 12) }}>a</div>
      <div style={{ ...label(770, 690, 56), opacity: venster(f, g + 10, FASE.framework, 12) }}>b</div>

      {WORPEN_AB.map((waarde, i) => (
        <React.Fragment key={i}>
          <Dobbelsteen
            waarde={waarde}
            x={LINKS[i]}
            y={1010}
            grootte={100}
            seed={6020 + i * 10}
            opacity={venster(f, g + 30 + i * 8, FASE.framework, 10)}
            schaal={0.5 + 0.5 * voortgang(f, g + 30 + i * 8, 14, POP)}
          />
          <Dobbelsteen
            waarde={waarde}
            x={RECHTS[i]}
            y={1010}
            grootte={100}
            seed={6060 + i * 10}
            opacity={venster(f, g + 65 + i * 8, FASE.framework, 10)}
            schaal={0.5 + 0.5 * voortgang(f, g + 65 + i * 8, 14, POP)}
          />
        </React.Fragment>
      ))}
      <div style={{ ...label(540, 955, 90, C.RED_DARK), opacity: venster(f, g + 95, FASE.framework, 10) }}>=</div>
    </AbsoluteFill>
  );
};
