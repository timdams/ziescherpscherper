## Methoden en arrays

Zoals alle datatypes kan je ook arrays van eender welk datatype als parameter gebruiken bij het schrijven van een methode. **Lees nu volgende waarschuwing extra aandachtig, a.u.b:**

:::{.callout-important}
Herinner je dat arrays *by reference* werken. Je werkt dus steeds met de origineel meegegeven array (of beter, de referentie er naar), ook in de methode. Als je dus aanpassingen aan de array aanbrengt in de methode, dan zal dit ook gevolgen hebben op de array van waaruit we de methode aanriepen.
:::

:::{.callout-tip}
Wil je dat een methode je originele array *niet* aanpast, geef dan een kopie mee. Die maak je zoals je zag bij *Arrays kopiëren* ([arraysgeheugen.md](arraysgeheugen.md)): een nieuwe array van dezelfde lengte, en daarna element per element overzetten met een loop.
:::


Stel dat je bijvoorbeeld een methode hebt die als parameter 1 array van ints meekrijgt. De methode zou er dan als volgt uitzien:

```java
static void LeesData(int[] inArray)
{
 
}
```

Om deze methode aan te roepen volstaat het om een bestaande array als parameter mee te geven:

```java
int[] getallen = {1, 2, 3};
LeesData(getallen);
```

### Array grootte in de methode
Een array als parameter meegeven kan dus, maar een ander aspect waar rekening mee gehouden moet worden is dat je niet kan ingeven in de parameterlijst hoe groot de array is. Je zal dus in je methode steeds de grootte van de array moeten uitlezen met de ``.Length``-eigenschap.

Volgende methodesignatuur is dus **FOUT**!

```java
static void LeesData(int[6] inArray)
{
 
}
```

En zal volgende foutboodschap genereren:

![Duidelijk toch!](../assets/5_arrays/arrays3.png)



### Arraymethode voorbeeld

Volgend voorbeeld toont een methode die alle getallen van de meegegeven array op het scherm zal tonen:

```java
static void ToonArray(int[] getalArray)
{
    Console.WriteLine("Array output:");
    for (int i = 0; i < getalArray.Length; i++)
    {
        Console.WriteLine(getalArray[i]);
    }
}
```


De ``ToonArray`` methode aanroepen kan dan als volgt:

```java
int[] leeftijden = {2, 5, 1, 6};
ToonArray(leeftijden);
``` 
En de output zal dan zijn:


::: {.console}
```text
Array output:
2
5
1
6
```
:::

<!-- \newpage -->



### Voorbeeldprogramma met methoden
Volgend programma toont hoe we verschillende onderdelen van de code in methoden hebben geplaatst zodat:

1. de lezer van de code sneller kan zien wat het programma juist doet.
2. code herbruikbaar is.

Begrijp je wat dit programma doet? En kan je voorspellen wat er op het scherm zal komen? 

```java
static void VulArray(int[] getalArray)
{
    for (int i = 0; i < getalArray.Length; i++)
    {
        getalArray[i] = i;
    }
}

static void VermenigvuldigArray(int[] getalArray, int factor)
{
    for (int i = 0; i < getalArray.Length; i++)
    {
        getalArray[i] = getalArray[i] * factor;
    }
}

static void ToonVeelvouden(int[] getalArray, int veelvoudenVan)
{
    for (int i = 0; i < getalArray.Length; i++)
    {
        if (getalArray[i] % veelvoudenVan == 0)
            Console.WriteLine(getalArray[i]);
    }
}

static void Main(string[] args)
{
    int[] getallen = new int[100];
    VulArray(getallen);
    VermenigvuldigArray(getallen, 3);
    ToonVeelvouden(getallen, 4);
} 
```

:::{.callout-note collapse="true"}
## Antwoord
``VulArray`` zet in elk vakje zijn eigen index: 0, 1, 2 tot en met 99. ``VermenigvuldigArray`` maakt daar 0, 3, 6 tot en met 297 van. ``ToonVeelvouden`` toont vervolgens enkel wat deelbaar is door 4. Omdat alle waarden al veelvouden van 3 zijn, blijven de veelvouden van 12 over: 0, 12, 24, tot en met 288.
:::

<!-- \newpage -->


### Array als return-type bij een methode

Een array kan ook gebruikt worden als het returntype van een methode. Hiervoor zet je gewoon het type array als returntype in de methodesignatuur. Ook hier mag je geen grootte aangeven.

Stel bijvoorbeeld dat je een methode hebt die een int-array aanmaakt van een gegeven grootte waarbij ieder element van de array reeds een beginwaarde heeft die je ook als parameter meegeeft:

```java
static int[] MaakArray(int lengte, int beginwaarde)
{
    int[] resultArray = new int[lengte];
    for (int i = 0; i < lengte; i++)
    {
        resultArray[i] = beginwaarde;
    }
    return resultArray;
}
```
De aanroep van deze methode vereist dan dat je het resultaat opvangt in een nieuwe variabele, als volgt:


```java
int[] mijnNieuweArray = MaakArray(4,666);
```





>![](../assets/attention.png)Snel, zet je helm op, voor er ongelukken gebeuren! Ik had al enkele keren gezegd dat arrays *by reference* worden meegegeven, maar wat is daar nu het gevolg van? Wel, laten we eens naar volgende programmaatje kijken dat ik heb geschreven om de nummering van de appartementen in een flatgebouw aan te passen. 

