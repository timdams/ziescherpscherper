
# Object georiënteerd programmeren <!--\label{ch:9}-->

Tot nu toe heb je vooral geleerd om *gestructureerd* te programmeren - soms ook wel *procedureel* programmeren genoemd - een programmeerconcept uit de jaren zestig. Hierbij schrijf je code gebruik makend van methoden, loops en beslissingsstructuren. 

Hoewel gestructureerd programmeren erg nuttig blijft, wordt het bij complexere applicaties vaak minder intuïtief en soms nodeloos complex. Een middelgroot project verzandt al gauw in moeilijk te onderhouden spaghetti code.
 
Er is echter een alternatief: **object georiënteerd Programmeren** (**OOP**, *Object Oriented Programming*). OOP bouwt voort op gestructureerd programmeren, maar maakt het mogelijk om veel krachtigere applicaties te ontwikkelen.

Bij OOP draait alles rond **klassen en objecten** die intern nog steeds gestructureerde code  bevatten. Alle bekende concepten zoals loops, methoden en beslissingsstructuren blijven bestaan. We gaan ze echter verpakken in handige, kleinere aparte klassen. Met OOP wordt onze code **modulair, leesbaarder en onderhoudsvriendelijker**. Bovendien wordt de code krachtiger en kunnen we complexere problemen eenvoudiger oplossen.

>![](../assets/attention.png)Ik zet "oplossen" tussen aanhalingstekens. Net zoals alles binnen dit domein ben jij als programmeur uiteindelijk degene die het boeltje moet oplossen. Code, programmeerparadigma's en bibliotheken zijn niet meer dan nuttig gereedschap in jouw arsenaal van programmeertools. Als jij beslist om een hamer als zaag te gebruiken... Tja, dan houd ik m'n hart vast voor het resultaat. 

Dit geldt ook voor de technieken die je nog in dit boek gaat leren: ze zijn "een tool", niets meer. Jij zal ze nog steeds zo optimaal mogelijk moeten leren gebruiken. Uiteraard is het doel van dit boek je zo duidelijk mogelijk het verschil én de bruikbaarheid van de verschillende nieuwe technieken aan te leren.

## C# is OO in hart en nieren

Toen C# werd ontwikkeld in 2001 was één van de hoofddoelen van de programmeertaal om *"een eenvoudige, moderne, objectgeoriënteerde programmeertaal voor algemene doeleinden"* te worden. **C# is van de grond af opgebouwd met het OOP paradigma  als primaire drijfveer.** Een paradigma is een algemeen geaccepteerde manier van denken en doen binnen een bepaald vakgebied, in dit geval binnen de programmeerwereld.

Wanneer we nieuwe programma's in C# ontwikkelden dan zagen we hier reeds bewijzen van. Zo zagen we steeds het keyword ``class`` bovenaan staan, telkens we een nieuw project aanmaakten:

```java
namespace WorldDominationTool
{
    internal class Program
    {
```

De klasse ``Program`` zorgt ervoor dat ons programma voldoet aan de C# afspraken die zeggen dat alle C# code in klassen moet staan. 

>![](../assets/care.png)Duizend mammoeten en sabeltandtijgers! Ik dacht dat ik nu wel mee zou zijn met alles wat C# me zou voorschotelen. Helaas, wolharige neushoorn-kaas, niet dus. Ik ga een voorspelling doen: van alle hoofdstukken in dit boek, wordt dit hoofdstuk hetgene waar je het meest je tanden op gaat stuk bijten. Hou dus vol, geef niet te snel op en kom geregeld hier terug. Succes gewenst!

<!-- \newpage -->

### Een wereld zonder OOP: Pong

Om de kracht van OOP te demonstreren gaan we een applicatie van lang geleden (deels) herschrijven gebruik makende van de kennis van de vorige 8 hoofdstukken. We gaan de arcadehal klassieker "Pong" deels namaken, waarbij we als doel hebben om een balletje alvast op het scherm te laten botsen. Een rudimentaire oplossing zou de volgende kunnen zijn:

```java
Console.CursorVisible = false;
int balX = 20;
int balY = 20;
int vX = 2;
int vY = 1;
while (true)
{
    //vX van richting veranderen aan de randen
    if (balX + vX >= Console.WindowWidth || balX+vX < 0)
    {
        vX = -vX;
    }
    balX = balX + vX; //X positie updaten
    //vY van richting veranderen aan de randen
    if (balY + vY >= Console.WindowHeight || balY+vY < 0)
    {
        vY = -vY;
    }
    balY = balY + vY; //Y positie updaten
    //Output naar scherm sturen
    Console.SetCursorPosition(balX, balY);
    Console.Write("O");
    System.Threading.Thread.Sleep(50); //50 ms wachten
    Console.Clear();
}
```

