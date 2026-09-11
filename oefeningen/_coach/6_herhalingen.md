<!--
  Coach-data voor de oefeningen in oefeningen/6_herhalingen/ (week 1 en week 2).
  Zie oefeningen/_coach/_prompt.md voor het sjabloon en scripts/coach-prompt.mjs voor de werking.
-->

# Leerstof

## Kent al

Hoofdstuk 1 tot en met 4, de basis:

- Console.WriteLine en Write, Console.ReadLine, Console.Clear, de kleuren van de console en Console.ResetColor
- Datatypes, variabelen, const, camel casing, de gehele deling die alles na de komma afkapt, % (modulo), ++ en +=
- Escape characters, string interpolatie en formattering zoals {getal:F2}, .Length op een string
- Casting, int.Parse en double.Parse, de Convert-bibliotheek (Convert.ToChar geeft het teken bij een getal). Een char is intern een getal en kan dus ook met ++ verhoogd worden
- De Math-bibliotheek (Pow, Round, Min, Max, ...), afronden, Random met Next en NextDouble. Next met twee getallen gaat tot en met het tweede min één
- Een double bewaart niet elk kommagetal exact. int.MaxValue en int.MinValue
- Debuggen met breakpoints, Step Over en het venster Locals

Hoofdstuk 5, beslissingen:

- if, else if, else, de relationele en logische operatoren (&& gaat voor ||), De Morgan, de ternaire operator, nesting
- Scope: een variabele bestaat enkel binnen de accolades waarin ze gemaakt is
- switch met case, break en default, en meerdere cases die dezelfde code delen
- enum: zelf maken (binnen class Program), tonen, casten van een int, en Enum.Parse (met true om hoofdletters te negeren)

Hoofdstuk 6, herhalingen:

- while, do while en for. Een while test vooraf en draait 0 of meer keer, een do while test achteraan en draait minstens één keer
- Een lusvoorwaarde zegt wanneer je doorgaat, niet wanneer je stopt. Invoercontrole: eerst bedenken wanneer de invoer goed is, dan omdraaien met ! of De Morgan
- Een for kiezen als je vooraf weet hoe vaak, een while of do while als dat niet zo is. Een sentinel loop stopt op een afsluitwaarde
- Tracen: een tabel met de teller bij de test, de uitkomst van de test en wat er op het scherm komt. Off-by-one-fouten
- Scope in lussen: een variabele binnen de lus wordt elke ronde opnieuw aangemaakt. Wat je in de test van een do while gebruikt, maak je vóór de do aan. De teller van een for bestaat na de lus niet meer
- De puntkomma: verplicht achter } while (...), fout achter if (...), while (...) en for (...)
- Geneste lussen: de binnenste lus begint bij elke ronde van de buitenste opnieuw. Bij een geneste while moet je de binnenste teller zelf resetten. Tellen door te vermenigvuldigen, behalve als de binnenste lus de teller van de buitenste gebruikt
- Een bool mee in de lusvoorwaarde zetten om te stoppen zodra iets gevonden is (de booleaanse vlag)
- break en continue: continue mag niet, en break enkel in een switch of bij zoek-en-stop. Een while (true) die enkel met break stopt, is een boete

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

Zeven korte deeloefeningen met een for. Vraag eerst aan welke de student bezig is. De n is een getal dat vooraf aan de gebruiker gevraagd wordt; de oplossingen tonen enkel de lus.

### Aanpak

Allemaal hetzelfde patroon: een for met een startwaarde, een stopvoorwaarde en een stap. Aftellen doe je met i-- en een omgekeerde voorwaarde, om de twee tellen met i += 2. Bij de sommen komt er een variabele bij die vóór de lus gemaakt wordt en binnen de lus groeit.

### Valkuilen

- De som binnen de lus declareren, waardoor ze elke ronde terug op nul staat.
- Een off-by-one: i < n in plaats van i <= n wanneer n zelf meetelt.
- Bij aftellen de voorwaarde niet omdraaien, waardoor de lus nooit start.
- Bij de even getallen bij 1 beginnen in plaats van bij 2.

## Trace de teller

### Nota

