# Review: H11 — Gevorderde klasseconcepten (10_advancedklassen/)

> Interne didactische review — niet bedoeld voor publicatie.

Folder dekt constructors, overloaded constructors, `this(...)`, object initializer syntax, `required`, en `static`. Volgorde in `_quarto.yml`: [1_constructors.md](1_constructors.md) → [2_overloadedconstructor.md](2_overloadedconstructor.md) → [2_objectinitsyntax.md](2_objectinitsyntax.md) → [5_static.md](5_static.md) → [kennisclips.md](kennisclips.md).

## Sterktes

- De **aannemers-analogie** voor "soms wel, soms niet gratis een default constructor" in [1_constructors.md](1_constructors.md) is concreet en werkt. Wordt mooi herhaald bij overloading in [2_overloadedconstructor.md](2_overloadedconstructor.md).
- De **drie acties van `new`** (heap, constructor, referentie) is een uitstekend opsomminkje dat studenten kunnen onthouden.
- Het **`Breuk`-voorbeeld** in [2_overloadedconstructor.md](2_overloadedconstructor.md) maakt het *nut* van een overloaded constructor concreet: voorkomen dat iemand een breuk zonder noemer aanmaakt en zo crasht. Goeie motivatie.
- De **`Microfoon`** met `: this(...)` en de uitwerking in 4 stappen waar de constructor-call eindigt op `Wit Product` — uitstekend. Dit type *trace-execution* dwingt studenten goed na te denken.
- De `Dobbelsteen` met static `Random` ([5_static.md](5_static.md), eind) is hét klassieke voorbeeld om `static` te motiveren. Goed bewaard voor het einde.
- De **callout dat full properties best in de constructor aangeroepen worden** (niet de backing field) is waardevolle defensieve programmeer-tip.

## Zwaktes

