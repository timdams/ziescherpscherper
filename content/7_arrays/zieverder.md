## Zie verder: andere talen

### Vaste vs dynamische lengte

In **Python** bestaat geen array met vaste grootte. Je gebruikt er een `list`, die dynamisch groeit en zelfs gemengde types mag bevatten:

```python
getallen = [1, 2, 3]
getallen.append(4)       # de lijst groeit gewoon mee
getallen.append("vier")  # mag in Python zelfs een ander type zijn
```

Totaal anders dan een C#-array dus: daar ligt de lengte vast en bevat elk element hetzelfde type. De Python-`list` lijkt eerder op de `List` die je in hoofdstuk 12 leert kennen.

### Geen bounds-checking in C

C# beschermt je: voorbij de array lezen geeft netjes een `IndexOutOfRangeException`. In **C** is dat anders: arrays doen daar geen enkele controle op hun grenzen.

```c
int getallen[3] = {1, 2, 3};
printf("%d", getallen[5]); // geen foutmelding!
```

In plaats van een nette exception lees je in C zomaar willekeurige geheugeninhoud, of je programma crasht. Net die ongecontroleerde toegang maakt de buffer overflow attacks van hierboven mogelijk.

### Dezelfde val in JavaScript

Net dezelfde valkuil bestaat in **JavaScript**: arrays werken er ook by reference, dus `=` maakt geen kopie maar een alias.

```javascript
let ploegen = ["Beerschot", "Antwerp"];
let nieuwe = ploegen;     // geen kopie, zelfde array!
nieuwe[1] = "Brugge";
console.log(ploegen[1]);  // "Brugge" - ploegen mee aangepast
```

Heel gelijkaardig dus aan C#. Een echte kopie maak je in JavaScript bijvoorbeeld met `let kopie = [...ploegen];`.
