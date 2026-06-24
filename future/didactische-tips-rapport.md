# Didactische codeblok-tips: waar toepassen in de content?

Korte scan van `content/` (153 bestanden, ~710 C#-codeblokken) met per tip
de plekken waar het didactisch loont, en even goed waar niet. De pilot is al
toegepast in twee hoofdstukken (zie onderaan).

## Twee technische randvoorwaarden vooraf

1. **Codeblokken staan nu als ` ```java `.** Dat blijft prima voor de
   highlighting, maar `filename`, `code-line-numbers` en code-annotaties
   vragen de accolade-vorm: ` ```{.java filename="Student.cs"} `. Je hoeft dus
   enkel de openingsfence aan te passen waar je een feature toevoegt, niet alle
   710 blokken.
2. **Let op bij het bewerken via een editor die op de Koofr-map sync't:** grote
   herschrijvingen kunnen een halve write opleveren (afgekapt bestand,
   CRLF-regeleindes). Werk bij voorkeur lokaal en commit in kleine stappen.

## Tip per tip

### 1. Bestandsnaam-header (`filename="Student.cs"`)

Loont waar code uit **meerdere klassen of bestanden** komt, of waar het verschil
tussen top-level `Program.cs` en een klassebestand verwarrend is. Werkt ook in
PDF (naam in het vet boven het blok).

Sterke kandidaten (bestanden met 3+ klassedefinities):

| Bestand | Waarom |
|---|---|
| `10_advancedklassen/2_overloadedconstructor.md` | meerdere constructors, zelfde klasse over verschillende blokken |
| `12_overerving/3_constructors_inheritance.md` | parent- en child-klasse door elkaar |
| `13_advancedovererving/5_abstract.md` | abstracte basis + concrete childs |
| `10_advancedklassen/5_static.md` | static vs instance in aparte blokken |
| `8_klassen/0c_simpleobjects.md`, `8_klassen/2_properties.md` | klasse-definitie vs gebruik in `Program.cs` |
| `15_polymorfisme/polypraktijd.md`, `11_arraysvanklassen/7_arraysvanobj.md` | lijst van objecten van diverse klassen |

Niet doen bij losse snippets van een paar regels of bij talen-vergelijkingen:
daar voegt een bestandsnaam niets toe.

### 2. Relevante lijnen accentueren

Belangrijk: `code-line-numbers="5-7"` om een **subset** lijnen op te lichten is
een **revealjs/slides**-feature. In het HTML-book doet dat niets (zonder de
externe `line-highlight`-extensie toont het hooguit lijnnummers). Voor de slides
is dit dus wel meteen bruikbaar; voor het book niet.

In het book gebruik je in de plaats **code-annotaties** (tip 5): die lichten de
betrokken lijn op als je op het nummer klikt. Voor "toon de hele klasse,
accentueer wat veranderde" (override-voorbeelden) is dat het native equivalent.
Wil je toch echte line-highlighting in het book, dan moet de extensie
`shafayetShafee/line-highlight` erbij (attribuut `source-line-numbers="5-7"`).

Beste plekken (override- en refactor-voorbeelden waar de hele klasse zichtbaar
blijft): `12_overerving/1_virtual_override.md`, `13_advancedovererving/4_System_Object.md`,
`18_IsAs/6_equals.md`, `13_advancedovererving/5_abstract.md`.

### 3. "Verwacht resultaat"-blok (terminal-stijl)

Nu wordt output getoond als een gewoon ` ```text `-blok (53 stuks). Een
gestileerd terminalvenster (zwart, console-groen, labelbalk "Verwacht
resultaat") nodigt studenten uit om eerst te voorspellen. De CSS staat klaar in
`custom.scss`; je activeert het door het tekstblok in een `::: {.console}` te
wikkelen:

    ::: {.console}
    ```text
    Het vliegtuig vliegt door de wolken.
    De raket verdwijnt in de ruimte.
    ```
    :::

Loont overal waar je nu een uitvoer toont en de output **voorspelbaar en
leerzaam** is. 66 bestanden bevatten "uitvoer"/"op het scherm". Topkandidaten:
de vroege hoofdstukken waar voorspellen het meeste leereffect heeft
(`0_intro/3_console.md`, `4_beslissingen/0_if.md`, `5_herhalingen/*`,
`6_methoden/0_intromethods.md`, `7_arrays/1_ArraysBasics.md`).

Niet elk `text`-blok hoeft dit: bij tussenresultaten of foutmeldingen kan een
gewoon blok rustiger zijn. Houd het terminalvenster voor de "ta-da"-momenten.

### 4. Diff-blokken bij refactorings

Een ` ```diff `-blok (rood `-` / groen `+`) is ideaal waar de tekst een
"voor/na" toont. Sterke kandidaten:

- `18_IsAs/6_equals.md`: de stapsgewijze verbetering van `Equals` (harde cast ->
  `is`/`as` -> pattern matching). Per stap een diff maakt het verschil scherp.
- `13_advancedovererving/4_System_Object.md`: geerfde `ToString` vs override
  (al toegepast in de pilot).
- `B_appendix/6_exprbody.md`: klassieke methode vs expression-bodied (`=>`).
- `B_appendix/boetes/redundant.md`: net het soort "schrap dit" dat als diff leest.

Let op: een diff toont *verandering*, geen lopende code die je kan kopieren.
Gebruik het naast (niet in plaats van) het echte codeblok.

### 5. Geannoteerde code (cijfertjes, Rust-book-stijl)

Quarto ondersteunt dit native: `// <1>` achter een lijn, met daaronder een
genummerde lijst. Werkt in HTML (klik op nummer licht de lijn op) en in PDF.
Dit is meteen je vervanging voor tip 2 in het book.

Beste plekken: net die blokken waar een paar lijnen uitleg vragen zonder de
lopende tekst te onderbreken. Denk aan `Equals`/`GetHashCode`/`ToString`
(`13_advancedovererving/4_System_Object.md`, `18_IsAs/6_equals.md`), het
`is`-pattern in `18_IsAs/1_IsAs.md`, constructors in
`10_advancedklassen/2_overloadedconstructor.md`, en `try/catch`-structuur in
`20_exceptions/0_exceptionhandling.md`.

Niet overdrijven: meer dan 3 a 4 annotaties per blok wordt rommelig. Voor losse
regeluitleg blijft een gewone zin eronder vaak rustiger.

### 6. Tabset (`::: {.panel-tabset}`)

Twee goede toepassingen:

- **Naief vs idiomatisch**, precies jouw voorbeeld: oude `GetHashCode` met XOR
  vs `HashCode.Combine` (toegepast in de pilot). Andere kandidaten: volledige
  property vs autoprop (`8_klassen/2_properties.md` + `autoprop.md`), klassieke
  `for` vs `foreach`, klassieke methode vs expression-bodied.
- **Talen naast elkaar** in de "Zie verder"-callouts. Nu staan Python/Java/JS
  blokken gestapeld; in tabs is dat compacter. Kandidaten: de Python+Java in
  `12_overerving/1_virtual_override.md`, de Python+Java+JS in `18_IsAs/6_equals.md`,
  en de vele andere "Zie verder"-callouts. Let op: in tabs verdwijnt de
  "In Python.../Ook Java..."-inleidende zin, dus dit vraagt een minimale
  herformulering van je prozatekst. In PDF stapelen tabs gewoon terug, dus geen
  risico daar.

Niet gebruiken voor een **progressie** die je stap voor stap uitlegt (zoals de
`Equals`-verbetering): tabs verbergen dan net de verhaallijn. Tabs zijn voor
gelijkwaardige alternatieven, niet voor opeenvolgende stappen.

### 7. Copy-button zichtbaarder

Site-breed, geen per-hoofdstuk werk. `code-copy: true` stond al aan, maar de
knop was lichtgrijs en pas zichtbaar bij hover. Aangepast in `custom.scss`: nu
altijd zichtbaar, met kadertje, rood bij hover en een groen vinkje na het
kopieren. Niets te doen in de content zelf.

## Wat ik al toepaste (pilot)

`custom.scss`: copy-button-styling + herbruikbare `.console` terminal-stijl.

`content/12_overerving/1_virtual_override.md`:
- `filename="Program.cs"` / `filename="Raket.cs"` op de codeblokken;
- code-annotatie op de `override`-regel;
- `::: {.console}` rond de uitvoer.

`content/13_advancedovererving/4_System_Object.md`:
- `filename` + twee annotaties op de `ToString`-override;
- een `diff`-blok geerfde vs eigen `ToString`;
- `::: {.console}` rond de output `Tim Dams (1981)`;
- een tabset "Vandaag: HashCode.Combine" vs "Vroeger: handmatig met XOR" bij
  `GetHashCode`.

Render lokaal met `quarto render .` om het resultaat te zien (de sandbox hier
heeft geen Quarto; de syntax is wel tegen de Quarto-docs gecheckt).

## Voorstel van volgorde

1. Site-breed eerst (copy-button + `.console`) staat al klaar: nu enkel nog de
   `text`-outputblokken in de vroege hoofdstukken in `::: {.console}` wikkelen.
2. Filename-headers uitrollen in de OOP-hoofdstukken (H9-H17), waar
   meerdere-klassen-voorbeelden de regel zijn.
3. Annotaties + diff selectief bij de override-, `Equals`- en
   exception-voorbeelden.
4. Tabsets voor de "Zie verder"-talenvergelijkingen, in een aparte pass omdat ze
   prozatekst raken.
