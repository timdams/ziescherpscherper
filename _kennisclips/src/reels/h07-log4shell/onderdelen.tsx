import React from "react";
import { C } from "../../stijl/kleuren";
import { Op } from "../../stijl/op";
import { Ruw, cirkel, lijn, rechthoek, samen, type Vorm } from "../../stijl/ruw";

// Een server in lokale coördinaten rond (0, 0): drie schuiven met een lampje, een schermpje met logregels en
// een alarmlamp bovenaan. In de bovenste schuif zit een roze bandje: daar draait Log4j.
// Toegevoegd, niet uit het kader: de server als beeld.

type Delen = { lampUit: Vorm; lamp: Vorm; stralen: Vorm; kast: Vorm; bandje: Vorm; groen: Vorm; rood: Vorm };
const cache: { [sleutel: string]: Delen } = {};

/** Het midden van het bandje, in lokale coördinaten (voor een loep of een pijl). */
export const bandjeMidden = (w: number, h: number) => {
  const rand = Math.max(10, w * 0.07);
  return { x: -w / 2 + rand + (w - 2 * rand) * 0.61, y: -h / 2 + rand + h * 0.05 };
};

const delen = (w: number, h: number, seed: number): Delen => {
  const sleutel = `${w}-${h}-${seed}`;
  if (cache[sleutel]) return cache[sleutel];
  const l = -w / 2;
  const t = -h / 2;
  const rand = Math.max(10, w * 0.07);
  const binnen = w - 2 * rand;
  const schuifH = h * 0.1;
  const schuifY = (i: number) => t + rand + i * (schuifH + h * 0.04);
  const scherm = { x: l + rand, y: h / 2 - rand - h * 0.34, w: binnen, h: h * 0.34 };
  const regels = (kleur: string, s: number) =>
    samen(
      ...[0.7, 0.45, 0.85, 0.55].map((lengte, i) => {
        const y = scherm.y + scherm.h * (0.2 + i * 0.2);
        return lijn(scherm.x + 12, y, scherm.x + 12 + (scherm.w - 24) * lengte, y, {
          stroke: kleur,
          strokeWidth: Math.max(2, h / 90),
          roughness: 0.8,
          seed: s + i,
        });
      }),
    );
  const lampD = w * 0.16;
  const lampY = t - lampD * 0.35;
  cache[sleutel] = {
    lampUit: cirkel(0, lampY, lampD, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2, roughness: 0.8, seed: seed + 9 }),
    lamp: cirkel(0, lampY, lampD, { fill: C.RED, fillStyle: "solid", stroke: C.RED_DARK, strokeWidth: 2, roughness: 0.8, seed: seed + 9 }),
    stralen: samen(
      ...[-60, -30, 0, 30, 60].map((graden, i) => {
        const a = ((graden - 90) * Math.PI) / 180;
        const r1 = lampD * 0.8;
        const r2 = lampD * 1.35;
        return lijn(r1 * Math.cos(a), lampY + r1 * Math.sin(a), r2 * Math.cos(a), lampY + r2 * Math.sin(a), {
          stroke: C.RED,
          strokeWidth: 3,
          roughness: 0.8,
          seed: seed + 10 + i,
        });
      }),
    ),
    kast: samen(
      rechthoek(l, t, w, h, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.6, seed }),
      ...[0, 1, 2].map((i) => rechthoek(l + rand, schuifY(i), binnen, schuifH, { strokeWidth: 1.8, roughness: 1, seed: seed + 1 + i })),
      ...[0, 1, 2].map((i) =>
        cirkel(w / 2 - rand - schuifH * 0.5, schuifY(i) + schuifH / 2, schuifH * 0.35, {
          fill: C.GRAY,
          fillStyle: "solid",
          strokeWidth: 1,
          roughness: 0.5,
          seed: seed + 4 + i,
        }),
      ),
      rechthoek(scherm.x, scherm.y, scherm.w, scherm.h, { fill: C.CONSOLE_BG, fillStyle: "solid", strokeWidth: 2, roughness: 0.8, seed: seed + 7 }),
    ),
    bandje: rechthoek(l + rand + binnen * 0.42, schuifY(0) + 3, binnen * 0.38, schuifH - 6, {
      fill: C.RED_LIGHT,
      fillStyle: "solid",
      stroke: C.RED,
      strokeWidth: 1.6,
      roughness: 0.8,
      seed: seed + 8,
    }),
    groen: regels(C.CONSOLE_TEKST, seed + 20),
    rood: regels(C.RED, seed + 30),
  };
  return cache[sleutel];
};

/**
 * `alarm` (0 tot 1) zet de lamp aan, `gehackt` (0 tot 1) maakt de logregels rood, `log` (0 tot 1) laat de
 * groene logregels van links verschijnen. Een server gebruikt `seed` tot en met `seed + 33`.
 */
export const Server: React.FC<{
  x: number;
  y: number;
  w: number;
  h: number;
  seed: number;
  alarm?: number;
  gehackt?: number;
  log?: number;
  schaal?: number;
  opacity?: number;
}> = ({ x, y, w, h, seed, alarm = 0, gehackt = 0, log = 1, schaal = 1, opacity = 1 }) => {
  const d = delen(w, h, seed);
  return (
    <Op x={x} y={y} schaal={schaal} opacity={opacity}>
      <Ruw vorm={d.lampUit} />
      <Ruw vorm={d.lamp} opacity={alarm} />
      <Ruw vorm={d.stralen} opacity={alarm} />
      <Ruw vorm={d.kast} />
      <Ruw vorm={d.bandje} />
      <Ruw vorm={d.groen} toon={log} opacity={1 - gehackt} />
      <Ruw vorm={d.rood} opacity={gehackt} />
    </Op>
  );
};

/** Een knipperende waarde tussen `laag` en 1, zonder toeval. */
export const knipper = (f: number, snelheid = 3, laag = 0.35) => laag + (1 - laag) * (0.5 + 0.5 * Math.sin(f / snelheid));
