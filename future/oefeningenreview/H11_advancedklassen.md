# H11: Gevorderde klasseconcepten

> **Beslist door Tim (2026-09-11), zie README:** Sport simulator wordt geschrapt. Het punt over `Random`
> in sectie 6 is afgehandeld (leerstof en coach-data aangepast). Pas `A_practica3.md:4` aan zodra
> Meetlat naar H9 verhuisd is. De unittest-repo's blijven voorlopig zoals ze zijn.

Bronnen: `oefeningen/11_advancedklassen/A_practica3.md` (volledig, met `pokemonbattle.gif`),
`oefeningen/_coach/11_advancedklassen.md`, `content/10_advancedklassen/` (alle bestanden uit
`_quarto.yml`), `content/B_appendix/boete.md`, `oefeningen/10_meminoop/A_poke1.md`, de Sports-oefening
in `oefeningen/9_klassen/B_practica.md`, het begin van `oefeningen/12_arraysvanklassen/A_practicaMem.md`,
en de unittests van de kluis (`github.com/timdams/ZIESCHERPER_TESTS_H3_DigitaleKluis`).

Een lijnnummer zonder pad (`:297`) slaat op `oefeningen/11_advancedklassen/A_practica3.md`.

## 1. Fouten die sowieso weg moeten

- **Pokémon deel 2: de tip over private setters is fout, en daardoor compileert het voorbeeld niet.**
  De tip (`:300-302`) zegt dat base-stats met een `private set` nog "via constructor of initializer"
  in te stellen zijn. Dat klopt niet. Het voorbeeld van manier 3, `new Pokemon() { HP_Base = 40, Naam = "Pikachu" }`
  (`:297`), geeft dan CS0272: *"The property or indexer 'Pokemon.HP_Base' cannot be used in this
  context because the set accessor is inaccessible"* (geverifieerd met dotnet). De leerstof zegt het
  zelf, "een veelgestelde vraag" (`content/10_advancedklassen/2_objectinitsyntax.md:12`), en de
  coach-data ook (`oefeningen/_coach/11_advancedklassen.md:133`). Voorstel: manier 3 toont enkel
  `Naam`, `Nummer` en `Type` (die hebben een public set), en de tip wordt een les: "private set: wel
  in de constructor, niet in de initializer. Probeer het en lees de fout."
- **Pokémon deel 2: de oplossing compileert niet en volgt de opgave niet.**
  - `temp.HP_base` en `temp.Attack_base` (`:459-460`): CS1061, de property heet `HP_Base` (geverifieerd).
  - `NoLevelingAllowed` krijgt een `private set` (`:444`), terwijl de opgave een public set vraagt
    (`:314`). Niemand kan de vlag dus op `true` zetten en de exception wordt nooit opgeworpen.
    `Pokemon.NoLevelingAllowed = true;` in Main geeft CS0272 (geverifieerd).
  - De opgave noemt de tellers `TellerLevel`, `TellerBattles`, `TellerGelijkspel` en `TellerGeneraties`
    (`:310-313`), de oplossing `TimesLeveled`, `TimesBattled`, `TimesBattleDraw` en `TimesRandomGenerated`
    (`:440-443`). Ook de boodschap van de exception verschilt ("Leveling not allowed" op `:324`
    tegenover de lange Engelse zin op `:407`).
  - De default constructor schrijft zes toekenningen uit (`:418-427`) terwijl de overloaded constructor
    net daaronder staat. `public Pokemon() : this(10, 10, 10, 10, 10, 10) { }` is precies wat het
    hoofdstuk leert, en de coach-data noemt het als valkuil (`oefeningen/_coach/11_advancedklassen.md:129`).
  - `GeneratorPokemon` maakt een Pokémon met de default constructor en overschrijft daarna twee stats
    (`:458-460`). Laat hem de nieuwe overloaded constructor gebruiken met zes keer `ran.Next(...)`.
