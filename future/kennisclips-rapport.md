# Kennisclips naast het boek

Opgesteld op 12 september 2026. De 106 Panopto-clips (plus 3 podcasts en 1 gist) uit de 18
`kennisclips.md`-bestanden naast de hoofdstukpagina's uit `_quarto.yml` gelegd, en naast wat er
sinds 1 juni 2026 in `content/` veranderde (`git diff` op de kopjes).

De clips zelf zijn niet bekeken. Het oordeel steunt op de titel, de opnamedatum en de huidige
boektekst. Wat onder "nakijken" of "mogelijk" staat, moet bij het taggen dus even gecontroleerd worden.

## Opnamedatum uit de link halen

Een Panopto-ID is een sequentiële GUID. De laatste 12 hex-tekens zijn een SQL Server-datum, waarvan
de eerste 4 het aantal dagen sinds 1 januari 1900 zijn. Voorbeeld: `...-ac33007cd2a6` geeft
`0xac33` = 44083 dagen = 11 september 2020. Dat klopt met de lesweken: H1 half september 2020,
H8 half oktober 2020.

```js
const dagen = parseInt(id.replace(/-/g, "").slice(-12, -8), 16);
const datum = new Date(Date.UTC(1900, 0, 1 + dagen));
```

| Jaar | Clips |
|------|-------|
| 2018-2019 | 2 |
| 2020 | 52 |
| 2021 | 26 |
| 2022 | 21 |
| 2024 | 2 (de twee "Properties anders uitgelegd") |
| 2026 | 3 (H18, 23 mei, gemaakt met A.I.) |

Het boek is sindsdien fors veranderd: "Zie verder" in elk hoofdstuk (juni 2026), Stagiair Steven
(juli), en de verbeterrun van H1 tot H8 (24 augustus - 4 september), waarbij H7 en H8 in nieuwe
pagina's zijn opgesplitst.

## 1. Leerstof zonder clip

Hier bestaat zeker geen clip voor: ofwel bestond het concept nog niet toen de clip werd opgenomen,
ofwel staat er een volledige pagina of sectie die door geen enkele cliptitel gedekt wordt.

| Hfst | Onderwerp | Waar | Waarom zeker |
|------|-----------|------|--------------|
| H3 | Raw string literals (`"""`) | `2_tekst/7_unicode.md` | C# 11 (eind 2022), clip "Unicode tonen" is van september 2020 |
| H4 | Programmeren met A.I.: de zes prompts | `3_data/ai.md` | geen clip, TODO staat al in `kennisclips.md` |
| H5 | De wetten van De Morgan | `4_beslissingen/1_logic_and_relationsoperator.md` | sectie van na juni 2026, TODO staat al in `kennisclips.md` |
| H8 | Collection expressions (`["red", "green"]`) | `7_arrays/1_ArraysBasics.md`, Manier 2 | C# 12 (eind 2023), clip "Arrays" is van oktober 2020 |
| H9-H16 | Pong als rode draad | `8_klassen/00_oop_pong.md` en de secties "Een wereld met OOP: Pong ..." in H11, H12, H13, H14 en H16 | geen enkele cliptitel gaat over Pong |
| H11 | `required` properties | `10_advancedklassen/2_objectinitsyntax.md` | C# 11 (eind 2022), clip "Object initializer syntax" is van januari 2021 |
| H12 | `Queue<>` en `Stack<>` | `11_arraysvanklassen/dict.md` | enkel `Dictionary<>` heeft een clip |
| H17 | Bestaande interfaces: `IComparable`, `Array.Sort`, een `List` sorteren | `16_interfaces/2_InterfacesInPraktijk.md` | volledige pagina, geen cliptitel |
| H18 | Klassen serialiseren naar JSON | `21_bestanden/serialize.md` | de clips van mei 2026 dekken enkel intro, lezen/schrijven en `FileInfo` |

Daarbovenop een vervanger voor "VS Howto: IntelliCode uitschakelen", zie punt 3.

## 2. Leerstof die misschien in een bredere clip zit

