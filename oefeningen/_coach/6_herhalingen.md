<!--
  Coach-data voor de oefeningen in oefeningen/6_herhalingen/ (week 1 en week 2).
  Zie oefeningen/_coach/_prompt.md voor het sjabloon en scripts/coach-prompt.mjs voor de werking.
-->

# Leerstof

## Kent al

Hoofdstuk 1 tot en met 5, de basis:

- Console.WriteLine en Write, Console.ReadLine, Console.Clear, de kleuren van de console en Console.ResetColor (hoofdstuk 1 en 2)
- Datatypes, variabelen, const, camel casing, de gehele deling die alles na de komma afkapt, en ++ (hoofdstuk 2)
- Escape characters, verbatim strings, string interpolatie en formattering zoals {getal:F2}, .Length op een string (hoofdstuk 3)
- Casting, int.Parse en double.Parse, de Convert-bibliotheek, en dat een char bij een omzetting zijn Unicode-waarde geeft en niet het cijfer dat er staat (hoofdstuk 4). Een getal terug naar een teken casten staat bij de Unicode-tekens (hoofdstuk 3)
- De Math-bibliotheek en afronden, Random met Next en NextDouble, een lopende som met += (hoofdstuk 4)
- if, else if, else, de relationele en logische operatoren, scope, switch met case, break en default (hoofdstuk 5)
- enum: zelf maken, tonen, casten van een int, en Enum.Parse om invoer om te zetten (hoofdstuk 5)

Hoofdstuk 6, herhalingen:

- while, do while en for, en het verschil: while test vooraf, do while test achteraf en loopt dus altijd minstens één keer
- Een for kiezen als je vooraf weet hoe vaak, en een while of do while als dat niet zo is
- Geneste loops, en dat de binnenste loop bij elke ronde van de buitenste opnieuw begint
- De tellervariabele buiten de loop declareren als je haar erna nog nodig hebt
- break en continue bestaan, maar de opgaven verbieden ze in dit hoofdstuk uitdrukkelijk

## Kent nog niet

- Zelf methoden schrijven. Alles staat in Main
- Arrays en lijsten. Meerdere waarden bijhouden gebeurt met losse variabelen of met een tekst die aangroeit met +=
- De string-methoden zoals Substring, Contains, ToLower of Split
- Een string per teken benaderen met een index
- TryParse, out, try en catch. Invoercontrole gebeurt met een if of met een lus die blijft vragen
- Klassen en objecten, en alles wat daarna komt

# Oefeningen

## Opwarmers 1

### Nota

Een reeks korte deeloefeningen. Vraag eerst aan welke de student bezig is. De n in de opgave is een getal dat aan de gebruiker gevraagd wordt. break en continue zijn verboden.

### Aanpak

Allemaal hetzelfde patroon: een for met een startwaarde, een stopvoorwaarde en een stap. Achterwaarts tellen doe je met i-- en een omgekeerde voorwaarde, om de twee tellen met i += 2. Bij de sommen komt er een teller bij die vóór de loop gemaakt wordt en binnen de loop groeit.

### Valkuilen

- De som binnen de loop declareren, waardoor ze elke ronde terug op nul staat.
- Een off-by-one: i < n in plaats van i <= n wanneer n zelf meetelt.
- Bij achterwaarts tellen de voorwaarde niet omdraaien, waardoor de loop nooit start.
- Bij de even getallen bij 1 beginnen in plaats van bij 2.

## Opwarmers van opwarmers

### Nota

Een reeks deeloefeningen rond invoer met een afsluitwaarde. Vraag eerst aan welke de student bezig is. break en continue zijn verboden.

### Aanpak

Het aantal invoeren ligt niet vooraf vast, dus dit is een while of een do while. Een do while past hier meestal het best: je moet al iets ingelezen hebben voor je kan testen of het de afsluitwaarde is. Binnen de lus verwerk je het getal, en dat verwerken gebeurt best pas nadat je gecontroleerd hebt dat het niet de afsluitwaarde is. Tellers en sommen staan buiten de lus.