- In [1_constructors.md](1_constructors.md) staat "*we hebben in de klasse Student de constructor nog niet expliciet beschreven... maar deze constructor bestaat wel degelijk*" en daarna "*van zodra je echter beslist om zelf een constructor te schrijven... de default constructor die je gratis kreeg zal ook niet meer bestaan*". Studenten lezen dit twee keer zonder dat het echt blijft hangen, omdat ze geen voorbeeld zien van *de fout* (compile error: "does not contain a constructor that takes 0 arguments"). Een screenshot helpt.
- [2_objectinitsyntax.md](2_objectinitsyntax.md) introduceert `required` (C# 11), maar de **volgorde van uitvoer** (default constructor → init-block → required-check) wordt niet uitgelegd. Studenten ervaren dit als magie.
- In [5_static.md](5_static.md) is het `Mens.geboorteJaar`-voorbeeld didactisch zwak: het verandert de *betekenis* van het veld (van "het geboortejaar van deze persoon" naar "een gedeelde teller die toevallig zo heet"). Het illustreert de mechaniek wel, maar leert studenten een fout mentaal model van wat `static` *waar voor staat*.
- De zin "*De ``Math`` klasse is op de koop toe ook zelf static gemaakt*" suggereert dat `static class` extra is bovenop `static method`. Wordt niet hard genoeg uitgelegd dat een `static class` *enkel* `static` members mag hebben.
- Tikfouten: missende puntkomma in `Noemer = noemerIn` (twee plekken in [2_overloadedconstructor.md](2_overloadedconstructor.md)), `bijNaam` versus `BijNaam` inconsistent, `gen.Nex` ipv `gen.Next` in de Balletje-tip in [1_constructors.md](1_constructors.md), `IsWerkStudent` als `string` ipv `bool`.
- De callout dat *static constructors niet besproken worden* sluit de deur, maar wel net als studenten beginnen begrijpen waarom je iets éénmalig zou willen initialiseren. Eén voorbeeldje (zonder diepe uitleg) was genoeg geweest.

## Onduidelijkheden

- *"Method overload resolution en de **betterness** regel"* in [2_overloadedconstructor.md](2_overloadedconstructor.md) — *betterness* is jargon dat nergens eerder valt en niet wordt uitgelegd. Wordt door eerstejaars overgeslagen.
- In [2_objectinitsyntax.md](2_objectinitsyntax.md): "*Object initializer syntax laat je toe om tijdens creatie van een object, properties beginwaarden te geven*" — maar of dit ook werkt voor private setters wordt niet duidelijk. (Het werkt niet, en dat is een veelgestelde vraag.)
- Bij `static`: het verschil tussen *static field*, *static property* en *const* wordt niet expliciet gemaakt. Studenten gebruiken vaak `public static readonly` zonder de varianten te begrijpen.
- De `Debug.WriteLine`-intermezzo in [5_static.md](5_static.md) is op zich nuttig, maar zit midden in het static-verhaal en breekt de flow. Hoort beter in een appendix of een aparte tip.

## Gemissen

- **Chained constructors met `: base(...)`** wordt nergens vermeld — past wel bij overerving (H13), dus voorlopig OK, maar één voetnoot kan vooruitwijzen.
- **`readonly` fields** ontbreken volledig. Toch een eerstejaars-relevant concept (immutability na constructie).
- **Init-only properties** (`{ get; init; }`, C# 9) worden niet besproken, terwijl `required` wel aan bod komt. Die twee horen samen.
- **Primary constructors (C# 12)**: `public class Punt(int x, int y)` — kort vermelden als moderne syntax voorkomt verwarring, want studenten zien dit in nieuwe templates en op Stack Overflow.
- **Static constructor** krijgt één callout waarin staat dat hij niet besproken wordt. Een vooruitwijzing of klein voorbeeld helpt.
- **Naamgevingsconventie**: `merkIn` als parameter naam impliceert een conventie ("In"-suffix) die in de echte wereld zeldzaam is. Veroorzaakt later verwarring als studenten andere codebases lezen waar parameters gewoon `merk` heten.

## Concrete suggesties

1. Voeg na het *aannemers-stuk* in [1_constructors.md](1_constructors.md) een minivoorbeeld met de **echte foutboodschap** in: "Student does not contain a constructor that takes 0 arguments".
2. Vervang in [5_static.md](5_static.md) het `Mens.geboorteJaar`-voorbeeld door een neutrale teller (bv. `aantalMensenAangemaakt`). Het huidige voorbeeld geeft een verkeerd mentaal model.
3. Verhuis de `Debug.WriteLine`-intermezzo naar een eigen sectie of voetnoot.
4. Voeg in [2_objectinitsyntax.md](2_objectinitsyntax.md) een sectie toe over **`init`-only properties** als logische tussenstap tussen object initializer en `required`.
5. Fix de tikfouten: `gen.Nex` → `gen.Next`, `IsWerkStudent` → `bool`, ontbrekende `;` na `Noemer = noemerIn`, `bijNaam` consistent maken met `BijNaam` (privésetters via property, niet field).
6. Voeg in [1_constructors.md](1_constructors.md) of [2_overloadedconstructor.md](2_overloadedconstructor.md) een korte voetnoot over **primary constructors** (C# 12) — studenten zien dat in nieuwe `record class`-templates.
7. Documenteer de `In`-suffix-keuze (of laat hem vallen): waarom `merkIn` en niet `merk`?

---

## Future — ideeën voor de nieuwe editie

> Aanknopingspunten bij dit hoofdstuk voor de toekomstvisie uit [../../future/hoe.md](../../future/hoe.md). Bouwt voort op wat hierboven al opgemerkt is.

### Code Literacy — drie oefentypes
- **Wat doet dit?** — neem de `Microfoon`-constructor met `: this(...)` uit [2_overloadedconstructor.md](2_overloadedconstructor.md) en laat studenten de output (`Wit Product` etc.) op papier voorspellen, zonder IDE. Sluit aan bij de bestaande "trace-execution"-sterkte.
- **Klopt dit?** — laat Steven een klasse `Breuk` schrijven waarin hij vergeet de overloaded constructor `Breuk(int teller)` met `: this(teller, 1)` te chainen en in plaats daarvan de body kopieert. Subtiele DRY-bug die LLM's typisch maken.
- **Welke is beter?** — twee `Punt`-klassen naast elkaar: één met klassieke constructor + properties, één met **primary constructor** (C# 12, zie ook gemis hierboven). Studenten verdedigen wanneer welke past.

### Stagiair Steven
- Steven levert een klasse aan met **`required`** properties maar zonder default constructor en is verbaasd dat de tests breken. Past pal op de "magie van uitvoervolgorde"-zwakte uit de review.
- Steven gebruikt `static` voor een veld dat conceptueel per-instantie hoort (à la `Mens.geboorteJaar`-zwakte). Ideale leesopdracht: "wat zou er gebeuren als twee studenten gelijktijdig worden aangemaakt?"

### Hall of Shame
- Klassieker in deze categorie: AI die in een constructor de property zet via het backing field (`_naam = naamIn`) terwijl er een full property met validatie is — exact het scenario dat de defensieve callout in dit hoofdstuk al adresseert.
- AI die voor een teller of cache een gewone instance variable gebruikt waar `static` hoort, en omgekeerd.

### Interview-suggestie
- Een **library/framework-auteur** (NuGet-pakket maintainer) over hoe hij constructor-overloads en `required`/`init` gebruikt om breaking changes te vermijden. Past direct bij het "voorkomen dat iemand een breuk zonder noemer aanmaakt"-argument.

### Code-archeologie (oermens)
- Mooie tijdlijn voor dit hoofdstuk: pre-C# 3 (alles via constructors) → C# 3 (object initializer syntax) → C# 9 (`init`) → C# 11 (`required`) → C# 12 (primary constructors). Studenten leren waarom AI hen soms "ouderwetse" code voorschotelt met expliciete getters/setters waar `init` of `required` de modernere oplossing is.

### Lees-volgorde-pijlen
- Het `Microfoon`-fragment met `: this(...)` schreeuwt om genummerde pijlen: 1 → call van constructor met 0 args, 2 → springt naar `this("Wit Product")`, 3 → body van die constructor, 4 → terug. De huidige 4-stappen-uitwerking is tekstueel; visuele pijltjes versterken dit drastisch.

### Taalkeuze-callout
- Bij `static`: "*In Python is bijna alles een class-attribute by default; in JavaScript bestaat `static` pas sinds ES6 en gedraagt het zich subtiel anders bij overerving.*"
- Bij `required`: "*Kotlin lost dit op met `lateinit` of niet-nullable types in de constructor; TypeScript heeft `strictPropertyInitialization`.*"
