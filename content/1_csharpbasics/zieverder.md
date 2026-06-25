## Zie verder

### Even terugblikken

In dit hoofdstuk leerde je de bouwstenen van C# kennen. Je zag dat een taal bestaat uit grammatica (syntax, statements, keywords) en woordenschat, en je maakte kennis met de datatypes: gehele getallen (`byte`, `short`, `int`, `long`), kommagetallen (`float`, `double`, `decimal`), tekst (`char`, `string`) en `bool`. Je leerde variabelen declareren en een waarde geven, expressies opbouwen met operators, en constanten vastleggen met `const`.

De kern op een rij:

- Elk getaltype heeft een eigen geheugengrootte en bereik. Je kiest het type dat past bij de data die je verwacht.
- Een variabele declareer je met een type en een naam, en je geeft ze best meteen een beginwaarde.
- Toekenning gebeurt van rechts naar links: `int leeftijd = 25;` zet de waarde rechts in de variabele links.
- Een `const` legt een waarde voorgoed vast; de compiler weigert elke poging om ze nadien te wijzigen.

:::{.callout-warning}
## Valkuilen
- Een deling van twee gehele getallen geeft opnieuw een geheel getal: `1 / 2` is `0`, niet `0.5`. Wil je een kommagetal, maak dan minstens één kant een `double`.
- Lokale variabelen krijgen geen automatische beginwaarde. Gebruik je een variabele voor je ze een waarde gaf, dan geeft C# een compileerfout.
- `getal++` en `++getal` doen allebei één optellen, maar het resultaat van de expressie verschilt. Bij twijfel schrijf je gewoon `getal = getal + 1`.
:::

:::{.callout-tip}
## Tijd om te oefenen
De practica bij dit hoofdstuk staan [hier](https://apwt.gitbook.io/ziescherp-oefeningen/h2-de-basisconcepten-van-c/a_practica).
:::

### In andere talen

#### Types in Python

In **Python** geef je nooit een type op: je gooit gewoon een waarde in een variabele en Python zoekt zelf uit wat het is. Diezelfde variabele mag bovendien later een heel ander soort data bevatten.

```python
x = 5        # x is nu een geheel getal
x = "hallo"  # en nu plots tekst, Python klaagt niet
```

In C# zou de tweede regel meteen een compilatiefout geven: een `int`-variabele blijft een `int`. De compiler vangt zo typefouten al op voor je programma ooit draait.

#### Getaltypes elders

Die hele waaier aan integer-types vind je terug in **C** en **C++**: ook daar kies je tussen `char`, `short`, `int`, `long` (en `unsigned`-varianten) net omdat het geheugen telt.

**JavaScript** doet het tegenovergestelde: daar bestaat maar één getaltype, `number`, en dat is altijd een 64-bit kommagetal. Een aparte `int` of `byte` bestaat niet.

```javascript
let leeftijd = 25;     // intern een 64-bit kommagetal
let prijs = 19.99;     // exact hetzelfde type
```

Je hoeft dus nooit te kiezen, maar het verklaart ook waarom JavaScript bij heel grote gehele getallen onnauwkeurig wordt: precies de afweging tussen bereik, precisie en geheugen die je hierboven leert maken.

#### Bestaat `bool` overal?

In de oude **C**-standaard bestond er geen booleantype. Men gebruikte gewoon een `int`, waarbij `0` voor false stond en alles wat niet nul is voor true.

```c
int klaar = 0;             /* false */
if (klaar) { /* ... */ }   /* draait niet, want 0 telt als false */
```

C# maakt van `true` en `false` echte, aparte waarden. Het voordeel: je kan een getal niet per ongeluk als voorwaarde gebruiken, wat in C een klassieke bron van bugs is.

#### `const` in Python

**Python** kent geen echt `const`-keyword. Je kan een waarde dus niet hard onveranderlijk maken: men spreekt enkel af dat een naam in ALLCAPS "met rust gelaten moet worden". Het is puur een belofte tussen programmeurs, geen regel die de taal afdwingt.

```python
G_AARDE = 9.81   # afspraak: niet wijzigen
G_AARDE = 10.48  # Python staat dit gewoon toe, geen fout
```

In C# vangt de compiler die tweede regel meteen op.

### Zoek de fout

Onderstaande C#-code wil de helft van een prijs berekenen, maar toont altijd `0`. Wat loopt er mis?

```csharp
int prijs = 5;
double helft = prijs * (1 / 2);
Console.WriteLine(helft);
```

:::{.callout-note collapse="true"}
## Antwoord
`1 / 2` is een deling van twee gehele getallen, en die geeft opnieuw een geheel getal: `0`, niet `0.5`. De vermenigvuldiging wordt dan `5 * 0`, dus `0`. Dat `helft` een `double` is, helpt niet: de fout zit al in de int-deling die ervoor gebeurt. Maak minstens één kant een kommagetal, bijvoorbeeld `prijs * (1.0 / 2)`.
:::
