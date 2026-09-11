<!--
  Coach-data voor de oefeningen in oefeningen/10_meminoop/.
  Wordt door scripts/coach-prompt.mjs samengevoegd met _prompt.md tot de prompt achter de
  coach-knop. De opgave zelf staat hier niet in: die haalt het script uit de pagina zelf.

  De titels onder "# Oefeningen" moeten overeenkomen met de titels van de oefeningen op de
  pagina. De aanduiding (*Essential*) mag je weglaten. Staat een oefening hier niet, dan
  krijgt ze geen knop en waarschuwt het script.
-->

# Leerstof

## Kent al

Hoofdstuk 1 tot en met 8, de basis:

- Console.WriteLine, Console.Write, Console.ReadLine, Console.Clear en de kleuren van de console (hoofdstuk 1 en 2)
- Variabelen en datatypes, camel casing, const, rekenen, de gehele deling die afkapt (hoofdstuk 2)
- Tekst: escape characters, string interpolatie met $"..." en formattering zoals {getal:F2} (hoofdstuk 3)
- Converteren met casting, int.Parse, double.Parse en Convert, de Math-bibliotheek, afronden, Random met Next en NextDouble, debuggen met breakpoints (hoofdstuk 4)
- if, else if, else, switch, een eigen enum maken en gebruiken (hoofdstuk 5)
- while, do while, for, geneste loops, het zoek-en-stop-patroon (hoofdstuk 6)
- Methoden: void en een returntype, parameters, named en optionele parameters, method overloading (hoofdstuk 7)
- Arrays van gewone datatypes: aanmaken, .Length, overlopen met een for, doorgeven aan een methode, Array.Sort en Array.IndexOf, tweedimensionale arrays, string-methoden en char-methoden (hoofdstuk 8)

Hoofdstuk 9, klassen en objecten:

- Een eigen klasse in een apart bestand, objecten met new, instantievariabelen private, methoden public
- Full properties met controle in de set, auto-properties met een beginwaarde, read-only, write-only en private set
- DateTime en TimeSpan

Hoofdstuk 10, geheugen, referenties en uitzonderingen:

- Het verschil tussen de stack en de heap. Value types (int, double, bool, char, enum) bewaren hun waarde in de stack, reference types (objecten en arrays) bewaren in de stack enkel een referentie naar de heap
- De = operator kopieert bij een reference type de referentie en niet de inhoud: twee variabelen wijzen dan naar hetzelfde object. Bij een value type wordt de waarde wel gekopieerd
- Objecten en arrays worden by reference aan een methode meegegeven, dus wat je in de methode aan het object wijzigt, is achteraf ook buiten de methode zichtbaar
- Een methode mag een object teruggeven als returntype, en dus ook zelf objecten aanmaken
- null: een referentie die nog nergens naar wijst. Een object aanspreken dat null is, geeft een NullReferenceException
- Controleren met if (object != null), of verkort met object?.Naam
- null teruggeven uit een methode als er niets gevonden is
- De Garbage Collector ruimt onbereikbare objecten op de heap zelf op. GC.Collect() roep je niet zelf aan
- namespace en using, ontbrekende namespaces terugvinden in Visual Studio, en het bestaan van NuGet
- Exception handling: try en catch, meerdere catch-blokken met de specifieke eerst en catch (Exception e) laatst, de informatie uit e zoals e.Message, zelf een fout opwerpen met throw new Exception("..."), en finally
- Waar je een try-catch zet: rond de aanroep in haar geheel, of rond het stuk in de lus dat kan mislukken. Een leeg catch-blok is geen oplossing

## Kent nog niet

- Constructors, static leden van een klasse en het keyword this (hoofdstuk 11 en 15). Een static methode in Program.cs kent hij wel, dat is gewoon een methode zoals in hoofdstuk 7. Wil een property een beginwaarde, dan zet hij die met = achter de auto-property
- Arrays of Lists van objecten (hoofdstuk 12). Hij werkt met losse objecten in aparte variabelen
- foreach, List, Dictionary, Queue en Stack (hoofdstuk 12)
- Overerving, abstracte klassen, polymorfisme en interfaces (hoofdstuk 13 tot en met 17)
- Een eigen exception-klasse schrijven (hoofdstuk 14). Hij werpt hier gewoon een Exception op met een boodschap
- ToString() overriden (hoofdstuk 14). Een overzicht tonen doet hij met een eigen methode zoals ShowInfo
- Bestanden lezen of schrijven (hoofdstuk 18)
- LINQ en methoden zoals .Sum(), .Average() of .Max(), var, de ternaire operator ? :, switch expressions, pattern matching, lambdas
- TryParse en het keyword out, ref, nullable types (string?, int?), tuples, generics

# Oefeningen

## Meetlat

### Aanpak

Eén private instantievariabele met de lengte in meter, en daarboven vijf properties: één write-only om de meter binnen te krijgen, en vier read-only die telkens in hun get de omrekening doen. Er wordt dus maar één getal bewaard; de rest wordt berekend op het moment dat je het opvraagt.

### Valkuilen

- Voor elke eenheid een eigen instantievariabele bijhouden. Zet dan één keer een nieuwe lengte en de rest klopt niet meer.
- De omrekening in Main doen in plaats van in de get van de property.
- Aan BeginLengte ook een get geven, terwijl de opgave write-only vraagt.
- De vier omrekeningen als methoden schrijven met haakjes erachter. De opgave vraagt properties.
- Delen door 1000 met een int, waardoor kilometers altijd 0 zijn.

## Kleur mixer

### Nota

Dit is de eerste oefening waar een object een ander object van dezelfde klasse als parameter krijgt. Laat de student eerst benoemen welk object hier verandert en welk niet.

