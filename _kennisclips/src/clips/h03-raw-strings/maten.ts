import type { Raster } from "../../stijl/code";
import { CONSOLE_BALK } from "../../stijl/panelen";
import type { Vak } from "../../stijl/ruw";

// Canvas 1920x1080. Links de code, rechts de console, onderaan plaats voor het onderschrift.
export const CODE_VAK: Vak = { x: 70, y: 150, w: 960, h: 720 };
export const CONSOLE_VAK: Vak = { x: 1090, y: 150, w: 760, h: 720 };

export const CODE: Raster = { x: 130, y: 210, grootte: 40, hoogte: 62 };
export const UIT: Raster = {
  x: CONSOLE_VAK.x + 44,
  y: CONSOLE_VAK.y + CONSOLE_BALK + 40,
  grootte: 36,
  hoogte: 56,
};
