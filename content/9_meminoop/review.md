# Review: H10 deel 1 — Geheugenmanagement (9_meminoop/)

> Interne didactische review — niet bedoeld voor publicatie.

Deze folder bevat de kern van H10: stack/heap, value vs. reference, GC, objecten in methoden, null en namespaces. De rest van H10 (try/catch) zit in [../20_exceptions/](../20_exceptions/).

## Sterktes

- De **stack/heap-uitleg** in [6_memorymanagement.md](6_memorymanagement.md) bouwt netjes voort op H8. De vergelijking *"klein bankje naast de zandbak"* is concreet en blijft hangen.
- De **stap-voor-stap visualisatie** van `Student stud = new Student();` (split in 2 regels, drie geheugentekeningen) is uitstekend. Dit is precies wat eerstejaars nodig hebben.
- De callout dat de *hele* klasse op de heap zit, ook al bevat ze value-type members, is belangrijk en wordt expliciet vermeld.
- De pass-by-reference-uitleg in [6b_objectenenmethoden.md](6b_objectenenmethoden.md) met het ``Meting``-voorbeeld is mooi: bondig en met duidelijke output.
- De politie-analogie voor namespaces in [namespaces.md](namespaces.md) is een goede mentale haak.

## Zwaktes

- Het **bevallingsvoorbeeld** in [6b_objectenenmethoden.md](6b_objectenenmethoden.md) sleept te lang door en eindigt didactisch zwak: er staan tikfouten in (``papa.MaxLengte`` waar het ``dePapa.MaxLengte`` moet zijn, twee keer) én het mengt het *concept van by-reference* met *een methode die ``null`` teruggeeft als guard*. Dat zijn twee aparte lessen.
- ``string`` wordt nergens expliciet als reference type benoemd, terwijl studenten net daar in de war geraken (waarom werkt `string s = "x"; s = "y";` *toch* alsof het een value type is?). Mis kans om immutability uit te leggen.
- Het stukje GC sluit af met ``GC.Collect()`` *"ten stelligste afgeraden"* zonder echt uit te leggen waarom — een eerstejaars onthoudt dan vooral dat dit bestaat en gaat het uitproberen.
- In [nullreference.md](nullreference.md) zegt de tip "VS dwingt je `= null` expliciet te schrijven" zonder context: dit gaat over **nullable reference types** (C# 8+) maar dat begrip valt nooit. Studenten zien dan plots een waarschuwingsstreepje en weten niet waarom.

## Onduidelijkheden

- In [6_memorymanagement.md](6_memorymanagement.md) staat: *"reference types véél meer voorkomen: simpelweg omdat alles in C# een object is (en dus ook arrays van objecten én zelfs valuetypes, enz.)."* — dit klopt strikt, maar verwart: een `int` is een value type maar erft van `System.Object`. Boxing wordt niet uitgelegd, dus deze zin levert meer vragen op dan antwoorden.
- De zin *"Merk op dat de variabele ``stud`` eigenlijk de waarde ``null`` heeft. We leggen later uit wat dit juist wil zeggen."* — "later" is in [nullreference.md](nullreference.md), maar tussenin staat het bevallingsvoorbeeld dat al ``null`` als returnwaarde gebruikt. Volgorde wringt.
- In `ZoekStudent` in [nullreference.md](nullreference.md) wordt de loop niet vroegtijdig afgebroken bij een match — geen probleem, maar bij eerstejaars wekt dat de indruk dat dit zo *moet*. Een korte toelichting (efficiëntie vs. eenvoud) helpt.
- ``namespace`` wordt uitgelegd, maar **file-scoped namespaces** (`namespace Foo;` zonder accolades, standaard in C# 10+ templates) worden niet vermeld — dat is wel wat studenten in hun nieuwe projecten zien.

## Gemissen

- **Operator `??` (null-coalescing)** ontbreekt volledig. `?.` wordt wel vermeld, maar `??` en `??=` zijn even essentieel voor moderne C#.
- **`Nullable<T>` / `int?`** valt niet — terwijl studenten dit later in databases en JSON tegenkomen.
- **Pass-by-reference voor value types met `ref`/`out`** wordt niet eens kort genoemd; minstens een vooruitwijzing was nuttig.
- **`string` als immutable reference type** verdient een paar regels: waarom geeft `s.ToUpper()` geen verandering aan `s`?
- **Concrete grootte van stack** (typisch 1 MB) en **StackOverflowException** worden in de kennisclips genoemd maar niet in de tekst zelf — een korte vermelding maakt het tastbaar.
- **`using` als statement** (niet directive) — dus de `using (var stream = ...)`-vorm — komt nergens voor, terwijl die thuishoort bij dit hoofdstuk over resource management.

## Concrete suggesties

1. Splits het bevallingsvoorbeeld in [6b_objectenenmethoden.md](6b_objectenenmethoden.md) op: bewaar het *by-reference*-deel hier, verhuis het *return null*-deel naar [nullreference.md](nullreference.md) — daar past het beter.
2. Voeg in [6_memorymanagement.md](6_memorymanagement.md) een minihoofdstukje toe *"Wat met `string`?"* met de boodschap: reference type, maar gedraagt zich als value type omdat het immutable is.
3. Fix de twee `papa.MaxLengte` tikfouten naar `dePapa.MaxLengte`.
4. Voeg in [nullreference.md](nullreference.md) een sectie **`??` en `??=`** toe direct na de `?.`-uitleg — drie regels volstaan.
5. Maak één figuur waarin stack en heap **naast elkaar** staan met pijlen, in plaats van de huidige losse plaatjes per stap. Studenten verliezen overzicht.
6. Verwijs in de tip over VS-waarschuwingen ([nullreference.md](nullreference.md)) eenmalig naar *nullable reference types* zodat het mysterie weg is.

---

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
