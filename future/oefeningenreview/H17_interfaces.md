# H17: Interfaces

> **Beslist door Tim (2026-09-11), zie README:** Mapmaker afwerken verdwijnt uit H17.

Bronnen: `oefeningen/17_interfaces/A_practica.md`, `oefeningen/_coach/17_interfaces.md`,
`content/16_interfaces/1_Interface_intro.MD`, `content/16_interfaces/presidentinterfaces.md`,
`content/16_interfaces/2_InterfacesInPraktijk.md`, `content/18_IsAs/2_Polymorfisme_Interfaces.md`,
`content/16_interfaces/zieverder.md`, `content/B_appendix/boete.md`, `oefeningen/opmaak.html`,
de afbeeldingen `oefeningen/assets/9_interfaces/practgame*.png`, de gelinkte pagina's
`oefeningen/9_klassen/A_practica.md` (Figuren) en `oefeningen/EindeTests/A_DEEL2_AllInOne/1_MapMapker.md`,
vluchtig `oefeningen/16_polymorfisme/A_Practica.md` en het begin van `oefeningen/18_bestandsverwerken/A_practica.md`.

Het hoofdstuk telt 7 oefeningen. Maar 2 ervan hebben een oplossing (Figures en Carbon Footprint).
Geen enkele oplossing gebruikt LINQ.

## 1. Fouten die sowieso weg moeten

- **Twee Essentials zonder oplossing, waaronder de Final Essentials.** Pokémon interfaces
  (`oefeningen/17_interfaces/A_practica.md:192`) en Hacker Simulator (`:339`) hebben een lege
  Oplossing-callout, net als PokéDex (`:200`), Mapmaker (`:209`) en Game (`:286`). Een lege callout
  geeft een knop "Oplossing" die op niets uitkomt. Voorstel: oplossingen schrijven voor Pokémon
  interfaces en Hacker Simulator; bij Mapmaker en Game de lege callout weghalen zolang er geen
  oplossing is (zie ook sectie 3).

- **Carbon Footprint: de oplossing doet niet wat de opgave vraagt** (geverifieerd met dotnet).
  - "Van alle objecten de footprint kan verlaagd worden" (`:66`): `VerlaagFootprint` wordt in Main
    nergens opgeroepen.
  - `{vervuilers[i].GetType()}` (`:97`) en `{vervuilers[maxindex]}` (`:108`) tonen de naamruimte
    mee: de uitvoer is `Carbon.Huis:2000` en `Carbon.Fabriek op positie 6 heeft grootste footprint 2500`.
    `GetType().Name` geeft `Huis`.
  - `som/vervuilers.Count` (`:106`) is een gehele deling: 6530 / 8 geeft 816 in plaats van 816,25.
  - In `Auto` staat na elke `return` nog een `break` (`:155-161`): drie keer
    `warning CS0162: Unreachable code detected`. Dat is redundante code (boete). De `default: break;`
    plus `return 0;` kan ook korter.
  - De opgave noemt de methode `BerekenFootprint` (`:48`), de oplossing `BerekenFootPrint`
    (`:96`, `:117`). Wie de opgave letterlijk volgt en daarna het Main-stuk van de oplossing
    overneemt, krijgt een compileerfout.
  - Taal: "Breidt" (`:51`) wordt "Breid", "hoogte footprint" (`:65`) wordt "hoogste",
    "berekend" (`:64`) wordt "berekent". "Gebaseerd op het merk" (`:55`) zegt niet hoe. "De klasse
    plant moet je niet aanpassen" (`:59`) is onduidelijk: bedoeld is "Plant krijgt de interface niet".
  - Voorstel: Main aanvullen met een lus die verlaagt en daarna opnieuw toont, `GetType().Name`,
    een `double` voor het gemiddelde, `Auto` zonder `break`, en voorbeelduitvoer bij de opgave.

- **Figures with interfaces: de link werkt niet.** `../8_klassen/A_practica.md#figures` (`:2`)
  verwijst naar een map die niet bestaat (`oefeningen/8_klassen/`) en een anker dat nergens staat.
  De oefening Figuren staat in `oefeningen/9_klassen/A_practica.md:362`, met het automatische anker
  `#figuren`. Verder zegt de Les "de Array.Sort methode" (`:9`) terwijl de opgave `List.Sort`
  vraagt, staat er "een 10 rechthoek-objecten plaatsen" (`:2`), en toont de oplossing enkel
  `CompareTo`: geen lijst, geen Main, geen uitvoer. De sortering zelf klopt (geverifieerd met dotnet:
  oppervlaktes 3 tot 30 netjes oplopend).

