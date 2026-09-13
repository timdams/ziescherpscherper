import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { POP, bezig, getypt, venster, voortgang } from "../../stijl/anim";
import { Regels, type Raster } from "../../stijl/code";
import { MONO } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";
import { Op } from "../../stijl/op";
import { Ruw, rechthoek, samen } from "../../stijl/ruw";
import { label } from "../../stijl/tekst";
import { FASE } from "./tijdlijn";

// "Daar kies je dus best je datatypes nog wel met de hand." Een byte naast een long, met de 8 en 64
// bits uit de tabel in het boek. Toegevoegd, niet uit het kader: de variabele temperatuur (de sensor in
// de serre) en de waarde 21. De bits van 21 zijn nagekeken in .NET: 00010101.

export const BITS_21 = [0, 0, 0, 1, 0, 1, 0, 1];

const PANEEL = rechthoek(70, 630, 940, 580, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.4, seed: 4100 });
const BYTE_REGEL: Raster = { x: 110, y: 650, grootte: 44, hoogte: 70 };
const LONG_REGEL: Raster = { x: 110, y: 880, grootte: 44, hoogte: 70 };
const BYTE_CODE = "byte temperatuur = 21;";
const LONG_CODE = "long temperatuur = 21;";

const BIT = 72;
const bitVorm = (bit: number, i: number) =>
  rechthoek(-BIT / 2, -BIT / 2, BIT, BIT, bit === 1
    ? { fill: C.RED_LIGHT, fillStyle: "solid", stroke: C.RED, strokeWidth: 2.6, roughness: 1.2, seed: 4101 + i }
    : { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.4, roughness: 1.2, seed: 4101 + i });
const BYTE_BITS = BITS_21.map(bitVorm);

// 64 kleine vakjes in twee rijen van 32. Enkel de laatste acht bits van 21 zijn niet 0.
const KLEIN = 24;
const longBit = (i: number) => (i >= 56 ? BITS_21[i - 56] : 0);
const LONG_VAKJES = samen(
  ...Array.from({ length: 64 }, (_, i) =>
    rechthoek(110 + (i % 32) * 27, 975 + Math.floor(i / 32) * 30, KLEIN, KLEIN, longBit(i) === 1
      ? { fill: C.RED_LIGHT, fillStyle: "solid", stroke: C.RED, strokeWidth: 2, roughness: 1, seed: 4110 + i }
      : { fill: C.WHITE, fillStyle: "solid", strokeWidth: 1.8, roughness: 1, seed: 4110 + i }),
  ),
);

export const CSharp: React.FC = () => {
  const f = useCurrentFrame();
  const s = FASE.csharp;
  const zicht = venster(f, s, FASE.weven, 15);
  if (zicht <= 0) return null;

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <Ruw vorm={PANEEL} />
      <Regels
        raster={BYTE_REGEL}
        regels={[{ rij: 0, tekst: getypt(BYTE_CODE, f, s + 10, 1), cursor: bezig(f, s + 10, s + 36) }]}
        kleur={C.GRAY}
        keywords
      />
      {BITS_21.map((bit, i) => {
        const start = s + 40 + i * 4;
        return (
          <Op key={i} x={110 + BIT / 2 + i * 76} y={776} schaal={0.5 + 0.5 * voortgang(f, start, 12, POP)} opacity={voortgang(f, start, 6)}>
            <Ruw vorm={BYTE_BITS[i]} />
            <div
              style={{
                position: "absolute",
                left: -BIT / 2,
                top: -BIT / 2,
                width: BIT,
                height: BIT,
                lineHeight: `${BIT}px`,
                textAlign: "center",
                fontFamily: MONO,
                fontSize: 40,
                fontWeight: 700,
                color: bit === 1 ? C.RED_DARK : C.GRAY,
              }}
            >
              {bit}
            </div>
          </Op>
        );
      })}
      <div style={{ ...label(750, 752, 50, C.GRAY, true), opacity: voortgang(f, s + 75, 12) }}>8 bits</div>

      <Regels
        raster={LONG_REGEL}
        regels={[{ rij: 0, tekst: getypt(LONG_CODE, f, s + 70, 1), cursor: bezig(f, s + 70, s + 96) }]}
        kleur={C.GRAY}
        keywords
      />
      <Ruw vorm={LONG_VAKJES} toon={voortgang(f, s + 100, 30)} />
      <div style={{ ...label(110, 1060, 50, C.GRAY, true), opacity: voortgang(f, s + 125, 12) }}>64 bits</div>
    </AbsoluteFill>
  );
};
