import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { BEWEEG, POP, opBaan, venster, voortgang } from "../../stijl/anim";
import { MONO } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";
import { Op } from "../../stijl/op";
import { Ruw, cirkel, ellips, lijn, rechthoek, samen, veelhoek, type Vorm } from "../../stijl/ruw";
import { label } from "../../stijl/tekst";
import { FASE } from "./tijdlijn";

// De filmmap die gescand wordt en de mp3-map die opgekuist wordt.
// Toegevoegd, niet uit het kader: de filmtitels, welke films ondertitels hebben, en de namen van de
// mp3's met hun rare tekens en reclame (enkel "Darude Sandstorm" staat in het boek).

const mapVorm = (onder: number, seed: number): Vorm =>
  samen(
    veelhoek(
      [
        [60, 680],
        [84, 606],
        [330, 606],
        [354, 680],
      ],
      { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.8, seed },
    ),
    rechthoek(60, 676, 960, onder - 676, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.8, seed: seed + 1 }),
  );

/** Een muzieknootje rond (cx, cy), van ongeveer y - 34 tot y + 40. */
export const nootVorm = (cx: number, cy: number, seed: number): Vorm =>
  samen(
    ellips(cx - 12, cy + 26, 38, 28, { fill: C.GRAY, fillStyle: "solid", strokeWidth: 2, roughness: 1, seed }),
    lijn(cx + 6, cy + 22, cx + 6, cy - 34, { strokeWidth: 3.5, roughness: 0.8, seed: seed + 1 }),
    lijn(cx + 6, cy - 34, cx + 30, cy - 14, { strokeWidth: 3.5, roughness: 0.8, seed: seed + 2 }),
  );

// ---------- Filmmap ----------

const FILM_MAP = mapVorm(1410, 9010);
const RIJ_Y = [760, 900, 1040, 1180, 1320];
const FILMS = ["Amelie.avi", "Gladiator.avi", "Matrix.avi", "Memento.avi", "Shrek.avi"];
const HEEFT_SRT = [false, true, false, false, true];
const MISSEND = [0, 2, 3];

const filmIcoon = (cy: number, seed: number): Vorm => {
  const lijnen = { strokeWidth: 1.8, roughness: 0.8 };
  const gat = { fill: C.GRAY, fillStyle: "solid", stroke: "none", roughness: 0.4 };
  const gaten: Vorm[] = [];
  for (let k = 0; k < 4; k++) {
    gaten.push(rechthoek(110 + k * 24, cy - 33, 8, 8, { ...gat, seed: seed + 3 + k }));
    gaten.push(rechthoek(110 + k * 24, cy + 25, 8, 8, { ...gat, seed: seed + 7 + k }));
  }
  return samen(
    rechthoek(100, cy - 38, 100, 76, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.4, roughness: 1, seed }),
    lijn(100, cy - 20, 200, cy - 20, { ...lijnen, seed: seed + 1 }),
    lijn(100, cy + 20, 200, cy + 20, { ...lijnen, seed: seed + 2 }),
    ...gaten,
  );
};
const srtBlad = (cy: number, seed: number): Vorm =>
  samen(
    veelhoek(
      [
        [800, cy - 55],
        [895, cy - 55],
        [920, cy - 30],
        [920, cy + 55],
        [800, cy + 55],
      ],
      { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.4, roughness: 1.1, seed },
    ),
    lijn(895, cy - 55, 895, cy - 30, { strokeWidth: 2, roughness: 0.8, seed: seed + 1 }),
    lijn(895, cy - 30, 920, cy - 30, { strokeWidth: 2, roughness: 0.8, seed: seed + 2 }),
  );

const ICONEN = RIJ_Y.map((y, i) => filmIcoon(y, 9020 + i * 12));
const BLADEN = RIJ_Y.map((y, i) => srtBlad(y, 9090 + i * 3));
const GATEN = RIJ_Y.map((y, i) => rechthoek(800, y - 55, 120, 110, { stroke: C.RED, strokeWidth: 3, roughness: 1.2, seed: 9110 + i }));
const LOEP = samen(
  cirkel(0, 0, 190, { strokeWidth: 5, seed: 9120 }),
  lijn(70, 70, 140, 140, { strokeWidth: 11, seed: 9121 }),
);

