## Enum

>![](../assets/attention.png)Helm op alsjeblieft! ``enum`` is een erg onderschat concept bij beginnende programmeurs. Enums zijn wat raar in het begin, maar van zodra je er mee weg bent zal je niet meer zonder kunnen en zal je code zoveel eleganter en stoerder worden. Zet je helm dus op en begin er aan!

### De bestaansreden voor enums

Stel dat je een programma moet schrijven dat afhankelijk van de dag van de week iets anders moet doen. In een wereld zonder enums (**enumeraties**, letterlijk *opsommingen*) zou je dit kunnen schrijven op 2 zeer foutgevoelige manieren:

1. Met een ``int`` die een getal van 1 tot en met 7 kan bevatten. 
2. Met een ``string`` die de naam van de dag bevat (bv. ``"woensdag"``)

#### Slechte oplossing 1: Met ``int``

De waarde van de dag staat in een variabele ``int dagKeuze``. We bewaren er 1 in voor maandag, 2 voor dinsdag, enz. Vervolgens kunnen we dan schrijven: 

```java
if(dagKeuze == 1)
{
    Console.WriteLine("We doen de maandag dingen");
}
else if (dagKeuze == 2)
{
    Console.WriteLine("We doen de dinsdag dingen");
}
else if 
//enz.
```

Deze oplossing heeft 2 grote nadelen:

* Wat als we per ongeluk ``dagKeuze`` een niet geldige waarde geven, zoals 9, 2000 of -4 ?
* De code is niet erg leesbaar. Wat was ``dagKeuze ==2`` nu weer? Was ``2`` nu dinsdag of woensdag (want misschien was maandag 0 i.p.v. 1) ?

#### Slechte oplossing 2: Met strings

Laten we tweede manier eens bekijken: de waarde van de dag bewaren we in een variabele ``string dagKeuze``. We bewaren de dagen als ``"maandag"``, ``"dinsdag"``, enz.

```java
if(dagKeuze == "maandag")
{
    Console.WriteLine("We doen de maandag dingen");
}
else if (dagKeuze == "dinsdag")
{
    Console.WriteLine("We doen de dinsdag dingen");
}
else if //enz.
```

De code wordt nu wel leesbaarder, maar toch is ook hier 1 groot nadeel:

* De code is veel foutgevoeliger voor typefouten. Wanneer je ``"Maandag"`` i.p.v. ``"maandag"`` bewaart dan zal de if al niet werken. Iedere schrijffout of variant zal falen. 

### Enumeraties: het beste van beide werelden

Wat we eigenlijk willen is een variabele die maar een handvol waarden mag bevatten, en waarbij die waarden een leesbare naam hebben. Zo een variabele ken je al: de ``bool``.

Een ``bool`` kan maar twee waarden bevatten, ``true`` en ``false``. Die twee zijn geen tekst en geen getal, het zijn gewoon *de* twee waarden die het type ``bool`` toelaat. Probeer je er iets anders in te stoppen, dan weigert de compiler dat meteen.

Een ``enum`` laat je precies dat doen, maar dan met je eigen lijstje namen. In plaats van de twee waarden van ``bool`` maak je er zeven (``Maandag`` tot en met ``Zondag``), of drie, of vijftig. Je krijgt zo:
 
1. **Leesbaardere code**.
2. Minder foutgevoelige code, en dus minder potentiële bugs.
3. VS kan je helpen met sneller de nodige code te schrijven.

Het keyword ``enum`` geeft aan dat we een nieuw datatype maken dat maar enkele mogelijke waarden kan hebben. Nadat we dit nieuwe datatype hebben gedefinieerd kunnen we variabelen van dit nieuwe datatype aanmaken. Deze variabelen mogen enkel waarden bevatten die in het datatype werden gedefinieerd. Ook zal IntelliSense van Visual Studio je de mogelijke waarden helpen invullen.

:::{.callout-tip}
In C# zitten al veel enum-types ingebouwd. Denk maar aan ``ConsoleColor``: wanneer je de kleur van het lettertype van de console wilt veranderen gebruiken we een enum-type. Er werd reeds gedefinieerd wat de toegelaten waarden zijn, bijvoorbeeld: ``Console.ForegroundColor = ConsoleColor.Red;`` 

Je gebruikte dus al een enum voor je wist dat ze bestonden. Straks maak je er zelf een.
:::

<!-- \newpage -->

### Zelf enum maken

Zelf een ``enum`` type maken en gebruiken gebeurt in 2 stappen:

1. Het nieuwe datatype en de mogelijke waarden definiëren.
2. Waarden van het nieuwe enumtype aanmaken en gebruiken in je code.

