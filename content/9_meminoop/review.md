# Review: H10 deel 1 — Geheugenmanagement (9_meminoop/)

> Interne didactische review - niet bedoeld voor publicatie.

Deze folder bevat de kern van H10: stack/heap, value vs. reference, GC, objecten in methoden, null en namespaces. De rest van H10 (try/catch) zit in [../20_exceptions/](../20_exceptions/).

> **Status editie 5** (verwerkt op 2026-06-11). Markering per punt:
> `[v]` gedaan · `[~]` deels of aangepast aan een stijlkeuze · `[c]` als verborgen TODO-comment in de tekst gezet · `[>]` bewust uitgesteld. Let op: nullable types (`string?`, `int?`, `??`) blijven volgens afspraak (CLAUDE.md) nog uitgesteld; die zijn als TODO gemarkeerd. De **Future**-sectie en de mini-oefeningen zijn nog niet aangepakt.

## Sterktes

- De **stack/heap-uitleg** in [6_memorymanagement.md](6_memorymanagement.md) bouwt netjes voort op H8. De vergelijking *"klein bankje naast de zandbak"* is concreet en blijft hangen.
- De **stap-voor-stap visualisatie** van `Student stud = new Student();` (split in 2 regels, drie geheugentekeningen) is uitstekend. Dit is precies wat eerstejaars nodig hebben.
- De callout dat de *hele* klasse op de heap zit, ook al bevat ze value-type members, is belangrijk en wordt expliciet vermeld.
- De pass-by-reference-uitleg in [6b_objectenenmethoden.md](6b_objectenenmethoden.md) met het ``Meting``-voorbeeld is mooi: bondig en met duidelijke output.
- De politie-analogie voor namespaces in [namespaces.md](namespaces.md) is een goede mentale haak.

## Zwaktes

- `[~]` Het **bevallingsvoorbeeld** sleept te lang door en mengt by-reference met een methode die ``null`` teruggeeft als guard. Tikfouten ``papa.MaxLengte`` (2x). **(de twee ``papa.MaxLengte``-tikfouten zijn gefixt naar ``dePapa.MaxLengte``; de opsplitsing van het voorbeeld is als TODO gemarkeerd.)**
- `[v]` ``string`` wordt nergens expliciet als reference type benoemd (waarom werkt `string s = "x"; s = "y";` toch als een value type?). **(sectie "Wat met string?" toegevoegd in 6_memorymanagement.md: reference type maar immutable.)**
- `[v]` Het stukje GC sluit af met ``GC.Collect()`` *"ten stelligste afgeraden"* zonder echt uit te leggen waarom. **(uitleg toegevoegd: zelf aanroepen onderbreekt op een slecht moment en maakt het meestal trager.)**
- `[v]` In [nullreference.md](nullreference.md) zegt de tip "VS dwingt je `= null` expliciet te schrijven" zonder context: dit gaat over **nullable reference types** maar dat begrip valt nooit. **(de tip benoemt nu nullable reference types en zegt dat we ze bewust nog niet behandelen, dus de waarschuwing mag genegeerd worden.)**

## Onduidelijkheden

- `[v]` In [6_memorymanagement.md](6_memorymanagement.md) staat: *"...simpelweg omdat alles in C# een object is (en dus ook ... zelfs valuetypes...)."* - dit verwart (boxing wordt niet uitgelegd). **(zin herschreven zonder de boxing-bait: "zodra je met objecten en arrays werkt heb je met reference types te maken".)**
- `[>]` De zin *"...We leggen later uit wat dit juist wil zeggen."* - "later" is in nullreference.md, maar tussenin staat al een ``null``-returnvoorbeeld. Volgorde wringt. **(hangt samen met de bevallings-opsplitsing; als TODO gemarkeerd, structureel aan Tim.)**
- `[v]` In `ZoekStudent` wordt de loop niet vroegtijdig afgebroken bij een match. Een korte toelichting (efficiëntie vs. eenvoud) helpt. **(toelichting toegevoegd: het kan sneller met een vroege stop, maar we houden het eenvoudig.)**
- `[c]` ``namespace`` wordt uitgelegd, maar **file-scoped namespaces** (`namespace Foo;` zonder accolades) worden niet vermeld - dat zien studenten wel in nieuwe projecten. **(TODO-comment geplaatst.)**

## Gemissen

- `[c]` **Operator `??` (null-coalescing)** ontbreekt; `?.` wordt wel vermeld, maar `??` en `??=` ook. **(TODO-comment geplaatst; bewust uitgesteld i.l.m. de null-features-deferral, beslissing aan Tim.)**
- `[>]` **`Nullable<T>` / `int?`** valt niet. **(uitgesteld: nullable types worden volgens CLAUDE.md nog niet behandeld.)**
- `[>]` **Pass-by-reference voor value types met `ref`/`out`** wordt niet kort genoemd. **(uitgesteld: out/ref zitten in de appendix; een vooruitwijzing kan later.)**
- `[v]` **`string` als immutable reference type** verdient een paar regels. **(sectie "Wat met string?" toegevoegd.)**
- `[c]` **Concrete grootte van stack** (typisch 1 MB) en **StackOverflowException** staan enkel in de kennisclips. **(TODO-comment geplaatst.)**
- `[c]` **`using` als statement** (`using (var stream = ...)`) komt nergens voor. **(TODO-comment geplaatst.)**

