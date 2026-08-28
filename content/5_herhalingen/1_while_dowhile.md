## While

De syntax van een while loop is eenvoudig:

```java
while (conditie) 
{
  // code zal uitgevoerd worden zolang de conditie waar is
}
```

Net als bij een ``if``-statement wordt de conditie hier uitgedrukt als een booleaanse expressie met één of meerdere relationele operatoren. **Zolang de conditie ``true`` is zal de code binnen de accolades uitgevoerd worden.** Indien de conditie reeds vanaf het begin ``false`` is dan zal de code binnen de loop nooit worden uitgevoerd.

Telkens wanneer het programma aan het einde van het ``while`` codeblock komt springt het terug naar de conditie bovenaan en zal de test wederom uitgevoerd worden. Is deze weer ``true`` dan wordt de code weer uitgevoerd. Van zodra de test ``false`` is zal de code voorbij het codeblock springen en na het ``while`` codeblok doorgaan. De flowchart is duidelijk:

![While flowchart.](../assets/3_loops/while.png)<!--{width=75%}-->

Een voorbeeld van een eenvoudige while loop:

```java
int tellertje = 0;
while (tellertje < 100)
{
    tellertje++;
    Console.WriteLine(tellertje);
}
```

Zolang ``tellertje`` kleiner is dan 100 (``tellertje < 100``) zal het met 1 verhoogd worden en op het scherm worden getoond. We krijgen met dit programma dus alle getallen van 1 tot en met 100 op het scherm onder elkaar te zien. Merk op dat het getal 100 wél nog op het scherm verschijnt. **Begrijp je waarom?** Test dit zelf!

:::{.callout-tip collapse="true"}
## Antwoord

We verhogen ``tellertje`` eerst (``tellertje++``) en tonen het pas daarna. Wanneer ``tellertje`` de waarde 99 heeft, slaagt de test (``99 < 100``), wordt het binnen de loop verhoogd naar 100 en getoond. Pas bij de volgende ronde faalt de test (``100 < 100`` is ``false``) en stopt de loop. Zo glipt 100 er dus nog net door.
:::

:::{.callout-tip}
Zodra je dezelfde lijn(en) code meerdere keren onder elkaar ziet staan, is de kans groot dat je dit korter kunt schrijven met behulp van loops (of methoden, wat we in het volgende hoofdstuk zullen bespreken).

Code onder elkaar kopiëren en plakken is dus vaak een duidelijke indicator dat je loops kan gebruiken.
:::

### Complexe condities

Uiteraard mag de conditie waaraan een loop moet voldoen complexer zijn door middel van de relationele operators. 

Volgende ``while`` bijvoorbeeld zal uitgevoerd worden zolang ``teller`` groter is dan 5 én de variabele ``naam`` van het type ``string`` niet gelijk is aan "tim":

```java
while(teller > 5 && naam != "tim")
{
  //Keep repeating
}
```

### Oneindige loops

Indien de loop-conditie nooit ``false`` wordt dan heb je een oneindige loop gemaakt. Soms is dit gewenst gedrag. Maar vaker is dit een bug en zal je dit moeten debuggen.

Volgende twee voorbeelden tonen dit:

Een **bewust oneindige loop**:

```java
while(true)
{
  //"To infinity and beyond!"
}
```

**Een bug die een oneindige loop veroorzaakt**:

```java
int teller = 0; 
while(teller<10)
{
  Console.WriteLine(teller);
  teller--; //oeps, dit had teller++ moeten zijn
}
```

:::{.callout-tip}
Zorg er altijd voor dat de variabele(n) die je in je testconditie gebruikt, ook effectief in de loop worden aangepast. Als deze in de loop niet verandert dan zal ook de test-conditie dezelfde blijven en heb je dus een oneindige loop gemaakt.
:::

:::{.callout-tip}
Zit je per ongeluk in een oneindige loop (je console blijft maar draaien of staat vast)? Geen paniek: stop je programma met de **rode stop-knop** bovenaan in Visual Studio, of pauzeer het met de **Pause/Break-knop** (soms ``Ctrl+Alt+Break``). Zo kan je rustig kijken waar je code blijft hangen.
:::

### Scope van variabelen in loops
Let er op dat de scope van variabelen bij loops zeer belangrijk is. Indien je een variabele binnen de loop definieert dan wordt deze bij elke iteratie **opnieuw aangemaakt** (en dus niet "onthouden" van de vorige ronde). Ze begint met andere woorden telkens weer met haar beginwaarde.
Volgende code toont bijvoorbeeld **foutief** hoe je de som van de eerste 10 getallen (1+2+3+...+10) zou maken:

