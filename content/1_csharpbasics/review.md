# Review: De basisconcepten van C#

> Interne didactische review - niet bedoeld voor publicatie. Bekijk per sectie of de feedback nog actueel is.

> **Status editie 5** (verwerkt op 2026-06-11). Markering per punt:
> `[v]` gedaan · `[~]` deels of aangepast aan een stijlkeuze · `[c]` als verborgen TODO-comment in de tekst gezet · `[>]` bewust uitgesteld (oefeningen, structurele _quarto.yml-wijziging of Future). De **Future**-sectie en de mini-oefeningen zijn nog niet aangepakt.

## Sterktes

- De analogie taal = grammatica + woordenschat in [0_csharpessentials.md](0_csharpessentials.md) wordt consistent doorgetrokken (statements, keywords, syntax). Eerstejaars kunnen dit framen.
- De keywords-tabel ([0_csharpessentials.md:30-51](0_csharpessentials.md)) met onderscheid vet (deel 1) / cursief (deel 2) / gewoon is een sterk didactisch hulpmiddel: studenten zien wat ze moeten leren versus wat later komt.
- De "**NEVER USE GOTO**"-rant met de gotopolice-figuur is memorabel én didactisch verantwoord. Werkt.
- [1_datatypes.md](1_datatypes.md) bouwt netjes op: eerst categorieën (gehele / komma / tekst / bool), dan tabellen met bereik. De tabel met geheugen + bereik is helder.
- De "salaris-grap" in [2_expressies.md:215-225](2_expressies.md) (`(1/2) * 10000.0` = 0) is een uitstekend voorbeeld om de int-deling-val visceraal te maken. Dit type voorbeeld blijft plakken.
- De callout over `++getal` versus `getal++` ([2_expressies.md:107-118](2_expressies.md)) is correct en specifiek genoeg.
- [solsprojects.md](solsprojects.md) is vrij grondig — solution vs project is voor velen onduidelijk en de visualisatie via Solution Explorer + verkenner helpt.

## Zwaktes

- `[>]` **Volgorde in `_quarto.yml`**: [solsprojects.md](solsprojects.md) komt na [3_constanten.md](3_constanten.md), maar bevat informatie die eigenlijk in H1 thuishoort (de hele uitleg over solutions/projecten/.sln). Dit zit pedagogisch op de verkeerde plaats - een student heeft die context al nodig vóór hij met variabelen werkt. **(structurele verplaatsing vereist _quarto.yml-aanpassing; als TODO-flag in solsprojects.md gezet, beslissing aan Tim.)**
- `[c]` [1_datatypes.md](1_datatypes.md) zegt nergens iets over **`var`** als type-inference. Sinds C# 3 is `var` overal in de wereld in gebruik en studenten zullen het op StackOverflow en in AI-output continu zien. Niet uitleggen = onbegrip kweken. **(TODO-comments geplaatst in 1_datatypes.md en 1b_variabelen.md.)**
- `[v]` [1b_variabelen.md](1b_variabelen.md) sectie "Beginwaarden van variabelen" zegt "C# zal altijd vers gedeclareerde variabelen een standaard beginwaarde geven" - dat klopt **niet** voor lokale variabelen in een methode. Lokale variabelen moeten geïnitialiseerd worden voor gebruik, anders krijg je een compile error ("use of unassigned local variable"). De claim klopt enkel voor velden van een class. Dit moet recht. **(rechtgezet: lokale variabelen krijgen geen default + compile-error-voorbeeld; defaults nu correct gescoped naar velden.)**
- `[v]` De Boolean-uitleg ([1_datatypes.md:131-141](1_datatypes.md)) eindigt met "Hoeveel geheugen zal een variabele van dit type innemen denk je? Inderdaad **1 bit**." Dat klopt **niet**: een `bool` neemt in C# één **byte** in (zelfs vaak 4 bytes door alignment). Dit is een feitelijke fout. **(gecorrigeerd naar 1 byte, met uitleg over byte-adressering.)**
- `[v]` [1_datatypes.md:78](1_datatypes.md) over `short`: "Eén bit daarvan wordt gebruikt voor het teken (0 of 1, + of -). De overige 15 bits worden gebruikt voor de waarde". Dit klopt niet helemaal - C# gebruikt **two's complement**, geen sign-and-magnitude. Voor een eerstejaars is dat detail OK weg te laten, maar de huidige formulering is technisch onjuist. **(geherformuleerd: bereik via 2^16 waarden, two's complement enkel kort genoemd zonder de foute sign-bit-uitleg.)**
- `[v]` [2_expressies.md](2_expressies.md) gebruikt overal nog string-concatenatie met `+` (`"Je weegt op Mars " + gewichtOpMars + " kg"`). String interpolation komt pas in H3, terwijl het al sinds C# 6 (2015) de standaard is. Het zou beter zijn deze code-voorbeelden te updaten - of expliciet te vermelden "we tonen het zo, maar in H3 leer je het mooier". **(vooruitwijzing-callout naar string interpolation toegevoegd; voorbeelden voorlopig met `+` gelaten.)**
- `[c]` [3_constanten.md](3_constanten.md) is **veel te kort** (slechts 22 regels). Constanten zijn een belangrijk concept en verdienen meer dan dit. Geen woord over `readonly` (heel ander semantiek), geen oefening, geen praktisch use-case voorbij G_AARDE. **(uitbreiding als TODO-comment gemarkeerd: readonly, const-scope, naming-keuze.)**

