## While

De syntax van een while loop is eenvoudig:

```java
while (conditie) 
{
  // code zal uitgevoerd worden zolang de conditie waar is
}
```

Net als bij een ``if``-statement wordt de conditie hier uitgedrukt als een booleaanse expressie met één of meerdere relationele operatoren. **Zolang de conditie ``true`` is zal de code binnen de accolades uitgevoerd worden.** Indien de conditie reeds vanaf het begin ``false`` is dan zal de code binnen de loop nooit worden uitgevoerd.

Let goed op wat die conditie precies zegt: ze bepaalt wanneer de loop **doorgaat**, niet wanneer hij stopt. Dat lijk *miereneukerij*, maar verderop bij het controleren van gebruikersinvoer zal je zien dat net daar veel beginners de mist ingaan.

Telkens wanneer het programma aan het einde van het ``while`` codeblock komt springt het terug naar de conditie bovenaan en zal de test wederom uitgevoerd worden. Is deze weer ``true`` dan wordt de code weer uitgevoerd. Van zodra de test ``false`` is zal de code voorbij het codeblock springen en na het ``while`` codeblok doorgaan. De flowchart is duidelijk:

![While flowchart.](../assets/3_loops/while.png)<!--{width=75%}-->

Een voorbeeld van een eenvoudige while loop:

```java
int teller = 0;
while (teller < 100)
{
    teller++;
    Console.WriteLine(teller);
}
```

Zolang ``teller`` kleiner is dan 100 (``teller < 100``) zal hij met 1 verhoogd worden en op het scherm worden getoond. We krijgen met dit programma dus alle getallen van 1 tot en met 100 op het scherm onder elkaar te zien. Merk op dat het getal 100 wél nog op het scherm verschijnt. **Begrijp je waarom?** Test dit zelf!

:::{.callout-tip collapse="true"}
## Antwoord

We verhogen ``teller`` eerst (``teller++``) en tonen hem pas daarna. Schrijf de rondes even uit in een tabel:

| ``teller`` bij de test | Test ``teller < 100`` | In de loop | Op het scherm |
|:---:|:---:|:---:|:---:|
| 0 | ``true`` | wordt 1 | 1 |
| 1 | ``true`` | wordt 2 | 2 |
| ... | ... | ... | ... |
| 98 | ``true`` | wordt 99 | 99 |
| 99 | ``true`` | wordt 100 | 100 |
| 100 | ``false`` | loop stopt | niets |

Wanneer ``teller`` de waarde 99 heeft slaagt de test nog, wordt hij binnen de loop verhoogd naar 100 en getoond. Pas de ronde daarna faalt de test (``100 < 100`` is ``false``) en stopt de loop. Zo glipt 100 er dus nog net door.

Zo'n tabel uitschrijven noemen we een loop **tracen**. Loop je vast op een loop, teken dan met pen en papier de eerste twee en de laatste twee rondes uit. Dat gaat sneller dan gokken.
:::

:::{.callout-tip}
Zodra je dezelfde lijn(en) code meerdere keren onder elkaar ziet staan, is de kans groot dat je dit korter kunt schrijven met behulp van loops (of methoden, wat we in het volgende hoofdstuk zullen bespreken).

Code onder elkaar kopiëren en plakken is dus vaak een duidelijke indicator dat je loops kan gebruiken.
:::

### Niet enkel tellen

Het voorbeeld hierboven telt, en dat is niet toevallig: met een teller kan je het makkelijkst tonen hoe een loop draait. Maar een ``while`` kan evengoed een *indefinite loop* zijn, waarbij je op voorhand niet weet hoeveel iteraties er zullen volgen. Herinner je het voorbeeld uit de inleiding van dit hoofdstuk: *"Blijf getallen vragen totdat de gebruiker 666 invoert."* Dat schrijf je zo:

```java
int getal = 0;
while (getal != 666)
{
    Console.WriteLine("Geef een getal in (666 stopt):");
    getal = int.Parse(Console.ReadLine());
}
Console.WriteLine("Tot ziens!");
```

Er is hier geen teller te bespeuren. Het is de gebruiker die bepaalt hoe vaak de loop draait: misschien één keer, misschien vijftig keer. Zo'n stopwaarde (hier 666) noemen we een **sentinel**, en daar komt de naam *sentinel loop* uit de inleiding vandaan.

Merk op dat ``getal`` een waarde moet krijgen **vóór** de loop. De test staat immers bovenaan en wordt uitgevoerd nog vóór de gebruiker iets heeft kunnen intikken. Die 0 dient dus enkel om de eerste test te laten slagen.

### Complexe condities

De conditie mag uiteraard complexer zijn. Net zoals bij de ``if`` combineer je daarvoor meerdere booleaanse expressies met de **logische operators** (``&&``, ``||`` en ``!``) uit hoofdstuk 5.

Volgende ``while`` blijft draaien zolang ``getal`` niet 666 is **én** de gebruiker minder dan 10 pogingen deed:

