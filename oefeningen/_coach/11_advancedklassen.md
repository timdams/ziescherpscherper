<!--
  Coach-data voor de oefeningen in oefeningen/11_advancedklassen/.
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
- Converteren met casting, int.Parse en Convert, de Math-bibliotheek, afronden, Random met Next en NextDouble (hoofdstuk 4)
- if, else if, else, switch, een eigen enum maken en gebruiken, casten van een int naar een enum-waarde (hoofdstuk 5)
- while, do while, for, geneste loops, het zoek-en-stop-patroon (hoofdstuk 6)
- Methoden: void en een returntype, parameters, named en optionele parameters, method overloading (hoofdstuk 7)
- Arrays van gewone datatypes, .Length, overlopen met een for, doorgeven aan een methode, Array-methoden, string- en char-methoden (hoofdstuk 8)

Hoofdstuk 9 en 10, klassen en geheugen:

- Een eigen klasse in een apart bestand, objecten met new, instantievariabelen private, methoden public
- Full properties met controle in de set, auto-properties met een beginwaarde, read-only, write-only en private set
- DateTime en TimeSpan
- Stack en heap, value types tegenover reference types, de = operator die bij objecten enkel de referentie kopieert
- Objecten by reference aan een methode meegeven, en een object teruggeven uit een methode
- null, NullReferenceException, controleren met != null of met ?.
- namespace en using
- try, catch, meerdere catch-blokken met de specifieke eerst, e.Message, throw new Exception("..."), finally

Hoofdstuk 11, gevorderde klasseconcepten:

- Wat new precies doet: geheugen reserveren op de heap, de constructor uitvoeren en een referentie teruggeven
- Een constructor schrijven: dezelfde naam als de klasse, geen returntype, ook geen void
- De gratis default constructor, en dat je die kwijt bent zodra je zelf een constructor met parameters schrijft. Heb je hem nog nodig, dan schrijf je hem er zelf bij
- Overloaded constructors: meerdere constructors met een verschillende parameterlijst, net zoals bij method overloading
- Constructors hergebruiken met this(...) achter de constructorkop, zodat dezelfde code niet twee keer staat
- Object initializer syntax: new Persoon("Jan", "Janssens") { Geboortejaar = 1990 }. Dat werkt enkel op properties met een bereikbare set, en de constructor draait eerst
- Het bestaan van required properties
- static instantievariabelen: één exemplaar voor de hele klasse in plaats van één per object
- static methoden en static properties, en dat je die aanspreekt via de klassenaam en niet via een object
- Een static methode kan geen gewone instantievariabelen of methoden gebruiken, want er is geen object
- Eén static Random in de klasse in plaats van telkens een nieuwe aanmaken
- Debug.WriteLine als alternatief voor Console.WriteLine tijdens het debuggen
- Een validatie in de constructor die bij foute invoer een exception opwerpt

## Kent nog niet

- Het keyword this om naar het huidige object te verwijzen (hoofdstuk 15). this(...) om een andere constructor op te roepen kent hij wel
- Arrays of Lists van objecten (hoofdstuk 12). Hij werkt met losse objecten in aparte variabelen
- foreach, List, Dictionary, Queue en Stack (hoofdstuk 12)
- Overerving, abstracte klassen, polymorfisme en interfaces (hoofdstuk 13 tot en met 17)
- Een eigen exception-klasse schrijven (hoofdstuk 14). Hij werpt een gewone Exception op met een boodschap; ArgumentException gebruiken mag, want die bestaat al
- ToString() overriden (hoofdstuk 14). Een overzicht tonen doet hij met een eigen methode zoals ShowInfo of ToonInfo
- Bestanden lezen of schrijven (hoofdstuk 18)
- LINQ en methoden zoals .Sum(), .Average() of .Max(), var, de ternaire operator ? :, switch expressions, pattern matching, lambdas
- TryParse en het keyword out, ref, nullable types (string?, int?), tuples, generics

# Oefeningen

## Meetlat constructor

### Nota

Een verbouwing van de Meetlat uit hoofdstuk 10. Heeft de student die oefening niet gemaakt, laat hem dan eerst de klasse van toen kort beschrijven.

### Aanpak

De write-only property verdwijnt en wordt vervangen door een constructor met één parameter die de private instantievariabele invult. De vier read-only properties blijven zoals ze waren; ze lezen nu die instantievariabele. In Main gaat de lengte dus tussen de haakjes van new mee.

### Valkuilen

- Een returntype (of void) voor de constructor zetten. Dan is het gewoon een methode en compileert new Meetlat(5) niet.
- De constructor een andere naam geven dan de klasse.
- De write-only property laten staan naast de constructor, zodat er twee manieren zijn om hetzelfde te doen.
- De parameter dezelfde naam geven als de instantievariabele. Zonder this loopt de toekenning dan in zichzelf rond, en this komt pas in hoofdstuk 15.
- Nog altijd new Meetlat() proberen. Die gratis default constructor is weg zodra je er zelf eentje schrijft.

## Persoonsregistratie

### Aanpak

Een constructor met twee parameters die eerst controleert en pas daarna toekent. Klopt er iets niet, dan werp je een ArgumentException op en wordt het object niet afgewerkt. Geboortejaar en Email staan niet in de constructor: die vul je in Main in met object initializer syntax, tussen accolades achter de haakjes van new. Het testen gebeurt met een try rond het aanmaken en een catch die de boodschap toont.

### Valkuilen

- De try rond de verkeerde regel zetten. De fout ontstaat bij new, niet bij ToonInformatie.
- Na de throw nog verder toekennen, in de veronderstelling dat de constructor gewoon doorloopt.
- De accolades van de object initializer als een blok code lezen. Het zijn toekenningen aan properties, gescheiden door komma's.
- De vier waarden alsnog allemaal in de constructor stoppen, terwijl de opgave uitdrukkelijk de initializer wil zien.
- In de catch niets doen, zodat je niet ziet dat er een fout was.

