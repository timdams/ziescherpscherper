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
| `os error 32` bij het renderen | Quarto maakt de output-map leeg en de pdf staat nog open in je viewer | viewer op een kopie zetten (`preview/laatste.pdf`), niet op de pdf in de output-map |
| een render duurt vele minuten | `content/assets` is 184 MB aan afbeeldingen en het boek telt 18 hoofdstukken | aan de vormgeving werken in `boekPrintTest/` (cover + voorwoord + hoofdstuk 1, een halve minuut) |

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
