# CLAUDE.md

> Eerste poging — Tim verbetert. Houd dit kort en feitelijk; geen pluimen, geen TODO-lijsten.

## Wat is dit project?

**Zie Scherp Scherper** — een C#-cursus/handboek van Tim Dams (AP Hogeschool), gepubliceerd op [ziescherp.be](https://www.ziescherp.be) en gebruikt door meerdere hogescholen en middelbare scholen.

Het project bouwt **vier afzonderlijke Quarto-outputs** die samen op één GitHub Pages-site terechtkomen:

| Output | Bron | Type | Doel |
|--------|------|------|------|
| Hoofdboek | root + [content/](content/) | Quarto **book** (HTML + Typst/PDF) | Het eigenlijke handboek (18 hoofdstukken + appendix) |
| Oefeningen | [oefeningen/](oefeningen/) | Quarto website | Practica per hoofdstuk + vaardigheidsproeven |
| Slides | [slides/](slides/) | Quarto website (revealjs) | Lesslides — momenteel zo goed als leeg (alleen [overzicht.qmd](slides/overzicht.qmd)) |
| Corona Files | [coronafiles/](coronafiles/) | Quarto website | Missie-gebaseerde OOP-oefeningen (overerving → interfaces) |

Er is ook een [odysseyfiles/](odysseyfiles/) map met dezelfde structuur als coronafiles: dit is een probeersel, dat voorlopig mag genegeerd worden. Het is een AI generated alternatief op de coronafiles.

## Repo-layout

```
ziescherpste/
├── _quarto.yml              # hoofdboek-config (book, output-dir: build/)
├── _brand.yml               # Quarto brand-kleuren (AP-rood) — gebruikt in html theme: brand
├── _extensions/             # Quarto extensions (lightbox voor klikbare afbeeldingen)
├── index.qmd                # voorwoord
├── custom.scss              # HTML-thema overrides
├── references.bib / .qmd    # bibliografie
├── content/                 # alle hoofdstukken van het boek
│   ├── 0_intro/ ... 21_bestanden/
│   ├── B_appendix/          # appendix + "boetes" (coding guidelines)
│   └── BookOnlyOOP/         # conclusie
├── oefeningen/              # eigen Quarto-website (sub-_quarto.yml)
│   ├── 1_intro/ ... 18_bestandsverwerken/
│   └── EindeTests/          # vaardigheidsproeven per module + AllInOne-projecten
├── slides/                  # eigen Quarto-website (revealjs)
├── coronafiles/             # missie-website OOP
├── odysseyfiles/            # variant van corona — status onduidelijk
├── build/                   # output (gitignored, behalve gecommitte PDF)
├── future/                  # werkmap voor toekomstige ideeën (niet gepubliceerd)
└── .github/workflows/publish.yml
```

**Let op:** de hoofdstuknummering in [content/](content/) en [oefeningen/](oefeningen/) loopt **niet synchroon**. Bv. content `8_klassen/` ↔ oefeningen `9_klassen/`, content `9_meminoop/` ↔ oefeningen `10_meminoop/`. Dit is historisch gegroeid — verander niets aan mappen zonder de paden in beide `_quarto.yml`-bestanden mee aan te passen.

## Build- en publish-flow

Lokaal:
```bash
quarto render .              # hoofdboek → build/
quarto render slides/        # → build/slides/
quarto render oefeningen/    # → build/oefeningen/
quarto render coronafiles/   # → build/coronafiles/
```

CI: [.github/workflows/publish.yml](.github/workflows/publish.yml) doet bij elke push naar `main`:
1. Render alle vier de Quarto-projecten naar `build/`.
2. Voor slides: cache PDF's per slide; converteer enkel gewijzigde `.qmd`-slides via **decktape** naar PDF.
3. Upload `build/` als GitHub Pages-artifact en deploy.

Deploy-target: GitHub Pages van [github.com/timdams/ziescherpscherper](https://github.com/timdams/ziescherpscherper).

## Gotcha

**`build/` is gitignored**, behalve `build/Zie-Scherp-Scherper.pdf` die wél gecommit lijkt te zijn — controleer dit eer je `build/` opruimt.

## Schrijfstijl & content-conventies

- Taal: **Nederlands** (informeel, je-vorm, vlaams/belgisch).
- **Geen em-dashes (—).** Tim wil ze nergens: niet in de cursustekst, niet in chat. Gebruik in de plaats een gewoon koppel-/liggend streepje (`-`), een dubbele punt, haakjes of gewoon een nieuwe zin.
- Bestanden zijn `.md` of `.qmd`; in Quarto gedragen die zich nagenoeg gelijk.
- Callouts via Quarto-syntax (`:::{.callout-important}` etc.).
- **Nog geen nullables (`string?`, `int?`, ...) gebruiken** in de cursustekst. Nullable reference types worden bewust pas later geïntroduceerd; schrijf in de vroege hoofdstukken gewone types (bv. `string result = Console.ReadLine();`).
- **Terminologie: gebruik "instantievariabelen", niet "velden"** (`fields`). Dit is de term die doorheen het hele boek consistent gehanteerd wordt.
- Hoofdstukken eindigen meestal op een `kennisclips.md` met video-embeds.
- Coding guidelines voor studenten staan onder [content/B_appendix/boetes/](content/B_appendix/boetes/) ("boetes" = puntenaftrek).

## Niet aanraken zonder reden

- `_quarto.yml` (root + per subproject) — paden zijn handmatig onderhouden, een mapnaam veranderen breekt de hele sidebar.
- `.quarto/idx/**.json` — caches; staan in `git status` modified maar zijn build-artefacten.
- `site_libs/` — door Quarto gegenereerd.

## Toekomst ideeen

* Ziescherpst teksten (linq) itegrereren
* "Zoek de chatgpt fout": cursus meer AI futureproof maken (i.E. minder "code schrijven", "meer code lezen/begrijpen")