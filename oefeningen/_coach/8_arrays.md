<!--
  Coach-data voor de oefeningen in oefeningen/8_arrays/.
  Wordt door scripts/coach-prompt.mjs samengevoegd met _prompt.md tot de prompt achter de
  coach-knop. De opgave zelf staat hier niet in: die haalt het script uit de pagina zelf.

  De titels onder "# Oefeningen" moeten overeenkomen met de titels van de oefeningen op de
  pagina. De aanduiding (*Essential*) mag je weglaten. Staat een oefening hier niet, dan
  krijgt ze geen knop en waarschuwt het script.
-->

# Leerstof

## Kent al

Hoofdstuk 1 tot en met 7, de basis:

- Console.WriteLine, Console.Write en Console.ReadLine, Console.Clear, de kleuren van de console en ResetColor (hoofdstuk 1 en 2)
- Variabelen en datatypes (int, double, decimal, bool, char, string), camel casing, const, rekenen met + - * / %, de volgorde van bewerkingen, de gehele deling die afkapt (9/2 geeft 4), en ++ (hoofdstuk 2)
- Tekst: escape characters zoals \n en \t, verbatim strings met @, string interpolatie met $"..." en formattering zoals {getal:F2}, .Length op een string, Environment (hoofdstuk 3)
- Converteren: casting met (int), int.Parse en double.Parse, de Convert-bibliotheek. De Math-bibliotheek (Pow, Sqrt, Round, Ceiling, Floor, PI) en afronden, inclusief bankers rounding. Random met Next en NextDouble, met één generator voor het hele programma. Een lopende som met +=. Debuggen met breakpoints (hoofdstuk 4)
- Beslissingen: relationele en logische operatoren, if, else if, else, scope, switch met case en break. Een eigen enum maken en gebruiken, casten van een int naar een enum-waarde, en Enum.Parse (hoofdstuk 5)
- Herhalingen: while, do while, for, geneste loops, break en continue, en het zoek-en-stop-patroon (hoofdstuk 6)
- Methoden: void en een returntype, return, parameters by value, named en optionele parameters, method overloading (hoofdstuk 7)

Hoofdstuk 8, arrays:

- Arrays: aanmaken met new of met accolades, index vanaf 0, .Length, een array vullen en overlopen met een for. Buiten de array grijpen geeft een IndexOutOfRangeException
- Arrays zijn reference types: toekennen kopieert het adres, niet de inhoud. Een array meegeven aan een methode geeft die methode toegang tot het origineel
- System.Array: Array.Sort, Array.Reverse, Array.Clear, Array.Copy, Array.IndexOf en Array.BinarySearch (dat laatste enkel op een gesorteerde array)
- Meerdimensionale arrays met [,], aangesproken met [rij, kolom], met GetLength(0) en GetLength(1), overlopen met twee geneste for-loops. Jagged arrays moet hij enkel herkennen
- params bij een methodeparameter
- Een string per teken benaderen met een index, .ToCharArray() en terug naar een string, en de string-methoden IndexOf, Contains, Substring, Remove, Insert, Replace, Trim, ToUpper, ToLower, Split en string.Join
- char.IsDigit, char.IsLetter, char.IsUpper, char.IsLower, char.IsWhiteSpace, char.ToUpper en char.ToLower. Die roep je aan op het type char zelf, met het teken tussen de haakjes: char.IsDigit(teken) en niet teken.IsDigit()
- Casten tussen char en int, want achter een char zit een Unicode-nummer. Een cast of Convert op een char geeft dus die Unicode-waarde en niet het cijfer dat er staat; het cijfer zelf haal je eruit via ToString en Parse (hoofdstuk 4)

## Kent nog niet

