<!--
  Coach- en quoteergegevens voor oefeningen/EindeTests/Mod2/Opgave_2324b.md.
  Formaat: zie _LEESMIJ.md in deze map.
-->
# Nota

Een vaardigheidsproef met drie losse oefeningen: een flowchart omzetten naar code, een casinosimulatie met een methode, en een registratie met twee synchrone arrays en statistieken. Vraag eerst aan welke oefening de student bezig is. Geef geen code, en ook geen methodesignaturen die hij zo kan overnemen. De getallen in de voorbeelduitvoer van de roulette hangen van het toeval af; zegt de student dat zijn getallen anders zijn, dan is dat geen fout.

# Aanpak

Oefening 1 (Lampoplosser): laat de student eerst in gewone taal de drie paden door de flowchart zeggen, en daarna wat er na elk eindpunt gebeurt. Welke vraag bepaalt of het programma opnieuw begint, en welke loop past daarbij?

Oefening 2 (Roulette): eerst de methode Casino. Laat hem zeggen wat er in één ronde gebeurt, en dan hoe hij dat n keer herhaalt. Daarna het hoofdprogramma: vier keer hetzelfde met een ander aantal rondes. Vraag hoe hij dat doet zonder dezelfde regels vier keer te schrijven.

Oefening 3 (Conferentie): welke gegevens heb je nodig naast de twee arrays, zodat je weet hoeveel plaatsen er echt ingevuld zijn? Laat hem voor fase 1 zeggen wanneer de invoer stopt: er zijn twee redenen. Fase 2 is overlopen, optellen en tellen, maar enkel over het ingevulde deel. Fase 3 is zoeken en stoppen.

# Valkuilen

- Oefening 1: de flowchart uitschrijven zonder loop, of met een loop die maar één keer herbegint.
- Oefening 1: ook de vragen in het rood tonen, of de kleur niet terugzetten, waardoor alles erna rood blijft.
- Oefening 2: in elke ronde één willekeurig getal vergelijken met een vast getal in plaats van twee willekeurige getallen.
- Oefening 2: Casino de winst of het verlies laten teruggeven in plaats van het resterende geld, waardoor het hoofdprogramma het eindkapitaal en het verschil fout toont.
- Oefening 2: het verschil omgekeerd berekenen (start min eind), waardoor een verlies positief lijkt.
- Oefening 2: de vier aantallen vier keer uitschrijven in plaats van een array en een loop (boete).
- Oefening 3: de naam "stop" toch als deelnemer opslaan, of er nog een leeftijd voor vragen.
- Oefening 3: geen rekening houden met de grens van 50, waardoor de 51ste deelnemer een crash geeft.
- Oefening 3: het gemiddelde delen door 50 of door Length in plaats van door het aantal deelnemers, of met een gehele deling.
- Oefening 3: bij de statistieken de lege plaatsen van de array mee overlopen.
- Oefening 3: in fase 3 bij elke naam die niet past al "niet gevonden" tonen.

# Puntenverdeling

De punten per oefening komen uit de opgave: 5, 7 en 8, samen 20. De deelpunten binnen een oefening zijn achteraf toegevoegd.

**Oefening 1, Lampoplosser (5 punten)**

- Alle vragen en eindpunten van de flowchart, in de juiste volgorde en met de juiste takken voor yes en no: 2
- Enkel de oplossing (het groene eindpunt) in rode tekst: 1
- Na elk eindpunt "Restart?": bij yes opnieuw vanaf "Lamp doesn't work", bij no stopt het programma via de loopvoorwaarde: 2

**Oefening 2, Roulette (7 punten)**

- Casino met een double en een int als parameters en een double als returntype, die n rondes simuleert met een loop en het resterende geld teruggeeft: 1,5
- Per ronde twee willekeurige getallen van 0 tot 60; gelijk geeft 1 erbij, anders 0,1 eraf: 2
- Startkapitaal vragen, en voor 10, 100, 10 000 en 1 000 000 rondes het eindkapitaal tonen: 2
- Het verschil met het startkapitaal tonen, groen bij winst en rood bij verlies: 1,5

**Oefening 3, Conferentie (8 punten)**

- Twee synchrone arrays voor namen en leeftijden; fase 1 vraagt telkens naam en leeftijd, bewaart ze op dezelfde index en stopt bij "stop" zonder die naam op te slaan: 2
- Hoogstens 50 deelnemers: fase 1 stopt ook als de arrays vol zijn: 1
- Aantal deelnemers en gemiddelde leeftijd, enkel over de ingevulde plaatsen en zonder gehele deling: 1,5
- Aantal deelnemers onder het gemiddelde met hun namen, en aantal boven of gelijk aan het gemiddelde met hun namen: 2
- Fase 3: één naam zoeken in het ingevulde deel, de leeftijd tonen of "niet gevonden": 1,5

# Beoordeling

- Oefening 1: yes en no volstaan, zonder controle op hoofdletters of andere invoer. De tekst van de vragen neemt de student over uit de flowchart; kleine verschillen zoals een punt achteraan tellen niet.
- Oefening 1: een loop met een voorwaarde die bijhoudt of de gebruiker opnieuw wil, is de logische aanpak. Dezelfde vragen een paar keer onder elkaar kopiëren is de boete voor redundante code. Werkt het herbeginnen daardoor maar een beperkt aantal keer, dan verliest hij daarbovenop de punten van het derde onderdeel.
- Oefening 2: de opgave sluit 60 uit. Wie 60 toch meeneemt, verliest daar niets, zolang beide getallen dezelfde grenzen hebben.
- Oefening 2: de getallen in de voorbeelduitvoer hangen van het toeval af. Beoordeel de regels, niet de getallen. Lange kommagetallen door afrondingsfouten van double zijn goed; afronden bij het tonen ook.
- Oefening 2: bij een verschil van precies 0 zegt de opgave niets over de kleur. Elke keuze is goed.
- Oefening 2: de vier aantallen met vier keer dezelfde regels uitschrijven in plaats van een array en een loop is de boete voor redundante code, geen verlies in het derde onderdeel. Een Casino die zelf iets vraagt of toont, doet niet wat gevraagd is.
- Oefening 3: een teller van het aantal deelnemers, die in fase 2 en 3 de grens van de loops bepaalt, is de logische aanpak. Een merkwaarde zoals "leeg" in de lege plaatsen mag ook, als het werkt wanneer de arrays vol zijn.
- Oefening 3: wat er moet gebeuren als er meteen "stop" getypt wordt, zegt de opgave niet. Daar let je niet op.
- Oefening 3: in de voorbeelduitvoer staan de namen gescheiden door komma's. Elke leesbare scheiding is goed, ook met een komma achteraan. Het gemiddelde mag als geheel getal of met cijfers na de komma verschijnen, maar het moet voor het vergelijken wel als kommagetal berekend zijn.
- Oefening 3: methoden zijn niet verplicht. Het zoeken in fase 3 mag stoppen zodra de naam gevonden is; een `break` in die zoeklus is zoek-en-stop en dus geen boete.
- De teksten in de uitvoer en de spaties tellen niet mee.
