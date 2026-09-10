<!--
  Coach-data voor de oefeningen in oefeningen/18_bestandsverwerken/.
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
- Tekst: escape characters, verbatim strings met @ (handig voor paden), string interpolatie met $"..." en formattering (hoofdstuk 3)
- Converteren met casting, int.Parse en Convert, de Math-bibliotheek, Random (hoofdstuk 4)
- if, else if, else, switch, een eigen enum (hoofdstuk 5)
- while, do while, for, geneste loops (hoofdstuk 6)
- Methoden: void en een returntype, parameters, method overloading (hoofdstuk 7)
- Arrays, .Length, overlopen met een for, string-methoden zoals Split, Contains, StartsWith, Substring en string.Join (hoofdstuk 8)

Hoofdstuk 9 tot en met 17, klassen, collecties, overerving, polymorfisme en interfaces:

- Klassen in een apart bestand, objecten met new, properties in al hun vormen
- Reference types, null en NullReferenceException
- try, catch, meerdere catch-blokken, e.Message, finally, throw, een eigen exception-klasse
- Constructors, static leden, object initializer syntax
- Arrays en List<T> van objecten, foreach, var, Queue, Stack en Dictionary
- Overerving, virtual en override, abstract, ToString() en Equals() overriden
- Compositie en aggregatie, this
- Polymorfisme, is en as, pattern matching met is, GetType()
- Interfaces, en IComparable met CompareTo

Hoofdstuk 18, bestandsverwerking:

- Paden: het verschil tussen een absoluut en een relatief pad, waarom je een pad in een verbatim string zet, en Path.Combine om een pad correct samen te stellen
- Speciale folders opvragen via Environment
- Controleren of iets bestaat met File.Exists en Directory.Exists, en een map of bestand aanmaken
- Tekst schrijven en lezen met een StreamWriter en een StreamReader, altijd binnen een using-blok zodat het bestand weer vrijkomt
- Voor kleine bestanden de kortere weg: File.ReadAllText, File.ReadAllLines, File.WriteAllText, File.WriteAllLines en File.AppendAllText. Voor grote bestanden regel per regel lezen met een StreamReader
- Binaire bestanden met een BinaryWriter en een BinaryReader, en dat je in exact dezelfde volgorde moet lezen als je geschreven hebt
- De klassen FileInfo en DirectoryInfo, die je met new aanmaakt, tegenover de static klassen File en Directory
- Informatie over een bestand opvragen (grootte, datum), en kopiëren, verplaatsen en verwijderen
- GetFiles en GetDirectories, filteren op bestandsnaam, zoeken in subfolders, en een folderstructuur recursief doorlopen
- Objecten serialiseren en deserialiseren naar JSON met JsonSerializer uit System.Text.Json. Enkel publieke properties komen mee
- Het bijsturen daarvan met JsonIgnore, JsonPropertyName en JsonInclude
- Dat exception handling hier geen luxe meer is: een pad kan ontbreken, rechten kunnen ontbreken, en een bestand kan gelockt zijn

## Kent nog niet

- LINQ en methoden zoals .Sum(), .Average(), .Where(), .OrderBy() of .ToList(). Filteren en optellen doet hij met een lus
- Generics zelf schrijven, delegates, lambdas, records
- async en await, streams naar het netwerk
- switch expressions, de ternaire operator ? :
- TryParse en het keyword out, ref, nullable types (string?, int?), tuples

# Oefeningen

## Boekencollectie

### Nota

De eerste oefening met bestanden. Vraag eerst of de student weet waar zijn tekstbestand terechtkomt als hij enkel een bestandsnaam opgeeft.

### Aanpak

Een menulus zoals hij er al veel schreef, met per menu-item een methode die de bestandsnaam als parameter krijgt. Toevoegen is één regel achteraan het bestand plakken. Tonen is alle regels inlezen en per regel splitsen op de puntkomma. Verwijderen kan niet halverwege een bestand: je leest alles in, haalt de juiste regel eruit, en schrijft het geheel terug. Voor je iets leest, controleer je of het bestand bestaat.

### Valkuilen

