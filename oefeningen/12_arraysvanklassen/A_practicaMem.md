# Prijzen met foreach

# Prijzen met foreach

Maak een array die tot 20 prijzen (``double``) kan bewaren. Vraag aan de gebruiker om 20 prijzen in te voeren en bewaar deze in de array. Doorloop vervolgens m.b.v. een ``foreach``-lus de volledige array en toon enkel de elementen op het scherm wiens prijs hoger of gelijk is aan €5.00. Toon op het einde van het programma het gemiddelde van alle prijzen (dus inclusief de lagere prijzen).


# Computer-winkel (*Essential*)

Een firma heeft een grote lijst met computeronderdelen en wil hier de nodige filters op kunnen toepassen.

## Computeronderdeel
De klasse computeronderdeel bestaat uit volgende autoproperties:

* Prijs (int)
* ID (int)
* InDoos (bool)

Voorts heeft de klasse een default constructor die voorgaande autoproperties op willekeurige waarden instelt (prijs positief tot max 1000, ID een getal tussen 100 en 999, en InDoos heeft 50% kan om true te zijn)

De klasse heeft 1 methode ``ToonInfo`` die de 3 waarden van het object naar het scherm stuurt:

```text
Prijs: 845, ID: 45, InDoos: true
```

## Filteren

Maak in je hoofdprogramma een List<ComputerOnderdeel> dat je vult met 100 willekeurige  aangemaakte objecten.
Vervolgens:

* Roep de ``ToonInfo`` methode aan van ieder computeronderdeel in de lijst aan.
* Roep de ``ToonInfo`` methode aan van ieder computeronderdeel met een prijs boven de 400.
* Idem nu voor alle onderdelen die in een doos zitten.
* Idem nu voor alle onderdelen die een even ID hebben én wiens prijs onder de 200 ligt.

Tussen iedere filter toon je op het scherm wat de volgende lijst juist voorstelt (bv "Nu tonen we alle onderdelen in een doos").

## Managen

Vraag nu aan de gebruiker wat er met de lijst moet gebeuren:

1. Alle objecten in een doos verwijderen
2. Alle objecten met een prijs kleiner dan 100 verwijderen.

Toon het resultaat van de aangepaste lijst (door de ``ToonInfo`` van ieder object in de lijst aan te roepen.)

## Finale

