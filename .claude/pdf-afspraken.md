# Pdf van het handboek: afspraken, oplossingen, techniek

De skill [`handboekpdf`](skills/handboekpdf/SKILL.md) beschrijft hoe de pdf in elkaar zit (cover,
fonts, partial, testopstelling). Dit bestand zegt **wat de pdf moet zijn**, wat er al misging en
hoe dat opgelost is, en hoe je nakijkt. Werk je aan de pdf, lees dan allebei.

## 1. Afspraken

Dit moet kloppen na elke wijziging aan tekst, figuren of pdf-opmaak. Nakijken doe je op de
pagina's zelf, niet in de code: een kapotte lay-out geeft geen foutmelding.

1. **Avatars zijn nooit schermvullend.** De voorman (`attention.png`), de holbewoner (`care.png`),
   stagiair Steven (`aistagiar.png`), de politie (`gotopolice.png`), de verteller
   (`verteller.png`) en de "zie verder"-figuur staan klein aan het begin van hun gesprek: links,
   met de eerste alinea ernaast.
2. **Een afbeelding neemt niet meer plaats dan haar inhoud vraagt.** Drie kaders met twee pijlen
   vullen geen halve pagina. Een decoratieve afbeelding (badge, logo) is klein. Een screenshot
   of een poster mag groter, zolang je hem kan lezen.
3. **Geen hoofdstuk eindigt met een of twee zinnen op een verder lege pagina.** Dat geldt ook
   voor een los callout-blokje of een lijstje van twee items. Een staart van 6 tot 10 regels die
   bij elkaar horen (een antwoordcallout, een tip na een codeblok) mag.
4. **Geen blanco pagina's**, ook niet voor een hoofdstuk of een deel.
5. **Wat verder storend is, los je op of meld je.** Al eens opgelost: nummering als "5.0.3", een
   koptekst uit een ander hoofdstuk, een Romeins cijfer door een deeltitel, lege pagina's
   "Bijlagen" en "Bibliografie".
6. **De website merkt er niets van.** Pdf-oplossingen zitten in de Typst-filters, de partial of
   `_quarto.yml`. In de markdown komt hoogstens `{pdf-width=40%}` achter een afbeelding.
7. **De pdf wordt op een scherm gelezen.** Dus geen lege pagina's om hoofdstukken rechts te laten
   beginnen. Komt er ooit een drukversie, dan wordt dat herbekeken.

## 2. Zo kijk je na

```powershell
quarto render . --to typst                                                  # hele boek, ca. 45 s
python scripts/pdf-controle/pdfcontrole.py analyse build/Zie-Scherp-Scherper.pdf
python scripts/pdf-controle/pdfcontrole.py pagina  build/Zie-Scherp-Scherper.pdf "#123" "Jawadde"
python scripts/pdf-controle/pdfcontrole.py contact build/Zie-Scherp-Scherper.pdf
```

1. **Render het hele boek**, niet een hoofdstuk. Het hele boek duurt maar een kleine minuut, en
   een render op een enkel hoofdstukbestand maakt `build/` toch eerst leeg. Elk hoofdstuk begint op
   een nieuwe pagina, dus de lay-out van een hoofdstuk hangt niet af van de rest.
   [boekPrintTest/](../boekPrintTest/) blijft handig voor de cover en de partial.
2. **`analyse`** meldt per hoofdstuk `wees`, `kort`, `gat`, `leeg` en `grote-afb`. Deelpagina's
   worden eruit gefilterd. `wees`, `leeg` en `grote-afb` los je op; `kort` en `gat` bekijk je (een
   gat voor een grote screenshot die niet meer paste is normaal).
3. **`pagina`** zet een pagina als png in `boekPrintTest/preview/controle/`. Lees die in met de
   Read tool. Bij een wees: bekijk ook de pagina ervoor, daar zie je wat de staart tegenhoudt.
4. **`contact`** maakt 24 miniaturen per blad (26 bladen voor het hele boek). Zo zie je in een
   paar minuten elke pagina: schermvullende avatars, te grote figuren, lege pagina's, rare
   deelpagina's.
5. **Bewaar een kopie** van de pdf voor je iets verandert (bv. in je scratchpad) om voor en na te
   vergelijken. Open nooit `build/Zie-Scherp-Scherper.pdf` zelf in een viewer: dan faalt de volgende
   render met `os error 32`.

Nodig: `pip install pymupdf pillow`.

## 3. Wat er misging en waar het opgelost is

