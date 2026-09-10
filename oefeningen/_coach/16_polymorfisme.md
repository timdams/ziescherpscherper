<!--
  Coach-data voor de oefeningen in oefeningen/16_polymorfisme/.
  Wordt door scripts/coach-prompt.mjs samengevoegd met _prompt.md tot de prompt achter de
  coach-knop. De opgave zelf staat hier niet in: die haalt het script uit de pagina zelf.

  De titels onder "# Oefeningen" moeten overeenkomen met de titels van de oefeningen op de
  pagina. De aanduiding (*Essential*) mag je weglaten. Staat een oefening hier niet, dan
  krijgt ze geen knop en waarschuwt het script.
-->

# Leerstof

## Kent al

Hoofdstuk 1 tot en met 8, de basis:

- Console-invoer en -uitvoer, de kleuren van de console met ForegroundColor, BackgroundColor en ResetColor, variabelen en datatypes, const, rekenen (hoofdstuk 1 en 2)
- Tekst: escape characters, string interpolatie met $"..." en formattering zoals {getal:F2} (hoofdstuk 3)
- Converteren met casting, int.Parse en Convert, de Math-bibliotheek, afronden, Random (hoofdstuk 4)
- if, else if, else, switch, een eigen enum, de volgorde van bewerkingen (hoofdstuk 5)
- while, do while, for, geneste loops (hoofdstuk 6)
- Methoden: void en een returntype, parameters, method overloading (hoofdstuk 7)
- Arrays van gewone datatypes, .Length, overlopen met een for, string- en char-methoden (hoofdstuk 8)

Hoofdstuk 9 tot en met 15, klassen, collecties, overerving en compositie:

- Klassen in een apart bestand, objecten met new, properties in al hun vormen, private, public en protected
- Reference types, objecten by reference doorgeven, null en NullReferenceException
- try, catch, e.Message, throw, een eigen exception-klasse
- Constructors, overloaded constructors, this(...), base(...), object initializer syntax, static leden
- Arrays en List<T> van objecten, foreach, var, Queue, Stack en Dictionary
- Overerving, virtual en override, base.Methode(), abstract en sealed, ToString() overriden
- Compositie en aggregatie, en het keyword this

Hoofdstuk 16, polymorfisme:

- Upcasting: een referentie naar een child-object mag zonder meer in een variabele van het parent-type. Daardoor kan één List<Dier> allerlei soorten dieren bevatten
- Late binding: de variabele bepaalt wat je mag aanroepen, maar het echte object in de heap bepaalt welke override draait. Dat werkt enkel als de methode virtual of abstract is
- Dat je via een parent-referentie niet aan de eigen properties van de child kan. Daarvoor moet je terug naar beneden
- Het keyword is: vraagt of een object van een bepaald type is, en geeft true of false terug
- Het keyword as: zet een referentie om naar een child-type, en geeft null als dat niet lukt. Veiliger dan een gewone cast met haakjes
- Pattern matching: is met een variabele erachter, zoals if (dier is Slang s), doet de controle en de omzetting in één keer. Ook is null en is not null
- De volgorde van bewerkingen met is en as: die staan bij de relationele operatoren
- Equals() overriden om objecten op inhoud te vergelijken in plaats van op referentie, en dan ook GetHashCode() overriden met HashCode.Combine(...)
- Het verschil tussen == (vergelijkt bij objecten de referenties) en een zelfgeschreven Equals (vergelijkt de inhoud)
- GetType() om het echte type van een object op te vragen, en GetType().Name voor de naam ervan

## Kent nog niet

- Interfaces en IComparable (hoofdstuk 17)
- Bestanden lezen of schrijven (hoofdstuk 18)
- LINQ en methoden zoals .Sum(), .Average(), .Max(), .Where() of .OfType(). Filteren doet hij met een lus, een if en eventueel is
- Generics zelf schrijven, delegates, Action en Func, lambdas. Records
- switch met patterns, switch expressions, de ternaire operator ? :
- TryParse en het keyword out, ref, nullable types (string?, int?), tuples

# Oefeningen

## Dierentuin advanced

### Nota

Een uitbreiding op de dierentuin uit hoofdstuk 14. Vraag eerst of die applicatie nog werkt.

### Aanpak

Er komt één menu-item bij: de gebruiker typt een diersoort, en enkel dieren van die soort praten. De lijst blijft een List<Dier>, dus per dier moet je vragen of het van dat type is. Dat is precies waar is voor dient, en met pattern matching zit het omgezette object meteen in een variabele. De ingetypte tekst omzetten naar een type doe je met een switch: één case per soort.

### Valkuilen

