# H2: De basisconcepten van C#

> **Beslist door Tim (2026-09-11), zie README:** Dertien in een dozijn verhuist van H3 naar hier.
> Is H3 nog niet doorgevoerd, doe de verhuis dan volledig (ook weghalen uit H3 en de coach-data van beide).

Bronnen: `oefeningen/2_csharpbasics/A_practica.md` (de enige pagina van dit hoofdstuk, zonder
afbeeldingen in de opgaven), `oefeningen/_coach/2_csharpbasics.md`, `content/1_csharpbasics/`
(`0_csharpessentials.md`, `1_datatypes.md`, `1b_variabelen.md`, `2_expressies.md`,
`3_constanten.md`, `solsprojects.md`, `zieverder.md`), `content/B_appendix/boete.md`,
`oefeningen/1_intro/A_Practica.md`, het begin van `oefeningen/3_tekst/a_practica.md`,
`oefeningen/4_data/` (enkel gezocht op de k/d-ratio). Alle oplossingen zijn uitgevoerd met dotnet 10
in het klassieke `Main`-skelet, met cultuur nl-BE (komma als decimaalteken).

## 1. Fouten die sowieso weg moeten

- **Tafel en Console.Clear(): de oplossing slaat een pauze over.** Na de zesde lijn ontbreken
  `ReadLine` en `Clear` (`oefeningen/2_csharpbasics/A_practica.md:310-312`). Lijn 6 en 7 verschijnen
  samen op het scherm; tien lijnen, maar acht pauzes in plaats van negen (geverifieerd met dotnet).
  De voorbeelduitvoer toont "Druk op enter voor de volgende lijn." (`:245`), de oplossing niet. De
  opgave spreekt van een variabele `teller` (`:255`), de oplossing noemt ze `getal` (`:288`).
- **De Kassa: voorbeeld en oplossing geven niet hetzelfde.** De oplossing toont
  `3 x Cola : 8,399999999999999 euro` en `Gemiddeld/prod : 4,8999999999999995 euro`, het voorbeeld
  `8,4` en `4,9` (`:430`, `:435`, geverifieerd met dotnet). Afronden kent de student pas in H4, dus
  hij kan dit niet oplossen. Voorstel: cola aan 2.50 euro. Dan geeft alles een net getal: `7,5`,
  `28,5`, `30,78` dollar en `4,75` gemiddeld (geverifieerd met dotnet). Verder in dezelfde oefening:
  - De opgave vraagt `****************` (16 sterren, `:411`), het voorbeeld en de oplossing gebruiken er 25.
  - `totalFriet`, `totalKoninginne`, `totalCola` naast `totaal` en `totaalAantal` (`:452-457`): half
    Engels, half Nederlands. Dat is net de boete "Naamgeving niet consistent" (-2) uit
    `content/B_appendix/boete.md:276`. Maak er `totaalFriet` enz. van.
  - De opgave vraagt voor de prijzen een `double`-variabele (`:396`), de oplossing maakt er een
    `const` van (`:442-444`). Als het const blijft: `PRIJS_FRIET` in hoofdletters, zoals
    `content/1_csharpbasics/3_constanten.md:12` voorschrijft en zoals `WISSELKOERS` twee lijnen lager wel doet.
  - "(in het Rood)" en "(in het Groen)" staan in het tekstblok van de uitvoer (`:432-433`). Een
    beginner typt dat mee. Vervang door een `.console .kleur`-blok zoals in H1.
  - "Koninginnehapje" (`:393`) tegenover "koninginnenhapje" (`:397`). Het is koninginnenhapje.
- **Simple maths: de verwachte uitvoer is niet wat de student krijgt.** Typt hij de vier
  berekeningen over zoals ze er staan, dan geeft C# `12` en `3` voor de derde en vierde
  (geverifieerd met dotnet). Het voorbeeld (`:352-353`) toont `11,818181818181818` en `3,5`, dus de
  student moet stilzwijgend `11` in `11.0` en `6` in `6.0` veranderen, terwijl het label nog altijd
  `/ 11` zegt. De commentaar in de oplossing "begrijp je waarom je het stuk na de komma niet ziet?"
  (`:371`) klopt niet: met `11.0` zie je het stuk na de komma net wél. De Les zegt dat de oefening
  over haakjes gaat (`:357`), terwijl enkel de tweede berekening haakjes heeft. Een losse spatie
  achter `geeft 5` (`:351`). Zie sectie 2 voor een herwerking.
