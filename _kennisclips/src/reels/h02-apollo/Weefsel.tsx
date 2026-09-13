import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { POP, venster, voortgang } from "../../stijl/anim";
import { MONO } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";
import { Op } from "../../stijl/op";
import { Ruw, cirkel, pad, samen, type Vorm } from "../../stijl/ruw";
import { label } from "../../stijl/tekst";
import { BITS_21 } from "./CSharp";
import { FASE } from "./tijdlijn";

// "Koperdraad door een magnetisch ringetje is een 1, er rond een 0." Acht ringetjes met de bits van 21,
// de byte uit de vorige scène. Toegevoegd: die waarde, en de vinkjes bij "veeeeeelvuldig getest".

const CY = 880;
const middenVan = (i: number) => 120 + i * 120;

const RINGEN = BITS_21.map((_, i) =>
  samen(
    cirkel(middenVan(i), CY, 96, { fill: C.WHITE, fillStyle: "solid", stroke: "none", seed: 4201 + i * 3 }),
    cirkel(middenVan(i), CY, 96, { fill: C.GRAY, fillStyle: "hachure", hachureGap: 6, fillWeight: 1.2, strokeWidth: 2.4, seed: 4201 + i * 3 }),
    cirkel(middenVan(i), CY, 36, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.2, seed: 4202 + i * 3 }),
  ),
);

// Een 1 loopt rechtdoor door het gat, een 0 maakt een boog onder het ringetje door.
let d = `M 30 ${CY}`;
BITS_21.forEach((bit, i) => {
  const cx = middenVan(i);
  d += bit === 1 ? ` L ${cx + 60} ${CY}` : ` L ${cx - 60} ${CY} Q ${cx} ${CY + 200} ${cx + 60} ${CY}`;
});
d += ` L 1050 ${CY}`;
const DRAAD = pad(d, { x: 20, y: CY - 10, w: 1040, h: 120 }, { stroke: C.RED_DARK, strokeWidth: 4.5, roughness: 0.6, seed: 4230 });

const VINKJE: Vorm = pad("M -22 0 L -6 18 L 26 -22", { x: -24, y: -24, w: 52, h: 44 }, {
  stroke: C.RED,
  strokeWidth: 5,
  roughness: 0.8,
  seed: 4240,
});
const VINKJES = Array.from({ length: 18 }, (_, i) => ({ x: 130 + (i % 9) * 100, y: 1250 + Math.floor(i / 9) * 100 }));

const linear = (t: number) => t;

export const Weefsel: React.FC = () => {
  const f = useCurrentFrame();
  const s = FASE.weven;
  const zicht = venster(f, s, FASE.einde, 15);
  if (zicht <= 0) return null;

  const draad = voortgang(f, 1180, 150, linear);
  const bereik = 20 + draad * 1040;

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      {RINGEN.map((ring, i) => (
        <AbsoluteFill
          key={i}
          style={{
            opacity: voortgang(f, s + 10 + i * 6, 8),
            transform: `scale(${0.6 + 0.4 * voortgang(f, s + 10 + i * 6, 14, POP)})`,
            transformOrigin: `${middenVan(i)}px ${CY}px`,
          }}
        >
          <Ruw vorm={ring} />
        </AbsoluteFill>
      ))}
      <Ruw vorm={DRAAD} toon={draad} />
      {BITS_21.map((bit, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: middenVan(i) - 40,
            width: 80,
            top: CY + 130,
            textAlign: "center",
            fontFamily: MONO,
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1,
            color: bit === 1 ? C.RED_DARK : C.GRAY,
            opacity: Math.max(0, Math.min(1, (bereik - (middenVan(i) + 60)) / 40)),
          }}
        >
          {bit}
        </div>
      ))}
      <div style={{ ...label(540, 1110, 70, C.RED_DARK), opacity: voortgang(f, 1370, 15) }}>= 21</div>
      {VINKJES.map((v, i) => (
        <Op key={i} x={v.x} y={v.y} opacity={voortgang(f, 1510 + i * 5, 6)} schaal={0.6 + 0.4 * voortgang(f, 1510 + i * 5, 12, POP)}>
          <Ruw vorm={VINKJE} />
        </Op>
      ))}
    </AbsoluteFill>
  );
};
