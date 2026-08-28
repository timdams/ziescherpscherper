## For-loops

Een veelvoorkomende manier van while-loops gebruiken is waarbij je een bepaalde teller bijhoudt die je telkens met een bepaalde waarde verhoogt. Wanneer de teller een bepaalde waarde bereikt moet de loop afgesloten worden.

Bijvoorbeeld volgende code om alle even getallen van 0 tot 10 te tonen:

```java
int i = 0;                 //startsituatie
while (i < 11)             //conditie
{
    Console.WriteLine(i);
    i = i + 2;             //dit doet de conditie veranderen
}
```

Herken je de drie zaken uit de inleiding van dit hoofdstuk? De startsituatie staat vóór de loop, de conditie bovenaan en de aanpassing ergens onderin het codeblok. Ze horen bij elkaar, maar staan op drie verschillende plaatsen. Wie deze loop leest moet dus het volledige codeblok doorlopen om te weten hoe vaak hij zal draaien.

**Met een for-loop kunnen we deze veel voorkomende code-constructie verkort schrijven** en zetten we die drie zaken netjes naast elkaar op één lijn.

![Dezelfde loop twee keer. De drie genummerde stukken liggen bij de ``while`` verspreid over de code en staan bij de ``for`` naast elkaar in de kop.](../assets/3_loops/whilevsfor.png)<!--{width=100%}-->

### For syntax

De syntax van een ``for``-loop is de volgende:

```java
for (setup; finish test; update)
{
    //code die zal uitgevoerd worden zolang de finish test true geeft
}
```

* **setup** (in de Microsoft-documentatie de *initializer* genoemd): Hier zetten we de **teller** op zijn beginwaarde. De teller (ook wel de *lusvariabele*) is de variabele die we tijdens de loop in het oog zullen houden en die zal bepalen hoe vaak de loop moet uitgevoerd worden (bv. ``int i = 0;``).
* **finish test** (officieel de *condition*): Hier plaatsen we een booleaanse expressie die de teller gebruikt om te testen of een volgende iteratie moet worden uitgevoerd (bv. ``i < 11``).
* **update** (officieel de *iterator*): Hier plaatsen we wat er moet gebeuren na iedere iteratie. Meestal zullen we hier de teller verhogen of verlagen (bv. ``i = i + 2``).

> Ik gebruik bewust de wat informelere namen *setup*, *finish test* en *update*. Raadpleeg je later de Microsoft-documentatie, dan zie je daar de termen *initializer*, *condition* en *iterator* staan: net hetzelfde, andere woorden.

<!-- \newpage -->

![De ``for``-flowchart, met de code uit het voorbeeld erbij. De nummers zijn dezelfde drie stukken als in de vorige figuur.](../assets/3_loops/for.png)<!--{width=55%}-->

De volgorde waarin die drie stukken uitgevoerd worden is belangrijk:

1. De *setup* loopt exact één keer, helemaal bij de start van de loop.
2. De *finish test* loopt vóór élke iteratie, dus ook vóór de allereerste.
3. De *update* loopt telkens ná het codeblok, niet ervoor.

Omdat de test vooraan staat gedraagt een ``for`` zich zoals een ``while``: hij draait 0 of meer keer. Klopt de test al van bij de start niet, dan wordt het codeblok nooit uitgevoerd:

```java
for (int i = 5; i < 3; i++)
{
    Console.WriteLine("Deze lijn zie je nooit.");
}
```

Voor de teller kiest men meestal ``i``, van *index* of *iterator*. Dat is geen regel maar een gewoonte die je in zowat elke programmeertaal terugziet. Heb je er meerdere nodig, bijvoorbeeld bij geneste loops verderop in dit hoofdstuk, dan gaat men verder met ``j`` en ``k``. Een duidelijkere naam mag natuurlijk altijd: ``for (int rij = 0; rij < 10; rij++)`` leest een pak beter wanneer je effectief rijen aan het overlopen bent.

Gebruiken we deze kennis, dan kunnen we de eerder vermelde code om de even getallen van 0 tot en met 10 tonen als volgt:

