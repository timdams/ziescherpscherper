<!-- TODO ed.5 (review): params-keyword vermelden (Console.WriteLine gebruikt het zelf; studenten zien dit in oefeningen). -->

## Parameters doorgeven

Methoden zijn handig vanwege de herbruikbaarheid. Wanneer je een methode hebt geschreven om de sinus van een hoek te berekenen, dan is het echter ook handig dat je de hoek als parameter kunt meegeven zodat de methode kan gebruikt worden voor eender welke hoekwaarde. 

Indien er wel parameters nodig zijn dan geef je die mee als volgt:

```java
MethodeNaam(parameter1, parameter2, …);
```

Je hebt dit ook al geregeld gebruikt. Wanneer je tekst op het scherm wilt tonen dan roep je de ``WriteLine`` methode aan en geef je 1 parameter mee, namelijk hetgeen dat op het scherm moet komen. 

<!-- \newpage -->

### Methoden met formele parameters

Om zelf een methode te definiëren die 1 of meerdere parameters aanvaardt, dien je per parameter het datatype en een tijdelijk naam (identifier) te definiëren (*formele parameters*) in de methode-signatuur

Als volgt:

```java
static returntype MethodeNaam(type parameter1, type parameter2)
{
    //code van methode
}
```

Deze formele parameters zijn nu beschikbaar binnen de methode om mee te werken naar believen.

Stel bijvoorbeeld dat we onze ``FaculteitVan5`` willen veralgemenen naar een methode die voor alle getallen werkt, dan zou je volgende methode kunnen schrijven:

```java
static int BerekenFaculteit(int grens)
{
    int resultaat = 1;
    for (int i = 1; i <= grens; i++)
    {
        resultaat *= i;
    }
    return resultaat;
}
```

De naam ``grens`` kies je zelf. Maar we geven hier dus aan dat de methode ``BerekenFaculteit`` enkel kan aangeroepen worden indien er 1 actuele parameter van het type ``int`` wordt meegegeven.

Aanroepen van de methode gebeurt dan als volgt:

```java
int getal = 5;
int resultaat = BerekenFaculteit(getal);
```

Of sneller:

```java
int resultaat = BerekenFaculteit(5);
```

Als we even later ``resultaat`` dan zouden gebruiken zal er de waarde ``120``  in zitten.

:::{.callout-tip}
Parameters worden "by value" meegegeven (zie het hoofdstuk over Arrays hierna) wat wil zeggen dat een **kopie** van de waarde wordt meegegeven. Als je dus in de methode de waarde van de parameter aanpast, dan heeft dit géén invloed op de waarde van de originele parameter waar je de methode aanriep.
:::

Je zou nu echter de waarde van getal kunnen aanpassen (door bijvoorbeeld aan de gebruiker te vragen welke faculteit moet berekend worden) en je code zal nog steeds werken.

:::{.callout-warning}
Veel beginnende programmeurs zijn soms verward dat de naam van de parameter in de methode (bv. ``grens``) niet dezelfde moet zijn als de naam van de variabele (of literal) die we bij de aanroep meegeven.

Het is echter logisch dat deze niet noodzakelijk gelijk moeten zijn: het enige dat er gebeurt is dat de methodeparameter de waarde krijgt die je meegeeft, ongeacht van waar de parameter komt.
:::

En wat als je de faculteiten wenst te kennen van alle getallen tussen 1 en 10?  Dan zou je schrijven:

```java
for (int i = 1; i < 11; i++)
{
    Console.WriteLine($"Faculteit van {i} is {BerekenFaculteit(i)}" );
}
```

![Visualisatie flow.](../assets/4_methoden/fac.png)

 
 <!-- \newpage -->

Dit zal als resultaat geven:

```
Faculteit van 1 is 1
Faculteit van 2 is 2
Faculteit van 3 is 6
Faculteit van 4 is 24
Faculteit van 5 is 120
Faculteit van 6 is 720
Faculteit van 7 is 5040
Faculteit van 8 is 40320
Faculteit van 9 is 362880
Faculteit van 10 is 3628800
```

:::{.callout-tip}
Merk op dat dankzij je methode, je véél code maar één keer moet schrijven, wat de kans op fouten verlaagt.
:::

### Volgorde van parameters

De volgorde waarin je je parameters meegeeft bij de aanroep van een methode is belangrijk. De eerste variabele wordt aan de eerste parameter toegekend, enz. Het volgende voorbeeld toont dit. 

Stel dat je een methode hebt:

```java
static void ToonDeling(double teller, double noemer)
{
    if(noemer != 0)
        Console.WriteLine(teller/noemer);
    else
        Console.WriteLine("Een zwart gat ontstaat!");
}
```

Deze 2 aanroepen zullen dus een andere output geven:

