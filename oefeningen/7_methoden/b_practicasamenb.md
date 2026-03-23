
<!--# Oefeningen week 2-->


# Film Default (*Essential*)

# Film Default (*Essential*)

Maak een methode FilmRuntime() die 3 parameters accepteert:

1. Een string die de naam van de film bevat
2. Een integer die duur in minuten van de film bevat
3. Een enum-type die het genre van de film bevat (Drama, Actie, etc.)

Indien de duur van de film niet wordt meegeven wordt een standaard  lengte van 90 minuten ingesteld. Indien het genre niet wordt meegeven dan wordt deze default op Onbekend ingesteld.

De methode geeft niets terug maar toont eenvoudigweg de film op het scherm, gevolgd door z’n duur en genre in volgende formaat. Voorbeelduitvoer=


```text
The Matrix (120 minuten, Actie)
```

Toon aan in je main dat de methode werkt met zowel 1, 2 als 3 parameters. Toon ook aan dat je met *named arguments* de methode kan aanroepen.




# Opwarmers met geavanceerde methoden (*Essential*)

# Opwarmers met geavanceerde methoden (*Essential*)

Zorg ervoor dat de opwarmers vooraan deze reeks oefeningen steeds minstens 1 optionele parameter hebben. Roep deze methoden aan via named parameters.



# Roulette (*Essential*)

# Roulette (*Essential*)


* Ga ervan uit dat de gebruiker géén foute invoer doet.
* Volgende oefening is een variant op een opgave uit de vaardigheidsproef van januari 2024.
* Het doel van deze applicatie is aantonen dat je beter niet gokt, want de kans op winst is zeer klein (*"het huis wint altijd"*).

## Methode Roulette

Maak een methode ``Roulette``. De methode aanvaart een double en een int als parameter en geeft een double terug. De int parameter is een optionele parameter die standaard op 10 staat. 

De methode zal een casino-simuleren en geeft op het einde de winst (of verlies) van de speler terug. De double die wordt meegegeven is het startkapitaal. De int is het aantal simulaties *n*. De methode zal *n* roulette-rondes simuleren en telkens de winst of verlies bijhouden.

Iedere van de n simulaties gebeurt het volgende: 

1. De computer kiest een willekeurig getal tussen 0 en 60. Dit is zogezegd de keuze van de speler bij roulette. 
2. De computer kiest een willekeurig getal tussen 0 en 60. Dit is zogezegd het getal waar de roulette-balletje op belandt. 
3. Indien beide getallen overeenkomen zal het startkapitaal van de speler met 1 verhogen. Indien het getal niet gelijk was wordt er 0.1 van het kapitaal afgehouden.

Finaal geeft de methode terug hoeveel geld er nog overblijft na *n* simulaties.

## Applicatie

Maak een applicatie die aan de gebruiker een startkapitaal vraagt. Vervolgens gebruik je de ``Roulette`` methode om aan de speler te tonen hoeveel er van zijn kapitaal zou overblijven als hij: 

* 10 keer het roulette-spel speelt 
* 100 keer 
* 1000 keer
* 10000 keer
  
Toon telkens ook hoeveel verlies (of winst) dit is ten opzichte van het startkapitaal. Bij winst wordt dit verschil in groene letters getoond, bij verlies in rode letters. 

## Voorbeeld uitvoer

Tekst die start met ">" is invoer van de gebruiker.

```text
Wat is je startkapitaal?
>1000
Gegeven deze informatie krijg ik volgende resultaten
Als je 10 keer roulette speelt zou je eindkapitaal 999,2 zijn, dat is een verschil van -0,8.
Als je 100 keer roulette speelt zou je eindkapitaal 993,4 zijn, dat is een verschil van -6,6.
Als je 1000 keer roulette speelt zou je eindkapitaal 923,8 zijn, dat is een verschil van -86,2.
Als je 10000 keer roulette speelt zou je eindkapitaal 880,0 zijn, dat is een verschil van -120.
```

:::{.callout-warning}
Je bent met doubles aan het werken...Is het je opgevallen dat je soms heel vreemde afrondingen krijgt, of dat 10,0 plots 10,00000003 wordt? Dit komt doordat doubles (net als alle datatypes) maar een bendaring kunnen bewaren , vanwege het aantal bytes dat ze innemen. Dit kan soms leiden tot onverwachte afrondingsfouten. Afhankelijk van de oefening is er in dergelijke gevallen niets mis mee om waar nodig dan *manueel* af te ronden met `Math.Round()`. 

:::




# Oude oefeningen leesbaarder maken

# Oude oefeningen leesbaarder maken

Kan je code uit vorige hoofdstukken herbruiken door deze in handige methoden te plaatsen zodat je code leesbaarder én bruikbaarder wordt?




# Verhaalgenerator

# Verhaalgenerator

