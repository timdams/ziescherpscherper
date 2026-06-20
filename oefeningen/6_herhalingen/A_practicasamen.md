

:::{.callout-tip}
Vanaf dit hoofdstuk zul je véél meer oefeningen voorgeschoteld krijgen dan je kan afwerken in 1 labo tijd (I dare you ;) ). Selecteer zelf de oefeningen die je wenst te doen en sla die over waarvan je overtuigd bent ze al te kunnen. 
:::



:::{.callout-warning}
Indien niet expliciet vermeld mag je kiezen met wat voor loop (``for``, ``while``, ``do while``) je het probleem zal oplossen. Denk echter steeds goed na wat voor loop de beste keuze is. Indien je van te voren weet hoe vaak de loop moet uitgevoerd worden, dan is een ``for`` de beste keuze. Weet je dat niet dan kies je voor ``while`` of `` do while`` (weet je nog het verschil tussen beiden?).
:::

:::{.callout-warning}
Denk eraan dat je geen `break` of `continue` mag gebruiken in deze oefeningen. Je moet dus steeds een oplossing vinden die zonder deze keywords kan.
:::

:::{.callout-tip}
Oefeningen waar *n* wordt gebruikt geven aan dat dit een getal is dat je aan de gebruiker vraagt aan de start.
:::


<!--# Oefeningen week 1-->





# Opwarmers 1 (*Essential*) {#h06-opwarmers-1}

* Toon alle natuurlijke getallen van 1 tot *n*. (bv 1,2,3,4,5,6)

::::{.callout-caution collapse="true" title="Oplossing"}
```java
for (int i = 1; i <= n; i++)
    Console.Write($"{i} ");
Console.WriteLine();
```
::::

* Toon alle natuurlijke getallen van *n* tot 1. (bv 6,5,4,3,2,1)

::::{.callout-caution collapse="true" title="Oplossing"}
```java
for (int i = n; i >= 1; i--)
    Console.Write($"{i} ");
Console.WriteLine();
```
::::

* Toon alle even getallen tussen 1 en 100. (2,4,6,...100)

::::{.callout-caution collapse="true" title="Oplossing"}
```java
for (int i = 2; i <= 100; i += 2)
    Console.Write($"{i} ");
Console.WriteLine();
```
::::
* Toon alle oneven getallen tussen 1 en 100. (1,3,5,7,...99)

::::{.callout-caution collapse="true" title="Oplossing"}
```java
for (int i = 1; i <= 100; i += 2)
    Console.Write($"{i} ");
Console.WriteLine();
```
::::

* Toon de som van alle getallen van 1 tot *n* (dus 1+2+3+4+...+n).

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int som5 = 0;
for (int i = 1; i <= n; i++)
    som5 += i;
Console.WriteLine($"Som 1 tot {n} = {som5}");
```
::::

* Toon de som van alle even getallen van 1 tot *n*. (voorbeeld:indien de gebruiker 7 invoerde dan zal er 12 op het scherm verschijnen , namelijk (2+4+6)).

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int som6 = 0;
for (int i = 2; i <= n; i += 2)
    som6 += i;
Console.WriteLine($"Som even tot {n} = {som6}");
```
::::

* Toon de som van alle oneven getallen van 1 tot *n*. 

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int som7 = 0;
for (int i = 1; i <= n; i += 2)
    som7 += i;
Console.WriteLine($"Som oneven tot {n} = {som7}");
```
::::


# Opwarmers van opwarmers {#h06-opwarmers-van-opwarmers}


:::{.callout-tip}
Met afsluitwaarde bedoelen we een waarde die de gebruiker moet invoeren om het programma te stoppen. Dus zolang de gebruiker NIET die afsluitwaarde invoert zal het programma om nieuwe waarden blijven vragen.
:::

* Lees een willekeurig aantal getallen van de gebruiker (de gebruiker kiest zelf de getallen) met als afsluitwaarde 0. Bereken de som en druk die af. Je blijft dus de getallen van de gebruiker optellen tot deze 0 invoert, dan stopt het programma.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int som1 = 0, getal1;
do
{
    Console.Write("Getal (0=stop): ");
    getal1 = int.Parse(Console.ReadLine());
    som1 += getal1;
} while (getal1 != 0);
Console.WriteLine($"Som: {som1}\n");
```
::::

