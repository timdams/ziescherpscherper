<!--# Oefeningen week 2: Arrays-->

:::{.callout-tip}
Voor de volgende oefeningen dien je telkens zelf te bepalen welke methoden (met bijhorende parameters en return types) nodig zijn om tot een gestructureerde oplossing te komen.
:::
<!--# Oefeningen week 2: Arrays-->



# Array Viewer (*Essential*)

Schrijf een herbruikbare methode die de inhoud van een integer-array visueel weergeeft in de console.

**Functionele vereisten:**

*   De methode moet werken voor arrays van willekeurige grootte.
*   Alle elementen worden op één regel getoond.
*   Tussen de elementen wordt een tab-karakter geplaatst voor de spatiëring.
*   Zorg voor een correcte afhandeling van het laatste element: plaats **geen** tab na het laatste element.

**Demonstratie:**
Toon de werking aan in je `Main`-methode met minstens twee verschillende arrays.

**Verwachte output:**

```text
15          6           9
0           1           2           3           4           5           6
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static void VisualiseerArray(int[] array)
{
    for (int i = 0; i < array.Length-1; i++)
    {
        Console.Write($"{array[i]}\t");
    }
    Console.WriteLine($"{array[array.Length-1]}");
}
```
::::

---


# Parkeergarage (*Essential*)

Ontwikkel een applicatie die parkeerkosten berekent. De applicatie moet eerst vragen hoeveel auto's er verwerkt moeten worden, en vervolgens per auto de parkeerduur opvragen.

**Tarieven:**
Het basistarief bedraagt € 2,00 voor een parkeerduur tot en met 3 uur. Indien er langer geparkeerd wordt, wordt er na deze 3 uur een supplement aangerekend van € 0,50 per begonnen uur.
De maximale dagprijs is begrensd op € 10,00. Je mag ervan uitgaan dat een auto nooit langer dan 24 uur parkeert.

**Technische vereisten:**

*   Zorg voor een indeling in logische methodes. Denk bijvoorbeeld aan een methode die de kosten berekent voor één specifieke parkeerbeurt.
*   Het eindresultaat moet een overzichtstabel zijn die per auto de duur en de kostprijs toont, gevolgd door een totaalbedrag.

**Voorbeeldoutput:**

```text
Geef aantal auto's in
3
Geef parkeertijd auto 1 in (uren):
1.5
Geef parkeertijd auto 2 in (uren):
4
Geef parkeertijd auto 3 in (uren):
24

Auto    Duur    Kost
1       1.5     2.00
2       4.0     2.50
3       24.0    10.00
Totaal  29.5    14.50
```


::::{.callout-caution collapse="true" title="Oplossing"}
```java
static void Main()
{
    Console.WriteLine("Geef aantal auto's in:");
    int aantal = Convert.ToInt32(Console.ReadLine());

    double[] duur = new double[aantal];

    for (int i = 0; i < duur.Length; i++)
    {
        Console.WriteLine($"Geef parkeertijd auto {i + 1} in (uren)");
        duur[i] = Convert.ToDouble(Console.ReadLine());

    }

    ToonResultaat(duur);
}

static void ToonResultaat(double[] duur)
{
    double somDuur = 0;
    double somKost = 0;
    Console.WriteLine("Auto\tDuur\tKost");
    for (int i = 0; i < duur.Length; i++)
    {
        double kost = BerekenKosten(duur[i]);
        somKost += kost;
        somDuur += duur[i];
        
        Console.WriteLine($"{i+1}\t{duur[i]}\t{kost}");
    }
    Console.WriteLine($"Totaal\t{somDuur}\t{somKost}");
}

static double BerekenKosten(double duur)
{

    double kost = 2;
    if (duur > 3)
    {
        double extra = Math.Ceiling(duur - 3);
        kost += (extra * 0.5);

    }
    if (kost > 10)
    {
        kost = 10;
    }
    return kost;
}
```
::::

---


# Caesar-encryptie

Implementeer het Caesar-algoritme om tekst te versleutelen en te ontcijferen.

**Algoritme:**
Bij dit systeem wordt elke letter in de tekst vervangen door een letter die een vast aantal plaatsen verderop in het alfabet staat. Wanneer het einde van het alfabet bereikt wordt, telt men verder vanaf 'A' (cyclische verschuiving).
Bijvoorbeeld: bij een verschuiving van 3 wordt 'A' een 'D', 'B' een 'E', enzovoort. 'Z' wordt in dit geval 'C'.

