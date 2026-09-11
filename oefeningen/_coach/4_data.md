<!--
  Coach-data voor de oefeningen in oefeningen/4_data/.
  Zie oefeningen/_coach/_prompt.md voor het sjabloon en scripts/coach-prompt.mjs voor de werking.
-->

# Leerstof

## Kent al

Hoofdstuk 1, de eerste stappen:

- Console.WriteLine en Write, Console.ReadLine, de kleuren van de console en Console.ResetColor

Hoofdstuk 2, de basisconcepten van C#:

- Datatypes: int, long, double, float, decimal, char, string, bool. Variabelen, camel casing, const in hoofdletters
- Rekenen met + - * / en %, de volgorde van bewerkingen, en de gehele deling die alles na de komma afkapt
- De verkorte notaties zoals ++ en +=
- Uit de oefeningen: Console.Clear

Hoofdstuk 3, tekst gebruiken in code:

- Een char is één teken tussen apostrofs, een string tekst tussen aanhalingstekens. De +-operator plakt strings aan elkaar
- Escape characters (\n, \t, \"), verbatim strings met @, raw strings met """
- String interpolatie met $"..." en formattering zoals {getal:F2} en {bedrag:C}. Formatteren verandert enkel wat er op het scherm komt, niet het getal zelf
- Console.OutputEncoding = System.Text.Encoding.UTF8 als eerste lijn in Main, voor tekens zoals € en ∞
- .Length op een string en de Environment-bibliotheek

Hoofdstuk 4, werken met data:

- Casting: van double naar int moet je expliciet (int) voor de waarde zetten, van int naar double gebeurt vanzelf (widening). Een cast kapt af richting nul, hij rondt niet af
- Waar de cast staat, telt: (double)(a + b) / 2 geeft een kommagetal, (double)((a + b) / 2) deelt eerst met ints
- Parsen: int.Parse, double.Parse en decimal.Parse zetten tekst om naar een getal, meestal meteen na Console.ReadLine. De gebruiker typt een kommagetal met een komma op een Belgische pc; een punt geeft geen fout maar een verkeerd getal (9.81 wordt 981). In de code staat een kommagetal altijd met een punt
- De Convert-bibliotheek: Convert.ToInt32, Convert.ToDouble en dergelijke. Het boek gebruikt liever Parse en casting
- Een char bewaart de Unicode-waarde van zijn teken. Casten of Convert geeft dus dat getal en niet het cijfer dat er staat; het cijfer zelf haal je eruit via ToString en Parse
- De Math-bibliotheek: Pow, Sqrt, Abs, Max, Min, Clamp, Round, Ceiling, Floor, Truncate, Sin, Cos, Tan en de constante Math.PI. De meeste geven een double terug, ook met gehele getallen erin
- Afronden: Math.Round rondt standaard af volgens bankers rounding (4,5 wordt 4), met MidpointRounding.AwayFromZero rond je af zoals op school. Convert.ToInt32 doet ook aan bankers rounding. Math.Ceiling rondt altijd naar boven, Math.Floor altijd naar beneden
- Afronden of enkel mooi tonen: Math.Round geeft een nieuw getal, F2 verandert enkel de weergave. Rond af op het laatste moment
- Een double bewaart niet elk kommagetal exact: 0.1 + 0.2 geeft 0,30000000000000004 en 4.35 * 100 geeft 434,99999999999994. Voor geld is decimal (met M achter het getal) de betere keuze
- Als rekenen misloopt: een int delen door 0 crasht, een double delen door 0 geeft oneindig, Math.Sqrt(-1) geeft NaN, en int.MaxValue + 1 loopt over naar het kleinste int. Behalve de deling door 0 crasht niets daarvan
- Random: één generator aanmaken en dan Next of NextDouble gebruiken. Next met twee getallen geeft een waarde vanaf het eerste tot en met het tweede min één. NextDouble geeft een getal van 0 tot 1, dat je vermenigvuldigt en verschuift naar het bereik dat je nodig hebt. Met een seed, new Random(42), krijg je telkens dezelfde reeks
- Een lopende som bijhouden met +=
- Debuggen met breakpoints (F9), Step Over (F10) en het venster Locals. Een lijn met een breakpoint is nog niet uitgevoerd als het programma er pauzeert. Eerst voorspellen, dan pas stappen
- A.I.-prompts uit het boek, zoals de zoek-de-fout-prompt

## Kent nog niet

- if, else, switch, vergelijkingen en logische operatoren. Er kan dus nog niet gereageerd worden op wat de gebruiker intypt
- Lussen: while, do while, for. Herhalen doet hij hier nog met kopieer en plak, en de opgaven zeggen dat er ook uitdrukkelijk bij
- TryParse en het keyword out. Foute invoer opvangen kan hij nog niet: int.Parse("abc") crasht, en hoe je dat opvangt, leert hij later
- Zelf methoden schrijven, arrays, klassen, en alles wat daarna komt

# Oefeningen

## Vierkant

### Aanpak

Eén getal inlezen en omzetten naar een double. De omtrek is de zijde maal vier, de oppervlakte de zijde in het kwadraat, waarvoor Math.Pow bestaat. Beide resultaten in een eigen variabele. In deel 2 toont hij de oppervlakte nog eens met Math.Round en eens met F2 in de interpolatie.

### Valkuilen

- De invoer als tekst laten staan en er dan mee proberen te rekenen.
- Denken dat 21,159999999999997 een fout in zijn code is. Zo bewaart een double 4,6 in het kwadraat; de opgave zegt dat ook.
- In deel 2 denken dat Math.Round in de WriteLine de variabele zelf verandert. Enkel als hij het resultaat in een variabele stopt, zijn de andere cijfers weg.
- In deel 2 verwachten dat Math.Round(25, 2) 25,00 toont. Nullen op het einde toont enkel F2.

## Balk

### Nota

Een optionele oefening: ze traint hetzelfde als Vierkant, maar met gehele getallen.

### Aanpak

Drie gehele getallen inlezen. De inhoud is het product van de drie. De oppervlakte is de som van de zes zijvlakken, dus twee keer elk paar. Zet de formule eerst in woorden voor je ze uittypt.

### Valkuilen

- De oppervlakte berekenen als de som van drie producten in plaats van zes.
- De volgorde van bewerkingen: vermenigvuldigen gaat voor optellen, dus haakjes zijn hier niet nodig maar wel duidelijker.
- Drie keer inlezen zonder te tonen welk getal gevraagd wordt.

## Supercomputer

### Aanpak

Drie keer een vraag tonen, inlezen en omzetten naar een double, dan het gemiddelde berekenen. De haakjes rond de som zijn hier het hele punt, net zoals in hoofdstuk 2. Deel 2 is een proef: dezelfde invoer, maar met een punt in plaats van een komma.

### Valkuilen

- De haakjes rond de som vergeten.
- De invoer inlezen maar niet omzetten, waardoor de drie stukken tekst aan elkaar geplakt worden in plaats van opgeteld.
- In deel 2 denken dat de punt genegeerd wordt. Op een Belgische pc is de punt een scheiding tussen duizendtallen, dus 23.4 wordt 234. Laat hem met een breakpoint in Locals kijken wat er in de eerste variabele zit.
- In deel 2 denken dat een verkeerd teken altijd een crash geeft.

## BMI berekenaar

### Nota

Deze oefening komt in hoofdstuk 5 terug, dan met if. De student bewaart ze dus best, met de variabele bmi.

### Aanpak

De gebruiker geeft de lengte in centimeter, de formule werkt in meter. Die omzetting moet dus ergens gebeuren, en daar zit ook meteen het risico op een gehele deling. De BMI zelf is het gewicht gedeeld door de lengte in het kwadraat. Afronden op twee cijfers doe je met Math.Round, enkel bij het tonen. Klopt de uitkomst niet, dan zet hij een breakpoint op de lijn met de formule en kijkt hij in Locals.

### Valkuilen

- De lengte in centimeter in de formule stoppen, waardoor er een absurd kleine BMI uitkomt.
- De lengte als int inlezen en dan door 100 delen, waardoor de lengte 1 wordt.
- Math.Round zonder tweede getal gebruiken, waardoor er op een geheel getal afgerond wordt.
- Het resultaat afronden en dan verder rekenen in plaats van enkel bij het tonen.

## Voorspel de uitvoer

### Nota

Een code-lees-oefening: de student voorspelt eerst op papier. Geef de uitvoer nooit, ook niet van één lijn. Vraag welk type elk stuk heeft, wat C# eerst uitrekent, en of er afgekapt of afgerond wordt.

### Aanpak

Per lijn eerst kijken wat er gebeurt: een cast, een methode van Math, Convert, een deling, of strings. Bij een cast: kapt af richting nul. Bij Math.Round zonder extra parameter: bankers rounding. Bij haakjes: wat gebeurt eerst, de deling of de cast? Bij een char in een int: welk getal zit er achter het teken?

### Valkuilen

- Denken dat (int)2.9 afrondt naar 3.
- (int)-2.7 en Math.Floor(-2.7) voor hetzelfde houden.
- Verwachten dat Math.Round(4.5) 5 geeft.
- Niet zien dat bij (double)((a + b) / 2) de deling eerst gebeurt.
- Denken dat een char '7' in een int het getal 7 geeft.
- In deel 2 een crash verwachten bij overflow of bij delen door 0,0.

## Breakpoint-detective

### Nota

Een code-lees-oefening met de debugger. Zeg nooit op welke lijn de halve graad verloren gaat. Laat hem per lijn eerst voorspellen wat er in de variabelen komt, en vraag dan wat Locals toont. Weet hij niet hoe een breakpoint of Step Over werkt, dan mag je dat in woorden uitleggen.

### Aanpak

Breakpoint op de eerste lijn, programma starten, en dan per lijn: voorspellen, Step Over, in Locals controleren. Waar voorspelling en Locals verschillen, zit de fout. Daarna die ene lijn aanpassen zodat de deling met een kommagetal gebeurt.

### Valkuilen

- Denken dat de gele lijn al uitgevoerd is. Ze wordt pas uitgevoerd bij de volgende Step Over.
- Op Step Over blijven drukken zonder vooraf te voorspellen.
- Denken dat een double links van de = volstaat. De deling rechts gebeurt eerst, met twee ints.
- De fout zoeken bij Math.Round. Daar komt al 22 binnen.
- Herstellen met (double)(som / 2). Dan wordt er eerst gedeeld en pas daarna gecast.

## Op-de-poef

### Nota

Lussen kent hij nog niet, dus de vijf keer worden gewoon onder elkaar gekopieerd. Dat is hier de bedoeling, en de opgave zegt het ook. De barman typt hele euro.

### Aanpak

Bovenaan één variabele voor de lopende som, die op nul begint. Vijf keer hetzelfde blokje: bedrag vragen, omzetten, bij de som optellen met +=, en de tussenstand tonen. Op het einde het aantal weken berekenen: de som gedeeld door tien, naar boven afgerond met Math.Ceiling, en dat resultaat met een cast naar een int omdat een aantal weken een geheel getal is.

### Valkuilen

- De som binnen het herhaalde blokje declareren, waardoor ze telkens opnieuw op nul staat.
- De nieuwe waarde toekennen in plaats van optellen, waardoor enkel het laatste bedrag overblijft.
- Delen door 10 in plaats van 10.0. Met twee ints weet de compiler niet welke versie van Math.Ceiling hij moet nemen en geeft hij een foutmelding (The call is ambiguous). Met (double)(poef / 10) compileert het wel, maar dan is er al gedeeld met ints en komt er een week te weinig uit.
- Math.Ceiling en Math.Round door elkaar halen. Een halve week bestaat hier niet.
- Het resultaat van Math.Ceiling in een int willen steken zonder cast. Math.Ceiling geeft een double.

## Feestkassa

### Aanpak

Vier prijzen als const bovenaan. Daarna vier keer hetzelfde: het aantal vragen, omzetten, de deelprijs berekenen en de tussenstand tonen. Op het einde alles optellen. Elke deelprijs in een eigen variabele bewaren, want de tussenstand toont ze alle vier opnieuw.

### Valkuilen

- De deelprijzen niet bewaren, waardoor de tussenlijnen niet meer te maken zijn.
- Het aantal als double inlezen. Een half ijsje bestaat niet.
- De prijzen rechtstreeks in de berekening typen in plaats van een const te gebruiken.
- Bij het optellen van het totaal een deelprijs vergeten.
- Namen half in het Engels en half in het Nederlands (totalFriet naast aantalFriet). Dat is een boete.

## Wisselgeld in centen

### Aanpak

Het bedrag inlezen als double en met een cast omzetten naar een geheel aantal centen. Dan per munt, van groot naar klein: hoeveel keer past de munt erin (gehele deling), en wat blijft er over (modulo). Die rest gaat naar de volgende munt. Acht keer hetzelfde blokje onder elkaar, want lussen kent hij nog niet. In deel 2 vindt hij met een breakpoint dat 4,35 maal 100 geen 435 geeft, en lost hij het op met Math.Round voor de cast of met decimal.

### Valkuilen

- Met het bedrag in euro blijven rekenen in plaats van met centen.
- Na elke munt de rest niet bijwerken, waardoor elke munt van het volledige bedrag vertrekt.
- De munten van klein naar groot overlopen.
- In deel 2 denken dat de cast afrondt. Hij kapt af, en 434,99999999999994 wordt 434.
- In deel 2 Math.Round na de cast zetten. Dan is er al afgekapt.

## Stevens busreis

### Nota

Een zoek-de-fout-oefening met stagiair Steven. Geef de fouten nooit, ook niet hoeveel er nog over zijn. In deel 1 mag je uitleggen wat een foutmelding van de compiler betekent. In deel 2 vraag je wat hij verwacht op elke lijn en wat Locals toont. Voor de dobbelsteen vraag je wat de tweede parameter van Next betekent.

### Aanpak

Deel 1: de Error List lezen. Een string die in een int moet, en een double van Math.Ceiling die in een int moet. Deel 2: testen met de twee invoeren uit de opgave, en bij een verkeerd resultaat een breakpoint zetten op de lijn waar het berekend wordt. Bij de bussen: wat is studenten / perBus op zich, voor er iets gecast wordt? Bij de prijs: wat doet Math.Round met een getal dat exact op de helft ligt? Bij de dobbelsteen: welke getallen kan Next(1, 6) geven?

### Valkuilen

- In deel 1 de fout in de lijn van Math.Ceiling oplossen door studenten en perBus te veranderen in plaats van het resultaat te casten.
- Denken dat het programma klopt omdat het met één invoer het juiste toont.
- De cast rond de hele deling laten staan. De deling moet met een kommagetal gebeuren, dus één kant casten.
- Denken dat Math.Round altijd naar boven afrondt bij een halve euro.
- De dobbelsteenfout zoeken met de debugger. Die zie je enkel door na te denken over de bovengrens van Next.

## Het Orakeltje van Delphi

### Nota

Deze oefening komt in de volgende hoofdstukken terug in een uitgebreidere vorm. Laat de student ze bewaren.

### Aanpak

Eén Random-object aanmaken, en daar één getal uit vragen binnen de juiste grenzen. Let op de bovengrens: Next telt tot en met het tweede getal min één.

### Valkuilen

- Bij Next 125 als bovengrens geven, waardoor 125 nooit voorkomt.
- Bij elke oproep een nieuwe Random aanmaken.
- Denken dat het programma iets van de gebruiker nodig heeft. Er wordt niets gevraagd.

## Weerbericht van morgen

### Aanpak

NextDouble geeft een getal van 0 tot 1. Vermenigvuldig het met de breedte van het bereik (van -5 tot 30 is dat 35) en tel er de ondergrens bij op. Daarna afronden op één cijfer met Math.Round en MidpointRounding.AwayFromZero. In deel 2 krijgt de generator een seed tussen de haakjes van new Random.

### Valkuilen

- Next gebruiken, waardoor er enkel gehele getallen uitkomen.
- Met 30 vermenigvuldigen in plaats van met 35, of de -5 vergeten, waardoor het bereik niet klopt.
- Haakjes of volgorde verkeerd, zodat de -5 mee vermenigvuldigd wordt.
- Math.Round zonder AwayFromZero, of zonder het aantal cijfers na de komma.
- In deel 2 verwachten dat een seed nog steeds willekeurige uitvoer geeft. Dezelfde seed geeft altijd dezelfde reeks, ook op een andere pc.

## Levensbalk

### Aanpak

Eén Random, levens op 100. Drie keer: een schade van 10 tot en met 40 trekken, de levens verminderen, en met Math.Max zorgen dat ze niet onder 0 gaan. Dan de toverdrank: 50 erbij, en met Math.Min (of Math.Clamp) zorgen dat het niet boven 100 gaat. If is niet nodig en kent hij nog niet.

### Valkuilen

- Math.Max en Math.Min omwisselen. Voor een ondergrens heb je Max nodig, voor een bovengrens Min.
- Bij Next 40 als bovengrens geven, waardoor 40 nooit voorkomt.
- De schade trekken maar ze niet bewaren, waardoor hij ze niet meer kan tonen.
- Het resultaat van Math.Max niet terug in levens stoppen, waardoor er niets verandert.

## Sinus, cosinus en tangens

### Aanpak

De hoek wordt in graden gevraagd, maar Sin, Cos en Tan werken in radialen. Die omzetting doe je eerst en bewaar je in een eigen variabele: maal Math.PI, gedeeld door 180. Daarna drie keer dezelfde soort lijn.

### Valkuilen

- De graden rechtstreeks aan Sin meegeven.
- De omzetting omgekeerd doen: maal 180 en gedeeld door Math.PI.
- Schrikken van uitkomsten zoals 6,123233995736766E-17 bij 90 graden. Dat is bijna 0, en de opgave legt het uit.

## Zoek-de-fout-prompt

### Nota

De student gebruikt een andere A.I. om code met ingebouwde fouten te laten maken, en zoekt die fouten zelf. Jij verklapt de fouten niet en je geeft geen verbeterde code. Plakt hij de code van de andere A.I., dan vraag je per lijn wat hij verwacht dat ze doet. Er is geen modeloplossing.

### Aanpak

Eerst de fouten op papier zoeken, en per fout zeggen of de compiler ze zal vinden. Dan de code in Visual Studio plakken, eerst de compileerfouten herstellen, dan uitvoeren met de invoer uit de opgave en de rest zoeken met een breakpoint. Daarna de code naast zijn eigen oplossing leggen.

### Valkuilen

- De code meteen uitvoeren zonder eerst zelf te zoeken.
- Enkel de compileerfouten zoeken en denken dat het dan klopt.
- Niet opmerken dat de A.I. leerstof gebruikt die hij nog niet kent, zoals if of Convert in plaats van Parse.
- De A.I. meteen vragen welke fouten ze ingebouwd heeft.

## Schaak-ELO

### Nota

Een PRO-oefening en meteen de pittigste van het hoofdstuk. De opgave zegt uitdrukkelijk: gebruik overal doubles, ook voor K.

### Aanpak

Werk in stappen en test na elke stap. Eerst de twee ratings inlezen. Dan de verwachte score van elke speler berekenen met de formule uit de afbeelding, waarin Math.Pow zit, en die met een breakpoint controleren: bij 1000 tegen 1100 is de verwachte score van A ongeveer 0,36. Pas daarna de nieuwe ratings voor de drie scenario's, waarbij enkel de behaalde score verschilt: 1, 0 of 0,5. Afronden gebeurt enkel bij het tonen. In deel 2 wordt K een gewone variabele die hij inleest.

### Valkuilen

- De ratings als int inlezen, waardoor de deling door 400 een gehele deling wordt en de exponent nul.
- Haakjes verkeerd zetten in de noemer van de verwachte score.
- De verwachte score van speler A ook voor speler B gebruiken.
- De afgeronde rating hergebruiken in de volgende berekening.
- Alle drie de scenario's tegelijk proberen te schrijven. Eén scenario dat klopt is de helft van het werk.
- In deel 2 K een const laten, of een const met een kleine letter.

## De Festivalganger

### Nota

Dit is een Final Essentials: alles van het hoofdstuk komt samen. De opgave zegt uitdrukkelijk dat de drie dagen gekopieerd mogen worden, want lussen komen pas in het volgende hoofdstuk.

### Aanpak

Bovenaan de twee prijzen als const, één Random, en de naam en het budget inlezen. Per dag: aantal drankjes en snacks vragen, een onvoorziene kost van 5 tot en met 20 trekken, de dagkost berekenen en die van het budget aftrekken. Het budget zelf wordt niet afgerond: pas bij het tonen komt er Math.Round met twee cijfers na de komma. Het budget is een lopende som die over de drie dagen blijft bestaan. In deel 2 worden budget, prijzen en dagtotalen een decimal.

### Valkuilen

- Het budget per dag opnieuw instellen, waardoor er niets afgaat.
- Het budget zelf afronden en daarmee verder rekenen. De opgave vraagt af te ronden bij het tonen.
- Een nieuwe Random per dag aanmaken.
- Bij Next 20 als bovengrens geven, waardoor 20 nooit voorkomt.
- Math.Round zonder tweede getal, waardoor het budget op hele euro's springt.
- De dagkost berekenen zonder de onvoorziene kost mee te tellen.
- Denken dat 127,94999999999999 een fout in de berekening is. Dat is hoe een double 180,45 min 52,5 bewaart.
- In deel 2 de M achter de prijzen vergeten, waardoor de compiler een double niet in een decimal wil steken.
