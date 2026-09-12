import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { BEWEEG, POP, venster, voortgang } from "../../stijl/anim";
import { HAND, MONO } from "../../stijl/fonts";
import { C } from "../../stijl/kleuren";
import { Ruw, pijl, rechthoek, veelhoek } from "../../stijl/ruw";
import { Op, cijfer, handOp } from "./hulp";
import { REEKS_42, REEKS_666 } from "./random";
import { FASE } from "./tijdlijn";

// De generator als machine: de seed gaat erin, een reeks die willekeurig lijkt komt eruit.

const MACHINE = rechthoek(290, 720, 500, 180, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 3, seed: 1200 });
const TRECHTER = veelhoek(
  [
    [430, 640],
    [650, 640],
    [580, 720],
    [500, 720],
  ],
  { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.6, seed: 1201 },
);
const SEEDKAART = rechthoek(-60, -40, 120, 80, { fill: C.WHITE, fillStyle: "solid", stroke: C.RED, strokeWidth: 2.6, seed: 1202 });
const GROTE_KAART = rechthoek(-38, -45, 76, 90, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.4, seed: 1203 });
const KLEINE_KAART = rechthoek(-32, -40, 64, 80, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.2, seed: 1204 });
const KLEINE_KAART_ROOD = rechthoek(-32, -40, 64, 80, { fill: C.WHITE, fillStyle: "solid", stroke: C.RED, strokeWidth: 2.6, seed: 1205 });
const PIJL_SEED = pijl(700, 668, 600, 670, { stroke: C.RED_DARK, strokeWidth: 2.4, seed: 1206 }, 14);

const RIJEN = [
  { y: 690, label: "Random(666)", reeks: REEKS_666, start: FASE.zelfde + 5 },
  { y: 850, label: "Random(666)", reeks: REEKS_666, start: FASE.zelfde + 45 },
  { y: 1010, label: "Random(42)", reeks: REEKS_42, start: FASE.zelfde + 125 },
];
const RIJ_MACHINES = RIJEN.map((r, i) =>
  rechthoek(70, r.y - 50, 310, 100, { fill: C.WHITE, fillStyle: "solid", strokeWidth: 2.6, seed: 1210 + i }),
);
const kaartX = (j: number) => 432 + j * 72;

const Pseudo: React.FC<{ f: number }> = ({ f }) => {
  const vlieg = voortgang(f, FASE.pseudo + 20, 35, BEWEEG);
  const seedX = 170 + (540 - 170) * vlieg;
  const seedY = 610 + (670 - 610) * vlieg - 60 * Math.sin(Math.PI * vlieg);

  return (
    <>
      <Ruw vorm={TRECHTER} />
      <Ruw vorm={MACHINE} />
      <div
        style={{
          position: "absolute",
          left: 290,
          top: 720,
          width: 500,
          height: 180,
          lineHeight: "180px",
          textAlign: "center",
          fontFamily: MONO,
          fontSize: 44,
          fontWeight: 700,
          color: C.GRAY,
        }}
      >
        new Random(666)
      </div>
      <Op x={seedX} y={seedY} schaal={1 - 0.2 * vlieg} opacity={voortgang(f, FASE.pseudo + 8, 10)}>
        <Ruw vorm={SEEDKAART} />
        <div style={cijfer(120, 80, 48, C.RED_DARK)}>666</div>
      </Op>
      {REEKS_666.slice(0, 8).map((n, i) => {
        const start = FASE.pseudo + 110 + i * 16;
        if (f < start) return null;
        const t = voortgang(f, start, 14, BEWEEG);
        return (
          <Op
            key={i}
            x={540 + (198 + i * 95 - 540) * t}
            y={900 + (1005 - 900) * t}
            schaal={0.5 + 0.5 * voortgang(f, start, 14, POP)}
          >
            <Ruw vorm={GROTE_KAART} />
            <div style={cijfer(76, 90, 56, C.GRAY)}>{n}</div>
          </Op>
        );
      })}
      <div style={{ ...handOp(540, 1080, 44), opacity: voortgang(f, FASE.pseudo + 190, 15) }}>
        een reeks die willekeurig lijkt
      </div>
      <AbsoluteFill style={{ opacity: venster(f, 470, FASE.zelfde, 12) }}>
        <Ruw vorm={PIJL_SEED} richting="vanRechts" toon={voortgang(f, 470, 12)} />
        <div
          style={{
            position: "absolute",
            left: 712,
            top: 638,
            fontFamily: HAND,
            fontSize: 52,
            fontWeight: 700,
            lineHeight: 1,
            color: C.RED_DARK,
          }}
        >
          seed
        </div>
      </AbsoluteFill>
    </>
  );
};

const Zelfde: React.FC<{ f: number }> = ({ f }) => (
  <>
    {RIJEN.map((rij, i) => {
      if (f < rij.start) return null;
      const pop = voortgang(f, rij.start, 16, POP);
      return (
        <React.Fragment key={i}>
          <AbsoluteFill
            style={{
              opacity: voortgang(f, rij.start, 8),
              transform: `scale(${0.8 + 0.2 * pop})`,
              transformOrigin: `225px ${rij.y}px`,
            }}
          >
            <Ruw vorm={RIJ_MACHINES[i]} />
            <div
              style={{
                position: "absolute",
                left: 70,
                top: rij.y - 50,
                width: 310,
                height: 100,
                lineHeight: "100px",
                textAlign: "center",
                fontFamily: MONO,
                fontSize: 36,
                fontWeight: 700,
                color: C.GRAY,
              }}
            >
              {rij.label}
            </div>
          </AbsoluteFill>
          {rij.reeks.slice(0, 8).map((n, j) => {
            const start = rij.start + 12 + j * 5;
            if (f < start) return null;
            const anders = n !== REEKS_666[j];
            return (
              <Op key={j} x={kaartX(j)} y={rij.y} schaal={0.5 + 0.5 * voortgang(f, start, 12, POP)} opacity={voortgang(f, start, 6)}>
                <Ruw vorm={anders ? KLEINE_KAART_ROOD : KLEINE_KAART} />
                <div style={cijfer(64, 80, 44, anders ? C.RED_DARK : C.GRAY)}>{n}</div>
              </Op>
            );
          })}
        </React.Fragment>
      );
    })}
    {REEKS_666.slice(0, 8).map((_, j) => (
      <div key={j} style={{ ...handOp(kaartX(j), 732, 72, C.GRAY, 60), opacity: voortgang(f, FASE.zelfde + 95, 12) }}>
        =
      </div>
    ))}
  </>
);

export const Machine: React.FC = () => {
  const f = useCurrentFrame();
  const pseudo = venster(f, FASE.pseudo, FASE.zelfde, 15);
  const zelfde = venster(f, FASE.zelfde, FASE.wereld, 15);
  if (pseudo <= 0 && zelfde <= 0) return null;
  return (
    <>
      {pseudo > 0 ? (
        <AbsoluteFill style={{ opacity: pseudo }}>
          <Pseudo f={f} />
        </AbsoluteFill>
      ) : null}
      {zelfde > 0 ? (
        <AbsoluteFill style={{ opacity: zelfde }}>
          <Zelfde f={f} />
        </AbsoluteFill>
      ) : null}
    </>
  );
};
