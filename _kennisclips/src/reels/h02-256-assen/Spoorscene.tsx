import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { venster, voortgang } from "../../stijl/anim";
import { HAND } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";
import { Ruw, cirkel, lijn, pijl, rechthoek, samen, veelhoek } from "../../stijl/ruw";
import { BAK_H, BAK_Y, BORD, PANEEL, RAIL_Y, SENSOR_X } from "./maten";
import {
  ASSEN,
  BAK_L,
  FASE,
  VOERTUIGEN,
  VOERTUIG_L,
  asAfstand,
  asLokaalX,
  getoond,
  voorkantX,
} from "./tijdlijn";

// Het spoor met de trein, de sensor van de teller en het bord dat zegt of het spoor bezet is.

const RAIL = lijn(-20, RAIL_Y, 1100, RAIL_Y, { strokeWidth: 3, seed: 2 });
const LIGGERS = samen(
  ...Array.from({ length: 23 }, (_, i) => 20 + i * 48)
    .filter((x) => Math.abs(x + 7 - SENSOR_X) > 34)
    .map((x, i) => lijn(x, RAIL_Y + 6, x + 14, RAIL_Y + 22, { strokeWidth: 2, seed: 100 + i })),
);

const LOC_OMTREK: [number, number][] = [
  [0, BAK_Y],
  [220, BAK_Y],
  [BAK_L, BAK_Y + 55],
  [BAK_L, BAK_Y + BAK_H],
  [0, BAK_Y + BAK_H],
];
const LOC = samen(
  // Eerst een witte ondergrond: arcering alleen is doorzichtig en dan loopt de kabel door de loc.
  veelhoek(LOC_OMTREK, { fill: C.WHITE, fillStyle: "solid", stroke: "none", seed: 39 }),
  veelhoek(LOC_OMTREK, {
    fill: C.RED_LIGHT,
    fillStyle: "hachure",
    hachureGap: 9,
    fillWeight: 2,
    stroke: C.RED,
    strokeWidth: 2.6,
    seed: 40,
  }),
  veelhoek(
    [
      [196, BAK_Y + 18],
      [224, BAK_Y + 18],
      [258, BAK_Y + 52],
      [196, BAK_Y + 52],
    ],
    { fill: C.WHITE, fillStyle: "solid", stroke: C.RED, strokeWidth: 2.2, seed: 41 },
  ),
);

const wagon = (seed: number) =>
  samen(
    rechthoek(0, BAK_Y, BAK_L, BAK_H, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.4, seed }),
    ...[28, 111, 194].map((x, i) =>
      rechthoek(x, BAK_Y + 22, 58, 46, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2, seed: seed + 1 + i }),
    ),
  );
const WAGONS = [wagon(50), wagon(60), wagon(70)];
const KOPPELING = lijn(-VOERTUIG_L + BAK_L, BAK_Y + 108, 0, BAK_Y + 108, { strokeWidth: 3, seed: 80 });

const WIEL_R = 22;
const WIEL_Y = RAIL_Y - WIEL_R - 1;
const WIEL = cirkel(0, 0, WIEL_R * 2, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.4, seed: 90 });
const SPAAK = lijn(-WIEL_R + 6, 0, WIEL_R - 6, 0, { strokeWidth: 2, roughness: 0.8, seed: 91 });
const RING = cirkel(0, 0, 70, { stroke: C.RED, strokeWidth: 3.2, roughness: 1.3, seed: 96 });

const SENSOR = rechthoek(SENSOR_X - 13, RAIL_Y + 6, 26, 20, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.2, seed: 3 });
const SENSOR_AAN = rechthoek(SENSOR_X - 13, RAIL_Y + 6, 26, 20, {
  fill: C.RED,
  fillStyle: "solid",
  stroke: C.RED_DARK,
  strokeWidth: 2.2,
  seed: 3,
});
const KABEL = lijn(SENSOR_X, PANEEL.y + PANEEL.h + 2, SENSOR_X, RAIL_Y + 6, { strokeWidth: 2, roughness: 0.9, seed: 4 });
const STUK_SPOOR = samen(
  pijl(650, 1425, 380, 1425, { strokeWidth: 2.2, seed: 5 }, 16),
  pijl(650, 1425, 940, 1425, { strokeWidth: 2.2, seed: 6 }, 16),
);
const PAAL = lijn(830, BORD.y + BORD.h, 830, RAIL_Y, { strokeWidth: 2.6, seed: 7 });
const BORD_BEZET = rechthoek(BORD.x, BORD.y, BORD.w, BORD.h, {
  fill: C.RED_LIGHT,
  fillStyle: "hachure",
  hachureGap: 8,
  fillWeight: 2,
  stroke: C.RED,
  strokeWidth: 2.6,
  seed: 8,
});
const BORD_VRIJ = rechthoek(BORD.x, BORD.y, BORD.w, BORD.h, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.6, seed: 8 });

