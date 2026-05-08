# Review: Coding guidelines (boetes)

> Interne didactische review — niet bedoeld voor publicatie.

## Sterktes

- **Pedagogisch principe is sterk.** Concrete regels gekoppeld aan concrete strafpunten werken beter dan vage "schrijf nette code"-aanmaningen. Studenten weten waaraan ze zich te houden hebben en docenten hebben een objectief referentiekader bij verbetering.
- **Toon klopt.** Informeel, vlaams, met humor ("Oh wee je gebeente", "Zo'n hekel hebben de lectoren aan top-level statements"). Past bij de rest van de cursus en blijft leesbaar voor eerstejaars.
- **[redundant.md](redundant.md)** doet het didactisch het beste: probleem benoemen + slechte code + goede code. Dat patroon zou voor alle boetes het sjabloon moeten zijn.
- **[naamgeving.md](naamgeving.md)** is concreet en geeft duidelijke voorbeelden van slechte namen (`x`, `boe`, `meuh`). De uitzondering voor looptellers (`i`, `j`) voorkomt loze regelfetisj.
- **[goto.md](goto.md)** is correct streng en eerlijk over de tijdelijkheid van de regel ("vanaf 2e jaar mag wel"). Die fasering is goud.
- **[boete.md](boete.md)** als intropagina kadert het systeem ("max score enkel met meest logische oplossing") helder.

## Zwaktes

- **[linq.md](linq.md) is problematisch.** LINQ-methoden verbieden in jaar 1 valt te verdedigen pedagogisch (eerst loops snappen), maar de boete van -3 punten op moderne idiomatische C# is hard. Bovendien is de scheiding "Linq verboden, Array.IndexOf wel ok" voor studenten arbitrair: beide zijn methoden die "het werk voor je doen". Het onderliggende leerdoel ("je moet zelf met loops kunnen werken") staat er niet expliciet, alleen de regel.
- **[toplevel.md](toplevel.md) wringt het hardst met moderne C#.** Top-level statements zijn de default in `dotnet new console` sinds .NET 6 (2021). De Microsoft-templates, de officiële docs en alle moderne tutorials gebruiken ze. Studenten een -5 boete geven (de zwaarste!) voor wat de officiële starttemplate produceert is didactisch verdedigbaar (je wilt dat ze `Main` snappen) maar pedagogisch verwarrend. De toon ("zo'n hekel hebben de lectoren") suggereert smaak in plaats van leerdoel.
- **[klassenfile.md](klassenfile.md)** is correct maar de strafhoogte (-3) zonder nuance is fors. Eén klassenfile met twee gerelateerde kleine helper-klassen is iets anders dan alles in `Program.cs` proppen.
- **[method.md](method.md)** verwijst naar afbeeldingen voor de fout/oplossing ("![WRONG!]"). Gebruik gewoon code blocks zoals in [redundant.md](redundant.md) — afbeeldingen van code zijn niet kopieerbaar, niet doorzoekbaar, niet toegankelijk en breken bij theme-switches.
- **[bladspiegel.md](bladspiegel.md)** is heel kort. "Format document" is goede tip, maar de regel zou ook expliciet kunnen verwijzen naar de auto-format on save / EditorConfig die je in heel de cursus aanraadt (als die er is).
- **[compileertniet.md](compileertniet.md)** geeft de tip "zet stoute code in commentaar". Goed bedoeld, maar studenten leren zo dat code-in-commentaar acceptabel is bij inleveren — dat staat haaks op clean code. Misschien beter: "verwijder de niet-werkende code en lever in".

## Onduidelijkheden

