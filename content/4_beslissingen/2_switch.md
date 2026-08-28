## Switch

Een ``switch`` statement is een element om een veelvoorkomende constructie van ``if``/``if else``...``else`` eenvoudiger te schrijven. Vaak komt het voor dat we bijvoorbeeld aan de gebruiker vragen om een keuze te maken (bijvoorbeeld een getal van 1 tot 10, waarbij ieder getal een ander menu-item uitvoert van het programma), zoals:

```java
Console.WriteLine("Kies: 1)afbreken\n2)opslaan\n3)laden:");
int option = int.Parse(Console.ReadLine());

if (option == 1)
{
    Console.WriteLine("Afbreken gekozen");
}
else if (option == 2)
{
    Console.WriteLine("Opslaan gekozen");
}
else if (option == 3)
{
    Console.WriteLine("Laden gekozen");
}
else
{
    Console.WriteLine("Onbekende keuze");
}
```

Met een ``switch`` kan dit eenvoudiger, wat ik zo meteen demonstreer. Eerst bekijken we hoe ``switch`` juist werkt. De syntax van een ``switch`` wijkt wat af van de andere programma flow-elementen (``if``, ``while``, enz.), namelijk als volgt:

```java
switch (value)
{
    case constant:
        statements
        break;
    case constant:
        statements
        break;
    default:
        statements
        break;
}
```

Laten we eens kijken welke nieuwe zaken we hier terugvinden[^switchnieuw]:

* **``value``** is de waarde die getest wordt (``option`` in het voorbeeld). Meestal is dat een variabele, maar een expressie zoals ``getal % 3`` mag evengoed.
* Iedere mogelijke waarde van value begint met het **``case``** keyword. Gevolgd door de waarde (de **case constant**) die ``value`` moet hebben om in deze case te *springen*.
* Na het **dubbelpunt** volgt vervolgens de **code** die moet uitgevoerd worden in deze ``case``. Deze code mag bestaan uit meerdere lijnen code. Accolades zijn hier trouwens niet verplicht.
* Iedere case die code bevat, moet afgesloten worden met het **``break``** keyword.
* Tijdens de uitvoer zal de switch de inhoud van de testwaarde (``value``) vergelijken met iedere case constant. Dit gebeurt van boven naar beneden. Wanneer een gelijkheid wordt gevonden dan wordt die case uitgevoerd. 
* Indien geen case wordt gevonden die gelijk is aan ``value`` dan zal de code binnen de **``default``**-case uitgevoerd worden (de ``else`` achteraan indien alle vorige ``if else``-tests negatief waren). 
* De ``default``-case is **niet verplicht**. Laat je ze weg en er past geen enkele case, dan doet de ``switch`` gewoon niets en gaat je programma verder met de code eronder.

:::{.callout-tip}
We zijn dus 4 gereserveerde keywords rijker:

* ``switch``
* ``case``
* ``break``
* ``default``
:::

Het menu van zonet kunnen we nu herschrijven naar een ``switch``:

```java
Console.WriteLine("Kies: 1)afbreken\n2)opslaan\n3)laden:");
int option = int.Parse(Console.ReadLine());

switch (option)
{
    case 1:
        Console.WriteLine("Afbreken gekozen");
        break;
    case 2:
        Console.WriteLine("Opslaan gekozen");
        break;
    case 3:
        Console.WriteLine("Laden gekozen");
        break;
    default:
        Console.WriteLine("Onbekende keuze");
        break;
}
```

Typt de gebruiker een ``2``, dan ziet het consolevenster er zo uit (de ``2`` op de vierde lijn is wat hij intikte):

::: {.console}
```text
Kies: 1)afbreken
2)opslaan
3)laden:
2
Opslaan gekozen
```
:::

![Links stopt het vergelijken bij ``case 2`` en springt ``break`` meteen uit de switch. Rechts past geen enkele case en komt ``default`` aan de beurt.](../assets/2_beslissingen/switchweg.png)<!--{width=100%}-->

:::{.callout-tip}
De case waarden moeten constanten zijn en mogen dus geen variabelen zijn. Constanten zijn de welgekende *literals* (``1``, ``"1"``, ``1.0``, ``1d``, ``'1'``, enz.). Uiteraard moeten de case waarden van hetzelfde datatype zijn als die van de testwaarde.