* Lees een willekeurig aantal getallen in met als afsluitwaarde 0. Druk het aantal strikt positieve en het aantal strikt negatieve getallen af.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int aantalPos2 = 0, aantalNeg2 = 0, getal2;
do
{
    Console.Write("Getal (0=stop): ");
    getal2 = int.Parse(Console.ReadLine());
    if (getal2 > 0) aantalPos2++;
    else if (getal2 < 0) aantalNeg2++;
} while (getal2 != 0);
Console.WriteLine($"Positief: {aantalPos2}, Negatief: {aantalNeg2}\n");
```
::::

* Lees een willekeurig aantal getallen in met als afsluitwaarde -32768. Bepaal het aantal strikt positieve getallen, het aantal strikt negatieve getallen en het aantal getallen gelijk aan nul. Druk deze aantallen af.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
const int STOP= -32768;
int aantalPos3 = 0, aantalNeg3 = 0, aantalNul3 = 0, getal3;
do
{
    Console.Write($"Getal ({STOP}=stop): ");
    getal3 = int.Parse(Console.ReadLine());
    if (getal3 > 0) aantalPos3++;
    else if (getal3 < 0 && getal3 != STOP) aantalNeg3++;
    else if (getal3 == 0) aantalNul3++;
} while (getal3 != STOP);
Console.WriteLine($"Positief: {aantalPos3}, Negatief: {aantalNeg3}, Nul: {aantalNul3}\n");

```
::::

* Lees een willekeurig aantal getallen in met als afsluitwaarde 0. Bereken het product en druk dit af.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
long product4 = 1; int getal4;
do
{
    Console.Write("Getal (0=stop): ");
    getal4 = int.Parse(Console.ReadLine());
    if (getal4 != 0) product4 *= getal4;
} while (getal4 != 0);
Console.WriteLine($"Product: {product4}\n");
```
::::


* Lees een willekeurig aantal positieve getallen in en bereken het (afgekapt) gemiddelde ervan. De afsluitwaarde is een willekeurig negatief getal.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int som6 = 0, aantal6 = 0, getal6;
do
{
    Console.Write("Positief getal (negatief=stop): ");
    getal6 = int.Parse(Console.ReadLine());
    if (getal6 >= 0) { som6 += getal6; aantal6++; }
} while (getal6 >= 0);

if (aantal6 > 0)
    Console.WriteLine($"Gemiddelde: {som6 / aantal6}");
else
    Console.WriteLine("Geen getallen ingevoerd.");
```
::::

* Lees een willekeurig aantal getallen in met afsluitwaarde -32768. Druk het kleinste getal af en het aantal keer dat het voorkomt. Als de gebruiker volgende reeks invoerde: "3,2,1,2,3,1,4,5,1,2,-32768'. Dan komt er 1 als kleinste getal op het scherm en 3 (omdat 1 drie maal werd ingetypt)

::::{.callout-caution collapse="true" title="Oplossing"}
```java
const int STOP = -32768;
int kleinste7 = int.MaxValue, aantalKleinste7 = 0, getal7;
do
{
    Console.Write($"Getal ({STOP}=stop): ");
    getal7 = int.Parse(Console.ReadLine());
    if (getal7 != STOP)
    {
        if (getal7 < kleinste7) { kleinste7 = getal7; aantalKleinste7 = 1; }
        else if (getal7 == kleinste7) aantalKleinste7++;
    }
} while (getal7 != STOP);
Console.WriteLine($"Kleinste: {kleinste7}, komt {aantalKleinste7}x voor\n");
```
::::

