# Review: Compositie en aggregatie

> Interne didactische review — niet bedoeld voor publicatie.

## Sterktes

- De openingsboodschap "ik ga eigenlijk niets nieuws uitleggen" in [0_compositie_intro.MD](0_compositie_intro.MD) ontmijnt vooraf de drempelvrees: studenten herkennen dat ze dit al deden zonder de term te kennen.
- De "heeft een" versus "is een" tegenstelling (regel 17-26) sluit naadloos aan op het vorige hoofdstuk en geeft studenten een herbruikbare detectieheuristiek.
- De drie manieren om associatie te realiseren (rechtstreeks, via constructor, via property) zijn een solide didactische opbouw — van eenvoudig naar flexibel.
- De geheugenvisualisatie op regel 196-208 is consistent met eerdere hoofdstukken en versterkt het mentale model.
- De `NullReferenceException`-callout op regel 214-232 is essentieel; veel cursussen vergeten dit, terwijl het de meest voorkomende beginnersfout is bij compositie.
- De donor-patiënt-metafoor op regel 322-332 is memorabel en illustreert "manier 3" goed.
- [this.md](this.md) is compact en heeft drie heldere use-cases die de student kan onthouden.

## Zwaktes

- Het verschil tussen aggregatie en compositie wordt **niet scherp gemaakt qua lifecycle**. Op regel 12-13 staat een correcte definitie, maar de manieren 1-3 worden niet gekoppeld aan dit onderscheid — pas op regel 139 zegt je "vorige 2 voorbeelden waren eigenlijk compositie, manier 3 is aggregatie", terwijl de code in manier 2 ook gewoon een meegegeven schijf via parameter zou kunnen aggregeren.
- De UML-notatie wordt vermeld (volle vs. lege ruit) maar het verschil wordt enkel impliciet getoond in twee verschillende afbeeldingen. Een expliciet bordje "volle ruit = compositie, lege ruit = aggregatie" met *één* sample-afbeelding zou efficiënter zijn.
- De code op regel 120 `cHardeSchijf == null` is een typo (vergelijking i.p.v. toewijzing) — dat wordt vervolgens "uitgelegd" in een opmerking onder de code, alsof het bewust was. Studenten die deze code in VS plakken zien een red squiggle en raken in de war.
- De `Insert`-methode in het `Boek`-voorbeeld op regel 295-303 heeft een bug: `allPaginas.Insert(paginaIn, positie)` (verkeerde naam, en `List.Insert` neemt `(int index, T item)`, niet andersom).
- Op regel 247 staat `public Pagina[] AllePaginas {get;set;} = new Pagina[100];` met `public set` — vlak nadat in [0_overerving_intro.MD](../12_overerving/0_overerving_intro.MD) een tip stond om properties van overgeërfde state via `private set` te beschermen. Inconsistentie qua eigen advies.
- De zin op regel 61 "het verschil is vooral filosofisch" ondergraaft het hele onderscheid dat je net hebt opgezet. In code is er inderdaad weinig verschil, maar didactisch is dat dempend.

## Onduidelijkheden

- Op regel 165 staat een tip "compositie deed je al wanneer je `int geboortejaar` schreef". Dat is technisch onjuist — `int` is een value type, en compositie/aggregatie gaan over reference types met eigen lifecycle. Een int "leeft" niet onafhankelijk. Dit zal het concept eerder verwarren dan verduidelijken.
- "Het lijdende voorwerp zal steeds het object zijn dat binnen het onderwerp zal geplaatst worden" (regel 15) — taalkundige terminologie ("lijdend voorwerp", "onderwerp") is voor een gemiddelde eerstejaars al een uitdaging. Iets simpelers ("het 'innerlijke' object") werkt beter.
- In [this.md](this.md) regel 14-16 wordt een screenshot-tip getoond ("met `this` zien we letterlijk alles") maar de scope-regels van `this` (binnen instance method, niet binnen `static`) staan nergens.
- De prefix `c` (zoals in `cHardeSchijf`) komt zonder uitleg — is dat een naamconventie die je elders introduceert? Voor eerstejaars die net `this.` hebben geleerd, is een eigen Hongaarse notatie verwarrend.

## Gemissen

- **"Favor composition over inheritance"**: dit is *het* klassieke OOP-adagium. De callout op regel 318-321 zegt "in de praktijk vaker compositie dan overerving" maar koppelt dat niet aan het bekende principe. Eén zinnetje "in de OOP-literatuur wordt dit *favor composition over inheritance* genoemd" geeft studenten een Google-bare term.
- **Wanneer kies je compositie boven overerving?**: de cursus zegt vooral wanneer ze samen gaan ("of") maar geeft geen vuistregel ("als je niet helemaal zeker bent over is-een, kies dan voor heeft-een").
- **Compositie en `null`**: goed dat de `NullReferenceException`-paragraaf erin staat, maar nullable reference types (`HardeSchijf?`) worden niet vermeld. Zelfs als die buiten scope vallen, hoort er een voetnoot.
- **`this` als syntactic sugar voor extension methods**: kan weg, dat is appendix-niveau.
- **`this` in chained constructors**: regel 7 in [this.md](this.md) verwijst naar "hoofdstuk 11" voor `: this(...)` constructor chaining, maar je toont géén voorbeeld in dit hoofdstuk en het terugkomen is hier toch logisch — minstens een mini-snippet.
- **Compositie doorgeven als referentie (shared mutable state)**: het hart-transplantatie-voorbeeld toont mooi dat objecten gedeeld kunnen worden, maar de implicatie ("twee objecten zien dezelfde mutaties") komt niet aan bod.

## Concrete suggesties

1. Maak op regel 84-149 expliciet welke "manier" tot compositie hoort en welke tot aggregatie, eventueel met een tabelletje. De huidige uitleg "manier 1 en 2 = compositie, manier 3 = aggregatie" is te impliciet.
2. Fix de typo `cHardeSchijf == null` → `cHardeSchijf = null` op regel 120, en pas de uitleg eronder aan.
3. Fix de buggy `Insert` op regel 295-303 (`allPaginas` → `AllePaginas`, en argumentvolgorde van `List.Insert`).
4. Vervang het "compositie deed je al met `int geboortejaar`"-voorbeeld door een betere illustratie met een reference type, of haal de zin weg.
5. Voeg in de afsluitende sectie een expliciete vermelding van *favor composition over inheritance* toe.
6. Eén UML-figuur die naast elkaar volle en lege ruit toont, met onderschrift "compositie vs. aggregatie", in plaats van twee aparte plaatjes.
7. In [this.md](this.md): voeg een mini-snippet toe van constructor chaining via `: this(...)` zodat de derde use-case ook in dit hoofdstuk concreet wordt.

---

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
