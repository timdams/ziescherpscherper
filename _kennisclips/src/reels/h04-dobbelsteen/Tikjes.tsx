import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { POP, opBaan, venster, voortgang } from "../../stijl/anim";
import { MONO } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";
import { Ruw, cirkel, lijn, pijl, rechthoek, samen, veelhoek } from "../../stijl/ruw";
import { label } from "../../stijl/tekst";
import { Machine } from "./onderdelen";
import { FASE } from "./tijdlijn";

// Het oude .NET Framework: de klok is de seed, en de klok verspringt maar om de zoveel milliseconden.
// Twee generators in hetzelfde tikje krijgen dezelfde seed. Toegevoegd: de klokwaarden 40 tot 46 als
// voorbeeld, en de tijdlijn met tikjes.

const KLOKVAK = rechthoek(390, 720, 300, 120, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.8, seed: 6100 });
const PIJL_A = pijl(500, 845, 330, 1125, { strokeWidth: 2.6, seed: 6101 }, 16);
const PIJL_B = pijl(580, 845, 750, 1125, { strokeWidth: 2.6, seed: 6102 }, 16);

const TIK_X = (k: number) => 90 + 150 * k;
const LINIAAL = samen(
  lijn(90, 1000, 990, 1000, { strokeWidth: 2.6, seed: 6110 }),
  ...Array.from({ length: 7 }, (_, k) => lijn(TIK_X(k), 986, TIK_X(k), 1014, { strokeWidth: 2.6, roughness: 0.7, seed: 6111 + k })),
);

const HAAK = samen(
  lijn(TIK_X(2), 925, TIK_X(3), 925, { stroke: C.RED, strokeWidth: 3.4, seed: 6120 }),
  lijn(TIK_X(2), 925, TIK_X(2), 942, { stroke: C.RED, strokeWidth: 3.4, seed: 6121 }),
  lijn(TIK_X(3), 925, TIK_X(3), 942, { stroke: C.RED, strokeWidth: 3.4, seed: 6122 }),
);
const MOMENT_A = cirkel(420, 1000, 24, { fill: C.RED, fillStyle: "solid", stroke: C.RED_DARK, strokeWidth: 2, seed: 6123 });
const MOMENT_B = cirkel(500, 1000, 24, { fill: C.RED, fillStyle: "solid", stroke: C.RED_DARK, strokeWidth: 2, seed: 6124 });
const NAAR_A = pijl(432, 1068, 330, 1125, { stroke: C.RED_DARK, strokeWidth: 2.6, seed: 6125 }, 14);
const NAAR_B = pijl(512, 1068, 750, 1125, { stroke: C.RED_DARK, strokeWidth: 2.6, seed: 6126 }, 14);

const lineair = (t: number) => t;

