## Zie verder: andere talen

### Tekst tonen in Python

In **Python** krijg je tekst op het scherm met ``print``. Er is geen ``namespace``, ``class`` of ``Main`` nodig: één lijn volstaat.

```python
print("Wie ben jij?!")
```

Geen accolades en geen puntkomma: Python heeft veel minder ceremonie nodig dan C#. Die extra structuur in C# (``namespace``, ``class``, ``Main``) lijkt nu omslachtig, maar krijgt verderop in het boek stuk voor stuk betekenis.

### Input in Python

In **Python** lees je input in met de ingebouwde ``input``-functie. De tekst die je meegeeft wordt meteen als vraag op het scherm getoond, dus je hebt geen aparte ``WriteLine`` nodig:

```python
result = input("Geef je naam?")
```

In C# moet je het type van je variabele opgeven (``string result``), terwijl Python dat zelf afleidt. C# is een sterk getypeerde taal: je legt vooraf vast welk soort data ergens in mag, en de compiler controleert dat voor je.

### Compiled vs interpreted

In **JavaScript** is dat helemaal anders. JavaScript wordt niet eerst gecompileerd maar lijn per lijn geinterpreteerd terwijl het programma draait. Een schrijffout houdt je programma dus niet vooraf tegen: het draait gewoon tot het op die fout botst.

```javascript
console.log("Dit verschijnt nog wel");
consle.log("Pas hier crasht het programma");
```

De eerste lijn wordt netjes uitgevoerd, pas bij de tweede (met de typfout ``consle``) loopt het mis. In C# weigert de compiler je hele programma te starten zolang er ergens een fout staat: je vangt fouten dus vroeger, nog voor je programma ook maar één lijn heeft gedraaid.
