<!--
  Coach-data voor de oefeningen in oefeningen/5_beslissingen/.
  Zie oefeningen/_coach/_prompt.md voor het sjabloon en scripts/coach-prompt.mjs voor de werking.
-->

# Leerstof

## Kent al

Hoofdstuk 1 tot en met 4, de basis:

- Console.WriteLine en Write, Console.ReadLine, Console.Clear, de kleuren van de console en Console.ResetColor (hoofdstuk 1 en 2)
- Datatypes, variabelen, const, camel casing, de gehele deling die alles na de komma afkapt, en ++ (hoofdstuk 2)
- Escape characters, verbatim strings, string interpolatie en formattering zoals {getal:F2}, .Length op een string, Environment (hoofdstuk 3)
- Casting, int.Parse en double.Parse, de Convert-bibliotheek, en dat een char bij een omzetting zijn Unicode-waarde geeft en niet het cijfer dat er staat (hoofdstuk 4)
- De Math-bibliotheek (Pow, Sqrt, Round, Ceiling, Floor, Abs, PI en de goniometrische functies) en afronden (hoofdstuk 4)
- Random: één generator, dan Next of NextDouble. Next met twee getallen gaat tot en met het tweede min één (hoofdstuk 4)
- Een lopende som bijhouden met += (hoofdstuk 4)
- Debuggen met breakpoints (hoofdstuk 4)

Hoofdstuk 5, beslissingen:

- Relationele operatoren (>, <, ==, !=, <=, >=), die altijd een bool opleveren
- Logische operatoren && (en), || (of) en ! (niet)
- if, else if en else, en waarom accolades er toe doen
- Scope: een variabele bestaat enkel binnen de accolades waarin ze gemaakt is
- switch met case, break en default, en meerdere cases die samen dezelfde code delen
- Een eigen enum maken en gebruiken, een enum tonen op het scherm, een int naar een enum casten, en Enum.Parse om tekst naar een enum om te zetten

## Kent nog niet

- Lussen: while, do while, for. Iets drie keer doen betekent hier drie keer code onder elkaar
- Zelf methoden schrijven. Alles staat in Main
- Arrays, en dus ook lijsten van antwoorden of tabellen met waarden
- TryParse en het keyword out, try en catch. Foute invoer opvangen kan hij enkel met een if op de waarde nadien
- De string-methoden zoals Substring, Contains of Split. ToLower en ToUpper heeft hij nog niet gezien
- Klassen en objecten, en alles wat daarna komt

# Oefeningen

## BMI met if

### Nota

Dit bouwt verder op de BMI-oefening uit hoofdstuk 4. Die moet dus al werken.

### Aanpak

Eén keten van if, else if en else over de berekende BMI. Loop de grenzen van laag naar hoog af en test telkens enkel de bovengrens: doordat je in de vorige if niet binnenging, weet je de ondergrens al. De laatste categorie is een gewone else. Per categorie stel je eerst de kleur in en toon je dan de tekst.

### Valkuilen

- Ook de ondergrens testen en daarbij > gebruiken in plaats van >=, waardoor een exacte grenswaarde nergens uitkomt.
- Losse if-blokken schrijven in plaats van een keten, waardoor meerdere categorieën tegelijk verschijnen.
- De grenzen in de verkeerde volgorde testen.
- ResetColor vergeten.

## Schoenverkoper

### Nota

De oefening heeft drie fasen. Vraag eerst aan welke fase de student bezig is.

### Aanpak

De prijs valt in twee stukken uiteen: de eerste schoenen aan het volle tarief, de rest aan het kortingstarief. Bereken die twee apart en tel ze op. In fase 2 komt de grens uit de invoer in plaats van uit een vast getal. In fase 3 controleer je die ingevoerde grens eerst, en zet je hem terug op de standaardwaarde als hij buiten het toegelaten bereik ligt.

### Valkuilen

