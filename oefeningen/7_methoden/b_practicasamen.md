
<!--# Oefeningen week 1-->


:::{.callout-tip}
Ook dit hoofdstuk bevat meer oefeningen dan je lief zijn. Zoek zelf de oefeningen uit die je aanspreken en focus je op het leren werken met methoden en deze te integreren in een grotere applicatie.

Tip van een lector: meestal als een boek veel oefeningen van een bepaald onderwerp bevat is de kans bestaande dat dit onderwerp misschien wel eens belangrijk kan zijn ;)
:::

:::{.callout-warning}
**OPGELET**: de naam van de methode geeft meestal aan wat er juist moet gebeuren. **``ReadLine`` en ``WriteLine`` mag je bijna NOOIT in methoden gebruiken**. Enkel als de methode bijvoorbeeld ``ToonGetal`` heet dan zal je iets met ``WriteLine`` IN de methode moeten doen.  Heet de methode ``VraagGetal`` dan zal je inderdaad ReadLine mogen gebruiken. In bijna alle andere gevallen mag dat niet en is het dus de bedoeling dat je de vereiste informatie als parameters aan de methode meegeeft (i.p.v ``ReadLine``), en het resultaat als return teruggeeft (i.p.v. ``WriteLine``).
:::

:::{.callout-tip}
Sommige oefeningen zijn van de vorm "Maak een methode die...". Het is steeds de bedoeling dat je de werking van je methode ook test in je main door deze aan te roepen.
:::



