---
id: id_console
bron: handboek
type: theorie
module:
onderwerpen: [write, writeline, readline, console, input, witregels, string interpolation]
niveau: basis
status: canon
---

### ReadLine: Input van de gebruiker verwerken

In de Console kan je met een handvol methoden reeds een aantal interessante dingen doen.

Zo kan je bijvoorbeeld input van de gebruiker inlezen en bewaren in een variabele (een zogenaamd 'geheugenplekje', wat we later zullen uitleggen) als volgt:

```{.java .numberLines}
Console.WriteLine("Geef je naam?");
string result = Console.ReadLine();
```

Wat gebeurt er hier juist?

De tweede lijn code doet eigenlijk twee dingen tegelijk:

* Met ``string result`` zeggen we aan de compiler: maak in het geheugen een plekje vrij waar enkel data van het type ``string`` in mag bewaard worden, en noem die geheugenplek ``result`` zodat we ze later makkelijk kunnen in- en uitlezen (wat deze zin exact betekent komt later. Onthoud nu dat geheugen van het type ``string`` enkel "tekst" kan bevatten).
* Met ``= Console.ReadLine()`` roepen we vervolgens de ``ReadLine``-methode aan. Deze leest de invoer van de gebruiker van het toetsenbord uit tot de gebruiker op enter drukt, en het resultaat van die ingevoerde tekst wordt bewaard in ``result``.

:::{.callout-warning}
**Merk op dat de toekenning in C# van rechts naar links gebeurt.** Vandaar dat ``result`` dus links van de toekenning (``=``) staat en de waarde krijgt van het gedeelte rechts ervan.
:::

:::{.callout-tip}
In het voorbeeld bewaren we het resultaat in ``result``, maar dat moet niet zo noemen. In dit voorbeeld vragen we 2 zaken en bewaren deze in 2 aparte variabelen (elk met een eigen naam). Je kan de variabelen dus ook een naam geven die beter bij de inhoud past, zoals ``naamIk`` en ``naamMama``. Bijvoorbeeld:

```java
Console.WriteLine("Geef je naam?");
string naamIk = Console.ReadLine();
Console.WriteLine("Geef de naam van je mama?");
string naamMama = Console.ReadLine();
```
:::

Je programma zou nu moeten zijn:

```java{.java .numberLines}
Console.WriteLine("Hello World!");
Console.WriteLine("Hoi, ik ben het!");
Console.WriteLine("Wie ben jij?!");
string result = Console.ReadLine();
```

Start nogmaals je programma. Je zal merken dat je programma nu een cursor toont en wacht op invoer nadat het de eerste 3 lijnen tekst op het scherm heeft gezet. Je kan nu eender wat intypen en van zodra je op enter duwt gaat het programma verder. Maar aangezien lijn 4 de laatste lijn van ons algoritme is, zal je programma hierna afsluiten. We hebben dus de gebruiker voor niets iets laten invoeren. 

<!-- \newpage -->

### Input gebruiker gebruiken

