# H6: Herhalingen

> **Beslist door Tim (2026-09-11), zie README:** `break` mag voortaan bij zoek-en-stop (het boeteblad is
> aangepast). Pas de melding bovenaan week 1 en de coach-data daaraan aan. De oefening "Zonder break"
> uit sectie 4 gaat dan over een `while (true)` met `break` en over `continue`, niet over zoek-en-stop.
> De tegenspraak tussen leerstof en boeteblad uit sectie 6 is opgelost.

Bronnen: `oefeningen/6_herhalingen/A_practicasamen.md` (week 1), `oefeningen/6_herhalingen/A_practicasamen2.md`
(week 2), `oefeningen/_coach/6_herhalingen.md`, `content/5_herhalingen/` (`0_loops_intro.md`,
`1_while_dowhile.md`, `2_for.md`, `3_nesting.md`, `zieverder.md`), `content/B_appendix/boete.md`, de afbeelding
`oefeningen/assets/neotim.png`, `oefeningen/opmaak.html` en `scripts/coach-prompt.mjs` (voor hoe `#` en `##` verwerkt
worden), vluchtig `oefeningen/5_beslissingen/a_practica.md` en het begin van `oefeningen/7_methoden/b_practicasamen.md`.

Getest met dotnet 10 in een scratchproject: twee nullen, RNA, Boekhouder, BeerSong, harmonische reeks, Casting Call,
Tekenen, Armstrong, Helm's Deep, Euler, de sommen, kleinste getal, aantal digits, priemgetallen, de reeksen, tafels
horizontaal, en een switch met twee cases die dezelfde variabele declareren.

Controle op de verboden leerstof: geen enkele oplossing gebruikt `break` of `continue` in een lus, en ook geen methoden
of arrays. Wel een `while (true)` zonder uitweg in Wiskunde-quizprogramma en Become Neo (zie 2.4).

## 1. Fouten die sowieso weg moeten

- **Loops-a-volonté en Cooldown zitten verstopt in De Casting Call.** `oefeningen/6_herhalingen/A_practicasamen.md:641`
  en `:755` zijn `##`-koppen. `opmaak.html` maakt enkel van een `#` een oefening, dus die twee reeksen (14
  deeloefeningen) belanden in het uitklapblok van de Casting Call, onder de Final Essentials van de week. De Coach-knop
  van de Casting Call neemt die hele tekst ook mee in zijn prompt; de coach-data vangt dat nu op met een nota
  (`oefeningen/_coach/6_herhalingen.md:162`). Voorstel: twee eigen `#`-oefeningen met een anker, vóór de Casting Call
  (zie sectie 5).
- **Twee nullen na elkaar: de oplossing stopt al na één nul.** `oefeningen/6_herhalingen/A_practicasamen.md:247-255`.
  Bij de eerste nul wordt `vorigeNul9` 1, en de lusvoorwaarde test meteen `getal9 == 0 && vorigeNul9 == 1`. Invoer 5,
  0, 3, 0, 0 geeft "Gemiddelde: 5" en de 3 wordt nooit gevraagd (geverifieerd met dotnet). Een losse nul midden in de
  reeks telt bovendien nooit mee, terwijl de opgave (`:237`) enkel de twee slotnullen uitsluit. De vlag is een `int`
  met 0 en 1 in plaats van een `bool`. Voorstel: elke invoer meetellen, stoppen wanneer de huidige én de vorige invoer
  nul zijn (`bool vorigeWasNul`), en op het einde 2 van het aantal aftrekken. Nullen veranderen de som niet.
- **RNA Transscriptie: de melding liegt, en de namen kosten punten.** `oefeningen/6_herhalingen/A_practicasamen.md:421-424`:
  bij foute invoer verschijnt "We stoppen ermee." en wordt `inp = "stop"`, maar de lus test enkel `teller < 12` en
  loopt gewoon verder. Eén foute letter tussen twaalf invoeren geeft een RNA-string van 11 tekens (geverifieerd met
  dotnet). `:397`: `DNA` en `RNA` zijn geen camelCase (boete -2), `inp` is geen duidelijke naam. De inleiding `:382`
  zegt "DNA is het gevolg van RNA transscriptie": het is omgekeerd, RNA ontstaat door transcriptie van DNA. En
  transcriptie schrijf je met één s (titel aanpassen, anker laten staan). Voorstel: bij foute invoer opnieuw vragen
  zonder de teller te verhogen. Dan telt de teller enkel geldige letters, en dat is een mooiere les dan stoppen.
