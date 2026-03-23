> Deze 2 opgaven waren onderdeel van de vaardigheidsproefopdracht voor het examen van dit vak (OOP) in juli 2025 (licht aangepast)

## Opgave 1 Voetbalteam (12p)


Je bent aangenomen als softwareontwikkelaar bij de Belgische Voetbalbond. Een aantal trainers heeft gevraagd om een digitale toepassing waarmee ze **hun teamopstelling kunnen beheren en analyseren**. Ze willen niet alleen spelers toevoegen en de sterkte van hun team bekijken, maar ook weten hoeveel hun opstelling waard is — iets wat belangrijk is bij transfers, scouts, en media-aandacht.

## Deel 1: Klassenstructuur en gedragsregels (6 punten)

Je systeem moet volgende structuur en logica ondersteunen:

### Klasse `Speler`

Elke speler op het veld heeft:
- Een **rugnummer** (bijv. 10 voor een spits)
- Een **naam** (bijv. Eden Hazard)
- Een **kracht**, op een schaal van 1 tot 10

Deze gegevens worden opgegeven via een **constructor** bij het aanmaken van een speler.

De `Kracht` van een speler moet steeds **tussen 1 en 10** liggen. Als een andere waarde wordt ingegeven, moet het programma een foutmelding geven via een `ArgumentOutOfRangeException`. 

Elke speler heeft ook een `IsBasisSpeler`-eigenschap.

De **marktwaarde** wordt berekend als **kracht × €100.000**. En wordt via een readonly property teruggegeven.

Daarnaast moet een **`static` property** aanwezig zijn dat het totaal aantal spelers bijhoudt dat ooit is toegevoegd. Deze teller verhoogt automatisch bij elke creatie van een nieuwe speler.

### Klasse `Aanvaller`

Een aanvaller is een speler.  
Een aanvaller heeft een marktwaarde van **de waarde van een speler + €50.000**.

### Klasse `Verdediger`

Een verdediger is een speler.  
Een verdediger heeft altijd een vaste marktwaarde van **€200.000**.

### Interface `IScouteerbaar`

Deze interface definieert spelers waarvan de waarde verborgen blijft tot ze gescout zijn.
- `Scout()` activeert de werkelijke waarde.
- `AantalScoutPogingen()` telt de leespogingen vóór het scouten.

### Klasse `GeheimeSpeler`

Deze speler heeft de interface `IScouteerbaar` en is een speler.

- Toont **0** als marktwaarde zolang hij niet is gescout.
- Houdt bij hoe vaak zijn marktwaarde werd opgevraagd vóór het scouten.
- Toont zijn echte waarde na het aanroepen van `Scout()`.

### Klasse `VoetbalTeam`

Een team:
- Heeft een naam
- Bevat maximaal **11 spelers**

De methode `VoegSpelerToe(speler)`:
- Voegt een speler toe tenzij er al 11 spelers zijn
- Gooit een `Exception` met boodschap *“Team is vol. Speler niet toegevoegd.”* als het team vol is.
- Verhoogt de globale `static` teller bij een succesvolle toevoeging.

De methode `ToonOpstelling()` toont:
1. De teamnaam
2. Spelers met naam, rugnummer, marktwaarde
3. Indien `IScouteerbaar`: ook `#####X` met het aantal pogingen
4. Totale kracht
5. Totale marktwaarde (inclusief €100.000 extra voor elke `IScouteerbaar` speler)

## Deel 2: Console-applicatie (4 punten)

Bij het opstarten wordt de teamnaam gevraagd.

### Hoofdmenu (blijft herhalen)
1. Speler toevoegen  
2. Opstelling tonen  
3. Programma afsluiten  
4. Alle geheime spelers scouten

### Speler toevoegen

Drie stappen:
1. Kies type speler (Verdediger, Aanvaller, GeheimeSpeler)
2. Geef naam, rugnummer en kracht (kracht moet tussen 1 en 10)
3. Indien GeheimeSpeler: vraag of meteen gescout moet worden

## Deel 3: Extra functionaliteit (2 punten)

### 3.1 `ToString()` output 

Bij gebruik van `Console.WriteLine(speler)`:
- Toon type, rugnummer, marktwaarde, naam
- Indien `GeheimeSpeler`: ook of hij gescout is

### 3.2 `ScoutAlles()` methode 

