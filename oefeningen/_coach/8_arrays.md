<!--
  Coach-data voor de oefeningen in oefeningen/8_arrays/ (week 1 en week 2).
  Wordt door scripts/coach-prompt.mjs samengevoegd met _prompt.md tot de prompt achter de
  coach-knop. De opgave zelf staat hier niet in: die haalt het script uit de pagina zelf.

  De titels onder "# Oefeningen" moeten overeenkomen met de titels van de oefeningen op de
  pagina. De aanduiding (*Essential*) mag je weglaten. Staat een oefening hier niet, dan
  krijgt ze geen knop en waarschuwt het script.
-->

# Leerstof

## Kent al

Hoofdstuk 1 tot en met 7, de basis:

- Console.WriteLine, Console.Write en Console.ReadLine, Console.Clear, de kleuren van de console en ResetColor
- Variabelen en datatypes (int, double, decimal, bool, char, string), camel casing, const in hoofdletters, rekenen met + - * / %, de gehele deling die afkapt, ++ en +=
- Tekst: escape characters zoals \n en \t, string interpolatie met $"..." en formattering zoals {getal:F2}, .Length op een string
- Converteren: casting, int.Parse en double.Parse. De Math-bibliotheek (Pow, Sqrt, Round, Ceiling, Floor, Min, Max). Random met Next en NextDouble. Debuggen met breakpoints en Locals
- Beslissingen: relationele en logische operatoren, if, else if, else, de ternaire operator, scope, switch, enum en Enum.Parse
- Herhalingen: while, do while, for, geneste loops. continue mag niet, break enkel in een switch of bij zoek-en-stop
- Methoden: static, void en een returntype, return (ook return; in een void-methode), parameters by value, named en optionele parameters, overloading. De huisregel van de oefeningen: enkel een methode die Toon... of Vraag... heet, mag WriteLine of ReadLine gebruiken

Hoofdstuk 8, arrays:

- Arrays aanmaken met new of met accolades, index vanaf 0, .Length, een array vullen en overlopen met een for. Een nieuwe array staat vol met de defaultwaarde (0, false, null bij string). Buiten de array grijpen geeft een IndexOutOfRangeException
- Opstartparameters via string[] args, en eerst args.Length testen
- Arrays zijn reference types: toekennen kopieert de wegwijzer, niet de inhoud. Een echte kopie maak je met een lus of met Array.Copy
- System.Array: Array.Sort, Array.Reverse, Array.Clear, Array.Copy, Array.IndexOf (geeft -1 als het element er niet in staat) en Array.BinarySearch (enkel op een gesorteerde array)
- De patronen: alles overlopen en een som of teller bijhouden, het grootste of kleinste zoeken (startwaarde het eerste element, niet 0), zoeken en stoppen, en twee synchrone arrays met dezelfde index
- Een string per teken lezen met een index, char.IsDigit, IsLetter, IsUpper, IsLower, IsWhiteSpace, ToUpper en ToLower (op het type char, met het teken tussen de haakjes). Een string wijzigen kan niet: via ToCharArray en new string(...). String-methoden geven altijd een nieuwe string terug: Trim, ToUpper, ToLower, Replace, IndexOf, Contains, Substring, Remove. Split en string.Join
- Een array als parameter (de methode werkt op het origineel), een array als returntype, en params. Een parameter die in de methode een nieuwe array krijgt, verandert niets bij de aanroeper
- Meerdimensionale arrays met [,], aangesproken met [rij, kolom], met GetLength(0) en GetLength(1), overlopen met twee geneste for-loops, en meegegeven aan een methode. Jagged arrays moet hij enkel herkennen
- Een char is intern een getal: 'D' - 'A' geeft 3, (char)('A' + 3) geeft D

## Kent nog niet

- foreach. Dat komt pas in hoofdstuk 12. Overlopen doet hij met een for en een index
- Klassen, objecten en instantievariabelen. Alles staat in Main of in een static methode, en samenhorende gegevens staan in synchrone arrays
- List, Dictionary en andere collecties. Enkel arrays met een vaste lengte
- LINQ en methoden zoals .Sum(), .Average(), .Max(), .OrderBy(), .Where() of .Distinct() op een array. Die kosten punten
- var, switch expressions, pattern matching, lambdas, tuples
- try, catch en exceptions zelf opvangen. Een crash is hier gewoon een crash
- TryParse, out en ref, nullable types (string?, int?), StringBuilder, PadLeft en generics

# Oefeningen

## Opwarmers

### Nota