- **Natures (PRO): de oplossing is onbruikbaar.** Ik heb ze stap voor stap gecompileerd; na elke
  herstelde fout kwam de volgende (geverifieerd met dotnet): `;` ontbreekt (`:503`), haakjes niet in
  evenwicht (`:530`), een `private` property met een `private set` (CS0273, `:498`), het enum heet
  `StatTypes` (`:489`) maar wordt gebruikt als `StatType` (`:507`, CS0246), `PokeNatures.BashFull`
  bestaat niet (`:519`, CS0117) en de lege laatste case valt door (CS8070). Ook inhoudelijk loopt het mis:
  - `rng.Next(0,26)` (`:503`) kan 25 geven. Er zijn 25 natures (0 tot 24), dus dat is geen geldige waarde.
  - `NatureEffect` geeft `10` of `-10` terug en de Full-stat wordt daarmee vermenigvuldigd en opgeteld
    (`:530`): dat is 11 keer de stat of een negatieve stat. De opgave vraagt de factor 1.10 of 0.90 (`:354-356`).
  - De nature wordt enkel in de overloaded constructor gezet (`:500-504`). Een Pokémon via `new Pokemon()`
    is dus altijd Adamant, de eerste waarde van het enum.
  - Geen enkele naam komt overeen met de opgave: `PokeNatures` tegenover `Nature`, `NatureEffect`
    tegenover `BerekenNatureModifier`, `int` tegenover `double`.

  Voorstel: een nieuwe oplossing met één `private double BerekenNatureModifier(StatType stat)` en de
  willekeurige nature in de hoofdconstructor, zodat de default constructor ze via `this(...)` meekrijgt.
- **Digitale kluis: tabel, oplossing en unittests spreken elkaar tegen.** De tabel (`:166-171`) zegt:
  eerst op -666 controleren, en het aantal pogingen enkel verhogen bij een foute code. De oplossing
  (`:232-234`) controleert eerst de blokkering en verhoogt bij elke poging, ook bij -666 en bij de
  juiste code. De gelinkte unittests (`DigitaleKluis.Tests/UnitTest1.cs`, `TryCodeCheck`) volgen de
  oplossing: na -666 en een foute code moet de juiste code "3" tonen. Wie de tabel volgt, toont
  "Aantal pogingen = 1" en faalt de test. Voorstel: de tabel aanpassen aan de tests (elke poging telt,
  eerst de blokkering controleren) en de teksten gelijkzetten. Nu staat in de tabel "Geldige code.
  Aantal pogingen = ..." / "Geen geldige code." / "Je hebt je 10 pogingen opgebruikt." en in de oplossing
  "Deze code is geldig. Aantalpogingen = 3" / "Dat is geen geldige code" / "Je hebt je 10 pogingen
  opgebruikt.Sorry." (geverifieerd). De tests zoeken enkel op "cheater", "geen geldige code", "geldig"
  en "pogingen opgebruikt", dus de tabelteksten mogen blijven.
- **Digitale kluis: BruteForce compileert niet.** `r.Next` terwijl de variabele `rng` heet (`:267`,
  CS0103), en na de `while` ontbreekt een `;` (`:273`, CS1002) (geverifieerd). Verder maakt de methode
  telkens een nieuwe `Random` (`:261`) terwijl het hoofdstuk net één static `Random` aanleert, toont ze
  "Gevonden! Code is ..." (`:271`) in plaats van "Gekraakt!" (`:185`), en de test in Main die de opgave
  vraagt (`:187`) staat niet in de oplossing.
