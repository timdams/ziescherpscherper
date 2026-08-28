## Relationele en logische operators

Om beslissingen te kunnen nemen in C# hebben we een nieuw soort operators nodig. Operators waarmee we kunnen testen of iets waar of niet waar is. Met C# kun je een actie uitvoeren als een voorwaarde waar is, en iets anders doen (of een stap overslaan) als de voorwaarde niet waar is. 

Dit doen we met de zogenaamde **relationele operators** en **logische operators**.

### Booleaanse expressies

**Een booleaanse expressie is een stuk C# code dat een ``bool`` als resultaat zal geven.** De logische en relationele operators die ik hierna bespreek zijn operators die een ``bool`` teruggeven. Ze zijn zogenaamde test-operators: ze testen of iets waar is of niet.

### Relationele operators

Relationele operators zijn het hart van booleaanse expressies. En guess what, je kent die al van uit het lager onderwijs. Enkel de "gelijk aan" ziet er iets anders uit dan we gewoon zijn uit onze lessen wiskunde:

| Operator| Betekenis| 
| ---------| ---------|
| ``>`` |groter dan| 
| ``<`` |kleiner dan| 
| ``==`` |gelijk aan | 
| ``!=`` |niet gelijk aan| 
| ``<=`` |kleiner dan of gelijk aan| 
| ``>=`` |groter dan of gelijk aan| 

Deze operators hebben steeds twee operanden nodig en geven **een bool als resultaat terug**. Beide operanden moeten van een **vergelijkbaar datatype** zijn: je kan geen appelen met peren vergelijken (bv. een ``string`` met een ``int``). Numerieke types onderling mag je wél vergelijken, ook als ze niet exact hetzelfde zijn: ``int`` met ``double`` werkt, want C# zet de ``int`` automatisch om naar een ``double`` voor de vergelijking.

Daar dit operators zijn kan je deze dus gebruiken in eender welke expressie. Het resultaat van de expressie ``12 > 6`` zal ``true`` als resultaat hebben daar 12 groter is dan 6. Eenvoudig toch.

:::{.callout-tip}
We weten al dat je het resultaat van een expressie altijd in een variabele kunt bewaren. Ook bij het gebruik van relationele operators kan dat dus:

```java
bool isKleiner = 65 > 67 ;
Console.WriteLine(isKleiner);
```

Er zal `false` als output op het scherm verschijnen.
:::

:::{.callout-warning}
Er is een groot verschil tussen de ``=`` operator en de ``==`` operator. De eerste is de toekenningsoperator en zal de rechtse operand aan de linkse operand toewijzen. De tweede zal de linkse met de rechtse operand op gelijkheid vergelijken en een ``bool`` teruggeven.
:::

![``=`` zet de rechtse waarde in de linkse variabele. ``==`` vergelijkt beide en geeft een ``bool`` terug.](../assets/2_beslissingen/toekennenvergelijken.png)<!--{width=90%}-->

#### Strings vergelijken

Op een ``string`` werken ``==`` en ``!=`` gewoon. Ze vergelijken de tekst teken per teken en zijn **hoofdlettergevoelig**:

```java
bool test1 = "Tim" == "Tim";   //true
bool test2 = "Tim" == "tim";   //false, de hoofdletter T verschilt
```

De operators ``<``, ``>``, ``<=`` en ``>=`` werken dan weer níét op strings. ``"appel" < "peer"`` geeft een compilerfout: C# weet niet wat "kleiner" zou moeten betekenen voor tekst.

#### Kommagetallen vergelijken

In hoofdstuk 4 zag je al dat ``Console.WriteLine(0.1 + 0.2);`` het getal ``0,30000000000000004`` op je scherm zet. Een ``double`` bewaart kommagetallen binair, en dat gaat niet altijd exact. Dat heeft rechtstreeks gevolgen voor onze relationele operators:

```java
bool gelijk = (0.1 + 0.2) == 0.3;   //false!
```

Gebruik ``==`` dus nooit op ``double``-waarden. Wil je weten of twee kommagetallen zo goed als gelijk zijn, test dan of hun verschil klein genoeg is:

```java
double verschil = Math.Abs((0.1 + 0.2) - 0.3);
bool gelijk = verschil < 0.0001;
```

Bij ``int`` speelt dit niet: gehele getallen worden wel exact bewaard.

