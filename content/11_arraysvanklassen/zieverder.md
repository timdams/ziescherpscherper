## Zie verder: andere talen

### List in andere talen

In **Python** bestaat zoiets als ``List<>`` niet apart: een ``list`` is ingebouwd in de taal en groeit gewoon mee. Je hoeft er ook geen type bij te zetten, want Python is dynamisch getypeerd:

```python
namen = ["Tim", "An"]
namen.append("Jan")
```

In **Java** lijkt het sterk op C#: daar gebruik je ``ArrayList<String>`` met ``.add(...)``. Zelfde idee, ander jasje. C# zit hier dus dicht bij Java, en ver van het ongetypeerde Python.

### Foreach in andere talen

De ``foreach``-loop is helemaal niet uniek voor C#. In **Python** schrijf je net hetzelfde idee, maar zonder type en zonder accolades:

```python
for meting in metingen:
    print(meting)
```

In **JavaScript** heet dit ``for...of``:

```javascript
for (const meting of metingen) {
    console.log(meting);
}
```

### Dictionary in andere talen

Een ``Dictionary`` heet in **Python** een ``dict`` en zit ingebouwd in de taal met een handige ``{}``-syntax. Geen types opgeven, gewoon sleutel-waarde-paren:

```python
klanten = {123: "Tim Dams", 6463: "James Bond"}
print(klanten[123])
```

In **JavaScript** gebruik je hiervoor een ``Map`` (of een gewoon object):

```javascript
const klanten = new Map();
klanten.set(123, "Tim Dams");
console.log(klanten.get(123));
```

De Python-versie staat het dichtst bij de leesbaarheid van C#, de JavaScript-``Map`` werkt met aparte ``set``- en ``get``-methoden.