Kan je hier een volledige applicatie van maken die een computerfirma als een soort inventaristool kan gebruiken? (en dus met de nodige menu's en mogelijkheden om bijvoorbeeld een nieuw onderdeel toe te voegen.) Kijk zeker eens naar volgende oefening daaromtrent.

:::{.callout-tip}
Dit soort "de array als inventaris"-oefeningen waarbij je allerlei zaken met die array moet doen zijn geliefkoosde oefeningen en zal je vaak zien terugkomen.
:::


# Pokédex

# Pokédex

Maak een eenvoudige Pokédex (een *"bibliotheek van pokémon"*) die als volgt werkt. De gebruiker kan kiezen uit 5 menu-opties:

1. Voeg Pokémon toe. Deze optie zal een random Pokémon object aanmaken en achteraan de Pokédex toevoegen.
2. Toon Pokédex. Deze optie zal alle pokémon in de pokédex op het scherm tonen door de ShowInfo methode van ieder object in de lijst aan te roepen.
3. Remove random: deze optie zal een pokémon op een willekeurige plek in de lijst verwijderen.
4. Verwijder alles: deze optie zal de pokédex leeg maken.
5. Stoppen: het programma sluit af.

Het menu blijft getoond worden tot de gebruiker de optie 5 kiest.



# Student Organizer (*Essential*)

We gaan nu de Student-klasse uit een vorige hoofdstuk (zie onderaan de opgave) gebruiken om een ``List<Student>`` van studenten te vullen.

Maak daarom een studenten-lijst aan die 5 studenten bevat :

Initialiseer alle properties van iedere student op een standaard-waarde via de default constructor.
 
Het programma start op en geeft de gebruiker een menu waaruit kan gekozen worden:

1. Student gegevens invoeren (eerstvolgende student wordt ingevuld)
Vervolgens moet de gebruiker kiezen welke student (nummer) moet ingevuld worden, van 1 tot 5. Vervolgens kan de gebruiker de gegevens 1 voor 1 invullen (oude gegevens worden zonder pardon overschreven).

 
2. Student gegevens tonen (alle studenten)
Wanneer de gebruiker voor 2 kiest dan wordt de GeefOverzicht-methode aangeroepen van iedere student zodat de 5 ‘rapportjes’ onder elkaar op het scherm 

Extra's:
Bouw extra functionaliteit naar keuze bij de StudentOrganizer, zoals:
* Vragen aan de gebruiker of de oude gegevens overschreven mogen worden, indien deze reeds ingevuld zijn.
* Inbouwen van een eenvoudige zoekfunctie. Je kan bijvoorbeeld zoeken op naam (exacte invoer) of alle studenten tonen die in een bepaalde klas zitten of wiens punten onder/boven een bepaalde waarde zitten. Je kan dit als extra menuitem inbouwen, waarbij een nieuw menu verschijnt dat de gebruiker de verschillende zoekmogelijkheden voorstelt.
* Verwijderen van een student (waarbij alle gegevens worden gewist)
* Controle in alle methode inbouwen zodat ‘lege studenten’ worden genegeerd. Wanneer bijvoorbeeld menu item 2 wordt uitgevoerd (alle studenten tonen) dan worden enkel de ingevulde studenten getoond.


## StudentKlasse
```csharp
enum Klassen { EA1, EA2, EA3, EA4}

class Student
{
    public string Naam { get; set; }
    public int Leeftijd { get; set; }
    public Klassen Klas { get; set; }

    public int PuntenCommunicatie { get; set; }
    public int PuntenProgrammingPrinciples { get; set; }
    public int PuntenWebTech { get; set; }

    public double BerekenTotaalCijfer()
    {
        return (PuntenCommunicatie + PuntenProgrammingPrinciples + PuntenWebTech) / 3.0;
    }

    public void GeefOverzicht()
    {
        Console.WriteLine($"{Naam}, {Leeftijd} jaar");
        Console.WriteLine($"Klas: {Klas}");
        Console.WriteLine();
        Console.WriteLine("Cijferrapport");
        Console.WriteLine("*************");
        Console.WriteLine($"Communicatie:\t\t{PuntenCommunicatie}");
        Console.WriteLine($"Programming Principles:\t{PuntenProgrammingPrinciples}");
        Console.WriteLine($"Web Technology:\t\t{PuntenWebTech}");
        Console.WriteLine($"Gemiddelde:\t\t{BerekenTotaalCijfer():0.0}");
    }
}
```

:::{.callout-tip}
Je kan aan de gebruiker enkel strings als input vragen. Om dus zijn ingevoerde klas om te zetten naar een enum gebruik je ofwel:
a) een switch of if-else structuur die naargelang de invoer een andere enumwaarde toekent aan een enumvariabele
b) (PRO) je gebruikt ``Enum.Parse()`` (vb : ``Klassen mijnKlas= (Klassen)Enum.Parse(typeof(Klassen), "EA2");``)
:::



# Fastfood restaurant (Essential) (GPT)

Je gaat een bestelsysteem maken voor een fastfoodrestaurant. Klanten plaatsen bestellingen, de keuken verwerkt ze, en de bestellingen worden opgehaald. 


**Functionaliteiten:**

* Klanten plaatsen bestellingen:
   * Elke klant bestelt één of meerdere items.
   * Bestellingen worden in een Queue opgeslagen (``Queue<Bestelling>``).
* Bestellingen worden verwerkt:
   * De keuken verwerkt bestellingen op volgorde en houdt bij welke gerechten populair zijn in een Dictionary (``Dictionary<string, int>``).
   * De keuken haalt de eerste bestelling uit de Queue en toont de gerechten.
* Geschiedenis van bestellingen
   * Een List houdt alle afgewerkte bestellingen bij (``List<Bestelling>``)

Je zal volgende klassen nodig hebben:

## Klasse Bestelling