| Wat je zag | Oorzaak | Oplossing |
|---|---|---|
| Avatar als reuzeletter in de alinea, tekst rechtsonder, groot wit vlak erboven | In de bron staat de png als eerste teken van de alinea (`>![](../assets/care.png)Tekst`) | [mascotte-typst.lua](../mascotte-typst.lua): elke afbeelding in een blockquote 2.4 cm hoog, en een `#grid` met mascotte links en eerste alinea rechts |
| Avatars elk een andere maat | Typst rekent px / dpi uit de png-metadata | Zelfde filter: vaste hoogte, niet breedte |
| Schema van drie kaders vult een hele pagina | Zonder breedte rekent Typst px / dpi, en zonder dpi 72. De hand-drawn png's zijn 1500 tot 2500 px breed, dus altijd tekstbreed. De breedtes in de bron staan in commentaar (`<!--{width=80%}-->`) en zijn voor html bedoeld | [figuren-typst.lua](../figuren-typst.lua), zie hieronder |
| Figuur zonder onderschrift staat links | Geen figure, gewoon een alinea met een afbeelding | [figuren-typst.lua](../figuren-typst.lua) zet die in `#align(center)` |
| "5.0.3 WriteLine" en een koptekst met een sectie uit een vorig hoofdstuk | Bestand springt van `#` naar `###`; orange-book toont in de koptekst de laatste `##` die hij vindt | [koppen-typst.lua](../koppen-typst.lua) schuift per hoofdstuk alle subkoppen op tot de hoogste `##` is |
| Ca. 100 blanco pagina's | orange-book: `pagebreak(to: "odd")` voor elk hoofdstuk en deel, en elk .md-bestand is een hoofdstuk | [typst-show.typ](../typst-show.typ): `#show pagebreak` maakt er een gewone pagebreak van |
| Reuzegroot Romeins cijfer door de deeltitel, mini-inhoudstafel botst met de titel | orange-book `part-style: 0`: cijfer op 16em, outline tot sectieniveau | `part-font-size: 0pt` en `outline-small-depth: 1` in `book.with(...)` |
| Lege pagina "Bibliografie" | `bibliography:` staat in `_quarto.yml`, maar het boek citeert niets | `suppress-bibliography: true` onder `format: typst:`. Gaat het boek ooit citeren, haal dat dan weg |
| Lege pagina "Bijlagen" | Quarto's eigen `orange-book.lua` voegt een kop "Bijlagen" toe voor de appendix; als hoofdstukkop krijgt die een eigen pagina | [typst-show.typ](../typst-show.typ): show-regel na `book.with` die een ongenummerde kop "Bijlagen" verbergt |
| Hoofdstuk eindigt met 2 tot 5 regels op een lege pagina | Toeval, per hoofdstuk | [bijsturing-typst.lua](../bijsturing-typst.lua), zie punt 5 |
| Decoratieve afbeelding te groot | De automatische maat kent de inhoud niet | `{pdf-width=25%}` achter de afbeelding in de bron (gedaan bij `aimod.png` en `asciiwiki.png`) |

Nog open: de bijlage heet "1. Oefeningen" in plaats van "A. Oefeningen". Bij "Meer weten" schuift
de poster door en blijft de pagina ervoor halfleeg; kleiner maken wordt onleesbaar.

## 4. Figuurmaat ([figuren-typst.lua](../figuren-typst.lua))

Enkel voor afbeeldingen zonder `width`/`height` (mascottes hebben er al een):

| Soort | Herkenning | Schaal |
|---|---|---|
| Hand-drawn schema | er bestaat `imagegen/<naam>.js`, `.mjs` of `.svg` naast de png (suffix `NEW`/`Alternatief` telt niet) | 0.38 pt per px |
| Png met eigen dpi (bv. 300) | dpi in de metadata, niet 72 of 96 | 72 / dpi |
| Rest (screenshots) | | 0.75 pt per px (schermgrootte) |

Daarna nooit breder dan de tekst (453.5 pt) en nooit hoger dan 300 pt. De uitkomst gaat als
percentage naar Typst, dus in een callout of tabelcel wordt de figuur mee kleiner.

Waarom 0.38: de tekst in de schema's is Caveat op 24 tot 42 px. Dat wordt 9 tot 16 pt; Caveat heeft
een kleine x-hoogte, dus kleiner leest niet. Wie de stijl van de schema's verandert (skill
`afbeelding`), kijkt dit getal na.

`{pdf-width=40%}` in de bron wint altijd. De website zet dat attribuut gewoon mee in de html en doet
er niets mee.

