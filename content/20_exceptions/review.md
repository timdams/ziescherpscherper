# Review: Exception handling (20_exceptions/)

> Interne didactische review — niet bedoeld voor publicatie.

> **Status editie 5** (verwerkt op 2026-06-11). Markering per punt:
> `[v]` gedaan · `[~]` deels of aangepast aan een stijlkeuze · `[c]` als verborgen TODO-comment in de tekst gezet · `[>]` bewust uitgesteld. De **splitsing over twee hoofdstukken** (H10 vs H14) is een structurele keuze: TODO-comments staan bovenaan elk bestand. De **Future**-sectie is nog niet aangepakt.

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

- `[v]` De volgorde **`try/catch/finally`** wordt nooit als geheel uitgelegd. `finally` komt pas helemaal achteraan in [waarplaatsen.md](waarplaatsen.md). **(`finally`-sectie verhuisd naar het einde van [0_exceptionhandling.md](0_exceptionhandling.md) als "het derde lid"; in [waarplaatsen.md](waarplaatsen.md) blijft enkel een korte terugverwijzing.)**
- `[v]` De **catch-volgorde** ("specifieke eerst") wordt benoemd, maar zonder uitleg wát er gebeurt als je het andersom doet. **(callout-warning toegevoegd met de exacte compiler-fout "A previous catch clause already catches all exceptions...".)**
- `[v]` De **`Exception`-hiërarchie** wordt als tabel getoond, maar zonder boomdiagram. **(tekst-boom `Exception → SystemException → {...}` toegevoegd na de tabel, met noot die naar polymorfisme (H16) verwijst.)**
- `[v]` Het foutje `int converted = Convert.ToInt32(input)` (geen puntkomma). **(puntkomma toegevoegd; het was een tikfout.)**
- `[v]` Lege `catch { }` zonder type; verschil tussen `catch`, `catch (Exception)` en `catch (Exception e)` niet benoemd. **(anti-pattern callout "Wat je niét moet doen" toegevoegd, inclusief de uitleg over de naamloze `catch (Exception)`.)**

## Onduidelijkheden

- `[v]` **call stack unwinding** wordt impliciet ingevoerd zonder naam. **(term *stack unwinding* expliciet toegevoegd bij de `throw`-uitleg.)**
- `[v]` ``catch (FormatException e)`` met ongebruikte `e` geeft een compiler-warning. **(vermeld in de anti-pattern callout, met de tip om dan `catch (Exception)` zonder naam te schrijven.)**
- `[v]` In [1_eigenuitzondering.md](1_eigenuitzondering.md) ontbreekt de conventie van **drie standaard-constructors**. **(callout toegevoegd met de drie constructors en de uitleg waarom VS die voorstelt.)**

## Gemissen

- `[~]` **`finally` en resource cleanup → `using`-statement**. **(korte vooruitwijzing naar het bestandshoofdstuk toegevoegd bij de `finally`-sectie; volledige `using`-uitleg hoort daar.)**
- `[c]` **`when`-filter**. **(TODO-comment geplaatst; niet inline, lage prioriteit voor eerstejaars.)**
- `[v]` **`throw;` vs. `throw ex;`**. **(callout-warning toegevoegd in [1_eigenuitzondering.md](1_eigenuitzondering.md) over het wissen van de stack trace.)**
- `[v]` **InnerException**. **(uitgelegd bij de derde standaard-constructor in [1_eigenuitzondering.md](1_eigenuitzondering.md).)**
- `[v]` Een echte **anti-pattern callout** (swallowing). **(concreet voorbeeld met leeg `catch { }` toegevoegd in [0_exceptionhandling.md](0_exceptionhandling.md).)**

## Concrete suggesties

1. `[c]` Hernoem de bestanden zodat duidelijk is welk bestand bij welk hoofdstuk hoort, of voeg een commentaar toe. **(TODO-comment over de H10/H14-splitsing kan bovenaan; structurele _quarto.yml-keuze aan Tim. Niet hernoemd om paden niet te breken.)**
2. `[v]` Visuele boom `Exception → SystemException → {...}`. **(toegevoegd als tekst-boom.)**
3. `[v]` Verhuis het `finally`-stuk naar het einde van [0_exceptionhandling.md](0_exceptionhandling.md). **(gedaan.)**
4. `[v]` Korte anti-pattern-sectie *"Wat je niét moet doen"*. **(toegevoegd.)**
5. `[v]` Toon de drie standaard-constructors. **(gedaan.)**
6. `[v]` Fix de ontbrekende puntkomma. **(gedaan, plus een tweede interpolatie-bug `$"StackTrace: ..."` rechtgezet.)**

---

> **Future: nog niet aangepakt.** Onderstaande ideeën zijn bewust uitgesteld (afspraak: future-gedeelte komt later).

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