* Een reeks in stijgende volgorde gesorteerde getallen wordt ingelezen. De invoer moet stoppen indien er een fout in de sorteervolgorde voorkomt.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int vorige8 = int.MinValue, getal8;
bool fout = false;
do
{
    Console.Write("Getal: ");
    getal8 = int.Parse(Console.ReadLine());
    if (getal8 < vorige8)
    {
        Console.WriteLine("Sorteerfout!");
        fout = true;
    }
    else
        vorige8 = getal8;
} while (!fout);
Console.WriteLine();
```
::::

* Een reeks getallen wordt ingelezen. De invoer moet stoppen indien er twee maal achter elkaar een nul wordt ingelezen. Het gemiddelde van de reeks getallen wordt afgedrukt. De laatste twee nullen tellen uiteraard niet mee voor de bepaling van het gemiddelde.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
double som9 = 0;
int aantal9 = 0, vorigeNul9 = 0, getal9;
do
{
    Console.Write("Getal: ");
    getal9 = int.Parse(Console.ReadLine());
    if (getal9 == 0 && vorigeNul9 == 0)
        vorigeNul9 = 1;
    else if (getal9 != 0)
    {
        som9 += getal9;
        aantal9++;
        vorigeNul9 = 0;
    }
} while (!(getal9 == 0 && vorigeNul9 == 1));

if (aantal9 > 0)
    Console.WriteLine($"Gemiddelde: {som9 / aantal9}");
else
    Console.WriteLine("Geen getallen ingevoerd.");
```
::::

* Bepaal de som van de kwadraten van de even natuurlijke getallen van 50 tot 100 (inbegrepen). De som wordt afgedrukt.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int som10 = 0;
for (int i = 50; i <= 100; i += 2)
    som10 += i * i;
Console.WriteLine($"Som kwadraten even 50-100: {som10}\n");
```
::::

* Een reeks van 100 getallen wordt ingelezen. Van de positieve getallen moet er afgedrukt worden hoeveel deelbaar waren door 2, hoeveel deelbaar waren door 3 en hoeveel door 6.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int deel2 = 0, deel3 = 0, deel6 = 0;
for (int i = 0; i < 100; i++)
{
    Console.Write($"Getal {i + 1}/100: ");
    int g = int.Parse(Console.ReadLine());
    if (g > 0)
    {
        if (g % 2 == 0) deel2++;
        if (g % 3 == 0) deel3++;
        if (g % 6 == 0) deel6++;
    }
}
Console.WriteLine($"Deelbaar door 2: {deel2}, door 3: {deel3}, door 6: {deel6}\n");
```
::::

* Druk de som af van de eerste 30 termen van de volgende reeksen:
    * 6 + 12 + 18 + 24 + 30 + ...
    * 4 + 12 + 20 + 28 + 36 + ...
    * 1 + 2 + 4 + 8 + 16 + ...
    * 1 + 1/2 + 1/4 + 1/8 + 1/16 + ...
    * 1 + 1/3 + 1/5 + 1/7 + 1/9 + ...
    * 1/2 + 1/3 + 1/5 + 1/9 + 1/17 + ...

::::{.callout-caution collapse="true" title="Oplossing"}
```java
double s1 = 0, s2 = 0, s3 = 0, s4 = 0, s5 = 0, s6 = 0;
for (int i = 1; i <= 30; i++)
{
    s1 += 6 * i;                              // 6+12+18+...
    s2 += 4 + (i - 1) * 8;                   // 4+12+20+...
    s3 += Math.Pow(2, i - 1);                 // 1+2+4+8+...
    s4 += 1.0 / Math.Pow(2, i - 1);          // 1+1/2+1/4+...
    s5 += 1.0 / (2 * i - 1);                 // 1+1/3+1/5+...
    s6 += 1.0 / (Math.Pow(2, i - 1) + 1);   // 1/2+1/3+1/5+1/9+...
}
Console.WriteLine($"Reeks 30 termen:\n  6+12+18: {s1}\n  4+12+20: {s2}\n  1+2+4: {s3}\n  1+1/2+1/4: {Math.Round(s4,4)}\n  1+1/3+1/5: {Math.Round(s5,4)}\n  1/2+1/3+1/5: {Math.Round(s6,4)}\n");

```
::::

