## Zie verder

### Even terugblikken

In dit hoofdstuk leerde je je code opdelen in methoden: herbruikbare blokken die je één keer schrijft en overal kan aanroepen. Je zag hoe een methode-signatuur eruitziet, hoe je met `return` een resultaat teruggeeft en hoe je parameters meegeeft. Verder kwamen bestaande bibliotheken (via IntelliSense), named en optionele parameters en method overloading aan bod.

De kern op een rij:

- De methode-signatuur bestaat uit een returntype, een naam en eventuele parameters; `void` betekent dat de methode niets teruggeeft.
- Met `return` geef je een resultaat terug én verlaat je meteen de methode.
- De volgorde van je actuele parameters moet kloppen met de formele parameters, tenzij je named parameters gebruikt.
- Value-type parameters worden by value (als kopie) meegegeven: een wijziging in de methode raakt het origineel niet.

:::{.callout-warning}
## Valkuilen
- Een methode met een ander returntype dan `void` moet op elk pad iets teruggeven, anders krijg je de fout "Not all code paths return a value".
- Bij optionele parameters mag je enkel van achter naar voor weglaten. Een `string`-parameter overslaan en daarna een `int` meegeven werkt niet, tenzij je named parameters gebruikt.
- Een methode die zichzelf aanroept zonder stopconditie geeft een oneindige aanroep en crasht je programma wanneer het geheugen op is.
:::

:::{.callout-tip}
## Tijd om te oefenen
De practica bij dit hoofdstuk staan [hier](https://apwt.gitbook.io/ziescherp-oefeningen/h7-methoden/b_practicasamen).
:::

### In andere talen

#### Methode-signatuur

**Python** schrijft een methode (daar *functie* genoemd) zo:

```python
def tel_op(a, b):
    return a + b
```

Je gebruikt `def` en hoeft geen returntype of types voor je parameters op te geven. Dat scheelt typewerk, maar je verliest de hulp van de compiler: Python merkt pas tijdens het uitvoeren of je een verkeerd type meegaf, terwijl C# je dat al bij het compileren vertelt.

#### Bibliotheken importeren

In C# haal je bibliotheken binnen met `using`. **Python** doet dit met `import`:

```python
import math

print(math.sqrt(16))
```

Je geeft aan welke bibliotheek je wilt gebruiken en spreekt nadien de methoden aan via de naam ervan (hier `math.sqrt`, zoals `Math.Sqrt` in C#).

#### Overloading

**Python** kent geen overloading. Je kan er geen twee functies met dezelfde naam definiëren: de tweede overschrijft gewoon de eerste. Pythonisten lossen dit op met default-parameters:

```python
def bereken_opp(lengte, breedte=None):
    if breedte is None:
        return int(3.14159 * lengte * lengte)  # cirkel
    return lengte * breedte                     # rechthoek
```

In C# kiest de compiler op voorhand de juiste versie op basis van het aantal en type parameters. In Python schrijf je die keuze zelf binnenin je functie met een `if`.

### Zoek de fout

Onderstaande C#-methode wil de grootste van twee getallen teruggeven, maar de compiler weigert ze met de fout "Not all code paths return a value". Wat ontbreekt er?

```csharp
static int Grootste(int a, int b)
{
    if (a > b)
    {
        return a;
    }
    if (b > a)
    {
        return b;
    }
}
```

:::{.callout-note collapse="true"}
## Antwoord
Wanneer `a` en `b` gelijk zijn, is geen van beide `if`-condities waar en bereikt de code het einde van de methode zonder een `return`. Een methode met returntype `int` moet op élk pad iets teruggeven. Voeg op het einde bijvoorbeeld `return a;` toe, of vervang de tweede `if` door een `else`.
:::
