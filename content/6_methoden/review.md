# Review: Methoden

> Interne didactische review - niet bedoeld voor publicatie. Bekijk per sectie of de feedback nog actueel is.

> **Status editie 5** (verwerkt op 2026-06-11). Markering per punt:
> `[v]` gedaan · `[~]` deels of aangepast aan een stijlkeuze · `[c]` als verborgen TODO-comment in de tekst gezet · `[>]` bewust uitgesteld (oefeningen, structurele _quarto.yml-wijziging of Future). De **Future**-sectie en de mini-oefeningen zijn nog niet aangepakt.

> **Status tweede pass** (2026-08-30). Het hoofdstuk is gesplitst: "Methoden nesten", "Oneindige methode-lussen", "Recursie in het kort", "Lokale functies" en "Commentaar aan methoden toevoegen" staan nu in [0c_methodencombineren.md](0c_methodencombineren.md); [0b_parameters.md](0b_parameters.md) gaat enkel nog over parameters. De verwijzingen hieronder zijn mee aangepast. Extra merkteken: `[ ]` = gevonden in deze pass, nog uit te voeren. Alles uit deze pass is intussen uitgevoerd, de boete-verwijzing incluis: de boetes zijn samengevoegd tot één pagina en [0c_methodencombineren.md](0c_methodencombineren.md) linkt er nu naar. Daarna zijn er vijf figuren bijgekomen: `signatuur.png` en `paden.png` in [0_intromethods.md](0_intromethods.md), `byvalue.png` in [0b_parameters.md](0b_parameters.md), `lokalefunctie.png` en een hertekende `oneindig.png` in [0c_methodencombineren.md](0c_methodencombineren.md). De scripts staan in [../assets/4_methoden/imagegen/](../assets/4_methoden/imagegen/); het origineel van de oude figuur is bewaard als `oneindigOLD.png`.

## Sterktes

- De motivatie aan het begin van [0_intromethods.md](0_intromethods.md) (het Bill Gates-citaat + de "luiheid"-rode draad sinds loops) is sterk. Het kadert methoden meteen als een logisch vervolg op iets dat de student al kent.
- Het ``WriteLine``-voorbeeld met de ruwe interop-code uit dotnet/runtime werkt erg goed: de student ziet meteen dat methoden als bibliotheek écht complexiteit verbergen. Dat je expliciet zegt "negeer deze code maar" is een goede angst-management-zet.
- De ``Timsoft XP``-flow met afbeelding ([4_methoden/timsoft.png](../assets/4_methoden/timsoft.png)) en de visualisatie van ``return`` zijn precies wat een eerstejaars nodig heeft. Hetzelfde geldt voor de "flow van de recursie".
- De callout over "named parameter ≠ argumentnaam in de aanroep" is goud voor de groep die hier altijd struikelt.
- De voorman-interventie over *"Not all code paths return a value"* is zowel grappig als didactisch nuttig — die foutboodschap zien ze sowieso.

## Zwaktes

