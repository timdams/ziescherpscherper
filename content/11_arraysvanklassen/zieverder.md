## Zie verder

### Even terugblikken

In dit hoofdstuk leerde je niet langer met losse objecten werken, maar met hele verzamelingen ervan. Je zag arrays van objecten, de handigere ``List``, de ``foreach``-loop om over een collectie te gaan, en de collectie-klassen ``Queue``, ``Stack`` en ``Dictionary``.

De kern op een rij:

- Een array van objecten bevat na ``new`` enkel referenties die nog ``null`` zijn; je moet de objecten zelf nog aanmaken.
- Een ``List`` groeit en krimpt mee en geeft je methoden zoals ``Add`` en ``Remove``; let op: ze werkt met ``Count``, niet met ``Length``.
- Een ``foreach`` doorloopt alle elementen, maar de iteration variabele is read-only: je kan ze niet vervangen.
- Een ``Dictionary`` zoekt razendsnel op een unieke key; een ``Queue`` is FIFO, een ``Stack`` is LIFO.

:::{.callout-warning}
## Valkuilen
- Een object uit een array benaderen dat nog ``null`` is geeft een ``NullReferenceException``. Maak het object eerst aan.
- Een collectie wijzigen (toevoegen of verwijderen) tijdens een ``foreach`` crasht met *"Collection was modified"*. Gebruik dan een ``for``-loop van achter naar voor.
- ``IndexOf`` en ``Contains`` vergelijken op referentie: twee aparte objecten met dezelfde inhoud gelden als verschillend.
:::



### In andere talen

#### List elders

In **Python** bestaat zoiets als ``List<>`` niet apart: een ``list`` is ingebouwd in de taal en groeit gewoon mee. Je hoeft er ook geen type bij te zetten, want Python is dynamisch getypeerd:

```python
namen = ["Tim", "An"]
namen.append("Jan")
```

In Java lijkt het sterk op C#: daar gebruik je ``ArrayList<String>`` met ``.add(...)``. Zelfde idee, ander jasje.

#### Foreach elders

De ``foreach``-loop is helemaal niet uniek voor C#. In **Python** schrijf je net hetzelfde idee, maar zonder type en zonder accolades:

```python
for meting in metingen:
    print(meting)
```

In JavaScript heet dit ``for...of``:

```javascript
for (const meting of metingen) {
    console.log(meting);
}
```

#### Dictionary elders

Een ``Dictionary`` heet in **Python** een ``dict`` en zit ingebouwd in de taal met een handige ``{}``-syntax. Geen types opgeven, gewoon sleutel-waarde-paren:

```python
klanten = {123: "Tim Dams", 6463: "James Bond"}
print(klanten[123])
```

In JavaScript gebruik je hiervoor een ``Map`` (of een gewoon object), met aparte ``set``- en ``get``-methoden:

```javascript
const klanten = new Map();
klanten.set(123, "Tim Dams");
console.log(klanten.get(123));
```

### Zoek de fout

Onderstaande C#-code wil alle minderjarige studenten uit een lijst verwijderen, maar het programma crasht. Wat loopt er mis?

```csharp
foreach (var student in deKlas)
{
    if (student.Geboortejaar > 2010)
        deKlas.Remove(student);
}
```

:::{.callout-note collapse="true"}
## Antwoord
Je mag een collectie niet wijzigen terwijl je er met ``foreach`` over itereert. Deze code gooit een ``InvalidOperationException`` met de boodschap *"Collection was modified; enumeration operation may not execute"*. Gebruik in plaats daarvan een gewone ``for``-loop die je van achter naar voor doorloopt, of werk op een kopie van de lijst.
:::
