# H5: Beslissingen

> **Beslist door Tim (2026-09-11), zie README:** Fifa ranking berekenen wordt geschrapt. De afbeelding
> van de Stemwijzer mag hertekend worden met de skill `afbeelding`, zonder echte partijen.

Bronnen: `oefeningen/5_beslissingen/a_practica.md` (volledig), `oefeningen/_coach/5_beslissingen.md`,
`content/4_beslissingen/` (0_beslissingen_intro, 1_logic_and_relationsoperator, 0_if, 3_scope,
2_switch, enum, zieverder), `content/B_appendix/boete.md`, de afbeelding
`oefeningen/assets/2_beslissingen/stemwijzer.png`, `oefeningen/4_data/A_Practica.md` (vluchtig), het
begin van `oefeningen/6_herhalingen/A_practicasamen.md`, en de gerenderde
`build/oefeningen/5_beslissingen/a_practica.html` om de opmaak van de oplossingen na te kijken.
Alle oplossingen zijn uitgevoerd met dotnet 10 (cultuur nl-BE), met de grensgevallen erbij.

De pagina telt 17 oefeningen, waarvan 8 Essential. Geen enkele oefening heeft een lus nodig: waar
iets herhaald wordt (Casino 3, Quiz, Schaak-Elo) staat de code gewoon onder elkaar. Dat klopt met
de leerstof.

## 1. Fouten die sowieso weg moeten

- **Drie oplossingen staan niet in een codeblok.** Enum bij BMI
  (`oefeningen/5_beslissingen/a_practica.md:920`), Fifa ranking (`:1052`) en Oscars (`:1205`) hebben
  geen ```` ```java ````. In de gerenderde pagina worden de lijnen aan elkaar geplakt tot lopende
  tekst, met krullende aanhalingstekens (“ ”), en `// --- INPUT ---` wordt een lange streep. Wie dat kopieert, krijgt enkel
  compilerfouten. En net de Final Essential is dus onleesbaar. Zet de enum in een eigen blok met de
  zin "binnen `class Program`, boven `Main`", zoals bij Enum seizoenen (`:824`). Nu staat de
  enum-lijn boven de rest van de code, alsof ze in `Main` hoort: precies de fout waar het boek voor
  waarschuwt (`content/4_beslissingen/enum.md:342`).
- **GuntherD Stemwijzer (Essential): de oplossing geeft verkeerde uitslagen** (geverifieerd met
  dotnet).
  - Elke vraag zegt `(j/n)` (`:734`), maar de code vergelijkt met `"nee"` (`:737`). Wie braaf `n`
    typt, komt in de ja-tak terecht: n, n, n geeft "Je stemt best op CDenV".
  - Lijn `:745` test `eetVraag` in plaats van `schuldVraag`. Die test is daar altijd waar, dus sp.a
    is onbereikbaar: nee, nee, ja gaat door naar de Sinterklaasvraag.
  - "Sinterklaar" (`:747`).
  - Voorstel: kies één antwoordvorm (`j`/`n`) en gebruik die in vraag én test.
- **Enum verkeerslicht (Essential): de oplossing compileert niet.** De definitie van
  `enum Verkeerslicht` ontbreekt (`:896-912`). Dit is de oefening die het patroon moet tonen.
- **Schaakstuk: voorbeeld en oplossing verschillen overal.**
  - Het voorbeeld toont "Stuk1 kan enkel horizontaal of verticaal bewegen." (`:393`), de oplossing
    "Stuk1:" met daaronder "Een toren kan ..." (`:464`). Bij twee dezelfde stukken staat er
    "Beide zijn het zelfde en kunnen enkel schuin bewegen." (`:405`), de oplossing toont twee lijnen.
  - De invoer `>Loper_` (`:401`) laat `Enum.Parse` crashen, net als `toren` met kleine letter
    (geverifieerd met dotnet). De opgave waarschuwt daar nergens voor.
  - "De snelle manier" (`:520-533`) hoort bij een andere oefening (willekeurige kleur en stuk tonen)
    en heeft een eigen `public static void Main()`. Weg ermee.
