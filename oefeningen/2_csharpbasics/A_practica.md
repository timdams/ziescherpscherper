<!--# Hoofdstuk 2-->

::: {.vooraf}
- [Let op]{.let-op} Volg vanaf nu de *coding guidelines* uit het handboek ([de boetes](https://www.ziescherp.be/content/B_appendix/boete.html)). De coach kijkt je code er ook op na.
- In hoofdstuk 1 maakte je per oefening een nieuwe solution. Vanaf nu maak je per hoofdstuk één solution, met daarin per oefening een apart project. Hoe je een project toevoegt, lees je in [Meerdere projecten](https://www.ziescherp.be/content/1_csharpbasics/solsprojects.html#meerdere-projecten) (of bekijk [deze video](https://ap.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=a7eb4973-e87e-49a4-862e-ac47009783d6)). Geef elk project een naam met enkel letters en cijfers, bv. `EuroNaarDollar` en niet `Euro-Dollar`.
- [Let op]{.let-op} Met meerdere projecten in één solution voert Visual Studio enkel het *startup project* uit: het project dat vet staat in de Solution Explorer. Zie je je wijzigingen niet als je op start duwt, kijk dan eerst of het juiste project actief is (rechterklik op het project en kies *Set as Startup Project*).
- In dit hoofdstuk vraag je nog geen getallen aan de gebruiker: je zet ze hard in variabelen. Hoe je invoer omzet naar een getal, leer je in hoofdstuk 4.
- De voorbeelduitvoer toont kommagetallen met een komma, zoals op een pc met Belgische instellingen. Staat je pc in het Engels, dan zie je een punt.
:::

<!--# Hoofdstuk 2-->



# Euro naar dollar (*Essential*) {#h02-euro-naar-dollar}

Ontwerp een toepassing waarmee je een bedrag in euro (dat je hardcodeert in een variabele, inclusief kommagetallen) omrekent naar dollar. Gebruik de wisselkoers 1 euro = 1.03 dollar. Je hoeft niet af te ronden. Het resultaat op het scherm wordt als volgt weergegeven: ``[x] EUR is gelijk aan [y] USD.``

Dit is de startcode van je applicatie:

```java
double bedragInEuro = 78.65;
```

Uitvoer:

```text
78,65 EUR is gelijk aan 81,0095 USD.
```

:::{.callout-tip}
Begrijp je dat al deze oefeningen eigenlijk altijd dezelfde 3 fases hebben?

1. Data invoer: variabelen aanmaken en waarden geven.
2. Data verwerken: berekeningen doen met de ingevoerde data.
3. Data uitvoer: resultaten op het scherm tonen

Als je je applicaties zo opbouwt dan zal je snel ontdekken dat al deze oefeningen eigenlijk in essentie hetzelfde zijn.
:::

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
Het is een goede gewoonte om een vast getal zoals de koers in een eigen variabele te bewaren. Je zou deze oefening ook sneller kunnen doen door lijn 2 weg te laten en 3 te vervangen door: ``double bedragInDollar = bedragInEuro * 1.03;``, maar dat raden we af. Zo'n los getal zonder naam midden in een berekening noemen programmeurs een *magic number*.
 
Stel dat je later in deze code ook op een andere plek nog de koers nodig hebt, dan moet je ook op die plek 1.03 schrijven...en wat als dan later de koers verandert? Dan moet je overal dat getal veranderen. Via een aparte variabele moeten we het getal 1.03 maar eenmalig typen.
::::


::::{.callout-caution collapse="true" title="Oplossing"}


```java
double bedragInEuro = 78.65;
double koers = 1.03;
double bedragInDollar = bedragInEuro * koers;
Console.WriteLine($"{bedragInEuro} EUR is gelijk aan {bedragInDollar} USD.");
```



:::: 



# Welk datatype? (*Essential*) {#h02-welk-datatype}

Kies voor elk van onderstaande gegevens een datatype, en schrijf de declaratie met een passende beginwaarde. Let op de schrijfwijze van je literal (zie [Literals](https://www.ziescherp.be/content/1_csharpbasics/1b_variabelen.html#literals)).

1. Het aantal studenten in een klas.
2. De wereldbevolking (ongeveer 8 miljard).
3. De prijs van een product in een webshop.
4. De temperatuur buiten.
5. Of iemand gehuwd is.
6. De eerste letter van je naam.
7. Het aantal assen van een trein.
8. Je postcode.

Zet de acht variabelen in één programma en toon ze met een ``WriteLine``, zodat je zeker bent dat alles compileert.

::::{.callout-caution collapse="true" title="Oplossing"}

```java
int aantalStudenten = 24;
long wereldbevolking = 8000000000;
decimal prijs = 19.99M;
double temperatuur = 12.5;
bool isGehuwd = false;
char eersteLetter = 'T';
int aantalAssen = 32;
string postcode = "2000";
```

* De wereldbevolking past niet in een ``int``: die gaat maar tot iets meer dan 2 miljard. Een ``long`` wel.
* Voor geld is ``decimal`` de beste keuze, want die rekent het preciest. Een ``double`` mag hier ook.
* Voor de temperatuur volstaat een ``double``. Een ``float`` kan ook, met ``12.5f``.
* Een ``byte`` voor de assen kan ook, zolang de trein er niet meer dan 255 heeft. Lees het verhaal van de Zwitserse trein aan het begin van [Datatypes](https://www.ziescherp.be/content/1_csharpbasics/1_datatypes.html) nog eens na.
* Een postcode als ``int`` compileert, maar je rekent er nooit mee. Veel programmeurs kiezen daarom ``string``. Voor een Nederlandse postcode (``1012 AB``) heb je sowieso een ``string`` nodig.

Andere keuzes zijn soms ook goed, als je ze kan uitleggen.
::::

**Deel 2.** Stagiair Steven schreef onderstaande vier lijnen. Geen enkele lijn compileert. Visual Studio geeft telkens de melding eronder. Leg per lijn uit wat er mis is, en herstel ze zonder het datatype te veranderen.

```java
float temperatuur = 12.5;
decimal prijs = 19.99;
int wereldbevolking = 8000000000;
char letter = "A";
```

1. ``CS0664`` *Literal of type double cannot be implicitly converted to type 'float'; use an 'F' suffix to create a literal of this type*
2. ``CS0664`` *Literal of type double cannot be implicitly converted to type 'decimal'; use an 'M' suffix to create a literal of this type*
3. ``CS0266`` *Cannot implicitly convert type 'long' to 'int'. An explicit conversion exists (are you missing a cast?)*
4. ``CS0029`` *Cannot implicitly convert type 'string' to 'char'*

::::{.callout-caution collapse="true" title="Oplossing"}

1. ``12.5`` is een ``double``-literal. Die past niet zomaar in een ``float``. Met de suffix wordt het ``12.5f``.
2. Hetzelfde voor ``decimal``: ``19.99M``.
3. ``8000000000`` is te groot voor een ``int``, dus ziet C# de literal als een ``long``. Die past niet in een ``int``. Hier moet het type toch veranderen (naar ``long``): het getal past gewoon niet. De *cast* uit de melding leer je in hoofdstuk 4, maar die zou het getal hier stukmaken.
4. ``"A"`` staat tussen aanhalingstekens en is dus een ``string``. Een ``char`` schrijf je tussen apostrofs: ``'A'``.

```java
float temperatuur = 12.5f;
decimal prijs = 19.99M;
long wereldbevolking = 8000000000;
char letter = 'A';
```
::::



# Kill/Death-ratio (*Essential*) {#h02-kill-death-ratio}

:::{.callout-tip}
De k/d-ratio is de verhouding tussen het aantal kills dat je in een spel hebt gehaald en het aantal keer dat je zelf gestorven bent (deaths). Is deze verhouding groter dan 1, dan heb je vaker iemand gedood dan dat je zelf gestorven bent. Onder de 1 is dit net omgekeerd...en ben je dus niet zo goed in het spel dat je aan het spelen bent.
:::


Maak twee variabelen ``double kills`` en ``double deaths`` aan. Wijs er jouw typische gamescores aan toe die je haalt in een spel naar keuze. Bereken en toon vervolgens je kill/death-ratio. 

Uitvoer (indien kills=44 is en deaths=9)

```text
Je k/d-ratio is 4,888888888888889
```

:::{.callout-warning}
Test ook eens wat er gebeurt als je beide variabelen als ``int`` declareert. Lees daarna de waarschuwing van de voorman bij [Expressies](https://www.ziescherp.be/content/1_csharpbasics/2_expressies.html#expressiedatatypes) nog eens na.

Merk op dat het vreemd is dat je een niet-geheel aantal kills of deaths kan halen als je met ``double`` werkt. Je kan niet 2,5 keer dood zijn gegaan in een spel. Dat los je op in deel 2.
:::

::::{.callout-caution collapse="true" title="Oplossing"}

```java
double kills = 44;
double deaths = 9;
double ratio = kills / deaths;

Console.WriteLine($"Je k/d-ratio is {ratio}");
```

::::

**Deel 2.** Maak van ``kills`` en ``deaths`` nu twee ``int``-variabelen. Een ``double ratio = kills / deaths;`` geeft dan ``4``. Zoek een manier om toch ``4,888888888888889`` te krijgen, zonder het type van ``kills`` of ``deaths`` te veranderen. Je kan het met de leerstof van dit hoofdstuk: kijk naar het salarisvoorbeeld bij [Datatypes mengen in een expressie](https://www.ziescherp.be/content/1_csharpbasics/2_expressies.html#datatypes-mengen-in-een-expressie).

Werkt het? Voorspel dan, zonder uit te voeren, wat deze twee lijnen tonen. Test daarna.

```java
Console.WriteLine(1.0 * (kills / deaths));
Console.WriteLine(kills / deaths * 1.0);
```

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
Het maakt uit *waar* het kommagetal in je berekening staat. C# rekent van links naar rechts (met haakjes eerst), en een deling van twee ``int``s is een ``int``, ook als er later nog een ``double`` bijkomt.
::::

::::{.callout-caution collapse="true" title="Oplossing"}

```java
int kills = 44;
int deaths = 9;
double ratio = 1.0 * kills / deaths;

Console.WriteLine($"Je k/d-ratio is {ratio}");
```

``1.0 * kills`` wordt eerst uitgerekend en geeft ``44.0``, een ``double``. Die ``double`` delen door ``9`` geeft een kommagetal.

De twee andere lijnen tonen allebei ``4``:

* ``1.0 * (kills / deaths)``: de haakjes gaan voor, dus eerst ``44 / 9``. Dat is een deling van twee ``int``s en geeft ``4``. Pas daarna wordt ``4`` vermenigvuldigd met ``1.0``.
* ``kills / deaths * 1.0``: delen en vermenigvuldigen hebben dezelfde voorrang, dus rekent C# van links naar rechts. Eerst ``44 / 9``, dat geeft ``4``, en dan ``4 * 1.0``.
::::



# Gemiddelde (*Essential*) {#h02-gemiddelde}

Maak 3 variabelen aan van het type ``int`` genaamd ``september``, ``oktober`` en ``november``. Zet in elke variabele hoeveel uren je die maand geslapen hebt (schat maar). Bereken nu het gemiddelde van de 3 maanden en toon het resultaat op het scherm.

:::{.callout-warning}
Opgelet: het resultaat moet als een kommagetal worden getoond!
:::

Uitvoer (met 224, 177 en 210 uren):

```text
Je sliep gemiddeld: 203,66666666666666 uren per maand.
```

::::{.callout-caution collapse="true" title="Oplossing"}

```java
int september = 224;
int oktober = 177;
int november = 210;
double gemiddelde = (september + oktober + november) / 3.0;
Console.WriteLine($"Je sliep gemiddeld: {gemiddelde} uren per maand.");
```

:::: 

**Deel 2.** Maak nu bewust twee fouten, telkens één, en voer het programma uit. Welke uitkomst krijg je, en waarom?

1. Haal de haakjes rond de som weg.
2. Zet de haakjes terug en deel door ``3`` in plaats van door ``3.0``.

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
Om een gemiddelde te berekenen moeten we **eerst** de som nemen van de aparte waarden. Omdat de optelling geen voorrang krijgt op de deling, is het belangrijk dat we de som van de 3 maanden met behulp van haakjes voorrang geven. Vervolgens delen we door 3.0. **We delen niet door 3 maar door 3.0**, anders verliezen we cijfers na de komma want dan hebben we een deling van 2 integers i.p.v. een integer en een double.
::::

::::{.callout-caution collapse="true" title="Oplossing"}

1. Zonder haakjes komt er ``471``. De deling gaat voor, dus enkel ``november`` wordt gedeeld: ``224 + 177 + 70``.
2. Met ``/ 3`` komt er ``203``. De som is een ``int`` en ``3`` ook, dus is de deling een gehele deling en valt alles na de komma weg. Dat ``gemiddelde`` een ``double`` is, verandert daar niets aan: de komma was al weg voor het resultaat in de variabele belandt.
::::



# Simple maths (*Essential*) {#h02-simple-maths}

Gegeven volgende vier berekeningen:

```text
-1 + 4 * 6
( 35 + 5 ) % 7
14 + -4 * 6 / 11
2 + 15 / 6 * 1 - 7 % 2
```

:::{.callout-warning}
De % hier is de modulo-operator.
:::

**Deel 1.** Reken eerst op papier uit wat C# voor elk van de vier zal tonen. Denk eraan: alle getallen zijn gehele getallen, dus elke deling is een gehele deling.

Typ daarna de vier berekeningen letterlijk over, elk in een eigen ``int``-variabele, en toon ze als volgt (met je eigen uitkomsten):

```text
-1 + 4 * 6 geeft ...
( 35 + 5 ) % 7 geeft ...
14 + -4 * 6 / 11 geeft ...
2 + 15 / 6 * 1 - 7 % 2 geeft ...
```

Vergelijk met wat je op papier had. Zit er een verschil, zoek dan uit waar je redenering fout liep.

::::{.callout-caution collapse="true" title="Oplossing"}

```java
int resultaat1 = -1 + 4 * 6;
int resultaat2 = ( 35 + 5 ) % 7;
int resultaat3 = 14 + -4 * 6 / 11;
int resultaat4 = 2 + 15 / 6 * 1 - 7 % 2;

Console.WriteLine($"-1 + 4 * 6 geeft {resultaat1}");
Console.WriteLine($"( 35 + 5 ) % 7 geeft {resultaat2}");
Console.WriteLine($"14 + -4 * 6 / 11 geeft {resultaat3}");
Console.WriteLine($"2 + 15 / 6 * 1 - 7 % 2 geeft {resultaat4}");
```

```text
-1 + 4 * 6 geeft 23
( 35 + 5 ) % 7 geeft 5
14 + -4 * 6 / 11 geeft 12
2 + 15 / 6 * 1 - 7 % 2 geeft 3
```

* ``-1 + 4 * 6``: eerst ``4 * 6 = 24``, dan ``-1 + 24 = 23``.
* ``( 35 + 5 ) % 7``: eerst de haakjes, ``40``. ``40`` gedeeld door ``7`` is ``5`` met rest ``5``.
* ``14 + -4 * 6 / 11``: eerst ``-4 * 6 = -24``. Dan ``-24 / 11``: dat is ``-2,18...``, maar alles na de komma valt weg, dus ``-2``. Tot slot ``14 + -2 = 12``.
* ``2 + 15 / 6 * 1 - 7 % 2``: ``15 / 6`` geeft ``2`` (en niet ``2,5``), ``2 * 1 = 2``, ``7 % 2 = 1``. Dus ``2 + 2 - 1 = 3``.
::::

**Deel 2.** De derde en vierde uitkomst zijn wiskundig niet juist. Pas enkel die twee berekeningen aan, zodat de juiste waarde verschijnt. Pas ook de tekst voor ``geeft`` aan, zodat die toont wat je echt berekent:

```text
14 + -4 * 6 / 11.0 geeft 11,818181818181818
2 + 15 / 6.0 * 1 - 7 % 2 geeft 3,5
```

Waarom moet je bij de derde en vierde berekening met ``double`` werken, en bij de eerste twee niet?

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
Het type van de getallen bepaalt of een deling haar kommagetal houdt. Bekijk de derde berekening nog eens stap voor stap:

1. Eerst wordt ``-4 * 6`` gedaan, dat geeft ``-24``.
2. Dit getal wordt gedeeld door ``11``. Omdat ``11`` een ``int`` is zou deze deling ``-2`` geven (alles na de komma weg). Maken we van die ``11`` een kommagetal, dan krijgen we ``-2,181818...``
3. Finaal tellen we ``-2,181818...`` bij ``14`` op en krijgen we ``11,8181818181...``

Merk op dat ``-2,18`` afgekapt wordt tot ``-2`` en niet tot ``-3``: C# gooit het stuk na de komma gewoon weg, ook bij negatieve getallen.
::::

::::{.callout-caution collapse="true" title="Oplossing"}

```java
double resultaat3 = 14 + -4 * 6 / 11.0;
double resultaat4 = 2 + 15 / 6.0 * 1 - 7 % 2;

Console.WriteLine($"14 + -4 * 6 / 11.0 geeft {resultaat3}");
Console.WriteLine($"2 + 15 / 6.0 * 1 - 7 % 2 geeft {resultaat4}");
```

De eerste twee berekeningen bevatten geen gewone deling (``%`` geeft een rest, en die is altijd een geheel getal), dus daar gaat niets verloren.
::::



# Voorspel de uitvoer (*Essential*) {#h02-voorspel-de-uitvoer}

Voer onderstaande code nog niet uit. Schrijf eerst op papier exact op wat er op het scherm zal verschijnen, lijn per lijn.

```java
int getal = 5;
getal++;
getal += 3;
getal /= 2;
Console.WriteLine(getal);

int a = 5;
int b = a++;
Console.WriteLine($"{a} {b}");

Console.WriteLine(9 / 2);
Console.WriteLine(9 / 2.0);
Console.WriteLine(1.0 * 7 / 2);
Console.WriteLine(1.0 * (7 / 2));
Console.WriteLine(-7 / 2);
Console.WriteLine(17 % 5 * 2);
```

Voer de code daarna uit en vergelijk met wat je opschreef. Klopt een lijn niet, zoek dan uit waar je redenering fout liep voor je naar de oplossing kijkt.

::::{.callout-caution collapse="true" title="Oplossing"}

```text
4
6 5
4
4,5
3,5
3
-3
4
```

* ``getal`` wordt ``6``, dan ``9``, dan ``9 / 2``. Dat is een gehele deling, dus ``4``.
* Bij ``b = a++`` krijgt ``b`` eerst de oude waarde van ``a`` (``5``). Pas daarna wordt ``a`` verhoogd tot ``6``.
* ``9 / 2`` is een deling van twee ``int``s: ``4``. Met ``2.0`` wordt het ``4,5``.
* ``1.0 * 7 / 2``: eerst ``1.0 * 7``, dat is ``7.0``, en dat gedeeld door ``2`` geeft ``3,5``.
* ``1.0 * (7 / 2)``: de haakjes gaan voor. ``7 / 2`` geeft ``3``, en ``1.0 * 3`` blijft ``3``.
* ``-7 / 2`` is ``-3,5``. C# kapt af en rondt niet af, dus ``-3``, niet ``-4``.
* ``17 % 5`` geeft ``2`` (17 is 3 keer 5, rest 2). ``%`` en ``*`` hebben dezelfde voorrang, dus van links naar rechts: ``2 * 2 = 4``.
::::



# BTW (*Essential*) {#h02-btw}

Schrijf een programma waarin je het BTW-percentage 21% als een constante definieert door het keyword ``const`` voor de variabele te zetten. Vervolgens toon je een prijs naar keuze, met en zonder btw op het scherm. 

Dit is je startcode:
    
```java   
double prijs = 20;
const double BTW = 21.0;
```

Bereken nu de prijs met BTW en toon het resultaat op het scherm.

Voorbeeld output:

```text
Prijs 20 euro zonder btw. Met BTW: 24,2 euro.
```

:::{.callout-tip collapse="true"}
Je kan de BTW op verschillende manieren berekenen. Kies zelf hoe je dit doet. Je mag dus gerust ook werken met ``const double BTW = 1.21;`` of ``const double BTW = 0.21;``, afhankelijk van welke berekenwijze je prefereert.
:::

::::{.callout-caution collapse="true" title="Oplossing"}

```java
double prijs = 20;
const double BTW = 21.0;

double prijsMetBtw = prijs + (prijs / 100) * BTW;

Console.WriteLine($"Prijs {prijs} euro zonder btw. Met BTW: {prijsMetBtw} euro.");
```

:::: 

**Deel 2.** Wat doet ``const`` eigenlijk? Zet onderaan je programma de lijn ``BTW = 6;`` en lees de foutmelding die Visual Studio geeft. Haal de lijn daarna weer weg.

::::{.callout-caution collapse="true" title="Oplossing"}
Visual Studio meldt: ``CS0131`` *The left-hand side of an assignment must be a variable, property or indexer*. Omdat ``BTW`` een constante is, is het voor C# geen variabele meer, en mag er links van een ``=`` niet staan. De melding zegt niet letterlijk "dit is een constante", dus onthoud hoe ze eruitziet.
::::

**Deel 3.** Verander de startcode in ``int prijs = 20;`` en ``const int BTW = 21;``. Voorspel wat deze twee lijnen tonen, en voer ze daarna uit:

```java
Console.WriteLine(prijs + prijs / 100 * BTW);
Console.WriteLine(prijs + prijs * BTW / 100);
```

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
BTW berekenen is een typische programmeeropdracht. Met ``double``s maken de haakjes in ``prijs + (prijs / 100) * BTW`` geen verschil: delen en vermenigvuldigen hebben dezelfde voorrang en worden van links naar rechts uitgevoerd. Met ``int``s bepaalt de volgorde of je iets overhoudt na de deling, zoals deel 3 toont.
::::

::::{.callout-caution collapse="true" title="Oplossing"}
De eerste lijn toont ``20``, de tweede ``24``.

* ``prijs / 100`` is ``20 / 100``: een gehele deling, dus ``0``. ``0 * 21`` blijft ``0``, en ``20 + 0`` is ``20``. De btw is volledig verdwenen.
* ``prijs * BTW / 100`` rekent eerst ``20 * 21 = 420``, en pas dan ``420 / 100``. Dat geeft ``4`` (de ``0,2`` valt weg), dus ``24``. Beter, maar nog altijd niet ``24,2``.

Met bedragen werk je dus met kommagetallen.
::::



# Stevens gemiddelde (*Essential*) {#h02-stevens-gemiddelde}

Stagiair Steven moest het gemiddelde van drie toetsen berekenen: 14, 17 en 12. Hij vroeg het aan een A.I., kreeg twee versies, en plakte ze allebei in zijn programma zonder ze te testen:

```java
int score1 = 14;
int score2 = 17;
int score3 = 12;
int gemiddelde = (score1 + score2 + score3) / 3.0;
double gemiddelde = score1 + score2 + score3 / 3;
Console.WriteLine($"Je gemiddelde is {gemiddelde}");
```

**Deel 1.** Maak een nieuw project en plak Stevens code in ``Main``. Visual Studio vindt twee fouten, op lijn 4 en lijn 5. Wat betekenen de meldingen? Herstel de code zo dat er één variabele ``gemiddelde`` van het type ``double`` overblijft, en verander lijn 5 zelf nog niet.

::::{.callout-caution collapse="true" title="Oplossing"}

1. Lijn 4: ``CS0266`` *Cannot implicitly convert type 'double' to 'int'. An explicit conversion exists (are you missing a cast?)* Door de ``3.0`` is het resultaat een ``double``, en een kommagetal past niet in een ``int``.
2. Lijn 5: ``CS0128`` *A local variable or function named 'gemiddelde' is already defined in this scope*. Je mag een variabele maar één keer declareren.

Haal lijn 4 weg. Dan blijft over:

```java
int score1 = 14;
int score2 = 17;
int score3 = 12;
double gemiddelde = score1 + score2 + score3 / 3;
Console.WriteLine($"Je gemiddelde is {gemiddelde}");
```
::::

**Deel 2.** Nu compileert het. Voorspel wat het programma toont, en voer het dan uit.

Steven ziet dat het niet klopt en zet haakjes rond de som: ``double gemiddelde = (score1 + score2 + score3) / 3;``. Wat toont het programma nu? Is het gemiddelde nu juist? Leg beide uitkomsten uit, en herstel de code zodat er ``Je gemiddelde is 14,333333333333334`` verschijnt.

::::{.callout-caution collapse="true" title="Oplossing"}

* Zonder haakjes komt er ``Je gemiddelde is 35``. Enkel ``score3`` wordt door 3 gedeeld: ``14 + 17 + 4``.
* Met haakjes komt er ``Je gemiddelde is 14``. De som (``43``) en ``3`` zijn allebei ``int``s, dus is de deling een gehele deling. Het lijkt juist, en daarom valt deze fout zo moeilijk op.

```java
double gemiddelde = (score1 + score2 + score3) / 3.0;
```

Twee fouten na elkaar die de compiler niet ziet: de volgorde van bewerkingen, en daarna de gehele deling.
::::



# Graden omzetten {#h02-graden-omzetten}

Een temperatuur in graden Celsius zet je om naar graden Fahrenheit met de formule F = C × 9/5 + 32.

Schrijf een programma dat vertrekt van ``int celsius = 23;`` en de temperatuur in Fahrenheit toont:

```text
23 graden Celsius is 73,4 graden Fahrenheit.
```

::::{.callout-caution collapse="true" title="Oplossing"}

```java
int celsius = 23;
double fahrenheit = celsius * 9.0 / 5 + 32;
Console.WriteLine($"{celsius} graden Celsius is {fahrenheit} graden Fahrenheit.");
```
::::

**Deel 2.** Steven schreef ``9 / 5 * celsius + 32`` en krijgt ``55``. Zijn collega schreef ``celsius * 9 / 5 + 32`` en krijgt ``73``. Waarom verschillen hun uitkomsten, en waarom is geen van beide juist? Probeer het eerst te verklaren zonder de code uit te voeren.

::::{.callout-caution collapse="true" title="Oplossing"}

* Steven: ``9 / 5`` is een gehele deling en geeft ``1``. Daarna ``1 * 23 + 32 = 55``.
* Zijn collega: ``23 * 9 = 207``, dan ``207 / 5``. Dat is ``41,4``, maar als gehele deling ``41``. Dus ``41 + 32 = 73``. Dichter bij de waarheid, omdat de deling pas op het einde gebeurt, maar de ``0,4`` is weg.
::::



# Dertien in een dozijn (*Essential*) {#h02-dertien-in-een-dozijn}

[Een klassieker (youtube-filmpje)](https://www.youtube.com/watch?v=ygpXHgITuUU). 

Schrijf een applicatie die berekent hoeveel dozen van 8 eieren je volledig kan vullen, en hoeveel eieren je dan nog overhoudt. Gebruik string interpolatie in de uitvoer.

Bovenaan je programma schrijf je:

```java
const int DOOS_GROOTTE = 8;
int aantalEieren = 124;
```

Met deze startwaarden moet je volgende uitvoer krijgen:

```text
124 eieren passen in 15 dozen van 8. Je houdt 4 eieren over.
```

Test daarna met andere getallen: verander het aantal eieren én de doosgrootte. Met 30 eieren en dozen van 8 krijg je ``30 eieren passen in 3 dozen van 8. Je houdt 6 eieren over.``

:::{.callout-tip}
Je hebt twee dingen uit dit hoofdstuk nodig:

* De modulo-operator.
* Wat er gebeurt als je twee gehele getallen deelt.
:::

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
Tot nu toe was de gehele deling een valkuil. Hier heb je ze net nodig: een halve doos telt niet mee. Met ``double``s zou je ``15,5`` dozen krijgen.
::::

::::{.callout-caution collapse="true" title="Oplossing"}

```java
const int DOOS_GROOTTE = 8;
int aantalEieren = 124;

int aantalDozen = aantalEieren / DOOS_GROOTTE;
int eierenOver = aantalEieren % DOOS_GROOTTE;

Console.WriteLine($"{aantalEieren} eieren passen in {aantalDozen} dozen van {DOOS_GROOTTE}. Je houdt {eierenOver} eieren over.");
```

::::



# Gewicht in space (*Essential*) {#h02-gewicht-in-space}

Je massa (in kilogram) is overal dezelfde. Je gewicht is de kracht waarmee een planeet aan je trekt, en die hangt af van de zwaartekracht op die planeet. Gewicht druk je uit in newton (N). Op aarde is je gewicht je massa x 9,81.

![](../assets/illustraties/h02_space.jpg){.illustratie fig-alt="Potloodtekening: de robot en het stokmannetje zweven boven de maan, tussen hen in zweeft een weegschaal."}

Begin je programma met:

```java
double massa = 80.6;
const double G_AARDE = 9.81;
```

Vul bij ``massa`` gerust je eigen massa in. De zwaartekracht op de andere planeten is een factor keer die op aarde. Je gewicht op Mercurius is dus je massa x 9,81 x 0,38.

* Mercurius: 0.38
* Venus: 0.91
* Aarde: 1.00
* Mars: 0.38
* Jupiter: 2.34
* Saturnus: 1.06
* Uranus: 0.92
* Neptunus: 1.19
* Pluto: 0.06  (we laten de discussie achterwege of pluto wel of niet een planeet is)

Maak voor elke factor een constante, en toon onder elkaar je gewicht op elke planeet, in de vorm ``Je weegt op [planeet] [gewicht] N.``

Plaats de zin met Jupiter in het rood, daar je daar het zwaarst weegt, en die van Pluto in het groen.

Voorbeeld output (met een massa van 80,6 kg):

::: {.console .kleur}
```{=html}
<pre><code>Je weegt op Mercurius 300,46068 N.
Je weegt op Venus 719,52426 N.
Je weegt op Aarde 790,686 N.
Je weegt op Mars 300,46068 N.
<span class="k-rood">Je weegt op Jupiter 1850,20524 N.</span>
Je weegt op Saturnus 838,1271600000001 N.
Je weegt op Uranus 727,4311200000001 N.
Je weegt op Neptunus 940,91634 N.
<span class="k-groen">Je weegt op Pluto 47,44116 N.</span></code></pre>
```
:::

:::{.callout-tip}
Waar komt die ``0000001`` achteraan bij Saturnus en Uranus vandaan? Kommagetallen worden binair bewaard en zijn daardoor niet altijd exact. Je hebt dus niets fout gedaan. Afronden leer je in hoofdstuk 4.
:::

::::{.callout-caution collapse="true" title="Oplossing"}

```java
double massa = 80.6;
const double G_AARDE = 9.81;

const double FACTOR_MERCURIUS = 0.38;
const double FACTOR_VENUS = 0.91;
const double FACTOR_AARDE = 1.00;
const double FACTOR_MARS = 0.38;
const double FACTOR_JUPITER = 2.34;
const double FACTOR_SATURNUS = 1.06;
const double FACTOR_URANUS = 0.92;
const double FACTOR_NEPTUNUS = 1.19;
const double FACTOR_PLUTO = 0.06;

Console.WriteLine($"Je weegt op Mercurius {massa * G_AARDE * FACTOR_MERCURIUS} N.");
Console.WriteLine($"Je weegt op Venus {massa * G_AARDE * FACTOR_VENUS} N.");
Console.WriteLine($"Je weegt op Aarde {massa * G_AARDE * FACTOR_AARDE} N.");
Console.WriteLine($"Je weegt op Mars {massa * G_AARDE * FACTOR_MARS} N.");
Console.ForegroundColor = ConsoleColor.Red;
Console.WriteLine($"Je weegt op Jupiter {massa * G_AARDE * FACTOR_JUPITER} N.");
Console.ResetColor();
Console.WriteLine($"Je weegt op Saturnus {massa * G_AARDE * FACTOR_SATURNUS} N.");
Console.WriteLine($"Je weegt op Uranus {massa * G_AARDE * FACTOR_URANUS} N.");
Console.WriteLine($"Je weegt op Neptunus {massa * G_AARDE * FACTOR_NEPTUNUS} N.");
Console.ForegroundColor = ConsoleColor.Green;
Console.WriteLine($"Je weegt op Pluto {massa * G_AARDE * FACTOR_PLUTO} N.");
Console.ResetColor();
```

:::: 



# Tafel en Console.Clear() (*Essential*) {#h02-tafel-en-console-clear}

Met het statement ``Console.Clear();`` kan je de console - je raadt het nooit - leegmaken. Test deze code in het volgende programma:

Schrijf een programma dat de tafel van vermenigvuldiging van 411 geeft, van 1 tot en met 5 (dus 1 x 411 = 411, 2 x 411 = 822 tot en met 5 x 411 = 2055). Toon telkens 1 zin en wacht dan tot de gebruiker op enter duwt om de volgende vermenigvuldiging op een nieuw scherm te tonen. De output ziet er dus als volgt uit:


```text
1 x 411 = 411
Druk op enter voor de volgende lijn.
[Scherm leeg gemaakt]
2 x 411 = 822
Druk op enter voor de volgende lijn.
[Scherm leeg gemaakt]
...
5 x 411 = 2055
```


:::{.callout-warning}
**Plaats 411 en de *teller* (die van 1 tot en met 5 gaat) elk in een variabele aan de start van het programma en gebruik deze in je berekeningen verderop. Toon dat je code ook werkt door de inhoud van de variabele in een ander getal te veranderen zodat je van dat nieuwe getal nu de tafel van vermenigvuldiging krijgt.** Door de waarde 411 bovenaan in een variabele te steken kan je heel snel je programma een andere tafel laten berekenen, je hoeft dan gewoon de waarde van die variabele aan te passen.

**Gebruik ``teller++`` om de teller-variabele telkens te verhogen.** 

:::


Je kan wachten tot de gebruiker op enter duwt door gewoon een lege ``Console.ReadLine`` te doen, zoals volgende voorbeeld toont:

```java
Console.WriteLine("Eerste beeld");
Console.WriteLine("Druk enter om voort te gaan.");
Console.ReadLine();
Console.Clear();
Console.WriteLine("Tweede beeld");
```

:::{.callout-tip}
Merk op dat ``Console.Clear()`` niet werkt zoals verwacht op Mac. 
:::

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
Deze wat omslachtige oefening gaan we later versnellen met behulp van loops.  Let op het gebruik van ``ReadLine`` en ``Clear``. Als we geen ``ReadLine`` voor de ``Clear`` zouden zetten, dan zouden we ogenblikkelijk de laatste *tafel* zien, daar alle vorige *tafels* pijlsnel op het scherm kwamen én ogenblikkelijk werden verwijderd nog voor we ze zouden zien. 

We misbruiken ``ReadLine`` eigenlijk door invoer aan de gebruiker te vragen, maar er niets mee te doen. Het is gewoon een soort pauze vlak voor de volgende ``Clear``.
::::

::::{.callout-caution collapse="true" title="Oplossing"}

```java
int tafel = 411;
int teller = 1;

Console.WriteLine($"{teller} x {tafel} = {teller * tafel}");
teller++;
Console.WriteLine("Druk op enter voor de volgende lijn.");
Console.ReadLine();
Console.Clear();
Console.WriteLine($"{teller} x {tafel} = {teller * tafel}");
teller++;
Console.WriteLine("Druk op enter voor de volgende lijn.");
Console.ReadLine();
Console.Clear();
Console.WriteLine($"{teller} x {tafel} = {teller * tafel}");
teller++;
Console.WriteLine("Druk op enter voor de volgende lijn.");
Console.ReadLine();
Console.Clear();
Console.WriteLine($"{teller} x {tafel} = {teller * tafel}");
teller++;
Console.WriteLine("Druk op enter voor de volgende lijn.");
Console.ReadLine();
Console.Clear();
Console.WriteLine($"{teller} x {tafel} = {teller * tafel}");
```

:::: 



# De Kassa (*Final Essentials*) {#h02-de-kassa}

Je gaat een kassasysteem simuleren. Omdat we in dit hoofdstuk nog geen getallen aan de gebruiker vragen, mag je de hoeveelheden en prijzen van de producten **hardcoden** in variabelen aan het begin van je programma.

**Opdracht:**

Je klant koopt 3 zaken:

1. Frieten (Prijs: 4.50 euro)
2. Koninginnenhapje (Prijs: 12.00 euro)
3. Cola (Prijs: 2.50 euro)

Maak voor elk van deze prijzen een `double`-variabele aan.
Maak daarnaast ook variabelen aan waarin staat **hoeveel** stuks de klant van elk koopt (bv. 2 frieten, 1 koninginnenhapje, 3 cola's).

Voer vervolgens de volgende stappen uit:

1. Bereken het **totaalbedrag** in Euro.
2. Bereken het **gemiddelde** bedrag dat een product kost in dit winkelmandje (totaalbedrag / totaal aantal gekochte items).
3. We aanvaarden ook Dollars! Maak een **constante** aan voor de wisselkoers (bv. `1 Euro = 1.08 Dollar`) en bereken hoeveel de klant in Dollar moet betalen.

Toon dit alles als een net kasticket op het scherm:

1. Toon eerst de boodschap: "Kassa wordt geladen... druk op enter".
2. Wacht tot de gebruiker op enter duwt.
3. Maak het scherm leeg (`Console.Clear()`).
4. Toon het ticket met de details.
   - Gebruik een lijn van 25 sterretjes als boven- en onderkant.
   - Toon de totaalprijs in het **Rood**.
   - Toon de prijs in Dollar in het **Groen**.

**Voorbeeld output:**

(Scherm 1)
```text
Kassa wordt geladen... druk op enter
```

(Gebruiker duwt enter -> Scherm 2)

::: {.console .kleur}
```{=html}
<pre><code>*************************
KASSATICKET
*************************
2 x Friet       : 9 euro
1 x Koninginha  : 12 euro
3 x Cola        : 7,5 euro
-------------------------
<span class="k-rood">TOTAAL (EUR)    : 28,5 euro</span>
<span class="k-groen">TOTAAL (USD)    : 30,78 dollar</span>
-------------------------
Gemiddeld/prod  : 4,75 euro
*************************</code></pre>
```
:::

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
``totaal`` is een ``double``, dus ``totaal / totaalAantal`` is een kommagetal, ook al is ``totaalAantal`` een ``int``.
::::

::::{.callout-caution collapse="true" title="Oplossing"}

```java
double prijsFriet = 4.50;
double prijsKoninginnenhapje = 12.00;
double prijsCola = 2.50;

const double WISSELKOERS = 1.08;

int aantalFriet = 2;
int aantalKoninginnenhapje = 1;
int aantalCola = 3;

double totaalFriet = prijsFriet * aantalFriet;
double totaalKoninginnenhapje = prijsKoninginnenhapje * aantalKoninginnenhapje;
double totaalCola = prijsCola * aantalCola;

double totaal = totaalFriet + totaalKoninginnenhapje + totaalCola;
int totaalAantal = aantalFriet + aantalKoninginnenhapje + aantalCola;
double gemiddelde = totaal / totaalAantal;
double totaalDollar = totaal * WISSELKOERS;

Console.WriteLine("Kassa wordt geladen... druk op enter");
Console.ReadLine();
Console.Clear();

string lijn = "*************************";
string streep = "-------------------------";

Console.WriteLine(lijn);
Console.WriteLine("KASSATICKET");
Console.WriteLine(lijn);
Console.WriteLine($"{aantalFriet} x Friet       : {totaalFriet} euro");
Console.WriteLine($"{aantalKoninginnenhapje} x Koninginha  : {totaalKoninginnenhapje} euro");
Console.WriteLine($"{aantalCola} x Cola        : {totaalCola} euro");
Console.WriteLine(streep);

Console.ForegroundColor = ConsoleColor.Red;
Console.WriteLine($"TOTAAL (EUR)    : {totaal} euro");
Console.ForegroundColor = ConsoleColor.Green;
Console.WriteLine($"TOTAAL (USD)    : {totaalDollar} dollar");
Console.ResetColor();

Console.WriteLine(streep);
Console.WriteLine($"Gemiddeld/prod  : {gemiddelde} euro");
Console.WriteLine(lijn);
```
:::: 



# Tekstmaker (PRO) {#h02-tekstmaker}

:::{.callout-tip}
PRO oefeningen bevatten leerstof die mogelijk niet in deze cursus wordt behandeld, of die in een later hoofdstuk pas aan bod zal komen.
:::



Met de methode ``System.IO.File.WriteAllText();`` kan je een ``string`` naar een bestand wegschrijven.

Je geeft hierbij twee argumenten mee: de bestandsnaam, en de inhoud van het bestand.

Volgende voorbeeld schrijft bijvoorbeeld de zin "Ik ben tim" weg naar een bestand dat zal aangemaakt worden genaamd "me.txt":

```java
System.IO.File.WriteAllText("me.txt", "Ik ben tim");
```

Schrijf een programma dat aan de gebruiker de naam van het bestand vraagt, gevolgd door wat er in het bestand moet geschreven worden. Vervolgens maak je dit bestand aan en plaats je die inhoud er in.

:::{.callout-tip}
Als je enkel een bestandsnaam meegeeft (en geen volledig pad) dan wordt het bestand geplaatst op de plek waar het programma wordt uitgevoerd.

Standaard staat je gecompileerde programma in de map ``bin\Debug`` van je project, en daarin nog in een map met de naam van je .NET-versie (zie [De bin-folder](https://www.ziescherp.be/content/1_csharpbasics/solsprojects.html#de-bin-folder)).

Als je dus een solution "Oefening" met een project "Oefening" hebt aangemaakt in de map "C:\\Temp", dan zal het bestand zich in de volgende map bevinden: "C:\\Temp\\Oefening\\Oefening\\bin\\Debug\\net10.0" (of een andere versie dan ``net10.0``, afhankelijk van je project).

Je kan ook snel naar de map van je project gaan door in de solution explorer aan de rechterzijde in VS te rechterklikken op je project en dan te kiezen voor: Open folder in file explorer.
:::

::::{.callout-caution collapse="true" title="Oplossing"}

```java
Console.WriteLine("Bestandsnaam?");
string naamBestand = Console.ReadLine();
Console.WriteLine("Inhoud bestand?");
string inhoudBestand = Console.ReadLine();

System.IO.File.WriteAllText(naamBestand, inhoudBestand);
```


:::: 