## Onduidelijkheden

- `[v]` [0_csharpessentials.md:96](0_csharpessentials.md): "``gOTO`` en ``stRINg`` mogen dus wel". Klopt, maar bij `string` zit subtiliteit: `string` (lowercase) is een **alias** voor `System.String`, geen pure keyword in alle contexten. Voor eerstejaars: toelichten dat dit in de praktijk verwarrend is en je het beter niet doet. **(zin toegevoegd: doe dit nooit, het is nodeloos verwarrend. De alias-diepgang bewust niet uitgespit voor eerstejaars.)**
- `[v]` [1b_variabelen.md:111](1b_variabelen.md): de uitleg over impliciete conversie van een `int`-literal naar `sbyte` ("ze worden impliciet geconverteerd") is feitelijk niet helemaal juist. C# heeft een speciale regel voor *constant expressions*: het werkt alleen omdat 127 een compile-time constant is die past. Probeer maar `int x = 127; sbyte y = x;` - dat compileert niet. Dit detail wordt nu onder de mat geveegd. **(verduidelijkt: werkt enkel voor literals die de compiler op voorhand kan controleren; tegenvoorbeeld met int-variabele toegevoegd.)**
- `[v]` [2_expressies.md:166](2_expressies.md): "Er zal `4` op het scherm verschijnen!" - voor de duidelijkheid expliciet vermelden: 4, niet 4.5 en ook niet afgerond, maar **getrunceerd** (afgekapt). Het verschil tussen afronden en afkappen is voor eerstejaars niet vanzelfsprekend. **(toegevoegd: truncatie vs afronden expliciet uitgelegd.)**
- `[v]` [solsprojects.md](solsprojects.md) "obj-folder ga ik negeren" - kort vermelden waarvoor die dient, anders blijven studenten ernaar kijken zonder context. **(korte uitleg toegevoegd: tijdelijke bouwbestanden.)**
- `[v]` [2_expressies.md](2_expressies.md) "verkorte notaties": de tip "bij twijfel, gebruik de lange notatie" is goedbedoeld maar in de praktijk is `i++` zo wijdverbreid (vooral in for-loops in H5+) dat studenten het wél moeten kunnen lezen. Maak dat expliciet. **(toegevoegd: je moet `getal++` sowieso vlot kunnen lezen.)**