- Het volle tarief op alle schoenen toepassen en dan de korting op het totaal geven.
- De grens meerekenen aan het verkeerde tarief. Lees de voorbeelden goed: negen paar aan twintig euro.
- In fase 3 de controle na de berekening zetten.
- Twee losse if-testen gebruiken waar één met || volstaat.

## Ohm-berekenaar

### Aanpak

De gebruiker kiest eerst wat berekend moet worden. Dat is een keten van if en else if op die keuze, of een switch. Binnen elke tak vraag je de twee andere waarden en pas je de juiste vorm van de wet van Ohm toe. Voorzie ook een tak voor een keuze die niet bestaat.

### Valkuilen

- De drie vragen buiten de if zetten, waardoor er altijd drie waarden gevraagd worden.
- De formule omdraaien: spanning delen door weerstand geeft stroom, niet omgekeerd.
- De keuze vergelijken met = in plaats van ==.
- Vergeten dat hoofdletters meetellen bij het vergelijken van tekst.
- Geen else voorzien voor een verkeerde keuze.

## Orakeltje van Delphi, part deux

### Nota

Dit bouwt verder op het Orakeltje uit hoofdstuk 4.

### Aanpak

Eerst de twee vragen stellen. Dan bepaalt een if op het geslacht welke maximumleeftijd geldt. Het verschil tussen die maximumleeftijd en de huidige leeftijd is de bovengrens voor het willekeurige getal. Bereken die grens in een eigen variabele voor je hem aan Random meegeeft.

### Valkuilen

- Twee volledige Random-oproepen in de twee takken van de if zetten in plaats van enkel de grens te bepalen.
- De bovengrens van Next: die wordt zelf nooit gegeven, dus er moet één bij.
- Niets doen met een antwoord dat noch m noch v is.
- De leeftijd niet omzetten naar een getal.

## Casino

### Aanpak

Eerst het willekeurige getal trekken en bewaren, dan pas de gok vragen. Eén if die de twee vergelijkt, met een else voor het verlies. In de verliestekst toon je het getal dat de computer had.

### Valkuilen

- Het willekeurige getal opnieuw trekken bij het vergelijken, waardoor winnen bijna onmogelijk wordt.
- Bij Next 6 als bovengrens geven, waardoor er nooit een zes valt.
- De gok als tekst met een getal vergelijken.

## Casino 3

### Nota

Bouwt verder op Casino. Lussen kent hij nog niet, dus dit wordt een if in een if in een if.

### Aanpak

Enkel wie juist raadt, mag verder. Dus het tweede spel zit binnen de else-loze tak van het eerste, en het derde binnen dat van het tweede. Bij elke nieuwe beurt moet er een nieuw getal geworpen worden en opnieuw ingelezen worden. Elke fout antwoord eindigt in een else met dezelfde verliestekst.

### Valkuilen

- De drie beurten na elkaar zetten in plaats van in elkaar, waardoor je ook na een fout antwoord verder mag raden.
- Vergeten opnieuw te werpen voor de volgende beurt.
- De invoervariabele hergebruiken zonder ze opnieuw in te lezen.
- Verdwalen in de accolades. Laat hem eerst de structuur in woorden opschrijven.

## Schaakstuk

### Aanpak

Eerst de enum definiëren met alle stukken. De invoer van de gebruiker wordt met Enum.Parse omgezet naar dat type. Daarna een if die kijkt of beide stukken gelijk zijn: zo ja, één switch, zo niet, twee switches. Vandaar dat de opgave zegt dat je er drie nodig hebt.

### Valkuilen

- De enum-waarden tussen aanhalingstekens gebruiken alsof het tekst is.
- Vergeten dat Enum.Parse crasht op een naam die niet bestaat, en dat hoofdletters meetellen.
- De break in een case vergeten.
- Bij elke case de tekst opnieuw uittypen en zo tikfouten introduceren.

## Quiz

### Aanpak