#### Stap 1: het nieuwe datatype definiëren

We maken eerst een enum type aan. **In je console-applicaties moet dit binnen ``class Program`` gebeuren, maar niét binnen de ``Main`` methode**:

```java
enum Weekdagen{Maandag,Dinsdag,Woensdag,Donderdag,Vrijdag,Zaterdag,Zondag};
```

Waar die lijn dan precies staat in je project, zie je hier:

```java
namespace Demo
{
    internal class Program
    {
        enum Weekdagen{Maandag,Dinsdag,Woensdag,Donderdag,Vrijdag,Zaterdag,Zondag};

        static void Main(string[] args)
        {
            Console.WriteLine("Hello enum");
        }
    }
}
```

De enum staat dus tussen de accolades van ``class Program``, maar buiten die van ``Main``. Zet je ze per ongeluk binnen ``Main``, dan compileert je code niet.

We hebben nu letterlijk **een nieuw datatype aangemaakt**, genaamd ``Weekdagen``. 

#### Stap 2: variabelen van het nieuwe datatype aanmaken en gebruiken

Net zoals ``int``, ``double`` enz. kan je nu ook variabelen van het type ``Weekdagen`` aanmaken. Hoe cool is dat!? 

Bijvoorbeeld:

```java
Weekdagen dagKeuze;
Weekdagen andereKeuze;
```

En vervolgens kunnen we waarden aan deze variabelen toewijzen als volgt:

```java
dagKeuze = Weekdagen.Donderdag;
```

Kortom: we hebben variabelen zoals we gewoon zijn, het enige verschil is dat we nu beperkt zijn in de waarden die we kunnen toewijzen. Deze kunnen enkel de waarden krijgen die in het type gedefinieerd werden. De code is nu ook een pak leesbaarder geworden.

#### Het type, de waarde en de variabele

Hier gaat het bij velen even mis, dus we zetten de drie namen die nu in het spel zijn even naast elkaar. Vergelijk telkens met een gewone ``int``:

| In je code | Wat is het? | Hetzelfde met ``int`` |
|---|---|---|
| ``Weekdagen`` | het **type** dat jij zelf maakte | ``int`` |
| ``Weekdagen.Donderdag`` | een **waarde** van dat type | ``18`` |
| ``dagKeuze`` | de **variabele** die zo'n waarde bewaart | ``leeftijd`` |

Een declaratie met toekenning is dan ook exact hetzelfde opgebouwd als wat je al kent:

```java
int       leeftijd = 18;
Weekdagen dagKeuze = Weekdagen.Donderdag;
```

Eerst het type, dan de naam van de variabele, dan de waarde. Het enige nieuwe is de manier waarop je zo'n waarde opschrijft: **altijd de typenaam, een punt, en dan de waarde**. ``Donderdag`` op zichzelf bestaat niet, net zoals je ``Red`` op zichzelf niet kan schrijven en je ``ConsoleColor.Red`` moet gebruiken.

<!-- \newpage -->

### Enums en beslissingen werken graag samen

Ook de beslissingsstructuren worden leesbaarder:

```java
if(dagKeuze == Weekdagen.Woensdag)
```
of een switch:
```java
switch(dagKeuze)
{
    case Weekdagen.Maandag:
        Console.WriteLine("It's monday!");
        break;
    case Weekdagen.Dinsdag:
     //enz.
}
```

:::{.callout-tip}
Visual Studio houdt van enums (*ik ook trouwens*) en zal je helpen bij het schrijven van een ``switch`` indien de test-variabele een enum-type bevat. 
Hoe?

* Schrijf ``switch`` en druk op 2 maal op tab. Normaal verschijnt er nu een "prefab" switch structuur met een test-waarde genaamd ``switch_on`` die een gele achtergrond heeft.
* Overschrijf ``switch_on`` met de variabele die je wilt testen (bv. ``dagKeuze``).
* Klik nu met de muis eender waar binnen de accolades van de ``switch``.
* Profit!
:::

### Een enum op het scherm tonen

Een enum-variabele kan je gewoon aan ``Console.WriteLine`` geven, of in een geïnterpoleerde string steken:

```java
Weekdagen dagKeuze = Weekdagen.Donderdag;
Console.WriteLine(dagKeuze);
Console.WriteLine($"Vandaag is het {dagKeuze}");
```

::: {.console}
```text
Donderdag
Vandaag is het Donderdag
```
:::

Je krijgt dus de *naam* van de waarde te zien. Merk op dat er nergens een string ``"Donderdag"`` in je code staat: C# haalt die naam uit de enum-definitie die je zelf schreef.

