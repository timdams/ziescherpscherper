## Zie verder: andere talen

### Overervings-syntax

Het idee van overerving bestaat in zowat elke OO-taal, alleen de notatie verschilt. In **Python** zet je de parent-klasse tussen haakjes achter de naam:

```python
class Dier:
    def eet(self):
        pass

class Paard(Dier):
    pass
```

Java gebruikt dan weer het woord ``extends`` (``class Paard extends Dier``) en C++ schrijft ``class Paard : public Dier``.

### Virtual en override

C# is hier streng: een methode mag pas overschreven worden als de parent ze expliciet ``virtual`` zet, en de child moet expliciet ``override`` schrijven. In **Python** is daar niets van: élke methode is automatisch overschrijfbaar, je herschrijft ze gewoon in de child-klasse:

```python
class Vliegtuig:
    def vlieg(self):
        print("Het vliegtuig vliegt door de wolken.")

class Raket(Vliegtuig):
    def vlieg(self):           # geen virtual, geen override nodig
        print("De raket verdwijnt in de ruimte.")
```

Ook **Java** maakt elke (niet-``final``) methode standaard overschrijfbaar. C# doet net het omgekeerde: niets mag overschreven worden tenzij je het uitdrukkelijk toelaat.

### Base versus super

C# noemt de verwijzing naar de parent-klasse ``base``. **Python** en **Java** noemen dat net ``super``. In Python roep je de parent-versie zo aan:

```python
class Frituur(Restaurant):
    def poets_alles(self):
        super().poets_alles()   # in C#: base.PoetsAlles()
        self.kosten += 500
```

In beide gevallen voer je eerst de implementatie van de parent uit en bouw je daarop verder.
