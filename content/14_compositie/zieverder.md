## Zie verder: andere talen

### Compositie in Python

Compositie (de "heeft een"-relatie) werkt in **Python** quasi identiek aan C#: je bewaart gewoon een object van een andere klasse als instantievariabele:

```python
class HardeSchijf:
    pass

class PC:
    def __init__(self):
        self.harde_schijf = HardeSchijf()   # PC heeft een HardeSchijf
```

Het idee "een object in een ander object" is dus geen C#-eigenaardigheid, maar een principe dat in elke OO-taal terugkomt. Ook de vuistregel *favor composition over inheritance* geldt over de talen heen.

### This in Python en JavaScript

In **Python** bestaat er geen impliciet ``this``. Daar geef je het huidige object expliciet mee als de eerste parameter van elke methode, traditioneel ``self`` genaamd:

```python
class Auto:
    def start(self):
        print(self.merk)
```

In C# is ``this`` dus een verborgen extra die de compiler voor je regelt; in Python staat datzelfde object gewoon zichtbaar als eerste parameter. **JavaScript** heeft wél een ``this``, maar met beruchte binding-regels: waarnaar ``this`` verwijst hangt af van *hoe* je een functie aanroept, niet van waar ze staat. Dat zorgt voor heel wat verwarring.