- **Hoger Lager: de oplossing mist twee dingen uit de opgave.** `oefeningen/6_herhalingen/A_practicasamen2.md:78` vraagt
  op het einde het aantal beurten en de mogelijkheid om opnieuw te spelen. De oplossing (`:84-111`) doet geen van
  beide. Voorstel: het aantal beurten in de oplossing, en "opnieuw spelen" als een apart **Deel 3** (een do while rond
  het spel, dus een geneste lus). Verder: `guessed` wordt ook `true` als de speler opgeeft (`:100`), dus `spelGedaan`
  is een eerlijkere naam. De namen mengen Engels en Nederlands (`guessed`, `tries`, `MAXTRIES` naast `teRadenGetal`,
  `antwoord`), wat de boete "niet consistent" oplevert. Deel 2 (`:118`) is een losse zin zonder `**Deel 2.**`. Met
  `MAXTRIES = 3` (`:127`) op 1 tot 100 win je bijna nooit; met 7 kan het altijd, en "waarom net 7?" is een leuke
  denkvraag.
- **Wiskundequiz en levels: het bereik klopt niet met de opgave.** `oefeningen/6_herhalingen/A_practicasamen2.md:167`
  zegt 1 tot en met 10, `:178-179` gebruikt `rng.Next(1, 10)`, dus 10 komt nooit. De coach-data noemt net dat als
  valkuil (`oefeningen/_coach/6_herhalingen.md:219`). Bij de levels vraagt de opgave (`:200`) level 1 van 1 tot 5,
  level 2 tot 10, level 3 tot 20. De oplossing (`:209`, `:213-214`) start op level 0 met 1 tot 9, daarna 1 tot 19 en 1
  tot 29. De PRO-vraag (`:238`: het bereik met een formule berekenen) beantwoordt de oplossing al. Voorstel: de opgave
  geeft zelf een formule (bv. bovengrens `5 * level`, level start op 1), de oplossing volgt die, en de PRO-vraag wordt
  iets anders (bv. een level zakken bij een fout in plaats van stoppen). Ook de studeermodus heeft `Next(1, 10)`
  (`:297-298`).
- **Boekhouder: crasht bij meteen q, en het eindgemiddelde is een gehele deling.**
  `oefeningen/6_herhalingen/A_practicasamen2.md:68` doet `somTotaal / teller` zonder cast en zonder test op nul. Wie
  meteen q typt, krijgt een `DivideByZeroException`. Met 4, -10, 8 toont de lus 0,666... en het eindrapport 0
  (geverifieerd met dotnet). De coach-data waarschuwt voor allebei (`oefeningen/_coach/6_herhalingen.md:188-189`), de
  oplossing trapt erin. Typfout "Gemiddel".
- **Steen schaar papier: opgave en oplossing spreken elkaar twee keer tegen.** De opgave laat Random van 1 tot en met 3
  lopen (`oefeningen/6_herhalingen/A_practicasamen2.md:355`), de oplossing doet `Next(0, 3)` (`:386`), wat bij een enum
  net juist is. De opgave speelt tot 10 punten (`:363`), de oplossing tot `MAXSCORE = 5` (`:380`). Voorstel: de opgave
  aanpassen (0 tot en met 2, met de uitleg dat een enum bij 0 begint) en één winstgrens kiezen. "Ik koos ..." verschijnt
  twee keer per ronde (`:387` en `:413`/`:418`). `userWins` staat tussen Nederlandse namen.
- **BeerSong: de uitvoer verschilt van het voorbeeld.** `oefeningen/6_herhalingen/A_practicasamen2.md:606` schrijft
  "bottles of beers", 97 keer. Het voorbeeld heeft een lege lijn na elke strofe, de oplossing geen enkele: 200 lijnen,
  0 lege (geverifieerd met dotnet).