Geen eigen clip, maar een ruimere clip kan het meenemen. Nakijken; zit het er niet in, dan schuift
het naar punt 1.

| Hfst | Onderwerp | Waar | Nakijken in |
|------|-----------|------|-------------|
| H2 | Constanten | `1_csharpbasics/3_constanten.md` | "Variabelen" (16-09-2020) |
| H5 | De ternaire operator | `4_beslissingen/0_if.md` | "If" (30-09-2020); sectie van na juni 2026 |
| H7 | Recursie en oneindige methode-lussen | `6_methoden/0c_methodencombineren.md` | "Fun with methods" (14-09-2020): de titel zegt niet wat erin zit |
| H7 | Methoden debuggen met step-in | `6_methoden/3_advancedmethod.md` | "Debuggen" (23-09-2020) |
| H8 | `params` | `7_arrays/3_arrays_en_methoden.md` | "Arrays en methoden" (16-10-2020); volgens de junireview ontbrak `params` toen nog volledig in het boek |
| H8 | Jagged arrays | `7_arrays/4_ndimensionalArrays.md` | "Meer-dimensionale arrays" (19-10-2020) |
| H10 | Waar zet je exception handling? | `20_exceptions/waarplaatsen.md` | "Werken met exception" (18-01-2021) |
| H14 | `GetHashCode` overriden met `HashCode.Combine` | `13_advancedovererving/4_System_Object.md` | "System.Object en ToString" (13-03-2020) |
| H16 | Pattern matching (`is IVloeker vloeker`) | `18_IsAs/1_IsAs.md`, ook oplossing 3 in `18_IsAs/2_Polymorfisme_Interfaces.md` | "Is en as keywords" (14-01-2021) |
| H16 | `==` of `.Equals()`? | `18_IsAs/6_equals.md` | "Samenvatting objecten vergelijken met equals" (24-04-2020) |

## 3. Clips die zeker verouderd zijn

Hier ligt het niet aan het boek maar aan Visual Studio of .NET, die intussen veranderd zijn.

**Visual Studio.** Het boek werkt met Visual Studio 2026, met het Copilot-paneel rechts en de
checkbox "Do not use top-level statements". Elke clip met VS-schermen van daarvoor ziet er anders uit.

- Van voor VS 2022: "Introductie tot C#" (11-09-2020), "Fouten in je code oplossen" (10-09-2020),
  "Debuggen" (23-09-2020), "De folderstructuur van projecten" (28-09-2018).
- VS 2022, nog zonder Copilot: "Werken met VS" en "Je eerste programma" (01-09-2022), de drie
  "VS Howto"-clips (september-oktober 2022), "Class diagram en de class designer" (28-04-2022).
- "VS Howto: IntelliCode uitschakelen" (26-09-2022): het boek zet nu ook de Copilot-completions uit
  en heeft een aparte sectie "Copilot afsluiten" (`0_intro/1_killai.md`). Vervangen door één clip
  die beide uitschakelt.

**Nullable-waarschuwing.** Sinds .NET 6 (november 2021) staat nullable standaard aan in een nieuw
project. Wie `string invoer = Console.ReadLine();` typt, krijgt een gele golflijn die in de oudere
clips niet te zien is. Het boek laat nullables bewust nog weg. Raakt "WriteLine, Write en ReadLine"
(23-06-2020), "Input verwerken en omzetten" (21-09-2020) en "Referenties en null" (15-01-2021).

**Impliciete usings.** Sinds .NET 6 staat er geen `using System;` meer bovenaan een nieuw project.
Clips van voor eind 2021 tonen die lijn wel, en het boek zegt er niets over. Raakt vooral
"Namespaces en using" (14-01-2021), de podcast met dezelfde titel en "Essentie van C#" (11-09-2020).

## 4. Clips met gaten: het boek gaat verder dan de clip

Per clip wat er in het boek staat en vermoedelijk niet in de clip. Wat sinds juni 2026 is bijgekomen,
komt uit de diff en staat dus zeker in het boek; of de clip het mist, is na te kijken.

