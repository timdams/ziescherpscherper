# Review: Arrays

> Interne didactische review - niet bedoeld voor publicatie. Bekijk per sectie of de feedback nog actueel is.

> **Status editie 5** (verwerkt op 2026-06-11). Markering per punt:
> `[v]` gedaan · `[~]` deels of aangepast aan een stijlkeuze · `[c]` als verborgen TODO-comment in de tekst gezet · `[>]` bewust uitgesteld (oefeningen, structurele _quarto.yml-wijziging of Future). De **Future**-sectie en de mini-oefeningen zijn nog niet aangepakt.

## Sterktes

- De opening van [1_ArraysBasics.md](1_ArraysBasics.md) met ``dag1`` t.e.m. ``dag7`` als gewone variabelen vóór de array-syntax is uitstekend. De student ziet eerst het probleem en dan de oplossing — niet andersom.
- De **drie aanmaakmanieren** met expliciete callout dat manier 1 en 3 fundamenteel verschillen door het ``new``-keyword: heel waardevol. Veel handboeken slaan dit verschil over.
- De voorman-callout over de "out of range"-fout met de gebouw-metafoor (zesde verdieping op een gebouw met drie verdiepingen) blijft hangen bij studenten.
- [arraysgeheugen.md](arraysgeheugen.md) is een sterk hoofdstukdeel: de afbeeldingen met de ploegen ("Beerschot is de ploeg van 't stad") maken het abstracte concept reference vs. value tastbaar. Dit is precies wat eerstejaars nodig hebben.
- De expliciete waarschuwing in [3_arrays_en_methoden.md](3_arrays_en_methoden.md) bij ``PasAan`` (verdiepnummers) — *"zet je helm op"* — pakt de gevolgen van *by reference* concreet vast.

## Zwaktes

- `[v]` In [1_ArraysBasics.md](1_ArraysBasics.md) staat in manier 1 deze code: ``myColors = {"red", "green", ...};`` - dat compileert **niet**. Je hebt ``new string[] {...}`` nodig na de declaratie. Dit is dezelfde valkuil als waar studenten op crashen, en hij staat in het handboek als correct voorbeeld. **(gefixt naar `new string[] {...}` + uitleg wanneer de korte vorm wél mag.)**
- `[v]` Het **collection-initializer-voorbeeld zonder ``new``** komt verschillende keren voor. Studenten gaan dit overtypen en niet snappen waarom het niet werkt. **(de foute manier-1 is rechtgezet; manier 2 (init bij declaratie) mag de korte vorm wél, dat is nu expliciet vermeld.)**
- `[v]` In [algoarrays.md](algoarrays.md) heeft het tweede ``while``-voorbeeld een typo: ``Console.WriteLine($"is {prijzen[productIndex]}".);`` - de punt staat na het sluitend dubbele aanhalingsteken. Dit compileert niet. **(gefixt naar `$" is {prijzen[productIndex]}.");`, meteen ook de ontbrekende spatie toegevoegd.)**
- `[~]` ``BinarySearch`` wordt in [systemarray.md](systemarray.md) gepresenteerd als een eenvoudige zoekoplossing. Het rare gedrag bij niet-gevonden elementen (negatieve return die het complement is) wordt geminimaliseerd tot *"zal negatief zijn"*. Niet-Vlaamse studenten zien hier vooral *"als je in een gesorteerde array werkt is dit gemakkelijk"* - terwijl een ``foreach`` of een handmatige loop in de praktijk vaker het juiste antwoord is. **(``Array.IndexOf`` toegevoegd als de gangbare keuze + caveat dat BinarySearch pas nuttig is bij grote, gesorteerde arrays.)**
- `[v]` Het ``args``-voorbeeld in [1_ArraysBasics.md](1_ArraysBasics.md) gebruikt ``args.Length>=2 && args[2]=="cool"`` - dit is fout: bij lengte 2 is index 2 al *out of range*. Moet ``args.Length >= 3`` zijn. Een fout in een voorbeeld dat net over korte-circuit-evaluatie gaat is extra pijnlijk. **(beide voorbeelden + de tekst aangepast naar `>=3`.)**
- `[c]` De jagged-arrays-sectie in [5_jaggedArrays.md](5_jaggedArrays.md) is heel kort en beëindigt het hoofdstuk in een soort wegtrek-modus. Geen samenvatting, geen "wanneer wel/niet jagged". **(TODO-comment geplaatst voor een afsluitende samenvatting.)**

## Onduidelijkheden

