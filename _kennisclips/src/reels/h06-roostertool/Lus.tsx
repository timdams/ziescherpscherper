import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { POP, venster, voortgang } from "../../stijl/anim";
import { SANS } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";
import { Op } from "../../stijl/op";
import { Ruw, lijn, pad, pijl, rechthoek, samen, veelhoek } from "../../stijl/ruw";
import { label } from "../../stijl/tekst";
import { FASE } from "./tijdlijn";

// "Het programma was gewoon nooit gestopt met zoeken, en bleef geheugen opvragen tot er niets meer
// vrij was. Dat was een loop die zijn stopconditie nooit haalde." Een draaiende lus, een geheugen dat
// volloopt en een stopbord dat nooit bereikt wordt.

const MIDDEN = { x: 400, y: 920 };

// Een boog van 300 graden met de wijzers van de klok mee, met de pijlpunt linksboven.
const BOOG = pad("M 100 -173.2 A 200 200 0 1 1 -100 -173.2", { x: -210, y: -210, w: 420, h: 420 }, {
  strokeWidth: 5,
  roughness: 0.8,
  seed: 5500,
});
const PUNT = samen(
  lijn(-100, -173.2, -115.6, -147.6, { strokeWidth: 5, roughness: 0.5, seed: 5501 }),
  lijn(-100, -173.2, -130, -172.5, { strokeWidth: 5, roughness: 0.5, seed: 5502 }),
);

const GEHEUGEN_ONDER = rechthoek(800, 720, 80, 400, { fill: C.WHITE, fillStyle: "solid", stroke: "none", strokeWidth: 2.6, seed: 5510 });
const GEHEUGEN_VUL = rechthoek(800, 720, 80, 400, {
  fill: C.RED_LIGHT,
  fillStyle: "hachure",
  hachureGap: 8,
  fillWeight: 2,
  stroke: "none",
  seed: 5511,
});
const GEHEUGEN_RAND = rechthoek(800, 720, 80, 400, { strokeWidth: 2.6, seed: 5510 });

const STOP_Y = 1330;
const STOPBORD = veelhoek(
  Array.from({ length: 8 }, (_, k): [number, number] => {
    const a = ((22.5 + 45 * k) * Math.PI) / 180;
    return [MIDDEN.x + 72 * Math.cos(a), STOP_Y + 72 * Math.sin(a)];
  }),
  { fill: C.RED, fillStyle: "solid", stroke: C.RED_DARK, strokeWidth: 3, roughness: 1, seed: 5520 },
);
const UITGANG = pijl(MIDDEN.x, 1128, MIDDEN.x, 1244, { strokeWidth: 3, seed: 5530 }, 16);
const NOOIT = samen(
  lijn(375, 1162, 425, 1212, { stroke: C.RED, strokeWidth: 6, roughness: 0.8, seed: 5531 }),
  lijn(425, 1162, 375, 1212, { stroke: C.RED, strokeWidth: 6, roughness: 0.8, seed: 5532 }),
);

const lineair = (t: number) => t;

export const Lus: React.FC = () => {
  const f = useCurrentFrame();
  const s = FASE.lus;
  const zicht = venster(f, s, FASE.code, 15);
  if (zicht <= 0) return null;
  const stop = FASE.stop;

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <Op x={MIDDEN.x} y={MIDDEN.y} hoek={(f - s) * 2.4} schaal={0.7 + 0.3 * voortgang(f, s, 20, POP)}>
        <Ruw vorm={BOOG} />
        <Ruw vorm={PUNT} />
      </Op>
      <div style={label(MIDDEN.x, 858, 64)}>zoeken</div>
      <div style={{ ...label(MIDDEN.x, 936, 44, C.RED_DARK), opacity: voortgang(f, s + 25, 12) }}>rooster klaar</div>

      <Ruw vorm={GEHEUGEN_ONDER} />
      <Ruw vorm={GEHEUGEN_VUL} toon={0.35 + 0.65 * voortgang(f, 925, 120, lineair)} richting="vanOnder" />
      <Ruw vorm={GEHEUGEN_RAND} />
      <div style={label(840, 1135, 38)}>geheugen</div>
      <div style={{ ...label(840, 670, 44, C.RED_DARK), opacity: voortgang(f, 1040, 10) }}>vol</div>

      <Ruw vorm={UITGANG} toon={voortgang(f, stop + 15, 20)} richting="vanBoven" streep="12 10" />
      <Ruw vorm={NOOIT} toon={voortgang(f, stop + 45, 10)} />
      <div style={{ ...label(445, 1166, 44, C.RED_DARK, true), opacity: voortgang(f, stop + 50, 10) }}>nooit</div>
      <Op x={0} y={0} opacity={voortgang(f, stop + 5, 10)}>
        <AbsoluteFill
          style={{
            transform: `scale(${0.6 + 0.4 * voortgang(f, stop + 5, 16, POP)})`,
            transformOrigin: `${MIDDEN.x}px ${STOP_Y}px`,
          }}
        >
          <Ruw vorm={STOPBORD} />
          <div
            style={{
              position: "absolute",
              left: MIDDEN.x - 72,
              width: 144,
              top: STOP_Y - 22,
              textAlign: "center",
              fontFamily: SANS,
              fontSize: 36,
              fontWeight: 700,
              lineHeight: 1.2,
              color: C.WHITE,
            }}
          >
            STOP
          </div>
        </AbsoluteFill>
      </Op>
      <div style={{ ...label(500, 1308, 46, C.GRAY, true), opacity: voortgang(f, stop + 10, 12) }}>stopconditie</div>
    </AbsoluteFill>
  );
};
