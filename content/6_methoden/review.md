# Review: Methoden

> Interne didactische review - niet bedoeld voor publicatie. Bekijk per sectie of de feedback nog actueel is.

> **Status editie 5** (verwerkt op 2026-06-11). Markering per punt:
> `[v]` gedaan · `[~]` deels of aangepast aan een stijlkeuze · `[c]` als verborgen TODO-comment in de tekst gezet · `[>]` bewust uitgesteld (oefeningen, structurele _quarto.yml-wijziging of Future). De **Future**-sectie en de mini-oefeningen zijn nog niet aangepakt.

## Sterktes

- De motivatie aan het begin van [0_intromethods.md](0_intromethods.md) (het Bill Gates-citaat + de "luiheid"-rode draad sinds loops) is sterk. Het kadert methoden meteen als een logisch vervolg op iets dat de student al kent.
- Het ``WriteLine``-voorbeeld met de ruwe interop-code uit dotnet/runtime werkt erg goed: de student ziet meteen dat methoden als bibliotheek écht complexiteit verbergen. Dat je expliciet zegt "negeer deze code maar" is een goede angst-management-zet.
- De ``Timsoft XP``-flow met afbeelding ([4_methoden/timsoft.png](../assets/4_methoden/timsoft.png)) en de visualisatie van ``return`` zijn precies wat een eerstejaars nodig heeft. Hetzelfde geldt voor de "flow van de recursie".
- De callout over "named parameter ≠ argumentnaam in de aanroep" is goud voor de groep die hier altijd struikelt.
- De voorman-interventie over *"Not all code paths return a value"* is zowel grappig als didactisch nuttig — die foutboodschap zien ze sowieso.

## Zwaktes

- `[v]` De volgorde ``static returntype MethodeNaam`` wordt direct getoond zonder dat ``static`` enige uitleg krijgt; je verwijst door naar hoofdstuk 11. Voor een eerstejaars die net begint is dat een dood keyword waar ze blind moeten op vertrouwen. Een klein blokje "behandel het als een toverwoord" helpt, maar het is er nu niet expliciet bij de syntax-tabel zelf. **(callout-tip toegevoegd bij de syntaxbox: behandel static als verplicht toverwoord.)**
- `[v]` De ``WindRichting``-switch in [0_intromethods.md](0_intromethods.md) heeft ``break`` na elke ``return``. Dat is dode code (en compileert met warning). Vervelend in een leerboek, want net daar leer je de student "geen overbodige code". **(de dode break-statements verwijderd.)**
- `[v]` De sectie "Doorgeven van parameters" introduceert *by reference* tussen haakjes met een footnote *"negeer dit als je geen flauw benul hebt"*. Dat is verwarrend: je zegt iets belangrijks en zegt erbij dat ze het mogen negeren. Beter wegknippen of duidelijk in een aparte gevorderde callout zetten. **(footnote-disclaimer geschrapt; by reference herschreven als nette vooruitblik naar H9, zonder de wegwerptoon.)**
- `[v]` De ``Macht``-methode aan het einde heeft een subtiele bug: bij ``exponent = 0`` geeft hij ``grondtal`` terug i.p.v. 1. Voor een voorbeeldje rond XML-commentaar onschuldig, maar als studenten het overtypen krijg je rare bugs in oefeningen. **(gecorrigeerd naar `int result = 1; for (i = 0; i < exponent; i++)`; Macht(5,0) geeft nu 1.)**
- `[~]` [3_advancedmethod.md](3_advancedmethod.md) opent met "Geavanceerde methode-technieken" maar named/optional parameters zijn dat niet écht meer in moderne C#. De titel zet ze op een te hoog voetstuk. **(titel onveranderd gelaten; de echte zwaarte zat in de betterness rule, die nu als gevorderd gemarkeerd is. Hernoemen kan TOC-ankers raken, dus aan Tim.)**
- `[v]` De **betterness rule**-tabel is zwaar, abstract en wordt zelden gebruikt door eerstejaars. Dit voelt als een appendix-onderwerp. **(callout-note "Voor de gevorderden" toegevoegd die zegt dat eerstejaars dit mogen overslaan.)**

## Onduidelijkheden

- `[c]` "Lokale functies en waarom je ze beter niet gebruikt" in [0b_parameters.md](0b_parameters.md): de student leest hier dat C# 7.0 dit toelaat *en* dat ze het niet mogen doen. Maar Visual Studio's auto-suggestions zetten beginners soms ongemerkt in een lokale functie. Een screenshot van *hoe je per ongeluk in deze situatie belandt* zou helpen. **(TODO-comment geplaatst voor de screenshot.)**
- `[~]` Het verschil tussen "formele parameter" en "actuele parameter" wordt geïntroduceerd maar niet altijd consequent gebruikt. In een latere paragraaf staat *"...een actuele parameter aan elke formele parameter..."* - voor een Vlaamse eerstejaars is dat jargon dat heractivering verdient. **(genoteerd; bewust niet overal herschreven om de consistente terminologie te bewaren. Eventueel later een mini-herhaling toevoegen.)**
- `[~]` Bij de tip *"parameters worden by value meegegeven (zie het hoofdstuk over Arrays hierna)"*: de student weet op dit punt niet wat *by value* écht betekent, en de verwijzing naar arrays is een vooruitwijzing zonder anker. De callout had nu al een klein schemaatje (kopie vs. origineel) verdiend. **(de bestaande callout legt "kopie van de waarde" al uit; de by-reference-tekst is verduidelijkt. Een echt schema/figuur blijft aan Tim.)**

