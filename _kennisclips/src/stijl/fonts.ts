import { loadFont as laadCaveat } from "@remotion/google-fonts/Caveat";
import { loadFont as laadInter } from "@remotion/google-fonts/Inter";
import { loadFont as laadMono } from "@remotion/google-fonts/JetBrainsMono";

// Caveat voor alles wat handgeschreven is (zoals in de Excalidraw-figuren),
// JetBrains Mono voor code en Inter voor het labeltje van de console (zoals in het boek).
export const HAND = laadCaveat("normal", {
  weights: ["400", "700"],
  subsets: ["latin"],
}).fontFamily;

export const MONO = laadMono("normal", {
  weights: ["400", "500", "700"],
  subsets: ["latin"],
}).fontFamily;

export const SANS = laadInter("normal", {
  weights: ["700"],
  subsets: ["latin"],
}).fontFamily;

// JetBrains Mono heeft een vaste tekenbreedte van 600/1000 em, in elk gewicht.
export const MONO_BREEDTE = 0.6;

/**
 * Geschatte breedte van een tekst in Caveat (vet), in pixels. Aan de ruime kant: hoofdletters zijn
 * breder dan kleine letters, spaties smaller. Genoeg om een onderlijn of een lettergrootte te kiezen.
 */
export const handBreedte = (tekst: string, grootte: number) => {
  let em = 0;
  for (const teken of tekst) {
    em += teken === " " ? 0.25 : teken !== teken.toLowerCase() ? 0.6 : 0.38;
  }
  return em * grootte;
};