Een code-lees-oefening. De student schrijft eerst op papier wat er verschijnt, met een tracetabel voor de eerste drie stukjes, en voert de code pas daarna uit. Geef nooit de uitvoer van een stukje, ook niet gedeeltelijk, en ook niet hoeveel keer Hallo verschijnt. Vraag wat de teller is bij de eerste test, wat er in de eerste ronde gebeurt, en laat hem zelf verder tellen.

### Aanpak

Per stukje: wat is de beginwaarde, wanneer wordt getest (vooraan of achteraan), wat verandert er in de lus en in welke volgorde (eerst verhogen of eerst tonen)? Voor het vierde stukje: waar wordt som aangemaakt? Voor het vijfde: wat is kolom als de buitenste lus aan haar tweede ronde begint? Voor het zesde: hoeveel keer draait de binnenste lus bij a gelijk aan 0, aan 1, enzovoort?

### Valkuilen

- Denken dat een do while vooraf test.
- Vergeten dat de teller verhoogd wordt vóór hij getoond wordt.
- Bij het vijfde stukje denken dat de binnenste lus drie keer draait.
- Bij het zesde stukje 4 x 4 of 4 x 3 rekenen terwijl de binnenste lus van a afhangt.

## Tafels van vermenigvuldigen 1

### Aanpak

Eén for van 1 tot en met 10, waarin je de teller vermenigvuldigt met het gevraagde getal. Een for, want je weet vooraf dat het er tien zijn.

### Valkuilen

- Bij 0 beginnen of bij 9 stoppen.
- Een while gebruiken en de teller vergeten te verhogen, waardoor het programma blijft hangen.
- Het getal binnen de lus opnieuw vragen.

## Euler project

### Aanpak

Eén lus van 0 tot en met 1000 met een som die erbuiten staat. Binnen de lus test één if met || of het getal een veelvoud van drie of van vijf is. Het antwoord staat in de opgave, dus de student kan zelf controleren.

### Valkuilen

- && gebruiken in plaats van ||, waardoor enkel veelvouden van vijftien meetellen.
- Twee losse if-testen schrijven, waardoor veelvouden van vijftien dubbel geteld worden.
- Bij 1000 stoppen zonder 1000 zelf mee te nemen. Wie 233168 krijgt, deed dat; dat is het antwoord van de originele site, die "onder 1000" vraagt.

## Kies de loop

### Nota

Een denkoefening zonder code. Geef niet per situatie de juiste lus. Vraag de twee vragen die het boek stelt: weet je vooraf hoe vaak? Moet de code minstens één keer lopen? Soms is meer dan één antwoord goed; wat telt, is de reden.

### Aanpak

Per situatie eerst beslissen of het aantal herhalingen vooraf vastligt. Zo ja: een for. Zo nee: moet het minstens één keer gebeuren (vragen, gooien, een menu tonen)? Dan een do while, anders een while.

### Valkuilen

- Een for kiezen omdat er "tot" in de zin staat, terwijl het aantal niet vastligt.
- Bij het wachtwoord een while kiezen en niet zien dat de vraag minstens één keer gesteld moet worden.
- Bij de spaarrekening denken dat je het aantal jaren vooraf kent.

## Afsluitwaarden

### Nota

Acht deeloefeningen rond invoer met een afsluitwaarde. Vraag eerst aan welke de student bezig is.

### Aanpak

Het aantal invoeren ligt niet vast, dus dit is een while of een do while. Een do while past meestal het best: je moet eerst iets inlezen voor je kan testen of het de afsluitwaarde is. De variabele uit de lusvoorwaarde maak je vóór de do aan. Binnen de lus verwerk je het getal pas als het niet de afsluitwaarde is. Tellers en sommen staan buiten de lus. Bij de sorteerfout en de twee nullen stopt de lus op een bool in plaats van op een afsluitwaarde.

### Valkuilen

- De afsluitwaarde meetellen, zeker als ze zelf een gewoon getal is zoals -32768 of een negatief getal.
- Het product op 0 laten starten, of de 0 meevermenigvuldigen.
- Bij een gemiddelde delen door een teller die nul kan zijn.
- Bij het kleinste getal starten met nul als vergelijkingswaarde, waardoor een reeks positieve getallen nooit een kleinste vindt. int.MaxValue is de betere start.
- Bij het kleinste vergeten dat de teller terug op één moet zodra er een nieuw minimum verschijnt.
- Bij twee nullen na elkaar al stoppen na één nul, of de losse nul in het midden niet meetellen. De opgave sluit enkel de twee slotnullen uit.
- Een for gebruiken terwijl het aantal invoeren onbekend is.

