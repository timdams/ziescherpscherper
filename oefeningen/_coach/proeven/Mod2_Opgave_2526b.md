<!--
  Coach- en quoteergegevens voor oefeningen/EindeTests/Mod2/Opgave_2526b.qmd (2e zit 2026:
  Pakjesbezorg-Simulatie, Datacenter Monitor, Sapbar Generator).
  Formaat: zie _LEESMIJ.md in deze map.
-->
# Nota

Een vaardigheidsproef uit de tweede zit met drie losse oefeningen. Oefening 1, Pakjesbezorg-Simulatie: een rit langs 4 stops als loop, met een flowchart als hulp. Oefening 2, Datacenter Monitor: drie synchrone arrays met willekeurige waarden, een methode met een optionele parameter die een tabel toont en een methode die een alarm teruggeeft. Oefening 3, Sapbar Generator: drie methoden die elkaar oproepen en strings teruggeven. Vraag eerst aan welke oefening de student bezig is. Geef geen code, geen methodesignaturen en geen voorwaarden die hij zo kan overnemen.

# Aanpak

Oefening 1: laat de student eerst de flowchart in eigen woorden overlopen. Wat gebeurt er één keer voor de loop, wat gebeurt er per stop, en wat pas na de loop? Welke variabelen moeten daarom voor de loop bestaan? De afstand verschilt per stop: vraag hoe hij bij stopnummer 3 aan 18 km komt, zonder het blok per stop te kopiëren. Laat hem daarna met de getallen van het voorbeeld narekenen wanneer de waarschuwing moet verschijnen.

Oefening 2: begin bij het vullen. Hoe groot zijn de arrays, en welke grenzen geef je aan Random zodat de maximumwaarde ook kan voorkomen? Voor ToonData: wat krijgt de methode binnen, en wat geeft ze terug? Wat betekent het dat de vierde parameter optioneel is, en hoe beslis je per waarde of er een sterretje bij komt? Laat hem voor AlarmMeting eerst uitleggen hoe hij "minstens twee van de drie" nagaat. Bij het menu: de gebruiker denkt in dagen vanaf 1, de array in indexen vanaf 0. Waar gebeurt die omzetting, en hoe laat hij de loop stoppen zonder break?

Oefening 3: laat de student per methode eerst zeggen wat ze binnenkrijgt en wat ze teruggeeft, voor hij code schrijft. Welke methode is het eenvoudigst, en waarom begin je best daar? Vraag bij MaakMenuTitel en GenereerMenukaart telkens welke andere methode het werk al doet. Wie toont uiteindelijk iets op het scherm? Hoe krijg je vijf regels onder elkaar in één string?

# Valkuilen

- Oefening 1: het blok voor één stop vier keer onder elkaar kopiëren in plaats van een loop (boete).
- Oefening 1: de totale afstand niet optellen maar gewoon 60 tonen.
- Oefening 1: bij een negatief aantal wel op 0 zetten maar de waarschuwing vergeten, of het aantal pas controleren voor het inladen.
- Oefening 1: de kleur na de welkomstboodschap niet terugzetten, waardoor alles rood wordt.
- Oefening 2: Random telkens opnieuw aanmaken of een verkeerde bovengrens kiezen.
- Oefening 2: de sterretjes altijd tonen, ook als de parameter false is, of de optionele parameter vervangen door een tweede methode.
- Oefening 2: onder de helft testen met kleiner of gelijk.
- Oefening 2: in AlarmMeting testen op precies twee problemen, waardoor drie problemen geen alarm geven.
- Oefening 2: AlarmMeting zelf iets laten tonen in plaats van enkel een bool terug te geven.
- Oefening 2: het dagnummer rechtstreeks als index gebruiken, waardoor dag 30 crasht.
- Oefening 2: het menu schrijven als een `while (true)` met een `break` (boete).
- Oefening 3: in MaakMenuTitel of GenereerMenukaart de smoothienaam opnieuw zelf samenstellen in plaats van GenereerSmoothieNaam op te roepen.
- Oefening 3: de menukaart in GenereerMenukaart meteen tonen in plaats van ze als string terug te geven.
- Oefening 3: het volgnummer vooraan of achteraan vergeten.
- Oefening 3: het volume als string doorgeven in plaats van als int.
- Een methode binnen Main schrijven in plaats van ernaast (boete).

# Puntenverdeling

De originele proef had geen puntenverdeling. Deze is achteraf toegevoegd, op 20.

**Oefening 1, Pakjesbezorg-Simulatie (6 punten)**

- Welkomstboodschap in rood, met de kleur nadien teruggezet: 0,5
- Een loop over de 4 stops die per stop het stopnummer en de juiste afstand vanaf de vorige stop toont: 1,5
- Per stop het aantal ingeladen en geloste pakjes vragen en het aantal in de wagen bijwerken: 1
- Een negatief aantal wordt 0, met een waarschuwing: 1
- Na elke stop het huidige aantal pakjes tonen: 0,5
- De totale afstand per stop optellen en na de rit de totale afstand (60 km) en het eindaantal tonen: 1,5