```java
for (int i = 0; i < 11; i += 2)
{
    Console.WriteLine(i);
}
```

Dit is de loop uit de figuur bij de start van deze sectie: de startsituatie zit in het eerste vakje, de conditie in het tweede en de aanpassing in het derde. In het codeblok blijft enkel nog over wat de loop écht moet doen.

Als output krijgen we:

::: {.console}
```text
0
2
4
6
8
10
```
:::

:::{.callout-tip}
Merk op dat ``i += 2`` exact hetzelfde doet als ``i = i + 2``, maar dan compacter. Dat zijn de *verkorte operatornotaties* uit hoofdstuk 2. Ook ``i++`` (hetzelfde als ``i = i + 1``) komt in loops heel vaak voor. Schrijf gerust de lange vorm als dat voor jou duidelijker is, maar je moet ze sowieso vlot kunnen *lezen*.
:::

:::{.callout-tip}
**for-tab-tab**

Als je in Visual Studio ``for`` typt en dan tweemaal op [tab] duwt krijg je een kant en klare for-loop:

![](../assets/3_loops/fortabtab.png)<!--{width=70%}-->

Telkens je vervolgens op [tab] duwt verspringt je cursor tussen ``i`` en ``length``. Op die manier kan je dus snel een for schrijven.
:::

### Aftellen

De *update* moet niet noodzakelijk optellen. Wil je aftellen, dan verlaag je de teller en draai je de test om:

```java
for (int i = 10; i > 0; i--)
{
    Console.WriteLine(i);
}
```

Dit toont 10 tot en met 1, net de reeks waar we het bij de ``do while`` over hadden. Merk op dat de teller nu op zijn hoogste waarde start en dat de test met ``>`` werkt. Zou je hier ``i < 10`` schrijven, dan is de test meteen ``false`` en gebeurt er niets.

### Stagiair Steven

>![](../assets/aistagiar.png) Steven moet de getallen 1 tot en met 10 op het scherm tonen. De A.I. gaf hem deze loop en hij plakt ze er meteen in:
>
>```csharp
>for (int i = 1; i < 10; i++)
>{
>    Console.WriteLine(i);
>}
>```
>
>"Van 1 tot 10, dat staat er toch?", zegt hij.

Tel even mee: welke getallen verschijnen er echt?

:::{.callout-note collapse="true"}
## Antwoord
Er verschijnen de getallen ``1`` tot en met ``9``. De *finish test* ``i < 10`` blijft waar zolang ``i`` kleiner is dan 10, dus bij ``i`` gelijk aan 10 stopt de loop nog net voor hij die laatste waarde toont. Wil Steven de 10 er ook bij, dan moet de test ``i <= 10`` worden (of ``i < 11``). Dat soort vergissing van precies één te veel of één te weinig heet een *off-by-one*-fout, en het is dé klassieker bij loops. Steven liet de A.I. de grens kiezen en telde zelf niet na.
:::

### Hoeveel keer loopt deze loop?

De vergissing van Steven is de meest gemaakte fout bij loops, en ze zit bijna altijd in de *finish test*. Onderstaande tabel zet de klassiekers naast elkaar:

| Header | ``i`` neemt de waarden aan | Aantal iteraties |
| --- | :---: | :---: |
| ``for (int i = 0; i < 10; i++)`` | 0 tot en met 9 | 10 |
| ``for (int i = 1; i < 10; i++)`` | 1 tot en met 9 | 9 |
| ``for (int i = 1; i <= 10; i++)`` | 1 tot en met 10 | 10 |
| ``for (int i = 0; i <= 10; i++)`` | 0 tot en met 10 | 11 |
| ``for (int i = 10; i > 0; i--)`` | 10 tot en met 1 | 10 |

Start je bij 0 en test je met ``<``, dan staat het aantal iteraties letterlijk in de test. Start je bij 1, dan heb je ``<=`` nodig om even vaak te lopen. Twijfel je? Trace de loop dan zoals je bij de ``while`` deed: schrijf de eerste twee en de laatste twee rondes uit in een tabel.

