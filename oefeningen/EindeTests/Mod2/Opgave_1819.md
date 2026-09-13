> Volgende opgave was de vaardigheidsproefopdracht voor examen van dit vak (Programming Principles) in januari 2019

# Introductie/Context

Oh jeetje, de wereld draait nu helemaal door. Jouw firma werd zonet gevraagd om een online casino te ontwerpen met als doelgroep babies. Voor ze je de effectieve site laten maken willen ze eerst een simulatie zien in console. Aan jou de eer om deze dubieuze opdracht tot een goed einde te brengen.

# Algemeen

De speler wordt telkens gevraagd welk van de 3 spellen hij wenst te spelen. Hij kan te allen tijde stoppen en krijgt dan te zien hoeveel het verlies of de winst is.

De applicatie is modulair opgebouwd door middel van methoden.

Opgelet, bekijk zeker de puntenverdeling om te bepalen wat je eerst doet:
Je kan deze opgave in willekeurige volgorde oplossen, daar alle delen modulair en onafhankelijk van mekaar zijn:

* Opstarten casino: 3 punten
* Spel Raadhetgetal: 4 punten
* Spel Rekenenmaar: 3 punten
* Spel ArrayGame: 5 punten
* Afsluiten casino: 1 punt

# Opstarten casino (3 punten)

## Methode SetupCasino

Maak een methode SetupCasino:

* Returntype bool
* Parameters:
  * Naam (tekst)
  * Lengte scherm (geheel getal) [optioneel, standaard= 40]
  * Breedte scherm (geheel getal) [optioneel, standaard= 30]
* Werking
  * De methode geeft false terug indien de lengte of breedte kleiner is dan 1
  * Anders geeft de methode true terug en doet het volgende:
    * Het stelt het console scherm in (Width en Height) op de lengte en breedte die via de parameters werden gegeven
    * Het vult de hele bovenste lijn van het scherm met sterretjes
    * Op de tweede lijn komt de begroeting Welkom bij Casino AP "X"
      * "X" vervang je door de Naam die als parameter werd meegegeven
    * Het vult de derde lijn van de console ook met sterretjes
* Voorbeeld output:


```text
*******************************************************
Welkom bij Casino AP tim
*******************************************************
```

### Gebruik SetupCasino

Roep de methode aan vanuit de main met een naam, lengte en breedte naar keuze.
Enkel indien de methode true geeft zal het programma verder gaan, anders sluit het programma zich hier af.

# Methode CasinoLoop (0 punten)
Maak een methode CasinoLoop die niets teruggeeft en geen parameters nodig heeft.

Indien SetupCasino is gelukt dan zal deze loop gestart worden.

Deze loop heeft volgende code:

```java
   int keuze = 0;
   int geld = 0;
   while (keuze != -1)
   {
       Console.Clear();
       Console.WriteLine($"Je hebt {geld} euro.");
       keuze = ToonMenu();
       Console.Clear();
       switch (keuze)
       {
           case 1:
               geld += RaadHetGetal();
               break;
           case 2:
               geld += RekenenMaar();
               break;
           case 3:
               geld += ArrayGame();
               break;
           default:
               ShowEnding(geld);
               keuze = -1;
               break;

       }
       Console.WriteLine("Druk toets om verder te gaan");
       Console.ReadKey();
   }

```

**De methoden die deze code oproept (ToonMenu, RaadHetGetal, RekenenMaar, ArrayGame en ShowEnding) zal je nu zelf moeten schrijven zoals beschreven in de volgende secties. De code van ToonMenu krijg je.**

# ToonMenu()  (0 punten)

Bevat volgende code:
```java
int keuze = 0;

do
{
    Console.WriteLine("Geef keuze");
    Console.WriteLine("\t1. Raad het getal");
    Console.WriteLine("\t2. Rekenen maar");
    Console.WriteLine("\t3. Raad de sequentie");
    Console.WriteLine("*****");
    Console.WriteLine("-1 is stoppen");
    keuze = Convert.ToInt32(Console.ReadLine());
    Console.Clear();
} while (keuze != 1 && keuze != 2 && keuze != -1 && keuze !=3);

return keuze;
```

# Spel Methoden (RaadHetGetal, RekenenMaar en ArrayGame)

Deze 3 methoden bevatten telkens 1 spel. Als het spel gedaan is geeft de methode telkens terug hoeveel winst (of negatieve winst) de speler heeft gemaakt.

## RaadHetGetal (4 punten)

### Beschrijving spel
De speler moet raden welk getal van 1 tot en met 10 de computer in gedachte heeft.  Voor hij dit doet moet hij eerst ingeven hoe vaak hij denkt te moeten raden.

### De winst die de methode teruggeeft is als volgt:

* Indien de gebruiker exact wist hoe vaak hij moest raden voor hij het getal zou vinden, dan krijgt hij **+50**.
* Indien het aantal keer raden maximum 2 verwijderd is van hoe vaak hij dacht nodig te hebben, dan krijgt hij **+5**. 
  * Stel dat hij aan de start 5 ingaf als aantal pogingen, dan zal hij 5 euro krijgen indien hij het uiteindelijk effectief in 3,4,6  of 7 pogingen het heeft geraden (en uiteraard 50 indien hij het in 5 keer raadde)
