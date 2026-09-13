<!--
  Coach- en quoteergegevens voor oefeningen/EindeTests/Mod4/Opgave_2021.md (rugzak en drinkbussen, juni 2021).
  Formaat: zie _LEESMIJ.md in deze map.
-->
# Nota

Een OOP-vaardigheidsproef in één project: een rugzak met sportitems, waarvan sommige een GPS-tracker hebben. Zes klassen en een interface, en een Main die alles gebruikt. Vraag eerst aan welke klasse de student bezig is; de klassen staan in de volgorde waarin je ze best maakt. Geef geen code, geen klassedefinities en geen methodes of properties die hij zo kan overnemen, en ook niet hoe ToString of Visualiseer de tekst en de letters opbouwt.

# Aanpak

GPSLocation: twee autoproperties en twee constructors. Vraag hoe de default constructor de andere constructor kan hergebruiken in plaats van hetzelfde nog eens te doen, en waar de Random best staat zodat niet elk object er een eigen maakt.

AdvancedGPSLocation: wat heeft deze klasse extra, en wat erft ze gewoon? Laat hem nagaan welke constructor van de ouderklasse elk van zijn constructors moet oproepen, en hoe zijn ToString de tekst van de ouderklasse kan hergebruiken.

ITrackable, SportItem en Drinkbus: klein werk. Vraag bij Drinkbus wat "een nieuwe willekeurige locatie" betekent voor het moment waarop die locatie gemaakt wordt.

Rugzak: eerst de Dictionary achter een full property. Dan GetCurrentLocation: het returntype is GPSLocation, maar er moet een AdvancedGPSLocation uit komen. Vraag waarom dat mag. Voor ToString: laat hem de voorbeelduitvoer regel per regel ontleden. Welk stuk komt van welke ToString, welk stuk is de key, en hoe weet je van een item of het een tracker heeft?

Visualiseer: welke waarde is de kolom, welke de rij? Laat hem op papier voor één voorbeeld nagaan waar de letter komt. Per item in de rugzak: moet er een letter komen, en welke?

Main: schrijf eerst de volgorde in woorden. Hoe maak je met Random een keuze van 50 procent tussen twee types, en in welke variabele steek je het resultaat als het ofwel een SportItem ofwel een Drinkbus is?

# Valkuilen

- GPSLocation: in elke constructor een nieuwe Random aanmaken, of de random-code kopiëren naar AdvancedGPSLocation.
- GPSLocation: Next met 9 als bovengrens gebruiken, waardoor 9 nooit voorkomt.
- AdvancedGPSLocation: in ToString de tekst van Latitude en Longitude opnieuw uitschrijven in plaats van de ToString van de ouderklasse te gebruiken.
- Drinkbus: één locatie maken in de constructor en die altijd teruggeven, terwijl er bij elke aanroep een nieuwe moet komen.
- SportItem en Drinkbus: ToString schrijven zonder override, waardoor het niet de methode van object vervangt.
- Rugzak: de Dictionary publiek maken als instantievariabele in plaats van via een full property.
- Rugzak: in ToString de coördinaten zelf uitschrijven in plaats van de ToString van de locatie te gebruiken.
- Rugzak: op Drinkbus testen in ToString, terwijl de opgave vraagt of het item ITrackable heeft.
- Visualiseer: Latitude twee keer gebruiken, of rij en kolom omwisselen.
- Visualiseer: de locatie één keer opvragen voor ToString en die hergebruiken, terwijl elke aanroep nieuwe locaties moet geven.
- Main: dezelfde key twee keer ingeven, waardoor de Dictionary een exception geeft.
- Main: de loop toch laten stoppen met een `break` terwijl de opgave een oneindige loop vraagt (boete).

# Puntenverdeling

De originele proef had geen puntenverdeling. Deze is achteraf toegevoegd, op 20.

**GPSLocation (2,5 punten)**

- Autoproperties Latitude en Longitude van het type int, en een constructor die beide instelt: 1
- Default constructor die beide op een willekeurig getal van 1 tot en met 9 zet: 0,5
- ToString overridden in de vorm "Latitude: 4, Longitude: 6": 1

**AdvancedGPSLocation (2,5 punten)**

- Erft van GPSLocation, autoproperty Height, constructor met latitude, longitude en hoogte die de ouderklasse hergebruikt: 1
- Default constructor die de hoogte op 1 zet en voor de rest de willekeurige locatie van de ouderklasse gebruikt: 0,5
- ToString overridden met de hoogte erbij, en de tekst van de ouderklasse hergebruikt: 1

**ITrackable (1 punt)**

- Interface ITrackable met de methode GetCurrentLocation zonder parameters en met returntype GPSLocation: 1

