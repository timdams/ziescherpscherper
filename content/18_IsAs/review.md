# Review: 18_IsAs (`is`/`as`/`Equals`, gesplitst over H16 en H17)

> Interne didactische review — niet bedoeld voor publicatie.

## Splitsing over twee hoofdstukken: didactisch verdedigbaar?

In `_quarto.yml` is deze folder verspreid:

- [1_IsAs.md](1_IsAs.md) en [6_equals.md](6_equals.md) zitten onder H16 (Polymorfisme).
- [2_Polymorfisme_Interfaces.md](2_Polymorfisme_Interfaces.md) zit onder H17 (Interfaces).

**Verdedigbaar, maar krakend.** Argumenten *voor* splitsing: `is`/`as` heeft eerst polymorfisme nodig (vandaar in H16), en daarna toon je in H17 de meerwaarde mét interfaces. *Tegen*: in [1_IsAs.md](1_IsAs.md) regel 9 verwijs je al expliciet naar interfaces ("zie volgende hoofdstuk"), in regel 183 van H17's intro staat opnieuw een mini-`is`-uitleg, en [2_Polymorfisme_Interfaces.md](2_Polymorfisme_Interfaces.md) leunt zwaar op H16-concepten. Voor de student voelt het als drie keer hetzelfde lezen met telkens een net andere invalshoek.

**Aanbeveling:** Houd `is`/`as` *volledig* in H16 (de drie bestanden samen, in volgorde 1 → 2 → 6), met één lijn vooruitwijzing in [2_Polymorfisme_Interfaces.md](2_Polymorfisme_Interfaces.md) naar H17 voor wie nog geen interfaces gehad heeft. Of, omgekeerd: alle drie naar H17 verplaatsen, want zonder interfaces blijft `is`/`as` weinig krachtig in eerstejaarscontext. Het huidige tussenmodel maakt de leesvolgorde stroef.

## Sterktes

- De [1_IsAs.md](1_IsAs.md) opbouw `is` → `as` → volgorde van bewerkingen is helder en kort.
- Het *vloekende mensen*-voorbeeld in [2_Polymorfisme_Interfaces.md](2_Polymorfisme_Interfaces.md) is memorabel en brengt polymorfisme + interface + `is` + `as` mooi samen.
- [6_equals.md](6_equals.md) verbetert de eerdere `Equals`-implementatie iteratief — eerst onveilig, dan met `is`, dan met `as`. Dat is goede pedagogie.
- De expliciete tabel met operator-precedentie (regel 108-114 in [1_IsAs.md](1_IsAs.md)) is nuttig.

## Zwaktes

