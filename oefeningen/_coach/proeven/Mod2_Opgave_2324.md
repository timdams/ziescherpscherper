<!--
  Coach- en quoteergegevens voor oefeningen/EindeTests/Mod2/Opgave_2324.md.
  Formaat: zie _LEESMIJ.md in deze map.
-->
# Nota

Een vaardigheidsproef met drie losse oefeningen: statistieken over ingevoerde getallen, twee methoden rond een array met willekeurige kommagetallen, en een kassamenu voor een cinema. Vraag eerst aan welke oefening de student bezig is. Geef geen code, en ook geen methodesignaturen die hij zo kan overnemen.

# Aanpak

Oefening 1 (Getallenverwerker): eerst de getallen bewaren, want het meest ingevoerde getal kan je niet vinden zonder ze allemaal te hebben. Kleinste, grootste en gemiddelde zijn de gekende patronen. Voor het meest ingevoerde getal: laat de student in gewone taal zeggen hoe hij met pen en papier zou tellen hoe vaak elk getal voorkomt, en wat hij onthoudt terwijl hij dat doet.

Oefening 2 (Arrayverwerker): begin bij GenereerRandom. Vraag wat NextDouble teruggeeft en hoe hij dat omvormt tot een getal tussen twee grenzen. Behandel de twee speciale gevallen eerst: welke grenzen gebruik je dan eigenlijk? Daarna ToonArrayKleuren: eerst het gemiddelde, dan onder en boven, dan pas de rij tonen. Vraag wanneer een getal "tussen" onder en boven ligt.

Oefening 3 (Cinemasysteem): welke gegevens moeten doorheen het hele programma bewaard blijven? Laat hem de volgorde van één ronde zeggen: menu en totalen tonen, keuze lezen, fout of verwerken. Welke opties doen bijna hetzelfde, en wat verschilt er?

# Valkuilen

- Oefening 1: het kleinste of grootste zoeken met 0 als startwaarde.
- Oefening 1: het gemiddelde met een gehele deling berekenen, of het tonen zonder twee cijfers na de komma.
- Oefening 1: bij het tellen van de voorkomens de teller niet terug op 0 zetten voor het volgende getal.
- Oefening 1: het label ook in het rood tonen, of de kleur niet terugzetten.
- Oefening 2: NextDouble vermenigvuldigen met de bovengrens in plaats van met het verschil tussen de grenzen.
- Oefening 2: bij omgekeerde grenzen de ene overschrijven voor de andere bewaard is.
- Oefening 2: onder en boven allebei afronden met dezelfde functie, of Round gebruiken in plaats van naar boven en naar onder afronden.
- Oefening 2: een newline na elk getal in plaats van een tab.
- Oefening 2: het afgeronde getal vergelijken met onder en boven in plaats van het getal zelf.
- Oefening 3: de menukeuze eerst omzetten naar een getal, waardoor het programma crasht als de gebruiker letters intypt.
- Oefening 3: bij het groepsticket het aantal tickets bijtellen als aantal personen in plaats van vijf keer zoveel.
- Oefening 3: na een foute keuze toch "Hoeveel?" vragen.
- Oefening 3: de drie ticketopties drie keer uitschrijven in plaats van een methode te gebruiken (boete).

# Puntenverdeling

De originele proef had geen puntenverdeling. Deze is achteraf toegevoegd, op 20.

**Oefening 1, Getallenverwerker (6 punten)**

- n vragen en daarna n gehele getallen inlezen en bewaren: 1
- Kleinste en grootste ingevoerde getal: 1,5
- Het meest ingevoerde getal en hoe vaak het ingevoerd werd: 2
- Gemiddelde met twee cijfers na de komma, zonder gehele deling: 1
- Enkel de waarden in het rood: 0,5

**Oefening 2, Arrayverwerker (7 punten)**

