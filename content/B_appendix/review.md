# Review: Appendix

> Interne didactische review — niet bedoeld voor publicatie.

## Sterktes

De appendix als veiligheidsklep werkt voor onderwerpen die in het hoofdboek de flow zouden breken maar wel waardevol zijn voor wie verder wil. Drie stukken springen er positief uit:

- [generics.md](generics.md) is verrassend grondig (methode → klasse → meerdere types → constraints) en bouwt didactisch goed op. Dit hoort eigenlijk niet meer in een appendix thuis maar in het hoofdboek (zie suggesties).
- [2_outenref.md](2_outenref.md) koppelt `out`/`ref` netjes aan de praktijktoepassing `TryParse`. Dat geeft het concept directe relevantie in plaats van het droog te laten staan.
- [field_keyword.md](field_keyword.md) toont een modern C# 14-feature met een eerlijke vergelijking "vroeger vs. nu". Goede invalshoek.
- [struct.md](struct.md) bespreekt struct én record samen met een vergelijkingstabel — dat is precies de juiste mentale grouping voor eerstejaars.

## Zwaktes

- **Volgorde is willekeurig.** [prostuff.md](prostuff.md) → [mac.md](mac.md) → [regions.md](regions.md) → [8_operatoroverloading.md](8_operatoroverloading.md) → [stringformat.md](stringformat.md) → [2_outenref.md](2_outenref.md) → [6_exprbody.md](6_exprbody.md) → [field_keyword.md](field_keyword.md) → [generics.md](generics.md) → [struct.md](struct.md) → [installer.md](installer.md). De nummerprefixen (`2_`, `6_`, `8_`) suggereren een koppeling met hoofdstukken, maar dat patroon is inconsistent doorgetrokken. Lezer ziet geen rode draad.
- **[regions.md](regions.md) is gedateerd.** Regions worden in moderne C#-stijlgidsen (Roslyn, StyleCop, JetBrains) afgeraden als code smell — vaak een teken dat een klasse te groot is. Het stuk leert studenten een habit waar ze later weer van af moeten.
- **[stringformat.md](stringformat.md) overlapt.** String interpolation zit (vermoedelijk) al in H3. Het argument "je komt het tegen in oude code" is geldig maar te dun voor een eigen appendix-sectie. De typo "ben {1} en ben {1}" met fout verwacht resultaat ("Ik ben 13 en ik ben 13 jaar oud" — dat klopt niet met de tekst, en het cijfer 13 wordt nergens gedefinieerd) ondergraaft het voorbeeld bovendien.
- **[installer.md](installer.md) is incompleet.** Eindigt letterlijk op "Stay tuned for more!". Beter weglaten tot het af is, of vervangen door een verwijzing naar `dotnet publish` met self-contained deployment.
- **[mac.md](mac.md) staat in een hoofdstuk dat "Handig om weten" heet** ([prostuff.md](prostuff.md)). Mac-installatie is geen verdiepingsmateriaal maar een randvoorwaarde voor een specifieke groep studenten. Hoort niet thuis tussen taalfeatures.
- **[prostuff.md](prostuff.md)** is een lijstje VS-snippets dat eerder bij hoofdstuk 1 (installatie/IDE) hoort dan in een appendix met taalverdieping.

## Onduidelijkheden

- [6_exprbody.md](6_exprbody.md) gebruikt expression-bodied syntax voor een full property terwijl de auto-property `public int Name { get; set; }` net was uitgelegd in het hoofdboek. De callout-tip onderaan ("had korter gekund met auto-property") is goed, maar het hele EBM-voor-properties-stuk verwart studenten die net `get;set;` onder de knie hebben.
- [8_operatoroverloading.md](8_operatoroverloading.md) veronderstelt comfort met `static`, klassen en constructor-syntax (`new Kassa(){...}` met object initializer). Voor een eerstejaars die naar de appendix grijpt is die stack vrij hoog. Een korte "voorkennisbox" zou helpen.
- [field_keyword.md](field_keyword.md) noemt C# 14 als versie. Studenten die op .NET 8 draaien (zie [mac.md](mac.md): "Installeer .NET 8") kunnen dit feature niet gebruiken. Vermeld dit expliciet, anders gaan ze het tevergeefs proberen.
- [struct.md](struct.md) opent met `public int X;` (een veld), niet `{ get; set; }`. Dat staat haaks op de naamgevingsboete en de hele property-doctrine elders. Verklaar of vermijd.

## Gemissen

Voor "moderne C#" mist er behoorlijk wat dat eerstejaars in elke template tegenkomen:

- **Nullable reference types** (`string?`, `!`, het hele NRT-systeem dat default aan staat sinds .NET 6).
- **Pattern matching** (`is`, `switch`-expressies, property patterns) — komt overal in voorbeeldcode voor.
- **Tuples & deconstruction** (`(int x, int y) = ...`).
- **Top-level statements als feature** — ironisch genoeg verboden in de boetes maar nooit positief uitgelegd.
- **`var` vs. expliciet typeren** als stijlkeuze. In [generics.md](generics.md) wordt `var` losjes gebruikt zonder kader.
- **LINQ-intro** (zelfs minimaal). LINQ is verboden in semester 1 maar zou hier perfect passen als "wat wacht je in jaar 2".
- **`async`/`await` teaser** voor wie verder gaat met UI/web.
- **Records** worden wel kort genoemd in [struct.md](struct.md), maar verdienen een eigen sectie of duidelijkere positionering.

## Concrete suggesties

