<!--
  Coach- en quoteergegevens voor oefeningen/EindeTests/Mod4/Opgave_2526_2ezit.qmd (ClipHub en Archivator, 2e zit 2026).
  Formaat: zie _LEESMIJ.md in deze map.
-->
# Nota

Een vaardigheidsproef OOP met twee opgaven, elk in een eigen project. Opgave 1, ClipHub: een abstracte klasse met drie kindklassen, drie interfaces die elk door twee klassen geïmplementeerd worden, een gebruiker met een Queue en een Stack, en een platform dat polymorf rapporteert. Het scenario in Main is gegeven. Opgave 2, Archivator: bestanden in een map en al haar submappen filteren op grootte, leeftijd en extensie, tonen en verplaatsen naar een archiefmap, met FileInfo en DirectoryInfo. Vraag eerst aan welke opgave en welk onderdeel de student bezig is. Geef geen code: geen properties met validatie, geen interfaces, geen lussen of recursieve methode die hij zo kan overnemen.

# Aanpak

Opgave 1, eerst breed: laat de student alle klassen en interfaces eerst ruw aanmaken met de juiste namen, zodat het gegeven scenario compileert. Validatie en de details komen daarna. Vraag waarom dat loont bij deze proef.

Opgave 1, MediaItem: welke twee properties hebben een controle, en wat moet de constructor doen zodat die controle ook bij het aanmaken geldt? Wat betekent het dat ToString abstract is voor de kindklassen?

Opgave 1, interfaces: vraag wat een interface wel en niet kan bevatten. Download en SpeelReclame tonen de titel, maar die staat niet in de interface: waar komt ze dan vandaan? Voor ToonScore: laat hem eerst in gewone taal uitleggen hoe je bij 4 sterren precies 4 volle en 1 lege ster krijgt.

Opgave 1, Film, Aflevering, Podcast: laat hem per klasse opnoemen van wie ze erft, welke interfaces ze heeft en welke properties daaruit volgen. Welke properties en methoden komen dus in twee klassen terug? Waar begint Sterren op 3, en loopt die beginwaarde langs de controle? Laat hem bij Aflevering nagaan hoe je een seizoen 1 als "01" toont.

Opgave 1, Gebruiker: vraag wat het verschil is tussen een Queue en een Stack, en welke van de twee bij de watchlist hoort en welke bij de geschiedenis. Laat hem de vijf stappen van BekijkVolgende in gewone taal overlopen, en vragen wat er gebeurt als de watchlist leeg is. Hoe kijk je bovenaan een Stack zonder er iets af te halen?

Opgave 1, StreamingPlatform: de drie rapporten zijn telkens dezelfde vraag: hoe herken je in een lijst van MediaItems een item met een bepaalde capaciteit, en hoe roep je daarna de methode van die interface op? Bij het gemiddelde: welke twee getallen houd je bij, en wat als er geen enkel beoordeelbaar item is? Laat hem op papier uitrekenen wat het scenario moet tonen.

Opgave 1, ToonStatistiek: drie tellers, één lus. Vraag hoe hij het totaal krijgt zonder een vierde lus.

Opgave 2: laat de student eerst de vijf fases als stappen opschrijven. Vraag daarna hoe hij map per map afloopt zodat een map of bestand zonder rechten de rest niet stopt. Voor de filters: hoe reken je megabytes om naar bytes, hoe bepaal je hoeveel dagen geleden een datum is, en wat doe je met een leeg antwoord voor de extensie? Welke treffers bewaar je, en waarin, zodat je ze in fase 4 nog kan verplaatsen en in fase 5 kan tellen? Bij het verplaatsen: hoe stel je het nieuwe pad samen, en hoe weet je vooraf of er al een bestand met die naam staat?

# Valkuilen

