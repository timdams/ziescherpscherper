# H7: Methoden

> **Beslist door Tim (2026-09-11), zie README:** het punt over `Random` in een lus (sectie 6) is
> afgehandeld: leerstof en coach-data zijn al aangepast.

Bronnen: `oefeningen/7_methoden/b_practicasamen.md` (week 1), `oefeningen/7_methoden/b_practicasamenb.md`
(week 2), `oefeningen/_coach/7_methoden.md`, `content/6_methoden/` (alle bestanden uit `_quarto.yml`),
`content/B_appendix/boete.md`, `oefeningen/6_herhalingen/A_practicasamen2.md`, het begin van
`oefeningen/8_arrays/A_practicasamen.md`, `oefeningen/EindeTests/A_DEEL1_AllInOne/3_verhaalgenerator.md`
(waar week 2 naar linkt), `oefeningen/assets/movie.png` (de enige afbeelding) en de lokale build van
week 2.

## 1. Fouten die sowieso weg moeten

- **Havenbeheer: de oplossing staat niet in een codeblok** (`oefeningen/7_methoden/b_practicasamenb.md:222-345`).
  In de lokale build wordt `using System;` een alinea, en `namespace HavenAntwerpen { class Program {
  static void Main(...) { Console.WriteLine(“Welkom ...”);` wordt één lopende zin met gekrulde
  aanhalingstekens. Daarna volgt de rest half als code, half als tekst. Wie dat kopieert, krijgt
  compileerfouten. Voorstel: de code tussen ```` ```java ```` zetten, zoals overal.
- **Film Default: de oplossing toont iets anders dan het voorbeeld.** De opgave vraagt
  `The Matrix (120 minuten, Actie)`, de oplossing (`b_practicasamenb.md:28`) toont
  `The Matrix (120, Actie)` (geverifieerd met dotnet). De enum `Genre` ontbreekt en de Main met de
  aanroepen ook, terwijl de opgave (lijn 22) net vraagt dat je de aanroep met 1, 2 en 3 argumenten
  en met named arguments toont. De naam `FilmRuntime` is Engels tussen Nederlandse namen (boete
  "naamgeving niet consistent") en de methode toont iets zonder `Toon` in haar naam, tegen de
  huisregel bovenaan week 1 (`b_practicasamen.md:12`). Voorstel: `ToonFilm`, en een oplossing met
  enum, methode en Main, inclusief `ToonFilm("Up", filmgenre: Genre.Animatie)`: dat is de aanroep
  die laat zien waarom named arguments bestaan.
- **Roulette: de voorbeelduitvoer kan niet** (`b_practicasamenb.md:76-84`). Met de regels uit de
  opgave (+1 bij een treffer, -0,1 anders) geven 10 rondes -1,0 of +0,1 (of meer), nooit -0,8. 100
  rondes geven -6,7 of -5,6, nooit -6,6. Bij 10000 rondes verlies je gemiddeld zo'n 817 euro, niet
  120 (geverifieerd met dotnet: 200 herhalingen, telkens tussen -860 en -783). Het voorbeeld maakt
  de boodschap van de oefening ("het huis wint altijd") dus zwakker dan ze is. Verder: `-120` staat
  er zonder decimaal, de oplossing kleurt het verschil niet groen of rood (lijn 101) terwijl de
  opgave dat vraagt (lijn 70), en de lijn "Gegeven deze informatie ..." ontbreekt. "Een willekeurig
  getal tussen 0 en 60" (lijn 55-56) zegt niet of 60 meedoet; `Next(0, 60)` geeft 0 tot en met 59.
  Voorstel: een echte uitvoer van de oplossing overnemen, bv. `999,0 / -1,0`, `992,2 / -7,8`,
  `925,3 / -74,7`, `192,5 / -807,5`, en de kleur plus `ResetColor` in de oplossing zetten.
- **`return;` zonder waarde is nergens uitgelegd.** Netflix (`b_practicasamen.md:334`) en Havenbeheer
  (`b_practicasamenb.md:250`) stoppen het programma met `return;` in Main, en de coach-data raadt
  dat aan (`oefeningen/_coach/7_methoden.md:160`). In de leerstof van H1 tot H7 staat geen enkele
  `return;`: `content/6_methoden/0_intromethods.md:256-281` toont return enkel met een waarde. Een
  student die net geleerd heeft dat `return` iets teruggeeft, snapt niet wat het in een `void` doet.
  Voorstel: één zin en een mini-voorbeeld in de leerstof bij `return`, of in beide oplossingen met
  `else` werken. In beide gevallen een Les-callout.
- **Havenbeheer: de overload traint niets.** Beide versies van `BerekenLadingGewicht` doen `a * b`
  (`b_practicasamenb.md:160-162`), en een `int` gaat vanzelf naar een `double`, dus één methode
  `(double, double)` volstaat. Leest de student het aantal containers als `double` in, dan kiest de
  compiler de andere versie, maar het resultaat is exact hetzelfde (geverifieerd met dotnet: 3000 ton
  in beide gevallen). De valkuil in de coach-data (`7_methoden.md:276`) kan hij dus nooit zien. De
  leerstof raadt zo'n overload bovendien af (`content/6_methoden/3_advancedmethod.md:223-225`).
  Voorstel: een overload waarbij het type het verschil maakt, bv. havengeld:
  `BerekenHavengeld(int aantalContainers)` rekent per container, `BerekenHavengeld(double tonnage)`
  per ton. Leest de student de containers als `double` in, dan krijgt hij een ander bedrag, en dan
  klopt de valkuil. Klein ding erbij: de standaardwaarde 12.5 van `kadeDiepte` wordt in het scenario
  nooit gebruikt, want het voorbeeld zet altijd 14 via een named argument.
- **Opmaak:**
  - bovenaan week 1 staan drie losse callouts (`b_practicasamen.md:5-17`) in plaats van één
    `::: {.vooraf}`. Week 2 heeft er geen.
  - `##`-koppen in Netflix (lijn 194, 237), Roulette (`b_practicasamenb.md:47, 61, 72`) en Havenbeheer
    (lijn 151, 170, 185) vullen de inhoudsopgave.
  - Geen enkele oefening heeft een anker `{#h07-...}` (H6 heeft ze wel).
  - Titel "Netflix – Essentials Oefening (Methoden)": "Essentials" staat in de titel maar is geen label.
    Voorstel: "Netflix (*Essential*)", met de coach-titel mee.