```java
ToonDeling(3.5 , 2.1 );
ToonDeling(2.1 , 3.5 );
```

Zeker wanneer je met verschillende types als formele parameters werkt is de volgorde belangrijk. Het verschil met de vorige methode is hier wel dat VS jou zal helpen wanneer je volgorde niet klopt. 

Stel dat we volgende methode hebben gemaakt:

```java
static void ToonInfo(string name, int age)
{
   Console.WriteLine($"{name} is {age} old");
}
```

Deze aanroep is correct:

```java
ToonInfo("Tim", 37);
```

Maar deze is **FOUT** en zal niet compileren:

```java
ToonInfo(37, "Tim"); //mag niet!
```

### Doorgeven van parameters

Parameters kunnen op 2 manieren worden doorgegeven aan een methode:

1. **By value** : hierbij wordt **een kopie gemaakt van de huidige waarde**. Het is die kopie die wordt meegegeven.
2. **by reference**: in plaats van een kopie wordt het *adres* (de zogenaamde **pointer** of **reference**) van de originele variabele meegegeven. Aanpassingen in de methode zijn daardoor óók buiten de methode zichtbaar, op de originele variabele. Dit hebben we voorlopig nog niet nodig: het komt uitgebreid aan bod vanaf het hoofdstuk over arrays (H9). Lig er nu dus nog niet van wakker als dit nog wat abstract aanvoelt.

Het effect van manier 1 is hopelijk duidelijk: wanneer je in een methode de inhoud van een actuele parameter aanpast, dan heeft dat geen gevolg op de originele variabele die we meegaven bij de methode-aanroep!

Dit zien we in dit programma:

```java
static void JaartjeOuder(int leeftijd)
{
    leeftijd++;
    Console.WriteLine($"Hoera. Je bent {leeftijd} jaar geworden.");
}
static void Main(string[] args)
{
    int mijnLeeftijd = 40;
    Console.WriteLine($"Je bent {mijnLeeftijd} jaar.");
    JaartjeOuder(mijnLeeftijd);
    Console.WriteLine($"Je bent {mijnLeeftijd} jaar.");
}
```

In de output zien we dat ``mijnLeeftijd`` niet werd aangepast in de methode:

::: {.console}
```text
Je bent 40 jaar.
Hoera. Je bent 41 jaar geworden.
Je bent 40 jaar.
```
:::

### Stagiair Steven

>![](../assets/aistagiar.png) Steven moet een getal verdubbelen met een methode. De A.I. schreef de methode netjes, en Steven roept ze als volgt aan:
>
>```csharp
>static int Verdubbel(int getal)
>{
>    return getal * 2;
>}
>
>static void Main(string[] args)
>{
>    int punten = 5;
>    Verdubbel(punten);
>    Console.WriteLine($"Punten: {punten}");
>}
>```
>
>"Ik roep ``Verdubbel`` op, dus ``punten`` is nu 10", zegt hij zelfzeker.

Wat verschijnt er op het scherm, en wat ging er mis in Stevens denken?

:::{.callout-note collapse="true"}
## Antwoord
Er verschijnt ``Punten: 5``. Twee dingen lopen mis. Ten eerste werkt ``Verdubbel`` *by value*: de methode krijgt een kopie van ``punten`` en kan de originele variabele niet wijzigen. Ten tweede, en dat is de echte fout, vangt Steven het resultaat van de methode nergens op. ``Verdubbel(punten);`` berekent wel ``10``, maar dat getal wordt niet bewaard en gaat verloren. Hij had ``punten = Verdubbel(punten);`` moeten schrijven. De methode compileert en draait zonder klacht, dus kreeg Steven geen waarschuwing en nam hij aan dat het wel goed zat.
:::

### Methoden nesten

In het begin ga je vooral vanuit je ``Main`` methoden aanroepen, maar dat is geen verplichting. Je kan ook vanuit methoden andere methoden aanroepen. Je kan zelfs vanuit die aangeroepen methode weer andere aanroepen, enz. 

Volgende (nutteloze) programma'tje toont dit in actie:

```java
static void SchrijfT()
{
    Console.Write("T");
}
static void SchrijfI()
{
    Console.Write("I");
}
static void SchrijfM()
{
    Console.Write("M");
}
static void SchrijfNaam()
{
    SchrijfT();
    SchrijfI();
    SchrijfM();
}
public static void Main()
{
    SchrijfNaam();
}
```

Er verschijnt "Tim" op het scherm.

![Visualisatie van de code zonder terugkerende pijlen.](../assets/4_methoden/mmethods.png)<!--{width=70%}-->

### Bugs met methoden

Wanneer je programma's complexer worden moet je zeker opletten dat je geen oneindige *methode-lussen* creëert. Zie je de fout in volgende code?

