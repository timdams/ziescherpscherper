

:::{.callout-tip}
Vanaf dit hoofdstuk zul je véél meer oefeningen voorgeschoteld krijgen dan je kan afwerken in 1 labo tijd (I dare you ;) ). Selecteer zelf de oefeningen die je wenst te doen en sla die over waarvan je overtuigd bent ze al te kunnen. 
:::


:::{.callout-tip}
De oefeningen zijn, in de mate van het mogelijke, gerangschikt op relatieve moeilijkheidsgraad.
:::

:::{.callout-tip}
Indien niet expliciet vermeld mag je kiezen met wat voor loop (``for``, ``while``, ``do while``) je het probleem zal oplossen. Denk echter steeds goed na wat voor loop de beste keuze is. Indien je van te voren weet hoe vaak de loop moet uitgevoerd worden, dan is een ``for`` de beste keuze. Weet je dat niet dan kies je voor ``while`` of `` do while`` (weet je nog het verschil tussen beiden?).
:::

:::{.callout-tip}
Oefeningen waar *n* wordt gebruikt geven aan dat dit een getal is dat je aan de gebruiker vraagt aan de start.
:::


<!--# Oefeningen week 1-->




# Opwarmers 1 (*Essential*)

# Opwarmers 1 (*Essential*)

* Toon alle natuurlijke getallen van 1 tot *n*. (bv 1,2,3,4,5,6)
* Toon alle natuurlijke getallen van *n* tot 1. (bv 6,5,4,3,2,1)
* Toon alle even getallen tussen 1 en 100. (2,4,6,...100)
* Toon alle oneven getallen tussen 1 en 100. (1,3,5,7,...99)
* Toon de som van alle getallen van 1 tot *n* (dus 1+2+3+4+...+n).
* Toon de som van alle even getallen van 1 tot *n*. (voorbeeld:indien de gebruiker 7 invoerde dan zal er 12 op het scherm verschijnen , namelijk (2+4+6)).
* Toon de som van alle oneven getallen van 1 tot *n*. 


# Opwarmers van opwarmers

# Opwarmers van opwarmers


:::{.callout-tip}
Met afsluitwaarde bedoelen we een waarde die de gebruiker moet invoeren om het programma te stoppen. Dus zolang de gebruiker NIET die afsluitwaarde invoert zal het programma om nieuwe waarden blijven vragen.
:::

1. Lees een willekeurig aantal getallen van de gebruiker (de gebruiker kiest zelf de getallen) met als afsluitwaarde 0. Bereken de som en druk die af. Je blijft dus de getallen van de gebruiker optellen tot deze 0 invoert, dan stopt het programma.
2. Lees een willekeurig aantal getallen in met als afsluitwaarde 0. Druk het aantal strikt positieve en het aantal strikt negatieve getallen af.
3. Lees een willekeurig aantal getallen in met als afsluitwaarde -32768. Bepaal het aantal strikt positieve getallen, het aantal strikt negatieve getallen en het aantal getallen gelijk aan nul. Druk deze aantallen af.
4. Lees een willekeurig aantal getallen in met als afsluitwaarde 0. Bereken het product en druk dit af.
5. (PRO) Lees een getal in en druk de som van zijn cijfers af. 
6. Lees een willekeurig aantal positieve getallen in en bereken het (afgekapt) gemiddelde ervan. De afsluitwaarde is een willekeurig negatief getal.
7. Lees een willekeurig aantal getallen in met afsluitwaarde -32768. Druk het kleinste getal af en het aantal keer dat het voorkomt. Als de gebruiker volgende reeks invoerde: "3,2,1,2,3,1,4,5,1,2,-32768'. Dan komt er 1 als kleinste getal op het scherm en 3 (omdat 1 drie maal werd ingetypt)
8. Een reeks in stijgende volgorde gesorteerde getallen wordt ingelezen. De invoer moet stoppen indien er een fout in de sorteervolgorde voorkomt.
9. Een reeks getallen wordt ingelezen. De invoer moet stoppen indien er twee maal achter elkaar een nul wordt ingelezen. Het gemiddelde van de reeks getallen wordt afgedrukt. De laatste twee nullen tellen uiteraard niet mee voor de bepaling van het gemiddelde.
10. Bepaal de som van de kwadraten van de even natuurlijke getallen van 50 tot 100 (inbegrepen). De som wordt afgedrukt.
11. Een reeks van 100 getallen wordt ingelezen. Van de positieve getallen moet er afgedrukt worden hoeveel deelbaar waren door 2, hoeveel deelbaar waren door 3 en hoeveel door 6.
12. Druk de som af van de eerste 30 termen van de volgende reeksen:
 * 6 + 12 + 18 + 24 + 30 + ...
 * 4 + 12 + 20 + 28 + 36 + ...
 * 1 + 2 + 4 + 8 + 16 + ...
 * 1 + 1/2 + 1/4 + 1/8 + 1/16 + ...
 * 1 + 1/3 + 1/5 + 1/7 + 1/9 + ...
 * 1/2 + 1/3 + 1/5 + 1/9 + 1/17 + ...