- `[c]` In de ``algoarrays.md`` "manueel zoeken"-sectie wordt ``index`` uiteindelijk verhoogd voorbij de gevonden positie (``index++`` na de ``if``, ook als gevonden). De student print dan ``index`` terwijl ``index - 1`` de juiste positie is. (...) Dit is fragiel en lastig te volgen. Een voorbeeld met een ``foreach``-vergelijking of een nettere ``for``-loop zou helderder zijn. **(TODO-comment geplaatst; de werkende code is gelaten, maar een nettere variant is gewenst.)**
- `[~]` Bij multi-dimensionale arrays in [4_ndimensionalArrays.md](4_ndimensionalArrays.md) staat *"de derde dimensie bestaat uit drie 2-dimensionale 2 bij 2 arrays"*. Voor een eerstejaars die nog moeite heeft met index 0 te starten, zijn 3D-arrays vermoedelijk een overload. Alles in één callout "voor wie ervan houdt" zou helpen. **(bestaande tip raadt al aan dimensies te beperken; bewust niet verder herstructureerd.)**
- `[v]` ``Length`` op multidim arrays geeft in [4_ndimensionalArrays.md](4_ndimensionalArrays.md) het totaal aantal elementen - *niet* de som. De tekst zegt "de som van iedere lengte van iedere dimensie" maar bedoelt het product. Studenten lezen "som" letterlijk. **(gecorrigeerd naar "totaal aantal elementen (...) vermenigvuldigd, dus niet opgeteld".)**

## Gemissen

- `[c]` **``foreach``** wordt nergens in dit hoofdstuk gebruikt of vermeld, terwijl het exact het idiomatische antwoord is op "alle elementen overlopen". De ``for``-loop met ``i < arr.Length`` blijft het enige patroon. Dat is een gemiste kans, en ze zien ``foreach`` in oefeningen wel verschijnen. **(TODO-comment geplaatst.)**
- `[c]` **``List<T>`` als vooruitblik**: één enkele zin in de inleiding zegt dat lists in hoofdstuk 12 komen. Een korte callout *"Wanneer kies je array vs. List?"* zou nu al houvast geven, want studenten gaan voor alles ``int[]`` proberen. **(TODO-comment geplaatst.)**
- `[c]` **``Length`` (array) vs. ``Count`` (List/string)**: het verschil komt nooit aan bod. Studenten verwarren dit eindeloos zodra ``string`` en arrays naast elkaar gebruikt worden. **(TODO-comment geplaatst.)**
- `[v]` **``IndexOutOfRangeException``** wordt vermeld als "Out of Range exception" maar de echte type-naam ontbreekt. Bij debugging zien ze deze naam letterlijk in VS staan. **(echte naam IndexOutOfRangeException toegevoegd.)**
- `[v]` **``Array.IndexOf``** als alternatief voor ``BinarySearch`` op niet-gesorteerde arrays: ontbreekt. Dat is precies wat de student in 90% van de gevallen wil. **(aparte IndexOf-sectie toegevoegd vóór BinarySearch.)**
- `[c]` **``Array.Resize``**: ontbreekt. Strikt genomen kan je een array dus tóch "vergroten" - de waarschuwing dat de lengte vastligt is niet helemaal eerlijk. **(TODO-comment geplaatst.)**
- `[c]` **LINQ-vooruitblik** (``.Sum()``, ``.Average()``): mag al even genoemd worden, want die opmerking *"de gemiddelde berekenen ziet er nog niet beter uit"* lost zichzelf op met LINQ. **(TODO-comment geplaatst.)**
- `[c]` **``foreach``-iteratorvariabele is read-only**: typische valkuil. Mag in een callout. **(opgenomen in de foreach-TODO.)**

## Concrete suggesties

