# H9: Object Oriented Programming

> **Beslist door Tim (2026-09-11), zie README:** Meetlat verhuist van H10 naar hier. De callout over de
> nullable-waarschuwingen staat al in `content/8_klassen/2_properties.md`: verwijs ernaar vanuit de
> `.vooraf` van week 2 (het laatste punt van sectie 6 is daarmee afgehandeld). `bib.png` mag hertekend
> worden met de skill `afbeelding`. De unittest-repo's blijven voorlopig zoals ze zijn.

Bronnen: `oefeningen/9_klassen/intermezzoh9.md`, `oefeningen/9_klassen/A_practica.md` (week 2),
`oefeningen/9_klassen/B_practica.md` (week 3), `oefeningen/_coach/9_klassen.md`, de leerstof uit
`_quarto.yml` (`content/8_klassen/00_oop_pong.md`, `0_oop_intro.md`, `0b_oopincs.md`,
`0c_simpleobjects.md`, `2_properties.md`, `autoprop.md`, `datetime.md`, `zieverder.md`),
`content/B_appendix/boete.md`, `content/B_appendix/struct.md`, de afbeeldingen
`oefeningen/assets/6_klassen/clone.png`, `clone2.png` en de ongebruikte `oefeningen/9_klassen/bib.png`,
vluchtig `oefeningen/8_arrays/A_practicasamenb.md`, het begin van `oefeningen/10_meminoop/A_poke1.md`
en het rapport `H10_meminoop.md`. De gebouwde pagina's in `build/oefeningen/9_klassen/`, met het
slot- en coach-script op een kopie. De unittest-repo's (`ZIESCHERPER_TESTS_H1_...`) heb ik niet
kunnen binnenhalen: de naamconflicten hieronder zijn dus niet tegen de tests nagekeken.

Rode draad: properties worden goed en veel geoefend. Maar beide Final Essentials en Sports hebben
geen oplossing, bij de sprong naar OOP ontbreekt een brug, en in geen enkele oefening leest de
student code.

## 1. Fouten die sowieso weg moeten

- **Drie lege oplossingen, waaronder beide Final Essentials.** MiniRPG
  (`oefeningen/9_klassen/A_practica.md:507-509`), Sports (`oefeningen/9_klassen/B_practica.md:273-275`)
  en de Campingmanager (`oefeningen/9_klassen/B_practica.md:380-382`). De knop Oplossing opent een
  leeg paneel, net bij de twee oefeningen waar een student het meest vastloopt. De voorbeelduitvoer
  van beide opgaven klopt wel met de specificaties (geverifieerd met dotnet, met een eigen
  uitwerking: Conan 110/110, na 150 XP level 2 met 120/120 en XP 50, 12 schade, daarna 70/120. Pol
  betaalt 403,75 en houdt na de tweede poging 96,25 over). De oplossingen kunnen dus zonder de opgave
  aan te passen uitgeschreven worden.
- **De inleiding van week 2 gebruikt een constructor.** `Student alex = new Student("Alex", 12, 14);`
  (`oefeningen/9_klassen/A_practica.md:34`). Constructors komen pas in H11 (zie ook
  `oefeningen/_coach/9_klassen.md:47`). Wie dat overtypt, krijgt code die niet compileert. Voorstel:
  `new Student()` gevolgd door de properties, zoals in de oefeningen zelf. `CalculateAverage` (`:37`)
  is dan beter `BerekenGemiddelde`, want de rest van de pagina gebruikt Nederlandse namen.
  Hetzelfde bij de Campingmanager: "in de constructor" (`oefeningen/9_klassen/B_practica.md:341`)
  wordt "krijgt als beginwaarde vandaag". De coach vangt dat nu op, de opgave niet.
