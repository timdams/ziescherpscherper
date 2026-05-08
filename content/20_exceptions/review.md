# Review: Exception handling (20_exceptions/)

> Interne didactische review — niet bedoeld voor publicatie.

**Belangrijke opmerking vooraf:** deze folder is in `_quarto.yml` opgesplitst over twee hoofdstukken:

- [0_exceptionhandling.md](0_exceptionhandling.md) en [waarplaatsen.md](waarplaatsen.md) horen bij **H10** (Geheugenmanagement en uitzonderingen).
- [1_eigenuitzondering.md](1_eigenuitzondering.md) hoort pas bij **H14** (na abstract klassen en overerving).

**Is die opsplitsing didactisch zinvol?** Ja, in principe. *Zelf* `Exception`-klassen schrijven vereist begrip van overerving — dat heb je in H10 nog niet. Dat verantwoordt waarom [1_eigenuitzondering.md](1_eigenuitzondering.md) op die plek staat. Maar: de mapnaam `20_exceptions` suggereert eenheid, en de file-prefixing (`0_`, `1_`) versterkt die illusie. Voor onderhoud is dit verraderlijk — Tim zelf zal binnen een jaar vergeten zijn dat `1_eigenuitzondering.md` *niet* met de andere twee meeloopt. Suggestie: ofwel hernoem de bestanden zodat de splitsing zichtbaar is (bv. `h10_*` en `h14_*`), ofwel verhuis [1_eigenuitzondering.md](1_eigenuitzondering.md) naar een aparte folder onder `content/14_*`.

## Sterktes

- De **dramatische intro** van [0_exceptionhandling.md](0_exceptionhandling.md) ("ik heb informatie achter gehouden") werkt: geeft betekenis aan waarom dit nu komt.
- De **drie categorieën fouten** (ontbrekende data, foute invoer, programmeerfouten) zijn een nuttige mentale checklist.
- Het **"waar plaats je try/catch"-stuk** in [waarplaatsen.md](waarplaatsen.md) is sterk: het toont concreet dat de plaats van `try/catch` het gedrag beïnvloedt, met dezelfde code en twee verschillende outputs. Dit is precies waar studenten op vastlopen in oefeningen.
- De **security-callout** ("toon Exception-info niet aan eindgebruiker") is kort, maar wel relevant en op de juiste plek.
- De **MSDN-screenshot** met "welke exceptions gooit deze methode" stuurt studenten naar de juiste reflex: lees de docs.
- De `Timception`-grap in [1_eigenuitzondering.md](1_eigenuitzondering.md) is herkenbaar en blijft hangen.

## Zwaktes

- De volgorde **`try/catch/finally`** wordt nooit als geheel uitgelegd. `finally` komt pas helemaal achteraan in [waarplaatsen.md](waarplaatsen.md), na de exception-hiërarchie en eigen-exceptions. Studenten zien `finally` daardoor als bijzaak, terwijl het juist het derde lid van de drie-eenheid is.
- De **catch-volgorde** ("specifieke eerst") wordt wel benoemd in [0_exceptionhandling.md](0_exceptionhandling.md), maar zonder uitleg wát er gebeurt als je het andersom doet (compiler-error: "A previous catch clause already catches all exceptions"). Een klein foutscherm zou de regel hard maken.
- De **`Exception`-hiërarchie** wordt als tabel getoond met vier voorbeelden, maar zonder boomdiagram. Eerstejaars hebben overerving op dit punt nog niet gezien (het komt pas in H13/14), maar de hiërarchie is hier al *impliciet* aanwezig — dat wringt.
- Het foutje `int converted = Convert.ToInt32(input)` (geen puntkomma) staat letterlijk in de tekst voor het try/catch-voorbeeld. Ofwel was het bewust om te tonen dat dit op zich geen exception is maar een compile-error — dan moet dat erbij — ofwel is het een tikfout.
- In [0_exceptionhandling.md](0_exceptionhandling.md) staat een lege `catch { }` zonder type. Het verschil tussen `catch`, `catch (Exception)` en `catch (Exception e)` wordt niet benoemd, en de **anti-pattern "lege catch swallowing"** wordt niet besproken.

## Onduidelijkheden

- *"Bij een ``throw`` zal je terug gaan tot de eerste plek waar een ``catch`` klaarstaat"*: het concept **call stack unwinding** wordt hier impliciet ingevoerd zonder naam. Studenten die dit niet snappen, plaatsen `try` op de verkeerde plek (en jouw [waarplaatsen.md](waarplaatsen.md) gaat hier net wel over, maar koppelt het niet expliciet terug).
- ``catch (FormatException e)`` met ongebruikte `e` geeft een compiler-warning in moderne C#-versies; wordt niet vermeld.
- In [1_eigenuitzondering.md](1_eigenuitzondering.md) ontbreekt de conventie dat eigen `Exception`-klassen **drie standaard-constructors** krijgen (default, met message, met message + innerException). Dat is precies wat de Roslyn-quickfix voorstelt — niet vermelden zorgt voor verwarring.

## Gemissen