**Formule:**
Gebruik de formule: `nieuweIndex = (oudeIndex + sleutel) % 26` (waarbij A=0, B=1, ...).

**Opdracht:**
Schrijf een programma dat de gebruiker om een tekst en een sleutel (verschuiving) vraagt. Het programma moet in staat zijn om de tekst te versleutelen en nadien de versleutelde tekst weer correct te ontsleutelen.
Je oplossing moet gebruik maken van arrays van karakters (`char[]`) voor de interne verwerking.

![Caesar-encryptie](../assets/5_arrays/practarray8.png)

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static char[] DeCrypt(char[] cipertext, int key)
{
    return Encrypt(cipertext, -key);
}

static char[] Encrypt(char[] plaintext, int key)
{
    char[] result = new char[plaintext.Length];
    //werkt enkel voor kleine letters
    for (int i = 0; i < plaintext.Length; i++)
    {
        if (plaintext[i] == ' ')
            result[i] = ' ';
        else
        {
            int newchar = (int)plaintext[i] + key;
            if (newchar > 122) //nodig voor encrypt
                newchar -= 26;
            else if (newchar < 97) //nodig voor decrypt
                newchar += 26;

            result[i] = (char)newchar;
        }
    }
    return result;
}
```
::::

---




# Puzzelen met arrays deel 2 (*Essential*)

Analyseer onderstaande problemen en implementeer de oplossingen. Let goed op het onderscheid tussen het aanmaken van een **nieuwe** array en het **aanpassen** van een bestaande array.

1.  **Omkeren (Nieuw)**: Lees getallen in en produceer een nieuwe array met de elementen in omgekeerde volgorde.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
const int n = 5;
int[] origineel = new int[n];

for (int i = 0; i < n; i++)
{
    Console.WriteLine($"Geef getal {i + 1}:");
    origineel[i] = int.Parse(Console.ReadLine());
}

int[] omgekeerd = new int[n];
for (int i = 0; i < n; i++)
{
    omgekeerd[i] = origineel[n - 1 - i];
}

Console.WriteLine("Origineel:");
for (int i = 0; i < n; i++) Console.WriteLine(origineel[i]);

Console.WriteLine("Omgekeerd:");
for (int i = 0; i < n; i++) Console.WriteLine(omgekeerd[i]);
```
::::

2.  **Omkeren (Mutatie)**: Keer de volgorde van de elementen om in de array zelf (in-place).

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int[] getallen = { 1, 2, 3, 4, 5 };

for (int i = 0; i < getallen.Length / 2; i++)
{
    int tmp = getallen[i];
    getallen[i] = getallen[getallen.Length - 1 - i];
    getallen[getallen.Length - 1 - i] = tmp;
}

for (int i = 0; i < getallen.Length; i++) Console.WriteLine(getallen[i]);
```
::::


3.  **Verschuiven (Mutatie)**: Roteer de inhoud van de array 1 positie naar links. Het eerste element verhuist naar de laatste positie.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int[] getallen = { 1, 2, 3, 4, 5 };

int eerste = getallen[0];
for (int i = 0; i < getallen.Length - 1; i++)
{
    getallen[i] = getallen[i + 1];
}
getallen[getallen.Length - 1] = eerste;

for (int i = 0; i < getallen.Length; i++) Console.WriteLine(getallen[i]);
```
::::

4.  **Verschuiven (Nieuw)**: Idem als bovenstaande, maar het resultaat komt in een nieuwe array; de originele blijft ongewijzigd.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int[] origineel = { 1, 2, 3, 4, 5 };
int[] resultaat = new int[origineel.Length];

for (int i = 0; i < origineel.Length - 1; i++)
{
    resultaat[i] = origineel[i + 1];
}
resultaat[origineel.Length - 1] = origineel[0];

for (int i = 0; i < resultaat.Length; i++) Console.WriteLine(resultaat[i]);
```
::::

5.  **Verschuiven met X (Nieuw)**: Roteer de elementen 3 posities naar links in een nieuwe array.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int[] origineel = { 1, 2, 3, 4, 5, 6, 7 };
int x = 3;
int[] resultaat = new int[origineel.Length];

for (int i = 0; i < origineel.Length; i++)
{
    int bronIndex = (i + x) % origineel.Length;
    resultaat[i] = origineel[bronIndex];
}

for (int i = 0; i < resultaat.Length; i++) Console.WriteLine(resultaat[i]);
```
::::

