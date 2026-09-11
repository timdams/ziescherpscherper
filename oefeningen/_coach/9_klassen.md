<!--
  Coach-data voor de oefeningen in oefeningen/9_klassen/.
  Wordt door scripts/coach-prompt.mjs samengevoegd met _prompt.md tot de prompt achter de
  coach-knop. De opgave zelf staat hier niet in: die haalt het script uit de pagina zelf.

  De titels onder "# Oefeningen" moeten overeenkomen met de titels van de oefeningen op de
  pagina. De aanduiding (*Essential*) mag je weglaten. Staat een oefening hier niet, dan
  krijgt ze geen knop en waarschuwt het script.

  Let op: intermezzoh9.md heeft haar oefeningen als ### staan, geen #. Die pagina krijgt dus
  geen knoppen, en er staat hier ook geen data voor.
-->

# Leerstof

## Kent al

Hoofdstuk 1 tot en met 8, de basis:

- Console.WriteLine, Console.Write, Console.ReadLine, Console.Clear, de kleuren van de console en ResetColor (hoofdstuk 1 en 2)
- Variabelen en datatypes (int, double, decimal, bool, char, string), camel casing, const, rekenen met + - * / %, de gehele deling die afkapt, en ++ (hoofdstuk 2)
- Tekst: escape characters, verbatim strings met @, string interpolatie met $"..." en formattering zoals {getal:F2}, .Length (hoofdstuk 3)
- Converteren: casting, int.Parse, double.Parse, de Convert-bibliotheek, de Math-bibliotheek, afronden, Random met Next en NextDouble, debuggen met breakpoints (hoofdstuk 4)
- Beslissingen: if, else if, else, scope, switch, een eigen enum maken en gebruiken, casten van een int naar een enum-waarde (hoofdstuk 5)
- Herhalingen: while, do while, for, geneste loops, en het zoek-en-stop-patroon (hoofdstuk 6)
- Methoden: void en een returntype, return, parameters by value, named en optionele parameters, method overloading (hoofdstuk 7)
- Arrays: aanmaken, index vanaf 0, .Length, overlopen met een for, een array doorgeven aan een methode, Array.Sort, Array.Reverse, Array.IndexOf, tweedimensionale arrays met [rij, kolom] en GetLength, een string per teken benaderen, char.IsDigit en co, string-methoden zoals Substring, Contains, Split en string.Join (hoofdstuk 8)

Hoofdstuk 9, object georiënteerd programmeren:

- Een eigen klasse schrijven in een apart bestand (Add > Class), met public erbij. Een klasse is een nieuw datatype
- Een object aanmaken met new en aanspreken met de puntnotatie. Elk object heeft zijn eigen waarden
- Instantievariabelen (private, met een kleine letter) en objectmethoden (public, met een hoofdletter) in de klasse zelf
- De access modifiers public en private, en waarom instantievariabelen altijd private zijn
- Full properties: een private instantievariabele met een property erboven, met get, set en het sleutelwoord value. Controle schrijven in de set, en bij foute invoer de oude waarde laten staan
- Property-variaties: read-only (geen set), write-only (geen get), en een property met private set
- Auto-properties (public string Naam { get; set; }), een beginwaarde meegeven met = achter de accolades, en de read-only variant met enkel get
- Een klasse mag gerust een enum als property-type hebben; de enum zelf staat buiten de klasse
- DateTime: DateTime.Now en DateTime.Today, een datum maken met new DateTime(jaar, maand, dag), de Add-methoden zoals AddDays en AddYears, de properties Year, Month, Day en DayOfWeek, de static methoden DateTime.Parse en DateTime.IsLeapYear, en TimeSpan als verschil tussen twee datums
- Datums vergelijken met < en > zoals gewone getallen
- string.IsNullOrWhiteSpace om te controleren of een tekst leeg is
- Uit het intermezzo: een struct als groepje samenhorende gegevens, en waarom een klasse daar een betere versie van is
- Dat een object dat nog nergens naar wijst null is. Wat daarachter zit, komt in hoofdstuk 10
- Groene kronkels met de waarschuwing CS8618 (een string-property of instantievariabele zonder beginwaarde) of CS8600 (bij ReadLine) mag hij laten staan. Het boek legt dat uit in een callout bij de properties. required en string? gebruikt hij niet

