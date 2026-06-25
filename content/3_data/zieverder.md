## Zie verder: andere talen

### Type-coercion

C# is **streng**: je moet expliciet zeggen dat je een type wilt omzetten. **JavaScript** doet net het omgekeerde en zet types automatisch om (*type coercion*). Dat lijkt handig, maar is een beruchte valkuil:

```javascript
console.log("5" + 3);  // "53"  (de 3 wordt een string)
console.log("5" * 3);  // 15    (de "5" wordt een getal)
```

Bij `+` wint de string en plak je teksten aan elkaar, bij `*` wint het getal. JavaScript raadt zelf wat je bedoelt; in C# zou dit gewoon een compileerfout geven.

### Input parsen

In **Python** doe je hetzelfde, maar veel korter: input lezen gebeurt met `input()` en omzetten naar een getal met de functie `int()` of `float()`:

```python
gewicht = float(input("Geef je gewicht: "))
```

Waar C# een aparte `Parse`-methode per type heeft (`int.Parse`, `double.Parse`), gebruikt Python gewoon de naam van het type als functie. Het idee is identiek: tekst inlezen en daarna omzetten naar het type dat je nodig hebt.

### Een module importeren

In C# is `Math` altijd beschikbaar, zonder dat je iets hoeft te doen. In **Python** zit wiskunde in een aparte *module* die je eerst moet **importeren** met `import`:

```python
import math

resultaat = math.pow(getal, 3)
wortel = math.sqrt(144)   # 12.0
```

Zie je `math.` voor elke methode? Dat is de naam van de module. Je moet hem dus bovenaan eerst importeren voor je hem kan gebruiken. In C# horen klassen zoals `Math` standaard bij de taal en hoef je niets te importeren.
