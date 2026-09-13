import React from "react";
import { HAND } from "./fonts";
import { C } from "./kleuren";
import { Ruw, rechthoek, type Vorm } from "./ruw";

// De vormen worden één keer gemaakt per maat en seed, niet elk frame opnieuw.
const vormen: { [sleutel: string]: Vorm } = {};
const kaartVorm = (w: number, h: number, seed: number, accent: boolean) => {
  const sleutel = `${w}-${h}-${seed}-${accent}`;
  if (!vormen[sleutel]) {
    vormen[sleutel] = rechthoek(
      -w / 2,
      -h / 2,
      w,
      h,
      accent
        ? { fill: C.RED_LIGHT, fillStyle: "solid", stroke: C.RED, strokeWidth: 3, roughness: 1.3, seed }
        : { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.4, roughness: 1.3, seed },
    );
  }
  return vormen[sleutel];
};

/**
 * Een ruw kaartje met handgeschreven tekst, gecentreerd op (x, y). `accent` (0 tot 1) kleurt het
 * lichtroze met een rode rand, bv. voor het element dat eruit gaat.
 */
export const Kaartje: React.FC<{
  tekst: string;
  x: number;
  y: number;
  w: number;
  h: number;
  seed: number;
  grootte?: number;
  accent?: number;
  schaal?: number;
  opacity?: number;
}> = ({ tekst, x, y, w, h, seed, grootte = 34, accent = 0, schaal = 1, opacity = 1 }) =>
  opacity <= 0 ? null : (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: `scale(${schaal})`,
        transformOrigin: "0 0",
        opacity: Math.min(1, opacity),
      }}
    >
      <Ruw vorm={kaartVorm(w, h, seed, false)} />
      {accent > 0 ? <Ruw vorm={kaartVorm(w, h, seed, true)} opacity={accent} /> : null}
      <div
        style={{
          position: "absolute",
          left: -w / 2,
          top: -h / 2,
          width: w,
          height: h,
          lineHeight: `${h}px`,
          textAlign: "center",
          fontFamily: HAND,
          fontSize: grootte,
          fontWeight: 700,
          color: accent > 0.5 ? C.RED_DARK : C.GRAY,
          whiteSpace: "nowrap",
        }}
      >
        {tekst}
      </div>
    </div>
  );