Negen korte deeloefeningen. Vraag eerst aan welke de student bezig is. De laatste is een voorspel-oefening: geef daar het antwoord niet, vraag wat een nieuwe array bevat voor je er iets in zet.

### Aanpak

Telkens een array van de juiste lengte en een for die over de indexen loopt, van 0 tot Length min één. Vullen en tonen in aparte lussen. Bij de vrienden staan de labels in een tweede array op dezelfde index. Bij de schooltypes cast je een willekeurig getal naar de enum en tel je met een switch.

### Valkuilen

- De lus tot en met Length laten lopen, wat een IndexOutOfRangeException geeft.
- De waarde gelijkstellen aan de index terwijl de opgave bij 1 begint.
- Bij de even getallen de lengte verkeerd kiezen.
- Bij de doubles het gemiddelde delen door een vast getal in plaats van door Length.
- Denken dat een nieuwe string-array lege teksten bevat. Er staat null in.

## Vraag Array

### Aanpak

Twee synchrone arrays: de vragen (string) en de antwoorden (int), even lang. Eén lus die vraag i toont en het antwoord in antwoorden[i] bewaart. Daarna een tweede lus die vraag en antwoord samen toont.

### Valkuilen

- De tweede array een andere lengte geven dan de eerste.
- Het antwoord niet omzetten naar een int.
- Alles in één lus doen, waardoor de vragen en de antwoorden niet samen op het einde verschijnen.
- De vragen hard in WriteLine zetten in plaats van ze in de array te bewaren.

## Array Zoeker

### Nota

Twee delen. Deel 2 is een puzzel over de grens van de opschuiflus; geef niet welke lus de juiste is, vraag welk element er in de laatste ronde gelezen wordt.

### Aanpak

Eerst tien getallen inlezen. Dan de index zoeken van het eerste voorkomen, met een lus die stopt zodra het gevonden is. Is het gevonden, dan schuift een tweede lus alles vanaf die index één plaats naar links, en krijgt de laatste plaats -1. Op het einde de array tonen.

### Valkuilen

- De opschuiflus tot Length laten lopen: dan leest getallen[i + 1] buiten de array.
- Alle voorkomens verwijderen in plaats van enkel het eerste.
- De laatste plaats op -1 zetten ook als het getal niet gevonden werd.
- Van achter naar voor schuiven, waardoor waarden overschreven worden voor ze verplaatst zijn.

## LeveringsBedrijf

### Aanpak

Twee synchrone arrays: postcodes en prijs per kg, op dezelfde index. Zoek de index van de postcode, en gebruik die index in de prijsarray. Het zoeken kan met een eigen lus of met Array.IndexOf, die -1 geeft als de postcode er niet in staat.

### Valkuilen

- De index niet controleren, en dan met index -1 of voorbij het einde in de prijsarray lezen.
- De postcodes sorteren om sneller te zoeken, waardoor de prijzen niet meer bij de juiste gemeente horen.
- De foutmelding in de lus zelf tonen, bij elke postcode die niet past.
- Een postcode twee keer in de array zetten.

## Podium

### Aanpak

Maak met Array.Copy een echte kopie van de tijden en sorteer die. De eerste drie van de kopie zijn de snelste tijden. Zoek elke tijd met Array.IndexOf op in de originele array: die index hoort nog bij de juiste naam. Voor de rode lantaarn draai je de kopie om met Array.Reverse.

### Valkuilen

- De originele tijden sorteren, waardoor ze niet meer bij de namen horen.
- Een kopie maken met int[] kopie = tijden; dat kopieert enkel de wegwijzer.
- De kopie niet eerst aanmaken met new en de juiste lengte voor Array.Copy.
- In de gesorteerde kopie zoeken in plaats van in het origineel.
- Twee gelijke tijden: IndexOf vindt dan twee keer dezelfde renner.

## Stevens warmste stad

### Nota

Een zoek-de-fout-oefening met stagiair Steven. Geef de fouten nooit. In deel 1 vraag je welke index er in de laatste ronde van de eerste lus gebruikt wordt. In deel 2 vraag je wat warmste is als het overal vriest, en of steden mee gesorteerd wordt met temperaturen.

### Aanpak

Deel 1: de lus loopt één ronde te ver. Deel 2: het maximum start op een waarde die niet in de array staat, en na Array.Sort horen de temperaturen niet meer bij de steden. De oplossing zoekt de index van het maximum, met het eerste element als start, en gebruikt die index in beide arrays.

### Valkuilen

- Enkel de crash oplossen en denken dat het klaar is.
- warmste op een kleine waarde zoals -100 zetten. Dat werkt hier, maar het eerste element is de nette start.
- Beide arrays apart sorteren en denken dat ze dan weer samen horen.

