import React from "react";
import { MONO, MONO_BREEDTE } from "./fonts";

/** Linkerbovenhoek van rij 0, kolom 0, plus lettergrootte en rijhoogte in pixels. */
export type Raster = { x: number; y: number; grootte: number; hoogte: number };

export type Regel = {
  tekst: string;
  rij: number;
  dx?: number;
  dy?: number;
  opacity?: number;
  cursor?: boolean;
  kleur?: string;
};

// Omdat JetBrains Mono een vaste breedte heeft, weet je exact waar elk teken staat.
// Zo kunnen markeringen, knip-lijnen en pijlen op een kolom mikken in plaats van te gokken.
export const tekenBreedte = (r: Raster) => r.grootte * MONO_BREEDTE;
export const kolomX = (r: Raster, kolom: number) => r.x + kolom * tekenBreedte(r);
export const rijY = (r: Raster, rij: number) => r.y + rij * r.hoogte;

const KEYWORDS = ["string", "byte", "double"];

const Tokens: React.FC<{ tekst: string }> = ({ tekst }) => (
  <>
    {tekst.split(/(\b[A-Za-z]+\b)/).map((stuk, i) => (
      <span key={i} style={KEYWORDS.indexOf(stuk) >= 0 ? { fontWeight: 700 } : undefined}>
        {stuk}
      </span>
    ))}
  </>
);

export const Regels: React.FC<{
  raster: Raster;
  regels: Regel[];
  kleur: string;
  gewicht?: number;
  keywords?: boolean;
}> = ({ raster, regels, kleur, gewicht = 400, keywords = false }) => (
  <>
    {regels.map((r, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          left: raster.x + (r.dx ?? 0),
          top: rijY(raster, r.rij) + (r.dy ?? 0),
          height: raster.hoogte,
          lineHeight: `${raster.hoogte}px`,
          whiteSpace: "pre",
          fontFamily: MONO,
          fontSize: raster.grootte,
          fontWeight: gewicht,
          color: r.kleur ?? kleur,
          opacity: r.opacity ?? 1,
        }}
      >
        {keywords && !r.tekst.startsWith("//") ? <Tokens tekst={r.tekst} /> : r.tekst}
        {r.cursor ? (
          <span
            style={{
              display: "inline-block",
              width: 3,
              height: raster.grootte * 1.05,
              marginLeft: 1,
              verticalAlign: "middle",
              background: r.kleur ?? kleur,
            }}
          />
        ) : null}
      </div>
    ))}
  </>
);
