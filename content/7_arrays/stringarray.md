## String en arrays

Het type ``string`` gedraagt zich in veel opzichten als een array van karakters. Dat is geen toeval: een string is een rij ``char``-elementen na elkaar, zoals je in hoofdstuk 3 al zag. Alles wat je in dit hoofdstuk over arrays leerde, kan je dus ook op tekst loslaten. Op één belangrijk verschil na, en net dat verschil verklaart hoe zowat alle string-methoden werken.

### Een string lezen als een array

Met vierkante haakjes haal je een afzonderlijk karakter uit een string, en ``Length`` geeft je het aantal karakters. Precies zoals bij een array begint de telling bij 0:

```java
string zin = "Ik ben Tim";
Console.WriteLine(zin[0]);      //I
Console.WriteLine(zin[7]);      //T
Console.WriteLine(zin.Length);  //10
```

Wat je met ``zin[0]`` uit de string haalt is een ``char``, geen ``string``. Wil je zo'n karakter vergelijken, dan gebruik je dus enkele aanhalingstekens: ``zin[0] == 'I'``.

Daarmee kan je ook je eigen loops over tekst schrijven. Het telpatroon uit de vorige sectie werkt onveranderd, alleen is de array nu een string:

```java
string tekst = "Ik ben Reinhardt";

int aantalE = 0;
for (int i = 0; i < tekst.Length; i++)
{
    if (tekst[i] == 'e')
    {
        aantalE++;
    }
}
Console.WriteLine($"Er staan {aantalE} e's in de zin");
```

### Wat je niet kan: een string wijzigen

Lezen mag, schrijven niet. Volgende code compileert **niet**:

```java
string zin = "Ik ben Tom";
zin[8] = 'i';  //FOUT: compileert niet
```

Een string ligt vast van zodra hij bestaat. Je kan wel een andere tekst in de variabele steken, maar de tekst zelf kan je nooit aanpassen. In hoofdstuk 10 kom ik hier op terug wanneer we naar het geheugen kijken.

Wil je toch karakter per karakter aan de slag, dan zet je de string om naar een echte *char-array* met ``.ToCharArray()``. In die array mag je wel schrijven:

```java
string origineleZin = "Ik ben Tom";
char[] karakters = origineleZin.ToCharArray();
karakters[8] = 'i';
```

De array bevat nu ``Ik ben Tim``. Let op: ``origineleZin`` bevat nog altijd ``Ik ben Tom``. ``ToCharArray`` maakt een kopie, dus wat je in die array verandert heeft geen enkel gevolg voor de string waarvan je vertrok.

### Char array naar string

Ook de omgekeerde weg is mogelijk. De werking is iets anders en maakt gebruik van ``new string()``. Let vooral op hoe we de char array doorgeven als argument bij het aanmaken van een nieuwe ``string`` in lijn 3:

```java
char[] alleKarakters = {'h', 'a', 'l', 'l', 'o'};
alleKarakters[2] = 'x';
string woord = new string(alleKarakters);
Console.WriteLine(woord);
```

De uitvoer van deze code zal zijn: ``haxlo``.

<!-- \newpage -->

### Methoden geven altijd een nieuwe string terug

Omdat een bestaande string niet gewijzigd kan worden, kan géén enkele string-methode jouw string aanpassen. Ze maken allemaal een nieuwe string en geven die als resultaat terug. Vang je dat resultaat niet op, dan lijkt er niets te gebeuren:

```java
string boek = "   Ik ben Reinhardt   ";

boek.Trim();                //dit doet niets
Console.WriteLine(boek);

boek = boek.Trim();         //zo dus
Console.WriteLine(boek);
```

Op het scherm (de spaties op de eerste lijn zie je niet, maar ze zijn er wel):

::: {.console}
```text
   Ik ben Reinhardt   
Ik ben Reinhardt
```
:::

:::{.callout-important}
``boek.Trim();`` op zichzelf is een geldige lijn code: je krijgt geen enkele foutmelding. De methode kuist netjes je string op, geeft het resultaat terug, en dat resultaat wordt daarna weggegooid omdat je het nergens bewaart. Dit is een van de meest gemaakte fouten bij het werken met tekst.
:::

Merk het verschil met ``Array.Sort`` uit de vorige sectie. Die methode kreeg de referentie naar jouw array en herschikte de array ter plekke, zonder iets terug te geven. Bij strings krijg je altijd iets terug en blijft het origineel ongemoeid.

Dit zijn de methoden die je het vaakst zal nodig hebben. De voorbeelden vertrekken telkens van ``string boek = "Ik ben Mercy";``:

