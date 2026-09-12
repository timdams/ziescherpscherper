import React from "react";
import { HAND, MONO } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";

/** Zet inhoud met lokale coördinaten rond (0, 0) op een plek op het canvas. */
export const Op: React.FC<{
  x: number;
  y: number;
  schaal?: number;
  opacity?: number;
  children: React.ReactNode;
}> = ({ x, y, schaal = 1, opacity = 1, children }) =>
  opacity <= 0 ? null : (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: `scale(${schaal})`,
        transformOrigin: "0 0",
        opacity: Math.min(1, opacity),
      }}
    >
      {children}
    </div>
  );

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
