## Over afronden

Ondertussen hebben we 3 verschillende manieren gezien om getallen af te ronden, namelijk:


* Met behulp van **casting**.
* Met behulp van **``Math.Round``** .
* Met behulp van **``Convert.ToX``**.

Iedere manier gaat de data op een andere manier behandelen in het afronden, iets wat we tot nu toe bewust even hebben genegeerd. In een oefening met kleine getalletjes valt dat verschil nauwelijks op. Zodra je met geld, percentages of gemiddelden werkt, gaat het echter over centen en punten die verdwijnen of er plots bij komen.

### Afkappen is niet hetzelfde als afronden

Bij casting is het duidelijk: deze **kapt gewoon alles na de komma af** (truncatie). Er wordt niet gekeken of het eerste cijfer na de komma een 1 of een 9 is, alles verdwijnt:

```java
int a = (int)2.1;   //2
int b = (int)2.9;   //2 (!)
```

Voor positieve getallen lijkt dat op naar beneden afronden. Zet het maar eens naast ``Math.Floor``, dat wel echt naar beneden afrondt:

```java
Console.WriteLine((int)2.7);         //2
Console.WriteLine(Math.Floor(2.7));  //2

Console.WriteLine((int)-2.7);        //-2
Console.WriteLine(Math.Floor(-2.7)); //-3
```

Casting kapt af **richting nul**, ``Math.Floor`` gaat **richting min oneindig**. Voor positieve getallen komt dat op hetzelfde neer, voor negatieve getallen dus niet.

Wil je zelf kiezen welke kant je uit gaat, dan heeft de Math-bibliotheek daar 3 methoden voor:

* ``Math.Floor(x)``: altijd naar beneden, richting min oneindig.
* ``Math.Ceiling(x)``: altijd naar boven, richting plus oneindig.
* ``Math.Truncate(x)``: alles na de komma weg, richting nul. Dit is exact wat een cast doet, maar je krijgt er een ``double`` van terug.

![Dezelfde twee getallen door elke methode. ``Math.Floor`` en ``Math.Ceiling`` gaan altijd dezelfde kant uit, een cast schuift altijd naar de nul toe.](../assets/1_csharpbasics/afrondrichting.png)<!--{width=100%}-->

``Math.Ceiling`` heb je vaker nodig dan je zou denken. Overal waar je iets moet *vullen* mag je immers niets laten liggen. Stel dat je met 47 studenten op reis gaat en er passen 20 studenten in een bus:

```java
int aantalStudenten = 47;
int perBus = 20;

int aantalBussen = (int)Math.Ceiling(aantalStudenten / (double)perBus); //3
```

Merk op de cast naar ``double`` in die deling. Laat je ze weg, dan deel je twee gehele getallen door elkaar en krijg je ``2`` nog voor ``Ceiling`` iets kan doen. Er staan dan 7 studenten op de parking. Dit is exact de valkuil uit hoofdstuk 2.

De twee andere manieren van afronden hebben enkele venijnige kantjes die we hier even willen bespreken.

<!-- \newpage -->

### Addertjes bij afronden

Op het eerste zicht lijkt afronden met ``Math.Round`` en ``Convert.ToX`` gewoon te werken:

```java
double d1 = 4.2;
double d2 = 4.8;
Console.WriteLine($"afgerond: {Math.Round(d1)} en {Math.Round(d2)} ");
```

Dit zal de getallen **4 en 5** op het scherm tonen, zoals verwacht.

Je kan via een extra parameters de afronden nog wat bijsturen en vertellen tot hoeveel cijfer na de komma dit moet gebeuren:
    
```java
double d1 = 4.12343;
Console.WriteLine($"afgerond: {Math.Round(d1,1)} en {Math.Round(d1,4)} ");
```
Dit zal de getallen **4.1 en 4.1234** op het scherm tonen. Alles lijkt dus in orde.

Maar kijk wat er gebeurt wanneer we een getal afronden dat op de helft van een getal ligt:

```java
double d1 = 4.5;
double d2 = 5.5;
Console.WriteLine($"afgerond: {Math.Round(d1)} en {Math.Round(d2)} ");
```