| Methode | Wat ze doet | Voorbeeld | Resultaat |
|---|---|---|---|
| ``Length`` | aantal karakters (geen haakjes, dit is geen methode) | ``boek.Length`` | ``12`` |
| ``IndexOf`` | index waar een stuk tekst begint | ``boek.IndexOf("ben")`` | ``3`` |
| ``Contains`` | zit dit stuk tekst er in? | ``boek.Contains("ben")`` | ``true`` |
| ``Substring`` | een stuk uit de string knippen | ``boek.Substring(3, 3)`` | ``"ben"`` |
| ``Remove`` | een stuk uit de string verwijderen | ``boek.Remove(3, 4)`` | ``"Ik Mercy"`` |
| ``Trim`` | spaties vooraan en achteraan weg | ``"  hey  ".Trim()`` | ``"hey"`` |
| ``ToUpper`` | alles in hoofdletters | ``boek.ToUpper()`` | ``"IK BEN MERCY"`` |
| ``ToLower`` | alles in kleine letters | ``boek.ToLower()`` | ``"ik ben mercy"`` |
| ``Replace`` | elk stuk ``oud`` vervangen door ``nieuw`` | ``boek.Replace("Mercy", "Reinhardt")`` | ``"Ik ben Reinhardt"`` |

Bij ``IndexOf`` geldt dezelfde afspraak als bij ``Array.IndexOf``: wordt de tekst niet gevonden, dan krijg je ``-1`` terug. Test daar dus op vooraleer je het resultaat als index gebruikt.

``Substring`` en ``Remove`` werken allebei met een startindex en een aantal karakters, net zoals ``Array.Copy`` en ``Array.Clear``. ``boek.Remove(3, 4)`` betekent: *"verwijder alles vanaf het element met index 3 (de ``b``) en dit gedurende 4 tekens (dus tot en mét de spatie na ``ben``)"*. Waar ``Remove`` dat stuk weggooit, is ``Substring`` net het stuk dat je overhoudt.

:::{.callout-tip}
``Replace`` kan je ook misbruiken om bijvoorbeeld alle woorden uit een stuk tekst te verwijderen door deze te vervangen door een lege ``string`` met de waarde ``""``. Volgende code zal alle ``"e"``'s uit de tekst verwijderen:

```java
string boek = "Ik ben Mercy";
boek = boek.Replace("e", "");
Console.WriteLine(boek);
```

Waardoor we ``Ik bn Mrcy`` op het scherm krijgen.
:::

### Split en Join: van string naar array en terug

``Split`` snijdt een string in stukken op een ``char`` die jij kiest. Dat teken zelf verdwijnt, en wat overblijft krijg je als een **array van strings**:

```java
string data = "12,13,20";
string[] gesplitst = data.Split(',');

for (int i = 0; i < gesplitst.Length; i++)
{
    Console.WriteLine(gesplitst[i]);
}
```

::: {.console}
```text
12
13
20
```
:::

Hoeveel elementen die array zal bevatten weet je op voorhand niet: dat hangt af van de tekst die je splitst. Ook daarom gebruik je in je loop ``gesplitst.Length`` en geen vast getal.

De stukken blijven ``string``-elementen, ook al staan er cijfers in. Wil je ermee rekenen, dan moet je ze eerst omzetten, en dan zit je meteen weer bij het optelpatroon van de vorige sectie:

```java
Console.WriteLine("Geef je getallen, gescheiden door een komma:");
string invoer = Console.ReadLine();
string[] stukken = invoer.Split(',');

int som = 0;
for (int i = 0; i < stukken.Length; i++)
{
    som += int.Parse(stukken[i]);
}
Console.WriteLine($"De som is {som}");
```

Splitsen op een spatie is even handig: ``zin.Split(' ')`` levert je alle woorden van een zin, en ``.Length`` op die array is dan het aantal woorden.

Via ``Join`` ga je de omgekeerde richting uit: een array van strings wordt terug één string, met tussen elk element het teken dat jij meegeeft. Volgend voorbeeld voegt de gesplitste array van hierboven opnieuw samen, maar nu met telkens een ``;`` tussen de stukken:

```java
string samen = string.Join(";", gesplitst);
Console.WriteLine(samen);   //12;13;20
```

:::{.callout-tip}
``Join`` is een ``static`` methode: je roept ze op via ``string`` zelf en niet via een van je eigen string-variabelen. Dat is dezelfde manier van werken als bij ``Array.Sort``. In hoofdstuk 11 leg ik uit waarom sommige methoden zo werken.

``Split`` is dat niet: die roep je gewoon op de string op die je wil splitsen.
:::

``Join`` is meteen ook de kortste manier om een volledige array op één lijn te tonen. Waar je anders een loop schrijft, volstaat nu:

```java
string[] myColors = { "red", "green", "yellow" };
Console.WriteLine(string.Join(", ", myColors));  //red, green, yellow
```