```java
public static void Main()
{
    SchrijfNaam();
}
static void SchrijfNaam()
{
    SchrijfNaam();
    Console.WriteLine("Klaar?");
}
```

Deze code heeft een methode die zichzelf aanroept, zonder dat deze ooit afsluit. Hierdoor komen we dus in een oneindige aanroep van de methode ``SchrijfNaam``. Dit programma zal een leeg scherm tonen (daar er nooit aan de tweede lijn in de methode wordt geraakt) en dan crashen wanneer het werkgeheugen van de computer op is.

![Deze keer zijn er bewust geen terugkerende pijlen getekend: ze zijn er niet.](../assets/4_methoden/oneindig.png)

<!-- TODO ed.5 (review): korte sectie/tip over methode-grootte (single responsibility, "een methode doet 1 ding"). Sluit aan bij de kennisclip 'goede methoden schrijven'. -->

<!-- TODO ed.5 (review): screenshot toevoegen van hoe je per ongeluk in een lokale functie belandt (VS auto-suggestions). -->

#### Lokale functies...en waarom je ze beter niet gebruikt

Sinds C# 7.0 kan je methoden definiëren binnenin een andere methode. Dit noemt men **lokale functies**  (*local functions*). Alhoewel ze zeker hun nut hebben, is het in deze fase van C# leren **geen goed idee om lokale functies te gebruiken**. 

Het is veel belangrijker dat je eerst goed leert methoden schrijven. Beginnende programmeurs schrijven soms per ongeluk een lokale functies. Dan ontdekken ze dat ze die methode nergens kunnen aanroepen. Lokale functies zijn alleen oproepbaar binnen de methode waarin ze zijn gedefinieerd.

Kortom, zorg dat je nooit dit schrijft!

```java
static void Main(string[] args)
{
    TimVindtDitNietLeuk();

    static void TimVindtDitNietLeuk() //NIET DOEN!
    {
        Console.WriteLine("Doe dit niet!");
    }
}
```

Maar wel

```java
static void TimVindtDitNietLeuk() //Beter!
{
    Console.WriteLine("Doe dit niet!");
}

static void Main(string[] args)
{
    TimVindtDitNietLeuk();
}
```

>![](../assets/attention.png) Even ingrijpen en je wijzen op recursie zodat je code niet in je gezicht blijft ontploffen. 

**Recursie** is een geavanceerd programmeerconcept wat niet in dit boek wordt besproken (enkel in hoofdstuk 18 gaan we recursie nog kort ontmoeten), maar laten we het hier kort toelichten. Recursieve methoden zijn methoden die zichzelf aanroepen maar wél op een gegeven moment stoppen wanneer dat moet gebeuren. Volgend voorbeeld is een recursieve methode om de som van alle getallen tussen ``start`` en ``stop`` te berekenen:

```java
static int BerekenSomRecursief(int start, int stop)
{
    int som = start;
    if(start < stop)
    {
        start++;
        return som += BerekenSomRecursief(start, stop);
    }
    return som;
}
```
Je herkent recursie aan het feit dat de methode zichzelf aanroept. Maar een controle voorkomt dat die aanroep blijft gebeuren zonder dat er ooit een methode wordt afgesloten. We krijgen 6 terug (1+2+3) als we de methode als volgt aanroepen:

```java
int einde = BerekenSomRecursief(1,3);
``` 

![Flow van de recursie.](../assets/4_methoden/recursie.png)

<!-- \newpage -->

### Commentaar aan methoden toevoegen

Het is aan te raden om steeds boven een methode een nieuwe vorm van commentaar te plaatsen als volgt (dit werkt enkel bij methoden): ``///``

Visual Studio zal dan automatisch de parameters verwerken van je methode zodat je vervolgens enkel nog het doel van iedere parameter moet schrijven.

Stel dat we een methode hebben geschreven die de macht van een getal berekent (wat dom is...er bestaat al zoiets als ``Math.Pow``). We zouden dan volgende commentaar toevoegen:

```java
/// <summary>
/// Berekent de macht van een getal.
/// </summary>
/// <param name="grondtal">Het getal dat je tot macht wilt verheffen</param>
/// <param name="exponent">De exponent van de macht</param>
/// <returns></returns>
static int Macht(int grondtal, int exponent)
{
    int result = 1;
    for (int i = 0; i < exponent; i++)
    {
        result *= grondtal;
    }
    return result;
}
```

Wanneer we nu elders de methode ``Macht`` gebruiken dan krijgen we automatische extra informatie:

![Het is aanbevolen om je documentatie in het Engels te doen, niet zoals in dit voorbeeld dus.](../assets/4_methoden/comment.png)<!--{width=50%}-->

