## Zelf zoeken en tellen in een array

De methoden uit ``System.Array`` dekken de klassiekers, maar daar houdt het op. Wil je weten hoeveel metingen er boven de 100 zitten, wie het hoogste punt haalde of wat het gemiddelde van een reeks is, dan schrijf je zelf een loop over de array. Die loops lijken sterk op elkaar: het is een handvol patronen dat telkens terugkomt[^sollic]. Ik overloop de belangrijkste.

[^sollic]: Bij jobsollicitaties voor programmeurs word je soms gevraagd om net dit soort code zonder hulp uit te schrijven.

:::{.callout-tip}
Dit is geen cursus algoritmen. Hoe ``Array.Sort`` intern te werk gaat (met ``bubblesort``, ``quicksort`` en de rest van die familie) is stof voor een vak algoritmen en datastructuren. Hier gaat het enkel over de loops die je zelf zal schrijven zodra je met arrays werkt.
:::

### Alles overlopen en iets bijhouden

Het eenvoudigste patroon: je gaat één keer over de hele array en houdt onderweg een resultaat bij in een variabele. Die variabele maak je aan **vóór** de loop, anders begin je bij elke iteratie opnieuw van nul:

```java
int[] punten = { 12, 8, 17, 15, 4 };

int som = 0;
for (int i = 0; i < punten.Length; i++)
{
    som += punten[i];
}

double gemiddelde = (double)som / punten.Length;
Console.WriteLine($"Totaal {som}, gemiddelde {gemiddelde}");
```

De cast naar ``double`` is nodig omdat ``som`` en ``Length`` allebei ``int`` zijn: zonder die cast doe je een gehele deling en verlies je alles na de komma (zie hoofdstuk 4).

Wil je niet optellen maar tellen hoeveel elementen aan een voorwaarde voldoen, dan is het enige verschil dat er een ``if`` in de loop staat:

```java
int aantalGeslaagd = 0;
for (int i = 0; i < punten.Length; i++)
{
    if (punten[i] >= 10)
    {
        aantalGeslaagd++;
    }
}
Console.WriteLine($"{aantalGeslaagd} van de {punten.Length} geslaagd");
```

### De grootste (of kleinste) zoeken

Hiervoor bestaat geen kant-en-klare methode. ``Array.Sort`` zou wel werken, maar dan wijzig je de volgorde van je array, en meestal wil je die net behouden. Je houdt dus de beste kandidaat *tot nu toe* bij, en onthoudt meteen ook op welke index die staat:

```java
int[] punten = { 12, 8, 17, 15, 4 };

int hoogste = punten[0];
int indexHoogste = 0;
for (int i = 1; i < punten.Length; i++)
{
    if (punten[i] > hoogste)
    {
        hoogste = punten[i];
        indexHoogste = i;
    }
}
Console.WriteLine($"Hoogste punt is {hoogste}, behaald door student {indexHoogste}");
```

:::{.callout-important}
Neem het **eerste element** van de array als startwaarde (``punten[0]``), niet ``0``. Met ``int hoogste = 0;`` werkt je code voor deze array, maar krijg je een fout antwoord zodra alle waarden negatief zijn: ``hoogste`` blijft dan op 0 staan, een waarde die niet eens in de array voorkomt. Om diezelfde reden start de loop bij index 1: element 0 zit al in ``hoogste``.

Voor het kleinste element is de enige wijziging dat ``>`` een ``<`` wordt.
:::

<!-- \newpage -->

### Zoeken en stoppen zodra je iets vindt

Zoeken naar een waarde doe je in de praktijk met ``Array.IndexOf``, maar het patroon zelf moet je kennen: je hebt het nodig van zodra je niet op gelijkheid zoekt maar op een voorwaarde ("de eerste meting boven de 100"). Stel dat je een simulatie schrijft van een fietswedstrijd en wilt weten of de renner met rugnummer 12 in de top 5 staat.

Zodra je het element gevonden hebt, heeft verder zoeken geen zin meer. Je loop heeft dus twee redenen om te stoppen: het einde van de array, of een geslaagde zoektocht. Beide zet je in de testconditie:

```java
int teZoeken = 12;
int[] top5 = { 5, 10, 12, 25, 16 };

int index = 0;
bool gevonden = false;
while (index < top5.Length && !gevonden)
{
    if (top5[index] == teZoeken)
    {
        gevonden = true;
    }
    else
    {
        index++;
    }
}

if (gevonden)
{
    Console.WriteLine($"Nr. {teZoeken} staat op index {index}");
}
else
{
    Console.WriteLine($"Nr. {teZoeken} staat niet in de top 5");
}
```

:::{.callout-warning}
Let goed op wáár ``index++`` staat: in de ``else``. Zo blijft ``index`` achteraf staan op de plek waar je het element gevonden hebt. Verhoog je de teller onderaan de loop (dus ook wanneer je net een match had), dan wijst ``index`` één positie te ver en toon je de verkeerde plaats.
:::

Dezelfde zoektocht kan ook met een ``for``-loop, waarbij je de loop verlaat met ``break``:

