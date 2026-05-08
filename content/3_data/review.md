# Review: Werken met data

> Interne didactische review — niet bedoeld voor publicatie. Bekijk per sectie of de feedback nog actueel is.

## Sterktes

- De *appelen-en-peren*-metafoor in [4_converteren_casting.md](4_converteren_casting.md) is sterk en wordt consequent doorgetrokken (ook later in de if-uitleg). Goede haakje.
- De analyse van de vier alternatieve oplossingen voor het temperatuur-gemiddelde (callout-warning rond regel 146) is didactisch goud: studenten zien hier dat *meerdere oplossingen werken* en moeten leren redeneren over volgorde van casting.
- Het subtiele verschil tussen `(double)(a+b)/2` en `(double)((a+b)/2)` (callout-important) is exact het soort detail dat eerstejaars over het hoofd zien — terecht expliciet gemaakt.
- [4d_afronden.md](4d_afronden.md) verklaart bankers rounding rustig en met een concreet voorbeeld waarbij je verwacht antwoord *fout* is. Dat triggert nieuwsgierigheid.
- De debug-sectie in [5_debuggen.md](5_debuggen.md) heeft een uitstekende meta-boodschap: *eerst voorspellen, dan steppen*. Die mindset is zeldzaam expliciet in introcursussen.
- De *verboden prompt* en *zoek-de-fout-prompt* in [ai.md](ai.md) zijn pedagogisch goed onderbouwd.

## Zwaktes

- [4_converteren_casting.md](4_converteren_casting.md) gooit casting, parsing en conversie op één hoop in één lange file. Voor een eerstejaars zonder ervaring is dat veel ineens. De drie concepten verdienen elk hun eigen ademruimte.
- De openingszin met Star Trek/Star Wars-grappen werkt mogelijk niet meer voor de huidige generatie eerstejaars (2026) — check of dit nog aanslaat.
- `Int32.Parse` wordt gebruikt in voorbeelden (regel 211), terwijl je elders `int.Parse` en `double.Parse` aanraadt. Inconsistent — kies één stijl en houd je eraan. `int.Parse` is moderner en consistenter met de rest van het boek.
- [ai.md](ai.md) opent expliciet met *"OPGELET: dit hoofdstuk is in opbouw en nog niet klaar"* en eindigt met een zichtbare `<!-- DUMPMCHATGPT -->` block. Dat ondermijnt de geloofwaardigheid voor studenten die het wel lezen.
- Bij [random.md](random.md) gebruik je nog steeds expliciet `new Random()` met de oude pseudo-random uitleg. Sinds .NET 6 is `Random.Shared` aanbevolen — zelfs als je dat niet wil leren, vermeld het op zijn minst in een voetnoot.
- In [5_debuggen.md](5_debuggen.md) ontbreekt een concreet uitgewerkt mini-bug-voorbeeld waar de student stap-voor-stap meegenomen wordt. De afbeeldingen zijn nuttig maar vervangen geen *walkthrough*.

## Onduidelijkheden

- Op regel 48 van [4_converteren_casting.md](4_converteren_casting.md): "Je kan dus nooit het datatype van een variabele veranderen!" Direct daarna staat een voorbeeld waarin een int wel "omgezet" wordt. De zin is technisch correct (variabele vs. waarde) maar voor een eerstejaars verwarrend. Voeg expliciet toe: *de waarde wordt omgezet, niet de variabele.*
- "Convert.To is iets meer processorkracht" (regel 238) — geen cijfers, geen context. Voor eerstejaars die nog nooit performance hebben gemeten is dat een spookuitspraak. Schrappen of kwantificeren.
- In [4b_inputconverten.md](4b_inputconverten.md) zegt de tekst dat input "geparsed" moet worden, maar in de stappen op regel 24 staat "parsen met de Parse() bibliotheek" — Parse is een methode, geen bibliotheek. Verwarrend met de eerder geintroduceerde `Convert`-bibliotheek.
- Bij [4d_afronden.md](4d_afronden.md), regel 10: *"Bij casting is het duidelijk, deze rondt dus eigenlijk naar beneden af"*. Voor negatieve getallen klopt dit niet (casting truncates richting nul, `Math.Floor` rondt richting negatief oneindig). Eerstejaars zullen dat niet beseffen, maar het is een latente bug.
- In [random.md](random.md) regel 50-51: het verschil tussen *exclusief* en *inclusief* in `Next(0,11)` blijft voor sommigen lastig. Een tabelletje of visualisatie zou helpen.