Hopelijk begrijp je deze code. Test ze maar eens in een programma. Zoals je zal zien krijgen we een balletje (``"O"``) dat over het scherm vliegt en telkens van richting verandert wanneer het aan de randen van het applicatievenster komt. De belangrijkste informatie zit in de variabelen ``balX``, ``balY`` die de huidige positie van het balletje bevatten. Voorts zijn ook ``vX`` en ``vY`` belangrijk: hierin houden we bij in welke richting (en met welke snelheid) het balletje beweegt (een zogenaamde bewegingsvector).

<!-- \newpage -->

#### Extra balletjes?

Dit soort applicatie in C# schrijven met behulp van gestructureerde programmeer-concepten is redelijk eenvoudig. Maar wat als we nu 2 balletjes nodig hebben? Laten we arrays even links laten liggen en het gewoon eens naïef oplossen. Al na enkele lijnen kopiëren merken we dat onze code ongelooflijk rommelachtig gaat worden en we bijna iedere lijn moeten dupliceren:

```java
Console.CursorVisible = false;
int balX = 20;
int balY = 20;
int vX = 2;
int vY = 1;

int bal2X = 10;
int bal2Y = 8;
int v2X = 2;
int v2Y = -1;

while (true)
{
    if (balX + vX >= Console.WindowWidth || balX+ vX < 0)
    {
        vX = -vX;
    }
    if (bal2X + v2X >= Console.WindowWidth || bal2X + v2X < 0)
    {
        v2X = -v2X;
    }

    balX = balX + vX;
    bal2X = bal2X + v2X;
    //enzovoort
```

**Bijna iedere lijn code moeten we verdubbelen.** Arrays zouden dit probleem deels kunnen oplossen, maar we krijgen dan in de plaats de complexiteit van werken met arrays op ons bord. Dat is voor 2 balletjes misschien wat overdreven. Het zal op de koop toe onze terug minder leesbaar maakt.

<!-- \newpage -->

### Een wereld met OOP: Pong

Uiteraard zijn we nu eventjes gestructureerd programmeren aan het demoniseren, dit is echter een bekend 21e eeuws trucje om je punt te maken. 

Wanneer we Pong met het OOP paradigma willen aanpakken dan is het de bedoeling dat we werken met klassen en objecten. 

Net zoals aan de start van dit boek ga ik je ook nu even in het diepe gedeelte van het bad gooien. Wees niet bang, ik zal je er tijdig uithalen!  Je zal versteld staan hoeveel code je eigenlijk zult herkennen.

Om Pong in OOP te maken hebben we eerst een klasse nodig waarin we ons balletje gaan beschrijven, zonder dat we al een balletje hebben. En dat ziet er zo uit:

```java
internal class Balletje
{
    //Eigenschappen
    public int X { get; set; }
    public int Y { get; set; }
    public int VX { get; set; }
    public int VY { get; set; }

    //Methoden
    public void Update()
    {
        if (X + VX >= Console.WindowWidth || X + VX < 0)
        {
            VX = -VX;
        }
        X = X + VX;

        if (Y + VY >= Console.WindowHeight || Y + VY < 0)
        {
            VY = -VY;
        }
        Y = Y + VY;
    }

    public void TekenOpScherm()
    {
        Console.SetCursorPosition(X, Y);
        Console.Write("O");      
    }
}
```

:::{.callout-tip}
De code voor een nieuwe klasse schrijf je best in een apart bestand in je project. Klik bovenaan in de menu balk op "Project" en kies dan "Add class...". Geef het bestand de naam "Balletje.cs". 
:::

Bijna alle code van zonet hebben we hier geïntegreerd in een ``class Balletje``, maar er zit duidelijk een nieuw sausje over. Vooral aan het begin zien we onze 4 variabelen terugkomen in een nieuw kleedje: namelijk als eigenschappen oftewel *properties* (herkenbaar aan de ``get`` en ``set`` keywords). 

:::{.callout-tip}
Die ``public int X { get; set; }``-regels zijn zogenaamde **auto-properties**. Beschouw ze voorlopig gewoon als een publieke variabele met wat extra mogelijkheden. Lig nu nog niet wakker van die ``get; set;``-syntax: ik leg properties verderop in dit hoofdstuk ([2_properties.md](2_properties.md)) helemaal uit.
:::

