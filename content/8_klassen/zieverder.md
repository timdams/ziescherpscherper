## Zie verder

### Even terugblikken

![](../assets/zieverder.png)In dit hoofdstuk maakte je voor het eerst eigen klassen en objecten. Je zag hoe een object z'n eigen interne staat bijhoudt in instantievariabelen, hoe je gedrag toevoegt met methoden, en hoe je de toegang tot die interne staat afschermt met access modifiers en properties.

De kern op een rij:

- Een klasse is de blauwdruk, een object is een instantie die je met ``new`` aanmaakt; elk object heeft z'n eigen instantievariabelen.
- Instantievariabelen maak je nooit ``public``; je geeft de buitenwereld gecontroleerde toegang via properties.
- Een full property kan in de ``set`` controleren wat er binnenkomt (bijvoorbeeld geen negatieve energie), een auto-property is de korte vorm zonder eigen controle.
- Read-only en write-only properties krijg je door respectievelijk de ``set`` of de ``get`` weg te laten.

:::{.callout-warning}
## Valkuilen
- Een instantievariabele ``public`` maken omzeilt heel het idee van encapsulatie. Gebruik een property.
- In een auto-property kan je geen controle schrijven; heb je validatie nodig, zet ze om naar een full property.
- Pas je in de klasse zelf een instantievariabele rechtstreeks aan, dan omzeil je de controle in de ``set``. Ga ook intern via de property.
:::


### In andere talen

#### Moet alles in een klasse?

Dat alle code in een klasse moet zitten, deelt C# met **Java**: ook daar verplicht de taal je om zelfs een simpel "hallo"-programma in een klasse te verpakken.

Python en JavaScript zijn hierin veel losser. Daar mag je gewoon los code en functies schrijven, zonder ook maar één klasse:

```python
# een volledig geldig Python-programma, geen klasse in zicht
print("Hallo wereld")
```

OOP is in die talen dus een keuze, geen verplichting. In C ten slotte bestaat het begrip klasse helemaal niet: daar werk je met losse functies en `struct`s.

#### Properties elders

Properties met `get`/`set` zijn typisch voor C#. **Java** kent ze niet als taalconcept: daar schrijf je voor elke instantievariabele met de hand twee aparte methoden, een *getter* en een *setter*:

```java
sith.setEnergie(20);
System.out.println(sith.getEnergie());
```

Python zit er dichter bij dankzij de `@property`-decorator: je schrijft methoden, maar gebruikt ze van buiten alsof het een gewone variabele is, net als in C#:

```python
class SithLord:
    @property
    def energie(self):
        return self._energie

    @energie.setter
    def energie(self, waarde):
        if waarde >= 0:
            self._energie = waarde
```

### Zoek de fout

Onderstaande **Python**-klasse wil de energie afschermen tegen negatieve waarden, maar de check werkt niet. Wat loopt er mis?

```python
class SithLord:
    @property
    def energie(self):
        return self._energie

    @energie.setter
    def energie(self, waarde):
        if waarde >= 0:
            self.energie = waarde
```

:::{.callout-note collapse="true"}
## Antwoord
In de setter staat ``self.energie = waarde`` in plaats van ``self._energie = waarde``. Daardoor roept de setter zichzelf opnieuw aan (de property heet immers ``energie``) en krijg je oneindige recursie. Je moet de achterliggende variabele ``_energie`` toewijzen, niet de property zelf. Hetzelfde gevaar bestaat in C# wanneer je in een ``set`` per ongeluk de property aanspreekt in plaats van de instantievariabele.
:::
