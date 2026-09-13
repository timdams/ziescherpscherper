import type { ReelTekst } from "../../stijl/reel";

// Het verhaal staat in content/6_methoden/1_bibliotheken.md, in het verteller-kader bovenaan. De twee
// ballonnen bij de C#-scène komen uit dezelfde pagina: de inleiding en "IntelliSense".
export const FASE = {
  afhankelijk: 120,
  lek: 270,
  servers: 420,
  tekst: 570,
  code: 720,
  naam: 870,
  slapen: 1020,
  csharp: 1170,
  intellisense: 1320,
  einde: 1470,
  eind: 1590,
};
export const DUUR = FASE.eind;

export const TEKSTEN: ReelTekst[] = [
  {
    van: FASE.afhankelijk,
    tot: FASE.lek,
    regels: ["Bestaande bibliotheken gebruiken", "is bijna altijd de juiste keuze,", "maar je maakt je er wel", "*afhankelijk* van."],
  },
  {
    van: FASE.lek,
    tot: FASE.servers,
    regels: ["In *december 2021* dook er", "een lek op in *Log4j*, een", "Java-bibliotheek die zowat", "niemand bij naam kende"],
  },
  {
    van: FASE.servers,
    tot: FASE.tekst,
    regels: ["en die op een *gigantisch deel*", "van de servers op het internet", "meedraaide om *logberichten*", "weg te schrijven."],
  },
  { van: FASE.tekst, tot: FASE.code, regels: ["Wie de *juiste tekst* in zo'n", "logberichtje geraakte,"] },
  { van: FASE.code, tot: FASE.naam, regels: ["kon daarmee zijn *eigen code*", "laten uitvoeren op die server."] },
  { van: FASE.naam, tot: FASE.slapen, regels: ["Het lek kreeg de naam", "*Log4Shell*,"] },
  { van: FASE.slapen, tot: FASE.csharp, regels: ["en er is toen wereldwijd een", "paar weken *bijzonder slecht*", "geslapen."] },
  { van: FASE.csharp, tot: FASE.intellisense, regels: ["In .NET zitten al vele", "*methoden ingebouwd*, zoals", "in `Console` en `Math`."] },
  { van: FASE.intellisense, tot: FASE.einde, regels: ["Typ `Console.` en *IntelliSense*", "toont welke methoden en", "eigenschappen erbij horen."] },
];
