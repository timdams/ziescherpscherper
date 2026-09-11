<!--
  Coach-data voor de oefeningen in oefeningen/5_beslissingen/.
  Zie oefeningen/_coach/_prompt.md voor het sjabloon en scripts/coach-prompt.mjs voor de werking.
-->

# Leerstof

## Kent al

Hoofdstuk 1 tot en met 3, de basis:

- Console.WriteLine en Write, Console.ReadLine, Console.Clear, de kleuren van de console en Console.ResetColor
- Datatypes (int, double, decimal, char, string, bool), variabelen, camel casing, const in hoofdletters
- Rekenen met + - * / en %, de volgorde van bewerkingen, de gehele deling die alles na de komma afkapt, ++ en +=
- Escape characters, string interpolatie en formattering zoals {getal:F2}, .Length op een string, Environment

Hoofdstuk 4, werken met data:

- Casting, int.Parse, double.Parse en decimal.Parse, de Convert-bibliotheek (het boek gebruikt liever Parse). Een kommagetal typt de gebruiker met een komma, in de code staat het met een punt
- Een char bewaart de Unicode-waarde van zijn teken
- De Math-bibliotheek: Pow, Sqrt, Abs, Max, Min, Clamp, Round, Ceiling, Floor en Math.PI. Math.Max(x, 0) geeft nooit iets kleiner dan 0, Math.Min(x, 100) nooit iets groter dan 100
- Afronden: Math.Round met bankers rounding, MidpointRounding.AwayFromZero, en het verschil tussen afronden (Math.Round) en enkel mooi tonen (F2)
- Een double bewaart niet elk kommagetal exact: 0.1 + 0.2 geeft 0,30000000000000004. Een double delen door 0 geeft oneindig, geen crash
- Random: één generator, dan Next of NextDouble. Next met twee getallen gaat tot en met het tweede min één. Next crasht als de bovengrens kleiner is dan de ondergrens. Een seed geeft telkens dezelfde reeks
- Een lopende som bijhouden met +=
- Debuggen met breakpoints (F9), Step Over (F10) en het venster Locals

Hoofdstuk 5, beslissingen:

- Relationele operatoren (>, <, ==, !=, <=, >=), die altijd een bool opleveren. Een bool kan je bewaren: bool isGeslaagd = punten >= 50;
- == op tekst is hoofdlettergevoelig: "Ja" is niet "ja". < en > werken niet op tekst. == gebruik je niet op kommagetallen na een berekening
- Logische operatoren && (en), || (of) en ! (niet), met waarheidstabellen. && gaat voor ||, dus haakjes zetten. De wetten van De Morgan. Kortsluiten: C# stopt zodra het resultaat vastligt
- if, else if en else. Zonder accolades hoort enkel de eerste lijn bij de if. Een puntkomma na de if sluit hem af. Een else heeft nooit een voorwaarde
- In een else-if-keten telt de volgorde: de eerste test die waar is, wint. Test daarom enkel de bovengrens
- De ternaire operator: voorwaarde ? waarde1 : waarde2
- Nesting: een if binnen een if
- Scope: een variabele bestaat enkel binnen de accolades waarin ze gemaakt is. Een variabele die vóór een if gedeclareerd wordt, krijgt best meteen een beginwaarde, anders geeft de compiler Use of unassigned local variable
- switch met case, break en default, meerdere cases die dezelfde code delen, en switch op tekst en op een enum
- Een eigen enum maken (binnen class Program, buiten Main), een enum-waarde schrijven als Type.Waarde, een enum tonen op het scherm, casten van en naar int, en + 1 op een enum. Een cast controleert niet of er een naam bij het getal hoort
- Enum.Parse<Type>(tekst) om tekst naar een enum om te zetten, en Enum.Parse<Type>(tekst, true) om hoofdletters te negeren. Enum.Parse crasht op een naam die niet bestaat

## Kent nog niet

