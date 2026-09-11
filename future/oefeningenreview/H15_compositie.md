# H15: Compositie en aggregatie

> **Beslist door Tim (2026-09-11), zie README:** `multipplecompuml.png` mag hertekend worden met de
> skill `afbeelding`.

Bronnen: `oefeningen/15_compositie/A_PracticaComp.md`, `oefeningen/_coach/15_compositie.md`,
`content/14_compositie/0_compositie_intro.MD`, `this.md`, `zieverder.md`, `content/B_appendix/boete.md`,
de afbeeldingen in de opgaven (`oefeningen/assets/6_klassen/compuml.png`, `multipplecompuml.png`,
`oefeningen/15_compositie/aiwereld.png`) en die uit de leerstof, het gelinkte project
`oefeningen/EindeTests/A_DEEL2_AllInOne/2_OOTextGame.md`, `oefeningen/opmaak.html` (labels),
vluchtig `oefeningen/14_advancedovererving/A_Practica.md` en het begin van
`oefeningen/16_polymorfisme/A_Practica.md`.

## 1. Fouten die sowieso weg moeten

- **Vier van de zeven oefeningen hebben een lege oplossing.** Worldbuilding
  (`oefeningen/15_compositie/A_PracticaComp.md:519`), Risk (`:555`), Textbased RPG (`:565`) en De
  Online Coach (`:618`): de callout `Oplossing` staat er, maar is leeg. Daar zitten een *Essential*
  en de *Final Essentials* bij. De student klikt op "Oplossing" en krijgt niets. Worldbuilding en
  De Online Coach zijn de twee GPT-oefeningen: ze zijn er zo te zien bijgekomen zonder ooit opgelost
  te worden, en dat verklaart ook het volgende punt.
- **Compositie en aggregatie: de tekst zegt het ene, de code doet het andere.** In het boek is het
  verschil in code: wie maakt het object aan? Maakt de klasse het zelf aan (manier 1 en 2), dan is
  het compositie. Komt het langs buiten binnen (manier 3), dan is het aggregatie
  (`content/14_compositie/0_compositie_intro.MD:122-124`). De oefeningen houden zich daar niet aan:
  - *Worldbuilding* noemt World-Zone compositie (`:415`, `:458`), maar in de voorbeeldcode maakt
    `Main` de zones aan, geeft ze door met `AddZone(zone)` en blijft `forest` daarna gewoon
    gebruiken (`:481-490`, `:503`, `:511`). Dat is manier 3, dus aggregatie. Zone-Item heet
    aggregatie (`:430`) en wordt in code op precies dezelfde manier gemaakt. De student schrijft dus
    twee keer dezelfde code onder een andere naam.
  - *De Online Coach* zegt dat de sporter zijn schema in de constructor aanmaakt en dat het er
    "onlosmakelijk" bij hoort (`:593`). Maar `ZetNieuwSchema(TrainingSchema schema)` (`:595`) en
    `Main` (stap 2 en 3, `:612-613`) maken het schema buiten de sporter en geven het mee. Stap 2
    heet "De Compositie container" (`:580`), terwijl de oefeningen in `Main` aangemaakt worden
    (`:611`) en in twee schema's tegelijk kunnen zitten. In code is alles in deze oefening
    aggregatie, net in de oefening die het verschil als kern heeft (`:572`).
  - *Politiek* noemt president en ministers "compositieobjecten" (`:100`). Ze komen binnen via
    `MaakRegering`, dus aggregatie, en de Les zegt dan ook "aggregaatobjecten" (`:150`).

  Voorstel: zie sectie 2. Kort: laat bij compositie de container zelf `new` doen, en laat de
  opgave dat ook met zoveel woorden vragen.