**Oefening 2, Datacenter Monitor (8 punten)**

- Drie arrays van 30 elementen, gevuld met willekeurige waarden binnen de grenzen (schijf 0 tot 1000, geheugen 0 tot 64, koeling 0 tot 200): 1,5
- ToonData: krijgt de drie arrays als parameter, geeft niets terug, toont een rij per dag met het dagnummer vanaf 1 en de drie waarden, in kolommen met tabs: 1,5
- ToonData: een vierde, optionele bool met standaard false; enkel bij true een sterretje achter elke waarde onder de helft van haar maximum; in het hoofdprogramma aangeroepen met true: 1,5
- AlarmMeting: krijgt de drie arrays en een index, geeft een bool terug, true als minstens twee van de drie voorwaarden gelden (schijf onder 100, geheugen onder 8, koeling onder 20): 2
- Hoofdprogramma: dagnummer vragen, omzetten naar een index, de alarmstatus van die dag tonen, herhalen tot een negatief getal en dan stoppen: 1,5

**Oefening 3, Sapbar Generator (6 punten)**

- GenereerSmoothieNaam: fruit, smaak en volume, geeft de naam terug in het formaat "Fruit – Smaak (Volume ml)": 1
- MaakMenuTitel: fruit, smaak, volume en seizoen, roept GenereerSmoothieNaam op met de eerste drie en geeft de titel terug in het formaat "Het lekkerste [seizoen] menu met '[smoothienaam]'": 1,5
- GenereerMenukaart: roept MaakMenuTitel op voor de titel, maakt in een lus 5 regels met GenereerSmoothieNaam, met het nummer vooraan en tussen haakjes achteraan, en geeft alles terug als één string met elke regel op een nieuwe lijn: 2
- Signaturen: de drie methoden hebben de gevraagde parameters (volume als int) en geven een string terug, zonder zelf iets te tonen: 0,5
- Hoofdprogramma: fruit, smaak, volume en seizoen vragen, GenereerMenukaart oproepen en het resultaat tonen: 1

# Beoordeling

Verbeter streng. Het maximum voor een onderdeel is enkel voor een oplossing die doet wat de opgave vraagt, op de manier die de opgave vraagt. Twijfel je of iets "ongeveer goed" is, geef dan het lagere halve punt en zeg waarom.

- Methoden zijn in oefening 1 niet verplicht. In oefening 2 en 3 zijn de namen, parameters en returntypes opgelegd. Een andere naam die duidelijk dezelfde methode is (bijvoorbeeld `GenereerMenuKaart`), kost niets. Een ander returntype of andere parameters wel, in het onderdeel van die methode.
- De huisregel van de cursus: enkel een methode die met Toon of Vraag begint, mag WriteLine of ReadLine gebruiken. Een methode als AlarmMeting of GenereerSmoothieNaam die zelf iets toont, verliest daarvoor 0,5 in haar onderdeel (in oefening 3 in het onderdeel Signaturen, niet nog eens bij de methode zelf).
- Een fout kost ofwel een boete, ofwel punten in een onderdeel, nooit allebei. Staat hieronder bij een fout "boete", dan trek je in het onderdeel niets af, en omgekeerd.

**Oefening 1**

- Een loop is verplicht. Vier kopieën van het blok voor één stop onder elkaar: de boete voor redundante code (-3), en het onderdeel van de loop behoudt zijn punten als de uitvoer klopt. Vier kopieën die elk net iets anders fout doen, verliezen daarbovenop wel punten in de onderdelen waar de uitvoer niet klopt.
- De afstand per stop via een array, een switch of een if-else op het stopnummer: allemaal goed. De afstanden of de totale afstand van 60 hard in de uitvoer typen in plaats van optellen: het laatste onderdeel is dan hoogstens 0,5. Een totale afstand die ook de terugweg of het depot dubbel telt, is fout: 1 minder.
- De afstand die bij Stop 1 getoond wordt, is 8 km, en na de rit is het totaal 60 km. Een stopnummer dat bij 0 begint in de uitvoer: 0,5 minder in het onderdeel van de loop.
- Negatief aantal: de controle hoort na het bijwerken met in- en uitgeladen pakjes. Wie controleert of er meer gelost wordt dan er na het inladen in de wagen zit, doet hetzelfde: goed. Wie het aantal op 0 zet maar geen waarschuwing toont, of een waarschuwing toont maar het aantal negatief laat: 0,5 voor dat onderdeel. De tekst van de waarschuwing is vrij, een kleur is niet vereist.
- Welkomstboodschap: rood en nadien ResetColor (of de kleur expliciet terugzetten). Blijft de rest van het programma rood: 0 voor dat onderdeel.
- Lege lijnen en kleine verschillen in de teksten tellen niet, zolang alle gevraagde informatie in de uitvoer staat. Invoercontrole is niet nodig: de gebruiker doet geen foute invoer.