#### Ketenvergelijkingen

Uit de wiskundeles ken je de notatie *1 < x < 10*. In C# geeft die een compilerfout. C# werkt zo'n expressie namelijk van links naar rechts af: ``1 < x`` geeft een ``bool``, en die ``bool`` kan hij vervolgens niet met ``10`` vergelijken.

Zo'n test splits je in twee aparte vergelijkingen, die je daarna samenvoegt met de logische EN-operator uit de volgende sectie:

```java
bool inBereik = x > 1 && x < 10;
```

### Logische operators

Vaak wil je meer complexe keuzes maken, zoals :*"ga verder indien je hongerig bent EN je genoeg geld bijhebt"*. Dit doen we met de zogenaamde **logische operators**. 

Er zijn 3 (booleaanse) operators die je hiervoor kunt gebruiken:

* ``&&`` (*EN*) : Geeft enkel ``true`` als beide operanden ``true`` zijn
* ``||`` (*OF*) : Geeft ``true`` indien minstens 1 operand ``true`` is
* ``!`` (*NIET*) : Inverteert de waarde van de expressie (``true`` wordt ``false`` en omgekeerd)

In een **waarheidstabel** zet je alle mogelijke combinaties van twee operanden onder elkaar. De EN-kolom is ``&&``, de OF-kolom is ``||``:

| ``a`` | ``b`` | EN | OF |
| --- | --- | --- | --- |
| ``false`` | ``false`` | ``false`` | ``false`` |
| ``false`` | ``true`` | ``false`` | ``true`` |
| ``true`` | ``false`` | ``false`` | ``true`` |
| ``true`` | ``true`` | ``true`` | ``true`` |



De logische operators geven ook steeds een ``bool`` terug **maar verwachten enkel operanden van het type ``bool``**. Als je dus schrijft ``true || false``  zal het resultaat ``true`` zijn.

De *EN* en *OF* operators verwachten 2 operanden. Maar de *NIET*-operator verwacht maar 1 operand.

Aangezien onze relationele operators ``bool`` als resultaat geven, kunnen we dus de uitvoer van deze operators gebruiken als operanden voor de logische operators. We gebruiken hierbij haakjes om zeker de volgorde juist te krijgen:

```java
bool result = (4 < 6) && ("ja" == "nee");
```

De haakjes zorgen ervoor dat eerste die delen worden berekend. Voorgaande zal dus in een tussenstap (die jij niet ziet) tijdens de uitvoer er als volgt uitzien:

```java
bool result = true && false;
```

Vervolgens wordt dan de logische EN getest en krijgen we finaal ``false`` in ``result``.

#### Niet-operator

Je kan de niet-operator voor een expressie zetten om het resultaat van de expressie te inverteren.  Bijvoorbeeld:

```java
bool result = !(0==2) 
```

Eerst wordt weer het resultaat tussen de haakjes berekend. Dit geeft ``false`` (daar 0 niet gelijk is aan 2). Vervolgens passen we de NIET-operator toe op dit resultaat en zal er dus  ``true`` bewaard worden.

Merk op dat we deze code ook kunnen schrijven als:

```java
bool result = (0!=2) 
```

:::{.callout-warning}
Alhoewel we voorgaande ook zonder haakjes kunnen schrijven, raad ik dit af. Haakjes zorgen ervoor dat je code leesbaarder wordt. Maar nog belangrijker: het maakt de volgorde van bewerkingen explicieter. Als je niet zeker weet welke operator voorrang heeft, kun je haakjes gebruiken om de juiste volgorde af te dwingen. Dit helpt je om logische fouten te voorkomen die kunnen ontstaan door verkeerde veronderstellingen.
:::

:::{.callout-tip}
## De wetten van De Morgan

Een ``!`` die voor een samengestelde expressie staat kan je ook naar binnen brengen. De **wetten van De Morgan** zeggen hoe dat moet:

* ``!(A && B)`` is hetzelfde als ``!A || !B``
* ``!(A || B)`` is hetzelfde als ``!A && !B``

Let op dat de EN daarbij in een OF verandert, en omgekeerd. De expressie ``!(leeftijd > 18 && heeftKaart)`` mag je dus herschrijven als ``leeftijd <= 18 || !heeftKaart``. In hoofdstuk 6 gebruiken we deze wetten om de test van een loop leesbaarder te maken.
:::

