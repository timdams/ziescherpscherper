## List collectie

Een ``List<>``-collectie is de meest standaard collectie die je kan beschouwen als een veiligere variant op een doodnormale array. Een ``List`` heeft alle eigenschappen die we al kennen van arrays, maar ze zijn wel krachtiger. Het giet een klasse "rond" het concept van de array, waardoor je toegang krijgt tot een hoop nuttige methoden die het werken met arrays vereenvoudigen.

### List aanmaken

De klasse ``List<>`` is een *generieke* klasse. Tussen de ``< >``tekens plaatsen we het datatype dat de lijst zal moeten gaan bevatten. Bijvoorbeeld:

```java
List<int> alleGetallen = new List<int>();
List<bool> binaryList = new List<bool>();
List<Pokemon> pokeDex = new List<Pokemon>();
List<string[]> listOfStringarrays = new List<string[]>();
```

**Zoals je ziet hoeven we bij het aanmaken van een ``List`` geen begingrootte mee te geven, wat we wel bij arrays moeten doen. Dit is één van de voordelen van ``List``: ze groeien mee.**

::: {.callout-tip title="Zie verder"}
In **Python** bestaat zoiets als ``List<>`` niet apart: een ``list`` is ingebouwd in de taal en groeit gewoon mee. Je hoeft er ook geen type bij te zetten, want Python is dynamisch getypeerd:

```python
namen = ["Tim", "An"]
namen.append("Jan")
```

In **Java** lijkt het sterk op C#: daar gebruik je ``ArrayList<String>`` met ``.add(...)``. Zelfde idee, ander jasje. C# zit hier dus dicht bij Java, en ver van het ongetypeerde Python.
:::

:::{.callout-tip}
In dit boek behandel ik het concept generieke klassen enkel in de appendix. 

Generieke klassen oftewel **generic classes** zijn een handig concept om je klassen nog multifunctioneler te maken doordat we zullen toelaten dat bepaalde datatypes niet hardcoded in onze klasse moet gezet worden. ``List<>`` is zo'n eerste voorbeeld, maar er zijn er tal van anderen én je kan ook zelf dergelijke klassen schrijven. Bekijk zeker de appendix indien je dit interesseert.

:::

:::{.callout-tip}
De generieke ``List<>`` klasse bevindt zich in de ``System.Collections.Generic`` namespace. Je dient deze namespace dus als ``using`` bovenaan toe te voegen wil je deze klasse kunnen gebruiken in C# 9.0 en ouder.
:::

<!-- \newpage -->


### Elementen toevoegen

Via de ``Add()``-methode kan je elementen toevoegen aan de lijst. Je dient als parameter aan de methode mee te geven wat je aan de lijst wenst toe te voegen. **Deze parameter moet uiteraard van het type zijn dat de ``List`` verwacht.** 



In volgende voorbeeld maken we een List aan die objecten van het type string mag bevatten en vervolgens plaatsen we er twee elementen in.

```java
List<string> mijnPersonages = new List<string>();
mijnPersonages.Add("Reinhardt");
mijnPersonages.Add("Mercy");
``` 



Ook meer complexe datatypes kan je dus toevoegen:

```java
List<Pokemon> pokedex = new List<Pokemon>();
pokedex.Add(new Pokemon());
```

Via object syntax initializer kan dit zelfs nog sneller:
```java
List<Pokemon> pokedex = new List<Pokemon>()
    {
        new Pokemon(),
        new Pokemon()
    };
```

:::{.callout-tip}

Je kan ook een stap verder gaan en ook binnenin deze initializer syntax dezelfde soort initialize syntax gebruiken om de objecten individueel aan te maken:

```java
List<Pokemon> pokedex = new List<Pokemon>()
    {
        new Pokemon() {Naam = "Pikachu", HP_Base = 5},
        new Pokemon() {Naam = "Bulbasaur", HP_Base = 15}
    };
```

:::

<!-- \newpage -->



### Elementen indexeren

**Het leuke van een ``List`` is dat je deze ook kan gebruiken als een gewone array**, waarbij je met behulp van de indexer elementen individueel kan aanroepen. Stel bijvoorbeeld dat we een lijst hebben met minstens 4 strings in. Volgende code toont hoe we de string op positie 3 kunnen uitlezen en hoe we die op positie 2 overschrijven, net zoals we reeds kenden van arrays:

```java
Console.WriteLine(mijnPersonages[3]);
mijnPersonages[2] = "Torbjorn";
```




Ook de klassieke werking met loops blijft gelden. **De enige aanpassing is dat ``List<>`` niet met ``Length`` werkt maar met ``Count``**:

```java
for(int i = 0 ; i < mijnPersonages.Count; i++)
{
    Console.WriteLine(mijnPersonages[i])
}
```


### Wat kan een List nog?

Interessante methoden en properties voorts zijn:

* ``Clear()``: methode die de volledige lijst leegmaakt en de lengte (``Count``) terug op 0 zet.
* ``Insert()``: methode om een element op een specifieke plaats in de lijst in te voegen.
* ``IndexOf()``: geeft de index terug van het element item in de rij. Indien deze niet in de lijst aanwezig is dan wordt -1 teruggegeven.
* ``RemoveAt()``: verwijdert een element op de index die je als parameter meegeeft.
* ``Sort()``: alle elementen in de lijst worden gesorteerd. Voor lijsten van ingebouwde types (``int``, ``string``, enz.) werkt dit meteen. Voor een lijst van je **eigen klassen** weet C# echter niet hoe het ze moet rangschikken: je krijgt dan een ``InvalidOperationException``. Dat los je pas op door je klasse ``IComparable`` te laten implementeren. Lees daarvoor in hoofdstuk 17 de sectie "Interfaces in de praktijk".

