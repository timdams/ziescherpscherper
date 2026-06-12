# Review: Compositie en aggregatie

> Interne didactische review - niet bedoeld voor publicatie.

> **Status editie 5** (verwerkt op 2026-06-11). Markering per punt:
> `[v]` gedaan · `[~]` deels of aangepast aan een stijlkeuze · `[c]` als verborgen TODO-comment in de tekst gezet · `[>]` bewust uitgesteld. De **Future**-sectie en de mini-oefeningen zijn nog niet aangepakt.

## Sterktes

- De openingsboodschap "ik ga eigenlijk niets nieuws uitleggen" in [0_compositie_intro.MD](0_compositie_intro.MD) ontmijnt vooraf de drempelvrees: studenten herkennen dat ze dit al deden zonder de term te kennen.
- De "heeft een" versus "is een" tegenstelling (regel 17-26) sluit naadloos aan op het vorige hoofdstuk en geeft studenten een herbruikbare detectieheuristiek.
- De drie manieren om associatie te realiseren (rechtstreeks, via constructor, via property) zijn een solide didactische opbouw — van eenvoudig naar flexibel.
- De geheugenvisualisatie op regel 196-208 is consistent met eerdere hoofdstukken en versterkt het mentale model.
- De `NullReferenceException`-callout op regel 214-232 is essentieel; veel cursussen vergeten dit, terwijl het de meest voorkomende beginnersfout is bij compositie.
- De donor-patiënt-metafoor op regel 322-332 is memorabel en illustreert "manier 3" goed.
- [this.md](this.md) is compact en heeft drie heldere use-cases die de student kan onthouden.

## Zwaktes

- `[~]` Het verschil aggregatie/compositie wordt niet scherp gemaakt qua lifecycle; de manieren 1-3 worden niet expliciet gekoppeld. **(de "filosofisch"-zin vervangen door een levensduur-uitleg; een volledige expliciete koppeling per manier (tabel) blijft een mogelijke uitbreiding.)**
- `[c]` De UML-notatie (volle vs. lege ruit) wordt enkel impliciet in twee aparte plaatjes getoond. **(TODO-comment geplaatst voor één gecombineerde figuur.)**
- `[v]` De code `cHardeSchijf == null` is een typo (vergelijking i.p.v. toewijzing). **(gefixt naar `= null`, ook in de uitleg eronder.)**
- `[v]` De `Insert`-methode in het `Boek`-voorbeeld heeft een bug (`allPaginas` + verkeerde argumentvolgorde). **(gefixt naar `AllePaginas.Insert(positie, paginaIn);`; ook het List-voorbeeld eerder gecorrigeerd naar `Insert(5, new Pagina())`.)**
- `[~]` `public set` op `AllePaginas` is inconsistent met het eigen advies. **(de verbeterde versie verderop gebruikt al `private set`; de eerdere array-voorbeelden zijn bewust de "before"-stap. Onveranderd gelaten.)**
- `[v]` De zin "het verschil is vooral filosofisch" ondergraaft het onderscheid. **(herschreven naar een uitleg over levensduur.)**

## Onduidelijkheden

- `[v]` De tip "compositie deed je al met `int geboortejaar`" is technisch onjuist (`int` is een value type). **(herschreven: associatie deed je al met een object van een eigen klasse/reference type; value types als contrast vermeld.)**
- `[v]` "Het lijdende voorwerp / onderwerp"-jargon is te moeilijk. **(vervangen door "het innerlijke object" / "het omliggende object".)**
- `[v]` De scope-regels van `this` (instance vs. static) staan nergens. **(callout-important toegevoegd in this.md.)**
- `[c]` De prefix `c` (`cHardeSchijf`) komt zonder uitleg. **(TODO-comment kan; bewust niet inline gewijzigd. Zie ook de In-suffix-opmerking uit H11; consistente naamgevingskeuze aan Tim.)**

## Gemissen

- `[v]` **"Favor composition over inheritance"** wordt niet bij naam genoemd. **(toegevoegd in de afsluitende sectie, met de term cursief.)**
- `[v]` **Wanneer kies je compositie boven overerving?** vuistregel ontbrak. **(vuistregel toegevoegd: twijfel je over is-een, kies dan heeft-een.)**
- `[c]` **Compositie en `null`**: nullable reference types (`HardeSchijf?`) niet vermeld. **(TODO-comment geplaatst; bewust uitgesteld conform de no-nullables-afspraak.)**
- `[~]` **`this` als syntactic sugar voor extension methods**: appendix-niveau. **(bewust weggelaten, zoals de review zelf suggereert.)**
- `[v]` **`this` in chained constructors**: mini-snippet ontbrak. **(snippet `: this(...)` toegevoegd in this.md.)**
- `[v]` **Shared mutable state** bij het hart-transplantatie-voorbeeld. **(callout-important toegevoegd: na de toewijzing wijzen beide naar hetzelfde Hart-object; delen is niet kopiëren.)**

