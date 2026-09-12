import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { POP, venster, voortgang } from "../../stijl/anim";
import { HAND, MONO } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";
import { Ruw, lijn, rechthoek, samen, veelhoek } from "../../stijl/ruw";
import { FASE } from "./tijdlijn";

// "Er zijn hele forums waar mensen niets anders doen dan goeie seeds uitwisselen."
// De berichten zijn krabbels, geen echte teksten: enkel de seed staat erop.

const BERICHTEN = [
  { y: 650, seed: "666" },
  { y: 830, seed: "42" },
  { y: 1010, seed: "8675309" },
];
const VORMEN = BERICHTEN.map((b, i) =>
  samen(
    rechthoek(110, b.y, 860, 150, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.6, seed: 1600 + i * 10 }),
    lijn(430, b.y + 45, 850, b.y + 43, { strokeWidth: 3, roughness: 1.6, seed: 1601 + i * 10 }),
    lijn(430, b.y + 80, 790, b.y + 81, { strokeWidth: 3, roughness: 1.6, seed: 1602 + i * 10 }),
    lijn(430, b.y + 115, 700, b.y + 114, { strokeWidth: 3, roughness: 1.6, seed: 1603 + i * 10 }),
    veelhoek(
      [
        [880, b.y + 95],
        [910, b.y + 50],
        [940, b.y + 95],
      ],
      { fill: C.RED, fillStyle: "solid", stroke: C.RED_DARK, strokeWidth: 2, seed: 1604 + i * 10 },
    ),
  ),
);

export const Forums: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = venster(f, FASE.forums, FASE.csharp, 15);
  if (zicht <= 0) return null;

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      {BERICHTEN.map((b, i) => {
        const start = FASE.forums + 10 + i * 25;
        const pop = voortgang(f, start, 18, POP);
        return (
          <AbsoluteFill
            key={i}
            style={{
              opacity: voortgang(f, start, 8),
              transform: `scale(${0.85 + 0.15 * pop})`,
              transformOrigin: `540px ${b.y + 75}px`,
            }}
          >
            <Ruw vorm={VORMEN[i]} />
            <div
              style={{
                position: "absolute",
                left: 140,
                top: b.y + 16,
                fontFamily: HAND,
                fontSize: 36,
                fontWeight: 700,
                lineHeight: 1,
                color: C.GRAY,
              }}
            >
              seed
            </div>
            <div
              style={{
                position: "absolute",
                left: 140,
                top: b.y + 62,
                fontFamily: MONO,
                fontSize: 56,
                fontWeight: 700,
                lineHeight: 1,
                color: C.RED_DARK,
              }}
            >
              {b.seed}
            </div>
          </AbsoluteFill>
        );
      })}
    </AbsoluteFill>
  );
};