- **Wanneer geldt welke regel?** Sommige boetes hebben fasering ([klassenfile.md](klassenfile.md): "vanaf sem 2", [naamgeving.md](naamgeving.md): "Private h9 en verder", [goto.md](goto.md): "vanaf jaar 2 wél break/continue"). Andere niet. Een tabel of timeline ontbreekt — studenten moeten nu per file de fase opzoeken.
- **Stapelen boetes?** Als je code zowel niet compileert (-1) als slechte naamgeving heeft (-2) als top-level statements gebruikt (-5), is dat -8? Of is er een cap op het totaal?
- **Geldt dit voor alle vaardigheidsproeven, of enkel sem 1?** De intro in [boete.md](boete.md) zegt "AP Hogeschool" generiek; sommige regels suggereren tijdelijk karakter.
- **[linq.md](linq.md)** zegt "dit jaar" — welk jaar exact? Eerste jaar bachelor, of ook in vervolgvakken? De cursus wordt ook in middelbaar gebruikt (zie CLAUDE.md), dus "jaar" is contextafhankelijk.
- **[naamgeving.md](naamgeving.md)** verwijst naar een externe GitHub-link met spaties in de URL — kwetsbaar voor link rot, en de URL is ook nog eens met spaces gecodeerd.

## Gemissen

Veel klassieke struikelblokken die in eerstejaars-code regelmatig terugkomen, ontbreken:

- **Magic numbers** (`if (leeftijd > 18)` zonder constante).
- **Hardcoded paths** (`C:\Users\Tim\...`) — eerstejaars-klassieker.
- **Catch-all exception handling** (`catch (Exception)` of erger: `catch { }` om examencode "te laten draaien").
- **Te lange methoden / klassen** (cyclomatic complexity, of gewoon: methoden > 30 regels).
- **Hardcoded user input / output** (geen `Console.ReadLine` maar één hardcoded waarde voor "alle" inputs).
- **Missing braces bij one-line if/while** (`if (x) doe();` zonder `{}`) — bron van bugs.
- **Overcommenting / commented-out code** (zie ook tip in [compileertniet.md](compileertniet.md)).
- **Globale state / publieke velden** (geen properties).
- **Hardcoded `true`/`false` waar bool-expressie hoort** (`if (gelukt == true)`).
- **Niet-disposeren** (vanaf het bestanden-hoofdstuk: `using` statement vergeten).
- **Inconsistente returns** (overal `return` strooien terwijl één exit-point cleaner is).

## Concrete suggesties

1. **Voeg een fase-matrix toe in [boete.md](boete.md):**

   | Boete | Sem 1 H1-7 | Sem 1 H8+ | Sem 2 | Jaar 2+ |
   |---|---|---|---|---|
   | goto | -3 | -3 | -3 | warning |
   | break/continue in loop | -3 | -3 | -3 | toegestaan |
   | LINQ op arrays | -3 | -3 | toegestaan | toegestaan |
   | Klassen niet apart bestand | n.v.t. | -3 | -3 | -3 |

   Studenten zien dan in één oogopslag wat geldt wanneer.

2. **Herzie [toplevel.md](toplevel.md).** Of de straf afzwakken naar bv. -2 (consistentie-boete) en uitleggen *waarom* (zodat je `Main`/`args`/`static` ziet en kunt benoemen). Of leg in een aparte "waarom?"-sectie uit dat het pedagogisch is, niet stilistisch.

3. **Herformuleer [linq.md](linq.md)** met expliciete leerdoelmotivatie: "Je leert eerst loops omdat je daarmee elke datatransformatie kunt schrijven; LINQ komt in jaar 2 wanneer je het pas écht waardeert."

4. **Vervang afbeeldingen door code blocks in [method.md](method.md).**

5. **Voeg minstens drie nieuwe boetes toe** uit de gemissen-lijst. Mijn top-3: magic numbers, catch-all exceptions, `using` vergeten bij bestanden (vanaf H21).

6. **Standaardiseer het sjabloon per boete** naar: *(1) regel, (2) strafhoogte + fase, (3) waarom, (4) slechte code, (5) goede code, (6) tip*. Nu varieert de structuur sterk per file.

7. **Pas [compileertniet.md](compileertniet.md) aan**: schrap de "code in commentaar"-tip en vervang door "verwijder onafgewerkte code en zet wat werkt in een aparte methode die je niet aanroept". Leert hen ook compileerbaarheid scheiden van bruikbaarheid.

8. **Vermeld in [boete.md](boete.md) of boetes stapelen** en wat de maximale aftrek per opdracht is.

---

## Future — ideeën voor de nieuwe editie

