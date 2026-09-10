<!--
  Coach-data voor de oefeningen in oefeningen/7_methoden/ (week 1 en week 2).
  Zie oefeningen/_coach/_prompt.md voor het sjabloon en scripts/coach-prompt.mjs voor de werking.
-->

# Leerstof

## Kent al

Hoofdstuk 1 tot en met 6, de basis:

- Console.WriteLine en Write, Console.ReadLine, Console.Clear en de kleuren van de console (hoofdstuk 1 en 2)
- Datatypes, variabelen, const, rekenen, de gehele deling die afkapt, ++ (hoofdstuk 2)
- Escape characters, verbatim strings, string interpolatie en formattering, .Length op een string, Environment (hoofdstuk 3)
- Casting, Parse, de Convert-bibliotheek, de Math-bibliotheek, afronden, Random, een lopende som met += (hoofdstuk 4). Een char geeft bij een omzetting zijn Unicode-waarde, niet het cijfer dat er staat
- if, else if, else, de relationele en logische operatoren, scope, switch, enum en Enum.Parse (hoofdstuk 5)
- while, do while, for, geneste loops, break en continue (hoofdstuk 6)

Hoofdstuk 7, methoden:

- Een methode schrijven: static, een returntype, een naam en een parameterlijst tussen haakjes
- void betekent dat er niets teruggegeven wordt. Elk ander returntype vraagt een return
- Zodra return bereikt wordt, stopt de methode onmiddellijk
- Parameters worden by value doorgegeven: de methode werkt met een kopie, de originele variabele buiten de methode verandert niet
- Named arguments: de parameters bij naam meegeven, waardoor de volgorde niet meer uitmaakt
- Optionele parameters: een standaardwaarde in de signatuur, en die parameters staan altijd achteraan
- Method overloading: meerdere methoden met dezelfde naam maar een andere parameterlijst
- Een methode kan een andere methode oproepen
- Commentaar boven een methode zetten, en IntelliSense die de signatuur toont
- Debuggen met step-in om in een methode te springen

## Kent nog niet

- Arrays en lijsten. Een methode geeft altijd één enkele waarde terug, en meerdere waarden bijhouden gebeurt met losse variabelen of met een string die aangroeit
- ref, out, tuples en TryParse
- Klassen, objecten en instantievariabelen. Alle methoden zijn static en staan naast Main
- LINQ, foreach, try en catch, en alles wat daarna komt

# Oefeningen

## Opwarmers

### Nota

Een grote reeks korte deeloefeningen, ongeveer gerangschikt van makkelijk naar moeilijk. Vraag eerst aan welke de student bezig is. Belangrijke huisregel voor dit hoofdstuk: de naam van de methode zegt wat ze doet. Enkel een methode die Toon of Vraag heet mag WriteLine of ReadLine bevatten. Alle andere krijgen hun gegevens via parameters binnen en geven hun resultaat terug met return.

### Aanpak

Elke opwarmer volgt hetzelfde stramien: bepaal eerst wat er binnenkomt (welke parameters, welk type) en wat er buitengaat (welk returntype), en schrijf pas dan de inhoud. Testen doe je door de methode in Main op te roepen en het resultaat te tonen. Bij IsEven is het returntype een bool, bij ToonOnEvenNummers is het void met een lus erin.

### Valkuilen

- Het resultaat in de methode tonen in plaats van het terug te geven.
- De invoer in de methode zelf vragen in plaats van ze als parameter mee te krijgen.
- Een returntype opgeven maar nergens return schrijven.
- Bij een berekening met kommagetallen een int als returntype nemen.
- De methode wel schrijven maar nooit oproepen, en dan denken dat er niets gebeurt.

## Basic

### Aanpak

De eenvoudigste vorm: geen parameters, geen returnwaarde, gewoon een blok dat iets toont. Deze methode mag wel WriteLine bevatten, want tonen is precies wat ze moet doen. In Main roep je haar op met haar naam en twee haakjes.

### Valkuilen

- De methode binnen Main schrijven in plaats van ernaast.
- static vergeten, waardoor Main haar niet kan oproepen.
- De haakjes vergeten bij het oproepen.

## Basic 2

### Aanpak

Dezelfde methode, maar nu komt de informatie van buiten. Drie parameters met elk hun eigen type, in de volgorde waarin ze bij het oproepen meegegeven worden. Binnenin gebruik je die parameters als gewone variabelen.

### Valkuilen

- De types van de parameters verwisselen, waardoor de oproep uit de opgave niet meer past.
- De parameters in de methode opnieuw inlezen.
- De volgorde van de argumenten omdraaien bij het oproepen.

## Grootste methode

### Aanpak

Drie getallen binnen, één getal terug. De vergelijking kan met een keten van if, of door eerst twee te vergelijken en de winnaar daarvan met de derde. Denk aan het geval waarin twee getallen gelijk zijn.