export const Filmmap: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = venster(f, -30, FASE.mp3 + 10, 15);
  if (zicht <= 0) return null;

  // Tijdens de haak staat de map verkleind onderaan, daarna schuift ze naar haar plaats.
  const plaats = voortgang(f, 112, 40, BEWEEG);
  const schaal = 0.6 + 0.4 * plaats;
  const dy = 370 * (1 - plaats);
  // Achter het lijstje wordt de map gedimd.
  const dim = 1 - 0.8 * venster(f, FASE.lijst, 625, 15);
  const loep = opBaan(f, [
    { f: 135, x: 860, y: RIJ_Y[0] },
    { f: 250, x: 860, y: RIJ_Y[4] },
  ]);

  return (
    <AbsoluteFill
      style={{
        opacity: zicht * dim,
        transform: `translateY(${dy}px) scale(${schaal})`,
        transformOrigin: "540px 620px",
      }}
    >
      <Ruw vorm={FILM_MAP} />
      <div style={label(207, 624, 40)}>films</div>
      {RIJ_Y.map((y, i) => (
        <React.Fragment key={i}>
          <Ruw vorm={ICONEN[i]} />
          <div
            style={{
              position: "absolute",
              left: 230,
              top: y - 30,
              lineHeight: "60px",
              fontFamily: MONO,
              fontSize: 46,
              color: C.GRAY,
              whiteSpace: "pre",
            }}
          >
            {FILMS[i]}
          </div>
        </React.Fragment>
      ))}
      {RIJ_Y.map((y, i) => {
        const j = MISSEND.indexOf(i);
        if (j < 0) {
          return HEEFT_SRT[i] ? (
            <React.Fragment key={`s${i}`}>
              <Ruw vorm={BLADEN[i]} />
              <div style={label(860, y - 22, 44)}>srt</div>
            </React.Fragment>
          ) : null;
        }
        const gat = voortgang(f, FASE.missend + 15 + j * 22, 14, POP);
        const gatWeg = 1 - voortgang(f, 600 + j * 8, 8);
        const gevonden = voortgang(f, 606 + j * 8, 12, POP);
        return (
          <React.Fragment key={`s${i}`}>
            {gat > 0 && gatWeg > 0 ? (
              <>
                <Ruw vorm={GATEN[i]} streep="14 10" schaal={0.6 + 0.4 * gat} opacity={gatWeg} />
                <div style={{ ...label(860, y - 38, 76, C.RED_DARK), opacity: Math.min(1, gat) * gatWeg }}>?</div>
              </>
            ) : null}
            {gevonden > 0 ? (
              <>
                <Ruw vorm={BLADEN[i]} schaal={0.6 + 0.4 * gevonden} />
                <div style={{ ...label(860, y - 22, 44), opacity: Math.min(1, gevonden) }}>srt</div>
              </>
            ) : null}
          </React.Fragment>
        );
      })}
      <Op x={loep.x} y={loep.y} opacity={venster(f, 128, FASE.missend, 10)}>
        <Ruw vorm={LOEP} />
      </Op>
    </AbsoluteFill>
  );
};

// ---------- Mp3-map ----------

const MP3_MAP = mapVorm(1240, 9130);
const MP3_Y = [790, 960, 1130];
const NOTEN = MP3_Y.map((y, i) => nootVorm(120, y - 4, 9140 + i * 3));

/** Stukken van een bestandsnaam; `true` is rommel die eruit moet. */
const NUMMERS: [string, boolean][][] = [
  [
    ["Darude - Sandstorm", false],
    ["!!![www.mp3zone]", true],
    [".mp3", false],
  ],
  [
    ["~~", true],
    ["Nummer 02", false],
    ["~~ (www.mp3zone)", true],
    [".mp3", false],
  ],
  [
    ["!!!", true],
    ["Nummer 03", false],
    [" [RIPPED BY xXx]", true],
    [".mp3", false],
  ],
];

export const Mp3map: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = venster(f, FASE.mp3 + 12, FASE.djams + 15, 15);
  if (zicht <= 0) return null;

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <Ruw vorm={MP3_MAP} />
      <div style={label(207, 624, 40)}>mp3</div>
      {MP3_Y.map((y, i) => {
        const rood = f >= FASE.strip + 10 + i * 18;
        const weg = voortgang(f, FASE.strip + 55 + i * 18, 12);
        const schoonStart = FASE.strip + 70 + i * 18;
        const schoon = f >= schoonStart;
        const pop = voortgang(f, schoonStart, 14, POP);
        return (
          <React.Fragment key={i}>
            <Ruw vorm={NOTEN[i]} />
            <div
              style={{
                position: "absolute",
                left: 180,
                top: y - 34,
                lineHeight: "68px",
                fontFamily: MONO,
                fontSize: schoon ? 44 : 34,
                fontWeight: schoon ? 700 : 400,
                color: C.GRAY,
                whiteSpace: "pre",
                transform: schoon ? `scale(${0.85 + 0.15 * pop})` : undefined,
                transformOrigin: "0 50%",
              }}
            >
              {schoon
                ? NUMMERS[i]
                    .filter((s) => !s[1])
                    .map((s) => s[0])
                    .join("")
                : NUMMERS[i].map(([stuk, rommel], k) => (
                    <span
                      key={k}
                      style={
                        rommel
                          ? {
                              color: rood ? C.RED : C.GRAY,
                              textDecoration: rood ? "line-through" : "none",
                              textDecorationThickness: 3,
                              opacity: 1 - weg,
                            }
                          : undefined
                      }
                    >
                      {stuk}
                    </span>
                  ))}
            </div>
          </React.Fragment>
        );
      })}
    </AbsoluteFill>
  );
};