- **"Oneindige lus" voor een lus die stopt.** De Casting Call (`oefeningen/6_herhalingen/A_practicasamen.md:581`) en
  Helm's Deep (`oefeningen/6_herhalingen/A_practicasamen2.md:627`) vragen "in een oneindige lus", en stoppen op STOP en
  EINDE. Het boek noemt een oneindige loop net een loop die nooit stopt, en dit een sentinel loop
  (`content/5_herhalingen/0_loops_intro.md:57-58`). Wie de opgave letterlijk neemt, schrijft `while (true)` en heeft dan
  `break` nodig. Voorstel: "blijft vragen tot de gebruiker STOP intypt".
- **Euler project:** "De som van deze 4 getallen is 33" (`oefeningen/6_herhalingen/A_practicasamen.md:553`), maar 3, 5,
  6, 9 en 10 zijn er vijf. De som klopt (geverifieerd met dotnet). Vermeld dat het origineel "onder 1000" vraagt: wie
  de site bekijkt, ziet daar 233168.
- **Kleinere dingen:**
  - Harmonische reeks: het voorbeeld (`oefeningen/6_herhalingen/A_practicasamen.md:807`) toont `Som = 2.283334`, de
    oplossing geeft `2,283333333333333` (geverifieerd met dotnet). De afronding in het voorbeeld is fout, en het
    decimaalteken hangt van de computer af. Voorstel: `{som:F6}` in de oplossing en `2,283333` in het voorbeeld.
  - Factoren (`:681`): "ontbinden in factoren" is priemfactorisatie (100 = 2·2·5·5). Wat de opgave beschrijft en de
    oplossing toont, zijn delers. Er ontbreekt ook "dat" in de zin. Voorstel: "Toon alle delers van *n*", link weg.
  - De Casting Call: meteen STOP geeft "De rol gaat waarschijnlijk naar  met een topscore van -1/10!" (geverifieerd met
    dotnet). Een teller van kandidaten en een `if` erbij. Typfout "maximun" (`:596`).
  - Helm's Deep: "met 2 cijfers na de komma" (`oefeningen/6_herhalingen/A_practicasamen2.md:650`), maar `Math.Round(..., 2)`
    (`:755`) toont "50%" (geverifieerd met dotnet). `{...:F2}` is gezien in H3. Het eindrapport staat in een andere
    volgorde dan de opgave. De opgave zegt niet wat er bij een vierde kill op rij gebeurt; de oplossing geeft bonus bij
    3, 6, 9. Schrijf dat in de opgave.
  - Schaak-elo met loop: `Random rng` (`oefeningen/6_herhalingen/A_practicasamen.md:506`), `eb` (`:517`) en `puntB`
    (`:522`) worden aangemaakt maar nooit gebruikt: onnodige code in een modeloplossing.
  - Week 2 begint met "de vorige 2 delen oefeningen" (`oefeningen/6_herhalingen/A_practicasamen2.md:4`): er is er één.
  - Bovenaan week 1 staan vier losse callouts (`oefeningen/6_herhalingen/A_practicasamen.md:3-19`), bovenaan week 2
    één (`oefeningen/6_herhalingen/A_practicasamen2.md:3-9`). Samenvoegen in een `::: {.vooraf}`, met het verbod op
    `break`/`continue` als `[Let op]{.let-op}`.

## 2. Wat sterker kan