- **Mapmaker afwerken: dode link.** `../A_DEEL2_AllInOne/1_MapMapker.md` (`:207`) moet
  `../EindeTests/A_DEEL2_AllInOne/1_MapMapker.md` zijn. Dezelfde fout staat in
  `oefeningen/16_polymorfisme/A_Practica.md:642`.

- **PokéDex IList (PRO): titel, opgave en belofte kloppen niet met elkaar.** De titel zegt `IList`,
  de tekst `IEnumerable` (`:198`), en "hierdoor kan je je PokéDex klasse gebruiken als een `List`"
  is fout: `IEnumerable` geeft je enkel `foreach`, geen `Add`, geen `[index]` en geen `Count`. De
  link wijst naar de documentatie van .NET Core 3.1, met een voorbeeld dat een eigen
  enumerator-klasse bouwt met `MoveNext`, `Reset` en `Current`. Dat is voor deze student veel te
  ver. Voorstel in sectie 2.

- **Game: de regels spreken elkaar tegen.** Eerst schiet elk monster als er iets links van hem
  staat (`:230-231`), meteen daarna "Enkel RockDestroyer monsters kunnen schieten" (`:233`).
  In de beurt beweegt eerst "ieder monster" (`:245`) en daarna "iedere RockDestroyer" (`:246`),
  maar een RockDestroyer is een Monster: beweegt hij dan twee keer? De opsomming op `:221-226` is
  stuk (tabs): "Een rots" valt uit het lijstje van mapelementen en "Een speler kan niet door rotsen"
  staat op hetzelfde niveau. "Zie onderaan pagina" (`:216`) klopt niet meer nu elke oefening
  ingeklapt staat: het schema staat onderaan deze opgave. Typfouten: "vernietigd" (`:228`, `:231`)
  wordt "vernietigt", "beslissen at" en "als jet ware" (`:252`).

- **Hacker Simulator: de opgave spreekt zichzelf tegen** (geverifieerd met dotnet).
  - `ShowData` toont de data "indien gehackt", anders "ACCESS DENIED" (`:300`). Maar enkel
    `SocialMediaAccount` houdt bij of hij gehackt is (`:316`). Bank en koelkast moeten dat dus ook,
    zonder dat de opgave het zegt.
  - Met de gegeven wachtwoorden (`:329`) valt elk doelwit. Een bank, twee accounts en een koelkast
    geven vier keer `SYSTEM BREACHED`; "Failed to crack system." verschijnt nooit. Ook "eenmaal
    gehackt blijft `TryHack` true" (`:316`) zie je nergens, want de tool probeert elk doelwit maar één keer.
  - De opgave zegt niet dat de tool stopt zodra een wachtwoord lukt; de coach-data rekent het wel als
    valkuil aan (`oefeningen/_coach/17_interfaces.md:183`). Zonder `break` (boete) wordt dat een
    `while` met een `bool`. Zet dat in de opgave.
  - "Als `TryHack` landt" (`:330`) wordt "lukt".
  - Voorstel: `SocialMediaAccount` krijgt zijn wachtwoord via de constructor. Een account met
    "123456" valt, een account met "Zomer2024!" niet. Zo krijgen "een paar accounts" (`:337`) zin en
    verschijnt ook de mislukte poging.

- **De Les zit in de oplossing verstopt en wordt geen knop.** Bij Figures (`:8-10`) en Carbon
  Footprint (`:69-71`) staat de Les als `:::{.callout-tip}` met vetgedrukte tekst ín de
  Oplossing-callout. `oefeningen/opmaak.html:74-79` herkent enkel een callout met de titel
  "Les(sen) uit deze oefening", dus de les verschijnt in het oplossingspaneel en achter het slot.
  Voorstel: aparte callouts `title="Les(sen) uit deze oefening"` na de Oplossing, zoals in H1.

- **`##`-koppen in Hacker Simulator** (`:295`, `:302`, `:324`, `:336`) vullen de inhoudsopgave.
  Maak er vetgedrukte inleidingen van (`**Stap 1: de interface.**`).

## 2. Wat sterker kan

