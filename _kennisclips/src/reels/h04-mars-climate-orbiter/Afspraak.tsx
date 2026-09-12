import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { bezig, getypt, venster, voortgang } from "../../stijl/anim";
import { Regels, type Raster, type Regel } from "../../stijl/code";
import { HAND } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";
import { Ruw, pijl, rechthoek } from "../../stijl/ruw";
import { FASE } from "./tijdlijn";

// "Een datatype zegt dus wel dat er een kommagetal in zit, maar niet waar dat getal voor staat."
// De code en de commentaarregel als afspraak zijn toegevoegd.

const PANEEL = rechthoek(80, 660, 920, 200, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.4, seed: 1000 });
const RASTER: Raster = { x: 124, y: 690, grootte: 40, hoogte: 70 };
const COMMENTAAR = "// stuwkracht in newton-seconden";
const CODE = "double stuwkracht = 1;";
const TEKEN = RASTER.grootte * 0.6;

const MARKERING = rechthoek(RASTER.x - 6, RASTER.y + 9, COMMENTAAR.length * TEKEN + 12, 52, {
  fill: C.RED_LIGHT,
  fillStyle: "solid",
  stroke: "none",
  roughness: 1.2,
  seed: 1003,
});
const PIJL_TYPE = pijl(196, 955, 196, 842, { stroke: C.RED_DARK, strokeWidth: 2.6, seed: 1001 }, 16);
const PIJL_WAARDE = pijl(700, 1085, RASTER.x + 20 * TEKEN + 8, 842, { stroke: C.RED_DARK, strokeWidth: 2.6, seed: 1002 }, 16);

const noot = (left: number, top: number): React.CSSProperties => ({
  position: "absolute",
  left,
  top,
  fontFamily: HAND,
  fontSize: 50,
  fontWeight: 700,
  lineHeight: 1.1,
  color: C.RED_DARK,
  whiteSpace: "nowrap",
});

export const Afspraak: React.FC = () => {
  const f = useCurrentFrame();
  const zicht = venster(f, FASE.les, FASE.einde, 15);
  if (zicht <= 0) return null;
  const s = FASE.les;
  const b = 1560;

  const regels: Regel[] = [
    { rij: 0, tekst: getypt(COMMENTAAR, f, b + 10, 1), cursor: bezig(f, b + 10, b + 46), kleur: C.RED_DARK },
    { rij: 1, tekst: getypt(CODE, f, s + 10, 1), cursor: bezig(f, s + 10, s + 36) },
  ];

  return (
    <AbsoluteFill style={{ opacity: zicht }}>
      <Ruw vorm={PANEEL} />
      <Ruw vorm={MARKERING} toon={voortgang(f, b + 46, 14)} />
      <Regels raster={RASTER} regels={regels} kleur={C.GRAY} keywords />
      <Ruw vorm={PIJL_TYPE} toon={voortgang(f, s + 50, 14)} richting="vanOnder" />
      <div style={{ ...noot(90, 965), opacity: voortgang(f, s + 58, 12) }}>wel: een kommagetal</div>
      <Ruw vorm={PIJL_WAARDE} toon={voortgang(f, s + 75, 14)} richting="vanOnder" />
      <div style={{ ...noot(330, 1095), opacity: voortgang(f, s + 83, 12) }}>niet: waar het getal voor staat</div>
    </AbsoluteFill>
  );
};