- Lussen: while, do while, for. Iets drie keer doen betekent hier drie keer code onder elkaar, of een if in een if
- Zelf methoden schrijven. Alles staat in Main, ook als dat dubbele code geeft
- Arrays, en dus ook lijsten van antwoorden of tabellen met waarden
- TryParse en het keyword out, try en catch. Foute invoer opvangen kan hij enkel met een if op de waarde nadien
- De string-methoden zoals ToLower, ToUpper, Substring, Contains of Split. Hoofdletters opvangen kan hij enkel met meerdere cases of met Enum.Parse met true
- De switch-expressie en pattern matching
- Klassen en objecten, en alles wat daarna komt

# Oefeningen

## Casino

### Nota

De oefening heeft twee delen. Deel 2 is de vroegere oefening Casino 3. Vraag eerst aan welk deel de student bezig is.

### Aanpak

Deel 1: eerst het willekeurige getal trekken en bewaren, dan pas de gok vragen. Eén if die de twee vergelijkt, met een else voor het verlies. In de verliestekst toon je het getal dat de computer had. Deel 2: enkel wie juist raadt, mag verder. Lussen kent hij nog niet, dus de tweede beurt zit binnen de if van de eerste, en de derde binnen die van de tweede. Bij elke beurt wordt er opnieuw geworpen en opnieuw ingelezen. Wie het winnende pad wil testen, zet een breakpoint op de ReadLine en kijkt in Locals naar de worp.

### Valkuilen

- Het willekeurige getal opnieuw trekken bij het vergelijken, waardoor het getal in de verliestekst een ander is.
- Bij Next 6 als bovengrens geven, waardoor er nooit een zes valt.
- De gok als tekst met een getal vergelijken.
- In deel 2 de drie beurten na elkaar zetten in plaats van in elkaar, waardoor je ook na een fout antwoord verder mag raden.
- Vergeten opnieuw te werpen of opnieuw in te lezen voor de volgende beurt.
- Verdwalen in de accolades. Laat hem eerst de structuur in woorden opschrijven.

## Orakeltje van Delphi, part deux

### Nota

Dit bouwt verder op het Orakeltje uit hoofdstuk 4.

### Aanpak

Eerst de twee vragen stellen. Dan een if die kijkt of het antwoord m of v is. Is het dat niet, dan begrijpt het orakel het niet. Anders bepaalt een tweede if welke maximumleeftijd geldt. Het verschil tussen die maximumleeftijd en de leeftijd is wat er nog rest; bewaar het in een eigen variabele. Rest er minder dan 5, dan zwijgt het orakel. Anders gaat die rest, plus één, als bovengrens naar Next.

### Valkuilen

- De bovengrens van Next: die wordt zelf nooit gegeven, dus er moet één bij.
- Het geval vergeten waarin er geen 5 jaar meer rest. Dan crasht Next, want de bovengrens is kleiner dan de ondergrens. Laat hem testen met een man van 115, 116 en 117.
- Testen of het antwoord geen m of geen v is met || in plaats van &&, waardoor elk antwoord fout is.
- Alles wat geen m is als vrouw behandelen, waardoor ook een M of een typfout de vrouwenformule krijgt.
- Twee volledige Random-oproepen in de takken zetten in plaats van enkel de grens te bepalen.

## BMI met if

### Nota

Dit bouwt verder op de BMI berekenaar uit hoofdstuk 4. Die moet dus al werken.

### Aanpak

Eén keten van if, else if en else over de berekende BMI. Loop de grenzen van laag naar hoog af en test telkens enkel de bovengrens: doordat je in de vorige if niet binnenging, weet je de ondergrens al. De laatste categorie is een gewone else. Per categorie stel je eerst de kleur in en toon je dan de tekst. Testen kan met een lengte van 100 cm: dan is de BMI gelijk aan het gewicht.

### Valkuilen

