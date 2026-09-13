<!--
  Coach- en quoteergegevens voor oefeningen/EindeTests/Mod2/Opgave_2425.md.
  Formaat: zie _LEESMIJ.md in deze map.
-->
# Nota

Een vaardigheidsproef met drie losse oefeningen: een saunamenu volgens een flowchart, een kentekengenerator met methoden die elkaar oproepen, en hulpmethoden op een IP-adres als string-array. Vraag eerst aan welke oefening de student bezig is. Geef geen code, en ook geen methodesignaturen die hij zo kan overnemen. De methode VerkrijgIP geeft de opgave zelf; ze gebruikt dingen die de student nog niet gezien heeft. Leg die niet uit, en zeg dat hij ze niet hoeft te begrijpen of aan te passen.

# Aanpak

Oefening 1 (Sauna): laat de student de flowchart in gewone taal volgen: waar begint de lus terug, en welke pijl eindigt het programma? Vraag welke gegevens hij bijhoudt (het aantal blokken) en hoe hij daaruit de warmte haalt. Bij het opwarmen: laat hem met de voorbeelduitvoer uitrekenen hoeveel blokken er bijkomen bij 65 graden, en wanneer hij dus moet stoppen met toevoegen.

Oefening 2 (Kentekengenerator): per methode eerst zeggen wat ze binnenkrijgt en wat ze teruggeeft. Bij GenLandcode: hoe maak je een willekeurige hoofdletter, en hoe krijg je iets dat in een kwart van de gevallen gebeurt? Bij Combineer: hoe maak je de landcode optioneel, en waarom staat ze als laatste parameter? GenereerAutoKenteken en Main komen als laatste.

Oefening 3 (IP IP IP): laat hem VerkrijgIP eerst gewoon oproepen en de array tonen. Daarna elke hulpmethode apart: wat krijgt ze mee, wat geeft ze terug, en wat toont Main. Vraag bij IsCorrectAdres en IsGelijk hoe hij alle delen overloopt, en wanneer hij het antwoord al kent. Bij VerhoogAdres: moet het origineel veranderen, of maak je een nieuwe array?

# Valkuilen

- Oefening 1: het aantal blokken niet verminderen bij elke keer dat het menu verschijnt, of het verminderen na het tonen.
- Oefening 1: blokken toevoegen tot de warmte voorbij de gewenste temperatuur gaat.
- Oefening 1: de rode tekst twee keer uitschrijven in plaats van één methode, of de kleur niet terugzetten.
- Oefening 1: het menu als een `while (true)` met een `break` (boete).
- Oefening 2: een willekeurige letter met een bovengrens die de Z uitsluit.
- Oefening 2: Random.Next voor de kans van 25% zo kiezen dat het geen kwart is.
- Oefening 2: de optionele landcode vooraan zetten, wat niet compileert.
- Oefening 2: bij "XX" toch "XX" doorgeven aan Combineer in plaats van de parameter weg te laten.
- Oefening 3: twee arrays vergelijken met `==`, wat enkel de wegwijzers vergelijkt.
- Oefening 3: in VerhoogAdres de meegegeven array aanpassen, waardoor ook het adres in Main verandert.
- Oefening 3: bij IsCorrectAdres enkel het eerste deel of enkel het laatste deel controleren.
- Oefening 3: de using-regels voor VerkrijgIP vergeten, waardoor het project niet compileert.

# Puntenverdeling

De punten per oefening komen uit de opgave: 5, 6 en 8, samen 19. De opgave noemt geen totaal. De deelpunten binnen een oefening zijn achteraf toegevoegd.

**Oefening 1, Sauna (5 punten)**

- Menu in een loop met de huidige warmte; elke keer dat het menu verschijnt, gaat er een blok af (de eerste keer 40 graden): 1,5
- Keuze 1: "OPGELET WARM!" in rode letters: 1
- Keuze 2: gewenste warmte vragen, blok per blok toevoegen met de nieuwe warmte, nooit boven de gewenste warmte, en daarna de veiligheidsvoorschriften: 2
- Keuze 3 stopt het programma via de loopvoorwaarde: 0,5

**Oefening 2, Kentekengenerator (6 punten)**