Testen doe je op een ``int`` (of een ander geheel getaltype), een ``char``, een ``string``, een ``bool`` of een ``enum``-waarde.
:::

[^switchnieuw]: Sinds C# 7 is de ``switch`` stelselmatig uitgebreid met enkele krachtige mogelijkheden. Sinds C# 8 bestaat er zelfs een ``switch``-*expressie*, die geen code uitvoert maar een waarde teruggeeft. Ik heb bewust gekozen om deze niét in dit boek op te nemen omdat ze anders je eerste contact met ``switch`` nodeloos moeilijker maken dan zou moeten. 
Toch nieuwsgierig wat *de nieuwe switch* kan? Lees dan zeker eens [thomasclaudiushuber.com/2021/02/25/c-9-0-pattern-matching-in-switch-expressions](https://thomasclaudiushuber.com/2021/02/25/c-9-0-pattern-matching-in-switch-expressions) voor een mooi overzicht van alle nieuwigheden.

### Meerdere cases, dezelfde code

Soms wil je dat dezelfde code uitgevoerd wordt bij 2 of meer cases. Je kan dan meerdere case-labels boven elkaar zetten, een constructie die *fallthrough* genoemd wordt:

```java
switch (option)
{
    case 1:
        Console.WriteLine("Afbreken gekozen");
        break;
    case 2:
    case 3:
        Console.WriteLine("Laden of opslaan gekozen");
        break;
    default:
        Console.WriteLine("Onbekende keuze");
        break;
}
```

In dit geval zullen zowel de waarden ``2`` en ``3`` resulteren in de zin "Laden of opslaan gekozen" op het scherm. Merk op dat dit enkel werkt omdat ``case 2:`` *geen* eigen code bevat. Van zodra een case wel code bevat, moet je ze afsluiten met ``break``.

![``case 2`` bevat geen eigen code, dus valt de uitvoer door naar de code van ``case 3``.](../assets/2_beslissingen/switchfallthrough.png)<!--{width=95%}-->

:::{.callout-warning}
**``break`` vergeten?**

Een case die code bevat moét eindigen met ``break``. Vergeet je dat, dan compileert je code gewoon niet en krijg je de fout *"Control cannot fall through from one case label to another"*. In talen als C, Java of JavaScript is dat niet zo: daar loopt de uitvoer gewoon door naar de volgende case (zie *Zie verder* achteraan dit hoofdstuk). C# behoedt je hier dus voor een klassieke, moeilijk te vinden bug.
:::

### Switch op tekst

Een ``switch`` werkt niet enkel op getallen. Ook een ``string`` kan je testen, wat van pas komt bij een menu waarin de gebruiker een letter kiest:

```java
Console.WriteLine("Kies: (a)fbreken, (o)pslaan, (l)aden:");
string keuze = Console.ReadLine();

switch (keuze)
{
    case "a":
    case "A":
        Console.WriteLine("Afbreken gekozen");
        break;
    case "o":
    case "O":
        Console.WriteLine("Opslaan gekozen");
        break;
    case "l":
    case "L":
        Console.WriteLine("Laden gekozen");
        break;
    default:
        Console.WriteLine("Onbekende keuze");
        break;
}
```

Net zoals bij ``==`` is het vergelijken van tekst **hoofdlettergevoelig**. Voorzie je enkel ``case "a":`` en typt de gebruiker een hoofdletter ``A``, dan belandt hij in de ``default``. Daarom staan hier per keuze twee case-labels boven elkaar.

Wil je liever met één enkel teken werken, dan gebruik je een ``char``. De case waarden staan dan tussen apostrofs in plaats van tussen aanhalingstekens:

```java
char keuze = char.Parse(Console.ReadLine());

switch (keuze)
{
    case 'a':
        Console.WriteLine("Afbreken gekozen");
        break;
    //enz.
}
```

<!-- TODO ed.5 (review): switch expression (var result = day switch { ... }, sinds C# 8) overwegen; nu enkel via een externe blogpost-voetnoot. -->
