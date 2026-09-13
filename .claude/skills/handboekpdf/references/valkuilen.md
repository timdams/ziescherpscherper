# Valkuilen in de Typst-pdf

Alles hieronder is een keer echt misgegaan in dit boek. Geen enkele geeft een foutmelding
(op `os error 32` na), dus je merkt ze alleen door naar de pagina's te kijken.

| Wat je ziet | Waarom | Wat het oplost |
|---|---|---|
| `mainfont` en `monofont` doen niets | de partial roept `book.with(...)` van orange-book aan, en dat sjabloon heeft geen font-parameter; Quarto's eigen sjabloon, dat `mainfont` verwerkt, draait dus niet | `#set text(font: "...")` en `#show raw: set text(font: "...")` in `typst-show.typ`, voor `#show: book.with(...)` |
| grijze waas over elk blad | Quarto zet `#set page(fill: brand-color.background)` uit `_brand.yml`; op scherm een zachte offwhite, op papier vuil | `#set page(fill: none)` in de partial (staat onder de header-includes, dus wint) |
| tekst drukt uitgewassen af | `foreground` uit `_brand.yml` is middengrijs (`#4D4D4D`); op 10pt is dat te licht | `#set text(fill: rgb("#1a1a22"))` |
| `>=` staat als een enkel teken in de code | programmeerligaturen van JetBrains Mono; geldt ook voor `!=`, `<=`, `==`, `=>`, `->`, samen ~2000 plaatsen | `ligatures: false, features: (calt: 0)` op `raw`, dus enkel op code |
| mascottes elk een andere maat | Typst leest de dpi uit de png-metadata: 322 px @ 300 dpi wordt 2,7 cm, 392 px zonder dpi wordt een halve pagina | `mascotte-typst.lua`: elke afbeelding in een blockquote op `height: 3.6cm` |
| `::: {.console}` komt er als een gewoon grijs codeblok uit | die styling zit in `custom.scss` en css bestaat niet in Typst | `console-typst.lua` vervangt de div door `#zss-console("...")` uit de partial |
| "Chapter 71. Properties" in de koptekst | orange-book is Engelstalig | `supplement-chapter: "Hoofdstuk"` en `supplement-part: "Deel"` |
| de covertekst staat in een ander font na een CI-build | de runner heeft Arial niet en kiest zelf een font voor `<text>` | alle letters als outlines wegschrijven (`svgtekst.py`), geen `<text>` in de svg |
| gewone tekst in het verkeerde font na een CI-build | Inter staat evenmin op de runner | de ttf's in de repo zetten en `font-paths: [fonts]`; Typst leest geen woff2, dus ttf |
| mascotte als reuzeletter in de regel, tekst begint rechtsonder, groot wit vlak erboven | de png staat als eerste teken in de alinea (`>![](care.png)Tekst`) | `mascotte-typst.lua` maakt er een grid van: mascotte (2.4 cm) links, eerste alinea rechts |
| schema van drie kaders vult een hele pagina | Typst rekent px / dpi (72 zonder dpi); de hand-drawn png's zijn 1500-2500 px, dus altijd tekstbreed; de breedtes in de bron staan in commentaar | `figuren-typst.lua`: schema's met generator in `imagegen/` op 0.38 pt/px, screenshots 0.75 pt/px, eigen dpi volgen, max tekstbreedte en 300 pt hoog; uitzondering met `{pdf-width=40%}` |
| afbeelding zonder onderschrift staat links | geen figure, gewoon een alinea | `figuren-typst.lua` (Para) zet ze in `#align(center)` |
| "5.0.3" in de nummering, koptekst toont een sectie uit een ander hoofdstuk | bestand springt van `#` naar `###` | `koppen-typst.lua` schuift de subkoppen per hoofdstuk op |
| ~100 blanco pagina's | orange-book: `pagebreak(to: "odd")` voor elk hoofdstuk, en elk .md-bestand is een hoofdstuk | `#show pagebreak` in de partial maakt er een gewone pagebreak van |
| reuzegroot Romeins cijfer door de deeltitel, mini-inhoudstafel botst met de titel | orange-book part-style 0: cijfer op 16em, outline tot sectieniveau | `part-font-size: 0pt`, `outline-small-depth: 1` in `book.with` |
| hoofdstuk eindigt met 2-4 regels op een lege pagina | toevallig; elk hoofdstuk begint op een nieuwe pagina | `bijsturing-typst.lua`: per bronbestand `figuren`, `tekst`, `interlinie`, `ruimte`; na tekstwijzigingen opnieuw nakijken |
| bijsturing doet niets | de filter ziet het boek als een document; `#part[...]` bestaat dan nog niet, `quarto.doc.input_file` is altijd `index.qmd` | H1's tellen in de volgorde van `_quarto.yml` (de filter leest die lijst zelf) |
| `os error 32` bij het renderen | Quarto maakt de output-map leeg en de pdf staat nog open in je viewer | viewer op een kopie zetten (`preview/laatste.pdf`), niet op de pdf in de output-map |
| een render duurt lang | `quarto render .` zonder `--to typst` bouwt ook de hele website | `quarto render . --to typst` (ca. 45 s); voor cover en partial `boekPrintTest/` |

## Nog een paar dingen die je moet weten

**`quarto render .` maakt html en pdf.** Beide formats staan in `_quarto.yml`. Wil je enkel de
pdf: `quarto render . --to typst`.

**De bestandsnaam van de pdf komt uit `book: title:`.** "Zie Scherp Scherper" wordt
`build/Zie-Scherp-Scherper.pdf`. Verander je de titel, dan verandert de naam mee en breekt de link
in de navbar (`href: Zie-Scherp-Scherper.pdf`).

**`build/` staat volledig in `.gitignore` en er is niets uit gecommit.** De pdf op de site komt uit
de GitHub Action, niet uit de repo. (CLAUDE.md zegt dat er een pdf gecommit is; dat klopt vandaag
niet meer.)

**orange-book en marginalia worden door Typst gedownload** uit `@preview`, met een vast
versienummer in de partial. De buildmachine heeft daarvoor internet nodig. Een versie oppikken die
je niet zelf zet, kan de lay-out stil veranderen; hou het pinned.

**De lua-filter voor console pakt enkel het codeblok binnen de div.** Zet er geen lopende tekst
tussen, die zou verdwijnen. In alle 40 console-blokken van het boek staat vandaag enkel code.

**`_variables.yml` wordt door de Action overschreven** met de datum van de laatste commit. Die
datum staat onder de pdf-link in de navbar. Lokaal blijft er de waarde staan die er toevallig in
zit; niet verwarren met de datum in de pdf zelf.