- De diersoort vergelijken met een string-property in het dier in plaats van met het echte type.
- as gebruiken zonder daarna op null te controleren.
- Een gewone cast met haakjes gebruiken. Klopt het type niet, dan crasht dat; as geeft gewoon null.
- Voor elke soort een aparte lijst bijhouden.
- De switch-cases bijna identiek uitschrijven en de gemeenschappelijke lus vier keer kopiëren.
- Vergeten dat de gebruiker ook iets kan intypen dat geen diersoort is.

## Pokémon vergelijken

### Nota

Bouwt verder op de Pokémon-klasse. Vraag eerst welke properties er precies in vergeleken moeten worden.

### Aanpak

Equals bestaat al in System.Object en krijgt een object als parameter, dus je begint met de vraag of dat object wel een Pokémon is. Pattern matching doet die controle en de omzetting in één stap. Pas daarna vergelijk je de zes base-stats, de naam en het level, en geef je true of false terug. Wie Equals overridet, hoort ook GetHashCode te overriden met dezelfde gegevens.

### Valkuilen

- De parameter meteen casten naar Pokemon zonder te controleren. Op null of op een ander type crasht dat.
- De signatuur veranderen naar Equals(Pokemon andere). Dan is het geen override meer, maar een overload, en draait de oude versie bij een object-parameter.
- GetHashCode vergeten.
- De objecten met == vergelijken en verbaasd zijn dat twee identieke Pokémon verschillend blijken.
- De _Full-stats mee vergelijken. De opgave noemt de base-stats, de naam en het level.

## Een eigen huis

### Nota

Compositie en overerving samen. De PRO-uitbreiding met tekenen is optioneel: vraag of de student daaraan begint.

### Aanpak

Kamer heeft een oppervlakte, een naam en een virtual Prijs die 400 teruggeeft. Die property heeft geen instantievariabele en geen set: het is een get met een berekening of een vast getal. Elke child overschrijft enkel die get. Huis heeft een List<Kamer>, en BerekenPrijs telt in een lus de Prijs van elke kamer op. Doordat Prijs virtual is, komt vanzelf de juiste versie boven.

### Valkuilen

- Aan Prijs een set of een achterliggende instantievariabele geven. De opgave verbiedt dat uitdrukkelijk.
- In BerekenPrijs met is en as per kamersoort de prijs uitrekenen. Dat is net wat polymorfisme overbodig maakt.
- virtual vergeten op Prijs, waardoor elke kamer 400 kost.
- Bij Salon de prijs in de constructor vastleggen. Zet iemand daarna HeeftSchouw, dan klopt het niet meer.
- De lijst van kamers vergeten aan te maken, waardoor Add crasht.
- Bij Gang vergeten dat de oppervlakte nog 0 kan zijn.

## Luchtvaartshow

### Aanpak

Vliegtuig heeft een constructor met de modelnaam, een virtual Vlieg() en een static Dictionary waarin elk nieuw vliegtuig zichzelf registreert. Dat registreren gebeurt in de constructor van Vliegtuig, en omdat de childs die constructor met base(...) oproepen, registreren zij zich vanzelf mee. Raket overschrijft Vlieg() volledig, Helikopter begint met base.Vlieg() en zet er zijn eigen regel bij. In het register toon je per item de key en het echte type van de value.

### Valkuilen

- Het register in elke child opnieuw aanmaken. Het is static en hoort één keer in Vliegtuig te staan.
- Vergeten dat de sleutel uniek moet zijn: twee vliegtuigen met dezelfde modelnaam geven een fout bij Add.
- In de constructor van de child het vliegtuig nog eens registreren, waardoor het er dubbel in zit.
- base(...) vergeten in de constructor van Raket of Helikopter.
- In het register het type tonen door zelf een string-property bij te houden, terwijl GetType() dat al weet.
- De Dictionary public maken zodat iedereen er zomaar iets in kan steken.

## Magic

### Nota

De opgave verwijst naar een antwoord op StackOverflow. Vraag eerst of de student die code gelezen heeft en of hij ze begrijpt.

### Aanpak

De kern is het omzetten van twee vaste variabelen naar een List<Card>: alles wat eerst met card1 en card2 apart gebeurde, wordt een lus over die lijst. De eigen kaarttypes erven van Card en overschrijven wat ze anders doen. Wil je iets dat alleen bij een bepaald type hoort, dan komen is en as erbij.

### Valkuilen

- Code klakkeloos overnemen zonder te weten wat ze doet. Laat de student uitleggen wat elke klasse voorstelt.
- Voor elk kaarttype een aparte lijst maken.
- In de manager per kaart met een lange keten van is-tests werken, terwijl een virtuele methode het werk kan doen.
- Vergeten dat de lijst tijdens het spelen wijzigt, en er tijdens een foreach uit verwijderen.

## Ganzenbord Dams Van Camp editie

### Nota