## Gemissen

- **`TryParse`** wordt enkel als footnote vermeld in [4b_inputconverten.md](4b_inputconverten.md). Voor eerstejaars die foutgevoelige user input verwerken is dit een gemiste kans — zelfs zonder het meteen te oefenen, een korte introductie in dit hoofdstuk hoort hier thuis.
- **String interpolation met format specifiers** (`$"{getal:F2}"` voor 2 cijfers na komma) komt nergens voor, terwijl het thematisch perfect past bij afronden.
- **Implicit numeric conversions tabel** (welke types kunnen impliciet omgezet worden naar welke?) ontbreekt — leerlingen moeten dit nu zelf afleiden uit voorbeelden.
- **`decimal` type** voor financiële berekeningen wordt niet vermeld. Past thematisch bij afronden en bankers rounding.
- Geen oefeningen of *test-jezelf* aan het einde van de individuele subsecties (in tegenstelling tot bv. H5 dat wel een mini-test heeft). De link naar gitbook-oefeningen volstaat niet als didactische sluitsteen.
- **Concrete kennisclip voor AI-prompts** ontbreekt in [kennisclips.md](kennisclips.md) — terwijl je AI prominent introduceert in dit hoofdstuk.

## Concrete suggesties

1. Splits [4_converteren_casting.md](4_converteren_casting.md) in drie kleinere bestanden: één voor casting, één voor parsing, één voor `Convert`. Dit verlaagt de cognitieve load. Of gebruik duidelijke `:::{.callout-tip} Samenvatting:::` blokken aan het einde van elke subsectie.

2. Vervang `Int32.Parse` door `int.Parse` in alle voorbeelden voor consistentie. In [4_converteren_casting.md](4_converteren_casting.md) regel 211:
   ```csharp
   int numVal = int.Parse("-105");
   ```

3. Voeg een mini-paragraaf over `TryParse` toe in [4b_inputconverten.md](4b_inputconverten.md) na de "Foutloze input" sectie, zelfs als je het pas later diepgaand behandelt:
   ```csharp
   if (int.TryParse(input, out int leeftijd)) { /* ok */ }
   ```

4. Werk [ai.md](ai.md) af of haal de "in opbouw"-disclaimer en de DUMP-comment weg vooraleer dit publiek gaat. De inhoud is bruikbaar; het cosmetische omhulsel niet.

5. Voeg in [4d_afronden.md](4d_afronden.md) een tabelletje toe dat de drie afrondingsmethodes naast elkaar zet voor `4.5`, `5.5`, `-2.5` (zo zien studenten meteen het verschil tussen casting/`Math.Round`/`Convert`).

6. Aan het einde van [5_debuggen.md](5_debuggen.md) een uitgewerkt voorbeeld toevoegen: een buggy programma (bv. de gemiddelde-temperatuur uit de casting-sectie hergebruiken!) dat de student met breakpoints moet oplossen. Cross-link naar de sectie zou heel mooi zijn.

---

## Future — ideeën voor de nieuwe editie

> Aanknopingspunten bij dit hoofdstuk voor de toekomstvisie uit [../../future/hoe.md](../../future/hoe.md). Bouwt voort op wat hierboven al opgemerkt is. Dit hoofdstuk is bij uitstek geschikt voor Code Literacy — [ai.md](ai.md) ligt al klaar als kern.

