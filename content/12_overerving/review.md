# Review: Overerving

> Interne didactische review - niet bedoeld voor publicatie.

> **Status editie 5** (verwerkt op 2026-06-11). Markering per punt:
> `[v]` gedaan · `[~]` deels of aangepast aan een stijlkeuze · `[c]` als verborgen TODO-comment in de tekst gezet · `[>]` bewust uitgesteld. De **Future**-sectie en de mini-oefeningen zijn nog niet aangepakt.

## Sterktes

- De evolutionaire metafoor in [0_overerving_intro.MD](0_overerving_intro.MD) (homo habilis → erectus → sapiens) maakt het abstracte concept "specialisatie" meteen tastbaar, en de "is een"-test als detectiemiddel is duidelijk geformuleerd.
- De callout-important die expliciet waarschuwt dat *gelijkaardige code* op zich nog geen overerving rechtvaardigt is een belangrijk anti-patroon dat veel cursussen vergeten.
- De geheugenvisualisaties (heap/stack-tekeningen voor Huis/Villa) sluiten goed aan bij de visuele aanpak die je eerder al opbouwde rond referenties en stack/heap.
- [3_constructors_inheritance.md](3_constructors_inheritance.md) bouwt de constructor-volgorde mooi op: eerst het impliciete `:base()`, dan overloaded versies, dan de hybride aanpak — de stappenlijst onderaan is didactisch sterk.
- Het terugkerende Pong-voorbeeld in [2_base.md](2_base.md) zorgt voor continuïteit met eerdere hoofdstukken; studenten zien hun eigen project mee groeien.

## Zwaktes

- `[c]` De volgorde in `_quarto.yml` is contra-intuïtief: `:base()` wordt gebruikt vóór het base-keyword is uitgelegd. **(TODO-comment geplaatst in 3_constructors_inheritance.md; reorder vereist _quarto.yml-aanpassing.)**
- `[>]` In [0_overerving_intro.MD](0_overerving_intro.MD) leest de eerste paragraaf stroef. **(stilistische herwerking van de openingsparagraaf overgelaten aan Tim; geen inhoudelijke fout.)**
- `[v]` De callout zegt "enkel `public` methoden kan je `virtual` instellen", maar er staat een `protected virtual`-voorbeeld. Tegenstrijdigheid. **(callout gecorrigeerd: virtual mag op alles behalve private; protected-voorbeeld klopt dus.)**
- `[v]` "Hiding" met het `new` keyword komt nergens aan bod. **(waarschuwing-callout toegevoegd in 1_virtual_override.md: override vergeten geeft de `new`/hiding-waarschuwing; + TODO voor een uitgewerkte sectie.)**

## Onduidelijkheden

- `[v]` "Transitief" is verwarrend jargon; bedoeld wordt *volledig* (alles wordt overgeërfd). **(sectie hernoemd naar "Alles wordt overgeërfd" en de term "transitief" overal vervangen door gewone taal.)**
- `[v]` In [3_constructors_inheritance.md](3_constructors_inheritance.md) lijkt "basis-klasse / parent-klassen / klasse zelf" drie niveaus te onderscheiden waar er feitelijk twee zijn. **(herschreven: van de verste voorouder naar beneden, met expliciete vermelding dat het er in het eenvoudige geval gewoon twee zijn.)**
- `[v]` De tip over `protected set` is te kort. **(mini-codeblok toegevoegd dat `{ get; protected set; }` toont en uitlegt.)**

## Gemissen

- `[c]` **`protected`/`private`/`public`-tabel** ontbreekt. **(TODO-comment geplaatst.)**
- `[v]` **Single-inheritance**: *waarom* (diamond problem) werd overgeslagen. **(zin toegevoegd over het diamond problem + verwijzing naar interfaces in H16.)**
- `[v]` **Square-Rectangle / Liskov-counterexample**: de "is een"-test wordt te absoluut gepresenteerd. **(callout-tip toegevoegd over het vierkant/rechthoek-probleem, met doorverwijzing naar H16.)**
- `[v]` **`new` keyword voor method hiding**: "wat als ik `override` vergeet?". **(waarschuwing-callout toegevoegd in 1_virtual_override.md.)**
- `[c]` **`sealed`-methoden** (`sealed override`): enkel `sealed` op klasseniveau staat er. **(TODO-comment geplaatst.)**

## Concrete suggesties

1. `[c]` Wissel de leesvolgorde in `_quarto.yml`. **(TODO-comment geplaatst; structureel.)**
2. `[v]` Los de `public`/`protected virtual`-tegenstrijdigheid op. **(callout gecorrigeerd: virtual mag op alles behalve private.)**
3. `[v]` Korte uitleg "`new`-keyword: hiding ≠ overriding". **(waarschuwing-callout toegevoegd + TODO voor een uitgewerkte sectie.)**
4. `[v]` Vervang "transitief". **(gedaan: "alles wordt overgeërfd".)**
5. `[v]` Mini-callout over het square-rectangle-probleem. **(toegevoegd, met verwijzing naar H16.)**
6. `[c]` Access modifier-tabel. **(TODO-comment geplaatst.)**

---

> **Future: nog niet aangepakt.** Onderstaande ideeën zijn bewust uitgesteld (afspraak: future-gedeelte komt later).