- **Laat de oplossingen doen wat de pagina predikt.** Tekenen (`oefeningen/6_herhalingen/A_practicasamen2.md:326-336`)
  controleert de invoer met een `while` en een kunstmatige beginwaarde 0, precies de vorm die het boek afraadt
  (`content/5_herhalingen/1_while_dowhile.md:295-306`: "Moet je code sowieso minstens één keer lopen, kies dan een do
  while"). Tafels van vermenigvuldigen 1 (`oefeningen/6_herhalingen/A_practicasamen.md:352-360`) gebruikt een `while`
  met teller, terwijl de waarschuwing bovenaan dezelfde pagina (`:10`) zegt dat een `for` dan de beste keuze is. Beide
  omzetten.
- **Priem: de oefening waar het vlagpatroon thuishoort.** De priemtest heeft enkel een video als oplossing
  (`oefeningen/6_herhalingen/A_practicasamen.md:694-698`). De priemlijst (`:704-714`) blijft alle delers testen, ook
  als al gebleken is dat het getal geen priem is. De coach-data noemt dat als valkuil
  (`oefeningen/_coach/6_herhalingen.md:176`). Het boek toont de oplossing zonder `break`: de bool mee in de
  lusvoorwaarde (`content/5_herhalingen/3_nesting.md:190-207`), hier `for (int j = 2; j < i && isPriem; j++)`. Code in
  de oplossing van de priemtest, en een callout "Les" die uitlegt waarom dit de nette vervanger van `break` is.
- **Codemenu: waarschuw voor de scope van een switch.** Wie vijf oefeningen in de cases plakt, krijgt
  `CS0128: A local variable or function named 'getal' is already defined in this scope` zodra twee ervan dezelfde
  naam gebruiken. Alle cases van een switch delen één scope (geverifieerd met dotnet). Dat overkomt bijna iedereen.
  Voorstel: een tip (accolades rond de code van een case) en een callout "Les" die vooruitblikt: een `Main` van 300
  lijnen is precies waarom methoden het volgende hoofdstuk zijn. "wordt de code van die oefening getoond" (`:444`) is
  dubbelzinnig: bedoeld is uitgevoerd. Codemenu hoort vóór Wiskunde-quizprogramma, dat ernaar verwijst (`:242`).
- **Wiskunde-quizprogramma: de studeermodus is een `while (true)` in een `else` in een `do while`**
  (`oefeningen/6_herhalingen/A_practicasamen2.md:293-302`). Het werkt, maar de enige uitweg is het venster sluiten, en
  wie de code leest, ziet niet dat de buitenste lus in modus 3 niets meer doet. Het gekozen level wordt er ook
  genegeerd. Voorstel: de studeermodus toont 10 opgaven (een `for`), en de oplossing zet een `if`/`else` rond twee
  aparte lussen.
- **Opwarmers van opwarmers: naam en inhoud.** De titel belooft iets makkelijkers dan Opwarmers 1, maar hier staan de
  moeilijkste deeloefeningen van de week (kleinste met teller, twee nullen, sorteerfout). De laatste vijf
  (`oefeningen/6_herhalingen/A_practicasamen.md:264-342`: kwadraten, 100 getallen, twaalf reeksen) hebben niets met een
  afsluitwaarde te maken. Voorstel: hernoemen naar "Afsluitwaarden" (anker behouden), de for-deeloefeningen naar
  Loops-a-volonté, en 100 getallen terugbrengen naar 10: honderd keer typen om één keer te testen is een straf.
- **Geen enkele callout "Les" in het hele hoofdstuk.** H5 heeft er wel. Kandidaten: Opwarmers 1 (off-by-one, `<`
  tegenover `<=`), Afsluitwaarden (waarom een do while, en de afsluitwaarde niet meetellen), Priem (vlag in plaats van
  `break`), Codemenu (scope, naar methoden), Hoger Lager deel 2 (twee uitgangen, en na de lus met een `if` uitzoeken
  welke het was, zoals `content/5_herhalingen/1_while_dowhile.md:93` uitlegt).
- **Voorbeelduitvoer bij de grote opgaven.** Boekhouder, Hoger Lager, De Casting Call en Helm's Deep hebben er geen.
  Een beginner weet dan niet wanneer hij klaar is. Bij Helm's Deep, dat kleuren vraagt, past een `.console .kleur`-blok.
- **Tekenen wordt Essential.** Het is de enige oefening met een raster waarin de student zelf kiest tussen `Write` en
  `WriteLine` en een randvoorwaarde met `||` bedenkt, plus invoercontrole. Tafels van supervermenigvuldigen toont één
  product per lijn en oefent dat niet.
- **Armstrong: de tip kiest de omslachtige weg.** De tip (`oefeningen/6_herhalingen/A_practicasamen.md:448-455`) pelt
  de cijfers van links af met machten van 10 en `.Length`. Het klassieke `% 10` en `/ 10` staat al in "aantal digits"
  (`:744-748`). Voorstel: de tip laat eerst de cijfers tellen zoals in die oefening, en pelt ze daarna van rechts af
  met `% 10`. Zo hangt de PRO vast aan de rest, en `IsArmstrong` in H7 bouwt erop verder.
- **De fragmenten moeten los kunnen staan.** Fibonacci (`oefeningen/6_herhalingen/A_practicasamen.md:722`), tafels
  horizontaal (`:792`) en de harmonische reeks (`:812`) doen `n = int.Parse(...)` zonder `int`: ze komen uit één groot
  programma en compileren niet als je ze los overneemt. Daaruit komen ook de genummerde namen (`som5`, `som6`,
  `getal7`, `temp2`, `aantalPos3`). Gewoon `som`, `getal`, `aantal`. Ook de bladspiegel: `Console.Write("n? "); int n = ...`
  op één lijn (`:651`, `:672-673`, `:704`, `:739`) en `for`/`if` zonder accolades in de Opwarmers, terwijl het boek zelf
  overal accolades zet. Een student die dat overneemt, voegt er een tweede lijn aan toe en ziet ze buiten de lus vallen.

## 3. Wat weg kan (of verhuist)

- **De reeksen** (`oefeningen/6_herhalingen/A_practicasamen.md:295-342`): twaalf reeksen in twee blokken, op 30 en op 20
  termen. Na de tweede reeks is het wiskunde, geen lusoefening meer. Eén blok van vier houden (rekenkundig, meetkundig,
  1/2^n, 1/(2n-1)).
- **Cooldown:** na een Final Essentials heeft een cooldown weinig zin. "Machten tot 5 van *n*" (`:769`) is
  Opwarmers-niveau, "gemiddelde tot -1" (`:839`) herhaalt een Afsluitwaarden-oefening en de Boekhouder. Wat overblijft
  (veelvoud van 3 en oneven, 9+99+999, harmonische reeks) gaat naar Loops-a-volonté; tafels horizontaal wordt deel 2
  van Tafels van supervermenigvuldigen.
- **Schaak-elo met loop** bouwt op de PRO-oefening Schaak-ELO uit H4 (`oefeningen/4_data/A_Practica.md:355`). Wie die
  oversloeg, kan hier niet mee. Achter de Final Essentials, als bonus.
- **Become Neo:** leuk, maar met één `if`-keten in een bewust oneindige lus is het een H5-oefening. Als bonus achteraan
  week 2. De afbeelding (`oefeningen/assets/neotim.png`, pixel-Tim met zonnebril) is enkel decoratie; niets mis mee.

## 4. Gaten: kansen voor nieuwe oefeningen

Het hoofdstuk heeft geen enkele oefening waarin de student code leest, terwijl de leerstof expliciet leert tracen. Ook
drie valkuilen waar de leerstof lang bij stilstaat, komen in geen enkele oefening terug: De Morgan bij invoercontrole,
de inner loop die van de outer afhangt, en een deftige stopvoorwaarde in plaats van `break`.

1. **Trace de teller** (*Essential*). Vijf korte lussen: eerst op papier een tabel (teller bij de test, uitkomst van de
   test, wat er op het scherm komt), pas daarna uitvoeren. Kandidaten: een `while` met `teller++` vóór de `WriteLine`,
   een `do while` die eerst `i--` doet, een `for` met `i -= 4`, een `int som = 0` binnen de lus, een geneste lus waar de
   reset van de binnenste teller ontbreekt, en "hoeveel keer verschijnt Hallo?" bij twee geneste `for`s. Traint: tracen
   (`content/5_herhalingen/1_while_dowhile.md:49`), off-by-one, scope, geneste lussen tellen. Andere code dan de twee
   blokken "Test jezelf" in de leerstof, anders staat het antwoord al in het boek.
2. **Stevens menulus** (*Essential*). Steven liet een A.I. een menu schrijven dat blijft vragen tot de gebruiker a, b of
   c typt. Het draait eeuwig: `while (keuze != "a" || keuze != "b" || keuze != "c")` is altijd waar. Er staat ook een
   puntkomma achter een `while`-header, en `string keuze` wordt binnen de accolades van een `do while` gedeclareerd,
   waardoor de test achteraan niet compileert. Deel 1: voorspel wat er gebeurt, deel 2: herstel. Traint: De Morgan (het
   boek noemt dat "de plek waar het bij velen fout loopt", `content/5_herhalingen/1_while_dowhile.md:235-277`), de
   puntkomma-tabel (`content/5_herhalingen/2_for.md:189-194`) en de scope van een `do while` (`1_while_dowhile.md:308-312`).
3. **Zonder break** (*Essential*). Stevens A.I.-code telt getallen op tot 0 en slaat negatieve over, met `while (true)`,
   een `break` en een `continue`. Herschrijf ze met dezelfde uitvoer, zonder die twee keywords. Traint: de stopreden in
   de lusvoorwaarde zetten (`content/B_appendix/boete.md:66-72`). Realistisch ook: code van een A.I. staat vol `break`.
4. **Sterrenpatronen** (*Essential*). De gebruiker geeft een hoogte; toon een omgekeerde driehoek, een rechts
   uitgelijnde driehoek (eerst spaties, dan sterren) en als PRO een piramide. Traint: de inner loop die de teller van
   de outer loop gebruikt (`content/5_herhalingen/3_nesting.md:151-180`) en `Write`/`WriteLine` op de juiste plaats.
   Vandaag zijn alle geneste oefeningen rechthoekig. De gewone driehoek staat al in de leerstof, dus begin bij de
   omgekeerde.
5. **Kies de loop**. Acht korte situaties (wachtwoord vragen tot het juist is, 12 maanden overlopen, aftellen van 10,
   dobbelen tot zes, een menu dat minstens één keer verschijnt, ...): per situatie `for`, `while` of `do while`, met één
   zin waarom. Traint: de keuze uit `content/5_herhalingen/0_loops_intro.md:79-92` en het schema in
   `content/5_herhalingen/zieverder.md:23-25`. Kort en zonder code. Geen Essential.
6. **Lijnen in volgorde**. De lijnen van "gemiddelde tot de gebruiker 0 typt" door elkaar, met één indringer (een
   tweede `int som = 0;` of een `break;`). Zet ze in de juiste volgorde en zeg welke lijn er niet thuishoort. Traint: waar
   de declaratie, het inlezen en het verwerken staan. Geen Essential.

## 5. Voorgestelde volgorde

**De verdeling over de weken.** Vandaag telt week 1 negen `#`-oefeningen met zo'n veertig deeloefeningen (waarvan 14
onzichtbaar, zie 1), week 2 elf oefeningen. De gedachte erachter is goed: week 1 drilt, week 2 bouwt programma's.
Alleen loopt de grens niet gelijk met de leerstof. Geneste lussen zijn het laatste deel van het hoofdstuk, maar de
geneste Essential (Tafels van supervermenigvuldigen) staat in week 1, terwijl Tekenen in week 2 staat en geen
Essential is. Boekhouder is dan weer een oefening met één lus en een afsluitwaarde, en past beter in week 1. Voorstel:
week 1 is één lus (`for`, `while`, `do while`, afsluitwaarden, zonder `break`), week 2 zijn geneste lussen en grotere
programma's. Loopt de les anders, dan blijft de volgorde binnen elke week bruikbaar.

