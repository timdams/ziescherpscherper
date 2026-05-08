# Review: H18 Bestandsverwerking

> Interne didactische review — niet bedoeld voor publicatie.

## Sterktes

- De *waarschuwingstoon* in [bestandenintro.md](bestandenintro.md) is uitstekend voor eerstejaars: backups maken, exception handling wordt nu echt belangrijk, je kan dingen kapot maken op je harde schijf. Dit is precies de mindset-shift die studenten nodig hebben.
- `Path.Combine` wordt vroeg en duidelijk geïntroduceerd, met de Windows/Mac-output naast elkaar. Belangrijk; veel cursussen slaan dit over.
- Het dagboek-voorbeeld in [schrijvenenlezen.md](schrijvenenlezen.md) regel 82-109 is een echt mini-programma dat lezen + schrijven + datum combineert. Sterk didactisch — studenten kunnen dit letterlijk thuis runnen.
- Het binaire-bestand-verhaal met de hex-dump (`04 42 6F 6E 64 ...`) en little-endian uitleg is een onverwacht juweeltje. Dit geeft beginners een glimp van *wat er onder de motorkap gebeurt*.
- De [serialize.md](serialize.md) "Paste JSON as Classes"-tip is een geweldige praktische trick die studenten lang gaan onthouden.
- De "File vs FileInfo"-discussie in [fileinfo.md](fileinfo.md) regel 68-79 is eerlijk: "lig er niet wakker van, kies wat voelt prettig". Dat is *exact* de juiste toon voor dit niveau.

## Zwaktes

- In [bestandenintro.md](bestandenintro.md) regel 105-109 staat: `string fullPath = Path.Combine(directory, filename);` — maar de variabelen heten `folder` en `bestand`. Code compileert niet zoals geschreven.
- In [bestandenintro.md](bestandenintro.md) regel 93: `Console.WriteLine($"Geen schrijfrechten!")` mist de puntkomma. Detail, maar studenten kopiëren letterlijk.
- In [schrijvenenlezen.md](schrijvenenlezen.md) regel 15: `StreamWriter writer = new StreamWriter("doeeeeeem.txt",true):` — dubbele punt i.p.v. puntkomma. Plus: dit voorbeeld gebruikt *géén* `using`, en je toont pas 30 regels later dat dat gevaarlijk is. Volgorde voelt averechts.
- De `using`-uitleg in [schrijvenenlezen.md](schrijvenenlezen.md) komt te laat. Studenten zien eerst een onveilige `StreamWriter writer = new StreamWriter(...)` en daarna pas dat ze het anders moeten doen. Beter: meteen vanaf het allereerste voorbeeld `using` gebruiken en de motivatie meteen geven.
- `File.Create(desktopPath)` in [bestandenintro.md](bestandenintro.md) regel 185 retourneert een `FileStream` die niet wordt gesloten. Dat is een *nest van Disposables*. Op een lockfile-gevoelig systeem geeft dit problemen bij de volgende `File.WriteAllText`. Verdient minstens een callout.
- In [serialize.md](serialize.md) regel 102: ``Met behulp van de ``static`` klasse **``JsonSerializer``** ...`` — de naam is `JsonSerializer`, dat is een normale `static class`-API, prima — maar de notatie "static klasse" is wel verwarrend voor wie net het verschil tussen klasse en static-leden geleerd heeft. Een mini-recap helpt.
- "µ" i.p.v. "z'n" in [serialize.md](serialize.md) regel 107 ("zµn JSON-voorstelling") — typo.
- `BinaryReader`-volgorde-issue (regel 219-221 in [schrijvenenlezen.md](schrijvenenlezen.md)) is goed uitgelegd, maar je voorbeeld omwisselt eigenlijk *bool* en *int*, terwijl er over "lijn 4 en 5" wordt gesproken. Rechtgetrokken nummering helpt.

## Onduidelijkheden

