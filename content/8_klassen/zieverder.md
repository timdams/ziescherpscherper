## Zie verder: andere talen

### Moet alles in een klasse?

Dat *alle* code in een klasse moet zitten, deelt C# met **Java**: ook daar verplicht de taal je om zelfs een simpel "hallo"-programma in een klasse te verpakken.

**Python** en **JavaScript** zijn hierin veel losser. Daar mag je gewoon los code en functies schrijven, zonder ook maar één klasse:

```python
# een volledig geldig Python-programma, geen klasse in zicht
print("Hallo wereld")
```

OOP is in die talen dus een keuze, geen verplichting. In **C** ten slotte bestaat het begrip klasse helemaal niet: daar werk je met losse functies en `struct`s. C# zit aan het strenge eind van het spectrum.

### Properties elders

Properties met `get`/`set` zijn typisch voor C#. **Java** kent ze niet als taalconcept: daar schrijf je voor elke instantievariabele met de hand twee aparte methoden, een *getter* en een *setter*. Van buiten ziet dat er rommeliger uit:

```java
sith.setEnergie(20);
System.out.println(sith.getEnergie());
```

**Python** zit er dichter bij dankzij de `@property`-decorator: je schrijft methoden, maar gebruikt ze van buiten alsof het een gewone variabele is, net als in C#:

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

In al die talen verberg je de instantievariabele en regel je de toegang via code; C# maakt dat alleen het eleganst met zijn ingebouwde property-syntax.
