<!--
  Coach- en quoteergegevens voor oefeningen/EindeTests/Mod2/Opgave_2122b.md.
  Formaat: zie _LEESMIJ.md in deze map.
-->
# Nota

Een inhaalproef met één opgave: een quiz over de chemische elementen, met een enum, twee synchrone arrays die de opgave al geeft, en twee methoden die de opgave vastlegt (StelVraag en SuddenDeathRonde). Geef geen code en geen methodesignaturen die hij zo kan overnemen.

# Aanpak

Begin bij de enum VraagSoort en de methode StelVraag, want het hoofdprogramma en de sudden death ronde gebruiken ze allebei. Laat de student eerst zeggen wat StelVraag binnenkrijgt en wat ze teruggeeft, en dan per vraagsoort in gewone taal: wat toon ik, wat vraag ik, waarmee vergelijk ik het antwoord, en hoe haal ik het atoomnummer uit de index.

Het willekeurige element: vraag hem welke indexen er in de arrays bestaan, en hoe hij zorgt dat de eerste en de laatste ook gekozen kunnen worden zonder het aantal elementen zelf te tellen.

Het hoofdprogramma: laat hem de zeven stappen uit de opgave overlopen. Vraag hoe hij een willekeurige waarde van de enum maakt, en of die per vraag opnieuw gekozen moet worden.

SuddenDeathRonde: laat hem zeggen wanneer de loop stopt, en hoe hij die voorwaarde in de loopvoorwaarde krijgt. Vraag hoeveel keer StelVraag per ronde van de loop mag opgeroepen worden.

# Valkuilen

- Het willekeurige element kiezen met een vast getal als bovengrens, of een bovengrens die één te laag is, waardoor Oganesson nooit gevraagd wordt.
- Het atoomnummer vergelijken met de index in plaats van met de index plus 1.
- Twee keer een willekeurig element kiezen: één om de vraag te stellen en één om het juiste antwoord te tonen.
- De willekeurige vraagsoort één keer kiezen voor de loop, waardoor alle vragen van ronde 1 van dezelfde soort zijn.
- Een willekeurige vraagsoort kiezen met een bovengrens die ZoekNaam nooit oplevert.
- In StelVraag de score optellen of tonen in plaats van 0 of 1 terug te geven.
- In SuddenDeathRonde StelVraag twee keer per ronde oproepen: één keer om te testen en één keer om op te tellen. Dan krijgt de speler twee vragen.
- De sudden death ronde schrijven als een `while (true)` met een `break` (boete).
- De arrays niet als parameter doorgeven.

# Puntenverdeling

De originele proef had geen puntenverdeling. Deze is achteraf toegevoegd, op 20.

**Hoofdprogramma (5 punten)**

- Aantal vragen vragen, loop die StelVraag even vaak oproept met de twee arrays: 2
- Per vraag een willekeurige VraagSoort als derde parameter: 1
- Scores van ronde 1 optellen en de score van ronde 1 tonen: 1
- SuddenDeathRonde oproepen, de score van ronde 2 en de totaalscore tonen: 1

**Enum en StelVraag (10 punten)**

- Enum VraagSoort met ZoekSymbool, ZoekAtoomNummer en ZoekNaam; StelVraag met een namenarray, een symbolenarray en een VraagSoort als parameters, en een int als returntype: 2
- Een willekeurig element uit de volledige array, van het eerste tot en met het laatste: 1
- ZoekSymbool: naam en atoomnummer tonen, symbool vragen en controleren met de symbolenarray: 2
- ZoekAtoomNummer: naam tonen, atoomnummer vragen en controleren met de index plus 1: 2
- ZoekNaam: symbool tonen, naam vragen en controleren met de namenarray: 1,5
- Bij een juist antwoord een bevestiging en 1 teruggeven; bij een fout eerst het juiste antwoord tonen en 0 teruggeven: 1,5

**SuddenDeathRonde (5 punten)**

- SuddenDeathRonde met de twee arrays als parameters en een int als returntype: 1
- Loop die telkens StelVraag met ZoekSymbool oproept en het resultaat optelt: 2
- De loop stopt na de eerste fout via de loopvoorwaarde, en de methode geeft de totaalscore terug: 2

# Beoordeling

- Bij ZoekNaam tonen het voorbeeld in de tekst en de voorbeelduitvoer ook het atoomnummer, de beschrijving niet. Met en zonder atoomnummer is goed. Bij ZoekAtoomNummer mag het atoomnummer uiteraard niet in de vraag staan.
- In de sudden death ronde toont de voorbeelduitvoer na de fout eerst de boodschap van StelVraag en daarna "Sudden death gedaan!". Die laatste regel mag ontbreken. De exacte teksten en spaties tellen niet mee.
- Of de vergelijking hoofdletters negeert, staat niet in de opgave. Een exacte vergelijking en een vergelijking zonder onderscheid in hoofdletters zijn allebei goed.
- De twee arrays geeft de opgave zelf. Ze leveren geen punten op en ze tellen niet als redundante code. Ze moeten wel als parameter naar StelVraag en SuddenDeathRonde gaan: een methode die de arrays zelf aanmaakt of ze niet als parameter krijgt, doet niet wat gevraagd is en verliest het eerste onderdeel van die methode.
- StelVraag vraagt en toont zelf; dat legt de opgave op. Extra hulpmethoden per vraagsoort mogen (de tip in de opgave), maar zijn niet nodig voor het maximum.
- Dezelfde code voor de drie vraagsoorten grotendeels gekopieerd (tonen van "Fout", teruggeven van de score) is de boete voor redundante code, geen verlies in de onderdelen.
- Een loop in SuddenDeathRonde die enkel met een `break` stopt, is de boete, geen verlies in het derde onderdeel. Roept de loop StelVraag twee keer per ronde op, dan werkt de ronde niet zoals gevraagd en verliest hij het tweede onderdeel.
- Een vaste 118 in plaats van de lengte van de array werkt, maar is niet de logische aanpak: hoogstens de helft van dat deelpunt. Een bovengrens die het laatste element uitsluit, levert 0 op voor dat deelpunt; reken dat niet nog eens aan bij de vraagsoorten.
