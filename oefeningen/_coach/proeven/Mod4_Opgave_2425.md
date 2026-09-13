<!--
  Coach- en quoteergegevens voor oefeningen/EindeTests/Mod4/Opgave_2425.md.
  Formaat: zie _LEESMIJ.md in deze map.
-->
# Nota

Een vaardigheidsproef OOP met twee opgaven. Opgave 1, Voetbalteam: klassen met overerving, een interface, een static property en exceptions, een menu, extra functionaliteit en een klasse Wedstrijd. Opgave 2, Bestandsfilter: alle bestanden in een map en haar submappen doorzoeken op grootte, zonder dat één onleesbaar bestand alles stopt. Vraag eerst aan welke opgave en welk deel de student bezig is. Geef geen code, ook geen properties, overrides of lussen die hij zo kan overnemen.

# Aanpak

Opgave 1, Deel 1: begin bij Speler. Welke gegevens komen via de constructor, welke property heeft een controle, en welke is readonly? Laat de student uitleggen waarom de controle op de kracht in de setter hoort, en wat dat betekent voor de constructor. Aanvaller en Verdediger verschillen enkel in hun marktwaarde: wat moet er in Speler staan zodat een kindklasse die kan overschrijven? Bij GeheimeSpeler: welke twee dingen houdt hij bij, en op welk moment verandert elk van beide? Bij VoetbalTeam: een lijst van spelers en een controle voor het toevoegen. Voor ToonOpstelling: welke totalen heb je nodig, en waar heb je die in Deel 4 nog eens nodig?

Opgave 1, Deel 2: een menulus. Bij speler toevoegen eerst het type, dan de gegevens, dan het juiste object. Vraag wat er moet gebeuren als de kracht ongeldig is of als het team al vol zit.

Opgave 1, Deel 3: in welke klasse overschrijf je ToString zodat elk type ze heeft, en waar vul je aan voor GeheimeSpeler? Voor ScoutAlles: hoe herken je in de lijst een speler die gescout kan worden?

Opgave 1, Deel 4: laat hem de beslissing in Simuleer eerst als drie gevallen in gewone taal opschrijven: de kracht verschilt, de kracht is gelijk maar de marktwaarde verschilt, alles is gelijk. Simuleer geeft een string terug; tonen gebeurt ergens anders.

Opgave 2: vraag of hij de bestanden van alle submappen in één keer opvraagt of zelf map per map afloopt, en wat er in elk geval gebeurt als één map of één bestand niet leesbaar is. Daarna: hoe reken je megabytes om naar bytes, en in welk type past dat getal?

# Valkuilen

- De controle op de kracht enkel in de constructor schrijven, of 1 en 10 zelf uitsluiten.
- Marktwaarde niet virtual maken, of er een setter aan geven.
- De teller als public static instantievariabele schrijven in plaats van als static property.
- De teller verhogen bij het aanmaken van een speler in plaats van bij het toevoegen aan een team.
- De marktwaarde van Aanvaller opnieuw uitrekenen in plaats van die van Speler te hergebruiken.
- In GeheimeSpeler ook na het scouten blijven tellen.
- Een team van 11 spelers nog een twaalfde laten toevoegen.
- Bij de totale marktwaarde de 100.000 extra vergeten, of testen op GeheimeSpeler in plaats van op IScouteerbaar.
- Exceptions niet opvangen in het menu, waardoor een verkeerde kracht of een vol team het programma stopt.
- De naam van de speler wel vragen maar niet gebruiken.
- Simuleer de uitslag laten tonen in plaats van ze als string terug te geven.
- De totale kracht en marktwaarde in Wedstrijd opnieuw uitrekenen met een kopie van de lus uit VoetbalTeam (boete).
- Opgave 2: enkel de bovenste map doorzoeken.
- Opgave 2: één try-catch rond de hele zoektocht, waardoor één map zonder rechten alles stopt.
- Opgave 2: megabytes omrekenen met gehele getallen die overlopen bij grote waarden, of de grootte in MB tonen zonder decimalen.
- Het menu schrijven als een `while (true)` met een `break` (boete).

# Puntenverdeling

