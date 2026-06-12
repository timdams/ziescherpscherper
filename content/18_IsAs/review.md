# Review: 18_IsAs (`is`/`as`/`Equals`, gesplitst over H16 en H17)

> Interne didactische review - niet bedoeld voor publicatie.

> **Status editie 5** (verwerkt op 2026-06-11). Markering per punt:
> `[v]` gedaan · `[~]` deels of aangepast aan een stijlkeuze · `[c]` als verborgen TODO-comment in de tekst gezet · `[>]` bewust uitgesteld. De **splitsing over twee hoofdstukken** is een structurele keuze (TODO-flag in 1_IsAs.md). De **Future**-sectie en de mini-oefeningen zijn nog niet aangepakt.

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

- `[v]` De pattern matching variant `if (... is IVloeker vloeker)` werd niet getoond. **(aparte "Pattern matching"-sectie toegevoegd in 1_IsAs.md, plus een "Oplossing 3"-pattern-variant in 2_Polymorfisme_Interfaces.md.)**
- `[v]` "Oplossing 1" gebruikt een harde cast net na de uitleg dat dat onveilig is. **(de moderne pattern-variant (Oplossing 3) zonder cast is toegevoegd; de oude vorm blijft als "vroeger".)**
- `[v]` [6_equals.md](6_equals.md) is kort en sluit abrupt af; geen `GetHashCode`. **(uitgebreid met GetHashCode-contract (HashCode.Combine), `==` vs `.Equals()` en een record-vooruitwijzing.)**
- `[c]` Nummering `6_equals.md` (geen 3,4,5). **(TODO-comment geplaatst.)**

## Onduidelijkheden

- `[~]` "Auto is geen Voertuig"-opmaak laat de lezer twee keer kijken. **(de tekst klopt al inhoudelijk ("Persoon is géén Voertuig"); puur opmaak, bewust gelaten.)**
- `[v]` Wanneer kies je `as` boven `is + cast`? **(vuistregel-callout toegevoegd: gebruik je het object daarna meteen, kies `as`; enkel een ja/nee-vraag, kies `is`.)**
- `[v]` In [6_equals.md](6_equals.md) ontbreekt waarom je `Equals` overridet (`==` vs `.Equals()`). **(sectie "`==` of `.Equals()`?" toegevoegd over referentie- vs. inhoudsvergelijking.)**

## Gemissen

- `[v]` **Pattern matching met `is`** (`is Type t`). **(aparte sectie toegevoegd in 1_IsAs.md.)**
- `[c]` **Switch met patterns**. **(TODO-comment kan; niet inline toegevoegd. Genoteerd voor latere uitbreiding.)**
- `[v]` **`as` werkt enkel met reference types**, niet met `int`/`bool`. **(callout-important toegevoegd.)**
- `[v]` **`Equals` + `GetHashCode`-contract**. **(toegevoegd in 6_equals.md met HashCode.Combine.)**
- `[v]` **`==` vs `.Equals()`**. **(sectie toegevoegd.)**
- `[v]` **`record`-types** als modern alternatief. **(vooruitwijzende callout toegevoegd in 6_equals.md.)**
- `[v]` **`is null` / `is not null`** als idiomatic null check. **(callout toegevoegd in 1_IsAs.md.)**

## Concrete suggesties

1. `[c]` Beslis: alle drie bestanden in één hoofdstuk. **(TODO-flag geplaatst; structurele _quarto.yml-keuze aan Tim.)**
2. `[v]` Aparte sectie "Pattern matching" (`is Type t`, `is not null`). **(toegevoegd; switch-patterns als TODO.)**
3. `[v]` Breid [6_equals.md](6_equals.md) uit met `GetHashCode`, `==` vs `.Equals()`, record. **(gedaan.)**
4. `[v]` Toon de moderne pattern-matching-vorm in [2_Polymorfisme_Interfaces.md](2_Polymorfisme_Interfaces.md). **(Oplossing 3 toegevoegd.)**
5. `[c]` Hernoem `6_equals.md` → `3_equals.md`. **(TODO-comment geplaatst.)**

---

> **Future: nog niet aangepakt.** Onderstaande ideeën zijn bewust uitgesteld (afspraak: future-gedeelte komt later).

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