## Future — ideeën voor de nieuwe editie

> Aanknopingspunten bij dit hoofdstuk voor de toekomstvisie uit [../../future/hoe.md](../../future/hoe.md). Bouwt voort op wat hierboven al opgemerkt is.
>
> **Bijzonderheid van dit hoofdstuk:** in [0_overerving_intro.MD](0_overerving_intro.MD) en [2_base.md](2_base.md) leeft de **oermens-metafoor** (homo habilis → erectus → sapiens, illustratie [../assets/7_overerving/homo.png](../assets/7_overerving/homo.png), het *oermens-versus-moderne-mens-jager*-voorbeeld). Voor de hele nieuwe editie wordt de oermens een ludieke gids door de **Code-archeologie**-rubriek (zie H2.4 van [../../future/hoe.md](../../future/hoe.md)). Hier is dus het natuurlijke "thuiskomst"-moment: de metafoor die hier ontstaat, krijgt elders in het boek een rol. Maak dat hier expliciet — bv. een one-liner: *"je ontmoet deze oermens vanaf nu in elk hoofdstuk als je AI-output van ouder C#-erfgoed moet onderscheiden."*

### Code Literacy — drie oefentypes
- **Wat doet dit?** — geef het `Huis`/`Villa`-voorbeeld met heap/stack-tekening. Studenten lezen de constructor-keten (incl. impliciete `:base()`) en geven de uitvoervolgorde van `WriteLine`-statements. Sluit aan bij de bestaande "stappenlijst onderaan"-sterkte uit [3_constructors_inheritance.md](3_constructors_inheritance.md).
- **Klopt dit?** — Steven schrijft een child-klasse waar hij `public void Vlieg()` definieert in plaats van `public override void Vlieg()` (het `new`/hiding-gemis uit de review). Studenten benoemen waarom de basisversie nog wordt opgeroepen via een parent-referentie.
- **Welke is beter?** — twee implementaties van `Soldaat` extending `Mens`: één met protected fields, één met protected properties (`protected set`). Studenten verdedigen waarom de tweede meestal wint.

### Stagiair Steven
- Steven duwt overerving door waar compositie hoort (een `Auto` extends `Motor`...). Past pal op de "*gelijkaardige code rechtvaardigt geen overerving*"-sterkte van de review.
- Steven schrijft een diepe hiërarchie van vier niveaus (`Dier → Zoogdier → Hond → Labrador`) waar één laag overerving genoeg was. Mooie aanleiding voor **Liskov/square-rectangle**-discussie (gemis uit de review).

### Hall of Shame
- AI die de verleiding van `is-a` niet weerstaat: `class Vierkant : Rechthoek` met override van `Breedte` die ook `Hoogte` zet — werkt totdat een test `r.Breedte = 5; r.Hoogte = 10; Assert.Equal(50, r.Oppervlakte)` faalt.
- AI die `:base(...)` vergeet en zich verbaast dat default values niet kloppen.

### Interview-suggestie
- Een **legacy-developer** (bv. iemand die met diepe overervingshiërarchieën in een oude .NET-codebase werkt) over hoe AI-tools omgaan met overerving en wanneer ze juist refactoring naar compositie/interfaces voorstellen. Past inhoudelijk perfect bij de "is-een-test als detectiemiddel"-sterkte.

### Code-archeologie (oermens) — *thuiskomst*
- **Hier introduceer je de rubriek expliciet**, omdat de metafoor hier ontstaat. Tijdlijn voor dit hoofdstuk: pre-C# 6 (`base.Foo()` overal nodig) → C# 6 (`nameof`, expression-bodied members maken overrides compacter) → C# 8 (`virtual`/`override` op interface-default-methods) → modern (`required`-properties op base-classes). Bonus: een visuele *fossielenrij* bij de homo-illustratie waarin elke laag een C#-versie krijgt.
- Onderzoek of de bestaande illustratie [../assets/7_overerving/homo.png](../assets/7_overerving/homo.png) hier dubbel kan dienen: één keer voor de overervings-uitleg (zoals nu), één keer als kader-introductie van de Code-archeologie-rubriek.

### Lees-volgorde-pijlen
- Het constructor-keten-voorbeeld in [3_constructors_inheritance.md](3_constructors_inheritance.md) (impliciete `:base()` → parent-constructor → `:this(...)`-redirect → eigen body) is dé kandidaat. Genummerde pijltjes maken expliciet wat de huidige stappenlijst tekstueel doet.

### Taalkeuze-callout
- Bij single-inheritance: "*Python en C++ kennen multiple inheritance (en het diamond-probleem); Java en C# kozen bewust voor single inheritance + interfaces. Rust gooit klassieke overerving overboord en werkt enkel met traits.*"
- Bij `virtual`/`override`: "*In Java is élke methode virtual by default; in C# moet je het expliciet markeren. Beide keuzes hebben gevolgen voor performance én voor wat AI's voorstellen.*"

### Mondelinge code-review
- De `is-a`-test leent zich uitstekend tot mondeling verdedigen: laat een student een eigen overervingshiërarchie tekenen en mondeling beargumenteren waarom élke pijl een geldige is-een-relatie is. Direct bruikbaar als examenvorm en sluit aan bij H2.5 van [../../future/hoe.md](../../future/hoe.md).