### Valkuilen

- De afsluitwaarde mee optellen of meetellen.
- Bij een gemiddelde delen door een teller die nul kan zijn.
- Bij het kleinste getal starten met nul als vergelijkingswaarde, waardoor een reeks positieve getallen nooit een kleinste vindt.
- Bij het zoeken naar het kleinste vergeten dat de teller terug op één moet zodra er een nieuw minimum verschijnt.
- Bij twee nullen na elkaar niet bijhouden wat het vorige getal was.
- Een for gebruiken terwijl het aantal invoeren onbekend is.

## Tafels van vermenigvuldigen 1

### Aanpak

Eén lus van 1 tot en met 10, waarin je de teller vermenigvuldigt met het gevraagde getal. Dit is dezelfde oefening als die met Console.Clear uit hoofdstuk 2, maar nu in vijf lijnen.

### Valkuilen

- Bij 0 beginnen of bij 9 stoppen.
- Het product zelf uitrekenen in plaats van het te laten berekenen.
- De teller vergeten te verhogen bij een while, waardoor het programma blijft hangen.

## Tafels van supervermenigvuldigen

### Aanpak

Twee geneste lussen: de buitenste loopt over de tafels, de binnenste over de vermenigvuldigers. Laat de student eerst opschrijven welke lus welke rol heeft en hoeveel lijnen er in totaal moeten verschijnen.

### Valkuilen

- Beide lussen dezelfde tellernaam geven.
- De binnenste teller buiten de lussen declareren en niet resetten, waardoor de binnenste lus na de eerste ronde niets meer doet.
- De WriteLine buiten de binnenste lus zetten en zich afvragen waar de rest blijft.

## RNA Transscriptie

### Aanpak

Twaalf keer één letter inlezen, dus een lus met een teller. De omzetting is een switch met vier gevallen en een default voor foute invoer. Twee strings groeien mee met +=, één met de ingevoerde letters en één met de omzetting. Beide toon je pas op het einde.

### Valkuilen

- De omgezette string overschrijven in plaats van te laten aangroeien.
- De vier omzettingen verkeerd onthouden. T wordt A, maar A wordt U, niet T.
- Kleine letters ingeven terwijl de switch op hoofdletters test.
- De teller vergeten te verhogen bij foute invoer, of net wel terwijl dat niet de bedoeling is.

## Armstrong nummer

### Nota

Een PRO-oefening. De opgave raadt de wiskundige weg aan in plaats van met tekst te werken, en die weg staat stap voor stap uitgelegd in de tip.

### Aanpak

Eerst het aantal cijfers bepalen, wat via de lengte van de ingetypte tekst mag. Dan cijfer per cijfer afpellen: delen door de juiste macht van tien geeft het voorste cijfer, dat cijfer maal die macht trek je er weer af, en zo schuif je op. Elk gevonden cijfer verhef je tot de macht van het aantal cijfers en tel je bij een som. Op het einde vergelijk je die som met het originele getal.

### Valkuilen

- Het originele getal overschrijven tijdens het afpellen, waardoor de vergelijking op het einde niet meer klopt.
- De exponenten omwisselen: het aantal cijfers is de macht, niet de positie.
- Math.Pow geeft een double terug, dus er is een cast nodig om verder met gehele getallen te werken.
- De lus laten lopen tot en met nul vergeten, waardoor het laatste cijfer wegvalt.

## Schaak-elo met loop

### Nota

Bouwt verder op de Elo-oefeningen uit hoofdstuk 4 en 5. Die moeten dus al werken.

### Aanpak

De rating van de speler zelf staat buiten de lus en wordt binnen de lus telkens bijgewerkt. De lus stopt zodra er een negatieve rating voor de tegenstander ingevoerd wordt, dus dat inlezen gebeurt één keer vóór de lus en daarna opnieuw op het einde van elke ronde. Binnen de lus komt de bestaande berekening ongewijzigd terug.