## Kent nog niet

- Constructors en het keyword this. Dat komt in hoofdstuk 11 en 15. Wil een property een beginwaarde, dan zet hij die met = achter de auto-property. Staat er in een opgave "in de constructor", lees dat dan als: geef die property gewoon een beginwaarde
- static instantievariabelen, methoden of properties (hoofdstuk 11)
- Arrays of Lists van objecten. Hij werkt hier met losse objecten, elk in hun eigen variabele (hoofdstuk 12)
- foreach, List, Dictionary, Queue en Stack (hoofdstuk 12). In het intermezzo stond foreach al eens in voorgeschreven code, maar zelf schrijven doet hij het nog niet
- Overerving, abstracte klassen, polymorfisme en interfaces (hoofdstuk 13 tot en met 17)
- ToString() overriden. Een methode die tekst teruggeeft, noemt hij hier gewoon iets als ToonStats
- try, catch en exceptions opvangen (hoofdstuk 10). Een crash is hier gewoon een crash
- Bestanden lezen of schrijven (hoofdstuk 18)
- LINQ, var, de ternaire operator ? :, switch expressions, pattern matching, lambdas
- TryParse en het keyword out, ref, nullable types (string?, int?), tuples, generics

# Oefeningen

## RapportModule

### Nota

De eerste oefening met een eigen klasse. Laat de student eerst benoemen wat er in het klassebestand hoort en wat in Main.

### Aanpak

Eén klasse in een eigen bestand, met één auto-property en één methode zonder returntype die de keten van if en else if bevat. De klasse toont zelf de tekst; Main maakt enkel objecten aan, zet de property en roept de methode op. Omdat de gevallen op volgorde liggen, hoeft elke else if maar één grens te testen.

### Valkuilen

- De klasse in Program.cs zetten in plaats van in een apart bestand. Dat is -3 vanaf semester 2.
- Alles static maken omdat dat in hoofdstuk 7 zo moest. Een objectmethode heeft geen static.
- De methode het percentage als parameter meegeven, terwijl het object het al kent via zijn property.
- Elke grens dubbel testen (>= 50 en <= 68) in een else if-keten, waar de ondergrens al vastligt.
- PrintGraad een tekst laten teruggeven terwijl de opgave void vraagt.

## Nummers

### Aanpak

Twee auto-properties en vier methoden die elk een resultaat teruggeven in plaats van het te tonen. Alleen Quotient wijkt af: die controleert eerst op nul, toont dan de foutboodschap en geeft 0.0 terug. De deling zelf moet een double opleveren, dus mag er niet met twee ints gedeeld worden.

### Valkuilen

- De uitkomst tonen met Console.WriteLine in plaats van ze te returnen. De opgave geeft returntypes op.
- Quotient laten afkappen omdat Getal1 en Getal2 allebei int zijn.
- De nulcontrole vergeten, of ze pas doen nadat de deling al gebeurd is.
- In de methoden de private instantievariabelen aanspreken terwijl er auto-properties zijn.

## Studentklasse

### Aanpak

Zes properties, waarvan één van het enum-type. De enum staat buiten de klasse, in hetzelfde bestand of in een eigen bestand. BerekenGemiddelde geeft een double terug, GeefOverzicht toont het rapport en gebruikt daarvoor die andere methode in plaats van de berekening te herhalen. Uitlijnen doe je met \t in een interpolatiestring.

### Valkuilen

- Delen door 3 in plaats van door 3.0, waardoor het gemiddelde afkapt.
- De berekening kopiëren in GeefOverzicht in plaats van BerekenGemiddelde op te roepen. Dat is redundante code.
- De enum binnen de klasse zetten, waardoor de naam in Main niet meer klopt.
- De klasse Studenten noemen. Een klasse beschrijft één ding, dus Student.
- Uitlijnen met spaties tellen in plaats van met tabs te werken.

## PizzaTime

### Nota

Hier zijn full properties uitdrukkelijk gevraagd. Een auto-property kan geen controle bevatten.

### Aanpak

