# H8: Arrays

> **Beslist door Tim (2026-09-11), zie README:** `break` mag voortaan bij zoek-en-stop. Het punt over
> `break` in sectie 6 is opgelost; kijk de `break`s in de oplossingen na tegen die regel.

Bronnen: `oefeningen/8_arrays/A_practicasamen.md` (week 1), `oefeningen/8_arrays/A_practicasamenb.md`
(week 2), `oefeningen/_coach/8_arrays.md`, de leerstof uit `_quarto.yml` onder H8
(`content/7_arrays/1_ArraysBasics.md`, `2_ArraysGebruiken.md`, `argsopstart.md`, `arraysgeheugen.md`,
`systemarray.md`, `algoarrays.md`, `stringarray.md`, `3_arrays_en_methoden.md`,
`4_ndimensionalArrays.md`, `zieverder.md`), `content/B_appendix/boete.md`, de afbeelding
`oefeningen/assets/5_arrays/practarray8.png`, vluchtig `oefeningen/7_methoden/b_practicasamenb.md` en
het begin van `oefeningen/9_klassen/intermezzoh9.md`. Alle oplossingen met invoer of twijfel zijn
uitgevoerd met dotnet 10, op een pc met cultuur nl-BE.

## 1. Fouten die sowieso weg moeten

- **Voetbalcoach: de oplossing hoort bij een andere oefening.** `oefeningen/8_arrays/A_practicasamenb.md:634-665`
  vermenigvuldigt twee matrices en roept een methode `MatrixProduct` op die nergens staat. Ze
  compileert niet: `error CS0103: The name 'MatrixProduct' does not exist in the current context`
  (geverifieerd met dotnet). Van rugnummers, P/N of de stopwaarde 99 is geen spoor. Er moet een echte
  oplossing komen: `int[,] acties = new int[12, 2]`, een `do while` tot 99 (zonder `break`), optellen
  met `+=`, daarna per rij het verschil en de hoogste en laagste, met alle spelers die gelijk
  eindigen. In de opgave leest "index 1 (rugnummer -1)" (`:622`) als min één; schrijf "rugnummer
  min 1". De voorbeeldtabel (`:629-632`) staat scheef.

- **Parkeergarage: het voorbeeld laat een Belgische student fout rekenen.** Het voorbeeld typt `1.5`
  in (`oefeningen/8_arrays/A_practicasamenb.md:66`). Op een pc met nl-BE leest `Convert.ToDouble` dat
  als 15: de oplossing rekent dan 8 euro voor die auto en het totaal wordt 20,5 in plaats van 14,5
  (geverifieerd met dotnet). Met `1,5` klopt de berekening, maar de uitvoer is dan `1,5  2` en
  `Totaal 29,5 14,5`, niet `1.5  2.00` en `14.50` zoals in het voorbeeld (`:72-76`). Ook de vragen
  verschillen van het voorbeeld (`:84` met dubbelpunt, `:91` zonder). Voorstel: voorbeeld met
  komma's, en in de oplossing `{duur[i]:F1}` en `{kost:F2}` zodat de tabel er echt zo uitziet.

- **Caesar-encryptie: de oplossing kan niet wat de opgave toont.** Opgave en afbeelding werken met
  hoofdletters (A wordt D) en geven de formule `(oudeIndex + sleutel) % 26`
  (`oefeningen/8_arrays/A_practicasamenb.md:143-146`). De oplossing (`:156-181`) gebruikt die formule
  niet, rekent met de magische getallen 97 en 122 en werkt enkel voor kleine letters: `HELLO` wordt
  `ebiil` en ontcijfert tot `byffi`, en `Hallo, wereld!` komt na versleutelen en ontcijferen niet
  meer terug (geverifieerd met dotnet). Voorstel: enkel letters verschuiven, met `char.IsUpper` en
  `char.IsLower` en `'A'` of `'a'` als basis, en al de rest ongemoeid laten. Geef voor het ontcijferen
  de formule `(index - sleutel + 26) % 26`, want `%` op een negatief getal blijft negatief in C#. Er
  ontbreken ook een `Main` en een voorbeelduitvoer (bv. `hello world` met sleutel 3 wordt
  `khoor zruog`).