### Valkuilen

- De eigen rating binnen de lus opnieuw inlezen of resetten.
- De nieuwe rating tonen maar niet bewaren, waardoor de volgende partij weer van de startrating vertrekt.
- De stopvoorwaarde testen op een variabele die pas binnen de lus wordt ingelezen.
- De afgeronde waarde verder gebruiken in de volgende berekening.

## Euler project

### Aanpak

Eén lus van 0 tot en met 1000 met een som die erbuiten staat. Binnen de lus test één if met || of het getal een veelvoud van drie of van vijf is. Het antwoord staat in de opgave, dus de student kan zelf controleren.

### Valkuilen

- && gebruiken in plaats van ||, waardoor enkel veelvouden van vijftien meetellen.
- Twee losse if-testen schrijven, waardoor veelvouden van vijftien dubbel geteld worden.
- Bij 1000 stoppen zonder 1000 zelf mee te nemen.

## De Casting Call

### Nota

Dit is de Final Essentials van week 1. Let op: onder deze oefening staan op dezelfde pagina nog twee reeksen losse loop-oefeningen, "Loops-a-volonté" en "Cooldown". Vraag dus eerst of de student aan de Casting Call werkt of aan een van die kleinere oefeningen, en welke dan.

### Aanpak

Voor de Casting Call: alle variabelen die de dag overleven staan buiten de lus, namelijk de teller van wie door is, de hoogste score tot nu toe en de naam die erbij hoort. De lus stopt op het woord STOP, dus je leest de naam één keer in vóór de lus en opnieuw op het einde van elke ronde. Binnen de lus bepaalt een if of iemand door is, en een tweede if of dit een nieuw record is; dan pas werk je beide recordvariabelen samen bij.

Voor de kleinere oefeningen eronder gaat het meestal om hetzelfde: een for wanneer het aantal rondes vastligt, een while wanneer je op een afsluitwaarde wacht, en een som of teller die vóór de lus staat. Bij de priemgetallen en de tafels komen twee geneste lussen kijken. Machtsverheffing zonder Math.Pow is gewoon herhaald vermenigvuldigen.

### Valkuilen

- Enkel de hoogste score bijhouden en de naam vergeten, of ze niet samen bijwerken.
- De hoogste score op nul laten starten wanneer nul een geldige score is.
- De naam niet opnieuw inlezen op het einde van de lus, waardoor de lus oneindig doorloopt.
- De score meteen inlezen zonder eerst te controleren of er STOP getypt is.
- Bij de priemtest de lus laten doorlopen nadat al gebleken is dat het getal deelbaar is. Zonder break moet dat met een bool.
- Bij het tellen van cijfers vergeten dat het getal nul zelf ook één cijfer heeft.

## Boekhouder

### Aanpak

De invoer komt binnen als tekst, want q is geen getal. Je leest dus een string in, controleert eerst op q, en zet ze pas daarna om naar een getal. Vier grootheden staan buiten de lus: de totale som, de som van de positieve, de som van de negatieve en het aantal invoeren. Na elke invoer toon je de vier opnieuw.

### Valkuilen

- De invoer meteen omzetten naar een int, waardoor het programma crasht op q.
- Het gemiddelde berekenen met twee gehele getallen, waardoor de komma verdwijnt. Er moet een cast aan te pas komen.
- Delen door nul wanneer de gebruiker meteen q typt.
- Het getal nul bij de positieve of de negatieve som rekenen.
- De sommen binnen de lus declareren.

## Hoger Lager

### Nota

De oefening heeft twee delen: eerst de gewone versie, daarna dezelfde met een maximum aantal pogingen. Vraag aan welk deel de student bezig is.

### Aanpak

