<!--# Oefeningen week 2-->

:::{.callout-tip}
Begin pas aan deze oefeningen wanneer je voldoende geoefend hebt door de vorige 2 delen oefeningen op te lossen.

Deze oefeningen zijn oefeningen die je moet kunnen indien je hoofdstuk 6 goed en wel beheerst. Ze zijn dus een goede maat om te weten of je het hoofdstuk al voldoende in de vingers hebt.

Bekijk zeker de Wiskunde-quizprogramma-opdracht!
:::



<!--# Oefeningen week 2-->

# Boekhouder (*Essential*)

# Boekhouder (*Essential*)
Maak een 'boekhoud-programma': de gebruiker kan continu positieve en negatieve getallen invoeren. Telkens hij op enter duwt wordt de huidige invoer aan de balans bijgevoegd. Het programma stopt met getallen vragen wanneer de gebruiker 'q' invoert. Finaal worden dan de volgende zaken op het scherm getoond:

* De balans van alle ingevoerde getallen: dit is gewoon de som van de getallen. Als de gebruiker dus de getallen 4, -10 en 8 invoerde dan zal de balans op +2 staan  (4 -10 + 8).
* De som van alle negatieve invoeren. Als de gebruiker dus 4, -10, 8 en -6 invoerde dan zal dit getal op -16 staan (= -10 -6).
* De som van alle positieve invoeren. Als de gebruiker dus 4, -10, 8 en -6 invoerde dan zal dit getal op +12 staan (= 4 + 8). 
* Het gemiddelde van alle ingevoerde getallen.

Deze 4 getallen worden ook steeds geüpdatet en getoond wanneer de gebruiker een nieuw getal invoert en op enter duwt.
 

# Hoger Lager (*Essential*)

# Hoger Lager (*Essential*)

Simulatie van het "hoger-lager" spel. Het programma kiest een random-getal van 1 tot en met 100 (telkens inbegrepen). Vervolgens wordt de gebruiker gevraagd om een gok te doen en toont het programma of de gok juist was, te laag was ("hoger") of te hoog ("lager"). Het programma blijft gokken van de gebruiker accepteren tot de gok juist is of de gebruiker besluit te stoppen (door een negatief getal in te voeren). Het aantal beurten wordt op het einde van het spel getoond en de mogelijkheid om opnieuw te spelen.

## Limiet
Pas het Hoger Lager programma aan zodat er een maximum aantal pogingen is toegestaan.


# Wiskundequiz (*Essential*)

# Wiskundequiz (*Essential*)
Maak een applicatie die je kan gebruiken om je tafels van vermenigvuldigen te oefenen. De applicatie vraagt steeds een willekeurige vermenigvuldiging (enkel getallen tussen 1 tot en met 10) en de gebruiker moet de oplossing invoeren.
Indien correct gaat de gebruiker verder. Bij fout stopt het programma en wordt getoond hoeveel keer je juist hebt ingevoerd.


# Wiskundequiz met levels (*Essential*)

# Wiskundequiz met levels (*Essential*)

Bouw levels in de voorgaande wiskundequiz. Per 5 juiste antwoorden, stijg je 1 level. Het level bepaalt het bereik van getallen die gegenereerd worden bij de oefening. Bijvoorbeeld level 1 enkel getallen van 1 tot en met 5, level 2 tot en met 10, level 3 tot en met 20 etc.

PRO: Kan je ervoor zorgen dat het bereik van de getalgeneratie met een formule afhankelijk is van het level? Zodat je de grenzen per level niet moet hardcoden?


# Wiskunde-quizprogramma

# Wiskunde-quizprogramma

Integreer voorgaande quiz met een menu dat je bijvoorbeeld in codemenu hebt gemaakt. Het menu wordt aan de start getoond en geeft de gebruiker de optie om te kiezen wat hij wenst te doen:
* Gewoon spelen
* Starten op een bepaald level (de gebruiker moet vervolgens het level invoeren)
* Studeren: de oplossing wordt steeds getoond. De gebruiker hoeft niets in te voeren, elke 5 seconden verschijnt de volgende opgave met oplossing. Gebruik  ``System.Threading.Thread.Sleep(5000)`` om je programma 5 seconden (5000 ms) te pauzeren.


# Tekenen

# Tekenen