- **Fraude Detectie: beide voorbeelden geven fraude.** Het eerste voorbeeld
  (`oefeningen/8_arrays/A_practicasamenb.md:823-837`) geeft al 2 verdachte gelijkenissen en
  FRAUDE ALARM, en toch heet het tweede "Tweede scenario (met fraude)" (`:839`). De tak
  "Geen fraude gedetecteerd." uit de oplossing komt in geen enkel voorbeeld voor. Met `ABCDD` voor
  student 2 in het eerste voorbeeld krijg je 4/5, 1 gelijkenis en "Geen fraude gedetecteerd."
  (geverifieerd met dotnet). Verder crasht de oplossing met een `IndexOutOfRangeException` zodra een
  student minder antwoorden intypt dan de sleutel lang is (geverifieerd met dotnet), terwijl de
  coach-data net dat als valkuil noemt (`oefeningen/_coach/8_arrays.md:325`). Ofwel zegt de opgave
  "ga uit van correcte invoer", ofwel controleert de oplossing de lengte. En de scorelus staat twee
  keer letterlijk in de oplossing (`:867-875` en `:882-890`): een boete "redundante code", op een
  pagina die bovenaan zelf om methoden vraagt.

- **Array Zoeker: het voorbeeld klopt niet met de opgave.** "Voer 10 gehele getallen in" krijgt er 9
  (`oefeningen/8_arrays/A_practicasamen.md:395-404`), en daarna wordt 5 verwijderd, dat niet in de
  lijst staat, terwijl er toch een -1 achteraan verschijnt (`:408`). Volgens opgave en oplossing
  blijft de array dan ongewijzigd. Verder in het voorbeeld: `*********`, "welke getal" en
  `Press any key to continue . . .`. De oplossing leest geen 10 getallen in maar vult met `Random`
  (`:413-422`) en toont de getallen onder elkaar in plaats van `Resultaat is: 2, 3, ...`. De namen
  `ar` en `todel` (`:416`, `:424`) zijn precies wat het boeteblad onder naamgeving afstraft.

- **Bob: de oplossing doet niet wat de opgave vraagt.** De opgave zegt "Gebruik een array om de
  antwoorden in te bewaren" (`oefeningen/8_arrays/A_practicasamen.md:311`), de coach-data ook
  (`oefeningen/_coach/8_arrays.md:105`), maar de oplossing (`:313-377`) heeft geen enkele array. De
  regel "bekijk steeds de laatste 2 tekens" (`:303`) laat bovendien twee van de vijf gevallen uit de
  opgave mislukken: `WATCH OUT!` geeft "Whatever." in plaats van "Whoa, chill out!", en enkel spaties
  geeft "Whatever." in plaats van "Fine. Be that way!" (geverifieerd met dotnet). Voorstel: roepen
  betekent minstens één hoofdletter en geen enkele kleine letter (een loop met `char.IsUpper` en
  `char.IsLower`, mooi H8-materiaal), stilte betekent dat `Trim()` een lege string geeft. De
  antwoorden staan in een `string[]` en de beslissing levert een index op. De tip over `Contains`
  (`:307-309`) valt dan weg.

- **Robot Simulator: de oplossing beantwoordt de vraag niet.** De opgave vraagt de eindcoördinaat en
  de eindrichting (`oefeningen/8_arrays/A_practicasamenb.md:682`); de oplossing toont die nergens en
  tekent in de plaats een kaart. Die kaart is ook te klein: `i < map.GetUpperBound(0)` stopt bij 18,
  dus van het rooster van 20x20 verschijnen er 19x19 (geverifieerd met dotnet). De `break` na elke
  `return` (`:757-786`) geeft acht keer warning CS0162 "Unreachable code detected" (geverifieerd met
  dotnet). De oplossing schrijft `map[x, y]`, dus eerst de kolom, terwijl het boek net leert dat de
  eerste index de rij is (`content/7_arrays/4_ndimensionalArrays.md:150`). `GetUpperBound` en
  `Console.ReadKey` staan niet in de leerstof van H8. Zie ook sectie 3.