## Digitale kluis

### Nota

Twee delen: eerst de klasse zelf, daarna de static brute-force methode. Vraag aan welk deel de student bezig is.

### Aanpak

De echte code zit in een private instantievariabele, en de property Code beslist in haar get of hij getoond wordt of dat er -666 buitenkomt. De set is private, dus de code wordt enkel in de constructor gezet. TryCode werkt de tabel af in de volgorde van de opgave: eerst de valsspeler, dan de blokkering, dan juist, dan fout. BruteForce is static, want die hoort bij geen enkele kluis in het bijzonder: hij krijgt er eentje binnen als parameter en probeert er getallen op.

### Valkuilen

- De volgorde van de tabel omgooien, waardoor de cheater als gewone foute poging geteld wordt.
- Het aantal pogingen ook verhogen bij een juiste code of bij -666, terwijl de tabel zegt wanneer dat moet.
- In BruteForce de echte code van de kluis uitlezen. Dat is geen brute force, en de property geeft daar toch -666 terug.
- BruteForce als gewone methode schrijven en dan een object nodig hebben om hem op te roepen.
- De Random binnen de lus aanmaken, waardoor je tien keer hetzelfde getal probeert.
- Blijven proberen nadat de code al gevonden is.

## Pokémon deel 2

### Nota

Drie delen: constructors, de static tellers, en de Natures als PRO-uitbreiding. Vraag eerst aan welk deel de student bezig is en of zijn Pokémon-klasse van hoofdstuk 10 werkt.

### Aanpak

Deel 1 zet twee constructors naast elkaar: één zonder parameters die alle base-stats op 10 zet, en één met zes parameters. De setters van de base-stats gaan op private, zodat ze na de constructie niet meer wijzigen. Deel 2 verhuist GeneratorPokemon en Battle van Program.cs naar de klasse en maakt ze static, samen met de tellers: die horen bij alle Pokémon samen, niet bij één. VerhoogLevel controleert eerst NoLevelingAllowed en werpt anders een exception op. Bij de Natures komt er een enum bij en één private hulpmethode die per stat de factor teruggeeft, zodat elke Full-property maar één keer vermenigvuldigt.

### Valkuilen

- De twee constructors dezelfde code laten bevatten in plaats van de ene via this(...) de andere te laten oproepen.
- De tellers als gewone instantievariabelen schrijven. Dan telt elke Pokémon zijn eigen battles.
- De tellers een public set geven, terwijl ze enkel via de methoden mogen wijzigen.
- Vergeten de teller te verhogen in de methode zelf, waardoor Info() altijd nul toont.
- Bij de private setters van de base-stats vergeten dat de object initializer dan niet meer werkt voor die properties.
- Bij de Natures de factor in elke Full-property opnieuw uitschrijven in plaats van de hulpmethode te gebruiken.
- Bij de Natures vergeten terug naar int te casten, of de vermenigvuldiging op de base-stat toepassen in plaats van op het eindresultaat.

## Sport simulator

### Nota

Bouwt verder op de Sports-oefening uit hoofdstuk 9. De drie methoden staan in Program.cs, niet in de klasse.

### Aanpak

Drie static methoden die een speler of twee spelers als parameter krijgen. De eerste roept gewoon drie keer de acties van het object op. De tweede kiest willekeurig een winnaar en laat die iets doen. De derde doet hetzelfde maar geeft het winnende object terug, zodat je er in Main verder mee kan werken. De Random hou je op één plaats.

### Valkuilen

- Bij BesteSpeler de naam teruggeven in plaats van het object. Het returntype is de klasse zelf.
- De Random in elke methode opnieuw aanmaken.
- De winnaar bepalen met twee losse worpen, waardoor beide spelers kunnen winnen of geen van beide.
- De methoden in de klasse zetten terwijl de opgave Program.cs vraagt.
- De speler-objecten in de methode aanmaken in plaats van ze als parameter binnen te krijgen.

## Project: GreenRide

### Nota

Een Final Essential over het hele hoofdstuk. Laat de student eerst per gegeven zeggen of het bij één step hoort of bij het hele bedrijf. Dat is precies het onderscheid static of niet.

### Aanpak

Alles wat over de vloot gaat (prijs per minuut, totale winst, aantal in gebruik, de nummergenerator) is static; alles wat over één step gaat (ID, batterij, bezig) is een gewone property. De twee constructors delen het toekennen van een uniek ID: de generator wordt uitgelezen en meteen verhoogd, zodat elke step een ander nummer krijgt. StartRit en EindigRit controleren eerst of de actie mag, en pas daarna wijzigen ze zowel de eigen toestand als de static tellers. De ritprijs bereken je met de static prijs op het moment van afrekenen.

### Valkuilen

- De nummergenerator als gewone instantievariabele schrijven. Dan krijgt elke step nummer 1.
- Het ID een public set geven, terwijl het na de constructie vastligt.
- De static tellers aanspreken via een object in plaats van via de klassenaam.
- AantalInGebruik wel verhogen bij het vertrek maar niet verlagen bij de aankomst.
- De winst optellen voor er gecontroleerd is of de rit wel geldig was.
- De batterij onder nul laten zakken, of ze in StartRit al verminderen.
- De prijs per minuut als const of als gewone instantievariabele zetten, waardoor de directie ze niet meer kan veranderen.
- Bij de PRO-uitbreiding: die vraagt een verzameling van alle steps, en dat komt pas in hoofdstuk 12. Zeg dat gerust.
