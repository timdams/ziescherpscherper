import React from "react";
import { MONO } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";
import { Op } from "../../stijl/op";
import { Ruw, cirkel, rechthoek, samen, veelhoek, type Vorm } from "../../stijl/ruw";

// Een dobbelsteen en een generator-machine, allebei in lokale coördinaten rond (0, 0).

const OGEN: { [waarde: number]: [number, number][] } = {
  1: [[0, 0]],
  2: [[-1, -1], [1, 1]],
  3: [[-1, -1], [0, 0], [1, 1]],
  4: [[-1, -1], [1, -1], [-1, 1], [1, 1]],
  5: [[-1, -1], [1, -1], [0, 0], [-1, 1], [1, 1]],
  6: [[-1, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [1, 1]],
};

const dobbelVormen: { [sleutel: string]: Vorm } = {};
const dobbelVorm = (waarde: number, grootte: number, seed: number) => {
  const sleutel = `${waarde}-${grootte}-${seed}`;
  if (!dobbelVormen[sleutel]) {
    dobbelVormen[sleutel] = samen(
      rechthoek(-grootte / 2, -grootte / 2, grootte, grootte, {
        fill: C.WHITE,
        fillStyle: "solid",
        strokeWidth: Math.max(2, grootte / 45),
        roughness: 1.2,
        seed,
      }),
      ...OGEN[waarde].map(([ox, oy], i) =>
        cirkel(ox * grootte * 0.27, oy * grootte * 0.27, grootte * 0.17, {
          fill: C.GRAY,
          fillStyle: "solid",
          strokeWidth: 1.5,
          roughness: 0.8,
          seed: seed + 1 + i,
        }),
      ),
    );
  }
  return dobbelVormen[sleutel];
};

export const Dobbelsteen: React.FC<{
  waarde: number;
  x: number;
  y: number;
  grootte: number;
  seed: number;
  schaal?: number;
  opacity?: number;
}> = ({ waarde, x, y, grootte, seed, schaal = 1, opacity = 1 }) => (
  <Op x={x} y={y} schaal={schaal} opacity={opacity}>
    <Ruw vorm={dobbelVorm(waarde, grootte, seed)} />
  </Op>
);

const machineVormen: { [seed: number]: Vorm } = {};
const machineVorm = (seed: number) => {
  if (!machineVormen[seed]) {
    machineVormen[seed] = samen(
      veelhoek(
        [
          [-80, -95],
          [80, -95],
          [45, -55],
          [-45, -55],
        ],
        { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.6, seed: seed + 1 },
      ),
      rechthoek(-150, -55, 300, 110, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.8, seed }),
    );
  }
  return machineVormen[seed];
};

/** Een generator als machine met een trechter bovenaan, zoals in de Minecraft-reel. */
export const Machine: React.FC<{ x: number; y: number; seed: number; schaal?: number; opacity?: number }> = ({
  x,
  y,
  seed,
  schaal = 1,
  opacity = 1,
}) => (
  <Op x={x} y={y} schaal={schaal} opacity={opacity}>
    <Ruw vorm={machineVorm(seed)} />
    <div
      style={{
        position: "absolute",
        left: -150,
        top: -55,
        width: 300,
        height: 110,
        lineHeight: "110px",
        textAlign: "center",
        fontFamily: MONO,
        fontSize: 36,
        fontWeight: 700,
        color: C.GRAY,
      }}
    >
      new Random()
    </div>
  </Op>
);
