<!--# Hoofdstuk 1-->

::: {.vooraf}
- [Let op]{.let-op} Schakel IntelliCode en Copilot uit voor je begint ([hoe?](https://timdams.github.io/ziescherpscherper/content/0_intro/1_killai.html)).
- Maak per oefening een nieuwe solution aan, tenzij de opgave zegt dat je in een bestaande verderwerkt. Zo kan je later makkelijk terugkeren naar een specifieke oefening.
- Kijk pas naar de oplossing als je helemaal klaar bent, en vergelijk dan kritisch. Twijfel je bij het vergelijken met de modeloplossing, vraag het dan aan je lector.
- Zit je vast bij een oefening? Klik onder de opgave op **Coach** en kopieer de prompt naar een nieuw gesprek in ChatGPT, Copilot Chat of Claude, in je browser (Copilot in Visual Studio blijft uit). Die A.I. kent de oefening en weet welke leerstof je al gezien hebt. Hij geeft je geen code en geen oplossing, enkel vragen en hints.
- Vertel de coach wat je al hebt en waar je vastzit, en plak gerust je code of de foutmelding erbij. Hij kijkt je code ook na op de boetes. Begin voor elke oefening een nieuw gesprek.
- In de voorbeelduitvoer begint gebruikersinvoer met `>`. Die `>` typ je zelf niet: hij toont enkel wat de gebruiker intypt.
:::

<!--# Hoofdstuk 1-->




# Wie ben ik (*Essential*) {#h01-wie-ben-ik}

Schrijf een applicatie die onder elkaar volgende informatie op het scherm toont, gebruikmakend van ``WriteLine()``:

* Je voornaam en achternaam.
* De stad waar je woont.
* Je leeftijd.

Voorbeeld van de output:

```text
Vincent Van Camp
Boom
38
```

**Daarna: maak je programma stuk.** Werkt je programma, breek het dan bewust, telkens op één plek. Kijk wat Visual Studio doet, schrijf de foutboodschap uit de *Error List* over en herstel de fout voor je aan de volgende begint:

1. Haal de puntkomma achter je eerste lijn weg.
2. Schrijf ``Writeline`` (met een kleine ``l``) in plaats van ``WriteLine``.
3. Haal het laatste aanhalingsteken rond je stad weg.

Druk bij minstens één van de drie toch op de groene startknop, en lees goed wat Visual Studio je dan vraagt voor je iets aanklikt.

::::{.callout-caution collapse="true" title="Oplossing"}
 
```java
Console.WriteLine("Vincent Van Camp");
Console.WriteLine("Boom");
Console.WriteLine("38");
```

Wat Visual Studio meldt bij de drie fouten:

1. ``CS1002 ; expected``: er ontbreekt een puntkomma.
2. ``CS0117 'Console' does not contain a definition for 'Writeline'``: C# is hoofdlettergevoelig, dus ``Writeline`` bestaat niet.
3. Meerdere meldingen voor één fout, bijvoorbeeld ``CS1010 Newline in constant`` en ``CS1026 ) expected``. Zonder afsluitend aanhalingsteken denkt C# dat je tekst doorloopt tot het einde van de lijn, en dan klopt de rest van de lijn ook niet meer. Herstel dus altijd eerst de bovenste fout en kijk daarna opnieuw.

Druk je met fouten op de startknop, dan vraagt Visual Studio of je de laatste versie wil uitvoeren die wel werkte. Klik op **No** en duid de checkbox niet aan: anders test je oude code in plaats van de code die op je scherm staat.
::::



# Fake GPT (*Essential*) {#h01-fake-gpt}

Schrijf een programma dat de gebruiker om een vraag vraagt en vervolgens een antwoord geeft, namelijk: "Dat is een interessante vraag! Ik zal er eens over nadenken en later op terugkomen."

Het programma doet dus niets met de invoer van de gebruiker. Het is letterlijk een lege doos. Voorbeeld output:

```text
Wat is je vraag?
>Wonen er Marsmannetjes op Mercurius?
Dat is een interessante vraag! Ik zal er eens over nadenken en later op terugkomen.
```

::::{.callout-caution collapse="true" title="Oplossing"}

```java
Console.WriteLine("Wat is je vraag?");
Console.ReadLine();  //het resultaat bewaren in een variabele heeft geen nut. We doen er toch niets mee.
Console.WriteLine("Dat is een interessante vraag! Ik zal er eens over nadenken en later op terugkomen.");
```

:::: 

**Deel 2.** Laat je Fake GPT nu de vraag herhalen voor hij antwoordt. Zo lijkt het alsof hij luistert. Daarvoor moet je de invoer wel bewaren.

```text
Wat is je vraag?
>Wonen er Marsmannetjes op Mercurius?
Wonen er Marsmannetjes op Mercurius? Dat is een interessante vraag! Ik zal er eens over nadenken en later op terugkomen.
```

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
Wat ``ReadLine`` inleest, moet je enkel in een variabele bewaren als je het later nog nodig hebt. In deel 1 is dat niet zo, in deel 2 wel.
::::

::::{.callout-caution collapse="true" title="Oplossing"}

```java
Console.WriteLine("Wat is je vraag?");
string vraag = Console.ReadLine();
Console.WriteLine($"{vraag} Dat is een interessante vraag! Ik zal er eens over nadenken en later op terugkomen.");
```

:::: 



# Visitekaart (*Essential*) {#h01-visitekaart}

Schrijf een programma dat aan de gebruiker de volgende zaken vraagt:

* Voornaam
* Achternaam
* Adres
* Hobby

Toon daarna een visitekaartje: elk antwoord op een eigen lijn, met een label ervoor (``Naam: ``, ``Adres: `` en ``Hobby: ``). Voornaam en achternaam komen samen op één lijn, met een spatie ertussen.

Bijvoorbeeld (tekst die start met > is input van de gebruiker):

```text
Wat is je voornaam?
>Tom
Wat is je achternaam?
>Peeters
Waar woon je?
>Parel van de Kempen
Wat is je hobby?
>fietsen

Goed. Hier volgt je visitekaartje:
Naam: Tom Peeters
Adres: Parel van de Kempen
Hobby: fietsen
```

Maak het kaartje twee keer:

1. Eerst enkel met ``Write`` en ``WriteLine``, zonder ``$``. Met ``Write`` blijft de cursor op dezelfde lijn staan, zodat het antwoord achter het label komt.
2. Daarna nog eens, maar nu elke lijn van het kaartje met één ``WriteLine`` en string interpolatie (``$``).

Beide versies moeten exact dezelfde uitvoer geven.

:::{.callout-tip}
Een lege lijn toon je met ``Console.WriteLine();``, zonder iets tussen de haakjes.
:::

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
``Write`` en ``WriteLine`` samen, of één ``WriteLine`` met ``$``: op het scherm zie je geen verschil. Met ``$`` heb je wel minder lijnen code nodig, en zie je in je code meteen hoe de lijn er op het scherm zal uitzien.

Let in de eerste versie op de spatie tussen voor- en achternaam. Die moet je zelf tonen, binnen aanhalingstekens.
::::

::::{.callout-caution collapse="true" title="Oplossing"}

Versie 1, met ``Write`` en ``WriteLine``:

```java
Console.WriteLine("Wat is je voornaam?");
string voornaam = Console.ReadLine();
Console.WriteLine("Wat is je achternaam?");
string achternaam = Console.ReadLine();
Console.WriteLine("Waar woon je?");
string adres = Console.ReadLine();
Console.WriteLine("Wat is je hobby?");
string hobby = Console.ReadLine();

Console.WriteLine();
Console.WriteLine("Goed. Hier volgt je visitekaartje:");

Console.Write("Naam: ");
Console.Write(voornaam);
Console.Write(" ");
Console.WriteLine(achternaam);
Console.Write("Adres: ");
Console.WriteLine(adres);
Console.Write("Hobby: ");
Console.WriteLine(hobby);
```

Versie 2: de vragen blijven dezelfde, enkel het kaartje zelf (de laatste acht lijnen) verandert in:

```java
Console.WriteLine($"Naam: {voornaam} {achternaam}");
Console.WriteLine($"Adres: {adres}");
Console.WriteLine($"Hobby: {hobby}");
```
:::: 



# Rommel zin (*Essential*) {#h01-rommel-zin}

Schrijf een applicatie met behulp van ``ReadLine()`` en ``WriteLine()``-methoden waarbij de computer aan de gebruiker om zijn of haar favoriete kleur, eten, auto en boek vraagt. Het programma gaat echter de gebruiker plagen en de ingelezen informatie op de verkeerde manier aan de gebruiker tonen. Het programma zal de antwoorden namelijk door elkaar halen waardoor de computer vervolgens toont: 


```text
Je favoriete kleur is [eten]. Je eet graag [auto]. Je lievelingsfilm is [boek] en je favoriete boek is [kleur].
```

Waarbij tussen de rechte haakjes steeds de invoer komt die de gebruiker eerder opgaf voor de bijhorende vraag.

Voorbeeld (tekst die start met > is input van de gebruiker):
```text
Geef je favoriete kleur:
>rood
Geef je favoriete eten:
>lasagne
Geef je favoriete auto:
>mazda
Geef je favoriete boek:
>Het oneindige verhaal

Je favoriete kleur is lasagne. Je eet graag mazda. Je lievelingsfilm is Het oneindige verhaal en je favoriete boek is rood.
```

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
Ieder antwoord van de gebruiker moet je bewaren in een aparte ``string`` variabele, met een naam die zegt wat erin zit. In deel 2 zie je wat er gebeurt als dat niet zo is.
::::

::::{.callout-caution collapse="true" title="Oplossing"}

```java
Console.WriteLine("Geef je favoriete kleur:");
string favKleur = Console.ReadLine();
Console.WriteLine("Geef je favoriete eten:");
string favEten = Console.ReadLine();
Console.WriteLine("Geef je favoriete auto:");
string favAuto = Console.ReadLine();
Console.WriteLine("Geef je favoriete boek:");
string favBoek = Console.ReadLine();

Console.WriteLine();
Console.WriteLine($"Je favoriete kleur is {favEten}. Je eet graag {favAuto}. Je lievelingsfilm is {favBoek} en je favoriete boek is {favKleur}.");
```
:::: 

**Deel 2: Steven rommelt mee.** Stagiair Steven maakte dezelfde oefening. Zijn code compileert zonder fouten, en toch klopt zijn uitvoer niet met het voorbeeld hierboven:

```java
Console.WriteLine("Geef je favoriete kleur:");
string kleur = Console.ReadLine();
Console.WriteLine("Geef je favoriete eten:");
string eten = Console.ReadLine();
Console.WriteLine("Geef je favoriete auto:");
string boek = Console.ReadLine();
Console.WriteLine("Geef je favoriete boek:");
string auto = Console.ReadLine();

Console.WriteLine();
Console.WriteLine($"Je favoriete kleur is {eten}. Je eet graag {auto}. Je lievelingsfilm is {boek} en je favoriete boek is {kleur}.");
```

Wat toont zijn programma als de gebruiker dezelfde antwoorden geeft als in het voorbeeld? Waar zit de fout? Probeer het eerst te vinden zonder de code uit te voeren.

::::{.callout-caution collapse="true" title="Oplossing"}
Steven zijn programma toont:

```text
Je favoriete kleur is lasagne. Je eet graag Het oneindige verhaal. Je lievelingsfilm is mazda en je favoriete boek is rood.
```

Het antwoord op de vraag naar de auto bewaart hij in ``boek``, en het boek in ``auto``. De compiler kijkt niet naar wat een naam betekent: voor C# is ``boek`` een naam als een ander. De laatste lijn ziet er daardoor correct uit, terwijl de fout drie lijnen hoger zit.
::::



# Frituur in volgorde {#h01-frituur-in-volgorde}

Deze lijnen code horen bij een programma voor een frituur, maar ze zijn door elkaar geraakt. Bovendien is er één lijn bij geslopen die er niet in thuishoort.

![](../assets/illustraties/h01_frituur.jpg){.illustratie fig-alt="Potloodtekening: de robot geeft achter de toog van een frituur een puntzak frieten met saus aan het stokmannetje."}

```java
string saus = Console.ReadLine();
Console.WriteLine($"Bedankt {naam}! Een {snack} met {saus} komt eraan.");
Console.Write("Welke snack wil je? ");
Console.WriteLine();
string naam = Console.ReadLine();
Console.WriteLine("Welkom bij frituur 't Frietje!");
Console.WriteLine("Bedankt {naam}! Een {snack} met {saus} komt eraan.");
Console.Write("En welke saus? ");
string snack = Console.ReadLine();
Console.Write("Wat is je naam? ");
```

Zet de lijnen in de juiste volgorde, zodat het programma exact onderstaande uitvoer geeft. Welke lijn is de indringer, en waarom hoort ze er niet bij? Doe het eerst op papier en test daarna pas in Visual Studio.

```text
Welkom bij frituur 't Frietje!
Wat is je naam? Anissa
Welke snack wil je? bicky
En welke saus? samurai

Bedankt Anissa! Een bicky met samurai komt eraan.
```

``Anissa``, ``bicky`` en ``samurai`` typt de gebruiker zelf in. Omdat de vragen met ``Write`` op het scherm komen, verschijnt het antwoord op dezelfde lijn als de vraag.

::::{.callout-caution collapse="true" title="Oplossing"}

```java
Console.WriteLine("Welkom bij frituur 't Frietje!");
Console.Write("Wat is je naam? ");
string naam = Console.ReadLine();
Console.Write("Welke snack wil je? ");
string snack = Console.ReadLine();
Console.Write("En welke saus? ");
string saus = Console.ReadLine();
Console.WriteLine();
Console.WriteLine($"Bedankt {naam}! Een {snack} met {saus} komt eraan.");
```

De indringer is de lijn zonder ``$`` vooraan. Zonder ``$`` toont C# de accolades en de namen letterlijk: ``Bedankt {naam}! Een {snack} met {saus} komt eraan.``
::::



# Voorspel de uitvoer (*Essential*) {#h01-voorspel-de-uitvoer}

Voer onderstaande code nog niet uit. Schrijf eerst op papier exact op wat er op het scherm zal verschijnen: elke letter, elke spatie en elke nieuwe lijn. Wanneer het programma op invoer wacht, typt de gebruiker ``Sara`` en drukt op enter.

```java
Console.Write("Hallo");
Console.WriteLine("wereld");
Console.Write("Wie ben jij? ");
string naam = Console.ReadLine();
Console.Write("Dag ");
Console.WriteLine("naam");
Console.WriteLine($"Dag {naam}!");
Console.WriteLine("Dag {naam}!");
Console.Write("Tot" );
Console.WriteLine( "ziens");
Console.WriteLine();
Console.WriteLine("Einde");
```

Voer de code daarna uit en vergelijk met wat je opschreef. Klopt een lijn niet, zoek dan uit waar je redenering fout liep voor je naar de oplossing kijkt.

::::{.callout-caution collapse="true" title="Oplossing"}

```text
Hallowereld
Wie ben jij? Sara
Dag naam
Dag Sara!
Dag {naam}!
Totziens

Einde
```

* ``Write`` springt niet naar een nieuwe lijn, dus ``Hallo`` en ``wereld`` plakken aan elkaar.
* Na ``Write("Wie ben jij? ")`` blijft de cursor op dezelfde lijn staan. Wat Sara typt, verschijnt dus achter de vraag. Pas door haar enter springt de cursor naar de volgende lijn.
* ``"naam"`` staat tussen aanhalingstekens en is dus gewoon tekst, geen variabele.
* Zonder ``$`` vooraan toont C# de accolades letterlijk.
* De spaties in ``("Tot" )`` en ``( "ziens")`` staan buiten de aanhalingstekens en worden dus genegeerd.
* ``Console.WriteLine()`` zonder iets tussen de haakjes geeft een lege lijn.
::::



# Stevens begroeting (*Essential*) {#h01-stevens-begroeting}

Stagiair Steven moest een programma schrijven dat de gebruiker begroet. Hij liet de code door een A.I. schrijven en leverde ze meteen in, zonder ze zelf te testen. Zo zou het programma er moeten uitzien, met de begroeting in het groen en de rest in de gewone kleur:

::: {.console .kleur}
```{=html}
<pre><code>Wat is je naam?
&gt;Sara
Waar woon je?
&gt;Gent
<span class="k-groen">Dag Sara uit Gent!</span>
Tot ziens.</code></pre>
```
:::

Dit is wat Steven inleverde:

```java
Console.WriteLine("Wat is je naam?")
string naam = Console.Readline();
Console.WriteLine("Waar woon je?);
string stad = Console.ReadLine();
Console.ForegroundColor = ConsoleColor.Green;
Console.WriteLine("Dag {naam} uit {stad}!");
Console.Write("Tot" );
Console.writeLine("ziens.");
```

**Deel 1.** Maak een nieuw project en plak Stevens code in ``Main``. Er zitten vier fouten in die Visual Studio vindt. Herstel ze met behulp van de *Error List*. Let op: één fout geeft soms meerdere meldingen, en sommige fouten verschijnen pas nadat je een andere opgelost hebt.

**Deel 2.** Nu start het programma, maar de uitvoer is nog niet wat Steven wou. Er zitten nog drie fouten in die de compiler niet ziet. Vergelijk de uitvoer met het voorbeeld hierboven en herstel ze.

::::{.callout-caution collapse="true" title="Oplossing"}

```java
Console.WriteLine("Wat is je naam?");
string naam = Console.ReadLine();
Console.WriteLine("Waar woon je?");
string stad = Console.ReadLine();
Console.ForegroundColor = ConsoleColor.Green;
Console.WriteLine($"Dag {naam} uit {stad}!");
Console.ResetColor();
Console.Write("Tot ");
Console.WriteLine("ziens.");
```

De vier fouten die Visual Studio vindt:

1. Lijn 1: de puntkomma ontbreekt.
2. Lijn 2: ``Readline`` moet ``ReadLine`` zijn.
3. Lijn 3: het afsluitende aanhalingsteken ontbreekt. Visual Studio geeft hier ook meldingen bij lijn 4, terwijl daar niets mis mee is.
4. Lijn 8: ``writeLine`` moet ``WriteLine`` zijn.

De drie fouten die de compiler niet ziet:

1. De ``$`` ontbreekt, waardoor er letterlijk ``Dag {naam} uit {stad}!`` op het scherm komt.
2. ``Console.ResetColor()`` ontbreekt, waardoor ook ``Tot ziens.`` groen is.
3. De spatie in ``("Tot" )`` staat buiten de aanhalingstekens, waardoor er ``Totziens.`` verschijnt.
::::



# Stad kleuren (*Essential*) {#h01-stad-kleuren}

Open terug je "Wie ben ik"-solution. Pas de code aan zodat je stad in rode letters met witte achtergrond wordt getoond. Vergeet niet je kleur terug te resetten naar de standaardkleuren na het tonen van de stad.

Voorbeeld van de output (gebruik je eigen gegevens uiteraard):

![](../assets/0_intro/stadkleur.png)

Werkt het? Haal dan de lijn met ``Console.ResetColor();`` eens weg en voer opnieuw uit. Wat gebeurt er met je leeftijd? Zet de lijn daarna terug.

::::{.callout-caution collapse="true" title="Oplossing"}

```java
Console.WriteLine("Vincent Van Camp");
Console.ForegroundColor = ConsoleColor.Red;
Console.BackgroundColor = ConsoleColor.White;
Console.WriteLine("Boom");
Console.ResetColor();
Console.WriteLine("38");
```

Zonder ``ResetColor`` blijven de kleuren gewoon ingesteld, en verschijnt ook je leeftijd in rode letters op een witte achtergrond.
:::: 



# Kleurige chat {#h01-kleurige-chat}

Maak een nieuwe solution en vertrek van je code van Fake GPT (deel 2). Geef het gesprek kleur, zoals in een chat-app:

* Alles wat de computer toont, verschijnt in het cyaan (``ConsoleColor.Cyan``).
* Wat de gebruiker intypt, verschijnt in het geel.

::: {.console .kleur}
```{=html}
<pre><code><span class="k-cyaan">Wat is je vraag?</span>
<span class="k-geel">Wonen er Marsmannetjes op Mercurius?</span>
<span class="k-cyaan">Wonen er Marsmannetjes op Mercurius? Dat is een interessante vraag! Ik zal er eens over nadenken en later op terugkomen.</span></code></pre>
```
:::

Tekst die al op het scherm staat, kan je niet meer van kleur veranderen. Zoek dus uit op welk moment je de kleur voor de invoer moet instellen. Vergeet op het einde niet de kleuren te resetten.

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
Tekst die de gebruiker intypt, krijgt de voorgrondkleur die op dat moment ingesteld is. Zet je vlak voor de ``ReadLine`` de kleur op geel, dan typt de gebruiker in het geel.
::::

::::{.callout-caution collapse="true" title="Oplossing"}

```java
Console.ForegroundColor = ConsoleColor.Cyan;
Console.WriteLine("Wat is je vraag?");
Console.ForegroundColor = ConsoleColor.Yellow;
string vraag = Console.ReadLine();
Console.ForegroundColor = ConsoleColor.Cyan;
Console.WriteLine($"{vraag} Dat is een interessante vraag! Ik zal er eens over nadenken en later op terugkomen.");
Console.ResetColor();
```
::::



# Woordenslinger (*Essential*) {#h01-woordenslinger}

Maak een applicatie die volgende woorden na elkaar op twee lijnen toont, waarbij elk woord in de kleur staat die het woord zelf noemt:

```text
blauwgroenrood
geelroodblauwgroen
```

De output moet er als volgt uitzien:

![](../assets/0_intro/slinger.png)

::::{.callout-caution collapse="true" title="Oplossing"}


```java
Console.ForegroundColor = ConsoleColor.Blue;
Console.Write("blauw");
Console.ForegroundColor = ConsoleColor.Green;
Console.Write("groen");
Console.ForegroundColor = ConsoleColor.Red;
Console.WriteLine("rood");


Console.ForegroundColor = ConsoleColor.Yellow;
Console.Write("geel");
Console.ForegroundColor = ConsoleColor.Red;
Console.Write("rood");
Console.ForegroundColor = ConsoleColor.Blue;
Console.Write("blauw");
Console.ForegroundColor = ConsoleColor.Green;
Console.WriteLine("groen");

Console.ResetColor();
```

:::: 

**Uitbreiding: de Stroop-test.** Toon de woorden ``rood``, ``groen``, ``blauw`` en ``geel`` op één lijn, met een spatie ertussen, maar nu telkens in een *andere* kleur dan het woord zelf. Noem daarna zo snel mogelijk luidop de kleuren op, niet de woorden. Dat gaat trager dan je denkt: dit heet het Stroop-effect.

::: {.console .kleur}
```{=html}
<pre><code><span class="k-groen">rood</span> <span class="k-geel">groen</span> <span class="k-rood">blauw</span> <span class="k-blauw">geel</span></code></pre>
```
:::

::::{.callout-caution collapse="true" title="Oplossing"}

```java
Console.ForegroundColor = ConsoleColor.Green;
Console.Write("rood ");
Console.ForegroundColor = ConsoleColor.Yellow;
Console.Write("groen ");
Console.ForegroundColor = ConsoleColor.Red;
Console.Write("blauw ");
Console.ForegroundColor = ConsoleColor.Blue;
Console.WriteLine("geel");
Console.ResetColor();
```
::::



# Tekening (*Essential*) {#h01-tekening}

Kan je volgende afbeelding namaken in de console?

![](../assets/0_intro/exbol.jpg)

Het schema hieronder toont hoe de tekening in elkaar zit. Elke letter is één spatie: ``R`` is een spatie met een rode achtergrond, ``G`` een spatie met een groene achtergrond.

```text
RRRRRRR
RRGGGRR
RRGGGRR
RRRRRRR
```

Waarom staan er links en rechts twee rode spaties, terwijl de rand boven en onder maar één lijn dik is? Een teken in de console is ongeveer twee keer zo hoog als breed. Met twee spaties naast elkaar is de rand links en rechts dus even dik als boven en onder.

:::{.callout-tip collapse="true"}
Je kan een gekleurd vakje 'tekenen' door de ``BackgroundColor`` van de console in te stellen en dan een **spatie** naar het scherm te sturen.
:::

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
Deze tekening bestaat uit allemaal spaties, waarbij we een combinatie van ``Write`` en ``WriteLine`` gebruiken, in samenwerking met kleurveranderingen om die spaties op het scherm te zetten.
::::

::::{.callout-caution collapse="true" title="Oplossing"}

```java
Console.BackgroundColor = ConsoleColor.Red;
Console.WriteLine("       ");
Console.Write("  ");
Console.BackgroundColor = ConsoleColor.Green;
Console.Write("   ");
Console.BackgroundColor = ConsoleColor.Red;
Console.WriteLine("  ");
Console.Write("  ");
Console.BackgroundColor = ConsoleColor.Green;
Console.Write("   ");
Console.BackgroundColor = ConsoleColor.Red;
Console.WriteLine("  ");
Console.WriteLine("       ");

Console.ResetColor();
```
:::: 

**Deel 2.** Teken de vlag van Italië: drie verticale banden in het groen, wit en rood. Maak elke band 4 spaties breed en de vlag 4 lijnen hoog.

::::{.callout-caution collapse="true" title="Oplossing"}

```java
Console.BackgroundColor = ConsoleColor.Green;
Console.Write("    ");
Console.BackgroundColor = ConsoleColor.White;
Console.Write("    ");
Console.BackgroundColor = ConsoleColor.Red;
Console.WriteLine("    ");

Console.BackgroundColor = ConsoleColor.Green;
Console.Write("    ");
Console.BackgroundColor = ConsoleColor.White;
Console.Write("    ");
Console.BackgroundColor = ConsoleColor.Red;
Console.WriteLine("    ");

Console.BackgroundColor = ConsoleColor.Green;
Console.Write("    ");
Console.BackgroundColor = ConsoleColor.White;
Console.Write("    ");
Console.BackgroundColor = ConsoleColor.Red;
Console.WriteLine("    ");

Console.BackgroundColor = ConsoleColor.Green;
Console.Write("    ");
Console.BackgroundColor = ConsoleColor.White;
Console.Write("    ");
Console.BackgroundColor = ConsoleColor.Red;
Console.WriteLine("    ");

Console.ResetColor();
```

Vier keer hetzelfde blok: later leer je lussen, en dan kan dit een pak korter.
::::

**Deel 3.** Verzin je eigen tekening: een smiley, een Space Invader, de vlag van je favoriete land... Teken ze eerst op ruitjespapier en tel per lijn hoeveel vakjes van elke kleur je nodig hebt.



# Regenboog Ticket (*Final Essentials*) {#h01-regenboog-ticket}

:::{.callout-tip}
Een *Final Essentials* oefening is een opgave waarin zoveel mogelijk leerstof van de voorbije oefeningen aan bod komt. Je zal voor deze oefeningen vaak wat meer tijd nodig hebben en dus mogelijk niet in het labo kunnen maken.
:::


Maak een nieuwe applicatie "RegenboogTicket".
Deze applicatie vraagt de gebruiker om 3 zaken (telkens als tekst):

1. De titel van een film.
2. De prijs van een ticket (enkel het getal, bijvoorbeeld ``12``).
3. De naam van de bezoeker.

Vervolgens toon je een ticket op het scherm:

* De boven- en onderkant van het ticket zijn lijnen (bijvoorbeeld ``------------------------------``) met een **witte** achtergrond en **zwarte** letters.
* Daartussen staan drie lijnen, die beginnen met ``Film: ``, ``Prijs: `` en ``Naam: ``. Het label staat telkens in de gewone kleur van de console, de waarde erachter in kleur: de filmtitel in het **rood**, de prijs in het **groen** en de naam in het **blauw**.
* Achter de prijs komt het woord ``euro``, in dezelfde kleur als de prijs.
* De drie lijnen tussen boven- en onderkant hebben de gewone achtergrond van de console. Stel die niet zelf in op zwart, maar gebruik ``Console.ResetColor()``: niet iedereen heeft een zwarte console.

Zorg ervoor dat na het ticket alles terug in de standaardkleuren staat.

::: {.console .kleur}
```{=html}
<pre><code>Geef de filmtitel: The Matrix
Geef de prijs: 12
Geef je naam: Neo The One
<span class="k-wit-zwart">------------------------------</span>
Film: <span class="k-rood">The Matrix</span>
Prijs: <span class="k-groen">12 euro</span>
Naam: <span class="k-blauw">Neo The One</span>
<span class="k-wit-zwart">------------------------------</span></code></pre>
```
:::

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
* De streepjeslijn heb je twee keer nodig. Zet je ze één keer in een variabele, dan pas je ze op één plek aan als je het ticket breder wil. Een variabele hoeft dus niet altijd uit ``ReadLine`` te komen: je kan er ook zelf tekst in stoppen, zoals ``string lijn = "-----";``.
* Wil je op één lijn meerdere kleuren, dan werk je met ``Write`` en wissel je tussendoor van kleur.
* ``Console.ResetColor()`` zet de console terug naar de kleuren van de gebruiker. Zelf ``ConsoleColor.Black`` instellen gaat mis bij iemand die een witte console heeft.
::::

::::{.callout-caution collapse="true" title="Oplossing"}
```java
Console.Write("Geef de filmtitel: ");
string titel = Console.ReadLine();

Console.Write("Geef de prijs: ");
string prijs = Console.ReadLine();

Console.Write("Geef je naam: ");
string naam = Console.ReadLine();

string lijn = "------------------------------";

Console.BackgroundColor = ConsoleColor.White;
Console.ForegroundColor = ConsoleColor.Black;
Console.WriteLine(lijn);
Console.ResetColor();

Console.Write("Film: ");
Console.ForegroundColor = ConsoleColor.Red;
Console.WriteLine(titel);
Console.ResetColor();

Console.Write("Prijs: ");
Console.ForegroundColor = ConsoleColor.Green;
Console.WriteLine($"{prijs} euro");
Console.ResetColor();

Console.Write("Naam: ");
Console.ForegroundColor = ConsoleColor.Blue;
Console.WriteLine(naam);
Console.ResetColor();

Console.BackgroundColor = ConsoleColor.White;
Console.ForegroundColor = ConsoleColor.Black;
Console.WriteLine(lijn);
Console.ResetColor();
```
:::: 



# Muziek {#h01-muziek}

:::{.callout-tip}
Deze oefening is een bonus: ``Console.Beep`` hoort niet bij de leerstof. Ze werkt enkel op Windows. Op een Mac of onder Linux crasht je programma met een ``PlatformNotSupportedException``, dus daar sla je ze over. In het labo: koptelefoon op.
:::

Met de ``Console.Beep()`` methode kan je muziek maken. Volgende voorbeeld toont bijvoorbeeld hoe je do-re-mi-fa-sol-la-si-do afspeelt:

```java
Console.Beep(264, 1000);
Console.Beep(297, 1000);
Console.Beep(330, 1000);
Console.Beep(352, 1000);
Console.Beep(396, 1000);
Console.Beep(440, 1000);
Console.Beep(495, 1000);
Console.Beep(528, 1000);
```

Je geeft aan ``Beep`` 2 getallen mee (*argumenten*):

1. De frequentie van de toon die moet afgespeeld worden. Bijvoorbeeld 264 (in Hertz, hz).
2. De duur dat de toon moet afgespeeld worden in milliseconden. Als je dus 1000 meegeeft zal de toon gedurende 1000 ms, oftewel 1 seconde, afgespeeld worden.

Open 1 van de eerder gemaakte oefeningen en zorg ervoor dat bij het opstarten ervan er een kort, door jezelf gecomponeerd, introliedje wordt afgespeeld.


::::{.callout-caution collapse="true" title="Oplossing"}
```java
Console.Beep(396, 1000); //hopelijk is jouw liedje boeiender
Console.Beep(440, 1000);
Console.Beep(495, 1000);

Console.WriteLine("Wat is je vraag?");
Console.ReadLine(); 
Console.WriteLine("Dat is een interessante vraag! Ik zal er eens over nadenken en later op terugkomen.");
```
:::: 