* In alle andere gevallen is de winst **-5**.

### Voorbeeld spelverloop 


```text
Welkom bij raad het getal!
Je moet een getal van 1 tot 10 raden. Hoe veel keer denk je nodig te hebben?
4   <= ingevoerd door gebruiker
Hier gaan we dan.
Welk getal is het (aantalpogingen is 0)?
1   <= ingevoerd door gebruiker
Neen, dat is het niet. Probeer opnieuw
Welk getal is het (aantalpogingen is 1)?
2   <= ingevoerd door gebruiker
Neen, dat is het niet. Probeer opnieuw
Welk getal is het (aantalpogingen is 2)?
3   <= ingevoerd door gebruiker
Jeuj. Je hebt het geraden!
Je zat er minder dan 3 af van het aantal keer dat je ging raden. Je verdient 5 euro.
```

## RekenenMaar (3 punten)

### Beschrijving spel

De speler krijgt 5 vermenigvuldigingen voorgeschoteld die hij moet uitrekenen. Deze zijn steeds tussen 1 x 1 en 10 x 10 .

### De winst die de methode teruggeeft is als volgt

* Per juiste: +5
* Per foute: -5

### Voorbeeld spelverloop 


```text
Je krijgt nu 5 reken oefeningen. Per juiste krijg je 5 euro. Per foute verlies je 5 euro.
Hoeveel is 4x9?
36  <= ingevoerd door gebruiker
Mooi zo! Je winst verhoogt.
Hoeveel is 6x4?
20  <= ingevoerd door gebruiker
Dat is fout. Je winst verlaagt
Hoeveel is 7x7?
49  <= ingevoerd door gebruiker
Mooi zo! Je winst verhoogt.
Hoeveel is 8x1?
8   <= ingevoerd door gebruiker
Mooi zo! Je winst verhoogt.
Hoeveel is 9x1?
10  <= ingevoerd door gebruiker
Dat is fout. Je winst verlaagt
Je totale winst dit spel is 5
Druk toets om verder te gaan
```

## ArrayGame (5 punten)

### Beschrijving spel
Bij de start van deze methode wordt een array van bool, met lengte 10, gevuld met willekeurige true en false waarden.

De gebruiker moet proberen zo ver mogelijk door de array te geraken door te raden of de volgende waarde in de array true of false is. Van zodra de speler fout gokt stopt dit spel.

Hoe verder de speler geraakt, hoe meer winst (er kan geen verlies gemaakt worden).
Er wordt op het einde ook getoond wat de volledige sequentie was

### De winst die de methode teruggeeft is als volgt:
 
* Alle 10 juist: **+100 winst**
* In alle andere gevallen: + (5 *maal* het aantal juist geraden)

### Voorbeeld spelverloop 

```text
Hoe lang kan jij de sequentie raden? Geef 0 (false) of 1 (true) in.
Komt er juist of fout? (1 of 0)
1   <= ingevoerd door gebruiker
Goed zo!
Komt er juist of fout? (1 of 0)
1   <= ingevoerd door gebruiker
Goed zo!
Komt er juist of fout? (1 of 0)
0   <= ingevoerd door gebruiker
Fout
Je behaalde een sequentie van 2 juiste gokken. Dat is 10 euro waard.
De correcte sequentie was:
True,True,True,True,True,True,True,False,True,False,
```

## Afsluiten casino: 1 punt

Indien de gebruiker deze optie kiest dan roept de loop de methode ShowEnding op. Deze krijgt het geld binnen en toont of de speler winst of verlies maakte, en hoeveel. Daarna stopt het programma.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
using System;

namespace _1819_PPVaardigMod2_1ekans
{
    class Program
    {
        static void Main(string[] args)
        {

            if (SetupCasino("tim", 20, 80))
            {
                CasinoLoop();
            }
            else
            {
                Console.WriteLine("Ongeldige hoogte en/of breedte");
            }
        }

        private static void CasinoLoop()
        {
            int keuze = 0;
            int geld = 0;
            while (keuze != -1)
            {
                Console.Clear();
                Console.WriteLine($"Je hebt {geld} euro.");
                keuze = ToonMenu();
                Console.Clear();
                switch (keuze)
                {
                    case 1:
                        geld += RaadHetGetal();
                        break;
                    case 2:
                        geld += RekenenMaar();
                        break;
                    case 3:
                        geld += ArrayGame();
                        break;
                    default:
                        ShowEnding(geld);
                        keuze = -1;
                        break;

                }
                Console.WriteLine("Druk toets om verder te gaan");
                Console.ReadKey();
            }
        }

