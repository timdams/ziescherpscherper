import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { opBaan, venster, voortgang } from "../../stijl/anim";
import { C } from "../../stijl/kleuren";
import { Op } from "../../stijl/op";
import { Ruw, cirkel, lijn, pijl, rechthoek, samen, type Vorm } from "../../stijl/ruw";
import { label } from "../../stijl/tekst";
import { FASE } from "./tijdlijn";

// Het scherm met het lessenrooster, het geheugen dat volloopt, de crash, het zoeken en de tijdlijn.
// Toegevoegd, niet uit het kader: het rooster zelf (dagen, lesuren, welke vakjes bezet zijn).

const MONITOR = samen(
  rechthoek(120, 640, 720, 480, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 3, seed: 5000 }),
  lijn(480, 1120, 480, 1180, { strokeWidth: 3, seed: 5001 }),
  lijn(380, 1182, 580, 1180, { strokeWidth: 3, seed: 5002 }),
);

const KOLOMMEN = [170, 270, 374, 478, 582, 686, 790];
const RIJEN = [700, 750, 814, 878, 942, 1006, 1070];
const RASTER = samen(
  ...KOLOMMEN.map((x, i) => lijn(x, 700, x, 1070, { strokeWidth: 1.8, roughness: 0.9, seed: 5010 + i })),
  ...RIJEN.map((y, i) => lijn(170, y, 790, y, { strokeWidth: 1.8, roughness: 0.9, seed: 5020 + i })),
);
const DAGEN = ["ma", "di", "wo", "do", "vr"];
const PATROON = [
  [1, 1, 0, 1, 1],
  [1, 0, 1, 1, 0],
  [0, 1, 1, 0, 1],
  [1, 1, 0, 1, 1],
  [0, 1, 1, 1, 0],
];
const LESSEN: Vorm[] = [];
PATROON.forEach((rij, r) =>
  rij.forEach((bezet, k) => {
    if (bezet === 1) {
      LESSEN.push(
        rechthoek(270 + 104 * k + 6, 750 + 64 * r + 6, 92, 52, {
          fill: C.RED_LIGHT,
          fillStyle: "hachure",
          hachureGap: 7,
          fillWeight: 1.8,
          stroke: C.RED,
          strokeWidth: 2,
          roughness: 1.2,
          seed: 5030 + LESSEN.length,
        }),
      );
    }
  }),
);
const OMRANDING = rechthoek(160, 690, 640, 390, { stroke: C.RED, strokeWidth: 4, roughness: 1.3, seed: 5060 });
const KRUIS_1 = lijn(170, 700, 790, 1070, { stroke: C.RED, strokeWidth: 8, roughness: 1.2, seed: 5070 });
const KRUIS_2 = lijn(790, 700, 170, 1070, { stroke: C.RED, strokeWidth: 8, roughness: 1.2, seed: 5071 });

// Ondergrond en rand met dezelfde seed, anders steekt het witte vlak uit.
const GEHEUGEN_ONDER = rechthoek(920, 880, 80, 300, { fill: C.WHITE, fillStyle: "solid", stroke: "none", strokeWidth: 2.6, seed: 5080 });
const GEHEUGEN_VUL = rechthoek(920, 880, 80, 300, {
  fill: C.RED_LIGHT,
  fillStyle: "hachure",
  hachureGap: 8,
  fillWeight: 2,
  stroke: "none",
  seed: 5081,
});
const GEHEUGEN_RAND = rechthoek(920, 880, 80, 300, { strokeWidth: 2.6, seed: 5080 });

const LOEP = samen(
  cirkel(0, 0, 110, { strokeWidth: 5, seed: 5090 }),
  lijn(40, 40, 95, 95, { strokeWidth: 9, seed: 5091 }),
);

// Tijdlijn op schaal: 2 uur is 840 px, dus 4 minuten is 28 px.
const START_X = 120;
const PER_MINUUT = 840 / 120;
const AS = pijl(100, 1330, 1000, 1330, { strokeWidth: 2.6, seed: 5100 }, 18);
const STREEPJES = samen(
  lijn(START_X, 1318, START_X, 1342, { strokeWidth: 2.6, seed: 5101 }),
  lijn(START_X + 4 * PER_MINUUT, 1316, START_X + 4 * PER_MINUUT, 1344, { stroke: C.RED, strokeWidth: 3.4, seed: 5102 }),
  lijn(START_X + 120 * PER_MINUUT, 1316, START_X + 120 * PER_MINUUT, 1344, { stroke: C.RED, strokeWidth: 3.4, seed: 5103 }),
);

