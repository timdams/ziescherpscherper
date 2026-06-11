# Review: Object georiënteerd programmeren

> Interne didactische review - niet bedoeld voor publicatie. Bekijk per sectie of de feedback nog actueel is.

> **Status editie 5** (verwerkt op 2026-06-11). Markering per punt:
> `[v]` gedaan · `[~]` deels of aangepast aan een stijlkeuze · `[c]` als verborgen TODO-comment in de tekst gezet · `[>]` bewust uitgesteld (oefeningen, structurele _quarto.yml-wijziging of Future). De **Future**-sectie en de mini-oefeningen zijn nog niet aangepakt.

## Sterktes

- Het **Pong-voorbeeld** in [0_oop_intro.md](0_oop_intro.md) is een didactische topper: de student ziet eerst de gestructureerde versie, dan de pijn van twee balletjes ("bijna iedere lijn moeten we verdubbelen"), en dan de OOP-bevrijding. Daarna 100 balletjes met een array. Geen abstract bla-bla — de winst is meteen voelbaar.
- Het **kruispunt-voorbeeld** met fietsers/auto's/verkeerslichten brengt klasse vs. object in de echte wereld. De callout met *"Het grondplan is de klasse, de huizen zijn de objecten"* is helder.
- De **Steve Jobs-quote** sluit het abstracte luik mooi af. Dat soort cultuur-anker werkt voor 18-jarigen.
- Het ``StartVerjongingskuur``-voorbeeld in [0c_simpleobjects.md](0c_simpleobjects.md) toont op kleine schaal het verschil tussen objecten met eigen state. Dat is precies waar het op aankomt.
- De callout **"Studenten of Student?"** en **"Level of Level1?"** in [0c_simpleobjects.md](0c_simpleobjects.md) raakt twee van de meest gemaakte fouten — sterk dat je die expliciet behandelt.
- De [datetime.md](datetime.md)-sectie als "praktijk-finale" is een mooi anti-climax-vermijdend einde: ze zien dat alle theorie ergens toe leidt.
- De property-evolutie (full → met validatie → variaties → auto-properties) in [2_properties.md](2_properties.md) is netjes opgebouwd. De **goto-politie**-cartoon over publieke instantievariabelen werkt.

## Zwaktes