// Vooruitspoelen tijdens het snel tellen, pauze terwijl de bits uitgelegd worden.
const VOORUIT = samen(
  veelhoek([[90, 1010], [135, 1037], [90, 1064]], { fill: C.GRAY, fillStyle: "solid", seed: 30 }),
  veelhoek([[135, 1010], [180, 1037], [135, 1064]], { fill: C.GRAY, fillStyle: "solid", seed: 31 }),
);
const PAUZE = samen(
  rechthoek(100, 1010, 18, 54, { fill: C.GRAY, fillStyle: "solid", seed: 32 }),
  rechthoek(134, 1010, 18, 54, { fill: C.GRAY, fillStyle: "solid", seed: 33 }),
);

const label: React.CSSProperties = {
  position: "absolute",
  fontFamily: HAND,
  fontSize: 44,
  fontWeight: 700,
  color: C.GRAY,
  lineHeight: 1,
  textAlign: "center",
  whiteSpace: "nowrap",
};

const Voertuig: React.FC<{ i: number; links: number; hoek: number }> = ({ i, links, hoek }) => (
  <div style={{ position: "absolute", left: links, top: 0 }}>
    {i < VOERTUIGEN - 1 ? <Ruw vorm={KOPPELING} /> : null}
    <Ruw vorm={i === 0 ? LOC : WAGONS[i % WAGONS.length]} />
    {[0, 1, 2, 3].map((j) => (
      <div
        key={j}
        style={{
          position: "absolute",
          left: asLokaalX(j),
          top: WIEL_Y,
          transform: `rotate(${hoek}deg)`,
          transformOrigin: "0 0",
        }}
      >
        <Ruw vorm={WIEL} />
        <Ruw vorm={SPAAK} />
      </div>
    ))}
  </div>
);

export const Spoorscene: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = venster(f, -30, FASE.oplossing, 15);
  if (zicht <= 0) return null;

  const voor = voorkantX(f);
  const hoek = (voor / WIEL_R) * (180 / Math.PI);
  const teller = venster(f, FASE.teller, FASE.oplossing + 30, 15);

  // De sensor licht op wanneer er een as boven staat.
  let afstand = 999;
  for (let k = 1; k <= ASSEN; k++) {
    afstand = Math.min(afstand, Math.abs(voor - asAfstand(k) - SENSOR_X));
  }
  const flits = Math.max(0, 1 - afstand / 16);

  // Het bord wipt even op wanneer het omspringt.
  const bezet = getoond(f) > 0;
  let wip = 0;
  for (let d = 1; d <= 12; d++) {
    if (getoond(f - d) > 0 !== bezet) {
      wip = 1 - d / 12;
      break;
    }
  }

  const voertuigen: React.ReactNode[] = [];
  for (let i = 0; i < VOERTUIGEN; i++) {
    const links = voor - i * VOERTUIG_L - BAK_L;
    if (links > 1100 || links < -VOERTUIG_L) continue;
    voertuigen.push(<Voertuig key={i} i={i} links={links} hoek={hoek} />);
  }
  const laatsteAsX = voor - asAfstand(ASSEN);

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <Ruw vorm={LIGGERS} />
      <Ruw vorm={RAIL} />
      <AbsoluteFill style={{ opacity: teller }}>
        <Ruw vorm={KABEL} streep="10 9" />
        <Ruw vorm={PAAL} />
      </AbsoluteFill>
      {voertuigen}
      <AbsoluteFill style={{ opacity: venster(f, FASE.overloop, FASE.oplossing + 30, 12) }}>
        <div style={{ position: "absolute", left: laatsteAsX, top: WIEL_Y }}>
          <Ruw vorm={RING} />
        </div>
      </AbsoluteFill>
      <AbsoluteFill style={{ opacity: teller }}>
        <Ruw vorm={SENSOR} />
        <Ruw vorm={SENSOR_AAN} opacity={flits} />
        <div style={{ ...label, left: SENSOR_X - 80, width: 160, top: 1370 }}>teller</div>
        <Ruw vorm={STUK_SPOOR} />
        <div style={{ ...label, left: 560, width: 200, top: 1440 }}>stuk spoor</div>
        <AbsoluteFill
          style={{
            transform: `scale(${1 + 0.12 * wip})`,
            transformOrigin: `${BORD.x + BORD.w / 2}px ${BORD.y + BORD.h / 2}px`,
          }}
        >
          <Ruw vorm={bezet ? BORD_BEZET : BORD_VRIJ} />
          <div
            style={{
              ...label,
              left: BORD.x,
              top: BORD.y,
              width: BORD.w,
              height: BORD.h,
              lineHeight: `${BORD.h}px`,
              fontSize: 48,
              color: bezet ? C.RED_DARK : C.GRAY,
            }}
          >
            {bezet ? "spoor bezet" : "spoor vrij"}
          </div>
        </AbsoluteFill>
      </AbsoluteFill>
      <Ruw vorm={VOORUIT} opacity={venster(f, 425, FASE.bits - 10, 8)} />
      <Ruw vorm={PAUZE} opacity={venster(f, FASE.bits + 10, FASE.overloop, 8) * (0.6 + 0.4 * voortgang(f, FASE.bits + 10, 8))} />
    </AbsoluteFill>
  );
};