## Gemissen

- `[c]` **``out`` en ``ref``**: zit in de appendix maar wordt hier niet vermeld. Een eenregelige verwijzing in de "doorgeven van parameters"-sectie is de moeite. Studenten zien dit in IntelliSense (``int.TryParse``) en hebben geen idee wat er gebeurt. **(TODO-comment geplaatst in 3_advancedmethod.md.)**
- `[c]` **Expression-bodied methoden** (``=> ...``): wordt wel even genoemd in de OOP-properties-sectie maar nergens hier. Eerstejaars zien deze syntax in nieuwere VS-templates en raken in paniek. **(TODO-comment geplaatst in 3_advancedmethod.md.)**
- `[c]` **Tuples als returntype** (``(int, string) Method()``): mag zelfs in een "extra"-callout. Vandaag is dit een gangbaar alternatief voor ``out``-parameters. **(TODO-comment geplaatst in 3_advancedmethod.md.)**
- `[c]` **``params`` keyword**: ontbreekt volledig. ``Console.WriteLine`` zelf gebruikt het, en ze zien dit in oefeningen. **(TODO-comment geplaatst in 0b_parameters.md.)**
- `[c]` **Discussie over methode-grootte** ("een methode mag maar X regels zijn"): dit raakt de "Goede methoden schrijven"-kennisclip aan, maar het boek zelf zegt niets over hoe lang of hoe kort een methode mag zijn, of over single-responsibility-achtige tips. Hier ligt een mooie didactische winst. **(TODO-comment geplaatst in 0b_parameters.md.)**

## Concrete suggesties

1. `[v]` In [0_intromethods.md](0_intromethods.md), bij de eerste syntaxbox, voeg één zin toe: *"Vergeet ``static`` even - beschouw het voorlopig als een verplicht toverwoord. Ik leg het uit in hoofdstuk 11."* - dat scheelt 50 vragen tijdens practica. **(als callout-tip toegevoegd.)**
2. `[v]` In de ``WindRichting``-switch in [0_intromethods.md](0_intromethods.md): verwijder de ``break``-statements na de ``return``s. Dode code in een handboek geeft de verkeerde gewoonte. **(gedaan.)**
3. `[v]` In [3_advancedmethod.md](3_advancedmethod.md), zet de **betterness rule**-tabel in een ``callout-note`` met header *"Voor de gevorderden"* - eerstejaars hebben dit niet nodig om named/optional params te gebruiken. **(callout-note toegevoegd onder de heading.)**
4. `[c]` Voeg in [3_advancedmethod.md](3_advancedmethod.md) een korte sectie *"Wat met `out` en `ref`?"* toe met één voorbeeld via ``int.TryParse``, en een verwijzing naar de appendix. Studenten zien ``TryParse`` continu in IntelliSense. **(TODO-comment geplaatst.)**
5. `[~]` In [0b_parameters.md](0b_parameters.md), de "Doorgeven van parameters"-sectie: vervang de footnote-disclaimer door een echte mini-figuur van *value* vs. *reference* (zelfs handgetekend). Het concept komt 2 hoofdstukken later cruciaal terug en een eerste blik nu helpt enorm. **(footnote-disclaimer geschrapt en tekst verduidelijkt; de figuur zelf maken is aan Tim.)**
6. `[v]` Overweeg de ``Macht``-methode te corrigeren naar ``int result = 1; for (int i = 0; i < exponent; i++) result *= grondtal;`` zodat ``Macht(5,0)`` netjes 1 teruggeeft. **(gedaan, exact zo.)**

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
- AI die recursieve methoden zonder base case genereert (StackOverflow). Sluit perfect aan bij de "flow van de recursie"-uitleg in [0b_parameters.md](0b_parameters.md).
- AI die named parameters door elkaar haalt (positie vs. naam) — zie de bestaande callout daarover.

### Interview-suggestie
- Een API-designer of library-maintainer over: *"hoe kies je methode-namen en parameter-volgorde voor een publieke API?"* — sluit aan bij het ``WriteLine``/dotnet-runtime-voorbeeld dat al in [0_intromethods.md](0_intromethods.md) staat.

### Code-archeologie (oermens)
- Tijdlijn parameter-doorgave: `out` parameter (klassiek) → `Tuple<int,string>` (C# 4) → tuples `(int, string)` (C# 7) → records (C# 9). Sluit naadloos aan bij het gemis over tuples als returntype. Maakt expliciet waarom oude AI-output nog `out` gebruikt waar tuples eleganter zijn.

### Lees-volgorde-pijlen
- De recursieve methode (Timsoft XP / faculteit) in [0b_parameters.md](0b_parameters.md): genummerde pijlen die *eerst* de afdaling tonen, *dan* het terugkeren via de stack. Recursie is het canonieke "oog volgt niet de leesvolgorde"-fragment.

### Taalkeuze-callout
- *"Python: positional + keyword arguments standaard, geen overloads. JavaScript: alle parameters optioneel, `undefined` als ontbrekende waarde. Rust: geen optional params — gebruik builder-pattern."* Past in [3_advancedmethod.md](3_advancedmethod.md) bij named/optional.

### Mondelinge code-review
- "Verdedig je methode-signatuur": laat student in 2 minuten uitleggen *waarom* zijn methode `static`, `void` of met die parameter-volgorde is. Past bij de huidige verwarring rond `static` als toverwoord.
