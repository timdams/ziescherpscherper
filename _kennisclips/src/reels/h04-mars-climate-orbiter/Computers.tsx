import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { BEWEEG, POP, venster, voortgang } from "../../stijl/anim";
import { HAND, MONO } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";
import { Ruw, lijn, rechthoek, samen, type Vak } from "../../stijl/ruw";
import { FASE } from "./tijdlijn";

// Geen kapotte motor, geen stukke sensor: twee stukken software en een getal zonder eenheid.

const SCHERM_L: Vak = { x: 80, y: 700, w: 320, h: 230 };
const SCHERM_R: Vak = { x: 660, y: 700, w: 320, h: 230 };
const midden = (s: Vak) => s.x + s.w / 2;
const KAART_Y = 790;
const ETIKET_Y = 889;

const monitor = (s: Vak, seed: number) =>
  samen(
    rechthoek(s.x, s.y, s.w, s.h, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.6, seed }),
    lijn(midden(s), s.y + s.h, midden(s), s.y + s.h + 50, { strokeWidth: 2.6, seed: seed + 1 }),
    lijn(midden(s) - 70, s.y + s.h + 52, midden(s) + 70, s.y + s.h + 50, { strokeWidth: 2.6, seed: seed + 2 }),
  );
const MONITOR_L = monitor(SCHERM_L, 910);
const MONITOR_R = monitor(SCHERM_R, 920);

const DOORHAAL_1 = lijn(280, 794, 800, 788, { stroke: C.RED, strokeWidth: 5, roughness: 1.3, seed: 930 });
const DOORHAAL_2 = lijn(280, 934, 800, 929, { stroke: C.RED, strokeWidth: 5, roughness: 1.3, seed: 931 });

const KAART = rechthoek(-60, -42, 120, 84, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.4, seed: 940 });
const ETIKET_LBF = rechthoek(-140, -24, 280, 48, { fill: C.WHITE, fillStyle: "solid", stroke: C.RED, strokeWidth: 2.4, seed: 941 });
const ETIKET_NS = rechthoek(-140, -24, 280, 48, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.4, seed: 942 });

const Op: React.FC<{
  x: number;
  y: number;
  hoek?: number;
  schaal?: number;
  opacity?: number;
  children: React.ReactNode;
}> = ({ x, y, hoek = 0, schaal = 1, opacity = 1, children }) =>
  opacity <= 0 ? null : (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: `rotate(${hoek}deg) scale(${schaal})`,
        transformOrigin: "0 0",
        opacity: Math.min(1, opacity),
      }}
    >
      {children}
    </div>
  );

const tekstOp = (w: number, h: number, grootte: number, kleur: string, familie = HAND): React.CSSProperties => ({
  position: "absolute",
  left: -w / 2,
  top: -h / 2,
  width: w,
  height: h,
  lineHeight: `${h}px`,
  textAlign: "center",
  fontFamily: familie,
  fontSize: grootte,
  fontWeight: 700,
  color: kleur,
  whiteSpace: "nowrap",
});

const woord = (top: number): React.CSSProperties => ({
  position: "absolute",
  left: 0,
  right: 0,
  top,
  textAlign: "center",
  fontFamily: HAND,
  fontSize: 84,
  fontWeight: 700,
  lineHeight: 1,
  color: C.GRAY,
});

const label = (s: Vak, top: number, grootte: number, gewicht: number): React.CSSProperties => ({
  position: "absolute",
  left: midden(s) - 200,
  width: 400,
  top,
  textAlign: "center",
  fontFamily: HAND,
  fontSize: grootte,
  fontWeight: gewicht,
  lineHeight: 1.15,
  color: C.GRAY,
});

