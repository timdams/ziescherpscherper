import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { POP, bezig, getypt, venster, voortgang } from "../../stijl/anim";
import { MONO } from "../../stijl/fonts";
import { Regels, type Raster } from "../../stijl/code";
import { C } from "../../stijl/kleuren";
import { Ruw, cirkel, doos3d, lijn, rechthoek, samen, veelhoek, type Vorm } from "../../stijl/ruw";
import { label } from "../../stijl/tekst";
import { FASE } from "./tijdlijn";

// "Typ eens Console." en IntelliSense toont de methoden en eigenschappen. De icoontjes zoals in het boek:
// een kubus voor een methode, een Engelse sleutel voor een eigenschap, een bliksem voor een event.
// De zeven leden zijn echt: de eerste zeven publieke statische leden van System.Console, alfabetisch
// (.NET 10, nagekeken op 13 september 2026).

type Soort = "methode" | "eigenschap" | "event";
const ITEMS: [string, Soort][] = [
  ["BackgroundColor", "eigenschap"],
  ["Beep", "methode"],
  ["BufferHeight", "eigenschap"],
  ["BufferWidth", "eigenschap"],
  ["CancelKeyPress", "event"],
  ["CapsLock", "eigenschap"],
  ["Clear", "methode"],
];

/** Een icoontje van ongeveer 36 px keer `maat`, gecentreerd op (cx, cy). */
const icoon = (soort: Soort, cx: number, cy: number, maat: number, seed: number): Vorm => {
  const m = (v: number) => v * maat;
  if (soort === "methode") return doos3d(cx - m(15), cy - m(9), m(26), m(26), { seed, diepte: m(10) });
  if (soort === "eigenschap") {
    return samen(
      lijn(cx - m(14), cy + m(14), cx + m(3), cy - m(3), { strokeWidth: 5 * maat, roughness: 0.6, seed }),
      cirkel(cx + m(8), cy - m(8), m(18), { strokeWidth: 3.5 * maat, roughness: 0.6, seed: seed + 1 }),
    );
  }
  return veelhoek(
    [
      [cx + m(5), cy - m(19)],
      [cx - m(10), cy + m(3)],
      [cx - m(1), cy + m(3)],
      [cx - m(5), cy + m(19)],
      [cx + m(10), cy - m(4)],
      [cx + m(1), cy - m(4)],
    ],
    { fill: C.RED_DARK, fillStyle: "solid", stroke: C.RED_DARK, strokeWidth: 1.5, roughness: 0.6, seed },
  );
};

const CODEVAK = rechthoek(40, 610, 1000, 130, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.4, seed: 8450 });
const CODE: Raster = { x: 80, y: 640, grootte: 56, hoogte: 70 };

const LIJST = { x: 300, y: 760, w: 560, rij: 72, rand: 15 };
const rijTop = (i: number) => LIJST.y + LIJST.rand + i * LIJST.rij;
const LIJSTVAK = rechthoek(LIJST.x, LIJST.y, LIJST.w, 2 * LIJST.rand + ITEMS.length * LIJST.rij, {
  fill: C.WHITE,
  fillStyle: "solid",
  strokeWidth: 2.4,
  seed: 8451,
});
const MARKERINGEN = ITEMS.map((_, i) =>
  rechthoek(LIJST.x + 10, rijTop(i) + 4, LIJST.w - 20, LIJST.rij - 8, {
    fill: C.RED_LIGHT,
    fillStyle: "solid",
    stroke: "none",
    roughness: 1.1,
    seed: 8452 + i,
  }),
);
const ICONEN = ITEMS.map(([, soort], i) => icoon(soort, LIJST.x + 50, rijTop(i) + LIJST.rij / 2, 1, 8460 + i * 2));

const LEGENDE: { soort: Soort; x: number }[] = [
  { soort: "methode", x: 230 },
  { soort: "eigenschap", x: 540 },
  { soort: "event", x: 850 },
];
const LEGENDE_ICONEN = LEGENDE.map((l, i) => icoon(l.soort, l.x, 1345, 1.5, 8480 + i * 2));

export const CSharp: React.FC = () => {
  const f = useCurrentFrame();
  const s = FASE.csharp;
  const i = FASE.intellisense;
  const zicht = venster(f, s, FASE.einde, 15);
  if (zicht <= 0) return null;

  const lijst = voortgang(f, s + 45, 12);
  // Met de pijltjestoetsen door de lijst: elke 16 frames een rij verder, tot de laatste.
  const gekozen = f < i + 20 ? 0 : Math.min(ITEMS.length - 1, Math.floor((f - i - 20) / 16) + 1);

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <Ruw vorm={CODEVAK} />
      <Regels
        raster={CODE}
        regels={[{ rij: 0, tekst: getypt("Console.", f, s + 15, 2), cursor: bezig(f, s + 15, FASE.einde) }]}
        kleur={C.GRAY}
      />

      <AbsoluteFill
        style={{
          opacity: lijst,
          transform: `scaleY(${0.8 + 0.2 * voortgang(f, s + 45, 14, POP)})`,
          transformOrigin: `${LIJST.x}px ${LIJST.y}px`,
        }}
      >
        <Ruw vorm={LIJSTVAK} />
        <Ruw vorm={MARKERINGEN[gekozen]} />
        {ITEMS.map(([naam], r) => (
          <React.Fragment key={r}>
            <Ruw vorm={ICONEN[r]} />
            <div
              style={{
                position: "absolute",
                left: LIJST.x + 95,
                top: rijTop(r),
                height: LIJST.rij,
                lineHeight: `${LIJST.rij}px`,
                fontFamily: MONO,
                fontSize: 40,
                fontWeight: r === gekozen ? 700 : 400,
                color: r === gekozen ? C.RED_DARK : C.GRAY,
                whiteSpace: "nowrap",
              }}
            >
              {naam}
            </div>
          </React.Fragment>
        ))}
      </AbsoluteFill>

      {LEGENDE.map((l, r) => (
        <AbsoluteFill key={r} style={{ opacity: voortgang(f, i + 30 + r * 10, 12) }}>
          <Ruw vorm={LEGENDE_ICONEN[r]} />
          <div style={label(l.x, 1385, 44)}>{l.soort}</div>
        </AbsoluteFill>
      ))}
    </AbsoluteFill>
  );
};