- **Orakeltje van Delphi, part deux (Essential) crasht.** Een man van 117 of een vrouw van 150 geeft
  `Next(5, 4)` of `Next(5, 1)`, en dat is een `ArgumentOutOfRangeException` (geverifieerd met
  dotnet). Dat is net het soort grensgeval waar dit hoofdstuk over gaat. Voorstel: de constanten
  op 150 en 120 zetten (nu heten ze `VROUWMAX` maar staan ze op 151, `:260`), `Next(5, max + 1)`
  gebruiken, en in de opgave vragen wat het orakel zegt tegen wie de maximumleeftijd al voorbij is.
  Ook: `else` vangt alles wat geen `m` is, dus `M` krijgt de vrouwenformule. Een `else if` op `"v"`
  plus een `else` is correcter. De eerste zin (`:247`) loopt niet: "Voor het orakel je vertelt".
- **Schoenverkoper: een lege tip.** `:148-151` belooft een extra opgave voor wie het zonder `if` kan,
  en dan volgt er niets. Met `Math.Min` en `Math.Max`, die in H4 gezien zijn
  (`content/3_data/4c_math.md:153`), gaat het:
  `Math.Min(aantal, 9) * 20 + Math.Max(aantal - 9, 0) * 10` geeft voor 8, 9, 10 en 12 schoenen
  hetzelfde als de oplossing (geverifieerd met dotnet). Vul de tip daarmee aan of schrap hem.
  Verder: `### a` in de eerste oplossing (`:95`) is een restje. Fase 2 zegt "eerst aan de kassier",
  maar de oplossing vraagt eerst het aantal schoenen (`:127-130`).
- **Ohm-berekenaar: de opgave lokt zelf de fout uit.** Ze schrijft "als dus de gebruiker "Spanning"
  kiest" met hoofdletter (`:189`), terwijl de oplossing met `"spanning"` vergelijkt. Wie dat volgt,
  krijgt "Verkeerde keuze. Byebye" (geverifieerd met dotnet). `ToLower` is nog niet gezien. Schrijf
  de keuzes in de opgave in kleine letters en zeg dat ze exact zo getypt moeten worden. Het voorbeeld
  zegt "Ampere" (`:200`), de oplossing "Ampére" (`:232`); juist is "ampère". Op `:195` ontbreekt de
  `>` voor de invoer.
- **Quiz: vraag 3 rekent 1830 fout** (`:591-605`). De meeste studenten en bronnen antwoorden 1830;
  1831 is de eed van Leopold I. Kies een vraag waar geen discussie over kan zijn. De oplossing heeft
  geen `default`: wie `B` typt, krijgt geen boodschap en geen punt (geverifieerd met dotnet), terwijl
  de coach-data dat als valkuil noemt. "Zoek op hoe je de kleur ... kunt aanpassen" (`:541`) is
  achterhaald: kleur is sinds H1 gezien, en de oplossing gebruikt er geen. In `:614` ontbreekt een
  spatie na de dubbelpunt.
- **Schaak-Elo met if en Random:** de foutboodschap uit de opgave (`:978`) staat niet in de
  oplossing (`:992`). Een kleine `d` laat stilletjes speler A winnen (geverifieerd met dotnet); de
  opgave zegt niet wat er bij een onbekende letter moet gebeuren. De rode achtergrond is niet
  gevraagd.
- **Oscars (Final Essential):** in het voorbeeld typt de gebruiker `Horror` (`:1188`), de oplossing
  vraagt een nummer (`:1209`). Het voorbeeld heeft `> ` met spatie, de oplossing een lege lijn meer
  voor "Publieksscore".
- Kleinere dingen: bovenaan een losse `callout-warning` met een typfout ("eerste de volledige opgave
  doorneemt", `:4`) in plaats van een `.vooraf`-blok, en twee keer `<!--# Hoofdstuk 5-->`. Casino 3
  zegt "Proficat!" (`:333`, `:355`), "You lose!" in het voorbeeld (`:321`) en "You lose." in de
  oplossing, en `:346` springt verkeerd in. BMI met if reset de kleur niet (de coach noemt dat een
  valkuil) en toont korte teksten terwijl de opgave lange geeft (`:19-21`). `:44` heeft een kapotte
  code-opmaak (``else ``if(bmi>=40)`` ``). Verkeerslicht: "(bron oefening: gemaakt samen met
  ChatGpt)" (`:893`) wordt beter het label `(GPT)`. Kleurcode: dubbele spatie in "waarde van  2700"
  (`:660`).