## 5. Weesregels bijsturen ([bijsturing-typst.lua](../bijsturing-typst.lua))

Een tabel per bronbestand, zoals het in `_quarto.yml` staat:

```lua
["content/3_data/ai.md"] = { figuren = 0.6, tekst = "9.5pt", interlinie = "0.46em", ruimte = "0.9em" },
```

| Sleutel | Doet | Wint ongeveer |
|---|---|---|
| `figuren` | factor op de berekende breedte van alle figuren in dat hoofdstuk | 0.85: 1 tot 2 regels per tekstbrede figuur |
| `interlinie` | `par(leading)`, standaard 0.5em | 0.45em: 3% van de lopende tekst, niets in code of callouts |
| `ruimte` | `block(spacing)`, standaard 1.2em | 0.8em: veel in hoofdstukken vol codeblokken en callouts |
| `tekst` | `text(size)`, standaard 10pt | 9.5pt: 5% van alles; de sterkste en valt niet op |

Werkwijze:

- Begin licht en ga een trap hoger tot de wees weg is: `figuren = 0.85` of `interlinie = "0.45em"`,
  dan `0.75` plus `ruimte`, dan `tekst = "9.5pt"`. Niet kleiner dan `tekst = "9.3pt"` en
  `figuren = 0.6`; is dat nog niet genoeg, meld het dan aan Tim in plaats van verder te knijpen.
- Kijk eerst wat de staart is (`pagina` op de wees en de pagina ervoor). Een callout of een kop met
  zijn alinea is onbreekbaar: dan moet er die hele hoogte bij, niet een regel.
- Kijk na het oplossen of het hoofdstuk er nog normaal uitziet.
- De lijst hoort bij de huidige tekst. Verandert een hoofdstuk, dan kan een regel overbodig worden
  of net tekortschieten. Twijfel je of een regel nog nodig is: haal ze weg, render, analyseer.

## 6. Technische feiten die tijd besparen

- **Versies**: Quarto 1.9.35, pandoc 3.8.3, Typst 0.14.2, orange-book 0.7.1. A4 is 595 x 842 pt,
  marges 2.5 cm opzij en 3 cm boven en onder.
- **De filters zien het hele boek als een document.** `quarto.doc.input_file` is altijd `index.qmd`.
  Wil je weten uit welk bestand een stuk komt: de koppen van niveau 1 staan op topniveau en in
  dezelfde volgorde als de bestanden in `_quarto.yml` (index, README, dan de hoofdstukken, dan de
  appendices). `bijsturing-typst.lua` leest die lijst zelf en telt; klopt het aantal niet, dan
  waarschuwt ze en doet ze niets.
- **`#part[...]` en de kop "Bijlagen" bestaan niet in je filters.** Die komen van Quarto's eigen
  `orange-book.lua`, dat na de gebruikersfilters draait, ook als je `quarto` in de filterlijst
  zet. Wat daar misgaat, los je op in de partial met een show-regel.
- **Show-regels in de partial**: een regel *voor* `#show: book.with(...)` omsluit het sjabloon (zo
  werkt de pagebreak-regel). Een regel *na* `book.with` zit binnen het document en krijgt een
  element te zien voor orange-book het krijgt (zo werkt de Bijlagen-regel).
- **`keep-typst: true` bewaart geen `.typ`** bij een boekrender. Debuggen van een filter: tijdelijk
  `io.stderr:write("ZSSDEBUG ...\n")` en `quarto render . --to typst 2>&1 | Select-String ZSSDEBUG`.
  Een extra filter proberen zonder `_quarto.yml` aan te raken: `--lua-filter pad.lua` (die draait
  wel na Quarto).
- **Afbeeldingsmaat in lua**: `pandoc.image.size(bytes)` geeft `width`, `height`, `dpi_horz`.
- **orange-book-parameters** staan in `.quarto/typst/packages/preview/orange-book/0.7.1/lib.typ`
  (regel 311 is de signatuur van `book`). Handig: `part-font-size`, `part-style`,
  `outline-small-depth`, `outline-depth`.
- **Koptekst van orange-book**: op oneven pagina's de laatste `##` voor die plek, op even pagina's
  het hoofdstuk. Een hoofdstuk zonder `##` toont dus die van een vorig hoofdstuk.
- **boekPrintTest** heeft kopieen van de partial en de filters (niet `bijsturing-typst.lua`, die
  hoort bij het hele boek). Pas je in de root iets aan, kopieer het mee.
