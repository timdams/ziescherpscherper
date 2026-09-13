import React from "react";
import { useCurrentFrame } from "remotion";
import { venster, voortgang } from "./anim";
import { HAND, MONO } from "./fonts";
import { C } from "./kleuren";

/**
 * Tekst met eenvoudige opmaak, zoals in markdown:
 * - `code` tussen backticks krijgt JetBrains Mono op een lichtroze ondergrond
 *   (Caveat maakt van `"""` een rij schuine streepjes);
 * - *nadruk* tussen sterretjes krijgt de nadrukkleur.
 */
export const Opmaak: React.FC<{ tekst: string; grootte: number; nadruk?: string }> = ({
  tekst,
  grootte,
  nadruk = C.RED,
}) => (
  <>
    {tekst.split("`").map((stuk, i) =>
      i % 2 === 1 ? (
        <span
          key={i}
          style={{
            fontFamily: MONO,
            fontSize: grootte * 0.62,
            fontWeight: 700,
            background: C.RED_LIGHT,
            borderRadius: 8,
            padding: "0 0.3em",
            margin: "0 0.08em",
          }}
        >
          {stuk}
        </span>
      ) : (
        stuk.split("*").map((deel, j) => (
          <span key={`${i}-${j}`} style={j % 2 === 1 ? { color: nadruk } : undefined}>
            {deel}
          </span>
        ))
      ),
    )}
  </>
);

/**
 * Handgeschreven onderschrift, gecentreerd rond `midden`. Dit is voorlopig de plaats van
 * de voice-over: de stem komt later en leest ongeveer deze zinnen.
 */
export const Onderschrift: React.FC<{
  regels: string[];
  van: number;
  tot: number;
  midden?: number;
  grootte?: number;
  kleur?: string;
}> = ({ regels, van, tot, midden = 972, grootte = 60, kleur = C.RED_DARK }) => {
  const frame = useCurrentFrame();
  const opacity = venster(frame, van, tot, 14);
  if (opacity <= 0) return null;
  const hoogte = regels.length * grootte * 1.12;
  const dy = (1 - voortgang(frame, van, 20)) * 18;
  return (
    <div
      style={{
        position: "absolute",
        left: 60,
        right: 60,
        top: midden - hoogte / 2 + dy,
        textAlign: "center",
        fontFamily: HAND,
        fontSize: grootte,
        fontWeight: 700,
        lineHeight: 1.12,
        color: kleur,
        opacity,
      }}
    >
      {regels.map((r, i) => (
        <div key={i}>
          <Opmaak tekst={r} grootte={grootte} />
        </div>
      ))}
    </div>
  );
};

/** Stijl voor een handgeschreven label: gecentreerd rond `x` (600 px breed), of links uitgelijnd vanaf `x`. */
export const label = (
  x: number,
  top: number,
  grootte = 42,
  kleur: string = C.GRAY,
  links = false,
): React.CSSProperties => ({
  position: "absolute",
  left: links ? x : x - 300,
  width: links ? undefined : 600,
  top,
  textAlign: links ? "left" : "center",
  fontFamily: HAND,
  fontSize: grootte,
  fontWeight: 700,
  lineHeight: 1,
  color: kleur,
  whiteSpace: "nowrap",
});

/** Klein handgeschreven woordje naast een pijl. `y` is het verticale midden. */
export const Noot: React.FC<{
  tekst: string;
  x: number;
  y: number;
  opacity: number;
  grootte?: number;
  kleur?: string;
}> = ({ tekst, x, y, opacity, grootte = 50, kleur = C.RED_DARK }) =>
  opacity <= 0 ? null : (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y - grootte * 0.62,
        fontFamily: HAND,
        fontSize: grootte,
        fontWeight: 700,
        lineHeight: `${grootte * 1.24}px`,
        color: kleur,
        opacity: Math.min(1, opacity),
        whiteSpace: "nowrap",
      }}
    >
      {tekst}
    </div>
  );
