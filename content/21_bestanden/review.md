# Review: H18 Bestandsverwerking

> Interne didactische review — niet bedoeld voor publicatie.

> **Status editie 5** (verwerkt op 2026-06-11). Markering per punt:
> `[v]` gedaan · `[~]` deels of aangepast aan een stijlkeuze · `[c]` als verborgen TODO-comment in de tekst gezet · `[>]` bewust uitgesteld. De **Future**-sectie is nog niet aangepakt.

## Sterktes

- De *waarschuwingstoon* in [bestandenintro.md](bestandenintro.md) is uitstekend voor eerstejaars: backups maken, exception handling wordt nu echt belangrijk, je kan dingen kapot maken op je harde schijf. Dit is precies de mindset-shift die studenten nodig hebben.
- `Path.Combine` wordt vroeg en duidelijk geïntroduceerd, met de Windows/Mac-output naast elkaar. Belangrijk; veel cursussen slaan dit over.
- Het dagboek-voorbeeld in [schrijvenenlezen.md](schrijvenenlezen.md) regel 82-109 is een echt mini-programma dat lezen + schrijven + datum combineert. Sterk didactisch — studenten kunnen dit letterlijk thuis runnen.
- Het binaire-bestand-verhaal met de hex-dump (`04 42 6F 6E 64 ...`) en little-endian uitleg is een onverwacht juweeltje. Dit geeft beginners een glimp van *wat er onder de motorkap gebeurt*.
- De [serialize.md](serialize.md) "Paste JSON as Classes"-tip is een geweldige praktische trick die studenten lang gaan onthouden.
- De "File vs FileInfo"-discussie in [fileinfo.md](fileinfo.md) regel 68-79 is eerlijk: "lig er niet wakker van, kies wat voelt prettig". Dat is *exact* de juiste toon voor dit niveau.

## Zwaktes

- `[v]` In [bestandenintro.md](bestandenintro.md) `Path.Combine(directory, filename)` terwijl de variabelen `folder` en `bestand` heten. **(rechtgezet naar `Path.Combine(folder, bestand)`.)**
- `[v]` In [bestandenintro.md](bestandenintro.md) `Console.WriteLine($"Geen schrijfrechten!")` mist de puntkomma. **(puntkomma toegevoegd; overbodige `$` verwijderd.)**
- `[v]` In [schrijvenenlezen.md](schrijvenenlezen.md) `StreamWriter ...,true):` dubbele punt. **(naar puntkomma gefixt.)**
- `[~]` De `using`-uitleg komt te laat. **(vooruitwijzende callout toegevoegd bij het eerste blote voorbeeld; de volledige sectievolgorde omgooien is als TODO genoteerd.)**
- `[v]` `File.Create(desktopPath)` retourneert een ongesloten `FileStream`. **(callout-warning toegevoegd in [bestandenintro.md](bestandenintro.md); het dagboek-voorbeeld in [schrijvenenlezen.md](schrijvenenlezen.md) gebruikt nu `using (FileStream fs = File.Create(...)) { }`.)**
- `[~]` "static klasse JsonSerializer" verwarrend. **(mini-recap over static klassen toegevoegd in [fileinfo.md](fileinfo.md), waar het verschil File/FileInfo wordt besproken.)**
- `[v]` `BinaryReader`-volgorde-issue: voorbeeld wisselt bool/int maar tekst zegt "lijn 4 en 5". **(rechtgetrokken naar "het uitlezen van de int en de bool (lijn 5 en 6)".)**

## Onduidelijkheden

- `[v]` Wanneer `File.ReadAllText`/`ReadAllLines` vs. `StreamReader`? **(sectie "`File.ReadAllText` of `StreamReader`?" met beslisregel toegevoegd.)**
- `[v]` `JsonSerializerOptions { WriteIndented = true }` ontbreekt. **(callout toegevoegd.)**
- `[v]` Geneste objecten / lijsten. **(callout met `List<Student>`-voorbeeld toegevoegd.)**
- `[v]` In [fileinfo.md](fileinfo.md) `fileInfo.CopyTo` komt niet overeen met `info`. **(rechtgezet naar `info.CopyTo`/`info.MoveTo`/`info.Delete`.)**

## Gemissen

- `[v]` **`async`/`await` voor IO** vooruitwijzing. **(callout met `await File.ReadAllTextAsync` toegevoegd.)**
- `[v]` **`ReadAllText` vs. `StreamReader`-beslisregel.** **(toegevoegd, zie Onduidelijkheden.)**
- `[v]` **`using`-declaration-syntax (C# 8+)**. **(callout met de accolade-loze vorm toegevoegd.)**
- `[v]` **`File.Create` resource-leak**. **(opgelost met `using`, zie Zwaktes.)**
- `[c]` **Exception types tabel** (`FileNotFoundException`, ...). **(TODO-comment geplaatst in [bestandenintro.md](bestandenintro.md).)**
- `[c]` **`System.Text.Json`: enums als getal, records ondersteund**. **(TODO-comment in [serialize.md](serialize.md).)**
- `[c]` **`BinaryFormatter` deprecated** voetnoot. **(TODO-comment in [serialize.md](serialize.md).)**
- `[c]` **Encoding** (UTF-8/BOM/ANSI). **(TODO-comment in [serialize.md](serialize.md).)**
- `[c]` **CSV-parsing** vooruitwijzing. **(TODO-comment in [serialize.md](serialize.md).)**

## Concrete suggesties

1. `[v]` Trek alle code-typo's uit de drie bestanden. **(gedaan: `Path.Combine`, puntkomma's, dubbele punt, `fileInfo`->`info`, lege bullet, hoofdletter B in hex-dump.)**
2. `[~]` Verplaats de `using`-uitleg naar het allereerste voorbeeld. **(vooruitwijzende callout toegevoegd; volledige herordening als TODO.)**
3. `[v]` Sectie "`File.ReadAllText` versus `StreamReader`". **(toegevoegd.)**
4. `[v]` Callout `WriteIndented` + lijst/genest voorbeeld. **(toegevoegd.)**
5. `[v]` Afsluitende callout "Async IO bestaat ook". **(toegevoegd.)**
6. `[>]` [kennisclips.md](kennisclips.md) is intussen niet meer leeg (bevat 3 Panopto-clips + oefeningen + Quizlet). **(geen actie nodig; review op dit punt verouderd.)**

---

> **Future: nog niet aangepakt.** Onderstaande ideeën zijn bewust uitgesteld (afspraak: future-gedeelte komt later).

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
