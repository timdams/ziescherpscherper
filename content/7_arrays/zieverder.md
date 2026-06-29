## Zie verder

### Even terugblikken

![](../assets/zieverder.png)In dit hoofdstuk leerde je werken met arrays: één variabele die een hele reeks waarden van hetzelfde type bewaart. Je zag hoe je ze declareert, hoe je via een index een element leest of schrijft en hoe je met een loop over de hele array gaat. Belangrijk was ook dat arrays *by reference* werken, met alle gevolgen van dien voor kopiëren en voor methoden.

De kern op een rij:

- Een array heeft een vaste lengte; die ligt vast zodra de array bestaat en kan niet meer veranderen.
- De index start bij 0, dus een array met lengte 5 heeft indices 0 tot en met 4.
- Met `.Length` ken je het aantal elementen; gebruik dat als grenscontrole in je loops.
- Arrays werken by reference: `=` kopieert de referentie, niet de inhoud, en wijzigingen in een methode raken de originele array.

:::{.callout-warning}
## Valkuilen
- Buiten de grenzen lezen of schrijven geeft een `IndexOutOfRangeException`. Een array met lengte 3 indexeren met `getallen[5]` crasht bij de uitvoer.
- `nieuwePloegen = ploegen;` maakt geen kopie maar een alias: beide variabelen wijzen naar dezelfde array. Wil je een echte kopie, kopieer dan elk element afzonderlijk (of gebruik `Array.Copy`).
- Geef je een array mee aan een methode, dan werk je op het origineel. Aanpassingen in de methode blijven ook na de aanroep bestaan.
:::



### In andere talen

#### Vaste vs dynamische lengte

In **Python** bestaat geen array met vaste grootte. Je gebruikt er een `list`, die dynamisch groeit en zelfs gemengde types mag bevatten:

```python
getallen = [1, 2, 3]
getallen.append(4)       # de lijst groeit gewoon mee
getallen.append("vier")  # mag in Python zelfs een ander type zijn
```

Dat is anders dan een C#-array: daar ligt de lengte vast en bevat elk element hetzelfde type. De Python-`list` lijkt eerder op de `List` die je in hoofdstuk 12 leert kennen.

#### Geen bounds-checking in C

C# beschermt je: voorbij de array lezen geeft netjes een `IndexOutOfRangeException`. In **C** is dat anders, want arrays doen daar geen enkele controle op hun grenzen:

```c
int getallen[3] = {1, 2, 3};
printf("%d", getallen[5]); // geen foutmelding!
```

In plaats van een nette exception lees je in C zomaar willekeurige geheugeninhoud, of je programma crasht. Net die ongecontroleerde toegang maakt buffer overflow attacks mogelijk.

#### Dezelfde val in JavaScript

Net dezelfde valkuil als bij C# bestaat in **JavaScript**: arrays werken er ook by reference, dus `=` maakt geen kopie maar een alias.

```javascript
let ploegen = ["Beerschot", "Antwerp"];
let nieuwe = ploegen;     // geen kopie, zelfde array!
nieuwe[1] = "Brugge";
console.log(ploegen[1]);  // "Brugge" - ploegen mee aangepast
```

Een echte kopie maak je in JavaScript bijvoorbeeld met `let kopie = [...ploegen];`.

### Zoek de fout

Onderstaande C#-code wil alle elementen van de array tonen, maar crasht met een `IndexOutOfRangeException`. Wat loopt er mis?

```csharp
int[] getallen = {10, 20, 30};
for (int i = 0; i <= getallen.Length; i++)
{
    Console.WriteLine(getallen[i]);
}
```

:::{.callout-note collapse="true"}
## Antwoord
De testconditie gebruikt `<=` in plaats van `<`. Bij lengte 3 loopt `i` zo tot en met 3, maar de geldige indices zijn enkel 0, 1 en 2. Bij `getallen[3]` ga je buiten de array en krijg je de exception. Vervang `i <= getallen.Length` door `i < getallen.Length`.
:::
