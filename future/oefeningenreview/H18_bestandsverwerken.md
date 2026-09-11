# H18: Bestandsverwerking

> **Beslist door Tim (2026-09-11), zie README:** Systeem informatie deel 2 (DriveInfo) verhuist van H3
> naar hier. Kijk eerst of dat al gebeurd is.

Bronnen: `oefeningen/18_bestandsverwerken/A_practica.md`, `oefeningen/_coach/18_bestandsverwerken.md`,
`content/21_bestanden/` (bestandenintro, schrijvenenlezen, fileinfo, serialize, zieverder, kennisclips),
`content/B_appendix/boete.md`, `content/B_appendix/mac.md`, vluchtig `oefeningen/17_interfaces/A_practica.md`.
H18 is het laatste hoofdstuk, er is geen volgend. De opgaven bevatten geen afbeeldingen. Het JSON-bestand
van de IMDB-oefening heb ik online nagekeken (structuur en sleutelnamen). De gist met het `.bat`-script van
de Klokkenluider kon ik vanuit mijn sessie niet openen, dus de inhoud van dat script heb ik niet gezien.

De pagina telt vier oefeningen. Twee daarvan hebben geen oplossing, waaronder de Final Essentials.
Er is één Essential.

## 1. Fouten die sowieso weg moeten

- **De Digitale Klokkenluider werkt niet op Mac, en de paden kloppen ook op Windows niet.**
  - `oefeningen/18_bestandsverwerken/A_practica.md:215`: een `.bat` draait enkel op Windows. Mac-studenten
    (zie `content/B_appendix/mac.md`) kunnen de map `CorruptCorp` dus niet aanmaken.
  - `A_practica.md:216` zegt "naast je `.sln` file of in `bin/Debug`". Een relatief pad vertrekt echter
    vanuit de werkmap. In Visual Studio is dat `bin\Debug\net8.0`, met `dotnet run` de projectmap
    (geverifieerd met dotnet). Geen van beide voorgestelde plaatsen is dus de werkmap. Wie
    `ScanDirectories("CorruptCorp")` schrijft, krijgt een `DirectoryNotFoundException`, of op zijn best
    niets.
  - `A_practica.md:240` wil `FINAL_REPORT.txt` "in de hoofdmap van je project". Vanuit `bin\Debug\net8.0`
    is dat drie mappen hoger, en het boek toont nergens hoe je daar geraakt.
  - Voorstel: zet `CorruptCorp` als zip in `oefeningen/assets/` (dan werkt het ook op Mac), of laat de
    student de stick zelf bouwen (zie sectie 2). Laat hem het pad inlezen, of `Path.GetFullPath` afdrukken.
    Schrijf het rapport naar het bureaublad met `Environment.GetFolderPath` en `Path.Combine`. Zo wordt meteen
    leerstof geoefend die nu nergens terugkomt.
- **Twee oefeningen hebben een lege oplossing:** IMDB (`A_practica.md:134`) en de Klokkenluider
  (`A_practica.md:246`). De student krijgt een knop "Oplossing" die niets toont, net bij de oefening die
  het hele hoofdstuk moet samenvatten. Schrijf beide oplossingen uit, of haal de callout weg tot ze er zijn.