13. Druk de som af van de eerste 20 termen van de volgende reeksen:
 * 4 + 8 + 12 + 16 + 20 + ...
 * 4 + 10 + 16 + 22 + 28 + ...
 * 1 + 3 + 9 + 27 + 81 + ...
 * 1/2 + 1/4 + 1/6 + 1/8 + 1/10 + ...
 * 1 + 1/2 + 1/4 + 1/8 + 1/16 + ...
 * 1 + 1/3 + 1/7 + 1/15 + 1/31 + ...



# Tafels van vermenigvuldigen 1 

# Tafels van vermenigvuldigen 1 
Gebruik de kracht van loops om pijlsnel de tafels van vermenigvuldigen op het scherm te tonen *van een getal naar keuze*(dus bijvoorbeeld 2x1, 2x2, tot 2x10 en alles daartussen).


# Tafels van supervermenigvuldigen   (*Essential*)

# Tafels van supervermenigvuldigen   (*Essential*)
Gebruik de kracht van **geneste** loops om pijlsnel alle tafels van vermenigvuldigen op het scherm te tonen *van de getallen 1 tot en met n*(dus 1x1, 1x2,... 1xn, 2x1, 2x2,...,2xn tot en met n x n).


# RNA Transscriptie (*Essential*)

# RNA Transscriptie (*Essential*)

DNA heeft steeds een RNA-complement (DNA is het gevolg van RNA transscriptie). Schrijf een programma dat een ingevoerde DNA-string omzet naar een RNA-string. De gebruiker voert steeds 1 DNA-nucleotide in per keer en duwt op enter, de RNA string wordt steeds groter. Na 12 karakters stopt het programma.

De omzetting is als volgt:
* G wordt C
* C wordt G
* T wordt A
* A wordt U

Als de gebruiker dus ``ACGTGGTCTTAA`` heeft ingevoerd moet het resultaat: ``UGCACCAGAAUU`` zijn. 

Ga er van uit dat de gebruiker letter per letter invoert (telkens dus enter na een letter) en je de omgezette string doet groeien (m.b.v. ``+=``).


# Armstrong nummer (PRO)

# Armstrong nummer (PRO)
Een getal is een *narcistisch getal* of *armstronggetal* als het de som is van zijn eigen cijfers elk tot de macht verheven van het aantal cijfers.

* 9 is een Armstrong nummer, want 9 = 9^1 = 9
* 10 is geen Armstrong nummer, want 10 != 1^2 + 0^2 = 1
* 153 is een  Armstrong nummer, want: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
* 154 is geen  Armstrong nummer, want: 154 != 1^3 + 5^3 + 4^3 = 1 + 125 + 64 = 190

Schrijf een programma dat aan de gebruiker een getal vraagt en vervolgens toont of het ingevoerde getal een Armstrong-nummer is of niet.

:::{.callout-tip}
Je zou deze oefening kunnen oplossen door het ingevoerde getal als string op te splitsen in individuele char's. Maar we raden je aan om de "wiskunde" weg te volgen zodat je terdege leert met loops en wiskunde te werken.

