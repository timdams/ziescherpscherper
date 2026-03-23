> Volgende opgave was de vaardigheidsproefopdracht voor het examen van dit vak (Programming Principles) in januari 2024

# Oefening 1 - Getallenverwerker

## Info
Ga ervan uit dat de gebruiker géén foute invoer doet.

### Opgave

* Maak een applicatie die aan de gebruiker een getal `n` vraagt.
* Vraag vervolgens aan de gebruiker `n` gehele getallen (bepaal zelf hoe je ze bewaard (of niet)).
* Toon nadien volgende informatie aan de gebruiker. Hierbij wordt de waarde steeds in het rood getoond.
    * Toon het kleinste ingevoerde getal.
    * Toon het grootste ingevoerde getal.
    * Toon welk getal het vaakst opnieuw werd ingevoerd en toon ook hoe vaak dit was.
    * Toon het gemiddelde van de ingevoerde getallen tot 2 cijfers na de komma accuraat.

### Voorbeeld uitvoer

*Tekst die start met ">" is invoer van de gebruiker.*

```text
Geef n:
>5
Geef nu 5 getallen in:
>3
>2
>2
>-1
>2
Hier volgt de informatie over je invoer:
Kleinste ingevoerde getal: -1 
Grootste ingevoerde getal: 3
Het meest ingevoerde getal: 2
    dit getal werd 3 keer ingevoerd
Gemiddelde: 1,60
```

# Oefening 2 - Arrayverwerker

## Info

Voor deze oefening mag je extra methoden aanmaken. 

Ga ervan uit dat de gebruiker géén foute invoer doet.

### Opgave

#### Methode 1 GenereerRandom
Schrijf een methode ``GenereerRandom``. Deze methode geeft een ``double`` terug en aanvaardt 2 ``int`` parameters, genaamd ``onderGrens`` en ``bovenGrens``. De methode zal een random ``double`` getal teruggeven dat zich tussen de ondergrens en bovengrenswaarden bevindt. De bovengrens is exclusief en zal dus zelf nooit gegenereerd worden. 

Als de methode met de waarden 6 en 12 wordt aangeroepen zal er dus een kommagetal tussen 6 en 12 worden teruggegeven worden.

Indien de ondergrens en bovengrens parameters even groot zijn dan wordt het dubbele van de bovengrens gebruikt.Indien de ondergrens groter is dan de bovengrens dan worden de grenzen omgekeerd gebruikt.

#### Methode 2 ToonArrayKleuren
Schrijf een methode ``ToonArrayKleuren`` die een array van ``double`` aanvaardt:

0. De methode berekent het gemiddelde van alle waarden in de array.
1. Twee ``int`` variabelen ``boven`` en  ``onder`` krijgen volgende inhoud: ``boven`` krijgt de waarde van het gemiddelde naar boven afgerond (naar het dichtsbijzijnde gehele getal). ``onder`` krijgt de waarde van  het gemiddelde naar onder afgerond. (*als het gemiddelde 13.6 was dan krijgt ``boven`` de waarde 14, en onder ``onder`` de waarde 13*).
1. Deze methode zal vervolgens de inhoud van de meegeven array naar het scherm visualiseren als volgt. Het toont de getallen uit de array naast elkaar in een rij (*telkens 1 cijfer na de komma*), telkens met een tab tussen. Ieder getal dat zich tussen de waarden ``onder`` en ``boven`` bevindt zal vierkante haakjes rond zich hebben (bv ``[17,0]`` )

#### Toepassing

Schrijf  een programma dat aan de gebruiker de onder en bovengrens waarden vraagt (``int``) en vervolgens 100 keer de ``GenereerRandom``methode met deze informatie aanroept. De 100 gegenereerde getallen worden in een array bewaard. Deze array wordt aan de methode ``ToonArrayKleuren`` meegegeven die vervolgens het nodige werk zal doen.

### Voorbeeld uitvoer

*Tekst die start met ">" is invoer van de gebruiker.*


```text
Geef ondergrens?
>12
Geef bovengrens?
>21
Visualisatie array:
Gemiddelde was: 17,02712064099593

15,9    [17,3]  16,1    20,4    16,9    [17,0]  19,9    14,1    14,8    12,2    14,6    16,8    [18,0]  19,8    16,3   13,8     16,8    19,7    20,6    19,0    15,8    [17,4]  20,7    19,6    14,6    18,5    12,1    16,5    14,1    16,1    19,5     12,7    20,1    19,0    14,4    12,1    13,7    14,9    19,6    15,0    20,2    20,0    14,9    19,7    19,1   12,6     [17,1]  19,0    20,1    19,8    18,3    15,6    12,2    18,0    16,3    16,4    13,6    14,5    20,4    13,9   12,2     [17,1]  14,0    12,9    [17,0]  13,2    19,3    20,3    18,6    [17,7]  15,7    18,1    20,6    20,9    19,1   12,6     15,7    [17,8]  [17,6]  14,6    18,4    16,6    14,8    14,5    20,6    14,8    [17,9]  18,3    19,5    20,4   18,8     20,9    20,8    [17,0]  18,4    20,6    20,8    12,4    [17,6]  16,4
```

