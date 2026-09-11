<!--# Oefeningen week 1-->

::: {.vooraf}
- Vanaf dit hoofdstuk staan er meer oefeningen dan je in één labo kan afwerken. Kies zelf, en sla over wat je al zeker kan.
- Deze week heb je telkens één lus nodig. Geneste lussen komen in week 2.
- Tenzij de opgave iets anders zegt, kies je zelf je lus. Weet je vooraf hoe vaak de lus moet draaien, dan is een ``for`` de beste keuze. Weet je dat niet, dan kies je een ``while`` of een ``do while`` (weet je nog het verschil?).
- [Let op]{.let-op} ``continue`` mag niet, en ``break`` enkel in een ``switch`` of bij zoek-en-stop (zie het [boeteblad](https://www.ziescherp.be/content/B_appendix/boete.html#boete-goto)). In deze oefeningen heb je geen van beide nodig: de reden om te stoppen hoort in de lusvoorwaarde.
- Staat er *n* in een opgave, dan is dat een getal dat je bij de start aan de gebruiker vraagt.
- In de voorbeelduitvoer begint gebruikersinvoer met ``>``.
:::

<!--# Oefeningen week 1-->




# Opwarmers 1 (*Essential*) {#h06-opwarmers-1}

Zeven korte oefeningen met een ``for``. Vraag telkens eerst *n* aan de gebruiker. In de oplossingen staat die vraag er niet bij, enkel de lus.

* Toon alle natuurlijke getallen van 1 tot en met *n*. (bv. 1 2 3 4 5 6)

::::{.callout-caution collapse="true" title="Oplossing"}
```java
for (int i = 1; i <= n; i++)
{
    Console.Write($"{i} ");
}
Console.WriteLine();
```
::::

* Toon alle natuurlijke getallen van *n* tot en met 1. (bv. 6 5 4 3 2 1)

::::{.callout-caution collapse="true" title="Oplossing"}
```java
for (int i = n; i >= 1; i--)
{
    Console.Write($"{i} ");
}
Console.WriteLine();
```
::::

* Toon alle even getallen van 1 tot en met 100. (2 4 6 ... 100)

::::{.callout-caution collapse="true" title="Oplossing"}
```java
for (int i = 2; i <= 100; i += 2)
{
    Console.Write($"{i} ");
}
Console.WriteLine();
```
::::

* Toon alle oneven getallen van 1 tot en met 100. (1 3 5 ... 99)

::::{.callout-caution collapse="true" title="Oplossing"}
```java
for (int i = 1; i <= 100; i += 2)
{
    Console.Write($"{i} ");
}
Console.WriteLine();
```
::::

* Toon de som van alle getallen van 1 tot en met *n* (dus 1 + 2 + 3 + ... + *n*).

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int som = 0;
for (int i = 1; i <= n; i++)
{
    som += i;
}
Console.WriteLine($"De som van 1 tot en met {n} is {som}.");
```
::::

* Toon de som van alle even getallen van 1 tot en met *n*. Typt de gebruiker 7, dan verschijnt er 12 (2 + 4 + 6).

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int som = 0;
for (int i = 2; i <= n; i += 2)
{
    som += i;
}
Console.WriteLine($"De som van de even getallen tot en met {n} is {som}.");
```
::::

* Toon de som van alle oneven getallen van 1 tot en met *n*.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int som = 0;
for (int i = 1; i <= n; i += 2)
{
    som += i;
}
Console.WriteLine($"De som van de oneven getallen tot en met {n} is {som}.");
```
::::

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
* "Tot en met *n*" betekent ``i <= n``. Met ``i < n`` mis je de laatste waarde: een *off-by-one*-fout, dé klassieker bij loops. Twijfel je, test dan met een kleine *n* zoals 3 en tel na.
* Een som maak je aan **vóór** de lus. Binnen de lus zou ze elke ronde terug op 0 springen.
* Bij aftellen draai je ook de test om: ``i >= 1``. Met ``i <= 1`` start de lus nooit.
::::


# Trace de teller (*Essential*) {#h06-trace-de-teller}

Voer onderstaande stukjes code nog niet uit. Maak voor stukje 1, 2 en 3 eerst op papier een tabel zoals in [While](https://www.ziescherp.be/content/5_herhalingen/1_while_dowhile.html): de waarde van de teller bij de test, de uitkomst van de test, en wat er op het scherm komt. Voor stukje 4, 5 en 6 volstaat het om op te schrijven wat er verschijnt.

**1.**

```java
int teller = 0;
while (teller < 4)
{
    teller++;
    Console.Write(teller + " ");
}
```

**2.**

```java
int i = 5;
do
{
    i--;
    Console.Write(i + " ");
} while (i > 2);
```

**3.**

```java
for (int j = 20; j > 0; j -= 4)
{
    Console.Write(j + " ");
}
```

**4.**

```java
for (int k = 1; k <= 3; k++)
{
    int som = 0;
    som += k;
    Console.Write(som + " ");
}
```

**5.**

```java
int rij = 0;
int kolom = 0;
while (rij < 3)
{
    rij++;
    while (kolom < 3)
    {
        kolom++;
        Console.Write("*");
    }
    Console.WriteLine("|");
}
```

**6.** Hoeveel keer verschijnt ``Hallo``?

```java
for (int a = 0; a < 4; a++)
{
    for (int b = 0; b < a; b++)
    {
        Console.Write("Hallo ");
    }
}
```

Voer daarna elk stukje uit en vergelijk met wat je opschreef. Klopt het niet, zoek dan eerst zelf waar je redenering fout liep.

::::{.callout-caution collapse="true" title="Oplossing"}

**1.** ``1 2 3 4``

| ``teller`` bij de test | ``teller < 4`` | Op het scherm |
|:---:|:---:|:---:|
| 0 | ``true`` | 1 |
| 1 | ``true`` | 2 |
| 2 | ``true`` | 3 |
| 3 | ``true`` | 4 |
| 4 | ``false`` | niets meer |

De teller wordt verhoogd vóór hij getoond wordt. Daarom verschijnt 0 nooit en 4 wel.

**2.** ``4 3 2``. Een ``do while`` test pas achteraan. Na de derde ronde is ``i`` gelijk aan 2, en ``2 > 2`` is ``false``.

**3.** ``20 16 12 8 4``. Daarna wordt ``j`` gelijk aan 0, en ``0 > 0`` is ``false``.

**4.** ``1 2 3``. ``som`` wordt binnen de lus aangemaakt, en dus bij elke ronde opnieuw op 0 gezet. Er wordt nooit iets opgeteld.

**5.**

```text
***|
|
|
```

De reset ``kolom = 0;`` ontbreekt. Na de eerste rij blijft ``kolom`` op 3 staan, dus de binnenste lus doet niets meer. De buitenste lus draait wel drie keer.

**6.** 6 keer. De binnenste lus hangt af van ``a``: ze draait 0, 1, 2 en 3 keer. Hier mag je niet vermenigvuldigen (4 x 4), je telt ronde per ronde op.

Meer uitleg in [Scope van variabelen in loops](https://www.ziescherp.be/content/5_herhalingen/1_while_dowhile.html#scope-van-variabelen-in-loops) en [Als de inner loop van de outer afhangt](https://www.ziescherp.be/content/5_herhalingen/3_nesting.html#als-de-inner-loop-van-de-outer-afhangt).
::::


# Tafels van vermenigvuldigen 1 {#h06-tafels-van-vermenigvuldigen-1}
Gebruik de kracht van loops om pijlsnel de tafel van vermenigvuldigen van een getal naar keuze op het scherm te tonen: bijvoorbeeld 1 x 7, 2 x 7, tot en met 10 x 7.

```text
Van welk getal wil je de tafel?
>7
1 x 7 = 7
2 x 7 = 14
...
10 x 7 = 70
```

::::{.callout-caution collapse="true" title="Oplossing"}
Je weet vooraf dat de lus 10 keer moet draaien, dus is dit een ``for``:

```java
Console.WriteLine("Van welk getal wil je de tafel?");
int getal = int.Parse(Console.ReadLine());
for (int i = 1; i <= 10; i++)
{
    Console.WriteLine($"{i} x {getal} = {i * getal}");
}
```
::::


# Euler project (*Essential*) {#h06-euler-project}
Maak volgende opdracht, naar een opgave van [projecteuler.net](https://projecteuler.net):

>Als we alle natuurlijke getallen van 0 tot en met 10 oplijsten die een veelvoud van 3 of 5 zijn, dan krijgen we de getallen 3, 5, 6, 9 en 10. De som van deze 5 getallen is 33.

Maak nu een programma dat de som toont van alle veelvouden van 3 of 5 van 0 tot en met 1000. Dat moet 234168 geven.

:::{.callout-tip}
De modulo-operator (``%``) is je grote held hier. Een getal is een veelvoud van x als ``getal % x`` 0 als resultaat geeft.
:::

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int som = 0;
for (int i = 0; i <= 1000; i++)
{
    if (i % 3 == 0 || i % 5 == 0)
    {
        som += i;
    }
}
Console.WriteLine($"De som is {som}.");
```

Op projecteuler.net zelf staat de opgave iets anders: daar gaat het om de getallen *onder* 1000. Met ``i < 1000`` krijg je hun antwoord, 233168. Het verschil is precies 1000.
::::


# Kies de loop {#h06-kies-de-loop}

Zonder code dit keer. Welke lus kies je in onderstaande situaties: ``for``, ``while`` of ``do while``? Schrijf bij elke situatie één zin waarom.

1. Een wachtwoord vragen tot de gebruiker het juiste intypt.
2. De 12 maanden van het jaar overlopen en elk op het scherm tonen.
3. Aftellen van 10 tot 0 voor een raket vertrekt.
4. Een dobbelsteen gooien tot er een zes valt.
5. Een menu tonen, en het blijven tonen tot de gebruiker ``q`` kiest.
6. Getallen optellen die de gebruiker intypt, tot hij 0 typt.
7. Alle getallen van 1 tot en met *n* tonen die deelbaar zijn door 7.
8. Een spaarrekening krijgt elk jaar 3% intrest. Na hoeveel jaar is het bedrag verdubbeld?

::::{.callout-caution collapse="true" title="Oplossing"}

| | Lus | Waarom |
|---|---|---|
| 1 | ``do while`` | Je weet niet hoe vaak, en je moet minstens één keer vragen. |
| 2 | ``for`` | Het zijn er altijd 12. |
| 3 | ``for`` | Van 10 tot 0 is een vast aantal. |
| 4 | ``do while`` | Je weet niet hoe vaak, en er valt minstens één worp. |
| 5 | ``do while`` | Het menu verschijnt minstens één keer. |
| 6 | ``do while`` of ``while`` | Je weet niet hoeveel getallen er komen. Met een ``while`` lees je het eerste getal vóór de lus in. |
| 7 | ``for`` | Je overloopt 1 tot en met *n*, dat ligt vast zodra je *n* kent. |
| 8 | ``while`` | Je weet niet hoeveel jaar. Zolang het bedrag nog niet verdubbeld is, tel je een jaar bij. |

Soms kan het ook met een andere lus. Wat telt, is je reden: weet je vooraf hoe vaak? Moet de code minstens één keer lopen? Zie ook het schema in [Zie verder](https://www.ziescherp.be/content/5_herhalingen/zieverder.html).
::::


# Afsluitwaarden {#h06-opwarmers-van-opwarmers}

Acht oefeningen waarin de gebruiker waarden blijft invoeren tot hij een afsluitwaarde typt.

:::{.callout-tip}
Met een afsluitwaarde bedoelen we een waarde die de gebruiker intypt om te stoppen. Zolang de gebruiker die afsluitwaarde NIET intypt, blijft het programma om nieuwe waarden vragen. De afsluitwaarde zelf telt niet mee.
:::

* Lees getallen in tot de gebruiker 0 typt. Toon daarna de som.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int som = 0;
int getal;
do
{
    Console.WriteLine("Geef een getal (0 om te stoppen):");
    getal = int.Parse(Console.ReadLine());
    som += getal;
} while (getal != 0);
Console.WriteLine($"De som is {som}.");
```

De 0 wordt hier ook opgeteld, maar dat verandert niets aan de som.
::::

* Lees getallen in tot de gebruiker 0 typt. Toon hoeveel getallen strikt positief waren, en hoeveel strikt negatief.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int aantalPositief = 0;
int aantalNegatief = 0;
int getal;
do
{
    Console.WriteLine("Geef een getal (0 om te stoppen):");
    getal = int.Parse(Console.ReadLine());
    if (getal > 0)
    {
        aantalPositief++;
    }
    else if (getal < 0)
    {
        aantalNegatief++;
    }
} while (getal != 0);
Console.WriteLine($"Positief: {aantalPositief}, negatief: {aantalNegatief}");
```
::::

* Lees getallen in tot de gebruiker -32768 typt. Toon hoeveel getallen strikt positief waren, hoeveel strikt negatief, en hoeveel gelijk aan nul.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
const int STOP = -32768;
int aantalPositief = 0;
int aantalNegatief = 0;
int aantalNul = 0;
int getal;
do
{
    Console.WriteLine($"Geef een getal ({STOP} om te stoppen):");
    getal = int.Parse(Console.ReadLine());
    if (getal != STOP)
    {
        if (getal > 0)
        {
            aantalPositief++;
        }
        else if (getal < 0)
        {
            aantalNegatief++;
        }
        else
        {
            aantalNul++;
        }
    }
} while (getal != STOP);
Console.WriteLine($"Positief: {aantalPositief}, negatief: {aantalNegatief}, nul: {aantalNul}");
```

De afsluitwaarde is zelf ook negatief. Daarom test je eerst of het de afsluitwaarde is, en tel je pas daarna.
::::

* Lees getallen in tot de gebruiker 0 typt. Toon het product van de getallen.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
long product = 1;
int getal;
do
{
    Console.WriteLine("Geef een getal (0 om te stoppen):");
    getal = int.Parse(Console.ReadLine());
    if (getal != 0)
    {
        product *= getal;
    }
} while (getal != 0);
Console.WriteLine($"Het product is {product}.");
```

Bij de som mocht de 0 mee, hier niet: vermenigvuldigen met 0 maakt alles 0. Het product start op 1, niet op 0.
::::

* Lees positieve getallen in tot de gebruiker een negatief getal typt. Toon het (afgekapte) gemiddelde van de positieve getallen.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int som = 0;
int aantal = 0;
int getal;
do
{
    Console.WriteLine("Geef een positief getal (negatief om te stoppen):");
    getal = int.Parse(Console.ReadLine());
    if (getal >= 0)
    {
        som += getal;
        aantal++;
    }
} while (getal >= 0);

if (aantal > 0)
{
    Console.WriteLine($"Het gemiddelde is {som / aantal}.");
}
else
{
    Console.WriteLine("Je gaf geen getallen in.");
}
```

Typt de gebruiker meteen een negatief getal, dan is ``aantal`` 0. Zonder de ``if`` crasht je programma dan op een deling door nul.
::::

* Lees getallen in tot de gebruiker -32768 typt. Toon het kleinste getal en hoe vaak het voorkwam. Typt de gebruiker 3, 2, 1, 2, 3, 1, 4, 5, 1, 2 en dan -32768, dan is het kleinste getal 1, en het kwam 3 keer voor.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
const int STOP = -32768;
int kleinste = int.MaxValue;
int aantalKeer = 0;
int getal;
do
{
    Console.WriteLine($"Geef een getal ({STOP} om te stoppen):");
    getal = int.Parse(Console.ReadLine());
    if (getal != STOP)
    {
        if (getal < kleinste)
        {
            kleinste = getal;
            aantalKeer = 1;
        }
        else if (getal == kleinste)
        {
            aantalKeer++;
        }
    }
} while (getal != STOP);
Console.WriteLine($"Het kleinste getal is {kleinste}. Het kwam {aantalKeer} keer voor.");
```

``kleinste`` start op het grootste ``int`` dat bestaat. Zo is het eerste getal dat de gebruiker intypt altijd kleiner. Start je op 0, dan vind je in een reeks positieve getallen nooit een kleinste.
::::

* Een reeks getallen in stijgende volgorde wordt ingelezen. De invoer stopt zodra er een getal kleiner is dan het vorige.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int vorige = int.MinValue;
bool sorteerfout = false;
do
{
    Console.WriteLine("Geef een getal:");
    int getal = int.Parse(Console.ReadLine());
    if (getal < vorige)
    {
        sorteerfout = true;
    }
    else
    {
        vorige = getal;
    }
} while (!sorteerfout);
Console.WriteLine("Sorteerfout! De invoer stopt.");
```

Hier is er geen afsluitwaarde: de reden om te stoppen is een ``bool``, en die staat in de lusvoorwaarde.
::::

* Een reeks getallen wordt ingelezen. De invoer stopt wanneer er twee keer na elkaar een nul ingelezen wordt. Toon daarna het gemiddelde van de getallen. De twee laatste nullen tellen niet mee, een losse nul midden in de reeks wel.

```text
Geef een getal:
>5
Geef een getal:
>0
Geef een getal:
>3
Geef een getal:
>0
Geef een getal:
>0
Het gemiddelde is 2,67.
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int som = 0;
int aantal = 0;
bool vorigeWasNul = false;
bool tweeNullen = false;
do
{
    Console.WriteLine("Geef een getal:");
    int getal = int.Parse(Console.ReadLine());
    som += getal;
    aantal++;
    tweeNullen = getal == 0 && vorigeWasNul;
    vorigeWasNul = getal == 0;
} while (!tweeNullen);

aantal -= 2;
if (aantal > 0)
{
    Console.WriteLine($"Het gemiddelde is {(double)som / aantal:F2}.");
}
else
{
    Console.WriteLine("Je gaf geen getallen in.");
}
```

Elke invoer telt mee. Pas op het einde trek je de twee slotnullen af van het aantal; aan de som veranderen nullen niets. De volgorde in de lus telt: je test eerst of dit de tweede nul na elkaar is, en pas daarna onthoud je of deze invoer een nul was.
::::

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
* Bijna al deze oefeningen zijn een ``do while``: je moet eerst iets inlezen voor je kan testen of het de afsluitwaarde is. Met een ``while`` moet je de vraag dan twee keer in je code zetten, of een kunstmatige beginwaarde verzinnen. Zie [Waarom hier een do while en geen while?](https://www.ziescherp.be/content/5_herhalingen/1_while_dowhile.html#waarom-hier-een-do-while-en-geen-while)
* De variabele in de lusvoorwaarde (``getal``) maak je aan **vóór** de ``do``. Anders bestaat ze niet meer bij de test achteraan.
* Test altijd met een gebruiker die meteen de afsluitwaarde typt. Crasht je programma dan, of toont het onzin?
::::


# Lijnen in volgorde {#h06-lijnen-in-volgorde}

Deze lijnen code horen bij een programma dat getallen inleest tot de gebruiker 0 typt, en dan het gemiddelde toont. Ze zijn door elkaar geraakt, en de accolades zijn weg. Bovendien is er één lijn bij geslopen die er niet in thuishoort.

```java
som += getal;
Console.WriteLine($"Het gemiddelde is {(double)som / aantal}");
int getal = int.Parse(Console.ReadLine());
while (getal != 0)
int aantal = 0;
break;
Console.WriteLine("Geef een getal (0 om te stoppen):");
getal = int.Parse(Console.ReadLine());
if (aantal > 0)
aantal++;
int som = 0;
Console.WriteLine("Geef een getal (0 om te stoppen):");
```

Zet de lijnen in de juiste volgorde, met accolades erbij, zodat het programma dit toont:

```text
Geef een getal (0 om te stoppen):
>4
Geef een getal (0 om te stoppen):
>5
Geef een getal (0 om te stoppen):
>0
Het gemiddelde is 4,5
```

Welke lijn is de indringer, en waarom heb je ze niet nodig? Doe het eerst op papier en test daarna in Visual Studio, ook eens met meteen een 0.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int som = 0;
int aantal = 0;
Console.WriteLine("Geef een getal (0 om te stoppen):");
int getal = int.Parse(Console.ReadLine());
while (getal != 0)
{
    som += getal;
    aantal++;
    Console.WriteLine("Geef een getal (0 om te stoppen):");
    getal = int.Parse(Console.ReadLine());
}
if (aantal > 0)
{
    Console.WriteLine($"Het gemiddelde is {(double)som / aantal}");
}
```

De indringer is ``break;``. De lusvoorwaarde ``getal != 0`` stopt de lus al zodra de gebruiker 0 typt. Een ``break`` is hier overbodig, en volgens het boeteblad ook niet toegelaten.

Waarom staat de vraag er twee keer in? Het is een ``while``: de test staat vooraan, dus het eerste getal moet vóór de lus ingelezen worden. Op het einde van elke ronde lees je het volgende. Met een ``do while`` kan het ook met één vraag, zoals in Afsluitwaarden.
::::


# Zonder break (*Essential*) {#h06-zonder-break}

Een programma dat getallen optelt tot de gebruiker 0 typt: stagiair Steven liet het schrijven door een A.I. Negatieve getallen tellen niet mee. De code werkt:

```java
int som = 0;
while (true)
{
    Console.WriteLine("Geef een getal (0 om te stoppen):");
    int getal = int.Parse(Console.ReadLine());
    if (getal == 0)
    {
        break;
    }
    if (getal < 0)
    {
        Console.WriteLine("Negatieve getallen tellen niet mee.");
        continue;
    }
    som += getal;
}
Console.WriteLine($"De som is {som}.");
```

Toch kost ze in jaar 1 punten: een ``while (true)`` waar je enkel met ``break`` uit geraakt, en een ``continue`` (zie het [boeteblad](https://www.ziescherp.be/content/B_appendix/boete.html#boete-goto)). Wie deze code leest, ziet in de lusvoorwaarde niet wanneer de lus stopt.

Herschrijf de code zonder ``break`` en zonder ``continue``, met exact dezelfde uitvoer. Test beide versies met 5, -3, 2 en 0: allebei tonen ze ``De som is 7.``

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int som = 0;
int getal;
do
{
    Console.WriteLine("Geef een getal (0 om te stoppen):");
    getal = int.Parse(Console.ReadLine());
    if (getal < 0)
    {
        Console.WriteLine("Negatieve getallen tellen niet mee.");
    }
    else
    {
        som += getal;
    }
} while (getal != 0);
Console.WriteLine($"De som is {som}.");
```

* De ``break`` wordt de lusvoorwaarde ``getal != 0``. Omdat die achteraan staat, maak je ``getal`` vóór de ``do`` aan.
* De ``continue`` wordt een ``else``: je telt enkel op wat niet negatief is. De 0 wordt ook opgeteld, maar dat verandert niets.
::::

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
Code van een A.I. staat vaak vol ``break`` en ``continue``: in veel talen en projecten is dat gewoon. Het boeteblad verbiedt ze niet omdat ze fout zijn, maar omdat je eerst moet leren een lus te schrijven die vanzelf stopt. Kan je de reden om te stoppen in één zin zeggen, dan hoort die zin in de lusvoorwaarde.
::::


# Stevens menulus (*Essential*) {#h06-stevens-menulus}

Steven moet een menu schrijven dat blijft vragen tot de gebruiker ``a``, ``b`` of ``c`` typt. Dit leverde zijn A.I.:

```java
string keuze = "";
while (keuze != "a" || keuze != "b" || keuze != "c");
{
    Console.WriteLine("Kies a, b of c:");
    keuze = Console.ReadLine();
}
Console.WriteLine($"Je koos {keuze}.");
```

**Deel 1.** Voer de code nog niet uit. Wat verwacht je dat er gebeurt als je ze start? Er zitten twee fouten in. Zoek ze op papier, en voer de code pas daarna uit om je voorspelling te controleren. (Stop het programma met de rode stop-knop in Visual Studio.)

::::{.callout-caution collapse="true" title="Oplossing"}
Het programma toont niets en blijft hangen. Het vraagt zelfs nooit iets.

1. De puntkomma achter ``while (...)`` sluit de lus af met een leeg codeblok. De lus zelf doet dus niets, en het blok met de vraag eronder hoort er niet meer bij. Visual Studio waarschuwt je met ``CS0642 Possible mistaken empty statement``.
2. ``keuze != "a" || keuze != "b" || keuze != "c"`` is altijd waar. Typt de gebruiker ``a``, dan is ``keuze != "b"`` waar, en bij een OF volstaat één ware operand. Er bestaat geen tekst die tegelijk ``a``, ``b`` en ``c`` is.

Samen geven ze een lus die eeuwig niets doet. Haal je enkel de puntkomma weg, dan vraagt het programma wel, maar blijft het vragen, wat je ook typt.
::::

**Deel 2.** Steven ziet in dat de vraag minstens één keer gesteld moet worden, en herschrijft het als ``do while``. Hij haalt ook de puntkomma weg en draait de test om met De Morgan:

```java
do
{
    Console.WriteLine("Kies a, b of c:");
    string keuze = Console.ReadLine();
} while (keuze != "a" && keuze != "b" && keuze != "c");
Console.WriteLine($"Je koos {keuze}.");
```

Nu compileert het niet. Lees de foutmelding en herstel de code.

::::{.callout-caution collapse="true" title="Oplossing"}
Visual Studio meldt ``CS0103 The name 'keuze' does not exist in the current context``, bij de test en bij de laatste ``WriteLine``. ``keuze`` wordt binnen de accolades van de ``do`` aangemaakt, en de test achteraan ligt al buiten die accolades. Maak ``keuze`` aan vóór de lus:

```java
string keuze;
do
{
    Console.WriteLine("Kies a, b of c:");
    keuze = Console.ReadLine();
} while (keuze != "a" && keuze != "b" && keuze != "c");
Console.WriteLine($"Je koos {keuze}.");
```

De test zegt nu: blijf vragen zolang het geen ``a`` is **en** geen ``b`` **en** geen ``c``. Dat is ``!(keuze == "a" || keuze == "b" || keuze == "c")``, herschreven met De Morgan.
::::

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
* Een lusvoorwaarde zegt wanneer je **doorgaat**, niet wanneer je stopt. Bedenk eerst wanneer de invoer goed is, en draai dat daarna om. Zie [Foute input van gebruiker met loops verwerken](https://www.ziescherp.be/content/5_herhalingen/1_while_dowhile.html#foute-input-van-gebruiker-met-loops-verwerken).
* Een puntkomma hoort enkel achteraan een ``do while``, nooit achter ``if (...)``, ``while (...)`` of ``for (...)``.
* De test van een ``do while`` staat buiten de accolades. Wat je erin test, moet je vóór de ``do`` aanmaken.
::::


# Boekhouder (*Essential*) {#h06-boekhouder}

Maak een boekhoudprogramma. De gebruiker typt positieve en negatieve getallen, telkens gevolgd door enter. Het programma stopt met vragen wanneer de gebruiker ``q`` typt. Na elke invoer, en op het einde nog eens, toont het:

* De balans: de som van alle ingevoerde getallen. Typte de gebruiker 4, -10 en 8, dan staat de balans op 2.
* De som van de negatieve getallen. Bij 4, -10, 8 en -6 is dat -16.
* De som van de positieve getallen. Bij 4, -10, 8 en -6 is dat 12.
* Het gemiddelde van alle ingevoerde getallen, als kommagetal.

```text
Geef een getal (q om te stoppen):
>4
Balans: 4, positief: 4, negatief: 0, gemiddelde: 4
Geef een getal (q om te stoppen):
>-10
Balans: -6, positief: 4, negatief: -10, gemiddelde: -3
Geef een getal (q om te stoppen):
>8
Balans: 2, positief: 12, negatief: -10, gemiddelde: 0,6666666666666666
Geef een getal (q om te stoppen):
>q

EINDRAPPORT
Balans: 2
Som van de positieve getallen: 12
Som van de negatieve getallen: -10
Gemiddelde: 0,6666666666666666
```

Test ook wat er gebeurt als de gebruiker meteen ``q`` typt.

::::{.callout-caution collapse="true" title="Oplossing"}

[Uitleg via filmpje](https://ap.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=72f4f97f-5baa-4f9f-8985-b0c000f4f1ce) (de code in het filmpje wijkt licht af)

```java
int somPositief = 0;
int somNegatief = 0;
int balans = 0;
int aantal = 0;
string invoer;
do
{
    Console.WriteLine("Geef een getal (q om te stoppen):");
    invoer = Console.ReadLine();
    if (invoer != "q")
    {
        int getal = int.Parse(invoer);
        aantal++;
        balans += getal;
        if (getal > 0)
        {
            somPositief += getal;
        }
        else if (getal < 0)
        {
            somNegatief += getal;
        }
        Console.WriteLine($"Balans: {balans}, positief: {somPositief}, negatief: {somNegatief}, gemiddelde: {(double)balans / aantal}");
    }
} while (invoer != "q");

Console.WriteLine();
Console.WriteLine("EINDRAPPORT");
Console.WriteLine($"Balans: {balans}");
Console.WriteLine($"Som van de positieve getallen: {somPositief}");
Console.WriteLine($"Som van de negatieve getallen: {somNegatief}");
if (aantal > 0)
{
    Console.WriteLine($"Gemiddelde: {(double)balans / aantal}");
}
else
{
    Console.WriteLine("Je gaf geen getallen in, dus er is geen gemiddelde.");
}
```

* De invoer blijft eerst tekst, want ``q`` is geen getal. Pas als je weet dat het geen ``q`` is, zet je ze om.
* ``(double)balans / aantal``: zonder de cast is het een gehele deling, en wordt 0,666... gewoon 0.
* Typt de gebruiker meteen ``q``, dan is ``aantal`` 0. Zonder de ``if`` op het einde crasht je programma op een deling door nul.
::::


# Loops-a-volonté {#h06-loops-a-volonte}

Twaalf losse oefeningen om je lussen te drillen. *Beide grenzen zijn steeds inbegrepen!*

* Toon alle Unicode-tekens en hun waarde van 10 tot en met *n*. Tip: ``Convert.ToChar(65)`` geeft de hoofdletter ``A``. Sommige tekens, zeker de eerste, zijn onzichtbaar en tonen dus niets.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
Console.WriteLine("Tot en met welke waarde?");
int n = int.Parse(Console.ReadLine());
for (int i = 10; i <= n; i++)
{
    Console.WriteLine($"{i}: {Convert.ToChar(i)}");
}
```
::::

* Toon het alfabet van a tot en met z.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
for (char letter = 'a'; letter <= 'z'; letter++)
{
    Console.Write($"{letter} ");
}
Console.WriteLine();
```

Ook een ``char`` kan je ophogen met ``++``: intern is het een getal, zijn Unicode-waarde.
::::

* Vraag een getal en een macht, en toon het getal tot die macht. 2 en 4 geeft 16. ``Math.Pow`` mag niet: vermenigvuldig zelf, met een lus.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
Console.WriteLine("Getal?");
int grondtal = int.Parse(Console.ReadLine());
Console.WriteLine("Macht?");
int exponent = int.Parse(Console.ReadLine());

long resultaat = 1;
for (int i = 1; i <= exponent; i++)
{
    resultaat *= grondtal;
}
Console.WriteLine($"{grondtal} tot de macht {exponent} is {resultaat}.");
```
::::

* Toon alle delers van *n*: de getallen waardoor je *n* kan delen zonder rest. De delers van 100 zijn 1, 2, 4, 5, 10, 20, 25, 50 en 100.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
Console.WriteLine("Van welk getal wil je de delers?");
int getal = int.Parse(Console.ReadLine());
Console.Write($"De delers van {getal} zijn:");
for (int deler = 1; deler <= getal; deler++)
{
    if (getal % deler == 0)
    {
        Console.Write($" {deler}");
    }
}
Console.WriteLine();
```
::::

* Toon de eerste *n* getallen van de reeks van [Fibonacci](https://nl.wikipedia.org/wiki/Rij_van_Fibonacci): 0 1 1 2 3 5 8 13 ... Elk getal is de som van de twee vorige.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
Console.WriteLine("Hoeveel getallen?");
int n = int.Parse(Console.ReadLine());
long huidige = 0;
long volgende = 1;
for (int i = 1; i <= n; i++)
{
    Console.Write($"{huidige} ");
    long som = huidige + volgende;
    huidige = volgende;
    volgende = som;
}
Console.WriteLine();
```
::::

* Tel het aantal cijfers van een getal. 12348 heeft er 5.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
Console.WriteLine("Geef een getal:");
int getal = int.Parse(Console.ReadLine());
int rest = getal;
int aantalCijfers = 0;
do
{
    aantalCijfers++;
    rest /= 10;
} while (rest > 0);
Console.WriteLine($"{getal} heeft {aantalCijfers} cijfer(s).");
```

Elke deling door 10 haalt er een cijfer af. Met een ``do while`` telt ook 0 als één cijfer, zonder aparte ``if``.
::::

* Toon de som van de kwadraten van de even getallen van 50 tot en met 100.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int som = 0;
for (int i = 50; i <= 100; i += 2)
{
    som += i * i;
}
Console.WriteLine($"De som is {som}.");
```

Dat geeft 152100.
::::

* Lees 10 getallen in. Toon van de positieve getallen hoeveel er deelbaar waren door 2, hoeveel door 3 en hoeveel door 6.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int deelbaarDoor2 = 0;
int deelbaarDoor3 = 0;
int deelbaarDoor6 = 0;
for (int i = 1; i <= 10; i++)
{
    Console.WriteLine($"Geef getal {i} van 10:");
    int getal = int.Parse(Console.ReadLine());
    if (getal > 0)
    {
        if (getal % 2 == 0)
        {
            deelbaarDoor2++;
        }
        if (getal % 3 == 0)
        {
            deelbaarDoor3++;
        }
        if (getal % 6 == 0)
        {
            deelbaarDoor6++;
        }
    }
}
Console.WriteLine($"Deelbaar door 2: {deelbaarDoor2}, door 3: {deelbaarDoor3}, door 6: {deelbaarDoor6}");
```

Drie losse ``if``s en geen keten: een getal dat deelbaar is door 6, is ook deelbaar door 2 en door 3, en moet dus drie keer geteld worden.
::::

* Toon de som van de eerste 20 termen van deze reeksen:
    * 6 + 12 + 18 + 24 + ...
    * 1 + 2 + 4 + 8 + ...
    * 1 + 1/2 + 1/4 + 1/8 + ...
    * 1 + 1/3 + 1/5 + 1/7 + ...

::::{.callout-caution collapse="true" title="Oplossing"}
```java
double rekenkundig = 0;
double meetkundig = 0;
double halveringen = 0;
double oneven = 0;
for (int i = 1; i <= 20; i++)
{
    rekenkundig += 6 * i;
    meetkundig += Math.Pow(2, i - 1);
    halveringen += 1 / Math.Pow(2, i - 1);
    oneven += 1.0 / (2 * i - 1);
}
Console.WriteLine($"6 + 12 + 18 + ...: {rekenkundig}");
Console.WriteLine($"1 + 2 + 4 + ...: {meetkundig}");
Console.WriteLine($"1 + 1/2 + 1/4 + ...: {halveringen:F6}");
Console.WriteLine($"1 + 1/3 + 1/5 + ...: {oneven:F6}");
```

Schrijf per reeks eerst de i-de term uit met ``i`` erin. Let op ``1.0 / (2 * i - 1)``: met ``1 /`` is het een gehele deling, en is elke term na de eerste 0.
::::

* Toon alle getallen tot en met 100 die een veelvoud van 3 zijn én oneven.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
for (int i = 1; i <= 100; i++)
{
    if (i % 3 == 0 && i % 2 != 0)
    {
        Console.Write($"{i} ");
    }
}
Console.WriteLine();
```

Het kan ook zonder ``if``: begin bij 3 en tel telkens 6 bij (``i += 6``).
::::

* Toon de som van 9 + 99 + 999 + 9999 + 99999 + 999999, met een lus uiteraard.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
long som = 0;
long term = 9;
for (int i = 1; i <= 6; i++)
{
    som += term;
    term = term * 10 + 9;
}
Console.WriteLine($"De som is {som}.");
```
::::

* Toon de eerste *n* termen van de harmonische reeks, en daarna hun som. De laatste ``+`` mag je gewoon laten staan:

```text
Hoeveel termen?
>5
1/1 + 1/2 + 1/3 + 1/4 + 1/5 + 
Som = 2,283333
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
Console.WriteLine("Hoeveel termen?");
int n = int.Parse(Console.ReadLine());
double som = 0;
for (int i = 1; i <= n; i++)
{
    Console.Write($"1/{i} + ");
    som += 1.0 / i;
}
Console.WriteLine();
Console.WriteLine($"Som = {som:F6}");
```
::::


# RNA Transcriptie (*Essential*) {#h06-rna-transscriptie}

Bij transcriptie wordt DNA omgezet naar RNA. Schrijf een programma dat een DNA-string van 12 letters omzet naar de bijhorende RNA-string. De gebruiker typt telkens één letter (een nucleotide) en drukt op enter. Na 12 geldige letters stopt het programma en toont het beide strings.

De omzetting:

* G wordt C
* C wordt G
* T wordt A
* A wordt U

Typt de gebruiker ``ACGTGGTCTTAA``, dan is het resultaat ``UGCACCAGAAUU``.

Laat beide strings groeien met ``+=``. Typt de gebruiker een letter die niet bestaat, dan toon je een melding en vraag je opnieuw. Die letter telt niet mee.

```text
Geef een nucleotide (G, C, T of A):
>A
Geef een nucleotide (G, C, T of A):
>x
Onbekende letter. Probeer opnieuw.
Geef een nucleotide (G, C, T of A):
>C
...
DNA: ACGTGGTCTTAA
RNA: UGCACCAGAAUU
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
const int LENGTE = 12;
string dna = "";
string rna = "";
while (dna.Length < LENGTE)
{
    Console.WriteLine("Geef een nucleotide (G, C, T of A):");
    string letter = Console.ReadLine();
    switch (letter)
    {
        case "G":
            dna += "G";
            rna += "C";
            break;
        case "C":
            dna += "C";
            rna += "G";
            break;
        case "T":
            dna += "T";
            rna += "A";
            break;
        case "A":
            dna += "A";
            rna += "U";
            break;
        default:
            Console.WriteLine("Onbekende letter. Probeer opnieuw.");
            break;
    }
}
Console.WriteLine($"DNA: {dna}");
Console.WriteLine($"RNA: {rna}");
```

Een aparte teller heb je niet nodig: ``dna.Length`` telt de geldige letters al. Een foute letter voegt niets toe, dus de lus vraagt gewoon opnieuw.
::::


# De Casting Call (*Final Essentials*) {#h06-de-casting-call}

Jij bent de regisseur van de volgende grote Hollywood-blockbuster. Vandaag houd je een casting call om de hoofdrolspeler te vinden. Schrijf een programma dat dit auditieproces beheert.

1.  **Start de auditie**: het programma vraagt de **naam** van de kandidaat, en blijft dat doen tot de gebruiker als naam `STOP` intypt.
2.  **Beoordeling**:
    *   Vraag voor elke kandidaat een **auditiescore** (een geheel getal van 0 tot en met 10).
    *   Is de score **lager dan 7**? Toon: *"Helaas [Naam], je rol is uitgeknipt."*
    *   Is de score **7 of hoger**? Toon: *"Proficiat [Naam], je bent door naar de screentest!"*
3.  **De statistieken**:
    *   Houd bij **hoeveel** acteurs er door zijn naar de screentest.
    *   Houd bij wie de **beste auditie** van de dag had (de hoogste score). Onthoud zowel de naam als de score. Bij een gelijke score blijft de eerste kandidaat de beste.
4.  **De aftiteling**: na `STOP` toon je een samenvatting:
    *   Het aantal acteurs dat de screentest haalde.
    *   De naam en de score van de beste acteur van de dag.
    *   Kwam er niemand opdagen, dan toon je dat.

```text
Naam van de kandidaat (STOP om te eindigen):
>Leonardo
Auditiescore (0 tot en met 10):
>9
Proficiat Leonardo, je bent door naar de screentest!
Naam van de kandidaat (STOP om te eindigen):
>Meryl
Auditiescore (0 tot en met 10):
>6
Helaas Meryl, je rol is uitgeknipt.
Naam van de kandidaat (STOP om te eindigen):
>STOP

Aantal acteurs door naar de screentest: 1
De rol gaat waarschijnlijk naar Leonardo met een topscore van 9/10!
```

:::{.callout-tip}
Je hebt variabelen nodig die *buiten* je lus gemaakt worden om de beste naam en de hoogste score tot nu toe te onthouden. Bij elke nieuwe score die hoger is dan je huidige maximum, werk je ze allebei bij.
:::

::::{.callout-caution collapse="true" title="Oplossing"}
```java
const int GRENS = 7;
int aantalKandidaten = 0;
int aantalDoor = 0;
int hoogsteScore = -1;
string besteActeur = "";

Console.WriteLine("Naam van de kandidaat (STOP om te eindigen):");
string naam = Console.ReadLine();
while (naam != "STOP")
{
    Console.WriteLine("Auditiescore (0 tot en met 10):");
    int score = int.Parse(Console.ReadLine());
    aantalKandidaten++;

    if (score < GRENS)
    {
        Console.WriteLine($"Helaas {naam}, je rol is uitgeknipt.");
    }
    else
    {
        Console.WriteLine($"Proficiat {naam}, je bent door naar de screentest!");
        aantalDoor++;
    }

    if (score > hoogsteScore)
    {
        hoogsteScore = score;
        besteActeur = naam;
    }

    Console.WriteLine("Naam van de kandidaat (STOP om te eindigen):");
    naam = Console.ReadLine();
}

Console.WriteLine();
if (aantalKandidaten == 0)
{
    Console.WriteLine("Er kwam vandaag niemand opdagen.");
}
else
{
    Console.WriteLine($"Aantal acteurs door naar de screentest: {aantalDoor}");
    Console.WriteLine($"De rol gaat waarschijnlijk naar {besteActeur} met een topscore van {hoogsteScore}/10!");
}
```

* ``hoogsteScore`` start op -1 en niet op 0: ook een kandidaat met score 0 moet de beste kunnen zijn.
* Het is een ``while``, geen ``do while``: typt de eerste gebruiker meteen ``STOP``, dan mag er geen score gevraagd worden.
* ``>`` en niet ``>=``: bij een gelijke score blijft de eerste kandidaat de beste.
::::


# Schaak-elo met loop {#h06-schaak-elo-met-loop}

Een bonusoefening die verderbouwt op de Elo-oefeningen uit hoofdstuk 4 en 5.

Zorg ervoor dat je Elo-programma blijft werken:

1. De gebruiker geeft zijn eigen Elo-rating op.
2. Een lus vraagt telkens de rating van de tegenstander en daarna de uitslag: ``A`` (jij won), ``B`` (je tegenstander won) of ``D`` (draw, gelijkspel). Typt de gebruiker iets anders, dan telt het als een gelijkspel. Na elke partij verschijnt de nieuwe rating van de gebruiker.
3. Geeft de gebruiker een negatieve rating op voor zijn tegenstander, dan stopt de lus.

```text
Wat is je Elo-rating?
>1000
Rating van je tegenstander (negatief om te stoppen):
>1100
Wie won? A (jij), B (je tegenstander) of D (draw)
>A
Je nieuwe rating is 1006.
Rating van je volgende tegenstander (negatief om te stoppen):
>-1
Je eindigt met een rating van 1006.
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
const double K = 10;

Console.WriteLine("Wat is je Elo-rating?");
double rating = double.Parse(Console.ReadLine());
Console.WriteLine("Rating van je tegenstander (negatief om te stoppen):");
double ratingTegenstander = double.Parse(Console.ReadLine());

while (ratingTegenstander >= 0)
{
    double verwacht = 1 / (1 + Math.Pow(10, (ratingTegenstander - rating) / 400));

    Console.WriteLine("Wie won? A (jij), B (je tegenstander) of D (draw)");
    string uitslag = Console.ReadLine();
    double score = 0.5;
    if (uitslag == "A")
    {
        score = 1;
    }
    else if (uitslag == "B")
    {
        score = 0;
    }
    else if (uitslag != "D")
    {
        Console.WriteLine("Onbekende uitslag. Ik reken het als een gelijkspel.");
    }

    rating = rating + K * (score - verwacht);
    Console.WriteLine($"Je nieuwe rating is {Math.Round(rating)}.");

    Console.WriteLine("Rating van je volgende tegenstander (negatief om te stoppen):");
    ratingTegenstander = double.Parse(Console.ReadLine());
}
Console.WriteLine($"Je eindigt met een rating van {Math.Round(rating)}.");
```

Enkel de rating van de gebruiker verandert, dus die van de tegenstander hoef je niet te berekenen. De afronding gebeurt enkel bij het tonen: ``rating`` zelf rekent verder met alle cijfers na de komma.
::::


# Armstrong nummer (PRO) {#h06-armstrong-nummer}
Een getal is een *narcistisch getal* of *armstronggetal* als het de som is van zijn eigen cijfers, elk tot de macht verheven van het aantal cijfers.

* 9 is een Armstrong-nummer, want 9 = 9^1 = 9
* 10 is geen Armstrong-nummer, want 10 != 1^2 + 0^2 = 1
* 153 is een Armstrong-nummer, want 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
* 154 is geen Armstrong-nummer, want 154 != 1^3 + 5^3 + 4^3 = 1 + 125 + 64 = 190

Schrijf een programma dat de gebruiker een getal vraagt en toont of het een Armstrong-nummer is.

:::{.callout-tip}
Je zou het getal als tekst kunnen opsplitsen in losse tekens, maar volg de wiskundige weg: zo leer je werken met lussen en rekenen.

1. Tel eerst hoeveel cijfers het getal heeft, zoals in Loops-a-volonté.
2. Pel daarna de cijfers er van rechts af. Neem je 4563, dan geeft ``4563 % 10`` het laatste cijfer, **3**, en ``4563 / 10`` geeft 456: de rest van het getal. Herhaal tot er niets meer overblijft.
:::

::::{.callout-caution collapse="true" title="Oplossing"}
```java
Console.WriteLine("Geef een getal:");
int getal = int.Parse(Console.ReadLine());

int aantalCijfers = 0;
int rest = getal;
do
{
    aantalCijfers++;
    rest /= 10;
} while (rest > 0);

int som = 0;
rest = getal;
while (rest > 0)
{
    int cijfer = rest % 10;
    som += (int)Math.Pow(cijfer, aantalCijfers);
    rest /= 10;
}

if (som == getal)
{
    Console.WriteLine($"{getal} is een Armstrong-nummer.");
}
else
{
    Console.WriteLine($"{getal} is geen Armstrong-nummer.");
}
```

Je pelt een kopie af (``rest``), niet ``getal`` zelf. Anders heb je op het einde niets meer om de som mee te vergelijken. Andere Armstrong-nummers om te testen: 370, 371, 407 en 9474.
::::