**Week 1** (`oefeningen/6_herhalingen/A_practicasamen.md`):
Opwarmers 1 → Trace de teller → Tafels van vermenigvuldigen 1 → Euler project → Kies de loop → Afsluitwaarden (nu
Opwarmers van opwarmers) → Lijnen in volgorde → Zonder break → Stevens menulus → Boekhouder → Loops-a-volonté (zonder
de priemgetallen) → RNA Transcriptie → De Casting Call (Final Essentials) → Schaak-elo met loop (bonus) → Armstrong
nummer (PRO)

**Week 2** (`oefeningen/6_herhalingen/A_practicasamen2.md`):
Tafels van supervermenigvuldigen (met tafels horizontaal als deel 2) → Sterrenpatronen → Tekenen → Priemgetallen (uit
Loops-a-volonté, met vlag) → Hoger Lager (drie delen) → Wiskundequiz → Wiskundequiz met levels → Codemenu →
Wiskunde-quizprogramma → Steen schaar papier → BeerSong → De slag om Helm's Deep (Final Essentials) → Become Neo
(bonus)

## 6. Nevenvondsten

- **De leerstof en het boeteblad spreken elkaar tegen over `break`.** `content/5_herhalingen/2_for.md:261-263` zegt dat
  `break` oké is bij het zoek-en-stop-patroon. Het boeteblad bestraft in jaar 1 net dat patroon, met een zoekloop als
  FOUT-voorbeeld (`content/B_appendix/boete.md:70` en `:74-84`). Ook `content/5_herhalingen/3_nesting.md:187` ("gebruik
  het enkel als het je code echt leesbaarder maakt") klinkt toegeeflijker dan de opgaven. Een student die de tip volgt,
  verliest punten. Voorstel: in de tip vermelden dat dit pas vanaf het tweede jaar mag.
- **Coach-data** `oefeningen/_coach/6_herhalingen.md`:
  - `:60` beschrijft Opwarmers van opwarmers als "rond invoer met een afsluitwaarde"; dat klopt maar voor de helft (zie 2).
  - `:162` en `:168`: de nota over Loops-a-volonté en Cooldown moet weg zodra die eigen oefeningen worden. Dan hebben ze
    elk een eigen sectie nodig, net als de nieuwe oefeningen uit sectie 4 (met een `### Nota` dat de coach bij de
    code-lees-oefeningen nooit het antwoord geeft).
  - `:190` "Het getal nul bij de positieve of de negatieve som rekenen": nul bij een som optellen verandert niets. Dat
    is enkel een valkuil wanneer je aantallen telt.
  - `:188-189` en `:219` noemen valkuilen waarin de modeloplossingen zelf trappen (zie 1). Na het herstel klopt het weer.
- **H7 sluit mooi aan** als Codemenu en Priem in H6 blijven: `oefeningen/7_methoden/b_practicasamen.md:34-35` vraagt
  `IsArmstrong` en `ToonArmstrongNummers`, en een Codemenu dat in methoden opgesplitst wordt, is een voor de hand
  liggende eerste oefening daar.

---

## Doorgevoerd (2026-09-11)

- **Verdeling volgens sectie 5.** Week 1 (`A_practicasamen.md`) is één lus per oefening: Opwarmers 1 →
  Trace de teller → Tafels van vermenigvuldigen 1 → Euler project → Kies de loop → Afsluitwaarden →
  Lijnen in volgorde → Zonder break → Stevens menulus → Boekhouder → Loops-a-volonté → RNA Transcriptie →
  De Casting Call (Final Essentials) → Schaak-elo met loop (bonus) → Armstrong nummer (PRO). Week 2
  (`A_practicasamen2.md`) zijn geneste lussen en grotere programma's: Tafels van supervermenigvuldigen →
  Sterrenpatronen → Tekenen → Priemgetallen → Hoger Lager → Wiskundequiz → Wiskundequiz met levels →
  Codemenu → Wiskunde-quizprogramma → Steen schaar papier → BeerSong → De slag om Helm's Deep (Final
  Essentials) → Become Neo (bonus). 28 oefeningen, 17 Essential.