Twee getallen van 2 tot en met 20 worden ingelezen (invoercontrole!). Er moet een open rechthoek afgedrukt worden bestaande uit `*`en waarbij de ingelezen getallen respectievelijk de breedte en de hoogte van de rechthoek voorstellen. Als bijvoorbeeld 10 en 4 werden ingelezen, wordt de volgende rechthoek getoond:


```text
* * * * * * * * * *
*                 *
*                 *
* * * * * * * * * *
```


# Steen schaar papier (*Essential*)

# Steen schaar papier (*Essential*)
Maak een applicatie waarbij de gebruiker steen-schaar-papier met de computer kan spelen. De gebruiker kiest telkens steen, schaar of papier en drukt op enter. Vervolgens kiest de computer willekeurig steen, schaar of papier (gebruik de Random.Next() methode, waarbij je deze van  1 tot en met 3 laat varieren). 
Vervolgens krijgt de winnaar 1 punt:
* Steen wint van schaar, verliest van papier.
* Papier wint van steen, verliest van schaar.
* Schaar wint van papier, verliest van steen.
* Indien beide hetzelfde hebben wint niemand een punt.

Op het scherm wordt telkens getoond wie de huidige ronde heeft gewonnen en hoeveel de tussenscore is. De eerste (pc of gebruiker) die 10 punten haalt wint.

Teken een flowchart van je applicatie.

:::{.callout-tip}
Los dit op met ``enum`` : je code zal een pak leesbaarder worden
:::


# Codemenu (*Essential*)

# Codemenu (*Essential*)

Maak een applicatie die bij het opstarten een keuze menu toont. Het menu toont 5 verschillende oefeningen naar keuze. Telkens de gebruiker in het menu een oefening kiest (door a, b, c, d of e in te voeren) wordt de code van die oefening getoond. Vervolgens kan de gebruiker op enter duwen zodat terug het menu verschijnt, zodat de gebruiker een nieuwe oefening kan kiezen

Extra: maak je menu visueel interessanter (m.b.v. kaders en kleuren)





# Become Neo

# Become Neo

![Neo Tim](../assets/neotim.png)

Volgende code genereert een beeld zoals dat ook in de cultfilm The Matrix (1999) plaatsvindt. 
```csharp
Random rangen = new Random();
Console.ForegroundColor = ConsoleColor.Green;
while (true)
{
    //Genereer nieuw random teken:
    char teken = Convert.ToChar(rangen.Next(62, 400));
    //Zet teken op scherm
    Console.Write(teken);
    
    //10 ms pauze tussen ieder frame (pas gerust aan)
    System.Threading.Thread.Sleep(10); 
    
    //Af en toe donker kleurtje
    if(rangen.Next(0, 3) == 0)
    {
        Console.ForegroundColor = ConsoleColor.DarkGreen;
    }
    else
    {
        Console.ForegroundColor = ConsoleColor.Green;
    }
}
```

Vul de code aan zodat de karakters random kleuren krijgen. Kan je het nog cooler maken?


# BeerSong

# BeerSong
Schrijf een BeerSong-generator zoals onderstaande output. Merk op dat de laatste 5 zinnen anders zijn:

```
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.

98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.

97 bottles of beer on the wall, 97 bottles of beer.
Take one down and pass it around, 96 bottles of beer on the wall.

96 bottles of beer on the wall, 96 bottles of beer.
Take one down and pass it around, 95 bottles of beer on the wall.

95 bottles of beer on the wall, 95 bottles of beer.
Take one down and pass it around, 94 bottles of beer on the wall.

...

4 bottles of beer on the wall, 4 bottles of beer.
Take one down and pass it around, 3 bottles of beer on the wall.

3 bottles of beer on the wall, 3 bottles of beer.
Take one down and pass it around, 2 bottles of beer on the wall.

2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.

1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.

No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
```





# De slag om Helm's Deep (*Final Essentials*)

# De slag om Helm's Deep (*Final Essentials*)

Tijdens de slag om Helm's Deep houden Legolas en Gimli een wedstrijd bij wie de meeste vijanden kan verslaan.
Schrijf een programma dat deze heroïsche strijd bijhoudt. Zorg voor een gebruiksvriendelijke interface met kleuren.

Het programma vraagt telkens in een oneindige loop:
1. Wie heeft er een kill gemaakt? (Voer 'Legolas' of 'Gimli' in).
   * Typ 'EINDE' om de strijd te stoppen en de balans op te maken.
