import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { voortgang } from "../../stijl/anim";
import { Kaartje } from "../../stijl/kaartje";
import { C } from "../../stijl/kleuren";
import { Ruw, doos3d, pijl } from "../../stijl/ruw";
import { Onderschrift, label } from "../../stijl/tekst";

// Scène 3: de rij en de stapel naast elkaar, met de teksten uit de twee voorbeelden van het boek.
// Het element dat er als eerste uit gaat, licht op.
export const S3_DUUR = 300;

const RIJ = doos3d(70, 580, 850, 200, { seed: 3200, diepte: 30 });
const STAPEL = doos3d(1400, 460, 290, 320, { seed: 3220, diepte: 30, zij: "links" });
const PIJL_DEQUEUE = pijl(958, 680, 1050, 680, { strokeWidth: 2.6, seed: 3230 }, 14);
const PIJL_POP = pijl(1700, 570, 1790, 570, { strokeWidth: 2.6, seed: 3231 }, 14);

// Vooraan (rechts) naar achteraan.
const RIJ_KAARTEN = [
  { tekst: "Ik stond hier eerste.", x: 765 },
  { tekst: "Ik tweedes.", x: 495 },
  { tekst: "Ik laatste.", x: 225 },
];
// Onderaan naar bovenaan.
const STAPEL_KAARTEN = [
  { tekst: "Ik was eerste hier.", y: 730 },
  { tekst: "Ik tweede.", y: 650 },
  { tekst: "Ik als laatste.", y: 570 },
];

export const S3NaastElkaar: React.FC = () => {
  const f = useCurrentFrame();

  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: voortgang(f, 0, 20) }}>
        <Ruw vorm={RIJ} />
        <div style={label(495, 480, 56, C.RED_DARK)}>FIFO</div>
        <div style={label(495, 800, 40)}>Queue</div>
        {RIJ_KAARTEN.map((k, i) => (
          <Kaartje
            key={k.tekst}
            tekst={k.tekst}
            x={k.x}
            y={680}
            w={250}
            h={70}
            seed={3240 + i}
            grootte={30}
            accent={i === 0 ? voortgang(f, 50, 12) : 0}
          />
        ))}

        <Ruw vorm={STAPEL} />
        <div style={label(1530, 360, 56, C.RED_DARK)}>LIFO</div>
        <div style={label(1545, 800, 40)}>Stack</div>
        {STAPEL_KAARTEN.map((k, i) => (
          <Kaartje
            key={k.tekst}
            tekst={k.tekst}
            x={1545}
            y={k.y}
            w={250}
            h={70}
            seed={3250 + i}
            grootte={30}
            accent={i === 2 ? voortgang(f, 120, 12) : 0}
          />
        ))}
      </AbsoluteFill>

      <Ruw vorm={PIJL_DEQUEUE} toon={voortgang(f, 60, 14)} />
      <div style={{ ...label(1040, 612, 40), opacity: voortgang(f, 60, 12) }}>Dequeue()</div>
      <Ruw vorm={PIJL_POP} toon={voortgang(f, 130, 14)} />
      <div style={{ ...label(1760, 500, 40), opacity: voortgang(f, 130, 12) }}>Pop()</div>

      <Onderschrift
        van={20}
        tot={S3_DUUR + 20}
        regels={["Daar waar een queue first in, first out is,", "is een stack last in, first out"]}
      />
    </AbsoluteFill>
  );
};