**Oefening 2**

- Random: gehele getallen of kommagetallen, allebei goed. De grens "0 - 1000" is niet eenduidig: Next(0, 1000) en Next(0, 1001) zijn allebei goed. Een ondergrens van 1 of een verkeerd maximum (bijvoorbeeld 64 en 200 omgewisseld): 0,5 minder. Het aantal dagen als const is netjes, niet verplicht. Eén lus of drie lussen om te vullen: allebei goed.
- ToonData met de arrays als static variabelen buiten de methode in plaats van als parameters: het eerste onderdeel van ToonData is hoogstens 0,5. Een dagnummer dat bij 0 begint: 0,5 minder. Spaties in plaats van tabs zijn goed zolang de kolommen leesbaar zijn; alle waarden zonder scheiding achter elkaar: 0,5 minder. Perfect uitlijnen is niet vereist.
- Optionele parameter: moet echt optioneel zijn, met standaard false. Twee overloads in plaats van een optionele parameter: hoogstens 0,5 voor dat onderdeel. Geen parameter en altijd sterretjes: 0. "Onder de helft" is strikt kleiner dan 500, 32 en 100; kleiner of gelijk: 0,5 minder. Het sterretje hoort achter de waarde.
- Per rij acht of meer uitgeschreven WriteLine-varianten voor alle combinaties van sterretjes, in plaats van per waarde te beslissen: boete voor redundante code. Drie korte ifs, één per kolom, zijn geen boete.
- AlarmMeting: de drie grenzen zijn strikt kleiner dan. Kleiner of gelijk bij één of meer grenzen: 0,5 minder. "Minstens twee" betekent twee of drie. Testen op precies twee: 1 minder. Tellen met een teller of de drie combinaties uitschrijven met && en ||: allebei goed. Krijgt de methode het dagnummer in plaats van de index en trekt ze er zelf 1 af: 0,5 minder in dit onderdeel.
- Hoofdprogramma: de index is het dagnummer min 1. Wie het dagnummer rechtstreeks als index gebruikt, toont de verkeerde dag en crasht bij 30: 1 minder in het onderdeel. De herhaling stopt bij een negatief getal. `while (true)` met `break`: boete, geen puntverlies. De boodschap "Programma gestopt." is niet vereist. True en False met hoofdletter zijn goed.
- ToonData en de vragen aan de gebruiker mogen WriteLine en ReadLine gebruiken; AlarmMeting niet (zie de huisregel).
- LINQ-methoden op de arrays: boete. Array.Sort of andere methoden van Array zijn hier niet nodig maar ook geen boete.

**Oefening 3**

- De bedoeling van deze oefening is dat methoden elkaar oproepen. MaakMenuTitel die de smoothienaam zelf opnieuw samenstelt in plaats van GenereerSmoothieNaam op te roepen: dat onderdeel is hoogstens 0,5, en geen aparte boete voor redundante code. Hetzelfde voor GenereerMenukaart: stelt ze de titel of de regels zelf samen, dan is dat onderdeel hoogstens 1.
- GenereerMenukaart zonder lus (vijf keer dezelfde regel uitgeschreven): hoogstens 1 voor dat onderdeel, geen aparte boete. Een lus die 5 regels maakt met het nummer vooraan en tussen haakjes achteraan is vereist; ontbreekt één van beide nummers: 0,5 minder.
- De regels staan in één string onder elkaar, met \n of Environment.NewLine. Een extra lege regel op het einde kost niets. Een string zonder regeleinden (alles op één lijn): 0,5 minder.
- Het streepje in de smoothienaam mag een gewoon koppelteken zijn. De haakjes, "ml" en de enkele aanhalingstekens rond de smoothienaam in de titel horen erbij: ontbreken ze, 0,5 minder in het onderdeel van die methode.
- Een methode die de string toont in plaats van ze terug te geven (void): 0 voor het onderdeel Signaturen, en het onderdeel van die methode behoudt zijn punten als de inhoud klopt. Het volume als string in plaats van int: ook het onderdeel Signaturen.
- Hoofdprogramma: het volume wordt omgezet met int.Parse of Convert.ToInt32. Toont Main de menukaart niet omdat GenereerMenukaart dat al doet, dan is dat al aangerekend bij Signaturen.
- Een array gebruiken is niet nodig maar ook geen fout.

**Boetes die bij deze proef vaak voorkomen**

- Een methode geschreven binnen Main (een lokale functie): -3, één keer voor de hele proef.
- `break` of `continue` in een loop, of `while (true)`: -3, één keer voor de hele proef.
- Top-level statements: -5.
- Methodenamen met een kleine letter of variabelen met een hoofdletter, en namen zoals `a`, `b` of `x` buiten een loopteller: -2.