Drie keer hetzelfde patroon: een private instantievariabele met een kleine letter, en daarboven een property met een hoofdletter waarvan de set eerst controleert of value deugt. Deugt ze niet, dan gebeurt er in de set gewoon niets, zodat de oude waarde blijft staan. Er hoort dus geen else in.

### Valkuilen

- De instantievariabele en de property dezelfde naam geven. De property blijft dan in zichzelf rondlopen; het verschil zit in de hoofdletter.
- In de set toch een waarde toekennen in het else-geval, terwijl de opgave zegt: niets doen.
- value vergeten en de property aan zichzelf toekennen.
- De instantievariabelen public maken en de property overslaan.
- In Main de private instantievariabele proberen aan te spreken.

## Figuren

### Aanpak

Twee losse klassen die niets van elkaar weten, elk in een eigen bestand. Per klasse twee full properties met dezelfde controle, en een methode die de oppervlakte berekent en toont. Bij de driehoek moet de deling door 2 nog kloppen als basis maal hoogte oneven is.

### Valkuilen

- Proberen de twee klassen aan elkaar te knopen. Overerving komt pas in hoofdstuk 13; hier is die gelijkenis gewoon toeval.
- Bij de driehoek delen door 2 met twee ints, waardoor er een halve eenheid verdwijnt.
- Beide klassen in hetzelfde bestand zetten.
- De properties zonder beginwaarde laten en zich dan verbazen over een oppervlakte 0.

## MiniRPG

### Nota

Een Final Essentials: alles van het hoofdstuk komt samen. Laat de student eerst de klasse op papier zetten (welke properties, welk type, welke controle) voor hij begint te typen.

### Aanpak

Eén klasse Held met properties van drie soorten door elkaar: gewone auto-properties, twee met private set (Level en XP, want die veranderen enkel via de methoden), en één read-only die niets opslaat maar telkens de formule uitrekent in de get. Level begint op 1 en XP op 0, en dat zet je met een beginwaarde achter de auto-property. VerkrijgErvaring heeft een while nodig, want 250 XP in één keer zijn twee levels.

### Valkuilen

- MaxLevenspunten als gewone property met een set schrijven. Het is een berekening, dus enkel een get met de formule erin.
- Bij het level-up een if gebruiken in plaats van een while, waardoor 250 XP maar één level oplevert.
- De XP niet met 100 verminderen, waardoor de lus blijft draaien.
- Level en XP een gewone public set geven, terwijl de opgave private set vraagt.
- Levenspunten onder nul laten zakken. Die controle hoort in de set of in IncasseerSchade, maar wel op één plaats.
- ToonStats laten tonen in plaats van een string teruggeven.

## BankManager

### Nota

Hier is de balans uitdrukkelijk een private instantievariabele met een read-only property erboven, zonder private set. De methoden passen dus rechtstreeks de instantievariabele aan.

### Aanpak

Deel 1 is de klasse met twee auto-properties, één private instantievariabele met enkel een get erboven, en twee methoden. HaalGeldAf geeft altijd terug hoeveel geld er effectief buitenkomt, want in het testscenario gaat dat bedrag rechtstreeks in StortGeld van de andere rekening. Deel 2 zet er een enum-property met private set bovenop: elke methode begint dan met de vraag of de rekening nog geldig is.

### Valkuilen

- Vergeten dat HaalGeldAf ook bij een geblokkeerde rekening iets moet teruggeven, anders compileert de methode niet.
- Bij te weinig saldo enkel de foutmelding tonen en de rest niet uitbetalen.
- De staat op Geblokkeerd zetten voor de laatste afhaling doorgaat.
- Staat een gewone public set geven, waardoor Main de blokkering zelf kan omzeilen.
- De controle op de staat in elke methode opnieuw uitschrijven met telkens een andere tekst.
- De test rek2.StortGeld(rek1.HaalGeldAf(300)) in stukken willen knippen. Dat mag, maar laat hem eerst uitleggen wat daar van binnen naar buiten gebeurt.

## Persoon

### Aanpak

Twee gewone auto-properties en één full property voor de datum, met de controle in de set: ligt de datum niet tussen 1 januari 1990 en vandaag, dan wordt het vandaag. BerekenLeeftijd is het verschil in jaartallen, met één correctie: is de verjaardag dit jaar nog niet geweest, dan gaat er eentje af.

