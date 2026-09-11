# H4: Werken met data

Bronnen: `oefeningen/4_data/A_Practica.md`, `oefeningen/_coach/4_data.md`, `content/3_data/` (alle
bestanden uit `_quarto.yml`: `4_converteren_casting.md`, `4b_inputconverten.md`, `4c_math.md`,
`4d_afronden.md`, `random.md`, `5_debuggen.md`, `ai.md`, `zieverder.md`, `kennisclips.md`),
`content/B_appendix/boete.md`, de afbeelding `oefeningen/assets/0_intro/elo.png`, vluchtig
`oefeningen/3_tekst/a_practica.md` en het begin van `oefeningen/5_beslissingen/a_practica.md`.

Alle tien oplossingen zijn uitgevoerd met dotnet 10 in het klassieke skelet, met cultuur nl-BE en
de invoer uit de voorbeelden via stdin. Geen enkele oplossing gebruikt if of een lus, en geen enkele
opgave heeft er een nodig.

## 1. Fouten die sowieso weg moeten

- **Vierkant (Essential): de voorbeelduitvoer klopt niet.** Het voorbeeld toont `Omtrek is 18.4`
  (met punt) en `Oppervlakte is 21,16` (`oefeningen/4_data/A_Practica.md:55-56`). De oplossing
  toont op een Belgische pc `Omtrek is 18,4` en `Oppervlakte is 21,159999999999997` (geverifieerd
  met dotnet). Het is de eerste oefening met kommagetallen, en de student denkt meteen dat hij iets
  fout deed. Voorstel: de echte uitvoer in het voorbeeld, en een deel 2 waarin hij afrondt (zie
  sectie 2). De Les (`:60`) zegt "niet meer invoer" (bedoeld: niet meer nodig) en verwijst naar
  "lijn 2 en 3" van een oplossing die de student op dat moment nog niet gezien heeft.

- **De Festivalganger (Final Essentials): opgave en leerstof zeggen iets anders over afronden.** De
  opgave laat het budget elke dag afronden en daarmee verder rekenen (`:433`, oplossing `:498`).
  `content/3_data/4d_afronden.md:174` zegt net: rond pas af op het laatste moment. De coach-data
  noemt verder rekenen met een afgerond getal een valkuil (`oefeningen/_coach/4_data.md:96`).
  Bovendien doet de afronding in het voorbeeld niets: alle prijzen zijn veelvouden van 0,5 en de
  onvoorziene kost is geheel, dus met 250 euro ontstaat er nooit een staartje. Met een budget van
  100,1 wel: zonder afronden staat er na dag 1 `47,599999999999994` (geverifieerd met dotnet).
  Voorstel: kies één aanpak en zeg waarom. Ofwel afronden enkel in de `WriteLine`, zoals bij BMI,
  ofwel een Les die uitlegt dat je bij geld per dag op centen afrondt omdat een halve cent niet
  bestaat. Neem in het voorbeeld een budget met centen, zodat de student ziet waarvoor het dient.
  Verder: "een willekeurig getal tussen 5 en 20" (`:429`) moet "van 5 tot en met 20" worden, want
  daar gaan de oplossing en de coach-valkuil (`oefeningen/_coach/4_data.md:188`) van uit. En
  "à € 4.50" en "à € 9.00" (`:427-428`) staan met een punt, net in het hoofdstuk waarin de student
  leert dat hij een komma moet typen. Schrijf 4,50 euro.

- **Voorbeeld en oplossing verschillen bij Balk, Supercomputer en Op-de-poef.**
  - Balk: het voorbeeld vraagt `Lengte?` en toont twee lijnen, de oplossing vraagt `Geef lengte` en
    toont vijf lijnen in kleine letters (`:83-92` tegenover `:98-111`). Ook `opp` als naam.
  - Supercomputer: de oplossing toont geen vragen (`Geef getal 1:` ontbreekt) en schrijft
    `Gemiddelde is` in plaats van `Het gemiddelde hiervan is:` (`:39-42`). Het getal zelf klopt
    (geverifieerd met dotnet).
  - Op-de-poef: `Voer bedrag in?` tegenover `Voer bedrag in:`, een punt achter "euro" die de
    oplossing niet toont, 25 sterretjes tegenover 17, en een dubbele spatie in "van  de poef"
    (`:169-185` tegenover `:207-230`).

