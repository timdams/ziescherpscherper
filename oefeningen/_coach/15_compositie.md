<!--
  Coach-data voor de oefeningen in oefeningen/15_compositie/.
  Wordt door scripts/coach-prompt.mjs samengevoegd met _prompt.md tot de prompt achter de
  coach-knop. De opgave zelf staat hier niet in: die haalt het script uit de pagina zelf.

  De titels onder "# Oefeningen" moeten overeenkomen met de titels van de oefeningen op de
  pagina. De aanduiding (*Essential*) mag je weglaten. Staat een oefening hier niet, dan
  krijgt ze geen knop en waarschuwt het script.
-->

# Leerstof

## Kent al

Hoofdstuk 1 tot en met 8, de basis:

- Console-invoer en -uitvoer, kleuren, variabelen en datatypes, const, rekenen, de gehele deling die afkapt (hoofdstuk 1 en 2)
- Tekst: escape characters, string interpolatie met $"..." en formattering zoals {getal:F2} (hoofdstuk 3)
- Converteren met casting, int.Parse en Convert, de Math-bibliotheek, afronden, Random (hoofdstuk 4)
- if, else if, else, switch, een eigen enum (hoofdstuk 5)
- while, do while, for, geneste loops (hoofdstuk 6)
- Methoden: void en een returntype, parameters, method overloading (hoofdstuk 7)
- Arrays van gewone datatypes, .Length, overlopen met een for, string- en char-methoden, casten tussen char en int (hoofdstuk 8)

Hoofdstuk 9 tot en met 14, klassen, collecties en overerving:

- Klassen in een apart bestand, objecten met new, properties in al hun vormen, private, public en protected
- Reference types, objecten by reference doorgeven, null en NullReferenceException
- try, catch, e.Message, throw new Exception("...") en andere bestaande exception-types, finally, een eigen exception-klasse
- Constructors, overloaded constructors, this(...), base(...), object initializer syntax, static leden
- Arrays en List<T> van objecten, foreach, var, Queue, Stack en Dictionary
- Overerving, virtual en override, base.Methode(), abstract en sealed, ToString() en Equals() overriden

Hoofdstuk 15, compositie en aggregatie:

- De "heeft een"-relatie als associatie, tegenover de "is een"-relatie van overerving
- Compositie: het innerlijke object hoort onlosmakelijk bij het omliggende en sterft ermee mee. Aggregatie: het innerlijke object kan op zichzelf blijven bestaan
- Drie manieren om zo'n object te voorzien: rechtstreeks bij de instantievariabele met new, in de constructor, of langs buiten binnenkrijgen via een property of een parameter
- "Heeft meerdere" betekent een array of een List van het innerlijke type
- De vuistregel favor composition over inheritance: klopt de "is een"-relatie niet helemaal, kies dan voor een "heeft een"-relatie
- UML-diagrammen lezen: welke klasse bevat welke, en hoeveel van elk
- Het keyword this: de referentie naar het huidige object. Je gebruikt het om jezelf als parameter mee te geven, om een naamconflict tussen parameter en instantievariabele op te lossen, en met this(...) om een andere constructor op te roepen
- Dat this niet bestaat in een static methode, want daar is geen huidig object

## Kent nog niet

- De theorie achter polymorfisme, upcasting en late binding (hoofdstuk 16). Een List van het parent-type met childs erin gebruikt hij al, de uitleg komt later
- is en as, en downcasten naar het child-type (hoofdstuk 16)
- Interfaces en IComparable (hoofdstuk 17)
- Bestanden lezen of schrijven (hoofdstuk 18)
- LINQ en methoden zoals .Sum(), .Average(), .Max(), .Where() of .OrderBy(). Filteren doet hij met een lus en een nieuwe List
- De ternaire operator ? :, switch expressions, pattern matching, lambdas
- TryParse en het keyword out, ref, nullable types (string?, int?), tuples, generics zelf schrijven
- Operator overloading (dat staat in de appendix, niet in de leerstof)

# Oefeningen

## UML naar code

### Nota

Twee diagrammen. Vraag eerst aan welk van de twee de student bezig is, en laat hem het diagram in woorden voorlezen voor hij iets typt.

### Aanpak