```java
int getal = 0;
int pogingen = 0;
while (getal != 666 && pogingen < 10)
{
    Console.WriteLine("Geef een getal in (666 stopt):");
    getal = int.Parse(Console.ReadLine());
    pogingen++;
}
```

Van zodra één van de twee delen ``false`` wordt stopt de loop. Er zijn hier dus twee uitgangen: de gebruiker tikt 666 in, of hij is door zijn pogingen heen. Wil je achteraf weten welke van de twee het was, dan test je dat na de loop gewoon met een ``if``.

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

De conditie is hier letterlijk ``true`` en kan dus per definitie nooit falen. Zo'n loop stopt enkel wanneer er iets van *buiten* de conditie tussenkomt: de gebruiker sluit het venster, het programma wordt afgesloten, of de code binnenin springt er zelf uit met een ``break``. Dat laatste keyword zie je in het volgende deel, waar je meteen zal merken dat ik er niet dol op ben.

**Een bug die een oneindige loop veroorzaakt**:

```java
int teller = 0; 
while(teller<10)
{
  Console.WriteLine(teller);
  teller--; //oeps, dit had teller++ moeten zijn
}
```

**Zorg er altijd voor dat de variabele(n) die je in je testconditie gebruikt, ook effectief in de loop worden aangepast, en in de juiste richting.** Verandert die variabele niet, of gaat ze de verkeerde kant op, dan blijft de test hetzelfde resultaat geven en draait je programma eeuwig door.

:::{.callout-tip}
Zit je per ongeluk in een oneindige loop (je console blijft maar draaien of staat vast)? Geen paniek: stop je programma met de **rode stop-knop** bovenaan in Visual Studio, of pauzeer het met de **Pause/Break-knop** (soms ``Ctrl+Alt+Break``). Zo kan je rustig kijken waar je code blijft hangen.
:::

### Scope van variabelen in loops
Let er op dat de scope van variabelen bij loops zeer belangrijk is. Indien je een variabele binnen de loop definieert dan wordt deze bij elke iteratie **opnieuw aangemaakt** (en dus niet "onthouden" van de vorige ronde). Ze begint met andere woorden telkens weer met haar beginwaarde.

Stel dat we de som van de eerste 10 getallen (1+2+3+...+10) willen berekenen. Volgende poging **compileert perfect**, en toch klopt er niets van:

```java
int teller = 1;
while(teller <= 10)
{
   int som = 0;
   som = som + teller;
   Console.WriteLine(som);
   teller++;
}
```

Je zou 1, 3, 6, 10, 15 en zo verder verwachten, maar op het scherm verschijnt gewoon 1, 2, 3, 4 tot en met 10. De oorzaak: ``som`` wordt bij élke ronde opnieuw aangemaakt en dus ook telkens opnieuw op 0 gezet. Optellen bij een variabele die net daarvoor terug op 0 sprong levert nooit een som op.

Verplaats je die ``Console.WriteLine`` naar buiten de loop, dan **compileert de code zelfs niet meer**:

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

Voorgaande code zal volgende VS foutboodschap geven: *The name 'som' does not exist in the current context*. Buiten de accolades bestaat ``som`` gewoon niet meer.

Beide problemen hebben dezelfde oorzaak, en dus ook dezelfde oplossing: maak ``som`` aan **vóór** de loop. Zo overleeft ze alle iteraties en houdt ze haar waarde tussen de rondes bij:

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

![Links staat de declaratie binnen de accolades van de loop, rechts ervoor. De balk toont hoe ver de scope van ``som`` reikt.](../assets/3_loops/scopeloop.png)<!--{width=100%}-->

Wat bevat ``teller`` na afloop van deze loop? Niet 10, maar 11. De loop stopt pas wanneer de test faalt, en daarvoor moet ``teller`` eerst nog één keer te ver gaan. Ook ``teller`` blijft na de loop trouwens gewoon bestaan, net omdat hij erbuiten werd aangemaakt.

<!-- \newpage -->

## Do while

In tegenstelling tot een ``while`` loop, zal een ``do while`` loop sowieso **minstens 1 keer uitgevoerd worden**. De reden is eenvoudig: de stopconditie wordt pas na iedere iteratie gecontroleerd. Bij een ``while`` gebeurt dit net vóór dat er een nieuwe iteratie wordt gestart.

Zet je beide flowcharts naast elkaar, dan zie je waar het verschil zit: de ruit met de conditie is van plaats gewisseld.

![De ``while`` en de ``do while`` naast elkaar.](../assets/3_loops/whilevsdowhile.png)<!--{width=100%}-->

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

**Welke getallen komen hier precies op het scherm?** Tel even mee voor je verder leest.

:::{.callout-tip collapse="true"}
## Antwoord

De getallen 9 tot en met 0. Dus niet 10 tot en met 1, en ook niet 10 tot en met 0.

