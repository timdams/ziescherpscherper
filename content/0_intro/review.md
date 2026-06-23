# Review: De eerste stappen

> Interne didactische review - niet bedoeld voor publicatie. Bekijk per sectie of de feedback nog actueel is.

> **Status editie 5** (verwerkt op 2026-06-11). Markering per punt:
> `[v]` gedaan · `[~]` deels of aangepast aan een stijlkeuze · `[c]` als verborgen TODO-comment in de tekst gezet · `[>]` bewust uitgesteld (oefeningen of Future). De **Future**-sectie en de mini-oefeningen zijn nog niet aangepakt.

## Sterktes

- De openingstoon in [0_intrototcs.md](0_intrototcs.md) ("vloek gerust af en toe", de berg-metafoor) zet meteen een lage drempel. Voor eerstejaars zonder ervaring is dit goud waard.
- Het fiets-pomp-algoritme (regel 49-55 in [0_intrototcs.md](0_intrototcs.md)) is concreet en blijft hangen. Idem de "ondubbelzinnig / woordenschat / grammatica"-driedeling — dat geeft een mentaal raster om later op terug te grijpen.
- De volgorde [1_killai.md](1_killai.md) vroeg in het hoofdstuk plaatsen is verstandig. De "zakrekenmachine"-analogie is sterk en de instructie om Copilot uit te zetten is concreet (klikbare stappen).
- [4_fouten.md](4_fouten.md) lijst de top-5 beginnersfouten op (puntkomma, schrijffouten, hoofdlettergevoeligheid, accolades, code op verkeerde plek). Dat is precies wat eerstejaars moeten leren herkennen.
- De waarschuwing in [4_fouten.md](4_fouten.md) bij de "Yes / Don't show again"-dialog is zeer terecht — dit is een klassieke beginnersval die uren debuggen kost.

## Zwaktes

- `[v]` [0_intrototcs.md](0_intrototcs.md) sectie "Nummering en naamgeving van C#" is **gedateerd**: het boek staat als .NET 6 / C# 10 vermeld, maar [1_werkenmetvs.md](1_werkenmetvs.md) noemt dan weer "Visual Studio 2026". Dat is inconsistent, en .NET 6 is sinds november 2024 end-of-life. Zelfde verhaal: voetnoot 78 verwijst naar `docs.microsoft.com` zonder `https://` en zonder werkende link-syntax. **(versie-sectie generiek gemaakt naar "meest recente LTS-versie"; voetnoot-link gefixt naar https learn.microsoft.com. VS 2026 onveranderd: in 2026 plausibel correct.)**
- `[~]` De sprong van [2_firstprogram.md](2_firstprogram.md) naar het volledige `namespace`/`class`/`Main`-blok is groot. Je verklaart het bewust later (H7-H10), maar voor een eerstejaars staan er meteen 4 mysterieuze keywords: `namespace`, `internal`, `class`, `static void`, `string[] args`. De "diep in het zwembad"-callout helpt, maar het blijft veel ruis. Ironisch genoeg zou top-level statements hier didactisch net wél geschikt zijn - je sluit dat actief uit. **(harde callout "Voorlopig negeren!" toegevoegd. Top-level statements blijven bewust uitgesloten - dat is een grotere keuze, zie Future.)**
- `[v]` [3_console.md](3_console.md) introduceert `string result;` op een aparte regel en pas dan `result = Console.ReadLine();`. Dat is geen idiomatisch C# meer en breekt later met wat in [1b_variabelen.md](../1_csharpbasics/1b_variabelen.md) als beste praktijk wordt aangeraden ("declareer met beginwaarde"). Dezelfde inconsistentie zit in de "Meer input vragen"-sectie. **(beide secties naar moderne 1-lijnstijl `string result = Console.ReadLine();`.)**
- `[>]` `Console.ReadLine()` retourneert sinds C# 8 een **nullable** `string?`. Studenten krijgen vermoedelijk een waarschuwing in VS bij `string result; result = Console.ReadLine();`. Dat wordt nergens benoemd. **(bewust NIET: nullables worden in deze editie nog niet geïntroduceerd, zie CLAUDE.md. De gele waarschuwing blijft dus, net als voorheen.)**
- `[v]` Het blokje over de "+"-operator in [3_console.md](3_console.md) (sectie "Zinnen aan elkaar plakken") leert iets dat in het volgende hoofdstuk meteen wordt opgevolgd door string interpolation als "moderne aanpak". Waarom hier niet meteen interpolation tonen? **(vooruitwijzing-callout naar string interpolation toegevoegd; de `+`-operator blijft als eerste, eenvoudige stap.)**

## Onduidelijkheden