## Lijnen in volgorde

### Nota

Een puzzel: de student zet gegeven lijnen in de juiste volgorde, voegt accolades toe en zoekt de indringer. Geef nooit de volgorde of de indringer. Vraag welke lijnen maar één keer mogen gebeuren, welke in elke ronde, en welke erna.

### Aanpak

Eerst de declaraties die vóór alles komen. Dan het eerste getal inlezen, want de while test vooraan. In de lus: verwerken en het volgende getal inlezen. Na de lus: het gemiddelde, maar enkel als er iets ingelezen werd. Voor de indringer: stopt de lus niet al vanzelf?

### Valkuilen

- Denken dat een van de twee vragen overbodig is. Bij een while heb je ze allebei nodig.
- Het inlezen vóór het optellen zetten binnen de lus, waardoor de afsluitwaarde meetelt of het eerste getal verloren gaat.
- De if na de lus vergeten, waardoor meteen 0 typen een vreemd gemiddelde geeft.

## Zonder break

### Nota

Een herschrijfoefening met code van stagiair Steven. De code werkt, maar gebruikt while (true), break en continue. Geef de herschreven code niet. Vraag wanneer de lus moet stoppen en of dat in één zin in de lusvoorwaarde past, en wat de continue eigenlijk doet.

### Aanpak

De break wordt de lusvoorwaarde: de lus gaat door zolang het getal niet 0 is. Omdat je eerst moet inlezen, is dat een do while, en het getal wordt vóór de do aangemaakt. De continue slaat enkel het optellen over; dat wordt een if met een else. Daarna testen met dezelfde invoer als in de opgave.

### Valkuilen

- De while (true) laten staan en de break door iets anders vervangen.
- getal binnen de do declareren, waardoor de test achteraan niet compileert.
- Denken dat de 0 niet opgeteld mag worden. Optellen met 0 verandert niets.
- Een andere uitvoer krijgen dan het origineel, bijvoorbeeld de melding voor negatieve getallen vergeten.

## Stevens menulus

### Nota

Een zoek-de-fout-oefening met stagiair Steven. Geef de fouten nooit. In deel 1 laat je hem voorspellen wat er gebeurt en vraag je wat een puntkomma achter while betekent, en welke waarde van keuze de voorwaarde false zou maken. In deel 2 mag je uitleggen wat de foutmelding betekent, maar niet waar de declaratie moet komen.

### Aanpak

Deel 1: twee fouten. Wat hoort er bij de lus als er een puntkomma achter de header staat? En is er een tekst waarvoor keuze != "a" || keuze != "b" || keuze != "c" false is? Deel 2: waar staat de test van een do while ten opzichte van de accolades, en waar bestaat keuze?

### Valkuilen

- Enkel de puntkomma vinden en denken dat het dan werkt.
- De || omzetten in && zonder te begrijpen waarom. Laat hem eerst de voorwaarde voor goede invoer opschrijven.
- In deel 2 de declaratie verplaatsen maar string laten staan in de lus, waardoor er twee variabelen keuze zijn.

## Boekhouder

### Aanpak

De invoer komt binnen als tekst, want q is geen getal. Je leest dus een string in, controleert eerst op q, en zet ze pas daarna om naar een getal. Vier grootheden staan buiten de lus: de balans, de som van de positieve, de som van de negatieve en het aantal invoeren. Na elke invoer toon je ze, en na de lus nog eens als eindrapport.

### Valkuilen

- De invoer meteen omzetten naar een int, waardoor het programma crasht op q.
- Het gemiddelde berekenen met twee gehele getallen, waardoor de komma verdwijnt. Er moet een cast aan te pas komen.
- Delen door nul wanneer de gebruiker meteen q typt.
- De sommen binnen de lus declareren.

## Loops-a-volonté

### Nota

Twaalf losse deeloefeningen om lussen te drillen. Vraag eerst aan welke de student bezig is. Beide grenzen zijn steeds inbegrepen.

### Aanpak