Je zou 5 en 6 (of 4 en 5) verwachten. Niets is minder waar! De output hiervan wordt **4 en 6**?! 

### Bankers rounding

Zonder extra informatie zal ``Math.Round`` (en ook ``Convert.ToInt32``) altijd afronden naar het **dichtstbijzijnde even getal**. Dit wordt ook wel **bankers rounding** genoemd. Dit is een techniek die gebruikt wordt om afrondingsfouten te minimaliseren.

Waarom dat werkt zie je pas wanneer je veel getallen na elkaar afrondt en optelt. Neem de reeks ``0.5``, ``1.5``, ``2.5``, ``3.5``, ``4.5`` en ``5.5``. De echte som daarvan is 18. Rond je ze allemaal naar boven af, dan krijg je 1, 2, 3, 4, 5 en 6, samen 21. Je hebt er dus 3 bij uitgevonden. Met bankers rounding wordt het 0, 2, 2, 4, 4 en 6, en dat is opnieuw exact 18. De helft van de gevallen gaat naar boven, de andere helft naar beneden, waardoor de fouten elkaar opheffen.

![De reeks ``0.5`` tot ``5.5`` afgerond op twee manieren. Naar boven afronden telt er 3 bij, bankers rounding komt exact op de echte som uit.](../assets/1_csharpbasics/bankersom.png)<!--{width=90%}-->

Dat is heel leuk en handig voor bankiers, maar voor ons als programmeurs is dit niet altijd even handig. Heb jij een quotering van 4.5 op 10, dan wil je liever niet dat de computer daar een 4 van maakt omdat 4 toevallig even is.

Gelukkig kunnen we dit gedrag aanpassen door een extra parameter mee te geven aan de ``Math.Round``-methode. Deze parameter is een **``MidpointRounding``**-enum. Deze enum heeft meerdere mogelijkheden, maar de meest gebruikte zijn:

* **``ToEven``**: Dit is de standaardwaarde en zal afronden naar het dichtstbijzijnde even getal. De zogenaamde Bankers rounding dus.
* **``AwayFromZero``**: Dit zal afronden naar het dichtstbijzijnde getal, ongeacht of het even of oneven is.

De tweede methode is de versie die wij prefereren, omdat deze het meest voorspelbare resultaat geeft. Nemen we terug ons voorbeeld, maar nu met de extra parameter:

```java
double d1 = 4.5;
double d2 = 5.5;
Console.WriteLine($"afgerond: {Math.Round(d1,MidpointRounding.AwayFromZero)} en {Math.Round(d2, MidpointRounding.AwayFromZero)} ");
```

Dan krijgen we **5 en 6** zoals we verwachten.

Als je op de koop toe nog eens wil afronden naar een bepaald aantal cijfers na de komma, dan kan je dit ook nog steeds doen:

```java
double d1 = 4.12343;
Console.WriteLine($"afgerond: {Math.Round(d1,1,MidpointRounding.AwayFromZero )} en {Math.Round(d1,4,MidpointRounding.AwayFromZero)} ");
```

De volgorde van de parameters ligt vast: eerst het getal, dan het aantal cijfers na de komma, en pas als laatste de ``MidpointRounding``.

<!-- \newpage -->

#### En Convert.ToInt32 dan?

Ook ``Convert.ToInt32`` doet aan bankers rounding, en daar kan je het niet zomaar afzetten: er bestaat geen versie van die methode waaraan je een ``MidpointRounding`` kan meegeven.

```java
Console.WriteLine(Convert.ToInt32(4.5)); //4
Console.WriteLine(Convert.ToInt32(5.5)); //6
```

Wil je toch het gedrag dat jij verwacht, dan rond je eerst zelf af met ``Math.Round`` en zet je pas daarna om:

```java
int resultaat = (int)Math.Round(4.5, MidpointRounding.AwayFromZero); //5
```

``Math.Round`` levert hier ``5.0`` af als ``double``. Die daarna casten naar een ``int`` kan geen kwaad meer, want er staat toch niets meer na de komma om af te kappen.

#### De drie manieren naast elkaar

Zet je alles naast elkaar voor de drie klassieke probleemgetallen, dan wordt het verschil in één oogopslag duidelijk:

