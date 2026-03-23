
## Intermezzo H9

:::{.callout-tip}
Dit labo bereidt je voor op het werken met objecten. We leren hoe we gegevens kunnen structureren in C#. Je maakt best eerst deze oefeningen voor je de bijhorende leerstof in het handboek van hoofdstuk 9 doorneemt.

Dit (nieuwe) aanvullend intermezzo werd opgesteld in samenspraak met Gemini 3 Pro (High). 
:::


### Oefening 1:  De Data Architect (**Essential**)

#### Deel 1: De chaos van losse variabelen

Stel je voor: je moet de gegevens van één student bijhouden. Als we alles in losse variabelen stoppen, wordt onze code al snel onoverzichtelijk.

* Maak een nieuw Console Application project.
* Maak in `Main` volgende variabelen aan:
  * Een `string` voor de naam.
  * Drie `int` variabelen voor de scores.
* Schrijf een methode `CalculateAverage` die deze 4 variabelen aanvaardt en het gemiddelde berekent.

```csharp
string name = "Alex";
int score1 = 14;
int score2 = 16;
int score3 = 11;

double average = CalculateAverage(score1, score2, score3);
Console.WriteLine($"{name} scoorde gemiddeld: {average}");
```

Reflectie:
* Wat als je nu een 4e score wilt toevoegen? Hoeveel code moet je aanpassen?
* Wat als je methode per ongeluk `CalculateAverage(score1, score1, score3)` aanroept?

# Deel 2: Structureren met Structs

In plaats van losse variabelen, kunnen we gegevens groeperen in een **struct**. Zie dit als een container waar alle info van één student in zit.

We gaan deze struct in een **apart bestand** plaatsen, net zoals we dat het hele semester zullen doen:

1. Klik in de **Solution Explorer** met de rechtermuisknop op je projectnaam.
2. Kies **Add** > **New Item...** (of **Class...**).
3. Selecteer **Class** en geef het de naam `StudentData.cs`.
4. Klik op **Add**.

Visual Studio heeft nu een nieuwe class voor je gemaakt. Verander het woordje `class` naar `struct` en maak het `public`. Je bestand moet er zo uitzien:

```csharp
public struct StudentData
{
    public string Name;
    public int[] Scores;
}
```

* Vervang nu in je `Main` de losse variabelen door één variabele van het type `StudentData`.
* Ken de waarden toe aan de properties van de struct.

```csharp
StudentData myStudent; 
myStudent.Name = "Alex";
myStudent.Scores = new int[] { 14, 16, 11 };
```

:::{.callout-note}
**Wat is een struct?**

Een `struct` (structure) is een manier om verschillende variabelen die logisch bij elkaar horen, samen te binden in één nieuwe variabele.

Je kan het zien als een **blauwdruk**.

*   De `struct` definitie (in je nieuwe bestand) is het **ontwerp** (het plan).
*   De variabele `myStudent` (in `Main`) is het daadwerkelijke **object** (het huis) dat je op basis van dat ontwerp hebt gebouwd.

Vanaf nu kent C# dus niet alleen `int`, `string` en `bool`, maar ook jouw eigen type `StudentData`!
:::

#### Deel 3: Scores verwerken

Het grote voordeel is dat we nu de volledige student in één keer kunnen doorgeven aan methoden.

* Herschrijf de methode `CalculateAverage`.
* De methode aanvaardt nu **één parameter** van het type `StudentData` in plaats van losse ints.
* De methode haalt de scores uit de struct (`student.Scores`) om het gemiddelde te berekenen.

```csharp
static double CalculateAverage(StudentData data)
{
   // Implementeer hier de berekening
   // Tip: gebruik data.Scores.Length
}
```

:::{.callout-note}
Merk op dat als we nu een score toevoegen aan de array, we de methode `CalculateAverage` **niet** meer hoeven aan te passen!
:::

#### Uitbreiding (*Essential*)

Kan je je programma uitbreiden met volgende functionaliteiten?

* Maak een methode `bool HasPassed(StudentData student)` die `true` teruggeeft als het gemiddelde >= 10.
* Maak een methode `int GetHighestScore(StudentData student)` die het hoogste cijfer uit de struct haalt.

### Oefening 2: De RPG Inventory

:::{.callout-tip}
In dit deel gaan we een stap verder. We weten nu wat een struct is (een "doos"). Maar wat als we een hele stapel dozen hebben?
:::