- **Moederbord: de oplossing telt de vrije RAM-sloten fout.** `Ramslots.Capacity` wordt gebruikt als
  "aantal sloten" (`:350`). Maar `Capacity` groeit gewoon mee als je meer toevoegt: 4 latjes in een
  bord met 3 sloten geeft "Je hebt nog 2 vrij ramsloten", 3 latjes in een bord met 2 sloten geeft
  "nog 1 vrij" (geverifieerd met dotnet). `Capacity` staat bovendien nergens in de leerstof. Het
  aantal sloten hoort in een eigen instantievariabele, en een methode `PlaatsRam` weigert als het
  vol is.
- **Moederbord: opgave en oplossing passen niet bij elkaar.** De opgave toont
  `Z390E_GAMING.AGP = new AGPSlot(...)` en `Z390E_GAMING.CPU = new CPUSlot(...)` met een lege
  constructor (`:302-304`). De oplossing heeft een constructor `Moederbord(3)`, properties
  `AGPSlot`/`CPUSlot` en klassen `AGPKaart`/`CPU` (`:325-327`, `:338-339`). Wat in de opgave een
  klasse is, is in de oplossing een property. Daarnaast:
  - `public List<RamMemory> Ramslots { get; set; }` en `AndereComponenten` (`:340`, `:342`) zijn
    precies wat de leerstof een "SLECHT IDEE" noemt (`content/14_compositie/0_compositie_intro.MD:248-259`),
    compleet met de Steven-callout erna.
  - Half Engels, half Nederlands (`RamMemory`, `Ramslots` naast `Moederbord`, `GeheugenGrootte`):
    dat is de boete "naamgeving niet consistent".
  - "vrij ramsloten" moet "vrije" zijn (`:320`, `:352`).
  - De opgave zegt "een array moet voorzien van het type `List<RAM>`" (`:295`): een List is geen
    array.
- **Politiek: `NaamGen` heeft twee bugs, en tip 1 geeft de eerste mee.**
  `for (int i = 0; i < rng.Next(5,10); i++)` (`:271`) trekt bij elke ronde een nieuw getal. Namen
  zijn daardoor 5 tot 9 letters, nooit 10, en meestal kort. `(char)rng.Next('a', 'z')` (`:273`, en
  zo ook in tip 1 op `:133`) geeft nooit een `z`, want de bovengrens hoort er niet bij. In 10.000
  namen geen enkele `z` en geen enkele naam van 10 letters (geverifieerd met dotnet). Voorstel:
  de lengte één keer bepalen vóór de lus, en `'z' + 1` gebruiken.
- **Politiek: de oplossing krijgt zelf een boete.** `private President President;`,
  `private Minister EersteMinister;` en `private List<Minister> Ministers` (`:177-179`) zijn private
  en beginnen met een hoofdletter (boete naamgeving). Een instantievariabele met dezelfde naam als
  haar type maakt het voor een beginner nog verwarrender. Maak er `president`, `eersteMinister` en
  `ministers` van.
- **Politiek: kleinere verschillen.**
  - De opgave zegt dat alle ministers "op `null` gezet" worden (`:115`), de oplossing doet
    `Ministers.Clear()` (`:211`). De coach-data zegt de student dan nog dat hij moet uitleggen wat
    de opgave "precies vraagt". Kies er één en zet die in de opgave.
  - `minin[0]` (`:186`) crasht op een lege lijst. De opgave vraagt 1 tot en met 5 ministers
    (`:109`), maar niemand controleert dat.
  - Tip 2 (`:135`): "ééns" bestaat niet (dat wordt "één keer"), en "static veld" moet
    "static variabele" zijn, het woord dat het boek gebruikt.