De punten per deel komen uit de opgave: 15 voor Opgave 1 (6 + 4 + 2 + 3) en 4 voor Opgave 2, samen 19. De deelpunten daarbinnen zijn achteraf toegevoegd.

**Opgave 1, Deel 1: Klassenstructuur (6 punten)**

- Speler: constructor met rugnummer, naam en kracht, properties voor die drie en voor IsBasisSpeler, Kracht die buiten 1 tot en met 10 een ArgumentOutOfRangeException gooit: 1,5
- Marktwaarde als readonly property: kracht maal 100.000 bij Speler, 50.000 meer bij Aanvaller, altijd 200.000 bij Verdediger: 1
- Static property die het totaal aantal spelers bijhoudt en verhoogt bij elke succesvolle toevoeging aan een team: 0,5
- IScouteerbaar met Scout en AantalScoutPogingen, en GeheimeSpeler die de interface implementeert, 0 als marktwaarde toont zolang hij niet gescout is, de pogingen daarvoor telt, en na Scout zijn echte waarde toont: 1
- VoetbalTeam: naam, lijst van spelers, VoegSpelerToe die hoogstens 11 spelers toelaat en anders een Exception gooit met de boodschap "Team is vol. Speler niet toegevoegd.": 1
- ToonOpstelling: teamnaam, per speler naam, rugnummer en marktwaarde, bij IScouteerbaar 5 hekjes en het aantal pogingen, totale kracht, totale marktwaarde met 100.000 extra per IScouteerbaar speler: 1

**Opgave 1, Deel 2: Console-applicatie (4 punten)**

- Teamnaam vragen bij het opstarten en het team maken: 0,5
- Hoofdmenu dat blijft terugkomen met de opties 1 tot en met 4, en stopt bij 3: 1
- Speler toevoegen: type kiezen, naam, rugnummer en kracht vragen, het juiste object maken met die gegevens en toevoegen aan het team: 1,5
- Bij een GeheimeSpeler vragen of hij meteen gescout moet worden, en een ongeldige kracht of een vol team opvangen zonder dat het programma stopt: 1

**Opgave 1, Deel 3: Extra functionaliteit (2 punten)**

- 3.1 ToString toont type, rugnummer, marktwaarde en naam, en bij een GeheimeSpeler ook of hij gescout is: 1
- 3.2 ScoutAlles scout alle geheime spelers in een team en wordt opgeroepen via menu-optie 4: 0,5
- 3.3 Onderaan het hoofdmenu het totaal aantal toegevoegde spelers: 0,5

**Opgave 1, Deel 4: Wedstrijdsimulatie (3 punten)**

- Klasse Wedstrijd met properties Thuisploeg en Uitploeg van het type VoetbalTeam, en een constructor die beide instelt: 0,5
- Simuleer beslist juist: hoogste totale kracht wint, bij gelijke kracht de hoogste marktwaarde, anders gelijkspel: 1,5
- Simuleer geeft de uitslag terug als string in de stijl van de opgave, voor winst en voor gelijkspel: 1

**Opgave 2, Bestandsfilter (4 punten)**

- Pad van de map en minimumgrootte in MB vragen, en de grootte correct omrekenen naar bytes: 0,5
- Alle bestanden in de map en in alle submappen overlopen: 1,5
- Enkel bestanden van minstens die grootte tonen, met naam, grootte in MB op 2 cijfers na de komma en de aanmaakdatum: 1
- Een bestand of map die niet gelezen kan worden, geeft een melding en wordt overgeslagen, de rest wordt verder verwerkt: 1

# Beoordeling