## Gemissen

- `[c]` Geen sectie over **`var`** (type inference). Sinds C# 3 standaard. Hoort hier. **(TODO-comment geplaatst.)**
- `[>]` Geen sectie over **nullable types** of `?`. Studenten zien `string?` in moderne VS-templates, hier krijgen ze geen kapstok. **(bewust uitgesteld: nullables komen in deze editie nog niet, zie CLAUDE.md. TODO-comment geplaatst.)**
- `[c]` Geen sectie over **naming conventions** voorbij camelCase: PascalCase voor types/methodes, `_camelCase` voor private fields. Hoort hier. **(TODO-comment geplaatst in 0_csharpessentials.md.)**
- `[c]` Geen vermelding van **`Math.Round`**, `Math.Floor`, `Math.Ceiling` - relevant na de int/double-deling-val. **(TODO-comment geplaatst in 2_expressies.md.)**
- `[>]` Geen oefening "voorspel de output" tussendoor. Dit hoofdstuk leent zich daar net heel goed voor (datatypes en expressies). **(uitgesteld: oefeningen komen later aan bod.)**
- `[c]` Geen woord over **integer overflow** (`int.MaxValue + 1` = `int.MinValue`). Dat is precies een datatypes-onderwerp. **(TODO-comment geplaatst in 1_datatypes.md.)**
- `[c]` [3_constanten.md](3_constanten.md): geen tegenstelling met `readonly`, geen mention dat `const` enkel werkt voor compile-time waarden (geen `const DateTime` bv.). **(TODO-comment geplaatst.)**

## Concrete suggesties

1. `[>]` Verplaats [solsprojects.md](solsprojects.md) naar H1 (na [1_werkenmetvs.md](../0_intro/1_werkenmetvs.md)) of splits het: korte intro in H1, gevorderde delen (meerdere projecten, .csproj inhoud) in een appendix. **(uitgesteld: vereist _quarto.yml-aanpassing; TODO-flag in solsprojects.md.)**
2. `[v]` Corrigeer in [1_datatypes.md](1_datatypes.md): "Een `bool` neemt in C# 1 byte in (niet 1 bit). Logisch want een computer adresseert geen losse bits." **(gedaan.)**
3. `[c]` Voeg in [1b_variabelen.md](1b_variabelen.md) een aparte subsectie **`var`** toe:
   ```java
   var leeftijd = 25;          //compiler leidt int af
   var naam = "Tim";           //compiler leidt string af
   var lijst = new List<int>(); //handig bij lange types
   ```
   Met tip: "gebruik `var` enkel als het type rechts duidelijk leesbaar is." **(als TODO-comment gemarkeerd; nieuwe sectie nog niet geschreven.)**