## Puzzelen met arrays

### Nota

Zes puzzels, de laatste twee zijn PRO. Vraag eerst aan welke de student bezig is. Array.Sort mag, Array.Reverse en Array.BinarySearch niet: het verplaatsen doet hij zelf.

### Aanpak

Eerst de getallen in volgorde inlezen, dan de array puzzelen. Omgekeerd tonen is een lus die aftelt. Verschuiven is twee lussen na elkaar, of één lus met een index die met % terug naar 0 springt. Puzzel 5: elke rij van drie naar een hulparray kopiëren en die sorteren. Puzzel 6: elke kolom (index kolom, kolom + 3, kolom + 6, ...) naar een hulparray, sorteren, en terugzetten.

### Valkuilen

- De getallen al in de verkeerde volgorde inlezen in plaats van ze nadien anders te tonen.
- Bij het verschuiven buiten de array grijpen omdat de index niet met % rondloopt.
- In puzzel 5 de hele array sorteren in plaats van per rij.
- In puzzel 6 rij en kolom verwarren bij het berekenen van de index.
- Array.Reverse gebruiken, wat hier niet mag.

## Havenmanifest

### Nota

Dit is de Final Essential van week 1: synchrone arrays, een som, een gemiddelde en zoeken.

### Aanpak

Twee arrays van dezelfde lengte, een for die beide vult. Een lus die het manifest toont, een lus die het totaal optelt, en het gemiddelde is het totaal gedeeld door Length. Het zoeken geeft een index, of -1 als de code er niet in staat, met een eigen lus of met Array.IndexOf. Die index gebruik je in de gewichtenarray.

### Valkuilen

- De lengte op meerdere plaatsen hard als 3 schrijven in plaats van één constante of Length te gebruiken.
- Het gemiddelde afronden in de berekening in plaats van enkel bij het tonen.
- Tijdens het zoeken bij elke container die niet past al "staat nergens" tonen.
- De index van de code niet op -1 controleren voor je hem gebruikt.

## Opstartparameters

### Nota

Een bonusoefening. Opstartparameters geeft hij in Visual Studio mee via Debug, Debug Properties, Command line arguments.

### Aanpak

args is een string[] met één element per woord na de programmanaam. Test eerst args.Length. Deel 1: elk element omzetten en optellen. Deel 2: het eerste element is de bewerking, het tweede de startwaarde, en de rest wordt erbij geteld of mee vermenigvuldigd. Test in de goede volgorde: eerst de lengte, dan args[0].

### Valkuilen

- args[0] lezen zonder eerst te controleren of er argumenten zijn.
- In de &&-test args[0] vóór args.Length zetten.
- Vergeten dat de argumenten tekst zijn en eerst omgezet moeten worden.
- Bij maal starten met 0 in plaats van met het eerste getal.

## Snelle invoer

### Nota

Drie delen: een vraagmethode met Split, tonen met string.Join, en een zin omdraaien.

### Aanpak

Deel 1: VraagGetallen leest één lijn, Split(' ') geeft een string[], en een int[] van dezelfde lengte krijgt de omgezette stukken. De methode geeft die array terug. Deel 2: string.Join met een scheidingsteken. Deel 3: de zin splitsen, de woordenarray omdraaien en terug samenvoegen.

### Valkuilen

- De int[] een vaste lengte geven in plaats van de lengte van de gesplitste array.
- De stukken niet omzetten naar int voor je ermee rekent.
- Split op een komma terwijl de gebruiker spaties typt, of omgekeerd.
- Join proberen op te roepen als zin.Join in plaats van string.Join.

## Bob

### Aanpak

Drie vragen over de zin. Zeg je iets? Trim de zin en kijk of er iets overblijft. Is het een vraag? Kijk naar het laatste teken van de getrimde zin. Roep je? Loop over alle tekens en onthoud of er een hoofdletter en of er een kleine letter was. De antwoorden staan in een string[], en een methode geeft de index van het juiste antwoord terug. Test een geroepen vraag vóór een gewone vraag.

### Valkuilen

- Enkel naar de laatste tekens kijken om te bepalen of er geroepen wordt.
- Denken dat 1, 2, 3 geroepen is omdat er geen kleine letters in staan. Er moet ook minstens één hoofdletter zijn.
- zin.Trim() oproepen zonder het resultaat op te vangen.
- Het laatste teken lezen van een lege string, wat crasht. Eerst testen of er iets overblijft.
- char.IsUpper als teken.IsUpper() schrijven.

