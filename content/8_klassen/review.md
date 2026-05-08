# Review: Object georiënteerd programmeren

> Interne didactische review — niet bedoeld voor publicatie. Bekijk per sectie of de feedback nog actueel is.

## Sterktes

- Het **Pong-voorbeeld** in [0_oop_intro.md](0_oop_intro.md) is een didactische topper: de student ziet eerst de gestructureerde versie, dan de pijn van twee balletjes ("bijna iedere lijn moeten we verdubbelen"), en dan de OOP-bevrijding. Daarna 100 balletjes met een array. Geen abstract bla-bla — de winst is meteen voelbaar.
- Het **kruispunt-voorbeeld** met fietsers/auto's/verkeerslichten brengt klasse vs. object in de echte wereld. De callout met *"Het grondplan is de klasse, de huizen zijn de objecten"* is helder.
- De **Steve Jobs-quote** sluit het abstracte luik mooi af. Dat soort cultuur-anker werkt voor 18-jarigen.
- Het ``StartVerjongingskuur``-voorbeeld in [0c_simpleobjects.md](0c_simpleobjects.md) toont op kleine schaal het verschil tussen objecten met eigen state. Dat is precies waar het op aankomt.
- De callout **"Studenten of Student?"** en **"Level of Level1?"** in [0c_simpleobjects.md](0c_simpleobjects.md) raakt twee van de meest gemaakte fouten — sterk dat je die expliciet behandelt.
- De [datetime.md](datetime.md)-sectie als "praktijk-finale" is een mooi anti-climax-vermijdend einde: ze zien dat alle theorie ergens toe leidt.
- De property-evolutie (full → met validatie → variaties → auto-properties) in [2_properties.md](2_properties.md) is netjes opgebouwd. De **goto-politie**-cartoon over publieke instantievariabelen werkt.

## Zwaktes

