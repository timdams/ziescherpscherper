<!--
  Coach- en quoteergegevens voor oefeningen/EindeTests/Mod4/Opgave_2021b.md (ruimteschip, augustus 2021).
  Formaat: zie _LEESMIJ.md in deze map.
-->
# Nota

Een OOP-vaardigheidsproef in één project: een ruimteschip vliegt een lijst van reisbestemmingen af en tankt bij waar het kan. Een interface, een abstracte klasse met drie kindklassen, een klasse Wereld die de route maakt, een klasse Ruimteschip en een Main die de reis simuleert. Vraag eerst aan welke klasse de student bezig is. Geef geen code, geen klassedefinities en geen methodes die hij zo kan overnemen, ook niet hoe CompareTo of de loopvoorwaarde in Main eruitziet. De interface IEnergieGever en de signatuur van GenereerWereld staan al in de opgave; die mag hij overnemen. Het klassediagram is een overzicht; de cursus werkt daar vandaag niet meer mee, dus leg het gerust in woorden uit.

# Aanpak

ReisBestemming: begin met de afstand. Wie mag die aanpassen, en wanneer wordt ze bepaald? Laat hem uitleggen waarom de Random static is en wie hem nog nodig heeft. Voor IComparable: wanneer komt een bestemming voor een andere? Voor ToString: waar vind je de naam van de klasse van het object?

Planeet, RijkePlaneet en TankTussenstation: laat hem eerst zeggen van wie elke klasse erft en welke de interface heeft. Bij RijkePlaneet: 10 procent van de afstand, maar GeefEnergie geeft een long terug. Bij TankTussenstation: vraag wat "telkens anders" betekent voor het moment waarop het getal gekozen wordt.

Wereld: een loop die aantal keer een bestemming maakt. Vraag hoe hij met één getal uit Random tot 25, 25 en 50 procent komt. Sorteren is daarna één stap, als IComparable in orde is. De opgave zegt zelf dat hij het sorteren eerst mag overslaan.

Ruimteschip: laat hem voor StartReis het getallenvoorbeeld uit de opgave met de hand narekenen. Hoeveel energie is nodig, wat verandert er aan de energie en aan de afstand, en in welke volgorde gebeurt dat? Pas als de reis gelukt is, komt EnergieBijtanken aan de beurt. Daar is de vraag: hoe weet je van een reisbestemming of je er kan tanken, zonder elk type apart na te gaan?

Main: de loop heeft drie voorwaarden. Laat hem ze in woorden opschrijven en voor elk zeggen waar de informatie vandaan komt. Welke waarde geeft StartReis terug, en hoe gebruik je die om te stoppen?

# Valkuilen

- ReisBestemming: de afstand een publieke setter geven, terwijl ze read-only moet zijn.
- ReisBestemming: in CompareTo de volgorde omdraaien, waardoor de verste bestemming vooraan staat.
- ReisBestemming: de naam van het type vast in ToString van elke kindklasse schrijven in plaats van één ToString in de ouderklasse.
- RijkePlaneet: laten erven van ReisBestemming in plaats van van Planeet.
- TankTussenstation: één willekeurige waarde kiezen in de constructor en die altijd teruggeven.
- Wereld: drie aparte kansen trekken in plaats van één getal, waardoor de verhouding niet klopt.
- Ruimteschip: de afstand van de bestemming bij de afstand van het schip optellen in plaats van de afgelegde afstand.
- Ruimteschip: de energie met de volledige afstand van de bestemming tot de aarde verminderen in plaats van met het verschil.
- Ruimteschip: GeefEnergie twee keer oproepen, één keer om bij te tellen en één keer om te tonen, waardoor bij een tankstation twee verschillende getallen gebruikt worden.
- Ruimteschip: EnergieBijtanken vanuit Main oproepen in plaats van vanuit StartReis.
- EnergieBijtanken: op RijkePlaneet en TankTussenstation apart testen in plaats van op de interface.
- Main: de reis schrijven als een eindeloze loop die enkel met een `break` stopt (boete).
- Main: de teller vanaf 0 tonen, of hem niet verhogen na een gelukte reis.
- Program.cs zonder class Program en Main schrijven (boete).

# Puntenverdeling

De originele proef had geen puntenverdeling. Deze is achteraf toegevoegd, op 20.

**ReisBestemming (4 punten)**

- Abstracte klasse met een static Random, een private instantievariabele afstandVanAarde met een read-only property AfstandVanAarde, en een constructor die de afstand willekeurig tussen 400 en 10 000 zet: 1,5
- Implementeert IComparable, met een CompareTo die op afstand sorteert, dichtste eerst: 1,5
- ToString overridden als type en afstand, bv. RijkePlaneet:1911: 1

**Planeet, RijkePlaneet en TankTussenstation (2,5 punten)**

- Planeet erft van ReisBestemming, zonder meer: 0,5
- RijkePlaneet erft van Planeet, implementeert IEnergieGever en geeft 10 procent van de afstand terug: 1
- TankTussenstation erft van ReisBestemming, implementeert IEnergieGever en geeft bij elke aanroep een nieuwe willekeurige hoeveelheid tussen 500 en 1500 terug: 1

**Wereld (3 punten)**

