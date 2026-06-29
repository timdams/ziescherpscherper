## Zie verder

### Even terugblikken

>![](../assets/zieverder.png)In dit hoofdstuk leerde je je programma keuzes laten maken. Je zag de `if`, `else if` en `else`, hoe je voorwaarden opbouwt met de vergelijkingsoperators (`==`, `!=`, `<`, `>`, ...) en de logische operators (`&&`, `||`, `!`). Je leerde over de scope van variabelen (waar een variabele "leeft"), de `switch` als alternatief voor lange `if`-kettingen, en de `enum` om een vaste set keuzes een eigen naam te geven.

De kern op een rij:

- De voorwaarde in een `if` moet een `bool` opleveren: `true` of `false`.
- Bij een `if-else if`-keten telt de volgorde: zet de strengste test eerst, want de eerste die waar is, wint.
- Accolades bepalen de scope: een variabele die je binnen een blok declareert, bestaat enkel daar.
- Een `switch` test één waarde tegen meerdere `case`-takken; vergeet de `break` niet.
- Een `enum` geeft een vaste reeks waarden een leesbare naam in plaats van losse magische getallen.

:::{.callout-warning}
## Valkuilen
- Een puntkomma vlak na een `if` (zoals `if (leeftijd >= 18);`) sluit de `if` meteen af. Het blok erna draait dan altijd, ongeacht de voorwaarde.
- `=` is toekenning, `==` is vergelijking. In een voorwaarde wil je bijna altijd `==`.
- Bij een `bool`-variabele schrijf je gewoon `if (heeftKaart)`, niet `if (heeftKaart == true)`. Dat `== true` voegt niets toe.
:::


### In andere talen

#### if/else in Python

In **Python** zie je geen accolades. Daar bepaalt de inspringing (de witruimte links) welke code bij de `if` hoort, en het tussenstuk heet `elif` in plaats van `else if`:

```python
if leeftijd >= 18:
    print("meerderjarig")
elif leeftijd > 12:
    print("tiener")
else:
    print("kind")
```

In C# heeft inspringen geen invloed op de programmaflow: enkel de accolades tellen. In Python is het omgekeerd, daar is de inspringing verplicht en bepaalt zij de blokken. Vergeet je in Python een spatie, dan verandert de betekenis van je code.

#### Logische operators in Python

In Python gebruik je geen symbolen voor de logische operators, maar gewone Engelse woorden: `and`, `or` en `not`:

```python
if leeftijd > 18 and heeft_kaart:
    print("Welkom")

resultaat = not (0 == 2)
```

Waar C# `&&`, `||` en `!` schrijft, leest Python bijna als een gewone zin. De werking is identiek, inclusief het stoppen zodra het resultaat vaststaat.

#### switch in JavaScript

In **JavaScript** bestaat `switch` ook, en lijkt hij sterk op die van C#. Maar hier valt de uitvoer wél door naar de volgende case als je `break` vergeet:

```javascript
switch (option) {
    case 1:
        console.log("Afbreken gekozen");
        // GEEN break: valt door naar case 2!
    case 2:
        console.log("Opslaan gekozen");
        break;
    default:
        console.log("Onbekende keuze");
}
```

Bij `option` gelijk aan `1` verschijnen hier zowel "Afbreken gekozen" als "Opslaan gekozen", omdat de eerste case geen `break` heeft. Dit is een beruchte bron van bugs. C# weigert net daarom code waarin een case met inhoud niet netjes wordt afgesloten.

#### enum in JavaScript en TypeScript

Niet elke taal kent een `enum`. JavaScript heeft er geen, daar behelpen programmeurs zich met een gewoon object vol constanten. **TypeScript** (JavaScript met types) heeft wél een echte `enum`, die sterk op die van C# lijkt:

```typescript
enum Weekdag { Maandag, Dinsdag, Woensdag, Donderdag, Vrijdag }

let keuze: Weekdag = Weekdag.Woensdag;
```

Net als in C# worden de waarden intern vanaf `0` genummerd en kan je een variabele beperken tot enkel deze waarden.

### Zoek de fout

Onderstaande C#-code zou "volwassen" enkel mogen tonen als de leeftijd 18 of meer is, maar ze toont het altijd. Wat loopt er mis?

```csharp
int leeftijd = 12;
if (leeftijd >= 18);
{
    Console.WriteLine("volwassen");
}
```

:::{.callout-note collapse="true"}
## Antwoord
Achter de `if`-voorwaarde staat een puntkomma. Die sluit de `if` meteen af met een leeg blok. De accolades eronder vormen dan een gewoon blok dat los van de `if` altijd uitgevoerd wordt, ongeacht de leeftijd. Haal de puntkomma na de `if` weg.
:::
