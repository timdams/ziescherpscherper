# Review: Gevorderde overervingsconcepten

> Interne didactische review — niet bedoeld voor publicatie.

## Sterktes

- De openingsvraag in [4_System_Object.md](4_System_Object.md) ("staat er nog iets boven al die klassen?") is een goede haakje-techniek: studenten gaan zelf het antwoord zoeken voor het wordt gegeven.
- Het tabelletje met de vier `System.Object`-methoden (regel 47-52) is compact en direct bruikbaar als naslagwerk.
- De "blauwdruk"-vraag aan het begin van [5_abstract.md](5_abstract.md) ("welk meubel zie je voor je?") is een sterke didactische opening — het demonstreert *waarom* abstract bestaat in plaats van enkel *hoe*.
- De expliciete vergelijking tussen `virtual` (mag override) en `abstract` (moet override) op regel 92-94 van [5_abstract.md](5_abstract.md) is helder.
- De afsluitende meta-paragraaf op regel 196-202 van [4_System_Object.md](4_System_Object.md) waarin je expliciet erkent dat de student misschien nog niet onder de indruk is, voelt eerlijk en motiveert door te lezen.

## Zwaktes

- De `Equals`-override op regel 159-163 van [4_System_Object.md](4_System_Object.md) is **gevaarlijke code**: er wordt zonder controle gecast (`Student temp = (Student)o;`) en `o == null` wordt niet getest, terwijl de regels zelf op regel 147 expliciet vermelden dat `false` moet worden teruggegeven bij `null`. Een student die dit overneemt schendt zijn eigen contract.
- `GetHashCode` overriden wordt afgedaan met "ligt buiten de scope" (regel 173). Tegelijk impliceert de tekst dat je verplicht bent dit ook te doen na `Equals`. Dat is frustrerend: ofwel toon één werkend voorbeeld (`HashCode.Combine(...)`), ofwel toon de compiler-warning zodat studenten weten waar die vandaan komt.
- Het Pong-voorbeeld op regel 200-223 van [5_abstract.md](5_abstract.md) bevat compileerfouten: `var score = new ScoreBoard()` mist puntkomma, en `spelElementen.Add();` heeft geen argument. Studenten die kopiëren raken in de war.
- De zin "Alle 4 methoden in System.Object zijn `virtual`" op regel 106 is feitelijk onjuist: `GetType()` is **niet** `virtual` (en `ReferenceEquals` zelfs `static`). Dit is een zuivere fout.
- De tip-callout op regel 167 ("dit concept noemen we polymorfisme — zie hoofdstuk 16") komt steeds terug ("we komen dichter") en wordt een running gag, maar lost het concrete probleem (downcast) hier niet op. Eén zin uitleg over downcasting zou volstaan.

## Onduidelijkheden

- Op regel 12 in [5_abstract.md](5_abstract.md) verwijs je naar "hoofdstuk 9" voor de blauwdruk-definitie. Met de huidige nummering is dat hoofdstuk 11 of 12 — verifieer of deze cross-reference nog klopt na de hernummering.
- "Object" versus "object" in [4_System_Object.md](4_System_Object.md): de tip op regel 19-21 belooft consistent `System.Object` te gebruiken, maar verderop staat soms `Object` (regel 144), soms `object` (regel 159, parameter). Voor een eerstejaars is `Object`/`object` (alias voor `System.Object`) niet vanzelfsprekend.
- De volgorde abstract method → abstract property in [5_abstract.md](5_abstract.md) is fijn, maar het verschil tussen *abstracte read-only property* en *gewone read-only property* wordt niet geëxpliciteerd. Studenten zien `{ get; }` en denken misschien aan een autoprop.

## Gemissen

- **Coherentie met [content/B_appendix/6_equals.md](../B_appendix/6_equals.md) en [content/18_IsAs/](../18_IsAs/)**: de cast in `Equals` schreeuwt om `is`/`as`-patroon, maar je gebruikt hier nog de C-style cast. De tekstbox kondigt H16/H17 aan zonder de feitelijke "moderne" oplossing (pattern matching: `if (o is Student temp)`) te noemen.
- **Abstract versus interface**: nergens wordt nu al een spoiler/teaser gegeven dat interfaces bestaan en wanneer je daarvoor zou kiezen boven `abstract`. Een mini-callout "abstract klasse versus interface — komt later" zou helpen, want studenten googelen sowieso.
- **Sealed class als alternatief voor abstract**: na hoofdstuk 12 weet de student dat `sealed` bestaat. Een korte vergelijking ("abstract = je MOET overerven; sealed = je MAG niet overerven") sluit het mentale model.
- **`object.ReferenceEquals` versus `==`**: de waarschuwing op regel 192 dat `==` overschreven kan worden komt uit de lucht vallen (operator overloading is appendix-stof). Of leg het hier even uit, of laat het weg en verwijs door.
- **`ToString` en formatting**: `IFormattable`/`ToString(string format)` valt buiten scope, maar één voetnoot "later kan je dit nog rijker maken" zou de leergierige student tevreden stellen.

## Concrete suggesties