# Oefening 3 - Cinemasysteem

Voor deze oefening mag je extra methoden aanmaken. 

**Ga ervan uit dat de gebruiker mogelijk wél foute invoer doet.**

### Opgave

Een lokale cinema heeft je hulp nodig. Ze wensen een kassasysteem. Gebruikers krijgen een menukeuze en kunnen zo aangeven hoeveel tickets van elke soort er besteld moeten worden. De applicatie zal bij foute invoer een foutboodschap tonen en de invoer negeren en wachten op correcte invoer (door het menu opnieuw te tonen).
Wanneer het menu opstart worden volgende opties getoond:

1. Normaal ticket (10 euro)
2. Reductie ticket (8 euro)
3. Groepsticket (30 euro voor 5 personen)
4. Opnieuw

De gebruiker kiest 1 van deze 4 opties. Bij een andere optie dan 1,2,3 of 4 zal een fout getoond worden en wordt het menu opnieuw getoond.

Bij optie 1, 2 en 3: vervolgens vraagt het programma hoeveel tickets van deze optie nodig zijn (indien de gebruiker dus 2 tickets van optie 3 kiest dan gaat het dus om 90 euro voor 15 personen). Vervolgens wordt terug het begin menu getoond.

Onderaan het menu wordt de hele tijd de huidige kost én aantal personen getoond. Enkel wanneer de gebruiker optie 4 kiest worden deze getallen gereset.

### Voorbeeld uitvoer

*Tekst die start met ">" is invoer van de gebruiker.*

```text
1. Normaal ticket (10 euro)
2. Reductie ticket (8 euro)
3. Groepsticket (30 euro voor 5 personen)
4. Opnieuw
Aantal personen= 0, Prijs = 0
>5
Fout. Dat kan niet.
1. Normaal ticket (10 euro)
2. Reductie ticket (8 euro)
3. Groepsticket (30 euro voor 5 personen)
4. Opnieuw
Aantal personen= 0, Prijs = 0
>2
Hoeveel?
>3
1. Normaal ticket (10 euro)
2. Reductie ticket (8 euro)
3. Groepsticket (30 euro voor 5 personen)
4. Opnieuw
Aantal personen= 3, Prijs = 24
>3
Hoeveel?
>2
1. Normaal ticket (10 euro)
2. Reductie ticket (8 euro)
3. Groepsticket (30 euro voor 5 personen)
4. Opnieuw
Aantal personen= 13, Prijs = 84
>4
1. Normaal ticket (10 euro)
2. Reductie ticket (8 euro)
3. Groepsticket (30 euro voor 5 personen)
4. Opnieuw
Aantal personen= 0, Prijs = 0
```


::::{.callout-caution collapse="true" title="Oplossing"}
# Oefening 1

Deze oefening kon je ook grotendeels zonder arrays oplossen, maar dan is het wel onmogelijk om te weten welk het vaakst ingevoerde getal is. Om het grootste en kleinste getal te vinden kon je ook de array sorteren met Sort en dan het laatste en eerste element uit de array uitlezen.

```java
Console.WriteLine("Geef n");
int n = int.Parse(Console.ReadLine());
Console.WriteLine($"Geef nu {n} getallen in:");
int[] getallen = new int[n];
int som = 0;


//Invoer vragen (en som ineens maken)
//Grootste en kleinste kan in principe ook hier reeds gedaan worden
for (int i = 0; i < n; i++)
{
    getallen[i] = int.Parse(Console.ReadLine());
    som += getallen[i];
}

//statistieken

double gemiddelde = som / (double)n;

//grootste en kleinste zoeken
int grootste = getallen[0];
int kleinste = getallen[0];
for (int i = 1; i < n; i++)
{
    if (getallen[i] > grootste)
        grootste = getallen[i];
    if (getallen[i] < kleinste)
        kleinste = getallen[i];
}

//meest ingevoerde zoeken
int aantalMax = 0;
int meestVoorkomend = getallen[0];
int tellen = 0;
for (int i = 0; i < n; i++)
{

    for (int j = i; j < n; j++)
    {
        if (getallen[j] == getallen[i])
        {
            tellen++;
        }
    }
    if(tellen>aantalMax)
    {
        aantalMax = tellen;
        meestVoorkomend = getallen[i];
    }
    tellen = 0;
}

//statistieken tonen
Console.WriteLine("Hier volgt de informatie over je invoer:");

Console.Write($"Kleinste ingevoerde getal:");
Console.ForegroundColor = ConsoleColor.DarkRed;
Console.WriteLine(kleinste);
Console.ResetColor();

Console.Write($"Grootste ingevoerde getal:");
Console.ForegroundColor = ConsoleColor.DarkRed;
Console.WriteLine(grootste);
Console.ResetColor();

Console.Write($"Het meest ingevoerde getal:");
Console.ForegroundColor = ConsoleColor.DarkRed;
Console.WriteLine(meestVoorkomend);
Console.ResetColor();
Console.Write($"\t dit getal werd ");
Console.ForegroundColor = ConsoleColor.DarkRed;
Console.Write(aantalMax);
Console.ResetColor();
Console.WriteLine($" keer ingevoerd");

Console.Write($"Gemiddelde: ");
Console.ForegroundColor = ConsoleColor.DarkRed;
Console.WriteLine(Math.Round(gemiddelde,2));
Console.ResetColor();
```

