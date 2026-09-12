import React from "react";
import { C } from "../../stijl/kleuren";
import { Ruw, lijn, pad, rechthoek, samen, veelhoek, type Vorm } from "../../stijl/ruw";

// Een wereld uit tegels. Sterk vereenvoudigd: elk getal van Next(0, 10) kiest één tegel.
// Een echte game rekent veel meer, maar het principe blijft: zelfde getallen, zelfde wereld.

export type Soort = "gras" | "steen" | "water" | "erts" | "grot" | "dorp";
const SOORTEN: Soort[] = ["gras", "steen", "water", "erts", "grot", "dorp"];

export const soortVoor = (n: number): Soort =>
  n <= 3 ? "gras" : n <= 5 ? "steen" : n === 6 ? "water" : n === 7 ? "erts" : n === 8 ? "grot" : "dorp";

type Punt = [number, number];
const cache: { [sleutel: string]: Vorm } = {};

export const tegelVorm = (soort: Soort, T: number, variant: number): Vorm => {
  const sleutel = `${soort}-${T}-${variant}`;
  const bestaand = cache[sleutel];
  if (bestaand) return bestaand;

  const seed = 1300 + SOORTEN.indexOf(soort) * 100 + variant * 10 + T;
  const dik = Math.max(1.2, T / 55);
  const wit = { fill: C.WHITE, fillStyle: "solid", strokeWidth: dik, roughness: 1.1 };
  const grijs = { stroke: C.GRAY, strokeWidth: dik, roughness: 1.1 };
  const schaal = (punten: Punt[]): Punt[] => punten.map((p): Punt => [p[0] * T, p[1] * T]);
  const basis = rechthoek(0, 0, T, T, { ...wit, seed });
  const rots = rechthoek(0, 0, T, T, {
    fill: C.GRAY,
    fillStyle: "hachure",
    hachureGap: T / 8,
    fillWeight: dik * 0.7,
    strokeWidth: dik,
    roughness: 1.1,
    seed,
  });

  let vorm: Vorm;
  switch (soort) {
    case "gras": {
      const pollen: Punt[] = [[0.28, 0.62], [0.62, 0.36], [0.72, 0.8]];
      vorm = samen(
        basis,
        ...pollen.map((p, i) =>
          samen(
            lijn((p[0] - 0.07) * T, (p[1] - 0.12) * T, p[0] * T, p[1] * T, { ...grijs, seed: seed + 1 + i }),
            lijn(p[0] * T, p[1] * T, (p[0] + 0.07) * T, (p[1] - 0.12) * T, { ...grijs, seed: seed + 5 + i }),
          ),
        ),
      );
      break;
    }
    case "steen":
      vorm = rots;
      break;
    case "water": {
      const golf = (h: number, s: number) =>
        pad(
          `M ${0.14 * T} ${h * T} Q ${0.32 * T} ${(h - 0.1) * T} ${0.5 * T} ${h * T} T ${0.86 * T} ${h * T}`,
          { x: 0, y: 0, w: T, h: T },
          { ...grijs, seed: s },
        );
      vorm = samen(basis, golf(0.42, seed + 1), golf(0.7, seed + 2));
      break;
    }
    case "erts": {
      const ruit = (cx: number, cy: number, s: number) =>
        veelhoek(schaal([[cx, cy - 0.09], [cx + 0.08, cy], [cx, cy + 0.09], [cx - 0.08, cy]]), {
          fill: C.RED,
          fillStyle: "solid",
          stroke: C.RED_DARK,
          strokeWidth: dik * 0.8,
          roughness: 0.8,
          seed: s,
        });
      vorm = samen(rots, ruit(0.3, 0.32, seed + 1), ruit(0.66, 0.52, seed + 2), ruit(0.38, 0.76, seed + 3));
      break;
    }
    case "grot":
      vorm = samen(
        basis,
        veelhoek(schaal([[0.18, 0.88], [0.18, 0.52], [0.34, 0.28], [0.66, 0.28], [0.82, 0.52], [0.82, 0.88]]), {
          fill: C.GRAY,
          fillStyle: "solid",
          strokeWidth: dik,
          roughness: 1,
          seed: seed + 1,
        }),
      );
      break;
    default:
      vorm = samen(
        basis,
        rechthoek(0.3 * T, 0.5 * T, 0.4 * T, 0.34 * T, { ...wit, seed: seed + 1 }),
        veelhoek(schaal([[0.22, 0.52], [0.5, 0.24], [0.78, 0.52]]), {
          fill: C.RED,
          fillStyle: "solid",
          stroke: C.RED_DARK,
          strokeWidth: dik,
          roughness: 1,
          seed: seed + 2,
        }),
      );
  }
  cache[sleutel] = vorm;
  return vorm;
};

export const Tegel: React.FC<{
  soort: Soort;
  x: number;
  y: number;
  T: number;
  variant?: number;
  schaal?: number;
  opacity?: number;
}> = ({ soort, x, y, T, variant = 0, schaal = 1, opacity = 1 }) =>
  opacity <= 0 ? null : (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: T,
        height: T,
        transform: `scale(${schaal})`,
        transformOrigin: "50% 50%",
        opacity: Math.min(1, opacity),
      }}
    >
      <Ruw vorm={tegelVorm(soort, T, variant)} />
    </div>
  );

/** Een raster van tegels. `zichtbaar` telt op: tegel i verschijnt terwijl zichtbaar van i naar i + 1 gaat. */
export const Wereld: React.FC<{
  x: number;
  y: number;
  T: number;
  getallen: number[];
  kolommen: number;
  zichtbaar: number;
}> = ({ x, y, T, getallen, kolommen, zichtbaar }) => (
  <>
    {getallen.map((n, i) => {
      const t = Math.max(0, Math.min(1, zichtbaar - i));
      if (t <= 0) return null;
      return (
        <Tegel
          key={i}
          soort={soortVoor(n)}
          x={x + (i % kolommen) * T}
          y={y + Math.floor(i / kolommen) * T}
          T={T}
          variant={i % 3}
          schaal={0.6 + 0.4 * t}
          opacity={t}
        />
      );
    })}
  </>
);
