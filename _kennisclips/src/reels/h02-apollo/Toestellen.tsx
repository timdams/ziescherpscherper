import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { POP, venster, voortgang } from "../../stijl/anim";
import { C } from "../../stijl/kleuren";
import { Op } from "../../stijl/op";
import { Ruw, cirkel, ellips, lijn, pad, pijl, rechthoek, samen, veelhoek, type Vorm } from "../../stijl/ruw";
import { label } from "../../stijl/tekst";
import { FASE } from "./tijdlijn";

// De sensor in een serre, de chip in een bankkaart en een slimme deurbel staan in één kolom met de
// Apollo-computer; de laptop staat ver weg op de as "rekenkracht". De tekeningen zijn toegevoegd.

const KOLOM_X = 200;
const RIJ = { sensor: 750, kaart: 920, deurbel: 1090, apollo: 1260 };
const LAPTOP = { x: 860, y: 1250 };

const blad = { fill: C.GRAY, fillStyle: "hachure", hachureGap: 5, fillWeight: 1, strokeWidth: 2.2 };
const wit = { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.4 };
const accent = { fill: C.RED_LIGHT, fillStyle: "solid", stroke: C.RED, strokeWidth: 2.2 };

const SENSOR = samen(
  pad("M 0 20 Q -35 -10 -30 -50 Q 0 -25 0 20", { x: -35, y: -55, w: 40, h: 80 }, { ...blad, seed: 4120 }),
  pad("M 0 20 Q 35 -20 25 -65 Q -2 -30 0 20", { x: -5, y: -70, w: 45, h: 95 }, { ...blad, seed: 4121 }),
  rechthoek(36, -40, 12, 65, { fill: C.GRAY, fillStyle: "solid", strokeWidth: 2, seed: 4122 }),
  cirkel(42, -50, 24, { ...accent, seed: 4123 }),
  veelhoek(
    [
      [-55, 20],
      [55, 20],
      [42, 90],
      [-42, 90],
    ],
    { ...wit, seed: 4124 },
  ),
);
const KAART = samen(
  rechthoek(-90, -55, 180, 110, { ...wit, seed: 4130 }),
  rechthoek(-65, -28, 42, 34, { ...accent, seed: 4131 }),
  lijn(-65, 25, 40, 25, { strokeWidth: 2.2, seed: 4132 }),
  lijn(-65, 40, 10, 40, { strokeWidth: 2.2, seed: 4133 }),
);
const DEURBEL = samen(
  rechthoek(-40, -75, 80, 150, { ...wit, seed: 4140 }),
  cirkel(0, -40, 22, { fill: C.GRAY, fillStyle: "solid", strokeWidth: 2, seed: 4141 }),
  cirkel(0, 25, 46, { ...accent, seed: 4142 }),
);
const toetsen: Vorm[] = [];
for (let r = 0; r < 2; r++) {
  for (let k = 0; k < 3; k++) {
    toetsen.push(rechthoek(-50 + k * 38, 5 + r * 22, 26, 16, { ...wit, strokeWidth: 1.8, seed: 4150 + r * 3 + k }));
  }
}
const APOLLO = samen(
  rechthoek(-80, -50, 160, 100, { ...wit, seed: 4148 }),
  rechthoek(-60, -38, 120, 30, { fill: C.GRAY, fillStyle: "hachure", hachureGap: 5, fillWeight: 1, strokeWidth: 2, seed: 4149 }),
  ...toetsen,
);
const LAPTOP_VORM = samen(
  rechthoek(-110, -120, 220, 140, { ...wit, seed: 4170 }),
  rechthoek(-95, -107, 190, 114, { fill: C.GRAY, fillStyle: "hachure", hachureGap: 10, fillWeight: 1, strokeWidth: 2, seed: 4171 }),
  veelhoek(
    [
      [-140, 20],
      [140, 20],
      [165, 50],
      [-165, 50],
    ],
    { ...wit, seed: 4172 },
  ),
);
const AS = pijl(80, 1430, 1000, 1430, { strokeWidth: 2.6, seed: 4180 }, 18);
const STREEPJES = samen(
  lijn(KOLOM_X, 1418, KOLOM_X, 1442, { strokeWidth: 2.6, seed: 4181 }),
  lijn(LAPTOP.x, 1418, LAPTOP.x, 1442, { strokeWidth: 2.6, seed: 4182 }),
);
const OMCIRKEL = ellips(KOLOM_X, 1005, 300, 800, { stroke: C.RED, strokeWidth: 3.5, roughness: 1.3, seed: 4160 });

const Toestel: React.FC<{ vorm: Vorm; x: number; y: number; start: number; tekst: string }> = ({
  vorm,
  x,
  y,
  start,
  tekst,
}) => {
  const f = useCurrentFrame();
  const zicht = voortgang(f, start, 8);
  return (
    <>
      <Op x={x} y={y} schaal={0.6 + 0.4 * voortgang(f, start, 16, POP)} opacity={zicht}>
        <Ruw vorm={vorm} />
      </Op>
      <div style={{ ...label(370, y - 22, 44, C.GRAY, true), opacity: zicht }}>{tekst}</div>
    </>
  );
};

export const Toestellen: React.FC = () => {
  const f = useCurrentFrame();
  const s = FASE.toestellen;
  const zicht = venster(f, s, FASE.csharp, 15);
  if (zicht <= 0) return null;
  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <Toestel vorm={SENSOR} x={KOLOM_X} y={RIJ.sensor} start={s + 10} tekst="sensor in een serre" />
      <Toestel vorm={KAART} x={KOLOM_X} y={RIJ.kaart} start={s + 30} tekst="chip in je bankkaart" />
      <Toestel vorm={DEURBEL} x={KOLOM_X} y={RIJ.deurbel} start={s + 50} tekst="slimme deurbel" />
      <Toestel vorm={APOLLO} x={KOLOM_X} y={RIJ.apollo} start={s + 140} tekst="Apollo-computer" />

      <Op x={LAPTOP.x} y={LAPTOP.y} schaal={0.6 + 0.4 * voortgang(f, s + 155, 16, POP)} opacity={voortgang(f, s + 155, 8)}>
        <Ruw vorm={LAPTOP_VORM} />
      </Op>
      <div style={{ ...label(LAPTOP.x, 1066, 44), opacity: voortgang(f, s + 155, 8) }}>laptop</div>

      <Ruw vorm={AS} toon={voortgang(f, s + 150, 20)} />
      <Ruw vorm={STREEPJES} opacity={voortgang(f, s + 165, 10)} />
      <div style={{ ...label(560, 1372, 44, C.GRAY, true), opacity: voortgang(f, s + 165, 12) }}>rekenkracht</div>
      <Ruw vorm={OMCIRKEL} toon={voortgang(f, s + 175, 30)} richting="vanOnder" />
    </AbsoluteFill>
  );
};