**H1**

- "WriteLine, Write en ReadLine" (23-06-2020): "Opletten met spaties", "Variabelen in een zin plaatsen" (na juni 2026).

**H3**

- "String interpolation" (16-09-2020): pagina herschreven, met "De `+`-operator op strings",
  "Wanneer gebruik je `+` wel?" en "Opletten met de volgorde".
- "Escape characters" (16-09-2020): "`\n`, `\r` en de entertoets", "Backslash en klaar".
- "Environment bibliotheek" (13-09-2022): "Zelf op ontdekking".

**H4**

- "Casting, conversie en parsing" (21-09-2020): "Een cijferteken is nog geen cijfer".
- "Input verwerken en omzetten" (21-09-2020): "ReadLine geeft altijd een string", "Van string naar
  getal in 3 stappen", "Afspraak voor de komende hoofdstukken".
- "Math-library en berekeningen" (21-09-2020): "Als rekenen misloopt".
- "Afronden" (21-09-2020): "Afkappen is niet hetzelfde als afronden", "Afronden of enkel mooi
  tonen?", "Geld: reken niet met double".
- "Random" (21-09-2020): voetnoot over `Random.Shared` (.NET 6).
- "Debuggen" (23-09-2020): "Test tijdens het schrijven, niet erna".

**H5**

- "If" (30-09-2020): "Veelgemaakte fouten met `if`", "Test jezelf". De ternaire operator staat onder punt 2.
- "Scope van variabelen" (30-09-2020): "Enkel verplaatsen volstaat niet".
- "Switch" (30-09-2020): "Fallthrough" is vervangen door "Meerdere cases, dezelfde code"; "Switch op tekst" is nieuw.
- "Enum" (30-09-2020) en "Demo: Enums gebruiken" (21-10-2019): "Een enum op het scherm tonen",
  "Een cast controleert niets", "Veelgemaakte fouten met `enum`".

**H6**

- "While en Do-while loops" (05-10-2020): "Niet enkel tellen".
- "De for loop" (07-10-2020): "Aftellen", "Hoeveel keer loopt deze loop?", "Scope van de teller",
  "Veelgemaakte fouten met `for`".
- "Loop nesting" (09-10-2020): pagina volledig herschreven (volgorde van uitvoering, rijen en
  kolommen, een inner loop die van de outer afhangt, `break` in geneste loops).

**H7**

- "Methoden" (09-10-2020): het hoofdstuk is opgesplitst in drie pagina's. "Lokale functies...en
  waarom je ze beter niet gebruikt" is nieuw.
- "Goede methoden schrijven" (09-12-2020): het boek heeft nu zelf "Hoe groot mag een methode zijn?"
  en verwijst naar deze clip. Nakijken of beide hetzelfde zeggen.
- "Bestaande bibliotheken" (13-09-2022): "Herbruikbare gebruikersinvoer vragen".

**H8**

- "Arrays" (09-10-2020): "Een array aanmaken" op drie manieren. Collection expressions staan onder punt 1.
- "System.Array" (14-10-2020): het boek toont nu `IndexOf` in plaats van `BinarySearch`.
- "Algoritmes en arrays" (14-10-2020): pagina herschreven (grootste zoeken, stoppen zodra je iets
  vindt, synchrone arrays, binair zoeken).
- "Strings en arrays" (14-10-2020): herschreven, met "Wat je niet kan: een string wijzigen" en `Split`/`Join`.
- "Meer-dimensionale arrays" (19-10-2020): "Een rooster of een klasse?", drie dimensies, een 2D-array
  meegeven aan een methode.

**H9**

- Inhoudelijk weinig nieuw sinds juni 2026, buiten Pong (punt 1).
- Zes clips over properties, van februari 2020 tot februari 2024. Bij het taggen kiezen welke blijven.

**H10**

- "Stack vs heap" (08-06-2022): "Wat met `string`?".
- "Werken met exception" (18-01-2021): `finally` is naar de hoofdpagina verhuisd.
- "Referenties en null" (15-01-2021): het boek gebruikt `?.`. Nakijken of de clip dat toont.

