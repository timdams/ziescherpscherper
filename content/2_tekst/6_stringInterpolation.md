## Strings samenvoegen

Tot nog toe zette je variabelen in een zin met string interpolation: een ``$`` voor de string en de variabele tussen accolades. In deze sectie bekijken we die techniek in detail. Daarna komt de ``+``-operator aan bod, die je ook op strings kan gebruiken, en de gevallen waarin je die nog nodig hebt.

In de volgende sectie gaan we van volgende informatie uit:

* Stel dat je 2 variabelen hebt ``int leeftijd = 13`` en ``string naam = "Finkelstein"``.
* We willen de inhoud van deze variabelen samenvoegen in een nieuwe ``string zin`` die zal bestaan uit de tekst: ``Ik ben Finkelstein en ik ben 13 jaar.``

### String interpolation met `$`-notatie

Bij *string interpolation* **gebruiken we het ``$``-teken vooraan de ``string`` om aan te geven dat specifieke delen van de zin geïnterpoleerd moeten worden**.

Door het $-teken **VOOR** de string te plaatsen geef je aan dat alle delen in de string die *tussen accolades staan* als code mogen beschouwd worden. Een voorbeeld maakt dit duidelijk:

```java
string zin = $"Ik ben {naam} en ik ben {leeftijd} jaar.";
```

In dit geval zal de inhoud van de variabele ``naam`` tussen de string op de plek waar nu ``{naam}`` staat geplaatst worden. Idem voor ``leeftijd``.

Het resultaat zal dan worden: ``Ik ben Finkelstein en ik ben 13 jaar.``

![De accolades zijn lege vakjes in de zin. De waarde van ``naam`` en ``leeftijd`` wordt op die plek ingevuld.](../assets/2_tekst/interpolatie.png)<!--{width=80%}-->

#### Berekeningen doen bij string interpolatie

Je mag eender welke *expressie* tussen de accolades zetten bij string interpolation, denk maar aan:
```java
string zin = $"Ik ben {leeftijd+4} jaar.";
```

Alle expressies tussen de accolades zullen eerst uitgevoerd worden voor ze tussen de string worden geplaatst. De uitvoer wordt nu dus: ```Ik ben 17 jaar.```

Eender welke expressie is toegelaten, dus je kan ook complexe berekeningen of zelfs andere methoden aanroepen:

```java
string zin = $"Ik ben {leeftijd*leeftijd+(3*2)} jaar.";
```

Een voorbeeld met een methode-aanroep tussen de accolades: ``naam.Length`` geeft het aantal tekens in de string ``naam``:

```java
string groet = $"Je naam {naam} bestaat uit {naam.Length} tekens.";
```

:::{.callout-tip}
Uiteraard mag je dit dus ook gebruiken wanneer je eenvoudigere zaken naar het scherm wenst te sturen gebruik makende van ``Console.WriteLine`` en interpolatie:

```java
Console.WriteLine($"3 maal 9 is {3*9}");
```
:::

#### Stagiair Steven

>![](../assets/aistagiar.png) Steven wil de gebruiker begroeten en kreeg van de A.I. deze regel. Hij is tevreden en commit ze meteen:
>
>```csharp
>string naam = "Finkelstein";
>Console.WriteLine("Hallo {naam}, welkom!");
>```
>
>"Met die accolades plak ik de naam er gewoon tussen, net zoals jij liet zien", zegt hij.

Wat krijgt de gebruiker te zien? En waarom niet wat Steven verwacht?

:::{.callout-note collapse="true"}
## Antwoord
Op het scherm verschijnt letterlijk ``Hallo {naam}, welkom!``, mét de accolades. Steven vergat het ``$``-teken vooraan de string. Zonder dat teken is het een gewone string en blijft ``{naam}`` gewoon staan zoals je het typte. Correct is ``$"Hallo {naam}, welkom!"``. De A.I. liet het ``$`` vallen en Steven testte zijn programma niet eens voor hij het inleverde.

![Dezelfde regel zonder en met ``$``. Enkel met het ``$`` ervoor wordt ``{naam}`` vervangen door de inhoud van de variabele.](../assets/2_tekst/metzonderdollar.png)<!--{width=90%}-->
:::

## Strings mooier formatteren

Bij string interpolation kan je ook extra informatie meegeven hoe het resultaat juist weergegeven moet worden. Dit noemen we *formatteren*. Je geeft dit aan door na de expressie, binnen de accolades, een dubbelpunt te plaatsen gevolgd door de manier waarop moet geformatteerd worden.

Wil je een kommagetal tonen met maar 2 cijfers na de komma dan schrijf je:

```java
double number = 12.345;
Console.WriteLine($"{number:F2}");
```

Er zal ``12.35`` op het scherm verschijnen. ``F2`` na het dubbelpunt geeft aan dat je een *float* wilt met 2 beduidende cijfers na de komma. 

Merk op dat bij string formattering er **afgerond** wordt, en dus niet *afgekapt*. 

