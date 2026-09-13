import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { POP, venster, voortgang } from "../../stijl/anim";
import { HAND } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";
import { Ruw, cirkel, lijn, pijl, rechthoek, samen } from "../../stijl/ruw";
import { label } from "../../stijl/tekst";
import { Server, bandjeMidden } from "./onderdelen";
import { FASE } from "./tijdlijn";

// "In december 2021 dook er een lek op in Log4j, een Java-bibliotheek die zowat niemand bij naam kende."
// Een server met een loep op het kleine bandje, met een barst in. Toegevoegd: de loep en de barst.

const SERVER = { x: 540, y: 1000, w: 340, h: 440 };
const b = bandjeMidden(SERVER.w, SERVER.h);
const LOEP_M = { x: SERVER.x + b.x, y: SERVER.y + b.y };

const LOEP = cirkel(LOEP_M.x, LOEP_M.y, 300, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 4, seed: 8160 });
const STEEL = lijn(LOEP_M.x + 108, LOEP_M.y + 108, LOEP_M.x + 190, LOEP_M.y + 190, { strokeWidth: 12, roughness: 1, seed: 8161 });
const BAND = rechthoek(LOEP_M.x - 120, LOEP_M.y - 40, 240, 80, {
  fill: C.RED_LIGHT,
  fillStyle: "solid",
  stroke: C.RED,
  strokeWidth: 3,
  seed: 8162,
});
const bx = LOEP_M.x + 95;
const BARST = samen(
  lijn(bx + 8, LOEP_M.y - 62, bx - 6, LOEP_M.y - 30, { stroke: C.RED_DARK, strokeWidth: 5, roughness: 0.6, seed: 8163 }),
  lijn(bx - 6, LOEP_M.y - 30, bx + 10, LOEP_M.y - 2, { stroke: C.RED_DARK, strokeWidth: 5, roughness: 0.6, seed: 8164 }),
  lijn(bx + 10, LOEP_M.y - 2, bx - 8, LOEP_M.y + 28, { stroke: C.RED_DARK, strokeWidth: 5, roughness: 0.6, seed: 8165 }),
  lijn(bx - 8, LOEP_M.y + 28, bx + 6, LOEP_M.y + 60, { stroke: C.RED_DARK, strokeWidth: 5, roughness: 0.6, seed: 8166 }),
);
const NAAR_BARST = pijl(LOEP_M.x + 250, LOEP_M.y - 90, bx + 22, LOEP_M.y - 40, { stroke: C.RED_DARK, strokeWidth: 3, seed: 8167 }, 14);

export const Lek: React.FC = () => {
  const f = useCurrentFrame();
  const s = FASE.lek;
  const zicht = venster(f, s, FASE.servers, 12);
  if (zicht <= 0) return null;
  const loep = voortgang(f, s + 30, 18, POP);
  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <Server {...SERVER} seed={8150} log={((f % 45) + 1) / 45} opacity={voortgang(f, s + 5, 10)} schaal={0.7 + 0.3 * voortgang(f, s + 5, 16, POP)} />
      <div style={{ ...label(SERVER.x, 1250, 44), opacity: voortgang(f, s + 15, 10) }}>server</div>

      <AbsoluteFill
        style={{
          opacity: voortgang(f, s + 30, 10),
          transform: `scale(${0.3 + 0.7 * loep})`,
          transformOrigin: `${LOEP_M.x}px ${LOEP_M.y}px`,
        }}
      >
        <Ruw vorm={STEEL} />
        <Ruw vorm={LOEP} />
        <Ruw vorm={BAND} />
        <div
          style={{
            position: "absolute",
            left: LOEP_M.x - 120,
            top: LOEP_M.y - 40,
            width: 240,
            height: 80,
            lineHeight: "80px",
            textAlign: "center",
            fontFamily: HAND,
            fontSize: 64,
            fontWeight: 700,
            color: C.RED_DARK,
          }}
        >
          Log4j
        </div>
        <Ruw vorm={BARST} toon={voortgang(f, s + 60, 14)} richting="vanBoven" />
      </AbsoluteFill>
      <Ruw vorm={NAAR_BARST} toon={voortgang(f, s + 75, 12)} richting="vanRechts" />
      <div style={{ ...label(LOEP_M.x + 262, LOEP_M.y - 150, 56, C.RED_DARK, true), opacity: voortgang(f, s + 72, 10) }}>lek</div>
    </AbsoluteFill>
  );
};