* Druk de som af van de eerste 20 termen van de volgende reeksen:
    * 4 + 8 + 12 + 16 + 20 + ...
    * 4 + 10 + 16 + 22 + 28 + ...
    * 1 + 3 + 9 + 27 + 81 + ...
    * 1/2 + 1/4 + 1/6 + 1/8 + 1/10 + ...
    * 1 + 1/2 + 1/4 + 1/8 + 1/16 + ...
    * 1 + 1/3 + 1/7 + 1/15 + 1/31 + ...

::::{.callout-caution collapse="true" title="Oplossing"}
```java
double t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0;
for (int i = 1; i <= 20; i++)
{
    t1 += 4 * i;                              // 4+8+12+...
    t2 += 4 + (i - 1) * 6;                   // 4+10+16+...
    t3 += Math.Pow(3, i - 1);                 // 1+3+9+27+...
    t4 += 1.0 / (2 * i);                     // 1/2+1/4+1/6+...
    t5 += 1.0 / Math.Pow(2, i - 1);          // 1+1/2+1/4+...
    t6 += 1.0 / (Math.Pow(2, i) - 1);        // 1+1/3+1/7+1/15+...
}
Console.WriteLine($"Reeks 20 termen:\n  4+8+12: {t1}\n  4+10+16: {t2}\n  1+3+9: {t3}\n  1/2+1/4+1/6: {Math.Round(t4,4)}\n  1+1/2+1/4: {Math.Round(t5,4)}\n  1+1/3+1/7: {Math.Round(t6,4)}");
```
::::




# Tafels van vermenigvuldigen 1 {#h06-tafels-van-vermenigvuldigen-1}
Gebruik de kracht van loops om pijlsnel de tafels van vermenigvuldigen op het scherm te tonen *van een getal naar keuze*(dus bijvoorbeeld 2x1, 2x2, tot 2x10 en alles daartussen).

::::{.callout-caution collapse="true" title="Oplossing"}
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
::::

# Tafels van supervermenigvuldigen   (*Essential*) {#h06-tafels-van-supervermenigvuldigen}
Gebruik de kracht van **geneste** loops om pijlsnel alle tafels van vermenigvuldigen op het scherm te tonen *van de getallen 1 tot en met n*(dus 1x1, 1x2,... 1xn, 2x1, 2x2,...,2xn tot en met n x n).

::::{.callout-caution collapse="true" title="Oplossing"}

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
::::

# RNA Transscriptie (*Essential*) {#h06-rna-transscriptie}

DNA heeft steeds een RNA-complement (DNA is het gevolg van RNA transscriptie). Schrijf een programma dat een ingevoerde DNA-string omzet naar een RNA-string. De gebruiker voert steeds 1 DNA-nucleotide in per keer en duwt op enter, de RNA string wordt steeds groter. Na 12 karakters stopt het programma.

De omzetting is als volgt:

* G wordt C
* C wordt G
* T wordt A
* A wordt U

Als de gebruiker dus ``ACGTGGTCTTAA`` heeft ingevoerd moet het resultaat: ``UGCACCAGAAUU`` zijn. 

Ga er van uit dat de gebruiker letter per letter invoert (telkens dus enter na een letter) en je de omgezette string doet groeien (m.b.v. ``+=``).

::::{.callout-caution collapse="true" title="Oplossing"}
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

::::

# Armstrong nummer (PRO) {#h06-armstrong-nummer}
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