Bekijk het all-one-project ["De verhaal generator"](../EindeTests/A_DEEL1_AllInOne/3_verhaalgenerator.md): kan jij dit project afwerken zoals onderaan de opgave wordt voorgesteld?


# Hoe ver geraak je?

# Hoe ver geraak je?

[Challenges](https://edabit.com/challenges)


# Havenbeheer (*Final Essentials*)

# Havenbeheer (*Final Essentials*)

Tijd om al je kennis over methoden samen te brengen in de haven van Antwerpen. Je gaat een systeem schrijven om de toegang en kosten voor vrachtschepen te berekenen.

## De methoden

Schrijf volgende methoden (en denk goed na over de return types!):

1. **`ControleerDiepgang`**:
   * Deze methode aanvaardt de diepgang van een schip (`double`).
   * Er is een optionele parameter `kadeDiepte` die standaard `12.5` (meter) is.
   * De methode geeft `true` terug als de diepgang *kleiner of gelijk* is aan de kade diepte, anders `false`.

2. **`BerekenLadingGewicht`** (Je moet deze methode **overloaden**!):
   * **Versie 1 (Containers):** Aanvaardt het aantal containers (`int`) en het gemiddeld gewicht per container (`double`). Geeft het totaal gewicht terug.
   * **Versie 2 (Vloeistof/Bulk):** Aanvaardt het volume (`double`) en de dichtheid (`double`). Geeft het totaal gewicht terug (`volume * dichtheid`).

3. **`BerekenTotaleKost`**:
   * Aanvaardt het totale gewicht (`double`) en een `bool` `isGevaarlijk` (die standaard op `false` staat).
   * De basisprijs is €15 per ton (dus gewicht * 15).
   * Als de lading gevaarlijk is, komt er 30% bij de totaalprijs bij.
   * Geef de (afgeronde) prijs terug.

## Het scenario

Schrijf een programma dat:

1. De naam en diepgang van een schip vraagt.
2. Controleert of het schip binnen mag via `ControleerDiepgang`.
3. **Belangrijk:** Toon in je code aan dat je de `ControleerDiepgang` methode ook kan aanroepen met *named arguments* (stel de kade diepte in op bv. 14.0m voor dit testscenario).
4. Als het schip **niet** binnen mag: toon een foutmelding en stop.
5. Als het schip **wel** binnen mag:
   * Vraag wat voor lading het is (Container of Bulk).
   * Vraag de nodige gegevens (aantal/gewicht of volume/dichtheid).
   * Roep de **juiste** overload van `BerekenLadingGewicht` aan.
   * Vraag of de lading gevaarlijk is.
   * Bereken en toon de totale kost via `BerekenTotaleKost`.

## Voorbeeld uitvoer

Tekst die start met ">" is invoer van de gebruiker.

```text
Welkom bij Havenbeheer Antwerpen.
Naam van het schip?
> The unsinkable II
Diepgang in meters?
> 11,5
Het schip mag de haven binnen.

Type lading (1=Containers, 2=Bulk)?
> 1
Aantal containers?
> 250
Gemiddeld gewicht per container (ton)?
> 12
Bevat het schip gevaarlijke goederen (j/n)?
> j

--- RAPPORT : The unsinkable II ---
Totaal gewicht: 3000 ton
Type: Gevaarlijke lading
Totale kostprijs: € 58500
```

Nog een voorbeeld (te diep):
```text
Welkom bij Havenbeheer Antwerpen.
Naam van het schip?
> Titanic
Diepgang in meters?
> 50
ALARM: Het schip ligt te diep (max 14m) en mag niet binnenkomen!
```





::::{.callout-caution collapse="true" title="Oplossing"}

# Deel 2 Geavanceerde methode concepten

## Film Default

```java
static void FilmRuntime(string naam, int duur= 90, Genre filmgenre= Genre.Onbekend )
{
    Console.WriteLine($"{naam} ({duur}, {filmgenre})");
}
```

## Roulette

```csharp
static void Main(string[] args)
{
    int aantalKeer = 10;
    Console.WriteLine("Wat is je startkapitaal?");
    double startKap = double.Parse(Console.ReadLine());
    for (int i = 0; i < 4; i++)
    {
        double nieuwKap = Roulette(startKap, aantalKeer);
        Console.WriteLine($"Als je {aantalKeer} keer roulette speelt zou je eindkapitaal {nieuwKap:0.0} zijn, dat is een verschil van {nieuwKap-startKap:0.0}.");


        aantalKeer *= 10;
    }
}

static double Roulette(double startKapitaal, int aantalSim = 10)
{
    Random rng = new Random();
    double eindKapitaal = startKapitaal;
    for (int i = 0; i < aantalSim; i++)
    {
        if (rng.Next(0, 60) == rng.Next(0, 60))
        {
            eindKapitaal++;
        }
        else
            eindKapitaal -= 0.1;
    }
    return eindKapitaal;
}
```


::::