## Hamming distance

### Aanpak

Eerst controleren: zijn de twee strings even lang, en bestaan ze enkel uit G, A, C en T? Dan één lus over de posities die telt waar de tekens verschillen. Een string lees je zoals een array, dus dna1[i] is een char.

### Valkuilen

- Tekens vergelijken met dubbele aanhalingstekens ("G") in plaats van enkele ('G').
- & schrijven in plaats van && in de controle.
- De afstand berekenen voor de lengte gecontroleerd is, wat bij verschillende lengtes crasht.
- || gebruiken in de controle op geldige letters, waardoor elke letter ongeldig is.

## Caesar-encryptie

### Aanpak

Werk teken per teken. Is het een hoofdletter, dan is zijn index teken - 'A', de nieuwe index is (index + sleutel) % 26, en het nieuwe teken 'A' plus die index. Voor kleine letters hetzelfde met 'a'. Al de rest blijft staan. Een string kan je niet wijzigen: ToCharArray, aanpassen, new string. Ontcijferen is verschuiven met (index - sleutel + 26) % 26, of versleutelen met 26 min de sleutel.

### Valkuilen

- Met de getallen 65, 97 of 122 rekenen in plaats van met 'A' en 'a'.
- De % 26 vergeten, waardoor na de Z vreemde tekens verschijnen.
- Bij het ontcijferen een negatieve index krijgen: % op een negatief getal blijft negatief.
- Ook spaties en leestekens verschuiven.
- tekst[i] = ... proberen op een string.

## Array Viewer

### Nota

Twee delen: de methode, en daarna een params-parameter.

### Aanpak

Een lus over alle elementen. Na elk element komt een tab, behalve na het laatste: test of i nog kleiner is dan Length min één. Na de lus een WriteLine. Deel 2: enkel params voor de parameter zetten.

### Valkuilen

- Het laatste element apart na de lus schrijven met getallen[Length - 1]. Dat crasht op een lege array.
- Na het laatste element toch een tab zetten.
- De methode niet testen met een lege array.
- params niet achteraan de parameterlijst zetten.

## Wegwijzers

### Nota

Een code-lees-oefening. Geef nooit wat een lijn toont. Vraag bij elke lijn of er een wegwijzer gekopieerd wordt of een waarde, en waar de wegwijzer na die lijn naartoe wijst.

### Aanpak

Per stukje: is de variabele een array (een wegwijzer) of een int (een waarde)? Bij een methode: krijgt ze een kopie van de wegwijzer, en past ze de array aan waar die naartoe wijst, of laat ze haar eigen kopie naar een nieuwe array wijzen? Bij de lus op het einde: hoeveel arrays staan er dan in het geheugen?

### Valkuilen

- Denken dat int[] b = a een kopie maakt.
- Denken dat een methode een array nooit kan aanpassen omdat parameters by value zijn.
- Denken dat getallen = new int[] in een methode ook de variabele van Main verandert.
- Denken dat een int uit een array ook een wegwijzer is.

## Puzzelen met arrays deel 2

### Nota

Twaalf methoden, de laatste is PRO. Vraag eerst aan welke de student bezig is. Het draait om het verschil tussen een methode die een nieuwe array teruggeeft en een void-methode die de meegegeven array aanpast.

### Aanpak

Een methode die een nieuwe array geeft: new int[bron.Length], vullen, return. Een void-methode: rechtstreeks in de parameter schrijven, het origineel verandert mee. Omkeren ter plekke: wisselen tot de helft. Roteren met x: de eenstaps-versie x keer oproepen, of met % rekenen. Uniek: eerst een tijdelijke array vullen, dan het gevulde stuk met Array.Copy naar een array van de juiste lengte. Drie vragen over het maximum worden drie methoden, want een methode geeft maar één waarde terug.

### Valkuilen

- In een methode die een nieuwe array moet geven, toch het origineel aanpassen.
- Bij omkeren ter plekke tot het einde lopen, waardoor alles terug op zijn plaats staat.
- In een void-methode de parameter een nieuwe array geven en denken dat Main dat ziet.
- Bij Uniek een array teruggeven die langer is dan het aantal verschillende getallen.
- Bij het vergelijken met het vorige element index -1 lezen bij het eerste element.

## Parkeergarage

### Aanpak

Een methode die de kost van één parkeerbeurt berekent en teruggeeft: 2 euro, plus 0,50 per begonnen uur boven de 3, met een maximum van 10. Main leest de duren in een double[]. Een methode toont de tabel met per auto de duur en de kost, en telt ondertussen de totalen op.

### Valkuilen

