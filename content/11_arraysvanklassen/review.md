# Review: H12 — Arrays en klassen (11_arraysvanklassen/)

> Interne didactische review — niet bedoeld voor publicatie.

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

- **Geen vergelijkingstabel `array` vs. `List<T>`**. Studenten lezen drie pagina's en moeten zelf afleiden wanneer ze wat kiezen. Een tabel met *vaste/variabele lengte, performance, syntax, methoden* zou hier veel waard zijn.
- De **foreach-mutation pitfall** wordt gedeeltelijk besproken (read-only variable), maar **collection-modification tijdens iteratie** (`foreach + Remove → InvalidOperationException`) komt niet aan bod. Dit is precies de bug die studenten *wel* schrijven.
- In [4_list.md](4_list.md) staat een **bug in het Pong-voorbeeld**: `List<Balletje> veelBalletjes = List<Balletje>();` mist `new`. Compileert niet. Studenten gaan dit kopiëren.
- De **`Sort()`-vermelding** "lees hoofdstuk 17 over interfaces" in [4_list.md](4_list.md) is een vooruitwijzing zonder uitleg waarom — een eerstejaars probeert dan eerst toch `myList.Sort()` op `List<Pokemon>`, krijgt een runtime exception, en raakt verward. Geef minstens één regel: *"voor eigen klassen werkt dit pas als je `IComparable` implementeert."*
- **Dictionary** in [dict.md](dict.md) gebruikt enkel value-type keys (`int`, `string`). De **vereiste dat een key-type `GetHashCode` en `Equals` correct moet implementeren** wordt niet vermeld. Studenten die later een eigen klasse als key gebruiken, lopen vast.
- Het bestand heet `dict.md` terwijl het ook `Queue` en `Stack` behandelt. Misleidend.

## Onduidelijkheden

- *"List<> is een generieke klasse"* in [4_list.md](4_list.md) — generics worden naar de appendix verwezen, maar de syntax `List<int>` wordt nu wel hier gebruikt. Studenten weten niet hoe ze de `<int>`-haakjes moeten lezen. Eén zin volstaat: *"de `<int>` zegt: deze lijst bevat enkel `int`-elementen."*
- Volgorde van bestanden volgens `_quarto.yml`: arrays-van-objecten → List → foreach → dict. Maar `foreach` wordt in [4_list.md](4_list.md) al gebruikt (`foreach(var bal in veelBalletjes)`) **vóór** [3_foreach.md](3_foreach.md) wordt geïntroduceerd. Hetzelfde geldt voor de `var`-uitleg. Volgorde aanpassen of vooruitwijzen.
- *"Dictionary werkt zoals een woordenboek"* — de analogie is goed maar de echte essentie (O(1) lookup vs. O(n) bij `List.Find`) wordt niet benoemd. Studenten gebruiken hierdoor `List.Find` waar `Dictionary` veel beter past.

## Gemissen

- **Trade-off tabel `Array` / `List<T>` / `Dictionary<K,V>`** met *wanneer kies je wat*. Cruciaal voor eerstejaars want ze grijpen alles per default naar `List`.
- **`Add`/`Remove`/`Contains`/`IndexOf`/`Find`** verdienen elk één regel met een mini-voorbeeld. `Contains` op `List<Pokemon>` heeft dezelfde reference-equality-valkuil als `IndexOf` — wordt niet vermeld.
- **Dictionary key-vereisten**: `GetHashCode` en `Equals` overriden bij eigen klassen-als-key. Past hier conceptueel, ook al wordt `override` pas in H13 behandeld — een vooruitwijzing volstaat.
- **LINQ-vooruitwijzing**: na `List<T>` is dit hét moment voor één voetnoot: *"in een later hoofdstuk leer je hoe je met LINQ in één regel kunt filteren, sorteren en projecteren."* Bouwt verwachting op.
- **`HashSet<T>`** wordt niet vermeld terwijl het naast Queue/Stack/Dictionary thuishoort en vaak het juiste antwoord is wanneer studenten een `List` met `Contains` schrijven.
- **2D-arrays / jagged arrays van objecten** ontbreken — niet absoluut nodig, maar past hier.

## Concrete suggesties

1. Fix de bug in [4_list.md](4_list.md): `List<Balletje> veelBalletjes = new List<Balletje>();`.
2. Voeg in [4_list.md](4_list.md) of helemaal vooraan in de folder een **vergelijkingstabel** Array vs. List toe. Drie kolommen, zes rijen, klaar.
3. Hernoem [dict.md](dict.md) naar bv. `collecties.md` of `queue_stack_dict.md` — de huidige naam dekt de inhoud niet.
4. Voeg in [3_foreach.md](3_foreach.md) een sectie *"Wat je niét mag doen"* toe met het `Remove`-tijdens-iteratie-voorbeeld (`InvalidOperationException: Collection was modified`).
5. Voeg bij `Sort()` in [4_list.md](4_list.md) de waarschuwing toe: *"voor eigen klassen krijg je een `InvalidOperationException` — zie hoofdstuk 17."*
6. Voeg in [dict.md](dict.md) een korte tip toe over key-types: *"voor eigen klassen als key moet je later `Equals` en `GetHashCode` overriden — gebruik voorlopig `int`, `string` of een ander value type."*
7. Pas de leesvolgorde aan zodat [3_foreach.md](3_foreach.md) en de `var`-uitleg vóór [4_list.md](4_list.md) staan, of schrijf de `List`-voorbeelden eerst met `for(int i=...)` zodat `foreach`/`var` later pas opduiken.
8. Voeg een korte vooruitwijzing naar **LINQ** toe op het einde van [4_list.md](4_list.md).

---

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
