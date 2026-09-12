import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { POP, venster, voortgang } from "./anim";
import { HAND, MONO } from "./fonts";
import { C } from "./kleuren";
import { Ruw, ellips, lijn, rechthoek, type Vak } from "./ruw";
import { Opmaak } from "./tekst";
import { Verteller } from "./verteller";

// Gedeeld door alle staande reels (1080x1920). Bovenaan ±250 px en onderaan ±420 px blijven leeg
// voor de knoppen en het bijschrift van Instagram.
export const REEL_VERTELLER = { x: 34, y: 330, hoogte: 240 };
export const REEL_BALLON: Vak = { x: 250, y: 270, w: 750, h: 290 };

/** Eén tekst in de ballon van de verteller. `*nadruk*` en `` `code` `` mogen. */
export type ReelTekst = { van: number; tot: number; regels: string[] };

const BALLON_VORM = rechthoek(REEL_BALLON.x, REEL_BALLON.y, REEL_BALLON.w, REEL_BALLON.h, {
  fill: C.WHITE,
  fillStyle: "solid",
  strokeWidth: 2.6,
  roughness: 1.6,
  bowing: 1.2,
  seed: 500,
});
const STAART = lijn(REEL_BALLON.x, REEL_BALLON.y + 185, REEL_VERTELLER.x + 188, REEL_VERTELLER.y + 72, {
  strokeWidth: 2.6,
  roughness: 1.6,
  seed: 501,
});
const BALLON_GROOTTE = 56;
const REGELHOOGTE = BALLON_GROOTTE * 1.18;

/** Het vertellermannetje met zijn ballon. Hoogstens 4 regels van ±29 tekens per tekst. */
export const VertellerBallon: React.FC<{ teksten: ReelTekst[]; van: number; tot: number }> = ({
  teksten,
  van,
  tot,
}) => {
  const f = useCurrentFrame();
  const zicht = venster(f, van, tot, 12);
  if (zicht <= 0) return null;
  const wiebel = Math.sin(f / 6) * 3;

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <Verteller x={REEL_VERTELLER.x} y={REEL_VERTELLER.y + wiebel} hoogte={REEL_VERTELLER.hoogte} />
      <Ruw vorm={STAART} />
      <Ruw vorm={BALLON_VORM} />
      {teksten.map((t, i) => {
        const o = venster(f, t.van, t.tot, 10);
        if (o <= 0) return null;
        const hoogte = t.regels.length * REGELHOOGTE;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: REEL_BALLON.x + 40,
              width: REEL_BALLON.w - 80,
              top: REEL_BALLON.y + REEL_BALLON.h / 2 - hoogte / 2,
              fontFamily: HAND,
              fontSize: BALLON_GROOTTE,
              fontWeight: 700,
              lineHeight: `${REGELHOOGTE}px`,
              color: C.GRAY,
              opacity: o,
            }}
          >
            {t.regels.map((r, j) => (
              <div key={j} style={{ opacity: voortgang(f, t.van + j * 6, 10) }}>
                <Opmaak tekst={r} grootte={BALLON_GROOTTE} />
              </div>
            ))}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

const HAAK_REGEL = 90;
const haakRegel: React.CSSProperties = {
  position: "absolute",
  left: 0,
  right: 0,
  textAlign: "center",
  fontFamily: HAND,
  fontSize: 92,
  fontWeight: 700,
  lineHeight: 1,
  color: C.GRAY,
};

/**
 * Het eerste beeld van een reel: een paar regels met één groot rood getal in een ovaal.
 * De tekst staat er vanaf frame 0, want dat frame moet al alles zeggen.
 */
export const Haak: React.FC<{
  boven: string[];
  groot: string;
  onder: string[];
  tot: number;
  top?: number;
  seed?: number;
  ovaalBreedte?: number;
  ovaalHoogte?: number;
  onderAfstand?: number;
}> = ({ boven, groot, onder, tot, top = 290, seed = 600, ovaalBreedte = 640, ovaalHoogte = 350, onderAfstand = 375 }) => {
  const f = useCurrentFrame();
  const zicht = venster(f, -30, tot, 15);
  if (zicht <= 0) return null;
  const grootTop = top + boven.length * HAAK_REGEL;
  const onderTop = grootTop + onderAfstand;
  const ovaal = ellips(540, grootTop + 192, ovaalBreedte, ovaalHoogte, {
    stroke: C.RED_DARK,
    strokeWidth: 4,
    roughness: 1.4,
    seed,
  });
  const pop = voortgang(f, 0, 18, POP);

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      {boven.map((r, i) => (
        <div key={`b${i}`} style={{ ...haakRegel, top: top + i * HAAK_REGEL }}>
          {r}
        </div>
      ))}
      <div
        style={{
          ...haakRegel,
          top: grootTop,
          fontSize: 340,
          color: C.RED,
          transform: `scale(${0.85 + 0.15 * pop})`,
        }}
      >
        {groot}
      </div>
      <Ruw vorm={ovaal} toon={voortgang(f, 22, 30)} />
      {onder.map((r, i) => (
        <div key={`o${i}`} style={{ ...haakRegel, top: onderTop + i * HAAK_REGEL }}>
          {r}
        </div>
      ))}
    </AbsoluteFill>
  );
};

const EIND_ONDERLIJN = lijn(372, 1004, 708, 999, { stroke: C.RED, strokeWidth: 4, roughness: 1.3, seed: 700 });

const gecentreerd = (
  top: number,
  grootte: number,
  kleur: string,
  familie = HAND,
  gewicht = 700,
): React.CSSProperties => ({
  position: "absolute",
  left: 0,
  right: 0,
  top,
  textAlign: "center",
  fontFamily: familie,
  fontSize: grootte,
  fontWeight: gewicht,
  lineHeight: 1.15,
  color: kleur,
});

/** Eindkaart met de verteller, de naam van het boek, het hoofdstuk en de bron. */
export const EindKaart: React.FC<{ start: number; hoofdstuk: string; bron: string[] }> = ({
  start,
  hoofdstuk,
  bron,
}) => {
  const f = useCurrentFrame();
  const zicht = voortgang(f, start, 15);
  if (zicht <= 0) return null;
  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <div
        style={{
          position: "absolute",
          left: 419,
          top: 300,
          transform: `scale(${0.8 + 0.2 * voortgang(f, start, 20, POP)})`,
        }}
      >
        <Verteller x={0} y={0} hoogte={320} />
      </div>
      <div style={gecentreerd(680, 116, C.GRAY)}>Zie Scherp Scherper</div>
      <div style={gecentreerd(820, 64, C.RED_DARK)}>{hoofdstuk}</div>
      <div style={gecentreerd(925, 56, C.GRAY, MONO)}>ziescherp.be</div>
      <Ruw vorm={EIND_ONDERLIJN} toon={voortgang(f, start + 20, 20)} />
      <div style={{ ...gecentreerd(1250, 38, C.GRAY, HAND, 400), opacity: voortgang(f, start + 30, 15) }}>
        {bron.map((r, i) => (
          <div key={i}>{r}</div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