- De klassen en interfaces niet exact zo noemen als in de opgave, waardoor het gegeven scenario niet compileert.
- Het gegeven scenario als top-level statements in Program.cs plakken in plaats van in Main (boete).
- MediaItem niet abstract maken, of ToString niet abstract.
- De validatie enkel in de constructor schrijven in plaats van in de setter, of de grenzen zelf uitsluiten.
- In de interface een instantievariabele of een validatie proberen te zetten.
- Vergeten Sterren op 3 te zetten, waardoor een nieuwe film of podcast met 0 sterren begint.
- De sterrenbalk niet altijd 5 tekens lang maken, of een aparte if per aantal sterren schrijven.
- S01E01 tonen als S1E1.
- Watchlist en geschiedenis omwisselen, of een List gebruiken in plaats van een Queue en een Stack.
- LaatsteBekeken het item van de Stack laten halen in plaats van enkel te bekijken.
- AantalBekeken een publieke setter geven, of Catalogus een publieke setter.
- In ToonDownloadbare en de andere rapporten testen op Film en Aflevering in plaats van op de interface.
- Het gemiddelde met een gehele deling berekenen, of een komma tonen in plaats van een punt.
- Delen door nul als er geen beoordeelbare items zijn.
- In ToonStatistiek LINQ gebruiken, of een lus per type.
- Opgave 2: de statische klassen File en Directory gebruiken in plaats van FileInfo en DirectoryInfo.
- Opgave 2: enkel de bovenste map doorzoeken, of alle submappen in één keer opvragen met één try-catch rond alles, waardoor één map zonder rechten alles stopt.
- Opgave 2: de extensie hoofdlettergevoelig vergelijken, of een leeg extensie-filter als "geen enkel bestand" behandelen.
- Opgave 2: een bestand verplaatsen terwijl er al een met die naam in de archiefmap staat, waardoor het programma crasht.
- Opgave 2: vergeten de archiefmap aan te maken als ze nog niet bestaat.
- Opgave 2: in het eindrapport de totale grootte of de aantallen opnieuw berekenen met een kopie van een eerdere lus (boete).

# Puntenverdeling

De punten per onderdeel komen uit de opgave: 12 voor Opgave 1 (10 + 2) en 6 voor Opgave 2, samen 18. Bij Opgave 1 zijn de 3 punten voor Film, Aflevering en Podcast volgens de opgave zelf 1 per klasse. De omschrijving per onderdeel is achteraf toegevoegd.

**Opgave 1, Deel 1: Klassen & interfaces (10 punten)**

- Abstracte klasse MediaItem: Titel niet leeg en DuurInMinuten van 1 tot en met 300, allebei met een Argument-exception bij een foute waarde, een constructor met beide, de klasse abstract en ToString abstract: 2
- Interfaces IDownloadbaar, IBevatReclame en IBeoordeelbaar met de gevraagde property en methode, en in de klassen Download, SpeelReclame en ToonScore met de juiste uitvoer, ToonScore met een balk van altijd 5 tekens: 2
- Film: erft van MediaItem, implementeert IDownloadbaar en IBeoordeelbaar, Regisseur, GrootteInMB en Sterren met validatie, Sterren standaard 3, constructor die doorgeeft aan de basis, ToString zoals gevraagd: 1
- Aflevering: erft van MediaItem, implementeert IDownloadbaar en IBevatReclame, de vijf properties met validatie, constructor, ToString met SxxEyy: 1
- Podcast: erft van MediaItem, implementeert IBevatReclame en IBeoordeelbaar, Host, ReclameSeconden en Sterren met validatie, Sterren standaard 3, constructor, ToString: 1
- Gebruiker: Naam en Leeftijd met validatie, AantalBekeken readonly van buiten, een private Queue en Stack, VoegToeAanWatchlist, BekijkVolgende met de vijf stappen en de exception, LaatsteBekeken met peek en de exception, ToonGeschiedenis van boven naar onder met de melding bij een lege geschiedenis: 2
- StreamingPlatform: Naam en Adres, Catalogus readonly van buiten, VoegToeAanCatalogus, ToonDownloadbare en ToonItemsMetReclame via de interfaces, ToonGemiddeldeBeoordeling op 1 decimaal met een punt en de melding zonder beoordeelbare items: 1

