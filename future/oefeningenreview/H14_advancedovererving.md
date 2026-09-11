# H14: Gevorderde overervingsconcepten

Bronnen: `oefeningen/14_advancedovererving/A_Practica.md` (de opgaven bevatten geen afbeeldingen),
`oefeningen/_coach/14_advancedovererving.md`, `content/13_advancedovererving/4_System_Object.md`,
`5_abstract.md`, `zieverder.md`, `kennisclips.md` en `review.md`, `content/20_exceptions/1_eigenuitzondering.md`,
`content/18_IsAs/6_equals.md` (H16, voor de overgang), `content/B_appendix/boete.md`,
`oefeningen/13_overerving/A_PracticaSimpel.md`, het begin van `oefeningen/15_compositie/A_PracticaComp.md`,
de Pokémon- en Bookmark-oefeningen uit H10 tot H12 waarop "Extra ToString" verder bouwt, en het begin van
`oefeningen/16_polymorfisme/A_Practica.md`.

## 1. Fouten die sowieso weg moeten

- **Money, money, money: de oplossing crasht meteen.** De getter van `Saldo` geeft `Saldo` terug in
  plaats van `saldo` (`oefeningen/14_advancedovererving/A_Practica.md:207`). Die roept zichzelf eindeloos
  op: "Stack overflow. Repeated 24101 times: at Rekening.get_Saldo()" (geverifieerd met dotnet). Met die
  lijn hersteld klopt de rest nog altijd niet met de opgave:
  - `BerekenRente` geeft saldo plus rente terug, de opgave vraagt de rente (`:193`). Zie `:233`, `:235` en `:243`.
  - `BankRekening` test op `Saldo > 0` in plaats van op meer dan 100 euro (`:231`). Met een saldo van 50
    euro geeft ze 52,5 terug, waar de opgave 0 verwacht (geverifieerd met dotnet).
  - De opgave vraagt "toon de werking in je main" (`:198`), de oplossing heeft geen Main.

  Voorstel: `get { return saldo; }`, een `BerekenRente` die enkel de rente teruggeeft, de drempel op 100,
  en een korte Main met de verwachte uitvoer erbij.
- **Extra ToString, Pokémon: de oplossing compileert niet.** Ze declareert `toResturn` en geeft
  `toReturn` terug (`:47`, `:52`): error CS0103 "The name 'toReturn' does not exist in the current
  context" (geverifieerd met dotnet). De opgave vraagt de "full stats" (`:13`), de oplossing toont de
  base stats. Kies één van de twee en laat beide hetzelfde zeggen.
- **Boek: de oplossing past niet bij de opgave.**
  - `CoffeeTableBook` staat door een verkeerde accolade ín `TextBook` (`:161`-`:173`). Wie in Main
    `new CoffeeTableBook()` schrijft, krijgt CS0246 "The type or namespace name 'CoffeeTableBook' could
    not be found" (geverifieerd met dotnet).
  - De opgave vraagt Nederlandse namen (`Boek`, `TekstBoek`, `KoffietafelBoek`, `Prijs`, `SchoolGraad`),
    de oplossing gebruikt Engelse (`Book`, `TextBook`, `Price`, `GradeLevel`, `Title`). De les op `:117`
    spreekt dan weer van `base.Price`.
  - Het formaat van ToString verschilt. De opgave vraagt "Titel - Auteur (ISBN) _ Prijs" (`:108`), de
    oplossing geeft `The Shining - Stephen King(5848152) 50`: geen spatie voor het haakje, geen `_`
    (geverifieerd met dotnet).
  - Het voorbeeld-ISBN `05848152` kan een `long` niet tonen, want de voorloopnul verdwijnt. Neem een
    getal van 13 cijfers zonder voorloopnul.
  - `TelOp` vult enkel titel en prijs in. Het omnibusboek toont `Omnibus van Stephen King,Janssens - (0) 40`
    (geverifieerd met dotnet). Zeg in de opgave wat de auteur en het ISBN van een omnibus worden, en zet
    een spatie na de komma.
  - De oplossing is opgedeeld in "Deel 1" en "Deel 2" (`:114`, `:176`), de opgave niet.
