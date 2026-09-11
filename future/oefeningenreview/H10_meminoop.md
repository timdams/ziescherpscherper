# H10: Geheugenmanagement en uitzonderingen

> **Beslist door Tim (2026-09-11), zie README:** Meetlat verhuist naar H9. Kijk eerst of dat al gebeurd
> is. De unittest-repo's blijven voorlopig zoals ze zijn.

Bronnen: `oefeningen/10_meminoop/A_poke1.md` (de enige pagina), `oefeningen/_coach/10_meminoop.md`,
de leerstof uit `_quarto.yml` (`content/9_meminoop/6_memorymanagement.md`, `6b_objectenenmethoden.md`,
`nullreference.md`, `namespaces.md`, `zieverder.md`, `kennisclips.md`,
`content/20_exceptions/0_exceptionhandling.md`, `waarplaatsen.md`), `content/B_appendix/boete.md`,
de afbeelding `oefeningen/assets/6_klassen/pokemon.png`, vluchtig `oefeningen/9_klassen/B_practica.md`
en het begin van `oefeningen/11_advancedklassen/A_practica3.md`, en de unittests in de gelinkte
repo's `ZIESCHERPER_TESTS_H2_Meetlat`, `_Kleurmixer` en `_PokemonBasic`.

De rode draad: de pagina oefent vooral properties (H9). Van de leerstof van H10 komt enkel "een
object meegeven aan een methode" echt aan bod. Exception handling wordt nergens geoefend, null
amper, en er is geen enkele oefening waarin de student code leest.

## 1. Fouten die sowieso weg moeten

- **Pokémon: de oplossing compileert niet** (geverifieerd met dotnet). `Total / 6.`
  (`oefeningen/10_meminoop/A_poke1.md:381`) geeft CS1001, want C# kent geen literal `6.`. Daarna
  nog drie fouten: `aPoke.Attack_base` (`:421`) en `temp.HP_base`/`temp.Attack_base` (`:444-445`)
  bestaan niet (de properties heten `Attack_Base` en `HP_Base`), en `ShowInfo()` (`:425`, `:434`)
  staat nergens in de oplossing, terwijl deel 2 er net om draait. Voorstel: `6.0`, de juiste
  namen, en `ShowInfo` in de klasse uitschrijven.
- **Pokémon, Battle: de oplossing doet de twee dingen die de opgave verbiedt.** De opgave vraagt
  een Exception als er een Pokémon `null` is (`:298`) en zegt "werk niet enkel met de base-stats"
  (`:300`). De oplossing (`:459-476`) geeft bij `null` gewoon 1 of 2 terug en vergelijkt
  `Average`, het gemiddelde van de base-stats. Het level speelt dus geen rol. De coach-data noemt
  net dat als valkuil (`oefeningen/_coach/10_meminoop.md:109`). Voorstel: `throw new Exception(...)`
  als minstens één van beide `null` is, vergelijken op het gemiddelde van de `_Full`-stats, en in
  de aanroep een `try`/`catch` die `e.Message` toont. Dat is meteen de enige plek op de pagina waar
  een exception opgeworpen én opgevangen wordt.
- **Pokémon, voorbeeld van ShowInfo klopt niet** (`:264-273`). "Pikachu (level 5)" met base HP 56
  geeft volgens de formule van `:222` een `HP_Full` van 20, niet 100. Er bestaat zelfs geen level
  waarop base 56 precies 100 geeft (geverifieerd met dotnet: level 42 geeft 99, level 43 geeft 101).
  De echte Pikachu heeft trouwens base HP 35 en Speed 90. Voorstel: een voorbeeld dat met de
  formule klopt, bv. Pikachu 35/55/40/50/50/90 op level 5.
