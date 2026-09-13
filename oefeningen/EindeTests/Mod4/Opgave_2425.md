> Deze 2 opgaven waren onderdeel van de vaardigheidsproefopdracht voor het examen van dit vak (OOP) in juli 2025 (licht aangepast)

## Opgave 1 Voetbalteam (15p)


Je bent aangenomen als softwareontwikkelaar bij de Belgische Voetbalbond. Een aantal trainers heeft gevraagd om een digitale toepassing waarmee ze **hun teamopstelling kunnen beheren en analyseren**. Ze willen niet alleen spelers toevoegen en de sterkte van hun team bekijken, maar ook weten hoeveel hun opstelling waard is: iets wat belangrijk is bij transfers, scouts, en media-aandacht.

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

Daarnaast moet een **`static` property** aanwezig zijn die het totaal aantal spelers bijhoudt dat ooit aan een team is toegevoegd (zie `VoegSpelerToe`).

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

Schrijf een applicatie die aan de gebruiker in de console een folderpath vraagt (bijvoorbeeld “c:”). Vervolgens wordt een grootte in megabyte gevraagd. Vervolgens toont de applicatie alle bestanden in die folder, en alle subfolders, wiens bestandsgrootte gelijk aan of groter dan de ingegeven grootte is.
De applicatie toont de naam van het bestand, de grootte in MB en de datum waarop het bestand is aangemaakt. Bij het verwerken van de bestanden mogen eventuele uitzonderingen geen impact hebben op de nog te verwerken bestanden. Bestanden die dus niet geopend kunnen worden, worden overgeslagen. De applicatie toont dan wel een melding in de console dat het bestand niet geopend kon worden.

### Voorbeeld uitvoer

Tekst die start met ">" is invoer van de gebruiker.

```text
Geef het pad van een folder in: 
>c:\temp
Geef de minimum grootte (in megabyte) van bestanden die ik moet tonen:
>50

Bestanden van minstens 50 MB:

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
**Oplossing opgave 1: Voetbalteam**

Elke klasse staat in een apart bestand.

**Speler.cs**

```java
namespace Voetbal
{
    class Speler
    {
        public Speler(int rugnummer, string naam, int kracht)
        {
            Rugnummer = rugnummer;
            Naam = naam;
            Kracht = kracht;
        }

        public static int TotaalSpelers { get; set; }

        public int Rugnummer { get; set; }
        public string Naam { get; set; }
        public bool IsBasisSpeler { get; set; }

        private int kracht;
        public int Kracht
        {
            get { return kracht; }
            set
            {
                if (value >= 1 && value <= 10)
                {
                    kracht = value;
                }
                else
                {
                    throw new ArgumentOutOfRangeException("Kracht", "Kracht moet tussen 1 en 10 liggen.");
                }
            }
        }

        public virtual int Marktwaarde
        {
            get { return Kracht * 100000; }
        }

        public override string ToString()
        {
            return $"{GetType().Name} {Rugnummer}, marktwaarde {Marktwaarde}, {Naam}";
        }
    }
}
```

**Aanvaller.cs**

```java
namespace Voetbal
{
    class Aanvaller : Speler
    {
        public Aanvaller(int rugnummer, string naam, int kracht) : base(rugnummer, naam, kracht)
        {
        }

        public override int Marktwaarde
        {
            get { return base.Marktwaarde + 50000; }
        }
    }
}
```

**Verdediger.cs**

```java
namespace Voetbal
{
    class Verdediger : Speler
    {
        public Verdediger(int rugnummer, string naam, int kracht) : base(rugnummer, naam, kracht)
        {
        }

        public override int Marktwaarde
        {
            get { return 200000; }
        }
    }
}
```

**IScouteerbaar.cs**

```java
namespace Voetbal
{
    interface IScouteerbaar
    {
        void Scout();
        int AantalScoutPogingen();
    }
}
```

**GeheimeSpeler.cs**

```java
namespace Voetbal
{
    class GeheimeSpeler : Speler, IScouteerbaar
    {
        private bool isGescout = false;
        private int aantalScoutPogingen = 0;

        public GeheimeSpeler(int rugnummer, string naam, int kracht) : base(rugnummer, naam, kracht)
        {
        }

        public void Scout()
        {
            isGescout = true;
        }

        public int AantalScoutPogingen()
        {
            return aantalScoutPogingen;
        }

