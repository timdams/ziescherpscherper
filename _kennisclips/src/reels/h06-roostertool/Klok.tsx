import React from "react";
import { useCurrentFrame } from "remotion";
import { opBaan, venster, voortgang } from "../../stijl/anim";
import { C } from "../../stijl/kleuren";
import { Op } from "../../stijl/op";
import { Ruw, cirkel, lijn, samen } from "../../stijl/ruw";
import { FASE } from "./tijdlijn";

// Een klok die tijdens de haak groot onder de tekst hangt en daarna naar de hoek schuift.
// Bij elke "twee uur" draait de grote wijzer twee keer rond. Toegevoegd, niet uit het kader.

const WIJZERPLAAT = samen(
  cirkel(0, 0, 160, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 3, seed: 5400 }),
  ...Array.from({ length: 12 }, (_, i) => {
    const a = (i * 30 * Math.PI) / 180;
    return lijn(Math.sin(a) * 60, -Math.cos(a) * 60, Math.sin(a) * 71, -Math.cos(a) * 71, {
      strokeWidth: i % 3 === 0 ? 3.4 : 2,
      roughness: 0.6,
      seed: 5401 + i,
    });
  }),
);
const UURWIJZER = lijn(0, 8, 0, -40, { strokeWidth: 7, roughness: 0.5, seed: 5420 });
const MINUUTWIJZER = lijn(0, 10, 0, -58, { strokeWidth: 4.5, roughness: 0.5, seed: 5421 });
const AS = cirkel(0, 0, 14, { fill: C.GRAY, fillStyle: "solid", strokeWidth: 2, seed: 5422 });

const lineair = (t: number) => t;

export const Klok: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = venster(f, -30, FASE.lus, 15);
  if (zicht <= 0) return null;
  const plaats = opBaan(f, [
    { f: FASE.verhaal, x: 540, y: 1180, s: 1.6 },
    { f: FASE.verhaal + 40, x: 960, y: 710, s: 1 },
  ]);
  const wacht1 = voortgang(f, 130, 125, lineair);
  const wacht2 = voortgang(f, 490, 130, lineair);
  const uur = -90 + 60 * wacht1 + 60 * wacht2;
  const minuut = Math.min(f, FASE.verhaal) * 1.5 + 720 * wacht1 + 720 * wacht2;

  return (
    <Op x={plaats.x} y={plaats.y} schaal={plaats.s} opacity={zicht}>
      <Ruw vorm={WIJZERPLAAT} />
      <Op x={0} y={0} hoek={uur}>
        <Ruw vorm={UURWIJZER} />
      </Op>
      <Op x={0} y={0} hoek={minuut}>
        <Ruw vorm={MINUUTWIJZER} />
      </Op>
      <Ruw vorm={AS} />
    </Op>
  );
};