- **Textbased RPG: het gelinkte project heeft een kapotte kaart.** In
  `oefeningen/EindeTests/A_DEEL2_AllInOne/2_OOTextGame.md:434` gaat de klapdeur in het noorden van de
  Tuin naar de Computerruimte in plaats van naar de Cafetaria (de beschrijving op `:398` en de
  terugweg op `:436` wijzen op de Cafetaria). Gevolg: er is geen uitgang naar de Cafetaria met de
  sleutel, en de Computerruimte is zonder sleutel bereikbaar. Dat kan via de tuin (n, n, n) en via
  de gang (n, n, w, o). Het slot hangt aan de verkeerde uitgang (`:438`, het commentaar op `:439`
  zegt oost), en de Gang/Computerruimte-uitgangen spreken elkaar tegen (`:439` oost, `:441` ook
  oost). De sleutel oprapen kan ook niet. Alles geverifieerd met dotnet. "Dit project gebruikt alle
  materie tot en met dit hoofdstuk" (`A_PracticaComp.md:563`) klopt niet: er zit geen overerving
  en geen exception in.
- **UML naar code: de oplossing is onaf.** `pistons` en `propellers` blijven leeg met een `//todo`
  in de oplossing zelf (`:48`, `:72`), terwijl het diagram 4..8 zuigers en 1..4 schroeven vraagt.
  De Les (`:13`) spreekt over "handen, voeten en benen" en "2 compositie-objecten": er zijn geen
  voeten in het diagram, en het diagram geeft geen aantallen, dus één hand is correct. De zin
  verwart eerder dan hij helpt. En "compositiet-objecten" is een typfout.
- **Risk: de opgave is slordig.**
  - Typfouten: "implmenteert" (`:535`), "Leger-objecthoudt" (`:543`), "De referenties in deze beide
    zijn" (`:533`), "Wanneer de aanroept gebeurt" (`:553`).
  - Het ToString-formaat (`:537`) staat vol losse sterretjes. Geef liever één concreet voorbeeld:
    `België (Buurlanden: Nederland, Frankrijk). Grootte gestationeerd leger: 5`.
  - Er staat niet in welke klasse `VerplaatsLeger` hoort, en niet wat er gebeurt met een negatieve
    sterkte.
- **Opmaak.**
  - De Les staat telkens als `callout-tip` met vetgedrukte tekst binnen de Oplossing (`:13`, `:37`,
    `:150`, `:312`). Zo wordt het geen aparte Les-knop, en zit de Les mee achter het slot.
  - Politiek, Worldbuilding en De Online Coach gebruiken `##`- en `###`-koppen (`:88-137`,
    `:406-474`, `:574-608`). Die vullen de inhoudsopgave.
  - "(PRO) Textbased RPG" (`:560`): het label staat vóór de titel. `oefeningen/opmaak.html:46`
    zoekt enkel achteraan, dus er komt geen PRO-label en "(PRO)" blijft in de titel staan.
  - "(Essential, GPT)" (`:394`) werkt technisch, maar schrijf het zoals elders als `(*Essential*, GPT)`.
  - Nog geen ankers `{#h15-...}`.

## 2. Wat sterker kan

- **`this` wordt nergens geoefend.** Het is een derde van de leerstof (`content/14_compositie/this.md`),
  met drie gebruiken en een valkuil (`this` in een static methode). Geen enkele oefening vraagt het.
  Risk is er de natuurlijke plek voor, want land en leger wijzen naar elkaar:
  - `Land.PlaatsLeger(Leger leger)` zet `this.leger = leger;` en `leger.Locatie = this;`. Zo zijn
    beide kanten altijd in orde, net de valkuil die de coach-data al noemt.
  - `Land.VoegBuurToe(Land buur)` voegt ook zichzelf toe bij de buur (`buur.buren.Add(this)`),
    zodat de kaart langs twee kanten klopt.
  - Laat `VerplaatsLeger` enkel toe naar een buurland (anders een exception). Nu dient de lijst met
    buren nergens voor, behalve voor `ToString`.

  In De Online Coach kan hetzelfde met `Sporter.KiesCoach(Coach coach)`, die
  `coach.VoegSporterToe(this)` oproept. Zie ook de nieuwe oefening "Inschrijven" in sectie 4.