        public override int Marktwaarde
        {
            get
            {
                if (isGescout)
                {
                    return base.Marktwaarde;
                }
                aantalScoutPogingen++;
                return 0;
            }
        }

        public override string ToString()
        {
            string gescout = "nee";
            if (isGescout)
            {
                gescout = "ja";
            }
            return $"{base.ToString()}, gescout: {gescout}";
        }
    }
}
```

**VoetbalTeam.cs**

```java
namespace Voetbal
{
    class VoetbalTeam
    {
        private const int MAX_SPELERS = 11;
        private const int TOESLAG_SCOUTEERBAAR = 100000;

        private List<Speler> spelers = new List<Speler>();

        public VoetbalTeam(string naam)
        {
            Naam = naam;
        }

        public string Naam { get; set; }

        public int TotaleKracht
        {
            get
            {
                int totaal = 0;
                foreach (Speler speler in spelers)
                {
                    totaal += speler.Kracht;
                }
                return totaal;
            }
        }

        public int TotaleMarktwaarde
        {
            get
            {
                int totaal = 0;
                foreach (Speler speler in spelers)
                {
                    totaal += speler.Marktwaarde;
                    if (speler is IScouteerbaar)
                    {
                        totaal += TOESLAG_SCOUTEERBAAR;
                    }
                }
                return totaal;
            }
        }

        public void VoegSpelerToe(Speler speler)
        {
            if (spelers.Count >= MAX_SPELERS)
            {
                throw new Exception("Team is vol. Speler niet toegevoegd.");
            }
            spelers.Add(speler);
            Speler.TotaalSpelers++;
        }

        public void ToonOpstelling()
        {
            Console.WriteLine(Naam);
            foreach (Speler speler in spelers)
            {
                Console.Write($"{speler.Naam}, rugnummer {speler.Rugnummer}, marktwaarde {speler.Marktwaarde}");
                if (speler is IScouteerbaar scouteerbaar)
                {
                    Console.Write($"#####{scouteerbaar.AantalScoutPogingen()}");
                }
                Console.WriteLine();
            }
            Console.WriteLine($"Totale kracht: {TotaleKracht}");
            Console.WriteLine($"Totale marktwaarde: {TotaleMarktwaarde}");
        }

        public void ScoutAlles()
        {
            foreach (Speler speler in spelers)
            {
                if (speler is IScouteerbaar scouteerbaar)
                {
                    scouteerbaar.Scout();
                }
            }
        }
    }
}
```

**Wedstrijd.cs**

Wedstrijd hoeft niet in het menu. Gebruiken gaat bijvoorbeeld zo: `Console.WriteLine(new Wedstrijd(gent, brugge).Simuleer());`

```java
namespace Voetbal
{
    class Wedstrijd
    {
        public Wedstrijd(VoetbalTeam thuisploeg, VoetbalTeam uitploeg)
        {
            Thuisploeg = thuisploeg;
            Uitploeg = uitploeg;
        }

        public VoetbalTeam Thuisploeg { get; private set; }
        public VoetbalTeam Uitploeg { get; private set; }

        public string Simuleer()
        {
            int krachtThuis = Thuisploeg.TotaleKracht;
            int krachtUit = Uitploeg.TotaleKracht;
            int waardeThuis = Thuisploeg.TotaleMarktwaarde;
            int waardeUit = Uitploeg.TotaleMarktwaarde;

            if (krachtThuis == krachtUit && waardeThuis == waardeUit)
            {
                return $"Gelijkspel tussen Team {Thuisploeg.Naam} en Team {Uitploeg.Naam} met kracht {krachtThuis}.";
            }

            VoetbalTeam winnaar = Thuisploeg;
            VoetbalTeam verliezer = Uitploeg;
            if (krachtUit > krachtThuis || (krachtUit == krachtThuis && waardeUit > waardeThuis))
            {
                winnaar = Uitploeg;
                verliezer = Thuisploeg;
            }
            return $"Team {winnaar.Naam} wint van Team {verliezer.Naam} met kracht {winnaar.TotaleKracht} tegen {verliezer.TotaleKracht}.";
        }
    }
}
```

**Program.cs**

```java
namespace Voetbal
{
    internal class Program
    {
        enum MenuKeuze { Toevoegen = 1, Opstelling, Afsluiten, Scouten }