Herken je het patroon? Dit is exact dezelfde val als bij de eerste ``while`` van dit hoofdstuk: we passen ``i`` aan **vóór** we hem tonen. In de eerste ronde wordt 10 dus meteen 9, en die 10 krijg je nooit te zien. Onderaan gebeurt net het omgekeerde: bij ``i`` gelijk aan 1 wordt hij nog 0 en getoond, en pas dán faalt de test (``0 > 0`` is ``false``).

Wil je 10 tot en met 1 zien, zet dan ``Console.WriteLine(i);`` vóór ``i--;``.
:::

### Foute input van gebruiker met loops verwerken

Dankzij loops kunnen we nu ook eenvoudiger omgaan met foutieve input van de gebruiker. Stel dat we volgende vraag hebben gesteld aan de gebruiker:

```java
Console.WriteLine("Geef uw keuze in: a, b of c");
string input = Console.ReadLine();
```

We willen die vraag blijven stellen tot de gebruiker effectief a, b of c intikt. Denk daarvoor in twee stappen, want dit is de plek waar het bij velen fout loopt.

**Stap 1: wanneer is de invoer goed?** Dat is het makkelijkste stuk:

```java
input == "a" || input == "b" || input == "c"
```

**Stap 2: draai het om.** De conditie van een loop zegt immers wanneer je **doorgaat**, niet wanneer je stopt. Doorgaan met vragen doe je zolang de invoer *niet* goed is, dus zet je er een ``!`` voor:

```java
!(input == "a" || input == "b" || input == "c")
```

Die vorm mag je gerust zo laten staan. Wil je die ``!`` liever kwijt, dan schrijf je hetzelfde als:

```java
input != "a" && input != "b" && input != "c"
```

Zet die conditie achteraan een ``do while`` en het probleem is opgelost:

```java
string input;
do
{
  Console.WriteLine("Geef uw keuze in: a, b of c");
  input = Console.ReadLine();
}while(input != "a" && input != "b" && input != "c");
```

**Zolang (while) de gebruiker niet ``"a"``, ``"b"`` of ``"c"`` invoert zal de loop zichzelf blijven herhalen.**

:::{.callout-tip}
Dat je ``!(A || B)`` mag herschrijven als ``!A && !B`` is geen toeval. Het is een gevolg van de **Wetten van De Morgan** (ook wel *dualiteit van De Morgan* genoemd) die het verband leggen tussen de logische operatoren EN, OF en de negatie. Je zag ze al kort in hoofdstuk 5 bij de logische operators, hier zie je waarvoor ze dienen. 

Deze wetten zeggen dat (uitgedrukt even in C# voor de duidelijkheid):

* ``!(A && B )`` is hetzelfde als ``!A || !B``.
* ``!(A || B )`` is hetzelfde als ``!A && !B`` .

Pas die tweede wet toe op stap 2 hierboven en je bekomt letterlijk de ``&&``-versie die in de ``do while`` staat. Welke van beide vormen je uiteindelijk schrijft is persoonlijke smaak.
:::

#### Waarom hier een ``do while`` en geen ``while``?

Omdat de vraag sowieso minstens één keer gesteld moet worden. Probeer hetzelfde eens met een gewone ``while`` en je botst op de test die *vooraan* staat: op dat moment heeft de gebruiker nog niets ingetikt en heeft ``input`` dus nog geen zinnige waarde. Je kan dat op twee manieren omzeilen, en geen van beide is fraai.

Ofwel zet je de vraag twee keer in je code:

```java
Console.WriteLine("Geef uw keuze in: a, b of c");
string input = Console.ReadLine();
while(input != "a" && input != "b" && input != "c")
{
  Console.WriteLine("Geef uw keuze in: a, b of c");
  input = Console.ReadLine();
}
```

Ofwel geef je ``input`` een kunstmatige beginwaarde die de eerste test gegarandeerd doet slagen:

```java
string input = "";
while(input != "a" && input != "b" && input != "c")
{
  Console.WriteLine("Geef uw keuze in: a, b of c");
  input = Console.ReadLine();
}
```

De eerste versie kopieert twee lijnen code, net wat we met loops wilden vermijden. De tweede versie werkt prima (je zag ze al bij het 666-voorbeeld hierboven), maar die lege string staat er enkel om die eerste test te overleven. Bij de ``do while`` heb je geen van beide nodig, want de body draait eerst en de test volgt daarna. **Moet je code sowieso minstens één keer lopen, kies dan een ``do while``.**

Merk ook op dat we de variabele ``string input`` **voor** de ``do while`` moeten aanmaken. Zouden we die in de loop pas aanmaken dan zou de variabele niet als test kunnen gebruikt worden aan het einde van de loop. De reden? Wederom de scope van variabelen. De accolades van de ``do while`` creëren een duidelijke scope die iedere iteratie verdwijnt en terug wordt aangemaakt, inclusief dus variabelen die binnen deze accolades worden aangemaakt.

:::{.callout-important}
Ik herhaal voorgaande nog eens nadrukkelijk omdat hier vaak fouten op gemaakt worden: je ziet dat de test achteraan (``while(input...);``) buiten de accolades van de loop ligt en dus een andere scope heeft. 
:::