- **Gewicht in space: Newton klopt niet, en de oplossing is onvolledig.** De opgave zegt "uitgedrukt
  in Newton" (`:191`) en de uitvoer eindigt op `N.` (`:209`), maar wie zijn eigen gewicht invult (80,6)
  denkt in kilogram, en 80,6 keer 0,38 is geen Newton. De leerstof rekent hetzelfde voorbeeld in kg
  (`content/1_csharpbasics/2_expressies.md:61-68`). De oplossing (`:223-232`) stopt na twee planeten met
  "enzovoort" en toont geen kleuren, terwijl Jupiter in het rood en Pluto in het groen moeten. De
  student kan de moeilijkste stap dus niet vergelijken. De constanten heten `gMerc`, `gVenus`, niet in
  hoofdletters zoals `3_constanten.md:12` vraagt.
- **BTW: punt in plaats van komma.** Het voorbeeld toont `24.2` (`:162`), op een Belgische pc komt er
  `24,2` (geverifieerd met dotnet). Alle andere voorbeelden op de pagina gebruiken een komma.
- **Euro naar dollar: "gebruik de huidige wisselkoers"** (`:56`) terwijl het voorbeeld met 1.03
  rekent. Wie de echte koers opzoekt, krijgt nooit `81,0095` en denkt dat hij iets fout deed. Zet de
  koers 1.03 in de opgave. De opgave toont het formaat zonder punt (`:56`), het voorbeeld met punt (`:67`).
- **Kill/Death-ratio belooft iets wat niet komt.** "In hoofdstuk 4 gaan we dit oplossen" (`:122`),
  maar in `oefeningen/4_data/` staat geen k/d-oefening. Bovendien kan het nu al met H2-leerstof:
  `1.0 * kills / deaths` met twee `int`s geeft `4,888888888888889` (geverifieerd met dotnet). Zie
  sectie 2. Kleiner: "deads" (`:105`), `double kills=44;` zonder spaties (`:134`, bladspiegel).
- **Tekstmaker: het pad klopt niet.** De tip zegt dat het bestand in `...\bin\debug` staat (`:511-513`),
  maar er zit nog een map met de .NET-versie onder, zoals `content/1_csharpbasics/solsprojects.md:83-85`
  zelf uitlegt (`bin\Debug\net10.0`). "Je geeft hierbij 2 variabelen mee" (`:498`): het voorbeeld
  eronder geeft twee literals mee. Schrijf "twee dingen" of "twee argumenten".
- **Bovenaan de pagina staan drie losse callouts** (`:3-18`) in plaats van één `::: {.vooraf}`. Daarin
  ook "benoemd" (`:4`, moet "benoemt" zijn). H1 zei "per oefening een nieuwe solution", H2 zegt "per
  hoofdstuk een solution met een project per oefening". Die wissel is logisch (H2 leert
  `solsprojects.md`), maar zeg het er dan uitdrukkelijk bij, link naar die sectie in het boek, en
  waarschuw voor het verkeerde startup project (`solsprojects.md:119-123`): met tien projecten in één
  solution is dat de fout die in het labo het meest voorkomt.

## 2. Wat sterker kan

- **Gemiddelde is de eerste oefening, en meteen de moeilijkste valkuil (twee zelfs).** Haakjes én
  gehele deling in één keer. Zet ze na Euro naar dollar en Kill/Death-ratio (sectie 5). Geef een
  voorbeelduitvoer: met 224, 177 en 210 komt er `Je sliep gemiddeld: 203,66666666666666 uren per
  maand.` (geverifieerd met dotnet). Laat de student daarna bewust de twee foute versies uitvoeren en
  verklaren: zonder haakjes komt er `471`, met `/ 3` komt er `203` (geverifieerd met dotnet). De zin
  "de hoeveelheid uren slaap je die in die maand verwacht te doen" (`:28`) loopt niet.
