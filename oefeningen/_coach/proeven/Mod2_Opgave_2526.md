<!--
  Coach- en quoteergegevens voor oefeningen/EindeTests/Mod2/Opgave_2526.md.
  Formaat: zie _LEESMIJ.md in deze map.
-->
# Nota

Een vaardigheidsproef met drie losse oefeningen: een flowchart omzetten naar code, arrays met statistieken en een menu, en een programma opgebouwd uit methoden. Vraag eerst aan welke oefening de student bezig is. Geef geen code, en ook geen methodesignaturen die hij zo kan overnemen.

# Aanpak

Oefening 1 (Koffiereparatie): elke ruit in de flowchart is een vraag met y of n, en elke pijl terug naar boven betekent dat het programma opnieuw begint. Laat de student eerst in gewone taal zeggen welke paden terug naar de start leiden en welk pad het programma beëindigt. Pas daarna kiest hij welke loop dat wordt en wat de loopvoorwaarde is.

Oefening 2 (Filmfan): eerst de lengte vragen, dan twee arrays van die lengte vullen. Tonen, statistieken berekenen en het menu zijn aparte stappen, en tonen en statistieken moeten na elke aanpassing opnieuw gebeuren. Laat hem nadenken over wat daarom best een methode wordt.

Oefening 3 (Pretparkbeheer): de flowchart zegt welke methode welke oproept. Laat hem per methode eerst zeggen wat ze binnenkrijgt en wat ze teruggeeft, voor hij code schrijft. Enkel ToonRapport toont iets op het scherm.

# Valkuilen

- Oefening 1: de flowchart uitschrijven als geneste ifs zonder loop, waardoor "terug naar de start" maar één keer werkt.
- Oefening 1: hoofdletters vergeten, zodat "Y" niet als ja telt.
- Oefening 2: de bovengrens van Next verkeerd kiezen, waardoor 10 nooit voorkomt.
- Oefening 2: het gemiddelde met een gehele deling berekenen.
- Oefening 2: het hoogste of laagste zoeken met 0 als startwaarde.
- Oefening 2: het filmnummer rechtstreeks als index gebruiken, of de score boven 10 laten gaan.
- Oefening 2: de statistieken maar één keer berekenen, voor het menu start.
- Oefening 3: in KanOpen, BerekenBezoekersCapaciteit of BerekenDagOmzet iets tonen in plaats van teruggeven.
- Oefening 3: de optionele parameter vergeten, of de capaciteit en de omzet toch berekenen als het park dicht blijft.
- Het menu schrijven als een `while (true)` met een `break` (boete).

# Puntenverdeling

De originele proef had geen puntenverdeling. Deze is achteraf toegevoegd, op 20.

**Oefening 1, Koffiereparatie (5 punten)**

- Alle vragen en boodschappen van de flowchart, in de juiste volgorde: 2
- Terug naar de start waar de flowchart dat zegt, en stoppen na "Fixed!": 2
- Invoer y en n zonder onderscheid tussen hoofdletters en kleine letters: 1

**Oefening 2, Filmfan (8 punten)**

- Lengte vragen, twee arrays aanmaken en vullen: titels Film1 tot en met FilmX, ratings van 0 tot en met 10: 2
- Films tonen: sterretje en groen bij 8 of meer, uitroepteken en rood onder 4, anders gewoon: 1,5
- Gemiddelde op 2 cijfers na de komma, hoogste, laagste, en aantal keer 8 of meer: 2,5
- Menu: een filmnummer verhoogt de score van die film met 1 (hoogstens 10), weergave en statistieken opnieuw, stoppen bij een negatief getal: 2

**Oefening 3, Pretparkbeheer (7 punten)**

- Aantal werknemers en prijs vragen, doorgeven aan de methode Pretparkbeheer, die de andere methoden in de juiste volgorde oproept: 2
- KanOpen: krijgt het aantal werknemers, geeft een bool terug, open vanaf 20 werknemers: 1
- BerekenBezoekersCapaciteit: geeft 50 bezoekers per werknemer terug: 1
- BerekenDagOmzet: optionele parameter voor de prijs met standaard 30, geeft de omzet terug: 1,5
- ToonRapport: toont het rapport, zonder bezoekers en omzet als het park dicht blijft: 1,5

# Beoordeling

- Oefening 1: een loop met een voorwaarde die bijhoudt of het toestel hersteld is, is de logische aanpak. Wie dezelfde vragen een paar keer onder elkaar kopieert om "terug naar de start" na te bootsen, krijgt de boete voor redundante code. Werkt het terugkeren daardoor maar één of twee keer, dan verliest hij ook de punten voor terugkeren. Dat is geen dubbele straf: de boete gaat over het kopiëren, het puntverlies over het feit dat het programma niet doet wat de flowchart vraagt.
- Oefening 2: de lijst en de statistieken na een aanpassing opnieuw uitschrijven in plaats van dezelfde code te hergebruiken, is de boete voor redundante code, geen verlies in het onderdeel.
- Oefening 2: de spaties in de uitvoer tellen niet mee.
- Oefening 3: de hoofdmethode heet Pretparkbeheer en roept de andere methoden op. Staat die logica in Main, dan is het eerste onderdeel niet af.
- In oefening 1 en 2 zijn methoden niet verplicht.