- **Studentklasse: opgave, voorbeeld en oplossing verschillen op vier plekken** (geverifieerd met
  dotnet). De opgave vraagt `BerekenGemiddelde()` (`oefeningen/9_klassen/A_practica.md:218`), de
  oplossing heet `BerekenTotaalCijfer()` (`:262`, `:277`). Het voorbeeld toont `Cijferrapport:` met 10
  sterretjes (`:240-241`), de oplossing `Cijferrapport` zonder dubbelpunt met 13 sterretjes
  (`:272-273`). Het voorbeeld toont `13.3333333333` (`:245`), de oplossing geeft op een Belgische pc
  `13,333333333333334`. De waarden staan in het voorbeeld op kolom 27, met de tabs van de oplossing
  op kolom 25. Voorstel: `BerekenGemiddelde` (zo staat het ook in de coach-data, `:95`), `{...:F2}`
  in de oplossing en `13,33` in het voorbeeld, en het voorbeeld overnemen uit wat de oplossing echt
  toont. Kijk eerst na welke naam de unittest verwacht.
- **Nummers: de klasse heet anders.** De opgave en het voorbeeld zeggen `NummerBerekenaar`
  (`oefeningen/9_klassen/A_practica.md:142`, `:163`), de oplossing `public class Nummers` (`:173`).
  Met de oplossing compileert het voorbeeld uit de opgave niet. De repo heet `..._Nummers`: kijk na
  wat de test verwacht en trek opgave en oplossing gelijk.
- **BankManager: wie het saldo precies leeghaalt, wordt niet geblokkeerd** (geverifieerd met dotnet).
  De opgave zegt: "Als balans op 0 komt door afhaling -> Zet Staat automatisch op Geblokkeerd"
  (`oefeningen/9_klassen/B_practica.md:54`). De oplossing blokkeert enkel als het bedrag groter is dan
  het saldo (`:83-90`). 300 afhalen van 300 geeft balans 0 en staat `Geldig`. Ook negatieve bedragen
  gaan erdoor: `StortGeld(-500)` op 100 geeft -400, en `HaalGeldAf(-1000)` verhoogt het saldo tot 1100
  en geeft -1000 terug. Voorstel: na de afhaling testen of `balans == 0`, en een regel "bedragen van 0
  of minder worden geweigerd" in de opgave. De testcode (`:130-142`) volgt het testscenario van
  `:56-60` niet: een `do while (true)` zonder uitweg, geen namen, en `ToonInfo` toont het saldo met een
  `$` (`:114`). Voorstel: een Main die de drie stappen van het scenario letterlijk uitvoert.
