<!--
  Coach- en quoteergegevens voor oefeningen/EindeTests/Mod4/Opgave_2223.md.
  Formaat: zie _LEESMIJ.md in deze map.
-->
# Nota

Een vaardigheidsproef OOP met één opgave, een manifest-generator voor een schip, in vier delen: het klassendiagram, de uitvoer van het manifest, een console-applicatie en een reeks extra's. De abstracte klasse Doos staat volledig in de opgave. Vraag eerst aan welk deel de student bezig is. Geef geen code, ook geen constructor, property of override die hij zo kan overnemen.

# Aanpak

Deel 1: vertrek van het klassendiagram. Welke klassen erven van Doos, welke van Container, en welke implementeert ISafe? Doos heeft enkel een constructor met een id: vraag wat dat betekent voor de constructors van de kindklassen. Laat de student per klasse zeggen hoe de kostprijs verschilt en welke klasse de berekening van haar ouder kan hergebruiken. Bij SecureContainer: welke twee dingen moet het object bijhouden, en op welke plaats in de code wordt de kostprijs "uitgelezen"? Bij DHLSchip: eerst het totale gewicht van het vrachtruim kennen, dan pas beslissen of de nieuwe doos erbij kan.

Deel 2: laat hem de voorbeelduitvoer lijn per lijn uitleggen. Welke lijnen komen één keer, welke per doos, en welke totalen moet hij bijhouden terwijl hij de dozen overloopt? Hoe weet hij van een doos of ze ISafe is?

Deel 3: een menulus met daarin een tweede reeks vragen. Vraag welk object hij maakt bij welke keuze, en hoe hij stap 2 voor de drie types maar één keer schrijft. Wat moet er gebeuren als de doos te zwaar is?

Deel 4: bij 4.1, welke methode gebruikt Console.WriteLine als je er een object aan geeft, en in welke klasse overschrijf je die? Bij 4.2, hoe herken je in het vrachtruim de dozen die verzegeld kunnen worden? Bij 4.3, laat hem per actie eerst in woorden zeggen wat er met de lijst gebeurt, en of de grens van 10 dan nog bewaakt wordt.

# Valkuilen

- De code van Doos aanpassen in plaats van ze over te nemen.
- Kindklassen zonder constructor die het id doorgeeft aan Doos, waardoor het project niet compileert.
- De kostprijs van Container opnieuw uitrekenen in plaats van die van Doos te hergebruiken.
- PostDoos een eigen, vaste kostprijs geven, terwijl ze gewoon de kostprijs van Doos heeft.
- In SecureContainer tellen in GeefAantalLeesAttempts in plaats van in de get van KostPrijs.
- Enkel tellen zolang de container verzegeld is, terwijl elke lezing van de kostprijs telt.
- Een verzegeling die weer ongedaan gemaakt kan worden, bijvoorbeeld met een publieke setter.
- De gewichtscontrole doen op het gewicht van de nieuwe doos alleen, of een schip van precies 10 weigeren.
- Het vrachtruim een publieke set geven.
- In ToonManifest testen op SecureContainer in plaats van op ISafe.
- De 10 extra per ISafe-doos vergeten, of ze enkel bijtellen bij verzegelde dozen.
- De exception bij een te zware doos niet opvangen, waardoor het menu stopt.
- Stap 2 drie keer kopiëren, één keer per type doos (boete).
- VergrendelSnel in DHLSchip zetten, terwijl de opgave ze in het hoofdprogramma vraagt.
- Bij vervangen of dupliceren rechtstreeks in de lijst werken en zo de grens van 10 omzeilen.
- Het menu schrijven als een `while (true)` met een `break` (boete).

# Puntenverdeling

De punten per deel en voor 3a, 3b, 3c, 4.1, 4.2 en 4.3 komen uit de opgave, samen 20. De deelpunten daarbinnen zijn achteraf toegevoegd.

**Deel 1, Klassendiagram (6 punten)**

- Container en PostDoos: erven van Doos, constructor die het id doorgeeft, Container overschrijft KostPrijs als kostprijs van Doos plus 5, PostDoos houdt de kostprijs van Doos: 1,5
- ISafe: interface met VerzegelInhoud zonder parameters en zonder returnwaarde, en GeefAantalLeesAttempts zonder parameters die een int teruggeeft: 0,5
- SecureContainer: erft van Container, implementeert ISafe, telt hoe vaak de kostprijs gelezen wordt, geeft 0 als kostprijs na VerzegelInhoud, verzegeling niet ongedaan te maken: 2
- DHLSchip: lijst van dozen als vrachtruim met public get en private set, VoegDoosToe met een Doos als parameter die een bool teruggeeft, toevoegt zolang het totale gewicht hoogstens 10 wordt, en anders een Exception gooit met de boodschap "Te zwaar. Doos niet toegevoegd": 2

**Deel 2, Manifest (4 punten)**

- Hoofding met de naam van het schip: 0,5
- Per doos een lijn met een minteken, de inhoud, het gewicht en de kostprijs: 1
- Bij een ISafe-doos achteraan 5 hekjes en het resultaat van GeefAantalLeesAttempts: 0,5
- Totaalgewicht van alle dozen: 0,5
- Totaalprijs, met 10 extra per ISafe-doos bovenop haar kostprijs: 1,5

**Deel 3, Boot manager (4 punten)**