- De pattern matching variant `if (mensjes[i] is IVloeker vloeker) { vloeker.Vloek(); }` (sinds C# 7) wordt niét getoond, terwijl die de hele `is`+cast-dans van [2_Polymorfisme_Interfaces.md](2_Polymorfisme_Interfaces.md) regel 102-107 in één regel oplost. Studenten zien deze syntax meteen op StackOverflow en zullen vragen waarom jouw code anders is.
- De "Oplossing 1" in [2_Polymorfisme_Interfaces.md](2_Polymorfisme_Interfaces.md) gebruikt een harde cast `(IVloeker)mensjes[i]` net nadat je in [1_IsAs.md](1_IsAs.md) hebt uitgelegd dat dat onveilig is. De `is`-check redt het hier wel, maar de leesvolgorde is wringt.
- [6_equals.md](6_equals.md) is heel kort en sluit abrupt af. Geen `GetHashCode`, geen vermelding dat `Equals` zonder `GetHashCode` overriden bugs geeft in `Dictionary`/`HashSet`.
- Inconsistentie in nummering: bestand heet `6_equals.md` maar er zijn geen 3, 4, 5 — historisch wellicht, maar verwarrend bij het sorteren van bestanden in VS Code.

## Onduidelijkheden

- In [1_IsAs.md](1_IsAs.md) regel 32-37 zegt je "Auto is geen Voertuig" — fout in de tekst. Moet zijn: "Persoon is géén Voertuig". Ah, ik zie het staat er al — maar de lezer moet twee keer kijken door de fettige opmaak. Overweeg uitlijnen met code.
- Het is na lezing van [1_IsAs.md](1_IsAs.md) niet helder *wanneer* je `as` zou kiezen boven `is + cast`. Een mini-richtlijn ("één check + gebruik = `as`; meerdere onafhankelijke checks = `is`") zou helpen.
- In [6_equals.md](6_equals.md) wordt niet gezegd waarom je überhaupt `Equals` zou overriden. De link naar `==` versus `.Equals()`-semantiek ontbreekt.

## Gemissen

- **Pattern matching met `is`** (`is Type t`) — C# 7+ — moet erin. Niet als gimmick, als hoofdsyntax: dit is wat moderne C# code doet.
- **Switch met patterns** (`switch (obj) { case IVloeker v: v.Vloek(); break; }` of de expression-form) — vooral didactisch krachtig naast je `if/else`-loops.
- **`as` werkt enkel met reference types en nullable value types** — niet met `int`, `bool`, etc. Dit gaat een student *zeker* een keer tegen de muur lopen. Vermeld het expliciet.
- **`Equals` + `GetHashCode`-contract**. Hoort bij [6_equals.md](6_equals.md). Kort: "wie `Equals` overridet, moet `GetHashCode` overriden, anders breken `Dictionary`/`HashSet`."
- **`==` vs `.Equals()`** semantisch verschil voor strings, references, value types. Hier hoort het.
- **`record`-types** (C# 9+) als modern alternatief voor je hele "vergelijken op inhoud"-verhaal. Eén regel `public record Student(string Voornaam, int Geboortejaar);` doet wat je nu in 10 regels handmatig schrijft. Minstens een vooruitwijzende callout.
- **`is null` / `is not null`** als idiomatic null check (i.p.v. `== null`) — heel courant in moderne C#-codebases.

## Concrete suggesties

1. Beslis: alle drie bestanden in één hoofdstuk. Mijn voorstel: H16 (Polymorfisme) — daar wordt het naturlijke vervolg. Eén kort vooruitwijzend kadertje in H16 zegt: "Met interfaces wordt dit nóg krachtiger; zie hoofdstuk 17."
2. Voeg een aparte sectie "Pattern matching" toe na [1_IsAs.md](1_IsAs.md) — `is Type t`, switch-patterns, `is not null`. Eén pagina volstaat.
3. Breid [6_equals.md](6_equals.md) uit met `GetHashCode`, `==` vs `.Equals()` en een vooruitwijzing naar `record`-types in de appendix.
4. Vervang in [2_Polymorfisme_Interfaces.md](2_Polymorfisme_Interfaces.md) "Oplossing 1" door pattern matching (`is IVloeker v`) zodat lezers de moderne syntax zien — laat de oude vorm staan als "vroeger schreef men…".
5. Hernoem `6_equals.md` naar `3_equals.md` (of geef alle drie consecutieve nummers) — kleine polish.

---

## Future — ideeën voor de nieuwe editie

> Aanknopingspunten bij dit hoofdstuk voor de toekomstvisie uit [../../future/hoe.md](../../future/hoe.md). Bouwt voort op wat hierboven al opgemerkt is.

### Code Literacy — drie oefentypes
- **Wat doet dit?** — toon het `if (x is Auto) { Auto a = (Auto)x; ... }`-fragment uit [1_IsAs.md](1_IsAs.md) naast de moderne pattern-match-vorm `if (x is Auto a)`. Laat de student in 1 zin uitleggen wat hetzelfde is en wat verschilt — train de leesvaardigheid op idiomatische C#.
- **Klopt dit?** — AI levert een `Equals`-override zonder `GetHashCode`-override, en gebruikt het object vervolgens in een `Dictionary`. Op het oog werkt het, in de tests breekt lookup. Klassieke gemis uit [6_equals.md](6_equals.md).
- **Welke is beter?** — drie varianten van type-check: `if (x.GetType() == typeof(Auto))`, `if (x is Auto)`, `if (x is Auto a)`. De student verdedigt welke wanneer wint.

### Stagiair Steven
- Steven gebruikt `as` op een `int` (`int? n = obj as int?;`) en is verbaasd dat het niet doet wat hij denkt. Brug naar het Gemis "`as` werkt enkel met reference types en nullable value types".
- Steven schrijft een `Equals(object obj)` met `obj == this` als check — de student moet zien dat dit referentie-vergelijking is, niet inhouds-vergelijking.

### Hall of Shame
- AI-code waarin `==` op strings wordt vergeleken in een C#-snippet met de uitleg "in C# vergelijkt `==` referenties net als in Java" — een echte LLM-blunder die geregeld terugkomt door training op door-elkaar-talen-corpus.
- `Equals`-override met perfecte logica maar zonder symmetrie (`a.Equals(b) != b.Equals(a)`) door een `GetType()`-vs-`is`-mismatch.

### Interview-suggestie
- Een C#-architect of .NET-Core teamlead over `record`-types: "wanneer schrijf je nog een eigen `Equals`-override anno 2026?". Bouwt voort op het Gemis `record`-types uit de review.

### Code-archeologie (oermens)
- Pijler-tijdlijn: pre-C# 7 `(IVloeker)x` met losse `is`-check → C# 7 pattern matching `is IVloeker v` → C# 8 switch-expressions → C# 9 `record` met automatische `Equals`/`GetHashCode`. De oermens illustreert waarom je op StackOverflow nog vaak de oudste vorm ziet — en hoe je verouderde AI-output daaraan herkent.

### Mondelinge code-review
- "Verdedig waarom je hier `as` koos in plaats van `is`+cast." Klassieker uit code-reviews.
- "Leg uit waarom je naast `Equals` ook `GetHashCode` overrided hebt." Kort, scherp en typisch voor een examenmoment.

### Lees-volgorde-pijlen
- Het *vloekende mensen*-fragment in [2_Polymorfisme_Interfaces.md](2_Polymorfisme_Interfaces.md): pijl 1 "loop over `Mens`-array", pijl 2 "`is IVloeker`-check op interface", pijl 3 "veilige cast", pijl 4 "polymorfe oproep". Maakt zichtbaar dat hier polymorfisme + interfaces + `is`/`as` samenkomen.

### Taalkeuze-callout
- "In Python doe je `isinstance(x, Auto)` (vergelijkbaar met `is`) maar bestaat geen `as` — Python casts impliciet of crasht. In TypeScript heb je `x as Auto` (compileertijd-only, geen runtime-check!) — gevaarlijk vergeleken met C#'s runtime-`as`."