- **Abstracte klasse of interface: de leerstof legt het uit, geen enkele oefening vraagt het.** De
  tabel in `content/16_interfaces/1_Interface_intro.MD:77-89` en de Steven-opdracht erna zijn de
  kern van het hoofdstuk. In de oefeningen komt de keuze enkel voor in de coach-data
  (`oefeningen/_coach/17_interfaces.md:110`, `:172`, `:180`), nooit in een opgave. Voorstel, naast
  de nieuwe oefening in sectie 4:
  - Hacker Simulator: een slotvraag "Waarom is `IHackable` een interface en geen abstracte klasse
    `Hackable`?". Het antwoord staat in de Les: bank, account en koelkast hebben geen code en geen
    instantievariabelen gemeen, enkel een contract.
  - Game: onder het klasseschema de vraag "Welke van de twee interfaces had ook een abstracte klasse
    tussen `MapElement` en `Monster`/`Player` kunnen zijn, en welke kan enkel een interface zijn?".
    `IMoveable` kan een klasse `MoveableElement` worden, `IDestroyer` niet: `RockDestroyer` erft al
    van `Monster`, en `Monster` mag niet kunnen schieten.
  - Pokémon interfaces: de vraag "Waarom kan `IShadow` geen abstracte klasse `Shadow` zijn?" in de
    opgave zetten. Nu staat dat enkel als valkuil bij de coach.

- **Pokémon interfaces: concreter maken, en het model laten kloppen.**
  - Er bestaan nog geen child-klassen van `Pokemon` in de oefeningen (de klasse komt uit
    `oefeningen/11_advancedklassen/A_practica3.md:396`). Zeg in de opgave dat de student eerst
    klassen als `ShadowLugia : Pokemon, IShadow` maakt, en link naar de Pokémon-klasse.
  - Na `Purify()` is het object nog altijd `is IShadow`. "Toon enkel de Shadow Pokémon" toont dus ook
    de gezuiverde. Voorstel: `IShadow` krijgt ook een property `bool IsGezuiverd { get; }`. Zo staat er
    ook eens een property in een eigen interface, en blijft `is` de filter.
  - "Door hun HP op -1 te zetten" (`:189`) is een vreemd voorbeeld. Geef liever twee concrete
    manieren die per klasse verschillen (bv. `ShadowPikachu` is meteen gezuiverd, `ShadowLugia` pas na
    drie keer `Purify`). Daar dient een interface net voor: dezelfde methode, andere code.
  - De opgave vraagt enkel om te tonen (`:190`), de coach-data om `Purify` op te roepen (`:105`).
    Maak er drie stappen van: toon de Shadow Pokémon, zuiver ze allemaal, toon opnieuw.

- **Figures: van "Sort werkt" naar begrijpen waarom.**
  - Stap 0: roep eerst `Sort()` op zonder interface en lees de fout:
    `InvalidOperationException: Failed to compare two elements in the array.` (geverifieerd met
    dotnet). Dat is exact het probleem waarmee `content/16_interfaces/2_InterfacesInPraktijk.md:48` start.
  - Deel 2: bij gelijke oppervlakte op `Lengte` sorteren (zoals `Land` op inwoners), en daarna van
    groot naar klein door het teken om te draaien. Zo wordt de tabel negatief/nul/positief echt
    geoefend.
  - Maak de oefening *Essential*: `IComparable` is de enige .NET-interface die de leerstof uitwerkt.
  - Nederlandse titel ("Figuren sorteren") en voorbeelduitvoer.

- **PokéDex (PRO) herschrijven tot "PokéDex met foreach (PRO)".** Geef een Main die moet werken:
  `foreach (Pokemon p in dex)`. Tip in de opgave: `IEnumerable` uit `System.Collections` heeft één
  methode, `GetEnumerator`, en je private `List<Pokemon>` heeft die al. Dan is de oplossing één lijn
  `return pokemons.GetEnumerator();` (geverifieerd met dotnet). Het parallel met `IComparable` is
  mooi: `Sort` werkt tegen een interface, `foreach` ook. Tweede leerpunt: met `foreach (var p in dex)`
  is `p` een `object` en geeft `p.Naam` de fout `CS1061: 'object' does not contain a definition for
  ...` (geverifieerd). `IList` laat je vallen: die vraagt een vijftiental leden. De coach-data
  (`:119-129`) past er al bij.

