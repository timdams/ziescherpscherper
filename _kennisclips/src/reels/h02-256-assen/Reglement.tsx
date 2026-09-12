import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { venster, voortgang } from "../../stijl/anim";
import { HAND } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";
import { Ruw, lijn, rechthoek } from "../../stijl/ruw";
import { Opmaak } from "../../stijl/tekst";
import { FASE } from "./tijdlijn";

// Het citaat uit de voetnoot in het boek: Fahrdienstvorschriften, rubriek Zugbildung.
const REGELS = ["„...darf die effektive", "Gesamtachszahl eines Zuges", "nicht *256 Achsen* betragen.“"];

const PAPIER = rechthoek(110, 640, 860, 420, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.4, seed: 300 });
const ONDERLIJN = lijn(150, 1024, 820, 1018, { stroke: C.RED, strokeWidth: 3.5, roughness: 1.2, seed: 301 });

const hand = (grootte: number, gewicht: number, top: number): React.CSSProperties => ({
  position: "absolute",
  left: 150,
  top,
  fontFamily: HAND,
  fontSize: grootte,
  fontWeight: gewicht,
  lineHeight: 1.15,
  color: C.GRAY,
  whiteSpace: "nowrap",
});

export const Reglement: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = Math.max(
    venster(f, FASE.reglement, FASE.teller, 15),
    venster(f, FASE.oplossing, FASE.csharp, 15),
  );
  if (zicht <= 0) return null;
  const start = f < FASE.teller ? FASE.reglement : FASE.oplossing;
  const dy = (1 - voortgang(f, start, 20)) * 40;

  return (
    <AbsoluteFill
      style={{
        opacity: zicht,
        transform: `translateY(${dy}px) rotate(-1.2deg)`,
        transformOrigin: "540px 850px",
      }}
    >
      <Ruw vorm={PAPIER} />
      <div style={hand(44, 700, 668)}>Fahrdienstvorschriften</div>
      <div style={hand(34, 400, 724)}>rubriek Zugbildung</div>
      {REGELS.map((r, i) => (
        <div key={i} style={{ ...hand(60, 700, 800 + i * 70), lineHeight: "70px" }}>
          <Opmaak tekst={r} grootte={60} nadruk={C.RED_DARK} />
        </div>
      ))}
      <Ruw vorm={ONDERLIJN} toon={voortgang(f, start + 35, 20)} />
    </AbsoluteFill>
  );
};