- foreach. Dat komt pas in hoofdstuk 12, ook al past het hier vaak. Overlopen doet hij met een for en een index
- Klassen, objecten en instantievariabelen. Alles staat in Main of in een static methode
- List, Dictionary en andere collecties. Enkel arrays met een vaste lengte
- LINQ en methoden zoals .Sum(), .Average(), .Max(), .OrderBy(), .Where() of .Distinct() op een array
- var, de ternaire operator ? :, switch expressions, pattern matching, lambdas
- try, catch en exceptions zelf opvangen. Een crash is hier gewoon een crash
- TryParse en het keyword out. Hij heeft TryParse één keer in een vooruitblik zien staan, maar mag het nog niet zelf schrijven
- ref, nullable types (string?, int?), StringBuilder, tuples, generics
- Bestanden lezen of schrijven
- Jagged arrays (double[][]). Hij moet ze kunnen herkennen, niet schrijven

# Oefeningen

## Opwarmers

### Nota

Dit is een reeks korte deeloefeningen. Vraag eerst aan welke van de opwarmers de student bezig is voor je iets uitlegt.

### Aanpak

Elke opwarmer volgt hetzelfde ritme: een array van de juiste lengte declareren, vullen met een for-loop, en in een aparte for-loop tonen. De kern zit telkens in het verband tussen de teller van de loop en de waarde die in het vakje moet. Bij de laatste opwarmers komen Random en een eigen enum erbij, en moet er geteld worden met een teller die vóór de loop staat.

### Valkuilen

- De lengte van de array verwarren met de hoogste waarde. Alle even getallen tot 100 passen in 50 vakjes, niet in 100.
- Vullen en tonen in dezelfde loop, terwijl de opgave uitdrukkelijk aparte loops vraagt.
- Het Random-object binnen de loop aanmaken.
- Bij de bool-array denken dat i % 2 iets zegt over de waarde. Het gaat over de index.
- Bij de enum-oefening niet zien dat een willekeurig getal eerst naar het enum-type gecast moet worden.
- Tellers binnen de loop declareren, waardoor ze elke ronde terug op nul staan.

## Vraag Array

### Aanpak

Twee arrays van gelijke lengte die bij elkaar horen via dezelfde index: de vraag in de ene, het antwoord op precies datzelfde indexnummer in de andere. Eerst de vragen invullen, dan één loop die de vraag toont en het antwoord wegschrijft, en achteraf een tweede loop die beide naast elkaar toont.

### Valkuilen

- Twee losse tellers gebruiken, waardoor het verband tussen vraag en antwoord zoekraakt.
- De invoer als string bewaren en vergeten om te zetten naar een int.
- De tweede array te klein maken, of de lengte hard intypen in plaats van .Length te gebruiken.

Een vraag die de student meestal deblokkeert: welk vakje van de antwoordenarray hoort bij de derde vraag?

## LeveringsBedrijf

### Aanpak

Opnieuw twee arrays waarbij index i in de ene bij index i in de andere hoort. Het zoeken is een loop die stopt zodra de postcode gevonden is en die de index bewaart. Met die index haal je de prijs uit de tweede array. Niet gevonden is een apart geval en hoort buiten de loop afgehandeld te worden.

### Valkuilen

- Geen manier voorzien om niet gevonden te herkennen. Een bool of een index die op -1 start lost dat op.
- De postcodes sorteren, waardoor de koppeling met de prijzen kapot gaat. Dat is precies waarom Array.Sort hier niet mag.
- Blijven doorzoeken nadat de postcode al gevonden is.
- De foutmelding binnen de loop tonen, zodat ze bij elke niet-passende postcode verschijnt.

## Bob

### Nota

Een hoofdletter herkennen kan met char.IsUpper. Die staat in hoofdstuk 8, in de sectie String en arrays, bij het tabelletje met wat je aan één teken kan vragen. Het kan ook zonder: een teken vergelijken met zijn hoofdletterversie werkt evengoed.

### Aanpak

Niet meteen beslissen, maar eerst de invoer analyseren in aparte bool-variabelen: is het een vraag, wordt er geroepen. Een vraag herken je aan het laatste teken, roepen aan een hoofdletter. Pas daarna komt de keten van if en else if, en daarin bepaalt de volgorde alles: het geval vraag én geroep moet als eerste getest worden. De antwoorden zelf horen in een array te zitten.

### Valkuilen