- **Verjaardag werkt enkel met Belgische landinstellingen** (geverifieerd met dotnet).
  `DateTime.Parse(Console.ReadLine())` (`oefeningen/9_klassen/B_practica.md:232`) leest de datum volgens
  de instellingen van de pc. Met nl-BE loopt alles goed. Met en-US (een Engelstalige Windows, veel
  Macs) crasht `20/5` met een `FormatException`, en `11/9` wordt stil 9 november: 59 dagen in plaats van
  0. Het boek toont net hoe het wel moet: `DateTime.Parse(invoer, new CultureInfo("nl-BE"))`
  (`content/8_klassen/datetime.md:140`). Daarnaast verschillen voorbeeld en oplossing: andere vraag
  (`:224` tegenover `:231`), andere zin ("Je bent over 124 dagen jarig op een Dinsdag" tegenover "Je ben
  jarig over ... dagen en dat is op een donderdag", `:226` en `:242`, met de typfout "Je ben"), en de
  dagnaam komt met een kleine letter. "124 dagen" klopt enkel als je het programma bv. op 16 januari
  2025 uitvoert. Voorstel: de cultuur meegeven, voorbeeld en oplossing dezelfde zin, en in het
  voorbeeld zeggen op welke dag het uitgevoerd is.
- **Persoon: de grens sluit de meeste volwassenen uit** (geverifieerd met dotnet). De datum moet na
  1 januari 1990 liggen (`oefeningen/9_klassen/B_practica.md:160`). Wie vroeger geboren is, krijgt de
  datum van vandaag en is dus 0 jaar. Dat geldt ook voor de auteur van het boek (18/3/1981,
  `content/8_klassen/datetime.md:61`). De oplossing vergelijkt strikt (`:181`), dus 1/1/1990 zelf wordt
  ook geweigerd. Een `Persoon` waarvan de datum nooit ingesteld werd, staat op 1/1/0001 en is 2025
  jaar. In de set staat een los blok accolades (`:179-185`). Voorstel: 1900 als ondergrens, zoals in
  het boek (`content/8_klassen/0c_simpleobjects.md:279`), met `>=` en `<= DateTime.Today`, een
  beginwaarde voor de instantievariabele, en een voorbeeld met uitvoer.
- **PizzaTime: de oplossing controleert iets anders dan de opgave** (geverifieerd met dotnet). De
  opgave zegt `string.IsNullOrWhiteSpace(value)` (`oefeningen/9_klassen/A_practica.md:305`), de
  oplossing `value != ""` (`:324`). `"   "` wordt dus aanvaard. Onder "Voorbeeldgebruik" (`:307-308`)
  staat geen code en geen uitvoer.
- **Figuren belooft overerving en zegt niet wat er van de deling verwacht wordt.** "Werken met
  overerving of losse klassen" (`oefeningen/9_klassen/A_practica.md:369`): overerving is H13 en hoort
  hier niet in de doelstelling. `(Basis * Hoogte) / 2` (`:380`) kapt af met ints. De coach-data
  verwacht dat het ook voor oneven producten klopt (`oefeningen/_coach/9_klassen.md:127`, `:132`) en
  rekent een ontbrekende beginwaarde aan als valkuil (`:134`). Geen van beide staat in de opgave, enkel
  in de oplossing (`:391`, `:398`). `ToonOppervlakte` toont een kaal getal (`:408`), de `Driehoek`
  ontbreekt (`:413`) en een accolade staat scheef (`:404`, bladspiegel).
- **"Veld" en "properties" waar het boek "instantievariabele" zegt.** "private field"
  (`oefeningen/9_klassen/B_practica.md:20`) en drie keer "het veld" (`:25`, `:36`). In het intermezzo
  heten de publieke variabelen van een struct "properties" (`oefeningen/9_klassen/intermezzoh9.md:59`)
  en "eigenschappen" (`:125`). Een week later leert het boek dat een property een `get` en `set` heeft
  en dat een instantievariabele nooit `public` mag zijn (`content/8_klassen/0c_simpleobjects.md:207`).
  Voorstel: "publieke variabelen" in het intermezzo, "instantievariabele" in B.
- **Kleinere dingen:**
  - "Frequentie" als kolomkop bij RapportModule (`oefeningen/9_klassen/A_practica.md:86`): dat is
    "Percentage".
  - "githu-burl" (`:50`).
  - "deze 4 variabelen" (`oefeningen/9_klassen/intermezzoh9.md:21`), terwijl de aanroep er drie
    meegeeft (`:29`).
  - "Je kan niet meer rennen!" (`:195`) tegenover "WAARSCHUWING: Je kan ..." in de oplossing (`:332`).
  - Dobbelstenen: de opgave zegt "genereer twee getallen" (`oefeningen/9_klassen/B_practica.md:293`),
    maar door de `&&` in de oplossing (`:309`) wordt de tweede steen enkel geworpen als de eerste een
    zes is. De telling klopt, maar wie zijn code naast de oplossing legt, snapt het niet. De uitvoer
    zegt "keren 6 gegooid" (`:312`), het gaat om dubbel zes.
  - `Magiër` met ë als enum-waarde (`oefeningen/9_klassen/A_practica.md:433`) compileert
    (geverifieerd), maar is lastig te typen. `Magier` in code, Magiër in de tekst.
  - `GeefOverzicht()` toont (Studentklasse, `:219`), `ToonStats()` geeft een string terug (MiniRPG,
    `:468`). De werkwoorden staan net omgekeerd. Voorstel: `GeefStats()`.

## 2. Wat sterker kan

- **De eerste klasse-oefening.** RapportModule is als code klein genoeg: één property, één methode.
  Maar tegelijk met de grootste denksprong van het jaar moet de student een GitHub-repo clonen, twee
  projectbestanden van `net7.0` naar `net10.0` zetten en unittests draaien
  (`oefeningen/9_klassen/A_practica.md:45-54`, `:60-68`). Bovendien slaat de pagina over wat het boek
  eerst doet: een klasse met methoden en een private instantievariabele die via een methode verandert
  (`content/8_klassen/0c_simpleobjects.md:6-285`). Dat komt in geen enkele oefening terug. En de brug
  van struct naar klasse, die de inleiding van week 2 zelf aankondigt (`:11-40`), bouwt de student
  nergens. Voorstel: twee kleine oefeningen vóór RapportModule, zonder unittests (sectie 4, nr. 1 en 2).
  De unittests bij RapportModule mogen optioneel blijven.
- **Het intermezzo: de `###` mag weg.** De twee oefeningen passen perfect in het gewone formaat:
  `# De Data Architect (*Essential*)` en `# De RPG Inventory`, met `**Deel 1.**` tot `**Deel 3.**` en
  `**Uitbreiding.**` als vetgedrukte inleiding, en per oefening een eigen Oplossing-callout. Nu staat
  één oplossing voor alles onderaan, na "Klaar?" (`oefeningen/9_klassen/intermezzoh9.md:204-385`), met
  daarin een `#` en twee `##`-koppen. Het slot houdt die wel dicht (nagekeken op een kopie van de
  build: na het slot-script staat er geen oplossingstekst meer in de HTML of in `search.json`), maar
  Quarto haalt de paginatitel "Oefeningen H9 intermezzo" uit die `#` in de oplossing (`:206`). Met
  `#` per oefening krijgt de student een Coach-knop bij net de oefeningen die de overgang maken,
  plus het vinkje "gedaan". Het label `(GPT)` vervangt dan de zin over Gemini (`:7`). "Klaar?" (`:200-202`)
  wordt een gewone slotalinea of gaat mee in de `.vooraf`. De coach-data heeft dan twee secties nodig,
  met per oefening een `### Nota` dat de student nog geen klassen kent (zie sectie 6).
- **Bovenaan week 2 één `.vooraf`.** Nu staan er een lange tip (`oefeningen/9_klassen/A_practica.md:5-42`),
  een waarschuwing over GitHub (`:45-54`) en in RapportModule nog een waarschuwing over .NET 7
  (`:64-68`), die volgens de tekst zelf voor alle volgende oefeningen geldt. Samen in één lijstje. Het
  verhaal van struct naar klasse wordt drie zinnen met een verwijzing naar "Van struct naar klasse".
  Zet er één regel bij over wat er verandert: een struct gebruik je zonder `new`
  (`oefeningen/9_klassen/intermezzoh9.md:62`, `:149`), een object van een klasse nooit. Wie de
  `InventoryItem` van het intermezzo als klasse overtypt, krijgt anders een compileerfout of later een
  `NullReferenceException`.
- **Auto-property omzetten naar full property oefenen.** Het boek zegt dat je meestal met
  auto-properties begint en ze omzet wanneer er een controle nodig is (`content/8_klassen/autoprop.md:48-53`).
  Geen oefening laat dat doen. Studentklasse leent zich ervoor: een deel 2 waarin de punten tussen 0
  en 20 moeten liggen, zodat drie auto-properties full properties worden, met de VS-optie
  "Convert to full property" en de waarschuwing over `=>` uit het boek.
- **Intern via de property.** De tip bij BankManager (`oefeningen/9_klassen/B_practica.md:35-37`) zegt
  dat een private set beter is en doet het dan bewust niet. Het boek maakt er een punt van dat je ook
  in de klasse zelf via de property gaat (`content/8_klassen/2_properties.md:270`, `:277-312`).
  Voorstel: `Balans { get; private set; }` met de controle `value >= 0` in de set, en `StortGeld` en
  `HaalGeldAf` gaan via `Balans`. Voor de buitenwereld blijft `Balans` read-only, dus Bankmanager 2 in
  H10 (die op deze klasse verderbouwt) blijft werken. Ook bij Sports: `StelIn` moet via de properties,
  anders omzeilt het de controle op het rugnummer. De coach weet dat
  (`oefeningen/_coach/9_klassen.md:217`), de opgave zegt het niet.
- **Sports: `Positie` als enum.** De opgave zegt `string` (`oefeningen/9_klassen/B_practica.md:262`), de
  coach-data vindt een enum netter (`oefeningen/_coach/9_klassen.md:218`). De enum staat in de opgave
  van Studentklasse en MiniRPG al, dus gewoon vragen.
- **Dobbelstenen heeft geen toestand.** De klasse is een verpakte static methode: geen enkele property
  of instantievariabele, één object dat niets onthoudt. Voorstel: `Dobbelsteen` met
  `Waarde { get; private set; }`, een private `Random` als instantievariabele en een methode `Werp()`.
  Main maakt twee dobbelstenen, werpt ze 1000 keer en telt de dubbele zessen. Zo oefent ze wat een
  object eigen maakt: twee objecten, elk met een eigen waarde.
- **Figuren: de oppervlakte als read-only property.** Nu herhaalt Figuren PizzaTime (vier keer dezelfde
  controle in de set). Een `Oppervlakte`-property die rekent in de `get` oefent de transformerende
  property en "Methode of property?" (`content/8_klassen/2_properties.md:314-362`). Die komen vandaag
  pas voor het eerst voor in de Final Essentials (`MaxLevenspunten`,
  `oefeningen/9_klassen/A_practica.md:442`), terwijl die volgens de tip enkel "leerstof van de voorbije
  oefeningen" bevat (`:421`). Hetzelfde met de private set (`:439-440`): zie sectie 5.
- **Verjaardag: dag en maand apart inlezen.** Twee keer `int.Parse` en
  `new DateTime(DateTime.Today.Year, maand, dag)` omzeilt het cultuurprobleem en oefent de manier om
  een datum te maken die het boek als eerste toont. Een tweede deel voor wie op 29 februari verjaart,
  met `DateTime.IsLeapYear` (`content/8_klassen/datetime.md:151-159`). Die methode wordt nu nergens
  geoefend, en `29/2` doet het huidige programma in een gewoon jaar crashen (geverifieerd met dotnet).
- **Campingmanager: een private hulpmethode.** De leeftijd berekenen is dezelfde logica als in Persoon.
  Laat ze in een `private int BerekenLeeftijd()` zetten. Zo komt "Reden van private"
  (`content/8_klassen/0c_simpleobjects.md:112-118`) voor het eerst terug in een oefening. Zeg ook wat er
  gebeurt als het budget negatief is (`oefeningen/9_klassen/B_practica.md:339`: oude waarde laten staan?),
  en dat de `€` in de console enkel werkt met `Console.OutputEncoding` (`content/2_tekst/7_unicode.md:15`).
- **Intermezzo: `foreach` wordt voorgeschreven en daarna zelf geschreven.** `ShowInventory` gebruikt
  `foreach` (`oefeningen/9_klassen/intermezzoh9.md:165`, `:171`), de oplossingen van de uitbreidingen ook
  (`:350`, `:378`). `foreach` is H12 (`oefeningen/_coach/9_klassen.md:50`). Voorstel: een `for` met index.
- **Geen enkele callout "Les(sen) uit deze oefening"** op de drie pagina's. Minstens bij RapportModule
  (klasse tegenover object, geen `static`), PizzaTime (een set die niets doet laat de oude waarde
  staan), BankManager (waarom `HaalGeldAf` het bedrag teruggeeft) en Persoon (datums vergelijk je met
  `<` en `>`).
- **Voorbeelduitvoer ontbreekt** bij PizzaTime, Figuren, Persoon, Sports en Dobbelstenen.

## 3. Wat weg kan (of verhuist)

- **Dobbelstenen zoals ze nu is**: vervangen door de versie met toestand uit sectie 2.
- **Figuren zoals ze nu is**: omvormen (sectie 2) of schrappen. Verhuist Meetlat uit H10 naar hier
  (dat stelt `H10_meminoop.md` voor), dan oefent die de read-only en write-only property al en mag
  Figuren weg. Write-only komt vandaag in geen enkele H9-oefening voor.
- **De lange inleiding van week 2** (`oefeningen/9_klassen/A_practica.md:5-42`): inkorten tot de
  `.vooraf` uit sectie 2. De Chef-kok en de auto die je moet duwen zeggen hetzelfde.
- **`#### Uitbreiding (*Essential*)`** binnen een oefening die al Essential is
  (`oefeningen/9_klassen/intermezzoh9.md:100`): het label hoort bij de oefening, niet bij een deel.
- **De `do while (true)`-test** in de oplossing van BankManager (`oefeningen/9_klassen/B_practica.md:130-142`).

## 4. Gaten: kansen voor nieuwe oefeningen

Niet geoefend vandaag: een klasse met enkel methoden en private instantievariabelen, twee objecten
van dezelfde klasse naast elkaar vergelijken, write-only properties, intern via de property werken,
private methoden, `Student` of `Studenten` (`content/8_klassen/0c_simpleobjects.md:398-418`), een object
zonder `new`, wat `Console.WriteLine(object)` toont (`:38-40`), `DateTime.IsLeapYear` en `AddDays` buiten
de Final Essential. Er is geen enkele oefening waarin de student code leest. De twee "zoek de
fout"-stukken van het hoofdstuk staan in de leerstof (`content/8_klassen/0c_simpleobjects.md:288-317`,
`content/8_klassen/zieverder.md:60-79`), niet bij de oefeningen.