## Concrete suggesties

1. `[~]` Maak expliciet welke "manier" compositie/aggregatie is (eventueel tabel). **(de levensduur-uitleg is aangescherpt; expliciete tabel per manier blijft een optie.)**
2. `[v]` Fix de typo `cHardeSchijf == null`. **(gedaan.)**
3. `[v]` Fix de buggy `Insert`. **(gedaan, beide voorbeelden.)**
4. `[v]` Vervang het "`int geboortejaar`"-compositievoorbeeld. **(herschreven naar reference type.)**
5. `[v]` Vermeld *favor composition over inheritance*. **(toegevoegd.)**
6. `[c]` Eén gecombineerde UML-figuur. **(TODO-comment geplaatst.)**
7. `[v]` Mini-snippet constructor chaining via `: this(...)` in this.md. **(toegevoegd.)**

---

> **Future: nog niet aangepakt.** Onderstaande ideeën zijn bewust uitgesteld (afspraak: future-gedeelte komt later).

## Future — ideeën voor de nieuwe editie

> Aanknopingspunten bij dit hoofdstuk voor de toekomstvisie uit [../../future/hoe.md](../../future/hoe.md). Bouwt voort op wat hierboven al opgemerkt is.

### Code Literacy — drie oefentypes
- **Wat doet dit?** — toon het `Computer`/`HardeSchijf`-fragment uit [0_compositie_intro.MD](0_compositie_intro.MD) waar manier 2 (constructor) en manier 3 (property-injectie) door elkaar staan; laat de student per regel vertellen of het object aggregatie of compositie is, en *waarom*.
- **Klopt dit?** — een AI-gegenereerd `Boek`-met-`Pagina[]` waar de pagina-array buiten de constructor wordt aangemaakt én meegegeven, maar nadien intern opnieuw wordt overschreven met `new Pagina[100]`. Klassieke AI-flater: lifecycle stilletjes verbroken.
- **Welke is beter?** — twee varianten van `Computer`: eentje met `private readonly HardeSchijf` (compositie, lifecycle gegarandeerd) tegenover eentje met `public HardeSchijf {get;set;}` (aggregatie, vrij opnieuw te zetten). Verdedig de keuze.

### Stagiair Steven
- Steven levert een `Auto`-klasse waarin hij "compositie" claimt te gebruiken voor `int Bouwjaar` — exact de fout uit de review (regel 165). Mooie hook om de int-vs-reference-type-discussie te starten.
- Steven schrijft een `Pagina[] AllePaginas {get; set;} = new Pagina[100];` met `public set` — de student moet zien dat de container daardoor van buitenaf overschreven kan worden, met dataverlies.

### Hall of Shame
- AI-output die "favor composition over inheritance" preekt en vervolgens een diepe overervingshiërarchie genereert. Het soort tegenstrijdigheid dat LLM's vaak vertonen tussen commentaar en code.

### Interview-suggestie
- Een softwarearchitect die werkt aan een legacy .NET-codebase: hoe maak je in een bestaand project de *refactor* van overerving naar compositie, en hoe goed (of slecht) helpt AI daarbij?

### Code-archeologie (oermens)
- Het transplantatie-patroon door de tijd: pre-C# 8 met manuele null-checks → C# 8 nullable reference types (`HardeSchijf?`) → moderne `required`-properties (C# 11). De oermens illustreert mooi waarom je in legacy-code soms expliciete null-guards ziet die in nieuwe code overbodig zijn.

### Lees-volgorde-pijlen
- Het donor-patiënt-fragment (regel 322-332): pijl 1 op "nieuw `Hart`-object aanmaken", pijl 2 op "doorgeven aan donor", pijl 3 op "doorgeven aan patiënt", pijl 4 "beide objecten verwijzen naar hetzelfde `Hart`". Maakt shared-mutable-state visueel.

### Taalkeuze-callout
- "In Python is *alles* een referentie; compositie is daar de standaard, overerving veel zeldzamer. In Rust bestaat klassieke OOP-overerving niet — composition is daar geen advies maar gegeven via `struct`-velden en traits."