### Valkuilen

- Vergeten dat elke tak van de methode iets moet teruggeven, ook de laatste.
- Het resultaat tonen in plaats van teruggeven.
- Bij gelijke getallen niets teruggeven.
- De methode void maken en dan niet weten hoe het antwoord in Main geraakt.

## Rekenmachine

### Aanpak

Vier kleine methoden die elk twee kommagetallen binnenkrijgen en er één teruggeven. Elk is één lijn code. De oefening zit vooral in het correct opschrijven van de signatuur en in het testen vanuit Main.

### Valkuilen

- De methoden void maken.
- Bij delen niet nadenken over een deling door nul.
- De invoer in de methoden vragen.
- Alle vier de bewerkingen in één methode met een switch stoppen, terwijl de opgave er vier vraagt.

## A.I. assisted oefeningen generator

### Nota

Dit is geen oefening maar een prompt waarmee de student zelf extra oefeningen kan laten maken. Vraagt hij hier iets over, help hem dan de gegenereerde opgave te begrijpen of te vereenvoudigen, en coach daarna op die opgave zoals op elke andere.

### Aanpak

De prompt uit de opgave gebruiken en het onderwerp vervangen. Levert de A.I. toch iets op met arrays of andere leerstof die nog niet gezien is, laat de student dan zelf benoemen welk stuk dat is en hoe hij de opgave kan inkorten.

### Valkuilen

- Een gegenereerde opgave maken die stiekem arrays of lijsten nodig heeft.
- De gegenereerde oplossing overnemen in plaats van de opgave.

## Pro Rekenmachine

### Nota

Een PRO-oefening, en er is geen modeloplossing.

### Aanpak

Vertrek van de vier methoden uit Rekenmachine en breid uit. Het geheugen is één variabele die buiten de methoden leeft en die je met aparte methoden vult, opvraagt en wist. Een menu in een lus houdt het geheel bij elkaar, zoals in Codemenu uit het vorige hoofdstuk.

### Valkuilen

- Het geheugen als parameter proberen door te geven en verwachten dat de wijziging buiten de methode zichtbaar blijft. Parameters gaan by value.
- Alles in Main schrijven en de methoden er achteraf omheen proberen te bouwen.

## Paswoord generator methode

### Aanpak

Eén parameter, de lengte, en een string als returntype. Binnenin een lus die telkens één willekeurig teken kiest en aan een string plakt die aangroeit. Kiezen tussen een cijfer, een kleine letter en een hoofdletter doe je met een tweede willekeurig getal en een switch. Voor de letters gebruik je de Unicode-waarden: een willekeurig getal binnen het bereik van a tot z, gecast naar een char.

### Valkuilen

- De string binnen de lus opnieuw beginnen.
- De bovengrens van Next vergeten: die waarde zelf komt nooit voor, dus de z of de Z valt weg.
- Het Random-object binnen de lus aanmaken, waardoor alle tekens gelijk worden.
- Het paswoord tonen in de methode in plaats van het terug te geven.

## Netflix Essentials Oefening

### Nota

De opgave beschrijft vier methoden met hun parameters en returntypes. Laat de student die letterlijk volgen: dit is oefening in signaturen lezen en omzetten.

### Aanpak

Schrijf eerst de vier signaturen zonder inhoud, precies zoals de opgave ze beschrijft, en vul ze daarna één voor één in. Main is de dirigent: die stelt alle vragen, roept de methoden op en toont de resultaten. Enkel ToonWelkomstBericht mag zelf iets tonen. Werkt de student de flow af, dan is het stoppen na een te jonge kijker gewoon een return in Main.

### Valkuilen

- In MagKijken een tekst tonen in plaats van true of false teruggeven.
- In GenereerTitel de titel tonen in plaats van teruggeven.
- De vragen in de methoden stellen in plaats van in Main.
- De grens verkeerd testen: precies de minimumleeftijd mag wel kijken.
- Het resultaat van een methode niet opvangen in een variabele.

## Film Default

### Aanpak

Eén methode met drie parameters, waarvan de laatste twee een standaardwaarde krijgen. Die standaardwaarden staan in de signatuur, en parameters met een standaardwaarde staan altijd achteraan. In Main roep je de methode drie keer op: met één, met twee en met drie argumenten, en daarna nog eens met named arguments.

### Valkuilen

- De optionele parameters vooraan zetten.
- De standaardwaarde in de methode zelf met een if instellen in plaats van in de signatuur.
- Een enum-waarde als standaard vergeten toe te voegen aan de enum, zoals Onbekend.
- Bij named arguments de dubbelpunt vergeten of de parameternaam verkeerd schrijven.

## Opwarmers met geavanceerde methoden

### Nota

Dit is geen nieuwe opgave maar een uitbreiding: de opwarmers van week 1 herschrijven met minstens één optionele parameter, en ze oproepen met named arguments.