6.  **Verschuiven met X (Mutatie)**: Roteer de elementen 3 posities naar links in de array zelf.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int[] getallen = { 1, 2, 3, 4, 5, 6, 7 };
int x = 3;

for (int keer = 0; keer < x; keer++)
{
    int eerste = getallen[0];
    for (int i = 0; i < getallen.Length - 1; i++)
    {
        getallen[i] = getallen[i + 1];
    }
    getallen[getallen.Length - 1] = eerste;
}

for (int i = 0; i < getallen.Length; i++) Console.WriteLine(getallen[i]);
```
::::

7.  **Uniek (Nieuw)**: Filter een array zodat alle dubbele waarden verwijderd zijn.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int[] origineel = { 1, 2, 3, 2, 4, 1, 5 };
int[] uniek = new int[origineel.Length]; // worst case: alles uniek
int aantal = 0;

for (int i = 0; i < origineel.Length; i++)
{
    // Zoeken of origineel[i] al in uniek staat
    bool gevonden = false;
    for (int j = 0; j < aantal && gevonden == false; j++)
    {
        if (uniek[j] == origineel[i])
        {
            gevonden = true;
        }
    }

    if (gevonden == false)
    {
        uniek[aantal] = origineel[i];
        aantal++;
    }
}

Console.WriteLine("Unieke waarden:");
for (int i = 0; i < aantal; i++) Console.WriteLine(uniek[i]);
```
::::

8.  **Uniek en Gesorteerd (Nieuw)**: Filter een array die reeds gesorteerd is, zodat dubbels verwijderd zijn. Omdat de lijst gesorteerd is, staan gelijke waarden naast elkaar. Je hoeft dus enkel elk element met het vorige element te vergelijken.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int[] origineel = { 1, 1, 2, 3, 3, 3, 4, 5, 5 };
int[] uniek = new int[origineel.Length];
int aantal = 0;

if (origineel.Length > 0)
{
    uniek[0] = origineel[0];
    aantal = 1;

    for (int i = 1; i < origineel.Length; i++)
    {
        if (origineel[i] != origineel[i - 1])
        {
            uniek[aantal] = origineel[i];
            aantal++;
        }
    }
}

Console.WriteLine("Unieke waarden:");
for (int i = 0; i < aantal; i++) Console.WriteLine(uniek[i]);
```
::::

9.  **Analyse Max**: Bepaal het maximum van een reeks getallen, hoe vaak dit voorkomt, en de index van de *eerste* keer dat dit maximum voorkomt.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int[] getallen = { 3, 7, 2, 7, 5, 7, 1 };

// Stap 1: max bepalen
int max = getallen[0];
for (int i = 1; i < getallen.Length; i++)
{
    if (getallen[i] > max)
    {
        max = getallen[i];
    }
}

// Stap 2: aantal en eerste index
int aantal = 0;
int eersteIndex = -1;
for (int i = 0; i < getallen.Length; i++)
{
    if (getallen[i] == max)
    {
        aantal++;
        if (eersteIndex == -1)
        {
            eersteIndex = i;
        }
    }
}

Console.WriteLine($"Maximum: {max}");
Console.WriteLine($"Aantal keer: {aantal}");
Console.WriteLine($"Eerste index: {eersteIndex}");
```
::::

10. **Analyse Min**: Bepaal het minimum, hoe vaak dit voorkomt, en de index van de *laatste* keer dat dit minimum voorkomt.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int[] getallen = { 5, 2, 8, 2, 6, 2, 9 };

int min = getallen[0];
for (int i = 1; i < getallen.Length; i++)
{
    if (getallen[i] < min)
    {
        min = getallen[i];
    }
}

int aantal = 0;
int laatsteIndex = -1;
for (int i = 0; i < getallen.Length; i++)
{
    if (getallen[i] == min)
    {
        aantal++;
        laatsteIndex = i; // overschrijft telkens, dus uiteindelijk de laatste
    }
}