        static void Main(string[] args)
        {
            Console.WriteLine("Teamnaam?");
            VoetbalTeam team = new VoetbalTeam(Console.ReadLine());

            MenuKeuze keuze;
            do
            {
                Console.WriteLine("1. Speler toevoegen");
                Console.WriteLine("2. Opstelling tonen");
                Console.WriteLine("3. Programma afsluiten");
                Console.WriteLine("4. Alle geheime spelers scouten");
                Console.WriteLine($"Totaal aantal spelers: {Speler.TotaalSpelers}");
                keuze = (MenuKeuze)int.Parse(Console.ReadLine());

                switch (keuze)
                {
                    case MenuKeuze.Toevoegen:
                        try
                        {
                            VoegSpelerToe(team);
                        }
                        catch (Exception e)
                        {
                            Console.WriteLine(e.Message);
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

        static void VoegSpelerToe(VoetbalTeam team)
        {
            Console.WriteLine("Type speler? 1. Verdediger 2. Aanvaller 3. GeheimeSpeler");
            int type = int.Parse(Console.ReadLine());
            Console.WriteLine("Naam?");
            string naam = Console.ReadLine();
            Console.WriteLine("Rugnummer?");
            int rugnummer = int.Parse(Console.ReadLine());
            Console.WriteLine("Kracht (1 tot en met 10)?");
            int kracht = int.Parse(Console.ReadLine());

            Speler speler;
            switch (type)
            {
                case 1:
                    speler = new Verdediger(rugnummer, naam, kracht);
                    break;
                case 2:
                    speler = new Aanvaller(rugnummer, naam, kracht);
                    break;
                case 3:
                    GeheimeSpeler geheimeSpeler = new GeheimeSpeler(rugnummer, naam, kracht);
                    Console.WriteLine("Meteen scouten? (j/n)");
                    if (Console.ReadLine() == "j")
                    {
                        geheimeSpeler.Scout();
                    }
                    speler = geheimeSpeler;
                    break;
                default:
                    throw new Exception("Onbekend type speler.");
            }

            team.VoegSpelerToe(speler);
            Console.WriteLine("Speler toegevoegd.");
        }
    }
}
```

**Oplossing opgave 2: Bestandsfilter**

Een apart project. `GetFiles` met `SearchOption.AllDirectories` stopt volledig bij de eerste map zonder rechten. Daarom loopt deze oplossing zelf map per map af: een map die niet geopend kan worden, geeft een melding, en de andere mappen en bestanden worden gewoon verder verwerkt.

**Program.cs**

```java
namespace Bestandsfilter
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Geef het pad van een folder in:");
            string pad = Console.ReadLine();
            if (Directory.Exists(pad))
            {
                Console.WriteLine("Geef de minimum grootte (in megabyte) van bestanden die ik moet tonen:");
                int grootteInMB = int.Parse(Console.ReadLine());
                long grootteInBytes = grootteInMB * 1024L * 1024L;

                Console.WriteLine($"\nBestanden van minstens {grootteInMB} MB:\n");
                ZoekBestanden(new DirectoryInfo(pad), grootteInBytes);
            }
            else
            {
                Console.WriteLine("De folder bestaat niet.");
            }
        }

        static void ZoekBestanden(DirectoryInfo map, long minimumGrootte)
        {
            try
            {
                FileInfo[] bestanden = map.GetFiles();
                foreach (FileInfo bestand in bestanden)
                {
                    ToonBestand(bestand, minimumGrootte);
                }

                DirectoryInfo[] submappen = map.GetDirectories();
                foreach (DirectoryInfo submap in submappen)
                {
                    ZoekBestanden(submap, minimumGrootte);
                }
            }
            catch (Exception)
            {
                Console.WriteLine($"Map {map.FullName} kon niet geopend worden.\n");
            }
        }

        static void ToonBestand(FileInfo bestand, long minimumGrootte)
        {
            try
            {
                if (bestand.Length >= minimumGrootte)
                {
                    Console.WriteLine($"Bestand: {bestand.FullName}");
                    Console.WriteLine($"Grootte: {bestand.Length / 1024.0 / 1024.0:F2} MB");
                    Console.WriteLine($"Aangemaakt op: {bestand.CreationTime:yyyy-MM-dd HH:mm:ss}");
                    Console.WriteLine();
                }
            }
            catch (Exception)
            {
                Console.WriteLine($"Bestand {bestand.FullName} kon niet geopend worden.\n");
            }
        }
    }
}
```
::::