1. **Tamagotchi** (*Essential*, eerste oefening van week 2). Een klasse met twee private
   instantievariabelen (`honger`, `geluk`) met een beginwaarde, en de methoden `Eet()`, `Speel()` en
   `ToonToestand()`. `Eet` laat de honger nooit onder 0 zakken. Nog geen properties: zo doet het boek
   het ook eerst (`Mens` met `VeranderGeboortejaar`). Main maakt twee tamagotchi's, voedert er één drie
   keer en toont beide. Traint een klasse in een eigen bestand, `new`, methoden zonder `static` en dat
   elk object zijn eigen waarden heeft. Geen unittests.
2. **Van struct naar klasse** (*Essential*). De `StudentData` en de drie methoden uit het intermezzo
   worden een klasse `Student` met twee auto-properties (`Naam`, `Scores` als `int[]`). De methoden
   verhuizen naar de klasse en verliezen hun parameter en hun `static`. Main maakt twee studenten en
   vraagt ze hun gemiddelde. Dat is precies wat de inleiding van week 2 belooft, en de student bouwt
   voort op code die hij al heeft. Eén taal kiezen voor de namen (boete "niet consistent").
3. **Voorspel de uitvoer: twee lampen** (*Essential*, code lezen). In de opgave staat een klasse `Lamp`
   met een private instantievariabele `helderheid = 50`, een full property die enkel 0 tot 100 toelaat,
   en een methode `Dim()` die via de property 10 aftrekt. Main: `keuken.Helderheid = 80;`,
   `gang.Helderheid = 150;`, een paar keer `Dim()`, beide helderheden tonen en
   `Console.WriteLine(keuken);`. Eerst op papier, dan uitvoeren. Afsluitende vraag: wat verandert er als
   `Dim()` de instantievariabele rechtstreeks verlaagt en je zes keer dimt? Traint eigen toestand per
   object, een set die een waarde weigert, intern via de property en de standaardweergave van een object.