Volgende klasse stelt een bestelling voor:

```csharp
class Bestelling
{
    public List<string> Gerechten { get; set; }

    public Bestelling(List<string> gerechten)
    {
        Gerechten = gerechten;
    }
}
```

## Hoofdprogramma

In het hoofdprogramma maak je een Queue van bestellingen aan. Schrijf een menu waarin de gebruiker kan kiezen uit volgende opties:

1. Bestelling plaatsen
2. Bestellingen verwerken
3. Geschiedenis van bestellingen tonen
4. Stoppen

### Bestelling plaatsen

De gebruiker kan een bestelling plaatsen. De gebruiker geeft een lijst van gerechten in, gescheiden door enter. Wanneer de gebruiker "stop" als gerecht invoert stopt het verwerken. Het Bestellingsobject wordt aangemaakt en aan de Queue toegevoegd.

### Bestellingen verwerken

De keuken verwerkt de bestellingen. De keuken haalt de eerste bestelling uit de Queue en toont de gerechten. De keuken houdt bij welke gerechten populair zijn in een Dictionary (telkens een gerecht is besteld verhoog je de teller van dat gerecht in de dictionary). De bestelling wordt toegevoegd aan de geschiedenis.

### Geschiedenis van bestellingen tonen

Toon de geschiedenis van bestellingen.

### Stoppen

Het programma stopt.

## Voorbeeld werking

Volgende objecten heb je nodig:

```csharp
Queue<Bestelling> bestellingen = new Queue<Bestelling>();
Dictionary<string, int> populariteit = new Dictionary<string, int>();
List<Bestelling> geschiedenis = new List<Bestelling>();
```

En dit zijn de methoden in je hoofdprogramma:

```csharp   
static void PlaatsBestelling(Queue<Bestelling> bestellingen)
static void VerwerkBestelling( Queue<Bestelling> bestellingen,List<Bestelling> geschiedenis,Dictionary<string, int> populariteit)
static void ToonGeschiedenis( List<Bestelling> geschiedenis,Dictionary<string, int> populariteit )
```



# Bookmark Manager

# Bookmark Manager

Maak een "bookmark manager". Deze tool zal in de console aan de gebruiker 5 favoriete sites vragen: ``naam`` en ``url``. Vervolgens zal de tool alle sites in een lijst tonen met een nummer voor. De gebruiker kan dan de nummer intypen en de tool zal automatisch de site in een vereenvoudigde versie op het scherm tonen. 

Je opdracht:

1. Maak een array of ``List`` waarin je 5 bookmark objecten kan plaatsen. 
2. Vul de applicatie aan zodat de gebruiker: een bestaand bookmark kan verwijderen en een bestaand bookmark kan aanpassen

:::{.callout-tip}
Probeer met behulp van hulpmethoden in Program.cs om zo veel mogelijk code te herbruiken.
:::

Enkele zaken die je nodig hebt:

**BookMark klasse:**
```csharp
class BookMark
{

    public string Naam { get; set; }
    public string URL { get; set; }
    public void ToonSite()
    {
        WebClient wc = new WebClient();
        string result = wc.DownloadString(URL);
        Console.WriteLine(GetPlainTextFromHtml(result));
    }
    //Bron: https://www.mercator.eu/mercator/std/info_aruba/reporting-hoe-gegevens-afdrukken-met-html-tags.html
    private string GetPlainTextFromHtml(string htmlString)
    {
        string htmlTagPattern = "<.*?>";
        var regexCss = new Regex("(\\<script(.+?)\\</script\\>)|(\\<style(.+?)\\</style\\>)", RegexOptions.Singleline | RegexOptions.IgnoreCase);
        htmlString = regexCss.Replace(htmlString, string.Empty);
        htmlString = Regex.Replace(htmlString, htmlTagPattern, string.Empty);
        htmlString = Regex.Replace(htmlString, @"^\s+$[\r\n]*", "", RegexOptions.Multiline);
        htmlString = htmlString.Replace("&nbsp;", " ");
        return htmlString;
    }
}
```


Voorbeeld van hoe de bookmark klasse zal werken:

```csharp
BookMark u = new BookMark();
u.Naam = "Google";
u.URL = "https://www.google.be";
u.ToonSite();
```

Kan je je eigen "console browser" maken?


# Speelkaarten

# Speelkaarten

Maak een klasse ``Speelkaart`` die je kan gebruiken om een klassieke kaart met getal en "kleur" voor te stellen. 

* Een kaart heeft 2 eigenschappen, een getal van 1 tot en met 13 (boer=11, koningin= 12, heer= 13).
* Een kleur, de zogenaamde suite. Deze stel je voor via een enumtype en kan als waarden Schoppen, Harten, Klaveren of Ruiten zijn.


Schrijf nu 2 loops die de 52 kaarten van een standaard pak in een ``List<SpeelKaart>`` lijst plaatst.

Maak een applicatie die telkens een willekeurige kaart uit de *stapel* trekt en deze aan de gebruiker toont. De kaart wordt na het tonen ook uit de lijst verwijderd. Door met een willekeurig getal te werken hoef je dus je deck niet te schudden.


# OO Textbased game

# OO Textbased game

Bij de all-in-one projecten van dit semester vind je als eerst een tekstgebaseerde game ([hier](../EindeTests/A_DEEL2_AllInOne/2_OOTextGame.md)). Volg deze uitleg, maak het spel en voeg je eigen zotte ideeën toe.



# Project: CodeChella (*Final Essential*)

**Scenario:**
Je bent de organisator van **CodeChella**, het festival waar programmeurs en muziekliefhebbers samenkomen om te genieten van beats en bytes. Het is chaos achter de schermen: de line-up moet beheerd worden, de rijen aan de ingang puilen uit en niemand weet hoeveel VIP-tickets er effectief verkocht zijn.

Aan jou om de **FestivalManager** te schrijven die orde schept in deze wanorde.

**Specificaties:**

Deze oefening combineert de drie grote collecties: `List`, `Queue` en `Dictionary`.

## 1. De Klassen

Maak eerst de nodige hulpklassen:

*   **`Artiest`**:
    *   `Naam` (`string`)
    *   `Genre` (`string`) - bv. "Rock", "Techno", "Pop".
    *   `Gage` (`double`) - Hoeveel kost deze artiest per uur?

*   **`Bezoeker`**:
    *   `Naam` (`string`)
    *   `Ticket` (`TicketType`) - Enum met waarden: `Dagticket`, `Combi`, `VIP`.
    *   `HeeftRugzak` (`bool`) - Heeft de bezoeker een rugzak bij? (Belangrijk voor security!).

## 2. De FestivalManager (Main)

Schrijf een applicatie die de volgende datastructuren beheert:

*   `List<Artiest> LineUp`: De lijst van alle artiesten.
*   `Queue<Bezoeker> IngangRij`: De rij mensen die staan te wachten.
*   `Dictionary<TicketType, int> TicketVerkoop`: Houdt bij hoeveel tickets er per type gescand zijn.

Bouw een menu met volgende opties:

### A. Line-up Beheer (List)
1.  **Artiest toevoegen:** Voeg een nieuwe artiest toe aan de lijst.
2.  **Filter Line-up:** Vraag de gebruiker om een genre en toon enkel de artiesten van dat genre.
3.  **Toon Totaalbudget:** Loop door de lijst en bereken de som van alle gages.

### B. De Ingang (Queue)
1.  **Rij Simuleren:** Maak 5 willekeurige bezoekers aan (met random tickettype en rugzak-status) en zet ze in de `IngangRij` (`Enqueue`).
2.  **Security Check:** Haal de bezoekers één voor één uit de rij (`Dequeue`):
    *   Indien `HeeftRugzak` waar is: Toon *"STOP! Security check voor [Naam]..."* en wacht 1 seconde (met `Thread.Sleep(1000)`).
    *   Indien geen rugzak: Toon *"[Naam] mag doorlopen."*.
    *   **Belangrijk:** Tel bij elke *binnengelaten* bezoeker zijn tickettype op in de `TicketVerkoop` dictionary.

