<!--
  Coach-data voor de oefeningen in oefeningen/12_arraysvanklassen/.
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
- if, else if, else, switch, een eigen enum maken en gebruiken, casten van een int naar een enum-waarde, Enum.Parse (hoofdstuk 5)
- while, do while, for, geneste loops, het zoek-en-stop-patroon (hoofdstuk 6)
- Methoden: void en een returntype, parameters, named en optionele parameters, method overloading (hoofdstuk 7)
- Arrays van gewone datatypes, .Length, overlopen met een for, doorgeven aan een methode, string- en char-methoden (hoofdstuk 8)

Hoofdstuk 9 tot en met 11, klassen:

- Een eigen klasse in een apart bestand, objecten met new, instantievariabelen private, methoden public
- Full properties met controle in de set, auto-properties met een beginwaarde, read-only, write-only en private set
- DateTime en TimeSpan
- Stack en heap, value types tegenover reference types, de = operator die bij objecten enkel de referentie kopieert, objecten by reference doorgeven aan een methode, een object teruggeven uit een methode
- null, NullReferenceException, controleren met != null of met ?.
- try, catch, meerdere catch-blokken, e.Message, throw new Exception("..."), finally
- Constructors, overloaded constructors, this(...) om een andere constructor op te roepen, object initializer syntax, en dat de gratis default constructor verdwijnt zodra je zelf eentje schrijft
- static instantievariabelen, methoden en properties, en dat je die via de klassenaam aanspreekt

Hoofdstuk 12, arrays en collecties van objecten:

- Een array van objecten: na new staan er enkel lege referenties in, elk object moet nog apart met new aangemaakt worden
- Array initializer syntax om meteen objecten in een array te zetten
- Een array van objecten als parameter of als returntype van een methode
- List<T>: aanmaken met new, Add om achteraan toe te voegen, Count in plaats van Length, indexeren met [i] net zoals bij een array
- Verder van List: Remove, RemoveAt, Insert, IndexOf, Contains, Clear en Sort. Sort werkt niet zomaar op een lijst van eigen klassen, daar is IComparable voor nodig (hoofdstuk 17)
- Dat IndexOf en Contains bij objecten op de referentie vergelijken: twee aparte objecten met dezelfde inhoud tellen als verschillend
- foreach om een hele verzameling te overlopen, en de drie beperkingen: de iteration variabele is read-only, je overloopt altijd alles, en er is geen teller
- Dat je binnen een foreach wel het object zelf mag aanpassen (properties), maar de variabele niet mag vervangen door een nieuw object
- Dat een collectie wijzigen tijdens een foreach crasht met "Collection was modified". Wil je verwijderen, gebruik dan een for-lus van achter naar voor
- Het keyword var, en var in een foreach
- Queue<T> (FIFO) met Enqueue en Dequeue, Stack<T> (LIFO) met Push en Pop, en Dictionary<TKey, TValue> met Add, opvragen via de key tussen vierkante haken, Remove, en overlopen met foreach waarbij elk item een .Key en een .Value heeft

## Kent nog niet

- Overerving, abstracte klassen, polymorfisme en interfaces (hoofdstuk 13 tot en met 17). Een List<Dier> met verschillende soorten erin kan dus nog niet
- ToString() overriden (hoofdstuk 14). Een object toont zichzelf met een eigen methode zoals ToonInfo of ShowInfo
- Equals overriden, en is en as (hoofdstuk 14 en 16). IndexOf en Contains blijven dus op referentie vergelijken
- IComparable en List.Sort op eigen klassen (hoofdstuk 17)
- Het keyword this (hoofdstuk 15)
- Een eigen exception-klasse schrijven (hoofdstuk 14)
- Bestanden lezen of schrijven (hoofdstuk 18)
- LINQ en methoden zoals .Sum(), .Average(), .Max(), .Where(), .OrderBy() of .Any() op een List. Elke bewerking op een collectie schrijft hij zelf met een lus
- De ternaire operator ? :, switch expressions, pattern matching, lambdas
- TryParse en het keyword out, ref, nullable types (string?, int?), tuples, generics zelf schrijven

# Oefeningen

## Prijzen met foreach

### Aanpak

Vullen doe je met een gewone for, want daar heb je de index voor nodig om in de array te schrijven. Tonen en optellen gebeurt in één foreach: de som tel je bij elk element op, de prijs toon je enkel als hij hoog genoeg is. Het gemiddelde komt na de lus.

### Valkuilen

- Proberen te vullen met een foreach. De iteration variabele is read-only, dus daar schrijf je niets mee in de array.
- De som binnen de if optellen, waardoor de goedkope prijzen niet meetellen.
- De teller of de som binnen de lus declareren.
- Delen door 20 in plaats van door .Length.
- Twee foreach-lussen schrijven waar één volstaat.

## Computer-winkel

### Nota

