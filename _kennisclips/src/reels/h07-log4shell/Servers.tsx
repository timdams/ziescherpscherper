import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { POP, venster, voortgang } from "../../stijl/anim";
import { C } from "../../stijl/kleuren";
import { Ruw, rechthoek } from "../../stijl/ruw";
import { label } from "../../stijl/tekst";
import { Server } from "./onderdelen";
import { FASE } from "./tijdlijn";

// "...en die ondertussen op een gigantisch deel van de servers op het internet meedraaide om logberichten
// weg te schrijven." Twaalf servers, elk met het roze bandje en logregels die telkens opnieuw verschijnen.

const KOLOMMEN = [210, 430, 650, 870];
const RIJEN = [780, 1020, 1260];
const LEGENDE = rechthoek(440, 1404, 56, 28, {
  fill: C.RED_LIGHT,
  fillStyle: "solid",
  stroke: C.RED,
  strokeWidth: 2,
  roughness: 0.8,
  seed: 8290,
});

export const Servers: React.FC = () => {
  const f = useCurrentFrame();
  const s = FASE.servers;
  const zicht = venster(f, s, FASE.tekst, 12);
  if (zicht <= 0) return null;
  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      {RIJEN.map((y, r) =>
        KOLOMMEN.map((x, k) => {
          const i = r * KOLOMMEN.length + k;
          const start = s + 5 + (r + k) * 5;
          return (
            <Server
              key={i}
              x={x}
              y={y}
              w={150}
              h={190}
              seed={8500 + i * 40}
              log={(((f + i * 11) % 45) + 1) / 45}
              opacity={voortgang(f, start, 10)}
              schaal={0.6 + 0.4 * voortgang(f, start, 16, POP)}
            />
          );
        }),
      )}
      <Ruw vorm={LEGENDE} opacity={voortgang(f, s + 60, 12)} />
      <div style={{ ...label(512, 1394, 44, C.GRAY, true), opacity: voortgang(f, s + 60, 12) }}>Log4j</div>
    </AbsoluteFill>
  );
};