- **Dierentuin: de oplossing loopt in elke valkuil die de coach-data zelf opsomt**
  (`oefeningen/_coach/14_advancedovererving.md:147`-`:151`).
  - De lijst wordt nooit met startdieren gevuld, en "opnieuw beginnen" doet enkel `Clear()` (`:379`-`:381`).
  - Het gemiddelde is een gehele deling (`:370`). Omdat de lijst leeg is, crasht keuze b meteen met een
    `DivideByZeroException` (geverifieerd met dotnet).
  - Enkel de bovengrens wordt gecontroleerd (`:359`): een negatief nummer geeft een
    `ArgumentOutOfRangeException` (geverifieerd met dotnet). De prompt "van 0 tot {Dieren.Count}" (`:357`)
    telt er één te veel.
  - De opgave nummert het menu 1 tot 4 (`:336`-`:339`), de oplossing gebruikt a tot d (`:352`).
  - De opgave vraagt "zo modulair mogelijk" (`:341`), maar in de oplossing staat alles in Main.
  - De lokale variabele `Dieren` begint met een hoofdletter (`:346`), goed voor een naamgevingsboete.
  - "H13 Dierentuin" (`:345`) is de oude hoofdstuknummering.

  Voorstel: een nieuwe oplossing met aparte methoden (`VulStartdieren`, `VerwijderDier`, `ToonGemiddelde`,
  `LaatPraten`), zoals de coach-data al beschrijft.
- **Meme Lord Simulator: de oplossing is leeg** (`:479`-`:481`). Een Final Essentials met een
  Oplossing-knop die een leeg paneel opent. Ik heb een referentieoplossing geschreven die enkel gekende
  leerstof gebruikt (geverifieerd met dotnet). Twee dingen om mee te nemen:
  - de status "Dank/Cringe" in ToString gaat met een `if`, want de ternaire operator is nog niet gezien
    (coach `:57`);
  - het gemiddelde loopt enkel over de getoonde memes, met een controle op nul getoonde memes.
- **De opgave dwingt een boete af.** Boete "naamgeving niet consistent" (-2, `content/B_appendix/boete.md:276`):
  - `GeometricFigure` (Engels) heeft `Hoogte`, `Breedte` en `BerekenOppervlakte` (Nederlands) (`:261`);
  - Meme Lord legt `Author`, `ImageDescription`, `BaseLikes` en `GenerateFeed(List<Meme> allMemes)` op,
    naast `BerekenMemeWaarde` (`:437`-`:471`).

  Voorstel: alles in het Nederlands (`GeometrischeFiguur`, `Auteur`, `Beschrijving`, `BasisLikes`,
  `GenereerFeed`). Meme-jargon als "Dank" en "Cringe" mag als tekst blijven.
- **Geometric figures:**
  - De opgave spreekt van een constructor met "lengte en breedte" (`:272`), terwijl de properties
    `Hoogte` en `Breedte` heten.
  - De coach-valkuil (`oefeningen/_coach/14_advancedovererving.md:133`) noemt het fout om parameter `b`
    aan te passen. De officiële oplossing doet net dat (`:305`-`:308`). Het werkt toevallig, omdat
    `Breedte = b` erna komt: `new Vierkant(3, 5)` wordt 5 op 5 (geverifieerd met dotnet).
  - Voorstel: `Hoogte = h; Breedte = h;`, of de tweede constructor laten doorschakelen met `: this(h)`.
    Parameternamen als `b`, `h` en `l` zijn volgens `content/B_appendix/boete.md:254` ook niet duidelijk genoeg.
  - Typfout "autoproperties voor van" (`:261`).
- **Extra ToString, kleinere dingen:**
  - De tip "tip: `base()`" (`:34`) wijst naar de constructoraanroep. Bedoeld is `base.ToString()`.
  - Het voorbeeld van HiddenBookmark heeft twee spaties voor `---HIDDEN---` (`:31`), de oplossing één
    (geverifieerd met dotnet).
  - De openingszin is kapot: "Voeg ToString toe aan bestaande van volgende projecten" (`:9`).
  - De les zegt dat er met `+` geplakt wordt (`:40`), terwijl het boek `$` leert en de code beide mengt.
  - Typfout "evoor" (`:67`).
- **Terminologie:** "velden" op `:83` en `:95`, dat moet "instantievariabelen" zijn. Of gewoon
  "properties", want dat zijn het hier.
- **Opmaak:**
  - De Class designer-tip (`:1`-`:4`) staat niet in een `::: {.vooraf}`.
  - Geen enkele les is een callout met `title="Les(sen) uit deze oefening"`. Het zijn `callout-tip`'s met
    een vetgedrukte zin, verstopt in de oplossing (`:39`, `:66`, `:116`), dus er komt nooit een Les-knop.
  - Meme Lord gebruikt `##`-koppen (`:434`, `:447`, `:467`, `:476`), die de inhoudsopgave vullen. Maak er
    **Deel 1.** enz. van.