- GenereerWereld maakt een lijst met aantal bestemmingen, met 25 procent kans op een Planeet, 25 procent op een RijkePlaneet en 50 procent op een TankTussenstation, en geeft die terug: 2
- De lijst wordt voor het teruggeven gesorteerd, dichtste bestemming vooraan: 1

**Ruimteschip, basis (2 punten)**

- Energie als long-property met private set, 3000 bij de start, en een instantievariabele afstandVanAarde die op 0 start: 1
- ToString met de zin "Je hebt ... energie en bent ... units verwijderd van de aarde.": 1

**Ruimteschip, StartReis (3,5 punten)**

- Berekent de te reizen afstand als verschil tussen de bestemming en het schip, en geeft bij te weinig energie de melding en false: 1,5
- Bij genoeg energie: energie verminderen met die afstand, de melding tonen, en afstandVanAarde verhogen met de afgelegde afstand: 1,5
- Roept voor het teruggeven van true EnergieBijtanken op met de bestemming: 0,5

**Ruimteschip, EnergieBijtanken (2 punten)**

- Heeft de bestemming de interface IEnergieGever, dan één keer GeefEnergie oproepen, de energie bijtellen en de melding met de gekregen en de nieuwe energie tonen: 1,5
- Anders de melding dat er niet kan getankt worden: 0,5

**Main (3 punten)**

- Een wereld aanmaken met GenereerWereld en elke tussenstop tonen: 1
- Een ruimteschip aanmaken en tonen: 0,5
- De reis in een loop met een teller, die stopt als de energie op is, als alle bestemmingen gedaan zijn of als StartReis mislukt, en per stap het nummer van de bestemming toont: 1
- Na de loop tonen tot waar het schip geraakt is: 0,5

# Beoordeling

- De interface IEnergieGever en de signatuur van GenereerWereld staan in de opgave. Wie die overneemt, krijgt daar geen punten voor; ze zitten daarom niet in de puntenverdeling.
- De tekst en het klassendiagram gebruiken IEnergieGever en ReisBestemming. Reisbestemming met een kleine b is ook goed.
- ReisBestemming: "tussen 400 en 10.000" mag met of zonder 10 000. De Random mag public, protected of internal static zijn, zolang TankTussenstation hem kan gebruiken; een eigen Random in TankTussenstation is ook goed.
- ReisBestemming: IComparable is gevraagd. Wereld mag de lijst sorteren met List.Sort. Een zelfgeschreven sorteerlus is ook goed. Sorteren met OrderBy, LINQ of een lambda is leerstof die nog niet gezien is: dan krijgt hij het punt voor sorteren in Wereld niet. De punten voor CompareTo krijgt hij enkel als CompareTo er wel correct staat.
- Wereld: de opgave laat toe om de lijst ongesorteerd terug te geven. Dan verliest hij het punt voor sorteren. Wat daarna in de reis misloopt omdat de afstanden niet oplopen (negatieve afstanden, energie die stijgt), is een volgfout en kost niets in StartReis of Main.
- RijkePlaneet: 10 procent van 3246 lichtjaren is volgens de opgave 324 energie, het deel na de komma valt weg. Wie afrondt, verliest daar niets.
- Ruimteschip: de opgave zegt "een read-only property met private set" en het diagram toont een private instantievariabele energie achter de property Energie. Een full property met die instantievariabele volgt het diagram; een autoproperty met private set is ook goed. Een publieke setter kost een half punt.
- Ruimteschip: in het diagram is EnergieBijtanken private; de tekst zegt er niets over. Private en public zijn allebei goed.
- Ruimteschip, StartReis: de afstand van het schip moet verhoogd worden met de afgelegde afstand, niet met de afstand van de bestemming. Wie de afstand van de bestemming erbij optelt, verliest een half punt in het tweede onderdeel. Wie de afstand gewoon gelijkstelt aan die van de bestemming, doet het goed.
- Ruimteschip, EnergieBijtanken: GeefEnergie mag maar één keer opgeroepen worden, anders toont de melding bij een TankTussenstation een ander getal dan wat bijgeteld werd. Twee keer oproepen kost een half punt in het eerste onderdeel.
- Ruimteschip, EnergieBijtanken: tanken moet via de interface gaan (is of as met IEnergieGever). Wie op RijkePlaneet en TankTussenstation apart test, krijgt voor het eerste onderdeel een half punt minder.
- De voorbeelduitvoer is de maatstaf voor de inhoud, niet voor de exacte tekst. De opgave vraagt "Bestemming bereikt. Nog ... energie over. Laten we proberen bij te tanken." als twee zinnen; op één of twee regels is goed. De zinnen "We proberen te reizen naar bestemming ...", "De reis eindigt hier." en "Je bent tot aan bestemming ... geraakt met info: ..." staan enkel in het voorbeeld; wat telt, is dat het nummer van de bestemming en het eindpunt van de reis getoond worden. Wie het eindpunt enkel via ToString van het schip toont, zonder de bestemming waar het misliep, krijgt voor het laatste onderdeel ook het punt.
- Main: het aantal bestemmingen staat niet in de tekst. De voorbeelden gebruiken 10; een ander aantal is ook goed.
- Main: een loop die enkel met een `break` stopt, is de boete, geen puntverlies in het loop-onderdeel.
- Klassen of de interface in één bestand is de boete, geen puntverlies in de onderdelen.
