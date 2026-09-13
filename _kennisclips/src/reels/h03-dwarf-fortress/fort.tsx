import React from "react";
import { useCurrentFrame } from "remotion";
import { MONO, MONO_BREEDTE } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";

// Toegevoegd, niet uit het kader: dit fort en de twee andere lagen. Zelf getekend en sterk vereenvoudigd:
// # is een muur, . een vloer, + een deur, ~ water en ☺ een dwerg.
export const FORT = [
  "################",
  "#~~~#.....#.☺..#",
  "#~~~+.....#..☺.#",
  "######.####....#",
  "#..........#☺..#",
  "#..........#####",
  "################",
];

// De laag erboven (gras) en de laag eronder (rots), met een vast patroon in plaats van toeval.
const patroon = (tekens: string, verschuiving: number) =>
  Array.from({ length: FORT.length }, (_, r) =>
    Array.from({ length: FORT[0].length }, (_, k) => tekens[(r * 7 + k * 3 + ((r * k) % 5) + verschuiving) % tekens.length]).join(""),
  );
export const LAAG_BOVEN = patroon('"",."",', 0);
export const LAAG_ONDER = patroon("####.##*###", 2);

// Hoe ver elke vloercel van het water ligt, in stappen door de gangen (breedte-eerst zoeken).
// Cellen die het water niet kan bereiken, krijgen -1.
const afstanden = (): number[][] => {
  const d = FORT.map((regel) => regel.split("").map(() => -1));
  const wachtrij: [number, number][] = [];
  FORT.forEach((regel, r) =>
    regel.split("").forEach((t, k) => {
      if (t === "~") {
        d[r][k] = 0;
        wachtrij.push([r, k]);
      }
    }),
  );
  for (let i = 0; i < wachtrij.length; i++) {
    const [r, k] = wachtrij[i];
    const buren: [number, number][] = [
      [r - 1, k],
      [r + 1, k],
      [r, k - 1],
      [r, k + 1],
    ];
    for (const [nr, nk] of buren) {
      const t = FORT[nr] ? FORT[nr][nk] : "";
      if ((t === "." || t === "+") && d[nr][nk] < 0) {
        d[nr][nk] = d[r][k] + 1;
        wachtrij.push([nr, nk]);
      }
    }
  }
  return d;
};
const AFSTAND = afstanden();
const FRAMES_PER_STAP = 4;

const uiterlijk = (t: string, thema: string): React.CSSProperties => {
  if (thema === "code") return { color: C.GRAY, fontWeight: 400 };
  if (thema === "console") return { color: C.CONSOLE_TEKST, fontWeight: 500 };
  if (t === "~" || t === "☺") return { color: C.WHITE, fontWeight: 700 };
  return { color: C.CONSOLE_TEKST, fontWeight: 700 };
};

/**
 * Een rooster van tekens, elk teken in een eigen vakje. Zo blijft het raster kloppen, ook als een teken
 * zoals ☺ uit een ander lettertype komt. `water` is het frame waarop het water door het fort stroomt.
 */
export const FortRaster: React.FC<{
  x: number;
  y: number;
  grootte: number;
  hoogte: number;
  rooster?: string[];
  thema?: "spel" | "code" | "console";
  water?: number;
  vraagteken?: boolean;
  rijOpacity?: (rij: number) => number;
}> = ({ x, y, grootte, hoogte, rooster = FORT, thema = "spel", water, vraagteken = false, rijOpacity }) => {
  const f = useCurrentFrame();
  const b = grootte * MONO_BREEDTE;
  return (
    <>
      {rooster.map((regel, r) => {
        const o = rijOpacity ? rijOpacity(r) : 1;
        if (o <= 0) return null;
        return regel.split("").map((teken, k) => {
          let t = teken;
          if (water !== undefined && rooster === FORT && AFSTAND[r][k] > 0 && f >= water + AFSTAND[r][k] * FRAMES_PER_STAP) {
            t = "~";
          }
          if (t === "☺" && vraagteken) t = "?";
          return (
            <div
              key={`${r}-${k}`}
              style={{
                position: "absolute",
                left: x + k * b,
                top: y + r * hoogte,
                width: b,
                height: hoogte,
                lineHeight: `${hoogte}px`,
                textAlign: "center",
                fontFamily: MONO,
                // ☺ komt uit een ander lettertype en valt daar kleiner uit.
                fontSize: t === "☺" ? grootte * 1.3 : grootte,
                ...uiterlijk(t, thema),
                opacity: o * (thema === "spel" && t === "." ? 0.45 : 1),
              }}
            >
              {t}
            </div>
          );
        });
      })}
    </>
  );
};
