## Geneste loops

Wanneer we 1 of meerdere loops in een andere loop plaatsen dan spreken we over **geneste loops** (*nested loops*). Geneste loops komen vaak voor, maar zijn wel een ander paar mouwen wanneer je deze zaken wilt debuggen en correct schrijven.

Het model dat je hierbij het best voor ogen houdt is dat van **rijen en kolommen**. De buitenste loop overloopt de rijen, de binnenste de kolommen binnen zo'n rij. Alles wat een raster vormt schrijf je op die manier: een maaltafel, een spelbord, een kalender, de pixels van een afbeelding. In hoofdstuk 8 kom je tweedimensionale arrays tegen, en dan heb je deze constructie sowieso nodig.

![Voorbeeld van geneste loops.](../assets/3_loops/nesting.png)<!--{width=70%}-->

We spreken steeds over de **outer loop** als de omhullende of "grootste" loop. Waarbij de binnenste loop de **inner loop** is. 


Volgende code toont bijvoorbeeld 2 loops die genest werden:

```java
int tellerA = 0;
int tellerB = 0;

while(tellerA < 3 ) //outer loop
{
    tellerA++;
    tellerB = 0;
    while(tellerB < 5)
    {
        tellerB++;
        Console.WriteLine($"A:{tellerA}, B: {tellerB}");
    }
}
```

<!-- \newpage -->



De uitvoer hiervan zal als volgt zijn:

::: {.console}
```text
A:1, B: 1
A:1, B: 2
A:1, B: 3
A:1, B: 4
A:1, B: 5
A:2, B: 1
A:2, B: 2
A:2, B: 3
A:2, B: 4
A:2, B: 5
A:3, B: 1
A:3, B: 2
A:3, B: 3
A:3, B: 4
A:3, B: 5
```
:::

Merk het 'ritme' op in de uitvoer. De linkse teller gaat een pak trager dan de rechtse. Het is exact hetzelfde ritme als op een digitale klok: de minuten moeten volledig rondgaan voor het uur één stapje verspringt. De inner loop draait dus telkens helemaal uit vooraleer de outer loop één keer vooruit gaat.

:::{.callout-important}
**Waarom moet ``tellerB = 0;`` opnieuw gezet worden (lijn 21)?** Bij elke nieuwe iteratie van de outer loop willen we dat de inner loop weer vanaf 0 begint. ``tellerB`` werd in de vorige ronde immers tot 5 opgehoogd. Zouden we deze reset vergeten, dan blijft ``tellerB`` op 5 staan, faalt de test ``tellerB < 5`` meteen, en loopt de inner loop in totaal maar 1 keer. De reset zorgt er dus voor dat de binnenste loop telkens "opnieuw vol" doorloopt.
:::

### Nesting met een for

Diezelfde geneste loop schrijf je met twee ``for``-loops zo:

```java
for (int i = 1; i <= 3; i++)         //outer loop
{
    for (int j = 1; j <= 5; j++)     //inner loop
    {
        Console.WriteLine($"A:{i}, B: {j}");
    }
}
```

De uitvoer is identiek, maar er staat minder in de weg. Belangrijker: **de reset waar je bij de ``while`` zelf aan moest denken zit hier gratis in de setup**. Telkens de outer loop een nieuwe ronde start komt de volledige inner loop opnieuw aan de beurt, en dus ook zijn setup ``int j = 1``. De teller ``j`` wordt daardoor elke ronde opnieuw aangemaakt en meteen op zijn beginwaarde gezet.

Precies daarom worden geneste loops in de praktijk bijna altijd met een ``for`` geschreven. De meest gemaakte fout bij een geneste ``while`` (de vergeten reset) kan je hier niet maken.

Merk ook de namen op: de outer loop gebruikt ``i``, de inner loop ``j``. Dat is de gewoonte waar we het bij de ``for`` over hadden, en heb je een derde niveau nodig dan wordt dat ``k``. Overloop je effectief een raster, dan mag je ze gerust ``rij`` en ``kolom`` noemen.

### De volgorde van uitvoering

Bij een gewone ``for`` zag je dat de setup één keer loopt, de finish test vóór élke iteratie en de update erna. Bij een geneste loop geldt dat nog steeds, maar dan voor beide loops door elkaar.

![De zeven stukken van de geneste loop, genummerd in de volgorde waarin ze uitgevoerd worden. De twee lussen rechts tonen waar je telkens naartoe terugspringt.](../assets/3_loops/nestvolgorde.png)<!--{width=100%}-->