- **Typfouten:**
  - "meer oefeningen dan je lief zijn" en "de kans bestaande" (`b_practicasamen.md:6, 8`)
  - "aanhouden" moet "aanroepen" zijn (lijn 70)
  - `ToonOnEvenNummers` wordt `ToonOnevenNummers` (lijn 33)
  - "Voorbeelduitvoer=" (`b_practicasamenb.md:15`)
  - "aanvaart" (49), "casino-simuleren" (51), "Iedere van de n simulaties" (53), "bendaring" (87),
    "tientalle" (142)

## 2. Wat sterker kan

- **Opwarmers (*Essential*)** (`b_practicasamen.md:21-43`): acht deelopdrachten onder één vinkje, en
  de oplossing is enkel een kennisclip. De opgaven zijn vaag:
  - "het kwadraat van een ingevoerd getal" (lijn 28) klinkt als `ReadLine`, net wat de waarschuwing
    erboven verbiedt;
  - "Idem voor omtrek en oppervlakte" (lijn 30) zegt niet of je van de straal of de diameter vertrekt;
  - de methode voor het grootste van twee getallen heeft geen naam (lijn 31);
  - wat een Armstronggetal is, staat er niet (lijn 34).

  Voorstel: per opwarmer de volledige signatuur geven (`static double BerekenStraal(double diameter)`),
  een geschreven oplossing (één codeblok met alle methoden en een Main die ze test), en de video als
  extra. Laat `BerekenOmtrek` en `BerekenOppervlakte` zelf `BerekenStraal` oproepen: zo komt
  "Methoden combineren" (`content/6_methoden/0c_methodencombineren.md:3-40`) aan bod, en dat
  wordt nu nergens geoefend. Armstrong gaat naar een eigen oefening "Armstrong (PRO)" met het
  voorbeeld 153 = 1³ + 5³ + 3³.
- **Basic en Basic 2** (lijn 46, 68) zijn makkelijker dan de Opwarmers, maar staan erachter. Samenvoegen
  tot "Stel jezelf voor" in twee delen en vooraan zetten. Beide oplossingen tonen enkel de methode,
  zonder aanroep. Zet Main erbij: "de methode schrijven maar nooit oproepen" is een valkuil uit de
  coach-data.