Maar al bij al lijkt de code grotendeels op wat we al kenden. En dat is goed nieuws. OOP gooit de vorige hoofdstukken niet in de vuilbak, het gaat als het ware een extra laag over het geheel leggen. Let ook op het essentiële woordje ``class`` bovenaan, daar draait alles natuurlijk om: **klassen en objecten**. 

:::{.callout-tip}
Een klasse is een blauwdruk van een bepaalde soort 'dingen' of objecten. Objecten zijn de "echte" dingen die werken volgens de beschrijving van de klasse. Ja ik heb zonet 2x hetzelfde verteld, maar het is essentiëel dat je het verschil tussen de termen **klasse** en **object** goed begrijpt. 
:::

Laten we eens een **balletje-object** in het leven roepen. In de main schrijven we daarom dit:

```java
Console.CursorVisible = false;
Balletje bal1 = new Balletje();
bal1.X = 20;
bal1.Y = 20;
bal1.VX = 2;
bal1.VY = 1;
```

Ok, interessant. Die ``new`` heb je al gezien wanneer je met ``Random`` ging werken en de code erna is ook nog begrijpbaar: we stellen eigenschappen van het nieuwe ``bal1`` object in. En nu komt het! Kijk hoe eenvoudig onze volledig ``main`` nu is geworden:

```java
static void Main(string[] args)
{
    Console.CursorVisible = false;
    Balletje bal1 = new Balletje();
    bal1.X = 20;
    bal1.Y = 20;
    bal1.VX = 2;
    bal1.VY = 1;

    while (true)
    {
        bal1.Update();
        bal1.TekenOpScherm();

        System.Threading.Thread.Sleep(50);
        Console.Clear();
    }
}
```

De loopcode is herleid tot 2 aanroepen van **methoden op het ``bal1`` object**: ``.Update()`` en ``.TekenOpScherm``. 

Run deze code maar eens. Inderdaad, deze code doet exact hetzelfde als hiervoor. Ook nu krijgen we 1 balletje dat op het scherm over en weer botst. 

En nu - abracadabra - kijk goed hoe eenvoudig onze code blijft als we 2 balletjes nodig hebben:

```java
Console.CursorVisible = false;
Balletje bal1 = new Balletje();
bal1.X = 20;
bal1.Y = 20;
bal1.VX = 2;
bal1.VY = 1;

Balletje bal2 = new Balletje();
bal2.X = 10;
bal2.Y = 8;
bal2.VX = 2;
bal2.VY = -1;

while (true)
{
    bal1.Update();
    bal2.Update(); //zo simpel!
    bal1.TekenOpScherm();
    bal2.TekenOpScherm(); //wow, zooo simpel :)
    System.Threading.Thread.Sleep(50);
    Console.Clear();
}
```

Dit is de volledige code om 2 balletjes te hebben. Hoe mooi is dat?!

**De kracht van OOP zit hem in het feit dat we de logica IN DE OBJECTEN ZELF plaatsen. De objecten zijn met andere woorden verantwoordelijk om hun eigen gedrag uit te voeren gebaseerd op externe impulsen en hun eigen interne toestand.** In onze main zeggen we aan beide balletjes "update je zelf eens", gevolgd door "teken je zelf eens". 

Wanneer we 3 of meer balletjes zouden nodig hebben dan zullen we best arrays in de mix moeten gooien. Onze code blijft echter véél eenvoudiger én krachtiger dan wanneer we in het voorgaande enkel de kennis gebruikten die we totnogtoe hadden. Omdat we toch al in het diepe eind zitten, zal ik hier toch al eens tonen hoe we 100 balletjes op het scherm kunnen laten botsen (we gaan ``Random`` gebruiken zodat er wat willekeurigheid in de balletjes zit):

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

De reden dat we nu twee loops gebruiken, is omdat we in de updatefase eerst alle objecten willen bijwerken (soms in relatie tot andere objecten) voordat we alles opnieuw op het scherm tekenen. Anders kan het zijn dat je vreemde effecten te zien krijgt als je bijvoorbeeld balletjes tegen elkaar wil laten wegbotsen.

Ok, zwem maar snel naar de kant. We gaan al het voorgaande van begin tot einde uit de doeken doen! Leg die handdoek niet te ver weg, we gaan hem nog nodig hebben.

<!-- \newpage -->