Meestal een for, want het aantal ligt vast, met een som of teller die vóór de lus staat. De macht zonder Math.Pow is herhaald vermenigvuldigen, met een resultaat dat op 1 start. De delers: elk getal van 1 tot n testen met modulo. Fibonacci: twee variabelen die telkens doorschuiven, met een hulpvariabele. Het aantal cijfers: blijven delen door 10 tot er niets overblijft. Bij de reeksen eerst per reeks de i-de term uitschrijven met i erin.

### Valkuilen

- Bij de macht starten op 0 in plaats van 1.
- Bij Fibonacci de twee variabelen in de verkeerde volgorde bijwerken, waardoor een waarde verloren gaat.
- Bij het tellen van cijfers vergeten dat 0 zelf ook één cijfer heeft.
- Bij de reeksen 1 / i schrijven met twee ints, waardoor elke term na de eerste 0 wordt.
- Bij de deelbaarheid een else-if-keten gebruiken, waardoor een getal deelbaar door 6 maar één keer telt.

## RNA Transcriptie

### Aanpak

De lus draait tot er 12 geldige letters zijn. Omdat een foute letter niet meetelt, weet je vooraf niet hoeveel keer er gevraagd wordt: een while, geen for. De omzetting is een switch met vier gevallen en een default voor foute invoer. Twee strings groeien mee met +=. Een aparte teller mag, maar de lengte van de DNA-string telt de geldige letters ook al.

### Valkuilen

- De omgezette string overschrijven in plaats van te laten aangroeien.
- De vier omzettingen verkeerd onthouden. T wordt A, maar A wordt U, niet T.
- Kleine letters ingeven terwijl de switch op hoofdletters test.
- Ook bij een foute letter de teller verhogen, waardoor er minder dan 12 letters in de string komen.

## De Casting Call

### Nota

Dit is de Final Essentials van week 1.

### Aanpak

Alle variabelen die de dag overleven staan buiten de lus: het aantal kandidaten, het aantal dat door is, de hoogste score tot nu toe en de naam die erbij hoort. De lus stopt op het woord STOP, dus je leest de naam één keer in vóór de lus en opnieuw op het einde van elke ronde. Binnen de lus bepaalt een if of iemand door is, en een tweede if of dit een nieuw record is; dan pas werk je beide recordvariabelen samen bij. Na de lus een if voor het geval dat er niemand kwam.

### Valkuilen

- Enkel de hoogste score bijhouden en de naam vergeten, of ze niet samen bijwerken.
- De hoogste score op nul laten starten, waardoor een kandidaat met score 0 nooit de beste kan zijn.
- De naam niet opnieuw inlezen op het einde van de lus, waardoor de lus eindeloos doorloopt.
- Een do while gebruiken, waardoor er ook na STOP een score gevraagd wordt.
- Vergeten wat er getoond wordt als er niemand kwam.

## Schaak-elo met loop

### Nota

Een bonusoefening die verderbouwt op de Elo-oefeningen uit hoofdstuk 4 en 5. Die moeten dus al werken.

### Aanpak

De rating van de speler zelf staat buiten de lus en wordt binnen de lus telkens bijgewerkt. De lus stopt zodra er een negatieve rating voor de tegenstander ingevoerd wordt, dus dat inlezen gebeurt één keer vóór de lus en daarna opnieuw op het einde van elke ronde. Binnen de lus komt de bestaande berekening terug, maar enkel voor de speler zelf.

### Valkuilen

- De eigen rating binnen de lus opnieuw inlezen of resetten.
- De nieuwe rating tonen maar niet bewaren, waardoor de volgende partij weer van de startrating vertrekt.
- De afgeronde waarde verder gebruiken in de volgende berekening.
- Ook de rating van de tegenstander berekenen, terwijl die niet nodig is.

## Armstrong nummer

### Nota

Een PRO-oefening. De tip beschrijft de wiskundige weg: eerst de cijfers tellen, dan ze van rechts afpellen met % 10 en / 10.

### Aanpak

Twee lussen na elkaar. De eerste telt het aantal cijfers, zoals in Loops-a-volonté. De tweede pelt telkens het laatste cijfer af met % 10, verheft het tot de macht van het aantal cijfers, telt het bij een som, en haalt het cijfer weg met / 10. Beide werken op een kopie van het getal. Op het einde vergelijk je de som met het originele getal.