- **Array Viewer: de oplossing crasht op een lege array** (`array[array.Length-1]` bij lengte 0,
  geverifieerd met dotnet), terwijl de opgave "arrays van willekeurige grootte" vraagt
  (`oefeningen/8_arrays/A_practicasamenb.md:16`). De opgave vraagt ook een demonstratie in `Main` met
  twee arrays (`:22`); die ontbreekt.

- **Vraag Array is Essential en heeft geen oplossing** (`oefeningen/8_arrays/A_practicasamen.md:208-235`).

- **LeveringsBedrijf:** postcode 2340 staat twee keer in de array, met een andere prijs
  (`oefeningen/8_arrays/A_practicasamen.md:258`, index 4 en 9). De tweede is nooit bereikbaar: 10 kg
  naar 2340 kost altijd 560 euro (geverifieerd met dotnet). De array `kgpergemeente` (`:260`) bevat
  prijzen per kg; noem ze `prijsPerKg`.

- **Puzzelen met arrays, de tip** (`oefeningen/8_arrays/A_practicasamen.md:519-523`) schrijft
  `.Reverse()`, `.BinarySearch()` en `.Sort()`, terwijl het boek met nadruk zegt dat
  `myColors.Sort()` niet bestaat en je `Array.Sort(myColors)` schrijft
  (`content/7_arrays/systemarray.md:5-12`). Schrijf `Array.Reverse`, `Array.BinarySearch` en
  `Array.Sort`. De oplossing van puzzel 5 sorteert met een zelfgeschreven bubble sort (`:642-654`),
  terwijl de tip `Sort` toelaat en het boek bubble sort uitdrukkelijk buiten de cursus houdt
  (`content/7_arrays/algoarrays.md:8`). Kopieer de drie getallen naar een hulparray en gebruik
  `Array.Sort`, zoals puzzel 6 al doet.

- **Kleinere dingen:**
  - `&` in plaats van `&&` in `IsRealDNA` (`oefeningen/8_arrays/A_practicasamen.md:505`).
  - De opgave zegt `Schooltype`, de oplossing `SchoolType` (`:159`, `:163`).
  - Determinant noemt `ad - bc` een "kruisproduct" (`oefeningen/8_arrays/A_practicasamenb.md:529`), en
    dat is iets anders.
  - Het codeblok van 2D Array Viewer heeft als taal `charp` (`:556`), de voorbeelduitvoer van puzzel 5
    staat in een `java`-blok (`oefeningen/8_arrays/A_practicasamen.md:615`).
  - 2D Array Viewer gebruikt `PadLeft` (`oefeningen/8_arrays/A_practicasamenb.md:589`), dat nergens
    in het boek staat.
  - Opmaak: de tips bovenaan staan niet in een `.vooraf`-blok (`oefeningen/8_arrays/A_practicasamen.md:5-7`,
    `oefeningen/8_arrays/A_practicasamenb.md:3-5`). De labels zijn `(*Final Essential*)` in week 1
    (`A_practicasamen.md:724`, `:842`) en `(Final Essentials)` in week 2 (`A_practicasamenb.md:799`).
    De commentaar `<!--# Oefeningen week 1-->` staat er twee keer (`A_practicasamen.md:1`, `:8`),
    idem in week 2 (`:1`, `:6`). Tussen de oefeningen van week 2 staan `---`-lijnen
    (`A_practicasamenb.md:44`, `:134`, `:185`, ...). "Tekst die start met ">" is invoer van de
    gebruiker." staat als geheel tussen aanhalingstekens (`A_practicasamen.md:739`, `:857`,
    `A_practicasamenb.md:821`).

Wel in orde (geverifieerd met dotnet): Havenbeheer en Zwerkbaltraining geven exact de voorbeelduitvoer,
Hamming geeft 7 en de `^`-lijn klopt, LeveringsBedrijf geeft 9630, puzzel 5 geeft het voorbeeld, de
zeef telt 9592 priemgetallen, Determinant geeft -2. Geen enkele oplossing gebruikt LINQ of `break` in
een loop.

