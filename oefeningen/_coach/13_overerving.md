<!--
  Coach-data voor de oefeningen in oefeningen/13_overerving/.
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
- if, else if, else, switch, een eigen enum maken en gebruiken (hoofdstuk 5)
- while, do while, for, geneste loops (hoofdstuk 6)
- Methoden: void en een returntype, parameters, named en optionele parameters, method overloading (hoofdstuk 7)
- Arrays van gewone datatypes, .Length, overlopen met een for, string- en char-methoden (hoofdstuk 8)

Hoofdstuk 9 tot en met 12, klassen en collecties:

- Klassen in een apart bestand, objecten met new, instantievariabelen private, methoden public, properties in al hun vormen
- Stack en heap, reference types, objecten by reference doorgeven, null en NullReferenceException
- try, catch, e.Message, throw new Exception("..."), finally
- Constructors, overloaded constructors, this(...), object initializer syntax, static leden
- Arrays en List<T> van objecten, foreach, var, Queue, Stack en Dictionary

Hoofdstuk 13, overerving:

- De "is een"-relatie als teken dat overerving past, tegenover de "heeft een"-relatie
- Een child-klasse schrijven met een dubbele punt achter haar naam: public class Hond : Dier. De child erft alles van de parent
- Dat private leden van de parent onbereikbaar blijven in de child, en dat protected de derde access modifier is: bereikbaar in de klasse zelf en in haar childs, maar niet daarbuiten
- Een methode overschrijven: virtual op de parent-methode, override op die van de child. Zonder virtual mag het niet
- Met base.Methode() de versie van de parent alsnog oproepen, zodat je haar werking niet kwijtspeelt maar er iets aan toevoegt
- De constructorketen: bij het aanmaken van een child-object draait eerst de constructor van de verste voorouder en dan naar beneden
- Met base(...) achter de constructorkop de juiste constructor van de parent oproepen. Heeft de parent enkel een constructor met parameters, dan is dat verplicht
- Dat een object van een child-klasse in een variabele of List van het parent-type mag zitten, en dat de override dan toch draait. Het waarom daarvan komt in hoofdstuk 16
- Hiding: schrijf je in de child dezelfde methode zonder override, dan compileert het wel maar draait via een parent-referentie toch de parent-versie

## Kent nog niet

- System.Object als voorouder van alles, en ToString(), Equals() en GetHashCode() overriden (hoofdstuk 14)
- abstract en sealed (hoofdstuk 14)
- Een eigen exception-klasse schrijven (hoofdstuk 14)
- Compositie en aggregatie als bewuste keuze, en het keyword this (hoofdstuk 15)
- De theorie achter polymorfisme, upcasting en late binding (hoofdstuk 16). Hij mag hier al een List<Animal> vullen met childs, maar de uitleg erbij komt later
- is en as, en downcasten naar het child-type (hoofdstuk 16). Zit er een Hond in een variabele van het type Dier, dan kan hij daar voorlopig enkel bij wat in Dier staat
- Interfaces (hoofdstuk 17)
- Bestanden lezen of schrijven (hoofdstuk 18)
- LINQ en methoden zoals .Sum(), .Max() of .Where(). Elke bewerking op een collectie schrijft hij zelf met een lus
- De ternaire operator ? :, switch expressions, pattern matching, lambdas
- TryParse en het keyword out, ref, nullable types (string?, int?), tuples, generics zelf schrijven

# Oefeningen

## Het dierenrijk

### Nota

De tekening bij de opgave is de hiërarchie die nagebouwd moet worden. Laat de student ze eerst in woorden voorlezen: wie erft van wie.

### Aanpak

Elke klasse krijgt één eigen property die haar parent niet heeft. ToonInfo staat virtual in Animal en wordt in elke child overschreven, maar die override begint met base.ToonInfo() en zet er daarna alleen de eigen regel bij. Zo staat elke property maar op één plaats. Het laatste deel, alles in een List<Animal> en dan een foreach, is de eerste keer dat hij polymorfisme aan het werk ziet.

### Valkuilen

- De override laten beginnen met alle properties van de parent opnieuw te tonen in plaats van base.ToonInfo() te gebruiken.
- virtual vergeten op Animal.ToonInfo, waardoor override niet compileert.
- override vergeten in de child. Dan compileert het wel, maar in de List<Animal> draait toch de versie van Animal.
- De hiërarchie plat maken: alle dieren rechtstreeks van Animal laten erven, waardoor Mammal en Reptile geen rol meer spelen.
- Bij het overerven de properties van de parent nog eens overschrijven in de child.
- Zich afvragen waarom je in de List<Animal> de eigen properties van een Snake niet meer kan aanspreken. Dat klopt en komt in hoofdstuk 16.

## Magische dranken

### Aanpak

Drank heeft een constructor met de naam als parameter, en Elixer moet die dus oproepen met base(...) achter zijn eigen constructorkop. BerekenKracht in Elixer vraagt eerst de basiskracht op via base.BerekenKracht() en telt daar de bonus bij. De bonus zelf is één if.

