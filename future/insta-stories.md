# Instagram-stories: één concept, één echt verhaal

Opgesteld op 12 september 2026. Voorstellen voor korte stories: telkens één concept uit het boek, in
een paar schermen uitgelegd, met een verhaal uit de echte wereld erbij.

## Vorm

- **Formaat:** 1080x1920, vier tot vijf schermen per story. Reken op ongeveer 5 seconden leestijd per
  scherm, dus weinig tekst.
- **Veilige zone:** laat bovenaan en onderaan ongeveer 250 px vrij voor de profielbalk en het antwoordveld.
- **Stijl:** dezelfde als de kennisclips. Offwhite achtergrond, Caveat voor handgeschreven tekst,
  JetBrains Mono voor code, AP-rood voor wat moet opvallen, de console zoals in het boek.
- **Productie:** in `_kennisclips/` als verticale composities (1080x1920) met de onderdelen uit
  `src/stijl/`. Een stilstaand scherm render je met `npx remotion still`, een bewegend als korte mp4.
- **Vaste opbouw:**
  1. **Haak:** het verhaal in één feitelijke zin.
  2. **Concept:** één codefragment uit het boek, hoogstens zes regels.
  3. **Verhaal:** wat er gebeurde, nuchter verteld.
  4. **Quiz- of pollsticker:** een vraag over de code.
  5. **Link-sticker** naar de pagina op ziescherp.be.
- **Toon:** zoals in het boek. Geen slogan en geen moraal op het einde: de story eindigt op de quiz en de link.
- **Bronnen:** verhalen met het label **boek** staan al in een verteller-kader en gebruiken dezelfde feiten.
  Bij verhalen met het label **nieuw** staat onder "Nakijken" waar je de feiten controleert voor je post.
- **Nullables:** geen `string?` of `int?` tonen, ook niet in een story. `?.` mag wel, dat staat in H10.

---

## H1 De eerste stappen

### 1. De eerste bug was een mot (nieuw)

- **Concept:** fouten in je code. `0_intro/4_fouten.md`, "Meest voorkomende fouten"
- **Haak:** "In 1947 plakte iemand een echte mot in een logboek, met de notitie *First actual case of bug being found*."
- **Concept-scherm:** `Console.Readline();` met een rode golflijn. C# is hoofdlettergevoelig.
- **Verhaal:** in de Harvard Mark II zat op 9 september 1947 een mot vast in een relais. Het team van Grace
  Hopper plakte ze in het logboek. Het woord *bug* voor een technisch probleem bestond al langer; dit werd
  het beroemdste voorbeeld.
- **Quiz:** "Welke regel compileert niet? A: `Console.ReadLine();` B: `Console.Readline();`" Antwoord: B.
- **Nakijken:** het logboek ligt in het Smithsonian National Museum of American History.

## H2 De basisconcepten van C#

### 2. Een trein met 256 assen (boek)

- **Concept:** het bereik van een datatype. `1_csharpbasics/1_datatypes.md`
- **Haak:** "In Zwitserland mag een trein niet exact 256 assen hebben."
- **Concept-scherm:** `byte assen = 255;` en `assen++;`
- **Verhaal:** de astellers langs het spoor bewaren het aantal in 8 bits. As 256 zet de teller op 0 en het
  systeem denkt dat het spoor vrij is. De Zwitsers losten het op met een regel in het reglement.
- **Quiz:** "Wat toont `Console.WriteLine(assen);`?" 256, 0 of een crash. Antwoord: 0.
- **Nakijken:** staat in het boek, met de bron in de voetnoot.

### 3. Gangnam Style en de viewteller (nieuw)

- **Concept:** het bereik van `int`. `1_csharpbasics/1_datatypes.md` en `3_data/4c_math.md`
  ("Als rekenen misloopt", "Bereik in code weten")
- **Haak:** "In 2014 had één video bijna meer views dan een `int` kan tellen."
- **Concept-scherm:** `int views = int.MaxValue;` en `views++;`
- **Verhaal:** YouTube telde views in een 32-bit geheel getal, met als maximum 2 147 483 647. Toen Gangnam
  Style van PSY die grens naderde, liet YouTube in december 2014 weten dat de teller naar 64 bit was
  omgezet. In C# is dat het verschil tussen `int` en `long`.
