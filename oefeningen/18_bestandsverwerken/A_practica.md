
# Boekencollectie (Essential)

Maak een applicatie die een gebruiker in staat stelt om zijn/haar boekencollectie te beheren. De boekengegevens worden opgeslagen in een tekstbestand op de computer. De gebruiker moet boeken kunnen toevoegen, verwijderen, en de volledige lijst van boeken kunnen bekijken.

![](../assets/illustraties/h18_boekencollectie.jpg){.illustratie fig-alt="Potloodtekening: de robot zet boeken in een kast terwijl er een lange papieren rol met tekst uit de kast rolt, het stokmannetje leest."}

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

::::{.callout-caution collapse="true" title="Oplossing"}
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
::::


# Stevens stille fouten (*Essential*) {#h18-stevens-stille-fouten}

Stagiair Steven kreeg drie kleine opdrachten met bestanden. Hij liet ze alle drie door een A.I. schrijven en keek niets na: het compileerde, en er crashte niets. Toch klopt er in geen van de drie iets van.

Zet elk fragment in de ``Main`` van een nieuw project. De bestanden krijgen enkel een naam en geen pad, zodat ze naast je programma terechtkomen, op Windows en op Mac. Vind je een bestand niet terug, laat dan bijvoorbeeld ``Path.GetFullPath("logboek.txt")`` afdrukken.

Voorspel telkens eerst wat er gebeurt, en voer het fragment pas daarna uit.

**Deel 1.** Steven houdt een logboek bij van wie zijn programma gebruikt:

```java
StreamWriter writer = new StreamWriter("logboek.txt", true);
writer.WriteLine("Programma gestart");

Console.WriteLine("Hoe heet je?");
string naam = Console.ReadLine();
writer.WriteLine($"Gebruiker: {naam}");

Console.WriteLine($"Welkom, {naam}!");
```

Voer het twee keer uit, met twee verschillende namen. Hoe groot is ``logboek.txt`` daarna, wat staat erin, en waarom?

::::{.callout-caution collapse="true" title="Oplossing"}
Op het scherm verschijnt twee keer netjes ``Welkom, ...!``, maar ``logboek.txt`` is 0 bytes groot. Het bestand bestaat wel, alleen staat er niets in.

Een ``StreamWriter`` schrijft niet elke ``WriteLine`` meteen naar de schijf. Hij spaart de tekst eerst op in het geheugen, en schrijft pas weg als dat stuk geheugen vol is of als de writer gesloten wordt. Steven sluit zijn writer nooit. Het programma stopt, en de opgespaarde tekst verdwijnt mee. Schrijf je veel meer tekst weg, dan komt er wel een deel in het bestand, maar het einde ontbreekt, soms midden in een regel.

Met een ``using``-blok gaat de writer aan het einde van het blok dicht, en dan wordt alles weggeschreven:

```java
using (StreamWriter writer = new StreamWriter("logboek.txt", true))
{
    writer.WriteLine("Programma gestart");

    Console.WriteLine("Hoe heet je?");
    string naam = Console.ReadLine();
    writer.WriteLine($"Gebruiker: {naam}");

    Console.WriteLine($"Welkom, {naam}!");
}
```

Na twee keer uitvoeren, met Anna en Bram, staat er in ``logboek.txt``:

```text
Programma gestart
Gebruiker: Anna
Programma gestart
Gebruiker: Bram
```
::::

**Deel 2.** Steven bewaart de instellingen van zijn spel in een binair bestand: de naam van de speler, het aantal levens en of het geluid aan staat. Het inlezen vroeg hij een dag later aan de A.I., in een nieuw gesprek:

```java
// bewaren
FileStream fsSchrijven = File.Open("instellingen.dat", FileMode.Create);
using (BinaryWriter writer = new BinaryWriter(fsSchrijven))
{
    writer.Write("Steven");
    writer.Write(3);
    writer.Write(false);
}

// later: terug inlezen
FileStream fsLezen = File.Open("instellingen.dat", FileMode.Open);
using (BinaryReader reader = new BinaryReader(fsLezen))
{
    string speler = reader.ReadString();
    bool geluidAan = reader.ReadBoolean();
    int levens = reader.ReadInt32();
    Console.WriteLine($"{speler} heeft {levens} levens. Geluid aan = {geluidAan}");
}
```