### Valkuilen

- De 50 uit de parent overtypen in de child in plaats van base.BerekenKracht() te gebruiken.
- base(...) vergeten in de constructor van Elixer. De parent heeft geen constructor zonder parameters meer, dus dat compileert niet.
- virtual vergeten op BerekenKracht.
- De naam nog eens als property in Elixer zetten, terwijl hij die al erft.
- De bonus in de constructor berekenen. Verandert IsZeldzaam later, dan klopt de kracht niet meer.

## Ziekenhuis

### Aanpak

Patient houdt de naam en het aantal uren bij en berekent in een virtual methode de kost. VerzekerdePatient erft alles en overschrijft alleen die berekening: eerst base.BerekenKost() opvragen, daar 10 procent af. ToonInfo hoeft niet overschreven te worden: die roept BerekenKost op, en dankzij virtual is dat vanzelf de juiste versie.

### Valkuilen

- De hele formule herhalen in de child in plaats van base.BerekenKost() te gebruiken.
- ToonInfo ook overschrijven, terwijl dat niet nodig is. Laat hem uitleggen waarom de kost dan toch klopt.
- De korting met een int-berekening doen, waardoor er centen verdwijnen.
- De vaste bedragen overal opnieuw intypen in plaats van er een const van te maken.
- Denken dat VerzekerdePatient de naam en de uren opnieuw moet declareren.

## HiddenBookmark

### Nota

Bouwt verder op de Bookmark Manager van hoofdstuk 12. Vraag eerst of die applicatie nog werkt.

### Aanpak

Eén kleine child-klasse die enkel ToonSite overschrijft: de banner tonen, base.ToonSite() oproepen, en de banner nog eens tonen. Daarvoor moet ToonSite in de parent wel eerst virtual worden. In de lijst blijven de bookmarks van het type BookMark staan, dus je merkt meteen dat de override toch draait.

### Valkuilen

- ToonSite in de parent vergeten virtual te maken.
- De volledige code van ToonSite kopiëren naar de child in plaats van base.ToonSite() te gebruiken.
- De private hulpmethode van de parent willen gebruiken. Die is private, dus onbereikbaar; protected zou dat oplossen.
- De List<BookMark> vervangen door een List<HiddenBookMark>. Dat hoeft niet: een HiddenBookMark is een BookMark.

## Ballspel met overerving

### Nota

Bouwt verder op het Pong-voorbeeld uit hoofdstuk 9. De basiscode staat in de opgave; de eigenlijke opdracht zijn de uitbreidingen. Vraag eerst welke uitbreiding de student wil maken.

### Aanpak

De klasse Ball is al geschreven. Wat de student eruit moet halen: protected maakt vx, vy en het teken bereikbaar voor PlayerBall, en de constructor van PlayerBall geeft alles door met base(...) en past daarna enkel het uitzicht aan. Meerdere ballen betekent een array of List<Ball> en dezelfde lus voor alle ballen. Botsingen tussen ballen zijn twee geneste lussen waarbij een bal zichzelf niet tegenkomt.

### Valkuilen

- x en y in de child willen aanpassen. Die zijn private in Ball; enkel de protected leden zijn bereikbaar.
- base(...) vergeten in de constructor van PlayerBall.
- Bij meerdere ballen elke bal een eigen variabele geven in plaats van een collectie.
- Bij de botsingen elke bal ook met zichzelf vergelijken.
- De teller voor de score binnen de spellus declareren.
- Console.SetCursorPosition met een positie buiten het venster. Dat crasht.

## Drone Delivery System

### Nota

Een Final Essentials over het hele hoofdstuk. Laat de student eerst benoemen wat de drie klassen gemeen hebben en wat elk van hen apart maakt.

### Aanpak

Drone heeft Model, Battery en een virtual Fly(). De twee childs overschrijven enkel Fly() met hun eigen verbruik en hun eigen tekst. De waarschuwing bij een lage batterij hoort maar op één plaats te staan, dus laat de childs base.Fly() gebruiken of zet die controle in een aparte methode van de parent. In Main komt alles in één List<Drone>: de while blijft draaien tot geen enkele drone nog batterij heeft, en binnen de foreach vliegt enkel wie nog batterij over heeft.

### Valkuilen

- De batterijtekst en de waarschuwing in elke child opnieuw uitschrijven.
- Drie aparte lijsten maken, één per soort drone. Het punt van de oefening is net één List<Drone>.
- override vergeten, waardoor in de lijst overal de gewone Fly() draait.
- De stopvoorwaarde van de while zetten op één drone in plaats van op alle drones.
- De batterij onder nul laten zakken, of een drone met nul batterij toch laten vliegen.
- Bij DeliveryDrone het verbruik met een gehele deling berekenen zonder te controleren wat er bij een licht pakje gebeurt.
- De lijst wijzigen tijdens de foreach om lege drones te verwijderen. Dat crasht met "Collection was modified".