| **Waarde** | **``(int)``** | **``Math.Round``** | **``Math.Round`` met ``AwayFromZero``** | **``Convert.ToInt32``** |
| :--- | :--- | :--- | :--- | :--- |
| ``4.5`` | 4 | 4 | **5** | 4 |
| ``5.5`` | 5 | 6 | 6 | 6 |
| ``-2.5`` | -2 | -2 | **-3** | -2 |

Enkel de kolom met ``AwayFromZero`` doet wat je op de lagere school geleerd hebt. De kolom met ``(int)`` rondt niet af maar kapt af, en dat die bij ``5.5`` toevallig ook een 5 oplevert maakt het er niet duidelijker op.

:::{.callout-important}
Kies bewust. Wil je **afkappen**, gebruik dan een cast of ``Math.Truncate``. Wil je **afronden**, gebruik dan ``Math.Round`` met ``MidpointRounding.AwayFromZero``. Doe je niets, dan krijg je bankers rounding, en dat is zelden wat je bedoelde.
:::

<!-- \newpage -->

### Afronden of enkel mooi tonen?

Er is nog een vraag die je jezelf moet stellen: wil je het getal zelf veranderen, of wil je het enkel netjes op het scherm zetten? Voor dat laatste heb je ``Math.Round`` helemaal niet nodig, want de format specifiers uit hoofdstuk 3 doen dat voor jou:

```java
double gemiddelde = 7.0 / 3.0;

Console.WriteLine(gemiddelde);          //2,3333333333333335
Console.WriteLine($"{gemiddelde:F2}");  //2,33
```

Het verschil is belangrijk. Bij ``F2`` blijft de variabele ``gemiddelde`` al haar cijfers gewoon behouden, enkel de tekst op het scherm is ingekort. Reken je nadien verder met ``gemiddelde``, dan reken je nog steeds met de volledige precisie. Bij ``Math.Round`` gooi je die cijfers echt weg:

```java
double afgerond = Math.Round(gemiddelde, 2); //2,33 en de rest is voorgoed verdwenen
```

Als vuistregel: rond pas af **op het laatste moment**, vlak voor je het resultaat toont. Rond je te vroeg af en reken je met dat afgeronde getal verder, dan sleep je die fout mee doorheen je hele berekening.

### Geld: reken niet met double

Bij geldbedragen komt er nog een probleem bij kijken dat niets met ``Math.Round`` te maken heeft. Een ``double`` bewaart kommagetallen binair, en niet elk decimaal getal past daar exact in. Probeer dit maar eens:

```java
Console.WriteLine(0.1 + 0.2); //0,30000000000000004
```

Dat is geen bug in C#: elke taal die met ``double`` rekent geeft je hier hetzelfde. Vervelend wordt het wanneer je zo'n bedrag omzet naar centen:

```java
double prijs = 4.35;
int centen = (int)(prijs * 100); //434 in plaats van 435!
```

``4.35 * 100`` levert namelijk ``434.99999999999994`` op, en de cast kapt daar zoals afgesproken alles na de komma van af. Je klant is een cent kwijt, en bij duizend bestellingen merkt de boekhouding dat.

Voor geldbedragen gebruik je daarom het ``decimal``-type dat je in hoofdstuk 2 al leerde kennen. Dat bewaart de cijfers decimaal, precies zoals jij ze schrijft. Je herkent een ``decimal`` aan de ``M`` achter het getal:

```java
decimal prijs = 4.35M;
Console.WriteLine(0.1M + 0.2M); //0,3
```

Alle afrondmethoden die je hierboven zag werken ook op een ``decimal``, inclusief de ``MidpointRounding``:

```java
decimal btw = Math.Round(21.675M, 2, MidpointRounding.AwayFromZero); //21,68
```

:::{.callout-tip}
Voor alles wat je in het echt met een rekenmachine op een kassaticket zou uitrekenen kies je ``decimal``. Voor wetenschappelijke berekeningen, coördinaten, snelheden en dergelijke blijft ``double`` de juiste keuze. In de rest van dit boek gebruiken we ``double``, tenzij expliciet anders vermeld.
:::