:::{.callout-important}
Let op met het gebruik van ``IndexOf`` (en ``Contains``) en objecten. Deze methoden controleren of de **referentie** dezelfde is van een bepaald object. Je vindt je gewenste object dus enkel terug indien je reeds een referentie naar dat exacte object hebt en dit meegeeft als parameter. Twee aparte objecten met dezelfde inhoud worden dus als *verschillend* beschouwd (tenzij je later ``Equals`` overridet, zie hoofdstuk 13).
:::

<!-- TODO ed.5 (review): vergelijkingstabel Array vs. List<T> (vaste/variabele lengte, performance, syntax, Length vs Count, methoden). Studenten grijpen anders standaard naar List. -->
<!-- TODO ed.5 (review): Add/Remove/Contains/Find elk met een mini-voorbeeldregel; Contains heeft dezelfde reference-equality-valkuil als IndexOf. -->

<!-- \newpage -->


### Een wereld met OOP: Pong list

Ikzelf ben fan van List. Het maakt je code vaak leesbaarder dan arrays. Voorts geeft het je de optie om dynamisch groeiende (en krimpende) arrays te hebben, zonder dat je daar veel *boilerplate* code voor moet schrijven. Herinner je onze Pong-code waarin we 100 balletjes op het scherm lieten vliegen?

```java
const int AANTAL_BALLETJES = 100;
Random r = new Random();
Balletje[] veelBalletjes = new Balletje[AANTAL_BALLETJES];
for (int i = 0; i < veelBalletjes.Length; i++) //balletjes aanmaken
{
    veelBalletjes[i] = new Balletje();
    veelBalletjes[i].X = r.Next(10, 20);
    veelBalletjes[i].Y = r.Next(10, 20);
    veelBalletjes[i].VX = r.Next(-2, 3);
    veelBalletjes[i].VY = r.Next(-2, 3);
}

while (true)
{
    for (int i = 0; i < veelBalletjes.Length; i++)
    {
        veelBalletjes[i].Update(); //update alle balletjes
    }
    for (int i = 0; i < veelBalletjes.Length; i++)
    {
        veelBalletjes[i].TekenOpScherm(); //teken alle balletjes
    }
    System.Threading.Thread.Sleep(50);
    Console.Clear();
}
```

<!-- \newpage -->

<!-- TODO ed.5 (review): leesvolgorde. Hieronder worden foreach en var al gebruikt, terwijl 3_foreach.md (foreach + var) volgens _quarto.yml pas ná dit bestand komt. Overweeg de volgorde aan te passen, of dit eerste List-voorbeeld met een klassieke for-loop te schrijven. -->

Vooral de code in de ``while`` wordt nu leesbaarder dankzij ``List<Balletje>`` (we gaan ook ineens gebruik maken van onze nieuwe default constructor die de random startwaarde instelde):

```java
const int AANTAL_BALLETJES = 100;
List<Balletje> veelBalletjes = new List<Balletje>();
for (int i = 0; i < AANTAL_BALLETJES; i++) //balletjes aanmaken
{
    veelBalletjes.Add(new Balletje());
}

while (true)
{
    foreach(var bal in veelBalletjes)
    {
        bal.Update(); //update alle balletjes
    }
    foreach(var bal in veelBalletjes)
    {
        bal.TekenOpScherm(); //teken alle balletjes
    }
    System.Threading.Thread.Sleep(50);
    Console.Clear();
}
```

Deze code zou je aan iemand die geen C# kan kunnen tonen en met een beetje geluk zal die de code begrijpen. Dat is het fijne van hogere programmeertalen zoals C#: ze zijn veel leesbaarder dan talen die *dichter tegen het metaal* zitten, zoals C en C++. 

Als leuke extra bij C# is dat het een erg levende taal is. Jaarlijks komen er nog nieuwe concepten bij. Meestal zijn die ietwat obscuur, maar vaak maken ze de code wel een pak leesbaarder dan ervoor. Alhoewel ik graag werk met arrays, zorgen Lists er bijvoorbeeld voor dat we veel minder met vierkante haakjes moeten werken én verstoppen ze een hoop code om  bijvoorbeeld lijsten te doen groeien en krimpen.

 Dit verstoppen kan uiteraard soms een probleem zijn indien je hoog-performante code moet schrijven. Aan de andere kant: denk je dat jij *betere* code kunt schrijven dan de ontwikkelaars van de ``Add``-methode bij ``List``?

:::{.callout-tip}
**LINQ** behandelen we niet in dit handboek, maar weet dat dit een heel sterke .NET technologie is waarmee je in één leesbare regel een lijst kunt filteren, sorteren of omvormen (bijvoorbeeld "geef alle Pokémon met meer dan 100 HP"). Voorlopig doen we dat nog met loops, maar weet alvast dat het straks veel korter kan.
:::

<!-- TODO ed.5 (review): bovenstaande LINQ-vooruitwijzing eventueel uitbreiden/concretiseren in latere editie. -->