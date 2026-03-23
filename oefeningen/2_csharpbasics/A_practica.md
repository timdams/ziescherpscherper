<!--# Hoofdstuk 2-->

:::{.callout-tip}
Het is aanbevolen dat je vanaf nu per hoofdstuk een nieuwe solution aanmaakt op je computer. Per oefening maak je dan best een nieuw project aan dat je in de solution zet. Geef ieder project een duidelijke naam (bv EuroNaarDollar) zodat je later vlot je oefeningen kan terugvinden. Denk er aan dat je je projecten best enkel met cijfers en letters benoemd (dus beter EuroNaarDollar dan Euro-Dollar).

![](../assets/infoclip.png)
Meer uitleg over Projecten en Solutions en hoe je bovenstaande doet kan je [hier](https://ap.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=a7eb4973-e87e-49a4-862e-ac47009783d6) terugvinden.
:::

:::{.callout-warning}
Het is een goede gewoonte om ogenblikkelijk de juiste  *coding guidelines* te volgen. Deze staan in het handboek [hier opgelijst](https://apwt.gitbook.io/zie-scherp-scherper/coding-guidelines/boete).
:::


:::{.callout-tip}
We vragen in deze oefeningen nog geen input aan de gebruiker. Alle getallen worden hard gecodeerd in de variabelen. In een volgend hoofdstuk gaan we leren hoe we input van de gebruiker kunnen vragen.

:::




<!--# Hoofdstuk 2-->

# Gemiddelde (*Essential*)

# Gemiddelde (*Essential*)

Maak 3 variabelen aan van het type ``int`` genaamd ``september``, ``oktober`` en ``november``. Plaats in elke variabele de hoeveelheid uren slaap je die in die maand verwacht te doen. Bereken nu het gemiddelde van 3 maanden en toon het resultaat op het scherm (kies uiteraard 3 verschillende hoeveelheden slaap). 

Opgelet: het resultaat moet als een kommagetal worden getoond!

## Euro naar dollar (*Essential*)

Ontwerp een toepassing waarmee je een bedrag (dat je hardcode in een variabele), inclusief komma-getallen  in euro kan omrekenen naar dollar. Gebruik hierbij de huidige wisselkoers. Je hoeft niet af te ronden. Het resultaat op het scherm wordt als volgt weergegeven: ``[x] EUR is gelijk aan [y] USD``.

Dit is de startcode van je applicatie:

```java
double bedragInEuro = 78.65;
```

Uitvoer:

```text
78,65 EUR is gelijk aan 81,0095 USD.
```

:::{.callout-tip}
Begrijp je dat al deze oefeningen eigenlijk altijd dezelfde 3 fases hebben?

1. Data invoer: variabelen aanmaken en waarden geven.
2. Data verwerken: berekeningen doen met de ingevoerde data.
3. Data uitvoer: resultaten op het scherm tonen

Als je je applicaties zo opbouwt dan zal je snel ontdekken dat al deze oefeningen eigenlijk in essentie hetzelfde zijn.
:::



# Kill/Death-ratio (*Essential*) (Dodona beschikbaar)

# Kill/Death-ratio (*Essential*) (Dodona beschikbaar)

:::{.callout-tip}
De k/d ratio is de verhouding tussen het aantal kills dat je in een spel hebt gehaald ten opzichte van het aantal keer dat je zelf bent gestorven, deads. Wanneer deze verhouding dus groter is dan 1 heb je vaker iemand gedood dan dat je zelf gestorven bent. Onder de 1 is dit net omgekeerd...en ben je dus niet zo goed in het spel dat je aan het spelen bent.
:::


Maak twee variabelen ``double kills`` en ``double deaths`` aan. Wijs er jouw typische gamescores aan toe die je haalt in een spel naar keuze. Bereken en toon vervolgens je kill/death-ratio. 



Uitvoer (indien kill=44 is en deaths=9)

```text
Je k/d-ratio is 4,888888888888889
```

:::{.callout-warning}
**Begrijp je waarom we best een van beide variabelen in ``double`` zetten?** Lees de waarschuwing van de voorman bij Expressies zeker nog eens na... Of test eens wat er gebeurt indien je met ``int`` zou werken.

Merk op dat het vreemd is dat je een niet-geheel aantal kills of deaths kunt halen als je met ``double`` werkt. Dat kan natuurlijk niet. Je kunt niet 2,5 keer dood zijn gegaan in een spel. In hoofdstuk 4 gaan we dit oplossen (en er dus voor zorgen dat kills en deaths wel als ``int`` kan blijven staan, maar we toch een ``double`` als resultaat voor de kdratio krijgen)
:::





# BTW (*Essential*)

# BTW (*Essential*)

Schrijf een programma waarin je het BTW-percentage 21% als een constante definieert door het keyword ``const`` voor de variabele te zetten. Vervolgens toon je een prijs naar keuze, met en zonder btw op het scherm. 

Dit is je startcode:
    
```csharp   
double prijs = 20;
const double BTW = 21.0;
```

Bereken nu de prijs met  BTW en toon het resultaat op het scherm.

Voorbeeld output:

```text
Prijs 20 euro zonder btw. Met BTW: 24.2 euro.
```

:::{.callout-tip}
Je kan de BTW op verschillende manieren berekenen. Kies zelf hoe je dit doet? Je mag dus gerust ook werken met  ``const double BTW = 1.21;`` of ``const double BTW = 0.21;`` , afhankelijk van welke berekenwijze je prefereert.
:::
 

# Gewicht in space (*Essential*)

# Gewicht in space (*Essential*)

Je massa is overal dezelfde. Je gewicht daarentegen is afhankelijk van de zwaartekracht van de plek waar je bent. Zo is je gewicht veel groter op Jupiter dan op Mars (uitgedrukt in Newton).

Maak een variabele ``double gewichtOpAarde`` aan. Wijs een gewicht toe (bv. het jouwe). Schrijf nu een programma dat onder elkaar jouw gewicht op verschillende planeten toont.

Hier de omzettingstabel (je gewicht op Mercurius is dus je gewicht op aarde x 0.38):

* Mercurius: 0.38
* Venus: 0.91
* Aarde: 1.00
* Mars: 0.38
* Jupiter: 2.34
* Saturnus: 1.06
* Uranus: 0.92
* Neptunus: 1.19
* Pluto: 0.06  (we laten de discussie achterwege of pluto wel of niet een planeet is)

De output zijn verschillende lijnen onder elkaar in de vorm van:

``Je weegt op [planeet] [gewichtopdieplaneet] N.``

Plaats de zin met Jupiter in het rood, daar je daar het zwaarst weegt en die van pluto in het groen.

Voorbeeld output:

```text
Je weegt op Mercurius 30,627999999999997 N.
Je weegt op Venus 73,346 N.
en zo verder...
```


# Tafel en Console.Clear() (*Essential*)

# Tafel en Console.Clear() (*Essential*)

Met het statement ``Console.Clear();`` kan je de console - je raadt het nooit - leegmaken. Test deze code in het volgende programma:

Schrijf een programma dat de tafels van vermenigvuldigen geeft van 411 (dus 1x411= 411, 2x411= 822 tot en met 10x411= 4110). Toon telkens 1 zin en wacht dan tot de gebruiker op enter duwt om de volgende vermenigvuldiging op een nieuw scherm te tonen. De output ziet er dus als volgt uit:


```text
1 x 411 = 411
Druk op enter voor de volgende lijn.
[Scherm leeg gemaakt]
2 x 411 = 822
Druk op enter voor de volgende lijn.
[Scherm leeg gemaakt]
...
```


:::{.callout-warning}
**Plaats 411 en de *teller* (die van 1 tot en met 10 gaat) elk in een variabele aan de start van het programma en gebruik deze in je berekeningen verderop. Toon dat je code ook werkt door de inhoud van de variabele in een ander getal te veranderen zodat je van dat nieuwe getal nu de tafels van vermenigvuldiging krijgt.** Door de waarde 411 bovenaan in een variabele te steken kan je heel snel je programma een andere tafel laten berekenen, je hoeft dan gewoon de waarde van die variabele aan te passen.

**Gebruik ``teller++`` om de teller-variabele telkens te verhogen.** 

:::


Je kan wachten tot de gebruiker op enter duwt door gewoon een lege ``Console.ReadLine`` te doen, zoals volgende voorbeeld toont:

```csharp
Console.WriteLine("Eerste beeld");
Console.WriteLine("Druk enter om voort te gaan.");
Console.ReadLine();
Console.Clear();
Console.WriteLine("Tweede beeld");
```

:::{.callout-tip}
Merk op dat ``Console.Clear()`` niet werkt zoals verwacht op Mac. 
:::



# Simple maths

# Simple maths
Schrijf een programma dat de uitkomst van volgende resultaten op het scherm toont:


```text
-1 + 4 * 6
( 35 + 5 ) % 7
14 + -4 * 6 / 11
2 + 15 / 6 * 1 - 7 % 2
```

Bewaar het resultaat van iedere opgave in een aparte variabele. Reken op papier of met je calculator na wat het resultaat moet zijn. Toon vervolgens de uitkomst (m.b.v. ``WriteLine``) telkens op het scherm en vergelijk die met je eigen berekening. Begrijp je waar de verschillen zitten (als die er zijn)?! Waarom moet je bij de derde en vierde expressie met double werken en niet bij de eerste 2?.

:::{.callout-warning}
De % hier is de modulo-operator.
:::

Je toont het resultaat als volgt:
```text
-1 + 4 * 6 geeft 23
( 35 + 5 ) % 7 geeft 5 
14 + -4 * 6 / 11 geeft 11,818181818181818
2 + 15 / 6 * 1 - 7 % 2 geeft 3,5
```


# De Kassa (*Final Essentials*)

# De Kassa (*Final Essentials*)



Je gaat een kassasysteem simuleren. Omdat we in dit hoofdstuk nog geen input vragen aan de gebruiker, mag je de hoeveelheden en prijzen van de producten **hardcoden** in variabelen aan het begin van je programma.

**Opdracht:**

Je klant koopt 3 zaken:
1. Frieten (Prijs: 4.50 euro)
2. Koninginnehapje (Prijs: 12.00 euro)
3. Cola (Prijs: 2.80 euro)

Maak voor elk van deze prijzen een `double`-variabele aan.
Maak daarnaast ook variabelen aan waarin staat **hoeveel** stuks de klant van elk koopt (bv. 2 frieten, 1 koninginnenhapje, 3 cola's).

Voer vervolgens de volgende stappen uit:

1. Bereken het **totaalbedrag** in Euro.
2. Bereken het **gemiddelde** bedrag dat een product kost in dit winkelmandje (totaalbedrag / totaal aantal gekochte items).
3. We aanvaarden ook Dollars! Maak een **constante** aan voor de wisselkoers (bv. `1 Euro = 1.08 Dollar`) en bereken hoeveel de klant in Dollar moet betalen.

Toon dit alles als een net kasticket op het scherm:

1. Toon eerst de boodschap: "Kassa wordt geladen... druk op enter".
2. Wacht tot de gebruiker op enter duwt.
3. Maak het scherm leeg (`Console.Clear()`).
4. Toon het ticket met de details.
   - Gebruik `****************` als boven- en onderkant.
   - Toon de totaalprijs in het **Rood**.
   - Toon de prijs in Dollar in het **Groen**.

**Voorbeeld output:**

(Scherm 1)
```text
Kassa wordt geladen... druk op enter
```

(Gebruiker duwt enter -> Scherm 2)

```text
*************************
KASSATICKET
*************************
2 x Friet       : 9 euro
1 x Koninginha  : 12 euro
3 x Cola        : 8,4 euro
-------------------------
TOTAAL (EUR)    : 29,4 euro     (in het Rood)
TOTAAL (USD)    : 31,752 dollar (in het Groen)
-------------------------
Gemiddeld/prod  : 4,9 euro
*************************
```



# Tekstmaker (PRO)

# Tekstmaker (PRO)

:::{.callout-tip}
PRO oefeningen bevatten leerstof die mogelijk niet in deze cursus wordt behandeld, of die in een later hoofdstuk pas aan bod zal komen.
:::



Met de methode ``System.IO.File.WriteAllText();`` kan je een ``string`` naar een bestand wegschrijven.

Je geeft hierbij 2 variabelen mee: de bestandsnaam, en de inhoud van het bestand.

Volgende voorbeeld schrijft bijvoorbeeld de zin "Ik ben tim" weg naar een bestand dat zal aangemaakt worden genaamd "me.txt":

```csharp
System.IO.File.WriteAllText("me.txt", "Ik ben tim");
```

Schrijf een programma dat aan de gebruiker de naam van het bestand vraagt, gevolgd door wat er in het bestand moet geschreven worden. Vervolgens maak je dit bestand aan en plaats je die inhoud er in.

:::{.callout-tip}
Als je enkel een bestandsnaam meegeeft (en geen volledige folderpath) dan wordt het bestand geplaatst op de plek waar het programma wordt uitgevoerd.

Standaard staat je gecompileerde programma in de bin\debug folder van je project.

Als je dus een solution hebt aangemaakt genaamd "Oefening" in de folder "C:\Temp" dan zal het bestand zich in de volgende folder bevinden "C:\Temp\Oefening\Oefening\bin\debug".

Je kan ook snel naar deze folder gaan door in de solution explorer aan de rechterzijde in VS te rechterklikken op je project en dan te kiezen voor: Open folder in file explorer.
:::



::::{.callout-caution collapse="true" title="Oplossing"}

## Gemiddelde

:::{.callout-tip}
**Les(sen) uit deze oefening:** Om een gemiddelde te berekenen moeten we **eerst** de som nemen van de aparte waarden. Omdat de optelling geen voorrang krijgt op de deling, is het belangrijk dat we som van de 3 maanden met behulp van haakjes voorrang geven. Vervolgens delen we door 3.0. **We delen niet door 3 maar door 3.0**, anders verliezen we cijfers na de komma want dan hebben we een deling van 2 integers i.p.v. een integer en een double.
:::

```csharp
int september = 224;
int oktober = 177;
int november = 210;
double gemiddelde = (september + oktober + november) / 3.0;
Console.WriteLine("Je sliep gemiddeld:"+gemiddelde + " uren per maand.");     
```

## Euro naar dollar

:::{.callout-tip}
**Les(sen) uit deze oefening:** Het is een goede gewoonte om je *constanten* (zoals de koers) in een aparte variabele te bewaren. Je zou deze oefening ook sneller kunnen doen door lijn 2 weg te laten en 3 te vervangen door: ``double bedragInDollar = bedragInEuro * 1.03;``, maar dat raden we af. Stel dat je later in deze code ook op een andere plek nog de koers nodig hebt, dan moet je ook op die plek 1.03 schrijven...en wat als dan later de koers verandert? Dan moet je overal dat getal veranderen. Via een aparte variabele moeten we het getal 1.03 maar eenmalig typen.
:::

```csharp
double bedragInEuro = 78.65;
double koers = 1.03;
double bedragInDollar = bedragInEuro * koers;
Console.WriteLine(bedragInEuro + " EUR is gelijk aan "+bedragInDollar + " USD.");
```

## Kill/Death-ratio

:::{.callout-tip}
**Les(sen) uit deze oefening:** Het is belangrijk dat minstens 1 van je 2 variabelen een ``double`` is. Anders zal je deling een integer geven en ben je de getallen na de komma kwijt. 
:::

```csharp
double kills=44;
double deaths = 9.0;

Console.WriteLine("Je k/d-ratio is "+(kills/deaths));
```




## BTW

:::{.callout-tip}
**Les(sen) uit deze oefening:** BTW berekenen is een typische programmeeropdracht. Merk op dat we hier de haakjes niet noodzakelijk nodig hebben, de berekening zal ook werken zonder. Maar het kan geen kwaad om soms je code wat leesbaarder te maken met behulp van haakjes in je berekeningen.
:::

```csharp
double prijs = 20;
const double BTW = 21.0;

double berekening = prijs + (prijs / 100) * BTW;

Console.WriteLine("Prijs "+prijs + " euro zonder btw. Met BTW: " + berekening + " euro.");    
```

## Gewicht in space

```csharp
double gewichtOpAarde = 80.6;
const double gMerc = 0.38;
const double gVenus = 0.91;
//enzovoort

Console.WriteLine("Je weegt op Mercurius "+ (gewichtOpAarde*gMerc)+ " N.");
Console.WriteLine("Je weegt op Venus " + (gewichtOpAarde * gVenus) + " N.");
//enzovoort
```



## Tafel en Console.Clear()

:::{.callout-tip}
**Les(sen) uit deze oefening:** Deze wat omslachtige oefening gaan we later versnellen met behulp van loops.  Let op het gebruik van ``ReadLine`` en ``Clear``. Als we geen ``ReadLine`` voor de ``Clear`` zouden zetten, dan zouden we ogenblikkelijk de laatste *tafel* zien, daar alle vorige *tafels* pijlsnel op het scherm kwamen én ogenblikkelijk werden verwijderd nog voor we ze zouden zien. We misbruiken ``ReadLine`` eigenlijk door invoer aan de gebruiker te vragen, maar er niets mee te doen. Het is gewoon een soort pauze vlak voor de volgende ``Clear``.
:::

```csharp
int tafel = 411;
int getal = 1;

Console.WriteLine(tafel+"x"+getal+"="+ (tafel*getal));
getal++;
Console.ReadLine();
Console.Clear();
Console.WriteLine(tafel + "x" + getal + "=" + (tafel * getal));
getal++;
Console.ReadLine();
Console.Clear();
Console.WriteLine(tafel + "x" + getal + "=" + (tafel * getal));
getal++;
Console.ReadLine();
Console.Clear();
Console.WriteLine(tafel + "x" + getal + "=" + (tafel * getal));
getal++;
Console.ReadLine();
Console.Clear();
Console.WriteLine(tafel + "x" + getal + "=" + (tafel * getal));
getal++;
Console.ReadLine();
Console.Clear();
Console.WriteLine(tafel + "x" + getal + "=" + (tafel * getal));
getal++;
Console.WriteLine(tafel + "x" + getal + "=" + (tafel * getal));
getal++;
Console.ReadLine();
Console.Clear();
Console.WriteLine(tafel + "x" + getal + "=" + (tafel * getal));
getal++;
Console.ReadLine();
Console.Clear();
Console.WriteLine(tafel + "x" + getal + "=" + (tafel * getal));
getal++;
Console.ReadLine();
Console.Clear();
Console.WriteLine(tafel + "x" + getal + "=" + (tafel * getal));
      
```

## Simple maths

:::{.callout-tip}
**Les(sen) uit deze oefening:** Deze wat vreemde oefening wil je doen inzien dat volgorde van berekeningen met behulp van haakjes kan aangepast worden. Bekijk zeker de derde opgave nog eens in detail. De volgorde hier is als volgt:

1. Eerst wordt -4 * 6  gedaan, dat geeft -24.
2. Dit getal wordt gedeeld door 11. Omdat 11 een ``int`` is zou deze deling -2 geven (alles na de komma weg), daarom dat we van die 11 een kommagetal maken. We krijgen dan -2.181818....
3. Finaal tellen we -2.181818... bij 14 op en krijgen we  11.8181818181...
:::

```csharp
int resultaat1 = -1 + 4 * 6;
int resultaat2 = ( 35 + 5 ) % 7;
double resultaat3 = 14 + -4 * 6 / 11.0; // begrijp je waarom je het stuk na de komma niet ziet?
double resultaat4 =  2 + 15 / 6.0 * 1 - 7 % 2;

Console.WriteLine("-1 + 4 * 6 geeft " + resultaat1);
Console.WriteLine("( 35 + 5 ) % 7 geeft" + resultaat2);
Console.WriteLine(" 14 + -4 * 6 / 11 geeft " + resultaat3);
Console.WriteLine("2 + 15 / 6 * 1 - 7 % 2 geeft "+resultaat4);
```





## Tekstmaker

```java
Console.WriteLine("Filenaam?");
string naamBestand = Console.ReadLine();
Console.WriteLine("Inhoud bestand?");
string inhoudBestand = Console.ReadLine();

System.IO.File.WriteAllText(naamBestand, inhoudBestand);
```

::::