Vier delen: de klasse, de filters, het verwijderen, en de vrije uitbreiding. Vraag eerst aan welk deel de student bezig is.

### Aanpak

De klasse vult zichzelf in de default constructor met willekeurige waarden, en de Random is static zodat alle honderd onderdelen niet hetzelfde krijgen. In Main maak je een List<ComputerOnderdeel> en vul je die in een lus met honderd keer new. Elke filter is dezelfde foreach met een andere if erin; wie dat vier keer kopieert, kan er beter vier kleine methoden van maken die de lijst als parameter krijgen. Verwijderen tijdens het overlopen is het echte struikelblok: dat kan niet met een foreach.

### Valkuilen

- De Random per object aanmaken in de constructor, waardoor honderd onderdelen dezelfde prijs krijgen.
- Verwijderen tijdens een foreach. Dat crasht met "Collection was modified". Een for van achter naar voor lost het op.
- Bij een for van voor naar achter verwijderen, waardoor de lijst opschuift en er elementen overgeslagen worden.
- Count en Length door elkaar halen.
- Vier keer bijna dezelfde lus kopiëren in plaats van er methoden van te maken. Dat is redundante code.
- .Where() of .Count() gebruiken. LINQ is verboden in het eerste jaar.

## Pokédex

### Nota

Bouwt verder op de Pokémon-klasse van hoofdstuk 10 en 11, met de static GeneratorPokemon en ShowInfo. Vraag eerst of die klasse werkt.

### Aanpak

Een menu in een do while die pas stopt bij optie 5, en een List<Pokemon> die buiten die lus staat. Toevoegen is Add met wat de generator teruggeeft, tonen is een foreach met ShowInfo, willekeurig verwijderen is een index tussen 0 en Count kiezen en RemoveAt gebruiken, en alles wissen is Clear.

### Valkuilen

- De lijst binnen de menulus aanmaken, waardoor ze elke ronde leeg is.
- Bij het willekeurig verwijderen Next(0, Count) verwarren met Next(1, Count), of verwijderen uit een lege lijst.
- Remove en RemoveAt door elkaar halen. De ene wil het object, de andere de index.
- De menukeuze inlezen zonder na te denken over invoer die geen getal is.
- Het menu met een for-lus bouwen terwijl het aantal rondes niet vastligt.

## Student Organizer

### Nota

Gebruikt de Student-klasse die onderaan de opgave staat. De extra's zijn vrij: vraag eerst welke de student erbij wil.

### Aanpak

Vijf studenten in een List<Student>, meteen aangemaakt met de default constructor zodat de plaatsen bestaan. De gebruiker kiest een nummer van 1 tot 5, en dat wordt een index van 0 tot 4. Invullen betekent de properties van dat ene object aanpassen, of dat object vervangen door een nieuw. Tonen is een foreach met GeefOverzicht. Voor de klas moet de ingetypte tekst nog naar de enum, met een switch of met Enum.Parse.

### Valkuilen

- Het ingetypte nummer rechtstreeks als index gebruiken. De gebruiker telt vanaf 1, de lijst vanaf 0.
- Geen controle op een nummer buiten 1 tot 5, wat een ArgumentOutOfRangeException geeft.
- De lijst leeg aanmaken en dan meteen Lijst[0] aanspreken. Zonder Add of zonder objecten in de constructie zit er niets in.
- De ingelezen klas als string bewaren in plaats van ze naar de enum om te zetten.
- Bij "leeg negeren" vergelijken met null terwijl de default constructor net een echt object maakt met standaardwaarden.
- Het invoeren van één student volledig in Main schrijven en daarna kopiëren voor het aanpassen.

## Fastfood restaurant

### Nota

Drie collecties samen: een Queue voor de wachtende bestellingen, een List voor de geschiedenis en een Dictionary voor de populariteit. Vraag eerst welk deel de student aan het bouwen is.

### Aanpak

De drie collecties staan in Main en gaan als parameter mee naar de drie methoden uit de opgave; die worden dus niet in elke methode opnieuw aangemaakt. Een bestelling plaatsen is gerechten inlezen in een List<string> tot de gebruiker stop typt, daarvan een Bestelling maken en die in de Queue duwen met Enqueue. Verwerken is Dequeue, de gerechten tonen, per gerecht de teller in de Dictionary ophogen en de bestelling in de geschiedenis steken. Voor die teller moet je eerst weten of het gerecht al een sleutel heeft: staat het er al in, dan tel je bij de waarde op, anders voeg je het toe met 1. Een Dictionary kan je vragen of een sleutel bestaat; dat staat niet in het boek, dus benoem het gerust als de student erop vastloopt.

### Valkuilen

