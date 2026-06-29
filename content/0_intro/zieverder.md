## Zie verder

![](../assets/zieverder.png)

:::{.callout-warning}
In deze nieuwe sectie gaan we altijd 2 zaken doen:

1. We vatten de belangrijkste zaken samen van het voorbije hoofdstuk.
2. We bekijken hoe bepaalde concepten van dit hoodstuk in andere programmeertalen gebeuren.

![](../assets/zieverder.png)Dit tweede deel wordt steeds belangrijker voor de ontwikkelaar van de 21e eeuw. In een wereld waarin steeds meer code door generatieve A.I. wordt geschreven is het essentieel dat je als ontwikkelaar zo snel mogelijk een heel brede kijk hebt op het *programmeerveld*. Je zal vanaf dag 1 geconfronteerd worden met andere talen die problemen oplossen, en je zal ontdekken dat iedere taal z'n eigen stertkes, zwaktes en *speciallekes* heeft.


:::

### Even terugblikken

In dit hoofdstuk zette je je eerste stappen in C#. Je maakte een console-applicatie in Visual Studio, leerde wat het `namespace`/`class`/`Main`-skelet doet (en dat je dat voorlopig gewoon mag negeren) en je schreef code binnen de `Main`-accolades. Je toonde tekst met `Console.WriteLine` en `Console.Write`, las invoer van de gebruiker met `Console.ReadLine()` en je leerde hoe je in Visual Studio fouten opspoort.

De kern op een rij:

- Je eigen code komt voorlopig enkel tussen de accolades van `Main`, en elke lijn eindigt op een puntkomma (`;`).
- `Console.WriteLine` springt na de tekst naar een nieuwe lijn, `Console.Write` niet.
- `Console.ReadLine()` leest wat de gebruiker intikt tot die op enter drukt en geeft die tekst terug.
- Met `+` plak je stukken tekst aan elkaar; staat iets zonder aanhalingstekens, dan beschouwt C# het als een variabele.
- VS onderlijnt fouten met een rode squiggly: zolang die er staan, compileert je programma niet.

:::{.callout-warning}
## Valkuilen
- C# is hoofdlettergevoelig: `Readline` of `Writeline` (kleine `l`) bestaat niet, het moet `ReadLine` en `WriteLine` zijn.
- Krijg je bij het starten de waarschuwing dat er nog fouten zijn, klik dan nooit op "Yes" en duid de checkbox niet aan. VS draait dan je laatste werkende versie en niet je huidige code.
- Spaties buiten de aanhalingstekens worden genegeerd. Wil je een spatie in je uitvoer, zet ze dan binnen de `"  "`.
:::


### In andere talen

#### Tekst tonen in Python

In **Python** krijg je tekst op het scherm met `print`. Er is geen `namespace`, `class` of `Main` nodig: één lijn volstaat.

```python
print("Wie ben jij?!")
```

Geen accolades en geen puntkomma. Die extra structuur in C# (`namespace`, `class`, `Main`) lijkt nu omslachtig, maar krijgt verderop in het boek stuk voor stuk betekenis.

#### Input in Python

Input lees je in Python in met de ingebouwde `input`-functie. De tekst die je meegeeft wordt meteen als vraag op het scherm getoond, dus je hebt geen aparte `print` nodig:

```python
result = input("Geef je naam?")
```

In C# moet je het type van je variabele opgeven (`string result`), terwijl Python dat zelf afleidt. C# is een sterk getypeerde taal: je legt vooraf vast welk soort data ergens in mag, en de compiler controleert dat voor je.

#### Compiled vs interpreted

**JavaScript** wordt niet eerst gecompileerd maar lijn per lijn geïnterpreteerd terwijl het programma draait. Een schrijffout houdt je programma dus niet vooraf tegen: het draait gewoon tot het op die fout botst.

```javascript
console.log("Dit verschijnt nog wel");
consle.log("Pas hier crasht het programma");
```

De eerste lijn wordt netjes uitgevoerd, pas bij de tweede (met de typfout `consle`) loopt het mis. In C# weigert de compiler je hele programma te starten zolang er ergens een fout staat: je vangt fouten dus al op nog voor je programma één lijn heeft gedraaid.

### Zoek de fout

Onderstaand C#-programma wil de gebruiker begroeten, maar het compileert niet. Wat loopt er mis?

```csharp
Console.WriteLine("Geef je naam?");
string naam = Console.Readline()
Console.WriteLine("Dag " + naam);
```

:::{.callout-note collapse="true"}
## Antwoord
Er zitten twee klassieke beginnersfouten in. Ten eerste staat er `Readline` met een kleine `l`, terwijl C# hoofdlettergevoelig is: het moet `ReadLine` zijn. Ten tweede ontbreekt de puntkomma op het einde van die lijn. Correct wordt het `string naam = Console.ReadLine();`.
:::