### Conversie van en naar enum variabelen

**De waarde van een enum-variabelen wordt intern als een ``int`` bewaard.** In het geval van de ``Weekdagen`` zal ``Maandag`` standaard de waarde 0 krijgen, ``Dinsdag`` 1, enz.

Wil je dat interne getal zien, dan moet je expliciet **casten** naar ``int``:

```java
Weekdagen dagKeuze = Weekdagen.Donderdag;
Console.WriteLine(dagKeuze);        //toont Donderdag
Console.WriteLine((int)dagKeuze);   //toont 3
```

De omgekeerde weg werkt ook: een ``int`` omzetten naar een enum-waarde doe je met dezelfde castsyntax:

```java
int keuze = 3;
Weekdagen dagKeuze = (Weekdagen)keuze;
//dagKeuze zal de waarde Weekdagen.Donderdag hebben
```

Wil je dus bijvoorbeeld 1 dag bijtellen dan kan je schrijven:

```java
Weekdagen dagKeuze= Weekdagen.Dinsdag;
int extradag= (int)dagKeuze + 1;
Weekdagen nieuweDag= (Weekdagen)extradag;
//nieuweDag heeft de waarde Weekdagen.Woensdag
```

:::{.callout-tip}
Optellen en aftrekken met een geheel getal mag trouwens ook rechtstreeks op een enum-variabele. Volgende lijn doet exact hetzelfde als de drie hierboven:

```java
Weekdagen morgen = dagKeuze + 1;
```

Voor de andere bewerkingen (``*``, ``/``, ...) moet je wél eerst naar ``int`` casten.
:::

:::{.callout-warning}
## Een cast controleert niets

Tel je op deze manier een dag bij ``Zondag``, dan krijg je géén foutmelding en géén crash. Ook dit compileert en draait probleemloos:

```java
Weekdagen raar = (Weekdagen)99;
Console.WriteLine(raar);   //toont 99
```

De variabele bevat nu de waarde 99, waar geen enkele naam bij hoort, dus toont ``WriteLine`` gewoon het getal. De garantie van een enum geldt zolang je met de namen werkt. Van zodra je er met een cast een getal binnenbrengt, ben je zelf verantwoordelijk om te controleren of dat getal wel bestaat.
:::

### Andere interne waarde toekennen

Standaard worden de enum waarden intern dus genummerd beginnende bij 0. Je kan dit ook manueel veranderen door bij het maken van de ``enum`` expliciet aan te geven wat de interne waarde moet zijn, als volgt:

```java
enum WeekDagen 
    {Maandag=1, Dinsdag, Woensdag, Donderdag, Vrijdag, Zaterdag, Zondag}
```

De dagen zullen nu vanaf 1 genummerd worden, dus ``WeekDagen.Woensdag`` zal de waarde 3 hebben.

We kunnen ook nog meer informatie meegeven, bijvoorbeeld:

```java
enum WeekDagen 
    {Maandag=1, Dinsdag, Woensdag, Donderdag, Vrijdag, Zaterdag=50, Zondag=60}
```

In dit geval zullen Maandag tot Vrijdag intern als 1 tot en met 5 bewaard worden, Zaterdag als 50, en Zondag als 60. De "gaten" tussen 5 en 50 zijn geen probleem: de interne waarden van een enum hoeven niet aaneensluitend te zijn. Geef je een waarde geen expliciet getal, dan krijgt ze gewoon het getal van de vorige waarde plus één.

:::{.callout-tip}
De individuele enum waarden moeten steeds met een hoofdletter starten. 
:::

<!-- \newpage -->

### Gebruikersinvoer naar enum

Heel vaak zal je een programma schrijven waarbij de gebruiker een keuze moet maken uit een menu of iets dergelijks. Dit menu kan je voorstellen met een enum. Het probleem is vervolgens vragen wat de keuze van de gebruiker is en deze dan verwerken. Je zou dit kunnen doen met behulp van een reeks if-testen (``if(userinput=="demo")`` )...Maar waarom niet de kracht van ``enum`` benutten?! 

Volgende code toont hoe je dit kunt doen:

```java
enum Menu {Demo=1, Start, Einde}
static void Main(string[] args)
{
    Console.WriteLine("Wat wil je doen?");
    Console.WriteLine("1. Demo");
    Console.WriteLine("2. Start");
    Console.WriteLine("3. Einde");
    int userkeuze = int.Parse(Console.ReadLine());

    Menu keuze = (Menu)userkeuze;

    switch (keuze)
    {
        //...
```