- Lezen uit een bestand dat nog niet bestaat. De eerste keer opstarten is precies dat geval.
- Bij het toevoegen het hele bestand overschrijven in plaats van eraan toe te voegen.
- Na het verwijderen vergeten terug te schrijven, waardoor het boek na een herstart terug is.
- Bij het splitsen ervan uitgaan dat er altijd drie stukken zijn. Een lege regel of een titel met een puntkomma erin breekt dat.
- Het pad hard intypen met backslashes zonder verbatim string.
- Vier keer bijna dezelfde leescode schrijven in plaats van er een methode van te maken.

## IMDB Top 100 JSON

### Nota

Het JSON-bestand moet eerst gedownload worden en naast het programma staan. De browser openen met Process staat niet in het boek: dat mag de student opzoeken.

### Aanpak

Eerst een klasse maken waarvan de properties overeenkomen met de namen in de JSON, want daarop mapt de deserializer. Het bestand lees je in als tekst en zet je in één keer om naar een List of array van die klasse. Daarna is het een gewone menulus: tonen is een foreach met een teller voor de plaats, zoeken is een lus met Contains op de titel, en de derde optie bouwt een url op met het id van de gekozen film.

### Valkuilen

- De JSON zelf proberen te lezen met Split en Substring. Daar is de serializer voor.
- De namen van de properties niet laten overeenkomen met de JSON, waardoor alles null blijft. JsonPropertyName lost dat op.
- Het bestand niet mee laten kopiëren naar de uitvoermap, waardoor het pad niet klopt.
- Bij het zoeken exact vergelijken terwijl de opgave een deel van een titel toelaat.
- Hoofdletters en kleine letters door elkaar bij het zoeken.
- De plaats in de lijst tonen vanaf 0 in plaats van vanaf 1.

## Bitmap header analyzer

### Nota

Een binaire oefening. De tips onderaan de opgave noemen ReadBytes en BitConverter: die heeft de student nodig.

### Aanpak

Het bestand open je binair en je leest de eerste 54 bytes in één keer in een byte-array. Daarna haal je de getallen op de juiste plaatsen uit die array: de breedte begint op byte 18, de hoogte op 22, de bitdiepte op 28. De eerste twee zijn vier bytes lang, de laatste twee. Rond alles zet je een try-catch, want de gebruiker mag een pad intypen.

### Valkuilen

- De bytes één voor één inlezen en de teller kwijtspelen. In één keer 54 bytes lezen is eenvoudiger.
- De breedte met twee bytes lezen of de bitdiepte met vier.
- Vergeten te controleren of het bestand bestaat voor je het opent.
- Het bestand niet in een using-blok openen, waardoor het gelockt blijft.
- Een bestand kiezen dat geen bmp is en zich afvragen waarom er onzin uitkomt.
- De getallen zelf uit de bytes proberen te berekenen. BitConverter doet dat.

## De Digitale Klokkenluider

### Nota

Een Final Essentials over het hele hoofdstuk. Het script moet eerst gedraaid zijn zodat de map CorruptCorp bestaat. Vraag dat eerst.

### Aanpak

Drie stukken. Scannen is de klassieke recursieve wandeling: van een map eerst de bestanden aflopen, daarna voor elke submap dezelfde methode nog eens oproepen. Analyseren is één bestand regel per regel lezen met een teller erbij voor het regelnummer, en per regel kijken of er een verdacht woord in staat. Het bewijsmateriaal komt in een List die de scan overleeft, en op het einde schrijf je die in één keer naar het rapport.

### Valkuilen

- De recursie vergeten en enkel de bovenste map doorzoeken.
- De lijst met bewijsmateriaal binnen de methode aanmaken, waardoor hij bij elke submap leeg is. Geef hem mee als parameter of hou hem static bij.
- Het regelnummer niet bijhouden, of het vanaf 0 tellen terwijl een mens vanaf 1 telt.
- Het volledige bestand in het geheugen laden terwijl de opgave regel per regel vraagt.
- Geen try-catch rond het openen. Een map zonder rechten laat de hele scan crashen.
- Het rapport binnen de lus schrijven, waardoor het telkens overschreven wordt.
- Bij het zoeken naar "log" of "csv" vergeten dat de bestandsnaam ook in hoofdletters kan staan.
