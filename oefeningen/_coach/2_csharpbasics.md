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

- Datatypes: int en long voor gehele getallen, double, float en decimal voor kommagetallen, char voor één teken, string voor tekst, bool voor waar of niet waar
- Een variabele aanmaken met een datatype en een naam, en er een waarde aan toekennen. Camel casing en de regels voor een geldige naam
- Literals: 12.5 is een double, 12.5f een float, 12.5M een decimal, en een char staat tussen apostrofs
- Een lokale variabele moet een waarde hebben voor je ze uitleest
- Rekenen met + - * / en % (modulo), en de volgorde van bewerkingen, die je met haakjes kan wijzigen
- De deling van twee gehele getallen kapt alles na de komma af: 9 / 2 geeft 4. Eén van beide een kommagetal maken lost dat op
- De teller met één verhogen met teller++
- Een constante met const, in hoofdletters geschreven
- Console.Clear om het scherm leeg te maken

## Kent nog niet

- Invoer omzetten naar een getal. Convert, Parse en casting komen in hoofdstuk 4, dus alle getallen worden in dit hoofdstuk hard in de code gezet
- De Math-bibliotheek en afronden
- Escape characters, verbatim strings en de string-methoden
- if, else, switch, vergelijkingen en logische operatoren
- Lussen: while, do while, for. Herhalen doet hij hier nog met kopieer en plak
- Zelf methoden schrijven, arrays, klassen, en alles wat daarna komt

# Oefeningen

## Gemiddelde

### Nota

In dit hoofdstuk wordt nog niets aan de gebruiker gevraagd. Alle waarden staan hard in de code.

### Aanpak

Drie gehele getallen optellen en delen door drie. De opgave vraagt uitdrukkelijk een kommagetal als resultaat, en daar zit de hele oefening: de som moet eerst gemaakt worden (haakjes) en er moet een kommagetal in de deling zitten.

### Valkuilen

- De haakjes rond de som vergeten, waardoor enkel de laatste maand gedeeld wordt.
- Delen door 3 in plaats van door 3.0, waardoor alles na de komma verdwijnt.
- Het resultaat in een int bewaren, waardoor de komma alsnog wegvalt.

## Euro naar dollar

### Aanpak

Drie fasen: de gegevens in variabelen zetten, de berekening doen, het resultaat tonen. De wisselkoers hoort in een eigen variabele, niet ergens middenin de berekening.

### Valkuilen

- De koers rechtstreeks in de berekening typen. Dat werkt, maar de opgave wil net dat getal op één plek.
- Het resultaat berekenen binnen de WriteLine en nergens bewaren.
- Een int gebruiken voor een bedrag met komma.

## Kill/Death-ratio

### Aanpak

Twee variabelen delen. De kern is waarom minstens één van de twee een double moet zijn: bij twee gehele getallen valt alles na de komma weg.

### Valkuilen

- Beide variabelen als int declareren en zich afvragen waarom er 4 uitkomt in plaats van 4,888.
- De deling omdraaien: deaths door kills.

## BTW

### Aanpak

Het percentage komt in een const. Daarna is het een keuze hoe je rekent: het percentage van de prijs erbij optellen, of meteen met een factor vermenigvuldigen. Beide mogen, als de student maar kan uitleggen welke van de twee hij koos.

### Valkuilen

- De waarde van de const later in het programma proberen te wijzigen.
- 21 en 0,21 door elkaar halen, waardoor het resultaat een factor honderd verkeerd is.
- De haakjes zo zetten dat er eerst opgeteld en dan vermenigvuldigd wordt.

## Gewicht in space

### Aanpak

Eén variabele met het gewicht op aarde, en per planeet een const met de factor. Daarna per planeet één lijn tonen waarin de berekening gebeurt. De kleur van de Jupiter- en Plutolijn stel je in vóór die lijn en zet je daarna terug.

### Valkuilen

- De factoren rechtstreeks in de tekst typen, zodat je ze nergens kan hergebruiken.
- ResetColor vergeten na de gekleurde lijnen.
- De kleur instellen na de WriteLine.

## Tafel en Console.Clear

### Nota

Bedoeling is te leren wat Clear doet en waarom een lege ReadLine als pauze werkt. Dit is met opzet omslachtig: met een lus kan het later veel korter.

### Aanpak

De tafel en de teller staan bovenaan in een variabele en worden nergens anders hard getypt. Daarna herhaalt telkens hetzelfde blokje: de lijn tonen, de teller met één verhogen, wachten op enter, het scherm leegmaken. Kopiëren en plakken mag hier, want lussen kent hij nog niet.

### Valkuilen

- 411 overal opnieuw typen, waardoor de tafel wijzigen tien aanpassingen kost.
- De ReadLine voor de Clear vergeten, waardoor alles voorbijflitst.
- De teller vergeten te verhogen, of hem twee keer verhogen.
- De berekening zelf uitrekenen en het antwoord intypen in plaats van te laten berekenen.

## Simple maths

### Aanpak

Elk van de vier berekeningen komt in een eigen variabele en wordt daarna getoond. Het punt van de oefening is dat de student eerst zelf op papier uitrekent wat er moet uitkomen en dan verklaart waarom C# iets anders geeft. Bij de derde en vierde berekening zit het verschil in de gehele deling.

### Valkuilen

- Het resultaat van een deling in een int bewaren.
- Denken dat modulo hetzelfde is als delen.
- De voorrang van vermenigvuldigen op optellen vergeten.
- De verschillen zien maar niet kunnen uitleggen. Laat hem de berekening stap voor stap opsplitsen.

## De Kassa

### Nota

Dit is een Final Essentials: alles van het hoofdstuk komt samen. Nog altijd zonder invoer van de gebruiker, behalve de enter-pauze.

### Aanpak

Eerst alle prijzen en aantallen bovenaan als variabele, met de prijzen als const en de wisselkoers ook. Dan per product de deelprijs berekenen, daarna het totaal, het gemiddelde en het bedrag in dollar. Pas daarna het ticket tonen, met de kleuren rond de juiste lijnen. Het gemiddelde is het totaalbedrag gedeeld door het totaal aantal stuks, niet door drie.

### Valkuilen

- Het gemiddelde delen door het aantal producten in plaats van het aantal gekochte stuks.
- Het totaal aantal stuks in een int bewaren en dan een gehele deling krijgen bij het gemiddelde.
- De prijs per stuk en de deelprijs door elkaar halen.
- ResetColor vergeten na de gekleurde totaallijnen.
- De Clear zetten voor de ReadLine.

## Tekstmaker

### Nota

Een PRO-oefening: die gebruikt iets wat pas veel later in de cursus komt. Bestanden schrijven hoeft hij niet te begrijpen, wel dat de methode twee dingen meekrijgt.

### Aanpak

Twee vragen stellen en de antwoorden bewaren, en die twee variabelen daarna aan de methode uit de opgave meegeven. De volgorde is belangrijk: eerst de bestandsnaam, dan de inhoud.

### Valkuilen

- De twee argumenten omwisselen.
- Het bestand niet terugvinden. Het staat bij het uitgevoerde programma, in de bin-map van het project.
- Aanhalingstekens rond de variabelenamen zetten, waardoor de naam van de variabele zelf in het bestand komt.
