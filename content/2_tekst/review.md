# Review: Tekst gebruiken in code

> Interne didactische review — niet bedoeld voor publicatie. Bekijk per sectie of de feedback nog actueel is.

## Sterktes

- De ASCII → UNICODE-historiek aan de start van [5_chars_strings.md](5_chars_strings.md) is bondig en geeft context zonder af te dwalen. De getallen (1.111.998 mogelijke / 149.813 gedefinieerd) zijn levend en illustratief.
- Het "hetzelfde 1 driemaal anders"-voorbeeld in [5_chars_strings.md:57-65](5_chars_strings.md) (`char '1'` vs `string "1"` vs `int 1`) is uitstekend om het type-onderscheid te benadrukken.
- De "Inception"-uitleg van escape characters in [escapechars.md:65-77](escapechars.md) (`Console.WriteLine` binnen een string) is grappig én didactisch sterk.
- De voorspelvraag rond `"1"+1+1` versus `1+1+"1"` in [6_stringInterpolation.md:25-38](6_stringInterpolation.md) is een klassieker die volkomen op zijn plaats staat. Dit zorgt voor "aha"-momenten.
- De `char letter1 + letter2 = 131`-paragraaf in [6_stringInterpolation.md:167-201](6_stringInterpolation.md) is sterk gerelateerd aan H2 (datatypes) en bouwt logisch verder. De callout over "+- operator is niet gedefinieerd voor char" is correct en helder.
- Het verbatim-`@`-teken introduceren samen met escape characters ([escapechars.md:137](escapechars.md)) is logisch — deze concepten leven naast elkaar.

## Zwaktes

