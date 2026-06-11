# Review: H11 — Gevorderde klasseconcepten (10_advancedklassen/)

> Interne didactische review - niet bedoeld voor publicatie.

> **Status editie 5** (verwerkt op 2026-06-11). Markering per punt:
> `[v]` gedaan · `[~]` deels of aangepast aan een stijlkeuze · `[c]` als verborgen TODO-comment in de tekst gezet · `[>]` bewust uitgesteld. De **Future**-sectie en de mini-oefeningen zijn nog niet aangepakt.

Folder dekt constructors, overloaded constructors, `this(...)`, object initializer syntax, `required`, en `static`. Volgorde in `_quarto.yml`: [1_constructors.md](1_constructors.md) → [2_overloadedconstructor.md](2_overloadedconstructor.md) → [2_objectinitsyntax.md](2_objectinitsyntax.md) → [5_static.md](5_static.md) → [kennisclips.md](kennisclips.md).

## Sterktes

- De **aannemers-analogie** voor "soms wel, soms niet gratis een default constructor" in [1_constructors.md](1_constructors.md) is concreet en werkt. Wordt mooi herhaald bij overloading in [2_overloadedconstructor.md](2_overloadedconstructor.md).
- De **drie acties van `new`** (heap, constructor, referentie) is een uitstekend opsomminkje dat studenten kunnen onthouden.
- Het **`Breuk`-voorbeeld** in [2_overloadedconstructor.md](2_overloadedconstructor.md) maakt het *nut* van een overloaded constructor concreet: voorkomen dat iemand een breuk zonder noemer aanmaakt en zo crasht. Goeie motivatie.
- De **`Microfoon`** met `: this(...)` en de uitwerking in 4 stappen waar de constructor-call eindigt op `Wit Product` — uitstekend. Dit type *trace-execution* dwingt studenten goed na te denken.
- De `Dobbelsteen` met static `Random` ([5_static.md](5_static.md), eind) is hét klassieke voorbeeld om `static` te motiveren. Goed bewaard voor het einde.
- De **callout dat full properties best in de constructor aangeroepen worden** (niet de backing field) is waardevolle defensieve programmeer-tip.

## Zwaktes

- `[v]` In [1_constructors.md](1_constructors.md) (...): studenten zien geen voorbeeld van *de fout* (compile error: "does not contain a constructor that takes 0 arguments"). Een screenshot helpt. **(de letterlijke foutboodschap is nu inline toegevoegd in 2_overloadedconstructor.md waar de fout optreedt.)**
- `[~]` [2_objectinitsyntax.md](2_objectinitsyntax.md) introduceert `required`, maar de **volgorde van uitvoer** wordt niet uitgelegd. **(de uitvoervolgorde default-constructor → properties stond al uitgelegd; private-set-beperking toegevoegd. Een expliciete required-check-timing kan nog uitgebreid worden.)**
- `[~]` In [5_static.md](5_static.md) is het `Mens.geboorteJaar`-voorbeeld didactisch zwak (verkeerd mentaal model). **(waarschuwing-callout toegevoegd die het voorbeeld als bewust artificieel kadert en naar de zinvolle Fiets-teller verwijst; volledige vervanging als TODO gemarkeerd.)**
- `[v]` De zin "*De ``Math`` klasse is op de koop toe ook zelf static gemaakt*" legt niet hard genoeg uit dat een `static class` *enkel* `static` members mag hebben. **(verduidelijkt: static class mag enkel static members bevatten, compiler dwingt dit af.)**
- `[v]` Tikfouten: missende puntkomma in `Noemer = noemerIn` (2x), `bijNaam` vs `BijNaam`, `gen.Nex`/`rng.Nex`, `IsWerkStudent` als `string`. **(alle gefixt: `;` toegevoegd, `BijNaam`/`IsUitverkocht` consistent, `IsWerkStudent` → `bool`, `rng.Next`.)**
- `[c]` De callout dat *static constructors niet besproken worden* sluit de deur. Eén voorbeeldje was genoeg geweest. **(TODO-comment geplaatst.)**

## Onduidelijkheden

- `[v]` *"...de **betterness** regel"* - *betterness* is jargon dat nergens eerder valt. **(herschreven naar gewone taal: "de best passende constructor"; betterness enkel als optionele zijopmerking met verwijzing naar H7.)**
- `[v]` In [2_objectinitsyntax.md](2_objectinitsyntax.md): werkt object initializer ook voor private setters? **(verduidelijkt: nee, enkel voor van buitenaf bereikbare setters.)**
- `[c]` Bij `static`: het verschil tussen *static field*, *static property* en *const* wordt niet expliciet gemaakt. **(TODO-comment geplaatst.)**
- `[c]` De `Debug.WriteLine`-intermezzo breekt de flow van het static-verhaal. **(TODO-comment geplaatst voor verplaatsing.)**

## Gemissen

- `[c]` **Chained constructors met `: base(...)`** wordt nergens vermeld. **(TODO-comment geplaatst voor een vooruitwijzing naar H13.)**
- `[c]` **`readonly` fields** ontbreken volledig. **(TODO-comment geplaatst.)**
- `[c]` **Init-only properties** (`{ get; init; }`) worden niet besproken, terwijl `required` wel aan bod komt. **(TODO-comment geplaatst.)**
- `[c]` **Primary constructors (C# 12)**: kort vermelden als moderne syntax. **(TODO-comment geplaatst.)**
- `[c]` **Static constructor** krijgt enkel "niet besproken". **(TODO-comment geplaatst.)**
- `[c]` **Naamgevingsconventie** `merkIn` ("In"-suffix) is in de praktijk zeldzaam. **(TODO-comment geplaatst om dit te documenteren of te laten vallen.)**

## Concrete suggesties

1. `[v]` Minivoorbeeld met de **echte foutboodschap** ("...does not contain a constructor that takes 0 arguments"). **(inline toegevoegd.)**
2. `[~]` Vervang het `Mens.geboorteJaar`-voorbeeld door een neutrale teller. **(via waarschuwing-callout gekaderd; volledige vervanging als TODO.)**
3. `[c]` Verhuis de `Debug.WriteLine`-intermezzo. **(TODO-comment geplaatst.)**
4. `[c]` Voeg een sectie over **`init`-only properties** toe. **(TODO-comment geplaatst.)**
5. `[v]` Fix de tikfouten. **(alle gedaan.)**
6. `[c]` Voeg een voetnoot over **primary constructors** (C# 12) toe. **(TODO-comment geplaatst.)**
7. `[c]` Documenteer de `In`-suffix-keuze (of laat hem vallen). **(TODO-comment geplaatst.)**

---

> **Future: nog niet aangepakt.** Onderstaande ideeën zijn bewust uitgesteld (afspraak: future-gedeelte komt later).

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
