## Zie verder

### Even terugblikken

In dit hoofdstuk leerde je associaties kennen: compositie en aggregatie, allebei een "heeft een"-relatie tussen twee objecten. Het verschil zit in de levensduur van het innerlijke object. Je zag drie manieren om zo'n object aan te maken (rechtstreeks, via de constructor, via een property) en je leerde het `this` keyword om een object naar zichzelf te laten verwijzen.

De kern op een rij:

- Een "heeft een"-relatie wijst op associatie; een "is een"-relatie op overerving.
- Bij compositie sterft het innerlijke object mee met het omliggende object; bij aggregatie kan het op zichzelf blijven bestaan.
- "Heeft meerdere" betekent dat je een array of `List` van het innerlijke type gebruikt.
- De vuistregel *favor composition over inheritance*: twijfel je of een "is een"-relatie wel klopt, kies dan voor een "heeft een"-relatie.
- `this` geeft de referentie naar het huidige object terug; je gebruikt het om jezelf als parameter mee te geven, om naamconflicten op te lossen of om een andere constructor aan te roepen.

:::{.callout-warning}
## Valkuilen
- Spreek je een intern object aan dat nooit werd aangemaakt, dan krijg je een `NullReferenceException`. Controleer op `null` voor je het object gebruikt.
- Na `patient.Hart = donor.Hart;` verwijzen beide naar hetzelfde object in de heap. Het wordt niet gekopieerd: een aanpassing via de ene is ook zichtbaar via de andere.
- `this` werkt enkel in een instance-context. In een `static` methode bestaat er geen huidig object, dus kan je `this` daar niet gebruiken.
:::

:::{.callout-tip}
## Tijd om te oefenen
De practica bij dit hoofdstuk staan [hier](https://apwt.gitbook.io/ziescherp-oefeningen/h15-compositie-en-aggregatie/a_practicacomp).
:::

### In andere talen

#### Compositie in Python

Compositie (de "heeft een"-relatie) werkt in **Python** quasi identiek aan C#: je bewaart gewoon een object van een andere klasse als instantievariabele:

```python
class HardeSchijf:
    pass

class PC:
    def __init__(self):
        self.harde_schijf = HardeSchijf()   # PC heeft een HardeSchijf
```

Het idee "een object in een ander object" is dus geen C#-eigenaardigheid, maar een principe dat in elke OO-taal terugkomt. Ook de vuistregel *favor composition over inheritance* geldt over de talen heen.

#### This in Python en JavaScript

In **Python** bestaat er geen impliciet `this`. Daar geef je het huidige object expliciet mee als de eerste parameter van elke methode, traditioneel `self` genaamd:

```python
class Auto:
    def start(self):
        print(self.merk)
```

In C# is `this` dus een verborgen extra die de compiler voor je regelt; in Python staat datzelfde object gewoon zichtbaar als eerste parameter. **JavaScript** heeft wel een `this`, maar met beruchte binding-regels: waarnaar `this` verwijst hangt af van *hoe* je een functie aanroept, niet van waar ze staat. Dat zorgt voor heel wat verwarring.

### Zoek de fout

Onderstaande C#-code wil een PC met een harde schijf opbouwen via aggregatie en daarna de capaciteit tonen. Toch crasht het programma. Wat loopt er mis?

```csharp
internal class HardeSchijf
{
    public int MaxCapacity { get; set; }
}

internal class PC
{
    public HardeSchijf CHardeSchijf { get; set; }

    public override string ToString()
    {
        return $"Capaciteit HD: {CHardeSchijf.MaxCapacity} Gb";
    }
}
```

```java
PC mijnPC = new PC();
Console.WriteLine(mijnPC);
```

:::{.callout-note collapse="true"}
## Antwoord
`CHardeSchijf` werd nooit een object toegewezen en is dus `null`. Bij `CHardeSchijf.MaxCapacity` krijg je daarom een `NullReferenceException`. Steek eerst een harde schijf in de PC (`mijnPC.CHardeSchijf = new HardeSchijf();`) of controleer op `null` in `ToString` voor je de property gebruikt.
:::