Het te raden getal wordt één keer getrokken, vóór de lus. De lus blijft lopen zolang er niet geraden is, dus dat is een do while met een bool die aangeeft of het spel voorbij is. Binnen de lus vergelijk je de gok met het getal en toon je hoger of lager. Een negatieve invoer is een tweede manier om te stoppen. Voor het tweede deel komt er een teller bij en een extra stopvoorwaarde, en achteraf een if die uitzoekt waarom de lus stopte.

### Valkuilen

- Het getal binnen de lus opnieuw trekken.
- Hoger en lager omdraaien. Als de gok te laag is, moet de gebruiker hoger zoeken.
- Vergeten de beurten te tellen, of ze tellen na de controle waardoor de laatste beurt niet meetelt.
- Bij het maximum niet meer kunnen zien of er gewonnen of verloren werd. Daar is die bool voor.

## Wiskundequiz

### Aanpak

Een lus die blijft lopen zolang de student juist antwoordt. Binnen de lus twee willekeurige getallen trekken, de vraag stellen, het antwoord vergelijken met het product en een teller bijhouden. Bij een fout antwoord toon je de score en zet je de bool die de lus stopt.

### Valkuilen

- Het Random-object binnen de lus aanmaken.
- Bij Next 10 als bovengrens geven, waardoor tien nooit voorkomt.
- De teller binnen de lus declareren.
- Zonder break niet weten hoe je stopt. Een bool in de lusvoorwaarde is hier de bedoeling.

## Wiskundequiz met levels

### Nota

Bouwt verder op de vorige oefening. Onderaan staat nog een PRO-vraag: het bereik met een formule uit het level afleiden in plaats van het per level uit te schrijven.

### Aanpak

Eén variabele erbij voor het level. Na elk juist antwoord kijk je of het aantal juiste antwoorden een veelvoud van vijf is; dat is precies waar modulo voor dient. Het bereik van de willekeurige getallen wordt dan een berekening waarin het level voorkomt.

### Valkuilen

- Bij elk juist antwoord een level stijgen in plaats van per vijf.
- Het level binnen de lus declareren.
- De teller resetten bij een level-up, waardoor de volgende level-up nooit komt of net te vroeg.
- Het nieuwe bereik pas de ronde erna gebruiken.

## Wiskunde-quizprogramma

### Nota

Dit combineert de quiz met een menu zoals in Codemenu. Beide vorige oefeningen moeten dus al werken.

### Aanpak

Eerst het menu tonen en de keuze inlezen, voor de lus begint. Die keuze bepaalt daarna wat er in de lus gebeurt: gewoon spelen, starten op een gekozen level, of de studeermodus waarin de oplossing meteen getoond wordt en er niets ingelezen wordt. Werk modus per modus en test elke modus apart.

### Valkuilen

- Het menu binnen de spellus tonen, waardoor het na elke vraag terugkomt.
- In de studeermodus toch op invoer wachten.
- De pauze van vijf seconden vergeten, waardoor alles voorbijflitst.
- Het gekozen startlevel niet gebruiken in de berekening van het bereik.

## Tekenen

### Aanpak

Twee stukken. Eerst de invoercontrole: blijf vragen zolang het getal buiten twee en twintig ligt. Dat is een while die vóór de tekening staat. Daarna twee geneste lussen, één over de rijen en één over de kolommen, met binnenin een if die bepaalt of dit vakje op de rand ligt. Een vakje ligt op de rand als het in de eerste of laatste rij zit, of in de eerste of laatste kolom.

### Valkuilen

- De invoercontrole met een if doen in plaats van met een lus, waardoor één foute invoer al genoeg is.
- De WriteLine per rij vergeten, waardoor alles op één lijn komt.
- De randvoorwaarde met && schrijven in plaats van met ||, waardoor enkel de hoeken een ster krijgen.
- De binnenkant helemaal leeg laten in plaats van er spaties te zetten, waardoor de rechterrand niet meer uitlijnt.
- Rijen en kolommen omwisselen, waardoor de rechthoek gekanteld staat.

## Steen schaar papier

### Nota

De opgave vraagt ook een flowchart, en raadt aan om met een enum te werken.