- **Op-de-poef (Essential): een bedrag met centen laat het programma crashen.** De opgave spreekt
  van "een bedrag" (`:163`), de oplossing leest met `int.Parse`. Een barman die `3,5` typt, krijgt
  een `FormatException` (geverifieerd met dotnet). Voorstel: "Voer het bedrag in hele euro in", of
  met `double` werken. Zeg er ook bij dat de vijf blokjes onder elkaar gekopieerd mogen worden,
  zoals bij de Festivalganger (`:435`). Nu staat dat enkel in de coach-data.

- **Feestkassa (Essential): de modeloplossing krijgt zelf een boete.** `totalFriet`,
  `totalKoninginne`, `totalIjs` en `totalDrank` naast `totaal` en `aantalFriet` is half Engels,
  half Nederlands: "Naamgeving niet consistent", -2 (`content/B_appendix/boete.md:276`). Voorstel:
  `totaalFriet` enzovoort. Verder `koninginnenhapje?` met kleine letter in het voorbeeld (`:253`)
  tegenover `Koninginnenhapje?` in de oplossing, en "om de totaal te betalen prijs" (`:244`).

- **BMI berekenaar (Essential): omzetting en sjabloon.** De oplossing gebruikt als enige
  `Convert.ToDouble` (`:148`), terwijl alle andere oefeningen `double.Parse` gebruiken en het boek
  zegt dat je `Convert` pas gebruikt als je het verschil met parsen goed snapt
  (`content/3_data/4_converteren_casting.md:232`). Het sjabloon (`:127-135`) toont de invoer zonder
  `>`, in strijd met de melding bovenaan (`:6`), heeft witregels die de oplossing niet toont, en
  eindigt op een punt die de oplossing vergeet (`:154`). De Les is een verminkte zin: "maar de
  gebruiker wordt deze in in centimeter" (`:140`). Dit weegt, want BMI met if in H5 bouwt verder op
  deze oplossing (`oefeningen/5_beslissingen/a_practica.md:13`).

- **Geometric fun:** "geometrische functies" moet "goniometrische functies" zijn (`:321`). De titel
  mag gerust Nederlands worden (anker behouden). Het sjabloon toont `Sinus van deze hoek is: [sinus]`,
  de oplossing `Sinus van 90 graden is ...` (`:337-339` tegenover `:348-350`), en ook hier ontbreekt
  de `>` bij de invoer. De tip over "erg kleine of erg grote waarden" (`:329`) mag concreet: bij 90
  graden toont de oplossing `6,123233995736766E-17` als cosinus en `16331239353195370` als tangens,
  bij 45 graden `0,9999999999999999` als tangens (geverifieerd met dotnet).

- **Schaak-ELO (PRO):** de oplossing zet `const int K = 10`, terwijl de opgave in het vet zegt
  "Gebruik voor ALLES doubles" (`:371` tegenover `:401`), en deel 2 vraagt K net aan de gebruiker.
  De opgave gebruikt `##`- en `###`-koppen binnen de oefening (`:374`, `:378`, `:386`), die de
  inhoudsopgave vullen: maak er `**Getalvoorbeeld.**` en `**Deel 2.**` van. Typfouten: "berekend"
  (`:361`), "gelijkstond" (`:370`, bedoeld: gelijkspel), "Breidt" (`:388`). De getallen kloppen:
  bij 1000 tegen 1100 wordt het 1006/1094 als A wint, 996/1104 als B wint en 1001/1099 bij
  gelijkspel (geverifieerd met dotnet). Die drie lijnen horen als voorbeelduitvoer in de opgave; nu
  staat er geen.

- Kleinere dingen: het Orakeltje toont `jaar leven` zonder de punt uit de opgave (`:313` tegenover
  `:300`); het voorbeeld van Feestkassa staat in een codeblok zonder `text` (`:249`); de tip
  "1 rad = 180°/PI = 57.295779513°" schrijft een punt (`:325`).

## 2. Wat sterker kan

- **Casting wordt nergens geoefend.** Het eerste en langste deel van de leerstof
  (`content/3_data/4_converteren_casting.md`) komt in geen enkele oplossing terug: er staat nergens
  `(int)` of `(double)`. Kleine ingreep bij Op-de-poef: laat het aantal weken een `int` zijn,
  `int weken = (int)Math.Ceiling(poef / 10.0);`, net zoals het busvoorbeeld in
  `content/3_data/4d_afronden.md:47`, met een Les waarom die cast hier niets afkapt. De rest in
  sectie 4.