- Nieuw: Trace de teller, Zonder break en Stevens menulus (Essential), Sterrenpatronen (Essential, met
  een PRO-deel), Kies de loop en Lijnen in volgorde. Loops-a-volonté en Priemgetallen zijn eigen
  `#`-oefeningen met een anker. Cooldown is weg: veelvoud van 3 en oneven, 9+99+... en de harmonische
  reeks gingen naar Loops-a-volonté, tafels horizontaal werd deel 2 van Tafels van supervermenigvuldigen,
  "machten tot 5" en "gemiddelde tot -1" zijn geschrapt. De reeksen zijn één blok van vier (20 termen),
  "100 getallen" werd 10 getallen.
- Verhuisd tussen de weken: Boekhouder (naar week 1) en Tafels van supervermenigvuldigen (naar week 2).
  Er linkt niets naar hun ankers. Opwarmers van opwarmers heet nu Afsluitwaarden, RNA Transscriptie heet
  RNA Transcriptie; de ankers bleven.
- Sectie 1, alles weg. Keuzes daarbij:
  - Twee nullen: elke invoer telt, stop bij twee nullen na elkaar (`bool vorigeWasNul`), op het einde 2
    van het aantal af. 5, 0, 3, 0, 0 geeft 2,67.
  - RNA: een foute letter wordt opnieuw gevraagd en telt niet mee. De lus draait op `dna.Length`, een
    aparte teller is niet nodig. Namen `dna`, `rna`, `letter`.
  - Hoger Lager: drie delen (beurten tonen, maximaal 7 beurten met de denkvraag "waarom 7", opnieuw
    spelen). Twee bools `geraden` en `opgegeven`, en na de lus een `if` die zegt waarom de lus stopte.
    Opgeven telt niet als beurt. "beurt(en)" in de tekst, want 1 beurten klopt niet.
  - Wiskundequiz: `Next(1, 11)`. Levels: start op level 1, bovengrens `5 * level`. De PRO-vraag is nu:
    een level zakken bij een fout (nooit onder 1), stoppen na 3 fouten.
  - Boekhouder: cast in het gemiddelde, `if` op nul, voorbeelduitvoer, test met meteen `q`.
  - Steen schaar papier: 0 tot en met 2 met de uitleg over de enum, winst op 5 punten in opgave en
    oplossing, "Ik koos" één keer per ronde, `gebruikerWint`. De enum heet `Keuze` en staat apart.
  - BeerSong: "bottles of beer", een lege lijn na elke strofe (299 lijnen, zoals het voorbeeld).
  - Casting Call en Helm's Deep: "blijft vragen tot". Casting Call telt de kandidaten en zegt het als er
    niemand kwam; gelijke score: de eerste blijft de beste. Helm's Deep: F2 voor het percentage, het
    rapport in de volgorde van de opgave, de streakregel (bonus bij 3, 6, 9) in de opgave, en een
    `.console .kleur`-voorbeeld.
  - Euler: 5 getallen, en de vermelding van 233168 voor "onder 1000".
  - Harmonische reeks `{som:F6}` en 2,283333. Factoren heet nu delers, zonder de link.
  - Schaak-elo met loop: geen `rng`, `eb` of `puntB` meer; een onbekende letter telt als gelijkspel,
    zoals in H5.
  - De meldingen bovenaan staan in één `.vooraf` per week.
