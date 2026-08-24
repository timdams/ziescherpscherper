---
name: afbeelding
description: Maak of herteken een afbeelding, tekening, schema, figuur of illustratie voor het boek Zie Scherp Scherper in de hand-drawn Excalidraw-stijl (rough.js + Caveat, AP-kleuren). Gebruik dit bij elke vraag om een figuur te tekenen, een bestaande afbeelding in content/assets/ te moderniseren, of een generatorscript in een imagegen/-map aan te passen.
---

# Afbeelding maken (Excalidraw-stijl)

Afbeeldingen worden niet met de hand getekend maar **gegenereerd met een Node-script** dat
rough.js gebruikt. Elk script blijft bewaard zodat een figuur later bijgestuurd kan worden
zonder van nul te beginnen.

## Werkwijze

### 1. Weten wat je tekent

- Tim noemt de afbeelding meestal zelf. Doet hij dat niet en gaat het over een heel
  hoofdstuk: **vraag eerst welke afbeelding(en)**. Nooit zelf kiezen.
- Bij het moderniseren van een bestaande figuur: zoek het origineel op
  (`content/<hoofdstuk>/*.md` verwijst naar `../assets/<hoofdstuk>/<naam>.png`) en
  **bekijk die PNG met de Read tool**. Je zet om wat er staat, je verzint niets bij.

### 2. De imagegen-map klaarzetten

Elke assets-map heeft een eigen `imagegen/`-submap met een kopie van de stijl-helpers:

```bash
cd content/assets/<hoofdstuk>
ls imagegen/            # bestaat die al? dan ben je klaar
mkdir -p imagegen && cp ../6_klassen/imagegen/{excal.js,caveat-400.ttf,caveat-700.ttf} imagegen/
```

Kopieer altijd uit `6_klassen/imagegen/`: dat is de nieuwste `excal.js` (die met `txtSegs`).

De npm-packages staan in `node_modules/` in de **repo-root** (gitignored). Ontbreken ze:

```bash
npm i roughjs jsdom @fontsource/caveat @resvg/resvg-js     # in de repo-root
```

### 3. Het script schrijven

Start van `assets/sjabloon.js` in deze skill. De volledige API staat in
[references/api.md](references/api.md). Kijk eerst of er al een helper bestaat die past
(codebox, geheugenvakje, stack/heap-regio, ...); die lijst staat ook in api.md.
Hergebruik of kopieer die helper in plaats van hem opnieuw te schrijven.

Canvas: breedte 900 tot 2300, hoogte in verhouding. Coordinaten zijn absoluut, dus reken
posities uit in plaats van te gokken.

### 4. Renderen

Het script schrijft de SVG naar de **cwd** en de PNG een map hoger. Draai het dus altijd
vanuit de imagegen-map zelf:

```bash
cd content/assets/<hoofdstuk>/imagegen && node <naam>.js
```

### 5. Nakijken (niet overslaan)

**Bekijk de gerenderde PNG met de Read tool.** rough.js geeft geen foutmelding bij lelijke
output, dus je moet echt kijken. Loop de checklist in
[references/checklist.md](references/checklist.md) af, corrigeer het script en render
opnieuw tot het klopt.

### 6. Opleveren

- **Verwerk de afbeelding niet in het boek.** Geen `.md` aanpassen. Tim bekijkt eerst zelf.
- Stuur de PNG naar Tim met SendUserFile (`display: "render"`) en vermeld het pad.

## Naamgeving

Drie bestanden per afbeelding:

| Bestand | Plaats |
|---|---|
| `<naam>.js` | `content/assets/<hoofdstuk>/imagegen/` |
| `<naam>.svg` | `content/assets/<hoofdstuk>/imagegen/` |
| PNG | `content/assets/<hoofdstuk>/` (naast het origineel) |

De PNG-naam hangt af van wat je maakt (derde argument van `c.save`):

- vervangt een bestaand `intro.png` -> `introNEW.png` : `c.save('.', 'intro', 'NEW')`
- volledig nieuwe figuur, geen origineel -> `intro.png` : `c.save('.', 'intro', '')`
- vrijere conceptuele variant naast het origineel -> `introAlternatief.png` :
  `c.save('.', 'introAlternatief', '')`

Een `Alternatief` is een vrijere variant met een sterkere metafoor in plaats van het
originele schema. Ze vervangt niets: Tim bekijkt ze los naast de 1-op-1 omzetting.

## Inhoudsregels (vast)

- **Geen titel boven de afbeelding.** Het bijschrift staat al onder de figuur in de cursus.
  Labels die in het origineel deel uitmaken van het schema (bv. een notitie rechtsboven)
  blijven staan waar ze stonden, niet als kop bovenaan.
- **Tekst overlapt nooit** met de lijn van een box of met een pijl. Houd labels buiten de
  pijllijn en laat pijlpunten kort voor het label stoppen.
- **Verzin niets extra.** Enkel omzetten wat in het origineel staat: geen extra elementen,
  iconen of tekst.
- **Code binnen accolades springt in.** In een `codebox` krijgen regels tussen `{` en `}`
  een `indent`, bv. `{ t: 'Merk = merk;', indent: 30 }`.
- Taal: Nederlands, en **geen em-dashes** in labels of bijschriften.

## Stijl (niet wijzigen zonder Tim)

- Hand-drawn via rough.js, handgeschreven font Caveat (base64 ingebed in de SVG).
- Kleuren komen uit `_brand.yml` en staan als constanten in `excal.js` (`C.RED`,
  `C.RED_DARK`, `C.RED_LIGHT`, `C.GRAY`, `C.OFFWHITE`). Gebruik geen losse hex-waarden
  tenzij je een bestaande figuur nadoet die al een eigen kleur heeft (stack/heap).
- `roughness` 1.4 tot 1.6, `bowing` 1 tot 1.5, `strokeWidth` 2 tot 3, `hachure`-vulling
  voor accentvakjes, `solid` voor witte vlakken. De defaults in `excal.js` zitten al goed.
