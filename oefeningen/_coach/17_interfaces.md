<!--
  Coach-data voor de oefeningen in oefeningen/17_interfaces/.
  Wordt door scripts/coach-prompt.mjs samengevoegd met _prompt.md tot de prompt achter de
  coach-knop. De opgave zelf staat hier niet in: die haalt het script uit de pagina zelf.

  De titels onder "# Oefeningen" moeten overeenkomen met de titels van de oefeningen op de
  pagina. De aanduiding (*Essential*) mag je weglaten. Staat een oefening hier niet, dan
  krijgt ze geen knop en waarschuwt het script.
-->

# Leerstof

## Kent al

Hoofdstuk 1 tot en met 8, de basis:

- Console-invoer en -uitvoer, de kleuren van de console, variabelen en datatypes, const, rekenen (hoofdstuk 1 en 2)
- Tekst: escape characters, string interpolatie met $"..." en formattering zoals {getal:F2} (hoofdstuk 3)
- Converteren met casting, int.Parse en Convert, de Math-bibliotheek, afronden, Random (hoofdstuk 4)
- if, else if, else, switch, een eigen enum (hoofdstuk 5)
- while, do while, for, geneste loops (hoofdstuk 6)
- Methoden: void en een returntype, parameters, method overloading (hoofdstuk 7)
- Arrays van gewone datatypes, .Length, overlopen met een for, tweedimensionale arrays met [rij, kolom] en GetLength, Array.Sort (hoofdstuk 8)

Hoofdstuk 9 tot en met 16, klassen, collecties, overerving en polymorfisme:

- Klassen in een apart bestand, objecten met new, properties in al hun vormen, private, public en protected
- Reference types, objecten by reference doorgeven, null en NullReferenceException
- try, catch, e.Message, throw, een eigen exception-klasse
- Constructors, overloaded constructors, this(...), base(...), object initializer syntax, static leden
- Arrays en List<T> van objecten, foreach, var, Queue, Stack en Dictionary
- Overerving, virtual en override, base.Methode(), abstract en sealed, ToString() en Equals() overriden
- Compositie en aggregatie, het keyword this
- Polymorfisme, upcasting, late binding, is en as, pattern matching met is, en GetType()

Hoofdstuk 17, interfaces:

- Een interface als contract: ze beschrijft welke publieke methoden en properties een klasse moet hebben, en zegt niets over de code erachter
- Een interface schrijven: naam begint met een hoofdletter I, de leden krijgen geen public en geen body, elke regel eindigt op een puntkomma
- Geen instantievariabelen, geen constructors en geen code in een interface
- Een klasse die een interface aanhangt, is verplicht alles ervan te implementeren, anders compileert ze niet
- Een klasse kan meerdere interfaces dragen maar erft van hoogstens één klasse. De klasse staat eerst, dan de interfaces: Batman : Man, ISuperHeld, ICoureur
- Interfaces in UML herkennen
- Het keyword is met een interface: nagaan of een object een bepaald contract nakomt, handig in een lijst met een allegaartje aan objecten
- as gebruiken om een object naar een interface om te zetten, en daarna op null controleren
- Bestaande interfaces uit .NET, in het bijzonder IComparable met haar methode CompareTo, zodat Array.Sort en List.Sort ook met je eigen klassen werken
- Dat CompareTo een negatief getal, nul of een positief getal teruggeeft naargelang de volgorde

## Kent nog niet

- Bestanden lezen of schrijven, System.IO, JSON (hoofdstuk 18)
- LINQ en methoden zoals .Sum(), .Average(), .Max(), .Where() of .OfType(). Filteren doet hij met een lus, een if en eventueel is
- Generics zelf schrijven, delegates, Action en Func, lambdas, records
- IEnumerable zelf implementeren. Dat staat enkel in een PRO-oefening en is geen leerstof
- switch met patterns, switch expressions, de ternaire operator ? :
- TryParse en het keyword out, ref, nullable types (string?, int?), tuples

# Oefeningen

## Figures with interfaces

### Nota

Bouwt verder op de Rechthoek-klasse uit de Figuren-oefening van hoofdstuk 9. Vraag eerst of de student die klasse nog heeft.

### Aanpak

Sort weet niet hoe hij twee rechthoeken moet rangschikken; dat vertel jij hem door IComparable te implementeren. CompareTo krijgt een object binnen, dus je controleert eerst met is of as of het wel een rechthoek is. Daarna vergelijk je de twee oppervlaktes en geef je een negatief getal, nul of een positief getal terug. Meer moet Sort niet weten.

### Valkuilen

- De interface wel achter de klassenaam zetten maar CompareTo niet schrijven. Dan compileert de klasse niet.
- In CompareTo true of false teruggeven. Het returntype is int, en het teken bepaalt de volgorde.
- Het binnenkomende object meteen casten zonder controle.
- De vergelijking omdraaien en zich afvragen waarom de lijst van groot naar klein staat.
- Zelf een sorteeralgoritme schrijven. De oefening gaat net over Sort zijn werk laten doen.

## Carbon Footprint

### Nota

Let op de klasse Plant: die krijgt de interface uitdrukkelijk niet. Dat is precies waarom je in de lus moet controleren.

### Aanpak

De interface beschrijft de twee methoden, meer niet. Drie van de vier klassen hangen ze aan en vullen elk hun eigen berekening in; per klasse hou je zelf bij hoe je de footprint verlaagt, bijvoorbeeld met een private factor. In Main komen alle acht objecten in één lijst, en per element vraag je met is of as of het wel een footprint heeft. Zo ja, dan tel je op, vergelijk je met het hoogste tot nu toe, of verlaag je. Let op het gemiddelde: de opgave zegt dat de planten daar wel meetellen.

### Valkuilen