### Valkuilen

- De leeftijd berekenen door de dagen van een TimeSpan door 365 te delen. Dat klopt niet met schrikkeljaren.
- Enkel de jaartallen aftrekken en de maand en de dag vergeten.
- De grens vergelijken met een string in plaats van met new DateTime(1990, 1, 1).
- De controle in Main zetten in plaats van in de set. Dan kan iemand de property nog altijd verkeerd invullen.

## Verjaardag

### Nota

Deze oefening mag gerust volledig in Main, er is geen klasse gevraagd.

### Aanpak

De ingelezen datum valt op het huidige jaar. Ligt ze al achter de rug, dan tel je er een jaar bij. Het verschil tussen twee DateTime-waarden is een TimeSpan, en daaraan vraag je het aantal dagen. De dagnaam haal je uit DayOfWeek met de regel uit de opgave.

### Valkuilen

- Het jaar mee laten invoeren, terwijl de opgave enkel dag en maand vraagt.
- Vergeten dat een verjaardag die al voorbij is, naar volgend jaar moet.
- DateTime.Now gebruiken in plaats van DateTime.Today, waardoor het aantal dagen door de uren net verkeerd uitvalt.
- Het verschil in een double proberen te stoppen. Het is een TimeSpan.

## Sports

### Nota

Kiest de student optie A, laat hem dan eerst zijn vier eigenschappen en twee acties opnoemen, en vraag per eigenschap welk datatype past.

### Aanpak

Eén klasse met vier properties, waarvan er één controle nodig heeft in een full property. StelIn is een gewone methode met vier parameters die de properties invult. De twee acties tonen tekst waarin de naam van het object zelf gebruikt wordt.

### Valkuilen

- Voor alle vier de eigenschappen een full property schrijven terwijl er maar één controle nodig heeft.
- StelIn de waarden rechtstreeks in de private instantievariabelen laten zetten en zo de controle omzeilen.
- De positie als vrije string laten. Een enum is hier netter, en die kent hij.
- In de acties de naam als parameter meegeven, terwijl het object zijn eigen naam al kent.

## Dobbelstenen

### Aanpak

Een klasse met één methode die duizend keer werpt en telt hoe vaak beide stenen zes tonen. De Random maak je één keer aan, buiten de lus. Next(1, 7) geeft 1 tot en met 6, want de bovengrens telt niet mee.

### Valkuilen

- Het Random-object binnen de lus aanmaken.
- Next(1, 6) gebruiken en zich afvragen waarom er nooit een zes valt.
- De teller binnen de lus declareren.
- Bij de tweede steen dezelfde variabele hergebruiken zonder opnieuw te werpen.
- Het percentage berekenen met een gehele deling.

## De Campingmanager: "Het Nullpointerke"

### Nota

Een Final Essential over het hele hoofdstuk. Laat de student eerst de klasse uittekenen: welke properties, welk type, welke controle in welke set.

### Aanpak

Eén klasse Boeking met vier gecontroleerde properties en één die standaard op vandaag staat. Die beginwaarde zet je met = achter de auto-property; de opgave zegt constructor, maar dat komt pas in hoofdstuk 11. BerekenTotaalPrijs kiest de basisprijs op basis van de enum met een switch, vermenigvuldigt met het aantal nachten en past pas op het totaal de korting toe. BevestigBoeking gebruikt die methode, vergelijkt met het budget en handelt de twee scenario's af.

### Valkuilen

- De prijs per verblijfstype uit een keten van if op een string halen in plaats van uit een switch op de enum.
- De leeftijd berekenen door 60 bij de geboortedatum op te tellen zonder na te denken over maand en dag.
- Het budget verminderen voor de controle of het wel volstaat.
- De prijs opnieuw uitrekenen in BevestigBoeking in plaats van BerekenTotaalPrijs op te roepen.
- De uitcheckdatum berekenen door bij CheckInDatum een getal op te tellen. Daar is AddDays voor.
- De controle op een negatief budget vergeten, waardoor iemand met schulden toch mag boeken.