Voor de code hierboven is de volgorde dus:

1. De setup van de outer loop: ``i`` wordt 1. Dit gebeurt exact één keer.
2. De test van de outer loop: ``i <= 3``.
3. De setup van de inner loop: ``j`` wordt 1. Dit gebeurt bij élke ronde van de outer loop opnieuw.
4. De test van de inner loop: ``j <= 5``.
5. Het codeblok van de inner loop.
6. De update van de inner loop: ``j++``, en dan terug naar stap 4.
7. Faalt de test van de inner loop, dan pas volgt de update van de outer loop: ``i++``, en dan terug naar stap 2.

Stappen 4, 5 en 6 draaien dus vijf keer voor er ook maar één keer aan stap 7 wordt toegekomen. Stappen 3 tot en met 7 draaien drie keer.

### Rijen en kolommen

Tot nu toe kreeg elke iteratie zijn eigen lijn op het scherm. Wil je een echt raster tonen, dan gebruik je binnen de inner loop ``Console.Write`` (die schrijft zonder naar de volgende lijn te springen) en sluit je de lijn af in de outer loop. Zo tonen we de maaltafels van 1 tot en met 5:

```java
for (int rij = 1; rij <= 5; rij++)
{
    for (int kolom = 1; kolom <= 5; kolom++)
    {
        Console.Write(rij * kolom + "\t");
    }
    Console.WriteLine();
}
```

::: {.console}
```text
1       2       3       4       5
2       4       6       8       10
3       6       9       12      15
4       8       12      16      20
5       10      15      20      25
```
:::

![De outer loop gaat rij per rij naar beneden, de inner loop overloopt binnen elke rij de kolommen van links naar rechts.](../assets/3_loops/rijkolom.png)<!--{width=95%}-->

Let goed op waar die laatste ``Console.WriteLine();`` staat: binnen de accolades van de outer loop, maar buiten die van de inner loop. Ze wordt dus vijf keer uitgevoerd, telkens nadat een volledige rij op het scherm staat. Zet je die lijn per ongeluk in de inner loop, dan krijg je 25 lijnen met telkens één getal. Zet je ze buiten de outer loop, dan komt alles op één lange lijn terecht.

> De ``\t`` in de tekst is een *tab*, een speciaal teken dat de cursor naar de volgende kolom laat springen. Zo staan de getallen netjes onder elkaar, ook al is het ene getal één cijfer lang en het andere twee.

### Geneste loops tellen

Om te tellen hoe vaak de *inner* code zal uitgevoerd worden dien je te weten hoe vaak iedere loop afzonderlijk wordt uitgevoerd. Vervolgens vermenigvuldig je al deze getallen met elkaar.

Een voorbeeld: Hoe vaak zal het woord "Hallo" op het scherm verschijnen bij volgende code?

```java
for (int i = 0; i < 10; i++)
{
    for (int j = 0; j < 5; j++)
    {
        Console.WriteLine("Hallo");
    }
}
```

De outer loop wordt 10 keer uitgevoerd (waarbij ``i`` de waarden 0 tot en met 9 aanneemt). De inner loop wordt bij elke iteratie van de outer loop 5 keer uitgevoerd (waarbij ``j`` de waarden 0 tot en met 4 aanneemt). In totaal zal dus 50 keer "Hallo" op het scherm verschijnen (5x10).

Die vermenigvuldiging verklaart meteen waarom je voorzichtig moet zijn met nesting. Twee loops van elk 1000 rondes leveren een miljoen uitvoeringen op, en zet je daar nog een derde loop van 1000 rond, dan zit je aan een miljard. Elke extra laag vermenigvuldigt het werk in plaats van er iets bij op te tellen. Bij drie of meer niveaus is het dus de moeite om je af te vragen of het niet anders kan.

### Als de inner loop van de outer afhangt

De vermenigvuldiging hierboven werkt enkel wanneer de inner loop élke ronde even vaak draait. Dat is niet altijd zo: de inner loop mag perfect de teller van de outer loop gebruiken in zijn setup of zijn test. Onderstaande code tekent een driehoek van sterretjes:

```java
for (int rij = 1; rij <= 5; rij++)
{
    for (int kolom = 1; kolom <= rij; kolom++)
    {
        Console.Write("*");
    }
    Console.WriteLine();
}
```