- Het hoofdstuk is **lang** en heel veel concepten passeren in dezelfde sectie. ``static`` (in 3 contexten: methoden, ``DateTime.Now``, ``DateTime.Parse``), ``new``, properties, instantievariabelen, access modifiers, klassen-vs-objecten, encapsulatie, abstractie — en alles wordt aangestipt zonder dat één concept rust krijgt.
- In [0_oop_intro.md](0_oop_intro.md) wordt ``public int X { get; set; }`` getoond *vóór* properties zijn uitgelegd. De student weet niet wat ``get; set;`` is. Een korte callout *"deze rare syntax leg ik over twee secties uit"* zou rustigheid geven.
- De **theorie-sectie** ("Definitie klasse en object", "Abstractie en encapsulatie", "A PIE") komt voor de praktijk. Dit is jargon-zwaar voor een eerstejaars die net een balletje heeft zien botsen. De volgorde (Pong → theorie → praktijk) maakt dat de student midden in het hoofdstuk afhaakt.
- In [2_properties.md](2_properties.md) staat *"In één van de volgende versies van C# (normaal versie 11) zal er nog een derde type verschijnen: semi-auto properties"* — die zijn er ondertussen (C# 14, ``field`` keyword). De callout-note onderaan vermeldt het wél, maar de footnote spreekt zichzelf nu tegen. **Verouderd**.
- ``readonly`` wordt afgeschoten in een callout zonder uit te leggen waar het *wél* voor dient. Studenten zoeken dit later op en raken in de war.
- Het Sith Lord-voorbeeld in [2_properties.md](2_properties.md) heeft typo-rommel: *"de instantievariabele ``energie`` en ``name``"* terwijl de code ``sithName`` heet. Klein, maar verwarrend.
- De codevoorbeelden gebruiken stelselmatig ``internal class`` (zoals VS genereert), maar je legt ``internal`` pas later kort uit in een callout. Een eerstejaars ziet nu **drie keywords** voor de klassedeclaratie zonder uitleg.

## Onduidelijkheden

- Het verschil tussen **klasse en object** wordt drie keer herhaald (kruispunt, blauwdruk-huis, Studenten-vs-Student). Dat is goed bedoeld, maar kan bij een eerstejaars de indruk wekken dat het iets *moeilijks* is dat extra herhaling nodig heeft. Eén heel goed voorbeeld + één test-vraag werkt sterker dan drie metaforen.
- *"Een klasse is een nieuw datatype"* (in [0b_oopincs.md](0b_oopincs.md)) is correct maar de student heeft hier geen anker. Het komt na "blauwdruk", "fabriekje" en "prototype". Welke metafoor is dé metafoor?
- Het ``null``-concept in [0b_oopincs.md](0b_oopincs.md) wordt geïntroduceerd zonder *NullReferenceException* te benoemen. Dat fout-bericht zien ze gegarandeerd in hun eerste oefening.
- In [datetime.md](datetime.md) komt ``DateTime.Now`` (static prop), ``new DateTime(...)`` (constructor), ``.AddDays`` (methode), ``DateTime.IsLeapYear`` (static methode), ``DateTime.Parse`` (static met cultureinfo) — ze passeren alle 5 in twee pagina's, en het verschil tussen "op de klasse" vs. "op het object" wordt niet expliciet samengevat.
- ``this`` wordt nergens vermeld. Wanneer studenten in oefeningen ``this.naam = naam;`` zien (klassieke setter-pattern of constructor), staan ze stil.

## Gemissen

- **Constructors**: zitten erin als zinsnede ("zie hoofdstuk 11") maar studenten gebruiken in [datetime.md](datetime.md) al ``new DateTime(2017,4,21)``. Een mini-callout *"wat zijn die parameters?"* met verwijzing naar het constructor-hoofdstuk is op z'n plaats.
- **``this``-keyword**: ontbreekt volledig. Mag in dit intro-hoofdstuk niet behandeld worden, maar wel benoemd: *"je gaat dit later zien".*
- **Namespaces**: tot nu toe gewoon "automatisch aanwezig", maar bij OOP komen studenten met meerdere ``.cs``-files in aanraking en zien ze namespace-conflicten. Geen woord erover.
- **``object``-class als root** (alle types erven van ``object``): zelfs een vermelding helpt later bij ``ToString()`` en collecties.
- **``ToString()`` overriden**: sluit goed aan bij ``Console.WriteLine(palpatine)`` dat nu een namespace-string toont. Studenten lopen hier op vast.
- **Encapsulation als woord vs. als praktijk**: het concept staat erin, maar er is geen oefening-achtige ankervraag *"is deze klasse goed geëncapsuleerd?"* — terwijl dat in oefeningen telkens terugkomt.
- **``struct`` vs. ``class``**: even genoemd in een footnote bij DateTime. Volstaat hier, maar de footnote zou een korte verwijzing naar de appendix-sectie kunnen bevatten i.p.v. *"meer info in de appendix"* zonder link.
- **Naamgevingsconventies (PascalCase / camelCase)**: zit er deels in, maar versnipperd. Een aparte beknopte tabel ergens vroeg in het hoofdstuk zou het ankeren.

## Concrete suggesties

1. In [0_oop_intro.md](0_oop_intro.md), zet bij de eerste ``public int X { get; set; }`` een mini-callout: *"Dit is een **auto-property**. Beschouw het voorlopig als een publieke variabele met manieren. Ik leg het uit in [2_properties.md](2_properties.md)."*. Dat ontspant 80% van de "wat is dit"-vragen.
2. In [0_oop_intro.md](0_oop_intro.md), overweeg om de "A PIE"-acroniem-sectie + Steve Jobs-quote naar het einde van het hoofdstuk te verplaatsen. Eerst doen, dan filosoferen.
3. Update de footnote in [2_properties.md](2_properties.md) over "semi-auto properties" — ze zijn er nu (``field``-keyword, C# 14). De huidige tekst spreekt zichzelf tegen met de callout onderaan dezelfde file.
4. Fix de typo in [2_properties.md](2_properties.md): *"instantievariabelen ``energie`` en ``name``"* → ``sithName``. Anders in de Sith-Lord-sectie.
5. Voeg in [0c_simpleobjects.md](0c_simpleobjects.md) een korte sectie toe *"Wat als je ``Console.WriteLine(joske)`` schrijft?"* — toon de namespace-string en vermeld dat ``ToString()`` later behandeld wordt. Anker voor latere lessen.
6. Voeg na [0b_oopincs.md](0b_oopincs.md) (of in een callout) een eenregelige tabel toe: *"Klasse → blauwdruk, in een eigen .cs-bestand. Object → instantie, in je Main of een methode, gemaakt met ``new``."* Dat samenvattingblokje gebruiken studenten écht als referentie.

---

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