2. Wat voor vijand was het? (Keuze uit: 'Orc', 'Uruk-hai' of 'Troll'). (Enkel als 'EINDE' niet werd ingetypt).

**Puntenverdeling:**
* Een **Orc** is 1 punt waard.
* Een **Uruk-hai** is 3 punten waard.
* Een **Troll** is 5 punten waard.

**Speciale Regels (The Extended Edition):**
1. **Kill Streak**: Houd bij wie de *vorige* kill maakte. Als dezelfde persoon **3 keer na elkaar** een kill maakt, krijgt deze een bonus van **10 punten** (bovenop de punten van de vijand). Toon hierbij een speciale melding (bv. "Legolas is on fire!").
2. **Kleuren**:
   * Gebruik **groene tekst** als Legolas scoort.
   * Gebruik **rode tekst** als Gimli scoort.
   * Gebruik gewone grijze tekst voor de vragen.

**Einde van de strijd:**
Wanneer 'EINDE' wordt ingegeven stopt de loop en toont het programma een uitgebreid rapport:
1. De totaalscore van Legolas en Gimli.
2. Wie de winnaar is.
3. Hoeveel vijanden ze **gezamenlijk** hebben verslagen.
4. Hoeveel procent van de totale punten door Legolas werd verdiend (Druk af met 2 cijfers na de komma).

:::{.callout-tip}
*   Je zal een variabele moeten bijhouden die onthoudt wie de *vorige* kill maakte om de streak te kunnen controleren.
*   Vergeet niet `Console.ResetColor()` te gebruiken na het tonen van een gekleurde boodschap.
:::




::::{.callout-caution collapse="true" title="Oplossing"}
# Oplossing practica deel 3

## Oplossing grootste getal
Toe te voegen lijnen aangeduid met ``//NEW``.
```java
int x= 0;
int y= 0;
int grootste= int.MinValue; //NEW
do
{
    y = y + x;
    Console.WriteLine("Voer gehele waarden in (32767=stop)");
    string instring= Console.ReadLine();
    x = Convert.ToInt32(instring);
    if (x > grootste && x != 32767) //NEW
        grootste = x; //NEW
} while (x != 32767);
Console.WriteLine($"Som is {y}");
Console.WriteLine($"Grootste getal is {grootste}");//NEW
```
## Oplossing Boekhouder