Typt de gebruiker hier een 7, dan bevat ``keuze`` na de cast de waarde 7, die in geen enkele ``case`` voorkomt. Een ``default``-case in je ``switch`` vangt dat netjes op.

### Parsen van enum

Sinds .NET 5  uitkwam, is er een meer gebruiksvriendelijke manier verschenen om een string te parsen naar een enum variabele. Hierbij wordt gebruikt gemaakt van *generics* (herkenbaar aan ``<  >``), een concept dat uit de doeken wordt gedaan in de appendix van dit boek. 

Echter, zelfs zonder generics te kennen zou volgende code toch begrijpbaar moeten zijn. We gebruiken terug het eerder gedefinieerde ``Menu`` type en de nieuw beschikbare ``Enum.Parse< >``- methode :

```java
Menu keuze = Enum.Parse<Menu>(Console.ReadLine());
```

We plaatsen tussen de ``<  > `` het enum datatype naar waar we willen parsen. 

Optioneel kan je via een tweede argument van het type bool aangeven of de parsing hoofdlettergevoelig is (``false``) of niet (``true``) :

```java
Menu keuze = Enum.Parse<Menu>(Console.ReadLine(), true); 
```

:::{.callout-warning}
Net zoals ``int.Parse`` crasht ``Enum.Parse`` op invoer die het niet kan omzetten. Typt de gebruiker ``pizza``, dan valt je programma stil. Ook hier bestaat een ``TryParse``-variant die in de plaats ``true`` of ``false`` teruggeeft:

```java
if (Enum.TryParse(Console.ReadLine(), out Menu keuze))
{
    //het parsen is gelukt, keuze bevat nu een waarde
}
```

Let wel: typt de gebruiker een getal zoals ``42``, dan lukt het parsen wél en zit je opnieuw met een waarde zonder naam, net zoals bij een cast.
:::

<!-- \newpage -->

### Veelgemaakte fouten met ``enum``

>![](../assets/attention.png)De voorman nog eens. Onderstaande fouten zie ik ieder jaar opnieuw passeren, en ze hebben bijna allemaal dezelfde oorzaak: het verschil tussen het *type*, de *waarde* en de *variabele* zit nog niet vast. Lees ze even door, dan herken je de foutboodschap wanneer ze op je scherm verschijnt.

#### De enum binnen ``Main`` zetten

Een enum definieer je binnen ``class Program``, maar buiten ``Main``. Zet je ze er toch in, dan struikelt de compiler en krijg je een hele reeks vreemde fouten die niets met enums te maken lijken te hebben:

::: {.console}
```text
} expected
Invalid token '(' in a member declaration
Type or namespace definition, or end-of-file expected
```
:::

Laat je niet afleiden door die lijst: schuif gewoon de ``enum``-lijn boven de ``static void Main``-lijn en alle fouten verdwijnen in één klap.

#### De typenaam vergeten voor de waarde

```java
Weekdagen dagKeuze = Maandag;   //compileert niet
```

::: {.console}
```text
The name 'Maandag' does not exist in the current context
```
:::

``Maandag`` bestaat enkel *binnen* het type ``Weekdagen``. Schrijf dus ``Weekdagen.Maandag``. Dezelfde regel geldt in je ``case``-labels: ``case Maandag:`` werkt niet, ``case Weekdagen.Maandag:`` wel.

#### Een enum met tekst vergelijken

```java
if (dagKeuze == "Maandag")   //compileert niet
```

De naam die je op het scherm ziet verschijnen is géén string. ``dagKeuze`` is van het type ``Weekdagen`` en kan enkel met een andere ``Weekdagen``-waarde vergeleken worden. Ook hier is de oplossing ``if (dagKeuze == Weekdagen.Maandag)``.

#### Een getal rechtstreeks toekennen of uitlezen

```java
Weekdagen dagKeuze = 3;   //compileert niet
int getal = dagKeuze;     //compileert niet
```

::: {.console}
```text
Cannot implicitly convert type 'int' to 'Weekdagen'. 
An explicit conversion exists (are you missing a cast?)
```
:::

Intern zit er wel een getal in een enum, maar ``Weekdagen`` en ``int`` blijven twee verschillende types en C# doet die omzetting nooit vanzelf. De foutboodschap zegt trouwens zelf wat je vergat: *are you missing a cast?* Schrijf dus ``(Weekdagen)3`` en ``(int)dagKeuze``.

#### De waarde van een ánder enum-type gebruiken

