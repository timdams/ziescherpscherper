import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { BEWEEG, opBaan, venster, voortgang } from "../../stijl/anim";
import { C } from "../../stijl/kleuren";
import { Ruw, pijl } from "../../stijl/ruw";
import { label } from "../../stijl/tekst";
import { FortRaster } from "./fort";
import { FASE } from "./tijdlijn";

// Het spel op het scherm: een zwart venster met het fort. Het staat eerst klein onder de haak, schuift naar
// het midden, staat rechts naast de 3D-doos, wordt de middelste laag van de wereld en klapt dan open zodat
// het water door de gangen kan lopen.

const VENSTER = { x: 183, y: 648, w: 714, h: 604 };
export const MIDDEN = { x: 540, y: 950 };
const FORT_MAAT = { x: 233, y: 698, grootte: 64, hoogte: 72 };

/** Een laag schuin, als een vloer in doorsnede (`plat` 0), of recht van voren (`plat` 1). */
export const schuin = (plat: number) => `scaleY(${0.42 + 0.58 * plat}) skewX(${-35 * (1 - plat)}deg)`;

export const SpelVenster: React.FC<{ rooster?: string[]; water?: number }> = ({ rooster, water }) => (
  <>
    <div
      style={{
        position: "absolute",
        left: VENSTER.x,
        top: VENSTER.y,
        width: VENSTER.w,
        height: VENSTER.h,
        background: C.CONSOLE_BG,
        borderRadius: 18,
        boxShadow: "0 6px 26px rgba(0, 0, 0, 0.18)",
      }}
    />
    <FortRaster {...FORT_MAAT} rooster={rooster} water={water} />
  </>
);

const PIJL_BRAK = pijl(540, 1334, 540, 1266, { stroke: C.RED_DARK, strokeWidth: 3, seed: 7050 }, 16);

export const Wereld: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = Math.max(
    venster(f, -30, FASE.jaren + 12, 12),
    venster(f, FASE.driedee, FASE.dwerg + 10, 12),
    venster(f, FASE.lagen, FASE.backend + 12, 12),
  );
  if (zicht <= 0) return null;

  const baan = opBaan(f, [
    { f: 0, x: 540, y: 1215, s: 0.7 },
    { f: FASE.ultiem + 5, x: 540, y: 1215, s: 0.7 },
    { f: FASE.ultiem + 45, x: 540, y: 950, s: 1 },
    { f: FASE.driedee - 10, x: 540, y: 950, s: 1 },
    { f: FASE.driedee - 5, x: 790, y: 1000, s: 0.5 },
    { f: FASE.diep, x: 790, y: 1000, s: 0.5 },
    { f: FASE.diep + 40, x: 540, y: 950, s: 1 },
    { f: FASE.lagen - 5, x: 540, y: 950, s: 1 },
    { f: FASE.lagen, x: 540, y: 1000, s: 0.75 },
    { f: FASE.water - 25, x: 540, y: 1000, s: 0.75 },
    { f: FASE.water + 5, x: 540, y: 950, s: 1 },
  ]);
  const plat = f < FASE.lagen ? 1 : voortgang(f, FASE.water - 25, 30, BEWEEG);
  const vereenvoudigd = Math.max(
    venster(f, FASE.ultiem + 45, FASE.jaren + 12, 12),
    venster(f, FASE.diep + 40, FASE.dwerg + 10, 12),
    venster(f, FASE.water + 5, FASE.brak + 12, 12),
  );
  const brak = 1 - voortgang(f, FASE.backend, 12);

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <AbsoluteFill
        style={{
          transform: `translate(${baan.x - MIDDEN.x}px, ${baan.y - MIDDEN.y}px) scale(${baan.s}) ${schuin(plat)}`,
          transformOrigin: `${MIDDEN.x}px ${MIDDEN.y}px`,
        }}
      >
        <SpelVenster water={FASE.water + 15} />
      </AbsoluteFill>
      <div style={{ ...label(540, 1272, 38), opacity: vereenvoudigd }}>(sterk vereenvoudigd)</div>
      <Ruw vorm={PIJL_BRAK} toon={voortgang(f, FASE.brak + 10, 16)} richting="vanOnder" opacity={brak} />
      <div style={{ ...label(540, 1345, 52, C.RED_DARK), opacity: voortgang(f, FASE.brak + 20, 12) * brak }}>brakke graphics</div>
    </AbsoluteFill>
  );
};