- `[>]` Het hoofdstuk is **lang** en heel veel concepten passeren in dezelfde sectie. ``static`` (in 3 contexten: methoden, ``DateTime.Now``, ``DateTime.Parse``), ``new``, properties, instantievariabelen, access modifiers, klassen-vs-objecten, encapsulatie, abstractie - en alles wordt aangestipt zonder dat één concept rust krijgt. **(structureel: opsplitsen/herordenen is een grote ingreep met _quarto.yml-impact; beslissing aan Tim. De auto-property-callout en samenvattingstabel verlichten de cognitieve last al wat.)**
- `[v]` In [0_oop_intro.md](0_oop_intro.md) wordt ``public int X { get; set; }`` getoond *vóór* properties zijn uitgelegd. De student weet niet wat ``get; set;`` is. Een korte callout *"deze rare syntax leg ik over twee secties uit"* zou rustigheid geven. **(callout-tip toegevoegd: auto-property, wordt later uitgelegd.)**
- `[c]` De **theorie-sectie** ("Definitie klasse en object", "Abstractie en encapsulatie", "A PIE") komt voor de praktijk. Dit is jargon-zwaar (...). De volgorde (Pong → theorie → praktijk) maakt dat de student midden in het hoofdstuk afhaakt. **(TODO-comment geplaatst bij A PIE/Steve Jobs voor eventuele herordening naar het einde.)**
- `[v]` In [2_properties.md](2_properties.md) staat *"...normaal versie 11... semi-auto properties"* - die zijn er ondertussen (C# 14, ``field`` keyword). De footnote spreekt zichzelf nu tegen met de callout onderaan. **Verouderd**. **(footnote geüpdatet naar C# 14 ``field``, met verwijzing naar de callout onderaan.)**
- `[v]` ``readonly`` wordt afgeschoten in een callout zonder uit te leggen waar het *wél* voor dient. Studenten zoeken dit later op en raken in de war. **(callout uitgebreid: readonly is voor instantievariabelen die na de constructor niet meer wijzigen.)**
- `[v]` Het Sith Lord-voorbeeld in [2_properties.md](2_properties.md) heeft typo-rommel: *"de instantievariabele ``energie`` en ``name``"* terwijl de code ``sithName`` heet. **(gecorrigeerd naar ``sithName``.)**
- `[c]` De codevoorbeelden gebruiken stelselmatig ``internal class`` (zoals VS genereert), maar je legt ``internal`` pas later kort uit. Een eerstejaars ziet nu **drie keywords** zonder uitleg. **(TODO-comment geplaatst voor een korte "toverwoord"-mention van internal.)**

## Onduidelijkheden

- `[~]` Het verschil tussen **klasse en object** wordt drie keer herhaald (kruispunt, blauwdruk-huis, Studenten-vs-Student). (...) Eén heel goed voorbeeld + één test-vraag werkt sterker dan drie metaforen. **(bewust gelaten; wel een beknopte samenvattingstabel klasse/object toegevoegd als duidelijke referentie.)**
- `[~]` *"Een klasse is een nieuw datatype"* (in [0b_oopincs.md](0b_oopincs.md)) is correct maar de student heeft hier geen anker (...). Welke metafoor is dé metafoor? **(de toegevoegde tabel verankert "klasse = blauwdruk/nieuw datatype"; metafoor-keuze verder aan Tim.)**
- `[v]` Het ``null``-concept in [0b_oopincs.md](0b_oopincs.md) wordt geïntroduceerd zonder *NullReferenceException* te benoemen. Dat fout-bericht zien ze gegarandeerd in hun eerste oefening. **(waarschuwing-callout toegevoegd die NullReferenceException expliciet benoemt; ook een TODO bij een onjuist int-balans-voorbeeld.)**
- `[~]` In [datetime.md](datetime.md) komen ``DateTime.Now``, ``new DateTime(...)``, ``.AddDays``, ``DateTime.IsLeapYear``, ``DateTime.Parse`` allemaal voorbij; het verschil "op de klasse" vs. "op het object" wordt niet expliciet samengevat. **(constructor-callout toegevoegd; een volledige static-vs-instance-samenvatting blijft een mogelijke uitbreiding.)**
- `[c]` ``this`` wordt nergens vermeld. Wanneer studenten in oefeningen ``this.naam = naam;`` zien, staan ze stil. **(TODO-comment geplaatst om ``this`` te benoemen.)**

## Gemissen

- `[v]` **Constructors**: zitten erin als zinsnede ("zie hoofdstuk 11") maar studenten gebruiken in [datetime.md](datetime.md) al ``new DateTime(2017,4,21)``. Een mini-callout *"wat zijn die parameters?"* is op z'n plaats. **(callout-tip toegevoegd over constructor-parameters + verwijzing naar H11.)**
- `[c]` **``this``-keyword**: ontbreekt volledig. Wel benoemen: *"je gaat dit later zien".* **(TODO-comment geplaatst.)**
- `[c]` **Namespaces**: bij OOP komen studenten met meerdere ``.cs``-files in aanraking en zien ze namespace-conflicten. Geen woord erover. **(TODO-comment geplaatst.)**
- `[c]` **``object``-class als root** (alle types erven van ``object``): zelfs een vermelding helpt later bij ``ToString()`` en collecties. **(TODO-comment geplaatst.)**
- `[v]` **``ToString()`` overriden**: sluit goed aan bij ``Console.WriteLine(palpatine)`` dat nu een namespace-string toont. **(callout toegevoegd in 0c die de namespace-string verklaart en naar ToString later verwijst.)**
- `[>]` **Encapsulation als woord vs. als praktijk**: er is geen oefening-achtige ankervraag *"is deze klasse goed geëncapsuleerd?"*. **(uitgesteld: raakt aan oefeningen.)**
- `[~]` **``struct`` vs. ``class``**: even genoemd in een footnote bij DateTime. De footnote zou een echte link naar de appendix kunnen bevatten. **(klein, bewust gelaten; aan Tim om de appendix-link te leggen.)**
- `[~]` **Naamgevingsconventies (PascalCase / camelCase)**: zit er deels in, maar versnipperd. **(er staat al een naamgevings-callout in 0c_simpleobjects; een aparte vroege tabel blijft een optie voor Tim.)**

## Concrete suggesties

1. `[v]` In [0_oop_intro.md](0_oop_intro.md), zet bij de eerste ``public int X { get; set; }`` een mini-callout over auto-property. **(gedaan.)**
2. `[c]` In [0_oop_intro.md](0_oop_intro.md), overweeg om de "A PIE"-acroniem-sectie + Steve Jobs-quote naar het einde te verplaatsen. **(TODO-comment geplaatst; herordening aan Tim.)**
3. `[v]` Update de footnote in [2_properties.md](2_properties.md) over "semi-auto properties" - ze zijn er nu (``field``, C# 14). **(gedaan.)**
4. `[v]` Fix de typo in [2_properties.md](2_properties.md): ``name`` → ``sithName``. **(gedaan.)**
5. `[v]` Voeg in [0c_simpleobjects.md](0c_simpleobjects.md) een korte sectie toe over ``Console.WriteLine(joske)`` (namespace-string + ToString later). **(als callout-tip toegevoegd.)**
6. `[v]` Voeg een eenregelige tabel toe: *"Klasse → blauwdruk... Object → instantie met ``new``."* **(samenvattingstabel toegevoegd aan het einde van 0b_oopincs.md.)**

---

> **Future: nog niet aangepakt.** Onderstaande ideeën zijn bewust uitgesteld (afspraak: future-gedeelte komt later).

## Future — ideeën voor de nieuwe editie

> Aanknopingspunten bij dit hoofdstuk voor de toekomstvisie uit [../../future/hoe.md](../../future/hoe.md). Bouwt voort op wat hierboven al opgemerkt is.

### Code Literacy — drie oefentypes
- **Wat doet dit?** — geef het Pong-OOP-fragment uit [0_oop_intro.md](0_oop_intro.md) met twee balletjes en laat student voorspellen *welke* properties op welk moment worden aangeroepen. Trainingsvorm voor "object heeft eigen state".
- **Klopt dit?** — toon een property met validatie waarbij de setter de instantievariabele nooit toewijst (`set { if (value > 0) /* niets */ }`) — klassieke AI-blunder. Sluit aan bij de property-evolutie in [2_properties.md](2_properties.md).
- **Welke is beter?** — full property met expliciete validatie vs. auto-property zonder validatie voor een `Leeftijd`-veld. Sluit direct aan op de bestaande "evolutie"-opbouw in [2_properties.md](2_properties.md) en [autoprop.md](autoprop.md).

### Stagiair Steven
- Steven schrijft een klasse met publieke instantievariabelen (omdat hij in Python heeft leren werken) — natuurlijke aanleiding voor de bestaande goto-politie-cartoon over encapsulatie.
- Steven verwart "Studenten" en "Student" als klassenaam (meervoud vs. enkelvoud) — sluit naadloos aan bij de bestaande "Studenten of Student?"-callout in [0c_simpleobjects.md](0c_simpleobjects.md).

### Hall of Shame
- AI die in elke setter `this.X = X;` schrijft maar `this` vergeet (`X = X;`) — oneindige recursie of zelf-toewijzing. Tegelijk los je het gemis "this-keyword wordt niet vermeld" op.
- AI die een klasse genereert met C# 14 `field`-keyword naast oude full-property syntax. Linkt aan de verouderde footnote over semi-auto properties.

### Interview-suggestie
- Een domain-driven-design-developer of game-dev over: *"hoe bepaal je welke klassen je nodig hebt?"* — sluit aan bij het kruispunt-voorbeeld en bij de filosofische A-PIE-sectie.

### Code-archeologie (oermens)
- Tijdlijn property-syntax: full property met `private int _x` (C# 1) → auto-property `{ get; set; }` (C# 3) → init-only `{ get; init; }` (C# 9) → semi-auto met `field` (C# 14). Lost de zwakte van de verouderde footnote op én geeft AI-output-context: een LLM die nog `private int _x;` genereert is "oermens".

### Lees-volgorde-pijlen
- Het ``StartVerjongingskuur``-voorbeeld in [0c_simpleobjects.md](0c_simpleobjects.md): genummerde pijlen die tonen hoe state per object verandert. Maakt het verschil tussen "object 1" en "object 2" expliciet.
- De full property in [2_properties.md](2_properties.md) met validatie + instantievariabele: pijlen 1) ``set`` ontvangt waarde, 2) check, 3) toewijzen aan ``_x``, 4) ``get`` haalt later terug — verheldert de magie.

### Taalkeuze-callout
- *"Python: properties met `@property`-decorator, alles is publiek tenzij `_` of `__`. JavaScript: `class` met `#` voor private velden (recent). Rust: geen klassen, wel `struct` + `impl`."* Hoort kort bij de access-modifier-uitleg.

### Mondelinge code-review
- "Verdedig je klasse-design": laat student in 3 minuten uitleggen waarom hij/zij die properties koos en *niet* publieke variabelen. Past direct bij de "verantwoorden"-component en bij de bestaande encapsulatie-callouts.