Console.WriteLine($"Minimum: {min}");
Console.WriteLine($"Aantal keer: {aantal}");
Console.WriteLine($"Laatste index: {laatsteIndex}");
```
::::

11. **Aantal Verschillende**: Tel hoeveel unieke getallen er voorkomen in een reeks.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int[] getallen = { 1, 2, 3, 2, 4, 1, 5 };
int[] alGezien = new int[getallen.Length];
int aantalUniek = 0;

for (int i = 0; i < getallen.Length; i++)
{
    bool gevonden = false;
    for (int j = 0; j < aantalUniek && gevonden == false; j++)
    {
        if (alGezien[j] == getallen[i])
        {
            gevonden = true;
        }
    }

    if (gevonden == false)
    {
        alGezien[aantalUniek] = getallen[i];
        aantalUniek++;
    }
}

Console.WriteLine($"Aantal verschillende getallen: {aantalUniek}");
```
::::

12. **[PRO] Zeef van Eratosthenes**: Genereer alle priemgetallen kleiner dan 100.000.
    *   Maak een lijst van alle getallen van 2 tot 100.000 (initieel allemaal "mogelijk priem").
    *   Begin bij 2: streep alle veelvouden van 2 weg (behalve 2 zelf).
    *   Ga naar het volgende niet-weggestreepte getal (3) en streep alle veelvouden weg.
    *   Herhaal dit proces.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
const int max = 100000;
bool[] isPriem = new bool[max + 1];

// Alles initieel op "mogelijk priem"
for (int i = 2; i <= max; i++)
{
    isPriem[i] = true;
}

// Zeven
for (int i = 2; i <= max; i++)
{
    if (isPriem[i] == true)
    {
        // Veelvouden van i wegstrepen, beginnend bij 2*i
        for (int j = i * 2; j <= max; j += i)
        {
            isPriem[j] = false;
        }
    }
}

// Tellen en eerste 20 tonen als sample
int aantalPriem = 0;
int getoond = 0;
for (int i = 2; i <= max; i++)
{
    if (isPriem[i] == true)
    {
        aantalPriem++;
        if (getoond < 20)
        {
            Console.Write($"{i} ");
            getoond++;
        }
    }
}
Console.WriteLine();
Console.WriteLine($"Totaal aantal priemgetallen onder {max}: {aantalPriem}");
```
::::

---


# Determinant (*Essential*)

Programmeer een module om de determinant van een matrix te berekenen.

**Opdracht:**
Begin met ondersteuning voor een 2x2 matrix. De determinant van een matrix `[[a, b], [c, d]]` bereken je als `(a * d) - (b * c)` (kruisproduct).
Zorg ervoor dat je oplossing gebruik maakt van meerdimensionale arrays (`[,]`).

**Uitbreidbaarheid:**
Denk na over hoe je de code zou structureren om later ook 3x3 matrices te ondersteunen.

**Test data:**
Voor matrix $\begin{pmatrix} 2 & 4 \\ 3 & 5 \end{pmatrix}$ is het resultaat -2.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static int BerekenDeterminant(int[,] aMatrix)
{
    return aMatrix[0, 0] * aMatrix[1, 1] - aMatrix[0, 1] * aMatrix[1, 0];
}
```
::::

---


# 2D Array Viewer

Breid je eerdere visualisatie-methode (ArrayViewer) uit zodat deze ook correct werkt voor 2D-matrices (rijen en kolommen proper uitgelijnd).

::::{.callout-caution collapse="true" title="Oplossing"}
static void VisualiseerArray(int[] array)
{
    for (int i = 0; i < array.Length - 1; i++)
    {
        Console.Write($"{array[i]}\t");
    }
    Console.WriteLine($"{array[array.Length - 1]}");
}

static void VisualiseerArray(int[,] matrix)
{
    int rijen = matrix.GetLength(0);
    int kolommen = matrix.GetLength(1);


    int maxBreedte = 0;
    for (int i = 0; i < rijen; i++)
    {
        for (int j = 0; j < kolommen; j++)
        {
            string s = matrix[i, j].ToString();
            if (s.Length > maxBreedte)
            {
                maxBreedte = s.Length;
            }
        }
    }

    for (int i = 0; i < rijen; i++)
    {
        for (int j = 0; j < kolommen - 1; j++)
        {
            Console.Write($"{matrix[i, j].ToString().PadLeft(maxBreedte)} ");
        }
        Console.WriteLine($"{matrix[i, kolommen - 1].ToString().PadLeft(maxBreedte)}");
    }
}
::::



