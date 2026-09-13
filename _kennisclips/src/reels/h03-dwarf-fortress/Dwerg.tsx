import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { POP, venster, voortgang } from "../../stijl/anim";
import { MONO } from "../../stijl/fonts";
import { Kaartje } from "../../stijl/kaartje";
import { C } from "../../stijl/kleuren";
import { Ruw, pijl } from "../../stijl/ruw";
import { FASE } from "./tijdlijn";

// "Elke dwerg heeft een eigen humeur, een eigen geschiedenis en eigen voorkeuren": één dwerg uit het fort,
// groot in een zwart vakje, met drie kaartjes.

const PIJLEN = [
  pijl(505, 992, 230, 1178, { strokeWidth: 2.6, seed: 7300 }, 16),
  pijl(540, 995, 540, 1178, { strokeWidth: 2.6, seed: 7301 }, 16),
  pijl(575, 992, 850, 1178, { strokeWidth: 2.6, seed: 7302 }, 16),
];
const KAARTEN = [
  { tekst: "humeur", x: 200 },
  { tekst: "geschiedenis", x: 540 },
  { tekst: "voorkeuren", x: 880 },
];

export const Dwerg: React.FC = () => {
  const f = useCurrentFrame();
  const s = FASE.dwerg;
  const zicht = venster(f, s, FASE.lagen, 12);
  if (zicht <= 0) return null;
  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <div
        style={{
          position: "absolute",
          left: 410,
          top: 720,
          width: 260,
          height: 260,
          background: C.CONSOLE_BG,
          borderRadius: 22,
          boxShadow: "0 6px 26px rgba(0, 0, 0, 0.18)",
          lineHeight: "260px",
          textAlign: "center",
          fontFamily: MONO,
          fontSize: 190,
          fontWeight: 700,
          color: C.WHITE,
          opacity: voortgang(f, s + 5, 10),
          transform: `scale(${0.5 + 0.5 * voortgang(f, s + 5, 18, POP)})`,
        }}
      >
        ☺
      </div>
      {PIJLEN.map((vorm, i) => (
        <Ruw key={i} vorm={vorm} toon={voortgang(f, s + 25 + i * 14, 16)} richting="vanBoven" />
      ))}
      {KAARTEN.map((k, i) => (
        <Kaartje
          key={i}
          tekst={k.tekst}
          x={k.x}
          y={1242}
          w={300}
          h={100}
          grootte={50}
          seed={7310 + i}
          opacity={voortgang(f, s + 32 + i * 14, 10)}
          schaal={0.6 + 0.4 * voortgang(f, s + 32 + i * 14, 16, POP)}
        />
      ))}
    </AbsoluteFill>
  );
};