### Scope van de teller

Bij de ``while`` zagen we dat de teller na de loop gewoon blijft bestaan, net omdat hij vóór de loop werd aangemaakt. Bij een ``for`` is dat niet zo. Schrijf je ``int i = 0`` in de setup, dan hoort ``i`` bij de loop en verdwijnt hij zodra de loop klaar is:

```java
for (int i = 0; i < 10; i++)
{
    Console.WriteLine(i);
}
Console.WriteLine(i); //deze lijn zal een fout genereren
```

Je krijgt exact dezelfde foutboodschap als bij ``som`` in de vorige sectie: *The name 'i' does not exist in the current context*.

Meestal is dat net wat je wil: buiten de loop heeft de teller toch geen betekenis meer, en verderop in je code kan je de naam ``i`` rustig hergebruiken voor een volgende loop. Heb je die eindwaarde nadien wél nodig, maak de variabele dan vóór de loop aan en laat de ``int`` in de setup weg:

```java
int i;
for (i = 0; i < 10; i++)
{
    Console.WriteLine(i);
}
Console.WriteLine(i); //toont 10
```

Merk op dat de puntkomma van de setup blijft staan. Kom je in deze situatie terecht, vraag je dan wel eerst af of een ``while`` niet de duidelijkere keuze is.

<!-- \newpage -->

### Veelgemaakte fouten met ``for``

#### Een puntkomma achter de header

```java
for (int i = 0; i < 10; i++);
{
    Console.WriteLine(i);
}
```

Dit is dezelfde fout als de puntkomma achter een ``if``, met hetzelfde gevolg: de loop krijgt een leeg codeblok. Hij draait dus wel degelijk tien keer, maar doet tien keer niets. Het blok eronder hoort niet meer bij de loop en wordt daarna één keer uitgevoerd. Deze code compileert bovendien niet, want zoals je hierboven zag bestaat ``i`` buiten de loop niet meer.

Daarmee hebben we alle puntkomma-gevallen gezien, en ze zijn niet allemaal gelijk:

| Constructie | Puntkomma achteraan? |
| --- | --- |
| ``if (conditie)`` | nee, fout |
| ``while (conditie)`` | nee, fout |
| ``} while (conditie)`` | **ja, verplicht** |
| ``for (setup; test; update)`` | nee, fout |

#### De teller ook in het codeblok aanpassen

```java
for (int i = 0; i < 10; i++)
{
    Console.WriteLine(i);
    i++; //oeps, i gaat nu twee keer per ronde omhoog
}
```

Deze loop toont 0, 2, 4, 6 en 8. Zowel de update in de header als de ``i++`` in het codeblok tellen immers mee. Zet de stap die je nodig hebt in de *update* en laat de teller in het codeblok met rust. Wil je met stappen van 2 werken, schrijf dan ``i += 2`` in de header.

#### Een ``for`` gebruiken waar een ``while`` hoort

Herinner je de tabel uit de inleiding: een ``for`` is bedoeld voor een definite loop, waarbij je vooraf weet hoe vaak je moet herhalen. Wie dat negeert en toch een sentinel-loop in een ``for`` wringt, komt uit bij zoiets:

```java
for (int getal = 0; getal != 666; )
{
    Console.WriteLine("Geef een getal in (666 stopt):");
    getal = int.Parse(Console.ReadLine());
}
```

Deze code werkt, maar de update staat leeg en de teller telt niets. Je houdt enkel de omslachtige syntax over. Zulke code hoort in een ``while``.

<!-- \newpage -->

### continue en break

Het ``continue`` keyword laat toe om in een loop de huidige iteratie te eindigen en weer naar de start van de volgende iteratie te gaan. In het volgende voorbeeld gebruiken we ``continue`` om alle getallen van 1 tot 10 te tonen waarbij we het getal 5 zullen overslaan:

```java
for (int i = 1; i <= 10; i++)
{
    if (i == 5)
    {
        continue;
    }
    Console.WriteLine(i);
}
```

