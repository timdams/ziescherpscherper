# H12: Arrays en klassen

> **Beslist door Tim (2026-09-11), zie README:** het punt over de Random-seed in sectie 6 is
> afgehandeld: leerstof en coach-data zijn al aangepast.

Bronnen: `oefeningen/12_arraysvanklassen/A_practicaMem.md`, `oefeningen/_coach/12_arraysvanklassen.md`,
`content/11_arraysvanklassen/` (`7_arraysvanobj.md`, `4_list.md`, `3_foreach.md`, `dict.md`,
`zieverder.md`), `content/B_appendix/boete.md`, vluchtig `oefeningen/11_advancedklassen/A_practica3.md`
en het begin van `oefeningen/13_overerving/A_PracticaSimpel.md`. Verder de gelinkte
`oefeningen/EindeTests/A_DEEL2_AllInOne/2_OOTextGame.md`, de Studentklasse in
`oefeningen/9_klassen/A_practica.md` en de gerenderde pagina in `build/oefeningen/`. De opgaven
bevatten geen afbeeldingen.

## 1. Fouten die sowieso weg moeten

- **Fastfood restaurant (GPT): de oplossing toont de gerechten nooit.** Overal waar een bestelling
  getoond wordt, staat het object zelf in de string (`oefeningen/12_arraysvanklassen/A_practicaMem.md:594`,
  `:613`, `:635`). Zonder `ToString()` (pas in H14) geeft dat letterlijk `Bestelling toegevoegd: Bestelling`,
  en de geschiedenis is een rij met "Bestelling" (geverifieerd met dotnet). De opgave vraagt net dat de
  keuken "de gerechten toont" (`:485`). Verder in dezelfde oplossing:
  - `ToLower()` in de if maar niet in de lusvoorwaarde (`:584` tegenover `:588`): wie `Stop` typt,
    krijgt geen gerecht "Stop" maar blijft wel in de lus hangen (geverifieerd met dotnet).
  - `using System.Linq;` (`:517`) is overbodig en wijst net naar wat verboden is.
  - `Bestelling` en `Program` staan in één blok (`:519`-`:530`), wat een boete is vanaf semester 2.
    Tabs en spaties lopen door elkaar (`:536`-`:540`, `:578`).
  - `ContainsKey` en toevoegen via `populariteit[gerecht] = 1` (`:617`-`:620`) staan nergens in de
    leerstof. Voor een *Essential* moet dat in de opgave of in `dict.md` staan (zie sectie 6).
  - De opgave zegt niet waar de populariteit getoond wordt (`:489` vraagt enkel de geschiedenis), de
    oplossing doet het in `ToonGeschiedenis` (`:638`). "De bestellingen worden opgehaald" (`:436`) komt
    nergens terug. Onder "Voorbeeld werking" (`:495`) staan declaraties, geen voorbeeld.

  Voorstel: `Bestelling` krijgt een methode `ToonGerechten()` met een foreach, de oplossing gebruikt die
  bij het plaatsen, verwerken en in de geschiedenis. Eén `ToLower()` voor beide controles. De
  `ContainsKey`-regel en de plek van het populariteitsoverzicht komen in de opgave, plus een
  voorbeeldrun in een `.console`-blok.

- **Student Organizer: de oplossing compileert niet.** Ze roept `Student.MaakStudentViaReadLine()` op
  (`oefeningen/12_arraysvanklassen/A_practicaMem.md:390`, `:395`), en die methode bestaat niet in de
  gegeven klasse: CS0117 (geverifieerd met dotnet). Er staat een losse `}` op `:429`. De oplossing
  vergelijkt met `"Onbekend"` (`:383`, `:403`), maar de klasse heeft geen constructor die dat instelt.
  Met de gegeven klasse is `Naam` gewoon `null` en toont menukeuze B vijf lege rapportjes
  `, 0 jaar` (geverifieerd met dotnet). Verder:
  - de opgave spreekt van menu-opties 1 en 2 (`:270`, `:274`), de oplossing gebruikt A, B, C, D en Q
    (`:368`-`:376`);
  - "eerstvolgende student wordt ingevuld" (`:270`) en "de gebruiker moet kiezen welke student"
    (`:271`) spreken elkaar tegen;
  - de zin op `:275` houdt halverwege op;
  - `VerwijderStudentVanLijst` vraagt "Welke studentnummer wil je invoeren?" (`:425`).

  Voorstel: de oplossing volledig herschrijven, met de constructor en de invoermethode erbij, en het
  menu gelijk aan de opgave (zie ook sectie 2: liefst met een array).