## 2. Wat sterker kan

- **Puzzelen met arrays deel 2 is de plek voor arrays als referentie, maar er staat geen methode in.**
  De pagina vraagt bovenaan zelf om methoden (`oefeningen/8_arrays/A_practicasamenb.md:3-5`) en de
  opgave draait rond "nieuw" tegenover "aanpassen" (`:192`), exact de leerstof van
  `content/7_arrays/3_arrays_en_methoden.md`. Toch staan alle twaalf oplossingen in `Main`.
  Voorstel: elk koppel wordt een koppel methoden, bv. `static int[] Omgekeerd(int[] bron)` (geeft een
  nieuwe array terug) en `static void KeerOm(int[] getallen)` (past het origineel aan), en `Main`
  toont telkens het origineel na de aanroep. Een callout "Les(sen) uit deze oefening" zegt waarom de
  `void`-versie werkt zonder `return`. Dan verdwijnt ook de overlap met week 1: daar gaat het om
  afdrukken in een andere volgorde, hier om de array zelf.

- **Minder typwerk bij de puzzels.** Puzzel 1 tot 4 laten 20 getallen intypen, puzzel 5 en 6 zelfs
  100 (`oefeningen/8_arrays/A_practicasamen.md:525-666`). Niemand test dat. Vul met `Random` of
  gebruik 8 getallen; in week 2 kan de nieuwe oefening Snelle invoer (zie 4) het werk doen. Puzzel 5
  en 6 werken even goed met 12 getallen. Puzzel 6 heeft geen voorbeeld en "kolom per kolom" is voor
  meer dan één uitleg vatbaar. Met de 12 getallen van puzzel 5 geeft de oplossing
  `1 3 2 / 4 5 2 / 6 5 7 / 7 8 8` (geverifieerd met dotnet); zet dat erbij.

- **System.Array wordt amper gebruikt.** Het boek noemt `Array.IndexOf` voor beginners bijna altijd
  de juiste keuze om te zoeken (`content/7_arrays/systemarray.md:130`) en doet het voorbeeld met
  synchrone arrays er zelf mee (`content/7_arrays/algoarrays.md:151-164`). In de oplossingen van
  LeveringsBedrijf, Array Zoeker, Havenbeheer en Zwerkbaltraining wordt telkens met de hand gezocht,
  en `Copy`, `Clear`, `Reverse` en `IndexOf` komen in geen enkele oefening voor. Toon bij
  LeveringsBedrijf en Havenbeheer een tweede oplossing met `Array.IndexOf`. Array Zoeker mag
  manueel blijven, want de loopgrens is daar de les. Zie ook de nieuwe oefening Podium.

- **Array Zoeker: een puzzel met de loopgrens.** Geef na de opgave de lijnen van de opschuiflus in
  de verkeerde volgorde, met één indringer: `for (int i = index; i < getallen.Length; i++)` naast de
  juiste met `Length - 1`. De student kiest en legt uit waarom de ene crasht. Dat is de valkuil die
  de coach-data zelf als eerste noemt (`oefeningen/_coach/8_arrays.md:124`).

- **Fraude Detectie is een Final Essential zonder array en zonder methode.** Er zijn enkel drie
  strings. Voorstel: eerst vragen hoeveel studenten er zijn, de antwoorden in een `string[]`, een
  methode `BerekenScore(string sleutel, string antwoorden)` en een methode die de verdachte
  gelijkenissen tussen twee studenten telt. Daarna elk paar vergelijken (twee geneste loops, `j`
  start bij `i + 1`) en de verdachte paren tonen. Dan komen string-arrays, methoden en een geneste
  loop samen.

- **Array Viewer: `params` erbij.** `params` wordt in geen enkele oefening geoefend. Deel 2: maak de
  parameter `params int[] array`, zodat zowel `VisualiseerArray(mijnArray)` als
  `VisualiseerArray(15, 6, 9)` werkt, zoals `Som` in `content/7_arrays/3_arrays_en_methoden.md:212-243`.