#### Kortsluiten

C# werkt een logische expressie van links naar rechts af, en stopt van zodra het antwoord al vastligt. Dat heet **kortsluiten** (*short-circuit evaluation*).

Bij ``&&`` moeten beide operanden ``true`` zijn. Is de linkse al ``false``, dan kan het resultaat nooit meer ``true`` worden en wordt de rechtse operand gewoon niet meer uitgevoerd:

```java
bool test = (5 > 10) && (Console.ReadLine() == "ja");
```

De ``Console.ReadLine()`` wordt hier nooit uitgevoerd: ``5 > 10`` is al ``false``, dus staat het antwoord vast. Je programma zal dus geen input vragen aan de gebruiker.

![Is de linkse test al ``false``, dan gaat de slagboom dicht en wordt de rechtse test niet meer uitgevoerd.](../assets/2_beslissingen/kortsluiten.png)<!--{width=95%}-->

Bij ``||`` gebeurt hetzelfde: is de linkse operand al ``true``, dan is er al minstens één operand waar en wordt de rechtse niet meer getest.

#### Volgorde van bewerkingen

De volgorde van bewerkingen wordt nu belangrijk[^volgorde]! In C# hebben de operatoren die we al kennen volgende volgorde:

1. **Logische NIET: ``!``**
2. Delen en vermenigvuldigen: ``*``, ``/``, ``%``
3. Optellen en aftrekken: ``+``, ``-``
4. **Relationele operators: ``<``, ``<=``, ``>``, ``>=``**
5. **Gelijkheid: ``==``, ``!=``**
6. **Logische EN: ``&&``**
7. **Logische OF: ``||``**

Wil je deze volgorde dus veranderen in een samengestelde expressie, dan moet je gebruik maken van haakjes.

Dat ``&&`` vóór ``||`` komt is de val waar je het vaakst zal intrappen. Volgende expressie:

```java
bool magBinnen = isLid || isStudent && heeftKaart;
```

wordt door C# gelezen als:

```java
bool magBinnen = isLid || (isStudent && heeftKaart);
```

Een lid mag dus binnen zonder kaart. Bedoelde je dat iederéén een kaart nodig heeft, dan moet je zelf haakjes zetten: ``(isLid || isStudent) && heeftKaart``.

![Met dezelfde waarden geeft de linkse groepering ``true`` en de rechtse ``false``.](../assets/2_beslissingen/voorrang.png)<!--{width=95%}-->

Dezelfde val zit bij ``!``, die bovenaan de lijst staat: ``!isKlaar == isBezig`` betekent ``(!isKlaar) == isBezig`` en dus niet ``!(isKlaar == isBezig)``.

[^volgorde]: Bekijk zeker de tabel op [docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators) waar de volgorde van alle operators wordt beschreven.

### Test jezelf

Wat zal de uitkomst zijn van volgende expressies? Let op: twee ervan compileren niet eens. Kan je zien welke, en waarom?

* ``3>2 ``
* ``4!=4`` 
* ``4<5 && 4<3``
* ``"a"=="A" || 4>=3``
* ``(3==3 && 2<1) || 5!=4``
* ``1 < 5 < 10``
* ``!(4<=3)``
* ``true || false``
* ``!true && false``
* ``"appel" < "peer"``

:::{.callout-tip collapse="true"}
## Antwoorden

* ``3>2`` -> ``true``
* ``4!=4`` -> ``false``
* ``4<5 && 4<3`` -> ``false`` (``true && false``)
* ``"a"=="A" || 4>=3`` -> ``true`` (``false || true``, let op: hoofdlettergevoelig)
* ``(3==3 && 2<1) || 5!=4`` -> ``true`` (``(true && false) || true``)
* ``1 < 5 < 10`` -> **compilerfout**. ``1 < 5`` geeft ``true``, en die ``bool`` kan niet met ``10`` vergeleken worden. Schrijf ``1 < 5 && 5 < 10``.
* ``!(4<=3)`` -> ``true`` (``!false``)
* ``true || false`` -> ``true``
* ``!true && false`` -> ``false`` (``false && false``)
* ``"appel" < "peer"`` -> **compilerfout**. Op strings werken enkel ``==`` en ``!=``, niet ``<`` of ``>``.
:::