- Een gewone cast naar de interface doen zonder controle. Op een Plant crasht dat.
- De som delen door het aantal vervuilers in plaats van door het totale aantal objecten. Lees de opgave hier traag.
- De footprint als property opslaan in plaats van hem te berekenen. Na een verlaging klopt hij dan niet meer.
- De verlaging onbeperkt laten doorgaan, tot er negatieve footprints uitkomen.
- Plant toch de interface geven om het zichzelf makkelijk te maken. De opgave zegt uitdrukkelijk dat Plant niet aangepast wordt.
- De hoogste footprint zoeken door te sorteren. Een lus met een grootste-tot-nu-toe volstaat.

## Pokémon interfaces

### Nota

Bouwt verder op de Pokémon-klasse en de lijst uit de vorige hoofdstukken.

### Aanpak

IShadow beschrijft één methode. Je maakt enkele child-klassen van Pokemon die daarnaast ook IShadow aanhangen: de klasse staat eerst, dan de interface. In de lijst blijven het gewone Pokémon, dus je vraagt per element met is of het ook een IShadow is en roept enkel dan Purify op.

### Valkuilen

- De interface voor de parentklasse zetten. De klasse waarvan je erft, komt eerst.
- IShadow als abstracte klasse maken. Dan kan de Pokémon niet meer van Pokemon erven.
- Een bool-property IsShadow bijhouden en daarop filteren, terwijl is precies daarvoor bestaat.
- Purify in de interface een body geven.
- Na het filteren vergeten dat je het object nog moet omzetten om Purify te kunnen oproepen.

## PokéDex IList

### Nota

Een PRO-oefening buiten de leerstof: IEnumerable zelf implementeren staat niet in het boek. Zeg dat gerust, en coach hier op begrip, niet op afwerking.

### Aanpak

De vraag is: wat moet een klasse kunnen zodat foreach erover kan lopen. Laat de student eerst de documentatie lezen en in woorden zeggen wat die interface van hem verwacht.

### Valkuilen

- Denken dat dit voor het examen gekend moet zijn.
- Beginnen te typen zonder de documentatie gelezen te hebben.
- De eigen lijst gewoon public maken en denken dat het daarmee opgelost is.

## Mapmaker afwerken

### Nota

De afwerking van het all-in-one project Map Maker, nu inclusief interfaces en is/as. Vraag eerst waar de student gebleven was in hoofdstuk 16.

### Aanpak

De interfaces beschrijven wat sommige elementen extra kunnen, bijvoorbeeld tekenen of iets ondergaan. In de tekenlus loop je over één lijst van het basistype en vraag je per element met is of het dat contract nakomt.

### Valkuilen

- Een interface maken waar overerving al volstond, of omgekeerd. Laat hem uitleggen waarom hij welke koos.
- De interface leden public maken of er een body in zetten.
- In de lus met GetType().Name op de naam van de klasse vergelijken in plaats van met is te werken.
- Zoveel tegelijk willen dat er niets meer draait. Eerst één element dat tekent, dan uitbreiden.

## Game

### Nota

De grootste oefening van het hoofdstuk. Er staat een klasseschema onderaan de opgave: laat de student dat eerst in woorden voorlezen. Het advies bovenaan om eerst de kleinere coronamissie te maken, is niet gek.

### Aanpak

MapElement is de abstracte basis met een Location, en alles op de kaart erft daarvan. Wat maar sommige elementen kunnen, zoals bewegen of schieten, hoort in een interface. De spellogica zit niet in de speler of het monster maar in Main of in een Manager: een monster beslist niet wat de speler doet, en omgekeerd. De kaart is een tweedimensionale array van MapElement, waarbij een leeg vakje null is. Per beurt werk je de stappen van de opgave in volgorde af.

### Valkuilen

- Beslissingen over andere objecten in een klasse zetten die er niets mee te maken heeft.
- Vergeten dat een leeg vakje null is, en er meteen iets aan vragen.
- Bewegen zonder eerst te controleren of het doelvakje binnen de kaart ligt of al bezet is.
- Het element wel op de nieuwe plaats zetten maar de oude plaats niet leegmaken, waardoor het dubbel op de kaart staat.
- De coördinaten omdraaien: [rij, kolom] is niet hetzelfde als [x, y]. Kies één afspraak en hou ze vol.
- De lijst met monsters wijzigen tijdens een foreach nadat er eentje vernietigd is.
- Alles tegelijk willen bouwen. Eerst een kaart die getekend wordt, dan een speler die beweegt, dan pas de monsters.

## Hacker Simulator

### Nota

Een Final Essentials over het hele hoofdstuk. Merk op dat de drie doelwitten niets met elkaar te maken hebben: geen enkele erft van een andere. Dat is precies waarom hier een interface staat en geen basisklasse.

### Aanpak

IHackable beschrijft twee methoden en een property. De drie klassen implementeren die elk op hun eigen manier; SecurityLevel is bij elk gewoon een read-only property met een vast getal. SocialMediaAccount onthoudt met een bool dat hij al gehackt is. HackerTool kent enkel de interface: RunBruteForce krijgt een List<IHackable> binnen en probeert per doelwit de wachtwoorden uit een array, tot er eentje lukt.

### Valkuilen

- Een gemeenschappelijke basisklasse maken voor bank, account en koelkast. Ze hebben niets gemeen, enkel een contract.
- Een property in de interface vergeten. Ook properties horen in het contract, zonder body.
- In HackerTool met is en as het type opvragen om per soort iets anders te doen. De tool hoort enkel het contract te kennen.
- Blijven doorproberen nadat een wachtwoord al gelukt is.
- ShowData altijd de geheime data laten tonen, ook zonder geslaagde hack.
- Het type van het doelwit tonen door zelf een naam bij te houden, terwijl GetType() dat al weet.