const lineair = (t: number) => t;

export const Computer: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = venster(f, FASE.verhaal, FASE.lus, 15);
  if (zicht <= 0) return null;

  const schok =
    f >= FASE.crash && f < FASE.crash + 25
      ? Math.sin((f - FASE.crash) * 1.7) * 14 * (1 - (f - FASE.crash) / 25)
      : 0;
  const kruis = 1 - voortgang(f, 380, 20);
  const loep = opBaan(f, [
    { f: 490, x: 300, y: 820 },
    { f: 555, x: 680, y: 860 },
    { f: 620, x: 420, y: 1000 },
  ]);
  const tijdlijn = voortgang(f, FASE.tijdlijn + 5, 12);

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <AbsoluteFill style={{ transform: `translateX(${schok}px)` }}>
        <Ruw vorm={MONITOR} />
        <Ruw vorm={RASTER} toon={voortgang(f, FASE.verhaal + 5, 15)} />
        {DAGEN.map((dag, k) => (
          <div key={dag} style={{ ...label(322 + 104 * k, 710, 34), opacity: voortgang(f, 125, 10) }}>
            {dag}
          </div>
        ))}
        {[1, 2, 3, 4, 5].map((uur, r) => (
          <div key={uur} style={{ ...label(220, 750 + 64 * r + 16, 34), opacity: voortgang(f, 125, 10) }}>
            {uur}
          </div>
        ))}
        {LESSEN.map((les, i) => (
          <Ruw key={i} vorm={les} opacity={voortgang(f, 130 + i * 3, 6)} />
        ))}
        <Ruw vorm={OMRANDING} toon={voortgang(f, 390, 30)} opacity={1 - voortgang(f, FASE.tijdlijn, 15)} />
        {kruis > 0 ? (
          <>
            <Ruw vorm={KRUIS_1} toon={voortgang(f, FASE.crash, 8)} opacity={kruis} />
            <Ruw vorm={KRUIS_2} toon={voortgang(f, FASE.crash + 7, 8)} opacity={kruis} />
          </>
        ) : null}
        <Op x={loep.x} y={loep.y} opacity={venster(f, 485, 635, 8)}>
          <Ruw vorm={LOEP} />
        </Op>
      </AbsoluteFill>

      <Ruw vorm={GEHEUGEN_ONDER} />
      <Ruw vorm={GEHEUGEN_VUL} toon={voortgang(f, 130, 120, lineair)} richting="vanOnder" />
      <Ruw vorm={GEHEUGEN_RAND} />
      <div style={{ ...label(960, 1192, 38), opacity: voortgang(f, 125, 10) }}>geheugen</div>
      <div style={{ ...label(960, 830, 44, C.RED_DARK), opacity: voortgang(f, 245, 10) }}>vol</div>

      {tijdlijn > 0 ? (
        <AbsoluteFill style={{ opacity: tijdlijn }}>
          <Ruw vorm={AS} toon={voortgang(f, FASE.tijdlijn + 5, 25)} />
          <Ruw vorm={STREEPJES} opacity={voortgang(f, FASE.tijdlijn + 25, 10)} />
          <div style={label(START_X, 1350, 36)}>0</div>
          <div style={{ ...label(START_X, 1262, 40, C.RED_DARK, true), opacity: voortgang(f, FASE.tijdlijn + 40, 12) }}>
            4 min: rooster klaar
          </div>
          <div style={{ ...label(900, 1262, 40, C.RED_DARK), opacity: voortgang(f, FASE.tijdlijn + 60, 12) }}>
            2 uur: crash
          </div>
          <div style={{ ...label(440, 1352, 32, C.GRAY, true), fontWeight: 400, opacity: voortgang(f, FASE.tijdlijn + 60, 12) }}>
            (op schaal)
          </div>
        </AbsoluteFill>
      ) : null}
    </AbsoluteFill>
  );
};