const Console: React.FC<{ s: Vak; opacity: number }> = ({ s, opacity }) =>
  opacity <= 0 ? null : (
    <div
      style={{
        position: "absolute",
        left: s.x + 12,
        top: s.y + 12,
        width: s.w - 24,
        height: s.h - 24,
        background: C.CONSOLE_BG,
        borderRadius: 8,
        opacity,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: MONO,
        fontSize: 34,
        fontWeight: 500,
        lineHeight: 1.5,
        color: C.CONSOLE_TEKST,
      }}
    >
      <div>gecompileerd</div>
      <div>0 fouten</div>
    </div>
  );

export const Computers: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = venster(f, FASE.oorzaak, FASE.betekenis, 15);
  if (zicht <= 0) return null;

  const woorden = venster(f, FASE.oorzaak + 5, 668, 12);
  const schermPop = voortgang(f, 665, 25, POP);
  const schermZicht = voortgang(f, 665, 10);

  const vlucht = voortgang(f, 915, 70, BEWEEG);
  const kaartX = midden(SCHERM_L) + (midden(SCHERM_R) - midden(SCHERM_L)) * vlucht;
  const kaartY = KAART_Y - 170 * Math.sin(Math.PI * vlucht);
  const kaartZicht = venster(f, 850, FASE.stil + 15, 12);
  // Het getal vertrekt, de eenheid blijft achter op het linkerscherm.
  const lbfZicht = venster(f, 870, FASE.stil + 15, 12);
  const nsZicht = venster(f, 1000, FASE.stil + 15, 12);
  const donker = voortgang(f, FASE.stil + 10, 15);

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      {woorden > 0 ? (
        <AbsoluteFill style={{ opacity: woorden }}>
          <div style={woord(740)}>kapotte motor</div>
          <div style={woord(880)}>stukke sensor</div>
          <Ruw vorm={DOORHAAL_1} toon={voortgang(f, 585, 20)} />
          <Ruw vorm={DOORHAAL_2} toon={voortgang(f, 620, 20)} />
        </AbsoluteFill>
      ) : null}

      {schermZicht > 0 ? (
        <AbsoluteFill style={{ opacity: schermZicht }}>
          <AbsoluteFill
            style={{
              transform: `scale(${0.7 + 0.3 * schermPop})`,
              transformOrigin: `${midden(SCHERM_L)}px 815px`,
            }}
          >
            <Ruw vorm={MONITOR_L} />
            <div style={label(SCHERM_L, 1005, 44, 700)}>grondsoftware</div>
            <div style={label(SCHERM_L, 1058, 38, 400)}>van Lockheed Martin</div>
          </AbsoluteFill>
          <AbsoluteFill
            style={{
              transform: `scale(${0.7 + 0.3 * schermPop})`,
              transformOrigin: `${midden(SCHERM_R)}px 815px`,
            }}
          >
            <Ruw vorm={MONITOR_R} />
            <div style={label(SCHERM_R, 1005, 44, 700)}>module van NASA</div>
          </AbsoluteFill>
        </AbsoluteFill>
      ) : null}

      <Op x={midden(SCHERM_L)} y={ETIKET_Y} opacity={lbfZicht}>
        <Ruw vorm={ETIKET_LBF} />
        <div style={tekstOp(280, 48, 32, C.RED_DARK)}>pound-force seconden</div>
      </Op>
      <Op x={midden(SCHERM_R)} y={ETIKET_Y} opacity={nsZicht}>
        <Ruw vorm={ETIKET_NS} />
        <div style={tekstOp(280, 48, 32, C.GRAY)}>newton-seconden</div>
      </Op>
      <Op x={kaartX} y={kaartY} schaal={0.6 + 0.4 * voortgang(f, 850, 18, POP)} opacity={kaartZicht}>
        <Ruw vorm={KAART} />
        <div style={tekstOp(120, 84, 60, C.GRAY, MONO)}>1</div>
      </Op>

      <Console s={SCHERM_L} opacity={donker} />
      <Console s={SCHERM_R} opacity={donker} />
    </AbsoluteFill>
  );
};