- **Supercomputer: een deel 2 met punt en komma.** "Typ nu `23.4` in plaats van `23,4`. Wat gebeurt
  er, en waarom crasht het niet?" Op een Belgische pc wordt het gemiddelde dan `98,76666666666667`
  (geverifieerd met dotnet), want de punt geldt als scheiding van duizendtallen. Dat is de
  waarschuwing uit `content/3_data/4b_inputconverten.md:87-89`, en elke Vlaamse student loopt er
  vroeg of laat tegenaan. Met dit deel mag Supercomputer Essential worden.

- **Vierkant: een deel 2 over afronden tegenover mooi tonen.** Toon de oppervlakte een keer met
  `Math.Round(oppervlakte, 2)` en een keer met `{oppervlakte:F2}`. Bij zijde 4,6 geven ze allebei
  21,16, bij zijde 5 wordt het `25` tegenover `25,00`. Zo komt "Afronden of enkel mooi tonen?"
  (`content/3_data/4d_afronden.md:157-174`) in een oefening terug.

- **Breakpoints concreet maken.** De melding bovenaan (`:4`) zegt dat de student vanaf nu met
  breakpoints werkt, maar geen enkele oefening zegt waar of hoe. Bij BMI past een Les: "Klopt je BMI
  niet? Zet een breakpoint op de lijn met de formule en kijk in Locals wat er in `lengteInMeter`
  zit." Bij Op-de-poef: "Stap met Step Over door de vijf blokjes en kijk hoe `poef` groeit."

- **De Festivalganger en geld.** `content/3_data/4d_afronden.md:176-207` zegt: gebruik voor geld
  `decimal`, met `4.35 * 100` als waarschuwing. De Festivalganger is de enige oefening met
  geldbedragen in kommagetallen. Een Les die zegt waarom `double` hier volstaat (het boek laat dat
  toe, `:207`), of een PRO-deel met `decimal`, sluit dat aan.

- **Op-de-poef:** de waarschuwing `:188-190` verklapt meteen welke methode nodig is. Liever een tip
  die de vraag stelt: "Een halve week bestaat niet. Welke methode uit `Math` rondt altijd naar boven
  af?"

## 3. Wat weg kan (of verhuist)

- **Balk:** traint hetzelfde als Vierkant (inlezen, één formule) en gebruikt niets nieuws uit H4.
  Schrappen, of optioneel meteen na Vierkant.
- **Feestkassa: geen Essential meer.** Buiten `int.Parse` gebruikt ze niets uit dit hoofdstuk, en
  samen met Op-de-poef zijn er dan twee Essentials die neerkomen op vier of vijf keer hetzelfde blok
  kopiëren. De plaats gaat naar Voorspel de uitvoer en Wisselgeld in centen.

## 4. Gaten: kansen voor nieuwe oefeningen

Debuggen komt enkel terug in de melding bovenaan (`:4`), het A.I.-stuk (`content/3_data/ai.md`)
nergens. Ook niet geoefend: casting, het `char`-cijfer, `MidpointRounding`, `Math.Floor`, `Max`,
`Min`, `Clamp` en `Sqrt`, `NextDouble` en de seed, NaN, oneindig en overflow. Er is geen enkele
oefening waarin de student code leest.

1. **Voorspel de uitvoer: omzetten en afronden** (*Essential*). Een tiental lijnen, eerst op papier.
   Bv. `(int)2.9`, `(int)-2.7` naast `Math.Floor(-2.7)`, `Math.Round(4.5)` naast
   `Math.Round(4.5, MidpointRounding.AwayFromZero)`, `Convert.ToInt32(4.5)`, met 20 en 25
   `(double)(a + b) / 2` naast `(double)((a + b) / 2)`, `char teken = '7'; int getal = teken;`
   naast `int.Parse(teken.ToString())`, en `"3" + "4"`. Traint de tabel uit
   `content/3_data/4d_afronden.md:143-147` en de char-sectie
   `content/3_data/4_converteren_casting.md:262-276`. Optioneel deel 2 met `int.MaxValue + 1`,
   `10.0 / 0` en `Math.Sqrt(-1) + 5` (`4c_math.md:184-268`).