- Ook de ondergrens testen en daarbij > gebruiken in plaats van >=, waardoor een exacte grenswaarde nergens uitkomt.
- Losse if-blokken schrijven in plaats van een keten, waardoor meerdere categorieën tegelijk verschijnen.
- De grenzen in de verkeerde volgorde testen.
- De afgeronde BMI testen in plaats van de echte. Bij 180 cm en 80,99 kg toont het scherm 25, maar de echte BMI is kleiner dan 25; de opgave test de echte waarde.
- ResetColor vergeten.

## Voorspel de uitvoer

### Nota

Een code-lees-oefening. De student schrijft eerst op papier wat er verschijnt en voert de code pas daarna uit. Geef nooit de uitvoer van een stukje, ook niet gedeeltelijk. Vraag welke lijn hij verwacht en waarom, en laat hem zelf vergelijken met wat het programma toont.

### Aanpak

Stukje per stukje. Bij de keten: welke test is als eerste waar? Zonder accolades: welke lijnen horen bij de if? Bij de puntkomma: wat staat er tussen de if en de puntkomma? Bij de tekst: wat typte de programmeur en wat staat er in de variabele? Bij && en ||: welke operator gaat voor? Bij de ternaire operator: werk eerst de haakjes uit, dan de !. Bij de switch: wat is punten / 10 met twee ints? Bij 0.1 + 0.2: wat weet hij nog uit hoofdstuk 4?

### Valkuilen

- Denken dat een else-if-keten alle tests afgaat en de laatste ware test wint.
- Denken dat inspringen bepaalt wat bij de if hoort.
- De puntkomma na de if over het hoofd zien.
- Denken dat == op tekst hoofdletters negeert.
- De uitdrukking met && en || van links naar rechts lezen.
- Vergeten dat punten / 10 een gehele deling is.

## Stevens ticketprijs

### Nota

Een zoek-de-fout-oefening met stagiair Steven. Geef de fouten nooit, ook niet welke leeftijden fout gaan. In deel 1 laat je hem de testtabel zelf invullen, eerst met de regels, dan met wat het programma toont. In deel 2 mag je uitleggen wat een foutmelding van de compiler betekent, maar niet waar ze vandaan komt in deze code.

### Aanpak

Deel 1: voor elke leeftijd uit de opgave de juiste prijs opzoeken in de regels, en daarna het programma uitvoeren. Waar de twee verschillen, kijk je naar de test: staat daar > of >=? Daarna één keten van if en else if die enkel de bovengrens test, van jong naar oud, met een else voor de laatste groep. Deel 2: de eerste melding gaat over scope, de tweede over een variabele die niet in elke tak een waarde krijgt. Welke tak wordt uitgevoerd voor iemand van 40? De mooiste oplossing berekent de korting één keer, na de keten.

### Valkuilen

- Enkel met leeftijden midden in een groep testen, zoals Steven.
- In deel 1 de losse ifs laten staan en enkel > in >= veranderen. Dat werkt, maar de opgave vraagt een keten die enkel de bovengrens test.
- In deel 2 denken dat de eerste melding een tikfout is.
- De tweede melding oplossen door in de keten een extra else toe te voegen die korting 0 geeft. Dat werkt, maar de berekening staat dan nog altijd op vier plaatsen.

## Schoenverkoper

### Nota

De oefening heeft drie delen en een uitdaging zonder if. Vraag eerst aan welk deel de student bezig is.

### Aanpak

De prijs valt in twee stukken uiteen: de eerste schoenen aan het volle tarief, de rest aan het kortingstarief. Bereken die twee apart en tel ze op. In deel 2 komt de grens van de kassier in plaats van uit een vaste waarde. In deel 3 controleer je die ingevoerde grens eerst, en zet je hem terug op 9 als hij buiten 3 tot en met 10 ligt. De uitdaging: Math.Min van het aantal en 9 geeft het aantal aan het volle tarief, Math.Max van de rest en 0 het aantal aan het kortingstarief.

### Valkuilen