### Valkuilen

- Het originele getal zelf afpellen, waardoor de vergelijking op het einde niet meer klopt.
- De kopie na de eerste lus niet opnieuw gelijkzetten aan het getal, waardoor de tweede lus niets doet.
- De exponent verwarren: het aantal cijfers is de macht, niet de positie van het cijfer.
- Math.Pow geeft een double terug, dus er is een cast nodig om verder met gehele getallen te werken.

## Tafels van supervermenigvuldigen

### Nota

De oefening heeft twee delen. In deel 2 komen de tafels horizontaal. Vraag aan welk deel de student bezig is.

### Aanpak

Twee geneste lussen: de buitenste loopt over de tafels, de binnenste over de vermenigvuldigers. Laat de student eerst opschrijven welke lus welke rol heeft en hoeveel lijnen er moeten verschijnen. In deel 2 is de buitenste lus de rij (de tafel) en de binnenste de kolom; Write binnen de rij, WriteLine na de binnenste lus.

### Valkuilen

- Beide lussen dezelfde tellernaam geven.
- In deel 2 rijen en kolommen omwisselen, waardoor de tafels verticaal blijven.
- De WriteLine in de binnenste lus zetten, of buiten beide lussen.

## Sterrenpatronen

### Nota

Drie delen, het derde is PRO. De gewone driehoek staat al in de leerstof. Vraag aan welk deel de student bezig is.

### Aanpak

Telkens een buitenste lus over de rijen en een binnenste lus die weet hoeveel tekens er in die rij komen. Laat de student per rij opschrijven hoeveel spaties en hoeveel sterren er komen, en daaruit een formule met het rijnummer halen. Deel 1: de buitenste lus telt af. Deel 2: in één rij twee lussen na elkaar, eerst spaties en dan sterren. Deel 3: dezelfde spaties, maar 2 * rij - 1 sterren.

### Valkuilen

- De binnenste lus een vast aantal keer laten draaien in plaats van afhankelijk van de rij.
- In deel 2 de spaties en de sterren in dezelfde lus proberen te stoppen.
- De WriteLine op de verkeerde plaats.
- Een off-by-one in het aantal spaties, waardoor de driehoek scheef staat.

## Tekenen

### Aanpak

Twee stukken. Eerst de invoercontrole: blijf vragen zolang het getal buiten 2 tot en met 20 ligt. Dat is een do while, want je moet minstens één keer vragen. Daarna twee geneste lussen, één over de rijen en één over de kolommen, met binnenin een if die bepaalt of dit vakje op de rand ligt: in de eerste of laatste rij, of in de eerste of laatste kolom.

### Valkuilen

- De invoercontrole met een if doen in plaats van met een lus, waardoor een tweede foute invoer toch doorgaat.
- De lusvoorwaarde van de invoercontrole omdraaien: de lus gaat door zolang de invoer fout is.
- De randvoorwaarde met && schrijven in plaats van met ||, waardoor enkel de hoeken een ster krijgen.
- De binnenkant leeg laten in plaats van er spaties te zetten, waardoor de rechterrand niet meer uitlijnt.
- Rijen en kolommen omwisselen, waardoor de rechthoek gekanteld staat.

## Priemgetallen

### Nota

Twee delen: eerst de priemtest voor één getal, dan alle priemgetallen tot n.

### Aanpak

Deel 1: een bool die aangeeft of het getal nog priem kan zijn, en een lus over de mogelijke delers van 2 tot het getal. Zodra een deler gevonden is, wordt de bool false. Zet die bool mee in de lusvoorwaarde, dan stopt de lus vanzelf. 0 en 1 zijn geen priemgetallen. Deel 2: de priemtest van deel 1 komt in een buitenste lus over alle getallen tot n, en de bool start voor elk getal opnieuw op true.

### Valkuilen

- De lus laten doorlopen nadat al gebleken is dat het getal deelbaar is.
- Bij 1 beginnen met delen, waardoor alles deelbaar is.
- In deel 2 de bool buiten de buitenste lus declareren, waardoor na het eerste niet-priemgetal alles niet-priem is.
- 0 of 1 als priemgetal tonen.
- Een break is hier toegelaten (zoek-en-stop), maar de opgave toont de bool in de voorwaarde. Beide zijn goed.

