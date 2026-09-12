import type { ReelTekst } from "../../stijl/reel";

// Het verhaal staat in content/3_data/random.md: het verteller-kader over seeds in games,
// plus de uitleg over de seed en new Random(666) net daarvoor.
export const FASE = {
  games: 120,
  pseudo: 330,
  zelfde: 600,
  wereld: 810,
  delen: 1110,
  forums: 1410,
  csharp: 1560,
  einde: 1770,
  eind: 1890,
};
export const DUUR = FASE.eind;

export const TEKSTEN: ReelTekst[] = [
  { van: FASE.games, tot: 225, regels: ["Balatro-spelers", "in the house?", "Minecrafters misschien?"] },
  { van: 225, tot: FASE.pseudo, regels: ["Die term *seed* kom je in", "games voortdurend tegen, en", "dat is letterlijk deze seed."] },
  { van: FASE.pseudo, tot: 465, regels: ["Een `Random` rekent een", "reeks getallen uit die", "willekeurig lijkt,"] },
  { van: 465, tot: FASE.zelfde, regels: ["vertrekkend van een", "startwaarde: de *seed*."] },
  { van: FASE.zelfde, tot: 720, regels: ["Vanaf dezelfde startwaarde", "spuwt de generator *altijd*", "*exact dezelfde reeks*", "getallen uit."] },
  { van: 720, tot: FASE.wereld, regels: ["Ieder getal dat je meegeeft", "is een *andere seed*."] },
  { van: FASE.wereld, tot: 960, regels: ["Daardoor ligt met die ene", "waarde je *hele wereld* vast:"] },
  { van: 960, tot: FASE.delen, regels: ["elk *dorp*, elke *grot*,", "elke *erts-ader*."] },
  { van: FASE.delen, tot: 1260, regels: ["Vandaar dat je in Minecraft", "je seed aan iemand anders", "kan doorgeven,"] },
  { van: 1260, tot: FASE.forums, regels: ["en die op zijn eigen pc", "precies *jouw wereld*", "terugkrijgt."] },
  { van: FASE.forums, tot: FASE.csharp, regels: ["Er zijn hele forums waar", "mensen niets anders doen", "dan goeie seeds uitwisselen."] },
  { van: FASE.csharp, tot: 1665, regels: ["Ook in C# kan je bij het", "aanmaken van je generator", "een *seed* meegeven."] },
  { van: 1665, tot: FASE.einde, regels: ["Telkens je je programma", "uitvoert, krijg je steeds", "*dezelfde reeks*."] },
];
