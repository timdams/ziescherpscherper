## Zie verder: andere talen

### Constructor in andere talen

In C# heeft de constructor dezelfde naam als de klasse. Niet elke taal doet dat. In **Python** heet de constructor altijd `__init__` en is de eerste parameter `self` (de verwijzing naar het object zelf):

```python
class Auto:
    def __init__(self, merk):
        self.merk = merk

mijnAuto = Auto("Bovarc")
```

In **JavaScript** is het idee weer hetzelfde, maar heet de methode gewoon `constructor`:

```javascript
class Auto {
    constructor(merk) {
        this.merk = merk;
    }
}
```

### Meerdere constructors

C#, **Java** en **C++** laten allemaal meerdere constructors toe met een verschillend aantal of type parameters (overloading). In Java ziet dat er bijna identiek uit aan C#:

```java
class Student {
    Student(String bijnaam) { ... }
    Student(String bijnaam, boolean isWerkstudent) { ... }
}
```

**Python** kent dat overloaden niet: een klasse heeft daar maar één `__init__`. Je lost het op met default-parameterwaarden:

```python
class Student:
    def __init__(self, bijnaam, is_werkstudent=False):
        self.bijnaam = bijnaam
        self.is_werkstudent = is_werkstudent
```

Eén constructor die zich als meerdere gedraagt: of je nu `Student("Jos")` of `Student("Jos", True)` schrijft, het werkt.

### Static in andere talen

In **Java** werkt ``static`` zo goed als identiek aan C#: een gedeelde teller bij de klasse, en een methode die je op de klasse aanroept zonder object:

```java
class Fiets {
    static int aantalFietsen = 0;
    Fiets() { aantalFietsen++; }
    static int getAantal() { return aantalFietsen; }
}
```

**Python** doet hetzelfde met andere woorden: een variabele rechtstreeks in de klasse (geen `self`) is een gedeelde *class variable*, en `@staticmethod` maakt een methode die je op de klasse aanroept:

```python
class Fiets:
    aantal_fietsen = 0   # gedeeld over alle objecten

    @staticmethod
    def beschrijf():
        print("Een fiets")
```

In alle gevallen hoort dit bij de *klasse*, niet bij een individueel object.