[Uitleg via filmpje](https://ap.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=72f4f97f-5baa-4f9f-8985-b0c000f4f1ce)

```java
string invoer = "";
int somPos = 0;
int somNeg = 0;
int somTotaal = 0;
int teller = 0;
do
{
    
    Console.WriteLine("Geef getal. q is stoppen");
    invoer = Console.ReadLine();
    if (invoer != "q")
    {
        teller++;
        int getalInvoer = int.Parse(invoer);
        somTotaal += getalInvoer;
        if(getalInvoer>0)
        {
            somPos += getalInvoer;
        }
        else
        {
            somNeg += getalInvoer;
        }
        Console.WriteLine($"Som pos: {somPos}");
        Console.WriteLine($"Som neg: {somNeg}");
        Console.WriteLine($"Som totaal: {somTotaal}");
        Console.WriteLine($"Gemiddelde : {(double)somTotaal/teller}");
    }
} while (invoer !="q");

Console.WriteLine("FINAAL:");
Console.WriteLine($"Som pos: {somPos}");
Console.WriteLine($"Som neg: {somNeg}");
Console.WriteLine($"Som totaal: {somTotaal}");
Console.WriteLine($"Gemiddel : {somTotaal / teller}");
```


## Hoger Lager

```java
bool guessed = false;
Random rng = new Random();
int teRadenGetal = rng.Next(1, 101);

do
{
    Console.WriteLine("Aan welk getal denk ik?(negatief getal om te stoppen)");
    int antwoord = int.Parse(Console.ReadLine());
    if (antwoord == teRadenGetal)
    {
        Console.WriteLine("Correct! Dat was het!");
        guessed = true;
    }
    else if (antwoord < 0)
    {
        Console.WriteLine($"Spijtig! Doei (het antwoord was {teRadenGetal}) ");
        guessed = true;
    }
    else if (antwoord < teRadenGetal)
    {
        Console.WriteLine("Het getal dat we zoeken is HOGER");
    }
    else
    {
        Console.WriteLine("Het getal dat we zoeken is LAGER");
    }
} while (!guessed);
```

### Hoger Lager met limiet

```java
bool guessed = false;
Random rng = new Random();
int teRadenGetal = rng.Next(1, 101);

const int MAXTRIES= 3; //NIEUWE CODE
int tries = 0;  //NIEUWE CODE

do
{
    Console.WriteLine("Aan welk getal denk ik?(negatief getal om te stoppen)");
    int antwoord = int.Parse(Console.ReadLine());
    tries++; //NIEUWE CODE
    if (antwoord == teRadenGetal)
    {
        Console.WriteLine("Correct! Dat was het!");
        guessed = true;
    }
    else if (antwoord < 0)
    {
        Console.WriteLine($"Spijtig! Doei (het antwoord was {teRadenGetal}) ");
        guessed = true;
    }
    else if (antwoord < teRadenGetal)
    {
        Console.WriteLine("Het getal dat we zoeken is HOGER");
    }
    else
    {
        Console.WriteLine("Het getal dat we zoeken is LAGER");
    }

} while (!guessed && tries<MAXTRIES); //NIEUWE CODE

if(tries== MAXTRIES && !guessed) //NIEUWE CODE
{
    Console.WriteLine("Helaas, al je beurten zijn op.");
    Console.WriteLine($"Het getal dat we zochten was {teRadenGetal}");
}
```


## WiskundeQuiz

```java
Random rng = new Random();
int aantalJuist = 0;
bool aanHetWinnen = true;
do
{
    int getal1 = rng.Next(1, 10);
    int getal2 = rng.Next(1, 10);
    Console.WriteLine($"Hoeveel is {getal1}*{getal2}?");
    int antwoord = int.Parse(Console.ReadLine());
    if(antwoord==getal1*getal2)
    {
        Console.WriteLine("Goed zo!");
        aantalJuist++;
    }
    else
    {
        Console.WriteLine("WRONG!");
        Console.WriteLine($"Je hebt {aantalJuist} keer juist geantwoord! ");
        aanHetWinnen = false;
    }
} while (aanHetWinnen);
```

## WiskundeQuiz met level

```java
Random rng = new Random();
int aantalJuist = 0;
int level = 0; //NIEUWE CODE
bool aanHetWinnen = true;
do
{
    int getal1 = rng.Next(1, 10 + 10 * level); //NIEUWE CODE
    int getal2 = rng.Next(1, 10 + 10 * level); //NIEUWE CODE
    Console.WriteLine($"Level {level}:Hoeveel is {getal1}*{getal2}?"); //NIEUWE CODE
    int antwoord = int.Parse(Console.ReadLine());
    if (antwoord == getal1 * getal2)
    {
        Console.WriteLine("Goed zo!");
        aantalJuist++;
        if(aantalJuist%5==0) //NIEUWE CODE
        {
            Console.WriteLine("LEVEL UP!"); //NIEUWE CODE
            level++; //NIEUWE CODE
        }
    }
    else
    {
        Console.WriteLine("WRONG!");
        Console.WriteLine($"Je hebt {aantalJuist} keer juist geantwoord! ");
        aanHetWinnen = false;
    }

} while (aanHetWinnen);
```

## Wiskunde-QuizProgramma

```java
Console.WriteLine("Welkom op mijn quizprogramma. Wat wil je doen?");
Console.WriteLine("1.Gewoon spelen");
Console.WriteLine("2.Starten op bepaald level?");
Console.WriteLine("3.Studeren");
int keuzeGebruiker = int.Parse(Console.ReadLine());

int level = 0;
if (keuzeGebruiker == 2)
{
    Console.WriteLine("Welk level wil je starten?");
    level = int.Parse(Console.ReadLine());
}

Random rng = new Random();
int aantalJuist = 0;

bool aanHetWinnen = true;
do
{
    int getal1 = rng.Next(1, 10 + 10 * level);
    int getal2 = rng.Next(1, 10 + 10 * level);
    if (keuzeGebruiker != 3)
    {
        Console.WriteLine($"Level {level}:Hoeveel is {getal1}*{getal2}?");
        int antwoord = int.Parse(Console.ReadLine());
        if (antwoord == getal1 * getal2)
        {
            Console.WriteLine("Goed zo!");
            aantalJuist++;
            if (aantalJuist % 5 == 0)
            {
                Console.WriteLine("LEVEL UP!");
                level++;
            }
        }
        else
        {
            Console.WriteLine("WRONG!");
            Console.WriteLine($"Je hebt {aantalJuist} keer juist geantwoord! ");
            aanHetWinnen = false;
        }
    }
    else //STUDEERMODUS
    { 
        while(true)
        {
            int genGetal1 = rng.Next(1, 10);
            int genGetal2 = rng.Next(1, 10);
            Console.WriteLine($"{genGetal1}*{genGetal2}={genGetal1*genGetal2}");
            System.Threading.Thread.Sleep(5000);
        }
    }

} while (aanHetWinnen);
```


## Steen Schaar Papier

```java
enum SSPKeuzes { Steen, Schaar, Papier };
static void Main(string[] args)
{
    Random rng = new Random();
    int scoreGebruiker = 0;
    int scorePC = 0;
    const int MAXSCORE = 5;
    do
    {
        Console.WriteLine("\nSteen, schaar, papier?");
        SSPKeuzes keuzeGebruiker = Enum.Parse<SSPKeuzes>(Console.ReadLine(), true);

        SSPKeuzes keuzePC = (SSPKeuzes)rng.Next(0, 3);
        Console.WriteLine($"Ik koos {keuzePC}");



        if (keuzePC == keuzeGebruiker)
        {
            Console.WriteLine("We kozen hetzelfde! Niemand wint.");
        }
        else
        {
            bool userWins = false;
            if (keuzeGebruiker == SSPKeuzes.Steen && keuzePC == SSPKeuzes.Schaar)
            {
                userWins = true;
            }
            else if (keuzeGebruiker == SSPKeuzes.Papier && keuzePC == SSPKeuzes.Steen)
            {
                userWins = true;
            }
            else if (keuzeGebruiker == SSPKeuzes.Schaar && keuzePC == SSPKeuzes.Papier)
            {
                userWins = true;
            }

            if(userWins)
            {
                Console.WriteLine($"Jij wint! Ik koos {keuzePC} ");
                scoreGebruiker++;
            }
            else
            {
                Console.WriteLine($"Ik win! Ik koos {keuzePC} ");
                scorePC++;
            }
            Console.WriteLine($"De score is {scoreGebruiker}-{scorePC}");
            
        }
    } while (scoreGebruiker < MAXSCORE && scorePC < MAXSCORE);


    Console.WriteLine("\nGEDAAN!");
    Console.WriteLine($"De score is {scoreGebruiker}-{scorePC}");
    if (scoreGebruiker == MAXSCORE)
    {
        Console.WriteLine("Jeuj! Je bent gewonnen");
    }
    else
    {
        Console.WriteLine("Helaas, de computer was beter.");
    }
}
```

## CodeMenu

```java
string gebruikersKeuze = "";

do
{
    Console.Clear();
    Console.WriteLine("Welkom bij het menu! Wat is je keuze?");
    Console.WriteLine("a.Oefening 1");
    Console.WriteLine("b.Oefening 2");
    Console.WriteLine("c.Oefening 3");
    Console.WriteLine("d.Oefening 4");
    Console.WriteLine("e.Oefening 5");
    Console.WriteLine("q. Stoppen");
    gebruikersKeuze = Console.ReadLine();

    switch (gebruikersKeuze)
    {
        case "a":
            Console.WriteLine("OEFENING 1 start...");
            //Hier code oefening 1
            break;
        case "b":
            Console.WriteLine("OEFENING 2 start...");
            //Hier code oefening 2...enz.
            break;
        case "q":
            Console.WriteLine("BYEBYE");
            break;
        default:
            Console.WriteLine("Onbekende keuze");
            break;
    }
    Console.WriteLine("Druk enter om voort te gaan.");
    Console.ReadLine();
} while (gebruikersKeuze != "q");

```


## Oplossing BeerSong

```java
for (int i= 99; i > 2; i--)
{
    Console.WriteLine($"{i} bottles of beers on the wall, {i} bottles of beer.");
    Console.WriteLine($"Take one down and pass it around, {i - 1} bottles of beer on the wall.");
}
Console.WriteLine("2 bottles of beer on the wall, 2 bottles of beer.\n" +
                    "Take one down and pass it around, 1 bottle of beer on the wall.\n" +

                    "1 bottle of beer on the wall, 1 bottle of beer.\n" +
                    "Take it down and pass it around, no more bottles of beer on the wall.\n" +

                    "No more bottles of beer on the wall, no more bottles of beer.\n" +
                    "Go to the store and buy some more, 99 bottles of beer on the wall.");
```

::::