- **Carbon Footprint: de Les kan scherper.** `List<object>` is hier de enige mogelijkheid, omdat de
  vier klassen niets gemeen hebben behalve `object`. Dat is net de reden voor een interface, en de Les
  mag dat zeggen. Toon als alternatief ook pattern matching (`is ICarbonFootPrint vervuiler`), zoals in
  `content/18_IsAs/2_Polymorfisme_Interfaces.md:128-146`. De hint "de factor 10 met 1 verlagen"
  (`:57`) volgt de oplossing niet: `Huis` gebruikt een `double` die per 0,1 zakt. Volg de hint, met
  een `int`.

- **Game: in delen, met voorbeelduitvoer.** Het is de grootste opgave van het hoofdstuk, zonder
  oplossing en zonder tussenstappen. De coach-data zegt al "eerst een kaart die getekend wordt, dan een
  speler die beweegt, dan pas de monsters" (`:166`): maak daar **Deel 1**, **Deel 2**, **Deel 3** van.
  De screenshot `practgame3.png` vraagt "Tim, wat wil je doen? (U=up, D=Down, ...)": de opgave vraagt
  geen naam. Vermeld de toetsen in de opgave.

## 3. Wat weg kan (of verhuist)

- **Mapmaker afwerken** uit H17 halen. Het project zegt zelf dat de interface er "louter
  illustratief" is en dat een abstracte klasse `CompositeElement` beter werkt
  (`oefeningen/EindeTests/A_DEEL2_AllInOne/1_MapMapker.md:406`). Een H17-oefening die een interface
  gebruikt waar de tekst een klasse aanraadt, maakt de keuze abstracte klasse of interface net
  vager. Het project staat al in de sidebar onder EindeTests. Wil je het houden: maak er een leesvraag
  van ("Tim schrijft dat een klasse hier beter is. Leg uit waarom.").
- **Game** naar achter, na de Final Essentials, als project. Nu staat een groot spel zonder oplossing
  tussen de kleinere oefeningen en de Final Essentials in. Label (PRO) of verhuizen naar
  `EindeTests/A_DEEL2_AllInOne/` kan ook.

## 4. Gaten: kansen voor nieuwe oefeningen

1. **Stevens superhelden** (*Essential*, code lezen). Steven levert een interface `ISuperHeld` en
   drie klassen in. Vier fouten, elk met een echte compilermelding (geverifieerd met dotnet 10):
   - `class Batman : ISuperHeld, Man` geeft `CS1722: Base class 'Man' must come before any interfaces`
   - `Zorro` mist `Power` en geeft `CS0535: 'Zorro' does not implement interface member 'ISuperHeld.Power'`
   - `int power;` in de interface geeft `CS0525: Interfaces cannot contain instance fields`
   - `new ISuperHeld()` in Main geeft `CS0144: Cannot create an instance of the abstract type or interface 'ISuperHeld'`

   De vierde fout verschijnt pas nadat de eerste drie opgelost zijn: de compiler kijkt pas in de
   methoden als de klassen zelf kloppen. Dat mag in de Les. Als extra: één lijn `public void
   SchietLasers();` die de student wellicht fout rekent, maar die compileert sinds C# 8. Traint de
   interfaceregels uit `content/16_interfaces/1_Interface_intro.MD:58-67`, die in geen enkele
   oefening terugkomen.

2. **Wie kan vliegen?** (*Essential*, voorspel de uitvoer). Klassen `Dier`, `Vogel : Dier, IVliegt`,
   `Pinguin : Vogel`, `Vliegtuig : Voertuig, IVliegt` en `Superman : Mens, IVliegt, ISuperHeld`. Een
   array met van elk één object, een lus met `is IVliegt` en `is ISuperHeld`. De student voorspelt de
   uitvoer op papier en voert daarna uit. De pinguïn is de valstrik: hij erft de interface van
   `Vogel` en "kan" dus vliegen. Dat opent het gesprek of `IVliegt` bij `Vogel` wel op zijn plaats
   staat. Traint `is` met interfaces, meerdere interfaces op één klasse, en een interface die via de
   parent meekomt.

3. **Interface of abstracte klasse?** (*Essential*). Zes korte situaties, bv. `Vogel` en `Vliegtuig`
   die allebei vliegen; `Hond` en `Kat` die dezelfde `Eet`-code en een `Naam` delen; een `Printer`
   die ook kan scannen; een `Rekening` met saldologica; "Sort moet mijn klasse kunnen sorteren". Per
   situatie kiest de student en motiveert hij met één regel uit de tabel in de leerstof. Daarna werkt
   hij er één uit in code. Traint precies wat de tabel en de Steven-opdracht in de leerstof uitleggen.

