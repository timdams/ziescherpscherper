## Zie verder: andere talen

### Geheugen zelf beheren

C# heeft een GC die het opruimen voor je doet. In **C++** bestaat zoiets niet: je beheert geheugen volledig zelf met ``new`` en ``delete``.

```cpp
int* p = new int(5);   // geheugen reserveren
delete p;              // zelf weer vrijgeven
```

Vergeet je die ``delete``, dan lek je geheugen (*memory leak*); roep je ``delete`` twee keer op, dan crasht je programma. De C#-GC neemt dit risico volledig van je over.

### "Geen waarde"

Bijna elke taal heeft een manier om "geen waarde" aan te duiden, maar met een eigen naam. In **Python** heet dat ``None``:

```python
student = None
if student is None:
    print("Nog geen student.")
```

**JavaScript** maakt het nog wat ingewikkelder: daar bestaan er twéé van. ``null`` (bewust leeg, door jou gezet) én ``undefined`` (nog nooit een waarde gekregen):

```javascript
let student = null;       // bewust leeg
let leeftijd;             // undefined: nooit toegekend
```

C# houdt het simpel met enkel ``null``, maar het idee "deze variabele verwijst (nog) nergens naar" kom je in zowat elke taal tegen.

### Fouten in andere talen

**Python** kent net als C# echte exceptions, alleen heten de keywords er net iets anders: ``try`` blijft ``try``, maar ``catch`` wordt ``except``:

```python
try:
    getal = int(input())
except ValueError:
    print("Verkeerde invoer!")
```

De taal **C** heeft daarentegen *helemaal geen* exceptions. Daar moet je elke functie zelf laten teruggeven of ze gelukt is, meestal via een returnwaarde of een foutcode die je telkens manueel controleert:

```c
int getal;
if (scanf("%d", &getal) != 1) {   // 1 = gelukt
    printf("Verkeerde invoer!\n");
}
```

Je merkt het verschil: in C ben je verplicht na elke aanroep zelf de fout te checken, terwijl ``try``/``catch`` die controle netjes bundelt.