2. **Stevens busreis** (*Essential*). Steven liet een A.I. een programma schrijven voor een
   schoolreis: aantal studenten en plaatsen per bus inlezen, het aantal bussen en de prijs per
   student berekenen. **Deel 1**, een fout die de compiler vindt:
   `int aantalBussen = Math.Ceiling(...)` (`4c_math.md:39`). **Deel 2**, fouten die hij niet vindt:
   de cast na de deling, `Math.Ceiling((double)(studenten / perBus))`, geeft bij 47 en 20 twee
   bussen in plaats van drie; `Math.Round` zonder `AwayFromZero` op een prijs die op een halve euro
   uitkomt; een dobbelsteen voor de busloterij met `Next(1, 6)`. De student zoekt ze met een
   breakpoint en het Locals-venster, niet door te gokken. Traint casting, afronden, de grenzen van
   `Next`, debuggen en A.I.-code kritisch lezen.

3. **Breakpoint-detective** (*Essential*). Gegeven: het temperatuurprogramma uit
   `content/3_data/4_converteren_casting.md:111-135`, uitgesmeerd over vijf lijnen met
   tussenvariabelen. De student zet een breakpoint op de eerste lijn, schrijft vóór elke Step Over
   op welke waarde hij verwacht, controleert in Locals, en noteert op welke lijn 22,5 verloren gaat.
   Traint breakpoints, Step Over en "eerst voorspellen" (`content/3_data/5_debuggen.md:83`). Vult
   meteen de TODO in `5_debuggen.md:97`.

4. **Wisselgeld in centen** (*Essential*, in de plaats van Feestkassa). De gebruiker typt een
   bedrag, bv. `4,35`. Het programma zet dat om naar centen en toont hoeveel munten van 2 euro,
   1 euro, 50 cent, ... dat zijn, met `/` en `%` uit H2. Met `(int)(bedrag * 100)` komt er 434 uit
   (geverifieerd met dotnet): een cent kwijt. **Deel 2**: los het op met `Math.Round` vóór de cast,
   of met `decimal`. Traint casting, de afrondvalkuil en geld (`4d_afronden.md:176-207`).

5. **Levensbalk.** Een held begint met 100 levens. Drie monsters slaan na elkaar toe met een
   willekeurige schade van 10 tot en met 40, en de levens zakken nooit onder nul (`Math.Max`). Daarna
   een toverdrank van 50 die nooit boven 100 gaat (`Math.Min` of `Math.Clamp`). Traint `Max`, `Min`,
   `Clamp` en `Random`, en is een brug naar H5, waar dezelfde grenzen met if kunnen. Niet Essential.

6. **Weerbericht van morgen.** Een willekeurige temperatuur tussen -5,0 en 30,0 graden met
   `NextDouble` (`content/3_data/random.md:77-87`), afgerond op één cijfer met `AwayFromZero`.
   **Deel 2**: geef de generator een seed, voer twee keer uit en vergelijk met je buur (het
   Minecraft-verhaal uit `random.md:129`). Traint `NextDouble`, een bereik verschuiven en de seed.
   Niet Essential.

7. **Zoek-de-fout-prompt (GPT).** De student gebruikt de zoek-de-fout-prompt uit
   `content/3_data/ai.md:28-39` op een oefening die hij al gemaakt heeft (Vierkant of BMI), met
   erbij "gebruik enkel leerstof tot en met hoofdstuk 4, geen if en geen lussen". Hij zoekt de
   fouten, voert de verbeterde code uit en legt ze naast zijn eigen oplossing. Het label `(GPT)`
   bestaat al in de opmaak. Zo wordt het A.I.-stuk minstens één keer gebruikt. Niet Essential.

Bij het doorvoeren: de compileerfouten in Stevens busreis letterlijk laten genereren, en alle
uitkomsten in de opgaven met dotnet op nl-BE narekenen.

## 5. Voorgestelde volgorde

Vierkant → Balk (optioneel, of weg) → Supercomputer → BMI berekenaar → Voorspel de uitvoer →
Breakpoint-detective → Op-de-poef → Feestkassa → Wisselgeld in centen → Stevens busreis →
Het Orakeltje van Delphi → Weerbericht van morgen → Levensbalk → Geometric fun →
Zoek-de-fout-prompt (GPT) → Schaak-ELO (PRO) → De Festivalganger

