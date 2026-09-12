import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { IN, venster, voortgang } from "../../stijl/anim";
import { HAND } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";
import { Ruw, cirkel, lijn, rechthoek, samen, veelhoek } from "../../stijl/ruw";
import { FASE } from "./tijdlijn";

// Mars met zijn atmosfeer, de geplande baan en de sonde die te laag binnenkomt.

type Punt = [number, number];
const M = { x: 540, y: 1330 };

const ATMOSFEER = cirkel(M.x, M.y, 540, { fill: C.RED_LIGHT, fillStyle: "solid", stroke: "none", roughness: 1, seed: 801 });
const PLANEET_ONDER = cirkel(M.x, M.y, 440, { fill: C.WHITE, fillStyle: "solid", stroke: "none", seed: 799 });
const PLANEET = cirkel(M.x, M.y, 440, {
  fill: C.RED,
  fillStyle: "hachure",
  hachureGap: 12,
  fillWeight: 1.2,
  stroke: C.RED,
  strokeWidth: 2.8,
  seed: 800,
});
const BAAN = cirkel(M.x, M.y, 660, { stroke: C.GRAY, strokeWidth: 2.2, roughness: 1.2, seed: 802 });

// De werkelijke weg: een spiraal die eindigt binnen de atmosfeer (straal 270), net boven het oppervlak (220).
const N = 140;
const SPIRAAL: Punt[] = Array.from({ length: N + 1 }, (_, i) => {
  const u = i / N;
  const e = u * u * (3 - 2 * u);
  const r = 760 + (240 - 760) * e + Math.sin(i * 1.7) * 1.6 + Math.sin(i * 0.43) * 1.2;
  const hoek = ((-60 - 140 * u) * Math.PI) / 180;
  return [M.x + r * Math.cos(hoek), M.y + r * Math.sin(hoek)];
});

const puntOp = (u: number): Punt => {
  const p = Math.max(0, Math.min(1, u)) * N;
  const i = Math.min(N - 1, Math.floor(p));
  const t = p - i;
  return [
    SPIRAAL[i][0] + (SPIRAAL[i + 1][0] - SPIRAAL[i][0]) * t,
    SPIRAAL[i][1] + (SPIRAAL[i + 1][1] - SPIRAAL[i][1]) * t,
  ];
};

/** Het deel van de spiraal dat de sonde al afgelegd heeft. Zonder toeval, dus het trilt niet. */
const spoorTot = (u: number) => {
  const i = Math.floor(Math.max(0, Math.min(1, u)) * N);
  const punten = SPIRAAL.slice(0, i + 1).concat([puntOp(u)]);
  return "M " + punten.map((q) => `${q[0].toFixed(1)} ${q[1].toFixed(1)}`).join(" L ");
};

const SONDE = samen(
  lijn(-36, 0, 36, 0, { strokeWidth: 2.4, seed: 813 }),
  rechthoek(-24, -18, 48, 36, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.6, seed: 810 }),
  rechthoek(-78, -12, 44, 24, { fill: C.GRAY, fillStyle: "hachure", hachureGap: 5, fillWeight: 1.2, strokeWidth: 2, seed: 811 }),
  rechthoek(34, -12, 44, 24, { fill: C.GRAY, fillStyle: "hachure", hachureGap: 5, fillWeight: 1.2, strokeWidth: 2, seed: 812 }),
);

const BREUK = FASE.teLaag + 210;
const PUF = cirkel(0, 0, 200, {
  fill: C.RED_LIGHT,
  fillStyle: "hachure",
  hachureGap: 7,
  fillWeight: 2,
  stroke: C.RED,
  strokeWidth: 2.6,
  seed: 830,
});
const grijsVlak = { fill: C.GRAY, fillStyle: "hachure", hachureGap: 5, fillWeight: 1.2, strokeWidth: 2 };
const witVlak = { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.4 };
const BROKSTUKKEN = [
  { vorm: rechthoek(-16, -11, 32, 22, { ...witVlak, seed: 820 }), richting: -150, afstand: 170, draai: 260 },
  { vorm: rechthoek(-21, -8, 42, 16, { ...grijsVlak, seed: 821 }), richting: -80, afstand: 190, draai: -300 },
  { vorm: rechthoek(-21, -8, 42, 16, { ...grijsVlak, seed: 822 }), richting: 160, afstand: 150, draai: 220 },
  { vorm: veelhoek([[-13, -13], [15, -5], [-3, 15]], { ...witVlak, seed: 823 }), richting: -20, afstand: 140, draai: -200 },
  { vorm: veelhoek([[-10, -10], [12, -3], [-2, 12]], { ...witVlak, seed: 824 }), richting: 110, afstand: 100, draai: 320 },
  { vorm: lijn(-15, 0, 15, 0, { strokeWidth: 2.6, seed: 825 }), richting: -115, afstand: 220, draai: 400 },
];

export const Ruimte: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = venster(f, -30, FASE.oorzaak, 15);
  if (zicht <= 0) return null;

  const u = voortgang(f, FASE.teLaag, BREUK - FASE.teLaag, (t) => t);
  const [sx, sy] = puntOp(u);
  const [ax, ay] = puntOp(u - 0.01);
  const [bx, by] = puntOp(u + 0.01);
  const hoek = (Math.atan2(by - ay, bx - ax) * 180) / Math.PI;
  const [ex, ey] = SPIRAAL[N];
  const knal = voortgang(f, BREUK, 70);
  const vlieg = voortgang(f, BREUK, 80, IN);
  const brokZicht = 1 - voortgang(f, BREUK + 40, 45);

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <Ruw vorm={ATMOSFEER} />
      <Ruw vorm={PLANEET_ONDER} />
      <Ruw vorm={PLANEET} />

      <AbsoluteFill style={{ opacity: venster(f, 130, FASE.oorzaak + 30, 15) }}>
        <Ruw vorm={BAAN} streep="12 12" />
        <div
          style={{
            position: "absolute",
            left: 760,
            top: 1000,
            fontFamily: HAND,
            fontSize: 40,
            fontWeight: 700,
            lineHeight: 1.1,
            color: C.GRAY,
            whiteSpace: "nowrap",
          }}
        >
          geplande baan
        </div>
      </AbsoluteFill>

      {f >= FASE.teLaag ? (
        <svg style={{ position: "absolute", left: 0, top: 0, width: 1080, height: 1920, overflow: "visible" }}>
          <path d={spoorTot(u)} stroke={C.RED} strokeWidth={3.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : null}

      <div
        style={{
          position: "absolute",
          left: sx,
          top: sy,
          transform: `rotate(${hoek}deg)`,
          transformOrigin: "0 0",
          opacity: venster(f, 150, BREUK + 2, 10),
        }}
      >
        <Ruw vorm={SONDE} />
      </div>

      {f >= BREUK ? (
        <>
          <div
            style={{
              position: "absolute",
              left: ex,
              top: ey,
              transform: `scale(${0.3 + knal})`,
              transformOrigin: "0 0",
              opacity: 1 - knal * knal,
            }}
          >
            <Ruw vorm={PUF} />
          </div>
          {BROKSTUKKEN.map((b, i) => {
            const rad = (b.richting * Math.PI) / 180;
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: ex + Math.cos(rad) * b.afstand * vlieg,
                  top: ey + Math.sin(rad) * b.afstand * vlieg,
                  transform: `rotate(${b.draai * vlieg}deg)`,
                  transformOrigin: "0 0",
                  opacity: brokZicht,
                }}
              >
                <Ruw vorm={b.vorm} />
              </div>
            );
          })}
        </>
      ) : null}
    </AbsoluteFill>
  );
};