**Opgave 1, Deel 2: Scenario & statistiek (2 punten)**

- 2.1 ToonStatistiek: platformnaam, aantal films, afleveringen, podcasts en het totaal, in één foreach met is: 1
- 2.2 Het gegeven scenario draait foutloos in Main, met de juiste uitvoer en de rode foutboodschap bij de lege watchlist in plaats van een crash: 1

**Opgave 2, Bestandsarchivator (6 punten)**

- Bronmap vragen, en bij een map die niet bestaat een rode foutboodschap en stoppen: 0,5
- De drie filters vragen: minimum grootte in MB, minimum leeftijd in dagen, extensie waarbij leeg alle extensies betekent: 0,5
- Recursief zoeken met DirectoryInfo en FileInfo, en enkel bestanden die aan alle drie de filters voldoen als BestandsTreffer bijhouden, met de klasse zoals gevraagd: 1,5
- Treffers tonen met volledig pad, grootte in MB op 2 decimalen met een punt en datum in yyyy-MM-dd, een melding bij geen treffers, en een bestand dat niet gelezen kan worden in rood melden en overslaan zonder dat de rest stopt: 1
- Archiveren: j/n vragen, archiefmap vragen en aanmaken als ze niet bestaat, elke treffer verplaatsen met MoveTo met behoud van de naam, een naamconflict in geel melden en overslaan, de andere bestanden verder verwerken: 1,5
- Eindrapport: aantal gevonden bestanden met totale grootte, aantal verplaatst, aantal overgeslagen en het pad van de archiefmap als er gearchiveerd werd: 1

# Beoordeling

