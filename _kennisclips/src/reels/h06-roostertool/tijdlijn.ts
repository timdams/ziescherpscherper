import type { ReelTekst } from "../../stijl/reel";

// Het verhaal staat in content/5_herhalingen/0_loops_intro.md, in het verteller-kader bovenaan.
// De C#-scène komt uit "Oneindige loops" in 1_while_dowhile.md, de drie zaken in elke loop uit
// 0_loops_intro.md.
export const FASE = {
  verhaal: 120,
  crash: 255,
  zoeken: 480,
  tijdlijn: 630,
  lus: 765,
  stop: 1050,
  code: 1170,
  eindeloos: 1320,
  juist: 1470,
  einde: 1620,
  eind: 1740,
};
export const DUUR = FASE.eind;

export const TEKSTEN: ReelTekst[] = [
  { van: FASE.verhaal, tot: FASE.crash, regels: ["Ik heb ooit *twee uur* zitten", "wachten op een tool die een", "lessenrooster voor me", "moest leggen."] },
  { van: FASE.crash, tot: 375, regels: ["Na die twee uur", "*crashte* het ding,"] },
  { van: 375, tot: FASE.zoeken, regels: ["maar het rooster", "lag er wel."] },
  { van: FASE.zoeken, tot: FASE.tijdlijn, regels: ["Ik ben er dan nog eens", "*twee uur* op gaan zoeken,"] },
  { van: FASE.tijdlijn, tot: FASE.lus, regels: ["en toen bleek dat rooster", "al na *vier minuten* klaar", "te zijn geweest."] },
  { van: FASE.lus, tot: 915, regels: ["Het programma was gewoon", "nooit gestopt met *zoeken*,"] },
  { van: 915, tot: FASE.stop, regels: ["en bleef *geheugen* opvragen", "tot er niets meer vrij was."] },
  { van: FASE.stop, tot: FASE.code, regels: ["Dat was een loop die zijn", "*stopconditie* nooit haalde."] },
  {
    van: FASE.code,
    tot: FASE.eindeloos,
    regels: ["Elke loop heeft een", "*startsituatie*, een *conditie*", "en iets dat die conditie", "kan doen veranderen."],
  },
  { van: FASE.eindeloos, tot: FASE.juist, regels: ["Vergeet je dat derde punt,", "dan blijft de conditie", "*eeuwig waar*."] },
  { van: FASE.juist, tot: FASE.einde, regels: ["Pas die variabele dus aan,", "en in de *juiste richting*."] },
];
