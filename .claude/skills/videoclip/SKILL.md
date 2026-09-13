---
name: videoclip
description: Maak een geanimeerd filmpje bij Zie Scherp Scherper met Remotion, in de huisstijl van het boek (rough.js, Caveat, AP-rood, de verteller): een liggende kennisclip die leerstof uitlegt, of een korte staande Instagram-reel die een verhaal uit het boek vertelt. Vraagt altijd eerst welk soort clip, en of er een stem, ondertitels en een bijschrift bij moeten. Gebruik dit bij elke vraag om een kennisclip, filmpje, video, animatie, reel of Instagram-story te maken of aan te passen, en bij elk werk in de map _kennisclips/.
---

# Videoclip (Remotion)

Alle filmpjes staan in één Remotion-project: `_kennisclips/` in de repo. Quarto negeert die map
(ze begint met een underscore), dus niets ervan komt op de site. De huisstijl zit gedeeld in
`_kennisclips/src/stijl/`, elk filmpje heeft een eigen map.

Voor de Remotion-API zelf (interpolate, Sequence, fonts, audio, captions): skill
`remotion-best-practices`. Deze skill gaat over hoe wij het doen.

## 1. Eerst vragen

Stel deze vragen samen in één AskUserQuestion, bij elk nieuw filmpje opnieuw:

1. **Soort clip**: kennisclip of reel. Laat die vraag enkel weg als Tim het soort letterlijk noemt
   ("maak een reel over ...").
2. **Stem**: geen stem (de uitleg staat als tekst in beeld), zelf ingesproken, of een AI-stem.
3. **Ondertitels**: geen, ingebrand in beeld, of een apart `.srt`-bestand.
4. **Bijschrift**: geen, een tekst voor de Instagram-post, of een titel en beschrijving voor Panopto.