- **Pokémon, namen door elkaar.** De formule van `Average` gebruikt `SpAttack_Base` en
  `SpDefense_Base` (`:210`), de properties heten `SpecialAttack_Base` en `SpecialDefense_Base`
  (`:181-182`). Deel 2 spreekt van "de LevelUp-methode" (`:280`), die heet `VerhoogLevel` (`:204`).
  De opgave schrijft de klasse als `Pokémon` met é (`:173`, `:287`, `:294`), de oplossing en de
  unittests gebruiken `Pokemon`. Een é in een klassenaam compileert wel, maar de student die de
  opgave letterlijk volgt, faalt op de unittests. Voorstel: overal `Pokemon` in code, `Pokémon` in
  de lopende tekst.
- **Pokémon, het startlevel staat nergens.** De oplossing én de unittests gaan uit van level 0
  (de test controleert `HP_Full` "bij level 0"). Een student die `Level` op 1 laat starten, faalt
  op die test zonder te weten waarom. Voorstel: in de opgave zeggen dat een nieuwe Pokémon op
  level 0 start (niet op 1 zetten, dan breekt `LevelbasedStatsPropsTest`).
- **Bankmanager 2: de opgave leidt naar een programma dat geld laat verdwijnen** (geverifieerd met
  dotnet, met de `Rekening` uit de oplossing van H9). Een tienerrekening start op 50, een bedrag
  gaat tot 100. Na de eerste overschrijving is een rekening dus meestal leeg en geblokkeerd, en
  vanaf dan wordt het geld wel afgehaald bij de ene maar niet gestort bij de andere. In 849 van
  1000 runs is er achteraf minder geld dan ervoor. Niemand merkt het, want de opgave vraagt geen
  controle. Voorstel: maak er een vraag van ("Tel het totaal op voor en na de simulatie. Klopt
  het? Waar is het geld?") of beperk het bedrag tot 1-20.
- **SpaceCommand: stap 7 klopt niet.** "De verliezer zou nu moeten winnen met zijn upgrades"
  (`:589`). Met `TotaleKracht = VuurKracht * Ervaring + SchildKracht * 0.5` telt de vuurkracht van
  een schip met 0 ervaring niet mee. De opgewaardeerde verliezer heeft 50, de winnaar
  `VuurKracht + SchildKracht / 2`. In een simulatie van 100 000 runs wint de verliezer het tweede
  gevecht maar in 8% van de gevallen (geverifieerd met dotnet). Voorstel: de formule wordt
  `VuurKracht * (Ervaring + 1) + SchildKracht * 0.5`, of stap 7 wordt een vraag: "Wint hij nu?
  Waarom (niet)?"
- **Twee lege oplossingen.** Bankmanager 2 (`:498-500`, Essential) en SpaceCommand (`:596-598`,
  Final Essential) hebben een `Oplossing`-callout zonder inhoud. De student krijgt een knop die
  een leeg paneel opent. Voorstel: uitschrijven, of de callout weglaten tot er een oplossing is.
- **SpaceCommand spreekt zichzelf tegen.** De base stats "blijven conceptueel vast" (`:522`), maar
  `PimpMijnSchip` zet ze op 100 (`:573-574`). "Statics" in de doelstelling (`:506`) is leerstof
  van H11; hier gaat het enkel om static methoden in `Program.cs`. Er is geen regel voor
  gelijkspel (1,1% van de eerste gevechten).
- Kleinere dingen: `_lengte` als voorbeeldnaam (`:22`) volgt de conventie van het boek niet (de
  oplossing gebruikt terecht `lengte`). "instantievariable" (`:215`). "Tot welke level wilt u
  leveren?" (`:427`): het is "levelen", en de lus verhoogt het level zoveel keer, ze gaat niet "tot"
  een level. "Controleer steeds of 1 of beide ... niet null zijn" (`:298`) is een dubbele ontkenning.

## 2. Wat sterker kan

- **Exception handling echt laten oefenen.** De callout bovenaan (`:1-3`) zegt dat er geen aparte
  oefeningen zijn en dat de student zelf een plek zoekt. In de praktijk doet geen enkele oplossing
  dat, en `try`/`catch`, de volgorde van catch-blokken, `e.Message`, `finally` en de plaats van de
  `try` komen nergens terug. Bestaande oefeningen die zich ervoor lenen: de invoer van de zes
  base-stats in de Pokémontester (`:279`, `FormatException`), Battle (`:298`, zie sectie 1) en de
  null-check van SpaceCommand (`:559`: "toon een foutmelding en stop" wordt `throw` plus een
  `catch` in Main). Nieuwe oefeningen in sectie 4.
- **Pokémon opsplitsen in drie oefeningen**: "Pokémon" (de klasse), "Pokémontester" en
  "Pokémon-battler", elk met een eigen Oplossing en Coach-knop. Nu is het één oefening van 170
  lijnen met `##`-, `###`- en `####`-koppen (`:149`, `:164`, `:175-248`, `:254`, `:283-306`) die de
  inhoudsopgave vullen, en één oplossing voor alles helemaal onderaan. Neem de automatische ankers
  van de bestaande titel over.
- **Pokémontester, de namespace-stap** (`:277`) is de enige plek waar namespaces geoefend worden,
  en ze vraagt het omgekeerde van de leerstof. Voorstel: eerst de namespace laten staan en de rode
  kronkel oplossen via het lampje (`using` bovenaan, of de volledige naam), pas daarna de
  namespace aanpassen. Dan zie je beide opties uit `content/9_meminoop/namespaces.md:50-53`.
- **Pokémon-battler: null ook echt tegenkomen.** Nu schrijft de student een null-check voor een
  situatie die nooit voorkomt. Laat hem in Main `Battle(poke1, null)` oproepen, eerst zonder
  `try` (en de exception lezen), dan met.
- **Kleur mixer is de beste H10-oefening op de pagina, maar stopt te vroeg.** Laat na de menging
  ook `k2` tonen met de vraag "Wat verwacht je?", en voeg een deel 2 toe: `Kleur Meng(Kleur andere)`
  die een nieuwe kleur teruggeeft en beide laat staan. Zo komt ook "objecten als resultaat" uit
  `6b_objectenenmethoden.md:79` aan bod. Plus een callout "Les uit deze oefening" over welk object
  verandert.
- **Bankmanager 2: toon het effect.** De opgave vraagt geen Main en geen uitvoer, dus de student
  ziet nooit dat de rekeningen in Main veranderd zijn. Voorstel: balans voor en na tonen, met de
  vraag waarom dat werkt (by reference). Zeg er ook bij dat `Balans` read-only is en de 50 via
  `StortGeld` moet (de coach-data weet het, de opgave niet), en dat de property `NaamKlant` heet.
  Link naar BankManager in `oefeningen/9_klassen/B_practica.md:8`.
- **SpaceCommand: `s3 = s1` hoort bij de kern, niet bij de extra uitdaging** (`:591-594`). Het is
  de enige plek op de pagina waar de `=`-operator bij objecten geoefend wordt, en de opgave zegt
  zelf dat wie Pokémon deed, ze mag overslaan (`:506`). Voorstel: die zin weg, `s3 = s1` als stap 8
  met een tekening van stack en heap, en `IsKapot` en `Onderhoud()` in het scenario gebruiken
  (nu worden ze gemaakt maar nooit opgeroepen). `SimuleerGevecht` weigert een schip dat kapot is
  met een exception.
- **Voorbeelduitvoer ontbreekt** bij Meetlat, Bankmanager 2 en SpaceCommand. Bij Meetlat is dat op
  een Belgische pc `2 meter is 6,5616 voet.` (geverifieerd met dotnet).
- **Geen enkele callout "Les(sen) uit deze oefening"** op de pagina. Minstens bij Kleur mixer,
  Bankmanager 2 en SpaceCommand, telkens over wat er in de heap gebeurt.

## 3. Wat weg kan (of verhuist)

- **Meetlat** is een zuivere H9-oefening (write-only en read-only properties) en raakt niets van
  H10. Ofwel naar `oefeningen/9_klassen/B_practica.md`, ofwel hier laten als opwarmer zonder label.
  Verhuist ze, pas dan ook `oefeningen/11_advancedklassen/A_practica3.md:4` aan ("uit het vorige
  hoofdstuk").
- **De uitleg rond Pokémon inkorten**: de disclaimer (`:145-147`), de enum-tip (`:195-197`) en
  "Meer info" (`:306-307`) mogen weg of samen in één zin. Het deel over properties blijft, want H11
  bouwt erop verder (`oefeningen/11_advancedklassen/A_practica3.md:280`).
- **SpaceCommand, deel 1 afslanken.** Het is een kopie van de Pokémon-klasse met andere namen. Hou
  enkel wat het scenario nodig heeft, zodat het gewicht op deel 2 en 3 ligt (referenties, null,
  exceptions). Dan hoeft niemand ze meer over te slaan.

## 4. Gaten: kansen voor nieuwe oefeningen

Niet geoefend vandaag: de `=`-operator bij value types tegenover reference types, een value type
als parameter, stack en heap tekenen, de GC, `string` als immutable type, `return null`, `?.`,
`try`/`catch` met meerdere blokken, `e.Message`, `finally`, de plaats van de `try`, `using`. De
drie Steven-opdrachten staan in de leerstof, niet bij de oefeningen. Alle voorstellen gebruiken de
Pokémon-klasse.

1. **Wie wijst naar wie?** (*Essential*, voorspel de uitvoer). Een korte `Pokemon`-klasse staat in
   de opgave. Daaronder lijnen als `Pokemon b = a; b.Naam = "Raichu";`, `int lvl = a.Level; lvl++;`,
   een methode die de naam van een meegegeven Pokémon wijzigt, een methode met een `int`-parameter,
   een methode die de parameter een nieuw object geeft (`p = new Pokemon();`) en
   `a.Naam.ToUpper();` zonder toekenning. Eerst op papier de uitvoer en een tekening van stack en
   heap, dan uitvoeren. Traint het hele eerste deel van het hoofdstuk. Afsluiten met de vraag
   welke objecten de GC na de laatste lijn mag opruimen.
2. **Stevens reservekopie** (*Essential*, zoek de fout). Steven wil een back-up van zijn Pokémon
   voor een riskante training: `Pokemon reserve = mijnPoke;`, daarna tien keer `VerhoogLevel`, en
   hij verwacht dat `reserve` op het oude level staat. Tweede fout in dezelfde code: zijn `Battle`
   vraagt `poke2.Average` op vóór de null-check, en hij roept ze op met een tegenstander die nog
   `null` is. De compiler vindt geen van beide. Traint referenties en NullReferenceException.
3. **Kies je starter** (*Essential*). `static Pokemon KiesStarter(string naam)` in `Program.cs`
   maakt een Bulbasaur, Charmander of Squirtle met de juiste base-stats en geeft die terug. Voor
   elke andere naam komt er `null` terug. Main vraagt opnieuw tot er een geldige starter is en toont
   `gekozen?.Naam`. Traint een object als returnwaarde, `return null`, de null-check en `?.`. Geen
   arrays van objecten nodig.
4. **Pokédex-invoer die niet crasht** (*Essential*). Bouwt verder op de Pokémontester. Letters,
   een kommagetal of een getal van twaalf cijfers mogen het programma niet stoppen: een aparte
   `catch` voor `FormatException` en `OverflowException`, `catch (Exception e)` laatst met
   `e.Message`. De set van `HP_Base` werpt zelf een Exception op bij een waarde buiten 1-255, en
   Main vangt die op. Twee versies: één `try` rond de zes vragen (één fout en je begint opnieuw)
   en een `try` per vraag in een lus met een `bool` (enkel die ene waarde opnieuw). Zonder `break`
   (boete). Traint de hele exception-leerstof plus `waarplaatsen.md`.
5. **Waar staat de try?** (voorspel de uitvoer). Een toernooi van drie gevechten in een lus, het
   tweede met een `null`-Pokémon. Drie versies: geen `try`, een `try` rond de hele lus, een `try`
   in de lus, telkens met een `finally` die "Arena opgeruimd" toont. Welke uitvoer hoort bij welke
   versie? Traint `finally` en de plaats van de `try`.
6. **Arena-stopwatch** (bonus). Tijd 10 000 gevechten met `Stopwatch`. Die klasse is onbekend tot
   de student via het lampje `using System.Diagnostics;` toevoegt, of de volledige naam schrijft.
   Traint `using` en ontbrekende namespaces terugvinden.

## 5. Voorgestelde volgorde

Meetlat (opwarmer, of naar H9) → Kleur mixer → Wie wijst naar wie? → Pokémon (de klasse) →
Kies je starter → Pokémontester → Pokédex-invoer die niet crasht → Pokémon-battler →
Waar staat de try? → Stevens reservekopie → Bankmanager 2 → SpaceCommand (Final Essential) →
Arena-stopwatch (bonus)

Nu komt na Kleur mixer meteen de grootste oefening van het hoofdstuk, en daarna met Bankmanager 2
een kleine stap terug. Met deze volgorde komen de H10-onderwerpen één voor één, en blijft
Pokémon in dit hoofdstuk staan voor H11.

## 6. Nevenvondsten

- **Coach-data** `oefeningen/_coach/10_meminoop.md:146`: "waarom TotaleKracht 0 blijft" klopt
  niet. Bij 0 ervaring is `TotaleKracht` de helft van de schildkracht; wat wegvalt is de
  vuurkracht. Regel `:136` ("voegt weinig toe, vraag dat eerst") moet mee als SpaceCommand de
  kernoefening wordt. En de coach beoordeelt Battle strenger (`:109`) dan de modeloplossing doet.
- **Coach-data, "Kent al"** (`:43-44`) somt de volledige exception-leerstof op, maar geen enkele
  oefening vraagt ernaar. Moet mee met de nieuwe oefeningen, net als de titels bij een splitsing
  van Pokémon.
- `content/9_meminoop/6b_objectenenmethoden.md:41`: `ConsoleColor.Pink` bestaat niet, dat voorbeeld
  compileert niet (`Magenta`). `GenereerRandomMeting` (`:84`) is niet willekeurig, ze verdubbelt.
- `content/9_meminoop/6b_objectenenmethoden.md:7` zegt enkel dat objecten "by reference" meegaan.
  Dat een methode die haar parameter een nieuw object geeft niets verandert voor de aanroeper,
  staat nergens, terwijl de coach-data het als valkuil gebruikt (`_coach/10_meminoop.md:148`) en
  oefening 1 uit sectie 4 erop rekent. Eén alinea met een tekening volstaat.
- `content/9_meminoop/nullreference.md`: `stud1.Name` (`:30`, `:69`, `:76`) naast `stud1.Naam`
  (`:7`), en drie keer een ontbrekende `;` (`:59`, `:69`, `:76`). Het eerste voorbeeld (`:6-10`)
  geeft een compileerfout voor een niet-toegekende lokale variabele (CS0165), geen `null` tijdens
  de uitvoer. De tekst suggereert het tweede.
- `content/9_meminoop/zieverder.md:5-12`: de terugblik en "de kern op een rij" vermelden exception
  handling niet, terwijl dat de helft van het hoofdstuk is.
- `content/20_exceptions/waarplaatsen.md`: de voorbeelduitvoer (`:59`, `:89`) toont "gedownload!",
  de code (`:30`, `:76`) schrijft "gedownload. Resultaat: ...". De tip op `:8` belooft arrays van
  objecten, het voorbeeld is een `string`-array.
- `oefeningen/11_advancedklassen/A_practica3.md:459-460` en `:473` herhalen de fouten van de
  Pokémon-oplossing (`HP_base`, `Attack_base`, Battle op base-stats). Samen aanpassen.
- De afbeelding `oefeningen/assets/6_klassen/pokemon.png` vermeldt `Speed_Base` twee keer, en de
  rode pijl loopt over `Attack_Full`.
- `content/9_meminoop/kennisclips.md:20` linkt naar de oude oefeningen op apwt.gitbook.io. Dat
  staat in 18 `kennisclips.md`-bestanden.