4. **Stevens pizza** (*Essential*, zoek de fout). Steven vroeg de A.I. een klasse `Pizza` en kreeg: een
   set die `Toppings = value;` doet (loopt in zichzelf rond), een set die `diameter = diameter;` doet
   (`value` vergeten), een `public double prijs;`, een `public static void ToonInfo()` die de
   properties gebruikt, en in Main `Pizza margherita; margherita.Diameter = 30;` en een controle op de
   prijs in Main in plaats van in de set. Per fout: vindt de compiler dit, en hoe los je het op? Traint
   de valkuilen van full properties uit de leerstof en de coach-data, en een object zonder `new`
   (`content/8_klassen/0b_oopincs.md:97-106`). Bij het doorvoeren elke fout echt laten compileren en
   uitvoeren.
5. **Bibboek** (*Essential*, week 3). Deel 1 op papier: een korte tekst over een bibliotheek. Onderlijn de
   zelfstandige naamwoorden (`content/8_klassen/0_oop_intro.md:43-45`), kies de klasse (`Boek`, niet
   `Boeken`), en zeg per eigenschap welke soort property het wordt: auto-property, full property met
   controle of read-only die rekent. Deel 2 in code: `Titel` als auto-property, `UitleenDatum` als full
   property die niet in de toekomst mag liggen, `TerugbrengDatum` als read-only property
   (`UitleenDatum.AddDays(21)`), `IsTeLaat` als read-only `bool`, en een methode `Verleng()`. Traint
   klassen herkennen, de drie soorten properties naast elkaar, `AddDays` en datums vergelijken. De
   ongebruikte `oefeningen/9_klassen/bib.png` gaat over zo'n `BibBoek`, maar zou eerst verbeterd moeten
   worden (sectie 6).