Drie keer hetzelfde blok: de vraag en de vier antwoorden tonen, de keuze inlezen, en met een switch bepalen of het juist of fout is. Twee tellers die buiten die blokken staan houden juist en fout bij. Een switch mag meerdere cases samen laten vallen, dus alle foute letters kunnen dezelfde code delen. Tussen de vragen komt een pauze met ReadLine en een Clear.

### Valkuilen

- De tellers binnen een blok declareren, waardoor ze telkens terug op nul staan.
- De eindscore berekenen met de verkeerde formule. Juist telt dubbel, fout gaat er af.
- De Clear voor de ReadLine zetten, waardoor het antwoord voorbijflitst.
- Geen default voorzien, waardoor een gebruiker die iets anders typt noch juist noch fout is.
- ResetColor vergeten bij het kleuren van de vragen.

## Schrikkeljaar

### Aanpak

De regel bevat drie voorwaarden die je met modulo test. De opgave daagt uit om het in één if te doen: deelbaar door vier, en tegelijk ofwel niet deelbaar door honderd, ofwel wel deelbaar door vierhonderd. De haakjes rond dat tweede stuk bepalen alles.

### Valkuilen

- De haakjes weglaten, waardoor && en || in de verkeerde volgorde gecombineerd worden.
- Testen met = in plaats van ==, of vergeten dat deelbaar zijn betekent dat de rest nul is.
- De drie regels als losse if-blokken schrijven, waardoor 1900 alsnog een schrikkeljaar wordt.
- De vier voorbeelden uit de opgave niet natesten. Die zijn er net om alle gevallen te dekken.

## Kleurcode weerstand naar ohm

### Nota

De opgave vraagt uitdrukkelijk meerdere switch-statements: één per ring.

### Aanpak

De eerste twee ringen zijn cijfers, de derde is een vermenigvuldigingsfactor. Eén variabele houdt het resultaat bij: de eerste switch zet de tientallen, de tweede telt de eenheden erbij, de derde vermenigvuldigt. Werk met tien cases per switch en gebruik voor de factor Math.Pow.

### Valkuilen

- De eerste ring als eenheden behandelen in plaats van als tientallen.
- De derde switch laten optellen in plaats van vermenigvuldigen.
- Met een int werken, waardoor grote waarden overlopen.
- De break in een case vergeten.
- Hoofdletters in de ingevoerde kleurnaam, waardoor geen enkele case past.

## GuntherD Stemwijzer

### Aanpak

De afbeelding is een beslissingsboom. Elke vraag is een if met twee takken, en de volgende vraag zit binnen de tak waar je uitkomt. Laat de student eerst de boom natekenen en de vragen nummeren; het uittypen is dan mechanisch werk. Het resultaat bewaar je in een enum-variabele die je op het einde toont.

### Valkuilen

- Alle vragen na elkaar stellen in plaats van enkel de vragen op zijn tak.
- Verdwalen in de accolades. Inspringen helpt.
- Het antwoord vergelijken met "j" terwijl de gebruiker "ja" typt, of omgekeerd.
- Het profiel meteen tonen in elke tak in plaats van in een variabele te bewaren.

## Enum seizoenen

### Aanpak

Twee stappen die je niet mag mengen. Eerst een switch op het maandnummer die de enum-variabele een waarde geeft; meerdere maanden delen dezelfde case. Daarna een if op die enum-variabele die bepaalt of het koud of warm is. Voorzie ook een waarde voor een maandnummer dat niet bestaat.

### Valkuilen

- In de switch al tonen of het koud is, waardoor de enum-variabele nutteloos wordt.
- De enum-variabele geen startwaarde geven.
- Een default vergeten voor maand 13.
- De maanden per case herhalen in plaats van cases te laten samenvallen.

## Enum verkeerslicht

### Aanpak

De enum definiëren, de invoer met Enum.Parse omzetten, en een switch met een case per kleur. Dit is de kortste oefening van het hoofdstuk en vooral bedoeld om het patroon te oefenen.