Een oude examenopgave, en de grootste oefening van het hoofdstuk. Werk strikt in de volgorde van de opgave: eerst Dobbelsteen, dan Speelvakje, dan Ganzenbord, dan de spellus, en pas daarna KleurVakje. Vraag eerst waar de student staat.

### Aanpak

Dobbelsteen is één static methode met één static Random. Speelvakje bepaalt in zijn constructor eenmalig zijn waarde volgens de kansen uit de opgave, en toont zichzelf met ToonVakje, die virtual is. Ganzenbord houdt de private lijst, de pionIndex en de score bij; BeweegPion werkt de gevallen uit de opgave één voor één af en geeft terug of het spel voorbij is. TekenBord laat elk vakje zichzelf tonen en zet daarna een T op de plaats van de pion. KleurVakje overschrijft enkel ToonVakje: kleur zetten, base.ToonVakje() gebruiken, kleur terugzetten. De overloaded constructor van Ganzenbord bepaalt welk soort vakjes in de lijst komen.

### Valkuilen

- In elk Speelvakje een eigen Random aanmaken, waardoor de tien vakjes dezelfde waarde krijgen.
- De kansen fout verdelen: 30 procent, 20 procent en 50 procent moeten samen 100 zijn, en binnen elke groep is er nog een keuze tussen twee waarden.
- Bij het belanden op een vakje de beweging opnieuw toepassen op het nieuwe vakje. De opgave zegt uitdrukkelijk dat er daarna niets meer gebeurt.
- De grenzen verwarren: de index loopt van 0 tot en met 9, en winnen gebeurt boven 9.
- Bij een negatieve index vergeten de score te verlagen of de index op 0 te zetten.
- In KleurVakje de hele tekst opnieuw schrijven in plaats van base.ToonVakje() te gebruiken.
- De kleur na het tekenen niet resetten, waardoor de rest van het scherm mee kleurt.
- BeweegVakjes een public set geven. Die is read-only met een private set.

## Mapmaker "all-in-one-project"

### Nota

Dit verwijst naar het all-in-one project Map Maker. Je stopt bij de sectie interfaces: die komt pas in hoofdstuk 17. Vraag eerst welk stuk de student aan het bouwen is.

### Aanpak

Dezelfde opbouw als bij Een eigen huis: een basisklasse met wat elk element gemeen heeft, childs die hun eigen uitzicht en gedrag invullen, en één lijst van het basistype waar de tekenlus over loopt. Positie en afmeting horen bij het element zelf.

### Valkuilen

- Voor elk soort element een aparte lijst en een aparte lus.
- De tekenmethode niet virtual maken, waardoor alles er hetzelfde uitziet.
- Buiten het consolevenster tekenen. SetCursorPosition crasht daarop.
- De kleuren niet resetten na het tekenen.

## (Pro²) Methoden als objecten

### Nota

Deze oefening ligt uitdrukkelijk buiten de leerstof: delegates, Action en Func. Je hoeft ze niet te kennen voor het examen. Coach hier op begrip, niet op afwerking, en zeg gerust dat dit vrijwillig is.

### Aanpak

Het idee is dat een methode zelf in een variabele kan zitten en als parameter kan meegaan. Laat de student eerst in woorden zeggen wat het verschil is tussen een methode oproepen en een methode doorgeven.

### Valkuilen

- De haakjes meeschrijven bij het toekennen, waardoor de methode meteen uitgevoerd wordt in plaats van doorgegeven.
- Denken dat dit voor het examen gekend moet zijn.
- Beginnen aan de uitbreiding voor het basisvoorbeeld draait.

## Grand Theft Auto: San Andreas - Polymorphism

### Nota

Een Final Essentials over het hele hoofdstuk. Laat de student eerst benoemen wat alle voertuigen gemeen hebben en wat per soort verschilt.

### Aanpak

Voertuig is abstract: Merk, Snelheid, een abstracte Beweeg() en een virtuele ToonInfo() met een standaardtekst. De drie childs vullen Beweeg() in en overschrijven ToonInfo() waar dat nodig is. Bij PolitieMotor hangt het gedrag af van een bool, dus daar staat een if in Beweeg(). In Main komt alles in één List<Voertuig> en loop je die twee keer af. Dat één lus verschillende dingen doet, is precies het punt van het hoofdstuk.

### Valkuilen

- Beweeg() virtual maken met een lege body in plaats van abstract. Dan mag een child ze vergeten.
- Een List<Sportwagen> naast een List<Pantserwagen> aanleggen.
- In de lus met is en as per type een andere methode oproepen, terwijl polymorfisme dat overbodig maakt.
- De snelheid in Main zetten in plaats van in Beweeg().
- override vergeten bij ToonInfo(), waardoor overal de tekst van Voertuig verschijnt.
- Bij PolitieMotor de sirene-controle in ToonInfo() zetten in plaats van in Beweeg().