# Opwarmers (*Essential*)
Een extra grote hoop oefeningen om je methoden te oefenen ([originele bron](https://codeforwin.org/2016/03/functions-programming-exercises-and-solutions-in-c.html)). De oefeningen zijn ongeveer gerangschikt naar moeilijkheid.



Iedere oefening verwacht dat je steeds een methode schrijft en de werking ervan aantoont:

* Methode ``Kwadraat`` die het kwadraat van een ingevoerd getal berekent ( het getal geef je mee als parameter).
* Methode ``BerekenStraal`` die de straal van een cirkel kan berekenen waarvan je de diameter meegeeft (de diameter geef je mee als parameter).
* Idem voor omtrek en oppervlakte.
* Methode die het grootste van 2 getallen teruggeeft (beide getallen geef je mee als parameter).
* Methode ``IsEven`` die bepaalt of een getal even of oneven is (geeft een ``bool`` terug die ``true`` is indien even).
* Methode ``ToonOnEvenNummers`` die alle oneven getallen van 1 tot n toont waarbij n als parameter wordt meegegeven.
* (PRO) Methode ``IsArmstrong`` die bepaalt of een getal een Armstrong getal is.
* (PRO)Methode ``ToonArmstrongNummers`` die alle Armstrong nummers tot n toont.

::::{.callout-caution collapse="true" title="Oplossing"}

![](../assets/movie.png)

De oplossingen van dit deel worden in volgende kennisclip besproken: [hier](https://ap.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=7d5b4399-8c6c-4207-8e4d-a9af00b4ac58)

::::


# Basic
Maak een methode die jezelf voorstelt op het scherm in de vorm van "Ik ben Tim Dams, ik ben 18 jaar oud en woon in de Lambrisseringsstraat 666".
Deze informatie mag hardcoded in je methode staan. Bedoeling is dat je de methode kan aanroepen als volgt:

```java
MyIntro();
```

:::{.callout-tip}
Deze methode toont enkel zaken op het scherm en heeft dus als returntype ``void``.
:::

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static void MyIntro()
{
    Console.WriteLine("Ik ben Tim Dams, ik ben 18 jaar oud en woon in de Lambrisseringsstraat 666");
}
```
::::


# Basic 2

Zorg er voor dat je nu je naam, leeftijd en adres via parameters kan meegeven en dus de methode als volgt kunt aanhouden:

```java
MyIntro("Jos", 34, "Trammezantlei 21");
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static void MyIntro(string name, int age, string address)
{
    Console.WriteLine($"Ik ben {name}, ik ben {age} jaar oud en woon in de {address}");
}
```
::::


# Grootste methode
Schrijf een methode die 3 ints aanvaardt en vervolgens de grootste van de 3 parameters als resultaat terug geeft.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static int Grootste(int getal1, int getal2, int getal3)
{
    if (getal1 >= getal2 && getal1 >= getal3)
        return getal1;
    if (getal2 >= getal1 && getal2 >= getal3)
        return getal2;

    return getal3;
}
```
::::


# Rekenmachine (*Essential*)

Maak minimaal de methoden genaamd ``TelOp``, ``TrekAf``, ``Vermenigvuldig`` en ``Deel``. Je kan aan deze methoden steeds twee doubles meegeven en het resultaat dat terugkomt is uiteraard de bewerking van die twee parameters.

Maak een eenvoudig programma waarin je die methoden test.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static double TelOp(double a, double b) { return a + b; }
static double TrekAf(double a, double b) { return a - b; }
static double Vermenigvuldig(double a, double b) { return a * b; }
static double Deel(double a, double b) { return a / b; }
```
::::


# A.I. assisted oefeningen generator (*Essential*)

**Dit is geen oefening, maar wel een manier om voor je zelf extra oefeningen te maken.**

Gebruik volgende prompt om één of meerdere goede Methoden-oefeningen te genereren. Vervang "XXXX" door een onderwerp of genre waar je interesse in hebt (bijvoorbeeld  "counterstrike", "F1 racing", etc.).

```text
Je bent een lector van een hogeschool die studenten helpt met programmeren. Je bent heel goed in interessante opgaves in C# te ontwikkelen die studenten motiveert om te blijven programmeren.

Verzin een C# oefening voor mij die me doet oefenen op methoden. Methoden geven maximum 1 element terug. Gebruik dus geen tuples of sets van returntypes bij methoden.

Volgende zaken mogen in de oefening aanwezig zijn:variabelen, if else, switch, expressies, de math bibliotheek en loops. De nadruk ligt op het oefenen op methoden.

Volgende zaken mogen niet in de oefening aan bod komen: arrays, lists, linq en object georiënteerd programmeren.

Laat de oefening gaan over XXXX.
Toon geen voorbeeldcode of oplossing.
Toon wel voorbeelduitvoer. 
Leg ook expliciet uit welke methoden ik moet schrijven en hoe ze werken
Stel ook 3 mogelijke uitbreidingen voor.
"
```

:::{.callout-warning}
**OPGELET**: zoals je weet bestaat de kans dat de A.I. toch oefeningen maakt die je nog niet kan, ondanks de prompt. Het kan bijvoorbeeld gebeuren dat de oefening toch vereist dat je al weet wat arrays zijn. In dat geval kan je zelf de oefening voor je zelf vereenvoudigen, of vragen aan ChatGPT om het stuk dat je niet begrijpt er uit te halen (of uit te leggen wat hij juist bedoelt). 
:::



# Pro Rekenmachine
Kan je een eenvoudige zakrekenmachine maken (inclusief geheugen)? Voeg extra methoden naar keuze toe (denk aan macht, sinus, cosinus, modulo, etc.).

::::{.callout-caution collapse="true" title="Oplossing"}
PRO-oefeningen hebben niet altijd een oplossing...Deze dus ook niet. Sorry.
::::


# Paswoord generator methode
Maak een paswoord generator die paswoorden van bepaalde lengte genereert en bestaat uit willekeurige letters, hoofdletters en cijfers. Plaats deze code in een methode die 1 parameter aanvaardt namelijk de lengte van het paswoord dat gemaakt moet worden. De methode geeft het gegenereerde paswoord terug als resultaat. (tip gebruik een random number generator(s) om getallen te genereren die je ook kan casten naar chars dankzij de Unicode waarde van chars).

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static string PaswoordGenerator(int lengte)
{
    string resultaat = "";
    Random r = new Random();
    for (int i = 0; i < lengte; i++)
    {
        switch(r.Next(0, 3))
        {
            case 0: //cijfer
                resultaat += r.Next(0, 10);
                break;
            case 1: //kleine letters
                resultaat += (char)r.Next('a', 'z'+1);
                break;
            case 2: //hoofdletters
                resultaat += (char)r.Next('A', 'Z'+1);
                break;
        }
    }
    return resultaat;
}
```
::::


# Netflix – Essentials Oefening (Methoden)

Je bent aangenomen als backend developer bij Netflix. Je eerste taak is het schrijven van enkele essentiële hulpmethoden voor een console-applicatie.

Maak een programma dat de onderstaande methoden bevat en **test ze allemaal in de `Main` methode met invoer van de gebruiker**.


## Te implementeren methoden

**`ToonWelkomstBericht`**

- **Doel**: Toont een welkomstboodschap op het scherm.
- **Parameters**: naam van de gebruiker (`string`)
- **Werking**: Print  
  `Welkom terug, [naam]! Tijd om te bingen.`
- **Return type**: `void`


**`BerekenKijktijd`**

- **Doel**: Berekent hoe lang je bezig gaat zijn met kijken.
- **Parameters**:
  - aantal afleveringen (`int`)
  - minuten per aflevering (`int`)
- **Werking**: Vermenigvuldigt beide waarden.
- **Return type**: `int` (totaal aantal minuten)


**`MagKijken`**

- **Doel**: Controleert of een gebruiker oud genoeg is voor een serie.
- **Parameters**:
  - leeftijd gebruiker (`int`)
  - minimumleeftijd serie (`int`)
- **Werking**:  
  Geeft `true` terug als de gebruiker oud genoeg is, anders `false`.
- **Return type**: `bool`

**`GenereerTitel`**

- **Doel**: Maakt een standaard titelstring voor de interface.
- **Parameters**:
  - naam van de serie (`string`)
  - seizoen (`int`)
  - aflevering (`int`)
- **Werking**: Geeft een string terug in het formaat  
  `[SerieNaam] - S[seizoen]E[aflevering]`
- **Return type**: `string`


## Scenario in `Main`

Schrijf een programma dat de volgende flow uitvoert:

1. Vraag de naam van de gebruiker en roep `ToonWelkomstBericht` aan.
2. Vraag de leeftijd van de gebruiker.
3. Vraag:
   - de naam van de serie
   - de minimumleeftijd van de serie
4. Gebruik `MagKijken`:
   - Indien **niet oud genoeg**:  
     Toon `"Helaas, je bent te jong voor deze serie."`  
     en beëindig het programma.
   - Indien **wel oud genoeg**:  
     Toon `"Veel kijkplezier!"`
5. Vraag:
   - hoeveel afleveringen de gebruiker wil kijken
   - hoeveel minuten één aflevering duurt
6. Gebruik `BerekenKijktijd` en toon:
   `Totale kijktijd: X minuten`
7. Vraag:
   - seizoen
   - aflevering
8. Gebruik `GenereerTitel` en toon:
   `Je start met: [titel]`


**Voorbeeld output:** (tekst na `>` is invoer)

```text
Voer je naam in:
> Jan
Welkom terug, Jan! Tijd om te bingen.
Voer je leeftijd in:
> 18
Naam van de serie:
> Squid Game
Minimumleeftijd van de serie:
> 16
Veel kijkplezier!
Hoeveel afleveringen wil je kijken?
> 3
Hoeveel minuten duurt één aflevering?
> 45
Totale kijktijd: 135 minuten
Seizoen:
> 1
Aflevering:
> 1
Je start met: Squid Game - S1E1
```

Ander voorbeeld:

```text
Voer je naam in:
> Emma
Welkom terug, Emma! Tijd om te bingen.
Voer je leeftijd in:
> 13
Naam van de serie:
> Squid Game
Minimumleeftijd van de serie:
> 16
Helaas, je bent te jong voor deze serie.
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
using System;

namespace NetflixEssentials
{
    class Program
    {
        static void Main(string[] args)
        {
            // 1. Naam vragen + welkomstbericht
            Console.WriteLine("Voer je naam in:");
            string naam = Console.ReadLine();
            ToonWelkomstBericht(naam);

            // 2. Leeftijd vragen
            Console.WriteLine("Voer je leeftijd in:");
            int leeftijd = int.Parse(Console.ReadLine());

            // 3. Serie-info vragen
            Console.WriteLine("Naam van de serie:");
            string serieNaam = Console.ReadLine();

            Console.WriteLine("Minimumleeftijd van de serie:");
            int minimumLeeftijd = int.Parse(Console.ReadLine());

            // 4. Mag de gebruiker kijken?
            if (MagKijken(leeftijd, minimumLeeftijd) == false)
            {
                Console.WriteLine("Helaas, je bent te jong voor deze serie.");
                return;
            }
            else
            {
                Console.WriteLine("Veel kijkplezier!");
            }

            // 5. Aantal afleveringen + minuten
            Console.WriteLine("Hoeveel afleveringen wil je kijken?");
            int aantalAfleveringen = int.Parse(Console.ReadLine());

            Console.WriteLine("Hoeveel minuten duurt één aflevering?");
            int minutenPerAflevering = int.Parse(Console.ReadLine());

            // 6. Totale kijktijd berekenen en tonen
            int totaleKijktijd = BerekenKijktijd(aantalAfleveringen, minutenPerAflevering);
            Console.WriteLine($"Totale kijktijd: {totaleKijktijd} minuten");

            // 7. Seizoen en aflevering vragen
            Console.WriteLine("Seizoen:");
            int seizoen = int.Parse(Console.ReadLine());

            Console.WriteLine("Aflevering:");
            int aflevering = int.Parse(Console.ReadLine());

            // 8. Titel genereren en tonen
            string titel = GenereerTitel(serieNaam, seizoen, aflevering);
            Console.WriteLine($"Je start met: {titel}");
        }

        static void ToonWelkomstBericht(string naam)
        {
            Console.WriteLine($"Welkom terug, {naam}! Tijd om te bingen.");
        }

        static int BerekenKijktijd(int aantalAfleveringen, int minutenPerAflevering)
        {
            int totaal = aantalAfleveringen * minutenPerAflevering;
            return totaal;
        }

        static bool MagKijken(int leeftijdGebruiker, int minimumLeeftijdSerie)
        {
            if (leeftijdGebruiker >= minimumLeeftijdSerie)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        static string GenereerTitel(string serieNaam, int seizoen, int aflevering)
        {
            string titel = $"{serieNaam} - S{seizoen}E{aflevering}";
            return titel;
        }
    }
}
```
::::
