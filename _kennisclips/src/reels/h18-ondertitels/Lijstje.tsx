import React from "react";
import { useCurrentFrame } from "remotion";
import { WEG, getypt, venster, voortgang } from "../../stijl/anim";
import { MONO } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";
import { Op } from "../../stijl/op";
import { Ruw, lijn, rechthoek, samen } from "../../stijl/ruw";
import { FASE } from "./tijdlijn";

// Het lijstje met de ontbrekende srt-bestanden. De namen zijn de echte uitvoer van de code in de
// C#-scène op de testmap. Toegevoegd, niet uit het kader: de vinkjes.

const BLAD = rechthoek(0, 0, 700, 540, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.8, roughness: 1.4, seed: 9150 });
const NAMEN = ["Amelie.srt", "Matrix.srt", "Memento.srt"];
const RIJ = [120, 270, 420];
const VAKJES = RIJ.map((cy, i) => rechthoek(50, cy - 32, 64, 64, { strokeWidth: 2.6, roughness: 1.2, seed: 9151 + i }));
const VINKJES = RIJ.map((cy, i) =>
  samen(
    lijn(58, cy - 2, 80, cy + 22, { stroke: C.RED, strokeWidth: 6, roughness: 1, seed: 9160 + i * 2 }),
    lijn(80, cy + 22, 124, cy - 44, { stroke: C.RED, strokeWidth: 6, roughness: 1, seed: 9161 + i * 2 }),
  ),
);

export const Lijstje: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = venster(f, FASE.lijst + 5, 632, 10);
  if (zicht <= 0) return null;
  const y = 1500 - 780 * voortgang(f, FASE.lijst + 5, 25) + 60 * voortgang(f, 605, 25, WEG);

  return (
    <Op x={190} y={y} hoek={-2} opacity={zicht}>
      <Ruw vorm={BLAD} />
      {RIJ.map((cy, i) => (
        <React.Fragment key={i}>
          <Ruw vorm={VAKJES[i]} />
          <div
            style={{
              position: "absolute",
              left: 160,
              top: cy - 36,
              lineHeight: "72px",
              fontFamily: MONO,
              fontSize: 54,
              fontWeight: 500,
              color: C.GRAY,
              whiteSpace: "pre",
            }}
          >
            {getypt(NAMEN[i], f, 425 + i * 25, 1)}
          </div>
          <Ruw vorm={VINKJES[i]} toon={voortgang(f, FASE.online + 15 + i * 25, 12)} />
        </React.Fragment>
      ))}
    </Op>
  );
};