Vierkant heeft één invoer en is makkelijker dan Supercomputer met drie. Voorspel de uitvoer en de
Breakpoint-detective komen vóór de lange kopieeroefeningen, zodat de student de debugger al kent
wanneer hij een lopende som schrijft. Stevens busreis komt na Wisselgeld omdat ze casting, afronden
en Random combineert.

## 6. Nevenvondsten

- `content/3_data/4b_inputconverten.md:83-86`: "Dit is wat er in `gewicht` terechtkomt, afhankelijk
  van wat de gebruiker typt en van de instellingen van de computer:" en daarna niets. De
  aangekondigde tabel ontbreekt. Op een Belgische pc geven `double.Parse("9.81")` en
  `Convert.ToDouble("9.81")` allebei 981 (geverifieerd met dotnet).
- `content/3_data/4d_afronden.md:50` klopt niet: laat je de cast weg, dan krijg je geen 2 maar een
  compileerfout. `Math.Ceiling` met een deling van twee ints geeft
  `error CS0121: The call is ambiguous between the following methods or properties: 'System.Math.Ceiling(decimal)' and 'System.Math.Ceiling(double)'`
  (geverifieerd met dotnet), want een `int` past zowel in een `decimal` als in een `double`.
  Dezelfde fout staat in de coach-valkuil van Op-de-poef (`oefeningen/_coach/4_data.md:112`):
  `poef / 10` geeft geen week te weinig maar een compileerfout. De stille fout krijg je pas met een
  cast na de deling: `Math.Ceiling((double)(poef / 10))` geeft 3 bij 39 euro (geverifieerd).
