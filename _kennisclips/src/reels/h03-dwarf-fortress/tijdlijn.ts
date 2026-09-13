import type { ReelTekst } from "../../stijl/reel";

// Het verhaal staat in content/2_tekst/7_unicode.md, in het verteller-kader onder "Raw string literals".
// De twee ballonnen bij de C#-scène komen uit dezelfde pagina: "Raw string literals" en stap 2 van
// "UNICODE karakters tonen", met de tip over het euroteken eronder.
export const FASE = {
  ultiem: 120,
  jaren: 240,
  publiek: 360,
  driedee: 450,
  diep: 600,
  dwerg: 690,
  lagen: 840,
  water: 960,
  brak: 1080,
  backend: 1200,
  csharp: 1320,
  utf8: 1470,
  einde: 1620,
  eind: 1740,
};
export const DUUR = FASE.eind;

export const TEKSTEN: ReelTekst[] = [
  { van: FASE.ultiem, tot: FASE.jaren, regels: ["Het ultieme spel gemaakt uit", "niets dan *tekens* is nog", "altijd Dwarf Fortress."] },
  { van: FASE.jaren, tot: FASE.publiek, regels: ["Tarn Adams begon eraan in", "*2002*, het jaar van GTA Vice", "City en Morrowind,"] },
  { van: FASE.publiek, tot: FASE.driedee, regels: ["en bracht de eerste publieke", "versie uit in *2006*."] },
  {
    van: FASE.driedee,
    tot: FASE.diep,
    regels: ["Terwijl de rest van de wereld", "in *3D* speelde, bouwde je daar", "een dwergenkolonie in een", "*raster van letters*."],
  },
  { van: FASE.diep, tot: FASE.dwerg, regels: ["En dat ding zat", "*fenomenaal diep*."] },
  { van: FASE.dwerg, tot: FASE.lagen, regels: ["Elke dwerg heeft een eigen", "*humeur*, een eigen *geschiedenis*", "en eigen *voorkeuren*,"] },
  { van: FASE.lagen, tot: FASE.water, regels: ["de wereld wordt *laag per laag*", "gesimuleerd"] },
  { van: FASE.water, tot: FASE.brak, regels: ["en zelfs het *water* zoekt", "zijn weg door je gangen."] },
  { van: FASE.brak, tot: FASE.backend, regels: ["*Brakke graphics*, en toch", "bleven mensen er *jaren* in", "hangen."] },
  { van: FASE.backend, tot: FASE.csharp, regels: ["Een sexy *frontend* is minder", "waard dan een *backend* die", "gewoon werkt."] },
  { van: FASE.csharp, tot: FASE.utf8, regels: ["*ASCII-art* zet je in C#", "tussen *drie aanhalingstekens*,", "elk op een eigen lijn."] },
  { van: FASE.utf8, tot: FASE.einde, regels: ["Zet als *allereerste lijn*", "de encoding op *UTF8*, dan", "kan de console elk teken aan."] },
];
