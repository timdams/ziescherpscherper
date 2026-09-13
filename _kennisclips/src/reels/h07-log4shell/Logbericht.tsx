import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { BEWEEG, IN, venster, voortgang } from "../../stijl/anim";
import { HAND } from "../../stijl/fonts";
import { Kaartje } from "../../stijl/kaartje";
import { C } from "../../stijl/kleuren";
import { Ruw, lijn, pijl, rechthoek, samen } from "../../stijl/ruw";
import { label } from "../../stijl/tekst";
import { Server, knipper } from "./onderdelen";
import { FASE } from "./tijdlijn";

// "Wie de juiste tekst in zo'n logberichtje geraakte, kon daarmee zijn eigen code laten uitvoeren op die
// server. Het lek kreeg de naam Log4Shell." Sterk vereenvoudigd en zonder de echte aanvalstekst: die staat
// ook niet in het boek.

const PAPIER = rechthoek(140, 770, 360, 420, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.6, seed: 8340 });
const LENGTES = [0.9, 0.6, 0.8, 0, 0.7, 0.5];
const REGELS = samen(
  ...[0, 1, 2, 4, 5].map((i) =>
    lijn(180, 840 + i * 60, 180 + 280 * LENGTES[i], 840 + i * 60, { strokeWidth: 3, roughness: 0.9, seed: 8341 + i }),
  ),
);
const NAAR_SERVER = pijl(515, 1020, 628, 1020, { stroke: C.RED, strokeWidth: 3.4, seed: 8350 }, 18);
const STEMPEL = samen(
  rechthoek(220, 895, 640, 190, { fill: C.OFFWHITE, fillStyle: "solid", stroke: C.RED, strokeWidth: 6, roughness: 1.4, seed: 8360 }),
  rechthoek(240, 915, 600, 150, { stroke: C.RED, strokeWidth: 3, roughness: 1.4, seed: 8361 }),
);

export const Logbericht: React.FC = () => {
  const f = useCurrentFrame();
  const t = FASE.tekst;
  const c = FASE.code;
  const n = FASE.naam;
  const zicht = venster(f, t, FASE.slapen, 12);
  if (zicht <= 0) return null;

  const kaartX = -250 + (320 + 250) * voortgang(f, t + 15, 35, BEWEEG);
  const gehackt = voortgang(f, c + 25, 15);
  const alarm = voortgang(f, c + 30, 8) * knipper(f);
  const stempel = voortgang(f, n + 5, 14, IN);

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <AbsoluteFill style={{ opacity: 1 - 0.65 * voortgang(f, n, 15) }}>
        <AbsoluteFill style={{ opacity: voortgang(f, t + 3, 10) }}>
          <Ruw vorm={PAPIER} />
          <Ruw vorm={REGELS} />
          <div style={label(320, 1215, 44)}>logbericht</div>
          <Server x={790} y={980} w={300} h={420} seed={8300} log={(((f % 45) + 1) / 45) * (1 - gehackt) + gehackt} gehackt={gehackt} alarm={alarm} />
          <div style={label(790, 1215, 44)}>server</div>
        </AbsoluteFill>
        <Kaartje tekst="de juiste tekst" x={kaartX} y={1020} w={300} h={64} grootte={40} seed={8351} accent={1} opacity={voortgang(f, t + 15, 6)} />
        <Ruw vorm={NAAR_SERVER} toon={voortgang(f, c + 5, 16)} />
        <div style={{ ...label(790, 615, 50, C.RED_DARK), opacity: voortgang(f, c + 35, 12) }}>eigen code</div>
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          opacity: stempel,
          transform: `rotate(-8deg) scale(${1.6 - 0.6 * stempel})`,
          transformOrigin: "540px 990px",
        }}
      >
        <Ruw vorm={STEMPEL} />
        <div
          style={{
            position: "absolute",
            left: 220,
            top: 895,
            width: 640,
            height: 190,
            lineHeight: "190px",
            textAlign: "center",
            fontFamily: HAND,
            fontSize: 140,
            fontWeight: 700,
            color: C.RED,
          }}
        >
          Log4Shell
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
