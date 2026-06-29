<!-- TODO ed.5 (review): structureel. is/as/equals is nu gesplitst over H16 en H17 (1_IsAs + 6_equals onder H16, 2_Polymorfisme_Interfaces onder H17), wat de leesvolgorde stroef maakt. Overweeg de drie bestanden samen in één hoofdstuk te zetten (volgorde 1 -> 2 -> 6), met één vooruitwijzing naar interfaces. Vereist _quarto.yml-aanpassing. -->
<!-- TODO ed.5 (review): bestandsnaam 6_equals.md is inconsistent (geen 3,4,5). Overweeg te hernoemen naar 3_equals.md. -->

## De ``is`` en ``as`` keywords
Dankzij polymorfisme kunnen we dus child en parent-objecten door elkaar gebruiken. De keywords ``is`` en ``as`` gaan ons helpen om door het bos van objecten het bos nog te zien. 

### Het ``is`` keyword

Het ``is`` keyword is een operator die je kan gebruiken om te weten te komen of:

* Een object van een bepaalde datatype is.
* Een object een bepaalde interface bevat (zie volgende hoofdstuk).

De ``is`` operator heeft twee operanden nodig en geeft een ``bool`` terug als resultaat. De linkse operator moet een variabele zijn, de rechtse een datatype. Bijvoorbeeld:

```java
bool ditIsEenStudent = mijnStudent is Student;
```

#### ``is`` voorbeeld 
Stel dat we volgende drie klassen hebben:

```java
internal class Voertuig {}

internal class Auto: Voertuig{}

internal class Persoon {}
```

Een Auto **is** een Voertuig.
Een Persoon **is géén** Voertuig.

Stel dat we enkele variabelen hebben als volgt:

```java
Auto mijnAuto = new Auto();
Persoon rambo = new Persoon();
```

We kunnen nu de objecten met ``is`` bevragen of ze van een bepaalde type zijn:
```java
if(mijnAuto is Voertuig)
{
    Console.WriteLine("mijnAuto is een Voertuig");
}
if(rambo is Voertuig)
{
    Console.WriteLine("rambo is een Voertuig");
}
```

De uitvoer zal worden: ``mijnAuto is een Voertuig``. 

Met polymorfisme wordt dit voorbeeld echter interessanter. Wat als we een hoop objecten in een lijst van voertuigen plaatsen en nu enkel met de auto's iets willen doen, dan kan dat:

```java
List<Voertuig> alleMiddelen = new List<Voertuig>();
alleMiddelen.Add(new Voertuig());
alleMiddelen.Add(new Auto());
alleMiddelen.Add(new Voertuig());

foreach (var middel in alleMiddelen)
{
    if(middel is Auto)
    {
        //Doe iets met het huidige voertuig
    }
}
```

### ``as`` keyword met voorbeeld
Wanneer we objecten van het ene naar het andere type willen omzetten dan doen we dit vaak met behulp van casting:

```java
Student fritz = new Student();
Mens jos = (Mens)fritz;
```

Het probleem bij casting is dat dit niet altijd lukt. Indien de conversie niet mogelijk is zal een uitzondering gegenereerd worden en je programma zal crashen als je niet aan exception handling doet.

Het ``as`` keyword lost dit op. Het keyword zegt aan de compiler **"probeer dit object te converteren. Als het niet lukt, zet het dan op ``null`` in plaats van een uitzondering op te werpen."**
 
De code van daarnet herschrijven we dan naar:

```java
Student fritz = new Student();
Mens jos = fritz as Mens;
```

Indien nu de casting niet lukt (omdat ``Student`` misschien geen childklasse van ``Mens`` blijkt te zijn) dan zal ``jos`` de waarde ``null`` krijgen.

We kunnen dan vervolgens schrijven:

```java
Student fritz = new Student();
Mens jos = fritz as Mens;
if(jos != null)
{
    //Doe Mens-zaken 
}
```

:::{.callout-important}
**``as`` werkt enkel met reference types** (objecten van klassen en interfaces). Je kan ``as`` dus **niet** gebruiken op gewone value types zoals ``int`` of ``bool``. Iets als ``int getal = mijnObject as int;`` zal niet compileren. (Voor value types bestaat een variant met een vraagteken, maar die zien we hier nog niet.)
:::

:::{.callout-tip}
**Wanneer ``is`` en wanneer ``as``?** Vuistregel: wil je het object daarna meteen *gebruiken*, kies dan ``as`` (één keer omzetten, dan op ``null`` controleren). Wil je enkel *weten* of een object van een bepaald type is (een ja/nee-vraag, zonder het daarna te gebruiken), dan volstaat ``is``.
:::

![``is`` geeft een ``bool`` terug; ``as`` geeft de referentie terug als het type klopt, anders ``null``.](../assets/12_isas/isastypecheckNEW.png)<!--{width=70%}-->

<!-- TODO: nieuwe AI-gegenereerde afbeelding (isastypecheck), nakijken en goedkeuren -->

### Pattern matching: ``is`` met een variabele

Moderne C# (sinds C# 7) laat toe om de ``is``-controle en het omzetten in **één** stap te doen. Je plaatst gewoon een variabelenaam achter het type. Slaagt de ``is``-check, dan zit het omgezette object meteen in die variabele klaar voor gebruik. Dit heet *pattern matching*.

In plaats van:

```java
if(mijnAuto is Voertuig)
{
    Voertuig v = (Voertuig)mijnAuto;
    //...gebruik v
}
```

schrijf je korter en veiliger:

```java
if(mijnAuto is Voertuig v)
{
    //v is hier meteen beschikbaar als Voertuig
}
```

Je zal deze vorm overal in moderne C#-code (en op StackOverflow) tegenkomen, dus het loont om ze te herkennen en te gebruiken.

<!-- TODO ed.5 (review): ook switch met patterns vermelden (switch (obj) { case IVloeker v: ... } of de expression-form). Krachtig naast de if/else-loops. -->

:::{.callout-tip}
In dezelfde geest schrijf je je null-controles tegenwoordig vaak met ``is null`` en ``is not null`` in plaats van ``== null`` en ``!= null``:

```java
if (jos is not null)
{
    //...
}
```

Beide werken; ``is null`` / ``is not null`` is de modernere, iets veiligere schrijfwijze.
:::

### Volgorde van bewerkingen met ``is`` en ``as``

De is en as keywords worden gebruik in logische expressie. Ze hebben dan ook een bepaalde volgorde wanneer ze verwerkt zullen worden. Onze bestaande volgorde van bewerkingen krijgt dus 2 nieuwe leden op lijn 4:

1. Logische NIET: ``!``
2. Delen en vermenigvuldigen: ``*``, ``/``, ``%``
3. Optellen en aftrekken: ``+``, ``-``
4. Relationele operators: ``<``, ``<=``, ``>``, ``>=`` én **``is``, ``as``**
5. Gelijkheid: ``==``, ``!=``
6. Logische EN: ``&&``
7. Logische OF: ``||``