Deze methode scout alle `GeheimeSpelers` in een team. Wordt aangeroepen via menu-optie 4.

### 3.3  totaal aantal spelers

Toon onderaan in het hoofdmenu hoeveel spelers er in totaal al toegevoegd zijn.

## Deel 4: Wedstrijdsimulatie (3 punten)

De Belgische Voetbalbond wil ook graag **vriendschappelijke wedstrijden kunnen simuleren** tussen twee teams. Hiervoor voeg je een nieuwe klasse toe.

### Klasse `Wedstrijd`

Een `Wedstrijd` simuleert een duel tussen **twee voetbalteams**.

Eigenschappen:
- `Thuisploeg`: een `VoetbalTeam`
- `Uitploeg`: een `VoetbalTeam`

Constructor:
- Neemt twee `VoetbalTeam`-objecten aan en stelt ze in als thuis- en uitploeg.

Methode:
- `Simuleer()`: bepaalt de winnaar van de wedstrijd.
    - Vergelijk de **totale kracht** van beide teams.
    - Het team met de hoogste kracht wint.
    - Bij een gelijkstand wint het team met de **hoogste marktwaarde**.
    - Is ook die gelijk? Dan is het een **gelijkspel**.

De methode geeft een string terug in volgende stijl:

"Team Gent wint van Team Brugge met kracht 76 tegen 65."
Of
"Gelijkspel tussen Team Gent en Team Brugge met kracht 70."


Opmerking: deze klasse hoeft niet via het hoofdmenu opgeroepen te worden, maar moet wel instantieerbaar en bruikbaar zijn in code (bv. voor latere uitbreiding)


## Opgave 2 Bestandsfilter (4p)

Schrijf een applicatie die aan de gebruiker in de console een folderpath vraagt (bijvoorbeeld “c:”). Vervolgens wordt een grootte in megabyte gevraagd. Vervolgens de applicatie alle bestanden in die folder, en alle subfolders, wiens bestandsgrootte gelijk of meer dan de ingegeven grootte is.
De applicatie toont de naam van het bestand, de grootte in MB en de datum waarop het bestand is aangemaakt. Bij het verwerken van de bestanden mogen eventuele uitzonderingen geen impact hebben op de nog te verwerken bestanden. Bestanden die dus niet geopend kunnen worden, worden overgeslagen. De applicatie toont dan wel een melding in de console dat het bestand niet geopend kon worden.

### Voorbeeld uitvoer

Tekst die start met ">" is invoer van de gebruiker.

```text
Geef het pad van een folder in: 
>c:\temp
Geef de minimum grootte (in megabyte) van bestanden die ik moet tonen:
>50

Bestanden groter dan 50 MB:

Bestand: c:\temp\mycontract.docx
Grootte: 83,58 MB
Aangemaakt op: 2024-09-30 15:19:46

Bestand c:\temp\corruptefile.docx kon niet geopend worden.

Bestand: c:\temp\video\zookeeper.mp4
Grootte: 535,40 MB
Aangemaakt op: 2024-09-30 15:19:46

Bestand: c:\temp\ffmpeg\bin\ffprobe.exe
Grootte: 63,45 MB
Aangemaakt op: 2024-09-30 15:19:48

```

::::{.callout-caution collapse="true" title="Oplossing"}
## Oplossing oefening 1 VoetbalManager


Program.cs:

```csharp
enum MenuKeuze { Toevoegen = 1, Opstelling, Afsluiten, Scouten, Onbekend }
static void Main(string[] args)
{
    Console.WriteLine("Teamnaam?");
    string teamNaam = Console.ReadLine();
    VoetbalTeam team = new VoetbalTeam() { Naam = teamNaam };
    MenuKeuze keuze = MenuKeuze.Onbekend;

    do
    {
        Console.WriteLine("Maak je keuze. 1.Speler toevoegen. 2.Opstellingen tonen 3. Afsluiten. 4. Iedereen scouten");
        Console.WriteLine($"Totaal aantal spelers: {Speler.TotaalSpelers}");
        keuze = (MenuKeuze)int.Parse(Console.ReadLine());
        switch (keuze)
        {
            case MenuKeuze.Toevoegen:
                try
                {
                    VoegSpelerToe(team);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
                break;
            case MenuKeuze.Opstelling:
                team.ToonOpstelling();
                break;
            case MenuKeuze.Scouten:
                team.ScoutAlles();
                break;
            default:
                break;
        }
    } while (keuze != MenuKeuze.Afsluiten);
}

private static void VoegSpelerToe(VoetbalTeam team)
{
    Console.WriteLine("Type speler? 1.Verdediger 2.Aanvaller. 3.Geheimespeler");
    int type = int.Parse(Console.ReadLine());
    Console.WriteLine("Rugnummer?");
    int rugnummer = int.Parse(Console.ReadLine());
    Console.WriteLine("Kracht?");
    int kracht = int.Parse(Console.ReadLine());
    Speler toeTeVoegen = null;
    switch (type)
    {
        case 1:
            toeTeVoegen = new Verdediger(rugnummer, "joske", kracht);
            break;
        case 2:
            toeTeVoegen = new Aanvaller(rugnummer, "pietje", kracht);
            break;
        case 3:
            toeTeVoegen = new GeheimeSpeler(rugnummer, "frankie", kracht);
            Console.WriteLine("Ogenblikkelijk scouten?(j/n)");
            if (Console.ReadLine().ToLower() == "j")
            {
                ((GeheimeSpeler)toeTeVoegen).Scout();
            }
            break;
        default:
            throw new Exception("Onbekend type opgegeven");

    }

    team.VoegSpelerToe(toeTeVoegen);
}
```

Andere klassebestanden (ieder apart):