### C. Statistieken (Dictionary)
1.  **Toon Overzicht:** Loop door de `TicketVerkoop` dictionary en toon per type hoeveel mensen er binnen zijn.
    *   *Voorbeeld output:*
        *   Dagticket: 120
        *   VIP: 5
        *   Combi: 45

**Extra Uitdaging (Pro):**
VIP-bezoekers vinden het niet leuk om in de rij te staan.
*   Maak een aparte `Queue<Bezoeker> VipRij`.
*   Zorg dat bij de security check **eerst** de VIP-rij wordt leeggemaakt, en pas als die leeg is, de gewone rij.




::::{.callout-caution collapse="true" title="Oplossing"}
# Prijzen met foreach

```java
var prijzen = new double[20];
for (int i = 0; i < prijzen.Length; i++)
{
    Console.WriteLine($"Geef prijs {i}:");
    prijzen[i] = double.Parse(Console.ReadLine());
}

double som = 0;
Console.WriteLine("Prijzen groter of gelijk aan 5:");
foreach (var prijs in prijzen)
{
    som += prijs;

    if(prijs>=5.00)
    {
        Console.WriteLine(prijs);
    }
}
Console.WriteLine($"Gemiddelde is {som/prijzen.Length}");
```

# Computer-winkel

Dank aan Jasper Van Meel voor deze oplossing! Ook dank aan de andere studenten die een oplossing instuurden. Doe zo voort!

```java
class ComputerOnderdeel
{
    private static Random rng = new Random();

    public int Prijs { get; set; }

    public int ID { get; set; }

    public bool InDoos { get; set; }

    public ComputerOnderdeel()
    {
        Prijs = rng.Next(0, 1001);
        ID = rng.Next(100, 1000);

        if (rng.Next() % 2 == 0)
        {
            InDoos = true;
        }
    }

    public void ToonInfo()
    {
        Console.WriteLine($"Prijs: {Prijs}, ID: {ID}, InDoos: {InDoos}");
    }
}
```

```java 

static void Main(string[] args)
{
    //Console.WriteLine("Hello World!");

    List<ComputerOnderdeel> onderdelen = new List<ComputerOnderdeel>();

    //100 computeronderdelen aanmaken
    for (int i = 0; i < 100; i++)
    {
        onderdelen.Add(new ComputerOnderdeel());
    }

    //ToonInfo() voor alle onderdelen
    Console.WriteLine("ToonInfo() voor alle onderdelen in de lijst:");
    ToonInfo_Alle(onderdelen);

    //ToonInfo() voor onderdelen met prijs > 400
    ToonInfo_PrijsGroterDan400(onderdelen);

    //ToonInfo() voor onderdelen in een doos
    ToonInfo_OnderdelenInDoos(onderdelen);

    //ToonInfo() voor onderdelen met even ID & prijs < 200
    ToonInfo_EvenIDPrijsGroterDan200(onderdelen);


    //verwijder alle onderdelen waarvoor InDoos == true
    Verwijder_InDoos(onderdelen);

    //verwijder alle onderdelen waarvoor price < 100
    Verwijder_PrijsOnder100(onderdelen);


    //ToonInfo() van overgebleven onderdelen
    Console.WriteLine("\n\n\nInformatie van de overgebleven onderdelen:");
    ToonInfo_Alle(onderdelen);
}

static void ToonInfo_Alle(List<ComputerOnderdeel> onderdelen)
{
    foreach (var item in onderdelen) 
    { 
        item.ToonInfo(); 
    }
}

static void ToonInfo_PrijsGroterDan400(List<ComputerOnderdeel> onderdelen)
{
    Console.WriteLine("\n\n\nToonInfo() voor alle onderdelen met een prijs > 400:");
    foreach (var item in onderdelen)
    {
        if (item.Prijs > 400)
        {
            item.ToonInfo();
        }
    }
}

private static void ToonInfo_OnderdelenInDoos(List<ComputerOnderdeel> onderdelen)
{
    Console.WriteLine("\n\n\nToonInfo() voor alle onderdelen in een doos:");
    foreach (var item in onderdelen)
    {
        if (item.InDoos == true)
        {
            item.ToonInfo();
        }
    }
}

private static void ToonInfo_EvenIDPrijsGroterDan200(List<ComputerOnderdeel> onderdelen)
{
    Console.WriteLine("\n\n\nToonInfo() voor alle onderdelen met een even ID & prijs < 200");
    foreach (var item in onderdelen)
    {
        if (item.ID % 2 == 0 && item.Prijs < 200)
        {
            item.ToonInfo();
        }
    }
}

private static void Verwijder_InDoos(List<ComputerOnderdeel> onderdelen)
{
    string userInput = "";

    do
    {
        Console.WriteLine("\n\n\nWil je alle onderdelen die in een doos zitten verwijderen? (y/n)");
        userInput = Console.ReadLine();
    } while (userInput != "y" && userInput != "n" && userInput != "yes" && userInput != "no");

    if (userInput == "y" || userInput == "yes")
    {
        for (int i = onderdelen.Count - 1; i >= 0; i--)
        {
            if (onderdelen[i].InDoos)
            {
                onderdelen.Remove(onderdelen[i]);
            }
        }
        Console.WriteLine("Verwijderd.");
    }
}

private static void Verwijder_PrijsOnder100(List<ComputerOnderdeel> onderdelen)
{
    string userInput = "";

    do
    {
        Console.WriteLine("\n\n\nWil je alle onderdelen met een prijs lager dan 100 verwijderen? (y/n)");
        userInput = Console.ReadLine();
    } while (userInput != "y" && userInput != "n" && userInput != "yes" && userInput != "no");

    if (userInput == "y" || userInput == "yes")
    {
        for (int i = onderdelen.Count - 1; i >= 0; i--)
        {
            if (onderdelen[i].Prijs < 100)
            {
                onderdelen.Remove(onderdelen[i]);
            }
        }
        Console.WriteLine("Verwijderd");
    }
}
```
# Student Organizer

