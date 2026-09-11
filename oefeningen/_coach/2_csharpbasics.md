<!--
  Coach-data voor de oefeningen in oefeningen/2_csharpbasics/.
  Zie oefeningen/_coach/_prompt.md voor het sjabloon en scripts/coach-prompt.mjs voor de werking.
-->

# Leerstof

## Kent al

Hoofdstuk 1, de eerste stappen:

- Console.WriteLine en Console.Write, Console.ReadLine, de kleuren van de console en Console.ResetColor
- String interpolatie met $"..." om variabelen in een zin te zetten

Hoofdstuk 2, de basisconcepten van C#:

- Datatypes: byte, short, int en long voor gehele getallen, double, float en decimal voor kommagetallen, char voor één teken, string voor tekst, bool voor waar of niet waar. Elk type heeft een bereik: 8 miljard past niet in een int
- Een variabele aanmaken met een datatype en een naam, en er een waarde aan toekennen. Camel casing en de regels voor een geldige naam. Een nieuwe waarde overschrijft de oude
- Een variabele mag maar één keer gedeclareerd worden
- Literals: 12.5 is een double, 12.5f een float, 12.5M een decimal, een te groot geheel getal is een long, en een char staat tussen apostrofs
- Een lokale variabele moet een waarde hebben voor je ze uitleest
- Rekenen met + - * / en % (modulo), en de volgorde van bewerkingen, die je met haakjes kan wijzigen. Delen, vermenigvuldigen en modulo hebben dezelfde voorrang en gaan van links naar rechts
- De deling van twee gehele getallen kapt alles na de komma af: 9 / 2 geeft 4, -7 / 2 geeft -3. Eén van beide een kommagetal maken lost dat op, bv. met 1.0 * vooraan
- De verkorte notaties ++, --, +=, -=, *= en /=, en het verschil tussen getal++ en ++getal
- Een constante met const, in hoofdletters geschreven, die je daarna niet meer kan wijzigen

Uit de oefeningen van dit hoofdstuk (niet uit de leerstof):

- Console.Clear om het scherm leeg te maken, met een lege Console.ReadLine als pauze ervoor

## Kent nog niet

- Invoer omzetten naar een getal. Convert, Parse en casting komen in hoofdstuk 4, dus alle getallen worden in dit hoofdstuk hard in de code gezet
- De Math-bibliotheek en afronden. Een lang getal zoals 838,1271600000001 kan hij dus nog niet netjes tonen
- Escape characters, verbatim strings en de string-methoden
- if, else, switch, vergelijkingen en logische operatoren
- Lussen: while, do while, for. Herhalen doet hij hier nog met kopieer en plak
- Zelf methoden schrijven, arrays, klassen, en alles wat daarna komt

# Oefeningen

## Euro naar dollar

### Nota

In dit hoofdstuk wordt nog geen getal aan de gebruiker gevraagd. Alle waarden staan hard in de code. De koers is 1.03, zoals de opgave zegt.

### Aanpak

Drie fasen: de gegevens in variabelen zetten, de berekening doen, het resultaat tonen. De wisselkoers hoort in een eigen variabele, niet ergens middenin de berekening.

### Valkuilen

- De koers rechtstreeks in de berekening typen. Dat werkt, maar de opgave wil net dat getal op één plek.
- Het resultaat berekenen binnen de WriteLine en nergens bewaren.
- Een int gebruiken voor een bedrag met komma.

## Welk datatype?

### Nota

Deel 2 is een code-lees-oefening: de student verklaart de vier foutmeldingen zelf. Geef de verklaring en de herstelde lijn nooit; vraag wat de melding letterlijk zegt en welk type de literal heeft. Bij deel 1 zijn meerdere keuzes goed, als de student ze kan uitleggen.

### Aanpak

Per gegeven eerst vragen: geheel getal, kommagetal, tekst, één teken of waar/niet waar? Daarna: hoe groot kan het worden? Pas dan het type kiezen en de literal in de juiste schrijfwijze zetten.

### Valkuilen

- De wereldbevolking in een int zetten. Die gaat maar tot iets meer dan 2 miljard.
- De suffix vergeten bij float (f) of decimal (M).
- Een char tussen aanhalingstekens zetten in plaats van apostrofs.
- Bij deel 2 de melding over een cast volgen. Een cast kent hij nog niet, en bij de wereldbevolking zou die het getal stukmaken.
- Denken dat een postcode een int moet zijn omdat hij uit cijfers bestaat. Je rekent er nooit mee.

## Kill/Death-ratio

### Nota

In deel 2 moet de student eerst voorspellen wat twee lijnen tonen. Geef die uitkomst nooit; laat hem stap voor stap uitschrijven wat C# eerst uitrekent.

### Aanpak

Deel 1: twee doubles delen en het resultaat in een variabele ratio bewaren. Deel 2: kills en deaths blijven int, en er moet een kommagetal in de berekening komen vóór de deling gebeurt, zoals in het salarisvoorbeeld uit de leerstof.