- GenereerRandom met de int-parameters onderGrens en bovenGrens en een double als returntype; geeft een kommagetal van de ondergrens tot de bovengrens, die zelf nooit voorkomt: 1,5
- Gelijke grenzen: het dubbele van de bovengrens als bovengrens; ondergrens groter dan bovengrens: de grenzen omgekeerd: 1
- ToonArrayKleuren met een double-array als parameter: gemiddelde berekend met een loop, int boven naar boven afgerond en int onder naar onder afgerond: 1,5
- De getallen naast elkaar met één cijfer na de komma en een tab ertussen, met vierkante haakjes rond de getallen tussen onder en boven: 1,5
- Toepassing: grenzen vragen, 100 keer GenereerRandom oproepen, de getallen in een array bewaren en die aan ToonArrayKleuren geven: 1,5

**Oefening 3, Cinemasysteem (7 punten)**

- Het programma blijft het menu tonen, met de vier opties en eronder het aantal personen en de prijs: 1,5
- Een andere keuze dan 1 tot en met 4: foutboodschap en opnieuw het menu, zonder iets te veranderen: 1,5
- Opties 1 en 2: aantal vragen, personen en prijs correct bijtellen: 1,5
- Optie 3: per groepsticket 30 euro en 5 personen: 1
- Optie 4: personen en prijs terug op 0: 0,5
- De totalen blijven bewaard tussen de keuzes door: 1

# Beoordeling

- Oefening 1: "welk getal het vaakst opnieuw werd ingevoerd" kan je lezen als het aantal herhalingen, maar de voorbeelduitvoer telt alle keren (3). Volg de voorbeelduitvoer, al keur je "2 keer opnieuw" ook goed als de tekst van de uitvoer dat zegt. Bij een gelijke stand zegt de opgave niet welk getal je toont: elk van de getallen met het hoogste aantal is goed.
- Oefening 1: een gesorteerde kopie gebruiken om het kleinste en grootste te vinden, of om het meest voorkomende te tellen, mag. Methoden zijn niet verplicht.
- Oefening 1: het gemiddelde afronden zodat een nul achteraan wegvalt (1,6 in plaats van 1,60) is niet "tot 2 cijfers na de komma" zoals in het voorbeeld: dat kost de helft van dat deelpunt.
- Oefening 2: de opgave zegt zelf dat ToonArrayKleuren ondanks de naam geen kleuren gebruikt. Haakjes zijn genoeg voor het maximum; kleuren erbij mag.- Oefening 2: de opgave legt vast dat onder en boven zelf meetellen en dat je het getal zelf vergelijkt, niet de afgeronde waarde. Onder en boven uitsluiten maakt in de praktijk geen verschil: ook goed. Vergelijkt de student de afgeronde waarde, dan krijgen getallen vlak bij onder of boven de verkeerde opmaak: 0,5 minder op het deelpunt van de visualisatie.
- Oefening 2: het gemiddelde tonen ("Gemiddelde was: ...") staat enkel in de voorbeelduitvoer. Met of zonder is goed.
- Oefening 2: een getal dat soms zonder cijfer na de komma verschijnt (17 in plaats van 17,0), is niet "telkens 1 cijfer na de komma": de helft van dat deelpunt.
- Oefening 2: GenereerRandom en ToonArrayKleuren mogen niets vragen. Een GenereerRandom die zelf de grenzen vraagt of het getal toont, doet niet wat gevraagd is.
- Oefening 3: "de gebruiker doet mogelijk foute invoer". Een keuze buiten 1 tot en met 4 moet opgevangen worden. Letters in de menukeuze opvangen kan met leerstof uit semester 1, door de keuze als tekst te vergelijken in plaats van ze eerst om te zetten. Een programma dat bij letters in de menukeuze crasht, verliest 0,5 op het tweede deelpunt. TryParse of try en catch zijn nog niet gezien, maar wie ze hiervoor gebruikt, verliest niets. Een controle op het aantal tickets is niet vereist: een crash bij letters daar kost niets.
- Oefening 3: er is geen optie om te stoppen. Een eindeloze loop zonder `break` is dus goed en geen boete.
- Oefening 3: dezelfde verwerking voor de ticketopties of het menu op meerdere plaatsen gekopieerd, is de boete voor redundante code, geen verlies in de onderdelen.
- De teksten in de uitvoer en de spaties tellen niet mee.
