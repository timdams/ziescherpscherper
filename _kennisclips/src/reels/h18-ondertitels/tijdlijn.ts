import type { ReelTekst } from "../../stijl/reel";

// Het verhaal staat in content/21_bestanden/bestandenintro.md, in het verteller-kader bij de start.
// De C#-scène haalt File.Exists en Path.ChangeExtension uit dezelfde pagina, GetFiles met een
// searchPattern uit fileinfo.md.
export const FASE = {
  verhaal: 120,
  missend: 265,
  lijst: 400,
  online: 530,
  mp3: 640,
  strip: 790,
  djams: 930,
  napster: 1070,
  sandstorm: 1190,
  code: 1270,
  exists: 1380,
  extensie: 1485,
  einde: 1590,
  eind: 1740,
};
export const DUUR = FASE.eind;

export const TEKSTEN: ReelTekst[] = [
  { van: FASE.verhaal, tot: FASE.missend, regels: ["Mijn eerste echte programma", "met bestanden scande mijn", "*filmbibliotheek* af"] },
  { van: FASE.missend, tot: FASE.lijst, regels: ["op zoek naar films die nog", "geen *ondertitels* hadden."] },
  { van: FASE.lijst, tot: FASE.online, regels: ["Het spuwde een *lijst* uit", "van alle ontbrekende", "srt-bestanden,"] },
  { van: FASE.online, tot: FASE.mp3, regels: ["en met dat lijstje ging ik", "ze *online* zoeken."] },
  { van: FASE.mp3, tot: FASE.strip, regels: ["Kort daarna iets", "gelijkaardigs voor mijn", "*mp3-collectie*, van voor", "Spotify bestond:"] },
  { van: FASE.strip, tot: FASE.djams, regels: ["alle rare tekens en alle", "*reclame* die in de", "bestandsnamen was blijven", "plakken, *eruit gestript*."] },
  { van: FASE.djams, tot: FASE.napster, regels: ["*Djams*, mijn alter ego dat", "af en toe nog op een fuif", "draait, heeft daar nog", "altijd plezier van."] },
  { van: FASE.napster, tot: FASE.sandstorm, regels: ["Er zitten nog *pareltjes* in", "uit de hoogdagen van", "*Napster* en *LimeWire*."] },
  { van: FASE.sandstorm, tot: FASE.code, regels: ["*Darude Sandstorm*", "for life."] },
  // Toegevoegd, niet uit het kader: de uitleg bij de code, in de woorden van bestandenintro.md en fileinfo.md.
  { van: FASE.code, tot: FASE.exists, regels: ["`GetFiles` met het", "*searchPattern* `\"*.avi\"`", "geeft je alle films."] },
  { van: FASE.exists, tot: FASE.extensie, regels: ["Of een bestand *bestaat*,", "controleer je met", "`File.Exists`."] },
  { van: FASE.extensie, tot: FASE.einde, regels: ["`ChangeExtension` maakt", "van `film.avi` een", "`film.srt`."] },
];