- Kracht: 1 en 10 horen erbij. Het type exception is opgelegd: een andere exception is niet het maximum voor dat deelpunt. De controle hoort in de setter, en de constructor gebruikt die setter; een controle enkel in de constructor laat een latere foute waarde door en is niet het maximum.
- De static teller verhoogt bij een succesvolle toevoeging in VoegSpelerToe, en enkel daar. Wie hem verhoogt bij het aanmaken van een speler, telt ook spelers die nooit in een team belanden (bijvoorbeeld bij een vol team): dan levert dat deelpunt niets op, en bij 3.3 trek je daarvoor niet nog eens af. Het moet een static property zijn; een public static instantievariabele levert dat deelpunt niet op.
- IsBasisSpeler wordt nergens gebruikt. Een bool-autoproperty volstaat.
- Marktwaarde: virtual in Speler, override in de kindklassen. Aanvaller hergebruikt de waarde van Speler via base; een eigen berekening met kracht maal 150.000 is een waarde die de ouder al kent: 0,5 minder. Verdediger geeft 200.000, los van de kracht.
- IScouteerbaar: Scout en AantalScoutPogingen zijn methoden, dat tonen de haakjes in de opgave. Als property uitgewerkt, is niet wat gevraagd is.
- GeheimeSpeler telt enkel de pogingen vóór het scouten, in de get van Marktwaarde. Elke lezing telt, ook die van ToonOpstelling, ToString en Wedstrijd. Het getal na de hekjes hangt dus af van hoe vaak de student leest: niet afkeuren.
- VoegSpelerToe: de boodschap van de exception moet kloppen; aanhalingstekens en spaties tellen niet. De twaalfde speler mag er niet bij.
- ToonOpstelling: de 100.000 extra geldt voor elke IScouteerbaar speler, gescout of niet; de opgave maakt geen onderscheid. Testen op GeheimeSpeler in plaats van op IScouteerbaar werkt vandaag, maar is niet wat gevraagd is: 0,5 minder.
- Deel 2: de volgorde van het menu (3 is afsluiten, 4 is scouten) is vreemd, maar opgelegd. Menu-optie 4 telt bij 3.2, niet bij Deel 2. Of een ongeldige kracht opnieuw gevraagd wordt, of de exception opgevangen wordt met een melding, is allebei goed; een crash niet.
- 3.1: ToString overschrijven in Speler en aanvullen in GeheimeSpeler via base is de logische aanpak. Het type via GetType of via een override per klasse, allebei goed.
- 3.2: de opgave zegt niet waar ScoutAlles staat. Een methode van VoetbalTeam of een static methode in Program met het team als parameter, allebei goed.
- Deel 4: VoetbalTeam moet de totale kracht en marktwaarde naar buiten geven, als property of methode. Staat dezelfde berekening zowel in ToonOpstelling als in Wedstrijd, dan is dat de boete voor redundante code, geen puntverlies. Of "Team" deel is van de teamnaam in de string, is niet duidelijk: beide goed. De marktwaarde in Simuleer mag met of zonder de 100.000 extra, zolang dezelfde regel voor beide teams geldt. Een Simuleer die void is en zelf toont, levert het laatste deelpunt niet op. Wedstrijd hoeft niet in het menu, maar moet compileren en bruikbaar zijn.
- Opgave 2: een bestand van precies de ingegeven grootte hoort erbij. Wie strikt groter vergelijkt, verliest 0,5 in het deelpunt van het filteren. Een megabyte als 1024 maal 1024 bytes, zoals in het boek, of als een miljoen bytes: beide goed. Twee cijfers na de komma voor de grootte zijn vereist. De datum moet datum en uur tonen; het exacte formaat van het voorbeeld is niet vereist.
- Opgave 2, uitzonderingen: vraagt de student alle bestanden van alle submappen in één keer op, dan stopt de hele zoektocht bij de eerste map zonder rechten. Dat voldoet niet aan "geen impact op de nog te verwerken bestanden": het laatste deelpunt is dan hoogstens 0,5, en 0 als die exception niet eens opgevangen wordt. Het maximum enkel als elke map en elk bestand apart opgevangen wordt, bijvoorbeeld door recursief map per map te werken. "Niet geopend kunnen worden" vraagt niet om de inhoud van het bestand echt te openen.
- Opgave 2: een getal in megabytes omrekenen met int kan overlopen vanaf 2048 MB. Test daarom met een grote waarde. Loopt de omrekening daar fout, dan is het eerste deelpunt 0.
- LINQ en lambdas (Where, Sum, RemoveAll, OrderBy op een List) zijn nog niet gezien. Vervangen ze de lus die een deelpunt toetst, zoals de totale kracht of het filteren op grootte, dan levert dat deelpunt niets op.
- De klassen van Opgave 1 elk in een apart bestand. Staan er twee of meer samen, dan is dat -3, één keer voor de hele proef.
