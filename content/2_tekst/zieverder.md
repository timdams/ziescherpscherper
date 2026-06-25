## Zie verder: andere talen

### String als char-array

In **C** bestaat er helemaal geen echt ``string``-type. Een stuk tekst is daar gewoon een rij van losse ``char``-elementen in een array, afgesloten met een onzichtbaar null-karakter (``\0``) zodat de computer weet waar de tekst stopt:

```c
char letter = 'X';
char woord[] = "Tim";   // eigenlijk {'T', 'i', 'm', '\0'}
printf("%c en %s\n", letter, woord);
```

In C# is een ``string`` een volwaardig ingebouwd type met handige methodes (``.Length``, ``.ToUpper()``, enz.). In C moet je zelf met dat null-karakter en met arrays rekening houden. Mooi om te zien dat het idee "een string is een reeks chars" daar heel letterlijk wordt: in C# is dat onder de motorkap eigenlijk ook zo.

### Het verbatim-idee elders

Ook **Python** kent zo'n verbatim-string, daar heet het een *raw string*. Je plaatst een ``r`` voor de string in plaats van een ``@``:

```python
zonder_r = "C:\\Temp\\Myfile.txt"
met_r = r"C:\Temp\Myfile.txt"
```

Net als het apenstaartje (``@``) in C# worden de backslashes gewoon als tekst behandeld en niet als escape character. Handig voor bestandspaden en voor zogenaamde *reguliere expressies*, die vol backslashes staan.

### Interpolatie elders

Veel andere talen kennen net hetzelfde idee, met een net iets ander tekentje vooraan. In **Python** heet dit een *f-string*:

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

Bijna identiek aan de ``$``-notatie van C#. Leer je dus deze manier van werken goed aan, dan voel je je meteen thuis in heel wat andere talen.
