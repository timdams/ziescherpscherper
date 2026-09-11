# CLAUDE.md

> Eerste poging — Tim verbetert. Houd dit kort en feitelijk; geen pluimen, geen TODO-lijsten.

## Wat is dit project?

**Zie Scherp Scherper** — een C#-cursus/handboek van Tim Dams (AP Hogeschool), gepubliceerd op [ziescherp.be](https://www.ziescherp.be) en gebruikt door meerdere hogescholen en middelbare scholen.

Het project bouwt **vier afzonderlijke Quarto-outputs** die samen op één GitHub Pages-site terechtkomen:

| Output | Bron | Type | Doel |
|--------|------|------|------|
| Hoofdboek | root + [content/](content/) | Quarto **book** (HTML + Typst/PDF) | Het eigenlijke handboek (18 hoofdstukken + appendix) |
| Oefeningen | [oefeningen/](oefeningen/) | Quarto website | Practica per hoofdstuk + vaardigheidsproeven |
| Slides | [slides/](slides/) | Quarto website (revealjs) | Lesslides via slides/overzicht.qmd |
| Corona Files | [coronafiles/](coronafiles/) | Quarto website | Missie-gebaseerde OOP-oefeningen (overerving → interfaces) Mag genegeerd worden |

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

De pdf van het hoofdboek (Typst, met eigen cover, fonts en lua-filters) heeft een eigen skill:
[`handboekpdf`](.claude/skills/handboekpdf/SKILL.md). Gebruik die zodra er aan de pdf, de cover of
de pdf-vormgeving gewerkt wordt. Snel itereren doe je in [boekPrintTest/](boekPrintTest/), niet op
het volledige boek.

## Oplossingen achter een sleutel

De oplossingen bij de oefeningen staan online niet zomaar open. Ze worden **na** het renderen
uit de HTML geknipt en versleuteld door [scripts/oplossingen-lock.mjs](scripts/oplossingen-lock.mjs),
dat in de CI draait met de repo-secret `OPLOSSING_SLEUTEL`. Bezoekers met de sleutellink
(`...?sleutel=<code>`) krijgen ze terug via [oefeningen/oplossingen.html](oefeningen/oplossingen.html);
de browser onthoudt de sleutel, dus dat is eenmalig.

- **De bronbestanden veranderen niet.** Blijf oplossingen gewoon schrijven als
  `::::{.callout-caution collapse="true" title="Oplossing"}`, dat is waar het script op zoekt.
- **Lokaal renderen blijft leesbaar**: het script draait enkel in de CI, of manueel met
  `node scripts/oplossingen-lock.mjs build/oefeningen --code <code>`.
- **Geen twee koppen van hetzelfde niveau in één oplossingscallout.** Quarto splitst de body
  dan in zustersecties en de helft valt buiten het slot. Een pagina die integraal een
  uitwerking is, krijgt in plaats daarvan `<meta name="zss-opl-pagina">` in haar frontmatter
  (zie [oefeningen/corona/opl_h12corona.md](oefeningen/corona/opl_h12corona.md)).
- Het script kuist ook `search.json` en de inhoudsopgave op, en waarschuwt als er nog
  oplossingstekst op een pagina blijft staan. Testen doe je met
  [scripts/oplossingen-test.mjs](scripts/oplossingen-test.mjs).

## Coach-prompt bij de oefeningen

Naast elke oefeningstitel staat een knopje **Coach**. Dat geeft de student een prompt om in
ChatGPT, Copilot Chat of Claude te plakken: een A.I. die hem door de oefening loodst zonder
code of oplossing te geven, en die enkel leerstof gebruikt die op dat punt al gezien is.

- Het sjabloon met de coachregels staat in [oefeningen/_coach/_prompt.md](oefeningen/_coach/_prompt.md).
  Pas je daar iets aan, dan verandert het bij alle oefeningen.
- Datzelfde sjabloon bevat een samenvatting van het boeteblad
  ([content/B_appendix/boete.md](content/B_appendix/boete.md)): de coach beoordeelt de code van
  de student daar even streng op als een lector. Verandert er iets aan de boetes of aan de
  aftrek, pas het daar mee aan.