- `[v]` [0_intrototcs.md](0_intrototcs.md) regel 19: typfout "computer-applicaties" / inconsistente koppelteken-stijl door het hoofdstuk heen. **(typfout gefixt naar "computerapplicaties".)**
- `[v]` [2_firstprogram.md](2_firstprogram.md) regel 80-86 ("Analyse van de code") gebruikt lijnnummers die niet overeenkomen met de getoonde code-snippet (10 lijnen vermeld, snippet heeft er 11 incl. lege regels). Een eerstejaars gaat tellen en raakt in de war. **(accolade-lijnnummers gecorrigeerd naar 2, 4, 6 en 9, 10, 11.)**
- `[v]` [3_console.md](3_console.md) "Aanhalingsteken of niet?": je gebruikt plots `Console.Write` terwijl het voorbeeld erboven over `WriteLine` gaat. Niet verkeerd, wel verwarrend zonder expliciete toelichting van de switch. **(consistent gemaakt: nu `Console.WriteLine` zoals het opgebouwde programma.)**
- `[v]` [3_console.md](3_console.md) sectie "Opletten met spaties" gebruikt liggende streepjes om spaties te visualiseren, maar de syntax met `_)` in de code maakt het zelf op het eerste zicht lijken op een fout. Voeg in de begeleidende tekst expliciet toe: "deze _ stelt enkel visueel een spatie voor - typ ze niet over". **(expliciete waarschuwing toegevoegd in de begeleidende tekst.)**
- `[v]` [5_kleuren.md](5_kleuren.md) callout met kleurenlijst mist `White`. Dat is mogelijk gewoon vergeten (er zijn 16 ConsoleColors). **(`White` toegevoegd aan de lijst.)**

## Gemissen

- `[v]` Geen woord over **comments** in dit hoofdstuk, terwijl ze in code-voorbeelden wel verschijnen ([3_console.md:207](3_console.md)). Gevolg: studenten zien `//` zonder uitleg. Comments staan pas in [1_csharpbasics/0_csharpessentials.md](../1_csharpbasics/0_csharpessentials.md). **(TODO-comment geplaatst in 3_console.md.)**
- `[>]` Geen oefening of "probeer dit zelf"-blok aan het einde. De link naar gitbook-oefeningen in [kennisclips.md](kennisclips.md) volstaat, maar één concrete mini-opdracht in het hoofdstuk zelf zou de stof verankeren. **(uitgesteld: oefeningen pakken we later aan. TODO-comment in 5_kleuren.md.)**
- `[c]` De **VS shortcut-tip** voor `cw[tab][tab]` staat in [3_console.md](3_console.md), maar het broertje `prop[tab][tab]` en de algemene "code snippet"-cultuur (en hoe je ze opzoekt via Tools - Code Snippets Manager) ontbreekt. **(TODO-comment geplaatst in 3_console.md.)**
- `[c]` Waar staat de uitleg van **debugging** (breakpoints, F10, F11)? Een eerstejaars moet leren stappen door code, dat hoort hier al kort vermeld te worden - al was het maar een teaser. **(TODO-comments geplaatst in 4_fouten.md en 3_console.md.)**
- `[c]` Geen mention van **VS Code + C# Dev Kit** als alternatief, terwijl Mac-studenten daar volgens [1_werkenmetvs.md](1_werkenmetvs.md) op aangewezen zijn. **(TODO-comment geplaatst in 1_werkenmetvs.md.)**

## Concrete suggesties

1. `[v]` Maak in [0_intrototcs.md](0_intrototcs.md) de versie-sectie generiek: vervang ".NET 6" en "C# 10" door ".NET 8 (LTS)" of "de meest recente LTS-versie" en verwijs voor exacte versies naar een appendix. Zo veroudert de tekst minder snel. **(gedaan: generiek naar "meest recente LTS-versie".)**
2. `[~]` In [1_werkenmetvs.md](1_werkenmetvs.md) staat "Visual Studio 2026" - controleer of dit klopt of een typfout is voor 2022/2024. **(onveranderd gelaten: we zitten in 2026 en het staat consistent door de tekst, dus plausibel correct. Te bevestigen door Tim.)**
3. `[~]` Herschrijf in [3_console.md](3_console.md) de eerste `ReadLine`-introductie naar de moderne stijl en noem expliciet de `?`:
   ```java
   Console.WriteLine("Geef je naam:");
   string? naam = Console.ReadLine();  //ReadLine kan null teruggeven
   ```
   En leg dan uit waarom we voorlopig dat `?` mogen negeren maar dat het later terugkomt. **(moderne 1-lijnstijl gedaan, maar ZONDER `?`: nullables worden in deze editie nog niet geïntroduceerd.)**