- **Quiz:** "Wat staat er in `views` na `views++`?" Antwoord: -2147483648.
- **Nakijken:** bericht van YouTube op Google+ van december 2014, breed opgepikt door de pers.

## H3 Tekst gebruiken in code

### 4. Waarom é soms Ã© wordt (nieuw)

- **Concept:** UNICODE en encoding. `2_tekst/7_unicode.md`
- **Haak:** "Ooit een mail gekregen met *CafÃ©* in plaats van *Café*?"
- **Concept-scherm:** `Console.OutputEncoding = System.Text.Encoding.UTF8;` met de uitleg uit het boek over
  code page 850.
- **Verhaal:** in UTF-8 is é twee bytes. Een programma dat die bytes leest alsof het een oudere tekenset is
  (Windows-1252), maakt er twee tekens van: Ã en ©. Dat heet *mojibake*.
- **Poll:** "Zie jij een euroteken zonder die UTF-8-regel?" Ja of nee. In het boek staat waarom dat per pc verschilt.
- **Nakijken:** é is U+00E9, in UTF-8 de bytes C3 A9; in Windows-1252 zijn dat Ã en ©.

### 5. Een game uit niets dan tekens (boek)

- **Concept:** raw string literals. `2_tekst/7_unicode.md`
- **Haak:** "Een van de diepste games ooit bestaat uit niets dan letters en tekens."
- **Concept-scherm:** de TD-tekening tussen `"""`, zoals in de kennisclip.
- **Verhaal:** Dwarf Fortress. Tarn Adams begon er in 2002 aan en bracht de eerste publieke versie uit in 2006.
- **Quiz:** "Wat gebeurt er met de spaties links van de sluitende `"""`?" Antwoord: die worden weggeknipt.
- **Extra:** link naar de kennisclip over raw string literals.

## H4 Werken met data

### 6. Pound-force of newton (boek)

- **Concept:** een getal zegt niets over wat het betekent. `3_data/4_converteren_casting.md`
- **Haak:** "In 1999 verloor NASA een ruimtesonde van 125 miljoen dollar door een getal zonder eenheid."
- **Concept-scherm:** twee regels die elk een getal doorgeven, met de eenheid als etiket erboven.
- **Verhaal:** de Mars Climate Orbiter. De grondsoftware gaf de stuwkracht in pound-force seconden, de
  module van NASA verwachtte newton-seconden. Alles compileerde, er kwam geen enkele foutmelding.
- **Poll:** "Zet jij de eenheid in de naam van je variabele?"
- **Nakijken:** staat in het boek. Toegevoegd: de twee regels code op het concept-scherm.

### 7. Ariane 5: een getal dat niet paste (nieuw)

- **Concept:** narrowing. `3_data/4_converteren_casting.md` ("Narrowing", "Narrowing in de praktijk")
- **Haak:** "Op 4 juni 1996 vernietigde een Europese raket zichzelf, omdat een getal niet in een kleiner type paste."
- **Concept-scherm:** het narrowing-voorbeeld uit het boek, met het bereik van het kleinere type ernaast.
- **Verhaal:** Ariane 5 hergebruikte navigatiesoftware van de Ariane 4. Die zette een 64-bit kommagetal om
  naar een 16-bit geheel getal. Bij de snellere Ariane 5 paste de waarde daar niet meer in, het
  navigatiesysteem viel uit en de raket vernietigde zichzelf ongeveer 40 seconden na de start. In C# is dat
  een `double` naar een `short`.
- **Quiz:** "Past 40000 in een `short`?" Antwoord: nee, het maximum is 32767.
- **Nakijken:** rapport van de onderzoekscommissie van ESA en CNES (voorzitter J.L. Lions), juli 1996.

### 8. De beurs van Vancouver (nieuw)

- **Concept:** afkappen is niet hetzelfde als afronden. `3_data/4d_afronden.md`
- **Haak:** "Een beursindex verloor bijna de helft van zijn waarde zonder dat er iets misliep op de beurs."
- **Concept-scherm:** `(int)2.9` geeft 2, `Math.Round(2.9)` geeft 3.
- **Verhaal:** de beurs van Vancouver startte in januari 1982 een index op 1000. Hij werd duizenden keren
  per dag herberekend en telkens afgekapt tot drie decimalen in plaats van afgerond. In november 1983 stond
  hij rond 525; juist berekend kwam hij rond 1099.
- **Quiz:** "Wat geeft `(int)2.9`?" Antwoord: 2.
- **Nakijken:** The Wall Street Journal, november 1983. Ook in *Humble Pi* van Matt Parker.

### 9. 0,1 is geen 0,1 (nieuw)

- **Concept:** kommagetallen zijn niet exact. `4_beslissingen/1_logic_and_relationsoperator.md`
  ("Kommagetallen vergelijken") en `3_data/4d_afronden.md` ("Geld: reken niet met double")
- **Haak:** "In C# is `0.1 + 0.2` niet gelijk aan `0.3`."
- **Concept-scherm:** `bool gelijk = (0.1 + 0.2) == 0.3;` en de uitkomst `false`.
- **Verhaal:** een Patriot-raketbatterij in Dhahran telde op 25 februari 1991 de tijd in tienden van een
  seconde. 0,1 is binair niet exact voor te stellen. Na ruim 100 uur zonder herstart liep de klok 0,34
  seconden achter, genoeg om een inkomende Scud-raket te missen. Er kwamen 28 Amerikaanse soldaten om.
- **Toon:** dit verhaal kost mensenlevens. Nuchter brengen, geen emoji of grappige muziek.
- **Quiz:** "Wat geeft `(0.1 + 0.2) == 0.3`?" Antwoord: `false`.
- **Nakijken:** rapport GAO/IMTEC-92-26 van het Amerikaanse Rekenhof, februari 1992.

### 10. Dezelfde Minecraft-wereld (boek)

- **Concept:** de seed van `Random`. `3_data/random.md`
- **Haak:** "Waarom krijgt je vriend exact jouw Minecraft-wereld als je hem je seed geeft?"
- **Concept-scherm:** een `Random` met een seed, en de reeks getallen die eruit komt.
- **Verhaal:** een generator die vanaf dezelfde startwaarde vertrekt, spuwt altijd dezelfde reeks uit.
  Daarmee ligt de hele wereld vast: elk dorp, elke grot, elke erts-ader.
- **Quiz:** "Twee generators met dezelfde seed: krijg je dezelfde getallen?" Antwoord: ja.
- **Nakijken:** staat in het boek.

### 11. De advocaat die ChatGPT geloofde (nieuw)

- **Concept:** blijf kritisch over wat een A.I. je geeft. `3_data/ai.md`
- **Haak:** "In 2023 citeerde een advocaat in New York zes rechtszaken die nooit bestaan hebben."
- **Concept-scherm:** de zoek-de-fout-prompt uit het boek.
- **Verhaal:** in de zaak Mata tegen Avianca dienden advocaten een stuk in met uitspraken die ChatGPT had
  verzonnen. De rechter legde hen in juni 2023 een boete van 5000 dollar op.
- **Poll:** "Controleer jij wat een A.I. je geeft voor je het gebruikt?"
- **Nakijken:** uitspraak van rechter P. Kevin Castel, 22 juni 2023.

## H5 Beslissingen

### 12. goto fail (nieuw)

- **Concept:** een `if` zonder accolades. `4_beslissingen/0_if.md` ("Accolades vergeten")
- **Haak:** "Eén dubbele regel code zette in 2014 een beveiligingscontrole op iPhones en Macs uit."
- **Concept-scherm:** een `if` zonder accolades met twee ingesprongen regels. Enkel de eerste hoort bij de `if`.
- **Verhaal:** in de beveiligingscode van Apple stond `goto fail;` twee keer onder elkaar na een `if` zonder
  accolades. De tweede sprong werd altijd uitgevoerd, waardoor de controle van een certificaat werd
  overgeslagen. Apple loste het op in februari 2014.
- **Quiz:** "De conditie is `false`. Wordt de tweede ingesprongen regel uitgevoerd?" Antwoord: ja.
- **Nakijken:** CVE-2014-1266; analyse van Adam Langley op imperialviolet.org, februari 2014.
- **Extra:** `goto` staat ook op het boeteblad.

### 13. Wie mag binnen op de fuif? (boek)

- **Concept:** `&&` gaat voor `||`. `4_beslissingen/1_logic_and_relationsoperator.md` ("Volgorde van bewerkingen")
- **Haak:** "Een lid zonder kaart staat aan de deur. Mag hij binnen?"
- **Concept-scherm:** `bool magBinnen = isLid || isStudent && heeftKaart;`
- **Verhaal:** C# leest dit als `isLid || (isStudent && heeftKaart)`. Moet iedereen een kaart hebben, dan
  zet je zelf de haakjes.
- **Quiz:** "`isLid` is `true`, `heeftKaart` is `false`. Mag hij binnen?" Antwoord: ja.
- **Nakijken:** staat in het boek. Toegevoegd: de fuifdeur als beeld.

### 14. Achter elke 404 zit een enum (nieuw)

- **Concept:** een enum met een eigen interne waarde. `4_beslissingen/enum.md` ("Andere interne waarde toekennen")
- **Haak:** "Achter elke *404 Not Found* zit een enum."
- **Concept-scherm:** `Console.WriteLine((int)HttpStatusCode.NotFound);` geeft 404.
- **Verhaal:** een webserver antwoordt met een getal: 200 als alles goed ging, 404 als de pagina niet
  bestaat. .NET giet die getallen in de enum `System.Net.HttpStatusCode`, zodat je code `NotFound` leest in
  plaats van een los getal.
- **Quiz:** "Wat toont `Console.WriteLine(HttpStatusCode.NotFound);`?" Antwoord: `NotFound`.
- **Nakijken:** documentatie van `System.Net.HttpStatusCode`.

## H6 Herhalingen

### 15. De mp3-speler die op oudejaar bevroor (nieuw)

- **Concept:** een loop die nooit stopt. `5_herhalingen/1_while_dowhile.md` ("Oneindige loops")
- **Haak:** "Op 31 december 2008 bevroren wereldwijd de Zune 30-mp3-spelers van Microsoft."
- **Concept-scherm:** een vereenvoudigde versie van de lus, hoogstens zes regels: zolang er meer dan 365
  dagen over zijn, trek je een jaar af.
- **Verhaal:** de klok van de Zune rekende het jaartal uit met zo'n lus. Op dag 366 van schrikkeljaar 2008
  trok hij niets af en bleef hij eeuwig draaien. Microsoft raadde aan te wachten tot 1 januari en het toestel
  dan opnieuw op te starten.
- **Quiz:** "Het is dag 366 van een schrikkeljaar. Stopt de lus?" Antwoord: nee.
- **Nakijken:** verklaring van Microsoft van 31 december 2008 en de gepubliceerde code van de klokdriver.
- **Alternatief uit het boek:** de roostertool van Tim die nooit stopte met zoeken (`5_herhalingen/0_loops_intro.md`).

## H7 Methoden

### 16. Een website genoemd naar een crash (nieuw)

- **Concept:** een methode die zichzelf eindeloos aanroept. `6_methoden/0c_methodencombineren.md`
  ("Oneindige methode-lussen", "Recursie in het kort")
- **Haak:** "De bekendste website voor programmeurs is genoemd naar een fout."
- **Concept-scherm:** `SchrijfNaam` die zichzelf aanroept, uit het boek.
- **Verhaal:** elke aanroep neemt een stukje van de stack in, tot die vol is: een `StackOverflowException`.
  Jeff Atwood en Joel Spolsky lieten de lezers van hun blogs in 2008 de naam van hun nieuwe site kiezen,
  en het werd Stack Overflow.
- **Quiz:** "Welke exception krijg je hier?" Antwoord: `StackOverflowException`.
- **Nakijken:** blogpost van Jeff Atwood op Coding Horror, april 2008.

### 17. Log4Shell (boek)

- **Concept:** bestaande bibliotheken gebruiken maakt je er afhankelijk van. `6_methoden/1_bibliotheken.md`
- **Haak:** "In december 2021 sliep de halve IT-wereld slecht door een bibliotheek die bijna niemand bij naam kende."
- **Concept-scherm:** een aanroep van een bestaande .NET-methode, met IntelliSense ernaast.
- **Verhaal:** een lek in Log4j, een Java-bibliotheek om logberichten weg te schrijven. Wie de juiste tekst
  in een logbericht kreeg, kon zijn eigen code laten uitvoeren op de server.
- **Poll:** "Weet jij welke bibliotheken jouw project gebruikt?"
- **Nakijken:** staat in het boek. Extra: link naar Cyberboswachters.

## H8 Arrays

### 18. 21 velden verwacht, 20 gekregen (nieuw)

- **Concept:** een index buiten de array. `7_arrays/2_ArraysGebruiken.md`
- **Haak:** "Op 19 juli 2024 gingen wereldwijd zo'n 8,5 miljoen Windows-pc's op blauw scherm, door één veld te veel."
- **Concept-scherm:** `int[] velden = new int[20];` en `velden[20]`. De laatste index is `Length - 1`.
- **Verhaal:** een update van de beveiligingssoftware van CrowdStrike verwachtte 21 invoervelden, maar kreeg
  er 20. De software las voorbij het einde van de gegevens, en omdat ze diep in Windows draait, crashte de
  hele pc. Luchthavens, banken en ziekenhuizen lagen stil. In C# krijg je op die plek een
  `IndexOutOfRangeException`.
- **Quiz:** "Wat is de hoogste geldige index van `new int[20]`?" Antwoord: 19.
- **Nakijken:** Root Cause Analysis van CrowdStrike (6 augustus 2024); het aantal toestellen is een schatting
  van Microsoft.

### 19. Drie lijstjes die synchroon moeten blijven (boek)

- **Concept:** twee arrays die synchroon lopen. `7_arrays/algoarrays.md`
- **Haak:** "Ook de auteur van dit boek trapte erin."
- **Concept-scherm:** twee arrays met dezelfde index, uit het boek.
- **Verhaal:** de hoofdstukken van dit boek zitten in mappen met een eigen nummer, de tekst draagt een ander
  nummer en de oefeningen nog een ander. Drie lijstjes die met de hand synchroon moeten blijven, en die
  ondertussen uit de pas lopen.
- **Poll:** "Heb jij al eens twee lijstjes uit de pas laten lopen?"
- **Nakijken:** staat in het boek.

## H9 Object Oriented Programming

### 20. Steve Jobs en de wasserij (boek)

- **Concept:** objecten en encapsulatie. `8_klassen/0_oop_intro.md`
- **Haak:** "Steve Jobs legde in 1994 objecten uit met een wasserij."
- **Concept-scherm:** `Balletje bal1 = new Balletje();` en `bal1.Update();`
- **Verhaal:** in het interview met Rolling Stone: je geeft iemand je vuile was en krijgt ze proper terug,
  zonder te weten hoe. "They encapsulate complexity, and the interfaces to that complexity are high level."
- **Quiz:** "Is `bal1` een klasse of een object?" Antwoord: een object.
- **Nakijken:** staat in het boek.

### 21. De klok van 2038 (nieuw)

- **Concept:** `DateTime`. `8_klassen/datetime.md`
- **Haak:** "Op 19 januari 2038 om 03:14:07 UTC loopt de klok van veel oudere systemen over."
- **Concept-scherm:** `Console.WriteLine(DateTime.MaxValue);`
- **Verhaal:** veel oudere systemen bewaren de tijd als het aantal seconden sinds 1 januari 1970, in een
  32-bit getal. Dat past tot 19 januari 2038, 03:14:07 UTC; een seconde later springt de teller naar 1901.
  Het millenniumprobleem was hetzelfde verhaal met jaartallen van twee cijfers. Een `DateTime` in .NET gaat
  tot het jaar 9999.
- **Quiz:** "Wat geeft `DateTime.MaxValue.Year`?" Antwoord: 9999.
- **Nakijken:** 2^31 - 1 seconden na 1 januari 1970 is 19 januari 2038, 03:14:07 UTC.

## H10 Geheugenmanagement en uitzonderingen

### 22. De fout van een miljard dollar (nieuw)

- **Concept:** `null` en de `NullReferenceException`. `9_meminoop/nullreference.md`
- **Haak:** "De uitvinder van `null` noemt het zelf zijn fout van een miljard dollar."
- **Concept-scherm:** een variabele die `null` is, `.Naam` erop, en daarna de versie met `?.`.
- **Verhaal:** Tony Hoare voerde de null-referentie in 1965 in de taal ALGOL W in, omdat het zo makkelijk te
  implementeren was. In een lezing in 2009 noemde hij het zijn *billion-dollar mistake*.
- **Quiz:** "Welke exception krijg je als je `.Naam` opvraagt van een variabele die `null` is?"
  Antwoord: `NullReferenceException`.
- **Nakijken:** lezing van Tony Hoare op QCon London, 2009.

### 23. Een link doorsturen of een kopie mailen (nieuw)

- **Concept:** value types en reference types. `9_meminoop/6_memorymanagement.md` en `7_arrays/arraysgeheugen.md`
- **Haak:** "Waarom verandert mijn eerste array mee als ik de 'kopie' aanpas?"
- **Concept-scherm:** `int[] b = a;` en `b[0] = 99;`
- **Verhaal:** een link naar een gedeeld document doorsturen: iedereen werkt in hetzelfde document. Het
  document downloaden en mailen: de ander krijgt een eigen kopie. `int[] b = a` stuurt de link door.
- **Quiz:** "Wat staat er in `a[0]`?" Antwoord: 99.
- **Nakijken:** geen incident, een vergelijking. Laten nalezen of ze klopt met de figuren in H10.

### 24. Ariane 5, deel twee: de fout die niemand opving (nieuw)

- **Concept:** exception handling. `20_exceptions/0_exceptionhandling.md`
- **Haak:** "Dezelfde raket als in story 7: de fout had opgevangen kunnen worden."
- **Concept-scherm:** `try` en `catch` rond een omzetting.
- **Verhaal:** bij de Ariane 5 was die ene omzetting niet beschermd. De fout werd niet opgevangen, en zowel
  het navigatiesysteem als het reservesysteem, met exact dezelfde software, schakelde zichzelf uit. De
  bescherming was bewust weggelaten, omdat de waarde in de Ariane 4 nooit zo groot werd.
- **Quiz:** "Wat gebeurt er met een exception zonder `catch`?" Antwoord: je programma crasht.
- **Nakijken:** zelfde rapport als story 7.

## H11 Gevorderde klasseconcepten

### 25. Het rode sterretje (nieuw)

- **Concept:** `required` properties. `10_advancedklassen/2_objectinitsyntax.md`
- **Haak:** "Waarom kan je een webformulier niet versturen zolang er een rood sterretje leeg staat?"
- **Concept-scherm:** `public required bool IsGeconfirmeerd {get;set;}` en de foutboodschap uit het boek.
- **Verhaal:** een formulier met verplichte velden laat je pas door als die ingevuld zijn. `required` doet
  hetzelfde bij het aanmaken van een object.
- **Quiz:** "Compileert `new Meting { Temperatuur = 0.7};`?" Antwoord: nee.
- **Nakijken:** geen incident, een vergelijking.

## H12 Arrays en klassen

### 26. De wachtrij van Spotify en Ctrl+Z (nieuw)

- **Concept:** `Queue` en `Stack`. `11_arraysvanklassen/dict.md`
- **Haak:** "Je Spotify-wachtrij en Ctrl+Z werken precies omgekeerd."
- **Concept-scherm:** `Enqueue` en `Dequeue` naast `Push` en `Pop`.
- **Verhaal:** nummers die je aan je wachtrij toevoegt, spelen in de volgorde waarin je ze toevoegde: first
  in, first out. Ctrl+Z maakt eerst je laatste actie ongedaan: last in, first out.
- **Quiz:** "Je typt A, dan B, dan C, en drukt twee keer op Ctrl+Z. Wat blijft er staan?" Antwoord: A.
- **Nakijken:** geen incident, een vergelijking.

## H14 Gevorderde overervingsconcepten

### 27. ``System.Collections.Generic.List`1[System.String]`` (nieuw)

