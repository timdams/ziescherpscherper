import React from "react";
import { Img, staticFile } from "remotion";

/**
 * Het vertellermannetje uit het boek (content/assets/verteller.png, gekopieerd naar public/).
 * Het is pixelart, dus vergroten zonder vervaging.
 */
export const Verteller: React.FC<{ x: number; y: number; hoogte: number; opacity?: number }> = ({
  x,
  y,
  hoogte,
  opacity = 1,
}) => (
  <Img
    src={staticFile("verteller.png")}
    style={{
      position: "absolute",
      left: x,
      top: y,
      height: hoogte,
      width: "auto",
      imageRendering: "pixelated",
      opacity,
    }}
  />
);
