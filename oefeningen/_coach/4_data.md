<!--
  Coach-data voor de oefeningen in oefeningen/4_data/.
  Zie oefeningen/_coach/_prompt.md voor het sjabloon en scripts/coach-prompt.mjs voor de werking.
-->

# Leerstof

## Kent al

Hoofdstuk 1, de eerste stappen:

- Console.WriteLine en Write, Console.ReadLine, de kleuren van de console en Console.ResetColor

Hoofdstuk 2, de basisconcepten van C#:

- Datatypes, variabelen, const, camel casing, Console.Clear en verhogen met ++
- Rekenen met + - * / en %, de volgorde van bewerkingen, en de gehele deling die alles na de komma afkapt

Hoofdstuk 3, tekst gebruiken in code:

- Escape characters (\n, \t, \"), verbatim strings met @, string interpolatie met $"..." en formattering zoals {getal:F2}
- .Length op een string en de Environment-bibliotheek

Hoofdstuk 4, werken met data:

- Casting: van double naar int moet je expliciet (int) voor de waarde zetten, van int naar double gebeurt vanzelf
- Parsen: int.Parse en double.Parse zetten tekst om naar een getal, meestal meteen na Console.ReadLine
- De Convert-bibliotheek: Convert.ToInt32, Convert.ToDouble en dergelijke
- Een char bewaart de Unicode-waarde van zijn teken. Casten of Convert geeft dus dat getal en niet het cijfer dat er staat; het cijfer zelf haal je eruit via ToString en Parse
- De Math-bibliotheek: Pow, Sqrt, Round, Ceiling, Floor, Abs, Sin, Cos, Tan en de constante Math.PI
- Afronden: casten kapt af richting nul, Math.Round rondt standaard af volgens bankers rounding, en met MidpointRounding.AwayFromZero rond je af zoals op school
- Random: één generator aanmaken en dan Next of NextDouble gebruiken. Next met twee getallen geeft een waarde vanaf het eerste tot en met het tweede min één
- Een lopende som bijhouden met +=
- Debuggen met breakpoints en stap voor stap door de code lopen

## Kent nog niet

- if, else, switch, vergelijkingen en logische operatoren. Er kan dus nog niet gereageerd worden op wat de gebruiker intypt
- Lussen: while, do while, for. Herhalen doet hij hier nog met kopieer en plak, en de opgaven zeggen dat er ook uitdrukkelijk bij
- TryParse en het keyword out. Foute invoer opvangen kan hij nog niet
- Zelf methoden schrijven, arrays, klassen, en alles wat daarna komt

# Oefeningen

## Supercomputer

### Aanpak

Drie keer inlezen en omzetten naar een kommagetal, dan het gemiddelde berekenen. De haakjes rond de som zijn hier het hele punt, net zoals in hoofdstuk 2.

### Valkuilen

- De haakjes rond de som vergeten.
- De invoer inlezen maar niet omzetten, waardoor de drie stukken tekst aan elkaar geplakt worden in plaats van opgeteld.
- Een komma en een punt door elkaar halen bij het intypen. Op een Belgische pc is de komma het decimaalteken.

## Vierkant

### Aanpak

Eén getal inlezen en omzetten. De omtrek is de zijde maal vier, de oppervlakte de zijde in het kwadraat, waarvoor Math.Pow bestaat. Beide resultaten in een eigen variabele.

### Valkuilen

- De invoer als tekst laten staan en er dan mee proberen te rekenen.
- Omtrek en oppervlakte verwisselen.
- Vergeten om de vraag te tonen voor de ReadLine, waardoor het programma lijkt te hangen.

## Balk

### Aanpak

Drie gehele getallen inlezen. De inhoud is het product van de drie. De oppervlakte is de som van de zes zijvlakken, dus twee keer elk paar. Zet de formule eerst in woorden voor je ze uittypt.

### Valkuilen

- De oppervlakte berekenen als de som van drie producten in plaats van zes.
- De volgorde van bewerkingen: vermenigvuldigen gaat voor optellen, dus haakjes zijn hier niet nodig maar wel duidelijker.
- Drie keer inlezen zonder te tonen welk getal gevraagd wordt.

## BMI berekenaar

### Nota

Deze oefening komt in hoofdstuk 5 terug, dan met if. De student bewaart ze dus best.

### Aanpak

De gebruiker geeft de lengte in centimeter, de formule werkt in meter. Die omzetting moet dus ergens gebeuren, en daar zit ook meteen het risico op een gehele deling. De BMI zelf is het gewicht gedeeld door de lengte in het kwadraat. Afronden op twee cijfers doe je met Math.Round.

### Valkuilen

- De lengte in centimeter in de formule stoppen, waardoor er een absurd kleine BMI uitkomt.
- Delen door 100 in plaats van 100.0 met een int-variabele, waardoor de lengte 1 wordt.
- Math.Round zonder tweede getal gebruiken, waardoor er op een geheel getal afgerond wordt.
- Het resultaat afronden en dan verder rekenen in plaats van enkel bij het tonen.

## Op-de-poef

### Nota

Lussen kent hij nog niet, dus de vijf keer worden gewoon onder elkaar gekopieerd. Dat is hier de bedoeling.

### Aanpak

Bovenaan één variabele voor de lopende som, die op nul begint. Vijf keer hetzelfde blokje: bedrag vragen, omzetten, bij de som optellen met +=, en de tussenstand tonen. Op het einde het aantal weken berekenen: de som gedeeld door tien, naar boven afgerond met Math.Ceiling.

### Valkuilen

- De som binnen het herhaalde blokje declareren, waardoor ze telkens opnieuw op nul staat.
- De nieuwe waarde toekennen in plaats van optellen, waardoor enkel het laatste bedrag overblijft.
- Delen door 10 in plaats van 10.0, waardoor Math.Ceiling niets meer te ronden heeft en er een week te weinig uitkomt.
- Math.Ceiling en Math.Round door elkaar halen. Een halve week bestaat hier niet.

## Feestkassa

### Aanpak

Vier prijzen als const bovenaan. Daarna vier keer hetzelfde: het aantal vragen, omzetten, de deelprijs berekenen en de tussenstand tonen. Op het einde alles optellen. Elke deelprijs in een eigen variabele bewaren, want de tussenstand toont ze alle vier opnieuw.

### Valkuilen

- De deelprijzen niet bewaren, waardoor de tussenlijnen niet meer te maken zijn.
- Het aantal als double inlezen. Een half ijsje bestaat niet.
- De prijzen rechtstreeks in de berekening typen in plaats van een const te gebruiken.
- Bij het optellen van het totaal een deelprijs vergeten.

## Het Orakeltje van Delphi

### Nota

Deze oefening komt in de volgende hoofdstukken terug in een uitgebreidere vorm. Laat de student ze bewaren.

### Aanpak

Eén Random-object aanmaken, en daar één getal uit vragen binnen de juiste grenzen. Let op de bovengrens: Next telt tot en met het tweede getal min één.

### Valkuilen

- Bij Next 125 als bovengrens geven, waardoor 125 nooit voorkomt.
- Bij elke oproep een nieuwe Random aanmaken.
- Denken dat het programma iets van de gebruiker nodig heeft. Er wordt niets gevraagd.

## Geometric fun

### Aanpak

De hoek wordt in graden gevraagd, maar Sin, Cos en Tan werken in radialen. Die omzetting doe je eerst en bewaar je in een eigen variabele. Daarna drie keer dezelfde soort lijn.

### Valkuilen

- De graden rechtstreeks aan Sin meegeven.
- Bij de omzetting delen door een geheel getal, waardoor alles nul wordt.
- Schrikken van uitkomsten zoals 6E-17 bij 90 graden. Dat is normaal en staat in de opgave uitgelegd.

## Schaak-ELO

### Nota

Een PRO-oefening en meteen de pittigste van het hoofdstuk. De opgave zegt uitdrukkelijk: gebruik overal doubles.

### Aanpak

Werk in stappen en test na elke stap. Eerst de twee ratings inlezen. Dan de verwachte score van elke speler berekenen met de formule uit de afbeelding, waarin Math.Pow zit. Pas daarna de nieuwe ratings voor de drie scenario s, waarbij enkel de behaalde score verschilt: 1, 0 of 0,5. Afronden gebeurt enkel bij het tonen.

### Valkuilen

- Delen door 400 in plaats van 400.0, waardoor de exponent nul wordt.
- Haakjes verkeerd zetten in de noemer van de verwachte score.
- De verwachte score van speler A ook voor speler B gebruiken.
- De afgeronde rating hergebruiken in de volgende berekening.
- Alle drie de scenario s tegelijk proberen te schrijven. Eén scenario dat klopt is de helft van het werk.

## De Festivalganger

### Nota

Dit is een Final Essentials: alles van het hoofdstuk komt samen. De opgave zegt uitdrukkelijk dat de drie dagen gekopieerd mogen worden, want lussen komen pas in het volgende hoofdstuk.

### Aanpak

Bovenaan de twee prijzen als const, één Random, en de naam en het budget inlezen. Per dag: aantal drankjes en snacks vragen, een willekeurige onvoorziene kost trekken, de dagkost berekenen, die van het budget aftrekken en het resultaat afronden op twee cijfers. Het budget is een lopende som die over de drie dagen blijft bestaan.

### Valkuilen

- Het budget per dag opnieuw instellen, waardoor er niets afgaat.
- Een nieuwe Random per dag aanmaken.
- Bij Next 20 als bovengrens geven, waardoor 20 nooit voorkomt.
- Math.Round zonder tweede getal, waardoor het budget op hele euro s springt.
- De dagkost berekenen zonder de onvoorziene kost mee te tellen.