## 2. Wat sterker kan

- **Boek: laat de prijscontrole een exception opwerpen.** "Toon dat de prijs niet altijd zomaar ingesteld
  kan worden" (`:111`): nu negeert de setter een foute prijs zonder iets te zeggen. Een `TekstBoek` met
  `Prijs = 10` blijft gewoon op 0 staan en de student ziet niets (geverifieerd met dotnet). Laat de setter
  `throw new ArgumentOutOfRangeException(...)` doen, en laat Main dat opvangen en `e.Message` tonen. Zo
  wordt "zelf een exception opwerpen met een bestaand type" geoefend
  (`content/20_exceptions/1_eigenuitzondering.md:13`-`:44`). De les "god-methode" voor de static
  `TelOp` (`:117`) mag weg: god object is net een bekend antipatroon. De uitleg uit de coach-data ("het
  optellen hoort bij geen van beide boeken") is beter.
- **Geometric figures: een PRO-deel en een ToString.**
  - Een Vierkant blijft geen vierkant: na `new Vierkant(4)` en `v.Hoogte = 10` heb je 4 op 10 met een
    oppervlakte van 40 (geverifieerd met dotnet).
  - PRO-deel: maak `Hoogte` en `Breedte` virtual en laat Vierkant ze overriden, zodat een set beide zet.
    Dat hergebruikt het overriden van een property uit Boek. Getest: daarna 10 op 10, oppervlakte 100.
  - Voeg daarnaast een abstracte read-only property `AantalHoeken` toe, en een ToString in de abstracte
    parent die `GetType().Name` gebruikt: `Rechthoek van 4 op 3: 4 hoeken, oppervlakte 12`
    (geverifieerd met dotnet). Vierkant hoeft `AantalHoeken` niet te overriden, want Rechthoek deed dat al.
  - Dit oefent de abstracte property en `GetType()`, die nu nergens aan bod komen.
- **Dierentuin:**
  - `Zegt` is dubbelzinnig. "Via WriteLine getoond" (`:338`) doet denken aan een string die je
    teruggeeft, terwijl de oplossing `void` is en in de klasse zelf print. Kies `string Zegt()`, zoals
    `MaakGeluid` in de leerstof (`content/13_advancedovererving/5_abstract.md:71`): het is dezelfde les
    als bij ToString (teruggeven, niet printen). Dan moet de oplossing van Dierentuin advanced in H16 mee.
  - Neem dezelfde dieren als H16 verwacht (Koe, Slang, Varken; `oefeningen/16_polymorfisme/A_Practica.md:10`).
  - Laat `Dier` een ToString krijgen met `GetType().Name` en het gewicht.
- **Extra ToString:**
  - De Pokémon van H10 heeft al een `ShowInfo()` (`oefeningen/10_meminoop/A_poke1.md:261`). Laat de
    student die vervangen door ToString en in één zin uitleggen waarom de ene print en de andere
    teruggeeft.
  - De Bookmark-klasse van H12 gebruikt `WebClient` en `Regex` (`oefeningen/12_arraysvanklassen/A_practicaMem.md:666`).
    Geef een mini-`Bookmark` met enkel `Naam` en `URL` in de opgave, zodat wie het oude project niet meer
    heeft toch verder kan.
- **Meme Lord:**
  - Zeg bij de emoji (`:465`) dat `Console.OutputEncoding = System.Text.Encoding.UTF8;` bovenaan Main
    moet (H3, `content/2_tekst/7_unicode.md:15`). Zonder die lijn verschijnen er in de Windows-console
    vraagtekens.
  - Zeg ook dat "filtert eruit" (`:472`) "niet toont" betekent en niet "uit de lijst verwijdert". De
    coach-data waarschuwt al voor "Collection was modified" (`:170`).
  - Voeg voorbeelduitvoer toe, bijvoorbeeld uit de geteste referentieoplossing:

    ```text
    Tim post: Kat met zonnebril - Waarde: 320 - Status: Dank
    Cringe removed: Lies post: Wortel in pak - Waarde: 1000 - Status: Cringe
    ANN POST: SCHREEUWENDE EEND - WAARDE: 700 - STATUS: DANK 🔥💀🅱️
    Gemiddelde waarde van de feed: 510
    ```

## 3. Wat weg kan (of verhuist)

- Niets schrappen. Het hoofdstuk telt zes oefeningen en heeft eerder oefeningen te weinig.
- **Dierentuin inkorten:** verwijderen op nummer en het gemiddelde gewicht zijn H12-stof en nemen het
  grootste deel van de oplossing in. Houd de lijst, "praten" en "opnieuw beginnen" (de basis voor H16),
  en maak van verwijderen en gemiddelde een PRO-uitbreiding.
- De Class designer-tip mag in het `.vooraf`-blok blijven. De kennisclip staat ook in
  `content/13_advancedovererving/kennisclips.md:9`.

## 4. Gaten: kansen voor nieuwe oefeningen

Wat in de leerstof staat en nergens geoefend wordt: **eigen exceptions** (nul oefeningen, ook niet
"zelf een bestaande exception opwerpen"), **Equals en GetHashCode** (nul), **GetType** (nul), een
**abstracte property** (nul: IsCringe in Meme Lord is virtual), **sealed** (nul), en **code lezen** (nul).

1. **Wat toont Console.WriteLine?** (*Essential*). Voorspel de uitvoer, eerst op papier. Vier kleine
   klassen (geverifieerd met dotnet):
   - `Kat` zonder override: `Console.WriteLine(kat)` toont `Namespace.Kat`, en `kat.GetType().Name`
     toont `Kat`.
   - `Hond` met `public string ToString()` zonder `override`: `Console.WriteLine(hond)` toont nog
     `Namespace.Hond`, terwijl `hond.ToString()` wel `Hond Rex` geeft. De compiler waarschuwt: warning
     CS0114 "'Hond.ToString()' hides inherited member 'object.ToString()'. To make the current member
     override that implementation, add the override keyword. Otherwise add the new keyword."
   - `Vis`, waarvan ToString zelf print en `""` teruggeeft: `Console.WriteLine($"Mijn vis: {v}!")`
     toont eerst `Vis Nemo` en dan `Mijn vis: !`.
   - Twee boeken met dezelfde inhoud: `a == b` geeft `False`, `a.Equals(b)` na de override `True`.

   Traint de impliciete ToString-aanroep, override tegenover verbergen, teruggeven tegenover printen,
   en GetType.
2. **Stevens abstracte bouwwerf** (*Essential*). Steven levert vijf korte fragmenten in die niet
   compileren; de student koppelt elk fragment aan de juiste melding en herstelt het. Letterlijke
   meldingen (geverifieerd met dotnet):
   - CS0144 "Cannot create an instance of the abstract type or interface 'Dier'"
   - CS0500 "'Voertuig.Rijd()' cannot declare a body because it is marked abstract"
   - CS0513 "'Plant.Groei()' is abstract but it is contained in non-abstract type 'Plant'"
   - CS0534 "'Paard' does not implement inherited abstract member 'Dier.MaakGeluid()'"
   - CS0509 "'GroteKluis': cannot derive from sealed type 'Kluis'"

   Een zesde voor wie wil: `GetType()` overriden geeft CS0506 "cannot override inherited member
   'object.GetType()' because it is not marked virtual, abstract, or override". Let op bij het maken: in
   één project met al die fouten samen meldt de compiler CS0144 niet, pas als de andere weg zijn. Toon
   de fragmenten dus apart. Visual Studio kan de meldingen iets anders formuleren.
3. **Boekenvoorraad** (*Essential*). Bouwt op Boek. Twee boeken met hetzelfde ISBN zijn gelijk: Equals
   met het recept uit de leerstof (`if (o is not Boek temp) return false;`,
   `content/13_advancedovererving/4_System_Object.md:164`). Daarna een `Dictionary<Boek, int>` als
   voorraad. Zonder GetHashCode geeft `voorraad.ContainsKey(tweedeObject)` `False`, ook al is `Equals`
   `True`. Met `HashCode.Combine(ISBN)` wordt het `True` (geverifieerd met dotnet). De compiler
   waarschuwt vooraf: warning CS0659 "'Boek' overrides Object.Equals(object o) but does not override
   Object.GetHashCode()". Traint Equals, GetHashCode en het lezen van een waarschuwing.
4. **Saldo tekort** (*Essential*). Bouwt op Money, money, money. Een eigen `SaldoTekortException : Exception`
   met de drie standaardconstructors uit `content/20_exceptions/1_eigenuitzondering.md:66`-`:81`.
   `HaalGeldAf` werpt ze op in plaats van `false` terug te geven, en Main vangt ze specifiek op. Getest:
   `Onvoldoende saldo: je komt 30 euro tekort.` en het saldo blijft 50 (geverifieerd met dotnet).
   Traint een eigen exception-klasse, `: base(message)`, throw en een gerichte catch. Het typische
   probleem om uit te lichten: wie `: base(message)` vergeet, ziet in `e.Message` de standaardtekst van
   .NET in plaats van zijn eigen boodschap.

## 5. Voorgestelde volgorde

Wat toont Console.WriteLine? → Extra ToString aan bestaande projecten → Boek → Boekenvoorraad →
Stevens abstracte bouwwerf → Geometric figures → Money, money, money → Saldo tekort → Dierentuin →
Meme Lord Simulator

Geometric figures komt voor Money omdat het dicht bij het voorbeeld uit de leerstof blijft (de
geometrische figuur in `5_abstract.md`). De coach-data noemt Money nu "de eerste oefening met een
abstracte klasse" (`oefeningen/_coach/14_advancedovererving.md:105`); die nota moet dan mee.

## 6. Nevenvondsten

- **De dode link uit de quarto-melding** staat in `oefeningen/16_polymorfisme/A_Practica.md:8`:
  `[een eerder hoofdstuk](../13_advancedovererving/A_Practica.md)`. Moet `../14_advancedovererving/A_Practica.md`
  zijn. Op `:61` van hetzelfde bestand staat een link naar `17_gencols/2_genericclasses_en_constraints.md`,
  en die bestaat ook niet in `oefeningen/`.
- H16 Dierentuin advanced vraagt Koe, Slang en Varken (`oefeningen/16_polymorfisme/A_Practica.md:10`),
  de H14-oplossing heeft Koe, Hond en Vis (`oefeningen/14_advancedovererving/A_Practica.md:405`-`:425`).
- H16 Pokémon vergelijken (`oefeningen/16_polymorfisme/A_Practica.md:88`-`:100`): `obj as Pokemon`
  zonder null-controle, geen GetHashCode, en `...` in de code. Voor de review van H16.
- `content/18_IsAs/6_equals.md:3`-`:11` zegt "herinner je je nog de Equals die we schreven" en toont de
  harde cast `(Student)o`. Maar H14 gebruikt sinds editie 5 al `is not Student temp`
  (`content/13_advancedovererving/4_System_Object.md:164`). De brug tussen beide klopt niet meer.
- Verkeerde hoofdstukverwijzingen in de leerstof:
  - `content/13_advancedovererving/4_System_Object.md:171` zegt dat is/as "in hoofdstuk 18" komt, maar
    volgens `_quarto.yml:194` is dat H16;
  - `content/13_advancedovererving/5_abstract.md:59` plaatst interfaces in "hoofdstuk 16", terwijl dat
    H17 is (`_quarto.yml:198`).
- `content/13_advancedovererving/4_System_Object.md:81`: `return GetType();` in een methode die een
  string teruggeeft, compileert niet. "Ongeveer" staat erbij, maar de diff op `:119` schrijft wel
  `GetType().ToString()`. Op `:193` staat in het commentaar "velden".
- `content/13_advancedovererving/zieverder.md:5`-`:19`: de terugblik en de valkuilen zeggen niets over
  eigen exceptions, terwijl `1_eigenuitzondering.md` in dit hoofdstuk zit.
- `content/20_exceptions/1_eigenuitzondering.md:56`: `$"{extrainfo}. {base.ToString()}"` zet een punt
  na de newline, dus de tweede regel begint met ". ".
- **Coach-data:**
  - "Kent nog niet" sluit is/as uit (`oefeningen/_coach/14_advancedovererving.md:53`), maar Equals kan
    niet zonder `if (o is not X temp) return false;`. Zet dat patroon bij "Kent al" als recept voor
    Equals, met de uitleg van `is` voor H16.
  - De valkuil op `:133` moet weg of herschreven worden, zie sectie 1.
  - De nieuwe oefeningen hebben allemaal een blok nodig. De twee code-lees-oefeningen krijgen een
    `### Nota` dat de coach het antwoord nooit geeft.
- `oefeningen/13_overerving/A_PracticaSimpel.md:262` schrijft `HiddenBookMark : BookMark`, H14 schrijft
  `HiddenBookmark` en `Bookmark` (`oefeningen/14_advancedovererving/A_Practica.md:21`).
- `content/13_advancedovererving/kennisclips.md:13` linkt voor de oefeningen nog naar het oude gitbook.
  Hetzelfde staat in de kennisclips van 18 hoofdstukken.
