import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { POP, venster, voortgang } from "../../stijl/anim";
import { C } from "../../stijl/kleuren";
import { Ruw, cirkel, lijn, pijl, rechthoek, samen } from "../../stijl/ruw";
import { label } from "../../stijl/tekst";
import { FASE } from "./tijdlijn";

// De smartphone met "miljoenen keren" meer geheugen, en een piepklein vierkantje voor 4 KB.
// Niet op schaal: dat kan niet op een scherm.

const TOESTEL = samen(
  rechthoek(540, 640, 420, 820, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 3, seed: 4060 }),
  lijn(700, 672, 800, 672, { strokeWidth: 3, seed: 4061 }),
  cirkel(750, 1425, 38, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.4, seed: 4062 }),
);
const SCHERM = rechthoek(570, 700, 360, 680, {
  fill: C.RED_LIGHT,
  fillStyle: "hachure",
  hachureGap: 9,
  fillWeight: 1.6,
  stroke: C.RED,
  strokeWidth: 2.4,
  seed: 4063,
});
const PIJL = pijl(425, 790, 555, 850, { stroke: C.RED_DARK, strokeWidth: 2.6, seed: 4064 }, 16);
const KLEIN = rechthoek(232, 1090, 16, 16, {
  fill: C.RED,
  fillStyle: "solid",
  stroke: C.RED_DARK,
  strokeWidth: 1.5,
  roughness: 0.8,
  seed: 4065,
});
// Apps op het scherm, zonder logo's.
const APPS = Array.from({ length: 12 }, (_, i) =>
  rechthoek(588 + (i % 4) * 86, 730 + Math.floor(i / 4) * 86, 66, 66, {
    fill: C.WHITE,
    fillStyle: "solid",
    strokeWidth: 2.2,
    roughness: 1.2,
    seed: 4070 + i,
  }),
);

export const Gsm: React.FC = () => {
  const f = useCurrentFrame();
  const s = FASE.gsm;
  const zicht = venster(f, s, FASE.toestellen, 15);
  if (zicht <= 0) return null;
  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <AbsoluteFill
        style={{ transform: `scale(${0.85 + 0.15 * voortgang(f, s, 20, POP)})`, transformOrigin: "750px 1050px" }}
      >
        <Ruw vorm={TOESTEL} />
        <Ruw vorm={SCHERM} toon={voortgang(f, s + 15, 60)} richting="vanOnder" />
        {APPS.map((app, i) => (
          <Ruw key={i} vorm={app} opacity={voortgang(f, s + 125 + i * 6, 6)} />
        ))}
      </AbsoluteFill>

      <div style={{ ...label(240, 1010, 56, C.RED_DARK), opacity: voortgang(f, s + 20, 12) }}>4 KB</div>
      <Ruw vorm={KLEIN} opacity={voortgang(f, s + 20, 12)} />

      <div style={{ ...label(70, 760, 46, C.RED_DARK, true), opacity: voortgang(f, s + 60, 12) }}>miljoenen keren meer</div>
      <Ruw vorm={PIJL} toon={voortgang(f, s + 70, 14)} />
      <div style={{ ...label(70, 1300, 34, C.GRAY, true), fontWeight: 400, opacity: voortgang(f, s + 80, 15) }}>
        (niet op schaal)
      </div>
    </AbsoluteFill>
  );
};
