## Virtual en Override

Het is fijn dat onze child-klasse alles kan dat onze parent-klasse doet. Maar soms is dat beperkend:

* Mogelijk wil je een bestaande methode van de parent-klasse uitbreiden/aanvullen met extra functionaliteit.
* Soms wil je gewoon de volledige implementatie van een methode of property herschrijven in je child-klasse.

**De keywords ``virtual`` en ``override`` gaan je hiermee kunnen helpen.**

### De werking van child-klassen aanpassen

Om te voorkomen dat child-klassen zomaar eender welke methode of property van de parent-klasse kunnen aanpassen gaan we de hulp van het ``virtual`` keyword inroepen. Standaard is het geen goede gewoonte om de bestaande werking van een klasse in de child-klasse aan te passen: beeld je in dat je een essentieel stuk code aanpast waardoor je hele klasse plots niet meer werkt!

Soms willen we echter kunnen aangeven dat de werking van een property of methode door een child-klassen mag aangepast worden. Dit geven we aan met het **``virtual``** keyword. 

Vervolgens dient de child-klasse het keyword ``override`` te gebruiken om expliciet aan te geven dat er een methode of property komt wiens werking die van de parent-klasse zal wijzigen.

:::{.callout-tip}
Enkel indien een element met ``virtual`` werd aangeduid, kan je deze dus met ``override`` aanpassen. Uiteraard ben je niet verplicht om elke *virtueel* element ook effectief te *overriden*. **``virtual`` geeft enkel aan dat dit een mogelijkheid is, geen verplichting.**
:::

<!-- \newpage -->

### Een voorbeeld met vliegende objecten

Stel je voor dat je een applicatie hebt met 2 klassen, ``Vliegtuig`` en ``Raket``. Een raket is een vliegtuig, maar kan veel hoger vliegen dan een vliegtuig. Omdat we weten dat potentiële childklassen op een andere manier zullen willen vliegen, zullen we de methode ``Vlieg`` ``virtual`` zetten:

```java
internal class Vliegtuig
{
   public virtual void Vlieg()
   {
      Console.WriteLine("Het vliegtuig vliegt door de wolken.");
   }
}
internal class Raket: Vliegtuig
{ 

}
```

:::{.callout-tip}
Merk op dat we het keyword ``virtual`` mee opnemen in de methodesignatuur op lijn 3, en dat deze dus niets te maken heeft met het returntype en de zichtbaarheid van de methode. Dit zou bijvoorbeeld een perfect legale methodesignatuur kunnen zijn: ``protected virtual int SayWhatNow()``. 

Terzijde: ``static`` methoden kunnen niet ``virtual`` gezet worden.
:::

Stel dat we 2 objecten aanmaken en laten vliegen:

```{.java filename="Program.cs"}
Vliegtuig topGun = new Vliegtuig();
Raket spaceX1 = new Raket();
topGun.Vlieg();
spaceX1.Vlieg();
```

De uitvoer zal dan zijn twee maal dezelfde zin tonen: ``Het vliegtuig vliegt door de wolken.``

:::{.callout-important}
Je kan een methode of property ``virtual`` instellen zolang ze maar **niet ``private``** is. ``private`` leden zijn immers niet zichtbaar in de child-klasse en kunnen dus ook niet overschreven worden. ``public`` en ``protected`` (zoals het ``protected virtual``-voorbeeld hierboven) kunnen dus wél ``virtual`` zijn.
:::

<!-- \newpage -->

Momenteel doet het ``virtual`` keyword niets. Het is enkel een signaal aan mede-programmeurs: *"hey, als je wilt mag je de werking van deze methode aanpassen als je van deze klasse overerft."*

Een raket is een vliegtuig, toch vliegt het anders. We willen dus de methode ``Vlieg`` anders uitvoeren voor een raket. Daar hebben we **override** voor nodig. Door override voor een methode in de child-klasse te plaatsen zeggen we "gebruik deze implementatie en niet die van de parent klasse."

```{.java filename="Raket.cs"}
internal class Raket : Vliegtuig
{
   public override void Vlieg()                            // <1>
   {
      Console.WriteLine("De raket verdwijnt in de ruimte.");
   }
}
```

