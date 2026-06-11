# Review: H12 — Arrays en klassen (11_arraysvanklassen/)

> Interne didactische review - niet bedoeld voor publicatie.

> **Status editie 5** (verwerkt op 2026-06-11). Markering per punt:
> `[v]` gedaan · `[~]` deels of aangepast aan een stijlkeuze · `[c]` als verborgen TODO-comment in de tekst gezet · `[>]` bewust uitgesteld. De **Future**-sectie en de mini-oefeningen zijn nog niet aangepakt.

Folder dekt arrays van objecten, `List<T>`, `foreach` (+ `var`), en de generieke collecties `Queue`, `Stack`, `Dictionary`. Volgorde in `_quarto.yml`: [7_arraysvanobj.md](7_arraysvanobj.md) → [4_list.md](4_list.md) → [3_foreach.md](3_foreach.md) → [dict.md](dict.md) → [kennisclips.md](kennisclips.md).

## Sterktes

- De **expliciete waarschuwing dat alle elementen in `new Student[20]` nog `null` zijn** in [7_arraysvanobj.md](7_arraysvanobj.md) is precies de struikelblok waar eerstejaars op vallen. Goed dat dit met een figuur ondersteund wordt.
- De **for-loop die de array vult met `new Student()`** is essentieel en staat er. Zonder deze stap denken studenten dat declaratie alleen volstaat.
- Het **side-by-side voorbeeld** van Pong met `array` versus `List<Balletje>` in [4_list.md](4_list.md) toont concreet waarom `List` leesbaarder is. Dit type *before/after* werkt.
- De **callout over `IndexOf` op objecten** (vergelijkt referenties, niet inhoud) in [4_list.md](4_list.md) voorkomt een klassieke bug. Sterke tip.
- De **read-only iteration variable** in [3_foreach.md](3_foreach.md), met het onderscheid *referentie aanpassen vs. object-via-referentie aanpassen*, is uitstekend uitgewerkt en sluit goed aan bij het H10-geheugenverhaal.
- Het **`var`-stuk** met de uitleg "JavaScript var ≠ C# var" voorkomt een echte misvatting bij studenten die ook web doen.
- De **Queue/Stack/Dictionary in één bestand** ([dict.md](dict.md)) met visuele schema's is overzichtelijk en compact.

## Zwaktes

- `[c]` **Geen vergelijkingstabel `array` vs. `List<T>`**. **(TODO-comment geplaatst in 4_list.md.)**
- `[v]` De **foreach-mutation pitfall** (`foreach + Remove → InvalidOperationException`) kwam niet aan bod. **(waarschuwing-callout "Wat je niét mag doen" toegevoegd in 3_foreach.md, met de fix: for van achter naar voor, of op een kopie werken.)**
- `[v]` In [4_list.md](4_list.md) staat een **bug**: `List<Balletje> veelBalletjes = List<Balletje>();` mist `new`. **(gefixt naar `new List<Balletje>()`.)**
- `[v]` De **`Sort()`-vermelding** is een vooruitwijzing zonder uitleg waarom. **(uitgebreid: voor eigen klassen krijg je een InvalidOperationException, los je op met IComparable, zie H17.)**
- `[v]` **Dictionary** vermeldt de key-vereiste (`GetHashCode`/`Equals`) niet. **(callout-important toegevoegd: gebruik voorlopig value types als key; eigen klassen vereisen Equals/GetHashCode-override, zie H13.)**
- `[c]` Het bestand heet `dict.md` terwijl het ook `Queue` en `Stack` behandelt. **(TODO-comment geplaatst voor hernoeming; vereist _quarto.yml-aanpassing.)**

## Onduidelijkheden

- `[~]` *"List<> is een generieke klasse"*: studenten weten niet hoe ze de `<int>`-haakjes moeten lezen. **(de bestaande tekst legt al uit dat je tussen `< >` het bevattende datatype zet; afdoende. Diepere generics blijven in de appendix.)**
- `[c]` Volgorde: `foreach`/`var` worden in [4_list.md](4_list.md) al gebruikt vóór [3_foreach.md](3_foreach.md). **(TODO-comment geplaatst; reorder vereist _quarto.yml-aanpassing.)**
- `[v]` *"Dictionary werkt zoals een woordenboek"* - de essentie (snelle lookup vs. List.Find) wordt niet benoemd. **(callout-tip toegevoegd: opzoeken op key is veel sneller dan List.Find dat alles moet overlopen.)**

## Gemissen

- `[c]` **Trade-off tabel `Array` / `List<T>` / `Dictionary<K,V>`**. **(TODO-comment geplaatst.)**
- `[c]` **`Add`/`Remove`/`Contains`/`IndexOf`/`Find`** elk één regel; `Contains` heeft dezelfde reference-equality-valkuil als `IndexOf`. **(IndexOf-callout uitgebreid naar ook `Contains`; aparte mini-voorbeeldregels als TODO gemarkeerd.)**
- `[v]` **Dictionary key-vereisten** (`GetHashCode`/`Equals` bij eigen klassen). **(callout-important toegevoegd met vooruitwijzing naar H13.)**
- `[v]` **LINQ-vooruitwijzing** na `List<T>`. **(callout-tip toegevoegd op het einde van 4_list.md.)**
- `[c]` **`HashSet<T>`** ontbreekt. **(TODO-comment geplaatst in dict.md.)**
- `[>]` **2D-arrays / jagged arrays van objecten** ontbreken. **(uitgesteld: niet essentieel hier.)**

