# Review: Gevorderde overervingsconcepten

> Interne didactische review - niet bedoeld voor publicatie.

> **Status editie 5** (verwerkt op 2026-06-11). Markering per punt:
> `[v]` gedaan · `[~]` deels of aangepast aan een stijlkeuze · `[c]` als verborgen TODO-comment in de tekst gezet · `[>]` bewust uitgesteld. De **Future**-sectie en de mini-oefeningen zijn nog niet aangepakt.

## Sterktes

- De openingsvraag in [4_System_Object.md](4_System_Object.md) ("staat er nog iets boven al die klassen?") is een goede haakje-techniek: studenten gaan zelf het antwoord zoeken voor het wordt gegeven.
- Het tabelletje met de vier `System.Object`-methoden (regel 47-52) is compact en direct bruikbaar als naslagwerk.
- De "blauwdruk"-vraag aan het begin van [5_abstract.md](5_abstract.md) ("welk meubel zie je voor je?") is een sterke didactische opening — het demonstreert *waarom* abstract bestaat in plaats van enkel *hoe*.
- De expliciete vergelijking tussen `virtual` (mag override) en `abstract` (moet override) op regel 92-94 van [5_abstract.md](5_abstract.md) is helder.
- De afsluitende meta-paragraaf op regel 196-202 van [4_System_Object.md](4_System_Object.md) waarin je expliciet erkent dat de student misschien nog niet onder de indruk is, voelt eerlijk en motiveert door te lezen.

## Zwaktes

- `[v]` De `Equals`-override is **gevaarlijke code**: harde cast zonder null/type-check, terwijl het contract `false` bij `null` vereist. **(herschreven met `if (o is not Student temp) return false;` (is-pattern), dat meteen null én verkeerd type afvangt.)**
- `[v]` `GetHashCode` werd afgedaan met "ligt buiten de scope" terwijl het verplicht is na `Equals`. **(werkend voorbeeld toegevoegd met `HashCode.Combine(Voornaam, Geboortejaar)`; ook de Dictionary/HashSet-relevantie benoemd.)**
- `[v]` Het Pong-voorbeeld bevatte compileerfouten (`new ScoreBoard()` zonder `;`, `spelElementen.Add();` zonder argument). **(gefixt naar `new ScoreBoard();` en `spelElementen.Add(score);`.)**
- `[v]` De zin "Alle 4 methoden in System.Object zijn `virtual`" is fout (`GetType` is niet virtual). **(gecorrigeerd naar "drie van de vier", met uitleg waarom GetType niet virtual is.)**
- `[v]` De polymorfisme-callout lost het downcast-probleem niet op. **(de callout legt nu de is-pattern uit (controle + cast in één), met vooruitwijzing naar H18 en H16.)**

## Onduidelijkheden

- `[v]` Cross-reference "hoofdstuk 9" voor de blauwdruk-definitie verifiëren. **(gecontroleerd: de blauwdruk-definities staan in de map 8_klassen, die label ch:9 draagt. "Hoofdstuk 9" klopt dus; onveranderd gelaten.)**
- `[~]` "Object" versus "object" (alias) is niet vanzelfsprekend voor eerstejaars. **(de Equals-parameter is nu consistent `object` (lowercase); een diepere uitleg over de Object/object-alias bewust beperkt gehouden.)**
- `[v]` Het verschil *abstracte read-only property* vs. *gewone read-only property* wordt niet geëxpliciteerd. **(zin toegevoegd: een abstracte `{ get; }` heeft géén implementatie/backing field, anders dan een auto-property.)**

## Gemissen

- `[v]` **Coherentie met de `is`/`as`-aanpak**: de cast in `Equals` schreeuwt om pattern matching. **(de moderne oplossing `if (o is not Student temp)` wordt nu effectief gebruikt en benoemd, met verwijzing naar H18.)**
- `[v]` **Abstract versus interface**: teaser ontbrak. **(callout-tip toegevoegd in 5_abstract.md: interface is een lichtere variant, wanneer kies je wat.)**
- `[v]` **Sealed class als tegenpool van abstract**. **(callout toegevoegd: abstract = je MOET overerven; sealed = je MAG niet overerven.)**
- `[~]` **`ReferenceEquals` versus `==`**: de waarschuwing rond operator overloading komt uit de lucht vallen. **(bewust beperkt gehouden; verwijst al naar de appendix. Eventueel later inkorten/herformuleren.)**
- `[c]` **`ToString` en formatting** (`IFormattable`): vooruitwijzing voor de leergierige student. **(TODO-comment kan later; voorlopig genoteerd, niet kritisch.)**

## Concrete suggesties

1. `[v]` `Equals`-voorbeeld met `is`-pattern matching. **(gedaan: `if (o is not Student temp) return false;`.)**
2. `[v]` `GetHashCode` met `HashCode.Combine(...)` one-liner. **(gedaan.)**
3. `[v]` Corrigeer "alle 4 methoden zijn `virtual`" naar "drie van de vier". **(gedaan.)**
4. `[v]` Fix de Pong-syntaxfouten. **(gedaan.)**
5. `[v]` Teaser-callout over interfaces als lichtere variant. **(toegevoegd.)**
6. `[v]` Cross-reference "hoofdstuk 9" verifiëren. **(geverifieerd: klopt; 8_klassen = ch:9.)**

---

> **Future: nog niet aangepakt.** Onderstaande ideeën zijn bewust uitgesteld (afspraak: future-gedeelte komt later).

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