## Hoger Lager

### Nota

Drie delen: de gewone versie, dan met maximaal 7 beurten, dan met opnieuw spelen. Vraag aan welk deel de student bezig is. Bij deel 2 staat een denkvraag (waarom 7); geef het antwoord niet, vraag hoeveel getallen er na één slimme gok nog overblijven.

### Aanpak

Het te raden getal wordt één keer getrokken, vóór de lus. De lus loopt zolang er niet geraden en niet opgegeven is, dus twee bools in de lusvoorwaarde. Een negatieve gok zet de bool voor opgeven; de andere gokken tellen als beurt. Na de lus zoek je met een if uit waarom de lus stopte. Deel 2: een teller en een derde voorwaarde. Deel 3: het hele spel in een tweede do while, en alles wat per spel opnieuw moet beginnen, staat binnen die lus.

### Valkuilen

- Het getal binnen de lus opnieuw trekken.
- Hoger en lager omdraaien. Als de gok te laag is, moet de gebruiker hoger zoeken.
- Het opgeven als beurt tellen.
- In deel 2 na de lus niet meer weten of er gewonnen, opgegeven of verloren werd.
- In deel 3 het getal, de teller of de bools buiten de buitenste lus laten staan, waardoor het tweede spel meteen gedaan is.

## Wiskundequiz

### Aanpak

Een lus die blijft lopen zolang de student juist antwoordt. Binnen de lus twee willekeurige getallen trekken, de vraag stellen, het antwoord vergelijken met het product en een teller bijhouden. Bij een fout antwoord zet je de bool die de lus stopt.

### Valkuilen

- Het Random-object binnen de lus aanmaken.
- Bij Next 10 als bovengrens geven, waardoor tien nooit voorkomt.
- De teller binnen de lus declareren.
- Zonder break niet weten hoe je stopt. Een bool in de lusvoorwaarde is hier de bedoeling.

## Wiskundequiz met levels

### Nota

Bouwt verder op de vorige oefening. Onderaan staat een PRO-deel: bij een fout een level zakken en pas na 3 fouten stoppen.

### Aanpak

Eén variabele erbij voor het level, die op 1 start. Na elk juist antwoord kijk je of het aantal juiste antwoorden een veelvoud van vijf is; daar dient modulo voor. De bovengrens is 5 keer het level en wordt in elke ronde opnieuw berekend. In het PRO-deel stopt de lus op een teller van fouten, en zakt het level bij een fout, maar nooit onder 1.

### Valkuilen

- Bij elk juist antwoord een level stijgen in plaats van per vijf.
- Het level binnen de lus declareren.
- De bovengrens één keer berekenen vóór de lus, waardoor een level-up niets verandert.
- Vergeten dat de bovengrens van Next niet meetelt.
- In het PRO-deel onder level 1 zakken, waardoor de bovengrens 0 wordt en Next crasht.

## Codemenu

### Aanpak

Een do while rond het hele menu, die pas stopt bij de keuze om af te sluiten. Binnen de lus: het scherm leegmaken, het menu tonen, de keuze inlezen en met een switch afhandelen. De code van elke oefening komt in een eigen case, tussen accolades. Op het einde van elke ronde een pauze met ReadLine, zodat de student ziet wat er gebeurde voor het scherm weer leeggemaakt wordt.

### Valkuilen

- Twee oefeningen in twee cases plakken die dezelfde variabelenaam gebruiken, en dan CS0128 krijgen. Alle cases delen één scope; accolades rond de code van een case lossen het op.
- De Clear op de verkeerde plaats, waardoor het resultaat meteen verdwijnt.
- Geen default in de switch, waardoor een verkeerde toets stil genegeerd wordt.
- De stopkeuze wel in de switch afhandelen maar niet in de lusvoorwaarde.

## Wiskunde-quizprogramma

### Nota

Dit combineert de wiskundequiz met levels met een menu zoals in Codemenu. Beide oefeningen moeten dus al werken.

### Aanpak