4. `[v]` Voeg in [2_firstprogram.md](2_firstprogram.md) een korte expliciete callout toe: *"De keywords `namespace`, `class`, `static void Main` lijken nu mysterieus. Negeer ze. Schrijf enkel binnen de Main-accolades. We komen er in H7-H10 op terug."* Dat staat er nu impliciet, maak het hard. **(callout "Voorlopig negeren!" toegevoegd.)**
5. `[>]` Voeg een mini-oefening toe aan het einde van [5_kleuren.md](5_kleuren.md): "schrijf een programma dat 'Error' in het rood toont, dan resetcolor, dan 'OK' in het groen". Eerstejaars hebben succeservaringen nodig per hoofdstuk. **(uitgesteld: oefeningen later. TODO-comment geplaatst.)**
6. `[v]` Voor [1_killai.md](1_killai.md): voeg een datum toe aan de UI-screenshots ("VS 17.x, screenshot uit ...") of een waarschuwing dat de menu's regelmatig veranderen. De huidige screenshots verouderen snel. **(callout-waarschuwing toegevoegd dat screenshots/menu's snel veranderen.)**

---

> **Future: nog niet aangepakt.** Onderstaande ideeën zijn bewust uitgesteld (afspraak: future-gedeelte komt later).

## Future — ideeën voor de nieuwe editie

> Aanknopingspunten bij dit hoofdstuk voor de toekomstvisie uit [../../future/hoe.md](../../future/hoe.md). Bouwt voort op wat hierboven al opgemerkt is.

### Code Literacy — drie oefentypes
- **Wat doet dit?** — geef het volledige `namespace`/`class`/`Main`-blok uit [2_firstprogram.md](2_firstprogram.md) en laat student lijn per lijn benoemen wat *vermoedelijk* gebeurt zonder iets te kunnen draaien. Sluit aan bij de Zwakte-opmerking dat 4 keywords mysterieus zijn — dit *maakt* dat mysterie tot leerstof.
- **Klopt dit?** — Steven levert een Hello World aan met `Console.Writeline("hallo");` (kleine W) en een ontbrekende `;`. Student moet beide klassieke beginnersfouten uit [4_fouten.md](4_fouten.md) zelf vinden, zonder de compiler.
- **Welke is beter?** — top-level statements vs. klassiek `Main`-blok naast elkaar. Sluit aan bij de Zwakte-opmerking ("ironisch genoeg zou top-level statements hier didactisch wél geschikt zijn").

### Stagiair Steven
- Steven die zijn allereerste programma in [2_firstprogram.md](2_firstprogram.md) inlevert — perfecte introductie van het personage: hij maakt exact de top-5 fouten uit [4_fouten.md](4_fouten.md). Zo introduceer je tegelijk Steven en de typische beginnersvallen.
- In [5_kleuren.md](5_kleuren.md): Steven vergeet `ResetColor()` aan het einde van zijn programma — terminal blijft rood na afsluiten. Klassieker.

### Hall of Shame
- Genre voor dit hoofdstuk: AI die nog steeds `Console.WriteLine` zonder `using System;` genereert (terwijl moderne templates impliciete usings hebben), of die de `string[] args`-handtekening voorstelt terwijl de student top-level statements gebruikt. Verwarrende output van AI die door elkaar Visual Studio-versies aanneemt.

### Interview-suggestie
- Een **junior developer 6 maanden in dienst** die vertelt over zijn eerste werkdag: welke "domme" beginnersfouten maakte hij in zijn eerste pull request? Sluit perfect bij de drempel-verlagende toon van [0_intrototcs.md](0_intrototcs.md). Vraag expliciet: "wat heeft je IDE je geleerd dat je opleiding niet had verteld?"

### Code-archeologie (oermens)
- Evolutie Hello World: C# 1.0 (`using System; namespace ... class Program ... static void Main(string[] args) { Console.WriteLine("..."); }`) → C# 6 (impliciete usings nog niet) → C# 9 (top-level statements) → C# 10+ (impliciete usings). Eén pagina met vier varianten. Direct nut: AI levert nog vaak C# 1.0-stijl Hello Worlds — nu kan de student dat herkennen als verouderd.

### Lees-volgorde-pijlen
- Het volledige `namespace`/`class`/`Main`-blok in [2_firstprogram.md](2_firstprogram.md) (regel 80-86, "Analyse van de code") schreeuwt om genummerde pijlen: 1=`namespace`, 2=`class`, 3=`Main`, 4=eigenlijke statement. Lost meteen de Onduidelijkheid op dat de lijnnummers niet kloppen.

### Taalkeuze-callout
- In [2_firstprogram.md](2_firstprogram.md) bij Hello World: 1-regels-callout *"Python: `print('hallo')`. JavaScript: `console.log('hallo')`. C# heeft méér ceremonie omdat het een gecompileerde, sterk getypeerde taal is — die ceremonie krijgt later betekenis."* Verlaagt drempel én positioneert C# meteen.