<!-- \newpage -->


Zoals je weet is het gelijkvloers in sommige landen 0, terwijl in andere dit 1 is. Volgende programma past het nummer van het gelijkvloers aan:

```java
static void PasAan(int[] inarr)
{
    inarr[0] = 0;
}

public static void Main()
{
    int[] verdiepnummers = {1,2,3};
    Console.WriteLine($"VOOR:{verdiepnummers[0]}"); // VOOR:1
    PasAan(verdiepnummers);
    Console.WriteLine($"NA:{verdiepnummers[0]}"); // NA:0
}
```

Dankzij het feit dat we aan ``PasAan`` een array meegeven *by reference* zal de methode werken op de originele array en is deze code dus mogelijk. 

Vergelijk dit met volgende voorbeeld waar we een ``int`` als parameter meegeven die *by value* en niét *by reference* wordt meegegeven:

```java
static void PasAan(int inGetal)
{
    inGetal = 0; //enkel de kopie wordt 0
}

public static void Main()
{
    int[] getallen = {1,2,3};
    Console.WriteLine($"VOOR:{getallen[0]}"); // VOOR:1
    PasAan(getallen[0]);
    Console.WriteLine($"NA:{getallen[0]}"); // NA:1
}
```

Daar de methode nu werkt met een kopie, zal de aanpassing in de methode dus geen invloed hebben op de origineel meegegeven ``int`` (ongeacht dat die deel uitmaakt van een array).

![Links wijzen ``verdiepnummers`` en ``inarr`` naar dezelfde array. Rechts krijgt de methode een kopie van de waarde.](../assets/5_arrays/byrefmethode.png)


### Een onbepaald aantal parameters met ``params``

In het vorige hoofdstuk zag je dat ``Console.WriteLine`` in zijn signatuur ``params object[] arg`` heeft staan, en dat je zoiets pas zelf kan schrijven als je arrays kent. Dat moment is nu.

Zet je het keyword ``params`` voor een array-parameter, dan mag de aanroeper zoveel losse waarden meegeven als hij wil. C# steekt die waarden zelf in een array voor je:

```java
static int Som(params int[] getallen)
{
    int totaal = 0;
    for (int i = 0; i < getallen.Length; i++)
    {
        totaal += getallen[i];
    }
    return totaal;
}
```

Al deze aanroepen werken nu:

```java
Console.WriteLine(Som(1, 2, 3));  //6
Console.WriteLine(Som(5, 10));    //15
Console.WriteLine(Som());         //0
```

Je mag ook nog steeds gewoon een bestaande array meegeven:

```java
int[] cijfers = { 4, 8, 15 };
Console.WriteLine(Som(cijfers));  //27
```

Let op: er mag maar één ``params``-parameter zijn en die staat altijd achteraan in de parameterlijst. Deze signatuur mag dus wel:

```java
static void Log(string titel, params string[] regels)
```

Maar deze niet:

```java
static void Log(params string[] regels, string titel) //MAG NIET!
```


### Stagiair Steven

>![](../assets/aistagiar.png) Steven wil een methode schrijven die de scores herstelt naar een verse, lege array. De A.I. gaf hem dit en hij is opgetogen:
>
>```csharp
>static void Reset(int[] scores)
>{
>    scores = new int[scores.Length];
>}
>
>public static void Main()
>{
>    int[] scores = {10, 25, 3};
>    Reset(scores);
>    Console.WriteLine(scores[0]);
>}
>```
>
>"``Reset`` zet er een nieuwe, lege array in de plaats. Dus dit toont ``0``", zegt hij.

Wat toont dit echt?

:::{.callout-note collapse="true"}
## Antwoord
Er verschijnt nog steeds ``10``, niet ``0``. Binnen ``Reset`` krijgt de parameter ``scores`` wel een nieuwe array toegewezen, maar dat verandert enkel waar die lokale parameter-variabele naar wijst. De variabele ``scores`` in ``Main`` is een aparte variabele die nog steeds naar de originele array wijst, en die blijft gewoon bestaan.

Wat je aan een methode meegeeft is namelijk een *kopie van de wegwijzer*, niet de wegwijzer zelf. Die kopie kan je in de methode naar iets anders laten wijzen zonder dat de aanroeper daar iets van merkt.

![``Reset`` verlegt enkel zijn eigen kopie van het adres.](../assets/5_arrays/stevenreset.png)

Vergelijk het met ``PasAan`` hierboven: een *element* aanpassen (``scores[0] = 99``) werkt wél door naar de aanroeper, want dan volg je de wegwijzer en pas je de array zelf aan. De hele array *vervangen* (``scores = new int[...]``) werkt niet door. Wil je de array van de aanroeper echt vervangen, dan moet je de nieuwe array ``return``en en in ``Main`` opnieuw toekennen. Het kan ook door de parameter met het keyword ``ref`` mee te geven (zie [de appendix](../B_appendix/2_outenref.md)), maar returnen is hier de eenvoudigste weg. Steven verwarde "de array aanpassen" met "de variabele van de aanroeper aanpassen".
:::