- Alles in één grote voorwaarde proppen in plaats van eerst te analyseren en dan te beslissen.
- Lege invoer niet apart afhandelen, waardoor het laatste teken buiten de string valt.
- Het laatste teken opvragen met .Length in plaats van .Length - 1.
- De volgorde van de tests omdraaien, zodat een geroepen vraag als gewone vraag behandeld wordt.

Laat de student eerst in woorden de vijf gevallen opsommen en er de juiste volgorde in leggen.

## Array Zoeker

### Aanpak

Drie fasen die je best apart houdt: vullen, de index van de gezochte waarde zoeken, en opschuiven. Opschuiven betekent dat elk element vanaf die index overschreven wordt door zijn rechterbuur, en dat het laatste vakje daarna op -1 gezet wordt. De loopgrens is hier de hele oefening: je stopt één vakje vroeger, want je gebruikt i + 1.

### Valkuilen

- Tot .Length lopen terwijl er i + 1 in de loop staat. Dat geeft een IndexOutOfRangeException.
- Het laatste vakje vergeten op -1 te zetten.
- Doorzoeken na de eerste match, waardoor de laatste in plaats van de eerste verwijderd wordt.
- Opschuiven ook uitvoeren wanneer er niets gevonden is.

## Hamming distance

### Aanpak

Eerst controleren of beide reeksen even lang zijn, en pas daarna één loop over de index die telkens de tekens op dezelfde plaats vergelijkt en een teller ophoogt. De invoer kan als string met een index, of omgezet naar een char-array.

### Valkuilen

- De lengtecontrole overslaan en dan crashen op de kortste reeks.
- Twee geneste loops gebruiken, elk teken tegen elk teken. Het gaat om dezelfde positie, dus één loop volstaat.
- De teller binnen de loop declareren.
- De vergelijking omdraaien en de gelijke tekens tellen.

## Puzzelen met arrays

### Nota

Zes deeloefeningen. Vraag eerst aan welk nummer de student bezig is. De opgave verbiedt kant-en-klare methoden zoals .Reverse() en .BinarySearch(). Sorteren met Array.Sort mag enkel waar de opgave het uitdrukkelijk toelaat.

### Aanpak

Oefening 1 tot 4 gaan over de volgorde waarin je afdrukt, niet over het wijzigen van de array. Je kan de loop achterwaarts laten lopen, of de index laten rondgaan met modulo. Bij 5 en 6 komt het roosterdenken: honderd getallen die je per drie als een rij leest, en bij 6 is een kolom telkens elk derde element.

### Valkuilen

- Toch .Reverse() of BinarySearch gebruiken.
- Bij het roteren een vakje overschrijven terwijl de oude waarde nog nodig is.
- Bij modulo vergeten dat een negatief tussenresultaat in C# negatief blijft.
- Bij de kolommen de sprong van drie in de update van de for-loop vergeten.
- De laatste, onvolledige rij niet apart bekijken.

## Havenbeheer

### Nota

Dit is een Final Essential: een oefening die het hele hoofdstuk samenvat. Werk hier extra gestructureerd, stap per stap volgens de vijf punten van de opgave.

### Aanpak

Twee arrays met dezelfde lengte, gekoppeld via de index. Eén loop om beide samen te vullen, één om het manifest te tonen, één om de som te maken, en een zoekloop op code. Het gemiddelde is de som gedeeld door .Length.

### Valkuilen

- Het gemiddelde berekenen met een int-teller, waardoor de deling afkapt.
- Bij het inlezen van 12,5 de komma en de punt verwarren. Op een Belgische pc is de komma het decimaalteken.
- De gevonden index niet op -1 initialiseren, waardoor niet gevonden niet te onderscheiden is van gevonden op index 0.
- De zoekloop laten doorlopen na de match.
- Het aantal containers overal opnieuw intypen in plaats van één const te gebruiken.

## Zwerkbaltraining

### Nota

Zelfde structuur als Havenbeheer, maar met scores als gehele getallen. Heeft de student Havenbeheer al gemaakt, laat hem dan eerst zelf benoemen wat hier hetzelfde is.

### Aanpak