```java
//veronderstellend dat myInputGetal van het type string is
int lengte= myInputGetal.Length;  
```
Je kan dan nu met ``Math.Pow(10,lengte-1)`` berekenen vanaf welke exponent van 10 we moeten beginnen werken.
:::


::::{.callout-caution collapse="true" title="Oplossing"}
```java
Console.Write("Geef een getal: ");
string invoer = Console.ReadLine();
int getal = int.Parse(invoer);
int lengte = invoer.Length;

int resterend = getal;
int som = 0;

for (int i = lengte - 1; i >= 0; i--)
{
    int deler = (int)Math.Pow(10, i);
    int cijfer = resterend / deler;
    resterend -= cijfer * deler;
    som += (int)Math.Pow(cijfer, lengte);
}

if (som == getal)
    Console.WriteLine($"{getal} is een Armstrong-nummer.");
else
    Console.WriteLine($"{getal} is geen Armstrong-nummer.");
```


::::

# Schaak-elo met loop {#h06-schaak-elo-met-loop}

Zorg ervoor dat je Schaak-elo programma "blijft werken" als volgt:

1. De gebruiker geeft z'n begin Elo-rating op
2. Een loop start en vraagt nu telkens de Elo-rating van de huidige tegenstander, gevolgd door de uitslag. Telkens wordt de nieuwe Elo-rating van de gebruiker getoond. Wanneer de gebruiker een negatieve rating voor z'n volgende tegenstander opgeeft stopt de loop.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
const int K = 10;
Random rng = new Random();

Console.WriteLine("Geef je begin Elo-rating:");
double ra = double.Parse(Console.ReadLine());

Console.WriteLine("Rating van de tegenstander (-1=stop):");
double rb = double.Parse(Console.ReadLine());

while (rb >= 0)
{
    double ea = 1 / (1 + Math.Pow(10, (rb - ra) / 400.0));
    double eb = 1 / (1 + Math.Pow(10, (ra - rb) / 400.0));

    Console.WriteLine("Wie won? A, B of D (draw):");
    string whowon = Console.ReadLine();

    double puntA = 0;
    double puntB = 0;
    if (whowon == "A")
        puntA = 1;
    else if (whowon == "B")
        puntB = 1;
    else if (whowon == "D")
    {
        puntA = 0.5;
        puntB = 0.5;
    }
    else
    {
        puntA = 1;
        Console.WriteLine("Onbekende waarde. Ik laat A winnen.");
    }

    ra = ra + K * (puntA - ea);
    Console.WriteLine($"Jouw nieuwe Elo-rating: {Math.Round(ra, 0)}\n");

    Console.WriteLine("Rating van de volgende tegenstander (-1=stop):");
    rb = double.Parse(Console.ReadLine());
}

Console.WriteLine($"Eindrating: {Math.Round(ra, 0)}");
```
::::

# Euler project (*Essential*) {#h06-euler-project}
Maak volgende opdracht van [projecteuler.net](http://projecteuler.net):

>Indien we alle natuurlijke getallen van 0 tot en met 10 oplijsten die een meervoud van 3 of 5 zijn, dan krijgen we de getallen 3,5,6,9 en 10. De som van deze 4 getallen is 33.

Maak nu een programma dat de som van alle veelvouden van 3 of 5 weergeeft van 0 tot en met 1000 (dit zou 234168 moeten geven).

:::{.callout-tip}
De modulo-operator (``%``) is je grote held hier. Een getal is een veelvoud van x indien ``getal % x`` 0 als resultaat geeft.
:::

::::{.callout-caution collapse="true" title="Oplossing"}
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
::::



# De Casting Call (*Final Essentials*) {#h06-de-casting-call}

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

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int aantalDoor = 0;
int hoogsteScore = -1;
string besteActeur = "";

Console.Write("Naam kandidaat (STOP=einde): ");
string naam = Console.ReadLine();

while (naam != "STOP")
{
    Console.Write("Auditiescore (0-10): ");
    int score = int.Parse(Console.ReadLine());

    if (score < 7)
        Console.WriteLine($"Helaas {naam}, je rol is uitgeknipt.");
    else
    {
        Console.WriteLine($"Proficiat {naam}, je bent door naar de screentest!");
        aantalDoor++;
    }

    if (score > hoogsteScore)
    {
        hoogsteScore = score;
        besteActeur = naam;
    }

    Console.Write("\nNaam kandidaat (STOP=einde): ");
    naam = Console.ReadLine();
}

Console.WriteLine($"\nAantal acteurs door naar screentest: {aantalDoor}");
Console.WriteLine($"De rol gaat waarschijnlijk naar {besteActeur} met een topscore van {hoogsteScore}/10!");
```

