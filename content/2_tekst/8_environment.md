<!-- TODO ed.5 (review): dit stuk gaat niet over tekst en voelt vreemd aan het einde van H3 (tekst gebruiken in code). Overweeg verplaatsing naar H1 of een appendix. Vereist _quarto.yml-aanpassing, dus bewust nog niet uitgevoerd: beslissing aan Tim. -->

## Environment bibliotheek

De ``Console``-bibliotheek is maar 1 van de vele bibliotheken die je in je C# programma's kunt gebruiken. Een andere zag je daarnet al even passeren: ``Environment.NewLine``, de nette manier om een nieuwe regel te vragen zonder zelf te moeten kiezen tussen ``\n`` en ``\r\n``:

```java
Console.Write("Eerste regel" + Environment.NewLine + "Tweede regel");
```

Tijd om die ``Environment``-bibliotheek wat beter te bekijken.

Een programma draait nooit in het luchtledige. Het draait op een concrete computer, met een bepaald besturingssysteem, een bepaalde hoeveelheid werkgeheugen en een gebruiker die op dat moment aangemeld is. Je programma weet daar standaard niets van, en meestal hoeft dat ook niet. Maar soms wel: je wilt de gebruiker bij naam begroeten, je wilt in een foutmelding tonen op welke pc iets misliep, of je wilt weten of je op een 64-bit systeem draait. Precies daarvoor dient ``Environment``.

Je gebruikt ``Environment`` op dezelfde manier als ``Console``: je schrijft de naam, een punt, en dan wat je wilt weten. Je hoeft er niets voor te installeren, het zit net als ``Console`` standaard in .NET:

```java
string gebruiker = Environment.UserName;
string pcnaam = Environment.MachineName;
int aantalProcessoren = Environment.ProcessorCount;
bool is64bit = Environment.Is64BitOperatingSystem;
```

Wat je terugkrijgt zijn gewone ``string``s, ``int``s en ``bool``s, dus alles wat je in dit hoofdstuk leerde werkt er gewoon op. Een begroeting op maat is dan snel gemaakt:

```java
Console.WriteLine($"Hallo {gebruiker}, welkom op {pcnaam}.");
Console.WriteLine($"Je hebt {aantalProcessoren} processoren. 64-bit? {is64bit}.");
```

Een *tussenvariabele* is trouwens niet verplicht. Je mag ``Environment.UserName`` ook rechtstreeks in je string interpolation zetten:

```java
Console.WriteLine($"Hallo {Environment.UserName}!");
```

![Dezelfde regel code op drie computers. ``Environment.UserName`` geeft telkens de naam van wie op die pc aangemeld is.](../assets/2_tekst/driepcs.png)<!--{width=100%}-->

:::{.callout-important}
Wat ``Environment`` teruggeeft hangt af van de computer waarop het programma **op dat moment** draait. Bij mij zegt ``UserName`` "Tim", bij jou je eigen gebruikersnaam, en op de pc van een medestudent nog iets anders. Hetzelfde programma geeft dus op elke machine een andere uitvoer.

Schrijf je een programma dat op die informatie steunt, test het dan op meer dan één systeem. Wat op jouw laptop werkt, kan op een andere pc verrassend uitpakken.
:::

### Zelf op ontdekking

Ik ga hier niet alles opsommen wat ``Environment`` te bieden heeft; daar is de documentatie[^docenv] voor. Beter: typ in Visual Studio ``Environment.`` en kijk wat IntelliSense allemaal voorstelt. Zo kom je vanzelf op ``OSVersion`` (welke versie van Windows draait hier?) of ``CurrentDirectory`` (in welke map staat mijn programma?). Die laatste kom je in het hoofdstuk over bestanden nog tegen.

[^docenv]: Zie [docs.microsoft.com/dotnet/api/system.environment](https://docs.microsoft.com/dotnet/api/system.environment).

Eentje wil ik er wel uitlichten, omdat ze iets toont dat je anders nooit te zien krijgt: ``Environment.WorkingSet``. Dat is de hoeveelheid geheugen die Windows aan je programma toegewezen heeft op het moment dat die regel uitgevoerd wordt. Klik je op run, dan krijgt je programma een stuk werkgeheugen, en via ``WorkingSet`` kan het programma dus zelf zien hoeveel dat is:

```java
long geheugen = Environment.WorkingSet;
Console.WriteLine($"Dit programma gebruikt {geheugen} byte geheugen");
```

Het getal is in bytes, dus het oogt indrukwekkend groot: enkele tientallen miljoenen. Deel je het twee keer door 1024, dan heb je megabytes en wordt het leesbaarder:

```java
Console.WriteLine($"Dit programma gebruikt {geheugen / 1024 / 1024} MB geheugen");
```

Dat getal verschilt niet alleen per pc, het is zelfs bij elke run op dezelfde pc een beetje anders. Test maar eens: run het programma een paar keer na elkaar, voeg dan wat regels code toe en run opnieuw.

### Programma afsluiten

Normaal stopt een programma vanzelf: als de laatste regel van ``Main`` uitgevoerd is, is het gedaan. Soms wil je vroeger stoppen, bijvoorbeeld omdat iets ontbreekt zonder hetwelk het geen zin heeft om verder te gaan. Daarvoor heeft ``Environment`` een methode: ``Environment.Exit(0)``. Zodra die regel uitgevoerd wordt, stopt je programma onmiddellijk. Alles wat erna nog staat, wordt niet meer uitgevoerd.

![Links loopt ``Main`` tot de laatste regel en eindigt vanzelf met exitcode 0. Rechts stopt het programma bij ``Environment.Exit(1)``: de twee regels erna worden overgeslagen en de exitcode is 1.](../assets/2_tekst/exitcode.png)<!--{width=100%}-->

Het getal tussen de haakjes is de zogenaamde *exitcode*. Die heb je al vaker gezien dan je denkt: als je programma in Visual Studio afloopt, staat er onderaan in het consolevenster iets als ``exited with code 0``. Dat is de exitcode van je programma. Nul betekent, per afspraak, "alles is goed verlopen". Elk ander getal betekent "er ging iets mis", en welk getal je daarvoor kiest bepaal je zelf: 1 voor "bestand niet gevonden", 2 voor "geen internetverbinding", of wat je maar zinvol vindt. Wie je programma opstart (Windows, een script, een ander programma) kan die code uitlezen. Als je dan later via logbestanden wilt onderzoeken waarom het programma stopte, dan kan je dat aan die exitcode zien.

Gebruik ``Exit`` enkel als je echt vroegtijdig wilt stoppen. Een programma dat gewoon zijn werk afmaakt, stopt vanzelf met exitcode 0.


>![](../assets/care.png)Mogelijk was deze laatste sectie wat verwarrend. Dat is bewust gedaan...*sort of*. C# leren kan in het begin soms nogal saai lijken. Daarom dat ik ervoor kies om hier en daar een iets meer geavanceerd aspect te bespreken. 
>
>Zoals al eerder verteld: C# komt met een hele grote hoop bibliotheken (denk maar een ``Environment`` en ``Console``). Voor zover ik weet, bestaat er niemand die iedere bibliotheek of klasse kent. Het is aan jou, als gepassioneerde programmeur, om zelf te ontdekken welke bibliotheken je nuttig lijken gegeven een bepaald probleem.