## 5. Voorgestelde volgorde

Intermezzo (week 1): De Data Architect → De RPG Inventory

Week 2 (`A_practica.md`): Tamagotchi → Van struct naar klasse → RapportModule → Nummers →
Voorspel de uitvoer: twee lampen → Studentklasse (met deel 2: omzetten naar full properties) →
PizzaTime → Stevens pizza → Figuren (met `Oppervlakte` als property, of Meetlat uit H10) →
BankManager → MiniRPG (Final Essentials)

Week 3 (`B_practica.md`): Persoon → Verjaardag → Bibboek → Sports → Dobbelsteen →
De Campingmanager (Final Essentials)

BankManager verhuist naar week 2, omdat het de enige oefening met een private set is en MiniRPG die
nodig heeft. Ze gebruikt geen DateTime, dus ze hoort inhoudelijk bij week 2. Week 3 wordt dan
DateTime plus herhaling. Week 2 wordt zo wel lang. Nummers lijkt sterk op RapportModule en kan zonder
label. Blijft BankManager liever in week 3, dan krijgt MiniRPG in de opgave een zin die de private set
en de rekenende property uitlegt, want die zijn daar dan nieuw. Let op: `H10_meminoop.md` stelt voor
Bankmanager 2 naar BankManager te laten linken. Die link moet mee als ze van pagina verandert.

