import React from "react";
import { C } from "./kleuren";
import { Ruw, lijn, rechthoek, samen, veelhoek, type Vorm } from "./ruw";

// Een weegschaal: een driehoekige voet met een plank die kantelt. Eerst gemaakt voor de Mars-reel.
// De vormen worden één keer gemaakt per plaats, breedte en seed, niet elk frame opnieuw.

type Delen = { voet: Vorm; plank: Vorm };
const vormen: { [sleutel: string]: Delen } = {};
const delen = (x: number, y: number, breedte: number, seed: number): Delen => {
  const sleutel = `${x}-${y}-${breedte}-${seed}`;
  if (!vormen[sleutel]) {
    vormen[sleutel] = {
      voet: samen(
        veelhoek(
          [
            [x, y],
            [x - 50, y + 100],
            [x + 50, y + 100],
          ],
          { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.6, seed },
        ),
        lijn(x - 80, y + 102, x + 80, y + 100, { strokeWidth: 3, seed: seed + 1 }),
      ),
      plank: rechthoek(-breedte / 2, -14, breedte, 14, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.6, seed: seed + 2 }),
    };
  }
  return vormen[sleutel];
};

/** Waar een punt van de plank, op afstand `lx` van het draaipunt, na het kantelen terechtkomt. */
export const opPlank = (x: number, y: number, hoek: number, lx: number) => ({
  x: x + lx * Math.cos(hoek),
  y: y + lx * Math.sin(hoek),
});

/**
 * Weegschaal met het draaipunt op (x, y). `hoek` in radialen: negatief laat de linkerkant zakken.
 * De kinderen staan in het assenstelsel van de plank: (0, 0) is het draaipunt, de plank ligt tussen y -14 en 0.
 * `seed`, `seed + 1` en `seed + 2` worden gebruikt.
 */
export const Weegschaal: React.FC<{
  x: number;
  y: number;
  hoek: number;
  seed: number;
  breedte?: number;
  children?: React.ReactNode;
}> = ({ x, y, hoek, seed, breedte = 680, children }) => {
  const { voet, plank } = delen(x, y, breedte, seed);
  return (
    <>
      <Ruw vorm={voet} />
      <div
        style={{
          position: "absolute",
          left: x,
          top: y,
          transform: `rotate(${(hoek * 180) / Math.PI}deg)`,
          transformOrigin: "0 0",
        }}
      >
        <Ruw vorm={plank} />
        {children}
      </div>
    </>
  );
};