1. ``override`` vervangt de implementatie van de gelijknamige ``virtual``-methode uit ``Vliegtuig``. De signatuur moet identiek blijven: enkel ``virtual`` wordt ``override``.

De uitvoer van volgende code zal nu anders zijn:
```{.java filename="Program.cs"}
Vliegtuig topGun = new Vliegtuig();
Raket spaceX1 = new Raket();
topGun.Vlieg();
spaceX1.Vlieg();
```

Uitvoer:

::: {.console}
```text
Het vliegtuig vliegt door de wolken.
De raket verdwijnt in de ruimte.
```
:::

![Dezelfde aanroep ``Vlieg()`` geeft een ander resultaat: de ``override`` van ``Raket`` vervangt de ``virtual`` versie van ``Vliegtuig``.](../assets/7_overerving/virtualoverride.png)<!--{width=75%}-->



:::{.callout-tip}
Indien je iets ``override`` moet de signatuur van je methode of property  identiek zijn aan deze van de parent-klasse. Het enige verschil is dat je het keyword ``virtual`` vervangt door ``override``.

Als je in VS override begint te typen in een child-klassen dan kan je met behulp van de tab-toets heel snel de overige code van de signatuur schrijven. 
:::

:::{.callout-warning}
**``override`` vergeten? Dan krijg je *hiding* in plaats van *overriding*.** Schrijf je in de child-klasse per ongeluk gewoon ``public void Vlieg()`` (zonder ``override``), dan compileert je code wel, maar krijg je een waarschuwing dat je het ``new`` keyword zou moeten gebruiken. C# denkt dan dat je *bewust* de parent-methode wilt **verbergen** (hiding), niet **overschrijven**. Het gevolg: roep je de methode aan via een parent-referentie, dan wordt toch de oude parent-versie uitgevoerd, niet jouw nieuwe. Krijg je dus die ``new``-waarschuwing, dan ben je vermoedelijk ``override`` vergeten.
:::

<!-- TODO ed.5 (review): overweeg een korte aparte sectie "hiding (new) vs. overriding (override)" met een uitgewerkt voorbeeld van het verschil in gedrag via een parent-referentie. -->

### Stagiair Steven

>![](../assets/aistagiar.png) Steven breidt de hiërarchie verder uit. ``Helikopter`` overschrijft ``Vlieg`` intussen keurig met ``override``. Nu moet er ook een ``ReddingsHelikopter`` komen die nog net iets anders vliegt. De A.I. gaf hem dit:
>
>```csharp
>internal class Helikopter : Vliegtuig
>{
>    public override void Vlieg()
>    {
>        Console.WriteLine("De helikopter hangt stil in de lucht.");
>    }
>}
>internal class ReddingsHelikopter : Helikopter
>{
>    public new void Vlieg()
>    {
>        Console.WriteLine("De reddingshelikopter scheert laag over het water.");
>    }
>}
>```
>
>Hij test het zo en is tevreden:
>
>```csharp
>Helikopter redder = new ReddingsHelikopter();
>redder.Vlieg();
>```
>
>"``Helikopter`` gebruikt netjes ``override``, en ``ReddingsHelikopter`` erft daarvan. Dit moet dus mijn reddingshelikopter-versie tonen", zegt hij.

Waarom verschijnt toch de gewone helikopter-zin?

:::{.callout-note collapse="true"}
## Antwoord
Op het scherm komt ``De helikopter hangt stil in de lucht.``, niet de reddingshelikopter-versie. In ``ReddingsHelikopter`` gebruikte Steven ``new`` in plaats van ``override``. Daardoor verbergt hij de methode van ``Helikopter`` opnieuw, net zoals eerder met ``Vliegtuig``: hij overschrijft ze niet. Omdat hier via een ``Helikopter``-referentie wordt aangeroepen (niet via ``Vliegtuig`` of ``ReddingsHelikopter``), draait de versie van ``Helikopter``, niet die van ``ReddingsHelikopter``. Dat ``Helikopter`` zelf verderop in de keten wél correct ``override`` gebruikt, verandert daar niets aan: elke stap in de hiërarchie moet zijn eigen ``override`` correct zetten. Steven zag dat de bovenste stap klopte en nam aan dat de rest ook wel in orde was.
:::

