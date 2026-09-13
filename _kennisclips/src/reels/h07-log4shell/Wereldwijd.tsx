import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { POP, venster, voortgang } from "../../stijl/anim";
import { C } from "../../stijl/kleuren";
import { Ruw, cirkel, ellips, lijn, pad, samen } from "../../stijl/ruw";
import { label } from "../../stijl/tekst";
import { knipper } from "./onderdelen";
import { FASE } from "./tijdlijn";

// "...en er is toen wereldwijd een paar weken bijzonder slecht geslapen." Toegevoegd: een wereldbol met
// knipperende alarmen, de maan en een doorgestreept zzz.

const M = { x: 540, y: 1020 };
const R = 270;
const koorde = (dy: number) => Math.sqrt(R * R - dy * dy);
const BOL = samen(
  cirkel(M.x, M.y, 2 * R, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 3, seed: 8400 }),
  ellips(M.x, M.y, 330, 2 * R, { strokeWidth: 2, seed: 8401 }),
  ellips(M.x, M.y, 120, 2 * R, { strokeWidth: 2, seed: 8402 }),
  lijn(M.x - R, M.y, M.x + R, M.y, { strokeWidth: 2, seed: 8403 }),
  lijn(M.x - koorde(130), M.y - 130, M.x + koorde(130), M.y - 130, { strokeWidth: 2, seed: 8404 }),
  lijn(M.x - koorde(130), M.y + 130, M.x + koorde(130), M.y + 130, { strokeWidth: 2, seed: 8405 }),
);
const PUNTEN: [number, number][] = [
  [430, 870],
  [610, 820],
  [700, 960],
  [360, 1000],
  [500, 1080],
  [650, 1110],
  [420, 1180],
  [760, 1050],
  [560, 930],
  [330, 1100],
  [590, 1220],
  [470, 960],
  [720, 860],
  [480, 790],
];
const ALARMEN = PUNTEN.map(([x, y], i) =>
  cirkel(x, y, 30, { fill: C.RED, fillStyle: "solid", stroke: C.RED_DARK, strokeWidth: 2, roughness: 0.6, seed: 8410 + i }),
);
const MAAN = pad("M 900 635 A 55 55 0 0 0 900 745 A 70 70 0 0 1 900 635 Z", { x: 845, y: 635, w: 56, h: 110 }, {
  fill: C.WHITE,
  fillStyle: "solid",
  strokeWidth: 2.6,
  seed: 8430,
});
const DOORSTREEP = lijn(915, 648, 1005, 628, { stroke: C.RED, strokeWidth: 5, roughness: 0.8, seed: 8431 });

export const Wereldwijd: React.FC = () => {
  const f = useCurrentFrame();
  const s = FASE.slapen;
  const zicht = venster(f, s, FASE.csharp, 12);
  if (zicht <= 0) return null;
  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <AbsoluteFill
        style={{
          opacity: voortgang(f, s + 3, 10),
          transform: `scale(${0.7 + 0.3 * voortgang(f, s + 3, 18, POP)})`,
          transformOrigin: `${M.x}px ${M.y}px`,
        }}
      >
        <Ruw vorm={BOL} />
      </AbsoluteFill>
      {ALARMEN.map((vorm, i) => (
        <Ruw key={i} vorm={vorm} opacity={voortgang(f, s + 15 + i * 4, 6) * knipper(f + i * 5, 2.5, 0.3)} />
      ))}
      <Ruw vorm={MAAN} opacity={voortgang(f, s + 30, 12)} />
      <div style={{ ...label(960, 600, 56), opacity: voortgang(f, s + 40, 12) }}>zzz</div>
      <Ruw vorm={DOORSTREEP} toon={voortgang(f, s + 70, 12)} />
    </AbsoluteFill>
  );
};
