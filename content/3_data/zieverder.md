## Zie verder

### Even terugblikken

In dit hoofdstuk draaide alles om data van het juiste type krijgen en ermee rekenen. Je zag het verschil tussen impliciete en expliciete conversie, hoe je met casting en de `Convert`-klasse types omzet, en hoe je tekst van de gebruiker via `Parse` (en het veiligere `TryParse`) naar een getal brengt. Daarnaast kwamen de `Math`-klasse, afronden en `Random` aan bod, en zette je je eerste stappen in de debugger.

De kern op een rij:

- Impliciete conversie mag enkel als er geen data verloren gaat; voor de rest cast je expliciet of gebruik je `Convert`.
- Input lees je als tekst en zet je daarna om; `int.TryParse` vangt foute invoer op zonder crash.
- `Math` bevat de wiskunde-helpers (`Math.Pow`, `Math.Sqrt`, ...) en `Math.Round` rondt af.
- Met de debugger zet je breakpoints en stap je lijn per lijn door je code.

:::{.callout-warning}
## Valkuilen
- Een deling van twee gehele getallen geeft opnieuw een geheel getal: `5 / 2` is `2`, niet `2.5`. Wil je decimalen, maak dan minstens één kant een `double`.
- `int.Parse("abc")` doet je programma crashen. Bij invoer van de gebruiker gebruik je `int.TryParse`.
- Een `double` casten naar `int` kapt de cijfers na de komma af (er wordt niet afgerond): `(int)2.9` is `2`.
:::

### In andere talen

#### Type-coercion

C# is streng: je moet expliciet zeggen dat je een type wilt omzetten. **JavaScript** doet net het omgekeerde en zet types automatisch om (*type coercion*). Dat lijkt handig, maar is een beruchte valkuil:

```javascript
console.log("5" + 3);  // "53"  (de 3 wordt een string)
console.log("5" * 3);  // 15    (de "5" wordt een getal)
```

Bij `+` wint de string en plak je teksten aan elkaar, bij `*` wint het getal. JavaScript raadt zelf wat je bedoelt; in C# zou dit gewoon een compileerfout geven.

#### Input parsen

In **Python** doe je hetzelfde, maar veel korter: input lezen gebeurt met `input()` en omzetten naar een getal met de functie `int()` of `float()`:

```python
gewicht = float(input("Geef je gewicht: "))
```

Waar C# een aparte `Parse`-methode per type heeft (`int.Parse`, `double.Parse`), gebruikt Python gewoon de naam van het type als functie. Tekst inlezen en daarna omzetten naar het type dat je nodig hebt: dat gebeurt in beide talen.

#### Een module importeren

In C# is `Math` altijd beschikbaar, zonder dat je iets hoeft te doen. In **Python** zit wiskunde in een aparte *module* die je eerst moet importeren met `import`:

```python
import math

resultaat = math.pow(getal, 3)
wortel = math.sqrt(144)   # 12.0
```

Zie je `math.` voor elke methode? Dat is de naam van de module. Je moet hem dus bovenaan eerst importeren voor je hem kan gebruiken. In C# horen klassen zoals `Math` standaard bij de taal en hoef je niets te importeren.

### Zoek de fout

Onderstaande **Python**-code wil het gemiddelde van twee ingegeven cijfers tonen, maar geeft altijd een raar resultaat. Wat loopt er mis?

```python
cijfer1 = input("Eerste cijfer: ")
cijfer2 = input("Tweede cijfer: ")
print((cijfer1 + cijfer2) / 2)
```

:::{.callout-note collapse="true"}
## Antwoord
`input()` geeft in Python altijd tekst terug. `cijfer1 + cijfer2` plakt dus de twee teksten aan elkaar ("8" en "6" worden "86") in plaats van ze op te tellen, en daarna probeert Python die tekst te delen door 2. Je moet eerst omzetten naar een getal, bijvoorbeeld met `int(cijfer1)`. Net als in C# is invoer altijd eerst tekst die je zelf naar het juiste type brengt.
:::