- `content/3_data/zieverder.md:5`, `:10` en `:17` sturen de student naar `int.TryParse` ("Bij
  invoer van de gebruiker gebruik je `int.TryParse`"), terwijl `4b_inputconverten.md:101-117`
  afspreekt dat de invoer foutloos is en TryParse pas kan met if en out. De coach-data zet TryParse
  terecht bij "Kent nog niet". Voorstel voor de valkuil: "`int.Parse("abc")` crasht; hoe je dat
  opvangt, leer je later."
- `content/3_data/4c_math.md:247`: de getoonde uitvoer `-1.7976931348623157*10^308 tot
  1.7976931348623157E*10^308` bestaat niet. Op een Belgische pc verschijnt
  `-1,7976931348623157E+308 tot 1,7976931348623157E+308` (geverifieerd met dotnet). Op `:241`
  ontbreekt een spatie na "is:".
- Coach-data `oefeningen/_coach/4_data.md:30`: de Math-lijst mist `Max`, `Min`, `Clamp` en
  `Truncate`, en "Kent al" zegt niets over NaN, oneindig, overflow, `decimal` voor geld of `F2`
  tegenover `Math.Round`. Moet mee zodra de nieuwe oefeningen er komen.
- `content/3_data/5_debuggen.md:81` spreekt van "het watch-venster", maar de tekst ervoor legt enkel
  Autos en Locals uit (`:50`).
- `content/3_data/kennisclips.md:14`: de link naar de oefeningen wijst nog naar apwt.gitbook.io.
- H5: de meldingen bovenaan `oefeningen/5_beslissingen/a_practica.md:3-5` staan nog in een losse
  `callout-warning` in plaats van `.vooraf`, met "eerste de volledige opgave". BMI met if en
  Orakeltje part deux bouwen verder op de oplossingen van H4: wie die aanpast, kijkt H5 mee na.

---

## Doorgevoerd (2026-09-11)

- `oefeningen/4_data/A_Practica.md` telt nu 17 oefeningen in de volgorde van sectie 5. Nieuw: Voorspel
  de uitvoer, Breakpoint-detective, Wisselgeld in centen en Stevens busreis (alle vier Essential),
  Weerbericht van morgen, Levensbalk en Zoek-de-fout-prompt. Supercomputer is Essential geworden,
  Feestkassa niet meer. Balk blijft, als optionele oefening na Vierkant.
- Sectie 1, alles weg. Keuzes daarbij:
  - Vierkant toont de echte uitvoer (`18,4` en `21,159999999999997`), met een Les over waarom.
  - Festivalganger: het budget wordt niet meer afgerond, enkel bij het tonen (`Math.Round(budget, 2)`
    in de `WriteLine`). Het voorbeeld start met 180,45 euro, zodat er elke dag een staartje is
    (`127,94999999999999` zonder afronden). "Van 5 tot en met 20", "4,50 euro". De onvoorziene kost
    is een `int` geworden.
  - Op-de-poef: "in hele euro", 25 sterretjes in voorbeeld en oplossing, `int weken = (int)Math.Ceiling(poef / 10.0)`.
  - Schaak-ELO: `const double K`, een volledige oplossing met invoer, namen `ratingA`, `verwachtA`
    enz., voorbeelduitvoer voor de drie scenario's, en deel 2 met eigen oplossing (K = 32).
  - Geometric fun heet nu "Sinus, cosinus en tangens" (anker `h04-geometric-fun` behouden), met
    voorbeelduitvoer bij 90 graden en een tip die de drie vreemde getallen uitlegt.
- Sectie 2: Supercomputer deel 2 (punt en komma), Vierkant deel 2 (`Math.Round` tegenover `F2`),
  een Les met een breakpoint bij BMI, Op-de-poef en Supercomputer, casting bij Op-de-poef, de tip
  als vraag bij Op-de-poef. Festivalganger: een Les over afronden bij het tonen, en een deel 2 met
  `decimal` (toont `52,50` in plaats van `52,5`, wat in de oplossing uitgelegd staat).
- Stevens busreis: twee compileerfouten (CS0029 en CS0266, letterlijk van dotnet) en drie stille
  fouten. Getest met 47 en met 40 studenten: bij 47 zie je de busfout, bij 40 de afronding.
- Bovenaan een vierde melding in de `.vooraf`: komma bij het typen, punt in de code.
- `oefeningen/_coach/4_data.md` herschreven voor de 17 oefeningen. "Kent al" vult de punten uit
  sectie 6 aan (Max, Min, Clamp, Truncate, NaN, oneindig, overflow, decimal, F2 tegenover Round,
  seed, Locals). Code-lees-oefeningen hebben een `### Nota`.
- Leerstof (sectie 6): de ontbrekende tabel in `4b_inputconverten.md`, de passage over
  `Math.Ceiling` zonder cast in `4d_afronden.md` (compileerfout, en de stille variant met cast na
  de deling), TryParse weg uit `zieverder.md`, de uitvoer van `double.MinValue`/`MaxValue` en de
  spatie in `4c_math.md`, "Locals-venster" in `5_debuggen.md`, en de link in `kennisclips.md`.
- Bewust niet:
  - **Het label `(GPT)`** bij Zoek-de-fout-prompt. Op de site betekent dat label "deze oefening werd
    gemaakt met behulp van een GPT" (tooltip in `oefeningen/opmaak.html`, en zo gebruikt in H11 en
    H12). De oefening heeft dus geen label.
  - Deel 2 van Voorspel de uitvoer gebruikt geen `int.MaxValue + 1`: dat compileert niet
    (`error CS0220: The operation overflows at compile time in checked mode`). Het gaat via een variabele.
  - De TODO in `content/3_data/5_debuggen.md:97` blijft staan. De Breakpoint-detective doet wat
    ze vraagt, maar in de oefeningen en niet in het boek.
  - H5: niets aangeraakt. Een notitie over Enum bij BMI staat onderaan `H05_beslissingen.md`.
- Nieuwe vondst, niet aangepast: `content/3_data/4c_math.md:203` belooft `∞` bij `x / y`. Zonder
  `Console.OutputEncoding = System.Text.Encoding.UTF8;` gaf dotnet hier een `8` (getest met
  omgeleide uitvoer op een nl-BE-pc met code page 850). Voorspel de uitvoer deel 2 zet de UTF-8-lijn
  daarom in de code en vermeldt de 8.
- Gecontroleerd: alle code met dotnet 10 in het `Main`-skelet (nl-BE), met de invoer uit de
  voorbeelden. Ook de getallen in de Lessen en de tabel in `4b` (via `CultureInfo`, en-US
  tegenover nl-BE), en seed 42 (twee keer 18,4). `quarto render oefeningen/`, het slot-script op een
  kopie (niets in de zoekindex; de vijf gemelde woordgroepen komen uit de voorbeelduitvoer van
  Supercomputer deel 2 en de code van Steven in de opgave), het coach-script (17 knoppen, geen
  meldingen), en screenshots van de pagina, Stevens busreis, de Breakpoint-detective en de
  Festivalganger.