### Aanpak

Kies per opwarmer een parameter die zinvol een standaardwaarde kan hebben, en zet die achteraan in de signatuur. In Main toon je aan dat de methode werkt met en zonder dat argument.

### Valkuilen

- Een optionele parameter toevoegen die nergens gebruikt wordt.
- De volgorde van de parameters breken waardoor bestaande oproepen niet meer compileren.
- Named arguments gebruiken maar de oude oproepen niet testen.

## Roulette

### Nota

Een variant op een vaardigheidsproef. De opgave zegt dat je van correcte invoer mag uitgaan.

### Aanpak

De methode krijgt het startkapitaal en het aantal simulaties binnen, en geeft het eindkapitaal terug. Binnenin één lus die het aantal simulaties doorloopt, met per ronde twee willekeurige getallen en een if die het kapitaal aanpast. In Main roep je die methode vier keer op met een groeiend aantal simulaties, en toon je telkens het verschil met het startkapitaal, gekleurd volgens winst of verlies.

### Valkuilen

- Het kapitaal in de methode wijzigen en verwachten dat het buiten de methode mee verandert. Het resultaat moet terugkomen via return.
- De vier oproepen met het gewijzigde kapitaal doen in plaats van telkens met het originele startkapitaal.
- Het aantal simulaties als verplichte parameter schrijven terwijl de opgave om een optionele vraagt.
- De vreemde kommagetallen die doubles opleveren. Afronden bij het tonen lost dat op.
- ResetColor vergeten na de gekleurde bedragen.

## Oude oefeningen leesbaarder maken

### Nota

Een open opdracht zonder vaste oplossing: bestaande oefeningen herwerken met methoden.

### Aanpak

Laat de student een oefening kiezen waarin hetzelfde blok code meer dan één keer voorkomt, of waarin Main te lang geworden is. Elk stuk dat je in één zin kan benoemen is een kandidaat-methode. Bepaal per stuk wat het nodig heeft en wat het oplevert; dat zijn de parameters en het returntype.

### Valkuilen

- Methoden maken die alles tonen en niets teruggeven, waardoor ze nergens anders bruikbaar zijn.
- Stukken afsplitsen die van te veel losse variabelen afhangen. Dat is een teken dat de knip op de verkeerde plaats zit.
- De werkende oefening kapotmaken zonder tussentijds te testen.

## Verhaalgenerator

### Nota

Deze oefening verwijst naar het All-in-one-project De verhaalgenerator. De volledige opgave staat daar.

### Aanpak

Laat de student eerst benoemen welke stukken van het verhaal telkens hetzelfde patroon volgen; dat worden de methoden. Een methode die een stuk tekst samenstelt geeft een string terug, een methode die iets kiest geeft de keuze terug.

### Valkuilen

- Alles in één lange Main schrijven en er achteraf methoden proberen uit te knippen.
- Methoden schrijven die enkel tonen en niets teruggeven.

## Hoe ver geraak je

### Nota

Dit verwijst naar de challenges op edabit. Er is geen vaste opgave; vraag de student welke challenge hij open heeft.

### Aanpak

Elke challenge komt neer op hetzelfde: lees wat er binnenkomt en wat er terug moet, schrijf de signatuur, en dan pas de inhoud. Laat de student de opgave in eigen woorden herformuleren voor hij begint.

### Valkuilen

- De taal niet op C# zetten en dan met de syntax van een andere taal worstelen.
- Meteen beginnen typen zonder eerst het returntype vast te leggen.

## Havenbeheer

### Nota

Dit is de Final Essentials van het hoofdstuk. Alle technieken uit hoofdstuk 7 komen samen: optionele parameters, named arguments en overloading.

### Aanpak

Schrijf eerst de drie methoden apart en test elk voor je aan het scenario begint. ControleerDiepgang geeft een bool terug en heeft een optionele kadediepte. BerekenLadingGewicht bestaat twee keer met dezelfde naam maar een andere parameterlijst; de compiler kiest zelf op basis van de types die je meegeeft. BerekenTotaleKost heeft een optionele bool en rondt af voor hij teruggeeft. Main stelt de vragen, kiest met een if welke overload aan de beurt is, en toont het rapport.

### Valkuilen

- Twee overloads schrijven die enkel in returntype verschillen. Dat mag niet: de parameterlijst moet verschillen.
- Het aantal containers als double inlezen, waardoor de verkeerde overload gekozen wordt.
- De verhoging voor gevaarlijke lading optellen bij het gewicht in plaats van bij de prijs.
- De named argument-oproep vergeten, terwijl de opgave er uitdrukkelijk om vraagt.
- Na een afgekeurd schip toch verder vragen stellen.
- De optionele parameter in de signatuur vergeten en hem verplicht maken.
