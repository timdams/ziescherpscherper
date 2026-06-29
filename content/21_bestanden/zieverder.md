## Zie verder

### Even terugblikken

![](../assets/zieverder.png)In dit hoofdstuk dook je in ``System.IO``: paths samenstellen met ``Path.Combine``, controleren of een bestand bestaat, en tekst of binaire data lezen en schrijven. Je leerde ook objecten serialiseren naar JSON en terug, zodat je de staat van je programma kan bewaren. Omdat je nu buiten je programma werkt, werd exception handling plots essentieel.

De kern op een rij:

- ``File`` en ``Directory`` zijn static; ``FileInfo`` en ``DirectoryInfo`` maak je eerst aan met ``new``.
- Een ``StreamWriter`` of ``StreamReader`` zet je in een ``using``-blok zodat het bestand gegarandeerd weer vrijkomt, ook bij een fout.
- Voor kleine bestanden volstaan ``File.ReadAllText`` of ``File.ReadAllLines``; voor grote bestanden lees je regel per regel met een ``StreamReader``.
- Met ``JsonSerializer`` (uit ``System.Text.Json``) serialiseer en deserialiseer je objecten; enkel publieke properties komen mee.

:::{.callout-warning}
## Valkuilen
- Een bestand pad bestaat niet altijd waar je denkt, en je hebt niet altijd de juiste rechten. Werk dus altijd met try-catch (bv. ``UnauthorizedAccessException``, ``FileNotFoundException``).
- Bij een ``BinaryReader`` moet je in exact dezelfde volgorde lezen als je geschreven hebt, anders crasht je programma (bv. een ``EndOfStreamException``).
- ``File.Create`` geeft een open ``FileStream`` terug: sluit die meteen met een ``using``, anders blijft het bestand gelockt.
:::



### In andere talen

#### Een bestand lezen

In **Python** doet het ``with open``-blok exact wat ons ``using``-blok doet: het bestand gaat automatisch dicht aan het einde van het blok, ook als er een fout optreedt.

```python
with open("dagboek.txt") as f:
    inhoud = f.read()
# f is hier al netjes gesloten
```

Waar C# een aparte ``StreamReader`` en een ``using`` nodig heeft, vangt Python beide in één korte regel.

#### JSON in JavaScript

JSON staat voor *JavaScript Object Notation*, en het komt dus letterlijk uit **JavaScript**. Daar heb je geen aparte ``JsonSerializer`` nodig: serialiseren zit ingebouwd via ``JSON.stringify``.

```javascript
const student = { naam: "Barry", leeftijd: 25, uitgeschreven: true };
const jsonString = JSON.stringify(student);
console.log(jsonString); // {"naam":"Barry","leeftijd":25,"uitgeschreven":true}
```

Omdat JSON uit JavaScript stamt, is een JavaScript-object en zijn JSON-voorstelling bijna hetzelfde ding.

#### JSON in Python

Python pakt JSON aan met zijn ingebouwde ``json``-module: ``json.dumps`` serialiseert, ``json.loads`` deserialiseert.

```python
import json

student = {"naam": "Barry", "leeftijd": 25, "uitgeschreven": True}
json_string = json.dumps(student)          # object -> JSON-tekst
terug = json.loads(json_string)            # JSON-tekst -> dict
```

Verschil met C#: je hoeft bij het deserialiseren geen type mee te geven. Python geeft je gewoon een ``dict`` terug, terwijl C# weet bij welke klasse de data hoort via ``Deserialize<Student>``.

### Zoek de fout

Onderstaande Python-code schrijft een dagboekregel weg, maar het bestand blijft soms leeg of half geschreven, zeker als er verderop iets misloopt. Wat zou je beter doen?

```python
f = open("dagboek.txt", "w")
f.write("Beste dagboek...")
# code die crasht voor de volgende regel
f.close()
```

:::{.callout-note collapse="true"}
## Antwoord
Als de code tussen ``open`` en ``close`` crasht, wordt ``f.close()`` nooit bereikt en blijft het bestand open (en mogelijk leeg of gelockt). Gebruik een ``with open(...)``-blok: dan sluit Python het bestand sowieso, net zoals een ``using``-blok in C#.

```python
with open("dagboek.txt", "w") as f:
    f.write("Beste dagboek...")
```
:::