export const Tikjes: React.FC = () => {
  const f = useCurrentFrame();
  if (f < FASE.framework || f >= FASE.lus) return null;
  const zicht = 1 - voortgang(f, FASE.lus - 15, 15);

  const machineA = opBaan(f, [
    { f: FASE.framework, x: 310, y: 850 },
    { f: FASE.framework + 40, x: 310, y: 1235 },
  ]);
  const machineB = opBaan(f, [
    { f: FASE.framework, x: 770, y: 850 },
    { f: FASE.framework + 40, x: 770, y: 1235 },
  ]);

  const nu = 90 + 900 * voortgang(f, 690, 110, lineair);
  // De haak staat boven het tikje van 42 tot 43, dus a en b krijgen allebei 42.
  const tikje = f < 690 ? 40 : f < 805 ? 40 + Math.min(6, Math.floor((nu - 90) / 150)) : 42;
  const eenTikje = voortgang(f, FASE.tikje + 5, 12);

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <div style={{ ...label(540, 610, 62), opacity: voortgang(f, FASE.framework + 5, 12) }}>.NET Framework</div>

      <Machine x={machineA.x} y={machineA.y} seed={6040} />
      <Machine x={machineB.x} y={machineB.y} seed={6042} />
      <div style={{ ...label(120, 1210, 56), opacity: voortgang(f, FASE.framework + 40, 12) }}>a</div>
      <div style={{ ...label(590, 1210, 56), opacity: voortgang(f, FASE.framework + 40, 12) }}>b</div>

      <AbsoluteFill
        style={{
          opacity: voortgang(f, FASE.klok + 5, 10),
          transform: `scale(${0.7 + 0.3 * voortgang(f, FASE.klok + 5, 16, POP)})`,
          transformOrigin: "540px 780px",
        }}
      >
        <Ruw vorm={KLOKVAK} />
        <div
          style={{
            position: "absolute",
            left: 390,
            width: 300,
            top: 720,
            height: 120,
            lineHeight: "120px",
            textAlign: "center",
            fontFamily: MONO,
            fontSize: 64,
            fontWeight: 700,
            color: f >= FASE.tikje ? C.RED_DARK : C.GRAY,
          }}
        >
          {tikje}
        </div>
      </AbsoluteFill>
      <div style={{ ...label(250, 758, 44, C.GRAY, true), opacity: voortgang(f, FASE.klok + 10, 10) }}>klok</div>

      {/* Weg voor de tijdlijn verschijnt: anders lopen de pijlen door de getallen eronder. */}
      <AbsoluteFill style={{ opacity: 1 - voortgang(f, FASE.tikken - 5, 10) }}>
        <Ruw vorm={PIJL_A} toon={voortgang(f, FASE.klok + 15, 20)} richting="vanBoven" />
        <Ruw vorm={PIJL_B} toon={voortgang(f, FASE.klok + 15, 20)} richting="vanBoven" />
        <div style={{ ...label(330, 870, 40, C.RED_DARK, true), opacity: voortgang(f, FASE.klok + 25, 10) }}>seed</div>
        <div style={{ ...label(650, 870, 40, C.RED_DARK, true), opacity: voortgang(f, FASE.klok + 25, 10) }}>seed</div>
      </AbsoluteFill>

      <Ruw vorm={LINIAAL} toon={voortgang(f, FASE.tikken + 5, 25)} />
      {Array.from({ length: 7 }, (_, k) => (
        <div key={k} style={{ ...label(TIK_X(k), 1018, 34), opacity: voortgang(f, FASE.tikken + 20, 10) }}>
          {40 + k}
        </div>
      ))}
      <AbsoluteFill style={{ opacity: venster(f, 685, 808, 6) }}>
        <Ruw
          vorm={veelhoek(
            [
              [nu - 14, 958],
              [nu + 14, 958],
              [nu, 988],
            ],
            { fill: C.RED, fillStyle: "solid", stroke: C.RED_DARK, strokeWidth: 2, roughness: 0.6, seed: 6130 },
          )}
        />
        <div style={label(nu, 912, 36, C.RED_DARK)}>nu</div>
      </AbsoluteFill>

      <AbsoluteFill style={{ opacity: eenTikje }}>
        <Ruw vorm={HAAK} toon={voortgang(f, FASE.tikje + 5, 14)} />
        <div style={label(465, 872, 42, C.RED_DARK)}>hetzelfde tikje</div>
        <Ruw vorm={MOMENT_A} />
        <Ruw vorm={MOMENT_B} />
        <div style={label(420, 947, 40, C.RED_DARK)}>a</div>
        <div style={label(500, 947, 40, C.RED_DARK)}>b</div>
      </AbsoluteFill>
      <Ruw vorm={NAAR_A} toon={voortgang(f, FASE.tikje + 30, 18)} richting="vanBoven" />
      <Ruw vorm={NAAR_B} toon={voortgang(f, FASE.tikje + 30, 18)} richting="vanBoven" />
      <div style={{ ...label(310, 1300, 42, C.RED_DARK), opacity: voortgang(f, FASE.tikje + 50, 12) }}>seed 42</div>
      <div style={{ ...label(770, 1300, 42, C.RED_DARK), opacity: voortgang(f, FASE.tikje + 50, 12) }}>seed 42</div>
    </AbsoluteFill>
  );
};