- **Grootste methode** (lijn 86): de oplossing klopt, ook bij gelijke getallen (geverifieerd met
  dotnet). Voeg een deel 2 toe: "schrijf ze opnieuw met je methode voor twee getallen uit de
  Opwarmers", dus `Grootste(Grootste(a, b), c)`. Dat is methoden combineren in één lijn.
- **Rekenmachine** (lijn 104): vier methoden van één lijn, de oplossing zonder Main. Deel 2: een menu
  met `switch` in een lus dat de methoden oproept, en bij delen door nul een melding (zoals
  `ToonDeling` in `content/6_methoden/0b_parameters.md:128-139`). Deel 3 is het geheugen uit Pro
  Rekenmachine, met `geheugen = TelOp(geheugen, getal);` in Main. Zo oefent de student dat hij het
  resultaat opvangt, precies de fout van Steven in `0b_parameters.md:234-259`.
- **Opwarmers met geavanceerde methoden** (`b_practicasamenb.md:34-36`): één zin, geen oplossing, en
  een optionele parameter op `Kwadraat` of `IsEven` is gezocht. Voorstel, concreet:
  - `Kwadraat` wordt `Macht(int grondtal, int exponent = 2)`;
  - `ToonOnevenNummers(int tot, int vanaf = 1)`, aangeroepen met `vanaf: 10`;
  - `Grootste` overloaden op het aantal parameters (twee en drie), waarbij de ene de andere
    oproept, zoals `ToonTitel` in `3_advancedmethod.md:207-219`.

  Vandaag is Havenbeheer, de Final Essentials, de eerste plek waar overloading geoefend wordt.
- **Netflix**: sterke oefening, de oplossing geeft exact beide voorbeelden (geverifieerd met dotnet).
  Label `(*Essential*)` en een Les-callout: "enkel `ToonWelkomstBericht` toont iets, de andere drie
  geven terug". In `MagKijken` kan de Les ook `return leeftijdGebruiker >= minimumLeeftijdSerie;`
  tonen. De `else` na `return;` (lijn 336) is overbodig.
- **Roulette**: de optionele parameter wordt in de oplossing nooit gebruikt zonder argument. Vraag
  expliciet één aanroep `Roulette(startKapitaal)`. `Roulette` is ook geen werkwoord;
  `SimuleerRoulette` past bij de naamgeving die de rest van het hoofdstuk hanteert. In een Les kan de
  lus met `aantalKeer *= 10` verwijzen naar de boete "Onnodige code", die precies dit voorbeeld
  gebruikt (`content/B_appendix/boete.md:219-245`).
- **A.I. assisted oefeningen generator** (lijn 120): "Dit is geen oefening", maar wel met het label
  Essential. Label weg, naar onderaan week 1. Vul de prompt aan met wat de student nog niet kent
  (zie `7_methoden.md:32-37`): geen `ref`, `out`, `TryParse`, klassen of variabelen buiten Main, en
  alle methoden `static` naast Main. Losse `"` op lijn 140.
- **Les-callouts** ontbreken op beide pagina's. Kandidaten: Stel jezelf voor (void zonder
  parameters, daarna met), Netflix, Film Default (optionele parameters achteraan, named argument om
  er een over te slaan), Havenbeheer.

## 3. Wat weg kan (of verhuist)

- **Oude oefeningen leesbaarder maken** (`b_practicasamenb.md:127-129`): één vraag zonder houvast en
  zonder oplossing. Vervangen door een concrete opkuisoefening (sectie 4, nr. 6).
- **Pro Rekenmachine** (`b_practicasamen.md:149-154`, geen oplossing): opgaan in Rekenmachine deel 3.
- **Hoe ver geraak je?** (`b_practicasamenb.md:140-142`): een externe lijst die niet op de leerstof
  gefilterd is, en een deel van die challenges vraagt arrays. Als bonus onderaan, met de tip om enkel
  de makkelijkste niveaus te nemen en alles met `[]` over te slaan.
- **Verhaalgenerator** (`b_practicasamenb.md:134-136`): het project waar ze naar linkt, heeft fouten
  (zie sectie 6). Bonus, onderaan week 2, en pas nadat het project hersteld is.

## 4. Gaten: kansen voor nieuwe oefeningen