## 6. Nevenvondsten

- **Coach-data** `oefeningen/_coach/9_klassen.md`:
  - "Kent al" noemt `string.IsNullOrWhiteSpace` (`:41`), maar het boek legt dat nergens uit. Er staat
    enkel een TODO in `content/2_tekst/5_chars_strings.md:83`. Het staat nu enkel in de opgave van
    PizzaTime.
  - De regel over "in de constructor" (`:47`) mag weg zodra de opgave van de Campingmanager aangepast is.
  - Bij Verjaardag (`:195-202`) ontbreekt de valkuil van de landinstellingen.
  - Figuren (`:127`, `:132`, `:134`) verwacht dingen die de opgave niet vraagt.
  - Sports (`:218`) raadt een enum aan die de opgave niet vraagt.
  - Bij Studentklasse (`:95`) staat `BerekenGemiddelde`, zoals in de opgave maar niet in de oplossing.
- **Als het intermezzo `#`-koppen krijgt:** de commentaar in `oefeningen/_coach/9_klassen.md:10-11` en
  de twee zinnen erover in `CLAUDE.md` (bij de coach-prompt en bij de opmaak) moeten mee. De pagina
  heeft dan een `title:` in de frontmatter nodig, want nu komt de titel uit de oplossing. "Kent al" in
  de coach-data gaat over heel H9: de `### Nota` per intermezzo-oefening moet zeggen dat de student
  enkel structs met publieke variabelen kent en nog niet naar klassen gestuurd mag worden.