```java
int teller = 1;
while(teller <= 10)
{
   int som = 0;
   som = som+teller;
   teller++;
}
Console.WriteLine(som); //deze lijn zal een fout genereren
```

Voorgaande code zal volgende VS foutboodcshap geven: *The name 'som' does not exist in the current context*.

De **correcte** manier om dit op te lossen is te beseffen dat de variabele ``som`` enkel binnen de accolades van de while-loop gekend is. Op de koop toe wordt deze steeds terug op 0 gezet en er kan dus geen som van alle teller-waarden bijgehouden worden. Hier de oplossing:

```java
int teller = 1;
int som = 0;
while(teller <= 10)
{
   som = som+teller;
   teller++;
}
Console.WriteLine(som); 
```

<!-- \newpage -->

## Do while

In tegenstelling tot een ``while`` loop, zal een ``do while`` loop sowieso **minstens 1 keer uitgevoerd worden**. De reden is eenvoudig: de stopconditie wordt pas na iedere iteratie gecontroleerd. Bij een ``while`` gebeurt dit net vóór dat er een nieuwe iteratie wordt gestart.

Vergelijk volgende flowchart van de ``do while`` met die van de ``while``:

![De ``do while`` flowchart.](../assets/3_loops/dowhile.png)<!--{width=63%}-->

De syntax van een ``do while`` is eveneens eenvoudig:

```java
do{
     //code zal uitgevoerd worden zolang de conditie waar is
} while (conditie);
```

:::{.callout-warning}
Merk op dat achteraan de testconditie een puntkomma na het ronde haakje staat. **Deze vergeten is een véél voorkomende fout. Bij een while is dit niet!**
:::

<!-- \newpage -->

Het volgende eenvoudige aftelprogramma toont de werking van de ``do while`` loop:

```java
int i = 10;
do
{
    i--;
    Console.WriteLine(i);
} while (i > 0);
```

Begrijp je wat dit programma zal doen? Inderdaad, dit zal alle getallen van 9 tot en met 0 onder elkaar op het scherm zetten.

### Foute input van gebruiker met loops verwerken

Dankzij loops kunnen we nu ook eenvoudiger omgaan met foutieve input van de gebruiker. Stel dat we volgende vraag hebben gesteld aan de gebruiker:

```java
Console.WriteLine("Geef uw keuze in: a, b of c");
string input = Console.ReadLine();
```

Met een loop kunnen we nu deze vragen blijven stellen tot de gebruiker een geldige input (a,b of c) geeft:

```java
string input;
do
{
  Console.WriteLine("Geef uw keuze in: a, b of c");
  input = Console.ReadLine();
}while(input != "a" && input != "b" && input != "c");
```

**Zolang (while) de gebruiker niet ``"a"``, ``"b"`` of ``"c"`` invoert zal de loop zichzelf blijven herhalen.**

Merk op dat we de variabele ``string input`` **voor** de `` do while`` moeten aanmaken. Zouden we die in de loop pas aanmaken dan zou de variabele niet als test kunnen gebruikt worden aan het einde van de loop. De reden? Wederom de scope van variabelen. De accolades van de ``do while`` creëren een duidelijke scope die iedere iteratie verdwijnt en terug wordt aangemaakt, inclusief dus variabelen die binnen deze accolades worden aangemaakt.

:::{.callout-important}
Ik herhaal voorgaande nog eens nadrukkelijk omdat hier vaak fouten op gemaakt worden: je ziet dat de test achteraan (``while(input...);``) buiten de accolades van de loop ligt en dus een andere scope heeft. 
:::

:::{.callout-tip}
De booleaanse expressie ``input != "a" && input != "b" && input != "c"`` kan ook anders geschreven met dezelfde interne logica (en dus werking) als:  

```java
!(input == "a" || input == "b" || input == "c")
```

Sommige mensen prefereren deze tweede vorm. Maar dat is persoonlijke smaak.
:::

:::{.callout-tip}

Voorgaande logica is een gevolg van de **Wetten van De Morgan** (ook wel *dualiteit van De Morgan* genoemd) die het verband leggen tussen de logische operatoren EN, OF en de negatie. Je zag ze al kort in hoofdstuk 5 bij de logische operators, hier zie je waarvoor ze dienen. 

Deze wetten zeggen dat (uitgedrukt even in C# voor de duidelijkheid):

* ``!(A && B )`` is hetzelfde als ``!A || !B``.
* ``!(A || B )`` is hetzelfde als ``!A && !B`` .

Zie je hoe ik de tweede wet gebruikt heb in het voorgaande voorbeeld om de alternatieve logica te vinden?
:::