> Aanknopingspunten bij dit hoofdstuk voor de toekomstvisie uit [../../../future/hoe.md](../../../future/hoe.md). De boetes zijn dé natuurlijke kruising tussen **Code Literacy** (een boete uitleggen *is* een code-fragment beoordelen) en **mondelinge code-review** (de boete verdedigen of betwisten). Daar ligt het zwaartepunt van deze sectie.

### Code Literacy in de boetes vervlochten
- **Wat doet dit?** — toon code met een boete-overtreding (bv. een methode-block uit [redundant.md](redundant.md) of [naamgeving.md](naamgeving.md)) en laat de student de overtreding spotten *vóór* hij het strafbedrag ziet. Boetes-pakken wordt zo een leesoefening, niet een regelenlijstje.
- **Klopt dit?** — AI-code die meerdere boetes tegelijk oploopt (top-level statements + LINQ + slechte naamgeving). Student inventariseert. Lost meteen de "stapelen?"-onduidelijkheid op door het concreet te maken.
- **Welke is beter?** — twee oplossingen voor hetzelfde probleem waarvan eentje LINQ gebruikt, andere een `for`. Student verdedigt vanuit de leerdoel-motivatie, niet vanuit de regel. Pakt direct de [linq.md](linq.md)-zwakte aan.

### Stagiair Steven loopt boetes op
- Steven levert standaard top-level statements (zoals `dotnet new console` ze maakt), gebruikt `var` overal, en strooit met LINQ omdat hij online voorbeelden imiteert. Elke editie krijgt Steven een nieuwe boete-blunder die de student moet identificeren *en* uitleggen. Stevens werk wordt zo het levende oefenmateriaal van het boete-hoofdstuk.
- Bonus: Steven kan zelfs *terecht* protesteren tegen [toplevel.md](toplevel.md) ("maar de Microsoft-template doet het zo!") — dat dwingt de docent het pedagogische *waarom* expliciet te maken, precies zoals de zwakte vraagt.

### Mondelinge code-review — *het* zwaartepunt
- Een boete uitleggen is per definitie een mini-code-review. Bouw een vaste werkvorm: student trekt een fragment, benoemt overtredingen, stelt strafhoogte voor, motiveert. Past direct bij hoe.md sectie 2.5 (apart hoofdstuk over mondeling verdedigen) en bij de bestaande summatieve toetsvorm aan AP.
- Variant met rolwissel: student speelt corrector tegenover een fictieve student die zijn `goto` ([goto.md](goto.md)) of `region`-stapeling verdedigt. Trainings­materiaal voor stand-ups en pair-review.
- Geeft elke boete een tweede leven: niet enkel "ik weet de regel" maar "ik kan ze uitleggen aan iemand die ze betwist".

### Hall of Shame — boetes-editie
- Eigen sub-rubriek: "AI loopt boete op". Echte voorbeelden van AI-output die direct -3 of -5 zou kosten. 5–10 per editie volstaan, en het past perfect bij het bestaande boetes-format (slechte code → goede code).

### Interview-suggestie
- Een tech lead of senior over **code review in de praktijk**: welke "boetes" geeft hij in pull requests? Hoe verschilt dat van wat een opleiding aftrekt? Concrete brug tussen schoolregels en werkveld — pakt de "geldt dit ook in jaar 2+?"-onduidelijkheid op.

### Code-archeologie bij specifieke boetes
- [toplevel.md](toplevel.md): laat zien dat top-level statements pas C# 9 (2020) zijn, en dat oudere AI-trainingdata vol `static void Main`-versies zit. Verklaart waarom AI inconsistent is.
- [linq.md](linq.md): tijdlijn `for`-loop → LINQ method syntax (C# 3) → query syntax → laat student inschatten waar AI vandaan komt.

### Taalkeuze-callout
- Eén regel bij [naamgeving.md](naamgeving.md): C# gebruikt PascalCase voor publieke leden, Python `snake_case`, JavaScript `camelCase`. Boete-naamgevingsregels zijn taal-conventies, niet universele wetten — student leert het verschil tussen *stijl* en *correctheid*.