- Opgave 1 steunt op het gegeven scenario. Compileert het scenario niet door een verkeerde naam of een ontbrekende methode, dan is dat -1 voor niet compileren; beoordeel de klassen daarna zoals ze geschreven zijn, en 2.2 is 0. Een klasse die helemaal ontbreekt, levert haar eigen punten niet op; de onderdelen die ze nodig hebben, trek je niet nog eens af, behalve 2.2.
- Validatie: de opgave laat ArgumentException en elke afgeleide, zoals ArgumentOutOfRangeException, toe. Een gewone Exception is niet het maximum. De grenzen horen erbij (1 en 300, 1 en 50000, 0 en 300, 1 en 5). Een controle enkel in de constructor, niet in de setter, is ongeveer de helft van de validatie. "Niet leeg" mag met een test op een lege string of met string.IsNullOrWhiteSpace: beide goed.
- Een werkende klasse zonder validatie, of zonder dat de interface echt geïmplementeerd wordt, is volgens de opgave ongeveer de helft van de punten voor dat onderdeel.
- Interfaces: de 2 punten gaan over de interfaces zelf en de drie methoden met hun uitvoer. Download en SpeelReclame staan in Film, Aflevering en Podcast twee keer; dat is door de opgave zo opgelegd en geen redundante code. ToonScore die de balk opbouwt met een lus of met new string: beide goed. Een aparte if of switch per aantal sterren is redundante code.
- Tekens in de uitvoer: het streepje in de voorbeelden mag een gewoon koppelteken zijn. Unicode-sterren zijn toegelaten. Kleine verschillen in spaties of aanhalingstekens kosten niets.
- Sterren standaard 3: via de property in de constructor of via de beginwaarde van de instantievariabele, beide goed. Een Sterren die na de constructor 0 is, niet.
- Aflevering: het seizoen en de aflevering tonen met twee cijfers (S01E01) staat in het voorbeeld van ToString. S1E1 kost een half punt in dat onderdeel.
- Gebruiker: een List in plaats van een Queue of een Stack is niet wat gevraagd is: het onderdeel is dan hoogstens 1. LaatsteBekeken wordt in het scenario niet opgeroepen, maar hoort erbij. ToonGeschiedenis met een foreach over de Stack geeft vanzelf de juiste volgorde; wie eerst popt en de geschiedenis daardoor leegmaakt, verliest een half punt.
- StreamingPlatform: de rapporten testen op de interface (is IDownloadbaar, as, of pattern matching). Testen op het concrete type (is Film of is Aflevering) werkt vandaag, maar is niet wat gevraagd is: een half punt minder. Het gemiddelde in het scenario is 4.0; een gehele deling geeft ook 4 en valt dus pas op met andere sterren. Test daarom met bijvoorbeeld 5, 4 en 4. Een komma in plaats van een punt kost niets, want dat is de instelling van de machine en geen fout in de berekening.
- ToonStatistiek: de opgave vraagt uitdrukkelijk één foreach met is. Drie aparte lussen zijn redundante code; LINQ levert dat onderdeel niets op.
- 2.2: het scenario hoort in Main. Staat het als top-level statements in Program.cs, dan is dat de boete van -5, en 2.2 telt dan gewoon mee als het draait. De one-liner met try en catch is gegeven code: geen boete voor bladspiegel.
- Opgave 2, FileInfo en DirectoryInfo zijn opgelegd. Worden overal File en Directory gebruikt, dan kost dat een half punt in het zoekonderdeel. Directory.Exists voor de bestaat-check of Path.Combine voor het nieuwe pad zijn geen probleem.
- Opgave 2, recursief zoeken: alle bestanden in één keer opvragen met SearchOption.AllDirectories werkt, maar stopt bij de eerste map zonder rechten. Dat voldoet niet aan de randvoorwaarde: het tonen-onderdeel is dan hoogstens 0,5. Het maximum enkel als elke map en elk bestand apart opgevangen wordt, bijvoorbeeld door map per map recursief te werken.
- Opgave 2, filters: groter of gelijk voor de grootte, zoals de opgave zegt. Voor de leeftijd staat "langer dan": groter of groter of gelijk, beide goed. De grootte als int of double, beide goed. De extensie vergelijken zonder op hoofdletters te letten is netter; hoofdlettergevoelig kost niets. Een extensie ingeven zonder punt hoeft niet ondersteund te worden.
- Opgave 2, tellen: een map of bestand dat niet gelezen kan worden, is geen treffer en telt niet mee bij de gevonden bestanden. Overgeslagen in het eindrapport zijn de treffers die niet verplaatst werden, door een naamconflict of een fout bij het verplaatsen. Telt de student de onleesbare bestanden daar ook bij en staat dat duidelijk in het rapport, dan kost dat niets. Enkelvoud of meervoud ("1 bestand", "2 bestanden") is niet vereist. Wordt er niet gearchiveerd, dan hoeven het aantal verplaatste en overgeslagen bestanden niet getoond te worden.
- Opgave 2, BestandsTreffer: de klasse is verplicht. Ontbreekt ze en werkt de student rechtstreeks met FileInfo, dan is het zoekonderdeel hoogstens 1. GrootteInMB moet afgerond worden in de property; enkel bij het tonen afronden kost niets, want de uitvoer is dezelfde. ToString wordt in het voorbeeld niet gebruikt, maar hoort bij de klasse.
- Opgave 2, archiveren: bij "n" wordt er niets verplaatst en toont het eindrapport geen archiefmap. Wat er gebeurt bij een ander antwoord dan j of n, legt de opgave niet vast. Een naamconflict opvangen met een controle vooraf of met een catch rond MoveTo: beide goed, zolang het geel gemeld wordt en de rest doorgaat. Een crash bij een naamconflict kost een half punt.
- Kleuren: rood voor fouten, geel voor waarschuwingen, groen voor succes. Ontbreken de kleuren helemaal, dan een half punt minder in totaal voor opgave 2, niet per onderdeel.
- LINQ en lambdas zijn niet gezien. Vervangen ze de lus die een onderdeel toetst (ToonStatistiek, het gemiddelde, het filteren van bestanden), dan levert dat onderdeel niets op.
- Klassen van Opgave 1 elk in een apart bestand, ook de interfaces. Staan er twee of meer samen, dan is dat -3, één keer voor de hele proef.