Elk blokje in het diagram wordt een klasse, ook de lege. Een lijn met een ruitje betekent dat de ene klasse een instantievariabele van het type van de andere heeft. Staat er een aantal bij, en is dat meer dan één, dan wordt het een List. Bij compositie maak je die objecten zelf aan: ofwel meteen bij de instantievariabele, ofwel in de constructor.

### Valkuilen

- De relatie omdraaien: het onderdeel de container laten bevatten in plaats van omgekeerd.
- Overerving gebruiken waar het diagram een "heeft een" toont. Een wiel is geen auto.
- De onderdelen public maken. Ze horen private te zijn; de buitenwereld moet er niet zomaar aan.
- Een List declareren maar hem nooit vullen, waardoor alles null blijft.
- De lege klassen overslaan omdat ze toch niets doen. Ze staan in het diagram, dus ze bestaan.

## Politiek

### Nota

De grootste oefening van het hoofdstuk, in twee delen: eerst de drie klassen met MaakRegering en JaarVerder, daarna de VerkiezingsUitslag. Vraag eerst aan welk deel de student bezig is.

### Aanpak

President erft van Minister, dat is de enige overerving hier. Land bevat de anderen: een president, een eerste minister en een List<Minister>, alle drie private. MaakRegering controleert eerst of er nog geen president is, en verdeelt daarna de meegekregen lijst: het eerste element wordt de eerste minister, de rest gaat in de lijst. JaarVerder geeft de vraag door aan de president als die bestaat, en kijkt daarna of zijn teller op nul staat om alles op null te zetten. VerkiezingsUitslag maakt in haar default constructor zelf een president en vijf ministers aan met willekeurige namen, met één static Random voor de hele klasse.

### Valkuilen

- De meegegeven lijst rechtstreeks aan de private lijst toekennen. Dan zit de eerste minister er dubbel in, en wijzen beide lijsten naar dezelfde objecten.
- De controle op een bestaande regering vergeten, of ze na het toekennen doen.
- De teller van de president public laten. Die heeft een private set en verandert enkel via JaarVerder.
- In JaarVerder de president aanspreken zonder te controleren of hij null is.
- De Random in NaamGen aanmaken. Dat werkt, maar het boek wil één static Random voor de hele klasse.
- De ministerslijst op null zetten in plaats van hem leeg te maken, of omgekeerd. Laat hem uitleggen wat de opgave precies vraagt.

## Moederbord

### Aanpak

Elk onderdeel wordt een eigen klasse, en het moederbord heeft er per stuk een property van. Waar er meerdere van zijn (RAM), wordt het een List. Dit is aggregatie: de onderdelen worden langs buiten aangemaakt en toegewezen, dus de properties zijn hier wel public. TestMoederbord loopt de sloten af en meldt wat nog null is.

### Valkuilen

- De onderdelen in de constructor van Moederbord zelf aanmaken. Dan kan je niets meer zelf insteken.
- Denken dat een lege List hetzelfde is als null. Een lijst die bestaat maar leeg is, is niet null.
- De List nooit aanmaken, waardoor Add crasht op een NullReferenceException.
- Voor elk merk een aparte klasse maken. Het merk is een property, geen klasse.
- Bij TestMoederbord het aantal vrije RAM-sloten berekenen zonder ergens vast te leggen hoeveel sloten er zijn.

## Worldbuilding

### Nota

Drie klassen die in elkaar zitten, plus twee filtermethoden die een nieuwe lijst teruggeven. Vraag eerst welke klasse de student aan het schrijven is.

### Aanpak

World bevat zones (compositie: de wereld maakt en beheert ze), Zone bevat items (aggregatie: die items bestaan ook los). De twee filtermethoden werken hetzelfde: een nieuwe lege List maken, de eigen lijst met een foreach overlopen, wat voldoet toevoegen, en die nieuwe lijst teruggeven. CompareValue is static, want vergelijken hoort bij geen van beide items in het bijzonder. PrintWorldInfo geeft het werk door aan PrintZoneInfo van elke zone.

### Valkuilen