- 3a Bootnaam: schipsnaam één keer vragen en een DHLSchip met die naam maken: 0,5
- 3b Hoofdmenu: blijft terugkomen tot de gebruiker afsluit, met doos toevoegen, manifest tonen en afsluiten: 0,5
- 3c Doos aanmaken en toevoegen (3):
  - type doos vragen en het juiste object maken: 1
  - inhoud en gewicht vragen en aan de doos geven: 0,5
  - enkel bij een SecureContainer vragen of ze verzegeld moet worden, en bij ja VerzegelInhoud oproepen: 0,5
  - de doos toevoegen via VoegDoosToe, en een te zware doos opvangen zonder dat het programma stopt: 1

**Deel 4, Extra's (6 punten)**

- 4.1 Mooiere output (2):
  - ToString overschreven zodat een doos doostype, gewicht, prijs en inhoud toont: 1,5
  - bij een SecureContainer ook of ze verzegeld is: 0,5
- 4.2 VergrendelSnel (2):
  - methode in het hoofdprogramma met één parameter van het type DHLSchip die alle SecureContainers op dat schip verzegelt: 1,5
  - vierde optie "Vergrendel alles" in het hoofdmenu die de methode oproept: 0,5
- 4.3 Bootmanager (2):
  - verwijderen: 0,5
  - verplaatsen: 0,5
  - vervangen: 0,5
  - dupliceren: 0,5

# Beoordeling

- Doos staat letterlijk in de opgave. Overtypen levert niets op. Aanvullen mag (bijvoorbeeld ToString in 5.1), anders maken niet: werkt een kindklasse daardoor niet meer zoals gevraagd, dan verliest de student de punten van dat onderdeel.
- PostDoos kost evenveel als een Doos: gewicht maal 10, zoals in het voorbeeldmanifest (Strips, 3 kg, kost 30) en in 4.1. Een PostDoos met een vaste kostprijs van 10 doet niet wat gevraagd is: 0,5 minder in het eerste deelpunt van Deel 1. Een totaal in het manifest dat daardoor anders uitkomt, is een volgfout.
- SecureContainer telt elke lezing van KostPrijs via de get, verzegeld of niet. Tellen moet in die get gebeuren, want daar gebeurt het lezen. Wie enkel telt zolang de container verzegeld is, doet niet alles wat gevraagd is: 0,5 minder in het deelpunt van SecureContainer.
- Het manifest en ToString lezen zelf de kostprijs, en tellen dus mee. Het getal na de hekjes hangt af van de volgorde waarin de student leest. In het voorbeeld is dat 1; een ander getal door een andere leesvolgorde is geen fout.
- SecureContainer: de toestand "verzegeld" is private en verandert enkel via VerzegelInhoud. Een publieke setter waarmee de verzegeling terug uit kan, is niet het maximum voor dat deelpunt.
- VoegDoosToe geeft volgens de opgave een bool terug, maar gooit een exception als de doos te zwaar is. Een methode die dus enkel true teruggeeft, is goed. Wie false teruggeeft in plaats van een exception te gooien, doet niet wat gevraagd is. De grens: 8 plus 2 mag, 8 plus 3 niet. De boodschap van de exception moet kloppen; aanhalingstekens en spaties tellen niet.
- Vrachtruim: een property met public get en private set, met of zonder instantievariabele erachter. De opgave schrijft vrachtRuim met een kleine letter. Noemt de student de publieke property exact zo omdat de opgave het zegt, dan is dat geen boete voor naamgeving.
- DHLSchip heeft een Naam. Instellen via de constructor of via een property is allebei goed. De naam wordt beoordeeld bij 3a en bij de hoofding in Deel 2, niet bij Deel 1.
- Deel 2: tabs, uitlijning en het aantal sterretjes of streepjes tellen niet. De volgorde van de lijnen en de waarden wel. Testen op SecureContainer in plaats van op ISafe werkt vandaag, maar is niet wat gevraagd is: dat kost 0,5 in het deelpunt van de hekjes of van de totaalprijs, niet in beide.
- Deel 3: het id van een doos kiest de student zelf. Letters of cijfers in de menu's zijn allebei goed. De melding "Druk op enter" uit de screenshots is niet verplicht. Crasht het programma bij een te zware doos, dan is het laatste deelpunt van 3c 0.
- 4.1: ToString overschrijven in Doos, en in SecureContainer aanvullen via base, is de logische aanpak. Het doostype via GetType of via een override per klasse is allebei goed. Voor een niet verzegelde SecureContainer "Verzegeld=nee" of iets gelijkaardigs.
- 4.2: de opgave vraagt de methode "in je hoofdprogramma", dus een static methode in Program. Staat ze in DHLSchip, dan kost dat 0,5. Testen op ISafe of op SecureContainer is hier allebei goed.
- 4.3 is vaag. Hoe de gebruiker een doos aanduidt (index, nummer, inhoud), bepaalt de student. Verplaatsen betekent de positie in de lijst veranderen. Vervangen en dupliceren moeten de grens van 10 bewaken, via VoegDoosToe of dezelfde controle; wie ze omzeilt, krijgt voor die actie 0. Dupliceren door dezelfde doos een tweede keer in de lijst te zetten, zodat beide plaatsen naar hetzelfde object wijzen, is geen duplicaat: verzegelen of uitlezen van de ene verandert dan ook de andere. Dat levert voor dupliceren 0 op.
- De opgave legt namen in twee talen op (ISafe, SecureContainer en GeefAantalLeesAttempts naast DHLSchip, KostPrijs en VoegDoosToe). Die opgelegde namen zijn geen boete voor inconsistente naamgeving. De eigen namen van de student worden daarop niet afgerekend zolang ze onderling in één taal staan.