- Per hoofdstukmap één databestand, bv. [oefeningen/_coach/8_arrays.md](oefeningen/_coach/8_arrays.md):
  de leerstofgrens (wat de student al kent en wat nog niet) plus per oefening de bedoelde
  aanpak en de valkuilen. De titels daarin moeten overeenkomen met de titels op de pagina;
  de aanduiding `(*Essential*)` mag weg. Ontbreekt een oefening, dan krijgt ze geen knop en
  waarschuwt het script.
- De opgave zelf staat níét in dat bestand. [scripts/coach-prompt.mjs](scripts/coach-prompt.mjs)
  haalt ze na het renderen uit de HTML, knipt de oplossings-callouts eruit en zet de knop
  plus de gegevens in de pagina. De vormgeving zit in [oefeningen/oefeningen.scss](oefeningen/oefeningen.scss),
  de knop zelf werkt via de include [oefeningen/coach.html](oefeningen/coach.html).
- **De oplossing zit bewust niet in de prompt.** De student leest de tekst die hij plakt, dus
  alles wat erin staat is meteen weggegeven. Daarom draait het script in de CI ná
  [scripts/oplossingen-lock.mjs](scripts/oplossingen-lock.mjs): dan kan er geen oplossing meer in belanden.
- Enkel hoofdstukmappen met een databestand krijgen knoppen. Vandaag zijn dat de mappen van H1 tot en met H18. EindeTests en corona hebben er nog geen. Ook `9_klassen/intermezzoh9.md` niet: daar staan de oefeningen als `###`, en het script zoekt naar `#`.

Lokaal uitproberen: `quarto render oefeningen/` en daarna
`node scripts/coach-prompt.mjs build/oefeningen`. Het script is idempotent.

## Opmaak van de oefeningenpagina's

Op de hoofdstukpagina's (de mappen `1_intro` tot en met `18_bestandsverwerken`) staat elke
oefening ingeklapt in een lijst, met een vinkje "gedaan" en een knoppenrij Coach / Les /
Oplossing onder de opgave. Dat gebeurt in de browser door [oefeningen/opmaak.html](oefeningen/opmaak.html),
dus lokaal renderen ziet er hetzelfde uit als online. De vormgeving zit in
[oefeningen/oefeningen.scss](oefeningen/oefeningen.scss).

- De bron blijft zoals ze was: `#` per oefening, en de callouts `Oplossing` en
  `Les(sen) uit deze oefening`. Die twee worden op hun plaats knoppen met een paneel eronder.
- `(*Essential*)`, `(*Final Essentials*)`, `(PRO)` en `(GPT)` achter een titel worden labels.
  Andere haakjes, zoals `(Methoden)`, blijven in de titel.
- Een pagina met minder dan twee `#`-koppen blijft zoals ze is (bv. `9_klassen/intermezzoh9.md`).
  Een callout die niet gesloten wordt, slikt de rest van de pagina in en geeft hetzelfde effect.
- Meldingen bovenaan een pagina horen samen in één blok `::: {.vooraf}` met een lijstje. Een
  waarschuwing daarin begint met `[Let op]{.let-op}`. Voorbeeld: [oefeningen/4_data/A_Practica.md](oefeningen/4_data/A_Practica.md).
- Callouts zijn op alle oefeningenpagina's rustig: geen gekleurde kopbalk, enkel een streepje
  links. Oranje is voor `callout-warning`, `-important` en `-caution`; rood enkel voor wat klikbaar is.

## Gotcha

**`build/` is volledig gitignored.** Er zit niets van in de repo, ook de pdf van het handboek niet: `git ls-files build/` geeft niets terug. Let wel op iets anders: een `quarto render` op één hoofdstukbestand van het boek maakt `build/` eerst helemaal leeg en bouwt daarna het volledige boek opnieuw. Wil je snel iets nakijken, render dan het subproject (bv. `quarto render oefeningen/`) of werk in [boekPrintTest/](boekPrintTest/).

## Schrijfstijl & content-conventies