Namen en scores in twee arrays met dezelfde index. Vullen in één loop, tonen in een tweede, optellen in een derde, en daarna zoeken op naam.

### Valkuilen

- Het gemiddelde: totaal en .Length zijn hier allebei int, dus de deling kapt af. Er moet ergens een double aan te pas komen.
- Namen vergelijken zonder na te denken over hoofdletters.
- Opnieuw de -1 vergeten als teken voor niet gevonden.

## Array Viewer

### Nota

Vanaf hier vraagt de opgave uitdrukkelijk dat de student zelf bepaalt welke methoden nodig zijn, met welke parameters en welk returntype.

### Aanpak

Eén methode die een int-array als parameter krijgt en niets teruggeeft. De hele oefening zit in het laatste element: loop tot .Length - 1 en schrijf telkens de waarde met een tab erachter, en toon dan het laatste element apart. Het verschil tussen Console.Write en Console.WriteLine doet hier het werk.

### Valkuilen

- De methode zelf de array laten aanmaken of inlezen, in plaats van ze als parameter te krijgen. Dan is ze niet herbruikbaar.
- Tot .Length lopen en daarna nog het laatste element apart tonen.
- WriteLine gebruiken binnen de loop, waardoor alles onder elkaar komt.
- Aannemen dat de array altijd even lang is. De opgave vraagt willekeurige groottes.

## Parkeergarage

### Aanpak

Splits op in een methode die voor één parkeerduur de kost berekent en teruggeeft, en een methode die de tabel toont en de totalen bijhoudt. De tariefregel: twee euro basis, daarboven per begonnen uur vijftig cent erbij, en het resultaat afgetopt op tien euro.

### Valkuilen

- Alles in Main schrijven, terwijl de opgave om een indeling in methoden vraagt.
- Per begonnen uur naar beneden afronden of casten naar int. Er moet naar boven afgerond worden.
- De aftopping op tien euro toepassen voor het supplement berekend is.
- Het aantal wagens aan de gebruiker vragen maar de array toch een vaste lengte geven.
- De kost per wagen in de tabel opnieuw berekenen in plaats van de methode te gebruiken.

## Caesar-encryptie

### Aanpak

De tekst als char-array behandelen. Per teken bereken je de nieuwe positie in het alfabet met de formule uit de opgave en zet je het resultaat terug om naar een char. Ontcijferen is exact hetzelfde met een negatieve verschuiving, dus dat mag één methode zijn die de andere oproept. Het resultaat komt in een nieuwe array, de originele blijft ongemoeid.

### Valkuilen

- Een char optellen zonder na te denken over het type. Bij rekenen met chars hou je een int over die je terug moet casten.
- Spaties en leestekens mee versleutelen, waardoor er rare tekens verschijnen.
- Vergeten dat je bij het ontcijferen langs de andere kant buiten het alfabet valt.
- Hoofdletters en kleine letters door elkaar, terwijl de formule maar één reeks aankan.

## Puzzelen met arrays deel 2

### Nota

Twaalf deeloefeningen. Vraag eerst aan welk nummer de student bezig is.

### Aanpak

De rode draad is het verschil tussen een nieuwe array maken en een bestaande muteren. Bij een nieuwe array lees je uit de bron en schrijf je in een tweede array, en blijft het origineel intact. Bij muteren wijzig je de bron zelf en heb je meestal een hulpvariabele nodig om niets kwijt te spelen. Omkeren in de array zelf loopt maar tot de helft. Uniek maken is een zoeklus binnen een lus, met een aparte teller voor hoeveel er al ingevuld zijn.

### Valkuilen

- Bij muteren een vakje overschrijven voor de oude waarde bewaard is.
- Bij omkeren in de array zelf over de volle lengte lopen, waardoor alles weer terugdraait.
- Bij uniek het aantal gevonden waarden verwarren met de lengte van de array.
- Bij de zeef van Eratosthenes de index verwarren met de waarde die erin staat.
- Bij de gesorteerde variant toch alles met alles vergelijken, terwijl vergelijken met de vorige volstaat.

## Determinant

### Aanpak

