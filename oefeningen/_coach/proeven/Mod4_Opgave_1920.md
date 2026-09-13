<!--
  Coach- en quoteergegevens voor oefeningen/EindeTests/Mod4/Opgave_1920.md (school en reddingswerkers, juni 2020).
  Formaat: zie _LEESMIJ.md in deze map.
-->
# Nota

Een OOP-vaardigheidsproef met twee losse opgaven: een school die leerlingen aanmaakt en weggeeft als werkstudent (70 procent), en een klassenstructuur van reddingswerkers met een Dictionary (30 procent). Vraag eerst aan welke opgave de student bezig is. Geef geen code, geen klassedefinities en geen properties of methodes die hij zo kan overnemen. Opgave 2 geeft een klassediagram; de cursus werkt daar vandaag niet meer mee, dus leg het gerust in woorden uit. Opzoeken of een key al in de Dictionary zit, kan met een foreach over de Dictionary, zoals de opgave voorstelt.

# Aanpak

School: begin bij de gegevens. Welke properties heeft een school, welke mogen van buitenaf veranderen, en welke regel hoort bij het geld? Laat hem uitleggen waar die regel "nooit onder 15" moet staan zodat hij altijd geldt. Daarna de methodes één voor één: wat krijgt ze binnen, wat controleert ze, wat past ze aan, wat geeft ze terug? Vraag bij GeefLeerling wat de methode moet teruggeven als er te weinig leerlingen zijn.

Leerling: de naam hangt af van hoeveel leerlingen er in het hele programma al gemaakt zijn. Vraag waar dat getal bewaard moet worden zodat het niet bij elk nieuw object opnieuw op 0 begint.

Main van opgave 1: schrijf de loop eerst in woorden uit, stap per stap zoals de opgave. Vraag hoe hij met een getal uit Random een kans van 60 procent maakt, en wat er moet gebeuren als GeefLeerling niets bruikbaars teruggeeft.

Opgave 2, klassen: lees het diagram van boven naar onder. Welke klasse is abstract, welke methode is abstract, wie erft van wie, en welke klasse heeft de interface? Vraag hoe SpecialeBrandweer een risicograad van 15 krijgt als de constructor van de ouderklasse die waarde verwacht, en hoe RapportStatus de tekst van de ouderklasse kan hergebruiken en aanvullen.

Opgave 2, Main: per object een key zoeken die nog niet gebruikt is. Laat hem uitleggen wanneer die zoektocht moet stoppen. Voor de gemiddelden: welke waarden tel je op, en door hoeveel deel je? Hoe weet je van een object in de Dictionary of het de interface heeft?

# Valkuilen

- School: de regel voor het minimum van 15 enkel in één methode controleren in plaats van in de property zelf.
- School: IsBijnaLeeg met de verkeerde vergelijking schrijven, waardoor hij altijd true geeft.
- School: de lijst Leerlingen als publieke instantievariabele maken in plaats van als property.
- School: in MaakLeerling eerst een leerling toevoegen en pas daarna controleren of er genoeg geld is.
- School: in GeefLeerling de leerling teruggeven maar vergeten hem uit de lijst te halen.
- Leerling: de teller als gewone instantievariabele maken, waardoor elke leerling Student1 heet.
- Main: een kans van 60 procent schrijven die eigenlijk 40 procent is.
- Main: bij te weinig leerlingen toch een lege waarde in de lijst werkstudenten steken, waardoor het tonen crasht.
- Opgave 2: Politie en Brandweer vergeten omdat enkel SpecialeBrandweer een speciale regel heeft.
- Opgave 2: de risicograad van SpecialeBrandweer in Main meegeven in plaats van in de klasse zelf vast te leggen.
- Opgave 2: een key toevoegen zonder eerst te kijken of hij bestaat, waardoor het programma soms crasht.
- Opgave 2: het gemiddelde uitrekenen met vaste getallen in plaats van met een loop over de Dictionary.
- Opgave 2: op SpecialeBrandweer testen in plaats van op de interface.

# Puntenverdeling

De originele proef geeft percentages: opgave 1 telt voor 70 procent (school 35, leerling 25, main 40 procent daarvan), opgave 2 voor 30 procent (klassestructuur 40, main 60 procent daarvan). Die zijn achteraf omgerekend naar punten op 20, afgerond op halve punten, en verdeeld in deelpunten.

**Opgave 1 (14 punten)**

Klasse School (35 procent, 5 punten)

- GeldHoeveelheid als int-property met private set die nooit onder 15 kan: 1
- IsBijnaLeeg als read-only property, true bij 15 of lager: 0,5
- Leerlingen als property met een lijst van leerlingen, en de autoproperty Naam met waarde school90: 0,5
- GeefGeld: krijgt een double en telt die bij het geld: 0,5
- MaakLeerling: enkel bij minstens 40 geld een nieuwe leerling toevoegen en het geld met 15 verlagen, true of false teruggeven: 1
- GeefLeerling: bij minstens 2 leerlingen de eerste teruggeven en uit de lijst verwijderen: 1
- ToString overridden met het geld, de naam, IsBijnaLeeg en het aantal leerlingen: 0,5

Klasse Leerling (25 procent, 3,5 punten)

- Naam als read-only property met private set: 1
- Een static teller die over alle leerlingen heen bijhoudt hoeveel er al gemaakt zijn: 1,5
- Default constructor die de naam instelt op Student gevolgd door dat nummer, beginnend bij 1: 1