**SportItem en Drinkbus (2 punten)**

- SportItem overridet ToString met "een eenvoudig sportitem": 0,5
- Drinkbus is een SportItem en implementeert ITrackable, met bij elke aanroep van GetCurrentLocation een nieuwe willekeurige GPSLocation: 1
- Drinkbus overridet ToString met "een drinkbus": 0,5

**Rugzak, basis (2 punten)**

- Implementeert ITrackable en geeft bij elke aanroep een nieuwe willekeurige AdvancedGPSLocation terug: 1
- Een Dictionary van sportitems met een string als key, bereikbaar via een full property: 1

**Rugzak, ToString (3,5 punten)**

- Eerst een zin met de huidige locatie van de rugzak, via de ToString van de locatie: 1
- Elk sportitem onder elkaar, met zijn key en zijn eigen ToString: 1
- Voor een item dat ITrackable heeft, de locatie via GetCurrentLocation; voor de andere de melding dat er geen tracker is: 1,5

**Rugzak, Visualiseer (3 punten)**

- Een r op de locatie van de rugzak, met Latitude als kolom en Longitude als rij: 1
- Een D op de locatie van elke drinkbus in de rugzak: 1,5
- De locaties worden bij elke aanroep opnieuw opgevraagd, niets staat vast in de code: 0,5

**Main (3,5 punten)**

- Een rugzak aanmaken en vragen hoeveel sportitems erin moeten: 0,5
- Per item met 50 procent kans een SportItem of een Drinkbus maken, de key vragen en het item in de Dictionary steken: 1,5
- Een oneindige loop die telkens het scherm leegmaakt, de rugzak toont via ToString, op enter wacht, het scherm leegmaakt, Visualiseer oproept en weer op enter wacht: 1,5

# Beoordeling

- "Een random getal tussen 1 en 9" mag met of zonder 9.
- ToString: een spatie of een hoofdletter meer of minder dan in de opgave kost niets, zolang de inhoud en de volgorde kloppen.
- AdvancedGPSLocation: de ouderklasse hergebruiken is de logische aanpak. Wie in de default constructor de random-code kopieert, of in ToString de volledige tekst opnieuw opbouwt, krijgt voor dat onderdeel een half punt. Dat is dan geen aparte boete voor redundante code.
- Drinkbus en Rugzak: "steeds een nieuwe willekeurige locatie" betekent een nieuwe locatie bij elke aanroep. Een locatie die één keer gemaakt wordt en daarna altijd dezelfde is, levert voor dat onderdeel niets op.
- Rugzak: de Dictionary moet achter een full property zitten: een private instantievariabele met een property ervoor. Een autoproperty kost een half punt; een publieke instantievariabele zonder property kost het volledige punt.
- Rugzak, ToString: "gebruik maximaal de ToString-methode van objecten" hoort bij de opgave. Wie Latitude, Longitude en Height zelf uitschrijft in plaats van de ToString van de locatie te gebruiken, krijgt een half punt minder in het eerste onderdeel. De melding "Geen tracker aanwezig" staat enkel in het voorbeeld; een andere zin met dezelfde betekenis is goed.
- Rugzak, ToString: de opgave vraagt uitdrukkelijk of het item ITrackable heeft. Wie op Drinkbus test, krijgt voor het derde onderdeel een half punt minder. In Visualiseer vraagt de opgave een D per drinkbus: daar is testen op Drinkbus of op ITrackable allebei goed.
- Visualiseer: Latitude is de kolom en Longitude de rij, en de console telt vanaf 0, zoals in het voorbeeld. Wie twee keer Latitude gebruikt, waardoor alles op de diagonaal komt, of rij en kolom omwisselt, verliest een half punt in het eerste onderdeel. Bij de drinkbussen is dat al aangerekend en trek je niets meer af.
- Visualiseer: dat de letter van het laatste element blijft staan als twee elementen op dezelfde plaats komen, gebeurt vanzelf. Daar hoeft niets extra voor.
- Main: de loop moet volgens de opgave oneindig doorlopen. Een oneindige loop zonder `break` is hier geen boete. Een loop die wel met een `break` stopt, is de boete.
- Main: een dubbele key afhandelen staat niet in de opgave. Ontbreekt die controle, dan geen aftrek.
- Main: de tekst "Ik koos ... voor je" uit de oplossing is niet gevraagd. De vragen aan de gebruiker mogen anders geformuleerd zijn.
- Het filmpje in de opgave toont een oude .NET Core-versie. Dat maakt voor de beoordeling niets uit.
- Klassen of de interface in één bestand is de boete, geen puntverlies in de onderdelen.