- Sectie 2: Tekenen (Essential) en de invoercontrole met `do while`, Tafels 1 met `for`, Priemgetallen
  met de `bool` in de lusvoorwaarde en een Les die zegt dat `break` hier ook mag (zoek-en-stop, volgens
  de beslissing van Tim), Codemenu met de tip over CS0128 (letterlijk van dotnet) en een Les die naar
  methoden vooruitblikt, het quizprogramma met een studeermodus van 10 opgaven in een `for`, Armstrong
  met `% 10` en `/ 10`, alle fragmenten los compileerbaar met gewone namen en accolades. Les-callouts bij
  Opwarmers 1, Afsluitwaarden, Zonder break, Stevens menulus, Priemgetallen en Codemenu.
- Coach-data `oefeningen/_coach/6_herhalingen.md` herschreven voor de 28 oefeningen, met de nieuwe
  regel over `break`. De code-lees-oefeningen en de puzzels hebben een `### Nota`.
- Bewust niet:
  - Legolas en Gimli blijven in Helm's Deep staan: het rapport zegt er niets over.
  - Become Neo houdt zijn `while (true)`: de lus is bewust oneindig en heeft geen `break`.
  - De Wiskundequiz met levels is in opgave en oplossing veranderd (bovengrens `5 * level` in plaats
    van 5, 10, 20). Wie een oude oplossing heeft, ziet een ander bereik.
- Gevolg voor H7: `future/oefeningenreview/H07_methoden.md:193` verwijst met regelnummers naar de
  oplossing van Helm's Deep. Die is herschreven (zelfde opbouw, andere namen: `puntenLegolas`, `streak`,
  constanten `BONUS` en `STREAK`) en staat op andere regels.
- Gecontroleerd: elk codeblok van beide pagina's apart gecompileerd met dotnet 10 (enkel de puzzel en
  Stevens tweede versie falen, zoals bedoeld), en de oplossingen uitgevoerd met de invoer uit de
  voorbeelden en de grensgevallen (meteen de afsluitwaarde, 0 als getal, een foute letter, elk pad van
  Hoger Lager met een vaste seed, de level-ups). De foutmeldingen CS0103, CS0128 en de waarschuwing CS0642
  zijn letterlijk van dotnet; dat Stevens eerste menulus stil blijft hangen, is getest met een time-out.
  `quarto render oefeningen/`, het slot-script op een kopie (niets in de zoekindex; de 7 gemelde
  woordgroepen komen uit de code in de opgaven van Zonder break, Stevens menulus en de puzzel), het
  coach-script (15 en 13 knoppen, geen meldingen), en screenshots van beide weken en van Helm's Deep.