- Het volle tarief op alle schoenen toepassen en dan de korting op het totaal geven.
- De grens meerekenen aan het verkeerde tarief. Lees de voorbeelden goed: negen paar aan twintig euro.
- In deel 3 de controle na de berekening zetten.
- Twee losse if-testen gebruiken waar één met || volstaat.
- In deel 3 opnieuw willen vragen tot de invoer goed is. Dat kan pas met een lus; de opgave vraagt om de standaardwaarde te nemen.

## Pretparkpoort

### Nota

Een puzzel: de student zet gegeven lijnen in de juiste volgorde en zoekt de indringer. Geef nooit de volgorde of de indringer. Vraag wat er moet gebeuren met iemand van 95 cm en welke test die persoon als eerste moet tegenkomen.

### Aanpak

Welke lijn moet er zeker als eerste staan? Een keten begint altijd met if en eindigt met een else zonder voorwaarde. De tests gaan van de kleinste grens naar de grootste, en elke WriteLine hoort bij de test erboven. Daarna de accolades. Voor de indringer: mag er achter else een voorwaarde staan? Testen met 95, 100, 119, 120, 139 en 140.

### Valkuilen

- De tests van groot naar klein zetten, waardoor iedereen onder 140 cm bij de kinderattracties terechtkomt.
- Denken dat de indringer de gewone else is.
- De accolades vergeten, zodat een WriteLine buiten de if valt.

## Schrikkeljaar

### Aanpak

De regel bevat drie voorwaarden die je met modulo test. De opgave daagt uit om het in één if te doen: deelbaar door vier, en tegelijk ofwel niet deelbaar door honderd, ofwel wel deelbaar door vierhonderd. De haakjes rond dat tweede stuk bepalen alles. In deel 2 komt het resultaat van die test in een bool, en kiest de ternaire operator het woord een of geen.

### Valkuilen

- De haakjes weglaten, waardoor && en || in een andere volgorde gecombineerd worden dan bedoeld.
- Testen met = in plaats van ==, of vergeten dat deelbaar zijn betekent dat de rest nul is.
- De drie regels als losse if-blokken schrijven, waardoor 1900 alsnog een schrikkeljaar wordt.
- De vier voorbeelden uit de opgave niet natesten. Die zijn er net om alle gevallen te dekken.
- In deel 2 met de ternaire operator een WriteLine proberen uit te voeren. Ze levert enkel een waarde op.

## Ohm-berekenaar

### Aanpak

De gebruiker kiest eerst wat berekend moet worden. Dat is een keten van if en else if op die keuze. Binnen elke tak vraag je de twee andere waarden en pas je de juiste vorm van de wet van Ohm toe. Voorzie een else voor een keuze die niet bestaat. In deel 2 komt er in de tak van de stroomsterkte een if op een weerstand van 0.

### Valkuilen

- De drie vragen buiten de if zetten, waardoor er altijd drie waarden gevraagd worden.
- De formule omdraaien: spanning gedeeld door weerstand geeft stroomsterkte, niet omgekeerd.
- De keuze vergelijken met = in plaats van ==.
- De keuze met een hoofdletter typen. De opgave zegt kleine letters.
- Geen else voorzien voor een verkeerde keuze.
- In deel 2 schrikken van == op een double. Hier mag het: de 0 komt rechtstreeks van de gebruiker, zonder berekening.

## Stemwijzer

### Aanpak

De figuur is een beslissingsboom. Elke vraag is een if met twee takken, en de volgende vraag zit binnen de tak waar je uitkomt. Laat de student eerst de boom natekenen en de vragen nummeren; het uittypen is dan mechanisch werk. Het resultaat bewaar je in een string die je op het einde één keer toont. Eén variabele voor het antwoord volstaat, want elk antwoord is enkel nodig voor de if die erop volgt.

### Valkuilen