# Oefening 2

```java
static void Main(string[] args)
{
    const int AR_GROOTTE = 100;
    Console.WriteLine("Geef ondergrens");
    int onderGrens = int.Parse(Console.ReadLine());
    Console.WriteLine("Geef bovengrens");
    int bovenGrens = int.Parse(Console.ReadLine());

    double[] array = new double[AR_GROOTTE];
    for (int i = 0; i < array.Length; i++)
    {
        array[i] = GenereerRandom(onderGrens, bovenGrens);
    }
    ToonArrayKleuren(array);
}

static double GenereerRandom(int onder, int boven)
{
    int onderGrens = onder;
    int bovenGrens = boven;
    //Grenzen aanpassen indien nodig
    if (onder == boven)
        bovenGrens = boven * 2;
    else if (onder > boven)
    {
        bovenGrens = onder;
        onderGrens = boven;
    }

    Random rng = new Random();
    return onderGrens + rng.NextDouble() * (bovenGrens - onderGrens);
}

static void ToonArrayKleuren(double[] arrayIn)
{
    //Gemiddelde berekenen
    double som = 0.0;
    for (int i = 0; i < arrayIn.Length; i++)
    {
        som += arrayIn[i];
    }
    double gemiddelde = som / arrayIn.Length;
    Console.WriteLine($"Gemiddelde was: {gemiddelde}");

    //Grenzen berekenen
    int boven = (int)Math.Ceiling(gemiddelde);
    int onder = (int)Math.Floor(gemiddelde);

    //Array visualiseren
    for (int i = 0; i < arrayIn.Length; i++)
    {
        double waarde = Math.Round(arrayIn[i], 1);
        if (waarde > onder && waarde < boven)
        {
            Console.Write($"[{waarde}]\t");
        }
        else
        {
            Console.Write($"{waarde}\t");
        }
    }
}
```

# Oefening 3

```java
enum MenuKeuze { Normaal = 1, Reductie, Groep, Reset }
static void Main(string[] args)
{
    int aantalPersonen = 0;
    int totaalPrijs = 0;
    const int PRIJSNORM = 10;
    const int PRIJSREDUCT = 8;
    const int PRIJSGROEP = 30;

    while (true)
    {
        int invoer = -1;
        do
        {
            Console.WriteLine($"{(int)MenuKeuze.Normaal}. Normaal ticket ({PRIJSNORM} euro)");
            Console.WriteLine($"{(int)MenuKeuze.Reductie}. Reductie ticket ({PRIJSREDUCT} euro)");
            Console.WriteLine($"{(int)MenuKeuze.Groep}. Groepsticket ({PRIJSGROEP} euro voor 5 personen)");
            Console.WriteLine($"{(int)MenuKeuze.Reset}. Opnieuw");
            Console.WriteLine($"Aantal personen= {aantalPersonen}, Prijs = {totaalPrijs}");

            invoer = int.Parse(Console.ReadLine());
            if (invoer < 1 || invoer > 4)
            {
                Console.WriteLine("Fout probeer het nog eens");
            }
        } while (invoer < 1 || invoer > 4);

        MenuKeuze keuze = (MenuKeuze)invoer;
        int aantalTickets = 0;
        switch (keuze)
        {
            case MenuKeuze.Normaal:
                aantalTickets = VraagAantalTickets();
                totaalPrijs += aantalTickets * PRIJSNORM;
                aantalPersonen += aantalTickets;
                break;
            case MenuKeuze.Reductie:
                aantalTickets = VraagAantalTickets();
                totaalPrijs += aantalTickets * PRIJSREDUCT;
                aantalPersonen += aantalTickets;
                break;
            case MenuKeuze.Groep:
                aantalTickets = VraagAantalTickets();
                totaalPrijs += aantalTickets * PRIJSGROEP;
                aantalPersonen += 5 * aantalTickets;
                break;
            default:
                break;
        }
    }
}

private static int VraagAantalTickets()
{
    Console.WriteLine("Hoeveel?");
    return int.Parse(Console.ReadLine());
}
```
::::