- **Boekencollectie: de oplossing gaat tegen de eigen afspraken in.**
  - `A_practica.md:82`: `.ToList()` is LINQ, en de coach-data zet dat onder "Kent nog niet"
    (`oefeningen/_coach/18_bestandsverwerken.md:54`).
  - `A_practica.md:28` en `:49`: `while (true)` met een `return` om eruit te geraken is het patroon dat
    `content/B_appendix/boete.md` bij `break` verbiedt. Beter `bool stoppen` als lusvoorwaarde.
  - `A_practica.md:87`: verwijderen met `StartsWith(titel + ";")` verwijdert het verkeerde boek zodra een
    titel een puntkomma bevat. Test: "De Hobbit; of daarheen en weer terug" en daarna "De Hobbit" toevoegen,
    en dan "De Hobbit" verwijderen. Het eerste boek verdwijnt. Het overzicht toonde vooraf
    `Auteur:  of daarheen en weer terug, Jaar: J.R.R. Tolkien` (geverifieerd met dotnet).
  - Een lege regel in `boeken.txt`, bv. na een bewerking in Kladblok, geeft bij optie 3 een
    `IndexOutOfRangeException` op `gegevens[1]` (`A_practica.md:119`, geverifieerd met dotnet). Een letter in
    het menu geeft een `FormatException` (`A_practica.md:35`). In een hoofdstuk dat zegt "exception
    handling zal vanaf nu essentieel worden" hoort de oplossing die gevallen op te vangen.
  - Voorstel: vergelijk exact met `Split(';')[0]`. Sla regels met minder dan drie stukken over. Schrijf bij
    het verwijderen alle regels terug behalve de gezochte, met een `StreamWriter` in een `using`. Dat laatste
    oefent ook meteen de `StreamWriter`, die nu in geen enkele oplossing voorkomt.
