# boekPrintTest

Kleine testopstelling om aan de vormgeving van de **PDF** te werken zonder telkens
het volledige boek (18 hoofdstukken, 184 MB afbeeldingen) te renderen. Hier zit enkel:
de cover, het voorwoord (`index.qmd`) en hoofdstuk 1 (`content/0_intro/`).

Renderen duurt zo een halve minuut in plaats van vele minuten.

## Renderen

```powershell
quarto render boekPrintTest
```

Output: `boekPrintTest/pdf/Zie-Scherp-Scherper.pdf`.

> Zet je pdf-viewer op `preview/laatste.pdf`, niet op de pdf in `pdf/`.
> Quarto maakt die map bij elke render leeg en geeft `os error 32` zodra
> de pdf nog ergens openstaat.

Wil je de paginas ook als png bekijken (handig om samen te overleggen):

```bash
bash boekPrintTest/preview.sh 1 12   # rendert en zet pagina 1 t/m 12 in preview/
```

## Wat staat hier?

| Bestand | Rol |
|---|---|
| `_quarto.yml` | eigen boekconfig: enkel typst, enkel hoofdstuk 1 |
| `typst-show.typ` | kopie van de root-partial, **hier experimenteren we** |
| `console-typst.lua` | vertaalt `::: {.console}` naar het terminalblok in de pdf |
| `mascotte-typst.lua` | zet de mascottes in notitieblokjes op een vaste hoogte |
| `fonts/` | Inter + JetBrains Mono als ttf, meegegeven aan Typst via `font-paths` |
| `content/`, `cover/`, `index.qmd`, ... | **kopieen** van de echte bronnen (gitignored) |
| `sync.sh` | haalt die kopieen opnieuw op als je in de echte tekst iets wijzigt |

Wat hier goed bevonden wordt, verhuist daarna naar de root (`_quarto.yml` +
`typst-show.typ`) en `fonts/`.

## Lettertypes

`mainfont`/`monofont` uit `_quarto.yml` deden in de PDF **niets**. Reden: onze
`typst-show.typ` roept `book.with(...)` van orange-book aan, en dat sjabloon heeft
geen font-parameter (enkel `font-size`). Quarto's eigen typst-sjabloon, dat `mainfont`
normaal verwerkt, wordt daardoor niet gebruikt. Het boek stond dus al die tijd in
Typst's standaardfont Libertinus Serif, met DejaVu Sans Mono voor code.

Opgelost door in `typst-show.typ`, net voor `#show: book.with(...)`:

```typst
#set text(font: "Inter")
#show raw: set text(font: "JetBrains Mono")
```

De ttf's zijn de statische Google Fonts-varianten (regular/italic/bold/bolditalic +
500/600/800). Typst kan geen woff2, dus ttf. Ze moeten mee in de repo: op de
GitHub Actions-runner staat Inter net zo min geinstalleerd als hier.

## Console-output

`::: {.console}` krijgt op de website via [custom.scss](../custom.scss) een zwart
terminalvenster met groene tekst en een labelbalkje. In de pdf bestond die styling
niet: het blok kwam er als een gewoon grijs codeblok uit.

Nu doet [console-typst.lua](console-typst.lua) hetzelfde in Typst. De filter haalt de
tekst uit het codeblok en vervangt de hele div door `#zss-console("...")`, een functie
die in [typst-show.typ](typst-show.typ) gedefinieerd staat. Kleuren komen overeen met de
website: venster `#0d1117`, balkje `#161b22`, tekst `#4ade80`.

Let op: de filter pakt enkel het codeblok binnen de div. Zet er dus geen lopende tekst
tussen, die zou verdwijnen. In alle 40 console-blokken van het boek is dat vandaag ook
zo.

## Mascottes in notitieblokjes

De mascottes (`>![](../assets/care.png)Tekst...`) kwamen er in de pdf elk in een
andere maat uit. De oorzaak zit in de png's zelf: Typst leest de dpi uit de
metadata en rekent daarmee de afmeting uit.

