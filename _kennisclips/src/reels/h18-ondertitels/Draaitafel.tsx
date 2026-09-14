import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { venster, voortgang } from "../../stijl/anim";
import { C } from "../../stijl/kleuren";
import { Op } from "../../stijl/op";
import { Ruw, cirkel, lijn, rechthoek, samen } from "../../stijl/ruw";
import { label } from "../../stijl/tekst";
import { nootVorm } from "./Mappen";
import { FASE } from "./tijdlijn";

// Djams achter de draaitafel. Toegevoegd, niet uit het kader: de draaitafel zelf en de nootjes.

const KAST = rechthoek(110, 720, 860, 610, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 3, seed: 9200 });

// De plaat in lokale coördinaten rond haar as, zodat ze kan draaien.
const PLAAT = cirkel(0, 0, 500, { fill: C.GRAY, fillStyle: "solid", strokeWidth: 3, roughness: 1.1, seed: 9210 });
const GROEVEN = samen(
  cirkel(0, 0, 420, { stroke: C.WHITE, strokeWidth: 1.5, roughness: 0.8, seed: 9211 }),
  cirkel(0, 0, 340, { stroke: C.WHITE, strokeWidth: 1.5, roughness: 0.8, seed: 9212 }),
  cirkel(0, 0, 260, { stroke: C.WHITE, strokeWidth: 1.5, roughness: 0.8, seed: 9213 }),
);
const ETIKET = cirkel(0, 0, 200, { fill: C.RED_LIGHT, fillStyle: "solid", stroke: C.RED, strokeWidth: 2.6, roughness: 1.1, seed: 9214 });
const SPIL = cirkel(0, 0, 14, { fill: C.GRAY, fillStyle: "solid", strokeWidth: 1.5, roughness: 0.5, seed: 9215 });

const ARM = samen(
  cirkel(850, 810, 80, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.6, seed: 9220 }),
  lijn(850, 810, 838, 1110, { strokeWidth: 7, roughness: 0.9, seed: 9221 }),
  lijn(838, 1110, 660, 1170, { strokeWidth: 7, roughness: 0.9, seed: 9222 }),
  rechthoek(610, 1150, 56, 40, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.6, seed: 9223 }),
);
const SCHUIF = samen(
  rechthoek(915, 960, 26, 280, { strokeWidth: 2.4, seed: 9230 }),
  rechthoek(898, 1080, 60, 34, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.4, seed: 9231 }),
);
const NOTEN = [0, 1, 2].map((j) => nootVorm(0, 0, 9240 + j * 3));
const NOOT_X = [260, 540, 800];

export const Draaitafel: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = venster(f, FASE.djams + 17, FASE.code, 15);
  if (zicht <= 0) return null;

  const hoek = Math.max(0, f - 950) * 6 + Math.max(0, f - FASE.sandstorm) * 6;
  const pols = interpolate(f, [FASE.sandstorm, FASE.sandstorm + 10, FASE.sandstorm + 25], [1, 1.08, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const noten = venster(f, FASE.napster + 10, FASE.code, 10);
  const etiketKleur = f >= FASE.sandstorm ? C.RED : C.GRAY;

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <Ruw vorm={KAST} />
      <Op x={450} y={1025} hoek={hoek} schaal={pols}>
        <Ruw vorm={PLAAT} />
        <Ruw vorm={GROEVEN} opacity={0.35} />
        <Ruw vorm={ETIKET} />
        <Ruw vorm={SPIL} />
        <div style={{ ...label(0, -58, 38, etiketKleur) }}>Darude</div>
        <div style={{ ...label(0, 16, 38, etiketKleur) }}>Sandstorm</div>
      </Op>
      <Ruw vorm={ARM} />
      <Ruw vorm={SCHUIF} />
      <div style={{ ...label(540, 1352, 64, C.RED_DARK), opacity: voortgang(f, FASE.djams + 30, 12) }}>Djams</div>

      {noten > 0
        ? NOTEN.map((noot, j) => {
            const start = FASE.napster + 10 + j * 25;
            if (f < start) return null;
            const t = ((f - start) % 75) / 75;
            return (
              <Op key={j} x={NOOT_X[j]} y={680 - 70 * t} opacity={Math.sin(Math.PI * t) * noten}>
                <Ruw vorm={noot} />
              </Op>
            );
          })
        : null}
    </AbsoluteFill>
  );
};