Stel dat je het getal 4563 hebt:

* Eerst deel je 4563 door 1000. Dit geeft **4**. 
* We trekken 4x1000 van 4563 af. Dit geeft 563.
* Deel 563 door 100. Dit geeft **5**.
* We trekken 5x100 van 563 af. Dit geeft 63.
* Deel 63 door 10. Dit geeft **6**.
* We trekken 6 x 10 van 63 af. Dit geeft **3**
:::

:::{.callout-tip}
Je kan van een string weten hoe groot deze is als volgt:

```csharp
//veronderstellend dat myInputGetal van het type string is
int lengte= myInputGetal.Length;  
```
Je kan dan nu met ``Math.Pow(10,lengte-1)`` berekenen vanaf welke exponent van 10 we moeten beginnen werken.
:::



# Schaak-elo met loop 

# Schaak-elo met loop 

Zorg ervoor dat je Schaak-elo programma "blijft werken" als volgt:

1° De gebruiker geeft z'n begin Elo-rating op
2° Een loop start en vraagt nu telkens de Elo-rating van de huidige tegenstander, gevolgd door de uitslag. Telkens wordt de nieuwe Elo-rating van de gebruiker getoond. Wanneer de gebruiker een negatieve rating voor z'n volgende tegenstander opgeeft stopt de loop.


# Euler project (*Essential*)