1. **Groepeer de inhoud** in drie subsecties met duidelijke headings:
   - *Modern C# features* — [field_keyword.md](field_keyword.md), [generics.md](generics.md), [struct.md](struct.md), [6_exprbody.md](6_exprbody.md), nieuwe stukken over NRT/pattern matching/tuples.
   - *Legacy / nice-to-know* — [stringformat.md](stringformat.md), [regions.md](regions.md) (met expliciete waarschuwing), [8_operatoroverloading.md](8_operatoroverloading.md).
   - *IDE & tooling* — [prostuff.md](prostuff.md), [mac.md](mac.md), [installer.md](installer.md) (of deze drie verhuizen naar H1/installatie).
2. **Promoveer naar het hoofdboek**: [generics.md](generics.md) en [2_outenref.md](2_outenref.md) zijn te belangrijk en te grondig om in de appendix te begraven. `TryParse` zit waarschijnlijk al ergens in het hoofdboek — controleer overlap.
3. **Schrap of herwerk**:
   - [regions.md](regions.md) → vervangen door een korte note "regions bestaan, gebruik ze niet" of weglaten.
   - [installer.md](installer.md) → afmaken of weghalen.
   - [stringformat.md](stringformat.md) → samenvoegen tot één kleine paragraaf in de string-sectie van H3.
4. **Voeg consistente voorkennis-callouts toe** ("Voor je dit leest, zorg dat je hoofdstuk X kent"). Vooral [8_operatoroverloading.md](8_operatoroverloading.md) en [field_keyword.md](field_keyword.md) hebben dat nodig.
5. **Versie-bewust schrijven**: zet bij elk modern feature de minimum C#/.NET-versie zodat studenten weten of het op hun setup werkt.
6. **Hernoem de file-prefixes** consistent of laat ze allemaal weg. De huidige mix (`2_`, `6_`, `8_` + niet-genummerde) lijkt half opgegeven.

---

## Future — ideeën voor de nieuwe editie

> Aanknopingspunten bij dit hoofdstuk voor de toekomstvisie uit [../../future/hoe.md](../../future/hoe.md). Bouwt voort op wat hierboven al opgemerkt is — vooral op het gemis aan moderne C#-features.

### Code Literacy — drie oefentypes
- **Wat doet dit?** — een `out`-parameter-fragment uit [2_outenref.md](2_outenref.md) (`int.TryParse`-stijl) lezen en uitleggen waarom de variabele niet vooraf hoeft geïnitialiseerd te worden.
- **Klopt dit?** — een AI-versie van een generic methode met een verkeerde of ontbrekende constraint (`where T : class` waar `where T : IComparable<T>` hoort). Student spot waarom `CompareTo` faalt.
- **Welke is beter?** — een full property uit [6_exprbody.md](6_exprbody.md) versus `{ get; set; }`-auto-property versus expression-bodied. Drie smaken, één keuze, motivatie verplicht.

### Stagiair Steven
- Steven gebruikt overal `ref` "voor performance" — student moet uitleggen waarom dat niet helpt voor reference types.
- Steven schrijft een operator overload voor `+` op een `Klant`-klasse "omdat het kon"; student verdedigt waarom dat anti-leesbaar is.

### Hall of Shame
- AI die generic constraints verzint die niet bestaan (`where T : object`, `where T : primitive`).
- AI die `#region` rond elke methode strooit en zo precies de code smell creëert die [regions.md](regions.md) zou moeten ontmoedigen.

### Interview-suggestie
- Een framework- of library-developer (NuGet-auteur) over generics in echte API's: wanneer is `<T>` zinvol, wanneer is het over-engineering? Sluit aan bij de "promoveer generics naar het hoofdboek"-suggestie.

### Code-archeologie (oermens)
- Property-evolutie als rode draad: `public int X;` (veld) → `private int _x; public int X { get { return _x; } set { _x = value; } }` (C# 1-2) → `public int X { get; set; }` (C# 3) → expression-bodied (C# 6/7) → `field` keyword (C# 14, [field_keyword.md](field_keyword.md)). Eén pagina, vier varianten naast elkaar.
- Idem voor `string.Format` → `$"..."` ([stringformat.md](stringformat.md)) — toont meteen waarom AI nog steeds `string.Format` voorstelt.

### Lees-volgorde-pijlen
- Het generics-met-constraints-voorbeeld uit [generics.md](generics.md) (meerdere type-parameters + constraints) leent zich uitstekend: pijl 1 op het type-parameterblok, pijl 2 op de constraint, pijl 3 op het gebruik in de body.
- Operator overloading uit [8_operatoroverloading.md](8_operatoroverloading.md): pijl 1 op `static`, pijl 2 op `operator +`, pijl 3 op `return new Kassa(...)`.

### Taalkeuze-callout
- Bij [generics.md](generics.md): Python heeft `typing.Generic` als opt-in, TypeScript en Rust verplichten het, Go pas sinds 1.18. Constraint-systemen verschillen sterk — Rust traits versus C# interfaces als constraint.
- Bij [struct.md](struct.md): Rust kent alleen structs, geen klassen; in Python is alles een object. Helpt studenten "value vs reference" inkaderen.

### Mondelinge code-review *(natuurlijk passend)*
- Operator overloading is *het* schoolvoorbeeld voor mondeling verdedigen: "waarom heb je `+` gekozen voor deze operatie en niet een methode `Voeg(Bon b)`?" Past pedagogisch perfect bij de "verantwoorden"-component.