- **Maak het verschil zichtbaar in de code, niet enkel in de tekst.** Eén vuistregel in de opgaven:
  compositie = de container doet zelf `new`, aggregatie = het object komt binnen via een parameter
  of property.
  - *Worldbuilding*: `AddZone(string name, int difficulty)` maakt de zone zelf aan, en
    `PlaceItem(string zoneName, Item item)` legt een item in een zone. Zo heeft `Main` nooit zelf
    een zone vast. Items blijven langs buiten komen, en een stap "verplaats het zwaard van de
    woestijn naar het bos" toont dat het item de verhuis overleeft.
  - *De Online Coach*: `Sporter(string naam, string schemaNaam)` maakt zijn schema zelf aan,
    `ZetNieuwSchema(string schemaNaam)` vervangt het door een nieuw leeg schema. De oefeningen komen
    uit een "catalogus" in `Main` en mogen in meerdere schema's zitten (aggregatie). Voeg in `Main`
    een laatste stap toe: `coleman = null;` en daarna `arnold.Train();`. Dat werkt nog, en dat
    toont wat "de coach bezit de sporters niet" in code betekent.
- **Politiek: gebruik de "is een"-vraag die er al in zit.** "Een President is een minister" (`:92`)
  is de enige overerving op de pagina, en de opgave laat de student kiezen voor een koning (`:96`).
  Een koning is geen minister. Voeg één vraag toe: "Kies je voor een koning, klopt `: Minister` dan
  nog? Wat zegt *favor composition over inheritance*?" Zo komen "is een" en "heeft een" samen in één
  oefening. Ook Verkiezingen kan meer: de uitslag maakt de ministers zelf aan (compositie), het land
  krijgt ze binnen (aggregatie). Dezelfde objecten, bekeken vanuit twee klassen. Zet dat in de Les
  in plaats van "Dit was al een iets complexere oefening" (`:150`).
- **UML naar code: een diagram met een lege ruit ontbreekt.** Beide diagrammen tonen enkel
  compositie. De student vertaalt dus nooit een aggregatie uit UML naar code. Voeg een deel 3 toe
  met de figuur uit het boek `content/assets/6_klassen/compagg.png` (Huis met kamers als compositie,
  een computer in de slaapkamer als aggregatie, met onderdelen). Die figuur staat nu nog niet in
  `oefeningen/assets/`. Vraag er ook bij dat de aantallen uit het diagram in de code terugkomen
  (4 wielen, 4..8 zuigers). De opgave zelf is nu één zin ("make it happen!", `:3`) zonder te zeggen
  wat een ruit of een getal betekent. Een regel met "volle ruit = ..., getal = ..." helpt.
- **Moederbord: breng de Steven-les binnen.** Laat `Ramslots` private en voorzie
  `PlaatsRam(RamMemory ram)`, die weigert als alle sloten vol zijn. Dat oefent net wat de leerstof
  uitlegt over een interne lijst niet naar buiten geven (`content/14_compositie/0_compositie_intro.MD:281-312`).
  AGP bestaat al twintig jaar niet meer en een RTX 2080 past er niet in: maak er PCIe van.
- **Geen enkele oefening toont voorbeelduitvoer.** Politiek (`Main` toont niets over wie er in de
  regering zit), Worldbuilding (`PrintWorldInfo`, `PrintZoneInfo`), Risk (`ToonKaart`) en De Online
  Coach (`ToonInfo` staat er als enige). Een `.console`-blok per oefening geeft de student iets om
  zijn werk naast te leggen.
- **Textbased RPG: haalbaar, maar niet afgebakend.** De gelinkte pagina geeft bijna alle code; het
  "maken" is dus overtypen. Het echte werk zit in "uitbreiden met nieuwe functionaliteit" (`:563`),
  en dat is zonder richting. Voor een H15-student is het haalbaar: klassen, `List`, een enum,
  properties, `this`. Geen overerving of polymorfisme nodig. Voorstel om het PRO-deel af te bakenen,
  met drie concrete uitbreidingen die bij dit hoofdstuk horen:
  1. Herstel de kaart zodat de sleutel nodig is (zie sectie 1).
  2. Een klasse `Speler` die zijn inventaris zelf beheert (private lijst, `Raap(GameObjects item)`,
     `Heeft(GameObjects item)`) plus een actie "p" om op te rapen. Nu staat de inventaris los in
     `GameManager` en kan je niets oprapen.
  3. `ToonActies` toont enkel de richtingen die er in de huidige locatie echt zijn.
