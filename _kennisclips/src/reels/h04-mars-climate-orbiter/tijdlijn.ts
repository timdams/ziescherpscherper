import type { ReelTekst } from "../../stijl/reel";

// Het verhaal staat in content/3_data/4_converteren_casting.md, in het verteller-kader bij casting.
export const FASE = {
  verlies: 120,
  teLaag: 240,
  oorzaak: 540,
  eenheden: 840,
  stil: 1110,
  betekenis: 1260,
  les: 1440,
  einde: 1680,
  eind: 1800,
};
export const DUUR = FASE.eind;

// Alle zinnen komen letterlijk uit het kader, enkel over ballonnen verdeeld.
export const TEKSTEN: ReelTekst[] = [
  { van: FASE.verlies, tot: FASE.teLaag, regels: ["In 1999 verloor NASA de", "*Mars Climate Orbiter*."] },
  { van: FASE.teLaag, tot: 420, regels: ["Het toestel kwam veel te", "*laag* de atmosfeer van", "Mars binnen"] },
  { van: 420, tot: FASE.oorzaak, regels: ["en is daar uit elkaar", "gevallen. Jaren werk en", "*125 miljoen dollar*,", "poef, weg."] },
  { van: FASE.oorzaak, tot: 660, regels: ["De oorzaak was geen", "kapotte motor of een", "stukke sensor,"] },
  {
    van: 660,
    tot: FASE.eenheden,
    regels: ["maar twee stukken software", "die het niet eens waren over", "wat er nu eigenlijk in een", "*variabele* stond."],
  },
  {
    van: FASE.eenheden,
    tot: 975,
    regels: ["De grondsoftware van", "Lockheed Martin gaf de", "stuwkracht door in", "*pound-force seconden*,"],
  },
  { van: 975, tot: FASE.stil, regels: ["de module van NASA zelf", "verwachtte *newton-seconden*."] },
  { van: FASE.stil, tot: FASE.betekenis, regels: ["Allebei gewoon een getal,", "allebei perfect gecompileerd,", "geen enkele foutmelding."] },
  { van: FASE.betekenis, tot: FASE.les, regels: ["Alleen betekende dat getal", "aan de ene kant iets anders", "dan aan de andere."] },
  {
    van: FASE.les,
    tot: 1560,
    regels: ["Een datatype zegt dus wel", "dat er een *kommagetal* in", "zit, maar niet waar dat", "getal voor staat."],
  },
  { van: 1560, tot: FASE.einde, regels: ["Dat moeten mensen onder", "elkaar *afspreken*."] },
];