- Taal: **Nederlands** (informeel, je-vorm, vlaams/belgisch).
- **Geen em-dashes (—).** Tim wil ze nergens: niet in de cursustekst, niet in chat. Gebruik in de plaats een gewoon koppel-/liggend streepje (`-`), een dubbele punt, haakjes of gewoon een nieuwe zin.
- Bestanden zijn `.md` of `.qmd`; in Quarto gedragen die zich nagenoeg gelijk.
- Callouts via Quarto-syntax (`:::{.callout-important}` etc.).
- **Nog geen nullables (`string?`, `int?`, ...) gebruiken** in de cursustekst. Nullable reference types worden bewust pas later geïntroduceerd; schrijf in de vroege hoofdstukken gewone types (bv. `string result = Console.ReadLine();`).
- **Terminologie: gebruik "instantievariabelen", niet "velden"** (`fields`). Dit is de term die doorheen het hele boek consistent gehanteerd wordt.
- Hoofdstukken eindigen meestal op een `kennisclips.md` met video-embeds.
- Coding guidelines voor studenten staan onder [content/B_appendix/boetes/](content/B_appendix/boetes/) ("boetes" = puntenaftrek).

### Anti-AI-stijl (belangrijk, Tim leest hierop na)

De tekst moet klinken als Tim die het uitlegt, niet als een chatbot die een vergelijking netjes inpakt. Vermijd daarom expliciet:

- **Geen samenvattende "wijze" slotzin** onder een callout of vergelijking. Stop na het laatste codevoorbeeld of na de feitelijke uitleg. Een callout hoeft geen moraal.
- **Geen tel-formules** zoals "Drie talen, hetzelfde idee, telkens een andere naam" of "Dezelfde gedachte in drie talen". De lezer ziet de codeblokken zelf staan; tellen voegt niets toe.
- **Geen symmetrische antithese** als afsluiter, type "Python kiest gemak, C# kiest zekerheid" / "Het keyword verschilt, de gedachte niet" / "X checkt streng, Y pas tijdens de uitvoer". Die spiegelzinnen klinken als een quote-card. Schrijf concreet wat er gebeurt, of laat het weg.
- **Geen grootse rhetoriek** ("de ontwikkelaar van morgen", "moderne talen convergeren"). Houd het nuchter en praktisch.
- **Vetgedrukte taalnamen** (`**Python**`) hooguit één keer per callout, bij de eerste vermelding; daarna gewoon plat.
- Test voor een slotzin: voegt hij een *feit* toe? Zo nee, schrappen. Een vergelijking mag gerust droog en onafgewerkt eindigen.

## Niet aanraken zonder reden

- `_quarto.yml` (root + per subproject) — paden zijn handmatig onderhouden, een mapnaam veranderen breekt de hele sidebar.
- `.quarto/idx/**.json` — caches; staan in `git status` modified maar zijn build-artefacten.
- `site_libs/` — door Quarto gegenereerd.

## Afbeeldingen moderniseren (Excalidraw-stijl)

Lopend project: de bestaande schematische afbeeldingen omzetten naar een hand-drawn,
speelse stijl in de huisstijlkleuren. We doen dit **hoofdstuk per hoofdstuk**.

**De volledige werkwijze, de API en de checklist staan in de skill
[`afbeelding`](.claude/skills/afbeelding/SKILL.md).** Gebruik die skill telkens er een
figuur getekend of hertekend moet worden. De harde regels, ook als de skill niet geladen is:

1. Per hoofdstuk **eerst aan Tim vragen** welke afbeelding(en) we aanpakken. Niet zelf kiezen.
2. De nieuwe afbeelding **niet** in het boek verwerken. Tim bekijkt eerst alles zelf.
3. Per afbeelding blijven **drie** bestanden bewaard: de PNG naast het origineel (suffix
   `NEW` als ze een bestaande figuur vervangt, `Alternatief` voor een vrijere variant), en
   de SVG plus het generatorscript in de submap `imagegen/`.
4. **Geen titel** boven de afbeelding, **tekst overlapt nooit** met lijnen of pijlen, en
   **verzin niets** dat niet in het origineel staat.
5. De stijl zelf (rough.js, font Caveat, de kleuren uit [_brand.yml](_brand.yml)) ligt vast
   en wijzigt niet zonder Tim.

Referentie-implementatie: [content/assets/5_arrays/imagegen/](content/assets/5_arrays/imagegen/).
De nieuwste gedeelde stijl-helpers staan in `content/assets/6_klassen/imagegen/excal.js`.

## Toekomst ideeen

* Ziescherpst teksten (linq) itegrereren
* "Zoek de chatgpt fout": cursus meer AI futureproof maken (i.E. minder "code schrijven", "meer code lezen/begrijpen")