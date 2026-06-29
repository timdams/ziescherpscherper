## Zie verder

### Even terugblikken

![](../assets/zieverder.png)In dit hoofdstuk keek je achter de schermen van het geheugen. Je zag het verschil tussen value types (in de stack) en reference types (in de heap), en hoe objecten en arrays als referentie worden bewaard. De Garbage Collector ruimt onbereikbare objecten op, je leerde wat `null` betekent en hoe je een `NullReferenceException` voorkomt. Tot slot kwamen `namespace` en `using` aan bod.

De kern op een rij:

- Value types bewaren hun waarde in de stack; reference types (objecten, arrays) bewaren in de stack enkel een referentie naar data in de heap.
- De `=` operator kopieert bij reference types de referentie, niet de inhoud: beide variabelen wijzen dan naar hetzelfde object.
- Objecten worden by reference aan methoden meegegeven, dus aanpassingen in de methode raken het originele object.
- Een reference type dat nog nergens naar wijst, heeft de waarde `null`. De GC ruimt onbereikbare objecten op de heap zelf op.

:::{.callout-warning}
## Valkuilen
- Een object benaderen dat `null` is, geeft een `NullReferenceException`. Test eerst met `if (obj != null)` of gebruik de verkorte notatie `obj?.Naam`.
- `b = a;` bij objecten kopieert het object niet, maar laat `b` naar hetzelfde object wijzen als `a`. Het oude object van `b` raak je dan kwijt.
- Roep `GC.Collect()` niet zelf aan. De GC kiest zelf het beste moment; zelf ingrijpen onderbreekt je programma op een slecht ogenblik en maakt het meestal trager.
:::


### In andere talen

#### Geheugen zelf beheren

C# heeft een GC die het opruimen voor je doet. In **C++** bestaat zoiets niet: je beheert geheugen volledig zelf met `new` en `delete`.

```cpp
int* p = new int(5);   // geheugen reserveren
delete p;              // zelf weer vrijgeven
```

Vergeet je die `delete`, dan lek je geheugen (*memory leak*); roep je `delete` twee keer op, dan crasht je programma. De C#-GC neemt dit risico van je over.

#### "Geen waarde"

Bijna elke taal heeft een manier om "geen waarde" aan te duiden, maar met een eigen naam. In **Python** heet dat `None`:

```python
student = None
if student is None:
    print("Nog geen student.")
```

JavaScript maakt het wat ingewikkelder: daar bestaan er twee. `null` (bewust leeg, door jou gezet) én `undefined` (nog nooit een waarde gekregen):

```javascript
let student = null;       // bewust leeg
let leeftijd;             // undefined: nooit toegekend
```

C# houdt het bij enkel `null`, maar het idee "deze variabele verwijst (nog) nergens naar" kom je in zowat elke taal tegen.

#### Fouten in andere talen

**Python** kent net als C# echte exceptions, alleen heten de keywords er net iets anders: `try` blijft `try`, maar `catch` wordt `except`:

```python
try:
    getal = int(input())
except ValueError:
    print("Verkeerde invoer!")
```

De taal **C** heeft daarentegen helemaal geen exceptions. Daar moet je elke functie zelf laten teruggeven of ze gelukt is, meestal via een returnwaarde of een foutcode die je telkens manueel controleert:

```c
int getal;
if (scanf("%d", &getal) != 1) {   // 1 = gelukt
    printf("Verkeerde invoer!\n");
}
```

In C ben je dus verplicht na elke aanroep zelf de fout te checken, terwijl `try`/`catch` die controle bundelt.

### Zoek de fout

Onderstaande C#-code wil de naam van een student tonen, maar crasht met een `NullReferenceException`. Wat loopt er mis?

```csharp
Student[] studenten = new Student[3];
studenten[0].Naam = "Marc Jansens";
Console.WriteLine(studenten[0].Naam);
```

:::{.callout-note collapse="true"}
## Antwoord
`new Student[3]` maakt wel een array aan, maar die bevat drie reference types die elk de defaultwaarde `null` hebben. Er staat dus nog geen `Student`-object op `studenten[0]`. Op de tweede regel probeer je `.Naam` te zetten op een object dat `null` is, en dat geeft een `NullReferenceException`. Maak eerst het object aan met `studenten[0] = new Student();` voor je de instantievariabele invult.
:::
