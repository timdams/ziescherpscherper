---
name: handboekpdf
description: Maak of herstel de pdf-versie van het handboek (Quarto book naar Typst) met de cover, de lettertypes, de console- en mascotte-filters en de snelle testopstelling. Gebruik dit bij elke vraag om de pdf te renderen, de cover aan te passen, iets aan de pdf-vormgeving te wijzigen, of om dezelfde pdf-opzet in een ander boekproject op te zetten.
---

# Handboek naar pdf

De website en de pdf komen uit dezelfde bron. In html doet `custom.scss` het werk; in de pdf bestaat
die css niet en moet alles opnieuw gezegd worden in Typst. Alles hieronder gaat over dat verschil.

## Kort

```powershell
quarto render . --to typst        # het hele boek -> build/Zie-Scherp-Scherper.pdf (minuten)
quarto render boekPrintTest       # cover + voorwoord + hoofdstuk 1 -> boekPrintTest/pdf/ (halve minuut)
python cover/maak_cover.py        # cover.svg + cover.png opnieuw
```

Daarna **kijk je naar de pagina's**: `bash boekPrintTest/preview.sh 1 12` zet ze als png in
`preview/`, en die lees je in met de Read tool. Loop de [checklist](references/checklist.md) af. Het
renderen slaagt bijna altijd; de vormgeving kapotmaken doe je zonder foutmelding.

## De zes onderdelen

| Wat | Waar | Rol |
|---|---|---|
| pdf-config | [_quarto.yml](_quarto.yml), blok `format: typst:` | papier, marges, fonts, nummering, partial |
| cover | [cover/](cover/) | `cover.svg`, gegenereerd door `maak_cover.py`, alle tekst als outlines |
| Typst-partial | [typst-show.typ](typst-show.typ) | roept orange-book aan, legt de cover op pagina 1, zet fonts en kleuren |
| lettertypes | [fonts/](fonts/) | Inter + JetBrains Mono als ttf, moeten mee in de repo |
| lua-filters | [console-typst.lua](console-typst.lua), [mascotte-typst.lua](mascotte-typst.lua) | vertalen `.console`-blokken en mascottehoogtes naar Typst |
| testopstelling | [boekPrintTest/](boekPrintTest/) | hetzelfde recept met 1 hoofdstuk, om snel te itereren |

## 1. De pdf-config

```yaml
format:
  typst:
    template-partials: [typst-show.typ]   # onze titelpagina in plaats van de kale
    font-paths: [fonts]                   # ttf's uit de repo, de CI-runner heeft ze niet
    mainfont: "Inter"
    monofont: "JetBrains Mono"
    papersize: a4
    section-numbering: "1.1"
    margin: {x: 2.5cm, y: 3cm}
```

`quarto render .` maakt html **en** pdf, want beide formats staan in `_quarto.yml`. Enkel de pdf:
`--to typst`. De bestandsnaam komt uit `book: title:`, dus "Zie Scherp Scherper" wordt
`build/Zie-Scherp-Scherper.pdf`. Die naam staat ook in de navbar-link, dus verander de titel niet
zonder die link mee te nemen.

## 2. De cover

`cover/cover.svg` wordt door de partial als paginavullende afbeelding op pagina 1 gelegd, en het
titelblok van het sjabloon is leeggemaakt zodat er niets overheen komt.

Alles in die svg is vector, **ook de letters**: die zijn met `svgtekst.py` omgezet naar outlines.
Zou de tekst als `<text>` blijven staan, dan kiest de buildmachine zelf maar een font, want daar
staat geen Arial op.

Teksten en verhoudingen staan als constanten bovenaan `cover/maak_cover.py`: `TITEL`, `ONDERTITEL`,
`BANNER`, `AUTEUR`, `EDITIE`, `OPBOUW`, en daaronder de verticale opbouw (`Y_...`) en de breedtes
(`B_...`) als fractie van de pagina. Alles is A4-relatief, dus je kan schuiven zonder iets anders te
breken. Na een wijziging: `python cover/maak_cover.py`, dan opnieuw renderen. Meer in
[cover/README.md](cover/README.md).

`OPBOUW` is de zwarte balk tegen de onderrand ("werk in opbouw"). Zet die op `None` zodra de
vermelding weg mag; de aankondigingsbalk in `_quarto.yml` doet hetzelfde op de website.

## 3. De Typst-partial

[typst-show.typ](typst-show.typ) is het scharnierpunt. Het roept `book.with(...)` van
`@preview/orange-book:0.7.1` aan, en doet daarnaast vier dingen die je nergens anders kan zetten:

- **fonts** (`#set text(font: ...)` en `#show raw: set text(...)`), want orange-book heeft geen
  font-parameter en Quarto's eigen sjabloon draait daardoor niet;
