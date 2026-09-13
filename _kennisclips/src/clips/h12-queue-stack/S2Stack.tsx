import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { bezig, getypt, voortgang } from "../../stijl/anim";
import type { Regel } from "../../stijl/code";
import { C } from "../../stijl/kleuren";
import { Ruw, doos3d, pijl } from "../../stijl/ruw";
import { Onderschrift } from "../../stijl/tekst";
import { BOVEN, Werkblad } from "../../stijl/werkblad";
import { KaartOpBaan, label, type Kaart } from "./hulp";

// Scène 2: de Stack uit het boek. Elke Push legt een kaartje bovenop de stapel, elke Pop tilt het
// bovenste eraf en zet het in de console.
export const S2_DUUR = 780;

const REGELS = [
  "Stack<string> stapel = new Stack<string>();",
  'stapel.Push("Ik was eerste hier.");',
  'stapel.Push("Ik tweede.");',
  'stapel.Push("Ik als laatste.");',
  "",
  "Console.WriteLine(stapel.Pop());",
  "Console.WriteLine(stapel.Pop());",
];
const TYPEN = [15, 100, 225, 330, 0, 440, 590];

const X = 990;
const INGANG = 492;
// Van onderaan naar bovenaan.
const SLOT = [786, 698, 610];
const SPAWN = { x: 360, y: 500 };
const UIT = { x: 1620, y: 500 };
const consoleRij = (r: number) => ({ x: BOVEN.uit.x + 77, y: BOVEN.uit.y + (r + 0.5) * BOVEN.uit.hoogte });
const R0 = consoleRij(0);
const R1 = consoleRij(1);

const TOREN = doos3d(830, 540, 320, 300, { seed: 3100, zij: "links" });
const PIJL_IN = pijl(505, 500, 772, 500, { strokeWidth: 2.6, seed: 3110 }, 16);
const PIJL_UIT = pijl(1160, 500, 1472, 500, { strokeWidth: 2.6, seed: 3111 }, 16);

const KAARTEN: Kaart[] = [
  {
    tekst: "Ik was eerste hier.",
    seed: 3120,
    verschijnt: 136,
    baan: [
      { f: 142, x: SPAWN.x, y: SPAWN.y },
      { f: 175, x: X, y: INGANG },
      { f: 205, x: X, y: SLOT[0] },
    ],
  },
  {
    tekst: "Ik tweede.",
    seed: 3121,
    verschijnt: 252,
    baan: [
      { f: 258, x: SPAWN.x, y: SPAWN.y },
      { f: 290, x: X, y: INGANG },
      { f: 315, x: X, y: SLOT[1] },
      { f: 624, x: X, y: SLOT[1] },
      { f: 648, x: X, y: INGANG },
      { f: 672, x: UIT.x, y: UIT.y },
      { f: 712, x: R1.x, y: R1.y, s: 0.55 },
    ],
    weg: 700,
    accent: 620,
  },
  {
    tekst: "Ik als laatste.",
    seed: 3122,
    verschijnt: 362,
    baan: [
      { f: 368, x: SPAWN.x, y: SPAWN.y },
      { f: 398, x: X, y: INGANG },
      { f: 420, x: X, y: SLOT[2] },
      { f: 474, x: X, y: SLOT[2] },
      { f: 494, x: X, y: INGANG },
      { f: 520, x: UIT.x, y: UIT.y },
      { f: 560, x: R0.x, y: R0.y, s: 0.55 },
    ],
    weg: 548,
    accent: 470,
  },
];

export const S2Stack: React.FC = () => {
  const f = useCurrentFrame();
  const code: Regel[] = REGELS.map((tekst, i) => ({
    rij: i,
    tekst: tekst === "" ? "" : getypt(tekst, f, TYPEN[i], 1),
    cursor: tekst !== "" && bezig(f, TYPEN[i], TYPEN[i] + tekst.length + 4),
  }));
  const uitvoer: Regel[] = [
    { rij: 0, tekst: "Ik als laatste.", opacity: voortgang(f, 555, 10) },
    { rij: 1, tekst: "Ik tweede.", opacity: voortgang(f, 705, 10) },
  ];

  return (
    <AbsoluteFill>
      <Werkblad indeling={BOVEN} binnen={voortgang(f, 0, 20)} code={code} uitvoer={uitvoer} />
      <Ruw vorm={TOREN} toon={voortgang(f, 60, 30)} richting="vanOnder" />
      <AbsoluteFill style={{ opacity: voortgang(f, 75, 20) }}>
        <div style={label(660, 666, 44)}>Stack</div>
        <div style={label(660, 724, 50, C.RED_DARK)}>LIFO</div>
        <div style={label(1180, 560, 38, C.GRAY, true)}>Bovenkant</div>
        <div style={label(1180, 800, 38, C.GRAY, true)}>Onderkant</div>
        <div style={label(SPAWN.x, 562, 42)}>Push()</div>
        <div style={label(UIT.x, 562, 42)}>Pop()</div>
      </AbsoluteFill>
      <Ruw vorm={PIJL_IN} toon={voortgang(f, 90, 16)} />
      <Ruw vorm={PIJL_UIT} toon={voortgang(f, 95, 16)} />
      {KAARTEN.map((k) => (
        <KaartOpBaan key={k.seed} k={k} w={280} h={80} />
      ))}
      <Onderschrift
        van={20}
        tot={220}
        regels={["Een stack is last in, first out (LIFO),", "zoals een stapel papieren waar je steeds bovenop een nieuw papier legt"]}
      />
      <Onderschrift van={225} tot={435} regels={["`Push` plaatst een nieuw element bovenop de stapel"]} />
      <Onderschrift
        van={440}
        tot={610}
        regels={["`Pop` geeft het bovenste element in de stack terug", "en verwijdert het vervolgens"]}
      />
      <Onderschrift
        van={615}
        tot={S2_DUUR + 20}
        regels={["Het recentst toegevoegde element", "wordt als eerste verwerkt"]}
      />
    </AbsoluteFill>
  );
};