## 2. Wat sterker kan

- **Volgorde.** De pagina opent met BMI (een keten van vijf takken met kleuren) en pas als vijfde
  komt Casino, de eenvoudigste oefening (één `if`/`else`). Draai dat om. Bij de enums opent
  Schaakstuk (drie switches), terwijl Verkeerslicht volgens de coach-data "vooral bedoeld is om het
  patroon te oefenen". Verkeerslicht hoort vooraan het enum-blok. Zie sectie 5.
- **Grensgevallen expliciet maken.** Het hoofdstuk draait om `<` tegenover `<=`, maar geen enkele
  opgave vraagt om de grenzen te testen.
  - BMI met if: laat de student 18,5, 25, 30 en 40 natesten. En er zit een echt grensgeval in: 180 cm
    en 80,99 kg geeft "BMI van 25" op het scherm en toch "Normaal gewicht" (geverifieerd met
    dotnet), omdat de test op de onafgeronde waarde gebeurt. Goed voor een extra lijn in de
    Les-callout, of rond eerst af en test dan.
  - Oscars: "Totaalscore tussen 120 en 150" (`:1181`) liever zoals bij BMI: "van 120 tot 150, 150
    niet inbegrepen".
  - Schaak-Elo: "tussen 500 en 3000" (`:979`) wordt "van 500 tot en met 3000", zoals de oplossing
    doet.
  - Schoenverkoper fase 3: "enkel een getal van 3 tot en met 10 kan invoeren" (`:154`) klinkt als
    opnieuw vragen, en dat kan pas met een lus. Beter: "Voert de kassier een getal buiten 3 tot en
    met 10 in, dan ...".
- **Casino en Casino 3 samen**, met Casino 3 als `**Deel 2.**`. Voeg er een tip aan toe: de kans om
  drie keer juist te raden is 1 op 216, dus toon de worp tijdelijk op het scherm of kijk met een
  breakpoint (H4 debuggen), anders test je het winnende pad nooit. Een Les-callout kan tonen hoe een
  `bool nogInHetSpel` de drie keer "You lose." en de diepe nesting weghaalt.
- **Schaakstuk herwerken tot twee switches.** Nu kopieer je dezelfde switch drie keer (redundante
  code op het boeteblad). Beter: elke switch vult een `string` (`bewegingStuk1`, `bewegingStuk2`),
  daarna beslist één `if (stuk1 == stuk2)` wat er getoond wordt. Dat traint "beslissen en tonen
  scheiden", zoals Enum bij BMI. Gebruik `Enum.Parse<Schaakstuk>(..., true)`
  (`content/4_beslissingen/enum.md:320`) zodat `toren` ook werkt.
- **Enum seizoenen, deel 2: het volgende seizoen tonen** met `huidigSeizoen + 1`. `Herfst + 1` geeft
  `Onbekend`, niet `Winter` (geverifieerd met dotnet). De student moet dat grensgeval zelf met een
  `if` opvangen. Zo komt "een cast controleert niets" (`enum.md:239`) toch in een oefening terug.
- **Oscars: de cast-valkuil zichtbaar maken.** Wie `7` als genre typt, ziet "Genre (7): 0" en
  sterren 9 geven "+90" (geverifieerd met dotnet). Ofwel het genre als naam inlezen met `Enum.Parse`
  (dat past bij het voorbeeld), ofwel het nummer houden en de controle op genre en sterren (1 tot 5)
  in de opgave zetten. De coach-data verwacht die controle al. Een positieve genrebonus verschijnt
  als "20", niet als "+20" zoals de regisseursbonus.
- **Schrikkeljaar, deel 2:** bewaar de test in `bool isSchrikkeljaar` en kies de tekst met de
  ternaire operator. Dan wordt die operator eindelijk ergens gebruikt. Een Les-callout over de haakjes
  (`&&` gaat voor `||`) past hier ook.
- **Ohm-berekenaar:** weerstand 0 geeft "∞ Ampére" (geverifieerd met dotnet). Een `if` die dan
  "Kortsluiting!" toont, is een logische uitbreiding.