- **wit papier en bijna-zwarte tekst**, want `_brand.yml` giet zijn offwhite en middengrijs over
  elke pagina;
- **`#zss-console(...)`**, het zwarte terminalvenster dat de lua-filter aanroept;
- **Nederlandse supplementen** (`supplement-chapter: "Hoofdstuk"`).

De volgorde telt: de fontregels moeten voor `#show: book.with(...)` staan, de marginalia-setup erna.

## 4. Lettertypes

Inter voor de tekst, JetBrains Mono voor code, dezelfde als op de website. De ttf's staan in
`fonts/` en gaan via `font-paths` naar Typst. Ze **moeten** in de repo: op de GitHub Actions-runner
staat Inter net zo min geinstalleerd als op je eigen pc. Typst leest geen woff2, dus ttf, en de
statische varianten (400/500/600/700/800 plus italic), niet de variable font.

In code staan de programmeerligaturen uit. Zonder dat wordt `>=` een enkel teken, op zo'n 2000
plaatsen, in een boek waar de lezer die operatoren net moet leren typen.

## 5. De filters

`console-typst.lua` haalt de tekst uit het codeblok binnen `::: {.console}` en vervangt de hele div
door `#zss-console("...")`. Zet dus geen lopende tekst in zo'n div, die zou verdwijnen.

`mascotte-typst.lua` zet elke afbeelding binnen een blockquote op `height: 3.6cm`. Zonder dat rekent
Typst de maat uit de dpi in de png-metadata, en dan komt de bouwvakker er als postzegel uit en
stagiair Steven een halve pagina groot.

Beide filters staan onder `filters:` in `_quarto.yml` en doen niets in html, want ze beginnen met
`quarto.doc.is_format("typst")`.

## 6. Snel itereren

Het hele boek renderen duurt minuten (18 hoofdstukken, 184 MB afbeeldingen). Aan de vormgeving werk
je in [boekPrintTest/](boekPrintTest/): dezelfde config, dezelfde partial, dezelfde filters, maar
enkel de cover, het voorwoord en hoofdstuk 1. Een halve minuut per render.

```bash
bash boekPrintTest/sync.sh          # bron opnieuw ophalen uit de echte repo
quarto render boekPrintTest
bash boekPrintTest/preview.sh 1 12  # rendert + zet pagina 1 t/m 12 als png in preview/
```

Zet je pdf-viewer op `preview/laatste.pdf` en niet op de pdf in `pdf/`: Quarto maakt die map bij
elke render leeg en struikelt over een openstaande pdf (`os error 32`).

**Wat daar goed bevonden wordt, kopieer je naar de root.** De twee lopen niet automatisch gelijk.

## Dezelfde opzet in een ander boek

In [assets/](assets/) staat de hele stack als vertrekbasis, losgemaakt van dit boek.

1. **Quarto-book opzetten** met `project: type: book` en een `format: typst:`-blok zoals hierboven.
2. **Kopieer** `assets/typst-show.typ`, `assets/console-typst.lua` en `assets/mascotte-typst.lua`
   naar de projectroot; zet de partial bij `template-partials` en de filters onder `filters:`.
3. **Fonts**: haal de statische ttf's van je fonts binnen in `fonts/` en zet `font-paths: [fonts]`
   plus `mainfont`/`monofont`.
4. **Cover**: kopieer `assets/cover/` (`cover.py` en `svgtekst.py`) naar `cover/`, pas het configblok
   bovenaan `cover.py` aan (titel, ondertitel, auteur, kleuren) en draai
   `python cover/cover.py --varianten` om kleurproeven naast elkaar te zien. Wil je een illustratie
   meenemen, zet ze als vectorpaden in een json en wijs `ART_JSON` daarnaar.
   Nodig: `pip install fonttools pillow numpy`, en Windows voor de Arial-fonts.
5. **Testopstelling**: maak een tweede boekconfig met 1 hoofdstuk, zoals `boekPrintTest/`. Dit is de
   grootste tijdwinst van alles hier.
6. **Renderen en kijken**, met de [checklist](references/checklist.md).

De partial verwijst naar `brand-color` en `brand-logo`. Die bestaan enkel als er een `_brand.yml` is;
anders zet je daar een vaste kleur en `logo: none`.

## Verder

- [references/valkuilen.md](references/valkuilen.md): elk probleem dat in deze pdf is opgedoken, met
  de oorzaak en de oplossing. Lees dit voor je iets aan de vormgeving verandert.
- [references/checklist.md](references/checklist.md): wat je na een render nakijkt.
- De figuren van de cursus zelf teken je met de skill [afbeelding](../afbeelding/SKILL.md),
  mermaid-diagrammen naar pdf gaan via [mermaid-pdf](../mermaid-pdf/SKILL.md).
