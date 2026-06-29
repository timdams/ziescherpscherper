## Zie verder

### Even terugblikken

In dit hoofdstuk draaide alles om tekst. Je leerde het verschil tussen een `char` (één teken) en een `string` (een reeks tekens), en hoe Unicode achter de schermen elk teken een nummer geeft. Je zag escape characters zoals `\n` en `\t`, het verbatim-apenstaartje `@` voor onder andere bestandspaden, en string interpolation met `$` om variabelen netjes middenin tekst te zetten. Tot slot leerde je tekst mooier formatteren.

De kern op een rij:

- Een `char` staat tussen enkele aanhalingstekens (`'A'`), een `string` tussen dubbele (`"Tim"`).
- Escape characters beginnen met een backslash: `\n` is een nieuwe lijn, `\t` een tab, `\\` een echte backslash.
- Met een verbatim-string (`@"C:\Temp"`) worden backslashes gewoon als tekst behandeld.
- String interpolation (`$"Dag {naam}"`) is de leesbare manier om variabelen in tekst te verwerken.

:::{.callout-warning}
## Valkuilen
- Vergeet je de `$` voor een interpolation-string, dan verschijnt letterlijk `{naam}` op het scherm in plaats van de waarde.
- De `+`-operator werkt niet op twee `char`-waarden zoals je verwacht: `'a' + 'b'` telt hun Unicode-nummers op en geeft een `int`, geen tekst.
- Bij geldformaten (`:C`) hangt de uitvoer af van de regio-instellingen van de machine: op een Belgisch systeem krijg je `€ 12,34`, op een Engels `$12.34`.
:::



### In andere talen

#### String als char-array

In **C** bestaat er geen echt `string`-type. Een stuk tekst is daar gewoon een rij van losse `char`-elementen in een array, afgesloten met een onzichtbaar null-karakter (`\0`) zodat de computer weet waar de tekst stopt:

```c
char letter = 'X';
char woord[] = "Tim";   // eigenlijk {'T', 'i', 'm', '\0'}
printf("%c en %s\n", letter, woord);
```

In C# is een `string` een volwaardig ingebouwd type met handige methodes (`.Length`, `.ToUpper()`, enz.). In C moet je zelf met dat null-karakter en met arrays rekening houden. Het idee "een string is een reeks chars" wordt daar heel letterlijk: onder de motorkap is dat in C# eigenlijk ook zo.

#### Het verbatim-idee elders

Ook **Python** kent zo'n verbatim-string, daar heet het een *raw string*. Je plaatst een `r` voor de string in plaats van een `@`:

```python
zonder_r = "C:\\Temp\\Myfile.txt"
met_r = r"C:\Temp\Myfile.txt"
```

Net als het apenstaartje (`@`) in C# worden de backslashes gewoon als tekst behandeld en niet als escape character. Handig voor bestandspaden en voor reguliere expressies, die vol backslashes staan.

#### Interpolatie elders

In Python heet interpolatie een *f-string*:

```python
naam = "Finkelstein"
leeftijd = 13
zin = f"Ik ben {naam} en ik ben {leeftijd} jaar."
```

En in **JavaScript** gebruik je *template literals* met backticks en een dollarteken voor de accolades:

```javascript
const naam = "Finkelstein";
const leeftijd = 13;
const zin = `Ik ben ${naam} en ik ben ${leeftijd} jaar.`;
```

Beide leunen dicht aan bij de `$`-notatie van C#. Leer je deze manier van werken goed aan, dan voel je je meteen thuis in heel wat andere talen.

### Zoek de fout

Onderstaande C#-code wil "Dag Tim, je bent 39 jaar" tonen, maar er verschijnt iets anders op het scherm. Wat loopt er mis?

```csharp
string naam = "Tim";
int leeftijd = 39;
Console.WriteLine("Dag {naam}, je bent {leeftijd} jaar");
```

:::{.callout-note collapse="true"}
## Antwoord
De `$` voor de string ontbreekt. Zonder die `$` is het geen interpolation-string en behandelt C# `{naam}` en `{leeftijd}` als gewone tekst. Op het scherm verschijnt dan letterlijk `Dag {naam}, je bent {leeftijd} jaar`. Zet er een `$` voor: `Console.WriteLine($"Dag {naam}, je bent {leeftijd} jaar");`.
:::