- **GuntherD Stemwijzer:** de afbeelding dateert van voor 2021 (sp.a heet ondertussen Vooruit) en
  gaat over echte partijen. Overweeg een eigen beslissingsboom zonder partijen in de huisstijl (via
  de skill `afbeelding`, Tim kiest). De opgave vraagt geen enum, de oplossing en de coach-data wel;
  kies. Staat de oefening in het if-blok (sectie 5), dan is een `string` voor het profiel genoeg.
- **Voorbeelduitvoer ontbreekt of wijkt af van de afspraak.** BMI, Quiz, Stemwijzer en Schaak-Elo
  hebben geen voorbeeld; Casino 3 en Kleurcode geen `>` voor de invoer. Voor BMI is een
  `.console .kleur`-blok zinvol.
- **Les-callouts:** enkel BMI heeft er één. Kandidaten: Orakeltje (bovengrens van `Next` en het
  grensgeval), Schrikkeljaar (haakjes), Casino deel 2 (testen), Enum seizoenen (Herfst + 1).
- **Meerdelige oefeningen** als `**Deel 1.**` in plaats van "Fase 1:" (Schoenverkoper `:86`, `:117`,
  `:154`).

## 3. Wat weg kan (of verhuist)

- **Fifa ranking berekenen (PRO): weg.** De formule staat enkel in een externe pdf (`:1048`), de
  oplossing gebruikt `ToLower()` (`:1118`, pas in H8: `content/7_arrays/stringarray.md:144`) en
  `Console.ReadLine()[0]` (`:1087`, ook H8), en die crasht op een lege invoer (geverifieerd met
  dotnet). De dubbele omweg letter → enum → getal is precies wat het boeteblad "onnodige code" noemt,
  en `I`, `W`, `P`, `We` en `pbeforeOpponent` botsen met de naamgevingsboetes. Wat ze aan
  beslissingen traint (een keuze omzetten naar een getal), doen Kleurcode en Quiz al.
- **Casino 3 als aparte oefening:** wordt deel 2 van Casino (zie sectie 2).
- **Schaak-Elo met if en Random:** label `(PRO)` en naar achteren. Ze bouwt verder op de
  PRO-oefening van H4, dus wie die oversloeg, kan hier niet mee. Wat ze nieuw brengt (een ongeldige
  waarde vervangen door een standaardwaarde) zit al in Schoenverkoper fase 3.
- **"De snelle manier" bij Schaakstuk:** weg (zie sectie 1).
- Moet de lijst nog korter: Kleurcode en Ohm zijn allebei "keuze inlezen, dan rekenen" rond
  elektronica. Eén van de twee kan optioneel worden. Kleurcode traint wel de switch; Ohm enkel wat
  BMI al doet.

## 4. Gaten: kansen voor nieuwe oefeningen

Er staat geen enkele oefening op de pagina waarin de student code leest. Scope, de ternaire
operator, `!`, De Morgan, `==` op `double` en de puntkomma na een `if` worden in het boek uitgelegd
maar nergens geoefend. Hoofdlettergevoeligheid komt enkel voor als iets waar de student per ongeluk
over struikelt (Ohm, Kleurcode: `Rood` geeft stilletjes 700 Ohm, geverifieerd met dotnet).

1. **Voorspel de uitvoer** (*Essential*). Zeven à acht korte fragmenten, eerst op papier, dan
   uitvoeren: een else-if-keten in de verkeerde volgorde, een `if` zonder accolades, een puntkomma
   na de `if`, `"Ja" == "ja"`, `isLid || isStudent && heeftKaart`, een ternaire operator, een switch
   met samenvallende cases, `(Kleur)5` en `0.1 + 0.2 == 0.3`. Andere waarden en context dan de
   "Test jezelf" in het boek. Traint code lezen en de valkuilen uit de leerstof.