```java
int gevondenIndex = -1;
for (int i = 0; i < top5.Length; i++)
{
    if (top5[i] == teZoeken)
    {
        gevondenIndex = i;
        break;
    }
}

if (gevondenIndex != -1)
{
    Console.WriteLine($"Nr. {teZoeken} staat op index {gevondenIndex}");
}
```

In hoofdstuk 6 kreeg je de vuistregel dat ``break`` enkel mag wanneer het je code écht duidelijker maakt. Dit zoek-en-stop-patroon is zo'n geval: de vlag ``gevonden`` valt weg en de index van de match zit meteen in ``gevondenIndex``. De ``-1`` is hier de afspraak voor "niet gevonden", exact zoals ``Array.IndexOf`` het doet.

<!-- \newpage -->

### Twee arrays die synchroon lopen

Een gevonden index wordt pas echt nuttig wanneer je met twee arrays werkt die *synchroon* lopen. Daarmee bedoel ik: de eerste array bevat de producten, de tweede de prijs van ieder product, telkens op dezelfde index. De prijs van peren is dus 6.2, die van meloenen 2.9:

```java
string[] producten = { "appelen", "peren", "meloenen" };
double[] prijzen = { 3.3, 6.2, 2.9 };
```

![Links staan naam en prijs op dezelfde index. Rechts verhuisden de namen wel, de prijzen niet.](../assets/5_arrays/synchroon.png)<!--{width=100%}-->

We vragen nu aan de gebruiker van welk product de prijs getoond moet worden:

```java
Console.WriteLine("Welke productprijs wenst u?");
string keuzeGebruiker = Console.ReadLine();
```

Je zoekt de index in de ene array en gebruikt die index in de andere. Omdat we hier op gelijkheid zoeken volstaat ``Array.IndexOf`` om die index te vinden:

```java
int productIndex = Array.IndexOf(producten, keuzeGebruiker);

if (productIndex != -1)
{
    Console.WriteLine($"Prijs van {keuzeGebruiker} is {prijzen[productIndex]}.");
}
else
{
    Console.WriteLine("Dat product ken ik niet.");
}
```

Vraag ik daarentegen welk product het *duurste* is, dan helpt ``IndexOf`` je niet verder: je zoekt geen waarde die je al kent. Je zoekt in de ``prijzen``-array met het patroon van de grootste waarde, maar je hoeft enkel de index bij te houden, want die heb je nodig om er de naam bij te halen:

```java
int indexDuurste = 0;
for (int i = 1; i < prijzen.Length; i++)
{
    if (prijzen[i] > prijzen[indexDuurste])
    {
        indexDuurste = i;
    }
}
Console.WriteLine($"Duurste product: {producten[indexDuurste]} aan {prijzen[indexDuurste]} euro");
```

:::{.callout-warning}
Zulke parallelle arrays zijn fragiel. Voeg je een product toe en vergeet je de prijs, dan lopen beide arrays uit de pas en toon je zonder enige foutmelding de verkeerde prijs. In hoofdstuk 9 leer je een betere aanpak: één object dat de naam én de prijs samen bewaart.
:::

<!-- \newpage -->

### Sneller zoeken in een gesorteerde array

Al de zoekcode hierboven, ``Array.IndexOf`` incluis, overloopt de array element per element. Bij een array van enkele duizenden elementen begint dat te wegen. Staat je array **gesorteerd**, dan kan het een pak sneller met ``Array.BinarySearch``: die kijkt in het midden van de array, weet aan die ene vergelijking al in welke helft het gezochte element moet liggen, en herhaalt dat trucje op die helft.

Je geeft twee parameters mee: de array in kwestie en het element dat je zoekt. Je krijgt de index terug, of een **negatief** getal wanneer er niets gevonden werd:

```java
int[] metingen = { 224, 34, 156, 1023, -6 };
Array.Sort(metingen); //anders zal BinarySearch niet werken

Console.WriteLine("Welke meting zoekt u?");
int keuze = int.Parse(Console.ReadLine());

int index = Array.BinarySearch(metingen, keuze);
if (index >= 0)
{
    Console.WriteLine($"{keuze} gevonden op {index}");
}
else
{
    Console.WriteLine("Niet gevonden");
}
```

![Elke vergelijking gooit de helft van de array overboord.](../assets/5_arrays/binarysearch.png)<!--{width=90%}-->

:::{.callout-important}
**``BinarySearch`` werkt enkel indien de elementen in de array gesorteerd staan!** Op een ongesorteerde array krijg je geen foutmelding: je code compileert, draait, en geeft af en toe zelfs het juiste antwoord. Dat maakt het een vervelende bug om terug te vinden. Werk je met een ongesorteerde array, gebruik dan ``Array.IndexOf`` of een eigen loop.
:::

Bovendien is sorteren niet altijd een optie. Bij de producten en prijzen van hierboven zou ``Array.Sort(producten)`` de link met de ``prijzen``-array kapotmaken: de namen verhuizen, de prijzen blijven staan. Gebruik ``BinarySearch`` dus pas bij grote, gesorteerde arrays waar de snelheid echt telt.