- GenGetal: geen parameters, vraagt een getal en geeft het dubbele terug, 0 bij een negatief getal: 1
- GenLandcode: geen parameters, geeft twee willekeurige hoofdletters van A tot en met Z terug, en in 25% van de gevallen "XX": 1,5
- Combineer: een geheel getal en een optionele landcode met standaard "BE", geeft landcode en getal samen als string terug: 1
- GenereerAutoKenteken: geen parameters, geeft een string terug, roept GenGetal en GenLandcode op, en Combineer zonder landcode als die "XX" was: 1,5
- Main roept GenereerAutoKenteken vijf keer op in een loop, bewaart de kentekens in een array en toont ze daarna: 1

**Oefening 3, IP IP IP (8 punten)**

- Eigen IP-adres tonen met punten, en het masker met x als laatste deel: 1,5
- IsLokaal: lokaal als het eerste deel 10 of 192 is: 1
- ToonOmgekeerd: toont de vier delen in omgekeerde volgorde, met punten: 1
- IsCorrectAdres: elk van de vier delen is een getal van 1 tot en met 254: 1,5
- IsGelijk: twee adressen zijn gelijk als alle delen gelijk zijn: 1
- VerhoogAdres: laatste deel plus 1, en 255 wordt 1; het nieuwe adres komt terug als string-array: 1,5
- De werking van de vijf methoden in Main getoond met het eigen IP-adres uit VerkrijgIP: 0,5

# Beoordeling

- Oefening 1: in de flowchart wordt eerst een blok toegevoegd en pas daarna gekeken of de gewenste temperatuur bereikt is. De opgave laat aannemen dat de gewenste warmte minstens 10 graden boven de huidige ligt, dus een loop die eerst controleert en een loop die altijd minstens één blok toevoegt, zijn allebei goed. Bij het voorbeeld van 65 graden moeten er drie blokken bijkomen.
- Oefening 1: dat de blokken onder nul kunnen zakken, regelt de opgave niet. Daar let je niet op.
- Oefening 1: de veiligheidsvoorschriften verschijnen bij keuze 1 en na het opwarmen. Die tekst op twee plaatsen uitschrijven in plaats van één methode, is de boete voor redundante code, geen verlies in de onderdelen.
- Oefening 2: GenGetal vraagt zelf iets aan de gebruiker; dat legt de opgave op.
- Oefening 2: een willekeurige letter mag met een char-berekening of met een array of string van letters, zolang elke letter van A tot en met Z kan voorkomen.
- Oefening 3: VerkrijgIP komt uit de opgave. Ze levert geen punten op en telt niet als redundante code. Ze gebruikt var, foreach, try en catch en klassen uit System.Net, allemaal buiten de leerstof; dat telt niet tegen de student. De using-regels die ze nodig heeft, staan in de opgave; ze toevoegen is geen aanpassing van de methode. Past de student de methode zelf aan, bijvoorbeeld zodat ze een vast adres teruggeeft, dan krijgt hij 0 voor het eerste onderdeel.
- Oefening 3: extra tests met een zelfgekozen adres mogen, naast de demonstratie met het eigen adres.
- Oefening 3: de opgave laat de returntypes vrij. IsLokaal, IsCorrectAdres en IsGelijk die een bool teruggeven, is de logische aanpak. Toont zo'n methode zelf de boodschap in plaats van een bool terug te geven, trek dan 0,5 af bij het eerste onderdeel waar dat gebeurt en schrijf bij de andere "al aangerekend".
- Oefening 3: "je hoeft niets met het 2e getal te doen" bij VerhoogAdres betekent dat er niets doorschuift naar het vorige deel. Een student die toch iets laat doorschuiven, verliest niets, zolang 254 plus 1 in het laatste deel 1 wordt.
- Oefening 3: het adres met punten tonen op meerdere plaatsen kopiëren in plaats van een methode of string.Join te gebruiken, is de boete voor redundante code.
- Oefening 3: het echte IP-adres verschilt per computer. Of het adres lokaal of correct blijkt, maakt niet uit; de methoden moeten juist rekenen.
- De teksten in de uitvoer en de spaties tellen niet mee.