2. **Stevens ticketprijs** (*Essential*). Regels: onder 12 gratis, van 12 tot 25 (25 niet inbegrepen)
   15 euro, 65 of ouder 12 euro, anders 20 euro. Steven levert dit van de A.I.:
   ```java
   double prijs = 20;
   if (leeftijd < 12)
       prijs = 0;
   if (leeftijd > 12 && leeftijd < 25)
       prijs = 15;
   if (leeftijd > 65)
       prijs = 12;
   ```
   Hij testte met 8, 20 en 70 en alles klopte. De student maakt een testtabel met de grenzen (11,
   12, 24, 25, 64, 65): 12 en 65 betalen 20 euro in plaats van 15 en 12 (geverifieerd met dotnet).
   Daarna herschrijft hij het als één keten die enkel de bovengrens test, zoals bij BMI. Deel 2:
   Steven zet de korting in een variabele binnen de `if` en toont ze erna. De compiler zegt
   `The name 'korting' does not exist in the current context`; verhuist hij de declaratie zonder
   beginwaarde, dan wordt het `Use of unassigned local variable 'prijs'` (beide geverifieerd met
   dotnet; Visual Studio kan het iets anders formuleren). Traint grensgevallen en scope, met fouten
   die de compiler vindt en fouten die hij niet vindt.
3. **Pretparkpoort** (puzzel). De lijnen van een else-if-keten op lichaamslengte (onder 100 niet
   toegelaten, onder 120 enkel met begeleider, onder 140 enkel kinderattracties, anders alles) staan
   door elkaar, met één indringer: `else (lengte >= 140)`. De student zet ze in de juiste volgorde en
   legt uit waarom de indringer niet compileert. Traint de volgorde van tests en de `else` zonder
   voorwaarde. Niet Essential.

## 5. Voorgestelde volgorde

If en else: Casino (met deel 2, ex-Casino 3) → Orakeltje van Delphi, part deux → BMI met if →
Voorspel de uitvoer → Stevens ticketprijs → Schoenverkoper → Pretparkpoort → Schrikkeljaar →
Ohm-berekenaar → GuntherD Stemwijzer

Switch: Quiz → Kleurcode weerstand naar ohm

Enum: Enum verkeerslicht → Enum seizoenen (met deel 2) → Enum bij BMI → Schaakstuk → Oscars: The
Academy kiest (Final Essential) → Schaak-Elo met if en Random (PRO)

Dat zijn 18 oefeningen, waarvan 10 Essential. Meldingen bovenaan in één `.vooraf`: lees de volledige
opgave eerst, invoer begint met `>`, en tekst vergelijken is hoofdlettergevoelig (typ keuzes exact
zoals in de opgave).

## 6. Nevenvondsten

- **Coach-data.**
  - "Kent al" (`oefeningen/_coach/5_beslissingen.md:21-28`) mist de ternaire operator, nesting,
    kortsluiten en De Morgan, en dat `==` op tekst hoofdlettergevoelig is. Bij H4 (`:16`) ontbreken
    `Math.Min` en `Math.Max`.
  - Stemwijzer (`:197`) verwacht een enum die de opgave niet vraagt. Oscars (`:299`) verwacht een
    controle op de sterren die de opgave niet vraagt.
  - Enum bij BMI (`:245`) noemt "geen startwaarde" een valkuil, terwijl de oplossing
    (`a_practica.md:931`) er zelf geen geeft. Dat compileert omdat de keten op een `else` eindigt,
    maar `content/4_beslissingen/3_scope.md:59` zegt "Geef zo'n variabele dus altijd een
    beginwaarde".
  - "Kent nog niet" (`:36`) zegt geen `ToLower`, maar de Fifa-oplossing gebruikt het.
  - Na het samenvoegen van Casino en Casino 3 moeten de titels mee aangepast worden.
- **Leerstof.** `content/4_beslissingen/0_if.md:352` laat enkel wie "hoger dan 18" is binnen
  (`leeftijd > 18`), `zieverder.md:28` gebruikt `>= 18`. In een hoofdstuk over grenzen weigert het
  eerste voorbeeld dus een achttienjarige. Ook `1_logic_and_relationsoperator.md:150`.
- `content/4_beslissingen/enum.md:469`: `enum gamestate` begint met een kleine letter, overal elders
  in het boek beginnen typenamen met een hoofdletter.
- Externe links in opgaven kunnen verdwijnen: de kleurentabel van Digikey (`a_practica.md:649`) en de
  FIFA-pdf (`:1048`). De kleurentabel past als tekstschema op de pagina zelf.
- `oefeningen/6_herhalingen/A_practicasamen.md:3-5` zegt "Vanaf dit hoofdstuk zul je véél meer
  oefeningen voorgeschoteld krijgen", terwijl H5 er al 17 heeft. Die pagina heeft ook nog losse
  callouts bovenaan in plaats van een `.vooraf`-blok.