# Voetbalcoach (*Essential*)

Een team wenst statistische analyse uit te voeren op de prestaties van hun spelers (rugnummers 1 t.e.m. 12).
Er moeten twee types acties bijgehouden worden: **positieve** en **negatieve**.
**Opdracht:**
Schrijf een programma dat interactief data kan invoeren. De gebruiker geeft een rugnummer en het type actie in (gebruik 'P' voor positief, 'N' voor negatief), gevolgd door het aantal keer dat deze actie voorkwam.
De gebruiker bepaalt zelf wanneer de invoer stopt.

Na afloop toont het programma een rapport met:

*   Per speler: aantal positieve acties, negatieve acties en het netto resultaat (positief - negatief).
*   Een aanduiding van de meest en minst performante speler(s).

Een typische invoer kan dus zijn:
 
```text
2
P
6
```

De coach kiest dus de speler met rugnummer 2, kiest voor een positieve actie ('P'), en voert 6 in als aantal.

In de array op index 1 (rugnummer -1) zal in de 0'de kolom (0 = positieve, 1 = negatieve) het getal 6 geplaatst worden.

Vervolgens kan de coach een ander rugnummer (of hetzelfde) invoeren en zo verder.

Wanneer de coach 99 invoert stopt het programma en worden de finale statistieken getoond

```text
Rugnummer   Positief   Negatief   Verschil
1               5       2        3
2               6       7       -1
```

::::{.callout-caution collapse="true" title="Oplossing"}
static void Main(string[] args)
{
    int[,] a =
    {
        { 1, 2, 3 },
        { 4, 5, 6 }
    }; // 2x3

    int[,] b =
    {
        { 7,  8  },
        { 9,  10 },
        { 11, 12 }
    }; // 3x2

    Console.WriteLine("Matrix A:");
    VisualiseerArray(a);

    Console.WriteLine();
    Console.WriteLine("Matrix B:");
    VisualiseerArray(b);

    int[,] c = MatrixProduct(a, b);

    Console.WriteLine();
    Console.WriteLine("A x B:");
    VisualiseerArray(c);
}
::::

---


# Robot Simulator (PRO)

Simuleer de bewegingen van een robot op een rooster.
De robot start op een bepaalde coördinaat en kijkt in een bepaalde windrichting (N, O, Z, W).

De robot accepteert een string van commando's:

*   'R': Draai 90 graden rechtsom.
*   'L': Draai 90 graden linksom.
*   'A': Zet een stap vooruit in de huidige richting.

**Doel:**
Bepaal de eindcoördinaat en eindrichting na het uitvoeren van een reeks commando's.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
enum Richtingen {Noord, Oost, Zuid, West};
static void Main(string[] args)
{
    int x = 7;
    int y = 3;
    Richtingen richting = Richtingen.Noord;
    bool[,] map = new bool[20, 20];

    string tekst = "AALAALALAAARAARAA";

    char[] opdrachten = tekst.ToCharArray();

    for (int i = 0; i < opdrachten.Length; i++)
    {
        switch (opdrachten[i])
        {
            case 'R':
                richting = RoteerRechts(richting);
                break;
            case 'L':
                richting = RoteerLinks(richting);
                break;
            case 'A':
                //missing: checken dat er niet uit randen wordt gegaan
                switch (richting)
                {
                    case Richtingen.Noord:
                        y--;
                        break;
                    case Richtingen.Oost:
                        x++;
                        break;
                    case Richtingen.Zuid:
                        y++;
                        break;
                    case Richtingen.West:
                        x--;
                        break;
                    default:
                        break;
                }
                map[x, y] = true;
                break;
        }
        TekenKaart(map);
        Console.ReadKey();
    }
}

private static void TekenKaart(bool[,] map)
{
    Console.Clear();
    for (int i = 0; i < map.GetUpperBound(0); i++)
    {
        for (int j = 0; j < map.GetUpperBound(1); j++)
        {
            if (map[j, i] == false)
                Console.Write(".");
            else
                Console.Write("X");
        }
        Console.Write(Environment.NewLine);
    }
}

