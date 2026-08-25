## Vreemde tekens in console tonen

Niets is zo leuk als de vreemdste UNICODE tekens op het scherm tonen. In oude console-games werden deze tekens vaak gebruikt om complexe tekeningen op het scherm te tonen. Om je ietwat saaie applicaties dus wat toffer te maken, leg ik daarom uit hoe je dit kan doen.


![Dit Wikipedia logo bestaat volledig uit UNICODE karakters.](../assets/1_csharpbasics/asciiwiki.png)<!--{width=60%}-->

### UNICODE karakters tonen

Je toetsenbord heeft maar een beperkt aantal toetsen. Er zijn echter tal van andere tekens gedefinieerd die console-applicaties ook kunnen gebruiken. We zagen reeds dat al deze tekens, UNICODE-karakters, een eigen unieke code hebben die je kan opzoeken om vervolgens dat teken in je code te gebruiken.

Dit gaat als volgt in z'n werk:

1. Zoek het teken(s) dat je nodig hebt in een UNICODE-tabel[^unitabel] en noteer de hexadecimale waarde.
2. Zet als **allereerste lijn in je ``Main``** (dus nog vóór je iets met ``Console.Write`` of ``WriteLine`` naar het scherm stuurt): ``Console.OutputEncoding = System.Text.Encoding.UTF8;``. Zet je deze lijn pas later, dan kan tekst die je daarvoor al toonde verkeerd verschijnen.
3. Je kan nu op 2 manieren dit teken op het scherm krijgen.

[^unitabel]: Zie [symbl.cc](https://symbl.cc) (vroeger unicode-table.com).

Stel je voor dat we het copyright karakter wensen te gebruiken (de letter c in een cirkeltje) in onze applicatie. Deze heeft hexadecimale UNICODE waarde 0x00A9.

<!-- \newpage -->


#### Manier 1: copy/paste

Kopieer het karakter zelf en plaats het in je code waar je het nodig hebt, bijvoorbeeld:


```java
Console.WriteLine("<plak hier je speciale teken>"); 
```

Merk op dat niet alle lettertypes dit karakter kennen en dus mogelijk als een vierkantje dit op je scherm zullen tonen. Dit hangt af van het lettertype dat jouw shell-venster gebruikt. In Windows Terminal (de standaard op Windows 11) is dat zelden een probleem, zelfs voor emoji. In het oudere zwarte consolevenster en in de Debug Console van Visual Studio gebeurt het wel nog.

#### Manier 2: hexadecimale code casten naar char

Casting leg ik pas in het volgende hoofdstuk uit, maar het kan geen kwaad om al eens een voorproefje hiervan te krijgen. 

Noteer de hexadecimale code van het karakter dat in de tabel staat. In dit geval is dat dus ``0x00A9``. Om dit teken te tonen schrijf je dan:

```java
char copyright = (char)0x00A9;
Console.WriteLine(copyright);
```

Dit kan ook korter. Door gebruik te maken van de ``\u``-notatie om hexadecimale waarden voor te stellen:

```java
Console.WriteLine("\u00A9");
```

![Het teken opzoeken in de UNICODE-tabel (``00A9``) en het op drie manieren in je code zetten. Alle drie tonen hetzelfde ``©`` op het scherm.](../assets/2_tekst/drieweg.png)<!--{width=90%}-->

:::{.callout-note}
**En emoji?** De ``\u``-notatie verwacht exact vier hexadecimale cijfers, en een ``char`` kan enkel tekens tot en met ``0xFFFF`` bevatten. Emoji zitten daarboven: een lachend gezichtje is bijvoorbeeld ``0x1F600``, en ``(char)0x1F600`` compileert dan ook niet. Wil je toch een emoji tonen, dan gebruik je de ``\U``-notatie (hoofdletter U) met acht cijfers, of je plakt de emoji gewoon in je string zoals bij manier 1:

```csharp
Console.WriteLine("\U0001F600");
```
:::

<!-- \newpage -->


### UNICODE-kunst tonen

Soms zou je *multiline* UNICODE-kunst (ook wel ASCII-art genoemd) willen tonen in je C# applicatie. Dit kan je eenvoudig oplossen door gebruik te maken van het ``@`` teken voor een string.

Stel dat je een toffe titel of tekening bijvoorbeeld via **ASCIIflow.com** maakt. Je kan het resultaat eenvoudig naar je klembord kopiëren en vervolgens in je C#-code integraal copy pasten als literal voor een ``string`` op voorwaarde dat je het laat voorafgaan door ``@"`` en uiteraard eindigt met ``";``.

Bijvoorbeeld:

```java
string myname = @"
___________________   
\__    ___/\______ \  
  |    |    |    |  \ 
  |    |    |    `   \
  |____|   /_______  /
                   \/ ";
Console.WriteLine(myname);
```

:::{.callout-tip}
Zowel de `$`-notatie (voor string interpolatie) als het @-teken kan je gecombineerd gebruiken bij een string. De volgorde maakt niet uit: zowel ``$@"..."`` als ``@$"..."`` is toegelaten en doet exact hetzelfde.


```java
Console.WriteLine($@"1+1={1+1}. \tGeen tab");
```

Dit geeft als output (\t wordt door het apenstaartje genegeerd):


::: {.console}
```text
1+1=2. \tGeen tab
```
:::
:::

### Raw string literals

Het ``@``-teken heeft één nadeel: alles tussen de aanhalingstekens hoort bij de string, ook de spaties waarmee je je code inspringt. Je tekening moet dus tegen de linkerkantlijn plakken, anders krijg je die inspringing mee op het scherm. Sinds C# 11 is er een modernere manier: de *raw string literal*. Je begint en eindigt de string met drie aanhalingstekens, elk op een eigen lijn:

```java
string myname = """
    ___________________   
    \__    ___/\______ \  
      |    |    |    |  \ 
      |    |    |    `   \
      |____|   /_______  /
                       \/ 
    """;
Console.WriteLine(myname);
```

De positie van de sluitende ``"""`` bepaalt wat er weggeknipt wordt: alle lijnen ertussen moeten minstens even ver ingesprongen zijn als die sluitende ``"""``, en precies die inspringing verdwijnt uit het resultaat. Backslashes, aanhalingstekens en escape-codes zoals ``\t`` worden net als bij ``@`` letterlijk genomen. Ook hier kan je een ``$`` voor zetten om interpolatie te gebruiken: ``$"""..."""``.

Je zal ``@"..."`` nog vaak tegenkomen in bestaande code en in code die AI-tools genereren. Beide manieren werken.


:::{.callout-tip}
In de vorige sectie legde ik uit dat we tekst kunnen formateren als een geld bedrag m.b.v. ``Console.WriteLine($"{12.3456:C}");``. 

Het probleem was dat het euro-teken als een ``?`` op het scherm verscheen. Dat komt omdat een consolevenster op Windows standaard met een beperkte tekenset van 256 tekens werkt (op een Belgische pc is dat *code page 850*, een tabel uit de tijd van MS-DOS), en het euroteken zit daar niet in. Met de UTF-8-encoding kan de console elk UNICODE-teken aan:

```java
Console.OutputEncoding = System.Text.Encoding.UTF8;
Console.WriteLine($"{12.3456:C}");
```

Zie je bij jou meteen een euroteken, ook zonder die eerste lijn? Dan staat je Windows al ingesteld op UTF-8 (een optie onder de taalinstellingen). Bij je medestudenten is dat mogelijk niet zo, dus zet die lijn er toch maar altijd bij.

:::
