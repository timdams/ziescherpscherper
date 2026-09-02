---
name: mermaid-pdf
description: Render een markdown- of qmd-bestand met mermaid-diagrammen naar pdf of docx met Quarto, zonder dat de diagrammen als broncode, afgekapt of onleesbaar klein in de output belanden. Gebruik dit bij elke vraag om zo'n bestand te renderen, te printen of om te zetten, en zodra een gerenderd diagram als codeblok verschijnt, onderaan afgesneden is, of te klein staat om te lezen.
---

# Mermaid naar pdf

In html rendert mermaid vanzelf. In pdf niet, en dat merk je pas als je kijkt. Alles hieronder gaat
over dat verschil.

## Kort

```bash
python .claude/skills/mermaid-pdf/assets/md-naar-pdf.py <bestand.md>
```

De pdf komt naast het bronbestand te staan. Optioneel: `--subtitle`, `--author`, `--uit`.

Daarna **kijk je naar de pagina's met de Read tool**. Loop de
[checklist](references/checklist.md) af. Geen enkele van de valkuilen hieronder geeft een
foutmelding, dus je moet echt kijken.

## De vier valkuilen

| Wat je ziet | Waarom | Wat het oplost |
|---|---|---|
| de mermaid-broncode staat als codeblok in de pdf | Quarto maakt alleen van een `{mermaid}`-cel een figuur | plain ```` ```mermaid ```` omzetten naar ```` ```{mermaid} ```` |
| het diagram is onderaan afgekapt | Chrome fotografeert de svg op zijn layoutmaat, en die klopt niet bij een lange boom | `useMaxWidth: false` |
| typst weigert: `failed to parse SVG (found closing tag 'p' instead of 'br')` | mermaid zet zijn labels als html in een `foreignObject` | `htmlLabels: false`, op twee plaatsen |
| het diagram loopt van de pagina af | mermaid levert een figuur op ware grootte, en dat is groot | elke figuur op de pagina passen |

De init-regel die de tweede en de derde afhandelt, komt bovenaan elke cel:

```
%%{init: {'htmlLabels': false, 'flowchart': {'htmlLabels': false, 'useMaxWidth': false,
  'rankSpacing': 22, 'nodeSpacing': 18, 'padding': 4}}}%%
```

`htmlLabels` staat er twee keer. Zet je hem alleen onder `flowchart`, dan volgen de kantlabels wel en
de knooplabels niet, en typst weigert nog altijd.

**Laat de bron met plain fences staan.** GitHub en de editorpreview renderen `​```mermaid`, en
`​```{mermaid}` niet. Het script doet die omzetting bij het renderen.

## TD of LR

Een boom met veel takken uit één knoop wordt in `flowchart TD` onbruikbaar breed. Gemeten op de
bomen van deze repo, met de schaal die nodig is om op A4 te passen en de lettergrootte die daaruit
volgt:

| Boom | TD | LR | LR met krappe afstanden |
|---|---|---|---|
| tien takken uit één knoop | 78 x 12 cm, 3,9pt | 19 x 39 cm, 7,8pt | 16 x 26 cm, **11,8pt** |
| acht takken uit één knoop | 57 x 22 cm, 5,4pt | 29 x 38 cm, 7,0pt | 25 x 29 cm, **8,0pt** |

**Meer dan vier takken uit één knoop: zet die boom op LR.** Dat is ook in de editorpreview beter, dus
het hoort in de bron en niet in het renderscript.

Bij LR staan de takken onder elkaar en botsen hun kantlabels. Het script zet `nodeSpacing` daarom op
45 voor een LR-boom en op 18 voor een TD-boom.

## Een spil die niet past

Een verticale keten van tien vragen past niet op A4, en ruiten maken het erger: die zijn ongeveer
twee keer zo hoog als hun tekst. De hoofdroute uit `_tweedeAttempt/BESLISSINGSBOOM.MD` is 28 x 74 cm.
Op A4 geperst geeft dat 4,2pt.

Wat er gemeten is en wat het opleverde:

| Ingreep | Resultaat |
|---|---|
| labels inkorten | 5,6pt |
| de waaier bovenaan eruit | 5,2pt |
| krappere afstanden | 5,1pt |
| de boom in tweeën splitsen | 9,1 en 10,2pt |
| een eigen uitvouwpagina | 7,4pt, en de boom blijft één geheel |

Splitsen is inhoudelijk werk: **vraag het aan Tim**, doe het niet zelf. Het script kiest ondertussen
de uitvouwpagina: een pagina zo breed als A4 en zo hoog als de figuur. Dat leest op scherm en het
vraagt geen wijziging aan de tekst.

## Eerst meten, dan kiezen

Wil je weten hoe groot een diagram wordt voor je iets beslist, render dan met `keep-typ: true` en
lees de maten uit de typst. Ze staan in document-volgorde, de bestandsnamen niet.

```bash
quarto render meet.qmd --to typst
grep -o 'image("[^"]*", height: [0-9.]*in, width: [0-9.]*in)' meet.typ
```

Tekstvlak op A4 bij 2 cm marge: 6,69 x 9,60 inch. De schaal is `min(6.69/breedte, 9.60/hoogte)`, en
de lettergrootte die je overhoudt is `16 x schaal x 0,75` punt. Onder 0,55 schaal (ongeveer 6,5pt)
is een diagram niet meer te lezen en hoort het op een eigen pagina.

Zet varianten in **één qmd onder elkaar** en render één keer. Vier varianten van vier bomen kostte zo
één render in plaats van zestien.

## Waar dit niet over gaat

- **html.** Daar worden allebei de fence-vormen een `<pre class="mermaid">` en laadt Quarto
  `mermaid.min.js`, dus het diagram rendert in de browser. Niets uit deze skill is daar nodig.
- **docx.** Dezelfde `{mermaid}`-eis geldt, en dezelfde crop. Het passen op de pagina werkt anders,
  want daar zet Quarto geen typst-box.
- **de figuren van de cursus zelf.** Die worden getekend met de skill
  [`afbeelding`](../afbeelding/SKILL.md), niet met mermaid.