Wat hier eigenlijk staat is "toon niets wanneer ``i`` gelijk is aan 5", en dat kan je ook gewoon zo schrijven:

```java
for (int i = 1; i <= 10; i++)
{
    if (i != 5)
    {
        Console.WriteLine(i);
    }
}
```

Deze versie is even lang en zegt rechtstreeks wanneer er iets getoond wordt.

Met ``break`` kan je loops altijd vroegtijdig stopzetten. Je springt dan als het ware ogenblikkelijk uit de loop. Je ziet het aankomen zeker? Yups, daar is ie.... 

>![](../assets/gotopolice.png)Olla!? Wat denken we dat we aan het doen zijn? Gelieve die keywords ogenblikkelijk terug uit je code te verwijderen. Bedankt. 
>
>``break`` en ``continue`` zijn de subtielere vrienden van ``goto``. Ze werken net als ``goto`` in de schemerzone tussen wat wenselijk is en wat niet. Dit maakt ze extra gevaarlijk. Voordat je ``break`` als oplossing gebruikt, probeer eerst of je de loop netjes kunt afsluiten door bijvoorbeeld de juiste booleaanse expressie in de testconditie te gebruiken. Hetzelfde geldt voor continue, dat ook snel goto-achtige bugs kan veroorzaken: in een ``while`` spring je er zo bijvoorbeeld over de verhoging van je teller heen, waarna je programma blijft hangen.
>
>Ik heb gemerkt dat beginnende C#-programmeurs vaak te lui zijn om een deftige stopconditie voor hun loop te schrijven. En dan maar ``break`` als oplossing hanteren.

:::{.callout-tip}
**Wanneer is ``break`` dan wél oké?** Niet álle ``break``-gebruik is fout. Een legitiem voorbeeld is het *zoek-en-stop*-patroon: je doorzoekt een reeks en zodra je het gezochte element gevonden hebt, heeft verder zoeken geen zin meer. In zo'n geval kan ``break`` net leesbaarder zijn dan een kunstmatige extra booleaanse vlag. De vuistregel: gebruik ``break`` enkel als het je code écht duidelijker maakt, niet als luie vervanging voor een deftige stopconditie.
:::

<!-- \newpage -->

### Test jezelf

Wat verschijnt er op het scherm bij elk van deze vijf stukjes code?

**1.**

```java
for (int i = 3; i < 3; i++)
{
    Console.WriteLine("X");
}
```

**2.**

```java
for (int i = 1; i <= 5; i += 2)
{
    Console.WriteLine(i);
}
```

**3.**

```java
int som = 0;
for (int i = 1; i <= 4; i++)
{
    som = som + i;
}
Console.WriteLine(som);
```

**4.**

```java
for (int i = 0; i < 3; i++)
{
    int aantal = 0;
    aantal++;
    Console.WriteLine(aantal);
}
```

**5.**

```java
for (int i = 10; i > 0; i -= 3)
{
    Console.WriteLine(i);
}
```

:::{.callout-tip collapse="true"}
## Antwoorden

1. Niets. De *finish test* ``3 < 3`` is meteen ``false``, dus het codeblok wordt nooit uitgevoerd. Een ``for`` kan dus perfect nul iteraties doen.
2. ``1``, ``3`` en ``5``. Na 5 wordt ``i`` gelijk aan 7 en faalt de test ``7 <= 5``.
3. ``10``. De loop toont zelf niets: pas na afloop verschijnt de som van 1+2+3+4. ``som`` staat bewust vóór de loop, anders zou ze elke ronde opnieuw op 0 springen.
4. Drie keer ``1``. ``aantal`` wordt bij élke iteratie opnieuw aangemaakt en dus telkens terug op 0 gezet. Dit is exact dezelfde valkuil als bij ``som`` in de sectie over de ``while``.
5. ``10``, ``7``, ``4`` en ``1``. Daarna wordt ``i`` gelijk aan -2 en faalt de test ``-2 > 0``. De stap moet dus niet 1 zijn, en de teller moet ook niet netjes op 0 uitkomen.
:::