- **Drie oefeningen hebben een lege Oplossing-callout:** Pokédex (`oefeningen/12_arraysvanklassen/A_practicaMem.md:255`),
  OO Textbased game (`:869`) en de *Final Essential* CodeChella (`:937`). De student klikt op
  "Oplossing" en krijgt een leeg paneel. Pokédex en CodeChella hebben een uitgewerkte oplossing nodig.
  Voor de text game, zie sectie 3.

- **Computer-winkel: opgave en oplossing verschillen op vier plekken.**
  - Het voorbeeld `Prijs: 845, ID: 45, InDoos: true` (`oefeningen/12_arraysvanklassen/A_practicaMem.md:46`)
    heeft een ID buiten 100-999, en C# toont `True` met een hoofdletter (geverifieerd met dotnet).
  - "Prijs positief" (`:41`), maar de oplossing gebruikt `rng.Next(0, 1001)` (`:94`), en prijs 0 komt
    effectief voor (drie keer op 1000 onderdelen, geverifieerd met dotnet).
  - "Managen" vraagt één keuze uit een menu met 1 en 2 (`:63`-`:66`), de oplossing stelt twee y/n-vragen
    na elkaar (`:194`-`:237`).
  - De methode `ToonInfo_EvenIDPrijsGroterDan200` (`:135`, `:182`) filtert op prijs **onder** 200.

  Daarnaast is `List<ComputerOnderdeel>` op `:51` niet in backticks gezet: Pandoc leest het als een
  html-tag en in de gerenderde pagina staat "een List dat je vult" zonder type
  (`build/oefeningen/12_arraysvanklassen/A_practicaMem.html:821`). "Kijk zeker eens naar volgende
  oefening daaromtrent" (`:72`) wijst naar de Pokédex, en de tip op `:75` spreekt van "de array als
  inventaris" terwijl het een List is.

- **Bookmark Manager: de gegeven klasse compileert niet zoals ze er staat.** `WebClient` en `Regex`
  hebben `using System.Net;` en `using System.Text.RegularExpressions;` nodig, en die staan nergens
  (`oefeningen/12_arraysvanklassen/A_practicaMem.md:666`-`:688`). Zonder die usings krijg je CS0246 en
  CS0103. Met de usings compileert het, maar met waarschuwing SYSLIB0014: `WebClient` is obsolete
  (geverifieerd met dotnet). De oplossing vraagt 2 sites in plaats van 5 (`:749`), heeft een
  `while (true)` zonder uitweg (`:718`) en nummert vanaf 0 (`:799`). De coach-data zegt net dat het
  nummer één meer is dan de index. Voorstel: de usings in de gegeven klasse zetten, `WebClient`
  vervangen door `new HttpClient().GetStringAsync(URL).Result` (de student kopieert die regel toch),
  en in de oplossing 5 sites, een stopoptie en nummers vanaf 1.

- **De oplossingen verdienen zelf boetes voor naamgeving.**
  - CodeChella schrijft PascalCase-namen voor lokale variabelen in Main voor: `LineUp`, `IngangRij`,
    `TicketVerkoop` (`oefeningen/12_arraysvanklassen/A_practicaMem.md:903`-`:905`). Wie de opgave
    letterlijk volgt, krijgt -2. Student Organizer doet hetzelfde met `Lijst` (`:332`).
  - Bookmark mengt Nederlandse en Engelse namen: `ToonHoofdMenu` en `VraagEnVulBookmarkList` naast
    `RemoveSite`, `EditSite`, `ShowAll`, `AskAction` en `enum Keuzes { List, Show, Edit, Delete }`
    (`:707`-`:809`).
  - Computer-winkel heeft underscores in de methodenamen (`ToonInfo_Alle`), `userInput` en `(y/n)`,
    en een uitgecommentarieerd `Hello World` (`:114`).

  Allemaal gelijktrekken naar Nederlands en camelCase.