Dank aan Marouane Mairouche op wiens code volgende oplossing is gebaseerd.

```java
static void Main(string[] args)
{
    List<Student> Lijst = new List<Student>()
    {
        new Student(),
        new Student(),
        new Student(),
        new Student(),
        new Student()
    };
    
    string exit = "";

    do
    {
        ToonMenuOpties();
        exit = Console.ReadLine().ToUpper();
        switch (exit)
        {
            case "A":
                VoerNieuweStudentInLijstIn(Lijst);
                break;
            case "B":
                ToonAlleStudentenVanLijst(Lijst);
                break;
            case "C":
                ToonStudentVanLijst(Lijst);
                break;


            case "D":
                VerwijderStudentVanLijst(Lijst);
                break;
        }
    } while (exit != "Q");

}

private static void ToonMenuOpties()
{
    Console.WriteLine("Maak een keuze");
    Console.WriteLine("A) Student gegevens invoeren");
    Console.WriteLine("B) Student gegevens tonen");
    Console.WriteLine("C) Gebruik zoek functie");
    Console.WriteLine("D) Student gegevens verwijderen");
    Console.WriteLine("Q) Programma afsluiten");
}

private static void VoerNieuweStudentInLijstIn(List<Student> Lijst)
{
    Console.WriteLine("Welke studentnummer wil je invoeren?");
    int student = int.Parse(Console.ReadLine()) - 1;

    if (Lijst[student].Naam != "Onbekend")
    {
        Console.WriteLine("Wilt u de gegevens overschrijven?[Y/N]");
        string option = Console.ReadLine().ToUpper();

        if (option == "Y")
        {
            Lijst[student] = Student.MaakStudentViaReadLine();
        }
    }
    else
    {
        Lijst[student] = Student.MaakStudentViaReadLine();
    }
}

private static void ToonAlleStudentenVanLijst(List<Student> Lijst)
{
    foreach (var item in Lijst)
    {
        if (item.Naam != "Onbekend")
        {
            item.GeefOverzicht();
        }
    }
}

private static void ToonStudentVanLijst(List<Student> Lijst)
{
    Console.WriteLine("Geef de naam van de student");
    string name = Console.ReadLine();
    foreach (var item in Lijst)
    {
        if (item.Naam == name)
        {
            item.GeefOverzicht();
        }
    }
}

private static void VerwijderStudentVanLijst(List<Student> Lijst)
{
    Console.WriteLine("Welke studentnummer wil je invoeren?");
    int student = int.Parse(Console.ReadLine()) - 1;
    Lijst[student] = new Student();
}
}
```