- In de filtermethode de eigen lijst aanpassen in plaats van een nieuwe lijst op te bouwen. Dan is de rest weg.
- De nieuwe lijst vergeten terug te geven, of het returntype op void laten staan.
- Filteren met .Where(). LINQ mag niet, dat wordt een foreach met een if.
- De lijsten public maken met een set, waardoor iemand er van buitenaf een andere lijst in kan hangen.
- In PrintWorldInfo alle gegevens van de zones zelf uitschrijven in plaats van PrintZoneInfo op te roepen.
- CompareValue als gewone methode schrijven. Dan roep je hem op één van de twee items op, en dat is scheef.

## Risk

### Nota

Hier verwijzen twee klassen naar elkaar: een land kent zijn leger, en een leger weet in welk land het staat. Laat de student eerst uittekenen welke pijl welke kant op gaat.

### Aanpak

Land heeft een naam, een List<Land> met buren en een verwijzing naar een Leger. Leger heeft een sterkte en een verwijzing naar het land waar het staat. Dat zijn allebei aggregaties: de buurlanden en de legers verdwijnen niet als het land weg is. Bordspel bevat de landen zelf, dat is wel compositie. VerplaatsLeger controleert eerst of er wel een leger staat en werpt anders een exception op; staat er al een leger op het doelland, dan tel je de sterktes samen in plaats van te verhuizen. Bij elke verhuizing moeten beide kanten kloppen: het land wijst naar het leger en het leger naar het land.

### Valkuilen

- Maar één kant bijwerken bij een verhuizing, waardoor het leger nog naar zijn oude land wijst.
- Het oude land niet op null zetten, waardoor hetzelfde leger op twee plaatsen staat.
- In ToString van Land de buurlanden met hun eigen ToString tonen. Dan tonen die weer hun buren, en zo blijft het doorlopen. De opgave vraagt enkel hun naam.
- Vergeten dat een land zonder leger een null bevat, en er meteen de sterkte aan vragen.
- De sterkte negatief laten worden. Die controle hoort in de property.
- Een buurland toevoegen zonder de omgekeerde richting, waardoor de kaart maar langs één kant klopt.

## (PRO) Textbased RPG

### Nota

Dit verwijst naar het all-in-one project bij de eindtests. De opgave staat op die andere pagina, dus vraag eerst wat de student daar gelezen heeft en welk stuk hij aan het bouwen is.

### Aanpak

De rode draad van dit hoofdstuk toepassen: eerst uitzoeken wie wat bevat. De speler heeft een inventaris, een kamer heeft items en uitgangen, het spel heeft de kamers. Pas als dat op papier staat, begin je aan de spellus.

### Valkuilen

- Alles in Main schrijven in plaats van in klassen.
- Overerving gebruiken waar een "heeft een"-relatie past.
- Alle objecten in Main aanmaken en overal als parameter meesleuren, terwijl ze in de juiste klasse thuishoren.
- Zo groot beginnen dat er nooit iets draait. Eerst één kamer die werkt, dan uitbreiden.

## De Online Coach

### Nota

Een Final Essentials over het hele hoofdstuk. Het verschil compositie of aggregatie is hier de kern: laat de student per relatie zeggen welke van de twee het is en waarom.

### Aanpak

Vier klassen die in elkaar schuiven. TrainingSchema bezit zijn oefeningen in een private lijst en toont ze zelf. Sporter bezit zijn schema: dat wordt in de constructor aangemaakt, zodat een sporter nooit zonder schema zit, en kan later vervangen worden. Coach heeft enkel een lijst met verwijzingen naar sporters die ook zonder hem blijven bestaan. Elke klasse doet haar eigen werk: Train geeft het tonen door aan het schema, dat het weer doorgeeft aan elke oefening.

### Valkuilen

- De lijst met oefeningen public maken, waardoor het schema ze niet meer beheert.
- In Train de oefeningen zelf uitschrijven in plaats van het schema zijn werk te laten doen.
- Vergeten in de constructor van Sporter een leeg schema aan te maken, waardoor Train crasht op null.
- Bij ZetNieuwSchema het oude schema leegmaken of vernietigen. Dat hoeft niet.
- De sporters in Coach aanmaken. Bij aggregatie krijg je ze binnen, je maakt ze niet zelf.
- De oefeningen als losse strings bijhouden in plaats van als objecten.