- Alle vragen na elkaar stellen in plaats van enkel de vragen op zijn pad.
- Verdwalen in de accolades. Inspringen helpt.
- Het antwoord vergelijken met "ja" terwijl de gebruiker "j" typt, of testen op "n" en daardoor een typfout als ja rekenen. De opgave zegt: alles wat geen j is, telt als nee.
- Het profiel meteen tonen in elke tak in plaats van het in een variabele te bewaren.
- Een tak van de boom verwisselen. Laat hem elk pad afzonderlijk testen.

## Quiz

### Aanpak

Drie keer hetzelfde blok: de vraag en de vier antwoorden tonen, de keuze inlezen, en met een switch bepalen of het juist of fout is. Twee tellers die buiten die blokken staan, houden juist en fout bij. Een switch mag meerdere cases samen laten vallen, dus de foute letters delen dezelfde code. De default vangt al de rest op en telt als fout. Tussen de vragen komt een pauze met ReadLine en een Clear.

### Valkuilen

- De tellers binnen een blok declareren, waardoor ze telkens terug op nul staan.
- De eindscore berekenen met de verkeerde formule. Juist telt dubbel, fout gaat er af.
- De Clear voor de ReadLine zetten, waardoor het antwoord voorbijflitst.
- Geen default voorzien, waardoor een gebruiker die B typt noch juist noch fout is.
- ResetColor vergeten na juist of fout.

## Kleurcode weerstand naar ohm

### Nota

De opgave vraagt uitdrukkelijk meerdere switch-statements: één per ring. De tabel met de kleuren staat in de opgave.

### Aanpak

De eerste twee ringen zijn cijfers, de derde is een vermenigvuldiger. Eén variabele houdt de waarde bij: de eerste switch zet de tientallen, de tweede telt de eenheden erbij, de derde vermenigvuldigt. Werk met tien cases per switch; voor de grote vermenigvuldigers is Math.Pow handig.

### Valkuilen

- De eerste ring als eenheden behandelen in plaats van als tientallen.
- De derde switch laten optellen in plaats van vermenigvuldigen.
- Met een int werken, waardoor wit-wit-wit overloopt.
- De break in een case vergeten.
- Hoofdletters in de ingevoerde kleurnaam, waardoor geen enkele case past en er stilletjes een verkeerde waarde verschijnt.

## Enum verkeerslicht

### Aanpak

De enum definiëren binnen class Program en buiten Main, de invoer met Enum.Parse omzetten, en een switch met een case per kleur. Dit is de kortste oefening van het enum-blok en vooral bedoeld om het patroon te oefenen.

### Valkuilen

- De enum binnen Main zetten. De compiler geeft dan een reeks vreemde fouten.
- De ingetypte tekst rechtstreeks in de switch gebruiken in plaats van ze eerst om te zetten.
- In een case enkel Groen schrijven in plaats van Verkeerslicht.Groen.
- Schrikken als het programma crasht op groen met een kleine letter. De opgave zegt dat dat mag.
- De break vergeten.

## Enum seizoenen

### Nota

De oefening heeft twee delen. In deel 2 moet de student zelf ontdekken dat na de herfst Onbekend komt. Zeg dat niet op voorhand; laat hem testen met maand 11.

### Aanpak

Twee stappen die je niet mag mengen. Eerst een switch op het maandnummer die de enum-variabele een waarde geeft; meerdere maanden delen dezelfde case, en de default geeft Onbekend. Daarna een if op die enum-variabele die bepaalt of het koud of warm is. In deel 2 geeft huidigSeizoen + 1 het volgende seizoen, behalve na de herfst en bij Onbekend: die twee vang je op met een if.

### Valkuilen

- In de switch al tonen of het koud is, waardoor de enum-variabele nutteloos wordt.
- De enum-variabele geen beginwaarde geven.
- Een default vergeten voor maand 13.
- De maanden per case herhalen in plaats van cases te laten samenvallen.
- In deel 2 denken dat een enum na de laatste waarde vanzelf opnieuw bij de eerste begint.

## Enum bij BMI

### Nota