::::





## Loops-a-volonté

*Beide grenzen zijn steeds inbegrepen!*



* Schrijf een programma dat alle Unicode karakters en hun waarde toont van 10 tot *n* (tip: ``char c = Convert.ToChar(65); `` zal hoofdletter ``A`` tonen). Merk op dat sommige unicode karakters (zeker die vooraan) "onzichtbaar" zijn en dus niets op het scherm zullen geven.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
Console.Write("n? "); int n = int.Parse(Console.ReadLine());
for (int i = 10; i <= n; i++)
    Console.WriteLine($"{i} : {Convert.ToChar(i)}");
Console.WriteLine();
```
::::

* Toon het alfabet van a tot z.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
for (char c = 'a'; c <= 'z'; c++)
    Console.Write($"{c} ");
Console.WriteLine("\n");
```
::::

* Schrijf een programma dat de macht van een getal toont. De gebruiker voert eerst het getal in, gevolgd door de macht (bv. 2 en 4 zal als resultaat 16 geven (2 tot de 4e macht)). Merk op dat je geen gebruik mag maken van ``Math.Pow``. Je dient zelf de vermenigvuldiging helemaal (m.b.v. loops) uit te voeren.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
Console.Write("Getal? "); int grondtal = int.Parse(Console.ReadLine());
Console.Write("Macht? "); int macht = int.Parse(Console.ReadLine());
long resultaat = 1;
for (int i = 1; i <= macht; i++)
    resultaat *= grondtal;
Console.WriteLine($"{grondtal}^{macht} = {resultaat}\n");
```
::::

* Schrijf een programma een getal *n* ontbindt in [factoren](https://nl.wikipedia.org/wiki/Factorisatie). Factoren zijn de getallen waardoor je *n* kan delen zonder rest (van  bijvoorbeeld het getal 100 zijn de factoren 1, 2, 4, 5, 10, 20, 25, 50 en 100).

::::{.callout-caution collapse="true" title="Oplossing"}
```java
Console.Write("n? "); int getal = int.Parse(Console.ReadLine());
Console.Write($"Factoren van {getal}: ");
for (int i = 1; i <= getal; i++)
    if (getal % i == 0)
        Console.Write($"{i} ");
Console.WriteLine();
```
::::

* Schrijf een programma dat controleert of een getal priem is of niet.

::::{.callout-caution collapse="true" title="Oplossing"}
* [Oplossing "priemgetal detectie"](https://ap.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=8315eaf5-e6a2-402b-8e62-adf000cda005)
::::

* Toon alle priemgetallen van 1 tot *n*.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
Console.Write("n? "); int n = int.Parse(Console.ReadLine());
for (int i = 2; i <= n; i++)
{
    bool isPriem = true;
    for (int j = 2; j < i; j++)
        if (i % j == 0)
            isPriem = false;
    if (isPriem)
        Console.Write($"{i} ");
}
Console.WriteLine("\n");
```
::::

