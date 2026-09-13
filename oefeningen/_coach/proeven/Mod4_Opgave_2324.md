<!--
  Coach- en quoteergegevens voor oefeningen/EindeTests/Mod4/Opgave_2324.md.
  Formaat: zie _LEESMIJ.md in deze map.
-->
# Nota

Een vaardigheidsproef OOP met één opgave over het Oude Egypte: twee klassen, Pharaoh en Dynasty, en een hoofdprogramma dat ze gebruikt. De nadruk ligt op full properties met controles, twee constructors, een private lijst en een exception. Vraag eerst aan welke klasse de student bezig is. Geef geen code, ook geen setter, constructor of overlapvoorwaarde die hij zo kan overnemen.

# Aanpak

Pharaoh: per eigenschap staat in de opgave of ze auto of full is. Laat de student bij elke full property eerst zeggen welke controle in de setter hoort. Vraag dan wat de constructor moet doen als het eindjaar vóór het beginjaar ligt, en in welke volgorde hij de jaren aan de properties geeft. Laat hem ook zeggen welke waarde het eindjaar krijgt als het einde onbekend is, en of zijn setter die waarde aanvaardt. Bij negatieve jaartallen is het latere jaar het getal dat dichter bij nul ligt: laat hem dat met een voorbeeld uit de opgave nagaan. Voor de tweede constructor: vraag hoe hij de eerste kan hergebruiken in plaats van alles te herhalen.

Dynasty: dezelfde soort properties. Voor AddPharaoh: laat hem de twee voorbeelden uit de opgave op een tijdlijn tekenen en zeggen wanneer twee periodes níét overlappen. Dat is meestal eenvoudiger te controleren dan wanneer ze wel overlappen.

ShowEvents en ShowPharaohs: allebei overlopen ze de lijst. Vraag wie de prestaties van een Pharaoh kent en dus ook moet tonen.

Hoofdprogramma: volg de vijf stappen in de opgave. Vraag welke jaartallen hij kiest zodat de pharaohs echt in de periode van de dynastie vallen, en welk stuk code in een try hoort.

# Valkuilen

- Een jaartal als autoproperty schrijven, terwijl de opgave full vraagt en er een controle in moet.
- Controleren op positief in plaats van negatief.
- Bij ReignEndYear 0 weigeren, waardoor de tweede constructor geen eindjaar kan zetten.
- In de constructor de instantievariabelen rechtstreeks invullen, waardoor de controles in de setters niet gebeuren.
- Eerst het eindjaar toekennen en dan het beginjaar, waardoor de controle op het eindjaar met een beginjaar van 0 vergelijkt.
- Bij negatieve jaartallen "kleiner" en "later" door elkaar halen.
- Een regeringslengte of duur die negatief uitkomt.
- De lijst met achievements public maken.
- De tweede constructor volledig kopiëren in plaats van de eerste op te roepen.
- In AddPharaoh enkel pharaohs aanvaarden die volledig binnen de dynastie vallen, waardoor het eerste voorbeeld uit de opgave geweigerd wordt.
- In ShowEvents zelf de achievements proberen uit te schrijven in plaats van ShowAchievements op te roepen.
- AddPharaoh in het hoofdprogramma niet in een try-catch zetten, omdat er toch geen exception komt.

# Puntenverdeling

De originele proef had geen puntenverdeling. Deze is achteraf toegevoegd, op 20.

**Pharaoh (9 punten)**

- Name als autoproperty, ReignStartYear als full property die enkel negatieve waarden aanvaardt: 1,5
- ReignEndYear als full property die enkel negatieve waarden of 0 aanvaardt, en nooit kleiner dan ReignStartYear: 1,5
- Private lijst van strings met achievements, AddAchievement voegt toe, ShowAchievements toont ze onder elkaar: 1,5
- CalculateReignLength geeft de lengte van de regering in jaren terug: 1
- Constructor met naam, beginjaar en eindjaar, die beide jaren verwisselt als het eindjaar kleiner is dan het beginjaar, en de jaren via de properties toekent zodat de controles gebeuren: 2,5
- Constructor zonder eindjaar, die het eindjaar op 0 zet: 1

**Dynasty (6,5 punten)**

