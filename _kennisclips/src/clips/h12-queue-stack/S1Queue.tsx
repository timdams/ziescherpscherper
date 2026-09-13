import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { bezig, getypt, venster, voortgang } from "../../stijl/anim";
import type { Regel } from "../../stijl/code";
import { C } from "../../stijl/kleuren";
import { Ruw, doos3d, pijl } from "../../stijl/ruw";
import { Noot, Onderschrift } from "../../stijl/tekst";
import { BOVEN, Werkblad } from "../../stijl/werkblad";
import { KaartOpBaan, label, type Kaart } from "./hulp";

// Scène 1: de Queue uit het boek. Elke Enqueue schuift een kaartje achteraan de rij, elke Dequeue
// haalt het voorste eruit en zet het in de console.
export const S1_DUUR = 800;

const REGELS = [
  "Queue<string> wachtrij = new Queue<string>();",
  'wachtrij.Enqueue("Ik stond hier eerste.");',
  'wachtrij.Enqueue("Ik tweedes.");',
  'wachtrij.Enqueue("Ik laatste.");',
  "Console.WriteLine(wachtrij.Dequeue());",
  "Console.WriteLine(wachtrij.Dequeue());",
];
// Startframe van het typen per regel, één frame per teken.
const TYPEN = [15, 100, 210, 300, 410, 560];

const Y = 680;
const SPAWN = 190;
// Van vooraan (rechts, bij Dequeue) naar achteraan (links, bij Enqueue), zoals in de figuur in het boek.
const SLOT = [1200, 890, 580];
const UIT_X = 1690;
const consoleRij = (r: number) => ({ x: BOVEN.uit.x + 77, y: BOVEN.uit.y + (r + 0.5) * BOVEN.uit.hoogte });
const R0 = consoleRij(0);
const R1 = consoleRij(1);

const DOOS = doos3d(380, 560, 1020, 240, { seed: 3000 });
const PIJL_IN = pijl(338, Y, 428, Y, { strokeWidth: 2.6, seed: 3010 }, 16);
const PIJL_UIT = pijl(1446, Y, 1540, Y, { strokeWidth: 2.6, seed: 3011 }, 16);

const KAARTEN: Kaart[] = [
  {
    tekst: "Ik stond hier eerste.",
    seed: 3020,
    verschijnt: 143,
    baan: [
      { f: 150, x: SPAWN, y: Y },
      { f: 195, x: SLOT[0], y: Y },
      { f: 452, x: SLOT[0], y: Y },
      { f: 482, x: UIT_X, y: Y },
      { f: 525, x: R0.x, y: R0.y, s: 0.55 },
    ],
    weg: 515,
    accent: 446,
  },
  {
    tekst: "Ik tweedes.",
    seed: 3021,
    verschijnt: 243,
    baan: [
      { f: 250, x: SPAWN, y: Y },
      { f: 290, x: SLOT[1], y: Y },
      { f: 495, x: SLOT[1], y: Y },
      { f: 535, x: SLOT[0], y: Y },
      { f: 602, x: SLOT[0], y: Y },
      { f: 632, x: UIT_X, y: Y },
      { f: 675, x: R1.x, y: R1.y, s: 0.55 },
    ],
    weg: 665,
    accent: 598,
  },
  {
    tekst: "Ik laatste.",
    seed: 3022,
    verschijnt: 333,
    baan: [
      { f: 340, x: SPAWN, y: Y },
      { f: 380, x: SLOT[2], y: Y },
      { f: 500, x: SLOT[2], y: Y },
      { f: 540, x: SLOT[1], y: Y },
      { f: 645, x: SLOT[1], y: Y },
      { f: 685, x: SLOT[0], y: Y },
    ],
    // Peek: het voorste element licht op, maar blijft staan.
    accent: 705,
  },
];

export const S1Queue: React.FC = () => {
  const f = useCurrentFrame();
  const code: Regel[] = REGELS.map((tekst, i) => ({
    rij: i,
    tekst: getypt(tekst, f, TYPEN[i], 1),
    cursor: bezig(f, TYPEN[i], TYPEN[i] + tekst.length + 4),
  }));
  const uitvoer: Regel[] = [
    { rij: 0, tekst: "Ik stond hier eerste.", opacity: voortgang(f, 520, 10) },
    { rij: 1, tekst: "Ik tweedes.", opacity: voortgang(f, 670, 10) },
  ];

  return (
    <AbsoluteFill>
      <Werkblad indeling={BOVEN} binnen={voortgang(f, 0, 20)} code={code} uitvoer={uitvoer} />
      <Ruw vorm={DOOS} toon={voortgang(f, 60, 30)} />
      <AbsoluteFill style={{ opacity: voortgang(f, 75, 20) }}>
        <div style={label(404, 574, 50, C.RED_DARK, true)}>FIFO</div>
        <div style={label(890, 574, 44)}>Queue</div>
        <div style={label(480, 812, 38)}>Achterkant</div>
        <div style={label(1300, 812, 38)}>Voorkant</div>
        <div style={label(SPAWN, 574, 42)}>Enqueue()</div>
        <div style={label(UIT_X, 574, 42)}>Dequeue()</div>
      </AbsoluteFill>
      <Ruw vorm={PIJL_IN} toon={voortgang(f, 90, 16)} />
      <Ruw vorm={PIJL_UIT} toon={voortgang(f, 95, 16)} />
      {KAARTEN.map((k) => (
        <KaartOpBaan key={k.seed} k={k} w={280} h={90} />
      ))}
      <Noot tekst="Peek()" x={1150} y={596} opacity={venster(f, 705, S1_DUUR + 20)} />
      <Onderschrift
        van={20}
        tot={200}
        regels={["Een queue is een first in, first out-lijst (FIFO),", "zoals de rij aan een ticketverkoop of in de supermarkt"]}
      />
      <Onderschrift van={205} tot={400} regels={["`Enqueue` voegt een item achteraan de lijst toe"]} />
      <Onderschrift
        van={405}
        tot={690}
        regels={["`Dequeue` geeft het eerste element in de queue terug", "en verwijdert het vervolgens"]}
      />
      <Onderschrift
        van={695}
        tot={S1_DUUR + 20}
        regels={["Met `Peek()` kijk je wat het eerste element is,", "zonder het te verwijderen"]}
      />
    </AbsoluteFill>
  );
};