- **Speelkaarten:** de klasse heet `Speelkaart` (`oefeningen/12_arraysvanklassen/A_practicaMem.md:817`)
  maar de lijst `List<SpeelKaart>` (`:823`). "De zogenaamde suite" (`:820`) is niet het juiste woord
  (Engels *suit*, Nederlands *kleur*). De oplossing noemt de enum `Suit` en de property `Suite`
  (`:853`, `:858`). Voorstel: enum `Kleur`, property `Kleur`, en de lijst `stapel` in plaats van
  `boekKaarten` (`:830`).

- **CodeChella laat open of een bezoeker met rugzak binnen mag** na de security check
  (`oefeningen/12_arraysvanklassen/A_practicaMem.md:919`-`:921`). De teller hangt daarvan af, en de
  coach-data rekent er een valkuil van. Zeg het expliciet ("na de check mag hij binnen"). Waar de
  namen van de 5 willekeurige bezoekers vandaan komen (`:917`), staat er ook niet. Geef een array van
  namen mee.

## 2. Wat sterker kan

- **Student Organizer wordt de array-oefening van het hoofdstuk.** Vandaag gebruikt geen enkele
  oefening een array van objecten, terwijl het hoofdstuk daarmee opent en de null-valkuil de eerste
  waarschuwing is (`content/11_arraysvanklassen/7_arraysvanobj.md:20`, `:67`). Vijf vaste plaatsen is
  volgens de eigen tip (`content/11_arraysvanklassen/4_list.md:98`) net een geval voor een array. Met
  `Student[] klas = new Student[5]` betekent `null` "nog niet ingevuld". Het extraatje "lege studenten
  negeren" (`oefeningen/12_arraysvanklassen/A_practicaMem.md:283`) wordt dan een gewone `!= null`, en
  wie het vergeet krijgt de `NullReferenceException` uit de leerstof. De Studentklasse onderaan wijkt
  bovendien af van H9 (andere enum-waarden, `BerekenTotaalCijfer` in plaats van `BerekenGemiddelde`):
  verwijs gewoon naar de eigen klasse uit H9.
- **Computer-winkel, deel Managen:** laat de student eerst verwijderen met een foreach, de crash lezen
  ("Collection was modified"), en het daarna oplossen met een for van achter naar voor. Zet dat in een
  callout "Les uit deze oefening". De oplossing gebruikt nu `onderdelen.Remove(onderdelen[i])`
  (`oefeningen/12_arraysvanklassen/A_practicaMem.md:210`, `:233`), en dat werkt enkel omdat `Remove`
  opnieuw vooraan begint te zoeken: `RemoveAt(i)` is wat er bedoeld wordt. Met 20 onderdelen in plaats
  van 100 blijft de uitvoer ook leesbaar.
- **Prijzen met foreach:** 20 prijzen intypen om één keer te testen is saai. Maak er 5 van via een
  `const`, en toon een voorbeelduitvoer. Een korte tweede stap waarin de student probeert te vullen
  met `foreach` en de compilerfout leest, maakt de eerste beperking uit `3_foreach.md` concreet (de
  foutmelding in Deel B letterlijk laten genereren). Kleinigheid: "wiens prijs" (`:3`) wordt "waarvan
  de prijs".
- **Speelkaarten** is de makkelijkste oefening met een klasse en hoort vooraan (zie sectie 5). Laat
  een methode `ToonKaart()` 1, 11, 12 en 13 tonen als Aas, Boer, Koningin en Heer. Nu staat er
  `Harten  12` (geverifieerd met dotnet). En `RemoveAt(index)` in plaats van `Remove(getrokken)`
  (`:845`).
- **Bookmark Manager** vraagt "een array of List" (`:655`) en daarna verwijderen (`:656`). Maak daar
  bewust twee delen van: **Deel 1.** met een array van 5, **Deel 2.** verwijderen, waardoor de student
  merkt waarom een List hier beter past. Laat hem ook een try-catch rond `ToonSite()` zetten
  (exceptions kent hij sinds H10): een foute URL crasht nu het hele programma.
- **Fastfood en CodeChella vragen hetzelfde patroon** (Queue plus een teller in een Dictionary). Dat
  mag bij een Final Essential, maar laat CodeChella dan iets toevoegen: maak de VIP-rij verplicht in
  plaats van PRO, en laat de totaalbudget-lus uitdrukkelijk zonder `.Sum()` schrijven.
