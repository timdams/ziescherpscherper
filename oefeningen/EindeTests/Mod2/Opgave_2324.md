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

Indien de ondergrens en bovengrens parameters even groot zijn, dan wordt de bovengrens verdubbeld: het getal ligt dan tussen de ondergrens en 2 keer de bovengrens. Indien de ondergrens groter is dan de bovengrens, dan worden de grenzen omgekeerd gebruikt.

#### Methode 2 ToonArrayKleuren
Schrijf een methode ``ToonArrayKleuren`` die een array van ``double`` aanvaardt. Ondanks de naam gebruikt deze methode geen kleuren: de getallen die opvallen, krijgen vierkante haakjes.

0. De methode berekent het gemiddelde van alle waarden in de array.
1. Twee ``int`` variabelen ``boven`` en  ``onder`` krijgen volgende inhoud: ``boven`` krijgt de waarde van het gemiddelde naar boven afgerond (naar het dichtsbijzijnde gehele getal). ``onder`` krijgt de waarde van  het gemiddelde naar onder afgerond. (*als het gemiddelde 13.6 was dan krijgt ``boven`` de waarde 14, en ``onder`` de waarde 13*).
1. Deze methode zal vervolgens de inhoud van de meegeven array naar het scherm visualiseren als volgt. Het toont de getallen uit de array naast elkaar in een rij (*telkens 1 cijfer na de komma*), telkens met een tab tussen. Ieder getal dat groter dan of gelijk aan ``onder`` en kleiner dan of gelijk aan ``boven`` is, zal vierkante haakjes rond zich hebben (bv ``[17,0]`` ). Je vergelijkt daarbij het getal zelf, niet de afgeronde waarde op het scherm. Met ``onder`` 17 en ``boven`` 18, zoals in de voorbeelduitvoer hieronder, krijgt een getal 17,04 dus haakjes en verschijnt het als ``[17,0]``, terwijl een getal 18,02 geen haakjes krijgt en als ``18,0`` verschijnt.

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
**Oefening 1**

Deze oefening kon je ook grotendeels zonder arrays oplossen, maar dan is het wel onmogelijk om te weten welk het vaakst ingevoerde getal is. Om het grootste en kleinste getal te vinden kon je ook de array sorteren met `Array.Sort` en dan het laatste en eerste element uit de array uitlezen.

```java
namespace Getallenverwerker
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Geef n:");
            int n = int.Parse(Console.ReadLine());
            Console.WriteLine($"Geef nu {n} getallen in:");
            int[] getallen = new int[n];
            int som = 0;

            //Invoer vragen en meteen de som maken
            for (int i = 0; i < getallen.Length; i++)
            {
                getallen[i] = int.Parse(Console.ReadLine());
                som += getallen[i];
            }

            double gemiddelde = som / (double)getallen.Length;

            //Grootste en kleinste zoeken
            int grootste = getallen[0];
            int kleinste = getallen[0];
            for (int i = 1; i < getallen.Length; i++)
            {
                if (getallen[i] > grootste)
                {
                    grootste = getallen[i];
                }
                if (getallen[i] < kleinste)
                {
                    kleinste = getallen[i];
                }
            }

            //Meest ingevoerde getal zoeken: tel voor elk getal hoe vaak het vanaf die plaats nog voorkomt
            int aantalMax = 0;
            int meestIngevoerd = getallen[0];
            for (int i = 0; i < getallen.Length; i++)
            {
                int aantal = 0;
                for (int j = i; j < getallen.Length; j++)
                {
                    if (getallen[j] == getallen[i])
                    {
                        aantal++;
                    }
                }
                if (aantal > aantalMax)
                {
                    aantalMax = aantal;
                    meestIngevoerd = getallen[i];
                }
            }

            //Resultaten tonen, telkens de waarde in het rood
            Console.WriteLine("Hier volgt de informatie over je invoer:");

            Console.Write("Kleinste ingevoerde getal: ");
            ToonInRood($"{kleinste}");
            Console.WriteLine();

            Console.Write("Grootste ingevoerde getal: ");
            ToonInRood($"{grootste}");
            Console.WriteLine();

            Console.Write("Het meest ingevoerde getal: ");
            ToonInRood($"{meestIngevoerd}");
            Console.WriteLine();

            Console.Write("    dit getal werd ");
            ToonInRood($"{aantalMax}");
            Console.WriteLine(" keer ingevoerd");

            Console.Write("Gemiddelde: ");
            ToonInRood($"{gemiddelde:F2}");
            Console.WriteLine();
        }

        static void ToonInRood(string waarde)
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.Write(waarde);
            Console.ResetColor();
        }
    }
}
```

**Oefening 2**