- **Worldbuilding: properties die nergens dienen.** `LevelRequirement` en `Weight` worden nergens
  gebruikt. Geef ze een doel (`CanEnter(int playerLevel)`, `TotalWeight()` op een zone) of schrap ze.

## 3. Wat weg kan (of verhuist)

- **Worldbuilding, "Functionele vereisten"** (`:452-472`): herhaalt de opgave erboven punt voor
  punt. Schrappen maakt een lange opgave een derde korter.
- **De `//todo`-regels** in de oplossing van UML naar code: vervangen door de echte code.
- **De Google-zoeklink** bij Moederbord (`:293`) is een lange, breekbare URL met sessieparameters.
  Eén zin "zoek een afbeelding van een moederbord met benoemde onderdelen" volstaat.
- **Textbased RPG** naar het einde van de pagina, als bonus na de Final Essentials. Zonder de
  afbakening uit sectie 2 kan hij beter enkel in `EindeTests` blijven staan.
- **`aiwereld.png`** (`:517`) is een grote staande afbeelding (1024x1536) die enkel sfeer brengt. Mag
  gerust een stuk kleiner.

## 4. Gaten: kansen voor nieuwe oefeningen

1. **Is een of heeft een?** (*Essential*). Tien paren, zoals Auto-Motor, Kat-Dier, Boek-Pagina,
   Laptop-Computer, Klas-Student, Auto-Wiel, President-Minister, Koning-Minister,
   Vierkant-Rechthoek en Hond-Staart. Per paar schrijft de student de klassehoofding
   (`class Kat : Dier`) of de instantievariabele (`private List<Wiel> wielen`). Bij elke "heeft een"
   zegt hij ook of het compositie of aggregatie is, en waarom. Traint de kernvraag van het hoofdstuk
   vóór er code geschreven wordt. Als eerste oefening op de pagina.
2. **Compositie of aggregatie?** (*Essential*, code lezen). Zes korte fragmenten: de drie manieren
   met PC en HardeSchijf, `Boek.InsertPagina(new Pagina(), 5)`, een huis dat zijn kamers in de
   constructor maakt, en `patient.Hart = donor.Hart`. De student zegt telkens welke relatie het is en
   wijst de regel aan die het verraadt (wie doet `new`, wie houdt nog een verwijzing vast).
3. **Inschrijven** (*Essential*). Klassen `Student` en `Klas`. De student gebruikt de drie vormen
   van `this`: `this.naam = naam;` in de constructor (parameter en instantievariabele met dezelfde
   naam), `public Student() : this("Anoniem")`, en `SchrijfIn(Klas klas)`, die `klas.VoegToe(this)`
   oproept. Als laatste stap probeert hij `this` in een static methode `static void ToonAantal()`
   en leest hij de foutmelding van de compiler. Traint `this` en aggregatie (de klas bezit de
   student niet).
4. **Voorspel de uitvoer**. Drie korte programma's, eerst op papier en daarna uitvoeren:
   - `patient.Hart = donor.Hart; donor.Hart.Slagen = 0;` Wat toont `patient.Hart.Slagen`?
   - De constructor uit `content/14_compositie/this.md:33-35`, met een parameter `Levens` en
     `Levens = 5;` zonder `this`.
   - Twee landen die dezelfde `List<Minister>` krijgen zonder kopie, waarna het ene land
     `Clear()` doet.

   Traint de valkuilen uit `zieverder.md` (gedeelde referentie, naamconflict), die nu in geen
   enkele oefening terugkomen.