- Name als autoproperty, StartYear en EndYear als full properties die enkel negatieve waarden aanvaarden, met een EndYear die niet kleiner mag zijn dan StartYear: 1,5
- Lijst van Pharaoh-objecten, en AddPharaoh die een Pharaoh toevoegt als zijn regering overlapt met de dynastie en anders een exception gooit: 3
- CalculateDuration geeft de duur van de dynastie in jaren terug: 0,5
- ShowEvents toont per Pharaoh zijn naam en roept daarna zijn ShowAchievements op: 1
- ShowPharaohs toont de pharaohs in de lijst: 0,5

**Hoofdprogramma (4,5 punten)**

- Minstens twee Pharaoh-objecten met verschillende namen en regeerperioden, elk met minstens twee achievements via AddAchievement: 1
- Een Dynasty met een naam en negatieve start- en eindjaren waarmee beide pharaohs overlappen: 1
- De pharaohs toevoegen met AddPharaoh, met exceptions opgevangen: 1,5
- De duur van de dynastie tonen met CalculateDuration, en de prestaties tonen met ShowEvents: 1

# Beoordeling

- "auto" en "full" zijn opgelegd. Full betekent een private instantievariabele met een get en een set. Een autoproperty waar full gevraagd is, kan de controle niet doen: dan is dat deelpunt 0. Een full property waar auto gevraagd is, kost 0,5.
- Wat er gebeurt bij een ongeldige waarde (negeren of een exception), legt de opgave niet vast: beide goed.
- ReignEndYear aanvaardt 0: de tweede constructor zet het eindjaar op 0 als het einde onbekend is. Een setter die 0 weigert, kost 0,5 bij ReignEndYear; de tweede constructor beoordeel je dan alsof 0 aanvaard werd. Dat een pharaoh zonder eindjaar een lange regering of een ruime overlap krijgt, is geen fout van de student.
- Het verwisselen hoort in de constructor, vóór de jaren toegekend worden. Verwisselt de student in de setter van ReignEndYear en komt een Pharaoh met omgekeerde jaren toch juist uit, dan kost dat niets. Het moet wel echt verwisselen: een eindjaar dat gewoon geweigerd wordt, levert voor dat stuk niets op. Een eindjaar gelijk aan het beginjaar is niet kleiner en mag dus.
- Test het verwisselen met een Pharaoh die beide jaren in de verkeerde volgorde krijgt. Kent de constructor de jaren toe in een volgorde waardoor de controle met 0 vergelijkt en het verwisselen dus niet of verkeerd gebeurt, dan is de constructor niet af.
- De tweede constructor die de eerste oproept via this is de logische aanpak. Wie de eerste volledig kopieert, krijgt de boete voor redundante code, geen puntverlies in het onderdeel.
- CalculateReignLength en CalculateDuration geven het positieve verschil tussen de twee jaren. Eén jaar erbij tellen omdat beide jaren meetellen, niet afkeuren.
- Dynasty: bij EndYear vraagt de opgave geen verwisseling. Negeren, een exception of toch verwisselen is allemaal goed. De opgave zegt niet of de lijst van pharaohs private moet zijn; een publieke lijst kost hier niets. De lijst van achievements in Pharaoh moet wel private zijn, dat staat er letterlijk.
- AddPharaoh: beide voorbeelden uit de opgave moeten kloppen. Een pharaoh van -510 tot -480 bij een dynastie van -500 tot -300 wordt toegevoegd, een van -600 tot -530 niet. Een controle die enkel "volledig binnen de dynastie" aanvaardt, weigert het eerste voorbeeld: dan hoogstens 1 van de 3. Of rakende periodes (einde van de pharaoh gelijk aan begin van de dynastie) overlappen, laat de opgave open: beide goed. Een gewone Exception of een eigen exception-klasse, allebei goed.
- ShowEvents moet ShowAchievements van elke Pharaoh oproepen, voorafgegaan door zijn naam. ShowEvents en ShowPharaohs hoeven geen gedeelde methode te gebruiken.
- Hoofdprogramma: de Dynasty initialiseren met een object initializer of met een eigen constructor is allebei goed; de opgave legt geen constructor op. De naam moet ingesteld worden. De try-catch rond AddPharaoh is gevraagd, ook al valt er met de gekozen jaartallen niets op te vangen. ShowPharaohs hoeft niet in het hoofdprogramma.
- De opgave legt Engelse namen op (Pharaoh, AddAchievement, ReignStartYear). Dat is geen boete voor inconsistente naamgeving. De eigen namen van de student worden daarop niet afgerekend zolang ze onderling in één taal staan.
- Pharaoh en Dynasty samen in één bestand is -3, één keer.