Een variabele is een geheugenplekje met een naam waar we zaken in kunnen bewaren. In het volgende hoofdstuk gaan we zo vaak het woord variabele gebruiken dat je oren en ogen er van gaan bloeden.  Trek je nu dus nog niet te veel aan van dit woord. We kunnen nu invoer van de gebruiker gebruiken en tonen op het scherm. De invoer hebben we bewaard in de variabele ``result`:

```java
Console.WriteLine("Dag");
Console.WriteLine(result);
Console.WriteLine("hoe gaat het met je?");
```

In de tweede lijn hier gebruiken we de variabele ``result`` als parameter in de ``WriteLine``-methode. 

Met andere woorden: de ``WriteLine`` methode zal op het scherm tonen wat de gebruiker even daarvoor heeft ingevoerd.

Je volledige programma ziet er dus nu zo uit:

```java
Console.WriteLine("Hello World!");
Console.WriteLine("Hoi, ik ben het!");
Console.WriteLine("Wie ben jij?!");
string result = Console.ReadLine();
Console.WriteLine("Dag ");
Console.WriteLine(result);
Console.WriteLine("hoe gaat het met je?");
```

Test het programma en voer je naam in wanneer de cursor knippert.

Voorbeelduitvoer (lijn 3 is wat de gebruiker heeft ingetypt)

::: {.console}
```text
Hoi, ik ben het!
Wie ben jij?!
tim [enter]
Dag
tim
hoe gaat het met je?
```
:::

<!-- \newpage -->

### Aanhalingsteken of niet?

Wanneer je de inhoud van een variabele wil gebruiken in een methode zoals ``WriteLine()`` dan plaats je deze zonder aanhalingstekens!

Bekijk zelf eens wat het verschil wordt wanneer je volgende lijn code ``Console.WriteLine(result);`` vervangt door ``Console.WriteLine("result");``.

De uitvoer wordt dan:

::: {.console}
```text
Hoi, ik ben het!
Wie ben jij?!
tim [enter]
Dag
result
hoe gaat het met je?
```
:::

We krijgen dus letterlijk de tekst "result" op het scherm in plaats van de gebruikersinvoer die we in de variabele bewaarden.

### Write en WriteLine

Naast ``WriteLine`` bestaat er ook ``Write``.

De ``WriteLine``-methode zal steeds een *line break* - een *enter* zeg maar - aan het einde van de lijn zetten zodat de cursor naar de volgende lijn springt.

**De ``Write``-methode daarentegen zal geen enter aan het einde van de lijn toevoegen.** Als je dus vervolgens iets toevoegt met een volgende ``Write`` of ``WriteLine``, **dan zal dit aan dezelfde lijn toegevoegd worden.**

Vervang daarom eens in de laatste 3 lijnen code in je project ``WriteLine`` door ``Write``:

```java
Console.Write("Dag");
Console.Write(result);
Console.Write("hoe gaat het met je?");
```

Voer je programma uit en test het resultaat. Je krijgt nu:

```java
Hoi, ik ben het!
Wie ben jij?!
tim [enter]
Dagtimhoe gaat het met je?
```

Wat is er hier *verkeerd* gelopen? Al je tekst van de laatste lijn plakt zo dicht bij elkaar? 

<!-- \newpage -->

Inderdaad, ik ben spaties vergeten toe te voegen. Spaties zijn ook tekens die op scherm moeten komen - ook al zien we ze niet - en je dient dus binnen de aanhalingstekens spaties toe te voegen. 

Namelijk:

```java
Console.Write("Dag ");
Console.Write(result);
Console.Write(" hoe gaat het met je?");
```

Je uitvoer wordt nu:

::: {.console}
```text
Hoi, ik ben het!
Wie ben jij?!
tim [enter]
Dag tim hoe gaat het met je?
```
:::

### Witregels in C\#

C# trekt zich niets aan van **witregels die niét binnen aanhalingstekens staan**. Zowel spaties, enters en tabs worden genegeerd. Met andere woorden: je kan het voorgaande programma perfect in één lange lijn code typen, zonder enters. Dit is echter niet aangeraden want het maakt je code een pak onleesbaarder.

![Voorgaande programma in exact 1 lijn. Cool? Ja, in sommige kringen. Dom en onleesbaar? Ook ja.](../assets/1_csharpbasics/online.png)

:::{.callout-important}

### Opletten met spaties

Let goed op hoe je spaties gebruikt bij ``WriteLine``. **Indien je spaties buiten de aanhalingstekens plaatst dan heeft dit geen effect.**

Hier een fout gebruik van spaties (de code zal werken maar je spaties worden genegeerd). **Let op: de liggende streepjes (``_``) hieronder stellen enkel _visueel_ een spatie voor. Typ ze dus niet over!**

```java
Console.Write("Dag"_);  
Console.Write(result_);
Console.Write("hoe gaat het met je?");
```

En een correct gebruik:

```java
Console.Write("Dag_");
Console.Write(result);
Console.Write("_hoe gaat het met je?");
```
:::

### Variabelen in een zin plaatsen

We kunnen dit allemaal nog een pak korter tonen zonder dat de code onleesbaar wordt. Je kan de inhoud van een variabele namelijk rechtstreeks in een stuk tekst plaatsen. Daarvoor zet je een dollarteken (``$``) vóór de openende aanhalingstekens en plaats je de naam van de variabele tussen accolades (``{`` en ``}``). De laatste 3 lijnen code kunnen dan korter geschreven worden als volgt:

```java
Console.WriteLine($"Dag {result} hoe gaat het met je?");
```

Het ``$``-teken zegt tegen C#: alles wat in deze tekst tussen accolades staat, is geen tekst maar code. Op de plek van ``{result}`` komt dus de inhoud van de variabele ``result``. Deze techniek heet **string interpolation**. In hoofdstuk 3 leer je er meer over, zo kan je bijvoorbeeld ook berekeningen tussen de accolades zetten.

Bekijk zelf eens wat het verschil wordt wanneer je volgende lijn code:

```java
Console.WriteLine($"Dag {result} hoe gaat het met je?");
```

Vervangt door: 

```java
Console.WriteLine($"Dag result hoe gaat het met je?");
```

We krijgen dan altijd dezelfde output, namelijk:

::: {.console}
```text
Dag result hoe gaat het met je?
```
:::

Zonder accolades is ``result`` gewoon een stuk van de tekst, en toont C# dus niet de inhoud van de variabele.

:::{.callout-important}
Vergeet je het ``$``-teken vooraan, dan blijft ``{result}`` letterlijk op het scherm staan, mét accolades. C# ziet dan een gewone string waar toevallig accolades in staan.
:::

<!-- TODO ed.5 (review): comments (//) worden hier al gebruikt maar nog nergens uitgelegd. Uitleg staat pas in 1_csharpbasics. Overweeg korte mention. -->

<!-- \newpage -->

### Meer input vragen

Als je meerdere inputs van de gebruiker wenst te bewaren zal je meerdere geheugenplekken (variabelen) nodig hebben. Bijvoorbeeld:

```java
Console.WriteLine("Geef leeftijd");
string leeftijd = Console.ReadLine(); //eerste variabele aanmaken
Console.WriteLine("Geef adres");
string adres = Console.ReadLine(); //tweede variabele aanmaken
```

:::{.callout-tip}
Je kan met behulp van `//` commentaar in code plaatsen. Alles na die *forward slashes* zal genegeerd worden door de compiler tot aan de eerstvolgende witregel. 