```csharp
class Speler
{
    public Speler(int rugnummer, string naam, int kracht)
    {
        Rugnummer = rugnummer;
        Naam = naam;
        Kracht = kracht;
    }

    public int Rugnummer { get; set; }
    public string Naam { get; set; }
    public bool IsBasisSpeler { get; set; }
    private int kracht;

    public int Kracht
    {
        get { return kracht; }
        set
        {
            if (value > 1 && value < 100)
                kracht = value;
            else
                throw new ArgumentOutOfRangeException.("Kracht moet tussen 1 en 100 liggen.");
        }
    }

    public virtual int Marktwaarde
    {
        get
        {
            return kracht * 100000;
        }
    }

    public static int TotaalSpelers = 0;

    public override string ToString()
    {
        return $"{GetType().Name} {Rugnummer} {Naam}";
    }
}

class Aanvaller : Speler
{
    public Aanvaller(int rugnummer, string naam, int kracht) : base(rugnummer, naam, kracht)
    {
    }
    public override int Marktwaarde
    {
        get
        {
            return base.Marktwaarde + 50000;
        }
    }
}

class Verdediger : Speler
{
    public Verdediger(int rugnummer, string naam, int kracht) : base(rugnummer, naam, kracht)
    {
    }
    public override int Marktwaarde
    {
        get
        {
            return 200000;
        }
    }
}


interface IScouteerbaar
{
    void Scout();
    int AantalScoutPogingen();
}

class GeheimeSpeler : Speler, IScouteerbaar
{
    public GeheimeSpeler(int rugnummer, string naam, int kracht) : base(rugnummer, naam, kracht)
    {

    }
    private bool alGescout = false;
    private int aantalScoutPogingen;
    public int AantalScoutPogingen()
    {
        return aantalScoutPogingen;
    }

    public void Scout()
    {
        alGescout = true;
    }

    public override int Marktwaarde
    {
        get
        {
            if (alGescout)
                return base.Marktwaarde;
            else
                return 0;
        }
    }
    public override string ToString()
    {
        return $"{base.ToString()} gescout:{alGescout}";
    }
}

class VoetbalTeam
{
    public string Naam { get; set; }
    private const int MAX_SPELERS = 11;

    private List<Speler> spelers = new List<Speler>();

    public void VoegSpelerToe(Speler speler)
    {
        if (spelers.Count < MAX_SPELERS)
        {
            spelers.Add(speler);
            Speler.TotaalSpelers++;
        }
        else
        {
            throw new Exception("Team heeft al het maximum aantal spelers.");
        }
    }

    public void ToonOpstelling()
    {
        Console.WriteLine(Naam);

        foreach (var speler in spelers)
        {
            Console.Write($"\nRugnummer: {speler.Rugnummer}, Naam: {speler.Naam}, Marktwaarde: {speler.Marktwaarde}");
            
            if (speler is IScouteerbaar scouteerbaar)
            {
                Console.WriteLine($"######{scouteerbaar.AantalScoutPogingen()}");
            }
        }
        Console.WriteLine($"Totale kracht: {TotaleKracht}");
        Console.WriteLine($"Totale marktwaarde: {TotaleMarktwaarde}");
    }

    public void ScoutAlles()
    {
        foreach (var speler in spelers)
        {
            if (speler is IScouteerbaar scouteerbaar)
            {
                scouteerbaar.Scout();
            }
        }
    }

    public int TotaleKracht
    {
        get
        {
            int kracht = 0;
            foreach (var speler in spelers)
            {
                kracht += speler.Kracht;
            }
            return kracht;
        }
    }

    public int TotaleMarktwaarde
    {
        get
        {
            int waarde = 0;
            foreach (var speler in spelers)
            {
                waarde += speler.Marktwaarde;
                if (speler is GeheimeSpeler)
                    waarde += 100000;
            }
            return waarde;
        }
    }
}

class Wedstrijd
{
    public Wedstrijd(VoetbalTeam thuisploeg, VoetbalTeam uitploeg)
    {
        Thuisploeg = thuisploeg;
        Uitploeg = uitploeg;
    }
    
    public VoetbalTeam Thuisploeg { get; private set; }
    public VoetbalTeam Uitploeg { get; private set; }

    public void Simuleer()
    {

        if (Uitploeg.TotaleKracht> Thuisploeg.TotaleKracht)
        {
            Console.WriteLine($"Team {Uitploeg.Naam} wint van {Thuisploeg.Naam} met kracht {Uitploeg.TotaleKracht} tegen met kracht {Thuisploeg.TotaleKracht}");
        }
        else if (Uitploeg.TotaleKracht < Thuisploeg.TotaleKracht)
        {
            Console.WriteLine($"Team {Thuisploeg.Naam} wint van {Uitploeg.Naam} met kracht {Thuisploeg.TotaleKracht} tegen met kracht {Uitploeg.TotaleKracht}");
        }
        else
        {
            if(Thuisploeg.TotaleMarktwaarde > Uitploeg.TotaleMarktwaarde)
            {
                Console.WriteLine($"Team {Uitploeg.Naam} wint van {Thuisploeg.Naam} met kracht {Uitploeg.TotaleKracht} tegen met kracht {Thuisploeg.TotaleKracht}");
            }
            else if (Thuisploeg.TotaleMarktwaarde < Uitploeg.TotaleMarktwaarde)
            {
                Console.WriteLine($"Team {Thuisploeg.Naam} wint van {Uitploeg.Naam} met kracht {Thuisploeg.TotaleKracht} tegen met kracht {Uitploeg.TotaleKracht}");
            }
            else
            {
                Console.WriteLine($"Gelijkspel tussen  {Thuisploeg.Naam} en {Uitploeg.Naam} met kracht {Thuisploeg.TotaleKracht} ");
            }
        }

    }
}
```

## Oplossing oefening 2 Bestandsfilter

```csharp
Console.WriteLine("Geef het pad van een folder in:");
string folder = Console.ReadLine();
if (Directory.Exists(folder))
{
    Console.WriteLine("Geef de minimum grootte (in megabyte) van bestanden die ik moet tonen:");
    int grootteInMB = Convert.ToInt32(Console.ReadLine());
    long grooteInBytes = grootteInMB * 1024 * 1024;

    DirectoryInfo dir = new DirectoryInfo(folder);
    FileInfo[] bestanden = dir.GetFiles("*.*", SearchOption.AllDirectories);
    Console.WriteLine($"\nDe bestanden groter dan {grootteInMB} MB:");

    foreach (FileInfo bestand in bestanden)
    {
        if (bestand.Length > grooteInBytes)
        {
            try
            {
                Console.WriteLine($"\nBestand: {bestand}");
                Console.WriteLine($"Grootte: {Math.Round(bestand.Length / 1024.0 / 1024.0, 2)} MB");
                Console.WriteLine($"Aangemaakt op: {bestand.CreationTime}");
            }
            catch (Exception ex)
            {

                Console.WriteLine($"Bestand {bestand} kon niet geopend worden");
            }
        }
    }
}
else
{
    Console.WriteLine("De folder bestaat niet. We sluiten af");
}
```

::::