::: {.console}
```text
*
**
***
****
*****
```
:::

De test van de inner loop is hier ``kolom <= rij``, en ``rij`` verandert bij elke ronde van de outer loop. In de eerste rij draait de inner loop dus één keer, in de tweede twee keer, en zo verder tot vijf. In totaal 1+2+3+4+5 = 15 sterretjes, en dus niet 5x5 = 25.

:::{.callout-warning}
Zodra de teller van de outer loop in de header van de inner loop opduikt, mag je niet meer zomaar vermenigvuldigen. Tel dan ronde per ronde, of trace de eerste twee en de laatste ronde uit zoals je bij de ``while`` deed.
:::

<!-- \newpage -->

### break in geneste loops

:::{.callout-important}
Let er op dat ``break`` je enkel uit de **huidige** loop zal halen. Indien je dit dus gebruikt in de inner loop dan zal de outer loop nog steeds voortgaan. Ga dus zéér bewust om met ``break`` in geneste loops, en gebruik het enkel als het je code echt leesbaarder maakt.
:::

Wil je in één keer uit *alle* geneste loops springen, dan werk je met een **booleaanse vlag**: een ``bool`` die je vóór de loops aanmaakt en die je in beide condities mee test. Stel dat we het eerste paar getallen tussen 1 en 10 zoeken waarvan het product 12 is:

```java
bool gevonden = false;
for (int i = 1; i <= 10 && !gevonden; i++)
{
    for (int j = 1; j <= 10 && !gevonden; j++)
    {
        if (i * j == 12)
        {
            Console.WriteLine($"Gevonden: {i} x {j}");
            gevonden = true;
        }
    }
}
```

Zodra ``gevonden`` op ``true`` staat faalt de test van de inner loop, en meteen daarna ook die van de outer loop. Je bent dus in één beweging uit beide loops, zonder ``break``. Dit is precies wat we bedoelen met een deftige stopconditie schrijven: de reden om te stoppen staat in de conditie van de loop zelf, waar een lezer ze verwacht.

<!-- \newpage -->

### Test jezelf

Wat verschijnt er op het scherm bij elk van deze vijf stukjes code?

**1.**

```java
for (int i = 0; i < 4; i++)
{
    for (int j = 0; j < 3; j++)
    {
        Console.Write("X");
    }
}
```

**2.**

```java
for (int i = 0; i < 5; i++)
{
    for (int j = i; j < 5; j++)
    {
        Console.Write("X");
    }
}
```

**3.**

```java
for (int i = 1; i <= 3; i++)
{
    for (int j = 1; j <= 2; j++)
    {
        Console.Write("*");
    }
    Console.WriteLine("|");
}
```

**4.**

```java
int a = 0;
int b = 0;
while (a < 3)
{
    a++;
    while (b < 2)
    {
        b++;
        Console.WriteLine($"{a}-{b}");
    }
}
```

**5.**

```java
for (int i = 1; i <= 3; i++)
{
    for (int j = 1; j <= 3; j++)
    {
        if (i == j)
        {
            Console.Write(i);
        }
    }
}
```

:::{.callout-tip collapse="true"}
## Antwoorden

1. Twaalf keer ``X`` op één lijn. De twee loops zijn onafhankelijk van elkaar, dus mag je vermenigvuldigen: 4x3.
2. Vijftien keer ``X``. Hier mag je niet vermenigvuldigen, want ``j`` start bij ``i``. De inner loop draait achtereenvolgens 5, 4, 3, 2 en 1 keer.
3. Drie lijnen ``**|``. De ``Console.WriteLine("|")`` staat buiten de inner loop en wordt dus één keer per ronde van de outer loop uitgevoerd, telkens nadat de twee sterretjes op het scherm staan.
4. Enkel ``1-1`` en ``1-2``. De reset van ``b`` ontbreekt: na de eerste ronde van de outer loop blijft ``b`` op 2 staan, waardoor de test ``b < 2`` bij ``a`` gelijk aan 2 en 3 meteen faalt. De outer loop draait dus wél drie keer, maar de inner loop doet niets meer. Zet ``b = 0;`` bovenaan het codeblok van de outer loop en je krijgt zes lijnen.
5. ``123``. De ``if`` slaagt enkel wanneer beide tellers gelijk zijn, en dat gebeurt precies één keer per ronde van de outer loop. Zo loop je de diagonaal van een raster af.
:::