```java
enum Weekdagen {Maandag, Dinsdag, Woensdag, Donderdag, Vrijdag, Zaterdag, Zondag}
enum Maanden {Januari, Februari, Maart}

Weekdagen dagKeuze = Maanden.Januari;   //compileert niet
```

Beide waarden zitten intern op 0, en toch weigert de compiler dit. Een enum is een volwaardig eigen type: een ``Maanden``-waarde past niet zomaar in een ``Weekdagen``-variabele. Dat is precies de bescherming die je met een enum wou.

### Test jezelf

**1.** Wat verschijnt er op het scherm?

```java
enum Kleur {Rood, Groen, Blauw}
//...
Kleur keuze = Kleur.Groen;
Console.WriteLine(keuze);
Console.WriteLine((int)keuze);
```

**2.** Wat verschijnt er op het scherm?

```java
enum Niveau {Laag=1, Midden, Hoog=10, Extreem}
//...
Console.WriteLine((int)Niveau.Midden);
Console.WriteLine((int)Niveau.Extreem);
```

**3.** Crasht deze code? Zo nee, wat toont ze?

```java
enum Kleur {Rood, Groen, Blauw}
//...
Kleur keuze = (Kleur)5;
Console.WriteLine(keuze);
```

**4.** Welke van deze lijnen compileren niet, en waarom?

```java
enum Kleur {Rood, Groen, Blauw}
//...
Kleur keuze = Kleur.Rood;
keuze = Groen;
keuze = "Blauw";
keuze = (Kleur)2;
```

:::{.callout-tip collapse="true"}
## Antwoorden

**1.** Eerst ``Groen``, dan ``1``. Van een enum-variabele toont ``WriteLine`` de naam van de waarde. Cast je naar ``int``, dan krijg je het interne getal, en dat begint standaard bij 0 voor ``Rood``.

**2.** Eerst ``2``, dan ``11``. ``Laag`` kreeg expliciet 1, dus ``Midden`` wordt 2. ``Hoog`` springt naar 10, en ``Extreem`` krijgt daarna gewoon het volgende getal.

**3.** Ze crasht niet en toont ``5``. Een cast controleert niet of dat getal wel bij een naam hoort. Er is geen naam voor 5, dus toont ``WriteLine`` het getal zelf.

**4.** ``keuze = Groen;`` compileert niet: een enum-waarde schrijf je altijd als ``Kleur.Groen``. ``keuze = "Blauw";`` compileert evenmin: dat is een ``string`` en geen ``Kleur``. De andere twee lijnen zijn wel in orde, ``(Kleur)2`` levert ``Kleur.Blauw`` op.
:::

<!-- \newpage -->

>![](../assets/care.png)Ah, de tijden zonder ``enum``. Ik weet nog hoe we onze grotten beschilderden zonder ons druk te moeten maken in enumeraties. Om maar te zeggen: je kan perfect leven zonder ``enum``. Vele programmeurs voor je hebben dit bewezen. Echter, van zodra ze ``enum`` ontdekten (en begrepen) zijn nog maar weinig programmeurs er terug van afgestapt. 
>
>De eerste kennismaking met enumeraties is wat bevreemdend: je kan plots je eigen datatypes aanmaken?! Van zodra je ze in de vingers hebt zal je ontdekken dat je veel leesbaardere code kunt schrijven én dat Visual Studio je kan helpen met het opsporen van bugs. 

Wanneer gebruik je ``enum``? Telkens je één of meer variabelen nodig hebt, waarvan je perfect op voorhand weet welke mogelijke waarden ze mogen hebben. Ze worden bijvoorbeeld vaak gebruikt in *finite state machines*. 

Bij game development willen we bijhouden in welke staat het programma zich bevindt: ``Intro``, ``Startmenu``, ``Ingame``, ``Gameover``, ``Optionsscreen``, enz. Dit is een typisch ``enum`` verhaal. We definiëren hiervoor het volgende type:

```java
enum gamestate {Intro, Startmenu, Ingame, Gameover, Optionsscreen}
```

En vervolgens kunnen we dan met een eenvoudige switch in ons hoofdprogramma snel de relevante code uitvoeren:

```java
//Bij opstart:
gamestate playerGameState= gamestate.Intro;
// ...
//later
switch(playerGameState)
{
    case gamestate.Intro:
        //show fancy movie
        break;
    case gamestate.Startmenu:
        //show start menu
        break;
    //enz.
```

Een ander typisch voorbeeld is schaken. We maken een enum om de speelstukken voor te stellen (``Pion, Koning, Toren`` enz.) en kunnen hen dan laten bewegen en vechten in uiterst leesbare code:

```java
if(spelstuk == Schaakstuk.Paard)
```