- **Project: GreenRide heeft geen oplossing** (`:762-764` is leeg), terwijl het de Final Essential is.
  De opgave spreekt zichzelf ook tegen: "alle drie transformeren, en hebben dus geen set" (`:704`) is
  onleesbaar, en Main zet net `DeelStep.PrijsPerMinuut = 0.50;` (`:749`). Voorstel: `PrijsPerMinuut`
  krijgt een public set, `TotaalWinst`, `AantalInGebruik`, `ID` en `BatterijNiveau` een `private set`.
  Ik schreef een referentie-oplossing (met `DeelStep() : this(100)` en step 3 op 5%). Die geeft voor het
  scenario van de opgave (geverifieerd met dotnet, komma's door de Belgische landinstelling):

  ```text
  Step 1 vertrekt met 100% batterij.
  Step 2 vertrekt met 100% batterij.
  Step 3 kan niet vertrekken: batterij te laag (5%).
  Steps in gebruik: 2
  Step 1 terug. Ritprijs: €10,00. Resterende batterij: 80%
  Step 2 terug. Ritprijs: €5,00. Resterende batterij: 90%
  Totale winst: €15,00
  Batterij step 1: 80%
  ```
- **Sport simulator: opgave en oplossing gaan over iets anders.** De opgave vraagt de methoden in
  Program.cs (`:542`) voor een `Sportspeler` of `Voetballer` met `SchietOpDoel` en `MaakOvertreding`
  (`:548`). De oplossing is een `Waterpolospeler` met de static methoden ín de klasse (`:647-683`).
  `SimuleerWedstrijd` roept geen actie van de winnaar op (`:556`), en de speler wordt ingesteld met een
  methode `Stelin` (`:616`), in een hoofdstuk over constructors. Een klasse `Sportspeler` bestaat
  nergens in H9: `oefeningen/9_klassen/B_practica.md:247-275` kent enkel `Voetballer`. "hofdstuk 9,
  week 3" (`:542`) heeft een typfout, en een weeknummer zegt niets buiten AP.
- **Persoonsregistratie (GPT): de oplossing volgt de opgave niet.** De opgave vraagt een
  `ArgumentException` met "Voornaam en achternaam mogen niet hetzelfde zijn" (`:75`). De oplossing werpt
  `new Exception("... mag niet ...")` op (`:97`). `ToonInformatie` is `internal` (`:108`), dat komt
  nergens anders in het boek voor. Stap 4 vraagt te testen dat een foute naam niet crasht (`:87`), maar
  de oplossing test enkel een geldige persoon (`:117-128`).
- **Meetlat constructor:** de oplossing laat `LengteInM` vallen, die in H10 wel bestond
  (`oefeningen/10_meminoop/A_poke1.md:29`), en noemt de variabele `lengteInM` (`:33`) waar de opgave
  `lengteInMeter` zegt (`:9`). Stap 4 (`:11`) klopt niet: in H10 lazen de properties al de private
  variabele, want een write-only property kan je niet uitlezen. Er valt dus niets aan te passen.
- "**Velden:**" in de kluis (`:144`) wordt "**Instantievariabelen:**".

## 2. Wat sterker kan

- **`this(...)` wordt nergens geoefend.** Geen opgave vraagt het en geen oplossing gebruikt het, terwijl
  het in "de kern op een rij" staat (`content/10_advancedklassen/zieverder.md:11`). Het past vanzelf op
  drie plekken: de default constructor van Pokémon, de willekeurige nature in één hoofdconstructor, en
  `DeelStep() : this(100)` in GreenRide. Vraag het daar expliciet, en voeg een kleine oefening toe die er
  helemaal om draait (zie 4).
- **Persoonsregistratie: de validatie is lek, en dat is de beste les die in de oefening zit.** Voornaam en
  Achternaam hebben een public set (`:103-104`). `new Persoon("Jan", "Janssens") { Achternaam = "Jan" }`
  gaat dus gewoon door en toont "Jan Jan geboren in 0 heeft emailadres: " (geverifieerd). Voorstel:
  - **Deel 2:** de student probeert dat zelf en lost het op met `private set`. Daarna werkt de initializer
    niet meer voor die twee properties (dezelfde les als bij Pokémon).
  - **Deel 3:** `Geboortejaar` wordt een full property met een controle in de set (bv. niet in de
    toekomst). Dan ziet hij dat de initializer ná de constructor loopt, en dat een controle op die
    waarde dus in de set hoort, zoals `content/10_advancedklassen/2_overloadedconstructor.md:98-139`
    aanraadt. Optioneel: `Email` wordt `required`. Dan wordt `required` ook eens gebruikt, en de
    CS8618-waarschuwing die de student nu al op `Email` krijgt, stelt dat woord zelf voor (zie 6).
  - "Voornaam gelijk aan achternaam" is een verzonnen regel. Een lege naam (`""`) weigeren is logischer.
  - Een voorbeelduitvoer: "Tim Dams geboren in 1981 heeft emailadres: tim.dams@ap.be" en daaronder de
    foutboodschap. "ingeeft" (`:87`) doet aan `ReadLine` denken: zeg dat vaste waarden in Main volstaan.
  - Een zin dat object initializer syntax ook werkt achter een constructor met parameters. De leerstof
    beweert het omgekeerde (zie 6).
- **Twee Essentials hangen aan een oefening die de student misschien niet maakte.** Meetlat constructor
  (Essential) bouwt op de Meetlat van H10, die geen Essential is (`oefeningen/10_meminoop/A_poke1.md:8`).
  Pokémon deel 2 veronderstelt de volledige Pokémon van H10 in drie delen. Voorstel: zet de Meetlat van
  H10 (twaalf regels) in de opgave. Voor Pokémon een link naar de H10-oplossing, zodra die compileert.
- **Pokémon: waarom GeneratorPokemon verhuist, staat nergens.** Met private setters compileert de
  generator uit H10 in Program.cs niet meer (CS0272), in de klasse zelf wel. Laat de opgave de student
  die fout eerst zien en maak het verhuizen daar het antwoord op.
- **Natures: de opgave laat gaten.** `StatType` wordt gebruikt (`:352`) maar nergens beschreven: zeg
  welke waarden erin horen (geen HP, want een nature raakt HP niet). De vijf neutrale natures (Bashful,
  Docile, Hardy, Quirky, Serious op `:363`, `:368`, `:370`, `:381`, `:385`) staan in beide kolommen met
  dezelfde stat. Zeg dat de factor dan 1.0 is, want een eenvoudige `if` op "verhoogt" geeft 1.10. In
  "-10 op een andere" (`:340`) en in de kolomkop "Verlaagt met 10" (`:360`) ontbreekt het %-teken.
- **Digitale kluis: de student ziet nooit "Gekraakt!".** De opgave zegt niet hoeveel cijfers de code heeft;
  zeg 0 tot 9999 (dat past bij `CodeLevel`). Tien gokken op tienduizend codes lukt één keer op de
  duizend, dus de student denkt dat zijn code fout is. Maak dat de les ("Waarom lukt het nooit? Daarom
  zijn er maar 10 pogingen.") en laat hem testen met code 5 en `Next(0, 10)`. Een vervolgvraag voor wie
  verder wil: `CanShowCode` heeft een public set, dus BruteForce kan gewoon `kluis.CanShowCode = true`
  zetten. En omdat BruteForce in de klasse staat, mag hij zelfs `kluis.code` lezen: private geldt per
  klasse, niet per object. `0x0000` (`:195`) is ruis, `0` of niets volstaat.
- **`##`-koppen binnen oefeningen** (kluis `:135`, `:173`; Pokémon `:282`, `:304`, `:338`) vullen de
  inhoudsopgave, en de `(PRO)` achter een `##` wordt geen label. Zoals in de README (deel B): `**Deel 1.**`
  met per deel een eigen Oplossing-callout. Nu zit alles in één callout, en wie deel 1 wil nakijken,
  ziet meteen de oplossing van deel 2.
- **Geen enkele "Les(sen) uit deze oefening" en amper voorbeelduitvoer** op de pagina. Kandidaten
  voor een Les: Persoon (lekke validatie), Pokémon (private set tegenover de initializer), Kluis (tien
  pogingen tegenover brute force), GreenRide (static of niet). Voorbeelduitvoer bij Meetlat (`500`),
  Persoon, Kluis en GreenRide.
- **GreenRide:**
  - Geef de platte batterij van step 3 een getal (bv. 5), dan klopt "zou moeten falen" vanzelf.
  - `BatterijNiveau` (0-100) krijgt nergens een controle. Vraag een full property met controle in de set.
  - De Extra (Pro) (`:759-760`) vraagt een lijst van alle objecten: dat is H12. Vervang ze door iets wat
    nu al kan, bv. een static methode `Spitsuur(bool)` die de prijs verdubbelt en terugzet, of een static
    `ToonDashboard()`.
  - De tekst leest als een vertaalde pitch: "The Company Level", "Instance Data", "Core-Backend",
    "De heilige graal", "Wederom" (`:693-707`). Liever gewoon Nederlands: "Gegevens van
    het bedrijf (static)" en "Gegevens van één step".

## 3. Wat weg kan (of verhuist)

- **Sport simulator:** oefent niets uit H11. Methoden in Program.cs die een object krijgen en teruggeven,
  zijn leerstof van H10, en daar staat met Bankmanager 2 (`oefeningen/10_meminoop/A_poke1.md:480-500`)
  al een oefening met net dat patroon. Schrappen, of omvormen tot een H11-oefening: `Voetballer` krijgt
  een constructor in plaats van `StelIn`, een static teller `AantalSpelers` en één static `Random` in
  de klasse.
- **GreenRide Extra (Pro):** verhuist als uitbreiding naar H12, waar lijsten van objecten gezien zijn.

## 4. Gaten: kansen voor nieuwe oefeningen

Niet geoefend: `this(...)`, de volgorde constructor dan initializer, een `static class`, `required`,
`Debug.WriteLine`, en de compilerfouten die de zieverder als valkuil noemt. Er staat geen enkele
oefening in waarin de student code leest.

1. **Koffiebar** (Essential): `Koffie(string soort, string grootte, bool haverMelk)` als hoofdconstructor,
   `Koffie(string soort) : this(soort, "medium", false)` en `Koffie() : this("espresso")`. Een read-only
   `Prijs` die berekend wordt, en een auto-property `Suikerklontjes` die je via de initializer meegeeft.
   Main bestelt vier koffies op vier manieren. Traint overloaded constructors, `this(...)` en een
   initializer achter een constructor met parameters.
2. **Voorspel de uitvoer** (Essential): een klasse `Lamp` met drie geketende constructors met elk een
   `WriteLine`, en een property met een `WriteLine` in de set. De student voorspelt op papier wat
   `new Lamp(true)`, `new Lamp()` en `new Lamp("rood") { Aan = true }` tonen, en voert daarna uit. Traint
   de volgorde uit `content/10_advancedklassen/2_overloadedconstructor.md:220-225` (eerst de aangeroepen
   constructor, dan de eigen body) en dat de initializer pas na de constructor loopt
   (`content/10_advancedklassen/2_objectinitsyntax.md:48`).
3. **Ticketautomaat** (Essential): een klein static-opstapje vóór de kluis en Pokémon. `Ticket` met
   `private static int volgendNummer = 1`, een `Nummer` (private set) dat in de constructor wordt toegekend,
   een static property `AantalUitgedeeld` en een static methode `NieuweDag()` die de teller terugzet. In
   de constructor een `Debug.WriteLine`. Slotvraag: wat gebeurt er als je `static` weglaat? (dezelfde
   gedachte als de Fiets-opgave in de zieverder, nu in C#).
4. **Stevens constructors** (Essential): Steven levert vier stukjes A.I.-code in. Per stuk zegt de
   student: compileert het, en zo niet, welke fout; zo ja, wat loopt er mis.
   (a) `public void Meetlat(double lengte)`, waardoor `new Meetlat(5)` niet compileert;
   (b) een overloaded constructor geschreven, maar Main doet nog `new Student()`;
   (c) de parameter heet zoals de instantievariabele: `lengteInMeter = lengteInMeter;` compileert met
   enkel een waarschuwing (CS1717, *"Assignment made to same variable"*) en de lengte blijft 0
   (geverifieerd met dotnet);
   (d) een static methode die een instantievariabele gebruikt.
   (c) is de gemeenste, want er verschijnt geen rode lijn. Code lezen, en de valkuilen uit
   `content/10_advancedklassen/zieverder.md:14-19`.
5. **Omrekenbib** (geen Essential): een eigen `static class` met static methoden (`CelsiusNaarFahrenheit`,
   `KmNaarMijl`) en een static property `AantalOmrekeningen`. Probeer daarna `new Omrekenbib()` en lees de
   fout. Een static class wordt nu nergens geoefend. Kan de plaats van Sport simulator innemen.

## 5. Voorgestelde volgorde

Meetlat constructor → Koffiebar → Persoonsregistratie → Voorspel de uitvoer → Ticketautomaat →
Stevens constructors → Digitale kluis → Omrekenbib → Pokémon deel 2 (Natures als apart PRO-deel) →
Project: GreenRide

Sport simulator verdwijnt (of verhuist naar H10).

## 6. Nevenvondsten

- **De leerstof zegt dat een object initializer enkel met de default constructor werkt**
  (`content/10_advancedklassen/2_objectinitsyntax.md:34` en `:67`), en de Pokémon-opgave herhaalt dat
  (`:298`). Persoonsregistratie doet net `new Persoon("Tim", "Dams") { ... }`, en dat werkt (geverifieerd).
  De coach-data heeft het juist (`oefeningen/_coach/11_advancedklassen.md:43`).
- **Breuk in de leerstof** (`content/10_advancedklassen/2_overloadedconstructor.md:243-247`):
  `(double)Teller/Noemer` met noemer 0 geeft `NaN`, geen `DivideByZeroException`. En
  `int resultaat = eenBreuk.BerekenBreuk();` compileert niet: CS0266, van `double` naar `int` (beide
  geverifieerd).
- **Random** (`content/10_advancedklassen/5_static.md:425` en `:442-452`): de tekst zegt dat Random-objecten
  die snel na elkaar gemaakt worden, dezelfde getallen geven. Op .NET Core en later klopt dat niet meer.
  Het Dobbelsteen-voorbeeld uit de tekst gaf op .NET 10 gewoon verschillende worpen, en 1000 paren
  `new Random()` gaven geen enkele keer hetzelfde eerste getal (geverifieerd). Eén static `Random` blijft
  een goede gewoonte, maar de reden in de tekst geldt enkel voor het oude .NET Framework. Hetzelfde in de
  coach-data: "waardoor je tien keer hetzelfde getal probeert" (`oefeningen/_coach/11_advancedklassen.md:114`).
- `content/10_advancedklassen/2_overloadedconstructor.md:358`: `Y = rng.Next(0, Console.WindowWidth);`
  moet `WindowHeight` zijn.
- **Coach-data:** "static instantievariabelen" (`oefeningen/_coach/11_advancedklassen.md:45`) botst met
  `content/10_advancedklassen/5_static.md:11` ("dan spreken we niet meer over een instantievariabele
  maar over een static field"). De valkuil bij de kluis over het aantal pogingen
  (`oefeningen/_coach/11_advancedklassen.md:111`) volgt de tabel, en die gaat in tegen de tests (zie 1).
  "De property geeft daar toch -666 terug" (`oefeningen/_coach/11_advancedklassen.md:112`) klopt, maar een static methode in dezelfde klasse kan het private `code` gewoon lezen.
- **H10:** `oefeningen/10_meminoop/A_poke1.md:381` (`Total / 6.;`) compileert niet: `6.` is geen geldige
  literal in C# (CS1001, geverifieerd). `:444-445` heeft dezelfde `HP_base`-fout als H11. De Battle-opgave
  vraagt een exception bij `null` (`:298`), de oplossing geeft 1 of 2 terug (`:462-467`). H11 neemt die
  oplossing over en telt de battle al vóór de null-controle (`:465`).
- **H9:** de Sports-oefening heeft een lege oplossing (`oefeningen/9_klassen/B_practica.md:273-275`).
- **Nullable-waarschuwing:** met het standaardsjabloon krijgt de Persoon-oplossing CS8618 op `Email`,
  met de raad *"Consider adding the 'required' modifier or declaring the property as nullable"*
  (geverifieerd). Nullables mag de student nog niet gebruiken. Eén zin die zegt dat die waarschuwing mag
  blijven staan, of ze net gebruiken als brug naar `required` (zie 2).
- `content/10_advancedklassen/kennisclips.md:14` linkt nog naar de oude gitbook-oefeningen.