Wat verschijnt er op het scherm? En waarom crasht het programma niet?

::::{.callout-caution collapse="true" title="Oplossing"}
```text
Steven heeft 0 levens. Geluid aan = True
```

Beide getallen kloppen niet: Steven had 3 levens, en het geluid stond uit.

De ``BinaryWriter`` schreef 12 bytes weg: 7 voor de string (1 byte voor de lengte en 6 letters), 4 voor de ``int`` en 1 voor de ``bool``. Toon je die bytes zoals in het boek, met ``File.ReadAllBytes`` en ``{b:X2}``, dan zie je:

::: {.console}
```text
06 53 74 65 76 65 6E 03 00 00 00 00
```
:::

Na de string leest ``ReadBoolean`` één byte: ``03``, de eerste byte van het getal 3. Elke byte die niet 0 is, wordt ``true``. Daarna leest ``ReadInt32`` de volgende vier bytes: ``00 00 00 00``, dus 0. Samen lezen ze precies de 12 bytes die in het bestand staan, dus de ``BinaryReader`` komt niets tekort. Het bestand zelf zegt nergens welk datatype op welke plaats zit: dat weet enkel de code die het schreef.

Lees in exact dezelfde volgorde als je geschreven hebt:

```java
string speler = reader.ReadString();
int levens = reader.ReadInt32();
bool geluidAan = reader.ReadBoolean();
```

```text
Steven heeft 3 levens. Geluid aan = False
```
::::

**Deel 3.** Steven wil zijn huisdier bewaren als JSON. De A.I. maakte een klasse in een eigen bestand, ``Huisdier.cs``:

```java
public class Huisdier
{
    private string naam;
    private int leeftijd;

    public Huisdier(string naam, int leeftijd)
    {
        this.naam = naam;
        this.leeftijd = leeftijd;
    }

    public override string ToString()
    {
        return $"{naam} ({leeftijd} jaar)";
    }
}
```

In ``Main``, met ``using System.Text.Json;`` bovenaan ``Program.cs``:

```java
Huisdier kat = new Huisdier("Mimi", 4);
Console.WriteLine(kat);

string json = JsonSerializer.Serialize(kat);
File.WriteAllText("huisdier.json", json);
Console.WriteLine("Huisdier bewaard.");
```

Op het scherm staat ``Mimi (4 jaar)`` en ``Huisdier bewaard.``. Wat staat er in ``huisdier.json``, en waarom? Pas de klasse aan zodat de naam en de leeftijd wél in het bestand komen.

::::{.callout-caution collapse="true" title="Oplossing"}
```text
{}
```

Een bestand van 2 bytes: een leeg object. ``JsonSerializer`` bewaart enkel de publieke properties van een object, en ``Huisdier`` heeft er geen. ``naam`` en ``leeftijd`` zijn private instantievariabelen. ``ToString`` kan er wel aan, want die methode zit in de klasse zelf.

Maak er publieke properties van:

```java
public class Huisdier
{
    public Huisdier(string naam, int leeftijd)
    {
        Naam = naam;
        Leeftijd = leeftijd;
    }

    public string Naam { get; set; }
    public int Leeftijd { get; set; }

    public override string ToString()
    {
        return $"{Naam} ({Leeftijd} jaar)";
    }
}
```

Nu staat er in ``huisdier.json``:

```text
{"Naam":"Mimi","Leeftijd":4}
```