# Euler project (*Essential*)
Maak volgende opdracht van [projecteuler.net](http://projecteuler.net):
>Indien we alle natuurlijke getallen van 0 tot en met 10 oplijsten die een meervoud van 3 of 5 zijn, dan krijgen we de getallen 3,5,6,9 en 10. De som van deze 4 getallen is 33.
Maak nu een programma dat de som van alle veelvouden van 3 of 5 weergeeft van 0 tot en met 1000 (dit zou 234168 moeten geven).

:::{.callout-tip}
De modulo-operator (``%``) is je grote held hier. Een getal is een veelvoud van x indien ``getal % x`` 0 als resultaat geeft.
:::


# For doordenker (PRO)

# For doordenker (PRO)
Schrijf een programma dat de volgende output geeft, gegeven dat de gebruiker een maximum waarde invoert, dus als hij 4 ingeeft dan zal de driehoek maximum 4 breed worden. Gebruik enkel 2 geneste for-loops!
```
*
**
***
****
***
**
*
```



# De Casting Call (*Final Essentials*)

# De Casting Call (*Final Essentials*)

Jij bent de regisseur van de volgende grote Hollywood-blockbuster. Vandaag houd je een casting call om de hoofdrolspeler te vinden. Schrijf een programma dat dit auditieproces beheert.

1.  **Start de auditie**: Het programma vraagt in een oneindige lus naar de **naam** van de kandidaat.
    *   De lus stopt enkel wanneer de gebruiker als naam `STOP` invoert.
2.  **Beoordeling**:
    *   Vraag voor elke kandidaat een **auditiescore** (een geheel getal van 0 tot 10).
    *   Is de score **lager dan 7**? Toon de boodschap: *"Helaas [Naam], je rol is uitgeknipt."*
    *   Is de score **7 of hoger**? Toon de boodschap: *"Proficiat [Naam], je bent door naar de screentest!"*
3.  **De statistieken**:
    *   Houd bij **hoeveel** acteurs er in totaal doorzijn naar de volgende ronde.
    *   Houd bij wie de **beste auditie** van de dag had (de hoogste score). Onthoud hierbij zowel de naam als de score.
4.  **De aftiteling**:
    *   Wanneer de auditie voorbij is (na `STOP`), toon je een samenvatting:
        *   Het totaal aantal acteurs dat de screentest haalde.
        *   De naam en score van de beste acteur van de dag. (Bv: *"De rol gaat waarschijnlijk naar Leonardo met een topscore van 9/10!"*)

:::{.callout-tip}
Je zal variabelen nodig hebben die *buiten* je lus gedefinieerd zijn om de 'beste' naam en 'hoogste' score tot nu toe te onthouden. Bij elke nieuwe score die hoger is dan je huidige maximun, update je deze variabelen.
:::





# Huiswerk Loops 1

# Huiswerk Loops 1


:::{.callout-tip}
Een extra grote hoop oefeningen om je loops te oefenen ([originele bron](https://codeforwin.org/2015/06/for-do-while-loop-programming-exercises.html)). De oefeningen zijn gerangschikt naar moeilijkheid, je moet deze allemaal met loops oplossen! Hoe ver geraak je?

Probeer niet alle oefeningen met hetzelfde type loop te doen, wissel tussen ``while``, ``do-while`` en ``for``.
:::


:::{.callout-warning}
**Indien er sprake is van *n* in de opgave dan is dit een getal dat je eerst aan de gebruiker moet vragen.**
:::

:::{.callout-warning}
Opgelet: de oplossing van dit soort oefeningen vind je overal. Weersta hier aan, en probeer ZELF de oplossing te vinden. Dat is de enige manier om dit te leren.
:::

:::{.callout-tip}
Niet zeker van je oplossing? Test of je met minimale aanpassing de grenzen van je programma kunt aanpassen. Als je bijvoorbeeld de getallen van 1 tot 100 moet tonen dan zou je met 2 wijzigingen maximum dit moeten kunnen aanpassen naar de getallen van -1000 tot 21234.
:::


## Loops-a-volonté

*Beide grenzen zijn steeds inbegrepen!*



* Schrijf een programma dat alle Unicode karakters en hun waarde toont van 10 tot *n* (tip: ``char c = Convert.ToChar(65); `` zal hoofdletter ``A`` tonen). Merk op dat sommige unicode karakters (zeker die vooraan) "onzichtbaar" zijn en dus niets op het scherm zullen geven.
* Toon het alfabet van a tot z.
* Schrijf een programma dat de macht van een getal toont. De gebruiker voert eerst het getal in, gevolgd door de macht (bv. 2 en 4 zal als resultaat 16 geven (2 tot de 4e macht)). Merk op dat je geen gebruik mag maken van ``Math.Pow``. Je dient zelf de vermenigvuldiging helemaal (m.b.v. loops) uit te voeren.
* Schrijf een programma een getal *n* ontbindt in [factoren](https://nl.wikipedia.org/wiki/Factorisatie). Factoren zijn de getallen waardoor je *n* kan delen zonder rest (van  bijvoorbeeld het getal 100 zijn de factoren 1, 2, 4, 5, 10, 20, 25, 50 en 100).
* Schrijf een programma dat controleert of een getal priem is of niet.
* Toon alle priemgetallen van 1 tot *n*.
* Toon de reeks van [Fibonacci](https://en.wikipedia.org/wiki/Fibonacci_number) tot *n* termen.
* Schrijf een programma dat het aantal digits in een getal telt (het getal 12348 heeft bijvoorbeeld 5 digits).
* (PRO) Schrijf een programma dat een ingevoerd getal als tekst uitschrijft. Als de gebruiker dus 123 invoert zal de uitvoer zijn: honderd drie en twintig.


## Cooldown
* Toon alle getallen die een veelvoud van 3 zijn en oneven zijn tot en met 100.
* Toon alle machten tot 5 van *n*.
* Toon de tafels tot 10 van ieder getal van 1 tot en met *n*. Toon iedere tafel horizontaal!
  Als de gebruiker 8 invoert verschijnt er:
    
    ```text
    1x1=1,2x1=2,3x1=3,4x1=4,5x1=5,6x1=6,7x1=7,8x1=8, 
    ... 
    1x10=10,2x10=20,3x10=30,4x10=40,5x10=50,6x10=60,7x10=70,8x10=80, 
    ```

* Schrijf een programma om de eerste *n* termen van een harmonische reeks te tonen en bereken vervolgens de som van deze termen. Als de gebruiker bijvoorbeeld 5 invoert  verschijnt er (de laatste plus mag je tonen om geen onnodige ingewikkelde code te moeten schrijven):
    
    ```text
    1/1 + 1/2 + 1/3 + 1/4 + 1/5 + 
    Som = 2.283334 
    ```
* Schrijf een programma dat de som van de serie 9+99+999+9999+99999+999999 berekent (mét loop uiteraard).
* Vraag aan de gebruiker getallen tot hij -1 invoert. Toon het gemiddelde van de ingevoerde getallen.




::::{.callout-caution collapse="true" title="Oplossing"}

![](../assets/infoclip.png)

* [Oplossingen eerste opwarmers](https://ap.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=be06eb23-fc0f-4863-93e1-ac79008c180a)


## Oplossing Tafels van vermenigvuldiging 1:
```java
int teller= 1;
int n = int.Parse(Console.ReadLine());
while(teller <= 10)
{
    int product= teller * n;
    Console.WriteLine($"{teller} x {n} = {product}");
    teller++;
}
```

## Tafels van supervermenigvuldigen

```java
int n =  int.Parse(Console.ReadLine());
for (int i = 1;i <= n; i++)
{
    for(int j = 1; j <= n; j++)
    {
        Console.WriteLine($"{i} x {j} = {i*j}");
    }
}
```
## Oplossing DNA Transscriptie
```java
string inp= "", DNA= "", RNA= "";
int teller=0;
do
{
    Console.WriteLine("Voer G, C, T of A in");
    inp = Console.ReadLine();
    switch(inp)
    {
        case "G":
            DNA += "G";
            RNA += "C";
            break;
        case "C":
            DNA += "C";
            RNA += "G";
            break;
        case "T":
            DNA += "T";
            RNA += "A";
            break;
        case "A":
            DNA += "A";
            RNA += "U";
            break;
        default:
            Console.WriteLine("Onbekende invoer. We stoppen ermee.");
            inp = "stop";
            break;
    }
    teller++;
}while(teller < 12);
Console.WriteLine("Resultaat:");
Console.WriteLine(DNA);
Console.WriteLine(RNA);	  
```

## Oplossing Armstrong nummer
```java
    Console.WriteLine("Voer getal in:");
    int getal= Convert.ToInt32(Console.ReadLine());
    //1° Aantal cijfers ontdekken
    int aantalcijfers= 0;
    int deling= 0;
    int maaltien= 10;
    do
    {
        deling = getal / maaltien;
        maaltien *= 10;
        aantalcijfers++;
    } while (deling != 0);
    
    //2° Kijken of het armstrong is
    int som = 0;
    int enkelgetal = 0;
    int aantalloops = aantalcijfers;
    int tussengetal = getal;
    while (aantalloops > 0)
    {
        enkelgetal = tussengetal / (int)Math.Pow(10, aantalloops - 1);
        som += (int)Math.Pow(enkelgetal, aantalcijfers);

        tussengetal = tussengetal - (enkelgetal * (int)Math.Pow(10, aantalloops - 1));
        aantalloops--;
    }

    if (som == getal)
    {
        Console.WriteLine("Getal is een armstrong getal!");
    }
```

## Oplossing Euler project
```java
int som= 0;
for (int i= 0; i <= 1000; i++)
{
    if(i % 3 == 0 || i % 5 == 0)
    {
        som += i;
    }
}
Console.WriteLine($"Som:{som}");
```

![](../assets/infoclip.png)

* [Oplossingen drill en opwarmers](https://ap.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=93c5cd9e-e621-4e9f-a180-ab0a00d9c08f)
* [Oplossing "priemgetal detectie"](https://ap.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=8315eaf5-e6a2-402b-8e62-adf000cda005)


## For doordenker (PRO)

```java
Console.Write("Geef de maximale breedte van de driehoek in: ");
int maxBreedte = int.Parse(Console.ReadLine());

for (int i = 1; i <= 2 * maxBreedte - 1; i++)
{
    int aantalSterretjes = i ;
    if(i > maxBreedte)
        aantalSterretjes= 2 * maxBreedte - i;
    for (int j = 1; j <= aantalSterretjes; j++)
    {
        Console.Write("*");
    }
    Console.WriteLine();
}
```
::::
