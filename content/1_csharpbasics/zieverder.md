## Zie verder: andere talen

### Types in Python

In **Python** werkt dit totaal anders. Daar geef je nooit een type op: je gooit gewoon een waarde in een variabele en Python zoekt zelf wel uit wat het is. Diezelfde variabele mag bovendien later een heel ander soort data bevatten.

```python
x = 5        # x is nu een geheel getal
x = "hallo"  # en nu plots tekst, Python klaagt niet
```

In C# zou de tweede regel meteen een compilatiefout geven: een `int`-variabele blijft een `int`. Python kiest voor gemak en snelheid van schrijven, C# kiest voor zekerheid: de compiler vangt typefouten al voor je programma ooit draait.

### Getaltypes elders

Die hele waaier aan integer-types vind je heel herkenbaar terug in **C** en **C++**: ook daar kies je tussen `char`, `short`, `int`, `long` (en `unsigned`-varianten) net omdat het geheugen telt. C en C# delen hier duidelijk dezelfde wortels.

**JavaScript** doet net het tegenovergestelde: daar bestaat maar een enkel getaltype, `number`, en dat is altijd een 64-bit kommagetal. Een aparte `int` of `byte` bestaat niet.

```javascript
let leeftijd = 25;     // intern een 64-bit kommagetal
let prijs = 19.99;     // exact hetzelfde type
```

Handig (je hoeft nooit te kiezen), maar het verklaart ook waarom JavaScript bij heel grote gehele getallen onnauwkeurig wordt: precies de afweging tussen bereik, precisie en geheugen die je hierboven leert maken.

### Bestaat `bool` overal?

Dat C# een echt `bool`-type heeft, is niet vanzelfsprekend. In de oude **C**-standaard bestond er helemaal geen booleantype: men gebruikte gewoon een `int`, waarbij `0` voor false stond en alles wat niet nul is voor true.

```c
int klaar = 0;        /* false */
if (klaar) { /* ... */ }   /* draait niet, want 0 telt als false */
```

C# (net als Java en Python) maakt van `true` en `false` echte, aparte waarden. Het voordeel: je kan een getal niet per ongeluk als voorwaarde gebruiken, wat in C een klassieke bron van bugs is.

### `Const` in Python

**Python** kent geen echt `const`-keyword. Je kan er een waarde dus niet hard onveranderlijk maken: men spreekt enkel af dat een naam in ALLCAPS "met rust gelaten moet worden". Het is puur een belofte tussen programmeurs, geen regel die de taal afdwingt.

```python
G_AARDE = 9.81   # afspraak: niet wijzigen
G_AARDE = 10.48  # Python staat dit gewoon toe, geen fout
```

In C# vangt de compiler die tweede regel meteen op. Dat is precies het verschil dat doorheen dit hoofdstuk terugkomt: C# laat de taal regels afdwingen, terwijl talen als Python veel overlaten aan de discipline van de programmeur.