        private static int ArrayGame(int lengte = 10)
        {
            bool[] reeks = new bool[lengte];
            Random r = new Random();
            for (int i = 0; i < reeks.Length; i++)
            {
                if (r.Next(0, 2) == 0)
                    reeks[i] = true;
                else reeks[i] = false;
            }

            Console.WriteLine("Hoe lang kan jij de sequentie raden? Geef 0 (false) of 1 (true) in.");
            int aantalJuist = 0;
            bool juistGeraden = true;
            do
            {
                Console.WriteLine("Komt er juist of fout? (1 of 0)");
                int gok = Convert.ToInt32(Console.ReadLine());
                if ((reeks[aantalJuist] == true && gok == 1) || (reeks[aantalJuist] == false && gok == 0))
                {
                    Console.WriteLine("Goed zo!");
                    aantalJuist++;
                }
                else
                {
                    Console.WriteLine("Fout");
                    juistGeraden = false;
                }
            } while (aantalJuist < reeks.Length && juistGeraden == true);

            int winst = aantalJuist * 5;
            if (aantalJuist == reeks.Length)
            {
                winst = 100;
            }
            Console.WriteLine($"Je behaalde een sequentie van {aantalJuist} juiste gokken. Dat is {winst} euro waard.");

            Console.WriteLine("De correcte sequentie was:");
            for (int i = 0; i < reeks.Length; i++)
            {
                Console.Write(reeks[i] + ",");
            }
            Console.WriteLine();
            return winst;
        }



        private static int RekenenMaar()
        {
            int winst = 0;
            Console.WriteLine("Je krijgt nu 5 reken oefeningen. Per juiste krijg je 5 euro. Per foute verlies je 5 euro.");
            Random r = new Random();
            for (int i = 0; i < 5; i++)
            {
                int factor1 = r.Next(1, 11);
                int factor2 = r.Next(1, 11);
                Console.WriteLine($"Hoeveel is {factor1}x{factor2}?");
                int antwoord = Convert.ToInt32(Console.ReadLine());
                if (antwoord == factor1 * factor2)
                {
                    Console.WriteLine("Mooi zo! Je winst verhoogt.");
                    winst += 5;
                }
                else
                {
                    Console.WriteLine("Dat is fout. Je winst verlaagt");
                    winst -= 5;
                }


            }
            Console.WriteLine($"Je totale winst dit spel is {winst}");
            return winst;

        }

        private static int RaadHetGetal()
        {
            Console.WriteLine("Welkom bij raad het getal!");
            Console.WriteLine("Je moet een getal van 1 tot 10 raden. Hoe veel keer denk je nodig te hebben?");
            int schatting = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Hier gaan we dan.");
            Random r = new Random();
            int teZoekenGetal = r.Next(1, 11);
            int gok = -1;
            int pogingen = 0;
            while (gok != teZoekenGetal)
            {
                Console.WriteLine($"Welk getal is het (aantalpogingen is {pogingen})?");
                gok = Convert.ToInt32(Console.ReadLine());
                if (gok != teZoekenGetal)
                    Console.WriteLine("Neen, dat is het niet. Probeer opnieuw");
                pogingen++;
            }
            Console.WriteLine("Jeuj. Je hebt het geraden!");
            //Berekening
            if (pogingen == schatting)
            {
                Console.WriteLine("Wow. Je wist hoe vaak je ging raden. Je verdient 50 euro!");
                return 50;
            }

            int verschil = Math.Abs(pogingen - schatting);
            if (verschil < 3)
            {
                Console.WriteLine("Je zat er minder dan 3 af van het aantal keer dat je ging raden. Je verdient 5 euro.");
                return 5;
            }
            Console.WriteLine("Je zat er 3 of meer keer af van het aantal keer dat je ging raden. Je verliest 5 euro.");
            return -5;
        }

        private static void ShowEnding(int geld)
        {
            if (geld < 0)
                Console.WriteLine($"Bankroet... Je verloor {-geld} euro. Niet goed hoor!");
            if (geld == 0)
                Console.WriteLine("Geen geld verloren, geen geld verdiend.");
            if (geld > 0)
                Console.WriteLine($"Je hebt {geld} euro verdiend");
        }

        private static int ToonMenu()
        {

            int keuze = 0;

            do
            {
                Console.WriteLine("Geef keuze");
                Console.WriteLine("\t1. Raad het getal");
                Console.WriteLine("\t2. Rekenen maar");
                Console.WriteLine("\t3. Raad de sequentie");
                Console.WriteLine("*****");
                Console.WriteLine("-1 is stoppen");
                keuze = Convert.ToInt32(Console.ReadLine());
                Console.Clear();
            } while (keuze != 1 && keuze != 2 && keuze != -1 && keuze !=3);

            return keuze;
        }

        private static bool SetupCasino(string naam, int hoogte = 40, int breedte = 30)
        {
            if (hoogte < 1 || breedte < 1)
            {
                return false;
            }

            Console.WindowWidth = breedte;
            Console.WindowHeight = hoogte;

            for (int i = 0; i < breedte; i++)
            {
                Console.SetCursorPosition(i, 0);
                Console.Write("*");
                Console.SetCursorPosition(i, 2);
                Console.Write("*");
            }

            Console.SetCursorPosition(0, 1);
            Console.Write($"Welkom bij Casino AP {naam}");

            Console.SetCursorPosition(1, 3);
            Console.WriteLine("Druk op toets om voort te gaan");
            Console.ReadKey();
            Console.Clear();
            return true;
        }
    }
}

```
::::