Een tweedimensionale array als parameter aan een methode die de determinant teruggeeft. De berekening zelf is één regel met vier indices. Laat de student eerst op papier zetten welke index de rij is en welke de kolom.

### Valkuilen

- Vierkante haken na elkaar schrijven in plaats van één paar met een komma erin. Dat eerste is een jagged array en die kent hij nog niet.
- Rij en kolom verwisselen.
- De matrix in de methode aanmaken in plaats van ze als parameter te krijgen.
- Bij het nadenken over 3x3: GetLength(0) en GetLength(1) door elkaar halen.

## 2D Array Viewer

### Aanpak

Dit is method overloading: dezelfde naam, één versie met een gewone array en één met een tweedimensionale. Twee geneste loops, de buitenste over de rijen met GetLength(0), de binnenste over de kolommen met GetLength(1). Netjes uitlijnen kan door in een eerste doorloop te bepalen hoe breed de langste waarde is.

### Valkuilen

- .Length gebruiken op een tweedimensionale array. Dat geeft het totaal aantal vakjes, niet het aantal rijen.
- De WriteLine op de verkeerde plaats zetten, waardoor er geen rijen ontstaan.
- Rij en kolom omwisselen in de indices.
- Denken dat er een nieuwe methodenaam nodig is. Overloading is hier net het punt.

## Voetbalcoach

### Aanpak

Een tweedimensionale array met een rij per rugnummer en twee kolommen: positief en negatief. De invoer stopt pas bij 99, dus het aantal invoeren ligt niet vooraf vast en een for-loop past hier niet. Een rugnummer omzetten naar een rij is min één. De ingevoerde aantallen worden opgeteld bij wat er al staat. Pas op het einde bereken je per rij het verschil en zoek je de hoogste en de laagste.

### Valkuilen

- Rugnummer 1 op rij 1 zetten en rij 0 leeg laten.
- De nieuwe waarde toekennen in plaats van optellen, waardoor eerdere acties verdwijnen.
- Een for-loop gebruiken terwijl het aantal invoeren onbekend is.
- De 99 nog als rugnummer verwerken voor het programma stopt.
- Bij een gedeelde eerste plaats maar één speler tonen, terwijl de opgave over spelers spreekt.

## Robot Simulator

### Nota

Een PRO-oefening. Wil de student beeld per beeld door de simulatie stappen met Console.ReadKey: dat staat niet in een hoofdstuk maar in de appendix Handig om weten. Nodig is het niet.

### Aanpak

Hou de toestand bij in drie variabelen: de x, de y en de richting. Voor die richting is een enum de nette keuze. Loop over de commando's teken per teken en behandel elk teken met een switch. Draaien is de richting één stap opschuiven, vooruit is x of y aanpassen afhankelijk van de richting. Het draaien in een aparte methode zetten houdt Main leesbaar.

### Valkuilen

- Noord en zuid omwisselen, omdat de y-as op het scherm naar beneden loopt.
- Bij het draaien de rondgang vergeten, van west terug naar noord.
- Niet controleren of de robot van het rooster stapt.
- De commando's met Substring uit de string peuteren in plaats van per teken te werken.

## Fraude Detectie

### Nota

Ook dit is een Final Essential over het hele hoofdstuk. Laat de student de drie deeltaken benoemen voor hij begint te typen.

### Aanpak

Drie keer hetzelfde patroon: één loop over de posities van de antwoordsleutel. De score is tellen waar het antwoord gelijk is aan de sleutel. Verdacht is een dubbele voorwaarde: beide studenten geven hetzelfde antwoord én dat antwoord wijkt af van de sleutel. Een string mag hier met een index aangesproken worden, een char-array is niet nodig.

### Valkuilen

- Aannemen dat alle antwoorden even lang zijn en zo buiten de string grijpen.
- Verdachte gelijkenissen tellen zodra beide studenten hetzelfde antwoorden, zonder te controleren dat het fout is.
- Volledige antwoorden met == vergelijken in plaats van teken per teken.
- Hoofdletters en kleine letters door elkaar halen bij de vergelijking.