**H11**

- "Object initialize Syntax" (14-01-2021): `required` staat onder punt 1.
- "static keyword" (18-01-2021): "Intermezzo: `Debug.WriteLine`", "`static` en `Random`".

**H12**

- "Arrays van objecten" (18-01-2021): "Array initializer syntax".

**H13**

- "Overerving overzicht" (14-01-2021): "Alles wordt overgeërfd" (vervangt "Transitief"), `sealed`, multiple inheritance.

**H14**

- "System.Object en ToString" (13-03-2020): ook `GetType()`, `Equals()` en `ReferenceEquals()`. `GetHashCode` staat onder punt 2.
- "Abstracte klassen" (15-01-2021): abstracte properties.

**H16**

- "Samenvatting objecten vergelijken met equals" (24-04-2020): "Vergeet `GetHashCode` niet", callout over `record` (C# 9).

**H17**

- "Interfaces en polymorfisme in de praktijk: Vloekende mensen" (30-04-2020): het boek heeft nu een
  derde oplossing met pattern matching.

**H18**

- "Lezen en schrijven" (23-05-2026): "`File.ReadAllText` of `StreamReader`?" kwam er na de opname bij.

## 5. Clips die niet meer bij de tekst passen

- "Nugets en libraries" en "Eigen class library maken" (01-02-2022) staan bij H11. NuGet staat nu in
  H10 (`9_meminoop/namespaces.md`), een eigen class library maken staat nergens in het boek.
- "Class diagram en de class designer in Visual Studio" (28-04-2022, H14): de class designer staat niet in het boek.
- "Interfaces in de praktijk - een meme-detective verhaal" (29-04-2020) en "fuifsimulator"
  (30-11-2021), H17: beide voorbeelden staan niet in het boek.
- "Uitgewerkt voorbeeld Abstract en System.Object mbv Zoo-dieren" (29-03-2020): een compilatie uit
  het hoorcollege van 2018-19.
- "Extra toelichting 'Bevallingsvoorbeeld' voorgaande les" (08-02-2021): verwijst naar een les. Het
  voorbeeld zelf staat wel nog in H10 ("Bevallen in code").
- "Hoe de pokemon klasse werkt" (02-03-2020): hoort bij de Pokémon-oefeningen van H10, niet bij de boektekst.
- "Stack Overflow Exception" (10-03-2020): het boek vermeldt die exception enkel kort bij recursie in
  H7. In `9_meminoop/6_memorymanagement.md` staat een TODO dat de stackgrootte "enkel in de kennisclips" staat.
- "Tutor prompt" (gist, H9): de Coach-knop bij de oefeningen doet iets gelijkaardigs, per oefening.
- De clips van H15 heten "Compositie", het hoofdstuk heet nu "Associaties", met compositie en
  aggregatie als twee soorten.

## 6. Meenemen bij het taggen

- `allvideos1.md` en `allvideos2.md` zijn een tweede kopie van dezelfde lijsten. In `allvideos2.md`
  ontbreekt H18, en er staat "autop-roperties". Ofwel de tags op twee plaatsen zetten, ofwel die twee
  pagina's genereren uit de `kennisclips.md`-bestanden.
- `content/18_IsAs/` en `content/20_exceptions/` hebben geen eigen `kennisclips.md` nodig: hun pagina's
  hangen in H10, H14, H16 en H17, en de clips erover staan daar.
- 14 van de 18 `kennisclips.md` linken bij "Oefeningen" nog naar apwt.gitbook.io.
- De drie podcasts staan op anchor.fm. Anchor heet intussen Spotify for Creators: nakijken of de links nog werken.
- Het boek zegt overal "instantievariabelen". Luister bij de oude clips of daar "velden" of "fields" valt.
- De appendix heeft nooit clips gehad. Enkel `field` (C# 14, `B_appendix/field_keyword.md`) en
  `record` (`B_appendix/struct.md`) zijn er echt nieuwe taalconcepten.