private static Richtingen RoteerLinks(Richtingen richting)
{
    switch (richting)
    {
        case Richtingen.Noord:
            return Richtingen.West;
            break;
        case Richtingen.Oost:
            return Richtingen.Noord;
            break;
        case Richtingen.Zuid:
            return Richtingen.Oost;
            break;
        case Richtingen.West:
            return Richtingen.Zuid;
            break;
    }
    return Richtingen.Noord;
}

private static Richtingen RoteerRechts(Richtingen richting)
{
    switch (richting)
    {
        case Richtingen.Noord:
            return Richtingen.Oost;
            break;
        case Richtingen.Oost:
            return Richtingen.Zuid;
            break;
        case Richtingen.Zuid:
            return Richtingen.West;
            break;
        case Richtingen.West:
            return Richtingen.Noord;
            break;
    }
    return Richtingen.Noord;
}
```
::::

---





# Fraude Detectie (Final Essentials)

Tijdens de examens vermoedt de leerkracht dat er gespiekt wordt. Schrijf een programma dat kan detecteren of twee studenten opvallend vaak dezelfde fouten maken.

**Opdracht:**

1.  Vraag de gebruiker om de **correcte antwoordsleutel** van het examen in te geven (een reeks letters, bijv. "ABCDA").
2.  Vraag vervolgens de antwoorden van **twee studenten**.
3.  Bereken en toon de **score** voor elke student (1 punt per juist antwoord).
4.  Vergelijk de antwoorden van beide studenten op verdachte patronen:
    *   Als beide studenten op dezelfde vraag **hetzelfde foute antwoord** geven, telt dit als een "verdachte gelijkenis".

5.  Toon het aantal verdachte gelijkenissen.
6.  Als dit aantal **2 of hoger** is, toon dan een duidelijke waarschuwing: "FRAUDE ALARM!".

**Technische tips:**

*   Gebruik een `for`-lus om door de letters van de string (of char-array) te lopen.
*   Strings kunnen net als arrays benaderd worden met een index (bijv. `antwoord[i]`).

**Voorbeeldoutput:**

"Tekst die start met ">" is invoer van de gebruiker."

```text
Geef de correcte examensleutel:
> ABCDE

Geef de antwoorden van Student 1:
> AABDD
Score Student 1: 2/5

Geef de antwoorden van Student 2:
> AACDD
Score Student 2: 3/5

Aantal verdachte gelijkenissen: 2
FRAUDE ALARM!
```

*Tweede scenario (met fraude):*

```text
Geef de correcte examensleutel:
> ABCDE

Geef de antwoorden van Student 1:
> AACDD
Score Student 1: 3/5

Geef de antwoorden van Student 2:
> AACDD
Score Student 2: 3/5

Aantal verdachte gelijkenissen: 2
FRAUDE ALARM!
```

::::{.callout-caution collapse="true" title="Oplossing"}
````java
Console.WriteLine("Geef de correcte examensleutel:");
string sleutel = Console.ReadLine();

// ----- Student 1 -----
Console.WriteLine();
Console.WriteLine("Geef de antwoorden van Student 1:");
string student1 = Console.ReadLine();

int scoreS1 = 0;
for (int i = 0; i < sleutel.Length; i++)
{
    if (student1[i] == sleutel[i])
    {
        scoreS1++;
    }
}
Console.WriteLine($"Score Student 1: {scoreS1}/{sleutel.Length}");

// ----- Student 2 -----
Console.WriteLine();
Console.WriteLine("Geef de antwoorden van Student 2:");
string student2 = Console.ReadLine();

int scoreS2 = 0;
for (int i = 0; i < sleutel.Length; i++)
{
    if (student2[i] == sleutel[i])
    {
        scoreS2++;
    }
}
Console.WriteLine($"Score Student 2: {scoreS2}/{sleutel.Length}");

// ----- Verdachte gelijkenissen tellen -----
// Definitie: beide studenten geven exact hetzelfde antwoord, en dat antwoord is FOUT.
int verdacht = 0;
for (int i = 0; i < sleutel.Length; i++)
{
    if (student1[i] == student2[i] && student1[i] != sleutel[i])
    {
        verdacht++;
    }
}

Console.WriteLine();
Console.WriteLine($"Aantal verdachte gelijkenissen: {verdacht}");

if (verdacht >= 2)
{
    Console.WriteLine("FRAUDE ALARM!");
}
else
{
    Console.WriteLine("Geen fraude gedetecteerd.");
}
```
::::