- **Concept:** elke klasse erft van `System.Object`, en dus ook `ToString()`. `13_advancedovererving/4_System_Object.md`
- **Haak:** "Ooit deze rare tekst op je scherm gekregen toen je een lijst wou tonen?"
- **Concept-scherm:** `Console.WriteLine(lijst);` en de uitvoer ``System.Collections.Generic.List`1[System.String]``.
- **Verhaal:** `Console.WriteLine` roept `ToString()` aan. Wie die niet override, krijgt de versie van
  `System.Object`: de naam van het type.
- **Quiz:** "Wat toont `Console.WriteLine(new Student());` als `Student` geen `ToString()` heeft?"
  Antwoord: de naam van de klasse, met de namespace ervoor.
- **Nakijken:** zelf uitvoeren in een console-app.

## H15 Compositie en aggregatie

### 28. Een playlist verwijderen (nieuw)

- **Concept:** compositie en aggregatie. `14_compositie/0_compositie_intro.MD`
- **Haak:** "Verwijder je een playlist, dan blijven de nummers bestaan. Sloop je een huis, dan verdwijnen de kamers."
- **Concept-scherm:** de volle en de lege ruit uit de UML-figuren van het boek.
- **Verhaal:** een kamer heeft geen bestaansreden zonder het huis: compositie (voorbeeld uit het boek). Een
  nummer bestaat ook zonder de playlist: aggregatie.
- **Quiz:** "Een harde schijf in een pc: compositie of aggregatie?" Antwoord uit het boek: aggregatie.
- **Nakijken:** het huis en de harde schijf staan in het boek; de playlist is toegevoegd.

## H16 Polymorfisme

### 29. Presidenten en hun adviseurs (boek)

- **Concept:** polymorfisme. `15_polymorfisme/polypraktijd.md`
- **Haak:** "Een president zegt 'geef advies' en weet niet eens hoe elke adviseur dat doet."
- **Concept-scherm:** een lijst van het basistype en één lus die dezelfde methode aanroept.
- **Verhaal:** het voorbeeld uit het boek, gebaseerd op een bekend antwoord op Stack Overflow.
- **Quiz:** "Moet de lus veranderen als er een nieuwe soort adviseur bijkomt?" Antwoord: nee.
- **Nakijken:** staat in het boek.

## H17 Interfaces

### 30. Eén lader voor alles (nieuw)

- **Concept:** interfaces, met `IComparable` als voorbeeld. `16_interfaces/2_InterfacesInPraktijk.md`
- **Haak:** "Sinds eind 2024 moet elke nieuwe smartphone in de EU met USB-C laden."
- **Concept-scherm:** `internal class Land: IComparable` en `Array.Sort(eurolanden);`
- **Verhaal:** een lader hoeft niet te weten welk toestel eraan hangt, enkel dat het de afspraak volgt. De EU
  heeft die afspraak verplicht gemaakt. `Array.Sort` doet hetzelfde: het weet niets van `Land`, enkel dat
  elk land `CompareTo` kent.
- **Quiz:** "Wat moet `Land` hebben voor `Array.Sort` werkt?" Antwoord: de interface `IComparable`.
- **Nakijken:** Richtlijn (EU) 2022/2380, van toepassing sinds 28 december 2024.

## H18 Bestandsverwerking

### 31. Een savegame is een object in een bestand (boek)

- **Concept:** serialiseren naar JSON. `21_bestanden/serialize.md`
- **Haak:** "Wat zit er eigenlijk in een savegame?"
- **Concept-scherm:** `JsonSerializer.Serialize(student)` en de JSON-regel uit het boek.
- **Verhaal:** serialiseren maakt letterlijk een savepoint van je programma, dat je later weer kan inladen.
- **Quiz:** "Welke properties komen in de JSON terecht?" Antwoord: enkel de publieke.
- **Nakijken:** het savepoint staat in het boek; de savegame als haak is toegevoegd.

### 32. De muziekmap van Djams (boek)

- **Concept:** speciale folders in plaats van een vast pad. `21_bestanden/bestandenintro.md`
- **Haak:** "Tims eerste programma met bestanden ruimde zijn mp3-collectie op."
- **Concept-scherm:** `Environment.GetFolderPath(Environment.SpecialFolder.MyMusic)`
- **Verhaal:** een programma dat bestandsnamen opkuiste en rare tekens en reclame eruit haalde. Wie
  `C:\Users\Tim\Music` in zijn code zet, krijgt een programma dat enkel op Tims pc werkt.
- **Quiz:** "Werkt een vast pad naar je eigen gebruikersmap op de pc van een ander?" Antwoord: nee.
- **Nakijken:** de anekdote staat in het boek; het vaste pad als tegenvoorbeeld is toegevoegd.