### Aanpak

Een enum met de drie keuzes maakt de vergelijkingen leesbaar. De keuze van de computer is een willekeurig getal dat je naar die enum cast. De lus blijft lopen tot iemand de winstgrens haalt, dus twee scores staan buiten de lus. Binnen de lus eerst het gelijkspel afhandelen, en daarna de drie gevallen waarin de gebruiker wint; alles wat overblijft is een winst voor de computer.

### Valkuilen

- Alle negen combinaties uitschrijven in plaats van eerst gelijkspel af te zonderen.
- De scores binnen de lus declareren.
- De stopvoorwaarde maar voor één van beide spelers testen.
- Bij het casten van het willekeurige getal buiten het bereik van de enum vallen.
- Enum.Parse laten crashen op een tikfout van de gebruiker.

## Codemenu

### Aanpak

Een do while rond het hele menu, die pas stopt bij de keuze om af te sluiten. Binnen de lus: het scherm leegmaken, het menu tonen, de keuze inlezen en met een switch afhandelen. Op het einde van elke ronde een pauze met ReadLine, zodat de student ziet wat er gebeurde voor het scherm weer leeggemaakt wordt.

### Valkuilen

- De Clear op de verkeerde plaats, waardoor het resultaat meteen verdwijnt.
- Geen default in de switch, waardoor een verkeerde toets stil genegeerd wordt.
- De stopkeuze wel in de switch afhandelen maar niet in de lusvoorwaarde.
- Het menu buiten de lus tonen, waardoor het maar één keer verschijnt.

## Become Neo

### Nota

Een speelse oefening. De basiscode staat in de opgave; de student breidt ze uit.

### Aanpak

De bestaande oneindige lus blijft. In plaats van twee vaste kleuren trek je een willekeurig getal en zet je met een keten van if of met een switch de bijhorende kleur. Extra effecten zijn gewoon extra if-jes met een willekeurige kans erin.

### Valkuilen

- De kleur instellen na het schrijven van het teken.
- De pauze weglaten, waardoor het beeld onleesbaar snel gaat.
- Vergeten dat Convert.ToChar op sommige getallen een onzichtbaar teken geeft.

## BeerSong

### Aanpak

Eén lus die aftelt. De laatste strofen wijken af, dus de lus stopt vroeger en die laatste zinnen zet je er gewoon achter. Laat de student eerst aanduiden vanaf welk getal de tekst niet meer in het patroon past.

### Valkuilen

- De lus tot nul laten lopen en dan de afwijkende strofen dubbel krijgen.
- Enkelvoud en meervoud verwarren bij één fles.
- In de tweede zin het huidige getal tonen in plaats van dat getal min één.
- Een off-by-one waardoor de reeks bij 98 begint.

## De slag om Helm's Deep

### Nota

Dit is de Final Essentials van week 2 en de zwaarste oefening van het hoofdstuk. Werk in stukken en test na elk stuk.

### Aanpak

Bouw dit op in lagen. Eerst de lus die namen inleest tot EINDE. Dan het toekennen van punten per soort vijand, met een keten van if. Dan de scores en de kills per held. Pas als dat werkt komt de kill streak erbij: daarvoor hou je bij wie de vorige kill maakte en hoeveel keer na elkaar dat al was. Het eindrapport is puur rekenwerk achteraf, met een procentberekening die om een kommagetal vraagt.

### Valkuilen

- De streakteller niet terugzetten wanneer de andere held scoort.
- Vergeten de streakteller te resetten na de bonus, waardoor elke volgende kill weer bonus geeft.
- De vorige killer bijwerken voor je hem vergeleken hebt met de huidige.
- Het percentage berekenen met twee gehele getallen, waardoor er nul uitkomt.
- Delen door nul wanneer er geen enkele kill was.
- ResetColor vergeten tussen de gekleurde meldingen.
- De vraag naar de vijand ook stellen wanneer EINDE ingetypt is.