- Een begonnen uur niet naar boven afronden: Math.Ceiling.
- Het maximum vergeten.
- De kost in de berekeningsmethode tonen in plaats van teruggeven.
- De duur typen met een punt op een pc met Belgische instellingen.
- De totalen binnen de lus declareren.

## 2D Array Viewer

### Nota

Drie delen: een matrix tonen, de determinant van een 2x2-matrix, en als PRO van een 3x3-matrix.

### Aanpak

Twee geneste lussen met GetLength(0) voor de rijen en GetLength(1) voor de kolommen, een tab tussen de getallen en een WriteLine na elke rij. De determinant van een 2x2-matrix is één lijn met de vier elementen. Voor 3x3 bepaalt GetLength(0) welke formule je gebruikt.

### Valkuilen

- Rij en kolom omwisselen, of Length gebruiken, dat het totaal aantal elementen geeft.
- De WriteLine in de binnenste lus zetten.
- In de determinant de indices door elkaar halen.

## Voetbalcoach

### Aanpak

Een int[,] met 12 rijen en 2 kolommen. Een do while die blijft vragen tot het rugnummer 99 is; bij een ander nummer vraag je het soort actie en het aantal, en tel je dat op in de juiste rij (rugnummer min 1) en kolom (0 of 1). Na de lus toon je per rij de twee getallen en het verschil, en zoek je het hoogste en laagste verschil. Een tweede lus toont alle spelers met dat verschil.

### Valkuilen

- Het rugnummer als index gebruiken zonder er 1 af te trekken.
- = gebruiken in plaats van +=, waardoor een tweede invoer de eerste overschrijft.
- 99 nog als speler verwerken.
- Enkel de eerste speler met het hoogste verschil tonen.
- De stopwaarde met een break afhandelen in plaats van in de lusvoorwaarde.

## Levelkaart

### Nota

Drie delen: de kaart maken en tonen, de speler zoeken en vrije vakjes tellen, en commando's uitvoeren.

### Aanpak

Deel 1: een char[,] met evenveel rijen als strings en evenveel kolommen als tekens in een string; rijen[rij][kolom] geeft het teken. Deel 2: twee geneste lussen die de @ zoeken en de punten tellen. De positie heeft twee getallen, dus dat zoeken staat in Main. Deel 3: per commando eerst de nieuwe positie berekenen, dan kijken of daar een muur staat, en enkel als dat niet zo is de speler verplaatsen.

### Valkuilen

- Rij en kolom verwarren: N en Z veranderen de rij, O en W de kolom.
- De speler verplaatsen en pas daarna ontdekken dat er een muur staat.
- Vergeten de oude plaats weer vrij te maken.
- Een methode willen schrijven die rij en kolom samen teruggeeft.

## Fraude Detectie

### Nota

Dit is de Final Essentials van week 2: een string[], methoden en een geneste lus komen samen. De student mag ervan uitgaan dat elke student evenveel antwoorden typt als de sleutel lang is.

### Aanpak

De antwoorden komen in een string[]. Een methode berekent de score van één student door de sleutel teken per teken te vergelijken. Een tweede methode telt de posities waar twee studenten hetzelfde antwoord geven en dat antwoord fout is. Daarna vergelijk je elk paar met twee geneste lussen, waarbij de binnenste bij i + 1 start. Een teller van verdachte paren bepaalt of je "Geen fraude gedetecteerd." toont.

### Valkuilen

- Enkel tellen waar twee studenten hetzelfde antwoorden, ook als het juist is.
- De binnenste lus bij 0 laten starten, waardoor elk paar twee keer vergeleken wordt en elke student met zichzelf.
- De scoreberekening twee keer uitschrijven in plaats van een methode te gebruiken.
- "Geen fraude" tonen binnen de lus, bij elk paar dat niet verdacht is.

## Zwerkbaltraining met methoden

### Nota

Een extra oefening: Havenmanifest opnieuw, maar met methoden.

### Aanpak

VraagJagers krijgt de twee arrays mee en vult ze; ze hoeft niets terug te geven, want ze werkt op het origineel. ToonOverzicht toont, BerekenTotaal geeft een som terug, en ZoekIndex geeft een index of -1 terug. Main roept ze op in de volgorde van het scenario.

### Valkuilen

- In VraagJagers nieuwe arrays aanmaken, waardoor Main lege arrays overhoudt.
- Proberen twee arrays terug te geven uit één methode.
- Het resultaat van ZoekIndex niet op -1 controleren.
- De som in ToonOverzicht berekenen en tonen in plaats van ze terug te geven.