- Niet duidelijk *wanneer* je `File.ReadAllText` of `File.ReadAllLines` gebruikt vs. `StreamReader`. Beide bestaan, beide worden gebruikt, maar er is geen beslissingsregel. Voor grote bestanden vs. kleine bestanden: heel andere keuze.
- In [serialize.md](serialize.md) wordt JSON gepresenteerd zonder dat de leesbaarheid van de output nooit aangepast wordt — geen vermelding van `JsonSerializerOptions { WriteIndented = true }`. Zo'n tip hoort daar.
- Wat met geneste objecten / lijsten? Het dagboek- en student-voorbeeld is plat. Studenten gaan dit toepassen op `List<Student>` en lopen tegen weinig of geen extra voorbeelden aan.
- In [fileinfo.md](fileinfo.md) regel 53-57: het demo-script (`CopyTo` + `MoveTo` + `Delete`) is bewust "dom", maar de `fileInfo.CopyTo` (kleine letter `f`) komt niet overeen met `info` waar het object aan toegekend werd. Compileert niet.

## Gemissen

- **`async`/`await` voor IO** — minstens een vooruitwijzende callout. `File.ReadAllTextAsync` is in moderne console-apps de juiste keuze; studenten gaan dit overal in `Microsoft Docs` zien.
- **`File.ReadAllText` vs. `StreamReader`-beslisregel.** "Klein bestand → `ReadAllText`. Bestand groter dan ~enkele MB of regel-per-regel verwerken → `StreamReader`."
- **`using`-declaration-syntax (C# 8+)**: `using StreamWriter writer = new(...);` zonder accolades. Korter, moderner, en de meeste IDE's *suggereren* dit. Studenten gaan zich afvragen waarom hun template-code er anders uitziet dan de jouwe.
- **`File.Create` retourneert een `FileStream`** — moet ook met `using`. Nu staat er een resource-leak in het voorbeeld.
- **Exception types specifiek**: `FileNotFoundException`, `DirectoryNotFoundException`, `IOException`, `UnauthorizedAccessException`. Eén tabel met "wanneer krijg je welke" zou helpen.
- **`System.Text.Json` vs `Newtonsoft.Json`** — je vermeldt het verschil terecht in een callout, maar zegt niet dat *enums standaard als getal* worden geserialiseerd, of dat *records* netjes ondersteund worden. Kleine details, vaak struikelblok.
- **`BinaryFormatter`** is *deprecated* sinds .NET 5 en wordt verwijderd. Je gebruikt het niet — top — maar overweeg een korte voetnoot voor wie online gidsen tegenkomt die het wél nog gebruiken.
- **Encoding** (UTF-8, BOM, ANSI) wordt nergens vermeld. Als studenten een bestand uit Excel of een legacy-systeem inlezen, lopen ze hier dadelijk tegenaan.
- **CSV-parsing** wordt niet aangeraakt. In een eerstejaarsproject is dit dé use-case. Misschien een vooruitwijzing.

## Concrete suggesties

1. Trek alle code-typo's uit ([bestandenintro.md](bestandenintro.md), [schrijvenenlezen.md](schrijvenenlezen.md), [fileinfo.md](fileinfo.md)). Studenten kopiëren letterlijk.
2. Verplaats de `using`-uitleg in [schrijvenenlezen.md](schrijvenenlezen.md) naar *het allereerste* `StreamWriter`-voorbeeld. Toon daarna pas de "blote" variant ter contrast.
3. Voeg in [schrijvenenlezen.md](schrijvenenlezen.md) een korte sectie "`File.ReadAllText` versus `StreamReader`: wanneer welk?" toe.
4. Voeg in [serialize.md](serialize.md) een callout toe over `JsonSerializerOptions { WriteIndented = true }` plus één voorbeeld van een lijst/genest object. En de typo "zµn" repareren.
5. Voeg achter [serialize.md](serialize.md) een afsluitende callout "Async IO bestaat ook" met één regel `await File.ReadAllTextAsync(...)`. Geen volledige uitleg — alleen vooruitwijzing.
6. [kennisclips.md](kennisclips.md) is leeg ("Helaas, nog geen kennisclips"). Op zich oké, maar overweeg om dan minstens een externe video / Microsoft Learn-link te plaatsen zodat de student niet *helemaal* zonder visueel materiaal zit.

---

## Future — ideeën voor de nieuwe editie

> Aanknopingspunten bij dit hoofdstuk voor de toekomstvisie uit [../../future/hoe.md](../../future/hoe.md). Bouwt voort op wat hierboven al opgemerkt is.

### Code Literacy — drie oefentypes
- **Wat doet dit?** — laat het dagboek-voorbeeld uit [schrijvenenlezen.md](schrijvenenlezen.md) lezen en vraag *zonder runnen* welke regels in het bestand staan na drie opeenvolgende uitvoeringen. Tests of student `append` versus `overwrite` snapt.
- **Klopt dit?** — AI-code zonder `using` rond een `StreamWriter`; student spot de resource-leak. Pakt meteen het issue uit de Zwaktes (`File.Create` retourneert ongesloten `FileStream`).
- **Welke is beter?** — `File.ReadAllText` versus `StreamReader` op een 2 GB-logbestand: student verdedigt de keuze. Vult tegelijk de "beslisregel"-gemis op uit Onduidelijkheden.

### Stagiair Steven
- Steven serializeert een `List<Student>` met `WriteIndented = false` "want compacter" en levert onleesbare JSON op. Student vergelijkt met geformatteerde output.
- Steven verzint een hardcoded `C:\Users\Steven\...`-pad in plaats van `Path.Combine`. Klassiek leerdoel.

### Hall of Shame
- LLM's slingeren `BinaryFormatter`-voorbeelden uit hun trainingdata terwijl die deprecated is sinds .NET 5 — directe link naar de gemissen-bullet.
- AI die `System.IO.File.WriteAllText` zonder `using` aanbeveelt en daarna `File.Open` zonder dispose stapelt. Goede *real-world* anonieme inzending.

### Interview-suggestie
- Een data-engineer of ETL-ontwikkelaar over hoe productie-pipelines met grote files omgaan: streaming versus in-memory, async IO, encoding-narigheid uit Excel-exports. Vult precies de gemissen rond async en CSV.

### Code-archeologie (oermens)
- Tijdlijn van bestanden lezen: `StreamReader` met `try/finally` (C# 1) → `using { }` (C# 1.0/8) → `using` declaration (C# 8) → `await File.ReadAllTextAsync` (C# 7+ async streams). Studenten herkennen op slag verouderde AI-code.
- Idem voor JSON: `XmlSerializer` → `Newtonsoft.Json` → `System.Text.Json`. AI mixt deze nog steeds.

### Lees-volgorde-pijlen
- Het binaire-bestand-fragment met de hex-dump (`04 42 6F 6E 64 ...`) in [schrijvenenlezen.md](schrijvenenlezen.md) schreeuwt om genummerde pijlen: pijl 1 op de length-byte, pijl 2 op de UTF-8-reeks, pijl 3 op de little-endian int. Visueel gigantisch sterker.

### Taalkeuze-callout
- Bij [serialize.md](serialize.md): Python doet dit met `json.dump`, JavaScript met `JSON.stringify` zonder type-info, Rust met `serde`. Belangrijk verschil: in C# bepaalt het type aan de ontvangende kant de deserialisatie — in Python is een dict een dict.

### Mondelinge code-review *(natuurlijk passend)*
- Laat student de keuze tussen `File` (statische helpers) en `FileInfo` (object-georiënteerd) mondeling verdedigen — sluit direct aan bij de "lig er niet wakker van"-passage in [fileinfo.md](fileinfo.md).