### Valkuilen

- De ingetypte tekst rechtstreeks in de switch gebruiken in plaats van ze eerst om te zetten.
- Vergeten dat Enum.Parse crasht bij een naam die niet in de enum staat.
- De break vergeten.

## Enum bij BMI

### Nota

Dit is de BMI met if, herschreven met een enum. De vorige versie moet dus al werken.

### Aanpak

De keten van if en else if blijft, maar in plaats van meteen te tonen, geef je een enum-variabele de juiste categorie. Daarna toont een aparte switch de tekst en de kleur. Zo staat de beslissing op één plek en de weergave op een andere.

### Valkuilen

- De enum-waarden namen geven die niet overeenkomen met de categorieën uit de opgave.
- De if-keten laten staan en er de switch naast zetten zonder de variabele te gebruiken.
- De enum-variabele geen startwaarde geven.

## Schaak-Elo met if en Random

### Nota

Bouwt verder op de PRO-oefening Schaak-ELO uit hoofdstuk 4. Werkte die nog niet, dan is dat eerst aan de beurt.

### Aanpak

Twee stukken werk. Ten eerste de controle op een negatieve rating: dat is een if meteen na het inlezen, die een willekeurige waarde toekent en die toont. Dat gebeurt twee keer, één keer per speler. Ten tweede de uitslag: in plaats van drie scenario s te tonen, bepaalt een if op de ingevoerde letter welke punten elke speler krijgt, en pas daarna reken je één keer de nieuwe ratings uit.

### Valkuilen

- De controle na de berekening zetten.
- De nieuwe ratings binnen elke tak van de if opnieuw berekenen, terwijl enkel de punten verschillen.
- Bij een gelijkspel vergeten dat beide spelers een halve punt krijgen.
- Geen else voorzien voor een letter die niet bestaat.
- De verwachte scores berekenen voor de controle op negatieve ratings.

## Fifa ranking berekenen

### Nota

Een PRO-oefening. De formule staat in het document waar de opgave naar linkt, en die opzoeken hoort bij de oefening.

### Aanpak

Werk in drie fasen. Eerst de invoer: de twee ratings, dan een menu waaruit de gebruiker een letter kiest, en dan de uitslag als woord. Zowel de letter als het woord zet je met een switch om naar een getal. Pas als alle getallen bekend zijn, doe je de berekening, en die is één formule met Math.Pow. Toon tussenresultaten, dat maakt het nakijken veel makkelijker.

### Valkuilen

- Het menu tonen maar de letter niet omzetten naar de bijhorende waarde.
- De omzetting van de uitslag vergeten, waardoor er met tekst gerekend wordt.
- In de exponent delen door een geheel getal.
- Het minteken in de exponent vergeten.
- Alles in één lange formule proppen. Stap voor stap is hier veel veiliger.

## Oscars: The Academy kiest

### Nota

Dit is de Final Essential: enum, switch, if, Random en invoer komen samen.

### Aanpak

Eén variabele met de totaalscore die stap na stap groeit, precies in de volgorde van de opgave: beginnen bij de publieksscore, de regisseursbonus erbij, dan de aanpassing volgens genre via een switch, en dan de prestigebonus via een aparte if. Pas daarna bepaalt een keten van if en else if de uitslag. Bewaar elke bonus ook apart, want de uitvoer toont de berekening lijn per lijn.

### Valkuilen

- De prestigebonus in de switch stoppen. Die geldt voor elk genre en hoort in een eigen if.
- De grenzen van de uitslag verkeerd testen. Honderdvijftig zelf hoort bij de winnaar.
- De publieksscore opnieuw trekken bij het tonen, waardoor de berekening niet meer klopt met het totaal.
- De genre-aanpassing vergeten op te tellen bij het totaal.
- De sterren niet controleren op het bereik één tot vijf.
