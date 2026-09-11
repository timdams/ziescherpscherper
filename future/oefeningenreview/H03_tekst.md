# H3: Tekst gebruiken in code

> **Beslist door Tim (2026-09-11), zie README:** Dertien in een dozijn verhuist naar H2, Systeem
> informatie deel 2 (DriveInfo) naar H18. Kijk eerst of die verhuizen al gebeurd zijn.

Bronnen: `oefeningen/3_tekst/a_practica.md`, `oefeningen/_coach/3_tekst.md`, `content/2_tekst/`
(`5_chars_strings.md`, `escapechars.md`, `6_stringInterpolation.md`, `7_unicode.md`,
`8_environment.md`, `zieverder.md`, `kennisclips.md`), `content/B_appendix/boete.md`, de afbeeldingen
`oefeningen/assets/1_csharpbasics/madlibs.jpg` en `names.png`, vluchtig
`oefeningen/2_csharpbasics/A_practica.md` en het begin van `oefeningen/4_data/A_Practica.md`.
Alle oplossingen gecompileerd en uitgevoerd met dotnet 10 op een nl-BE-machine (OEM code page 850).

## 1. Fouten die sowieso weg moeten

- **Boardingpass (Final Essentials) heeft geen oplossing** (`oefeningen/3_tekst/a_practica.md:306-308`),
  en de tip klopt niet. "Gebruik `\t` na de dubbele punten" (`:301`) en "zonder dat je zelf spaties
  moet tellen" (`:269`) geven niet de voorbeelduitvoer. `Van:` is 4 tekens, één tab springt naar
  kolom 8. `Passagier:` is 10 tekens en springt naar kolom 16. Met één tab per label staat
  "Brussel" dus onder kolom 8 en "Joske" onder kolom 16. Het voorbeeld (`:291-294`) krijg je enkel met
  `Van:\t\t`, `Naar:\t\t` en `Gate:\t\t` (geverifieerd met dotnet, tabs uitgeklapt op 8). Voorstel:
  oplossing schrijven, de tip herschrijven ("tel hoeveel tabs elk label nodig heeft, kijk naar de
  tabstops in de leerstof") met een link naar "Over tabstops" (`content/2_tekst/escapechars.md:100-118`),
  en een callout "Les" over precies dat punt.
- **Dertien in een dozijn: de oplossing werkt enkel voor 124 eieren.** `int over= 124 % doosGrootte;`
  (`:99`). Met 30 eieren toont ze "nog 4 eieren over" in plaats van 6 (geverifieerd met dotnet). Net
  wat de opgave twee keer vraagt te testen (`:79`, `:85`), en net de valkuil uit de eigen coach-data.
  De zin verschilt ook van het voorbeeld: "124 passen" zonder "eieren", en "doosgrootte: 8" tegenover
  "doosgrootte:8" (`:82` tegenover `:101`). Voorstel: `aantalEieren % doosGrootte`, en één zin in
  opgave en oplossing, bv. "124 eieren passen in 15 dozen van 8. Je houdt 4 eieren over."
- **Systeem informatie: de omrekening naar MB is een gehele deling.** `memoryInBytes / (1024 * 1024)`
  (`:182`) is `long / int`, dus F2 toont altijd `,00`. Bij mij "26,00 MB" terwijl het 26,82 MB is
  (geverifieerd met dotnet). Het voorbeeld zelf toont de fout ook: "23.00 MB" (`:165`). Voorstel:
  `1024.0 * 1024`. Verder klopt voorbeeld en oplossing niet met elkaar:
  - 51 streepjes in het voorbeeld (`:162`, `:166`), 45 in de oplossing (`:187`, `:191`);
  - 4 spaties inspringing in het voorbeeld, `\t` (8 kolommen) in de oplossing;
  - "23.00" met een punt, een Belgische pc geeft "23,00" (de andere hoofdstukken tonen komma's);
  - de lijst noemt `is64OperatingSystem` (`:156`), de echte naam is `Is64BitOperatingSystem`;
  - "Zoals je ziet wordt het geheugen in bytes teruggegeven" (`:150`): de student ziet op dat moment nog niets;
  - `$` voor strings zonder accolades (`:187`, `:191`).
- **Unicode Art: `Console.OutputEncoding` ontbreekt**, in de opgave (`:234`) en in de oplossing
  (`:241-252`). Werkt het op elke machine? Nee. Op een Belgische Windows-pc (code page 850) wordt het
  teken `▌` uit de tekening (`:243`, `:245`) stil een `█`, zodat de letters vervormen. Met een andere
  generator is het erger: `€`, `✈` en emoji worden `?`. Met de UTF-8-lijn is alles juist (beide
  geverifieerd met dotnet op een console met code page 850). Op Mac en Linux is de console al UTF-8,
  daar valt het niet op. Voorstel: de lijn als eerste regel in `Main` in de oplossing, en in de opgave
  een verwijzing naar stap 2 van `content/2_tekst/7_unicode.md:15`.
- **Shell-starter: de extra voorbeelden werken niet met de gegeven code.** De code zet
  `UseShellExecute = false` (`:319`). Dan zoekt `Process.Start` enkel een uitvoerbaar bestand:
  `chrome.exe ap.be` (`:353`) lukt alleen als Chrome in het PATH staat (hier niet), en een document
  zoals `c:\Temp\mydocument.docx` (`:361`) geeft een `Win32Exception` "The specified executable is not a
  valid application for this OS platform." (geverifieerd met een .txt-bestand). Daarvoor moet
  `UseShellExecute = true` en mag er geen redirect staan. `ipconfig` en `getmac` bestaan niet op Mac.
  De oplossingscallout is leeg (`:364-366`).
- **Mad Libs:** "Geen een naam:" (vier keer, `:49-55`) waar het voorbeeld "Geef" toont. Het onderschrift
  van de afbeelding zegt "Bron afbeelding: Swanton Public Library" (`:15`), maar op de afbeelding zelf
  staat "© WooJr.com. All Rights Reserved.". Bron rechtzetten of de afbeelding vervangen.
- **Systeem informatie Deel 2:**
  - een `##`-kop (`:196`) in plaats van `**Deel 2.**`;
  - "(in bits)" (`:198`) moet "in bytes" zijn;
  - de uitleg over `using System.IO` (`:199`, `:210-211`) klopt niet meer in een .NET-project met
    ImplicitUsings: `System.IO` zit daar al in. De screenshot (`:201`) toont de `using`-lijn grijs,
    Visual Studio zegt dus zelf dat ze overbodig is;
  - typfout "invoer van de gebruiken" (`:218`).
- **Opmaak:** de melding bovenaan is een losse `callout-warning` (`:3-5`), dat hoort in een
  `::: {.vooraf}`. Twee keer `<!--# Hoofdstuk 3-->` (`:1`, `:7`).

## 2. Wat sterker kan

- **Het hoofdstuk oefent zijn eigen leerstof amper.** Van de zeven oefeningen zijn er twee op het
  niveau van H1/H2 (Mad Libs, Dertien) en twee PRO. Wat er per onderwerp overblijft:

  | Leerstof | Waar | Geoefend? |
  |---|---|---|
  | `char` tegenover `string`, `'A' + 'B'` geeft 131 | `5_chars_strings.md`, `6_stringInterpolation.md:222-255` | nergens |
  | `+` met strings en getallen, volgorde (`"1"+1+1`) | `6_stringInterpolation.md:188-218` | nergens |
  | `+` over meerdere codelijnen, `$` per stuk | `6_stringInterpolation.md:166-184` | nergens, hoewel de melding bovenaan het net toelaat |
  | `\n`, `\t`, `\"` | `escapechars.md` | Escape conversatie, Boardingpass |
  | `\\`, verbatim `@` voor paden | `escapechars.md:144-169` | nergens |
  | `\u`, `OutputEncoding`, emoji | `7_unicode.md` | nergens (Unicode Art zonder encoding) |
  | `@` voor tekst over meerdere lijnen, raw strings `"""` | `7_unicode.md:66-121` | Unicode Art, maar die tekening bevat geen enkele backslash |
  | F2 | `6_stringInterpolation.md:75-90` | Systeem informatie |
  | D5, E2, C, masker `0.00` | `6_stringInterpolation.md:92-140` | nergens |
  | `.Length` | `6_stringInterpolation.md:41-45` | nergens |
  | `Environment`-eigenschappen | `8_environment.md:15-37` | Systeem informatie, Boardingpass |
  | `Environment.NewLine`, `Environment.Exit` | `8_environment.md:5-9`, `:66-74` | nergens |
  | code lezen (voorspel, Steven, puzzel) | | nergens |

  Sectie 4 vult de grootste gaten.
- **Mad Libs** is Visitekaart uit H1 met andere woorden. Voorstel voor een `**Deel 2.**`: het verhaal
  langer maken zodat het over drie codelijnen gesplitst moet worden met `+`, met een variabele in het
  tweede en derde stuk. Dat traint de valkuil uit `6_stringInterpolation.md:184` ("Een `$` op de eerste
  lijn geldt niet voor de volgende stukken"). Eén woord tussen aanhalingstekens ("riep hij
  \"[uitroep]\"") en een slotzin "Jos telt 3 letters" met `.Length`.
- **Escape conversatie** is de enige echte H3-oefening en de oplossing klopt (geverifieerd met dotnet).
  Deel 2: dezelfde dialoog als verbatim string `$@"..."` over meerdere lijnen. De student merkt dat
  `\t` en `\"` daar niet meer werken en dat een aanhalingsteken verdubbeld moet worden (`""`). Zo
  wordt ook de tip over `$@` (`7_unicode.md:85-101`) geoefend.
- **Unicode Art** in twee delen. Eerst één teken tonen via `\u` uit een tabel (bv. `©`, `♥`), met de
  UTF-8-lijn. Dan pas de tekening, en daar de raw string literal als alternatief aanreiken: de
  oplossing toont zelf het nadeel van `@` (eerste lijn 12 spaties ingesprongen, de rest tegen de
  kantlijn, `:242-251`). De Google-zoeklink met trackingparameters (`:234`) vervangen door één vaste
  generator, bv. patorjk.com/software/taag, zodat iedereen dezelfde soort tekens krijgt.
- **Systeem informatie:** een callout "Les" bij de oplossing over waarom de uitvoer bij elke student
  anders is (`8_environment.md:39-43`) en waarom `WorkingSet` per run verschilt (`:64`). Laat de student
  het twee keer runnen en vergelijken.
- **Boardingpass** als Final Essentials gebruikt nog geen formattering en geen Unicode. Voorstel: een
  vaste ticketprijs (hard in de code, want `Parse` komt pas in H4) tonen met `:C`. Dan moet de
  UTF-8-lijn erbij, anders wordt de euro een `?`. Zo komen interpolatie, tabs, formattering,
  Unicode en Environment samen.

## 3. Wat weg kan (of verhuist)

- **Dertien in een dozijn** traint enkel gehele deling en modulo, dat is H2. In H2 is er buiten Simple
  maths geen modulo-oefening, dus daar past ze beter. Blijft ze hier, dan met een H3-toevoeging
  (bv. het aantal dozen met `D3`). Met `doosGrootte = 12` klopt de titel ook met de inhoud.
- **Systeem informatie Deel 2** (DriveInfo, `[0]`, `int.Parse`) gebruikt arrays en conversie uit H4 en
  H8 en gaat over schijven, niet over tekst. Naar H18 (bestanden) of schrappen.
- **Shell-starter** heeft niets met tekst te maken en `Process` komt nergens in de leerstof. Schrappen,
  of als bonus achteraan met de fix uit sectie 1 en de vermelding "enkel Windows".

## 4. Gaten: kansen voor nieuwe oefeningen

1. **Char of string?** (*Essential*). Voorspel de uitvoer op papier, voer daarna uit:
   `'A' + 'B'` (131), `"A" + "B"` (AB), `'1' + 1` (50), `"1" + 1 + 1` (111), `1 + 1 + "1"` (21),
   `$"{letter1}{letter2}"` (AB) (uitvoer geverifieerd met dotnet). Traint char als getal en de volgorde
   bij `+`. Code lezen.
2. **Stevens bestandspad** (*Essential*). Steven toont "Bestand bewaard in C:\temp\notities.txt" met
   een gewone string. Het compileert, maar op het scherm staat een tab en een nieuwe lijn. Daarna "fixt"
   hij het met hoofdletters, `C:\Temp\Notities.txt`, en nu compileert het niet meer
   (`error CS1009: Unrecognized escape sequence`, geverifieerd met dotnet). De student verklaart
   beide en herstelt op twee manieren: `@` en `\\`. Gaat verder dan de Zoek de fout in
   `content/2_tekst/zieverder.md:24-42`, en toont dat `\t` en `\n` gevaarlijker zijn dan `\T`, net omdat
   de compiler zwijgt.
3. **Prijskaartje** (*Essential*). Een winkeletiket met vaste waarden: artikelnummer met `D6`, prijs
   met `C`, gewicht met `0.000`, en een prijs 12,345 die op 12,35 uitkomt (afronden, niet afkappen).
   Met de UTF-8-lijn voor de euro. Traint de format specifiers en de landinstellingen.
4. **Tekens uit de tabel.** Drie tekens opzoeken op symbl.cc en tonen: één met `\u`, één met
   copy/paste, één emoji met `\U0001F600`. Daarna `"😀".Length` tonen (2) en uitleggen waarom
   (voetnoot `5_chars_strings.md:9`). Traint `\u`, `OutputEncoding` en de grens van `char`. Kan ook deel 1
   van Unicode Art worden (sectie 2).
5. **Nooddeur.** Code lezen: een kort programma met drie `WriteLine`s en daartussen
   `Environment.Exit(3)`. Welke lijnen verschijnen, en welke exitcode meldt Visual Studio onderaan?
   Daarna zelf uitvoeren. Niet Essential.

## 5. Voorgestelde volgorde

Mad Libs (met deel 2) → Char of string? → Escape conversatie (met deel 2) → Stevens bestandspad →
Prijskaartje → Tekens uit de tabel → Unicode Art → Systeem informatie → Nooddeur → Boardingpass
(Final Essentials) → Shell-starter (bonus, of weg)

Dertien in een dozijn verhuist naar H2. Blijft ze, dan meteen na Mad Libs.

## 6. Nevenvondsten

- **Leerstof fout over verbatim en aanhalingstekens.** `content/2_tekst/escapechars.md:153`: "Heb je dus
  een stuk tekst met een aanhalingsteken in dan zal je zonder het apenstaartje moeten werken." Dat
  klopt niet: `@"Hij zei ""hallo"" in C:\Temp"` geeft `Hij zei "hallo" in C:\Temp`, en `\"` in een
  verbatim string geeft net een compileerfout (CS1002 en CS1056, beide geverifieerd met dotnet). De
  coach-data zegt het wel juist (`oefeningen/_coach/3_tekst.md:114`), dus leerstof en coach spreken
  elkaar tegen.
- **Coach-data:**
  - Boardingpass-valkuil (`oefeningen/_coach/3_tekst.md:128`): spaties "lopen scheef zodra een naam
    langer is". De labels staan links en zijn vast, dus de lengte van de naam speelt geen rol. De echte
    valkuil is één tab na een kort label (sectie 1).
  - Unicode Art (`:112`): niet elke backslash geeft een fout, enkel onbekende escapes zoals `\_` of `\T`.
    `\t` en `\n` compileren en veranderen stil de uitvoer. Een valkuil over de vergeten UTF-8-lijn ontbreekt.
  - Systeem informatie (`:98`): "De tabs vergeten waardoor de uitvoer niet inspringt zoals in het
    voorbeeld", maar het voorbeeld toont spaties en zegt nergens tab.
  - "Kent al" (`:23`, `:28`) mist `Console.OutputEncoding`, `Environment.NewLine`, `Environment.Exit` en
    raw strings. Bijwerken zodra de nieuwe oefeningen er zijn.
- **Punt of komma in de leerstof.** `content/2_tekst/6_stringInterpolation.md:86` belooft "12.35" en
  `:135-136` "012.30 / 99999.30", terwijl `:120` "12,30" zegt. Op nl-BE geeft dotnet 12,35 en 12,30. De
  waarschuwing op `:142-148` legt het uit, maar de voorbeelden zelf best overal met komma.
- `content/2_tekst/7_unicode.md:34`: "In Windows Terminal is dat zelden een probleem, zelfs voor
  emoji" gaat over het lettertype. Zonder de UTF-8-lijn blijft de code page 850 en worden emoji ook
  daar `?`. Eén zinnetje erbij voorkomt dat een student de lijn weglaat.
- `content/2_tekst/8_environment.md:1`: de TODO om Environment naar H1 of een appendix te verhuizen. Als
  dat gebeurt, gaan Systeem informatie en het Environment-stuk van Boardingpass mee.
- `content/2_tekst/kennisclips.md:16` linkt nog naar de oude oefeningen op apwt.gitbook.io.
- Gezien in H2: in de oplossing van Tafel ontbreken `ReadLine` en `Clear` tussen de zesde en zevende
  vermenigvuldiging (`oefeningen/2_csharpbasics/A_practica.md:310-312`). In H4 toont het voorbeeld van
  Vierkant "18.4" met een punt en "21,16" met een komma (`oefeningen/4_data/A_Practica.md:55-56`).
