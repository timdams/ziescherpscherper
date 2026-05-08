# Review: Overerving

> Interne didactische review — niet bedoeld voor publicatie.

## Sterktes

- De evolutionaire metafoor in [0_overerving_intro.MD](0_overerving_intro.MD) (homo habilis → erectus → sapiens) maakt het abstracte concept "specialisatie" meteen tastbaar, en de "is een"-test als detectiemiddel is duidelijk geformuleerd.
- De callout-important die expliciet waarschuwt dat *gelijkaardige code* op zich nog geen overerving rechtvaardigt is een belangrijk anti-patroon dat veel cursussen vergeten.
- De geheugenvisualisaties (heap/stack-tekeningen voor Huis/Villa) sluiten goed aan bij de visuele aanpak die je eerder al opbouwde rond referenties en stack/heap.
- [3_constructors_inheritance.md](3_constructors_inheritance.md) bouwt de constructor-volgorde mooi op: eerst het impliciete `:base()`, dan overloaded versies, dan de hybride aanpak — de stappenlijst onderaan is didactisch sterk.
- Het terugkerende Pong-voorbeeld in [2_base.md](2_base.md) zorgt voor continuïteit met eerdere hoofdstukken; studenten zien hun eigen project mee groeien.

## Zwaktes

- De volgorde in `_quarto.yml` (intro → constructors → virtual/override → base) is contra-intuïtief: in [3_constructors_inheritance.md](3_constructors_inheritance.md) wordt al `:base()` gebruikt voordat het `base` keyword zelf is uitgelegd in [2_base.md](2_base.md). De constructor-tip op regel 41-43 ("we hebben een soortgelijke werking ook reeds gezien") klopt niet meer in deze volgorde.
- In [0_overerving_intro.MD](0_overerving_intro.MD) regel 7 wordt `Soldaat` van `class Program` "omarming" uitgelegd in een wat slordige zin — de eerste paragraaf van het hele hoofdstuk leest stroef ("derde letter in het acroniem A PIE… we hadden reeds…").
- De callout op regel 62-64 in [1_virtual_override.md](1_virtual_override.md) zegt "enkel `public` methoden kan je `virtual` instellen", maar één regel eerder (regel 44) staat het tegenovergestelde voorbeeld `protected virtual int SayWhatNow()`. Dat is een directe tegenstrijdigheid binnen hetzelfde bestand.
- "Hiding" met het `new` keyword komt nergens aan bod, ook niet als waarschuwing. Studenten die per ongeluk `public void Vlieg()` schrijven in een child-klasse (zonder `override`) krijgen een compiler-warning over `new` en hebben dan geen kapstok om te begrijpen wat dat betekent.

## Onduidelijkheden

- "Transitief" in [0_overerving_intro.MD](0_overerving_intro.MD) regel 102: het woord "transitief" suggereert wiskundig: "als A overerft van B en B van C, dan ook A van C". Wat je hier eigenlijk bedoelt is *volledig* (alles wordt overgeërfd). Studenten kennen "transitief" nog niet uit een wiskundecontext en zullen die term verwarrend vinden.
- In [3_constructors_inheritance.md](3_constructors_inheritance.md) regel 3-7 staat "Eerst de basis-klasse, gevolgd door alle parent-klassen, finaal de klasse zelf" — "basis-klasse" en "parent-klasse" zijn synoniemen elders in de cursus. De zin lijkt drie niveaus te onderscheiden waar er feitelijk twee zijn.
- De tip op regel 184-186 in [0_overerving_intro.MD](0_overerving_intro.MD) ("`protected set` van een property") is correct maar te kort voor wie het concept nieuw is — een mini-codeblok zou veel verduidelijken.

## Gemissen

- **`protected` versus `private` versus `public`**: een klein vergelijkingstabelletje (zichtbaarheid binnen klasse / child / extern) ontbreekt. `internal` zou hier ook even hernomen mogen worden in dezelfde tabel.
- **Single-inheritance restrictie**: wel vermeld (regel 192-196), maar de pijnlijke kant — *waarom* C# dit zo doet (diamond problem) — wordt overgeslagen. Eén zinnetje over diamond conflicts zou de keuze legitimeren.
- **Square-Rectangle / Liskov-counterexample**: de "is een"-test wordt absoluut gepresenteerd, terwijl klassieke voorbeelden tonen dat *taalkundig* correcte is-een-relaties (een vierkant *is een* rechthoek) toch slechte overerving opleveren. Dit hoort minstens als waarschuwing in deze sectie, of als doorverwijzing naar H16.
- **`new` keyword voor method hiding**: zie boven; minstens als "wat als ik `override` vergeet?"-callout.
- **`sealed`-methoden**: enkel `sealed` op klasseniveau wordt getoond; `sealed override` op methodeniveau (om verdere override te blokkeren) niet.

## Concrete suggesties

1. Wissel de leesvolgorde in `_quarto.yml`: intro → virtual/override → base → constructors. Dan klopt de "we hebben dit al gezien"-tip in [3_constructors_inheritance.md](3_constructors_inheritance.md) regel 41-43 weer.
2. Los de `public`/`protected virtual`-tegenstrijdigheid in [1_virtual_override.md](1_virtual_override.md) op: ofwel de callout op regel 62-64 schrappen, ofwel het `protected`-voorbeeld op regel 44 weghalen.
3. Voeg in [0_overerving_intro.MD](0_overerving_intro.MD) een korte sectie "`new`-keyword: hiding ≠ overriding" toe, met één voorbeeld van wat er gebeurt als je `override` vergeet en hoe de compiler-warning eruitziet.
4. Vervang "transitief" door "volledig" of "alles erft mee" — of behoud "transitief" maar leg de term expliciet uit met een zinnetje.
5. Voeg een mini-callout toe over het square-rectangle-probleem als opwarming voor H16/polymorfisme: "in H16 zien we dat een taalkundige is-een-relatie soms toch leidt tot brokkelige code".
6. Een access modifier-tabel (private/protected/internal/public × klasse/child/extern/assembly) bovenaan de `protected`-sectie zou de hele zichtbaarheidsdiscussie in één blik samenvatten.

---

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
