## Zie verder: andere talen

### Een bestand lezen

In **Python** doet het ``with open``-blok exact wat ons ``using``-blok doet: het bestand gaat automatisch dicht aan het einde van het blok, ook als er een fout optreedt.

```python
with open("dagboek.txt") as f:
    inhoud = f.read()
# f is hier al netjes gesloten
```

Mooi contrast: waar C# een aparte ``StreamReader`` en een ``using`` nodig heeft, vangt Python beide in één korte regel.

### JSON in JavaScript

JSON staat voor *JavaScript Object Notation*, en het komt dus letterlijk uit **JavaScript**. Daar heb je geen aparte ``JsonSerializer`` nodig: serialiseren zit ingebouwd via ``JSON.stringify``.

```javascript
const student = { naam: "Barry", leeftijd: 25, uitgeschreven: true };
const jsonString = JSON.stringify(student);
console.log(jsonString); // {"naam":"Barry","leeftijd":25,"uitgeschreven":true}
```

Heel gelijkaardig aan C#, maar nóg directer: omdat JSON uit JavaScript stamt, is een JavaScript-object en zijn JSON-voorstelling bijna hetzelfde ding.

### JSON in Python

**Python** pakt JSON aan met zijn ingebouwde ``json``-module: ``json.dumps`` serialiseert, ``json.loads`` deserialiseert.

```python
import json

student = {"naam": "Barry", "leeftijd": 25, "uitgeschreven": True}
json_string = json.dumps(student)          # object -> JSON-tekst
terug = json.loads(json_string)            # JSON-tekst -> dict
```

Verschil met C#: je hoeft bij het deserialiseren geen type mee te geven. Python geeft je gewoon een ``dict`` terug, terwijl C# weet bij welke klasse de data hoort via ``Deserialize<Student>``.
