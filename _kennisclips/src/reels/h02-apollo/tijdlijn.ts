import type { ReelTekst } from "../../stijl/reel";

// Het verhaal staat in content/1_csharpbasics/1_datatypes.md, in het verteller-kader over de
// Apollo Guidance Computer. De zinnen komen daaruit, ingekort en over ballonnen verdeeld.
export const FASE = {
  verhaal: 120,
  geheugen: 240,
  gsm: 390,
  toestellen: 630,
  csharp: 900,
  weven: 1050,
  einde: 1650,
  eind: 1770,
};
export const DUUR = FASE.eind;

export const TEKSTEN: ReelTekst[] = [
  { van: FASE.verhaal, tot: FASE.geheugen, regels: ["De *Apollo Guidance Computer*", "zette Armstrong en Aldrin", "op de maan."] },
  { van: FASE.geheugen, tot: FASE.gsm, regels: ["Hij had *4 kilobyte*", "werkgeheugen en", "*72 kilobyte* programma."] },
  { van: FASE.gsm, tot: 510, regels: ["De smartphone in je", "broekzak heeft daar", "*miljoenen keren* meer van,"] },
  { van: 510, tot: FASE.toestellen, regels: ["en een flink deel daarvan", "gaat op aan het openhouden", "van je snapchat en TikTok."] },
  {
    van: FASE.toestellen,
    tot: 765,
    regels: ["Maar de sensor in een serre,", "de chip in je bankkaart en", "de slimme deurbel aan", "je voordeur"],
  },
  { van: 765, tot: FASE.csharp, regels: ["zitten qua rekenkracht", "dichter bij de *Apollo*", "dan bij je laptop."] },
  { van: FASE.csharp, tot: FASE.weven, regels: ["Daar kies je dus best je", "*datatypes* nog wel", "met de hand."] },
  { van: FASE.weven, tot: 1170, regels: ["En bugs kon je er", "niet meer uit halen."] },
  {
    van: 1170,
    tot: 1360,
    regels: ["Het programma was met de hand", "*geweven*: koperdraad door een", "magnetisch ringetje is een *1*,", "er rond een *0*."],
  },
  { van: 1360, tot: 1500, regels: ["Dat weefwerk gebeurde", "maanden voor de lancering."] },
  { van: 1500, tot: FASE.einde, regels: ["Ja, zij hebben hun code", "*veeeeeelvuldig* getest voor", "ze het in productie namen."] },
];