```java
namespace Arrayverwerker
{
    internal class Program
    {
        static void Main(string[] args)
        {
            const int AANTAL_GETALLEN = 100;
            Console.WriteLine("Geef ondergrens?");
            int onderGrens = int.Parse(Console.ReadLine());
            Console.WriteLine("Geef bovengrens?");
            int bovenGrens = int.Parse(Console.ReadLine());

            double[] getallen = new double[AANTAL_GETALLEN];
            for (int i = 0; i < getallen.Length; i++)
            {
                getallen[i] = GenereerRandom(onderGrens, bovenGrens);
            }

            Console.WriteLine("Visualisatie array:");
            ToonArrayKleuren(getallen);
        }

        static double GenereerRandom(int onderGrens, int bovenGrens)
        {
            int onder = onderGrens;
            int boven = bovenGrens;
            //Grenzen aanpassen indien nodig
            if (onderGrens == bovenGrens)
            {
                boven = bovenGrens * 2;
            }
            else if (onderGrens > bovenGrens)
            {
                onder = bovenGrens;
                boven = onderGrens;
            }

            Random rng = new Random();
            return onder + rng.NextDouble() * (boven - onder);
        }

        static void ToonArrayKleuren(double[] getallen)
        {
            //Gemiddelde berekenen
            double som = 0;
            for (int i = 0; i < getallen.Length; i++)
            {
                som += getallen[i];
            }
            double gemiddelde = som / getallen.Length;
            Console.WriteLine($"Gemiddelde was: {gemiddelde}");
            Console.WriteLine();

            //Grenzen berekenen
            int boven = (int)Math.Ceiling(gemiddelde);
            int onder = (int)Math.Floor(gemiddelde);

            //Array visualiseren: vergelijken met het getal zelf, niet met de afgeronde waarde
            for (int i = 0; i < getallen.Length; i++)
            {
                if (getallen[i] >= onder && getallen[i] <= boven)
                {
                    Console.Write($"[{getallen[i]:F1}]\t");
                }
                else
                {
                    Console.Write($"{getallen[i]:F1}\t");
                }
            }
            Console.WriteLine();
        }
    }
}
```

**Oefening 3**

De menukeuze wordt als tekst vergeleken. Zo crasht het programma niet als de gebruiker letters intypt, en daar is geen `int.Parse` voor nodig. Het aantal tickets wordt pas omgezet als het enkel uit cijfers bestaat.

```java
namespace Cinemasysteem
{
    internal class Program
    {
        static void Main(string[] args)
        {
            const int PRIJS_NORMAAL = 10;
            const int PRIJS_REDUCTIE = 8;
            const int PRIJS_GROEP = 30;
            const int PERSONEN_GROEP = 5;

            int aantalPersonen = 0;
            int totaalPrijs = 0;

            //Er is geen optie om te stoppen: het menu blijft altijd terugkomen
            while (true)
            {
                Console.WriteLine($"1. Normaal ticket ({PRIJS_NORMAAL} euro)");
                Console.WriteLine($"2. Reductie ticket ({PRIJS_REDUCTIE} euro)");
                Console.WriteLine($"3. Groepsticket ({PRIJS_GROEP} euro voor {PERSONEN_GROEP} personen)");
                Console.WriteLine("4. Opnieuw");
                Console.WriteLine($"Aantal personen= {aantalPersonen}, Prijs = {totaalPrijs}");

                //De keuze als tekst vergelijken: zo crasht het programma niet op letters
                string keuze = Console.ReadLine();
                if (keuze == "4")
                {
                    aantalPersonen = 0;
                    totaalPrijs = 0;
                }
                else if (keuze == "1" || keuze == "2" || keuze == "3")
                {
                    Console.WriteLine("Hoeveel?");
                    string invoerAantal = Console.ReadLine();
                    if (IsGeldigAantal(invoerAantal))
                    {
                        int aantalTickets = int.Parse(invoerAantal);
                        int prijsPerTicket = PRIJS_NORMAAL;
                        int personenPerTicket = 1;
                        if (keuze == "2")
                        {
                            prijsPerTicket = PRIJS_REDUCTIE;
                        }
                        else if (keuze == "3")
                        {
                            prijsPerTicket = PRIJS_GROEP;
                            personenPerTicket = PERSONEN_GROEP;
                        }
                        totaalPrijs += aantalTickets * prijsPerTicket;
                        aantalPersonen += aantalTickets * personenPerTicket;
                    }
                    else
                    {
                        Console.WriteLine("Fout. Dat kan niet.");
                    }
                }
                else
                {
                    Console.WriteLine("Fout. Dat kan niet.");
                }
            }
        }

        static bool IsGeldigAantal(string tekst)
        {
            //Enkel cijfers, en hoogstens 4 zodat int.Parse zeker niet overloopt
            bool geldig = tekst.Length > 0 && tekst.Length <= 4;
            int i = 0;
            while (geldig && i < tekst.Length)
            {
                geldig = tekst[i] >= '0' && tekst[i] <= '9';
                i++;
            }
            return geldig;
        }
    }
}
```
::::