### Valkuilen

- Beide variabelen als int declareren en zich afvragen waarom er 4 uitkomt in plaats van 4,888.
- De deling omdraaien: deaths door kills.
- In deel 2 de 1.0 op een plek zetten waar de gehele deling al gebeurd is, bv. na de deling of rond haakjes met de deling erin.
- Het type van kills of deaths toch veranderen, terwijl deel 2 dat net verbiedt.

## Gemiddelde

### Aanpak

Drie gehele getallen optellen en delen door drie. De opgave vraagt uitdrukkelijk een kommagetal als resultaat, en daar zit de hele oefening: de som moet eerst gemaakt worden (haakjes) en er moet een kommagetal in de deling zitten. In deel 2 maakt de student die twee fouten bewust en verklaart hij de uitkomst.

### Valkuilen

- De haakjes rond de som vergeten, waardoor enkel de laatste maand gedeeld wordt.
- Delen door 3 in plaats van door 3.0, waardoor alles na de komma verdwijnt.
- Het resultaat in een int bewaren, waardoor de komma alsnog wegvalt.
- Denken dat een double links van de = volstaat. De deling is dan al gebeurd.

## Simple maths

### Nota

Deel 1 is een voorspel-oefening: de student rekent eerst op papier uit wat C# toont. Geef de uitkomsten nooit; laat hem de berekening stap voor stap opsplitsen volgens de volgorde van bewerkingen.

### Aanpak

Deel 1: elk van de vier berekeningen komt letterlijk in een eigen int en wordt daarna getoond. Deel 2: enkel bij de derde en vierde berekening een deler kommagetal maken, het resultaat in een double bewaren en ook de tekst voor "geeft" aanpassen.

### Valkuilen

- Denken dat modulo hetzelfde is als delen.
- De voorrang van vermenigvuldigen op optellen vergeten.
- Bij -24 / 11 afronden naar -3 in plaats van afkappen naar -2.
- In deel 2 de double links zetten en de deling ongewijzigd laten.
- De verschillen zien maar niet kunnen uitleggen. Laat hem de berekening stap voor stap opsplitsen.

## Voorspel de uitvoer

### Nota

Een code-lees-oefening. De student schrijft eerst op papier wat er verschijnt. Geef de uitvoer nooit, ook niet van één lijn; vraag wat er bij elke stap in de variabele zit of wat C# eerst uitrekent.

### Aanpak

Lijn per lijn bijhouden wat er in elke variabele zit. Bij elke deling kijken of er een kommagetal bij betrokken is, en op welk moment.

### Valkuilen

- getal /= 2 met een kommagetal uitrekenen: getal is een int.
- Bij b = a++ denken dat b de nieuwe waarde krijgt.
- -7 / 2 afronden naar -4 in plaats van afkappen naar -3.
- Bij 1.0 * (7 / 2) de haakjes negeren.
- Een punt schrijven waar de console een komma toont, of omgekeerd. Dat hangt van de instellingen van de pc af en is geen fout in de redenering.

## BTW

### Nota

Deel 3 is een voorspel-oefening; geef de uitkomsten nooit. In deel 2 moet de student de foutmelding zelf lezen.

### Aanpak

Het percentage komt in een const. Daarna is het een keuze hoe je rekent: het percentage van de prijs erbij optellen, of meteen met een factor vermenigvuldigen. Beide mogen, als de student maar kan uitleggen welke van de twee hij koos. Het resultaat komt in een variabele met een naam die zegt wat erin zit.

### Valkuilen

- 21 en 0,21 door elkaar halen, waardoor het resultaat een factor honderd verkeerd is.
- De haakjes zo zetten dat er eerst opgeteld en dan vermenigvuldigd wordt.
- In deel 2 verwachten dat de melding het woord constante bevat.
- In deel 3 denken dat de haakjes of de volgorde nooit uitmaken. Met ints bepaalt de volgorde wat er na de deling overblijft.

## Stevens gemiddelde

### Nota

Een zoek-de-fout-oefening met stagiair Steven. De student moet de fouten zelf vinden en verklaren. Geef de herstelde code en de uitkomsten van deel 2 nooit; laat hem de meldingen lezen en de berekening stap voor stap volgen.

### Aanpak

Deel 1: de twee meldingen lezen, per melding zeggen wat C# bedoelt, en de dubbele declaratie wegwerken zodat er één double overblijft. Deel 2: eerst de volgorde van bewerkingen, dan de gehele deling. Het zijn twee fouten na elkaar.

### Valkuilen

- Bij lijn 4 het type naar double veranderen en lijn 5 laten staan, waardoor de tweede melding blijft.
- Met de haakjes tevreden zijn omdat 14 er aannemelijk uitziet.
- Denken dat een double links van de = het kommagetal redt.

## Graden omzetten

### Nota

