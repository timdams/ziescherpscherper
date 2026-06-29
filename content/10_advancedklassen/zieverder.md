## Zie verder

### Even terugblikken

>![](../assets/zieverder.png)In dit hoofdstuk leerde je objecten netjes initialiseren met constructors, en ontdekte je dat een deel van een klasse ook bij de klasse zelf kan horen via ``static``. Daarnaast zag je object initializer syntax als snelle manier om properties beginwaarden te geven.

De kern op een rij:

- De ``new`` operator maakt een object aan op de heap, roept de constructor aan en geeft een referentie terug.
- Schrijf je zelf een constructor, dan verlies je de gratis default constructor; heb je die nodig, schrijf hem dan zelf bij.
- Met ``this(...)`` laat je de ene constructor de andere aanroepen, zodat je dubbele code vermijdt.
- ``static`` zorgt dat een instantievariabele, methode of property bij de klasse hoort en niet bij een individueel object.

:::{.callout-warning}
## Valkuilen
- ``new Student()`` werkt niet meer zodra je een overloaded constructor schreef en de default constructor niet zelf toevoegde. De fout ``'Student' does not contain a constructor that takes 0 arguments`` verklapt dit.
- Een ``static`` methode kan geen gewone (per-object) instantievariabelen of methoden aanspreken; daar is geen object voor.
- Object initializer syntax werkt enkel op properties met een ``set`` die van buitenaf bereikbaar is. Een ``private set`` kan je er niet mee instellen.
:::



### In andere talen

#### Constructors elders

In C# heeft de constructor dezelfde naam als de klasse. Niet elke taal doet dat. In **Python** heet de constructor altijd `__init__` en is de eerste parameter `self` (de verwijzing naar het object zelf):

```python
class Auto:
    def __init__(self, merk):
        self.merk = merk

mijnAuto = Auto("Bovarc")
```

In JavaScript is het idee weer hetzelfde, maar heet de methode gewoon `constructor`:

```javascript
class Auto {
    constructor(merk) {
        this.merk = merk;
    }
}
```

#### Meerdere constructors

C#, **Java** en C++ laten allemaal meerdere constructors toe met een verschillend aantal of type parameters (overloading). In Java ziet dat er bijna identiek uit aan C#:

```java
class Student {
    Student(String bijnaam) { ... }
    Student(String bijnaam, boolean isWerkstudent) { ... }
}
```

Python kent dat overloaden niet: een klasse heeft daar maar één `__init__`. Je lost het op met default-parameterwaarden, zodat zowel `Student("Jos")` als `Student("Jos", True)` werkt:

```python
class Student:
    def __init__(self, bijnaam, is_werkstudent=False):
        self.bijnaam = bijnaam
        self.is_werkstudent = is_werkstudent
```

#### Static elders

In **Java** werkt ``static`` zo goed als identiek aan C#: een gedeelde teller bij de klasse, en een methode die je op de klasse aanroept zonder object:

```java
class Fiets {
    static int aantalFietsen = 0;
    Fiets() { aantalFietsen++; }
    static int getAantal() { return aantalFietsen; }
}
```

Python doet hetzelfde met andere woorden: een variabele rechtstreeks in de klasse (geen `self`) is een gedeelde *class variable*, en `@staticmethod` maakt een methode die je op de klasse aanroept:

```python
class Fiets:
    aantal_fietsen = 0   # gedeeld over alle objecten

    @staticmethod
    def beschrijf():
        print("Een fiets")
```

### Zoek de fout

Onderstaande **Java**-klasse wil bijhouden hoeveel fietsen er gemaakt zijn, maar de teller blijft hangen op 1. Wat loopt er mis?

```java
class Fiets {
    int aantalFietsen = 0;
    Fiets() {
        aantalFietsen++;
    }
}
```

:::{.callout-note collapse="true"}
## Antwoord
``aantalFietsen`` is hier een gewone instantievariabele, dus elk Fiets-object krijgt z'n eigen kopie die in de constructor van 0 naar 1 gaat. Je wilt één teller die gedeeld wordt over alle objecten, dus moet de variabele ``static`` zijn: ``static int aantalFietsen = 0;``. Dezelfde redenering geldt in C#.
:::