* Toon de reeks van [Fibonacci](https://en.wikipedia.org/wiki/Fibonacci_number) tot *n* termen.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
Console.Write("n? "); n = int.Parse(Console.ReadLine());
long a = 0, b = 1;
for (int i = 0; i < n; i++)
{
    Console.Write($"{a} ");
    long temp = a + b;
    a = b;
    b = temp;
}
Console.WriteLine("\n");
```
::::

* Schrijf een programma dat het aantal digits in een getal telt (het getal 12348 heeft bijvoorbeeld 5 digits).

::::{.callout-caution collapse="true" title="Oplossing"}
```java
Console.Write("Getal? "); int getal = int.Parse(Console.ReadLine());
int telling = 0;
int temp2 = getal;
if (temp2 == 0)
    telling = 1;
while (temp2 > 0)
{
    telling++;
    temp2 /= 10;
}
Console.WriteLine($"Aantal digits: {telling}\n");
```
::::



## Cooldown

* Toon alle getallen die een veelvoud van 3 zijn en oneven zijn tot en met 100.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
for (int i = 1; i <= 100; i++)
    if (i % 3 == 0 && i % 2 != 0)
        Console.Write($"{i} ");
Console.WriteLine("\n");
```
::::


* Toon alle machten tot 5 van *n*.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
Console.Write("n? "); int n = int.Parse(Console.ReadLine());
for (int i = 1; i <= 5; i++)
    Console.WriteLine($"{n}^{i} = {Math.Pow(n, i)}");
Console.WriteLine();
```
::::


* Toon de tafels tot 10 van ieder getal van 1 tot en met *n*. Toon iedere tafel horizontaal!
  Als de gebruiker 8 invoert verschijnt er:
    
```text
1x1=1,2x1=2,3x1=3,4x1=4,5x1=5,6x1=6,7x1=7,8x1=8, 
... 
1x10=10,2x10=20,3x10=30,4x10=40,5x10=50,6x10=60,7x10=70,8x10=80, 
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
Console.Write("n? "); n = int.Parse(Console.ReadLine());
for (int tafel = 1; tafel <= 10; tafel++)
{
    for (int getal = 1; getal <= n; getal++)
        Console.Write($"{getal}x{tafel}={getal * tafel},");
    Console.WriteLine();
}
Console.WriteLine();
```
::::

* Schrijf een programma om de eerste *n* termen van een harmonische reeks te tonen en bereken vervolgens de som van deze termen. Als de gebruiker bijvoorbeeld 5 invoert  verschijnt er (de laatste plus mag je tonen om geen onnodige ingewikkelde code te moeten schrijven):
    
```text
1/1 + 1/2 + 1/3 + 1/4 + 1/5 + 
Som = 2.283334 
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
Console.Write("n? "); n = int.Parse(Console.ReadLine());
double som4 = 0;
for (int i = 1; i <= n; i++)
{
    Console.Write($"1/{i} + ");
    som4 += 1.0 / i;
}
Console.WriteLine($"\nSom = {som4}\n");
```
::::


* Schrijf een programma dat de som van de serie 9+99+999+9999+99999+999999 berekent (mét loop uiteraard).

::::{.callout-caution collapse="true" title="Oplossing"}
```java
long som5 = 0;
long term = 9;
for (int i = 1; i <= 6; i++)
{
    som5 += term;
    term = term * 10 + 9;
}
Console.WriteLine($"Som 9+99+999+...: {som5}\n");
```
::::

* Vraag aan de gebruiker getallen tot hij -1 invoert. Toon het gemiddelde van de ingevoerde getallen.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
double som6 = 0; int aantal6 = 0;
Console.Write("Getal (-1=stop): ");
int getal6 = int.Parse(Console.ReadLine());
while (getal6 != -1)
{
    som6 += getal6;
    aantal6++;
    Console.Write("Getal (-1=stop): ");
    getal6 = int.Parse(Console.ReadLine());
}
if (aantal6 > 0)
    Console.WriteLine($"Gemiddelde: {som6 / aantal6}");
else
    Console.WriteLine("Geen getallen ingevoerd.");
```
::::