- **Opmaak over de hele pagina:**
  - de oefeningen gebruiken `##`- en `###`-koppen voor hun delen (`:34`, `:49`, `:61`, `:70`, `:286`,
    `:454`, `:470`, `:479`-`:491`, `:495`, `:885`, `:899`, `:909`, `:915`, `:923`). Die worden
    **Deel N.**, zoals in de README;
  - geen enkele oefening heeft een callout "Les(sen) uit deze oefening";
  - de labels op `:434` (`(Essential) (GPT)`) en `:874` (`(*Final Essential*)`) volgen niet het vaste
    formaat;
  - er zijn nog geen ankers `{#h12-...}`;
  - de GPT-oefening mist de uitleg die H11 wel geeft (`oefeningen/11_advancedklassen/A_practica3.md:56`);
  - "Remove random" (`:249`) wordt "Verwijder willekeurig".

## 3. Wat weg kan (of verhuist)

- **OO Textbased game** (`oefeningen/12_arraysvanklassen/A_practicaMem.md:865`) is geen oefening maar
  een link, met een Coach-knop en een lege oplossing. De gelinkte tekst gebruikt `this`
  (`oefeningen/EindeTests/A_DEEL2_AllInOne/2_OOTextGame.md:138`, `:198`, `:262`), dat pas in H15
  komt. Voorstel: weg als oefening, en onderaan de pagina één regel "Wil je verder? Bekijk het
  tekstspel bij de gecombineerde opgaven" in het `.vooraf`-blok of na CodeChella.
- **Het *Essential*-label van Student Organizer** mag weg zodra de nieuwe Parkeergarage (sectie 4)
  er is. Beide trainen dan een array van objecten met `null`, en de Parkeergarage doet dat met minder
  franje (geen klasse overnemen, geen enum-invoer).

## 4. Gaten: kansen voor nieuwe oefeningen

Niet geoefend vandaag: een array van objecten en `null`, de referentie-valkuil van
`IndexOf`/`Contains`, verwijderen tijdens een foreach (staat bij Steven in de leerstof maar in geen
enkele oefening), `Stack`, en opzoeken in een Dictionary via de key (beide Dictionary-oefeningen
tellen enkel). Er is ook geen enkele oefening waarin de student code leest.

1. **Parkeergarage** (*Essential*): `Auto[] plaatsen = new Auto[10]`, met `null` als vrije plaats. Menu:
   een auto parkeren op de eerste vrije plaats (zoek-en-stop met een `null`-controle), een auto laten
   vertrekken (plaats terug op `null`), en een overzicht waarin lege plaatsen "vrij" tonen. Deel 1
   begint met `plaatsen[0].Nummerplaat` meteen na de `new` op te vragen, zodat de student de
   `NullReferenceException` eerst zelf ziet. Traint het kernidee van het hoofdstuk, en waarom hier een
   array past en geen List (de positie is het plaatsnummer).
2. **Voorspel de uitvoer: referenties in een lijst** (*Essential*): een kort stuk code op papier
   uitvoeren. Hetzelfde object twee keer in een lijst zetten en daarna via de variabele de naam
   wijzigen. `Contains` met een nieuw object dat dezelfde naam heeft. `IndexOf`, `Count` na `Remove`,
   en een foreach die een property aanpast. Traint de referentie-valkuil uit `4_list.md:115` en de
   stof uit H10.
3. **Stevens opruimactie** (*Essential*): Steven moet uit een `List<int>` of een lijst producten alles
   onder een grens verwijderen en levert drie versies in: een foreach met `Remove` (crasht), een for van
   voor naar achter met `RemoveAt` (slaat twee opeenvolgende elementen over, de student voorspelt
   welke blijven staan) en een for van achter naar voor (juist). Kies de startlijst zo dat versie 2
   zichtbaar fout loopt. Dit is de valkuil uit `zieverder.md`, die nu nergens getoetst wordt.
4. **Aflegstapel** (Speelkaarten deel 2): getrokken kaarten gaan op een `Stack<Speelkaart>`. Een optie
   "terugnemen" haalt met `Pop` de laatst gelegde kaart terug in de hand, en de stapel toont altijd
   enkel de bovenste kaart (`Peek`). Traint LIFO en controleren op een lege stack. Geen *Essential*.
