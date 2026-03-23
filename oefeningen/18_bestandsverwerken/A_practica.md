
# Boekencollectie (Essential)

# Boekencollectie (Essential)

Maak een applicatie die een gebruiker in staat stelt om zijn/haar boekencollectie te beheren. De boekengegevens worden opgeslagen in een tekstbestand op de computer. De gebruiker moet boeken kunnen toevoegen, verwijderen, en de volledige lijst van boeken kunnen bekijken.

De applicatie moet de volgende menu-opties bieden:
1. Een nieuw boek toevoegen
2. Een boek verwijderen
3. Alle boeken weergeven
4. Programma afsluiten

Elke regel in het tekstbestand (boeken.txt) representeert een boek in het volgende formaat: Titel;Auteur;Jaar

Bijvoorbeeld:

```text
De Hobbit;J.R.R. Tolkien;1937
Harry Potter en de Steen der Wijzen;J.K. Rowling;1997
Het Leven van Pi;Yann Martel;2001
```

# IMDB Top 100 JSON 


# IMDB Top 100 JSON 

Op [deze site](https://github.com/hjorturlarsen/IMDB-top-100/blob/master/data/movies.json) vind je de top 100 films ooit volgens IMDB. Download het bestand en gebruik het om een applicatie rond te ontwikkelen. De applicatie toont een menu'tje met volgende functionaliteiten:

1. Top 100 titels tonen.
2. Zoeken naar een titel (of deel ervan) en dan tonen op welke plek de titel staat.
3. Voor een nummer tussen 1 en 100 in en open vervolgens de browser (zoek zelf op hoe dit kan mbv ``Process``) naar de bijhorende IMDB-pagina van die film. Je gebruikt hiervoor het id van de film, bv: "https://www.imdb.com/title/tt0111161/" indien je de pagina van The Shawnshank Redemption nodig hebt.

# Bitmap header analyzer 

# Bitmap header analyzer 

Maak een applicatie die de headerinformatie van een bitmap-afbeelding binair inleest en de basisinformatie ervan toont. Je gaat de hoogte, breedte en bitdiepte van de afbeelding tonen aan de gebruiker. De gebruiker kan zelf ingeven welk bitmap (.bmp)-bestand moet ingelezen worden.

Een BMP-header bevat veel details, maar voor deze opdracht richten we ons op de volgende informatie:

* Breedte van de afbeelding: bytes 18-21 (4 bytes, Little Endian)
* Hoogte van de afbeelding: bytes 22-25 (4 bytes, Little Endian)
* Bitdiepte van de afbeelding: bytes 28-29 (2 bytes, Little Endian)

Ter info de volledige structuur van de BMP header (eerste 54 bytes):

* BMP Signature: bytes 0-1 (2 bytes)
* File Size: bytes 2-5 (4 bytes)
* Reserved: bytes 6-9 (4 bytes)
* Data Offset: bytes 10-13 (4 bytes)
* DIB Header Size: bytes 14-17 (4 bytes)
* Width: bytes 18-21 (4 bytes)
* Height: bytes 22-25 (4 bytes)
* Planes: bytes 26-27 (2 bytes)
* Bit Depth: bytes 28-29 (2 bytes)

Tips:

* De ``ReadBytes`` methode van een ``BinaryReader`` aanvaardt een ``int`` als parameter om aan te geven hoevel bytes je van het bestand wilt inlezen.
* De ``BitConverter``-klasse kan eenvoudig bytes omzetten naar ``int`` met behulp van de ``ToInt32`` klasse.


# De Digitale Klokkenluider (*Final Essentials*, GPT)



*Een klokkenluider heeft je een **USB-stick** gegeven. De stick zit vol met mappen, submappen, en ergens daartussen verstopt zitten de bewijsstukken. Aan jou om de chaos in kaart te brengen en de belastende bestanden te vinden.*

## De Voorbereiding
1.  Download het script [genereer_bewijsmateriaal.bat](https://gist.github.com/timdams/b1eea362ad7b661e8edcda84c6a08792).
2.  Plaats het in de map van je project (naast je `.sln` file of in `bin/Debug`).
3.  Dubbelklik erop om de map `CorruptCorp` te genereren.

## Stap 1: The Scanner (Directory Traversal)
Schrijf een methode `ScanDirectories(string startPath)`:
*   Deze methode doorzoekt **recursief** de map `CorruptCorp` en al zijn submappen.
*   Voor **elk bestand** dat hij tegenkomt:
    *   Print het volledige pad.
    *   Print de bestandsgrootte.
    *   Als de bestandsnaam het woord "log" of "csv" bevat, roep je de `AnalyzeFile` methode aan (zie stap 2).

## Stap 2: The Analyzer (File Reading)
Schrijf de methode `AnalyzeFile(string filePath)`:
*   Opent het bestand en leest het **regel per regel** in.
*   Zoekt naar sensitieve woorden: "SECRET", "BRIBE", "TOXIC".
*   Als een verdacht woord gevonden wordt:
    *   Print: "🚨 CRITICAL EVIDENCE FOUND IN [Bestandsnaam]: [Regelnummer] -> [De verdachte regel]"
    *   Voegt deze regel toe aan een **Lijst van Bewijsmateriaal**.

## Stap 3: The Report (File Writing)
Aan het einde van het programma:
*   Als er bewijsmateriaal is gevonden, genereer dan automatisch een bestand `FINAL_REPORT.txt` in de hoofdmap van je project.
*   Schrijf hierin:
    *   De datum van vandaag.
    *   Aantal doorzochte bestanden.
    *   Een opsomming van alle gevonden verdachte regels en hun bronbestand.




::::{.callout-caution collapse="true" title="Oplossing"}
# Boekencollectie

```java
static void Main(string[] args)
{
    const string boekenDB = "boeken.txt";
    while (true)
    {
        Console.WriteLine("\n1. Nieuw boek toevoegen");
        Console.WriteLine("2. Boek verwijderen");
        Console.WriteLine("3. Alle boeken weergeven");
        Console.WriteLine("4. Programma afsluiten");
        Console.Write("Maak een keuze: ");
        int keuze = int.Parse(Console.ReadLine());

        switch (keuze)
        {
            case 1:
                NieuwBoekToevoegen(boekenDB);
                break;
            case 2:
                BoekVerwijderen(boekenDB);
                break;
            case 3:
                AlleBoekenWeergeven(boekenDB);
                break;
            case 4:
                return;
            default:
                Console.WriteLine("Ongeldige keuze.");
                break;
        }
    }
}

static void NieuwBoekToevoegen(string boekDb)
{
    Console.Write("Titel: ");
    string titel = Console.ReadLine();
    Console.Write("Auteur: ");
    string auteur = Console.ReadLine();
    Console.Write("Jaar: ");
    string jaar = Console.ReadLine();

    string boek = $"{titel};{auteur};{jaar}";
    File.AppendAllText(boekDb, boek + Environment.NewLine);
    Console.WriteLine("Boek toegevoegd!");
}

static void BoekVerwijderen(string boekDb)
{
    Console.Write("Titel van het boek dat je wilt verwijderen: ");
    string titel = Console.ReadLine();

    if (!File.Exists(boekDb))
    {
        Console.WriteLine("Boekenbestand niet gevonden!");
        return;
    }

    var boeken = File.ReadAllLines(boekDb).ToList();
    bool boekGevonden = false;
    int teller = 0;
    while (teller < boeken.Count && !boekGevonden)
    {
        if (boeken[teller].StartsWith(titel + ";"))
        {
            boeken.RemoveAt(teller);
            boekGevonden = true;
        }
        teller++;
    }

    if (boekGevonden)
    {
        File.WriteAllLines(boekDb, boeken);
        Console.WriteLine("Boek verwijderd!");
    }
    else
    {
        Console.WriteLine("Boek niet gevonden!");
    }
}

static void AlleBoekenWeergeven(string boekDb)
{
    if (!File.Exists(boekDb))
    {
        Console.WriteLine("Boekenbestand niet gevonden!");
        return;
    }

    var boeken = File.ReadAllLines(boekDb);

    foreach (var boek in boeken)
    {
        var gegevens = boek.Split(';');
        Console.WriteLine($"Titel: {gegevens[0]}, Auteur: {gegevens[1]}, Jaar: {gegevens[2]}");
    }
}
```
# Bitmap header analyzer

```java
Console.Write("Voer het pad van het BMP-bestand in: ");
string bestandspad = Console.ReadLine();

if (!File.Exists(bestandspad))
{
    Console.WriteLine("Bestand niet gevonden!");
    return;
}

try
{
    using (FileStream fs = new FileStream(bestandspad, FileMode.Open, FileAccess.Read))
    using (BinaryReader reader = new BinaryReader(fs))
    {
        // Lees de BMP-header (eerste 54 bytes)
        byte[] header = reader.ReadBytes(54);

        // Breedte (bytes 18-21)
        int breedte = BitConverter.ToInt32(header, 18);

        // Hoogte (bytes 22-25)
        int hoogte = BitConverter.ToInt32(header, 22);

        // Bitdiepte (bytes 28-29)
        int bitdiepte = BitConverter.ToInt16(header, 28);

        Console.WriteLine($"Breedte: {breedte} pixels");
        Console.WriteLine($"Hoogte: {hoogte} pixels");
        Console.WriteLine($"Bitdiepte: {bitdiepte} bits per pixel");
    }
}
catch (Exception e)
{
    Console.WriteLine("Er is een fout opgetreden bij het lezen van het bestand: " + e.Message);
            }
```
::::
