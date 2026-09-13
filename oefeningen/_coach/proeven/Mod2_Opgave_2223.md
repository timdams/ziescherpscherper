<!--
  Coach- en quoteergegevens voor oefeningen/EindeTests/Mod2/Opgave_2223.md.
  Formaat: zie _LEESMIJ.md in deze map.
-->
# Nota

Een vaardigheidsproef met één opgave in vier delen: een spelletje (Underlook 2) met een heldgenerator, een methode die de held toont, een trainingsgevecht en een spel van drie gevechten. De methoden NaamGen, ToonHeld, DoeTraining, DoeGame en DoeGevecht liggen vast. Geef geen code en geen methodesignaturen die hij zo kan overnemen.
# Aanpak

Laat de student eerst de appendix met de spelregels in eigen woorden navertellen: wanneer is een schot raak, wat verandert er bij raak en bij mis, en wie wint er. Pas daarna de delen, in volgorde.

Deel 1: een ja of nee, en per antwoord welke drie waarden de held krijgt. Voor NaamGen: waar staan de tien namen, en hoe kies je er willekeurig één uit zonder de laatste te missen?

Deel 2: vraag hoeveel sterretjes er moeten komen en waar dat getal vandaan komt.

Deel 3: laat hem de stappen van de training opsommen: monster maken, schot vragen tot het geldig is, raak of mis bepalen, monster schiet, winnaar. Vraag bij elke stap welke variabele verandert. Wat betekent "hoogstens 1 verschil" als voorwaarde?

Deel 4: een gevecht is bijna de training, met een willekeurig monster en een bool als resultaat. Vraag of hij een stuk van de training kan hergebruiken in plaats van het te kopiëren. Bij DoeGame: hoe zorg je dat elk gevecht met de oorspronkelijke aanval en verdediging start, en wat weet je over parameters die in een methode aangepast worden?

# Valkuilen

- De bovengrens van Next één te laag, waardoor aanval 9, de laatste naam of de hoogste aanval van het monster nooit voorkomt.
- Het schot van de speler niet opnieuw vragen als het buiten 1 en de aanval ligt, of het maar één keer opnieuw vragen.
- Raak testen met enkel "gelijk aan de verdediging" in plaats van hoogstens 1 verschil naar boven of naar onder.
- Het schot van het monster vergelijken met de verdediging van het monster in plaats van die van de speler.
- Bij mis de verdediging verlagen in plaats van de aanval van wie schoot.
- Bij gelijke stand het monster laten winnen.
- De sterretjes vast uitschrijven in plaats van ze te tellen met de lengte van de naam.
- In DoeGame de gewonnen gevechten niet tellen, of DoeGevecht een keer extra oproepen om het resultaat te testen.
- De volledige schietlogica van de training kopiëren in DoeGevecht (boete).
- Vergeten te wachten op enter of het scherm niet leeg te maken.

# Puntenverdeling

De proef bestaat uit vier delen, samen 12 punten (2 + 2 + 3 + 5). De punten per deel komen uit de opgave; de deelpunten binnen een deel zijn achteraf toegevoegd.

**Deel 1, Hero-generator (2 punten)**

- Vraag "ja/nee"; bij nee aanval 5, verdediging 5 en naam Default; bij ja een willekeurige aanval van 1 tot en met 9, verdediging 10 min de aanval en de naam uit NaamGen: 1
- NaamGen: geen parameters, geeft een string terug, willekeurig gekozen uit een array met de tien namen, waarbij elke naam kan voorkomen: 1

**Deel 2, ToonHeld (2 punten)**

- ToonHeld: void, met een string en twee ints als parameters, opgeroepen met de gegevens uit deel 1; toont de naam, A= en D=: 1
- Een rij sterretjes boven en onder, telkens evenveel als letters in de naam: 1

**Deel 3, DoeTraining (3 punten)**

- DoeTraining: void, met naam, aanval en verdediging als parameters; oefenmonster met aanval 4 en verdediging 6: 0,5
- Schot vragen met het bereik in de vraag, en opnieuw vragen tot het tussen 1 en de aanval van de speler ligt: 1
- Raak als het schot hoogstens 1 verschilt van de verdediging van het monster, met de gevolgen voor raak en mis: 0,5
- Monster schiet willekeurig van 1 tot en met zijn aanval, raak of mis tegen de verdediging van de speler, met de gevolgen: 0,5
- Winnaar bepalen met de sommen, gelijke stand voor de held, en tonen: 0,5

**Deel 4, DoeGame en DoeGevecht (5 punten)**

- DoeGame: void, met naam, aanval en verdediging als parameters; toont de startboodschap, wacht op enter en maakt het scherm leeg: 1
- DoeGame roept DoeGevecht drie keer op, telkens met de oorspronkelijke aanval en verdediging, telt de gewonnen gevechten en toont de score met de naam: 1
- DoeGevecht: twee ints als parameters, een bool als returntype, en per gevecht een nieuw monster met aanval 1 tot en met 9 en verdediging 10 min die aanval: 1
- Eén schot per kant volgens de spelregels: speler kiest binnen zijn bereik, raak verlaagt de verdediging van het doelwit, mis verlaagt de aanval van de schutter: 1,5
- Geeft true terug als de som van de speler groter dan of gelijk aan die van het monster is: 0,5

# Beoordeling

- DoeTraining en DoeGevecht zijn bijna identiek. Een gemeenschappelijke hulpmethode (bijvoorbeeld voor het schot van de speler met de invoercontrole) is de logische aanpak. Dezelfde blokken code in beide methoden kopiëren is de boete voor redundante code, geen verlies in de onderdelen.
- Het herstellen van aanval en verdediging na de training en na elk gevecht gebeurt vanzelf als de waarden als parameter meegaan en Main ze niet aanpast. Past de student de variabelen van Main aan tijdens de training, dan start deel 4 met de verkeerde waarden: dat kost het tweede deelpunt van deel 4.
- Aanval of verdediging mogen negatief worden; daar hoeft niets voor te gebeuren.
- Bij de vraag ja of nee in deel 1 is geen invoercontrole nodig.
- DoeGevecht mag tonen wat er gebeurt, zoals in de voorbeelduitvoer; de tekst van de boodschappen telt niet mee, de spaties ook niet.
- Sterretjes die vast in de code staan voor de namen uit het voorbeeld, leveren niets op voor dat deelpunt.