![``{number:F2}`` ontleed: voor de dubbelpunt staat de expressie, erna de format specifier. ``12.345`` wordt afgerond naar ``12.35``.](../assets/2_tekst/formatspec.png)<!--{width=80%}-->

Nog enkele nuttige vormen:

* ``D5``: toon een geheel getal als een 5 cijfer getal. ``123`` wordt ``00123``. Maar ``123456`` zal volledig getoond worden. De ``Dx`` formattering werkt enkel op gehele getallen. Uiteraard zijn er dus ook andere varianten zoals ``D2``, etc.
* ``E2``: wetenschappelijke notatie met 2 cijfers precisie (``12000000`` wordt ``1,20E+007`` *"1 komma 2 maal tien tot de zevende"*). Ook hier hoeft het getal niet 2 te zijn, maar geef je dus via het getal aan tot hoeveel cijfers na de komma je wilt tonen.
* ``C``: geldbedrag. ``12,34`` wordt € 12,34. Het teken en het aantal beduidende cijfers is van de landinstellingen van de pc waarop je code wordt uitgevoerd. Het euro teken zal mogelijk als een ``?`` getoond worden. In de volgende sectie tonen we hoe je dit kan oplossen.

Alle overige format specifiers kan je in de documentatie opzoeken[^formatdoc].

