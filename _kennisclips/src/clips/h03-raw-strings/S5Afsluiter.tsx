import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { POP, voortgang } from "../../stijl/anim";
import { MONO } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";
import { Ruw, lijn, rechthoek, type Vorm } from "../../stijl/ruw";
import { Onderschrift } from "../../stijl/tekst";

// Scène 5: @"..." kom je nog tegen, beide manieren werken.
export const S5_DUUR = 300;

const KAART_AT = rechthoek(360, 250, 520, 200, {
  fill: C.WHITE,
  fillStyle: "solid",
  strokeWidth: 2.4,
  seed: 51,
});
const KAART_RAW = rechthoek(1040, 250, 520, 200, {
  fill: C.WHITE,
  fillStyle: "solid",
  strokeWidth: 2.4,
  seed: 52,
});
const ONDERLIJN = lijn(640, 858, 1280, 852, {
  stroke: C.RED,
  strokeWidth: 4,
  roughness: 1.3,
  seed: 53,
});

const Kaart: React.FC<{ vorm: Vorm; code: string; start: number }> = ({ vorm, code, start }) => {
  const f = useCurrentFrame();
  const { x, y, w, h } = vorm.vak;
  return (
    <AbsoluteFill
      style={{
        opacity: voortgang(f, start, 10),
        transform: `scale(${0.8 + 0.2 * voortgang(f, start, 22, POP)})`,
        transformOrigin: `${x + w / 2}px ${y + h / 2}px`,
      }}
    >
      <Ruw vorm={vorm} />
      <div
        style={{
          position: "absolute",
          left: x,
          top: y,
          width: w,
          height: h,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: MONO,
          fontSize: 72,
          fontWeight: 700,
          color: C.GRAY,
          whiteSpace: "pre",
        }}
      >
        {code}
      </div>
    </AbsoluteFill>
  );
};

export const S5Afsluiter: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill>
      <Kaart vorm={KAART_AT} code={'@"..."'} start={8} />
      <Kaart vorm={KAART_RAW} code={'"""..."""'} start={20} />
      <Onderschrift
        van={50}
        tot={S5_DUUR + 20}
        midden={590}
        grootte={64}
        regels={['Je zal `@"..."` nog vaak tegenkomen in bestaande code', "en in code die AI-tools genereren"]}
      />
      <Onderschrift
        van={135}
        tot={S5_DUUR + 20}
        midden={790}
        grootte={84}
        kleur={C.GRAY}
        regels={["Beide manieren werken."]}
      />
      <Ruw vorm={ONDERLIJN} toon={voortgang(f, 150, 25)} />
      <Onderschrift
        van={190}
        tot={S5_DUUR + 20}
        midden={975}
        grootte={44}
        kleur={C.GRAY}
        regels={["Zie Scherp Scherper, hoofdstuk 3"]}
      />
    </AbsoluteFill>
  );
};