#### Deel 1: De Inventory Item

In een RPG game heeft je character vaak tientallen items bij zich.
Stel je voor dat je dit met losse arrays zou doen:
`string[] itemNames`, `double[] itemWeights`, `int[] itemValues`...

Dat is vragen om problemen. Wat als index 5 van `names` niet meer klopt met index 5 van `weights`?

We gaan dit oplossen met één **struct**.

* Maak een nieuw project "RPGInventory".
* Voeg een nieuwe struct `InventoryItem.cs` toe via **Add New Item**.
* Zorg dat de struct volgende eigenschappen heeft:
  * `Name` (string): bv "Iron Sword"
  * `Weight` (double): bv 2.5
  * `Value` (int): bv 150 (goudstukken)

```csharp
public struct InventoryItem
{
    public string Name;
    public double Weight;
    public int Value;
}
```

#### Deel 2: De Schatkist (Arrays van Structs)

Nu kunnen we een array maken van deze struct. Dit is onze "rugzak".

* Maak in `Main` een array aan die plaats biedt voor 3 items.
* Vul de array met 3 items (verzin zelf leuke namen!).

```csharp
InventoryItem[] backpack = new InventoryItem[3];

backpack[0].Name = "Rusty Sword";
backpack[0].Weight = 5.5;
backpack[0].Value = 10;

backpack[1].Name = "Health Potion";
backpack[1].Weight = 0.5;
backpack[1].Value = 50;
// ... vul het derde item ...
```


#### Deel 3: De Inventory Manager

We willen nu methoden schrijven die onze rugzak kunnen analyseren.

* Maak een methode `ShowInventory` die de **volledige array** als parameter krijgt.
* Gebruik een `foreach` loop om elk item netjes op het scherm te tonen.

```csharp
static void ShowInventory(InventoryItem[] items)
{
    Console.WriteLine("--- Jouw Rugzak ---");
    foreach (InventoryItem item in items)
    {
        Console.WriteLine($"- {item.Name} ({item.Value} gold)");
    }
}
```

* Roep deze methode aan in `Main`.

#### Uitbreiding 

Nu je de basis hebt, kan je de "Inventory Manager" slimmer maken. Voeg de volgende methodes toe:

1.  **Total Value**:
    Maak een methode `int CountTotalValue(InventoryItem[] items)` die berekent hoeveel je hele inboedel waard is.

2.  **Heavy Lifting**:
    Maak een methode `InventoryItem FindHeaviestItem(InventoryItem[] items)` die het zwaarste object uit de lijst teruggeeft.
    *Tip: Begin met het eerste item als "zwaarste tot nu toe" en loop door de rest.*
    *Print in Main de naam van dit object af.*

3.  **Encumbrance Rule**:
    Maak een methode `bool IsOverencumbered(InventoryItem[] items, double maxWeight)`.
    Deze geeft `true` terug als het totale gewicht van alle items hoger is dan `maxWeight`.
    Test dit in `Main`: als je rugzak te zwaar is, toon dan een waarschuwing "Je kan niet meer rennen!".