Wat je met de antwoorden doet, staat in [Stem, ondertitels en bijschrift](#stem-ondertitels-en-bijschrift).

| | Kennisclip | Reel |
|---|---|---|
| Doel | leerstof uitleggen, komt in `kennisclips.md` van het hoofdstuk | een verhaal of weetje uit het boek vertellen, voor Instagram |
| Formaat | liggend 1920x1080, 30 fps | staand 1080x1920, 30 fps |
| Duur | 1 tot 3 minuten | 45 tot 60 seconden, **nooit boven 60 s** (een story knipt daar) |
| Opbouw | titelkaart, scènes, afsluiter | haak, verteller met ballon, tekeningen, C#-scène, eindkaart |
| Tijd in code | één bestand per scène, `TransitionSeries` met fade | één `tijdlijn.ts` voor het hele filmpje |
| Map | `src/clips/hNN-onderwerp/` | `src/reels/hNN-onderwerp/` |
| Voorbeeld | `src/clips/h03-raw-strings/` | `src/reels/h04-mars-climate-orbiter/` (eenvoudigst), `h02-256-assen/` (trein die doorrijdt), `h04-minecraft-seeds/` (echte getallen) |

`NN` is het hoofdstuknummer in het boek (H3), niet het nummer van de contentmap (`2_tekst`).

**Geen onderwerp opgegeven?** Stel er twee of drie voor met een aanrader, en laat Tim kiezen.

- Kennisclips: de ontbrekende clips in `future/kennisclips-rapport.md` (punt 1 is zeker nodig,
  punt 2 twijfel), en item 4 in `future/watnu.md`.
- Reels: de verteller-kaders in het boek, te vinden met `grep -rl "verteller.png)" content/`. Wat al
  gemaakt is, staat in `src/reels/`. Een goed verhaal heeft iets om te tekenen (een trein, een
  planeet), een getal voor de haak en een brug naar C#.

## 2. De bron lezen

- Lees de hele pagina, niet enkel het kader. De uitleg rond het kader levert meestal de C#-scène
  (bij de seeds: `new Random(666)` uit dezelfde pagina).
- **Niets verzinnen.** De tekst in ballonnen en onderschriften komt uit het boek, hoogstens ingekort
  of over ballonnen verdeeld. Wat je toevoegt (een factor, een vergelijking, extra code) krijgt een
  comment `// Toegevoegd, niet uit het kader: ...` en komt in je eindbericht.
- **Getallen en uitvoer zijn echt.** Toont het filmpje wat code doet, draai die code dan eerst: een
  `.fsx` in de scratchpad en `dotnet fsi pad.fsx`. Zo is nagekeken dat `new Random(666).Next(0, 10)`
  6, 2, 2, 7, ... geeft (`h04-minecraft-seeds/random.ts`).
- Vereenvoudig je iets (elk getal wordt een tegel), zet dan "(sterk vereenvoudigd)" in beeld.
- De schrijfregels uit CLAUDE.md gelden ook hier: Nederlands, geen em-dashes, "instantievariabelen",
  geen nullables, geen wijze slotzin.

## 3. Storyboard voorstellen

Kort in de chat: de scènes met hun duur, wat er te zien is, welke zin uit het boek erbij hoort, en wat
er toegevoegd is. Bouw pas na een ja, tenzij Tim al gezegd heeft dat je mag bouwen ("bouw maar",
"maak eens").

## 4. Bouwen

### Voor beide

- Kijk eerst wat er in `src/stijl/` staat: [references/stijl.md](references/stijl.md). Komt iets in een
  tweede filmpje terug, verhuis het dan naar `stijl/` in plaats van het te kopiëren. Zo zijn
  `VertellerBallon`, `Haak` en `EindKaart` ontstaan.
- Lees [references/valkuilen.md](references/valkuilen.md) voor je begint te tekenen.
- Registreer de compositie in `src/Root.tsx`: kennisclips in een `Folder` per hoofdstuk
  (`H03-tekst`), reels in `Reels` met `{...STAAND}`. Zet een `render:<naam>`-script in `package.json`.
- Beelden uit het boek (zoals de verteller) kopieer je naar `public/` en toon je met
  `<Img src={staticFile(...)}>`. Pixelart met `imageRendering: "pixelated"`.
- Geef elke rough.js-vorm een eigen seed, en neem per filmpje een eigen blok (bv. 2000 tot 2999).

### Kennisclip

- Hoofdbestand met `TransitionSeries` en `fade()` van 15 frames. De duur is de som van de scènes min
  15 frames per overgang.
- Eén bestand per scène, met `export const S1_DUUR = ...` bovenaan.
- Beeld: `Werkblad` uit `stijl/werkblad.tsx`, met een ruw wit codepaneel en een console, en een
  `Onderschrift` gecentreerd onderaan (y 972, hoogstens twee regels, 4 tot 6 seconden). Twee
  indelingen: `NAAST_ELKAAR` (code links, console rechts, zoals `h03-raw-strings`) en `BOVEN` (code en
  console bovenaan, eronder plaats voor een tekening, zoals `h12-queue-stack`).
- Wat beweegt (kaartjes die in een rij schuiven of van een stapel gaan) volgt een baan van
  sleutelpunten met `opBaan`; zie `KaartOpBaan` in `h12-queue-stack/hulp.tsx`.
- Titelkaart en afsluiter: `TitelKaart` (het onderwerp met één feit, bv. "FIFO en LIFO") en
  `AfsluitKaart` ("Zie Scherp Scherper, hoofdstuk N") uit `stijl/titelkaart.tsx`.

### Reel

- `tijdlijn.ts` met `FASE` (het startframe van elk deel, plus `eind`) en `TEKSTEN` (de ballonteksten,
  elk met `van` en `tot`). Elk onderdeel toont zich met `venster(f, FASE.a, FASE.b)`. Geen
  `TransitionSeries`: zo kan een trein of een sonde gewoon doorlopen van het ene deel naar het andere.
- Hoofdbestand:

  ```tsx
  export { DUUR } from "./tijdlijn";

  export const ReelOnderwerp: React.FC = () => (
    <AbsoluteFill style={{ backgroundColor: C.OFFWHITE }}>
      <Haak boven={["In Zwitserland mag", "een trein niet exact"]} groot="256" onder={["assen hebben."]} tot={FASE.verhaal} seed={2000} />
      <Tekening />   {/* eigen onderdelen, elk met venster(f, FASE.x, FASE.y) */}
      <CSharp />
      <VertellerBallon teksten={TEKSTEN} van={FASE.verhaal} tot={FASE.einde} />
      <EindKaart start={FASE.einde} hoofdstuk="hoofdstuk 2: datatypes" bron={["Bron: ..."]} />
    </AbsoluteFill>
  );
  ```

- **Veilige zones**: bovenaan 250 px en onderaan 420 px blijven leeg, net als de rechterrand onderaan.
  Daar zet Instagram de naam, het bijschrift en de knoppen. De ballon staat op y 270 tot 560, de
  tekening tussen y 600 en 1480.
- **Haak**: frame 0 zegt al alles. Een zin met één groot rood getal in een ovaal; de tekst staat er
  meteen, enkel de ovaal tekent zich. Daaronder mag de tekening al zichtbaar zijn.
- **Ballon**: hoogstens 4 regels van ongeveer 29 tekens, 3 tot 5 seconden per ballon (90 tot 150
  frames). `*nadruk*` wordt rood, `` `code` `` wordt mono.
- Na het verhaal een korte C#-scène die het aan de leerstof koppelt, dan de `EindKaart` met het
  hoofdstuk en de bron.
- **Groot tekenen.** Een gsm toont die 1080 px op een paar centimeter: een voorwerp van 50 px zie je
  niet, tekst gaat niet onder 34 px.
- Geen muziek in de render. Die zet Tim er in de Instagram-app onder.

## 5. Nakijken

rough.js en Remotion geven geen foutmelding bij een lelijk beeld. Kijken is de enige controle.

1. `npx tsc --noEmit` in `_kennisclips`. De tsconfig kent enkel es2015: geen `Array.includes`,
   `Object.values` of `padStart`.
2. Stills renderen, op schaal 0.6:

   ```powershell
   Push-Location _kennisclips
   foreach ($f in 0, 60, 330, 700, 875, 1600) { npx remotion still Reel-256-assen "out/reel-$f.png" --frame=$f --scale=0.6 --log=error }
   Pop-Location
   ```

   Kies frame 0 (en het frame waarop de ovaal af is), het midden van elke scène of fase, elk moment
   waarop iets verschijnt, botst of omslaat, een frame midden in elke overgang, en de eindkaart.
3. Bekijk elke png met de Read tool en loop [references/checklist.md](references/checklist.md) af.
   Verbeter en render die frames opnieuw.
4. Pas dan het hele filmpje, op de achtergrond (`run_in_background`):
   `npx remotion render <id> out/<naam>.mp4 --log=error`. Kijk de duur na met
   `npx remotion ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1 out/<naam>.mp4`.
   Een reel van meer dan 60 s kort je in.

## 6. Opleveren

- Render een coverbeeld: `npx remotion still <id> out/<naam>-cover.png --frame=<n>` (bij een reel de
  haak met de getekende ovaal, bij een kennisclip de titelkaart).
- Lever mee wat bij de start gevraagd is: de stem zit in de mp4, ondertitels zijn ingebrand of staan in
  `out/<naam>.srt`, het bijschrift staat in `bijschrift.md`.
- Stuur de mp4 en de cover met SendUserFile (`display: "render"`), een `.srt` met `display: "attach"`.
- In je eindbericht: het pad, het formaat en de duur, de opbouw als genummerde lijst, wat uit het boek
  komt en wat toegevoegd is, het render-script, en de tekst van het bijschrift zodat Tim hem meteen kan
  kopiëren.
- **Niets in het boek zetten.** Een kennisclip komt pas in `kennisclips.md` als Tim hem op Panopto
  gezet heeft; werk dan ook item 4 in `future/watnu.md` bij.
- `out/` en `node_modules/` zijn gitignored. Commit enkel als Tim erom vraagt.

## Stem, ondertitels en bijschrift

### Stem

- **Geen stem**: de ballonteksten en onderschriften dragen de hele uitleg. Zo zijn de eerste filmpjes
  gemaakt.
- **Zelf ingesproken**: schrijf na het goedgekeurde storyboard een `script.md` in de map van het
  filmpje, één blok per scène of ballon, in de volgorde van het filmpje. Tim spreekt het in; de
  opnames komen in `public/stem/<naam>/`, één bestand per blok. De definitieve timing bouw je pas
  als die opnames er zijn.
- **AI-stem**: lees `rules/voiceover.md` in `remotion-best-practices` (standaard ElevenLabs). Vraag
  Tim de API-sleutel en zet die enkel in de omgevingsvariabele `ELEVENLABS_API_KEY`, nooit in een
  bestand in de repo. De mp3's komen in `public/stem/<naam>/`.
- Met een stem bepaalt de audio de timing: laat `calculateMetadata` de duur van elke scène uit de
  audio halen (`rules/calculate-metadata.md`, `rules/get-audio-duration.md`) in plaats van vaste
  `S1_DUUR`- of `FASE`-getallen. Wordt een reel zo langer dan 60 s, kort dan de tekst in.
- In een reel blijft de tekst in beeld, ook met een stem: de meeste mensen kijken zonder geluid.

### Ondertitels

- De ondertitels volgen letterlijk wat er gezegd wordt. Zonder stem zijn het de teksten die al in
  beeld staan.
- Werk met captions als JSON van het type `Caption` (`rules/subtitles.md`). Met een stem haal je ze
  uit de audio (`rules/transcribe-captions.md`); zonder stem maak je ze uit de `van` en `tot` van de
  ballonteksten of onderschriften (frames gedeeld door 30, maal 1000 voor milliseconden).
- **Ingebrand**: tonen volgens `rules/display-captions.md`, in Inter (`SANS`). Ze bedekken niets van
  de tekening: in een reel boven de onderste 420 px, in een kennisclip op de plaats van het
  onderschrift, dat dan wegvalt.
- **Apart bestand**: schrijf dezelfde captions weg als `out/<naam>.srt`, voor Panopto of Instagram.

### Bijschrift

- Schrijf het in `bijschrift.md` in de map van het filmpje. Die map zit in git, `out/` niet.
- **Instagram**: twee of drie zinnen in de toon van het boek (je-vorm, geen em-dashes, geen wijze
  slotzin), met het hoofdstuk en ziescherp.be, en een handvol hashtags. Vraag Tim welke hashtags vast
  mee moeten.
- **Panopto**: een titel en een beschrijving van één of twee zinnen: wat de clip uitlegt en bij welk
  hoofdstuk hij hoort.

## Huisstijl (niet wijzigen zonder Tim)

- **Kleuren** uit `_brand.yml`, in `src/stijl/kleuren.ts`: offwhite achtergrond, grijs `#4D4D4D` voor
  tekst en lijnen, AP-rood `#FF0000` enkel waar het oog heen moet, donkerrood `#B30000` voor
  handgeschreven notities, lichtroze `#FFE5E5` voor markeerstift en arcering. De console zoals in het
  boek (`custom.scss`): zwart venster, groene tekst, donker labelbalkje.
- **Fonts**: Caveat voor alles wat handgeschreven is, JetBrains Mono voor code, Inter voor het
  consolelabel en de ondertitels.
- **Tekeningen** met rough.js, zoals de Excalidraw-figuren van de skill `afbeelding`: roughness 1.1 tot
  1.6, arcering voor accenten, wit gevuld voor vlakken, geen titels in beeld.
- **De verteller** (`public/verteller.png`) vertelt de reels, met zijn ballon linksboven.
- **Beweging**: binnenkomen met `IN`, verplaatsen met `BEWEEG`, een pop met `POP`, weggaan met `WEG`.
  Code verschijnt als typemachine. Nooit CSS-animaties of `Math.random()`.

## Verder

- [references/stijl.md](references/stijl.md): alles wat in `src/stijl/` staat, en de handige helpers
  die nog in een filmpjesmap zitten.
- [references/valkuilen.md](references/valkuilen.md): elk probleem dat al eens opdook, met de oplossing.
- [references/checklist.md](references/checklist.md): wat je op elke still nakijkt.
- `future/kennisclips-rapport.md`: welke kennisclips ontbreken of verouderd zijn, en hoe je de
  opnamedatum uit een Panopto-link haalt.