- **`finally` en resource cleanup → `using`-statement** als logische opvolger ontbreekt. Een korte vooruitwijzing ("zie hoofdstuk bestanden") zou helpen.
- **`when`-filter** (`catch (SqlException ex) when (ex.Number == 547)`) — niet hoogste prioriteit voor eerstejaars, maar één voetnoot is genoeg.
- **`throw;` vs. `throw ex;`** — de gevolgen voor de stack trace zijn een klassieke valkuil. Hoort bij [1_eigenuitzondering.md](1_eigenuitzondering.md).
- **InnerException** wordt nergens vermeld, hoewel het standaard `Exception`-property is en eigen exceptions die typisch wrappen.
- Een echte **anti-pattern callout**: "Vang nooit `Exception` op zonder iets te doen — zo verberg je bugs in plaats van ze op te lossen." Tim hint dit wel in de intro maar maakt het nooit concreet met een voorbeeld.

## Concrete suggesties

1. Hernoem de bestanden zodat duidelijk is welk bestand bij welk hoofdstuk hoort, of voeg een commentaar bovenaan elk bestand toe.
2. Voeg in [0_exceptionhandling.md](0_exceptionhandling.md) een visuele boom toe: `Exception → SystemException → {NullReferenceException, IndexOutOfRangeException, FormatException, ...}`. Hoeft geen volledige boom, alleen de relevante takken.
3. Verhuis het `finally`-stuk uit [waarplaatsen.md](waarplaatsen.md) naar het einde van [0_exceptionhandling.md](0_exceptionhandling.md), zodat het `try/catch/finally`-trio bij elkaar staat.
4. Voeg in [0_exceptionhandling.md](0_exceptionhandling.md) een korte anti-pattern-sectie *"Wat je niét moet doen"* toe met `catch { }`, `catch(Exception) { }` en silent swallowing.
5. In [1_eigenuitzondering.md](1_eigenuitzondering.md): toon de drie standaard-constructors van een eigen exception en leg uit waarom Visual Studio die voorstelt.
6. Fix de ontbrekende puntkomma na `Convert.ToInt32(input)` of expliciteer dat dit bewust is.

---

## Future — ideeën voor de nieuwe editie

> Aanknopingspunten bij dit hoofdstuk voor de toekomstvisie uit [../../future/hoe.md](../../future/hoe.md). Bouwt voort op wat hierboven al opgemerkt is.

### Code Literacy — drie oefentypes
- **Wat doet dit?** — een `try/catch` in de aanroepende methode versus in de aangeroepen methode (zie [waarplaatsen.md](waarplaatsen.md)): laat de student zonder runnen voorspellen welk van beide outputs hoort bij welke variant.
- **Klopt dit?** — toon AI-code met catch-volgorde fout (`catch (Exception)` vóór `catch (FormatException)`); student benoemt waarom de compiler protest aantekent. Sluit aan bij de gemiste foutmelding-screenshot uit de zwaktes.
- **Welke is beter?** — een `catch { }` versus `catch (FormatException ex) { Log(ex); }` versus `catch (Exception)` — drie smaken, student verdedigt welke en wanneer. Pakt meteen de ontbrekende anti-pattern callout mee.

### Stagiair Steven
- Steven levert zonder blikken `catch (Exception) { }` om "alle bugs op te lossen". De student moet uitleggen wat hij in één try-blok stuk maakt.
- Steven wrapt elke methode-body in `try/catch` "voor de zekerheid". Code-archeologisch te ontkrachten.

### Hall of Shame
- LLM's verzinnen graag exceptions die niet bestaan (`InvalidInputException`, `FileMissingException`) of swallow-pattern code zonder logging. Beide passen hier strak.
- Klassieker: AI die `throw ex;` gebruikt en zo de stack trace wist — sluit aan bij de gemissen-bullet daarover.

### Interview-suggestie
- Een SRE of backend-developer die incidenten onderzoekt: hoe vaak hangt een productiebug af van een goed (of slecht) opgevangen exception? Concreet: laat ze één echte stack-trace meebrengen en commentaar geven.

### Code-archeologie (oermens)
- Tijdlijn: `try/catch` (alle versies) → `using` block met accolades (C# 1) → `using`-declaration zonder accolades (C# 8) → `try` met `when`-filter (C# 6). Toont meteen waarom AI soms verouderde patterns voorstelt.

### Lees-volgorde-pijlen
- Het tweeledige voorbeeld in [waarplaatsen.md](waarplaatsen.md) waar dezelfde code op twee plekken `try/catch` heeft: nummer de stappen in de call-stack-unwinding zodat studenten zien *waar* de uitvoering naartoe springt.

### Taalkeuze-callout
- Korte vergelijking bij [0_exceptionhandling.md](0_exceptionhandling.md): Python heeft `try/except/finally` met dezelfde semantiek, JavaScript geen checked exceptions, Rust gebruikt `Result<T, E>` en kent geen exceptions. Student leert dat "exception handling" niet universeel is.

### Mondelinge code-review *(natuurlijk passend)*
- Eigen exceptions uit [1_eigenuitzondering.md](1_eigenuitzondering.md) zijn ideaal materiaal: laat de student zijn keuze voor een eigen `Timception` mondeling verdedigen tegenover "had ook gewoon `ArgumentException` gekund".
