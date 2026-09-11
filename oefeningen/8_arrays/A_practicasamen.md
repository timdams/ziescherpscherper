<!--# Oefeningen week 1-->

::: {.vooraf}
- Deze week volgt het boek tot en met *Zelf zoeken en tellen in een array*: arrays aanmaken en overlopen, ``args``, arrays in het geheugen, ``System.Array``, zoeken en synchrone arrays. Strings, arrays in methoden en 2D-arrays komen in week 2.
- Een aantal oefeningen is geïnspireerd op oefeningen van [Exercism](https://exercism.org/tracks/csharp/exercises).
- [Let op]{.let-op} LINQ-methoden zoals ``.Sum()`` of ``.Max()`` op een array kosten punten (zie het [boeteblad](https://www.ziescherp.be/content/B_appendix/boete.html#boete-linq)). ``break`` mag enkel in een ``switch`` en bij zoek-en-stop.
- Moet je veel getallen intypen om te testen? Vul je array dan tijdens het testen tijdelijk met ``Random``.
- In de voorbeelduitvoer begint gebruikersinvoer met ``>``.
:::

<!--# Oefeningen week 1-->



# Opwarmers {#h08-opwarmers}

Negen korte oefeningen om arrays aan te maken, te vullen en te overlopen.

* Vul een array van ints met alle getallen van 1 tot en met 100. Toon de array.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int[] getallen = new int[100];
for (int i = 0; i < getallen.Length; i++)
{
    getallen[i] = i + 1;
}

for (int i = 0; i < getallen.Length; i++)
{
    Console.WriteLine(getallen[i]);
}
```
::::

* Vul een array van ints met alle even getallen tot en met 100. Toon de array.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int[] getallen = new int[50];
for (int i = 0; i < getallen.Length; i++)
{
    getallen[i] = (i + 1) * 2;
}

for (int i = 0; i < getallen.Length; i++)
{
    Console.WriteLine(getallen[i]);
}
```
::::

* Vraag de gebruiker 3 keer een getal, stop die in een array, en toon daarna de array.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int[] getallen = new int[3];
for (int i = 0; i < getallen.Length; i++)
{
    Console.WriteLine($"Geef getal {i + 1}:");
    getallen[i] = int.Parse(Console.ReadLine());
}

Console.WriteLine("De array bevat:");
for (int i = 0; i < getallen.Length; i++)
{
    Console.WriteLine(getallen[i]);
}
```
::::

* Maak een array met de namen van je 4 beste vrienden, van "beste vriend" tot "minst beste vriend". Zet de labels ("Beste vriend", "Tweede beste vriend", "Derde beste vriend", "Minst beste vriend") in een tweede array, en toon beide met één lus.

```text
Beste vriend: Vincent
Tweede beste vriend: Olga
Derde beste vriend: Bill
Minst beste vriend: Gotoman
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
string[] vrienden = { "Vincent", "Olga", "Bill", "Gotoman" };
string[] labels = { "Beste vriend", "Tweede beste vriend", "Derde beste vriend", "Minst beste vriend" };
for (int i = 0; i < vrienden.Length; i++)
{
    Console.WriteLine($"{labels[i]}: {vrienden[i]}");
}
```

Twee arrays die op dezelfde index bij elkaar horen: dat heet *synchroon*. Je komt het verderop nog vaak tegen.
::::

* Maak een array van 20 booleans waarin alle even indexen ``true`` zijn en alle oneven ``false``. Toon de array.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
bool[] bits = new bool[20];
for (int i = 0; i < bits.Length; i++)
{
    bits[i] = i % 2 == 0;
}

for (int i = 0; i < bits.Length; i++)
{
    Console.WriteLine(bits[i]);
}
```
::::

* Maak een array van 20 willekeurige booleans. Toon de array in een eerste lus, en tel in een tweede lus hoeveel keer ``true`` en hoeveel keer ``false`` erin zit.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
bool[] bits = new bool[20];
Random rng = new Random();
for (int i = 0; i < bits.Length; i++)
{
    bits[i] = rng.Next(0, 2) == 1;
}

for (int i = 0; i < bits.Length; i++)
{
    Console.WriteLine(bits[i]);
}

int aantalTrue = 0;
for (int i = 0; i < bits.Length; i++)
{
    if (bits[i])
    {
        aantalTrue++;
    }
}
Console.WriteLine($"Aantal true: {aantalTrue}");
Console.WriteLine($"Aantal false: {bits.Length - aantalTrue}");
```
::::

* Vul een array met 10 willekeurige doubles van 0 tot 10. Toon het gemiddelde.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
double[] getallen = new double[10];
Random rng = new Random();
for (int i = 0; i < getallen.Length; i++)
{
    getallen[i] = rng.NextDouble() * 10;
}

double som = 0;
for (int i = 0; i < getallen.Length; i++)
{
    som += getallen[i];
}
Console.WriteLine($"Het gemiddelde is {som / getallen.Length:F2}");
```
::::

* Maak een ``enum Schooltype`` met de waarden ``ASO``, ``BSO``, ``KSO`` en ``TSO``. Vul een array van 20 ``Schooltype``-waarden met willekeurige schooltypes. Toon de array, en toon hoe vaak elk schooltype voorkomt.

::::{.callout-caution collapse="true" title="Oplossing"}
Binnen ``class Program``, boven ``Main``:

```java
enum Schooltype { ASO, BSO, KSO, TSO }
```

In ``Main``:

```java
Schooltype[] scholen = new Schooltype[20];
Random rng = new Random();
for (int i = 0; i < scholen.Length; i++)
{
    scholen[i] = (Schooltype)rng.Next(0, 4);
}

int aantalAso = 0;
int aantalBso = 0;
int aantalKso = 0;
int aantalTso = 0;
for (int i = 0; i < scholen.Length; i++)
{
    Console.WriteLine(scholen[i]);
    switch (scholen[i])
    {
        case Schooltype.ASO:
            aantalAso++;
            break;
        case Schooltype.BSO:
            aantalBso++;
            break;
        case Schooltype.KSO:
            aantalKso++;
            break;
        case Schooltype.TSO:
            aantalTso++;
            break;
    }
}
Console.WriteLine($"ASO: {aantalAso}, BSO: {aantalBso}, KSO: {aantalKso}, TSO: {aantalTso}");
```
::::

* Wat staat er in een array die je net aangemaakt hebt? Voorspel eerst op papier wat onderstaande code toont, en voer ze pas daarna uit.

```java
int[] getallen = new int[3];
bool[] vlaggen = new bool[3];
string[] namen = new string[3];
Console.WriteLine($"[{getallen[0]}] [{vlaggen[1]}] [{namen[2]}]");
```

::::{.callout-caution collapse="true" title="Oplossing"}
```text
[0] [False] []
```

Een nieuwe array staat meteen vol met de defaultwaarde van zijn type: ``0`` voor een ``int``, ``false`` voor een ``bool``. In een string-array staat ``null``: er staat nog helemaal niets in, en op het scherm zie je dat als een lege plek. Zie [Een array aanmaken](https://www.ziescherp.be/content/7_arrays/1_ArraysBasics.html#een-array-aanmaken).
::::


# Vraag Array (*Essential*) {#h08-vraag-array}

Maak een array met 6 vragen (verzin ze zelf) waarop de gebruiker met een getal antwoordt, en een tweede array die 6 ints kan bevatten. Toon de vragen één voor één, en bewaar elk antwoord in de tweede array. Na de 6 vragen toon je alle vragen opnieuw, met achter elke vraag het antwoord van de gebruiker.

```text
Hoe oud ben je?
>37
Wat is je postcode?
>2018
Hoeveel broers heb je?
>1
Hoeveel zussen heb je?
>2
In welk jaar ben je geboren?
>1981
Hoeveel is 3 + 5?
>8
Je antwoorden:
Hoe oud ben je? 37
Wat is je postcode? 2018
Hoeveel broers heb je? 1
Hoeveel zussen heb je? 2
In welk jaar ben je geboren? 1981
Hoeveel is 3 + 5? 8
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
string[] vragen = { "Hoe oud ben je?", "Wat is je postcode?", "Hoeveel broers heb je?",
    "Hoeveel zussen heb je?", "In welk jaar ben je geboren?", "Hoeveel is 3 + 5?" };
int[] antwoorden = new int[vragen.Length];

for (int i = 0; i < vragen.Length; i++)
{
    Console.WriteLine(vragen[i]);
    antwoorden[i] = int.Parse(Console.ReadLine());
}

Console.WriteLine("Je antwoorden:");
for (int i = 0; i < vragen.Length; i++)
{
    Console.WriteLine($"{vragen[i]} {antwoorden[i]}");
}
```

``antwoorden`` krijgt de lengte van ``vragen``. Voeg je een vraag toe, dan groeit de tweede array vanzelf mee.
::::


# Array Zoeker (*Essential*) {#h08-array-zoeker}

Vraag de gebruiker 10 gehele getallen en bewaar ze in een array. Vraag daarna welk getal verwijderd moet worden, en zoek het in de array. Vind je het, verwijder het dan: alle getallen erachter schuiven één plaats naar links, en de laatste plaats krijgt de waarde -1. Komt het getal meer dan één keer voor, dan verwijder je enkel het eerste. Toon op het einde de array.

```text
Voer 10 gehele getallen in:
>2
>3
>4
>8
>9
>10
>12
>15
>16
>8
Welk getal moet verwijderd worden?
>8
Resultaat is: 2 3 4 9 10 12 15 16 8 -1
```

Staat het getal niet in de array, dan blijft de array zoals ze was.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int[] getallen = new int[10];
Console.WriteLine("Voer 10 gehele getallen in:");
for (int i = 0; i < getallen.Length; i++)
{
    getallen[i] = int.Parse(Console.ReadLine());
}

Console.WriteLine("Welk getal moet verwijderd worden?");
int teVerwijderen = int.Parse(Console.ReadLine());

int index = -1;
for (int i = 0; i < getallen.Length && index == -1; i++)
{
    if (getallen[i] == teVerwijderen)
    {
        index = i;
    }
}

if (index != -1)
{
    for (int i = index; i < getallen.Length - 1; i++)
    {
        getallen[i] = getallen[i + 1];
    }
    getallen[getallen.Length - 1] = -1;
}

Console.Write("Resultaat is: ");
for (int i = 0; i < getallen.Length; i++)
{
    Console.Write($"{getallen[i]} ");
}
Console.WriteLine();
```

``index == -1`` staat mee in de lusvoorwaarde: zodra het eerste voorkomen gevonden is, stopt de zoektocht. Zo wordt enkel de eerste 8 verwijderd.
::::

**Deel 2.** Dit zijn de lijnen van de opschuiflus, door elkaar, met één lijn te veel:

```java
getallen[getallen.Length - 1] = -1;
for (int i = index; i < getallen.Length; i++)
getallen[i] = getallen[i + 1];
for (int i = index; i < getallen.Length - 1; i++)
```

Er staan twee ``for``-lussen. Welke hoort in het programma, en wat gebeurt er met de andere? Leg het uit zonder je programma uit te voeren, en controleer daarna.

::::{.callout-caution collapse="true" title="Oplossing"}
De juiste is ``for (int i = index; i < getallen.Length - 1; i++)``. In de lus lees je ``getallen[i + 1]``. Loopt ``i`` tot de laatste index (``Length - 1``), dan wil je in de laatste ronde ``getallen[Length]`` lezen, en die bestaat niet: ``IndexOutOfRangeException``. De lus moet dus één ronde vroeger stoppen, en de laatste plaats vul je daarna zelf in met -1.
::::


# LeveringsBedrijf (*Essential*) {#h08-leveringsbedrijf}

Maak een programma voor een koeriersbedrijf. Maak een array met de postcodes van 10 gemeenten waar het bedrijf naar levert (zelf te kiezen, elke postcode één keer). Maak een tweede array met de prijs per kg voor elke gemeente: het eerste element is de prijs per kg voor de eerste postcode, enzovoort.

Vraag de gebruiker het gewicht van het pakket en een postcode. Zoek de prijs per kg voor die gemeente en toon de totale prijs. Levert het bedrijf niet aan die postcode, toon dan een foutmelding.

```text
Geef het gewicht van het pakket (kg):
>45
Naar welke postcode wil je het pakket versturen?
>2020
Dit zal 9630 euro kosten.
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int[] postcodes = { 1000, 2020, 2013, 4500, 2340, 1200, 9999, 6666, 2362, 2800 };
int[] prijsPerKg = { 12, 214, 3, 15, 56, 900, 13, 5, 111, 43 };

Console.WriteLine("Geef het gewicht van het pakket (kg):");
int gewicht = int.Parse(Console.ReadLine());
Console.WriteLine("Naar welke postcode wil je het pakket versturen?");
int postcode = int.Parse(Console.ReadLine());

int index = 0;
bool gevonden = false;
while (index < postcodes.Length && !gevonden)
{
    if (postcodes[index] == postcode)
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
    Console.WriteLine($"Dit zal {gewicht * prijsPerKg[index]} euro kosten.");
}
else
{
    Console.WriteLine("Naar die postcode leveren we niet.");
}
```

Met ``Array.IndexOf`` gaat het zoeken in één lijn, zoals in [Twee arrays die synchroon lopen](https://www.ziescherp.be/content/7_arrays/algoarrays.html#twee-arrays-die-synchroon-lopen):

```java
int index = Array.IndexOf(postcodes, postcode);
if (index != -1)
{
    Console.WriteLine($"Dit zal {gewicht * prijsPerKg[index]} euro kosten.");
}
else
{
    Console.WriteLine("Naar die postcode leveren we niet.");
}
```

Sorteren om sneller te zoeken kan hier niet: sorteer je ``postcodes``, dan horen de prijzen niet meer bij de juiste gemeente.
::::


# Podium (*Essential*) {#h08-podium}

Acht renners reden een tijdrit. Hun namen en tijden (in seconden) staan in twee synchrone arrays:

```java
string[] renners = { "Lotte", "Arne", "Sofie", "Bram", "Nora", "Jens", "Lien", "Wout" };
int[] tijden = { 3725, 3610, 3698, 3655, 3802, 3590, 3700, 3644 };
```

Toon het podium: de drie snelste renners met hun tijd. Gebruik daarvoor ``Array.Copy``, ``Array.Sort`` en ``Array.IndexOf``.

```text
1. Jens in 3590 seconden
2. Arne in 3610 seconden
3. Wout in 3644 seconden
```

Waarom mag je de array ``tijden`` zelf niet sorteren?

::::{.callout-caution collapse="true" title="Oplossing"}
```java
string[] renners = { "Lotte", "Arne", "Sofie", "Bram", "Nora", "Jens", "Lien", "Wout" };
int[] tijden = { 3725, 3610, 3698, 3655, 3802, 3590, 3700, 3644 };

int[] gesorteerd = new int[tijden.Length];
Array.Copy(tijden, gesorteerd, tijden.Length);
Array.Sort(gesorteerd);

for (int plaats = 0; plaats < 3; plaats++)
{
    int index = Array.IndexOf(tijden, gesorteerd[plaats]);
    Console.WriteLine($"{plaats + 1}. {renners[index]} in {tijden[index]} seconden");
}
```

Sorteer je ``tijden`` zelf, dan staan de tijden daarna op een andere index dan de namen die erbij horen. Daarom sorteer je een kopie, en zoek je de snelste tijden daarna op in de originele array: die index hoort nog bij de juiste naam.

Een kopie maken met ``int[] gesorteerd = tijden;`` werkt niet. Dat kopieert enkel de wegwijzer, en dan sorteer je toch het origineel.
::::

**Deel 2.** Toon ook de rode lantaarn: de traagste renner. Gebruik ``Array.Reverse``.

```text
Rode lantaarn: Nora in 3802 seconden
```

::::{.callout-caution collapse="true" title="Oplossing"}
Voeg onderaan toe:

```java
Array.Reverse(gesorteerd);
int indexLaatste = Array.IndexOf(tijden, gesorteerd[0]);
Console.WriteLine($"Rode lantaarn: {renners[indexLaatste]} in {tijden[indexLaatste]} seconden");
```
::::

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
``Array.IndexOf`` geeft het **eerste** voorkomen. Rijden twee renners exact dezelfde tijd, dan vindt ``IndexOf`` twee keer dezelfde renner. Zie [System.Array](https://www.ziescherp.be/content/7_arrays/systemarray.html) voor ``Sort``, ``Reverse``, ``Copy`` en ``IndexOf``.
::::


# Stevens warmste stad (*Essential*) {#h08-stevens-warmste-stad}

Stagiair Steven moest een programma schrijven dat de gemiddelde januaritemperatuur van vijf steden toont, en daarna de warmste stad. Een A.I. leverde dit:

```java
string[] steden = { "Oslo", "Helsinki", "Moskou", "Reykjavik", "Stockholm" };
int[] temperaturen = { -4, -6, -9, -1, -3 };

Console.WriteLine("Gemiddelde temperatuur in januari:");
for (int i = 0; i <= steden.Length; i++)
{
    Console.WriteLine($"{steden[i]}: {temperaturen[i]} graden");
}

int warmste = 0;
for (int i = 0; i < temperaturen.Length; i++)
{
    if (temperaturen[i] > warmste)
    {
        warmste = temperaturen[i];
    }
}

Array.Sort(temperaturen);
string warmsteStad = steden[temperaturen.Length - 1];
Console.WriteLine($"De warmste stad is {warmsteStad} met {warmste} graden.");
```

**Deel 1.** Het compileert zonder één foutmelding. Voer het uit. Wat gebeurt er, en welke lijn is de schuldige?

::::{.callout-caution collapse="true" title="Oplossing"}
Na de vijf steden crasht het programma met een ``IndexOutOfRangeException``. De eerste lus loopt met ``i <= steden.Length`` tot en met index 5, en de laatste index is 4. Maak er ``i < steden.Length`` van.
::::

**Deel 2.** Nu toont het programma ``De warmste stad is Stockholm met 0 graden.`` Het juiste antwoord is Reykjavik, met -1 graden. Er zitten nog twee fouten in. Zoek ze, en herschrijf het stuk dat de warmste stad zoekt.

::::{.callout-caution collapse="true" title="Oplossing"}
1. ``warmste`` start op 0. Het vriest overal, dus geen enkele temperatuur is groter dan 0, en ``warmste`` blijft 0: een waarde die niet eens in de array staat. Start met het eerste element.
2. ``Array.Sort(temperaturen)`` sorteert enkel de temperaturen. De steden blijven staan, dus ``steden[4]`` hoort niet meer bij ``temperaturen[4]``. Toevallig had Steven hier geen crash, wel een verkeerde stad.

Zoek daarom de **index** van de hoogste temperatuur, en gebruik die in beide arrays:

```java
int indexWarmste = 0;
for (int i = 1; i < temperaturen.Length; i++)
{
    if (temperaturen[i] > temperaturen[indexWarmste])
    {
        indexWarmste = i;
    }
}
Console.WriteLine($"De warmste stad is {steden[indexWarmste]} met {temperaturen[indexWarmste]} graden.");
```
::::

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
* Geen van de drie fouten wordt door de compiler gevonden. Twee geven zelfs geen crash, enkel een verkeerd antwoord.
* Test met data waar iets moet gebeuren: hier is dat een lijst waarin het overal vriest. Met positieve temperaturen had Steven de fout met ``warmste = 0`` nooit gezien.
* Zie [De grootste (of kleinste) zoeken](https://www.ziescherp.be/content/7_arrays/algoarrays.html#de-grootste-of-kleinste-zoeken) en [Twee arrays die synchroon lopen](https://www.ziescherp.be/content/7_arrays/algoarrays.html#twee-arrays-die-synchroon-lopen).
::::


# Puzzelen met arrays (*Essential*) {#h08-puzzelen-met-arrays}

Sommige puzzels zitten op het randje van PRO. U weze gewaarschuwd.

:::{.callout-tip}
Je mag hier ``Array.Sort`` gebruiken, maar ``Array.Reverse`` en ``Array.BinarySearch`` niet: het verplaatsen doe je zelf. Lees je "lees 8 getallen in", bewaar ze dan in volgorde in je array, en begin pas daarna te puzzelen.
:::

1.	Lees 8 getallen in. Toon ze in omgekeerde volgorde.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int[] getallen = new int[8];
for (int i = 0; i < getallen.Length; i++)
{
    Console.WriteLine($"Geef getal {i + 1}:");
    getallen[i] = int.Parse(Console.ReadLine());
}

for (int i = getallen.Length - 1; i >= 0; i--)
{
    Console.Write($"{getallen[i]} ");
}
Console.WriteLine();
```
::::

2.	Lees 8 getallen in. Toon ze één plaats naar voor verschoven: eerst het tweede getal, dan het derde, ..., dan het laatste, en tenslotte het eerste.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int[] getallen = new int[8];
for (int i = 0; i < getallen.Length; i++)
{
    Console.WriteLine($"Geef getal {i + 1}:");
    getallen[i] = int.Parse(Console.ReadLine());
}

for (int i = 1; i < getallen.Length; i++)
{
    Console.Write($"{getallen[i]} ");
}
Console.WriteLine(getallen[0]);
```
::::

3.	Lees 8 getallen in. Toon ze drie plaatsen naar achter verschoven: eerst de laatste drie getallen, en daarna de eerste vijf.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int[] getallen = new int[8];
for (int i = 0; i < getallen.Length; i++)
{
    Console.WriteLine($"Geef getal {i + 1}:");
    getallen[i] = int.Parse(Console.ReadLine());
}

for (int i = getallen.Length - 3; i < getallen.Length; i++)
{
    Console.Write($"{getallen[i]} ");
}
for (int i = 0; i < getallen.Length - 3; i++)
{
    Console.Write($"{getallen[i]} ");
}
Console.WriteLine();
```
::::

4.	Hetzelfde als 3, maar het aantal plaatsen is een variabele ``x`` die je vooraf instelt.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int[] getallen = new int[8];
for (int i = 0; i < getallen.Length; i++)
{
    Console.WriteLine($"Geef getal {i + 1}:");
    getallen[i] = int.Parse(Console.ReadLine());
}

int x = 3;
for (int i = 0; i < getallen.Length; i++)
{
    int index = (getallen.Length - x + i) % getallen.Length;
    Console.Write($"{getallen[index]} ");
}
Console.WriteLine();
```

Met ``%`` loopt de index na de laatste plaats vanzelf terug naar 0.
::::

5.	(PRO) Lees 12 getallen in. Toon ze in 4 rijen van 3, en sorteer de getallen binnen elke rij. Met de invoer ``4 5 8 7 5 2 6 8 7 1 3 2`` wordt dat:

```text
4 5 8
2 5 7
6 7 8
1 2 3
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
const int KOLOMMEN = 3;
int[] getallen = new int[12];
for (int i = 0; i < getallen.Length; i++)
{
    Console.WriteLine($"Geef getal {i + 1}:");
    getallen[i] = int.Parse(Console.ReadLine());
}

for (int start = 0; start < getallen.Length; start += KOLOMMEN)
{
    int[] rij = new int[KOLOMMEN];
    Array.Copy(getallen, start, rij, 0, KOLOMMEN);
    Array.Sort(rij);
    for (int j = 0; j < rij.Length; j++)
    {
        Console.Write($"{rij[j]} ");
    }
    Console.WriteLine();
}
```

Elke rij van drie gaat met ``Array.Copy`` naar een hulparray, en die sorteer je. Zo blijft de rest van de getallen onaangeroerd.
::::

6.	(PRO) Lees 12 getallen in. Toon ze opnieuw in 4 rijen van 3, maar sorteer nu elke **kolom** van klein naar groot. Met dezelfde invoer wordt dat:

```text
1 3 2
4 5 2
6 5 7
7 8 8
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
const int KOLOMMEN = 3;
int[] getallen = new int[12];
for (int i = 0; i < getallen.Length; i++)
{
    Console.WriteLine($"Geef getal {i + 1}:");
    getallen[i] = int.Parse(Console.ReadLine());
}

int aantalRijen = getallen.Length / KOLOMMEN;
for (int kolom = 0; kolom < KOLOMMEN; kolom++)
{
    int[] kolomGetallen = new int[aantalRijen];
    for (int rij = 0; rij < aantalRijen; rij++)
    {
        kolomGetallen[rij] = getallen[rij * KOLOMMEN + kolom];
    }
    Array.Sort(kolomGetallen);
    for (int rij = 0; rij < aantalRijen; rij++)
    {
        getallen[rij * KOLOMMEN + kolom] = kolomGetallen[rij];
    }
}

for (int i = 0; i < getallen.Length; i++)
{
    Console.Write($"{getallen[i]} ");
    if ((i + 1) % KOLOMMEN == 0)
    {
        Console.WriteLine();
    }
}
```

In rij ``rij`` en kolom ``kolom`` staat het getal met index ``rij * KOLOMMEN + kolom``. De eerste kolom bestaat dus uit de indexen 0, 3, 6 en 9.
::::


# Havenmanifest (*Final Essential*) {#h08-havenmanifest}

Je bent de havenmeester en beheert de lading van een schip. Er is plaats voor 3 containers.

Maak een programma dat:

1.  twee arrays aanmaakt: één voor de **containercodes** (tekst) en één voor de **gewichten** (kommagetallen, in ton);
2.  de gebruiker de gegevens van elke container laat invoeren;
3.  een **manifest** toont: alle containers met hun gewicht;
4.  het **totale gewicht** en het **gemiddelde gewicht** berekent en toont;
5.  de gebruiker een container laat opzoeken op zijn code. Vind je hem, toon dan zijn gewicht. Zo niet, meld dat hij nergens staat.

```text
Geef de code voor container 1:
>MAS88
Geef het gewicht voor container 1 (ton):
>12,5
Geef de code voor container 2:
>XEL11
Geef het gewicht voor container 2 (ton):
>4,2
Geef de code voor container 3:
>OPO99
Geef het gewicht voor container 3 (ton):
>20

--- Manifest ---
Container MAS88: 12,5 ton
Container XEL11: 4,2 ton
Container OPO99: 20 ton

Totaal gewicht: 36,7 ton
Gemiddeld gewicht: 12,23 ton

Welke container zoek je?
>XEL11
Container XEL11 weegt 4,2 ton.
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
const int AANTAL_CONTAINERS = 3;
string[] codes = new string[AANTAL_CONTAINERS];
double[] gewichten = new double[AANTAL_CONTAINERS];

for (int i = 0; i < codes.Length; i++)
{
    Console.WriteLine($"Geef de code voor container {i + 1}:");
    codes[i] = Console.ReadLine();
    Console.WriteLine($"Geef het gewicht voor container {i + 1} (ton):");
    gewichten[i] = double.Parse(Console.ReadLine());
}

Console.WriteLine();
Console.WriteLine("--- Manifest ---");
for (int i = 0; i < codes.Length; i++)
{
    Console.WriteLine($"Container {codes[i]}: {gewichten[i]} ton");
}

double totaal = 0;
for (int i = 0; i < gewichten.Length; i++)
{
    totaal += gewichten[i];
}
Console.WriteLine();
Console.WriteLine($"Totaal gewicht: {totaal} ton");
Console.WriteLine($"Gemiddeld gewicht: {Math.Round(totaal / gewichten.Length, 2)} ton");

Console.WriteLine();
Console.WriteLine("Welke container zoek je?");
string gezocht = Console.ReadLine();

int gevondenIndex = -1;
for (int i = 0; i < codes.Length && gevondenIndex == -1; i++)
{
    if (codes[i] == gezocht)
    {
        gevondenIndex = i;
    }
}

if (gevondenIndex == -1)
{
    Console.WriteLine($"Container {gezocht} staat nergens.");
}
else
{
    Console.WriteLine($"Container {gezocht} weegt {gewichten[gevondenIndex]} ton.");
}
```

Het zoeken kan ook met ``Array.IndexOf``, want je zoekt een exacte code:

```java
int gevondenIndex = Array.IndexOf(codes, gezocht);
```
::::

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
De codes en de gewichten hangen enkel samen doordat ze op dezelfde index staan. Voeg je een container toe en vergeet je zijn gewicht, of sorteer je één van de twee arrays, dan lopen ze uit de pas zonder dat er een foutmelding komt. In hoofdstuk 9 los je dat op met één object dat de code en het gewicht samen bewaart. Zie [Twee arrays die synchroon lopen](https://www.ziescherp.be/content/7_arrays/algoarrays.html#twee-arrays-die-synchroon-lopen).
::::


# Opstartparameters {#h08-opstartparameters}

Een bonusoefening over [Opstartparameters via args](https://www.ziescherp.be/content/7_arrays/argsopstart.html).

**Deel 1.** Schrijf een programma ``som`` dat alle getallen optelt die je als opstartparameters meegeeft. ``som 4 8 15`` toont ``De som is 27.`` Geeft de gebruiker geen enkel argument, dan toont het programma hoe het gebruikt wordt.

:::{.callout-tip}
Je hoeft niet telkens naar de command line. In Visual Studio geef je argumenten mee via het menu *Debug* > *[naam van je project] Debug Properties*, in het vak *Command line arguments*. Typ daar ``4 8 15`` en start je programma zoals altijd.
:::

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static void Main(string[] args)
{
    if (args.Length == 0)
    {
        Console.WriteLine("Gebruik: som getal1 getal2 ...");
    }
    else
    {
        int som = 0;
        for (int i = 0; i < args.Length; i++)
        {
            som += int.Parse(args[i]);
        }
        Console.WriteLine($"De som is {som}.");
    }
}
```

``args`` is een ``string[]``: ook ``4`` komt binnen als tekst, dus je moet elk element eerst omzetten.
::::

**Deel 2.** Het eerste argument is nu een bewerking: ``plus`` of ``maal``. De rest zijn de getallen. ``som maal 2 3 4`` toont ``Het resultaat is 24.`` Zijn er minder dan twee argumenten, of is de bewerking onbekend, toon dan hoe het programma gebruikt wordt.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static void Main(string[] args)
{
    if (args.Length >= 2 && (args[0] == "plus" || args[0] == "maal"))
    {
        int resultaat = int.Parse(args[1]);
        for (int i = 2; i < args.Length; i++)
        {
            if (args[0] == "plus")
            {
                resultaat += int.Parse(args[i]);
            }
            else
            {
                resultaat *= int.Parse(args[i]);
            }
        }
        Console.WriteLine($"Het resultaat is {resultaat}.");
    }
    else
    {
        Console.WriteLine("Gebruik: som plus|maal getal1 getal2 ...");
    }
}
```

De volgorde in de ``if`` telt: eerst ``args.Length >= 2``, dan pas ``args[0]``. Is er geen enkel argument, dan stopt ``&&`` al na het eerste deel, en wordt ``args[0]`` nooit gelezen.
::::