1. Schrijf het `Equals`-voorbeeld om met `is`-pattern matching of op zijn minst met expliciete null-check en `as`-cast: `if (o is not Student temp) return false;`. Dit illustreert ook meteen waarom `is`/`as` (H17) bestaat.
2. Verwijder of verbeter de `GetHashCode`-paragraaf: toon `HashCode.Combine(Voornaam, Geboortejaar)` als one-liner. Dat is sinds .NET Core probleemloos beschikbaar en didactisch ondoenlijk om weg te laten.
3. Corrigeer de bewering "alle 4 methoden zijn `virtual`" naar "drie van de vier" (`GetType` is niet `virtual` en kan niet overschreven worden).
4. Fix de syntaxisfouten in het Pong-voorbeeld onderaan [5_abstract.md](5_abstract.md): `var score = new ScoreBoard();` en `spelElementen.Add(score);`.
5. Voeg een korte teaser-callout toe over interfaces als "lichtere variant" van abstract — eerstejaars mogen weten dat het bestaat voor ze ernaar gaan zoeken.
6. Verifieer de cross-reference "hoofdstuk 9" op regel 4 van [5_abstract.md](5_abstract.md) tegen de huidige nummering in `_quarto.yml`.

---

## Future — ideeën voor de nieuwe editie

> Aanknopingspunten bij dit hoofdstuk voor de toekomstvisie uit [../../future/hoe.md](../../future/hoe.md). Bouwt voort op wat hierboven al opgemerkt is.

### Code Literacy — drie oefentypes
- **Klopt dit?** — geef de huidige `Equals`-override uit [4_System_Object.md](4_System_Object.md) (de "gevaarlijke code"-zwakte uit de review): geen `null`-check, harde cast. Studenten benoemen *minstens* twee fouten en herschrijven met `is`-pattern matching. Eindelijk maakt de bug-in-de-cursus zichzelf nuttig.
- **Wat doet dit?** — laat studenten zonder IDE de output voorspellen van een `abstract`-hiërarchie waarin de child geen `override` levert. Wat zegt de compiler? Sluit aan bij de "blauwdruk"-opening van [5_abstract.md](5_abstract.md).
- **Welke is beter?** — twee implementaties van `GetHashCode`: één naïef (`return Voornaam.Length`), één met `HashCode.Combine(...)`. Studenten verdedigen waarom de eerste tot Dictionary-bugs leidt. Pakt direct het GetHashCode-gemis uit de review aan.

### Stagiair Steven
- Steven beweert "alle methoden in `System.Object` zijn `virtual`" (de feitelijke fout uit de review!). Studenten corrigeren hem en leggen uit waarom `GetType()` *niet* `virtual` kan zijn — het zou de runtime-typing breken.
- Steven schrijft een `abstract class` waarin álle methoden abstract zijn én er geen state is. Studenten ontdekken dat hij eigenlijk een interface had moeten gebruiken (teaser-callout uit het gemissenlijstje).

### Hall of Shame
- AI die `Equals` overrride zonder `GetHashCode` mee te overriden — werkt tot iemand de klasse als Dictionary-key gebruikt. Concreter kan een AI-blunder niet zijn, en het sluit terug op het H11-Dictionary-gemis.
- AI die `(MijnKlasse)o` cast zonder `is`/`as`, zoals de cursus zelf nu nog doet.

### Interview-suggestie
- Een **API/SDK-developer** (bv. iemand die een publieke library onderhoudt) over hoe hij `abstract` versus `interface` kiest, en of hij ooit `Equals`/`GetHashCode` met de hand schrijft of altijd `record` types gebruikt vandaag. Verbindt de cursusinhoud direct met de "moderne" oplossing waarvan de review zegt dat ze ontbreekt.

### Code-archeologie (oermens)
- Sterke tijdlijn voor dit hoofdstuk: klassiek `Equals` met cast (pre-C# 7) → `is`-pattern matching (C# 7) → `is not` (C# 9) → `record` types die `Equals`/`GetHashCode`/`ToString` gratis genereren (C# 9) → primary constructors op records (C# 12). Studenten leren dat AI-output met handmatige `Equals` vaak een training-data-leftover is waar `record` modern is.
- `HashCode.Combine` (.NET Core 2.1+) als concreet voorbeeld van *waarom* de huidige cursus zegt "ligt buiten de scope" — vroeger was het écht moeilijk, nu een one-liner.

### Lees-volgorde-pijlen
- Het Pong-voorbeeld onderaan [5_abstract.md](5_abstract.md) (zodra de syntaxisfouten gefixt zijn): de polymorfe `foreach (var element in spelElementen) element.Teken();` — pijltjes 1 → loop pakt eerste element, 2 → runtime kiest concrete `override`, 3 → tekent — maken het verschil tussen *compile-time type* en *runtime type* visueel.

### Taalkeuze-callout
- Bij `abstract`: "*Python heeft `abc.ABC`/`@abstractmethod`; Java identiek (`abstract`). Rust kent géén abstracte klassen — alles loopt via traits. Go al helemaal niet — alles is interface-based.*"
- Bij `System.Object`: "*Java heeft `java.lang.Object` met dezelfde rol. Python's `object`-base-class lijkt ook, maar `equals`/`hashCode` heten daar `__eq__`/`__hash__`. JavaScript: alles erft van `Object.prototype`, géén `GetType`.*"

### Mondelinge code-review
- "*Waarom is jouw klasse `abstract` en niet gewoon een `interface`?*" — een ideale mondelinge verdedigings-vraag. Sluit aan bij het abstract-versus-interface-gemis uit de review en bij H2.5 van [../../future/hoe.md](../../future/hoe.md).