We zullen verderop bespreken hoe je dit kan gebruiken om bijvoorbeeld de werking van je code meer toe te lichten.
:::

Je mag echter de geheugenplek ook al vroeger aanmaken (declareren) en pas later een waarde toekennen. In C# zet men de creatie van een variabele meestal zo dicht mogelijk bij de code waar je die variabele gebruikt. Maar dat is geen verplichting. Dit mag dus ook:

```java
string leeftijd; //eerste variabele aanmaken
string adres; //tweede variabele aanmaken
Console.WriteLine("Geef leeftijd");
leeftijd = Console.ReadLine();
Console.WriteLine("Geef adres");
adres = Console.ReadLine();
```

:::{.callout-tip}
Je zal vaak ``Console.WriteLine`` moeten schrijven als je dit boek volgt.Ik heb echter goed nieuws voor je: er zit een ingebouwde *snippet* in VS om sneller ``Console.WriteLine`` op het scherm te toveren.Ik ga je niet langer in spanning houden...of toch... nog even. Ben je benieuwd? Spannend he!

Hier gaan we: **``cw [tab] [tab]``**

Als je dus ``cw`` schrijft en dan twee maal op de tab-toets van je toetsenbord duwt verschijnt daar *automagisch* een verse lijn met ``Console.WriteLine();``.

:::

<!-- TODO ed.5 (review): broertje 'prop[tab][tab]' en de algemene snippet-cultuur (Tools -> Code Snippets Manager) ontbreken nog. -->
<!-- TODO ed.5 (review): debugging-teaser (breakpoints, F10, F11) hoort hier al kort vermeld — al was het maar als vooruitblik. -->

