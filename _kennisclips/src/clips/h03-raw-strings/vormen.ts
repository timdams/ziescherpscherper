import { kolomX, rijY, tekenBreedte } from "../../stijl/code";
import { C } from "../../stijl/kleuren";
import { lijn, rechthoek } from "../../stijl/ruw";
import { CODE, UIT } from "./maten";

// Arcering zoals api.cell in excal.js.
const ARCERING = {
  fill: C.RED_LIGHT,
  fillStyle: "hachure",
  hachureGap: 9,
  fillWeight: 2.5,
  stroke: C.RED,
  strokeWidth: 2.4,
};

/** Gearceerde strook over de eerste `kolommen` kolommen van de uitvoer. */
export const uitvoerStrook = (vanRij: number, rijen: number, kolommen: number, seed: number) =>
  rechthoek(
    UIT.x - 8,
    rijY(UIT, vanRij) + 4,
    kolommen * tekenBreedte(UIT) - 10,
    rijen * UIT.hoogte - 8,
    { ...ARCERING, seed },
  );

/** Gearceerde strook over de eerste `kolommen` kolommen van de code, links van de knip-lijn. */
export const codeStrook = (vanRij: number, rijen: number, kolommen: number, seed: number) =>
  rechthoek(
    CODE.x - 10,
    rijY(CODE, vanRij) + 8,
    kolommen * tekenBreedte(CODE) - 16,
    rijen * CODE.hoogte - 16,
    { ...ARCERING, seed },
  );

/** Markeerstift achter `n` tekens code. Ligt onder de tekst, dus overlapt nooit. */
export const markeer = (rij: number, kol: number, n: number, seed: number) =>
  rechthoek(
    kolomX(CODE, kol) - 5,
    rijY(CODE, rij) + 9,
    n * tekenBreedte(CODE) + 10,
    CODE.hoogte - 18,
    { fill: C.RED_LIGHT, fillStyle: "solid", stroke: "none", roughness: 1.2, seed },
  );

/**
 * Verticale knip-lijn links van kolom `kol`, van onder rij `totRij` tot boven rij `vanRij`.
 * Ze staat 8 px voor de kolom, zodat ze ook met de ruwe uitwijking de tekens niet raakt.
 */
export const knip = (kol: number, vanRij: number, totRij: number, seed: number) =>
  lijn(
    kolomX(CODE, kol) - 8,
    rijY(CODE, totRij + 1) - 4,
    kolomX(CODE, kol) - 8,
    rijY(CODE, vanRij) + 2,
    { stroke: C.RED, strokeWidth: 3.5, roughness: 1.1, seed },
  );