- **IMDB Top 100 JSON: de opgave loopt vast op drie plaatsen.**
  - `A_practica.md:132`: "Voor een nummer tussen 1 en 100 in en open vervolgens" is geen zin. Maak er
    "Vraag een nummer tussen 1 en 100 en open vervolgens" van. Ook: "Shawnshank" wordt "Shawshank".
  - `A_practica.md:128` linkt naar de `blob`-pagina op GitHub. Wie daar "Opslaan als" doet, bewaart HTML.
    Link naar de ruwe versie of, beter, zet het bestand in `oefeningen/assets/`.
  - De JSON begint met `[` en gebruikt kleine letters (`title`, `rank`, `id`), en `rank` is tekst (`"1"`).
    Wie de afspraak volgt (publieke properties met een hoofdletter), krijgt stilletjes overal `null`. Een
    `int Rank` geeft een `JsonException`. "Paste JSON as Classes" maakt een `Rootobject` met `Property1`,
    en dat geeft ook een `JsonException`, want de JSON is een array (alle drie geverifieerd met dotnet).
    Die functie bestaat bovendien enkel in Visual Studio op Windows. Zet in de opgave dat je
    `JsonSerializer.Deserialize<List<Film>>` nodig hebt, met `JsonPropertyName`, en dat `rank` tekst is.
  - `Process.Start(url)` geeft op .NET een `Win32Exception` ("Het systeem kan het opgegeven bestand niet
    vinden", geverifieerd met dotnet). Het werkt pas met `new ProcessStartInfo(url) { UseShellExecute = true }`.
    Dat staat niet in het boek en is geen bestandsverwerking. Geef die regel gewoon in de opgave.
- **Klokkenluider, kleiner maar fout:**
  - Methodenamen en uitvoer in het Engels (`ScanDirectories`, `AnalyzeFile`, "CRITICAL EVIDENCE FOUND"),
    en de stappen heten "The Scanner", "The Analyzer", "The Report". Een student die verder in het
    Nederlands schrijft, riskeert de boete voor inconsistente naamgeving.
  - `##`-koppen op `A_practica.md:213`, `:219`, `:228` en `:237`: tegen de afspraak in de README (deel B),
    en ze vullen de inhoudsopgave. Maak er `**Stap 1.**` van.
  - "Als de bestandsnaam het woord log bevat" (`A_practica.md:226`): `catalog.txt` en `blog.txt` bevatten
    ook "log". Bedoel je de extensie, zeg dat dan.
  - "Aantal doorzochte bestanden" (`A_practica.md:243`) kan alle bestanden betekenen of enkel de
    geanalyseerde.
  - De 🚨 in de uitvoer (`A_practica.md:234`) vraagt `Console.OutputEncoding = System.Text.Encoding.UTF8;`
    (`content/2_tekst/7_unicode.md:15`). Zeg dat erbij, of laat het icoon weg.
- **Bitmap header analyzer:** "met behulp van de `ToInt32` klasse" (`A_practica.md:164`) moet "methode" zijn.
  Typfout "hoevel" (`A_practica.md:163`). De sluitaccolade van de `catch` staat verkeerd ingesprongen
  (`A_practica.md:202`), en dat is precies de bladspiegel-boete.

## 2. Wat sterker kan

- **Boekencollectie heeft geen voorbeelduitvoer.** Het formaat `Titel: ..., Auteur: ..., Jaar: ...` bestaat
  enkel in de oplossing. Voeg een `.console`-blok toe met een volledige sessie.
- **Boekencollectie, eerste keer opstarten:** optie 3 geeft meteen "Boekenbestand niet gevonden!". Een
  beginner denkt dat hij iets fout deed. Laat het programma bij de start `boeken.txt` aanmaken met de drie
  voorbeeldboeken als het bestand ontbreekt (`File.Exists` en `File.WriteAllLines`). Laat het ook
  `Path.GetFullPath("boeken.txt")` tonen, zodat de student zijn bestand terugvindt.
- **Boekencollectie, deel 2 met een klasse:** dit is H18, na negen hoofdstukken OOP, en de oplossing
  jongleert enkel met strings. Een deel 2 met een klasse `Boek` (properties `Titel`, `Auteur`, `Jaar`),
  een `List<Boek>` die bij de start uit `boeken.json` komt en bij het afsluiten weggeschreven wordt met
  `WriteIndented`. Dat is het "savepoint" uit `content/21_bestanden/serialize.md:12`, en het is meteen de
  enige oefening waarin de student zelf serialiseert.
- **Bitmap: lees met wat het boek toont.** Het boek leert `ReadInt32` en `ReadInt16` en hamert op "in exact
  dezelfde volgorde lezen". `BitConverter` staat niet in het boek. Deze variant geeft hetzelfde resultaat
  (geverifieerd met dotnet op een bmp van 24 en een van 32 bit):
  `ReadBytes(18)`, `ReadInt32()` breedte, `ReadInt32()` hoogte, `ReadInt16()` planes, `ReadInt16()` bitdiepte.
  Laat de `BitConverter`-versie als tweede aanpak staan.
- **Bitmap: controleer de handtekening.** Bytes 0 en 1 zijn `B` en `M`. Een png als invoer geeft nu
  "Breedte: 32770, Hoogte: 34136065, Bitdiepte: -17920" (geverifieerd met dotnet). Maak van die controle een
  eis. Dan is de valkuil uit de coach-data meteen opgelost.
- **Bitmap: lever twee bmp-bestanden mee** in `oefeningen/assets/`. Paint is er enkel op Windows. Zet er ook
  een tip bij over het pad: Windows' "Kopiëren als pad" zet er aanhalingstekens rond, en dan geeft de
  oplossing "Bestand niet gevonden!" (geverifieerd met dotnet). De student moet die aanhalingstekens er dus
  zelf afhalen.
- **Klokkenluider: laat de student de stick zelf bouwen.** Een deel 0 met een gegeven lijst mappen, bestanden
  en regels, die hij aanmaakt met `Directory.CreateDirectory`, `Path.Combine` en een `StreamWriter`. Dat
  lost het Mac-probleem op, en het oefent schrijven naar bestanden. Wie wil, voegt er zelf een `catalog.txt`
  als lokvogel aan toe.
- **Klokkenluider: maak exception handling een eis** ("een bestand dat niet leesbaar is, mag de scan niet
  stoppen") en geef een voorbeelduitvoer. Zeg of `SearchOption.AllDirectories` mag, of dat het recursief
  moet. Het boek toont beide.
- **Nergens een callout `Les(sen) uit deze oefening`.** Voeg er bij elke oefening een toe, zeker bij
  Boekencollectie (relatief pad, lezen voor je iets aanpast) en IMDB (namen moeten overeenkomen).
- **IMDB:** zoeken zonder onderscheid tussen hoofdletters en kleine letters, en een optie
  "favorieten bewaren" die een eigen JSON wegschrijft. Dan wordt ook `Serialize` geoefend.

## 3. Wat weg kan (of verhuist)

- **IMDB: het openen van de browser** wordt een optioneel PRO-deel. Het gaat over `Process`, niet over
  bestanden, en zonder de regel met `UseShellExecute` loopt iedereen vast.
- **IMDB: de externe bron.** Het bestand komt uit de GitHub-repo van iemand anders en kan morgen weg zijn.
  Neem een kopie op in `oefeningen/assets/` (check eerst de licentie) of maak een eigen, kortere JSON. Die
  JSON mag dan ook een getal en een geneste lijst bevatten, want in de huidige is alles tekst.
- **Bitmap** blijft, maar achter de tekst- en JSON-oefeningen en zonder Essential. Het is de enige
  oefening met `BinaryReader`, maar een eerstejaars leest vaker een csv dan een bmp.

## 4. Gaten: kansen voor nieuwe oefeningen

Niet geoefend op deze pagina: `Path.Combine`, speciale folders, `StreamWriter`, `BinaryWriter`, `FileInfo`
en `DirectoryInfo` (enkel de bestandsgrootte bij de Klokkenluider), `CopyTo`, `MoveTo` en `Delete`,
`Serialize`, `JsonIgnore` en `JsonInclude`, en de verschillende exceptions. Geen enkele oefening laat de
student code lezen, en er is geen Steven-oefening. Er is ook geen csv met kommagetallen, terwijl dat voor
een Vlaamse student het eerste bestand is dat hij uit Excel krijgt.

1. **Waar staat mijn bestand?** (*Essential*, eerste oefening). Schrijf `hallo.txt` weg met enkel een
   bestandsnaam, toon `Path.GetFullPath("hallo.txt")` en zoek het bestand op in Verkenner of Finder. Doe
   hetzelfde op het bureaublad met `Environment.GetFolderPath` en `Path.Combine`. Vraag de gebruiker of het
   bestand overschreven mag worden als het al bestaat. Laat twee studenten de uitvoer vergelijken: in Visual
   Studio komt het in `bin\Debug\net8.0`, met `dotnet run` in de projectmap (geverifieerd met dotnet). Op Mac
   heb ik het niet kunnen testen, en daarom laat je het net afdrukken. Traint: relatief en absoluut pad,
   werkmap, `Path.Combine`, speciale folders, `File.Exists`.
2. **Kasticket in csv** (*Essential*). Een meegeleverd `ticket.csv` zoals Excel het in België maakt:
   `Brood;2,35`. Bereken het totaal met een lus en schrijf een nieuw ticket weg. Daarna de valkuilen, als
   vragen in de opgave:
   - `double.Parse("2,35")` geeft 235 op een pc in het Engels, en `double.Parse("2.35")` geeft 235 op een
     Belgische pc (beide geverifieerd met dotnet). Het boek belooft in
     `content/2_tekst/6_stringInterpolation.md:147` dat `CultureInfo` "later" komt, en
     `content/8_klassen/datetime.md:140` gebruikt al `new CultureInfo("nl-BE")`: dit is de plek.
   - Schrijf je met `$"{naam},{prijs}"` weg, dan wordt dat `Brood,2,35`, en `Split(',')` geeft drie stukken
     (geverifieerd met dotnet). Daarom een puntkomma als scheidingsteken.
   - PRO-deel: een csv in ANSI-encoding, zoals oudere Excel-versies het opslaan, geeft `Caf�`. Met
     `File.ReadAllLines(pad, Encoding.Latin1)` klopt het (geverifieerd met dotnet).

   Traint: `ReadAllLines`, `Split`, parsen met een cultuur, wegschrijven. Vult de lacune die
   `content/21_bestanden/serialize.md:153` zelf aanwijst (csv en encoding).
3. **Stevens stille fouten** (*Essential*, code lezen). Drie korte fragmenten die compileren, niet crashen en
   toch fout zijn. Per fragment: wat staat er na afloop in het bestand, en waarom?
   - een `StreamWriter` zonder `using` of `Close`: na twee keer uitvoeren is het bestand 0 bytes groot;
   - een binair bestand dat in de verkeerde volgorde gelezen wordt: `Bond (16777216). Leeft nog = True`;
   - een klasse met enkel private instantievariabelen die geserialiseerd wordt: `{}`.

   Alle drie geverifieerd met dotnet. De coach-data krijgt een `### Nota` dat de coach het antwoord niet
   geeft. Traint: `using`, leesvolgorde bij `BinaryReader`, enkel publieke properties in JSON.
4. **Welke exception?** (code lezen). Voorspel per fragment welke exception je krijgt:
   - `File.ReadAllText` op een bestand dat niet bestaat;
   - hetzelfde in een map die niet bestaat;
   - `File.Create` zonder `using` gevolgd door `File.WriteAllText` (`IOException`, geverifieerd met dotnet);
   - `CopyTo` twee keer naar hetzelfde doel (`IOException`: "already exists", geverifieerd met dotnet);
   - schrijven in `C:\Windows`.

   Schrijf daarna één programma met meerdere `catch`-blokken in de juiste volgorde. Dit is de tabel die de
   TODO in `content/21_bestanden/bestandenintro.md:92` vraagt, maar dan door de student zelf ontdekt.
   Het fragment met `C:\Windows` heeft een Mac-variant nodig.
5. **Savegame** (*Essential*). Een klasse `Held` met `Naam`, `Goud`, een `List<string>` als rugzak en een
   berekende property `Level` (enkel `get`). Bewaar en laad met `JsonSerializer`. Daarna drie vragen:
   - `Level` komt standaard mee in de JSON (`{"Naam":"Djams","Goud":250,"Level":2}`, geverifieerd met
     dotnet). Haal ze eruit met `JsonIgnore`.
   - Hernoem `Goud` in het bestand met `JsonPropertyName`.
   - Bewaar een private instantievariabele met `JsonInclude`. Dat werkt heen en terug (geverifieerd met
     dotnet 10).

   Traint: de drie attributen uit het boek, die nu nergens geoefend worden.
6. **Voorspel de bytes** (code lezen). Het `BinaryWriter`-fragment met `"Gadget"`, `42`, `false`,
   `3.14159` en `'A'`. Hoe groot is het bestand? (21 bytes, geverifieerd met dotnet.) Wat zijn de eerste
   vijf bytes? Controleer met `File.ReadAllBytes` en `{b:X2}`. Traint: `BinaryWriter`, little-endian, en het
   lezen van een hexdump. Geschikt als opstap naar Bitmap.
7. **Back-up maker**. Kopieer alle `.txt`-bestanden uit een map die het programma zelf aanmaakt in
   `Path.GetTempPath()` naar een map `backup-2026-09-11` (datum van vandaag). Toon per bestand de naam en de
   grootte, en op het einde het totaal. Een tweede keer uitvoeren mag niet crashen: vraag om te
   overschrijven, of gebruik `CopyTo(doel, true)`. Deel 2: verplaats bestanden ouder dan een week naar een
   submap `oud` met `MoveTo`. Traint: `DirectoryInfo.GetFiles("*.txt")`, `FileInfo`, `CopyTo`, `MoveTo`,
   `LastWriteTime`, veilig werken in een testmap.

## 5. Voorgestelde volgorde

Waar staat mijn bestand? → Boekencollectie (deel 1 tekst, deel 2 JSON) → Kasticket in csv →
Welke exception? → Stevens stille fouten → Savegame → IMDB Top 100 JSON → Voorspel de bytes →
Bitmap header analyzer → Back-up maker → De Digitale Klokkenluider

## 6. Nevenvondsten

- **Het boek zegt iets wat niet klopt.** `content/21_bestanden/schrijvenenlezen.md:255` zegt dat het
  omwisselen van `ReadInt32` en `ReadBoolean` crasht met een `EndOfStreamException`, en
  `content/21_bestanden/zieverder.md:17` herhaalt dat. Het programma crasht niet. Het toont
  `Bond (16777216). Leeft nog = True` (geverifieerd met dotnet): er blijven na de bool precies vier bytes
  over voor de int. Stille onzin is trouwens een betere les dan een crash.
- `content/21_bestanden/schrijvenenlezen.md:15-25`: de "blote" `StreamWriter` schrijft helemaal niets als
  het programma daarna stopt. Het bestand blijft 0 bytes (geverifieerd met dotnet). De callout noemt enkel
  het risico "als er een fout optreedt".
- `content/21_bestanden/bestandenintro.md:78` zegt `\bin\Debug`. In Visual Studio is het
  `bin\Debug\net8.0`, en eigenlijk gaat het om de werkmap: met `dotnet run` is dat de projectmap
  (geverifieerd met dotnet). Mac-studenten zoeken dus in de verkeerde map.
- `content/21_bestanden/bestandenintro.md:89`: `@"c:\temp\doem.txt"` geeft op een Mac geen fout. Een backslash
  is daar een gewoon teken in een bestandsnaam, dus er komt een bestand met die rare naam in de werkmap
  (niet op een Mac getest). Een zin erbij helpt, en het ondersteunt de uitleg over `Path.Combine`.
- **Coach-data** `oefeningen/_coach/18_bestandsverwerken.md`:
  - `:123`: de nota bij de Klokkenluider moet een alternatief voor Mac noemen.
  - `:95`: "het bestand niet mee laten kopiëren naar de uitvoermap" gaat uit van "Copy to Output Directory".
    Dat staat nergens in het boek of de opgave.
  - Verandert Bitmap naar `ReadInt32`, dan moet de aanpak op `:108` mee.
  - Bij nieuwe titels moet het databestand mee, anders krijgt de oefening geen Coach-knop.
- `content/21_bestanden/kennisclips.md:14` linkt nog naar de oude oefeningen op `apwt.gitbook.io`.
- De oefeningen van H17 hebben dezelfde kwalen: `##`-koppen in de GPT-oefening Hacker Simulator
  (`oefeningen/17_interfaces/A_practica.md:295`), en vier van de zeven oplossingen zijn leeg.
- `oefeningen/EindeTests/Mod3/Opgave_1819.md:161` bevat al een deel "CSV wegschrijven". Handig om naar te
  verwijzen vanuit Kasticket in csv.

---

## Verhuis al gedaan (2026-09-11, bij het doorvoeren van H3)

- **Systeem informatie deel 2 (DriveInfo)** staat nu in `oefeningen/18_bestandsverwerken/A_practica.md`
  als oefening "Schijfinformatie" (anker `h18-schijfinformatie`, geen label), net voor De Digitale
  Klokkenluider. Met een oplossing (`IsReady`, controle op de keuze, `FormatException` opgevangen) en
  coach-data in `oefeningen/_coach/18_bestandsverwerken.md`. De uitleg over `using System.IO` en de
  screenshot `names.png` zijn niet meegekomen: in een project met ImplicitUsings is die lijn overbodig.
  Uit H3 is de oefening weg. Plaats en vorm mag je bij het doorvoeren van H18 nog aanpassen; de rest van
  H18 is niet aangeraakt. De Mac-kant (geen stationsletters maar mappen) is niet getest.