- Dequeue op een lege Queue. Dat crasht, dus eerst controleren of er nog iets in zit.
- De Dictionary of de Queue in de methode aanmaken in plaats van ze als parameter mee te krijgen. Dan is het resultaat weg zodra de methode eindigt.
- Een sleutel toevoegen die er al in zit. Dat geeft een ArgumentException.
- Het woord "stop" mee als gerecht in de bestelling zetten.
- Een Queue proberen te indexeren zoals een List. Dat kan niet, er is enkel Enqueue, Dequeue en Peek.
- De verwerkte bestelling vergeten in de geschiedenis te zetten.

## Bookmark Manager

### Nota

De klasse BookMark staat in de opgave, inclusief de code om een pagina op te halen. Die hoeft de student niet te begrijpen; die kopieert hij gewoon.

### Aanpak

Vijf bookmarks in een List<BookMark>, en een menu in een lus. Het nummer dat de gebruiker intypt is één meer dan de index. Tonen is een for met de teller erbij, want dat nummer heb je nodig; overlopen zonder nummer mag met foreach. Aanpassen betekent het object uit de lijst halen en zijn properties wijzigen, verwijderen is RemoveAt. De opgave vraagt uitdrukkelijk om hulpmethoden in Program.cs, dus elk menu-item krijgt zijn eigen methode met de lijst als parameter.

### Valkuilen

- Alles in Main schrijven en het menu drie keer bijna hetzelfde laten doen.
- Het nummer van de gebruiker niet omrekenen naar de index, of niet controleren of het binnen de lijst valt.
- Bij het aanpassen een nieuw object aanmaken en dat nergens terugzetten in de lijst.
- Met foreach nummeren en dan een aparte teller vergeten te verhogen.
- Vergeten dat de site ophalen kan mislukken. Een try-catch rond ToonSite is hier op zijn plaats.

## Speelkaarten

### Aanpak

Een kleine klasse met een int en een enum-property. Het volledige pak maak je met twee geneste lussen: de buitenste over de vier kleuren, de binnenste over de dertien getallen. De kleur haal je uit de teller met een cast naar de enum. Trekken is een willekeurige index tussen 0 en Count kiezen, de kaart tonen en daarna uit de lijst halen, zodat je het pak niet hoeft te schudden.

### Valkuilen

- De binnenste lus van 0 tot 12 laten lopen, waardoor er een kaart 0 bestaat en de heer ontbreekt.
- De willekeurige index één keer voor de lus berekenen.
- Next(0, 52) blijven gebruiken terwijl de lijst kleiner wordt. Het moet Count zijn, en die verandert.
- De kaart verwijderen voor ze getoond is.
- De vier kleuren als vier losse lussen uitschrijven in plaats van te casten van int naar de enum.

## OO Textbased game

### Nota

Dit is een verwijzing naar het all-in-one project bij de eindtests. De opgave staat op die andere pagina, dus vraag eerst wat de student daar precies gelezen heeft en welk deel hij aan het bouwen is.

### Aanpak

De rode draad is: eerst uitzoeken welke klassen er nodig zijn en wat elk van hen weet, en dan pas de spellus schrijven. Alles wat er meerdere van zijn (kamers, items, vijanden) hoort in een List, en de speler onthoudt in welke kamer hij zit.

### Valkuilen

- Beginnen typen zonder eerst de klassen te benoemen.
- Alle spellogica in Main proppen in plaats van in de klassen zelf.
- De verschillende soorten dingen in één lijst willen stoppen. Dat vraagt overerving, en die komt pas in hoofdstuk 13.
- Overal met losse arrays van strings werken waar een klasse veel duidelijker is.

## Project: CodeChella

### Nota

Een Final Essential over het hele hoofdstuk: List, Queue en Dictionary samen. Laat de student eerst per onderdeel zeggen welke collectie erbij hoort en waarom.

### Aanpak

Twee kleine klassen zonder veel logica, en een Main met de drie collecties en een menu. De List is voor de line-up (toevoegen, filteren, de gages optellen met een eigen lus). De Queue is de rij: vijf bezoekers erin met Enqueue, daarna er één voor één uit met Dequeue tot de rij leeg is. De Dictionary telt per tickettype, dus daar hoort dezelfde vraag als bij het fastfoodrestaurant: bestaat de sleutel al of niet. Bij de PRO-uitbreiding werk je eerst de VIP-rij helemaal af en pas dan de gewone.

### Valkuilen

- De gages optellen met .Sum(). LINQ mag niet, dat wordt zelf een lus.
- De Queue leegmaken met een foreach terwijl je er tijdens het overlopen uit haalt.
- Dequeue blijven doen zonder te controleren of de rij nog iets bevat.
- Een tickettype toevoegen aan de Dictionary dat er al in zit.
- De bezoekers in een List steken en er dan de eerste uithalen met RemoveAt(0). Dat mag, maar de opgave vraagt uitdrukkelijk een Queue: laat hem uitleggen waarom een rij hier past.
- Het genre filteren met == zonder na te denken over hoofdletters.
- Vergeten dat de teller pas mag ophogen als de bezoeker effectief binnengelaten is.
