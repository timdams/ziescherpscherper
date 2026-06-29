## Zie verder

### Even terugblikken

![](../assets/zieverder.png) In dit hoofdstuk zag je de vierde pijler van OOP: polymorfisme, letterlijk "meerdere vormen". Een object van een child-type kan je bewaren in een variabele van het parent-type, en toch zijn eigen gedrag uitvoeren. Daardoor kan je een bonte verzameling objecten als één geheel behandelen, bijvoorbeeld in een ``List<Dier>`` of ``List<Minister>``.

De kern op een rij:

- Een referentie naar een child mag je toewijzen aan een variabele van het parent-type (upcasting). Dat gebeurt automatisch.
- De variabele bepaalt wat je mag aanroepen; het echte object in de heap bepaalt welke ``override`` draait (late binding).
- Late binding werkt enkel als de methode ``virtual`` of ``abstract`` is. Bij een gewone methode kijkt C# enkel naar het type van de variabele.
- Dankzij polymorfisme kan je lijsten van het basistype vullen met objecten van child-klassen en die in één lus verwerken.

:::{.callout-warning}
## Valkuilen
- Een variabele van het type ``Dier`` (of ``System.Object``) kan enkel wat in dat type beschreven staat, ook al zit er een ``Varken`` in de heap. Wil je terug bij de child-specifieke zaken, dan moet je downcasten (hoofdstuk 18).
- Vergeet je ``virtual``/``abstract`` op de parent-methode, dan werkt polymorfisme niet zoals verwacht en draait gewoon de parent-versie.
:::



### In andere talen

#### Polymorfisme in Python

In C# heb je voor polymorfisme een gemeenschappelijke parent-klasse nodig (hier ``Dier``) plus ``virtual``/``override``. In **Python** krijg je hetzelfde resultaat via *duck typing*: "als het loopt als een eend en kwaakt als een eend, dan is het een eend". Er is geen gedeelde basisklasse nodig; als het object de juiste methode heeft, werkt het gewoon:

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

#### Type-check in andere talen

Het idee "is dit object van dat type?" bestaat in zowat elke OOP-taal, maar elke taal heeft er een eigen woord voor. Waar C# ``obj is Voertuig`` schrijft, doe je dit in Python met de functie ``isinstance``:

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

C# gebruikt dus een keyword (``is``), Python een functie (``isinstance``) en JavaScript een operator (``instanceof``).

#### Gelijkheid in andere talen

Zelf bepalen wanneer twee objecten "gelijk" zijn doe je in andere talen via een vaste, speciale methode. In Python override je daarvoor de magische methode ``__eq__``, die meteen achter de gewone ``==`` zit:

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

Net als in C# geldt in Java: wie ``equals`` overridet, override ook ``hashCode``. In JavaScript bestaat zoiets niet: ``===`` blijft altijd op referentie vergelijken en valt niet te overriden. Daar schrijf je gewoon zelf een functie ``zijnGelijk(a, b)``.

### Zoek de fout

Onderstaande C#-code wil dat elk dier zijn eigen geluid maakt, maar bij de uitvoer roept élk dier "Een dier maakt geluid". Wat loopt er mis?

```csharp
internal class Dier
{
    public string MaakGeluid()
    {
        return "Een dier maakt geluid";
    }
}
internal class Varken : Dier
{
    public override string MaakGeluid()
    {
        return "Oinkoink";
    }
}
```

:::{.callout-note collapse="true"}
## Antwoord
De methode ``MaakGeluid`` in ``Dier`` is niet ``virtual`` (of ``abstract``), dus de ``override`` in ``Varken`` kan niet kicken in. Eigenlijk zou deze code zelfs niet compileren: zonder ``virtual`` mag je niet ``override``'n. Maak ``MaakGeluid`` in de parent ``public virtual string MaakGeluid()`` (of ``abstract``), dan zorgt late binding ervoor dat de ``Varken``-versie draait.
:::