# Fastfood Restaurant

```java
using System;
using System.Collections.Generic;
using System.Linq;

class Bestelling
{
    public List<string> Gerechten { get; set; }

    public Bestelling(List<string> gerechten)
    {
        Gerechten = gerechten;
    }

}

class Program
{


    static void Main()
    {
		     Queue<Bestelling> bestellingen = new Queue<Bestelling>();
     Dictionary<string, int> populariteit = new Dictionary<string, int>();
     List<Bestelling> geschiedenis = new List<Bestelling>();

		string keuze="";
        do
        {
            Console.WriteLine("\nMenu:");
            Console.WriteLine("1. Bestelling plaatsen");
            Console.WriteLine("2. Bestellingen verwerken");
            Console.WriteLine("3. Geschiedenis van bestellingen tonen");
            Console.WriteLine("4. Stoppen");
            Console.Write("Kies een optie: ");
            
            keuze = Console.ReadLine();
            Console.WriteLine();

            switch (keuze)
            {
                case "1":
                    PlaatsBestelling(bestellingen);
                    break;
                case "2":
                    VerwerkBestelling(bestellingen, geschiedenis, populariteit);
                    break;
                case "3":
                    ToonGeschiedenis(geschiedenis, populariteit);
                    break;
                case "4":
                    Console.WriteLine("Programma wordt afgesloten...");
                    break;
                default:
                    Console.WriteLine("Ongeldige keuze, probeer opnieuw.");
                    break;
            }
        }while(keuze!="4");
    }

    static void PlaatsBestelling(Queue<Bestelling> bestellingen)
    {
        List<string> gerechten = new List<string>();
        Console.WriteLine("Voer de gerechten in (typ 'stop' om te stoppen):");
		string gerecht="";
       do
        {
            Console.Write("Gerecht: ");
            gerecht = Console.ReadLine();

            if (gerecht.ToLower() != "stop")
                gerechten.Add(gerecht);

           
        }while(gerecht!="stop");

        if (gerechten.Count > 0)
        {
            Bestelling nieuweBestelling = new Bestelling(gerechten);
            bestellingen.Enqueue(nieuweBestelling);
            Console.WriteLine($"Bestelling toegevoegd: {nieuweBestelling}");
        }
        else
        {
            Console.WriteLine("Geen gerechten ingevoerd. Bestelling geannuleerd.");
        }
    }

    static void VerwerkBestelling( Queue<Bestelling> bestellingen,List<Bestelling> geschiedenis,Dictionary<string, int> populariteit)
    {
        if (bestellingen.Count == 0)
        {
            Console.WriteLine("Geen bestellingen in de wachtrij.");
            return;
        }

        Bestelling bestelling = bestellingen.Dequeue();
        geschiedenis.Add(bestelling);

        Console.WriteLine($"Bestelling verwerkt: {bestelling}");

        foreach (string gerecht in bestelling.Gerechten)
        {
            if (populariteit.ContainsKey(gerecht))
                populariteit[gerecht]++;
            else
                populariteit[gerecht] = 1;
        }
    }

    static void ToonGeschiedenis(  List<Bestelling> geschiedenis,Dictionary<string, int> populariteit  )
    {
        if (geschiedenis.Count == 0)
        {
            Console.WriteLine("Geen bestellingen in de geschiedenis.");
            return;
        }

        Console.WriteLine("\nGeschiedenis van bestellingen:");
        foreach (Bestelling bestelling in geschiedenis)
        {
            Console.WriteLine(bestelling);
        }

        Console.WriteLine("\nPopulaire gerechten:");
        foreach (var item in populariteit)
        {
            Console.WriteLine($"{item.Key}: {item.Value} keer besteld");
        }
    }
}
```