Wil je de private instantievariabelen houden, dan kan het ook met het attribuut ``[JsonInclude]`` boven elke instantievariabele, en ``using System.Text.Json.Serialization;`` bovenaan ``Huisdier.cs``. In het bestand staan dan de namen van de instantievariabelen: ``{"naam":"Mimi","leeftijd":4}``.
::::

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
* Geen van de drie fouten geeft een foutmelding of een crash. Bij deel 1 en 3 ziet wie enkel naar het scherm kijkt zelfs niets verdachts. Open na het uitvoeren dus ook het bestand zelf.
* Een ``StreamWriter`` zet je altijd in een ``using``-blok. Zie [``using`` alternatief](https://www.ziescherp.be/content/21_bestanden/schrijvenenlezen.html#using-alternatief).
* Een binair bestand onthoudt geen datatypes. Lees in exact dezelfde volgorde als je schreef. Zie [BinaryReader](https://www.ziescherp.be/content/21_bestanden/schrijvenenlezen.html#binaryreader).
* Enkel publieke properties komen in de JSON, tenzij je ``JsonInclude`` gebruikt. Zie [Serialiseren in C# naar JSON](https://www.ziescherp.be/content/21_bestanden/serialize.html#serialiseren-in-c-naar-json) en [JsonInclude](https://www.ziescherp.be/content/21_bestanden/serialize.html#jsoninclude).
::::


# IMDB Top 100 JSON 

Op [deze site](https://github.com/hjorturlarsen/IMDB-top-100/blob/master/data/movies.json) vind je de top 100 films ooit volgens IMDB. Download het bestand en gebruik het om een applicatie rond te ontwikkelen. De applicatie toont een menu'tje met volgende functionaliteiten:

1. Top 100 titels tonen.
2. Zoeken naar een titel (of deel ervan) en dan tonen op welke plek de titel staat.
3. Voor een nummer tussen 1 en 100 in en open vervolgens de browser (zoek zelf op hoe dit kan mbv ``Process``) naar de bijhorende IMDB-pagina van die film. Je gebruikt hiervoor het id van de film, bv: "https://www.imdb.com/title/tt0111161/" indien je de pagina van The Shawnshank Redemption nodig hebt.

::::{.callout-caution collapse="true" title="Oplossing"}

::::


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

::::{.callout-caution collapse="true" title="Oplossing"}
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


# Schijfinformatie {#h18-schijfinformatie}

Met de klasse ``DriveInfo`` vraag je informatie op over de schijven van je computer. ``DriveInfo.GetDrives()`` geeft een array met alle schijven. Van elke schijf ken je onder andere:

* ``Name``: de naam, bv. ``C:\``;
* ``TotalSize``: de totale grootte, in bytes;
* ``AvailableFreeSpace``: de vrije ruimte, in bytes;
* ``IsReady``: of je de schijf op dit moment kan uitlezen.

``DriveInfo`` zit in de namespace ``System.IO``, net als ``File`` en ``Directory``.

Toon een genummerde lijst van alle schijven, te beginnen bij 1. Vraag de gebruiker over welke schijf hij meer wil weten, en toon van die schijf de vrije ruimte en de totale grootte in gigabytes, met twee cijfers na de komma.

```text
1. C:\
2. Z:\
Over welke schijf wil je meer weten?
>1
Schijf C:\: 659,66 GB vrij van 951,65 GB
```

De gebruiker typt 1 voor de eerste schijf, maar in de array heeft die index 0.

Een schijf die niet klaar is, zoals een kaartlezer zonder kaart, geeft een ``IOException`` als je ``TotalSize`` opvraagt. Kijk dus eerst naar ``IsReady``.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
DriveInfo[] schijven = DriveInfo.GetDrives();
for (int i = 0; i < schijven.Length; i++)
{
    Console.WriteLine($"{i + 1}. {schijven[i].Name}");
}

Console.WriteLine("Over welke schijf wil je meer weten?");
try
{
    int keuze = int.Parse(Console.ReadLine()) - 1;
    if (keuze < 0 || keuze >= schijven.Length)
    {
        Console.WriteLine("Die schijf bestaat niet.");
    }
    else if (!schijven[keuze].IsReady)
    {
        Console.WriteLine($"Schijf {schijven[keuze].Name} is niet klaar.");
    }
    else
    {
        DriveInfo schijf = schijven[keuze];
        double vrijInGB = schijf.AvailableFreeSpace / (1024.0 * 1024 * 1024);
        double totaalInGB = schijf.TotalSize / (1024.0 * 1024 * 1024);
        Console.WriteLine($"Schijf {schijf.Name}: {vrijInGB:F2} GB vrij van {totaalInGB:F2} GB");
    }
}
catch (FormatException)
{
    Console.WriteLine("Geef het nummer van een schijf.");
}
```
::::


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

::::
