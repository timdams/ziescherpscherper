import { interpolate } from "remotion";
import { BEWEEG } from "../../stijl/anim";
import { SENSOR_X } from "./maten";

// Het verhaal staat in content/1_csharpbasics/1_datatypes.md, in het eerste verteller-kader.
export const FASE = {
  reglement: 120,
  teller: 255,
  bits: 555,
  overloop: 825,
  oplossing: 1125,
  csharp: 1305,
  einde: 1515,
  eind: 1635,
};
export const DUUR = FASE.eind;

// De trein: 64 voertuigen met elk 4 assen, dus exact 256 assen.
export const VOERTUIGEN = 64;
export const VOERTUIG_L = 300;
export const BAK_L = 280;
const AS_IN_VOERTUIG = [35, 85, 195, 245]; // afstand tot de voorkant van het voertuig
export const ASSEN = VOERTUIGEN * AS_IN_VOERTUIG.length;

/** Afstand van as `k` (1 tot 256) tot de voorkant van de trein. */
export const asAfstand = (k: number) =>
  Math.floor((k - 1) / 4) * VOERTUIG_L + AS_IN_VOERTUIG[(k - 1) % 4];

/** Plaats van as `j` (0 tot 3) binnen de bak van een voertuig, gemeten van links. */
export const asLokaalX = (j: number) => BAK_L - AS_IN_VOERTUIG[j];

/** De voorkant van de trein staat op deze x wanneer as `k` precies op de sensor staat. */
const opSensor = (k: number) => SENSOR_X + asAfstand(k);

const klem = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

/**
 * Waar de voorkant van de trein staat. De beweging volgt de afstand, niet het aantal assen,
 * zodat de trein gelijkmatig rijdt.
 */
export const voorkantX = (f: number) => {
  if (f < 300) return interpolate(f, [0, 300], [200, opSensor(1) - 5], klem);
  if (f < 420) return interpolate(f, [300, 420], [opSensor(1) - 5, opSensor(12) + 20], klem);
  if (f < FASE.bits)
    return interpolate(f, [420, FASE.bits], [opSensor(12) + 20, opSensor(255) + 25], {
      ...klem,
      easing: BEWEEG,
    });
  if (f < FASE.overloop)
    return interpolate(f, [FASE.bits, FASE.overloop], [opSensor(255) + 25, opSensor(255) + 30], klem);
  if (f < 1000)
    return interpolate(f, [FASE.overloop, 1000], [opSensor(255) + 30, opSensor(256) + 80], klem);
  return interpolate(f, [1000, FASE.oplossing], [opSensor(256) + 80, opSensor(256) + 200], klem);
};

/** Hoeveel assen de sensor al gepasseerd zijn (zonder overloop). */
export const gepasseerd = (f: number) => {
  const x = voorkantX(f) - SENSOR_X;
  let aantal = 0;
  for (let k = 1; k <= ASSEN; k++) {
    if (asAfstand(k) > x) break;
    aantal++;
  }
  return aantal;
};

/** Het eerste frame waarop as 256 de sensor passeert. */
export const OVERLOOP = (() => {
  for (let f = FASE.overloop; f < FASE.oplossing; f++) {
    if (gepasseerd(f) >= ASSEN) return f;
  }
  return FASE.overloop;
})();
export const RIMPEL = 4; // frames per bit dat omklapt
export const OVERLOOP_KLAAR = OVERLOOP + 8 * RIMPEL;

/** Wat de teller toont. Tijdens de rimpel blijft het getal nog even 255 staan. */
export const getoond = (f: number) => {
  if (f >= OVERLOOP && f < OVERLOOP_KLAAR) return 255;
  return gepasseerd(f) % 256;
};

/** De 8 bits van de teller, links de hoogste. Tijdens de overloop klappen ze van rechts naar links om. */
export const bitsOp = (f: number): number[] => {
  const posities = [0, 1, 2, 3, 4, 5, 6, 7];
  if (f >= OVERLOOP && f < OVERLOOP_KLAAR) {
    const omgeklapt = Math.floor((f - OVERLOOP) / RIMPEL) + 1;
    return posities.map((i) => (7 - i < omgeklapt ? 0 : 1));
  }
  const waarde = getoond(f);
  return posities.map((i) => (waarde >> (7 - i)) & 1);
};