- **Havenbeheer: de les over synchrone arrays uitspreken.** Het boek waarschuwt dat parallelle arrays
  fragiel zijn en dat H9 dat oplost (`content/7_arrays/algoarrays.md:180-182`). Een callout
  "Les(sen) uit deze oefening" die daarnaar verwijst, is de brug naar het intermezzo van H9. H8 heeft
  vandaag geen enkele Les-callout.

- **Opwarmers:** bij de beste vrienden staan vier bijna identieke `WriteLine`s
  (`oefeningen/8_arrays/A_practicasamen.md:70-75`). Zet de labels ("Beste vriend", "Tweede beste
  vriend", ...) ook in een array en toon beide met één loop: een eerste kennismaking met synchrone
  arrays. Een extra opwarmer over defaultwaarden: `new int[5]`, `new bool[3]` en `new string[3]`
  afdrukken en eerst voorspellen wat er verschijnt (`content/7_arrays/1_ArraysBasics.md:177-202`).

- **Toon van week 2.** Week 2 leest als een lastenboek: "Functionele vereisten"
  (`oefeningen/8_arrays/A_practicasamenb.md:14`), "Ontwikkel een applicatie" (`:49`), "Technische
  vereisten" (`:55`), "Implementeer het Caesar-algoritme" (`:139`), "Analyseer onderstaande problemen
  en implementeer de oplossingen" (`:192`), "Programmeer een module" (`:526`), "Een team wenst
  statistische analyse uit te voeren" (`:601`). Herschrijven in de je-vorm van week 1.

- **Voorbeelduitvoer ontbreekt** bij Hamming distance (wel de uitleg, geen programma-uitvoer),
  Caesar-encryptie, Determinant, 2D Array Viewer, Robot Simulator en alle puzzels.

## 3. Wat weg kan (of verhuist)

- **Zwerkbaltraining** (`oefeningen/8_arrays/A_practicasamen.md:842-947`) is Havenbeheer met andere
  namen: dezelfde vijf stappen, dezelfde loops, dezelfde zoektocht. Twee Final Essentials na elkaar
  die hetzelfde toetsen. Voorstel: verhuizen naar week 2 als dezelfde oefening met methoden
  (`LeesIn`, `ToonOverzicht`, `ZoekIndex` die -1 teruggeeft), of schrappen.
- **Robot Simulator (PRO)** traint vooral een enum en een switch; de 2D-array zit enkel in de
  oplossing. Vervangen door de nieuwe oefening Levelkaart (zie 4), die hetzelfde idee (commando's
  per teken) op een echt `char[,]`-rooster met muren zet. Houdt Tim de robot, dan met een nieuwe
  oplossing die de eindtoestand toont.
- **Determinant** als aparte Essential is één regel code
  (`oefeningen/8_arrays/A_practicasamenb.md:540-543`). Samenvoegen met 2D Array Viewer tot één
  2D-oefening (toon de matrix, bereken de determinant), met 3x3 als PRO-uitbreiding.
- **Bob en Hamming distance** naar week 2: het zijn string-oefeningen, en "String en arrays" komt in
  het boek na het zoeken en tellen (`stringarray.md` na `algoarrays.md` in `_quarto.yml`).

## 4. Gaten: kansen voor nieuwe oefeningen

1. **Wegwijzers** (Essential, voorspel de uitvoer). Zes korte fragmenten, eerst op papier
   voorspellen en dan uitvoeren: (a) `int[] b = a; b[0] = 99;` en dan `a[0]` tonen; (b)
   `int x = a[1]; x = 50;` en dan `a[1]` tonen; (c) een methode die elk element verdubbelt; (d) een
   methode die `Array.Sort` doet op haar parameter; (e) een methode die haar parameter een nieuwe
   array geeft; (f) een array kopiëren met een loop en daarna de kopie aanpassen. Traint
   `arraysgeheugen.md` en `3_arrays_en_methoden.md`: de valkuil waarvoor het boek "zet je helm op"
   roept (`content/7_arrays/3_arrays_en_methoden.md:166`) en die vandaag in geen enkele oefening
   terugkomt. Het boek heeft er één vraag over (Steven en `Reset`, `:258-289`); dit maakt er een
   reeks van. Coach-data met een `### Nota` dat de coach het antwoord niet geeft.

2. **Stevens warmste stad** (Essential, zoek de fout). Steven laat een A.I. een programma schrijven
   met twee synchrone arrays, steden en temperaturen in januari, dat de warmste stad toont. Het
   compileert, maar: (a) hij sorteert de temperaturen met `Array.Sort` en toont de stad op de laatste
   index, die niet meer bij die temperatuur hoort; (b) de loop die alles toont gaat met `<=` tot
   `Length`; (c) het maximum start op 0, en als het overal vriest blijft dat 0. De student zoekt welke
   fout de compiler vindt (geen) en welke pas bij de uitvoer opduikt. Traint de valkuilen uit
   `content/7_arrays/algoarrays.md:64-68` en `:218` en `content/7_arrays/2_ArraysGebruiken.md:165-178`.

3. **Podium** (Essential). Acht renners met hun tijd in twee synchrone arrays. Maak met `Array.Copy`
   een kopie van de tijden, sorteer de kopie met `Array.Sort`, neem de drie snelste tijden en zoek met
   `Array.IndexOf` in de originele array bij welke renner ze horen. Vraag erbij: waarom mag je de
   originele array niet sorteren? Uitbreiding: de rode lantaarn met `Array.Reverse`. Traint
   `systemarray.md`, dat vandaag nergens geoefend wordt, en het verschil tussen een kopie en een
   alias. Valkuil voor de coach: twee gelijke tijden geven met `IndexOf` twee keer dezelfde renner.

4. **Snelle invoer** (Essential). Een methode `static int[] LeesGetallen()` die één lijn zoals
   `4 5 8 7 5 2` inleest, met `Split(' ')` opsplitst en een `int[]` van de juiste lengte teruggeeft.
   Deel 2: tonen met `string.Join`. Deel 3: een zin woord per woord omdraaien met `Split` en `Join`.
   Traint `stringarray.md` (Split en Join komen vandaag in geen oefening voor) en een array als
   returntype. Daarna kan de student ze gebruiken in Puzzelen deel 2.

5. **Levelkaart** (Essential, eventueel de Final Essential van week 2). Het doolhof van de eerste
   pagina van het hoofdstuk (`content/7_arrays/1_ArraysBasics.md:5-12`) staat gegeven als `string[]`
   met één rij per element. Zet het met twee geneste loops om naar een `char[,]`, teken het, zoek de
   positie van `@`, tel de vrije vakjes, en voer daarna een reeks commando's als `"ZZOON"` uit waarbij
   de speler niet door een `#` kan. Traint `4_ndimensionalArrays.md` (`GetLength`, `[rij, kolom]`,
   twee geneste loops) en maakt de belofte van de intro waar (zie 6). Vervangt Robot Simulator.

6. **Opstartparameters** (niet Essential). Een programma dat de getallen uit `args` optelt (`som 4 8 15`
   toont 27) en een uitleg toont als er geen argumenten zijn. Deel 2: `args[0]` is een bewerking
   (`plus`, `maal`), de rest zijn getallen; test eerst `args.Length`, in de goede volgorde bij `&&`
   (`content/7_arrays/argsopstart.md:41-51`). Vermeld dat je in Visual Studio argumenten meegeeft via
   de projecteigenschappen (Debug), zodat je niet telkens naar de command line moet. `args` komt
   vandaag in geen enkele oefening voor.

## 5. Voorgestelde volgorde

Over de verdeling: beide weken tellen negen oefeningen, maar week 1 heeft daarbinnen acht opwarmers
en zes puzzels, week 2 twaalf puzzels. De thema's lopen door elkaar: strings zitten in beide weken
(Bob en Hamming in week 1, Caesar en Fraude in week 2), en week 2 vraagt methoden terwijl de helft van
de oplossingen er geen heeft. Voorstel: week 1 volgt het boek tot en met "Zelf zoeken en tellen"
(1D, args, geheugen, System.Array, zoeken, synchrone arrays), week 2 de rest (strings, methoden en
referenties, 2D).

**Week 1:** Opwarmers → Vraag Array → Array Zoeker → LeveringsBedrijf → Podium → Stevens warmste stad →
Puzzelen met arrays → Havenbeheer (Final Essential, nieuwe naam, zie 6) → Opstartparameters (bonus)

**Week 2:** Snelle invoer → Bob → Hamming distance → Caesar-encryptie → Array Viewer → Wegwijzers →
Puzzelen met arrays deel 2 → Parkeergarage → 2D Array Viewer (met Determinant) → Voetbalcoach →
Levelkaart → Fraude Detectie (Final Essentials) → Zwerkbaltraining met methoden (extra)

## 6. Nevenvondsten

- **`break` in het boek tegenover het boeteblad.** `content/7_arrays/algoarrays.md:110-129` toont het
  zoek-en-stop-patroon met `break` in een `for` en noemt het een geval waarin `break` mag. Het
  boeteblad trekt daar in jaar 1 3 punten voor af (`content/B_appendix/boete.md:66-72`), en de coach
  beoordeelt op dat boeteblad, terwijl "Kent al" `break` en `continue` gewoon opsomt
  (`oefeningen/_coach/8_arrays.md:22`). Een student die het boek volgt, verliest punten. Kies één lijn.
- **De intro belooft een spelbord dat niet komt.** `content/7_arrays/1_ArraysBasics.md:14`:
  "Verderop in dit hoofdstuk maken we zo'n raster echt, met een `char[,] spelbord`." In
  `content/7_arrays/4_ndimensionalArrays.md:35` staat enkel de declaratie. Ofwel een klein voorbeeld
  in de tekst, ofwel een verwijzing naar de oefening Levelkaart.
- **Coach-data** (`oefeningen/_coach/8_arrays.md`):
  - Bob (`:105`) en Voetbalcoach (`:282-294`) beschrijven een aanpak die de huidige oplossing niet
    volgt. Ze kloppen wel met de opgave, dus de oplossingen moeten mee (sectie 1).
  - Puzzelen (`:146`) zegt dat `Array.Sort` enkel mag waar de opgave het uitdrukkelijk toelaat; de tip
    op de pagina laat sorteren overal toe (`oefeningen/8_arrays/A_practicasamen.md:520`). Gelijktrekken.
  - Array Viewer: de lege array als valkuil toevoegen.
  - "Kent al" noemt `PadLeft`, `GetUpperBound` en `Console.ReadKey` niet, maar de oplossingen
    gebruiken ze. Liever uit de oplossingen halen dan aan "Kent al" toevoegen.
  - Elke titelwijziging hierboven (Havenbeheer, Zwerkbaltraining, Determinant) moet mee in de
    coach-data, anders geen Coach-knop.
- **Twee keer Havenbeheer.** H7 heeft ook een Final Essential "Havenbeheer"
  (`oefeningen/7_methoden/b_practicasamenb.md:147`), over diepgang en ladingkosten. Hernoem die van
  H8 naar bv. "Havenmanifest"; de oplossing heet al `namespace HavenManifest`
  (`oefeningen/8_arrays/A_practicasamen.md:772`). De oefeningen van H8 hebben geen expliciete ankers,
  dus het automatische anker verandert mee.
- **H7:** de oplossing van Havenbeheer staat niet in een codeblok
  (`oefeningen/7_methoden/b_practicasamenb.md:222-345`: meteen `using System;` na de callout) en
  rendert dus als lopende tekst. Hoort in het rapport van H7.
- **H9, de overgang:** het intermezzo (`oefeningen/9_klassen/intermezzoh9.md:13-35`) vertrekt van losse
  variabelen, terwijl H8 net drie oefeningen met synchrone arrays had (LeveringsBedrijf, Havenbeheer,
  Zwerkbaltraining) en het boek belooft dat H9 dat probleem oplost (`content/7_arrays/algoarrays.md:181`).
  Vertrekken van Havenbeheer maakt de brug sterker. Het intermezzo noemt de publieke
  instantievariabelen van de struct "properties" (`oefeningen/9_klassen/intermezzoh9.md:59`).