| bestand | pixels | dpi in het bestand | werd dus |
|---|---|---|---|
| `care.png` (bouwvakker) | 322 x 430 | 300 | 2,7 x 3,6 cm |
| `attention.png` | 263 x 414 | 300 | 2,2 x 3,5 cm |
| `zieverder.png` | 214 x 391 | 120 | 4,5 x 8,3 cm |
| `aistagiar.png` (Steven) | 392 x 814 | geen | een halve pagina |

Op de website valt dat niet op, want [custom.scss](../custom.scss) legt ze daar
allemaal op 60 px. [mascotte-typst.lua](mascotte-typst.lua) doet nu hetzelfde voor de
pdf: elke afbeelding binnen een blockquote krijgt `height: 3.6cm`. Hoogte en niet
breedte, want de mascottes hebben verschillende verhoudingen en gelijke hoogte oogt
rustiger. 3,6 cm is precies de maat die de bouwvakker al had.

De andere weg was de dpi in de png's rechtzetten. Dat is fragieler: het moet bij elke
nieuwe mascotte opnieuw gebeuren, en een export uit een tekenprogramma zet die
metadata zomaar weer anders.

In het hele boek staan 78 van die mascottes, verdeeld over vijf afbeeldingen
(`care`, `attention`, `zieverder`, `aistagiar`, `gotopolice`). De filter pakt ze
allemaal, want hij kijkt naar de blockquote en niet naar de bestandsnaam.

## Ligaturen in code

JetBrains Mono heeft programmeerligaturen: `>=` wordt een enkel teken. Bij het
renderen van het hele boek stond er in hoofdstuk 9 letterlijk `if(value >= 0)` in de
bron, maar `if(value >= 0)` met het samengetrokken teken op papier. Hetzelfde geldt
voor `!=`, `<=`, `==`, `=>` en `->`, samen goed voor zo'n 2000 plaatsen.

Voor een boek waar studenten die operatoren net moeten leren typen, is dat niet oké.
In `typst-show.typ` staat daarom:

```typst
#show raw: set text(font: "JetBrains Mono", ligatures: false, features: (calt: 0))
```

Alleen op code, dus de gewone tekst houdt haar normale fi/fl-ligaturen.

Dit geldt enkel voor de pdf. De website laadt hetzelfde JetBrains Mono van Google
Fonts en heeft dus dezelfde ligaturen; daar zou `font-variant-ligatures: none` op
`code` en `pre code` in [custom.scss](../custom.scss) hetzelfde doen.

## Nederlandse koptekst

orange-book is Engelstalig en zet standaard `supplement-chapter: "Chapter"`. Dat komt
via `set heading(supplement: ...)` in de koptekst ("Chapter 71. Properties") en in
verwijzingen naar een hoofdstuk. In de aanroep van `book.with(...)` staat nu
`supplement-chapter: "Hoofdstuk"` en `supplement-part: "Deel"`. Dat laatste is
vandaag ongebruikt (het verschijnt enkel bij `part-style: 1`), maar staat er zodat er
later geen "Part" opduikt.

## Naar de root gebracht

Alles hierboven staat ondertussen ook in het echte boek:

| root | wat |
|---|---|
| `typst-show.typ` | fonts, wit papier, tekstkleur, `zss-console` |
| `console-typst.lua`, `mascotte-typst.lua` | kopie van hier |
| `fonts/` | kopie van hier, moet mee in de repo voor de CI-runner |
| `_quarto.yml` | `font-paths`, `mainfont: Inter`, `monofont: JetBrains Mono`, `filters` |

Het hele boek renderen zonder de website erbij:

```powershell
quarto render . --to typst
```

Wijzig je hier iets, kopieer het dan naar de root (of omgekeerd). De twee lopen niet
automatisch gelijk.