- `[v]` De volgorde ``static returntype MethodeNaam`` wordt direct getoond zonder dat ``static`` enige uitleg krijgt; je verwijst door naar hoofdstuk 11. Voor een eerstejaars die net begint is dat een dood keyword waar ze blind moeten op vertrouwen. Een klein blokje "behandel het als een toverwoord" helpt, maar het is er nu niet expliciet bij de syntax-tabel zelf. **(callout-tip toegevoegd bij de syntaxbox: behandel static als verplicht toverwoord.)**
- `[v]` De ``WindRichting``-switch in [0_intromethods.md](0_intromethods.md) heeft ``break`` na elke ``return``. Dat is dode code (en compileert met warning). Vervelend in een leerboek, want net daar leer je de student "geen overbodige code". **(de dode break-statements verwijderd.)**
- `[v]` De sectie "Doorgeven van parameters" introduceert *by reference* tussen haakjes met een footnote *"negeer dit als je geen flauw benul hebt"*. Dat is verwarrend: je zegt iets belangrijks en zegt erbij dat ze het mogen negeren. Beter wegknippen of duidelijk in een aparte gevorderde callout zetten. **(footnote-disclaimer geschrapt; by reference herschreven als nette vooruitblik naar H8 (arrays), zonder de wegwerptoon.)**
- `[v]` De ``Macht``-methode aan het einde heeft een subtiele bug: bij ``exponent = 0`` geeft hij ``grondtal`` terug i.p.v. 1. Voor een voorbeeldje rond XML-commentaar onschuldig, maar als studenten het overtypen krijg je rare bugs in oefeningen. **(gecorrigeerd naar `int result = 1; for (i = 0; i < exponent; i++)`; Macht(5,0) geeft nu 1.)**
- `[~]` [3_advancedmethod.md](3_advancedmethod.md) opent met "Geavanceerde methode-technieken" maar named/optional parameters zijn dat niet écht meer in moderne C#. De titel zet ze op een te hoog voetstuk. **(titel onveranderd gelaten; de echte zwaarte zat in de betterness rule, die nu als gevorderd gemarkeerd is. Hernoemen kan TOC-ankers raken, dus aan Tim.)**
- `[v]` De **betterness rule**-tabel is zwaar, abstract en wordt zelden gebruikt door eerstejaars. Dit voelt als een appendix-onderwerp. **(callout-note "Voor de gevorderden" toegevoegd die zegt dat eerstejaars dit mogen overslaan.)**
- `[v]` *(tweede pass)* Het "Main roept zichzelf aan"-voorbeeld in [0_intromethods.md](0_intromethods.md) schreef ``Main();``, wat niet compileert: er bestaat geen overload zonder argumenten. De student krijgt CS7036 in plaats van de beloofde eindeloze lus. Bovendien stond er een vraag zonder antwoord. **(``Main(args);`` gemaakt en een uitklapbaar ``## Antwoord``-callout toegevoegd, met verwijzing naar "Oneindige methode-lussen".)**
- `[v]` *(tweede pass)* Twee foute hoofdstukverwijzingen: arrays werd aangekondigd als H9 (is H8) en objecten als H10 (is H9). **(beide rechtgezet.)**
- `[v]` *(tweede pass)* Bij de oneindige methode-lus stond dat het programma crasht "wanneer het werkgeheugen op is". Het is de stack die vol loopt. **(herschreven naar ``StackOverflowException`` + stack, met vooruitwijzing naar H10.)**
- `[v]` *(tweede pass)* De by-value-uitleg stond twee keer bijna letterlijk in [0b_parameters.md](0b_parameters.md): een callout-tip bij ``BerekenFaculteit`` en 90 regels later de sectie "Doorgeven van parameters". **(de tip is nu een korte vooruitwijzing.)**
- `[v]` *(tweede pass)* Codevoorbeelden die de eigen huisregels tegenspraken: ``ToonDeling`` zonder accolades bij ``if``/``else``, ``ToonInfo`` met een half-Engelse output ("is 37 old") en ``return som += ...`` in de recursieve methode. **(accolades toegevoegd, ``ToonInfo`` volledig Nederlands, ``return som + ...``; bij ``ToonDeling`` staat nu ook de output erbij zodat het verschil in volgorde zichtbaar wordt.)**

## Onduidelijkheden

- `[c]` "Lokale functies en waarom je ze beter niet gebruikt" in [0c_methodencombineren.md](0c_methodencombineren.md): de student leest hier dat C# 7.0 dit toelaat *en* dat ze het niet mogen doen. Maar Visual Studio's auto-suggestions zetten beginners soms ongemerkt in een lokale functie. Een screenshot van *hoe je per ongeluk in deze situatie belandt* zou helpen. **(TODO-comment blijft staan. `lokalefunctie.png` toont nu wel waarom je zo'n functie van buitenaf niet kan aanroepen, maar niet hoe je er per ongeluk in belandt.)**
- `[~]` Het verschil tussen "formele parameter" en "actuele parameter" wordt geïntroduceerd maar niet altijd consequent gebruikt. In een latere paragraaf staat *"...een actuele parameter aan elke formele parameter..."* - voor een Vlaamse eerstejaars is dat jargon dat heractivering verdient. **(genoteerd; bewust niet overal herschreven om de consistente terminologie te bewaren. Eventueel later een mini-herhaling toevoegen.)**
- `[~]` Bij de tip *"parameters worden by value meegegeven (zie het hoofdstuk over Arrays hierna)"*: de student weet op dit punt niet wat *by value* écht betekent, en de verwijzing naar arrays is een vooruitwijzing zonder anker. De callout had nu al een klein schemaatje (kopie vs. origineel) verdiend. **(de callout is een korte vooruitwijzing geworden en `byvalue.png` staat nu bij "Doorgeven van parameters".)**

## Gemissen

- `[c]` **``out`` en ``ref``**: zit in de appendix maar wordt hier niet vermeld. Een eenregelige verwijzing in de "doorgeven van parameters"-sectie is de moeite. Studenten zien dit in IntelliSense (``int.TryParse``) en hebben geen idee wat er gebeurt. **(TODO-comment geplaatst in 3_advancedmethod.md.)**
- `[c]` **Expression-bodied methoden** (``=> ...``): wordt wel even genoemd in de OOP-properties-sectie maar nergens hier. Eerstejaars zien deze syntax in nieuwere VS-templates en raken in paniek. **(TODO-comment geplaatst in 3_advancedmethod.md.)**
- `[c]` **Tuples als returntype** (``(int, string) Method()``): mag zelfs in een "extra"-callout. Vandaag is dit een gangbaar alternatief voor ``out``-parameters. **(TODO-comment geplaatst in 3_advancedmethod.md.)**
- `[v]` **``params`` keyword**: ontbreekt volledig. ``Console.WriteLine`` zelf gebruikt het, en ze zien dit in oefeningen. **(opgelost in twee stappen, want ``params int[]`` vereist arrays: een callout in [0b_parameters.md](0b_parameters.md) legt uit wat ze in IntelliSense bij ``WriteLine`` zien en verwijst naar H8, en de sectie "Een onbepaald aantal parameters met ``params``" staat nu achteraan [../7_arrays/3_arrays_en_methoden.md](../7_arrays/3_arrays_en_methoden.md). TODO-comment verwijderd.)**
- `[c]` **Discussie over methode-grootte** ("een methode mag maar X regels zijn"): dit raakt de "Goede methoden schrijven"-kennisclip aan, maar het boek zelf zegt niets over hoe lang of hoe kort een methode mag zijn, of over single-responsibility-achtige tips. Hier ligt een mooie didactische winst. **(sectie "Hoe groot mag een methode zijn?" toegevoegd in [0c_methodencombineren.md](0c_methodencombineren.md), met de "een methode doet een ding"-vuistregel, de En-in-de-naam-test en een verwijzing naar de kennisclip. TODO-comment verwijderd.)**
- `[v]` **Volgorde van methoden in je bestand**: nergens staat dat het niet uitmaakt of je een methode boven of onder de aanroep schrijft. Studenten denken van wel, naar analogie met variabelen. **(callout-tip toegevoegd achteraan "Methoden nesten", met het contrast tegenover variabelen.)**
- `[v]` **Link naar de boete bij lokale functies**: het boeteblad rekent hier -3 punten voor, maar de tekst zei enkel dat Tim het niet leuk vindt. **(de boetes staan nu op één pagina; callout-important toegevoegd achteraan "Lokale functies" met een link naar [../B_appendix/boete.md](../B_appendix/boete.md#boete-method).)**
- `[v]` **``out``/``ref`` aankondigen**: [../B_appendix/2_outenref.md](../B_appendix/2_outenref.md) bestaat al maar werd nergens vermeld, terwijl [../3_data/4b_inputconverten.md](../3_data/4b_inputconverten.md) letterlijk belooft dat ``out`` "in het hoofdstuk over methoden" komt. **(callout-tip achteraan "Doorgeven van parameters" in [0b_parameters.md](0b_parameters.md), met het ``int.TryParse``-voorbeeld uit H4 en een link naar de appendix.)**

## Concrete suggesties

1. `[v]` In [0_intromethods.md](0_intromethods.md), bij de eerste syntaxbox, voeg één zin toe: *"Vergeet ``static`` even - beschouw het voorlopig als een verplicht toverwoord. Ik leg het uit in hoofdstuk 11."* - dat scheelt 50 vragen tijdens practica. **(als callout-tip toegevoegd.)**
2. `[v]` In de ``WindRichting``-switch in [0_intromethods.md](0_intromethods.md): verwijder de ``break``-statements na de ``return``s. Dode code in een handboek geeft de verkeerde gewoonte. **(gedaan.)**
3. `[v]` In [3_advancedmethod.md](3_advancedmethod.md), zet de **betterness rule**-tabel in een ``callout-note`` met header *"Voor de gevorderden"* - eerstejaars hebben dit niet nodig om named/optional params te gebruiken. **(callout-note toegevoegd onder de heading.)**
4. `[c]` Voeg in [3_advancedmethod.md](3_advancedmethod.md) een korte sectie *"Wat met `out` en `ref`?"* toe met één voorbeeld via ``int.TryParse``, en een verwijzing naar de appendix. Studenten zien ``TryParse`` continu in IntelliSense. **(opgelost, maar bewust anders: geen sectie in 3_advancedmethod.md, wel een callout bij "Doorgeven van parameters" waar by reference toch al uitgelegd wordt. De TODO-comment in [3_advancedmethod.md](3_advancedmethod.md) mag dus weg of blijven staan als je alsnog een volle sectie wil.)**
5. `[v]` In [0b_parameters.md](0b_parameters.md), de "Doorgeven van parameters"-sectie: vervang de footnote-disclaimer door een echte mini-figuur van *value* vs. *reference* (zelfs handgetekend). Het concept komt 2 hoofdstukken later cruciaal terug en een eerste blik nu helpt enorm. **(footnote-disclaimer geschrapt, dubbele uitleg weggewerkt, en de figuur bestaat: `byvalue.png` toont ``mijnLeeftijd`` en de kopie ``leeftijd``, voor en na ``leeftijd++``.)**
6. `[v]` Overweeg de ``Macht``-methode te corrigeren naar ``int result = 1; for (int i = 0; i < exponent; i++) result *= grondtal;`` zodat ``Macht(5,0)`` netjes 1 teruggeeft. **(gedaan, exact zo.)**
7. `[v]` Een trace-oefening bij "Methoden met formele parameters": laat de student invullen wat ``grens`` en ``getal`` op elk moment bevatten. **("Even zelf invullen" toegevoegd met een tabel van drie aanroepen en een uitklapbaar antwoord. Bewust gericht op de naamgeving en niet op by value, want dat doet Stagiair Steven al.)**
8. `[ ]` De ``\newpage``-markers in [0c_methodencombineren.md](0c_methodencombineren.md) nakijken bij de eerstvolgende PDF-render; door de splitsing kan de bladspiegel verschoven zijn.

---

> **Future: nog niet aangepakt.** Onderstaande ideeën zijn bewust uitgesteld (afspraak: future-gedeelte komt later).

## Future — ideeën voor de nieuwe editie

> Aanknopingspunten bij dit hoofdstuk voor de toekomstvisie uit [../../future/hoe.md](../../future/hoe.md). Bouwt voort op wat hierboven al opgemerkt is.

### Code Literacy — drie oefentypes
- **Wat doet dit?** — een methode met twee `return`-paden in een `if`/`else if` (zonder slot-`return`); laat student het *"Not all code paths return a value"*-gevoel ervaren door zelf compiler te spelen. Sluit aan bij de bestaande voorman-callout.
- **Klopt dit?** — toon de `Macht`-methode mét de bug uit zwakte-sectie (`Macht(5,0)` → 5). Klassieke AI-blunder want LLM's vergeten edge cases.
- **Welke is beter?** — een methode met drie optionele parameters via overloads vs. één methode met named/optional parameters. Direct gekoppeld aan [3_advancedmethod.md](3_advancedmethod.md).

### Stagiair Steven
- Steven levert een methode af met `int.TryParse` en gebruikt `out` zonder te begrijpen wat hij neerschrijft — koppelt aan het gemis ``out``/``ref`` en aan de "actuele vs. formele parameter"-onduidelijkheid.
- Steven schrijft een 80-regel-monster-methode `BerekenAlles()` — natuurlijke aanleiding voor de gemiste discussie over methode-grootte / single responsibility.

### Hall of Shame
- AI die recursieve methoden zonder base case genereert (StackOverflow). Sluit perfect aan bij de "flow van de recursie"-uitleg in [0c_methodencombineren.md](0c_methodencombineren.md).
- AI die named parameters door elkaar haalt (positie vs. naam) — zie de bestaande callout daarover.

### Interview-suggestie
- Een API-designer of library-maintainer over: *"hoe kies je methode-namen en parameter-volgorde voor een publieke API?"* — sluit aan bij het ``WriteLine``/dotnet-runtime-voorbeeld dat al in [0_intromethods.md](0_intromethods.md) staat.

### Code-archeologie (oermens)
- Tijdlijn parameter-doorgave: `out` parameter (klassiek) → `Tuple<int,string>` (C# 4) → tuples `(int, string)` (C# 7) → records (C# 9). Sluit naadloos aan bij het gemis over tuples als returntype. Maakt expliciet waarom oude AI-output nog `out` gebruikt waar tuples eleganter zijn.

### Lees-volgorde-pijlen
- De recursieve methode (Timsoft XP / faculteit) in [0c_methodencombineren.md](0c_methodencombineren.md): genummerde pijlen die *eerst* de afdaling tonen, *dan* het terugkeren via de stack. Recursie is het canonieke "oog volgt niet de leesvolgorde"-fragment.

### Taalkeuze-callout
- *"Python: positional + keyword arguments standaard, geen overloads. JavaScript: alle parameters optioneel, `undefined` als ontbrekende waarde. Rust: geen optional params — gebruik builder-pattern."* Past in [3_advancedmethod.md](3_advancedmethod.md) bij named/optional.

### Mondelinge code-review
- "Verdedig je methode-signatuur": laat student in 2 minuten uitleggen *waarom* zijn methode `static`, `void` of met die parameter-volgorde is. Past bij de huidige verwarring rond `static` als toverwoord.
