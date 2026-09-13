import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { venster, voortgang } from "../../stijl/anim";
import { Kaartje } from "../../stijl/kaartje";
import { FASE } from "./tijdlijn";

// "Bestaande bibliotheken gebruiken is bijna altijd de juiste keuze, maar je maakt je er wel afhankelijk van."
// Toegevoegd: jouw code als blok bovenop Console en Math, die op .NET staan (de namen komen uit dezelfde pagina).

const BLOKKEN = [
  { tekst: ".NET", x: 540, y: 1150, w: 620, start: 10, accent: 0 },
  { tekst: "Console", x: 385, y: 1040, w: 300, start: 24, accent: 0 },
  { tekst: "Math", x: 695, y: 1040, w: 300, start: 34, accent: 0 },
  { tekst: "jouw code", x: 540, y: 930, w: 420, start: 50, accent: 1 },
];

export const Toren: React.FC = () => {
  const f = useCurrentFrame();
  const s = FASE.afhankelijk;
  const zicht = venster(f, s, FASE.lek, 12);
  if (zicht <= 0) return null;
  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      {BLOKKEN.map((b, i) => (
        <Kaartje
          key={i}
          tekst={b.tekst}
          x={b.x}
          y={b.y - 80 * (1 - voortgang(f, s + b.start, 16))}
          w={b.w}
          h={110}
          grootte={60}
          seed={8100 + i}
          accent={b.accent}
          opacity={voortgang(f, s + b.start, 8)}
        />
      ))}
    </AbsoluteFill>
  );
};