Niet of amper geoefend:
- by value (`0b_parameters.md:186-222`);
- `return` dat de methode meteen stopt en "Not all code paths return a value"
  (`0_intromethods.md:256-290`);
- methoden die elkaar oproepen;
- lokale functies en hun boete (`0c_methodencombineren.md:96-136`);
- `///`-commentaar;
- `VraagInt` (`1_bibliotheken.md:63-90`);
- de valkuilen van named en optionele parameters (`3_advancedmethod.md:32-44, 114-144`);
- de dubbelzinnige aanroep bij overloading (`3_advancedmethod.md:266-306`);
- step-in (`3_advancedmethod.md:312-322`).

Er is geen enkele oefening waarin de student code leest.

1. **Stevens methoden** (*Essential*, week 1). Deel 1: vier fragmenten die niet compileren of punten
   kosten:
   - een methode met `if` zonder `return` op elk pad;
   - `double btw = ToonBtw(100);` met een `void`-methode;
   - een methode zonder `static`, opgeroepen vanuit Main;
   - een methode binnen Main. Die compileert wel, maar kost 3 punten.

   Deel 2: twee die wel compileren maar niet doen wat Steven denkt:
   - `static int Kwadraat(int getal)` die `getal` meteen overschrijft met `ReadLine`;
   - `BerekenKorting` die het bedrag toont en `0` teruggeeft.

   Traint het verschil tussen tonen en teruggeven, en parameters tegenover `ReadLine`. De
   foutmeldingen in deel B letterlijk laten genereren.
2. **Voorspel de uitvoer** (*Essential*, week 1). Een programma waarin methoden elkaar oproepen met
   `Write`, een parameter met dezelfde naam als een variabele in Main die in de methode verandert, een
   `return` midden in een methode met code erachter, en een returnwaarde die niet opgevangen wordt.
   Eerst op papier, daarna controleren met step-in (F11). Dat is meteen de eerste debugoefening van
   het hoofdstuk.
3. **Vraagmethoden** (*Essential*, week 1). `VraagInt(string vraag)` en `VraagTekst(string vraag)`
   zoals in `1_bibliotheken.md:75-80`, daarna `VraagIntTussen(string vraag, int min, int max)` die
   met een lus opnieuw vraagt (invoercontrole uit H6) en zelf `VraagInt` oproept. Deel 3: Main van
   Netflix herschrijven met deze methoden. Traint de uitzondering op de huisregel (een methode die
   Vraag heet, mag `ReadLine` gebruiken), een methode die een andere oproept en een lus in een
   methode. In week 2 terugkomen: `VraagInt` overloaden met en zonder grenzen.
4. **Methodenpuzzel** (week 1). De lijnen van `BerekenGemiddelde(int som, int aantal)` en van de
   aanroep in Main door elkaar, met twee indringers: een `Console.ReadLine()` in de methode en een
   `return som / aantal;` in een `void`-versie. Traint de opbouw van een signatuur en waar `return`
   hoort.
5. **Voorspel de uitvoer: optioneel en overload** (*Essential*, week 2). Per lijn zeggen welke versie
   uitgevoerd wordt en wat er verschijnt, of dat het niet compileert:
   - `ToonFactuur("Tim", 6)`;
   - `ToonPunten` met omgewisselde strings;
   - `Verdubbel(2.5f)`;
   - `ToonPrijs(100, 5)`, die dubbelzinnig is;
   - `ToonPrijs(100, 5.0)`.

   De leerstof zegt zelf dat deze fouten zelden compilerfouten zijn (`3_advancedmethod.md:142-144`).
   Hier moet de student ze leren zien.
6. **Helm's Deep opgekuist** (*Essential*, week 2, in de plaats van Oude oefeningen leesbaarder
   maken). Vertrek van de oplossing van de Final Essentials van H6
   (`oefeningen/6_herhalingen/A_practicasamen2.md:659-771`) en knip ze op:
   - `ToonGekleurd(string tekst, ConsoleColor kleur = ConsoleColor.Gray)` vervangt de blokken met
     kleur, `WriteLine` en `ResetColor` (lijn 674-676, 692-694, 745-750);
   - `PuntenVoorVijand(string vijand)` geeft een `int` terug;
   - `VraagTekst` stelt de vragen.

   De toets: kan je elke methode in één zin uitleggen (`0c_methodencombineren.md:42-46`)? Traint
   knippen, een returntype kiezen, een optionele parameter, en code van iemand anders lezen.