5. **Stevens bibliotheek** (zoek de fout). Steven levert een `Bibliotheek` in van een A.I. Er
   zitten vier fouten in, twee die de compiler vindt en twee die hij niet vindt:
   - `class Lid : Boek` ("een lid heeft boeken", dus geen "is een");
   - `public List<Boek> Boeken { get; private set; }` met "nu kan niemand eraan", terwijl `Main`
     `Boeken.Clear()` doet;
   - `ToString` die `uitgeleend.Titel` gebruikt zonder `null`-controle;
   - `this` in een static methode.

   Traint lezen in plaats van schrijven, met de klassieke fouten van dit hoofdstuk.

## 5. Voorgestelde volgorde

Is een of heeft een? → UML naar code (met deel 3: huis en computer) → Compositie of aggregatie? →
Moederbord → Inschrijven → Voorspel de uitvoer → Politiek (*Essential*) → Stevens bibliotheek →
Worldbuilding (*Essential*) → Risk → De Online Coach (*Final Essentials*) → Textbased RPG (PRO,
bonus)

## 6. Nevenvondsten

- **Coach-data** (`oefeningen/_coach/15_compositie.md`):
  - Ze neemt de tegenspraken uit sectie 1 over. Worldbuilding: "de wereld maakt en beheert ze"
    (`:117`), terwijl de opgave dat niet doet. De Online Coach: het schema "wordt in de constructor
    aangemaakt ... en kan later vervangen worden" (`:172`).
  - Bij Moederbord keurt ze public properties goed (`:99`).
  - Pas de coach-data mee aan met de opgaven, anders loodst de coach de student naar code die de
    oplossing tegenspreekt.
  - De Textbased RPG-aanpak spreekt over "de speler heeft een inventaris" (`:155`), maar het
    project heeft geen klasse `Speler`. Dat klopt pas als uitbreiding 2 uit sectie 2 erbij komt.
- **Ook in H14 een lege GPT-oplossing**: Meme Lord Simulator, de Final Essentials van dat hoofdstuk
  (`oefeningen/14_advancedovererving/A_Practica.md:479`).
- **Dode links in H16**: `oefeningen/16_polymorfisme/A_Practica.md:8` wijst naar
  `../13_advancedovererving/A_Practica.md`, maar die map bestaat niet (Dierentuin staat in
  `14_advancedovererving/A_Practica.md`). `:61` wijst naar
  `17_gencols/2_genericclasses_en_constraints.md`, dat nergens in de repo staat.
- **Overgang naar H16**: "Een eigen huis" (`oefeningen/16_polymorfisme/A_Practica.md:105`) combineert
  compositie en overerving. Komt deel 3 van UML naar code (huis met kamers) erbij, dan kan H16
  daarop verderbouwen in plaats van opnieuw te beginnen.
- **Afbeeldingen**:
  - In `content/assets/6_klassen/multipplecompuml.png` staat de "1" bij de lijn naar Processor
    over het woord "Computer" (regel 4 van de afbeelding-skill: tekst overlapt nooit).
  - `compuml.png` en `multipplecompuml.png` bestaan in `content/assets/6_klassen/` én in
    `oefeningen/assets/6_klassen/`, met een totaal andere inhoud (Huis tegenover Person, Computer
    tegenover Car/Boat). Verwarrend bij het hertekenen.
- **Typfouten in de leerstof**: "associateis" (`content/14_compositie/0_compositie_intro.MD:79`),
  "de de schrijf" in plaats van "de schijf" (`:124`).
- **Textbased RPG-pagina** (buiten deze review, `EindeTests`):
  - Typfouten "Koffieruime" (`2_OOTextGame.md:391`) en "locati" (`:404`).
  - `VerwerkActie` staat er zonder methodehoofding (`:268-288`).
  - `public List<...> { get; set; }` overal (`:72-73`, `:110`), terwijl H15 net uitlegt waarom
    dat af te raden is.