4. `[v]` Corrigeer de claim over default-waarden in [1b_variabelen.md](1b_variabelen.md): vermeld expliciet dat **lokale variabelen géén default krijgen** en dus altijd geïnitialiseerd moeten zijn voor gebruik. **(gedaan, met compile-error-voorbeeld.)**
5. `[c]` Breid [3_constanten.md](3_constanten.md) uit met `readonly` en het concept van een naming guideline-keuze (PascalCase wordt door Microsoft `Guidelines` zelf aangeraden voor `const`, niet ALLCAPS - zie [docs.microsoft.com](https://learn.microsoft.com/en-us/dotnet/standard/design-guidelines/names-of-classes-structs-and-interfaces)). Beslis welke je propageert. **(als TODO-comment gemarkeerd; naming-keuze is aan Tim.)**
6. `[>]` Voeg na [2_expressies.md](2_expressies.md) een 3-punts mini-oefening toe: "voorspel het resultaat van: `5/2`, `5.0/2`, `5/2.0`, `(double)5/2`, `5%3`". Dit verankert de int-deling-val. **(uitgesteld: oefeningen later.)**

---

> **Future: nog niet aangepakt.** Onderstaande ideeën zijn bewust uitgesteld (afspraak: future-gedeelte komt later).

## Future — ideeën voor de nieuwe editie

> Aanknopingspunten bij dit hoofdstuk voor de toekomstvisie uit [../../future/hoe.md](../../future/hoe.md). Bouwt voort op wat hierboven al opgemerkt is.

### Code Literacy — drie oefentypes
- **Wat doet dit?** — de salaris-grap `(1/2) * 10000.0` uit [2_expressies.md:215-225](2_expressies.md). Laat student voorspellen waarom `0` en niet `5000`. Klassieke "voorspel zonder compiler".
- **Klopt dit?** — Steven schrijft `bool isActief = 1;` en beweert "het werkt in C/Python". Student moet uitleggen waarom C# dit afwijst (sluit aan bij Zwakte over de "1 bit"-fout — diepere bool-conceptie).
- **Welke is beter?** — `int leeftijd = 25;` versus `var leeftijd = 25;`. Sluit direct aan op de Gemissen-opmerking over `var`. Ook mooi: `const double G = 9.81;` versus `readonly double G = 9.81;` (sluit aan op de te-korte [3_constanten.md](3_constanten.md)).

### Stagiair Steven
- Steven levert in [1b_variabelen.md](1b_variabelen.md) een methode aan met `int x; Console.WriteLine(x);` en zegt "C# geeft toch standaardwaarden?". Student moet de feitelijke fout uit Zwaktes ("lokale variabelen krijgen géén default") uitleggen.
- Steven gebruikt `Int32.Parse` en `int.Parse` door elkaar in dezelfde file — student leert stijlconsistentie als kwaliteitscriterium.

### Hall of Shame
- Genre: AI die hallucineert dat `bool` 1 bit inneemt (de fout staat letterlijk in het huidige boek — waardevol om als "ook menselijke handboeken halen dit door elkaar" te framen). Ook: AI die `const DateTime VANDAAG = DateTime.Now;` voorstelt (compileert niet — `const` enkel voor compile-time waarden).

### Interview-suggestie
- Een **embedded/IoT-developer** over wanneer datatypegrootte écht telt: "wij kiezen `short` of `byte` bewust omdat we 256 sensoren met beperkt geheugen hebben". Antidote tegen de "gewoon altijd `int` gebruiken"-houding die in Hogeschool-context dominant is, en koppelt direct aan de tabel met geheugen + bereik in [1_datatypes.md](1_datatypes.md).

### Code-archeologie (oermens)
- Evolutie type-declaratie: C# 1 (`int leeftijd = 25;`) → C# 3 (`var leeftijd = 25;`, type inference) → C# 9 (target-typed `new`: `List<int> lijst = new();`) → C# 10+ (records, file-scoped namespaces). Lost meteen het Gemis rond `var` op én leert studenten herkennen wanneer AI verouderd is.

### Lees-volgorde-pijlen
- De expressie `(double)((a+b)/2)` uit [2_expressies.md](2_expressies.md) (cast-volgorde) leent zich tot pijlen: 1=binnenste haakjes (int-deling!), 2=cast naar double. Toont visueel waarom de cast te laat komt om de int-deling-val te vermijden.

### Taalkeuze-callout
- Bij datatypes in [1_datatypes.md](1_datatypes.md): 1-regel-callout *"Python kent geen `int` vs `long` — alle integers groeien automatisch. JavaScript heeft alleen `number` (een double). C# dwingt je tot een keuze; dat is geen last, dat is precisie."* Sluit aan bij de Sterkte over de geheugen+bereik-tabel.

### Mondelinge code-review
- De salaris-grap leent zich perfect tot een mondelinge mini-defense: "leg in 30 seconden uit aan een klant waarom hij geen €5000 maar €0 krijgt". Soft-skill-oefening die direct aan [2_expressies.md](2_expressies.md) hangt.