- **Kill/Death-ratio, deel 2.** Nu zijn `kills` en `deaths` allebei `double` (`:109`), terwijl de
  opgave net vraagt waarom *één* van beide best een `double` is (`:120`). Voorstel: deel 1 zoals nu,
  deel 2 met `int kills` en `int deaths`, en zoek een manier met enkel H2-leerstof om toch 4,888 te
  krijgen (de truc met `1.0 *` staat in het salarisvoorbeeld, `2_expressies.md:237-242`). Laat daarna
  voorspellen wat `1.0 * (kills / deaths)` en `kills / deaths * 1.0` geven: allebei `4`
  (geverifieerd met dotnet). Zo wordt de volgorde van bewerkingen gekoppeld aan de deling. De
  ingeklapte tip (`:125-127`) zegt hetzelfde als de waarschuwing erboven en mag weg. De oplossing
  rekent binnen de `WriteLine` (`:137`), wat de coach bij Euro naar dollar een valkuil noemt
  (`oefeningen/_coach/2_csharpbasics.md:63`): bewaar het resultaat in `double ratio`.
- **BTW oefent `const` zonder dat de student ooit ziet wat `const` doet.** Voeg toe: "zet onderaan
  `BTW = 6;` en lees de foutmelding". Die luidt `CS0131: The left-hand side of an assignment must be
  a variable, property or indexer` (geverifieerd met dotnet), niet echt een melding die zegt "dit is
  een constante", en dus leerzaam. Tweede uitbreiding, voor wie de Les (`:170`) te snel gelooft: met
  `int prijs = 20` en `const int BTW = 21` geeft `prijs + prijs / 100 * BTW` gewoon `20`, en
  `prijs + prijs * BTW / 100` geeft `24` (geverifieerd met dotnet). "De haakjes zijn niet nodig" klopt
  enkel omdat alles `double` is. De oplossing noemt het resultaat `berekening` (`:180`): `prijsMetBtw`
  zegt wat erin zit. In de tip staat "Kies zelf hoe je dit doet?" (`:166`), een vraagteken te veel.
- **Simple maths wordt een voorspel-oefening en Essential.** Het is de enige oefening die de volgorde
  van bewerkingen en modulo echt traint, en ze staat nu zonder label. Voorstel: (1) reken op papier
  uit wat C# geeft, met gehele deling; (2) typ de vier lijnen letterlijk over en vergelijk (`23`, `5`,
  `12`, `3`); (3) pas enkel de derde en vierde aan zodat de wiskundig juiste waarde verschijnt, en
  toon ook in het label `/ 11.0`. De vraag "waarom moet je bij de derde en vierde met double werken"
  (`:342`) krijgt dan een antwoord dat de student zelf gezien heeft.
- **Gewicht in space: laat de Newton echt berekenen.** Met een `const double G_AARDE = 9.81;` en de
  massa in kg wordt het `massa * G_AARDE * factor`, en klopt `N.` wel. Dat is meteen een expressie met
  drie factoren in plaats van één vermenigvuldiging. Toon de gekleurde uitvoer in een
  `.console .kleur`-blok en geef een volledige oplossing met kleuren en `ResetColor`. De uitvoer
  `30,627999999999997` wordt nergens uitgelegd, niet in de oefening en niet in de leerstof. Eén zin
  volstaat: kommagetallen worden binair bewaard en zijn daardoor niet altijd exact, afronden komt in H4.
- **Euro naar dollar: de Les spreekt over "constanten (zoals de koers)"** (`:81`), maar de koers is
  een gewone variabele en `const` komt pas bij BTW. Ofwel de Les herschrijven naar "variabele", ofwel
  hier al `const double KOERS = 1.03;` gebruiken en BTW het `const`-verhaal laten uitdiepen.
- **De Kassa krijgt geen Les-callout**, terwijl ze de gemengde deling `double / int` bevat
  (`:458`) die hier net wél goed gaat. Eén zin in een Les: "`totaal` is een `double`, dus
  `totaal / totaalAantal` is een kommagetal, ook al is `totaalAantal` een `int`."

## 3. Wat weg kan (of verhuist)

- **Tafel en Console.Clear(): tot en met 5 in plaats van 10.** De les (`Clear`, lege `ReadLine` als
  pauze, `teller++`) is na drie blokken al gezien. Zelfs de modeloplossing liep bij het kopiëren
  fout (sectie 1). Wie meer wil, verandert 411 in een ander getal, zoals de opgave al vraagt.
- **De ingeklapte tip bij Kill/Death-ratio** (`:125-127`), zie sectie 2.
- **Tekstmaker (PRO)** heeft niets met datatypes of expressies te maken. Mag blijven als bonus, omdat
  ze de student laat zoeken in de bin-map uit `solsprojects.md`, maar dan met het juiste pad. Anders
  past ze beter als opwarmer in H18 (bestanden).
- **Dertien in een dozijn** (`oefeningen/3_tekst/a_practica.md:66-104`) gebruikt enkel H2-leerstof: de
  gehele deling en modulo, en de tip zegt zelf "maak gebruik van je kennis van het vorige
  hoofdstuk". Het is de enige oefening waarin de gehele deling een hulpmiddel is in plaats van een
  valkuil. Overweeg ze naar H2 te verhuizen, achter Simple maths. Zie ook sectie 6.

## 4. Gaten: kansen voor nieuwe oefeningen

Wat niet geoefend wordt: een datatype kiezen, bereik, de literal-suffixen (`f`, `M`, `L`), `char`
tegenover `string`, `bool`, de verkorte notaties (`+=`, `/=`) en het verschil tussen `getal++` en
`++getal` (`2_expressies.md:111-124`), een oude waarde overschrijven, en de identifier-regels.
Kommagetallen komen enkel als `double` voor, `float` en `decimal` nergens. Code lezen gebeurt nergens,
behalve half in Simple maths.

1. **Welk datatype?** (*Essential*). Een lijstje van acht gegevens: aantal studenten in een klas, de
   wereldbevolking, de prijs van een product in een webshop, de temperatuur, of iemand gehuwd is, de
   eerste letter van je naam, het aantal assen van een trein, je postcode. De student kiest per
   gegeven een type en schrijft de declaratie met een passende literal. Daarna vier gegeven lijnen die
   niet compileren, met de melding erbij, en de vraag waarom:
   `float temperatuur = 12.5;` (`CS0664 ... use an 'F' suffix`), `decimal prijs = 19.99;` (`CS0664 ...
   use an 'M' suffix`), `int wereldbevolking = 8000000000;` (`CS0266: Cannot implicitly convert type
   'long' to 'int'`) en `char letter = "A";` (`CS0029: Cannot implicitly convert type 'string' to
   'char'`). Alle vier geverifieerd met dotnet. Traint `1_datatypes.md` en `1b_variabelen.md:76-133`,
   die nu in geen enkele oefening terugkomen.
2. **Voorspel de uitvoer** (*Essential*). Code lezen, zoals in H1. Eerst op papier, dan uitvoeren:

   ```java
   int getal = 5;
   getal++;
   getal += 3;
   getal /= 2;
   Console.WriteLine(getal);           // 4
   int a = 5;
   int b = a++;
   Console.WriteLine($"{a} {b}");      // 6 5
   Console.WriteLine(9 / 2);           // 4
   Console.WriteLine(9 / 2.0);         // 4,5
   Console.WriteLine(1.0 * 7 / 2);     // 3,5
   Console.WriteLine(1.0 * (7 / 2));   // 3
   Console.WriteLine(-7 / 2);          // -3
   Console.WriteLine(17 % 5 * 2);      // 4
   ```

   Alle uitkomsten geverifieerd met dotnet. Traint de verkorte notaties, `a++` in een toekenning,
   truncatie ook bij negatieve getallen (niet afronden naar -4), en haakjes rond een gehele deling. De
   verwachte uitvoer moet een komma tonen. Optioneel, als slot en als knipoog naar de Zwitserse trein
   uit `1_datatypes.md:6-8`: `byte assen = 255; assen++;` geeft `0` (geverifieerd met dotnet). Overflow
   wordt pas in `content/3_data/4c_math.md` uitgelegd, dus enkel als Tim dat hier al wil.
3. **Stevens gemiddelde** (*Essential*). Stagiair Steven laat een A.I. het gemiddelde van drie
   toetsen (14, 17 en 12, allemaal `int`) berekenen. Deel 1: twee fouten die de compiler vindt,
   `int gemiddelde = (score1 + score2 + score3) / 3.0;` (`CS0266: Cannot implicitly convert type
   'double' to 'int'`) en een tweede `double gemiddelde = ...` op een latere lijn (`CS0128: A local
   variable or function named 'gemiddelde' is already defined in this scope`), beide geverifieerd met
   dotnet. Deel 2: nu compileert het, maar `score1 + score2 + score3 / 3` geeft `35`. Steven zet er
   haakjes rond en krijgt `14`. Pas met `3.0` komt er `14,333333333333334` (alle drie geverifieerd met
   dotnet). Twee stille fouten na elkaar, die elk een andere regel uit het hoofdstuk raken. Het is
   een ander geval dan het "Zoek de fout" in `zieverder.md:21-34` (dat gaat over `1 / 2`).
4. **Graden omzetten**. Celsius naar Fahrenheit met `F = C × 9/5 + 32`, met `int celsius = 23`.
   Deel 1: schrijf het zelf, verwacht `73,4`. Deel 2: Steven schreef `9 / 5 * celsius + 32` en krijgt
   `55`, zijn collega schreef `celsius * 9 / 5 + 32` en krijgt `73` (geverifieerd met dotnet). Waarom
   verschillen die, en waarom is geen van beide juist? Geen Essential: ze herhaalt Stevens gemiddelde in een andere context.

## 5. Voorgestelde volgorde

Euro naar dollar → Welk datatype? → Kill/Death-ratio → Gemiddelde → Simple maths → Voorspel de
uitvoer → BTW → Stevens gemiddelde → Graden omzetten → (Dertien in een dozijn, als ze verhuist) →
Gewicht in space → Tafel en Console.Clear() → De Kassa → Tekstmaker (PRO)

Eerst één vermenigvuldiging, dan de keuze van het type, dan de gehele deling apart (k/d), dan pas
deling en haakjes samen (Gemiddelde, Simple maths). `const` komt bij BTW, net voor Steven er een
fout mee maakt. Gewicht, Tafel en Kassa zijn de grotere programma's op het einde.

## 6. Nevenvondsten

- **Coach-data, De Kassa:** de valkuil "Het totaal aantal stuks in een int bewaren en dan een gehele
  deling krijgen bij het gemiddelde" (`oefeningen/_coach/2_csharpbasics.md:144`) klopt niet: `totaal`
  is een `double`, dus `totaal / totaalAantal` is geen gehele deling. Enkel als ook het totaal een
  `int` is, gaat het mis. De aanpak zegt "met de prijzen als const" (`:139`), de opgave vraagt een
  `double`-variabele. Een van de twee aanpassen.
- **Coach-data:** "Kent al" noemt `float` en `decimal` en de literals `12.5f` en `12.5M` (`:17-19`),
  maar daar is nu geen enkele oefening voor. Met de nieuwe oefening Welk datatype? klopt het wel.
  `Console.Clear` staat onder "Kent al" (`:25`), maar staat nergens in de leerstof: het wordt enkel in
  de oefening zelf uitgelegd. Dat is goed zo, maar dan hoort het niet bij "hoofdstuk 2, de
  basisconcepten".
- **Leerstof, `content/1_csharpbasics/3_constanten.md:20`:** "Constanten in code worden ook soms magic
  numbers genoemd." Het is omgekeerd: een magic number is een los getal zonder naam midden in de
  code, zoals de `1.03` die de Les bij Euro naar dollar (`A_practica.md:81-83`) net afraadt. Een
  constante met een duidelijke naam is de oplossing ervoor.
- **Leerstof:** dat `0.1 + 0.2` in C# `0,30000000000000004` geeft (geverifieerd met dotnet) staat
  nergens in H2, terwijl de oefeningen er meteen tegenaan lopen (Gewicht in space, Kassa). Een korte
  callout in `1_datatypes.md` bij de precisietabel zou helpen.
- **H3, Dertien in een dozijn** (`oefeningen/3_tekst/a_practica.md:66-104`): de oplossing rekent
  `124 % doosGrootte` in plaats van `aantalEieren % doosGrootte` (`:99`), dus met andere getallen
  testen (wat de opgave vraagt) geeft een fout aantal. De uitvoer van de oplossing mist het woord
  "eieren" en schrijft `doosgrootte: 8` waar het voorbeeld `doosgrootte:8` toont (`:82`, `:101`).
  `const int doosGrootte` staat niet in hoofdletters (`:75`). Voor het rapport van H3, of voor de
  verhuis naar H2.
- **Leerstof, `content/1_csharpbasics/2_expressies.md:117-118`:** in het voorbeeld van `getal++` en
  `++som` verhoogt de tweede lijn `som`, niet `getal`. De commentaar klopt, maar de tekst eronder
  (`:121`) wisselt tussen `som++` en `++som`, en de student die dit in Voorspel de uitvoer moet
  toepassen, heeft baat bij een voorbeeld met één variabele.

---

## Doorgevoerd (2026-09-11)

- `oefeningen/2_csharpbasics/A_practica.md` telt nu 14 oefeningen in de volgorde van sectie 5.
  Nieuw: Welk datatype? (Essential, met een deel 2 over vier compilerfouten), Voorspel de uitvoer
  (Essential), Stevens gemiddelde (Essential) en Graden omzetten. Simple maths is Essential en een
  voorspel-oefening in twee delen. Kill/Death-ratio, Gemiddelde en BTW kregen extra delen zoals in
  sectie 2 voorgesteld.
- Alle fouten uit sectie 1 zijn weg. Keuzes daarbij:
  - Euro naar dollar: de koers blijft een gewone variabele; de Les spreekt nu van een vast getal en
    noemt het begrip *magic number*. `const` komt pas bij BTW.
  - De Kassa: cola aan 2.50 euro. De prijzen blijven `double`-variabelen zoals de opgave vroeg, enkel
    de wisselkoers is een `const`. Het label `Koninginha` op het ticket is gebleven.
  - Gewicht in space rekent nu echt in newton: `massa * G_AARDE * factor`, met volledige oplossing en
    een `.console .kleur`-blok. De uitvoer bevat `838,1271600000001`, met een tip over waarom.
  - Tafel gaat tot 5, de oplossing toont de boodschap en gebruikt `teller`.
- Bovenaan één `::: {.vooraf}` met de wissel naar één solution per hoofdstuk, een link naar
  "Meerdere projecten" in het boek en een waarschuwing over het startup project.
- **Dertien in een dozijn** is verhuisd uit H3 (pagina en coach-data), met de fix uit het H3-rapport
  en `DOOS_GROOTTE` in hoofdletters. Nieuw anker `h02-dertien-in-een-dozijn`. Genoteerd in `H03_tekst.md`.
- `oefeningen/_coach/2_csharpbasics.md` herschreven voor de 14 oefeningen: "Kent al" vult de verkorte
  notaties, `++getal` en de literals aan, `Console.Clear` staat apart als "uit de oefeningen", en de
  Kassa-valkuil over de gehele deling klopt nu. Code-lees-oefeningen hebben een `### Nota`.
- Leerstof: `3_constanten.md` legt *magic number* nu juist uit, `1_datatypes.md` kreeg een callout over
  `0.1 + 0.2`, en in `2_expressies.md` gaat het voorbeeld van `getal++` en `++getal` over één variabele.
- Bewust niet: de optionele `byte assen = 255; assen++;` bij Voorspel de uitvoer. Overflow komt pas in
  H4 en het rapport liet het aan Tim over.
- Nog te doen (zie README, Uitgesteld): Tim laat voor één of twee oefeningen een afbeelding maken.
- Gecontroleerd: alle code met dotnet 10 in het `Main`-skelet (nl-BE), ook de letterlijke
  compilermeldingen. `quarto render oefeningen/`, slot-script (geen lekken in de zoekindex; de gemelde
  woordgroepen zijn de berekeningen uit de opgave van Simple maths) en coach-script (geen
  waarschuwingen) op een kopie van de build, screenshots van Welk datatype?, Gewicht in space en De Kassa.