- **Geen woord over raw string literals** (C# 11, `"""..."""`). Sinds 2022 is dit dé manier om multiline strings, JSON, regex, etc. mooi te schrijven. Voor multiline ASCII-art ([7_unicode.md:58-73](7_unicode.md)) is `"""..."""` zelfs eleganter dan `@"..."` (geen probleem met indentatie). Dit hoort er minstens bij vermeld te worden.
- **Geen mention van `string.IsNullOrEmpty` of `string.IsNullOrWhiteSpace`**. Dit is dagelijkse kost zodra je `Console.ReadLine()` gebruikt, en past perfect in dit hoofdstuk.
- [escapechars.md:45](escapechars.md): de regel `\\\\    //twee backslashes.` is verwarrend — in markdown rendering kan dit verschillend ogen dan in C# zelf. In een C# string-literal zijn `\\\\` vier karakters die voor twee `\\`-tekens staan. Klopt, maar het is uitleg over uitleg over uitleg. Eenvoudiger: laat dit weg.
- [escapechars.md:83-90](escapechars.md) "Biep biep" met `\a` is een leuke easter egg, maar werkt **niet meer** in moderne Windows Terminal en op Linux/Mac standaard ook niet. Studenten testen dit en concluderen dat hun code stuk is. Voeg een waarschuwing toe of haal weg.
- [6_stringInterpolation.md](6_stringInterpolation.md) sectie "Strings mooier formatteren" gebruikt `F2` met afronding en heeft een tip over afronden vs afkappen. Goed. Maar je vermeldt **culture / `CultureInfo`** nergens, terwijl `:C` (currency) al locale-afhankelijk is. Studenten met Belgische/Nederlandse settings krijgen `€ 12,34` (met komma) en op een Engels systeem `$12.34` — dat veroorzaakt verwarring bij oefeningen die op verschillende machines getest worden.
- [6_stringInterpolation.md:131](6_stringInterpolation.md): output van `{number:0.00}` met `12.345` — hier staat in de tekst `12,30` versus `12.30`. De uitvoer hangt opnieuw af van locale. Dit wordt nergens genoemd.
- [7_unicode.md:15](7_unicode.md): de stap `Console.OutputEncoding = System.Text.Encoding.UTF8;` wordt voorgesteld zonder uitleg waar deze precies hoort (alleen "bovenaan in je Main"). Een eerstejaars die dit op de verkeerde plek zet, krijgt verwarrende output.

## Onduidelijkheden

- [5_chars_strings.md:6-9](5_chars_strings.md) zegt "UNICODE die een 16-bit (UTF-16) voorstelling gebruikt". Dit is half waar — UTF-16 is **één** encoding van Unicode (niet de enige), en .NET gebruikt UTF-16 intern voor `string`. Maar Unicode zelf gaat tot 21 bits per codepoint (vandaar surrogate pairs voor emoji). Door dit te versimpelen krijg je later een probleem: één emoji telt als 2 chars in `string.Length`. Dit hoort minstens als voetnoot vermeld.
- [escapechars.md:107-109](escapechars.md): "Een zin.         na een tab" — de visuele uitlijning in markdown is onbetrouwbaar. Toon dit liever in een fenced code block met spaties die exact overeenkomen, of gebruik een screenshot.
- [6_stringInterpolation.md:85-92](6_stringInterpolation.md): "Eender welke expressie is toegelaten, dus je kan ook complexe berekeningen of zelfs andere methoden aanroepen". Maar er is geen voorbeeld met method-call. Voeg `$"De lengte is {naam.Length}"` toe.
- [7_unicode.md:75-89](7_unicode.md): de combinatie `$@"..."` werkt, maar in C# 8+ is `@$"..."` ook toegelaten en de moderne aanbeveling is `$"""..."""` (raw interpolated). Dit is verwarrend zonder een woordje uitleg over volgorde.
- [8_environment.md](8_environment.md) komt aan het einde van H3 maar gaat niet over tekst. Voelt als een vreemde toevoeging — waarom zit dit in dit hoofdstuk?

## Gemissen

- **String comparison**: `==` werkt op strings in C# (anders dan Java), maar `string.Equals(a, b, StringComparison.OrdinalIgnoreCase)` is wat eerstejaars vaak nodig hebben. Geen woord over case-insensitive vergelijken.
- **Veelgebruikte `string`-methodes**: `.ToLower()`, `.ToUpper()`, `.Trim()`, `.Replace()`, `.Contains()`, `.Length`, `.Split()`. Dit zijn dagdagelijkse taken. Op zijn minst een korte tabel of verwijzing naar later hoofdstuk.
- **`string.Format`** wordt enkel genoemd in een terloopse callout ("zie appendix") maar niet uitgelegd. Voor legacy-code lezen is dit relevant.
- **Geen oefening** in dit hoofdstuk waarbij studenten zelf een geformatteerde "factuur" of "tabel" moeten maken — net dit hoofdstuk leent zich daar perfect voor.
- **Indexing**: `naam[0]` om de eerste letter te krijgen wordt nergens vermeld, terwijl het volgens [5_chars_strings.md:48](5_chars_strings.md) ("strings zijn arrays") al wordt geteased.
- **`StringBuilder`**: niet voor eerstejaars, maar één callout waarin je vermeldt dat strings *immutable* zijn en daarom in loops met veel concatenatie traag — zou hier passen.

## Concrete suggesties

1. Voeg in [escapechars.md](escapechars.md) of [7_unicode.md](7_unicode.md) een aparte subsectie **Raw string literals** toe:
   ```csharp
   string json = """
       {
           "naam": "Tim",
           "leeftijd": 39
       }
       """;
   ```
   Toon dat dit de moderne opvolger is van `@"..."` voor multiline, zeker handig voor JSON / SQL / regex.
2. Verplaats [8_environment.md](8_environment.md) naar een andere plek (H1 of een appendix). Het past inhoudelijk niet bij "tekst gebruiken in code".
3. Voeg in [6_stringInterpolation.md](6_stringInterpolation.md) een waarschuwing toe over **culture-afhankelijkheid** bij `:C` en `:N` formats. Eventueel met expliciete `CultureInfo.InvariantCulture` voor reproduceerbare oefening-output.
4. Vervang in [escapechars.md](escapechars.md) de `\a`-sectie door een waarschuwing dat dit op moderne terminals meestal niet meer hoorbaar is.
5. Voeg een korte tabel **veelgebruikte string-methodes** toe aan het einde van [5_chars_strings.md](5_chars_strings.md):
   ```csharp
   "Hello".ToUpper()      //"HELLO"
   "  hi ".Trim()         //"hi"
   "abc".Length           //3
   "Hello".Contains("ll") //true
   ```
6. Voeg een mini-oefening toe (3-4 regels uitvoer-voorspelling): combineer escape characters, interpolation en formatting. Bijvoorbeeld: "voorspel de output van `Console.WriteLine($"Naam:\t{naam}\nGetal:\t{3.14159:F2}");`".

---

## Future — ideeën voor de nieuwe editie

> Aanknopingspunten bij dit hoofdstuk voor de toekomstvisie uit [../../future/hoe.md](../../future/hoe.md). Bouwt voort op wat hierboven al opgemerkt is.

### Code Literacy — drie oefentypes
- **Wat doet dit?** — de klassieker `"1"+1+1` versus `1+1+"1"` uit [6_stringInterpolation.md:25-38](6_stringInterpolation.md). Bestaat al als voorspelvraag — promoveer hem expliciet tot Code Literacy-type-1.
- **Klopt dit?** — Steven levert een interpolation-string aan zonder `$`: `Console.WriteLine("Hallo {naam}");` en is verbaasd dat letterlijk `{naam}` op het scherm verschijnt. Sluit aan bij de Sterkte over het type-onderscheid.
- **Welke is beter?** — `@"C:\Users\Tim\Documents"` versus `"C:\\Users\\Tim\\Documents"` versus `"""C:\Users\Tim\Documents"""`. Lost meteen de Gemis-opmerking over raw string literals op én laat student afwegen.

### Stagiair Steven
- Steven gebruikt in een logging-functie naïeve concatenatie in een lus (`log = log + nieuweRegel;`) en de app wordt traag bij 10.000 regels. Mooie aanleiding voor de Gemis-callout over immutable strings / `StringBuilder`.
- Steven schrijft `if (naam == "")` om lege input te detecteren en mist `null`. Sluit aan bij de Gemis over `string.IsNullOrEmpty`.

### Hall of Shame
- Genre: AI die culture-onafhankelijke output veronderstelt — code die op zijn machine `12.30` geeft maar in een Belgische test-pipeline `12,30` produceert (fout in unit tests). Sluit direct aan bij de Zwakte over `CultureInfo`. Ook: AI die `\a` voorstelt voor "een geluidje" en zweert dat het werkt op alle platforms.

### Interview-suggestie
- Een **lokalisatie-engineer / vertaler bij een SaaS-bedrijf** over hoe één hardcoded `:C` of een vergeten interpolation een hele Duitse klant kan irriteren. Concrete vraag: "wat is de domste tekst-bug die je in productie zag?" Sluit thematisch perfect bij de culture-zwakte.

### Code-archeologie (oermens)
- Evolutie strings: C# 1 (`string.Concat` en `+`) → C# 1.1 (`string.Format("{0}", x)`) → C# 6 (`$"{x}"` interpolation) → C# 11 (raw `"""..."""` met indentatie-aware afsnijden). Vier manieren om hetzelfde "Hallo Tim, je bent 39" te schrijven, op één pagina. Lost meteen het Gemis rond raw strings én de Zwakte rond `string.Format`-vermelding op.

### Lees-volgorde-pijlen
- De `char letter1 + letter2 = 131`-paragraaf in [6_stringInterpolation.md:167-201](6_stringInterpolation.md) leent zich tot genummerde pijlen: 1=elke char wordt een int (ASCII), 2=int+int=int, 3=resultaat past niet in char. Toont expliciet waar de typeconversie ongezien gebeurt.

### Taalkeuze-callout
- Bij interpolation: 1-regels-callout *"Python: `f"{naam}"`. JavaScript: `` `${naam}` ``. C#: `$"{naam}"`. Drie talen, drie syntaxen, exact hetzelfde idee — moderne talen convergeren."* Past in [6_stringInterpolation.md](6_stringInterpolation.md). Maakt het concept onmiddellijk transferbaar.