## Concrete suggesties

1. `[v]` Fix de bug `List<Balletje> veelBalletjes = new List<Balletje>();`. **(gedaan.)**
2. `[c]` Vergelijkingstabel Array vs. List. **(TODO-comment geplaatst.)**
3. `[c]` Hernoem [dict.md](dict.md). **(TODO-comment geplaatst.)**
4. `[v]` Sectie *"Wat je niét mag doen"* met het Remove-tijdens-iteratie-voorbeeld. **(toegevoegd.)**
5. `[v]` `Sort()`-waarschuwing voor eigen klassen. **(toegevoegd.)**
6. `[v]` Tip over key-types in [dict.md](dict.md). **(toegevoegd.)**
7. `[c]` Leesvolgorde foreach/var vóór List. **(TODO-comment geplaatst.)**
8. `[v]` Vooruitwijzing naar **LINQ** op het einde van [4_list.md](4_list.md). **(toegevoegd.)**

---

> **Future: nog niet aangepakt.** Onderstaande ideeën zijn bewust uitgesteld (afspraak: future-gedeelte komt later).

## Future — ideeën voor de nieuwe editie

> Aanknopingspunten bij dit hoofdstuk voor de toekomstvisie uit [../../future/hoe.md](../../future/hoe.md). Bouwt voort op wat hierboven al opgemerkt is.

### Code Literacy — drie oefentypes
- **Wat doet dit?** — geef het Pong-fragment met `array` naast dat met `List<Balletje>` (uit [4_list.md](4_list.md)) en laat studenten zonder IDE uitleggen waar de `null`-references kunnen optreden in versie 1. Sluit aan bij de "alle elementen zijn nog null"-sterkte.
- **Klopt dit?** — Steven schrijft een `foreach` met `lijst.Remove(item)` erin (de `InvalidOperationException`-bug uit het gemissenlijstje). Studenten benoemen de fout én de fix (`for` van achteren naar voren, of `ToList()`-kopie). Eindelijk een plek waar deze pitfall didactisch landt.
- **Welke is beter?** — een `List<Pokemon>` met `Find` versus een `Dictionary<string, Pokemon>` met indexer. Studenten verdedigen waarom O(1) lookup hier wint, en wanneer je tóch voor `List` kiest.

### Stagiair Steven
- Steven gebruikt `IndexOf` op een `List<Student>` om "die ene student" terug te vinden en snapt niet waarom hij `-1` krijgt — perfecte oefening rond de reference-equality-callout die al in [4_list.md](4_list.md) staat.
- Steven kiest reflexmatig `List<T>` voor élk verzamelprobleem (ook unieke waarden, ook lookups). De vergelijkingstabel die in de review wordt gevraagd, wordt zo Stevens correctie-document.

### Hall of Shame
- AI die `Dictionary<MijnKlasse, int>` voorstelt zonder `Equals`/`GetHashCode` te overriden — silent bug, items "verdwijnen". Sluit aan bij het gemis rond key-vereisten.
- AI die in een `foreach` muteert en dan een `try/catch` rond de `InvalidOperationException` zet "om het probleem op te lossen". Iconisch.

### Interview-suggestie
- Een **data-engineer** of **back-end developer** over collecties op schaal: wanneer pakt hij `List`, wanneer `HashSet`, wanneer `Dictionary`, wanneer een echte database? En: "*hoe ga je om met AI-suggesties die structureel de verkeerde collectie kiezen?*" Past goed bij het H2.3-format en bij het LINQ-vooruitzicht.

### Code-archeologie (oermens)
- Tijdlijn van collecties in C#: `ArrayList` (pre-generics, alles `object`, casts overal) → `List<T>` (C# 2, generics) → collection initializers (C# 3) → target-typed `new()` (C# 9) → collection expressions `[1, 2, 3]` (C# 12). Studenten leren AI-output met `ArrayList` of `Hashtable` direct herkennen als training-data-leftovers.

### Lees-volgorde-pijlen
- De **for-loop die de `Student[]`-array vult met `new Student()`** in [7_arraysvanobj.md](7_arraysvanobj.md) verdient pijlen: 1 → declaratie (alles null), 2 → loop-init, 3 → `new` op heap, 4 → referentie in slot `i`. Past op de bestaande figuur en sluit aan bij het H10-geheugenverhaal.

### Taalkeuze-callout
- Bij `List<T>`: "*Python heeft één `list` voor alles; JavaScript ook (`Array`). C# dwingt je vroeg te kiezen tussen `Array`, `List<T>`, `Dictionary<K,V>`, `HashSet<T>` — een feature, geen bug.*"
- Bij `Dictionary`: "*Wat C# `Dictionary` noemt, heet in Python `dict`, in JavaScript `Map` (niet `Object`!), in Go `map`. Hashing-vereisten gelden overal.*"
