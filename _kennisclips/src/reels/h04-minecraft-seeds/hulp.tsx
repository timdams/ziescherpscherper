import React from "react";
import { HAND, MONO } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";

// Op staat intussen in stijl/op.tsx.
export { Op } from "../../stijl/op";

/** Tekst gecentreerd rond (0, 0), in JetBrains Mono. */
export const cijfer = (w: number, h: number, grootte: number, kleur: string): React.CSSProperties => ({
  position: "absolute",
  left: -w / 2,
  top: -h / 2,
  width: w,
  height: h,
  lineHeight: `${h}px`,
  textAlign: "center",
  fontFamily: MONO,
  fontSize: grootte,
  fontWeight: 700,
  color: kleur,
});

/** Handgeschreven tekst, gecentreerd rond x. */
export const handOp = (x: number, top: number, grootte: number, kleur: string = C.GRAY, breedte = 600): React.CSSProperties => ({
  position: "absolute",
  left: x - breedte / 2,
  width: breedte,
  top,
  textAlign: "center",
  fontFamily: HAND,
  fontSize: grootte,
  fontWeight: 700,
  lineHeight: 1.15,
  color: kleur,
  whiteSpace: "nowrap",
});