### Code Literacy — drie oefentypes
- **Wat doet dit?** — de vier alternatieve oplossingen voor het temperatuur-gemiddelde uit [4_converteren_casting.md](4_converteren_casting.md) (rond regel 146): geef ze zonder uitleg en laat student bij elk voorspellen welk resultaat verschijnt. De Sterkte ("vier alternatieven") wordt zo een formele oefening i.p.v. terloops voorbeeld.
- **Klopt dit?** — Steven schrijft `int leeftijd = int.Parse(Console.ReadLine());` en verzekert "dit is robuust". Student moet `TryParse` voorstellen + uitleggen wat er gebeurt bij lege input (sluit aan bij Gemis rond `TryParse`).
- **Welke is beter?** — `(int)getal` versus `Convert.ToInt32(getal)` versus `Math.Round(getal)` voor `4.5`, `5.5`, `-2.5`. Direct gelinkt aan suggestie 5 hierboven. Student moet niet alleen kiezen maar de drie semantieken uit elkaar houden.

### Stagiair Steven
- Steven levert AI-output in [ai.md](ai.md) — perfect: het hele hoofdstuk gaat al over AI-prompts, dus Steven krijgt hier zijn natuurlijke thuis. De *verboden prompt* en *zoek-de-fout-prompt* worden Stevens prompts.
- Steven schrijft een loterij met `new Random()` *binnen* een lus (klassieke fout: zelfde seed → zelfde getal). Sluit aan bij Zwakte rond `Random.Shared`.

### Hall of Shame
- Genre voor dit hoofdstuk: AI die `decimal` met `double` mengt in financiële code (komma-fouten in cent-bedragen), AI die `Convert.ToInt32(null)` "veilig" noemt (geeft 0, verbergt bug), AI die bij user input nooit `TryParse` gebruikt. Sluit aan bij de Gemis rond `decimal` en `TryParse`.

### Interview-suggestie
- Een **fintech-developer of accountant-met-Excel-trauma** over waarom `decimal` bestaat. Concrete vraag: "vertel een verhaal waarin een double waar decimal moest staan tot een echte boekhoudfout leidde." Lost het Gemis rond `decimal` op met een verhaal i.p.v. een tabel.

### Code-archeologie (oermens)
- Evolutie random in .NET: `new Random()` (deterministische seed-bug bij snelle calls) → `new Random(Guid.NewGuid().GetHashCode())` (workaround) → `Random.Shared` (.NET 6+, thread-safe singleton) → `RandomNumberGenerator` voor crypto. Sluit aan bij Zwakte rond [random.md](random.md). Eén oermens-pagina toont waarom je AI-output van pre-2021 met `new Random()` in een lus moet wantrouwen.

### Lees-volgorde-pijlen
- Het verschil `(double)(a+b)/2` versus `(double)((a+b)/2)` uit [4_converteren_casting.md](4_converteren_casting.md): genummerde pijlen tonen de evaluatievolgorde — bij de eerste eerst optellen+casten, dan delen; bij de tweede eerst optellen+delen (int!), dan pas casten. Maakt de Sterkte rond dit subtiele verschil visueel ondubbelzinnig.

### Taalkeuze-callout
- In [4_converteren_casting.md](4_converteren_casting.md): 1-regels-callout *"Python: `int(x)`, JavaScript: `parseInt(x)` (en kent bizarre gedrag zoals `parseInt("10px")===10`). C# dwingt je via `int.Parse` of `TryParse` tot expliciete keuze: faal-luid of faal-stil."* Brengt de "appelen-en-peren" Sterkte naar het bredere talenlandschap.

### Mondelinge code-review
- De debug-meta-boodschap uit [5_debuggen.md](5_debuggen.md) ("eerst voorspellen, dan steppen") — uitgesproken Sterkte hierboven — is zelf een mondelinge soft skill. Een student die hardop kan voorspellen wat een breakpoint zal tonen, oefent precies wat in een collegiale debug-sessie wordt verwacht.