## 5. Voorgestelde volgorde

**Week 1** (leerstof tot en met `1_bibliotheken.md`): Stel jezelf voor → Opwarmers → Grootste
methode → Rekenmachine (met menu en geheugen) → Methodenpuzzel → Voorspel de uitvoer → Stevens
methoden → Vraagmethoden → Paswoord generator → Netflix → Armstrong (PRO) → A.I. assisted
oefeningen generator

**Week 2** (`3_advancedmethod.md`): Film Default → Opwarmers met geavanceerde methoden →
Voorspel de uitvoer: optioneel en overload → Roulette → Helm's Deep opgekuist → Havenbeheer
(*Final Essentials*) → Verhaalgenerator (bonus) → Hoe ver geraak je? (bonus)

Over de verdeling: de knip tussen de basis (week 1) en `3_advancedmethod.md` (week 2) is juist.
Maar week 2 telt vandaag zeven oefeningen, waarvan er maar drie een oplossing hebben (Film Default,
Roulette, Havenbeheer), en overloading wordt pas in de Final Essentials geoefend. Met dit voorstel
heeft week 2 zes echte oefeningen. Week 2 krijgt ook een eigen `.vooraf`: wat er deze week
bijkomt (named, optioneel, overloading) en dat de huisregel van week 1 blijft gelden.

## 6. Nevenvondsten

- **Coach-data:**
  - Pro Rekenmachine (`oefeningen/_coach/7_methoden.md:132`) zegt dat het geheugen "één variabele is
    die buiten de methoden leeft". Dat klinkt als een static variabele op klasseniveau, en die kent
    de student niet (lijn 36). Beter: een variabele in Main, en `geheugen = TelOp(geheugen, getal);`.
  - Havenbeheer (lijn 276): de valkuil is onzichtbaar, zie sectie 1.
  - Netflix (lijn 160) raadt `return;` aan, en dat is niet gezien.
  - "Kent nog niet: TryParse" (lijn 35) klopt niet helemaal: `0b_parameters.md:224-231` toont
    `int.TryParse` met `out` al in een tip.
- **Random in een lus.** De coach-valkuil bij Paswoord generator (`7_methoden.md:149`) zegt dat een
  `Random` binnen de lus alle tekens gelijk maakt. Op .NET Core en later is dat niet meer zo: 20 keer
  `new Random()` in een lus gaf `icrdkoiofcytajjhexfl` (geverifieerd met dotnet 10). Dezelfde
  bewering staat in `content/3_data/random.md:100-109` en `content/10_advancedklassen/5_static.md:442-452`.
  Eén generator maken blijft een goede raad, maar de reden in het boek is verouderd.
- **`oefeningen/EindeTests/A_DEEL1_AllInOne/3_verhaalgenerator.md`** (week 2 stuurt de student
  daarheen):
  - `(char)r.Next('Z', 'Z'+1)` op lijn 18 en 111 geeft altijd `Z`;
  - `static Random r` (lijn 12) is een variabele buiten Main;
  - `GenereerVoorwerp` mist een sluitaccolade (lijn 186);
  - de opdracht vraagt een optionele parameter die op `null` test (lijn 253), en dat raakt aan
    nullables.
- **Leerstof:** `JaartjeOuder` (`content/6_methoden/0b_parameters.md:198-202`) toont iets zonder
  `Toon` in de naam. Dat is een klein detail, maar de oefeningen maken van die naamregel een harde
  huisregel.
- **Kennisclips:** `content/6_methoden/kennisclips.md:14` linkt nog naar het oude gitbook
  (`apwt.gitbook.io/ziescherp-oefeningen/...`) in plaats van naar de eigen oefeningenpagina.
- **H8:** de eerste oefeningen (`oefeningen/8_arrays/A_practicasamen.md:11-150`) gebruiken geen
  enkele methode. Een `ToonArray`- of `BerekenGemiddelde`-methode zou H7 levend houden.
- **Coach-titels:** elke titelwijziging hierboven (Netflix, Stel jezelf voor, Armstrong, de nieuwe
  oefeningen) moet mee in `oefeningen/_coach/7_methoden.md`, anders krijgt de oefening geen
  Coach-knop.
