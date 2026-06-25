## Zie verder: andere talen

### Methode-signatuur

**Python** doet dit zo:

```python
def tel_op(a, b):
    return a + b
```

In Python schrijf je gewoon `def` en hoef je geen returntype of types voor je parameters op te geven. Dat scheelt typewerk, maar je verliest de hulp van de compiler: Python merkt pas tijdens het uitvoeren of je per ongeluk een verkeerd type meegaf, terwijl C# je dat al meteen vertelt.

### Bibliotheken importeren

In C# haal je bibliotheken binnen met `using`. **Python** doet dit met `import`:

```python
import math

print(math.sqrt(16))
```

Het idee is hetzelfde als bij C#: je geeft aan welke bibliotheek je wilt gebruiken en spreekt nadien de methoden aan via de naam ervan (hier `math.sqrt`, zoals `Math.Sqrt` in C#).

### Overloading

**Python** kent geen overloading. Je kan er geen twee functies met dezelfde naam definiëren: de tweede overschrijft gewoon de eerste. Pythonisten lossen dit op met default-parameters:

```python
def bereken_opp(lengte, breedte=None):
    if breedte is None:
        return int(3.14159 * lengte * lengte)  # cirkel
    return lengte * breedte                     # rechthoek
```

In C# kiest de compiler op voorhand de juiste versie op basis van het aantal en type parameters. In Python schrijf je die keuze zelf binnenin je functie met een `if`.