[^formatdoc]: Zie [docs.microsoft.com/dotnet/standard/base-types/standard-numeric-format-strings](https://docs.microsoft.com/dotnet/standard/base-types/standard-numeric-format-strings).

<!-- \newpage -->

### Formateren met een masker

Een andere eenvoudige manier om strings te formatteren is door middel van een masker bestaande uit 0'n. Dit ziet er als volgt uit:

```java
double number = 12.345;
Console.WriteLine($"{number:0.00}");
```

We geven hierbij aan dat de variabele tot 2 cijfers na de komma moet getoond worden. Indien deze maar 1 cijfer na de komma bevat dan deze toch met twee cijfers getoond worden. Volgende voorbeeld toont dit:

```java
double number = 12.3;
Console.WriteLine($"{number:0.00}");
```

Er zal ``12,30`` op het scherm verschijnen.

Je kan dit masker ook gebruiken om te verplichten dat getallen bijvoorbeeld steeds met **minimum** 3 cijfers voor de komma getoond worden. Volgende voorbeeld toont dit:

```java
double number = 12.3;
double number2 = 99999.3;
Console.WriteLine($"{number:000.00}");
Console.WriteLine($"{number2:000.00}");
```

Geeft als uitvoer:

::: {.console}
```text
012.30
99999.30
```
:::

![Het masker ``000.00`` als sjabloon: ``12.3`` wordt vooraan en achteraan aangevuld met een ``0``. ``99999.3`` past er niet in, maar er wordt niets afgekapt.](../assets/2_tekst/masker.png)<!--{width=90%}-->

:::{.callout-warning}
**Komma of punt? Dat hangt van je computer af.**

Of je nu ``12,30`` (komma) dan wel ``12.30`` (punt) op het scherm krijgt, hangt af van de **landinstellingen** van de computer waarop je code draait. Op een Belgisch of Nederlands systeem zie je een komma, op een Engels systeem een punt. Hetzelfde geldt voor het ``:C``-formaat (geldbedrag): het muntteken en de scheidingstekens volgen de landinstellingen.

Dat is meestal net wat je wilt, maar het maakt je uitvoer wel *machine-afhankelijk*. Geef je dezelfde oefening door aan een klasgenoot, dan kan zijn uitvoer er anders uitzien. Wil je gegarandeerd altijd dezelfde uitvoer (bijvoorbeeld om met een verwachte oplossing te vergelijken), dan kan je later leren werken met ``CultureInfo`` om de cultuur expliciet vast te zetten.
:::

:::{.callout-tip}
In de appendix leg ik uit hoe je vroeger met behulp van ``String.Format()`` strings moest samenvoegen (daar je dit soms nog in *legacy* code zal tegenkomen).
:::

<!-- \newpage -->

## De `+`-operator op strings

Je kan strings ook aan elkaar plakken met de ``+``-operator. Ze worden dan achter elkaar gezet (**geconcateneerd**). Dezelfde zin als daarnet ziet er dan zo uit:

```java
string zin = "Ik ben " + naam + " en ik ben " + leeftijd + " jaar.";
```

Het resultaat is identiek. Je moet nu wel zelf opletten dat je binnen de aanhalingstekens spaties zet, anders plakt het volgende deel tegen het vorige. En de zin valt uiteen in vijf stukken, wat het lezen niet makkelijker maakt. Voor dit soort zinnen gebruik je daarom string interpolation.

### Wanneer gebruik je `+` wel?

**Lange tekst over meerdere lijnen.** Een string die niet op één lijn code past, splits je op in stukken. Ieder stuk komt op een eigen lijn, met een ``+`` op het einde van de vorige:

```java
Console.WriteLine("Je wordt wakker in een donkere kamer. Het enige licht komt van " +
                  "een flikkerend scherm in de hoek. Er staat één zin op: " +
                  "typ START om te beginnen.");
```

Bevat een van die stukken een variabele, dan krijgt dat stuk zijn eigen ``$``:

```java
Console.WriteLine($"Je wordt wakker in een donkere kamer, {naam}. Het enige licht komt van " +
                  "een flikkerend scherm in de hoek. Er staat één zin op: " +
                  $"je bent {leeftijd} jaar en hebt 3 levens. Typ START om te beginnen.");
```

Een ``$`` op de eerste lijn geldt niet voor de volgende stukken. Ieder stuk tussen aanhalingstekens is een aparte string, en enkel de stukken met een ``$`` ervoor worden geïnterpoleerd. Vergeet je het bij een stuk, dan staat ``{leeftijd}`` letterlijk op het scherm.

**Tekst stap voor stap opbouwen.** Soms ken je de volledige tekst nog niet op voorhand, bijvoorbeeld een kassabon die regel per regel groeit. Je plakt dan telkens een nieuw stuk bij een bestaande string met ``tekst += stuk;`` (de verkorte notatie uit hoofdstuk 2). Dat komt pas goed van pas bij herhalingen in hoofdstuk 6, dus daar kom ik op terug.

### Opletten met de volgorde

Gebruik je ``+`` met strings en getallen door elkaar, dan is het even goed opletten. **De volgorde van strings met andere types samenvoegen bepaalt wat de uitvoer zal zijn.**

Kijk zelf:

```java
Console.WriteLine("1"+1+1);
Console.WriteLine(1+1+"1");
Console.WriteLine("1" + (1 + 1));
```

Geeft als uitvoer:

::: {.console}
```text
111
21
12
```
:::

Was dit de uitvoer die je voorspeld had?

Ook in dit soort code wordt de volgorde van bewerkingen gerespecteerd. De **concatenatie gebeurt van links naar rechts en de linkse operand zal steeds bepalen wat het resultaat van de bewerking zal zijn indien er twijfel is**. Dit nieuw samengevoegde deel wordt dan de linkse operand voor het volgende deel.

Kijken we dus naar ``"1"+1+1`` dan wordt dit eerst ``"11"+1`` en vervolgens dit ``"111"``.

Bij ``1+1+"1"`` krijgen we eerst ``2+"1"``. Dit geeft vervolgens ``21``. Aangezien C# niet kan bepalen dat de string iets bevat wat een getal kan zijn, en dus besluit om beide operanden als een ``string`` te zien wat altijd de veiligste oplossing is.

![De drie regels stap voor stap, telkens van links naar rechts. Zodra een ``string`` meedoet, is het resultaat een ``string``. Haakjes gaan voor.](../assets/2_tekst/volgorde.png)<!--{width=85%}-->

<!-- \newpage -->

## Optellen van char variabelen

We hebben al gezien dat intern een ``char`` als een geheel getal wordt voorgesteld. Stel dat we volgende ``char``-variabelen aanmaken: 

```java
char letter1 = 'A';
char letter2 = 'B';
```

Bij string mogen we de +-operator gebruiken om 2 strings aan elkaar te plakken. **Bij char mag dat niet!** Of beter, dit mag maar zal niet het resultaat geven dat je mogelijk verwacht wanneer je voor het eerst hiermee leert werken. Oordeel zelf:

```java
Console.WriteLine(letter1 + letter2);
```

**Wanneer je deze code uitvoert dan krijg je `131` te zien** (en dus niet "AB" zoals je misschien had verwacht).

Had je dit verwacht? Denk eraan dat het char-type z’n waarde als getallen bijhoudt, de zogenaamde UNICODE-voorstelling van het karakter. Als de compiler het volgende ziet staan:

``letter1 + letter2`` 

dan zal de compiler deze twee waarden letterlijk optellen en het nieuw verkregen getal als resultaat geven:

* De UNICODE-voorstelling van `A` is 0x041 oftewel **`65`**. In het geheugen staat dus het geheel getal ``65``.
* `B` wordt voorgesteld door **`66`**.
* Als we dus de variabelen ``letter1`` en ``letter2`` optellen geeft dit **131**. 

![Onder elke ``char`` zit een getal. ``+`` telt die getallen op en het resultaat is een ``int``, geen letter.](../assets/2_tekst/charplus.png)<!--{width=75%}-->

:::{.callout-tip}
Je zou misschien verwachten dat C# vervolgens het element op plaats 131 in de UNICODE tabel zou tonen. 

Dat is niet juist: de ``+``- operator is niet gedefinieerd voor het ``char`` datatype, maar wel voor het ``int`` datatype. Daarom beschouwt de compiler de operanden ``letter1`` en ``letter2`` als ``int``. De som van twee ``int`` waarden geeft een ``int`` resultaat. We zien daarom ``131`` op het scherm in plaats van het UNICODE karakter met waarde 131 (een Latijnse ``i`` zonder punt) . In het volgende hoofdstuk leren we hoe je dit wel kunt doen.
:::