- **Het slot-script** meldt 5 woordgroepen oplossingstekst op `9_klassen/intermezzoh9.html`. Het gaat om
  code die ook in de opgave staat (`myStudent.Name = "Alex"`, de struct `InventoryItem`,
  `backpack[0]`). Dat is onschuldig, er lekt niets. Het coach-script geeft geen waarschuwingen voor H9.
- **Stagiair Steven gebruikt in H9 een constructor**: `public Mens(int geboorteJaarIn)`
  (`content/8_klassen/0c_simpleobjects.md:297`), terwijl constructors pas in H11 komen. Zonder uitleg
  kan een student die opgave niet lezen.
- `content/8_klassen/datetime.md:110`: "Alle properties van DateTime zijn read-only en hebben dus een
  private setter". Ze hebben helemaal geen setter. Dat verschil is net leerstof van dit hoofdstuk
  (`2_properties.md:222-267`). De voorbeelduitvoer op `:123` ("Je wittebroodsweken eindigen in maand
  nummer") komt niet overeen met de code op `:115` ("Einde in maand nr").
- `content/B_appendix/struct.md:12` noemt de variabelen van een struct "fields". Het voorbeeld verderop
  (`:50-61`) gebruikt een constructor en read-only properties, niet de publieke variabelen van het
  intermezzo.
- **Oude links:** `oefeningen/9_klassen/intermezzoh9.md:198` en `:202` wijzen naar apwt.gitbook.io.
  Andere oefeningen linken naar ziescherp.be (bv. `oefeningen/2_csharpbasics/A_practica.md:11`). "C#
  is OO in hart en nieren" staat in `content/8_klassen/00_oop_pong.md:20`. Ook
  `content/8_klassen/kennisclips.md:26` (al vermeld in `H10_meminoop.md`).
- **`oefeningen/9_klassen/bib.png` wordt nergens gebruikt.** Er staan twee properties met dezelfde naam
  `Uitgeleend` op, dat compileert niet, plus de typfout "tranformeert". Wordt het de figuur bij
  Bibboek, dan eerst via de skill `afbeelding`, na Tims keuze.
- **De unittest-repo's** heten nog `..._H1_...` (oude nummering) en draaien op .NET 7. Omzetten naar
  `net10.0` in de repo's zelf spaart elke student de omweg van `oefeningen/9_klassen/A_practica.md:64-68`.
- In een nieuw .NET-project geeft elke `string`-auto-property een waarschuwing (CS8618). H9 is het
  eerste hoofdstuk waar de student die ziet, maar pas H10 zegt dat hij ze mag negeren
  (`content/9_meminoop/nullreference.md:42`). Eén zin in de `.vooraf` van week 2 volstaat.