1. `[v]` In [1_ArraysBasics.md](1_ArraysBasics.md), manier 1: vervang ``myColors = {"red", ...};`` door ``myColors = new string[] {"red", ...};`` of laat dit codeblok weg en behoud enkel manier 2 als initialisatie-na-declaratie. Studenten kopiëren je voorbeeld letterlijk. **(gedaan: `new string[] {...}`.)**
2. `[v]` Fix het ``args``-voorbeeld onderaan [1_ArraysBasics.md](1_ArraysBasics.md): ``args.Length >= 3`` (of ``args.Length > 2``) i.p.v. ``>= 2``. Anders vertelt de callout over short-circuit-eval een fout verhaal. **(gedaan, beide voorbeelden + tekst.)**
3. `[c]` Voeg in [1_ArraysBasics.md](1_ArraysBasics.md), na de "Lezen"-sectie met de manuele ``for``-loop, een korte ``foreach``-vergelijking toe in een callout. Liever nu dan dat het later "zomaar opduikt". **(TODO-comment geplaatst.)**
4. `[v]` In [systemarray.md](systemarray.md): voeg ``Array.IndexOf`` als methode toe vóór ``BinarySearch``, en wees explicieter dat ``BinarySearch`` zelden de juiste keuze is voor beginners ("gebruik dit pas als profiling het vraagt"). **(IndexOf-sectie + caveat toegevoegd.)**
5. `[v]` In [4_ndimensionalArrays.md](4_ndimensionalArrays.md): vervang *"de som van iedere lengte"* door *"het totaal aantal elementen (lengte van iedere dimensie vermenigvuldigd)"*. Eén woord, groot effect. **(gedaan.)**
6. `[~]` In [algoarrays.md](algoarrays.md): herschrijf het tweede ``while``-voorbeeld zonder typo en overweeg een eenvoudigere ``for``-variant ernaast - *"hier is dezelfde code, maar met een for"*. Eerstejaars vinden ``while``-zoeken met dubbele conditie zwaar. **(typo gefixt; de for-variant is als TODO gemarkeerd.)**

---

> **Future: nog niet aangepakt.** Onderstaande ideeën zijn bewust uitgesteld (afspraak: future-gedeelte komt later).

## Future — ideeën voor de nieuwe editie

> Aanknopingspunten bij dit hoofdstuk voor de toekomstvisie uit [../../future/hoe.md](../../future/hoe.md). Bouwt voort op wat hierboven al opgemerkt is.

### Code Literacy — drie oefentypes
- **Wat doet dit?** — geef een fragment met `int[][] jagged` met variabele rij-lengtes uit [5_jaggedArrays.md](5_jaggedArrays.md); laat student de output van een geneste loop voorspellen. Past bij het gemis "samenvatting jagged".
- **Klopt dit?** — toon precies het foute `args.Length>=2 && args[2]=="cool"` uit [1_ArraysBasics.md](1_ArraysBasics.md). Klassieke AI-blunder: LLM's tellen vaak verkeerd bij index/lengte.
- **Welke is beter?** — een `for`-loop met `i < arr.Length` vs. een `foreach` voor "tel alle even getallen". Sluit direct aan bij het grote gemis dat `foreach` nergens voorkomt.

### Stagiair Steven
- Steven gebruikt `BinarySearch` op een ongesorteerde array — leerzaam want zo'n bug compileert én lijkt te werken. Sluit aan bij de zwakte over `BinarySearch` in [systemarray.md](systemarray.md).
- Steven kopieert een array met `arr2 = arr1;` en vindt het raar dat wijzigingen "doorlekken" — natuurlijke aanleiding voor de ploegen-metafoor uit [arraysgeheugen.md](arraysgeheugen.md).

### Hall of Shame
- AI die een 2D-array indexeert als `arr[i][j]` (jagged-syntax) op een rectangular array — type-fout die LLM's continu maken omdat ze C# en Java/JS door elkaar halen.
- AI die `Array.Resize` aanroept zonder de `ref`-parameter — compile-error die studenten zien zonder context.

### Interview-suggestie
- Een data-engineer over hoe LLM's lijsten/tabellen verwerken (token-limieten, rij-vs-kolom-encoding). Past expliciet bij het arrays-hoofdstuk-voorbeeld dat al in [../../future/hoe.md](../../future/hoe.md) staat.

### Code-archeologie (oermens)
- Evolutie van "alles overlopen": klassieke `for(int i;...)` → `foreach` (C# 1.2) → LINQ `.Sum()` / `.Average()` (C# 3) → `Range`/`Index` `arr[^1]` (C# 8) → collection expressions `[1,2,3]` (C# 12). Lost de gemiste LINQ-vooruitblik én de collection-initializer-verwarring uit [1_ArraysBasics.md](1_ArraysBasics.md) op.

### Lees-volgorde-pijlen
- De manuele zoek-while in [algoarrays.md](algoarrays.md) (waar `index` voorbij de match wordt verhoogd) is hét fragment dat lezers verloren laat. Pijlen 1) check `!gevonden`, 2) check element, 3) increment, 4) terug — maken de fragiele logica zichtbaar.

### Taalkeuze-callout
- *"Python: alles is een `list` (dynamic, mixed types). JavaScript: `Array` ook dynamic. Rust: vaste lengte (`[T; N]`) of `Vec<T>` voor dynamisch — strikter dan C#."* Hoort in [1_ArraysBasics.md](1_ArraysBasics.md) bij de "lengte ligt vast"-callout.