Dit is BMI met if, herschreven met een enum. De vorige versie moet dus al werken.

### Aanpak

De keten van if en else if blijft, maar in plaats van meteen te tonen, geef je een enum-variabele de juiste categorie. Daarna toont een aparte switch de tekst en de kleur. Zo staat de beslissing op één plek en de weergave op een andere.

### Valkuilen

- De enum-waarden namen geven die niet overeenkomen met de categorieën uit de opgave.
- De if-keten laten staan en er de switch naast zetten zonder de variabele te gebruiken.
- De enum-variabele geen beginwaarde geven.
- ResetColor vergeten.

## Schaakstuk

### Aanpak

Eerst de enum met de zes stukken. De invoer wordt met Enum.Parse en true omgezet, zodat hoofdletters geen rol spelen. Daarna twee switches, één per stuk, die elk een string vullen met hoe het stuk beweegt. Pas daarna beslist één if of beide stukken gelijk zijn, en toont het programma één of twee zinnen.

### Valkuilen

- De enum-waarden tussen aanhalingstekens gebruiken alsof het tekst is.
- Enum.Parse zonder true gebruiken, waardoor toren crasht.
- De zinnen al in de switch tonen, waardoor er drie switches nodig zijn: één voor gelijke stukken en twee voor verschillende.
- De break in een case vergeten.
- Bij elke case de tekst opnieuw uittypen en zo tikfouten introduceren. Dat de twee switches dubbele code zijn, klopt; methoden komen in hoofdstuk 7.

## Oscars: The Academy kiest

### Nota

Dit is de Final Essential: enum, switch, if, Random en invoer komen samen.

### Aanpak

Eerst de invoer: het genre via Enum.Parse met true, de sterren met een controle op 1 tot en met 5. Dan één variabele met de totaalscore die stap na stap groeit, in de volgorde van de opgave: de publieksscore, de regisseursbonus erbij, de genrebonus via een switch, en de prestigebonus via een aparte if. Bewaar elke bonus ook apart, want de uitvoer toont de berekening lijn per lijn. Het plusteken voor een positieve genrebonus kan met de ternaire operator. Pas daarna bepaalt een keten van if en else if de uitslag.

### Valkuilen

- Het genre als nummer inlezen en casten. Dan wordt 7 een genre zonder naam, en de opgave vraagt Enum.Parse.
- De prestigebonus in de switch stoppen. Die geldt voor elk genre en hoort in een eigen if.
- De grenzen van de uitslag verkeerd testen. 150 zelf hoort bij de winnaar.
- De publieksscore opnieuw trekken bij het tonen, waardoor de berekening niet meer klopt met het totaal.
- De genrebonus vergeten op te tellen bij het totaal.
- De controle op de sterren na de berekening zetten.

## Schaak-Elo met if en Random

### Nota

Een PRO-oefening die verderbouwt op de PRO-oefening Schaak-ELO uit hoofdstuk 4. Werkte die nog niet, dan is dat eerst aan de beurt.

### Aanpak

Twee stukken werk. Ten eerste de controle op een negatieve rating: een if meteen na het inlezen, die een willekeurige waarde van 500 tot en met 3000 toekent en toont. Dat gebeurt twee keer, één keer per speler. Ten tweede de uitslag: de scores van beide spelers starten op een gelijkspel, een keten van if en else if past ze aan bij A of B, en de laatste else if vangt een onbekende letter op. Pas daarna reken je één keer de nieuwe ratings uit.

### Valkuilen

- De controle na de berekening van de verwachte scores zetten.
- De nieuwe ratings binnen elke tak van de if opnieuw berekenen, terwijl enkel de scores verschillen.
- Bij een gelijkspel vergeten dat beide spelers een halve punt krijgen.
- Een kleine d niet opvangen. Die is geen D en valt dus bij de onbekende uitslag.
- Bij Next 3000 als bovengrens geven, waardoor 3000 zelf nooit valt.
