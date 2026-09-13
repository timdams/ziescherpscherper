import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { venster, voortgang } from "../../stijl/anim";
import { C } from "../../stijl/kleuren";
import { Ruw, rechthoek } from "../../stijl/ruw";
import { label } from "../../stijl/tekst";
import { FASE } from "./tijdlijn";

// 4 kilobyte werkgeheugen naast 72 kilobyte programma, op schaal: 12 pixels per kilobyte.
const PER_KB = 12;
const WERK = rechthoek(100, 840, 4 * PER_KB, 110, {
  fill: C.RED_LIGHT,
  fillStyle: "hachure",
  hachureGap: 8,
  fillWeight: 2,
  stroke: C.RED,
  strokeWidth: 2.6,
  seed: 4040,
});
const PROGRAMMA = rechthoek(100, 1110, 72 * PER_KB, 110, {
  fill: C.GRAY,
  fillStyle: "hachure",
  hachureGap: 10,
  fillWeight: 1.2,
  strokeWidth: 2.6,
  seed: 4041,
});

export const Geheugen: React.FC = () => {
  const f = useCurrentFrame();
  const s = FASE.geheugen;
  const zicht = venster(f, s, FASE.gsm, 15);
  if (zicht <= 0) return null;
  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <div style={{ ...label(100, 770, 50, C.GRAY, true), opacity: voortgang(f, s + 5, 12) }}>werkgeheugen</div>
      <Ruw vorm={WERK} toon={voortgang(f, s + 10, 20)} />
      <div style={{ ...label(170, 868, 60, C.RED_DARK, true), opacity: voortgang(f, s + 25, 12) }}>4 KB</div>

      <div style={{ ...label(100, 1040, 50, C.GRAY, true), opacity: voortgang(f, s + 40, 12) }}>programma</div>
      <Ruw vorm={PROGRAMMA} toon={voortgang(f, s + 45, 50)} />
      <div style={{ ...label(830, 1040, 60, C.GRAY, true), opacity: voortgang(f, s + 90, 12) }}>72 KB</div>

      <div style={{ ...label(100, 1250, 36, C.GRAY, true), fontWeight: 400, opacity: voortgang(f, s + 100, 15) }}>
        (op schaal)
      </div>
    </AbsoluteFill>
  );
};
