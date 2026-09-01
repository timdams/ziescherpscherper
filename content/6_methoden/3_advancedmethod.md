## Geavanceerde methode-technieken

Nu we methoden in de vingers krijgen, is het tijd om naar enkele gevorderde aspecten te kijken. Je hebt vermoedelijk al door dat methoden een erg fundamenteel concept zijn van een programmeertaal en dus hoe beter we ermee kunnen werken, hoe beter. [^structdoc]

[^structdoc]: De officiële documentatie over named en optionele parameters staat op [learn.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/named-and-optional-arguments](https://learn.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/named-and-optional-arguments).

### Named parameters

Wanneer je een methode aanroept is de volgorde van je actuele parameters belangrijk: deze moeten meegegeven worden in de volgorde zoals de methode ze verwacht.

Stel dat we volgende methode hebben:

```java
static void ToonPunten(string vak, int score, string student)
{
    Console.WriteLine($"{student} behaalde {score}/20 voor {vak}");
}
```

Merk op dat de volgorde in de signatuur niet dezelfde is als de volgorde waarin de zin op het scherm komt. Een correcte aanroep ziet er zo uit:

```java
ToonPunten("Programmeren", 14, "Steven");
```

::: {.console}
```text
Steven behaalde 14/20 voor Programmeren
```
:::

Draai je die twee strings per ongeluk om, dan compileert je code nog steeds. Het zijn immers allebei ``string``-waarden:

```java
ToonPunten("Steven", 14, "Programmeren");
```

::: {.console}
```text
Programmeren behaalde 14/20 voor Steven
```
:::

Geen enkele foutboodschap, wel een verkeerd resultaat.

Met behulp van **named parameters** kan je expliciet aangeven welke actuele parameter aan welke formele parameter moet meegegeven worden. Je schrijft daarvoor de naam van de parameter, gevolgd door een dubbelpunt en de waarde:

```java
ToonPunten(vak: "Programmeren", score: 14, student: "Steven");
```

Op deze manier maakt de volgorde niets meer uit. Volgende twee aanroepen doen exact hetzelfde als die hierboven:

```java
ToonPunten(student: "Steven", score: 14, vak: "Programmeren");
ToonPunten(score: 14, student: "Steven", vak: "Programmeren");
```

**De volgorde mag pas volledig door elkaar wanneer je élke parameter een naam geeft.**

<!-- \newpage -->

#### Named en unnamed mixen: volgorde wél belangrijk

Je mag ook een combinatie gebruiken van named en gewone parameters, maar **dan moet elke named parameter op zijn eigen plaats blijven staan**: de plaats die hij in de methode-signatuur inneemt. Je verbetert hiermee de leesbaarheid van je code, maar krijgt niet het voordeel van een eigen volgorde te hanteren. Enkele **geldige** voorbeelden:

```java
ToonPunten("Programmeren", 14, student: "Steven");
ToonPunten(vak: "Programmeren", 14, student: "Steven");
```

Enkele **niet geldige** voorbeelden:

```java
ToonPunten(student: "Steven", "Programmeren", 14);
ToonPunten("Programmeren", student: "Steven", 14);
```

In beide gevallen staat ``student`` niet op de derde plaats, terwijl er daarna nog naamloze parameters volgen. De compiler antwoordt met *Named argument 'student' is used out-of-position but is followed by an unnamed argument*.

<!-- \newpage -->

### Optionele parameters

Soms wil je dat een methode een standaardwaarde voor een parameter gebruikt indien de programmeur in z'n aanroep geen waarde meegaf. Dat kan met behulp van zogenaamde **optionele of default parameters**. Je geeft aan dat een parameter optioneel is door deze een default waarde te geven in de methode-signatuur. Deze waarde zal dan gebruikt worden indien de parameter geen waarde van de aanroeper heeft gekregen.

Let op: **optionele parameters worden steeds achteraan de parameterlijst van de methode geplaatst**.

In het volgende voorbeeld maken we een methode die een factuurlijn toont. De laatste twee parameters (``korting`` en ``btw``) zijn optioneel, want ze krijgen met de toekenningsoperator een default waarde:

```java
static void ToonFactuur(string klant, int korting = 0, int btw = 21)
{
    Console.WriteLine($"Factuur voor {klant}: {korting}% korting, {btw}% btw");
}
```

Wanneer nu een parameter niet wordt meegegeven, dan zal deze default waarde in de plaats gebruikt worden:

```java
ToonFactuur("Tim", 10, 6);
ToonFactuur("Tim", 10);   //btw zal 21 zijn
ToonFactuur("Tim");       //korting zal 0 zijn en btw 21
```

De inhoud van de parameters wordt bij iedere aanroep:

|   | klant  | korting   | btw  |
|-----|-----|------|---|
| Lijn 1  | "Tim"  | 10  | 6  |
| Lijn 2  | "Tim"  | 10  | 21  |
| Lijn 3  | "Tim"  | 0   | 21  |

**Je mag de optionele parameters enkel van achter naar voor weglaten.** Stel dat je een boek verkoopt: daarop geldt 6% btw, en je geeft geen korting. De verleiding is dan groot om te schrijven:

```java
ToonFactuur("Tim", 6);
```

Deze lijn compileert zonder één klacht, want ``6`` is een geldige ``int``. Alleen komt die 6 in ``korting`` terecht en niet in ``btw``:

::: {.console}
```text
Factuur voor Tim: 6% korting, 21% btw
```
:::

Met named parameters kunnen we dit omzeilen. Zo blijft ``korting`` wél op zijn default staan:

```java
ToonFactuur("Tim", btw: 6);
```

::: {.console}
```text
Factuur voor Tim: 0% korting, 6% btw
```
:::

![Zonder naam landt de ``6`` in ``korting``. Met ``btw: 6`` blijft ``korting`` op zijn default waarde staan.](../assets/4_methoden/optioneel.png)

:::{.callout-warning}
Fouten met optionele parameters zijn zelden compilerfouten. Je code draait, en je merkt het pas wanneer de output niet klopt. Heeft een methode meerdere optionele parameters van hetzelfde type, gebruik dan hun naam.
:::

<!-- \newpage -->

### Method overloading

Method overloading wil zeggen dat je een **methode met dezelfde naam** meerdere keren definieert, *maar telkens met een andere parameterlijst qua datatype en/of aantal*. De compiler zal dan zelf bepalen welke versie moet aangeroepen worden, gebaseerd op het aantal en type actuele parameters dat je meegeeft.

Herinner je de methode ``Verdubbel`` van bij Stagiair Steven. Die werkte enkel met een ``int``. We kunnen daar nu versies naast zetten voor andere types:

```java
static int Verdubbel(int getal)
{
    return getal * 2;
}

static double Verdubbel(double getal)
{
    return getal * 2;
}

static string Verdubbel(string tekst)
{
    return tekst + tekst;
}
```

Afhankelijk van de aanroep zal dus de ene of de andere versie uitgevoerd worden:

```java
Console.WriteLine(Verdubbel(21));
Console.WriteLine(Verdubbel(2.5));
Console.WriteLine(Verdubbel("ha"));
```

::: {.console}
```text
42
5
haha
```
:::

![Het type van je actuele parameter bepaalt welke versie van ``Verdubbel`` uitgevoerd wordt.](../assets/4_methoden/overloading.png)

:::{.callout-important}
Merk op dat de drie versies een **verschillend returntype** hebben. Dat mag. Wat niet mag is twee methoden die enkel in returntype verschillen:

```java
static int Verdubbel(int getal)
{
    return getal * 2;
}

static double Verdubbel(int getal) //MAG NIET
{
    return getal * 2.0;
}
```

De parameterlijst is hier identiek, en dat is net waar de compiler naar kijkt. Je krijgt *already defines a member called 'Verdubbel' with the same parameter types*.
:::

Overloaden op het **aantal** parameters kan evengoed. Zo geven we ``ToonTitel`` uit het begin van dit hoofdstuk een tweede versie die geen parameters verwacht en gewoon de standaardtitel gebruikt:

```java
static void ToonTitel(string naam)
{
    Console.WriteLine($"*** {naam} ***");
}

static void ToonTitel()
{
    ToonTitel("Timsoft XP");
}
```

Dit is precies wat er bij ``Console.WriteLine()`` gebeurt: er bestaat een versie die niets verwacht en die een lege lijn toont.

:::{.callout-tip}
Overload enkel wanneer je versies **hetzelfde** doen met andere input, zoals ``Verdubbel`` hierboven. Je kan perfect een ``BerekenOpp(lengte, breedte)`` voor een rechthoek naast een ``BerekenOpp(straal)`` voor een cirkel zetten, en dat compileert netjes, maar wie jouw code leest moet dan raden welke van de twee berekeningen er bedoeld wordt.
:::

<!-- \newpage -->

#### Betterness rule

:::{.callout-note}
**Voor de gevorderden.** Deze sectie (inclusief de tabel verderop) is verdiepingsstof. Je hebt ze niet nodig om zelf overloaded methoden te schrijven. Sla je ze nu over, dan mis je niets essentieels: kom gerust later eens terug... Maar terugkomen, hé!
:::

Soms past je actuele parameter op geen enkele versie exact, maar zou hij wel naar meerdere types omgezet kunnen worden. De compiler kiest dan tijdens de **overload resolution** de best *passende* versie, en daarvoor hanteert hij de **betterness rule**.

Neem opnieuw ``Verdubbel``, deze keer enkel met de ``int``- en de ``double``-versie:

```java
Console.WriteLine(Verdubbel(21));    //int-versie
Console.WriteLine(Verdubbel(2.5));   //double-versie
Console.WriteLine(Verdubbel(2.5f));  //double-versie
```

Die laatste lijn geeft een ``float`` mee en daar bestaat geen versie voor. Een ``float`` gaat wel impliciet naar een ``double``, maar niet naar een ``int``, dus wint de ``double``-versie.

Volgende tabel geeft de betterness rule weer. In de linkse kolom staat het datatype van de parameter die wordt meegegeven. De rechtse kolom toont welk datatype de parameter in de methode-signatuur meer voorkeur heeft van links naar rechts indien dus het originele type niet beschikbaar is.

| Parameter | Van meeste voorkeur  naar minste |
| ---------- | ---------------------------- | 
| ``byte`` | short, ushort, int, uint, long, ulong, float, double, decimal |
| ``sbyte`` | short, int, long, float, double, decimal |
| ``short`` | int, long, float, double, decimal |
| ``ushort`` | int, uint, long, ulong, float, double, decimal |
| ``int`` | long, float, double, decimal |
| ``uint`` | long, ulong, float, double, decimal |
| ``long`` | float, double, decimal |
| ``ulong`` | float, double, decimal |
| ``float`` | double |
| ``char`` | ushort, int, uint, long, ulong, float, double, decimal |

Als je bijvoorbeeld een parameter van het type ``int`` meegeeft bij een methode-aanroep (eerste kolom), dan zal een methode waar de parameter een ``long`` verwacht geprefereerd worden boven een methode die voor diezelfde parameter een ``float`` verwacht, enz.

<!-- \newpage -->

#### Wanneer de compiler niet kan kiezen

Stel dat we twee versies hebben die elkaars spiegelbeeld zijn:

```java
static void ToonPrijs(int bedrag, double korting) //versie A
{
    Console.WriteLine($"A: {bedrag} euro, {korting}% korting");
}

static void ToonPrijs(double bedrag, int korting) //versie B
{
    Console.WriteLine($"B: {bedrag} euro, {korting}% korting");
}
```

Vier aanroepen geven vier verschillende resultaten:

| Aanroep | Resultaat |
| --------- | ----------- |
| ``ToonPrijs(100, 5.5)`` | versie A wordt uitgevoerd |
| ``ToonPrijs(99.9, 5)`` | versie B wordt uitgevoerd |
| ``ToonPrijs(100, 5)`` | fout: *the call is ambiguous* |
| ``ToonPrijs(99.9, 5.5)`` | fout: geen enkele versie past |

De eerste twee lijnen lijken misschien op een moeilijke keuze, maar dat zijn ze niet. Bij ``ToonPrijs(100, 5.5)`` valt versie B meteen af: ``5.5`` is een ``double`` en die past niet in de ``int`` die B als tweede parameter verwacht. Er blijft dus maar één kandidaat over. Bij ``ToonPrijs(99.9, 5)`` gebeurt net hetzelfde met versie A.

Bij de derde lijn passen A en B allebei even goed: ``100`` en ``5`` zijn allebei ints, en een ``int`` gaat impliciet naar een ``double``. De compiler kiest dan niet en meldt *the call is ambiguous between the following methods or properties*. Jij moet hem dus helpen, bijvoorbeeld door één van beide waarden expliciet als ``double`` te schrijven:

```java
ToonPrijs(100, 5.0);   //versie A
ToonPrijs(100.0, 5);   //versie B
```

Bij de vierde lijn past er helemaal niets: geen enkele versie aanvaardt twee ``double``-waarden. De compiler klaagt over de eerste parameter die niet converteert:

![Geen enkele versie aanvaardt een ``double`` als eerste parameter, dus daar stopt de compiler.](../assets/4_methoden/overl.png)

:::{.callout-important}
Er bestaat geen regel die zegt dat bij twijfel de eerste parameter de doorslag geeft. Passen twee versies even goed, dan kiest de compiler niet: je krijgt een foutboodschap en moet zelf duidelijk maken welke versie je bedoelt.
:::

<!-- TODO ed.5 (review): korte sectie "Wat met out en ref?" toevoegen met 1 voorbeeld via int.TryParse + verwijzing naar appendix. Studenten zien out continu in IntelliSense. -->
<!-- TODO ed.5 (review): expression-bodied methoden (=> ...) kort tonen; studenten zien deze syntax in nieuwere VS-templates. -->
<!-- TODO ed.5 (review): tuples als returntype ((int, string) Method()) als extra-callout; modern alternatief voor out-parameters. -->

## Methoden debuggen met step-in

Herinner je je dat ik in hoofdstuk 4 debuggen uitlegde en zei dat we één knopje later gingen bekijken? Wel die tijd is nu gekomen. Tijd om de **step in** knop toe te lichten.

![Je vindt deze knop bovenaan in je menu wanneer je in debug-modus bent](../assets/4_methoden/stepin.png)

Wanneer je een breakpoint zet in je code en in debugmodus komt dan kan je doorheen je code *stappen*, wat je hopelijk al geregeld hebt gedaan. Het nadeel was dat je niet **in** een methode ging wanneer je daar *over stapte*. Wel, met de "step in" knop kan je dat nu wel. Wanneer je aan een lijn met een **eigen geschreven** methode komt dan zorgt deze knop ervoor dat je in de methode gaat en vervolgens daar verder kunt stappen over de verschillende lijnen code.

![Met *step over* draait ``Verdubbel`` wel, maar spring je naar de volgende lijn van ``Main``. Met *step in* kom je in de methode zelf terecht.](../assets/4_methoden/stepinvsover.png)

Het klinkt simpel, maar oefen het toch best een paar keer!
