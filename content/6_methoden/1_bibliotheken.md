## Bestaande bibliotheken verkennen

Laten we eens kijken naar de vele methoden die reeds ingebouwd zitten in .NET en hoe we ze nu beter kunnen gebruiken.

### IntelliSense

*Wat kan deze .NET bibliotheek eigenlijk?* is een veelgestelde vraag. Zeker wanneer je de basis van C# onder de knie hebt en je stilletjes aan met bestaande .NET bibliotheken wilt gaan werken. Wat volgt is een essentieel onderdeel van VS dat veel gevloek en tandengeknars zal voorkomen.

De online documentatie van .NET is zeer uitgebreid en dankzij **IntelliSense** krijg je ook aardig wat informatie tijdens het typen van de code zelf. IntelliSense is de achterliggende technologie in VS die ervoor zorgt dat je minder moet typen. Als een soort assistent probeert IntelliSense een beetje te voorspellen wat je gaat typen en zal je daarmee helpen. 

Bij ``Math`` heb je dit in hoofdstuk 4 al gebruikt, maar het werkt bij elke bibliotheek. Typ eens het volgende in:

```java
Console.
```

Wacht nu even en er zal na het punt (``.``) een lijst komen van methoden en eigenschappen die beschikbaar zijn. Als er niets verschijnt of iets dat je niet had verwacht, dan is de kans groot dat je een schrijffout hebt gemaakt. Klik je de lijst per ongeluk weg, of duw je op Escape, dan is er niets kapot: met ``Ctrl+Spatie`` roep je ze gewoon terug op. 

Je kan door deze lijst met de muis doorheen scrollen en zo zien welke methoden allemaal bij de ``Console`` bibliotheek horen. Indien gewenst kan je vervolgens de gewenste methode selecteren en op spatie duwen zodat deze in je code verschijnt.

![De icoontjes geven aan of het om een methode (kubus), een eigenschap (Engelse sleutel) of een "event" (bliksem) gaat. Events behandel ik niet in dit handboek.](../assets/4_methoden/methoden4.png)

:::{.callout-tip}
Je mag er ook ``System.`` voor zetten en dus ``System.Console.`` typen. ``System`` is de naam van de bibliotheek waarin ``Console`` zit. Je krijgt dan een niveau vroeger al een lijst, want IntelliSense helpt op ieder niveau mee. Normaal laat je die ``System.`` gewoon weg. Waarom dat mag lees je in hoofdstuk 10 bij *namespaces*.
:::

<!-- \newpage -->

#### De parameters van een methode zien

Sommige methoden vereisen dat je een aantal parameters meegeeft. De parameters dien je tussen de ronde haakjes te zetten. Hierbij weten we nu dat het uiterst belangrijk is dat je de volgorde respecteert die de ontwikkelaar van de methode heeft gebruikt. 

Maar wat als je niet weet in welke volgorde je argumenten moet meegeven? Typ de methode in je code en stop met typen na het eerste ronde haakje. Vervolgens zal IntelliSense alle mogelijke manieren tonen waarop je deze methoden kan oproepen. Met de omhoog- en omlaagpijltjes van het toetsenbord kan je alle mogelijke manieren bekijken.

![Dit soort popups bevat een schat aan informatie.](../assets/4_methoden/methoden1.png)<!--{width=60%}-->

In de voorgaande screenshot zien we dat IntelliSense telkens duidelijk de methode-signatuur beschrijft: 

* Het return type (in dit geval ``void``).
* Gevolgd door de naam van de methode.
* Finaal de formele parameters en hun datatype(s). 

Merk trouwens op dat je de ``WriteLine``-methode ook mag aanroepen zonder parameters, dit zal resulteren in een lege lijn in de console.

Ook deze popup verdwijnt zodra je ernaast klikt. Zolang je cursor tussen de ronde haakjes staat, haal je ze terug met ``Ctrl+Shift+Spatie``.

#### Meer info met F1

Met behulp van de F1-toets kunnen we meer info over de methode in kwestie tonen. Hiervoor dien je je cursor op de methode in je code te plaatsen, en vervolgens op F1 te drukken. Je komt dan op de online documentatie van de methode waar erg veel informatie terug te vinden is over het gebruik ervan. Scroll naar de *overload list*, daar zien we de verschillende manieren waarop je de methode in kwestie kan aanroepen (het concept *overloaden* bespreek ik verderop in dit hoofdstuk). Je kan vervolgens op iedere methode klikken voor meer informatie en een codevoorbeeld.

#### Ook voor je eigen methoden

IntelliSense werkt niet enkel voor .NET-bibliotheken. Schreef je zelf een methode ``BerekenFaculteit``, dan verschijnt die in dezelfde lijst zodra je begint te typen, en na het ronde haakje toont VS jouw eigen signatuur met ``int grens`` erin.

Heb je boven je methode ``///``-commentaar geschreven (zie [Commentaar aan methoden toevoegen](0c_methodencombineren.md#commentaar-aan-methoden-toevoegen)), dan staat jouw uitleg mee in die popup. De afbeelding bij de ``Macht``-methode in die sectie is precies zo'n popup: de zin "Berekent de macht van een getal" en de uitleg bij ``grondtal`` staan daar omdat iemand ze zelf achter ``<summary>`` en ``<param>`` heeft getypt. Dat is meteen de beste reden om die commentaar te schrijven: je krijgt ze zelf te zien op het moment dat je de methode aanroept.

<!-- \newpage -->

### Herbruikbare gebruikersinvoer vragen

Vaak moet je code schrijven waarin je een getal aan de gebruiker vraagt:

```java
Console.WriteLine("Geef leeftijd");
int leeftijd = int.Parse(Console.ReadLine());
```

Als deze constructie op meerdere plekken in een project voorkomt dan is het nuttig om deze twee lijnen naar een methode te verhuizen die er dan zo kan uitzien:

```java
static int VraagInt(string zin)
{
    Console.WriteLine(zin);
    return int.Parse(Console.ReadLine());
}
```

De code van zonet kan je dan nu herschrijven naar:

```java
int leeftijd = VraagInt("Geef leeftijd");
```

![Dezelfde twee lijnen drie keer overtypen, of ze één keer in ``VraagInt`` zetten en drie keer aanroepen.](../assets/4_methoden/vraagint.png)

Het voorgaande voorbeeld toont ook ineens aan waarom methoden helpen om je code leesbaarder en onderhoudbaarder te maken. Je ``Main`` blijft gevrijwaard van veel repeterende lijnen code en heeft aanroepen naar methoden met een duidelijke naam die ieder een specifiek ding doen.

<!-- \newpage -->