5. **Studentenbalie** (Dictionary opzoeken): `Dictionary<string, Student>` met het studentennummer als
   key. Een student opzoeken, aanpassen en verwijderen via zijn nummer, en een nummer dat niet bestaat
   netjes opvangen. Traint waarvoor een Dictionary eigenlijk dient (`dict.md:104`), in plaats van enkel
   tellen. Geen *Essential*, wel een goede opstap naar CodeChella.

## 5. Voorgestelde volgorde

Prijzen met foreach → Speelkaarten → Parkeergarage → Voorspel de uitvoer → Pokédex →
Stevens opruimactie → Computer-winkel → Student Organizer → Bookmark Manager → Aflegstapel →
Fastfood restaurant → Studentenbalie → Project: CodeChella (link naar het tekstspel als bonus
onderaan)

## 6. Nevenvondsten

- **`content/11_arraysvanklassen/dict.md`** leert geen `ContainsKey`, geen `dict[key] = waarde` om
  toe te voegen of te overschrijven, en zegt niet wat er gebeurt met een key die niet bestaat
  (KeyNotFoundException). Twee oefeningen hebben het tel-patroon nodig, en de coach-data geeft het nu
  onder de toonbank (`oefeningen/_coach/12_arraysvanklassen.md:143`). Een korte paragraaf "tellen per
  sleutel" lost dat op. Kleinigheid op `dict.md:136`: "hou het bij value types als key", terwijl
  `string`, het voorbeeld ervoor, een reference type is.
- **`content/11_arraysvanklassen/7_arraysvanobj.md:114`**: `mijnKlas[3]?.Name = ...` is een
  null-conditional *toekenning*. Die bestaat pas sinds C# 14 (.NET 10). Met C# 13 geeft het CS9260
  (geverifieerd met dotnet), dus studenten op .NET 8 krijgen een fout. De uitleg op `:117` ("het
  eerste vraagteken controleert of de array zelf niet null is") klopt niet: er staat maar één
  vraagteken, en dat controleert `mijnKlas[3]`. Op dezelfde pagina wisselen `Name` (`:56`, `:114`) en
  `Naam` (`:104`).
- **`content/11_arraysvanklassen/4_list.md:107`-`:113`**: `Remove` en `Contains` ontbreken in het
  lijstje "Wat kan een List nog?", terwijl Steven, de foreach-waarschuwing en de callout op `:115` ze
  gebruiken.
- **Random-seed:** `content/10_advancedklassen/5_static.md:425`-`:452` en `content/3_data/random.md:100`
  zeggen dat twee `Random`-objecten die kort na elkaar gemaakt worden dezelfde getallen geven. Op
  .NET Core en later klopt dat niet meer: 100 keer `new Random()` na elkaar gaf geen enkele dubbele
  waarde, en de "slechte" dobbelsteen uit `5_static.md:436` gooit gewoon gevarieerd (geverifieerd met
  dotnet 10). Een static generator blijft een goed idee, maar de uitleg is die van .NET Framework. De
  coach-data neemt het over als valkuil (`oefeningen/_coach/12_arraysvanklassen.md:91`).
- **Coach-data:** `oefeningen/_coach/12_arraysvanklassen.md:162` zegt dat het nummer één meer is dan de
  index, en de oplossing van Bookmark nummert vanaf 0. `:42` zet `Remove` en `Contains` onder "Kent
  al", maar ze staan niet in het lijstje van de leerstof (zie hierboven). Na de wijzigingen uit
  sectie 3 en 4 moeten de titels mee (OO Textbased game eruit, vijf nieuwe erbij, Student Organizer
  met een array).
- **H9:** de opgave Studentklasse vraagt `BerekenGemiddelde()` (`oefeningen/9_klassen/A_practica.md:218`),
  maar de oplossing heet `BerekenTotaalCijfer()` (`:262`).
- **H11:** Digitale kluis spreekt van **Velden** (`oefeningen/11_advancedklassen/A_practica3.md:144`),
  dat wordt "instantievariabelen".
- **H13:** Magische dranken bevat een em-dash en emoji (`oefeningen/13_overerving/A_PracticaSimpel.md:89`)
  en een oplossing die niet compileert (`int bonus 10;` op `:133`). De overgang zelf is goed: Het
  dierenrijk begint met een `List<Animal>` en een foreach, precies wat H12 oefent.