## Concrete suggesties

1. `[c]` Splits het bevallingsvoorbeeld op (by-reference hier, return-null naar nullreference.md). **(TODO-comment geplaatst; structureel aan Tim.)**
2. `[v]` Voeg een minihoofdstukje *"Wat met `string`?"* toe. **(gedaan in 6_memorymanagement.md.)**
3. `[v]` Fix de twee `papa.MaxLengte` tikfouten naar `dePapa.MaxLengte`. **(gedaan.)**
4. `[c]` Voeg een sectie **`??` en `??=`** toe. **(TODO-comment geplaatst; uitgesteld i.l.m. de null-features-deferral.)**
5. `[c]` Maak één figuur met stack en heap **naast elkaar**. **(TODO-comment geplaatst; figuur maken is aan Tim.)**
6. `[v]` Verwijs in de VS-waarschuwingen-tip eenmalig naar *nullable reference types*. **(gedaan, met de toevoeging dat we ze bewust nog niet behandelen.)**

---

> **Future: nog niet aangepakt.** Onderstaande ideeën zijn bewust uitgesteld (afspraak: future-gedeelte komt later).

## Future — ideeën voor de nieuwe editie

> Aanknopingspunten bij dit hoofdstuk voor de toekomstvisie uit [../../future/hoe.md](../../future/hoe.md). Bouwt voort op wat hierboven al opgemerkt is.

### Code Literacy — drie oefentypes
- **Wat doet dit?** — geef het ``Meting``-pass-by-reference-fragment uit [6b_objectenenmethoden.md](6b_objectenenmethoden.md) en laat student voorspellen welke variabelen na de methode-call welke waarde hebben. Past bij het stuk dat al didactisch sterk is.
- **Klopt dit?** — een methode die `string s` "wijzigt" met `s.ToUpper()` zonder return — klassieke AI-blunder die elders in immutable talen wel werkt. Lost meteen het gemis "string als immutable reference" op.
- **Welke is beter?** — `if (x != null) x.DoIt();` vs. `x?.DoIt();` vs. `x?.DoIt() ?? defaultIt();`. Dekt het gemis ``??`` in één klap.

### Stagiair Steven
- Steven schrijft `if (lijst != null && lijst.Count > 0)` waar `lijst?.Count > 0` netter is — natuurlijke aanleiding voor `?.` en `??` callouts.
- Steven roept overal `GC.Collect()` aan "voor de zekerheid" — sluit direct aan bij de zwakte over GC.Collect zonder uitleg.

### Hall of Shame
- AI die een lokale variabele teruggeeft als reference en denkt dat ze de stack overleeft — typische C#/C++-verwarring uit LLM-training data.
- AI die nullable reference types negeert en `string` zonder `?` annoteert terwijl ze `null` retourneert. Sluit aan bij de C# 8-warnings die studenten zien.

### Interview-suggestie
- Een Java/Kotlin-developer over de "Billion Dollar Mistake" (null) en hoe Kotlin het oploste met non-nullable types. Geeft historische context bij de NullReferenceException-uitleg in [nullreference.md](nullreference.md).

### Code-archeologie (oermens)
- Tijdlijn null-omgang: `if (x != null)` (C# 1) → `?.` null-conditional (C# 6) → `??` null-coalescing (klassiek) → `??=` (C# 8) → nullable reference types `string?` (C# 8) → required members (C# 11). Lost meerdere gemissen tegelijk op en geeft AI-output-detector: LLM's hangen vaak vast op pre-C#-6-stijl null-checks.

### Lees-volgorde-pijlen
- De stack/heap-tekening van `Student stud = new Student();` in [6_memorymanagement.md](6_memorymanagement.md): genummerde pijlen 1) heap-allocatie, 2) constructor draait, 3) reference op stack. Sluit aan bij de concrete suggestie om stack en heap *naast* elkaar te tekenen.
- Het bevallingsvoorbeeld in [6b_objectenenmethoden.md](6b_objectenenmethoden.md) (na opsplitsing): pijlen die tonen hoe de reference-parameter wijst naar hetzelfde object op de heap.

### Taalkeuze-callout
- *"Java: alle objecten op heap, geen value types behalve primitives. Python: alles op heap, refcount + GC. Rust: ownership i.p.v. GC — compiler dwingt af wanneer geheugen vrij komt."* Past kort in [6_memorymanagement.md](6_memorymanagement.md), naast het stack/heap-verhaal.

### Mondelinge code-review
- "Verdedig dit reference-gedrag": laat student aan een klasgenoot uitleggen waarom een methode-call op een object *wel* effect heeft buiten de methode terwijl een `int`-parameter dat *niet* heeft. Sluit aan bij de helm-callout uit H7 en bij het ``Meting``-voorbeeld.
