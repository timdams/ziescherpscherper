import type { ReelTekst } from "../../stijl/reel";

// Het verhaal staat in content/3_data/random.md, in het verteller-kader over twee generators vlak na
// elkaar. De laatste ballon komt uit de zin net boven het kader.
export const FASE = {
  waarschuwing: 120,
  generators: 255,
  framework: 390,
  klok: 510,
  tikken: 660,
  tikje: 810,
  lus: 960,
  huidig: 1110,
  fora: 1260,
  een: 1410,
  einde: 1590,
  eind: 1710,
};
export const DUUR = FASE.eind;

// Echte uitvoer van dezelfde C#-code (13 september 2026):
// .NET Framework 4 (csc, runtime 4.0.30319.42000): a en b gaven 3 2 4, de lus tien keer 3.
// .NET 10 (dotnet run, runtime 10.0.3): de lus gaf 1 2 1 4 2 3 2 3 5 2.
export const WORPEN_AB = [3, 2, 4];
export const LUS_FRAMEWORK = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
export const LUS_NU = [1, 2, 1, 4, 2, 3, 2, 3, 5, 2];
// De verbeterde code (één generator voor de lus), op dezelfde dag op beide runtimes gedraaid.
export const EEN_FRAMEWORK = [3, 2, 6, 3, 3, 3, 5, 2, 4, 5];
export const EEN_NU = [3, 4, 1, 3, 2, 4, 4, 5, 5, 5];

export const TEKSTEN: ReelTekst[] = [
  { van: FASE.waarschuwing, tot: FASE.generators, regels: ["In vorige edities van dit", "boek stond hier een grote", "*waarschuwing*:"] },
  {
    van: FASE.generators,
    tot: FASE.framework,
    regels: ["maak nooit twee generators", "vlak na elkaar aan, want dan", "krijg je twee keer *dezelfde*", "*getallen*."],
  },
  { van: FASE.framework, tot: FASE.klok, regels: ["In het oude *.NET Framework*", "was dat ook echt zo."] },
  { van: FASE.klok, tot: FASE.tikken, regels: ["Een nieuwe `Random` nam de", "*klok* van de computer", "als seed,"] },
  { van: FASE.tikken, tot: FASE.tikje, regels: ["en die klok verspringt maar", "om de *zoveel milliseconden*."] },
  {
    van: FASE.tikje,
    tot: FASE.lus,
    regels: ["Twee generators in hetzelfde", "*tikje* kregen dezelfde seed", "en spuwden exact dezelfde", "reeks uit."],
  },
  {
    van: FASE.lus,
    tot: FASE.huidig,
    regels: ["Een dobbelsteen die telkens", "een nieuwe `Random` maakte,", "gooide zo *tien keer* na", "elkaar hetzelfde getal."],
  },
  { van: FASE.huidig, tot: FASE.fora, regels: ["In het huidige .NET krijgt", "elke nieuwe `Random` een", "eigen, *willekeurige* seed."] },
  { van: FASE.fora, tot: FASE.een, regels: ["Die bug bestaat niet meer,", "maar op fora kom je de", "waarschuwing nog tegen."] },
  { van: FASE.een, tot: FASE.einde, regels: ["Je hebt maar *één* generator", "nodig. Maak die *één keer* aan."] },
];