Meer informatie over het `struct`keyword vind je terug in de [appendix van het handboek](https://apwt.gitbook.io/zie-scherp-scherper/appendix/struct).

## Klaar?

Ga nu naar deze [introductie in het handboek](https://apwt.gitbook.io/zie-scherp-scherper/h9-object-oriented-programming/0_oop_intro#c-is-oo-in-hart-en-nieren) en volg én maak de tekst tot aan de sectie "Klassen en objecten" (dus maak enkel Pong). Zo ben je helemaal klaar voor hoofdstuk 9!

::::{.callout-caution collapse="true" title="Oplossing"}

# Oefeningen H9 intermezzo

## De data architect 1, deel 2

```csharp
using System;

namespace StudentApp
{
    // Deze struct zet je in een apart bestand
    public struct StudentData
    {
        public string Name;
        public int[] Scores;
    }

    class Program
    {
        static void Main(string[] args)
        {
            StudentData myStudent;
            myStudent.Name = "Alex";
            myStudent.Scores = new int[] { 14, 16, 11 };

            
            double average = CalculateAverage(myStudent);
            Console.WriteLine($"{myStudent.Name} scoorde gemiddeld: {average:F2}");

            bool passed = HasPassed(myStudent);
            Console.WriteLine($"Is geslaagd: {passed}");

            int highest = GetHighestScore(myStudent);
            Console.WriteLine($"Hoogste score: {highest}");

            Console.WriteLine("\n--- Scores updaten ---");
            myStudent.Scores = new int[] { 14, 16, 11, 19 }; // Een 4e score toegevoegd
            
            average = CalculateAverage(myStudent);
            Console.WriteLine($"{myStudent.Name} scoorde gemiddeld (met 4 scores): {average:F2}");
            Console.WriteLine($"Nieuwe hoogste score: {GetHighestScore(myStudent)}");
        }

        static double CalculateAverage(StudentData data)
        {
            double sum = 0;
            for (int i = 0; i < data.Scores.Length; i++)
            {
                sum += data.Scores[i];
            }

            return sum / data.Scores.Length;
        }

        static bool HasPassed(StudentData student)
        {
            double average = CalculateAverage(student);
            return average >= 10;
        }

        static int GetHighestScore(StudentData student)
        {

            int highest = student.Scores[0];
            for (int i = 1; i < student.Scores.Length; i++)
            {
                if (student.Scores[i] > highest)
                {
                    highest = student.Scores[i];
                }
            }
            return highest;
        }
    }
}
```

## De RPG inventory

In apart bestand:

```csharp
public struct InventoryItem
{
    public string Name;
    public double Weight;
    public int Value;
}
```

```csharp
static void Main(string[] args)
{
    // Deel 2: De Schatkist (Arrays van Structs)
    InventoryItem[] backpack = new InventoryItem[3];

    backpack[0].Name = "Rusty Sword";
    backpack[0].Weight = 5.5;
    backpack[0].Value = 10;

    backpack[1].Name = "Health Potion";
    backpack[1].Weight = 0.5;
    backpack[1].Value = 50;

    backpack[2].Name = "Golden Chalice";
    backpack[2].Weight = 2.0;
    backpack[2].Value = 150;

    // Deel 3: De Inventory Manager
    ShowInventory(backpack);

    // Uitbreidingen testen
    Console.WriteLine("\n--- Statistieken ---");

    int totalValue = CountTotalValue(backpack);
    Console.WriteLine($"Totale waarde: {totalValue} gold");

    InventoryItem heaviest = FindHeaviestItem(backpack);
    Console.WriteLine($"Zwaarste item: {heaviest.Name} ({heaviest.Weight})");

    // Test Encumbrance (max gewicht 10) - totaal is 5.5 + 0.5 + 2.0 = 8.0 (zou OK moeten zijn)
    Console.WriteLine($"Overladen (max 10): {IsOverencumbered(backpack, 10)}");

    // Test Encumbrance (max gewicht 5) - zou TRUE moeten zijn
    Console.WriteLine($"Overladen (max 5): {IsOverencumbered(backpack, 5)}");
    if (IsOverencumbered(backpack, 5))
    {
        Console.WriteLine("WAARSCHUWING: Je kan niet meer rennen!");
    }
}

// Deel 3: ShowInventory
static void ShowInventory(InventoryItem[] items)
{
    Console.WriteLine("--- Jouw Rugzak ---");
    foreach (InventoryItem item in items)
    {
        Console.WriteLine($"- {item.Name} ({item.Value} gold) - {item.Weight}kg");
    }
}

// Uitbreiding: Total Value
static int CountTotalValue(InventoryItem[] items)
{
    int total = 0;
    foreach (InventoryItem item in items)
    {
        total += item.Value;
    }
    return total;
}

// Uitbreiding: Heavy Lifting
static InventoryItem FindHeaviestItem(InventoryItem[] items)
{
    //Voorlopig kan dit enkel zo
    if (items.Length == 0) return new InventoryItem();

    InventoryItem heaviest = items[0];
    for (int i = 1; i < items.Length; i++)
    {
        if (items[i].Weight > heaviest.Weight)
        {
            heaviest = items[i];
        }
    }
    return heaviest;
}

// Uitbreiding: Encumbrance Rule
static bool IsOverencumbered(InventoryItem[] items, double maxWeight)
{
    double totalWeight = 0;
    foreach (InventoryItem item in items)
    {
        totalWeight += item.Weight;
    }
    return totalWeight > maxWeight;
}
```
::::