Eerst het menu tonen en de keuze inlezen, vóór alle lussen. Bij keuze 2 vraag je ook het startlevel. Daarna bepaalt een if welke lus er draait: de studeermodus is een for met 10 opgaven en een pauze van 5 seconden, de andere twee modi zijn dezelfde quiz met levels, enkel met een ander startlevel. Werk modus per modus en test elke modus apart.

### Valkuilen

- Het menu binnen de spellus tonen, waardoor het na elke vraag terugkomt.
- In de studeermodus toch op invoer wachten.
- De studeermodus een lus zonder einde maken. De opgave vraagt 10 opgaven.
- Het gekozen startlevel niet gebruiken in de berekening van de bovengrens.

## Steen schaar papier

### Nota

De opgave vraagt ook een flowchart, en raadt aan om met een enum te werken.

### Aanpak

Een enum met de drie keuzes maakt de vergelijkingen leesbaar. De keuze van de computer is een willekeurig getal van 0 tot en met 2 dat je naar die enum cast. De lus blijft lopen tot iemand 5 punten heeft, dus twee scores staan buiten de lus. Binnen de lus eerst het gelijkspel afhandelen, en daarna de drie gevallen waarin de gebruiker wint; alles wat overblijft, is een winst voor de computer.

### Valkuilen

- Alle negen combinaties uitschrijven in plaats van eerst het gelijkspel af te zonderen.
- De scores binnen de lus declareren.
- De stopvoorwaarde maar voor één van beide spelers testen.
- Next(1, 4) gebruiken, waardoor de computer nooit steen kiest en soms een waarde zonder naam krijgt.
- Enum.Parse zonder true, waardoor steen met een kleine letter crasht.

## BeerSong

### Aanpak

Eén lus die aftelt. De laatste strofen wijken af, dus de lus stopt vroeger en die zinnen komen erachter. Laat de student eerst aanduiden vanaf welk getal de tekst niet meer in het patroon past. Na elke strofe een lege lijn.

### Valkuilen

- De lus tot nul laten lopen en dan de afwijkende strofen dubbel krijgen.
- Enkelvoud en meervoud verwarren bij één fles.
- In de tweede zin het huidige getal tonen in plaats van dat getal min één.
- De lege lijn tussen de strofen vergeten.

## De slag om Helm's Deep

### Nota

Dit is de Final Essentials van week 2 en de zwaarste oefening van het hoofdstuk. Werk in stukken en test na elk stuk.

### Aanpak

Bouw dit op in lagen. Eerst de lus die namen inleest tot EINDE: de naam één keer vóór de lus en opnieuw op het einde van elke ronde. Dan het toekennen van punten per soort vijand, met een keten van if. Dan de scores en de kills per held, in kleur. Pas als dat werkt komt de kill streak erbij: je houdt bij wie de vorige kill maakte en hoeveel keer na elkaar dat al was. Het eindrapport is rekenwerk achteraf, met een percentage dat om een kommagetal en F2 vraagt.

### Valkuilen

- De streakteller niet terugzetten wanneer de andere held scoort.
- Vergeten de streakteller te resetten na de bonus, waardoor elke volgende kill weer bonus geeft.
- De vorige killer bijwerken voor je hem vergeleken hebt met de huidige.
- Het percentage berekenen met twee gehele getallen, waardoor er nul uitkomt.
- Math.Round gebruiken voor het percentage, waardoor 80 geen twee cijfers na de komma toont.
- Delen door nul wanneer er geen enkele kill was.
- ResetColor vergeten tussen de gekleurde meldingen.
- De vraag naar de vijand ook stellen wanneer er een onbekende held of EINDE getypt is.

## Become Neo

### Nota

Een bonusoefening. De basiscode staat in de opgave; de student breidt ze uit. De lus is hier bewust oneindig, en dat mag: er staat geen break in.

### Aanpak

De bestaande oneindige lus blijft. In plaats van twee vaste kleuren trek je een willekeurig getal en zet je met een keten van if of met een switch de bijhorende kleur. Extra effecten zijn gewoon extra if-jes met een willekeurige kans erin.

### Valkuilen

- De kleur instellen na het schrijven van het teken.
- De pauze weglaten, waardoor het beeld onleesbaar snel gaat.
- Vergeten dat Convert.ToChar op sommige getallen een onzichtbaar teken geeft.