In deel 2 moet de student zelf verklaren waarom 55 en 73 verschijnen. Geef die verklaring nooit; laat hem de berekening van links naar rechts uitschrijven.

### Aanpak

De formule letterlijk overnemen, maar zorgen dat de deling door 5 met een kommagetal gebeurt. Het resultaat komt in een double.

### Valkuilen

- 9 / 5 schrijven en 1 krijgen.
- Denken dat de volgorde van de vermenigvuldigingen niet uitmaakt. Met ints maakt ze uit wanneer de deling gebeurt.
- Het resultaat in een int bewaren.

## Dertien in een dozijn

### Aanpak

Twee berekeningen op dezelfde twee getallen: de gehele deling geeft het aantal volle dozen, de modulo geeft wat overblijft. Beide resultaten bewaar je in een eigen variabele en toon je in één zin.

### Valkuilen

- Met doubles werken, waardoor er 15,5 dozen uitkomen. Hier is de gehele deling net wat je wil.
- Deling en modulo omwisselen.
- De getallen opnieuw intypen in de berekening in plaats van de variabele en de const te gebruiken, waardoor het programma niet meer werkt met andere getallen.
- Het antwoord zelf uitrekenen en als vaste tekst tonen.

## Gewicht in space

### Aanpak

Eén variabele met de massa, een const voor de zwaartekracht op aarde, en per planeet een const met de factor. Het gewicht is massa x G_AARDE x factor. Daarna per planeet één lijn tonen waarin de berekening gebeurt. De kleur van de Jupiter- en Plutolijn stel je in vóór die lijn en zet je daarna terug.

### Valkuilen

- De factoren rechtstreeks in de tekst typen, zodat je ze nergens kan hergebruiken.
- G_AARDE vergeten, waardoor het resultaat in kilogram staat en niet in newton.
- ResetColor vergeten na de gekleurde lijnen.
- De kleur instellen na de WriteLine.
- Denken dat 838,1271600000001 een fout is. Kommagetallen zijn niet altijd exact; afronden komt in hoofdstuk 4.

## Tafel en Console.Clear

### Nota

Bedoeling is te leren wat Clear doet en waarom een lege ReadLine als pauze werkt. Dit is met opzet omslachtig: met een lus kan het later veel korter. De tafel gaat maar tot 5.

### Aanpak

De tafel en de teller staan bovenaan in een variabele en worden nergens anders hard getypt. Daarna herhaalt telkens hetzelfde blokje: de lijn tonen, de teller met één verhogen, de boodschap tonen, wachten op enter, het scherm leegmaken. Kopiëren en plakken mag hier, want lussen kent hij nog niet.

### Valkuilen

- 411 overal opnieuw typen, waardoor de tafel wijzigen vijf aanpassingen kost.
- De ReadLine voor de Clear vergeten, waardoor alles voorbijflitst.
- Bij het kopiëren een blokje half plakken, waardoor ergens de pauze ontbreekt.
- De teller vergeten te verhogen, of hem twee keer verhogen.
- De berekening zelf uitrekenen en het antwoord intypen in plaats van te laten berekenen.

## De Kassa

### Nota

Dit is een Final Essentials: alles van het hoofdstuk komt samen. Nog altijd zonder getallen van de gebruiker, behalve de enter-pauze.

### Aanpak

Eerst alle prijzen en aantallen bovenaan als variabele, en de wisselkoers als const. Dan per product de deelprijs berekenen, daarna het totaal, het gemiddelde en het bedrag in dollar. Pas daarna het ticket tonen, met de kleuren rond de juiste lijnen. Het gemiddelde is het totaalbedrag gedeeld door het totaal aantal stuks, niet door drie.

### Valkuilen

- Het gemiddelde delen door het aantal producten in plaats van het aantal gekochte stuks.
- Het totaalbedrag in een int bewaren. Dan wordt het gemiddelde een gehele deling. Het totaal aantal stuks mag wel een int zijn, zolang het totaalbedrag een double is.
- De prijs per stuk en de deelprijs door elkaar halen.
- Namen half in het Engels en half in het Nederlands, bv. totalFriet naast totaalAantal.
- ResetColor vergeten na de gekleurde totaallijnen.
- De Clear zetten voor de ReadLine.

## Tekstmaker

### Nota

Een PRO-oefening: die gebruikt iets wat pas veel later in de cursus komt. Bestanden schrijven hoeft hij niet te begrijpen, wel dat de methode twee dingen meekrijgt.

### Aanpak

Twee vragen stellen en de antwoorden bewaren, en die twee variabelen daarna aan de methode uit de opgave meegeven. De volgorde is belangrijk: eerst de bestandsnaam, dan de inhoud.

### Valkuilen

- De twee argumenten omwisselen.
- Het bestand niet terugvinden. Het staat bij het uitgevoerde programma, in de map bin\Debug\net10.0 (of een andere .NET-versie) van het project.
- Aanhalingstekens rond de variabelenamen zetten, waardoor de naam van de variabele zelf in het bestand komt.