### Aanpak

Drie auto-properties en één methode die een Kleur als parameter krijgt. In die methode staan de eigen properties gewoon zonder puntje, en die van de parameter met de naam van de parameter ervoor. De opgave vraagt uitdrukkelijk gehele deling, dus ints volstaan.

### Valkuilen

- De parameter aanpassen in plaats van het eigen object. Wie de methode oproept, verwacht dat zijn eigen kleur verandert en de andere niet.
- De drie berekeningen door elkaar halen: rood met groen mengen.
- Rood al aanpassen en daarna in de berekening van de andere kleuren de nieuwe waarde gebruiken. Bij deze formules geeft dat geen fout, maar laat hem toch uitleggen waarom de volgorde hier niet stoort.
- Een nieuwe Kleur aanmaken en teruggeven, terwijl de opgave void vraagt.
- Denken dat de parameter een kopie is. Een object gaat by reference mee, dus wat je aan de parameter wijzigt, is buiten de methode ook zo.

## Pokémon

### Nota

Een lange oefening in drie delen. Vraag eerst aan welk deel de student bezig is. Deel 1 is de klasse zelf, deel 2 een tweede console-applicatie met ShowInfo, deel 3 de generator en de battle in Program.cs.

### Aanpak

De kern is het onderscheid tussen wat je bewaart en wat je berekent. De zes base-stats worden bewaard in full properties. Alles wat uit die stats of uit het level volgt (Average, Total en alle _Full-stats) is een read-only property die de formule in de get uitrekent, zonder eigen instantievariabele. Level heeft een public get en een private set, en verandert enkel via VerhoogLevel. In deel 3 staan de generator en de battle in Program.cs, want die horen niet bij één Pokémon: de generator maakt een object aan en geeft het terug, de battle krijgt er twee binnen en geeft 0, 1 of 2 terug.

### Valkuilen

- De _Full-stats één keer berekenen en opslaan. Dan blijven ze gelijk terwijl het level stijgt: het moet telkens in de get gebeuren.
- Voor Average delen door 6 in plaats van door 6.0.
- Level een public set geven, waardoor VerhoogLevel geen zin meer heeft.
- In de klasse per property een aparte teller of hulpvariabele beginnen bijhouden. Alles volgt uit de zes base-stats en het level.
- De Random in de generator bij elke aanroep opnieuw aanmaken. Dat werkt, maar het boek wil één generator voor het hele programma.
- In Battle vergelijken op de base-stats. Die veranderen nooit, dus het level zou geen invloed hebben.
- De null-controle in Battle vergeten, of ze pas doen nadat de stats al opgevraagd zijn. Dat is precies de NullReferenceException uit dit hoofdstuk.
- ShowInfo in Program.cs zetten. Een Pokémon toont zichzelf.

## Bankmanager 2

### Nota

Bouwt verder op de BankManager-klasse van hoofdstuk 9. Beide nieuwe methoden staan in Program.cs, niet in de klasse.

### Aanpak

SimuleerOverdracht krijgt twee rekeningen binnen en verandert ze. Dat werkt omdat objecten by reference doorgegeven worden: er wordt niets gekopieerd, dus de rekeningen in Main zijn achteraf effectief veranderd. Het omwisselen van verzender en ontvanger kan met de teller van de lus (even of oneven). CreeerTienerRekening maakt zelf een object aan, vult het in en geeft het terug als resultaat, dus het returntype is Rekening.

### Valkuilen

- Denken dat de wijzigingen in de methode verloren gaan. Laat hem uitleggen waarom dat bij objecten net niet zo is.
- De balans van 50 rechtstreeks proberen toekennen. Balans is read-only, dus dat moet via StortGeld.
- Vergeten het nieuwe object te returnen, of het returntype op void laten staan.
- De Random per iteratie opnieuw aanmaken.
- Bij het omwisselen twee bijna identieke blokken code schrijven in plaats van de rollen om te wisselen.
- Niet controleren of de rekening intussen geblokkeerd is, waardoor de helft van de overdrachten stilletjes mislukt.

## Project: SpaceCommand

### Nota

Een Final Essential over het hele hoofdstuk. Heeft de student de Pokémon-oefening volledig gemaakt, dan voegt deze weinig toe. Vraag dat eerst.

### Aanpak

Dezelfde opbouw als bij Pokémon: base stats als properties, IsKapot en TotaleKracht als read-only properties die telkens herrekenen, en Kapitein met een private set die enkel via WisselKapitein verandert. De drie methoden in Program.cs zijn de eigenlijke oefening van dit hoofdstuk: MaakWillekeurigSchip geeft een object terug, SimuleerGevecht en PimpMijnSchip krijgen objecten binnen en wijzigen ze. De extra uitdaging met s3 = s1 is het bewijs dat er niets gekopieerd wordt.

### Valkuilen

- IsKapot of TotaleKracht als gewone property met een set schrijven. Het zijn berekeningen.
- In TotaleKracht met ints werken, waardoor de halve schildkracht wegvalt.
- Ervaring op 0 laten starten en zich afvragen waarom TotaleKracht 0 blijft. Dat volgt uit de formule; laat hem dat zelf ontdekken.
- De null-controle in SimuleerGevecht vergeten of ze na de eerste puntjes zetten.
- In PimpMijnSchip een nieuw schip aanmaken en dat aanpassen. Dan verandert er buiten de methode niets.
- Bij de extra uitdaging denken dat s3 = s1 een kopie maakt. Er ligt maar één schip op de heap.
- De schade en de ervaring aan het verkeerde schip toekennen.