4. **Smartphone** (*Essential*). `Toestel` als basisklasse, interfaces `ICamera` en `IGsm`. `Smartphone`
   draagt beide, `Fototoestel` enkel `ICamera`, `VasteTelefoon` enkel `IGsm`. Een methode
   `static void MaakGroepsfoto(List<ICamera> cameras)` en een methode die iedereen met `IGsm` belt.
   Dezelfde smartphone zit in beide lijsten. Traint meerdere interfaces op één klasse en een
   interface als type van een parameter of lijst (`List<IMinister>` uit
   `content/16_interfaces/presidentinterfaces.md:56`). Vandaag doet enkel de Game dat, zonder oplossing.

## 5. Voorgestelde volgorde

Stevens superhelden → Carbon Footprint → Wie kan vliegen? → Smartphone → Interface of abstracte
klasse? → Pokémon interfaces → Figuren sorteren → Hacker Simulator (Final Essentials) → PokéDex met
foreach (PRO) → Game (project). Mapmaker afwerken verdwijnt uit H17.

## 6. Nevenvondsten

- **Twee coach-valkuilen compileren gewoon.** "Purify in de interface een body geven"
  (`oefeningen/_coach/17_interfaces.md:112`) en "De interface leden public maken of er een body in
  zetten" (`:144`): beide compileren sinds C# 8 (geverifieerd met dotnet 10). Met een body is het een
  *default interface method*: de klasse hoeft de methode niet meer te schrijven, en via een variabele
  van de klasse kan je ze niet oproepen (`CS1061: 'ShadowMew' does not contain a definition for 'Toon'`).
  Beschrijf ze als "werkt anders dan je denkt", niet als fout. Hetzelfde in de leerstof:
  `content/16_interfaces/1_Interface_intro.MD:64` zegt "Je kan geen access modifiers specificeren",
  de voetnoot op `:69` zegt dat het sinds C# 8 mag. Liever: "je hoeft geen `public` te schrijven".
- **`content/16_interfaces/2_InterfacesInPraktijk.md:158`** zegt dat `Array.Sort()` een nieuwe lijst
  teruggeeft. Twee lijnen verder (`:160`) staat terecht dat `Array.Sort` `void` is en ter plaatse
  sorteert. Lijn 158 moet weg of omgekeerd.
- **Uitzonderingen in `CompareTo`**: de leerstof gooit eerst een `NotImplementedException`
  (`2_InterfacesInPraktijk.md:99`), daarna een `ArgumentException` (`:129`), de oefening een kale
  `Exception` (`oefeningen/17_interfaces/A_practica.md:30`). Kies overal `ArgumentException`.
- **Nullable-waarschuwingen bij `IComparable`.** In een nieuw project (Nullable staat standaard aan)
  geeft `CompareTo(object obj)` de waarschuwing `CS8767` en `obj as Rechthoek` de waarschuwing
  `CS8600` (geverifieerd). Het boek stelt nullables bewust uit, dus de student ziet gele lijnen die
  niemand uitlegt. Eén zin in de leerstof of de opgave volstaat ("deze waarschuwing mag je hier
  negeren").
- **Mapmaker-project** (`oefeningen/EindeTests/A_DEEL2_AllInOne/1_MapMapker.md:377-383`): staat
  `location` nog op `null`, dan wordt de offset (1,1) in plaats van de nieuwe locatie. De zetels van
  `new SalonElement(new Point(6,5))` schuiven zo maar één vakje op in plaats van (6,5). De constructors van `ZetelElement` verschillen
  ook van voorbeeld tot voorbeeld (`:124`, `:157`, `:280`).
- `content/16_interfaces/presidentinterfaces.md:81-82`: één sluitende accolade te veel in `MinisterVanMilieu`.
- Het klasseschema `oefeningen/assets/9_interfaces/practgame.png` (screenshot uit Visual Studio) toont
  de kop "Fields". Bij een hertekening wordt dat "Instantievariabelen".
- **Ankers.** Deze pagina heeft nog geen expliciete ankers, dus elke titelwijziging (Figuren sorteren,
  PokéDex met foreach) verandert het automatische anker. Geef bij het doorvoeren elke oefening een
  `{#h17-...}`-anker en pas de titels in de coach-data mee aan.
