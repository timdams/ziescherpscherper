import React from "react";
import { VertellerBallon, type ReelTekst } from "../../stijl/reel";
import { FASE } from "./tijdlijn";

// De zinnen komen uit het verteller-kader in content/1_csharpbasics/1_datatypes.md.
// Enkel de twee laatste (C#) zijn toegevoegd.
const TEKSTEN: ReelTekst[] = [
  { van: FASE.reglement, tot: FASE.teller, regels: ["Dat staat zo in het", "spoorwegreglement."] },
  { van: FASE.teller, tot: 400, regels: ["De tellers langs het spoor", "houden bij hoeveel assen", "er passeren."] },
  { van: 400, tot: FASE.bits, regels: ["Zo weet het systeem of een", "stuk spoor nog *bezet* is."] },
  { van: FASE.bits, tot: 690, regels: ["Dat aantal wordt in", "*8 bits* bewaard."] },
  { van: 690, tot: FASE.overloop, regels: ["En 8 bits geraken", "tot *255*."] },
  { van: FASE.overloop, tot: 1010, regels: ["As nummer 256 zet de", "teller terug op *0*."] },
  { van: 1010, tot: FASE.oplossing, regels: ["Het systeem besluit dan dat", "het spoor *vrij* is, terwijl", "er een trein op staat."] },
  {
    van: FASE.oplossing,
    tot: FASE.csharp,
    regels: ["De Zwitsers losten dat op", "met een regel in het", "reglement, niet met een", "groter datatype."],
  },
  { van: FASE.csharp, tot: 1410, regels: ["In C# is dat een `byte`:", "van 0 tot 255."] },
  { van: 1410, tot: FASE.einde, regels: ["Tel je bij 255 nog 1 op,", "dan krijg je *0*."] },
];

export const VertellerBalk: React.FC = () => (
  <VertellerBallon teksten={TEKSTEN} van={FASE.reglement} tot={FASE.einde} />
);
