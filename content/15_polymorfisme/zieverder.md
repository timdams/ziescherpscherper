## Zie verder: andere talen

### Polymorfisme in Python

In C# heb je voor polymorfisme een gemeenschappelijke parent-klasse nodig (hier ``Dier``) plus ``virtual``/``override``. In **Python** krijg je hetzelfde resultaat zomaar via *duck typing*: "als het loopt als een eend en kwaakt als een eend, dan is het een eend". Er is geen gedeelde basisklasse nodig; als het object de juiste methode heeft, werkt het gewoon:

```python
class Paard:
    def maak_geluid(self):
        return "Hinnikhinnik"

class Varken:
    def maak_geluid(self):
        return "Oinkoink"

def laat_spreken(dier):
    print(dier.maak_geluid())   # werkt voor elk object met die methode

laat_spreken(Paard())   # Hinnikhinnik
laat_spreken(Varken())  # Oinkoink
```

C# controleert de types al bij het compileren; Python kijkt pas tijdens de uitvoer of de methode bestaat.

### Type-check in andere talen

Het idee "is dit object van dat type?" bestaat in zowat elke OOP-taal, maar elke taal heeft er een eigen woord voor. Waar C# ``obj is Voertuig`` schrijft, doe je in **Python** dit met de functie ``isinstance``:

```python
if isinstance(mijn_auto, Voertuig):
    print("mijn_auto is een Voertuig")
```

En in **JavaScript** gebruik je de operator ``instanceof``:

```javascript
if (mijnAuto instanceof Voertuig) {
    console.log("mijnAuto is een Voertuig");
}
```

Drie keer dezelfde vraag, drie keer een andere notatie: een keyword (``is``), een functie (``isinstance``) of een operator (``instanceof``).

### Gelijkheid in andere talen

Zelf bepalen wanneer twee objecten "gelijk" zijn doe je in andere talen via een vaste, speciale methode. In **Python** override je daarvoor de magische methode ``__eq__``, die meteen achter de gewone ``==`` zit:

```python
class Student:
    def __eq__(self, other):
        return (self.geboortejaar == other.geboortejaar
                and self.voornaam == other.voornaam)
```

In **Java** lijkt het bijna op C#: je overridet ``equals`` (let op de kleine letter):

```java
@Override
public boolean equals(Object o) {
    if (!(o instanceof Student)) return false;
    Student temp = (Student) o;
    return geboortejaar == temp.geboortejaar
        && voornaam.equals(temp.voornaam);
}
```

Net als in C# geldt in Java: wie ``equals`` overridet, override ook ``hashCode``. In **JavaScript** bestaat zoiets niet: ``===`` blijft altijd op referentie vergelijken en valt niet te overriden. Daar schrijf je gewoon zelf een functie ``zijnGelijk(a, b)``.