# Speelkaarten

Main:
```java
List<Speelkaart> boekKaarten = new List<Speelkaart>();
for (int i = 0; i < 4; i++)
{
    for (int j = 1; j < 14; j++)
    {
        Speelkaart toAdd = new Speelkaart() { Getal=j, Suite=(Suit)i  };
        boekKaarten.Add(toAdd);
    }
}
Random r = new Random();
while (boekKaarten.Count > 0)
{
    Speelkaart getrokken = boekKaarten[r.Next(0, boekKaarten.Count)];
    Console.WriteLine("Getrokken kaart=");
    Console.WriteLine($"{getrokken.Suite}  {getrokken.Getal}");
    boekKaarten.Remove(getrokken);
    Console.ReadKey();
}
```

Speelkaart klasse:

```java
public enum Suit {Schoppen, Harten, Klaveren, Ruiten}

public class Speelkaart
{
    public int Getal { get; set; }
    public Suit Suite { get; set; }

}
```

# Bookmark Manager

Merk het (her)gebruik van methoden op, alsook het gebruik van enum om de leesbaarheid van de code te verbeteren in de ``ToonHoofdMenu`` switch

```java
public enum Keuzes { List,Show,Edit,Delete}

static void Main(string[] args)
{
    List<BookMark> sites = VraagEnVulBookmarkList();
    Console.Clear();
    ToonHoofdMenu(sites);
}

private static void ToonHoofdMenu(List<BookMark> sites)
{
    while (true)
    {
        Console.WriteLine("Wat wil je doen? 0=list,1=show, 2=edit, 3=remove");
        Keuzes inp = (Keuzes)Convert.ToInt32(Console.ReadLine());
        switch (inp)
        {
            case Keuzes.List:
                ShowAll(sites);
                break;
            case Keuzes.Show:
                OpenSite(sites);
                break;
            case Keuzes.Edit:
                EditSite(sites);
                break;
            case Keuzes.Delete:
                RemoveSite(sites);
                break;
            default:
                break;
        }
        Console.WriteLine("Druk op een toets om verder te gaan.");
        Console.ReadKey();
        Console.Clear();
    }
}

private static List<BookMark> VraagEnVulBookmarkList()
{
    Console.WriteLine("Geef je favoriete sites:");
    List<BookMark> sites = new List<BookMark>();
    for (int i = 0; i < 2; i++)
    {
        Console.WriteLine($"Geef site {i} in:");
        Console.WriteLine("Naam?");
        string naam = Console.ReadLine();
        Console.WriteLine("URL?");
        string url = Console.ReadLine();

        BookMark siteToAdd = new BookMark()
        {
            Naam = naam,
            URL = url
        };
        sites.Add(siteToAdd);
    }

    return sites;
}

private static void RemoveSite(List<BookMark> sites)
{
    int keuze = AskAction(sites, "verwijderen");
    sites.RemoveAt(keuze);
}

private static void EditSite(List<BookMark> sites)
{
    int keuze = AskAction(sites,"editeren");
    Console.WriteLine("Geef nieuwe naam [leeglaten= niet veranderen]");
    string newna = Console.ReadLine();
    if (newna != "")
        sites[keuze].Naam = newna;

    Console.WriteLine("Geef nieuwe url [leeglaten= niet veranderen]");
    string newurl = Console.ReadLine();
    if (newurl != "")
        sites[keuze].URL = newurl;

}

private static void OpenSite(List<BookMark> sites)
{
    int keuze=AskAction(sites, "openen");
    sites[keuze].ToonSite();
}

private static void ShowAll(List<BookMark> sites)
{
    for (int i = 0; i < sites.Count; i++)
    {
        Console.WriteLine($"{i}.{sites[i].Naam} ({sites[i].URL})");
    }
}

private static int AskAction(List<BookMark> sites, string action)
{
    Console.WriteLine($"Welke wil je {action}?");
    ShowAll(sites);
    int keuze = Convert.ToInt32(Console.ReadLine());
    return keuze;
}

```
::::