Main (40 procent, 5,5 punten)

- Een school en een lege lijst werkstudenten aanmaken: 0,5
- Een loop van 15 keer die telkens een willekeurig bedrag tussen 15 en 30 aan de school geeft: 1
- Een leerling laten maken, en enkel als dat gelukt is met 60 procent kans GeefLeerling oproepen en de leerling (als er een is) in werkstudenten steken: 2
- Per keer de school tonen via ToString: 1
- Na de loop de namen van alle werkstudenten tonen: 1

**Opgave 2 (6 punten)**

Klassestructuur (40 procent, 2,5 punten)

- Abstracte klasse ReddingsWerker met de property RisicoGraad, een constructor die de risicograad krijgt, en een abstracte methode RapportStatus die een string teruggeeft: 1
- Brandweer en Politie erven van ReddingsWerker, met een constructor die de risicograad krijgt en een RapportStatus die de risicograad teruggeeft; SpecialeBrandweer erft van Brandweer en implementeert de interface IRampGebiedResponder met Vertrek: 1
- SpecialeBrandweer heeft altijd risicograad 15 via de constructor van Brandweer, Brandweer en Politie krijgen in Main 6 mee, en SpecialeBrandweer overridet RapportStatus met de extra zin "Ik ben beter": 0,5

Main (60 procent, 3,5 punten)

- Van elke niet-abstracte klasse één object in een Dictionary, met een willekeurige key tussen 100 en 2000 die eerst opgezocht wordt en bij een dubbele opnieuw gekozen; de keys worden getoond: 1,5
- Eenmalig een key vragen en van dat object RapportStatus tonen: 0,5
- Gemiddelde risicograad van alle objecten, berekend met een loop: 0,5
- Gemiddelde risicograad van de objecten die geen IRampGebiedResponder zijn, bepaald via de interface: 1

# Beoordeling

- School: de hoeveelheid geld is minimaal 15, en IsBijnaLeeg is dus true zodra ze op 15 staat. Een property die alles onder 15 op 15 zet, of die zo'n waarde weigert, is goed. De startwaarde van het geld legt de opgave niet vast.
- School: de regel voor het minimum hoort in de property (of in de private setter). Staat die controle enkel in één methode, dan is het eerste onderdeel een half punt. Een publieke setter in plaats van de gevraagde private set kost ook een half punt.
- School: GeefGeld krijgt een double terwijl het geld een int is. Afkappen of afronden zijn allebei goed, zolang het expliciet gebeurt.
- School: de lijst Leerlingen is bij de start leeg. Een extra limiet op het aantal leerlingen vraagt de opgave niet.
- School: wat GeefLeerling teruggeeft bij minder dan 2 leerlingen, zegt de opgave niet. null teruggeven is logisch; een exception gooien is ook goed als Main die opvangt.
- Main: "tussen 15 en 30" mag met of zonder 30. De 60 procent moet wel 60 procent zijn: een grens die 40 procent geeft, kost een half punt in dat onderdeel.
- Main: een leerling die GeefLeerling niet kon geven, mag niet als lege waarde in werkstudenten belanden. Gebeurt dat toch, dan kost het een half punt in het derde onderdeel. Dat het tonen van de namen daarna crasht, is een volgfout.
- Opgave 2: RapportStatus is abstract in ReddingsWerker, met een eigen RapportStatus in Brandweer en Politie, zoals de opgave en het schema vragen. Een virtual RapportStatus met code in ReddingsWerker en zonder eigen versie in Brandweer en Politie kost een half punt in het eerste onderdeel. SpecialeBrandweer moet RapportStatus overriden en de tekst van Brandweer aanvullen in plaats van kopiëren.
- Opgave 2: dat Brandweer en Politie allebei dezelfde korte RapportStatus hebben, legt het schema op. Dat is geen redundante code.
- Opgave 2: Brandweer en Politie krijgen hun risicograad via hun constructor en Main geeft 6 mee, zoals de opgave en het schema vragen. Een constructor zonder parameter die zelf 6 invult, kost een half punt in het derde onderdeel, zolang SpecialeBrandweer toch op 15 komt.
- Opgave 2: wat Vertrek doet, zegt de opgave niet. Elke implementatie is goed, ook een lege.
- Opgave 2: de namen uit het diagram (ReddingsWerker, RisicoGraad, RapportStatus, IRampGebiedResponder, Vertrek) zijn opgelegd. De parameternaam uit het diagram niet.
- Opgave 2, Main: "zoek eerst op" is gevraagd. Een key toevoegen en de exception bij een dubbele opvangen, is een andere aanpak dan gevraagd: een half punt minder in dat onderdeel. Opzoeken met een foreach over de Dictionary (zoals de opgave voorstelt) of met de gepaste methode van Dictionary, is allebei goed.
- Opgave 2, Main: de gemiddelden moeten berekend worden over de objecten in de Dictionary. Vaste getallen in de code leveren voor dat onderdeel niets op. Een gehele deling kost hier niets: met 6, 6 en 15 is de uitkomst exact.
- Opgave 2, Main: het tweede gemiddelde moet via de interface bepaald worden (is of as met IRampGebiedResponder). Wie op SpecialeBrandweer test, krijgt een half punt.
- Opgave 2 is volgens de opgave een "kleine applicatie": in een apart project of in dezelfde Main na opgave 1 is allebei goed.
- Klassen in één bestand is de boete, geen puntverlies in de onderdelen.
