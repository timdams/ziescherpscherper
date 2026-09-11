<!--# Oefeningen week 1-->

::: {.vooraf}
- Ook dit hoofdstuk heeft meer oefeningen dan je kan afwerken. Kies zelf, en focus op het leren werken met methoden. Tip van een lector: als een boek veel oefeningen over één onderwerp heeft, is dat onderwerp waarschijnlijk belangrijk.
- [Let op]{.let-op} De naam van een methode zegt wat ze doet. ``ReadLine`` en ``WriteLine`` horen enkel in een methode die ``Toon...`` of ``Vraag...`` heet. Alle andere methoden krijgen hun gegevens binnen via parameters (in plaats van ``ReadLine``) en geven hun resultaat terug met ``return`` (in plaats van ``WriteLine``).
- Schrijf elke methode ``static``, in ``class Program``, naast ``Main`` en nooit erin: een methode in een methode kost [3 punten](https://www.ziescherp.be/content/B_appendix/boete.html#boete-method).
- Test elke methode in ``Main`` door ze op te roepen. Een methode die nooit opgeroepen wordt, doet niets.
- In de voorbeelduitvoer begint gebruikersinvoer met ``>``.
:::

<!--# Oefeningen week 1-->




# Stel jezelf voor {#h07-stel-jezelf-voor}

Je eerste eigen methode: een voorstelling op het scherm, in twee delen.

**Deel 1.** Schrijf een methode ``ToonIntro`` die jezelf voorstelt op het scherm: "Ik ben Tim Dams, ik ben 18 jaar oud en woon in de Lambrisseringsstraat 666." Die gegevens mogen gewoon in de methode staan. In ``Main`` roep je ze zo op:

```java
ToonIntro();
```

:::{.callout-tip}
Deze methode toont enkel iets op het scherm en geeft niets terug. Haar returntype is dus ``void``.
:::

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static void ToonIntro()
{
    Console.WriteLine("Ik ben Tim Dams, ik ben 18 jaar oud en woon in de Lambrisseringsstraat 666.");
}

static void Main(string[] args)
{
    ToonIntro();
}
```
::::

**Deel 2.** Pas ``ToonIntro`` aan zodat je de naam, de leeftijd en het adres als parameters meegeeft:

```java
ToonIntro("Jos", 34, "Trammezantlei 21");
```

```text
Ik ben Jos, ik ben 34 jaar oud en woon in de Trammezantlei 21.
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static void ToonIntro(string naam, int leeftijd, string adres)
{
    Console.WriteLine($"Ik ben {naam}, ik ben {leeftijd} jaar oud en woon in de {adres}.");
}

static void Main(string[] args)
{
    ToonIntro("Jos", 34, "Trammezantlei 21");
    ToonIntro("Tim", 18, "Lambrisseringsstraat 666");
}
```
::::

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
* De methode van deel 1 doet altijd hetzelfde. Die van deel 2 kan je voor iedereen gebruiken: wat verschilt, geef je mee als parameter.
* Binnen de methode gedragen ``naam``, ``leeftijd`` en ``adres`` zich als gewone variabelen. Ze krijgen hun waarde bij de aanroep, in de volgorde van de signatuur.
::::


# Opwarmers (*Essential*) {#h07-opwarmers}

Schrijf onderstaande methoden en test ze in ``Main``: roep elke methode op met een paar waarden en toon het resultaat. Enkel ``ToonOnevenNummers`` toont zelf iets, want enkel zij heet ``Toon...``.

* ``static int Kwadraat(int getal)`` geeft het kwadraat van ``getal`` terug.
* ``static double BerekenStraal(double diameter)`` geeft de straal terug van een cirkel met die diameter.
* ``static double BerekenOmtrek(double diameter)`` geeft de omtrek terug van een cirkel met die diameter.
* ``static double BerekenOppervlakte(double diameter)`` geeft de oppervlakte terug van een cirkel met die diameter.
* ``static int Grootste(int getal1, int getal2)`` geeft het grootste van de twee getallen terug.
* ``static bool IsEven(int getal)`` geeft ``true`` terug als ``getal`` even is, en anders ``false``.
* ``static void ToonOnevenNummers(int tot)`` toont alle oneven getallen van 1 tot en met ``tot``.

:::{.callout-tip}
Voor de omtrek (2πr) en de oppervlakte (πr²) heb je de straal nodig. Die berekenen doe je al in ``BerekenStraal``: laat de twee andere methoden die gewoon oproepen. Zie [Methoden combineren](https://www.ziescherp.be/content/6_methoden/0c_methodencombineren.html).
:::

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static int Kwadraat(int getal)
{
    return getal * getal;
}

static double BerekenStraal(double diameter)
{
    return diameter / 2;
}

static double BerekenOmtrek(double diameter)
{
    return 2 * Math.PI * BerekenStraal(diameter);
}

static double BerekenOppervlakte(double diameter)
{
    double straal = BerekenStraal(diameter);
    return Math.PI * straal * straal;
}

static int Grootste(int getal1, int getal2)
{
    if (getal1 > getal2)
    {
        return getal1;
    }
    return getal2;
}

static bool IsEven(int getal)
{
    return getal % 2 == 0;
}

static void ToonOnevenNummers(int tot)
{
    for (int i = 1; i <= tot; i += 2)
    {
        Console.Write($"{i} ");
    }
    Console.WriteLine();
}

static void Main(string[] args)
{
    Console.WriteLine($"Het kwadraat van 7 is {Kwadraat(7)}");
    Console.WriteLine($"Een cirkel met diameter 10 heeft straal {BerekenStraal(10)}");
    Console.WriteLine($"en omtrek {BerekenOmtrek(10):F2} en oppervlakte {BerekenOppervlakte(10):F2}");
    Console.WriteLine($"Het grootste van 4 en 9 is {Grootste(4, 9)}");
    Console.WriteLine($"Is 7 even? {IsEven(7)}");
    ToonOnevenNummers(9);
}
```

```text
Het kwadraat van 7 is 49
Een cirkel met diameter 10 heeft straal 5
en omtrek 31,42 en oppervlakte 78,54
Het grootste van 4 en 9 is 9
Is 7 even? False
1 3 5 7 9
```

* ``return getal % 2 == 0;`` geeft de ``bool`` meteen terug. Een ``if`` die ``true`` of ``false`` teruggeeft, mag ook, maar is langer.
* In ``Grootste`` staat na de ``if`` geen ``else``: wie bij de eerste ``return`` komt, is de methode al uit.

[Uitleg via kennisclip](https://ap.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=7d5b4399-8c6c-4207-8e4d-a9af00b4ac58) (de code in de kennisclip wijkt licht af)
::::


# Grootste methode {#h07-grootste-methode}

Een methode die het grootste van drie getallen teruggeeft, in twee delen.

**Deel 1.** Schrijf een methode ``static int GrootsteVanDrie(int getal1, int getal2, int getal3)`` die het grootste van de drie getallen teruggeeft. Test ook met gelijke getallen, zoals 5, 9 en 9.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static int GrootsteVanDrie(int getal1, int getal2, int getal3)
{
    if (getal1 >= getal2 && getal1 >= getal3)
    {
        return getal1;
    }
    if (getal2 >= getal1 && getal2 >= getal3)
    {
        return getal2;
    }
    return getal3;
}

static void Main(string[] args)
{
    Console.WriteLine(GrootsteVanDrie(3, 8, 5));
    Console.WriteLine(GrootsteVanDrie(5, 9, 9));
}
```
::::

**Deel 2.** Schrijf ``GrootsteVanDrie`` opnieuw, maar nu in één lijn, met de methode ``Grootste`` voor twee getallen uit de Opwarmers.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static int Grootste(int getal1, int getal2)
{
    if (getal1 > getal2)
    {
        return getal1;
    }
    return getal2;
}

static int GrootsteVanDrie(int getal1, int getal2, int getal3)
{
    return Grootste(Grootste(getal1, getal2), getal3);
}

static void Main(string[] args)
{
    Console.WriteLine(GrootsteVanDrie(3, 8, 5));
    Console.WriteLine(GrootsteVanDrie(5, 9, 9));
}
```

Eerst wordt ``Grootste(getal1, getal2)`` uitgerekend. Het resultaat daarvan is de eerste parameter van de buitenste ``Grootste``. Een methode die werkt, kan je dus overal gebruiken, ook als parameter van zichzelf.
::::


# Rekenmachine (*Essential*) {#h07-rekenmachine}

Een rekenmachine in drie delen: eerst de rekenmethoden, dan een menu, dan een geheugen.

**Deel 1.** Schrijf de methoden ``TelOp``, ``TrekAf``, ``Vermenigvuldig`` en ``Deel``. Ze krijgen elk twee doubles mee en geven het resultaat van de bewerking terug. Test ze in ``Main``.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static double TelOp(double getal1, double getal2)
{
    return getal1 + getal2;
}

static double TrekAf(double getal1, double getal2)
{
    return getal1 - getal2;
}

static double Vermenigvuldig(double getal1, double getal2)
{
    return getal1 * getal2;
}

static double Deel(double getal1, double getal2)
{
    return getal1 / getal2;
}

static void Main(string[] args)
{
    Console.WriteLine(TelOp(7, 2));
    Console.WriteLine(TrekAf(7, 2));
    Console.WriteLine(Vermenigvuldig(7, 2));
    Console.WriteLine(Deel(7, 2));
}
```
::::

**Deel 2.** Maak er een rekenmachine van. Een menu vraagt welke bewerking de gebruiker wil (``+``, ``-``, ``*`` of ``/``), daarna twee getallen, en toont het resultaat met je methoden. Dat herhaalt zich tot de gebruiker ``q`` kiest. Delen door nul kan niet: toon dan een melding.

```text
Kies een bewerking (+, -, *, / of q om te stoppen):
>/
Eerste getal:
>7
Tweede getal:
>2
7 / 2 = 3,5
Kies een bewerking (+, -, *, / of q om te stoppen):
>q
```

::::{.callout-caution collapse="true" title="Oplossing"}
De vier methoden van deel 1 blijven. ``Main`` wordt:

```java
static void Main(string[] args)
{
    string keuze;
    do
    {
        Console.WriteLine("Kies een bewerking (+, -, *, / of q om te stoppen):");
        keuze = Console.ReadLine();
        if (keuze == "+" || keuze == "-" || keuze == "*" || keuze == "/")
        {
            Console.WriteLine("Eerste getal:");
            double getal1 = double.Parse(Console.ReadLine());
            Console.WriteLine("Tweede getal:");
            double getal2 = double.Parse(Console.ReadLine());

            switch (keuze)
            {
                case "+":
                    Console.WriteLine($"{getal1} + {getal2} = {TelOp(getal1, getal2)}");
                    break;
                case "-":
                    Console.WriteLine($"{getal1} - {getal2} = {TrekAf(getal1, getal2)}");
                    break;
                case "*":
                    Console.WriteLine($"{getal1} * {getal2} = {Vermenigvuldig(getal1, getal2)}");
                    break;
                case "/":
                    if (getal2 == 0)
                    {
                        Console.WriteLine("Delen door nul kan niet.");
                    }
                    else
                    {
                        Console.WriteLine($"{getal1} / {getal2} = {Deel(getal1, getal2)}");
                    }
                    break;
            }
        }
        else if (keuze != "q")
        {
            Console.WriteLine("Onbekende bewerking.");
        }
    } while (keuze != "q");
}
```

De methoden rekenen enkel, ``Main`` doet het vragen en het tonen. Zo kan je ``Deel`` ook gebruiken in een programma dat niets op het scherm zet.
::::

**Deel 3.** Een echte zakrekenmachine heeft een geheugen. Het geheugen start op 0. De gebruiker kiest telkens een bewerking en typt één getal, en de bewerking gebeurt op het geheugen. Met ``c`` zet je het geheugen terug op 0.

```text
Geheugen: 0
Kies een bewerking (+, -, *, /, c om te wissen of q om te stoppen):
>+
Getal:
>5
Geheugen: 5
Kies een bewerking (+, -, *, /, c om te wissen of q om te stoppen):
>*
Getal:
>3
Geheugen: 15
Kies een bewerking (+, -, *, /, c om te wissen of q om te stoppen):
>q
```

::::{.callout-caution collapse="true" title="Oplossing"}
De vier methoden van deel 1 blijven. ``Main`` wordt:

```java
static void Main(string[] args)
{
    double geheugen = 0;
    string keuze;
    do
    {
        Console.WriteLine($"Geheugen: {geheugen}");
        Console.WriteLine("Kies een bewerking (+, -, *, /, c om te wissen of q om te stoppen):");
        keuze = Console.ReadLine();
        if (keuze == "c")
        {
            geheugen = 0;
        }
        else if (keuze == "+" || keuze == "-" || keuze == "*" || keuze == "/")
        {
            Console.WriteLine("Getal:");
            double getal = double.Parse(Console.ReadLine());
            switch (keuze)
            {
                case "+":
                    geheugen = TelOp(geheugen, getal);
                    break;
                case "-":
                    geheugen = TrekAf(geheugen, getal);
                    break;
                case "*":
                    geheugen = Vermenigvuldig(geheugen, getal);
                    break;
                case "/":
                    if (getal == 0)
                    {
                        Console.WriteLine("Delen door nul kan niet.");
                    }
                    else
                    {
                        geheugen = Deel(geheugen, getal);
                    }
                    break;
            }
        }
        else if (keuze != "q")
        {
            Console.WriteLine("Onbekende bewerking.");
        }
    } while (keuze != "q");
}
```

``geheugen = TelOp(geheugen, getal);``: de methode geeft een nieuw getal terug, en dat moet je zelf weer in ``geheugen`` stoppen. Met enkel ``TelOp(geheugen, getal);`` wordt het resultaat berekend en meteen weggegooid. Precies de fout van Steven in [Parameters doorgeven](https://www.ziescherp.be/content/6_methoden/0b_parameters.html#stagiair-steven).
::::


# Methodenpuzzel {#h07-methodenpuzzel}

Deze lijnen horen bij een programma met een methode die een gemiddelde berekent, en een ``Main`` die ze gebruikt. Ze zijn door elkaar geraakt, en de accolades zijn weg. Er zijn ook twee lijnen bij geslopen die er niet in thuishoren.

```java
double resultaat = BerekenGemiddelde(som, aantal);
static void Main(string[] args)
return gemiddelde;
int aantal = 4;
som = int.Parse(Console.ReadLine());
static double BerekenGemiddelde(int som, int aantal)
Console.WriteLine($"Het gemiddelde is {resultaat}");
double gemiddelde = (double)som / aantal;
static void BerekenGemiddelde(int som, int aantal)
int som = 17;
```

Zet de lijnen in de juiste volgorde, met accolades erbij, zodat het programma ``Het gemiddelde is 4,25`` toont. Welke twee lijnen zijn de indringers, en waarom? Doe het eerst op papier en test daarna.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static double BerekenGemiddelde(int som, int aantal)
{
    double gemiddelde = (double)som / aantal;
    return gemiddelde;
}

static void Main(string[] args)
{
    int som = 17;
    int aantal = 4;
    double resultaat = BerekenGemiddelde(som, aantal);
    Console.WriteLine($"Het gemiddelde is {resultaat}");
}
```

De indringers:

* ``static void BerekenGemiddelde(int som, int aantal)``: een ``void``-methode geeft niets terug, en dan kan ``return gemiddelde;`` er niet in staan. De methode moet een ``double`` teruggeven.
* ``som = int.Parse(Console.ReadLine());``: ``som`` komt binnen als parameter en heeft dus al een waarde. Een ``ReadLine`` in deze methode zou die waarde overschrijven, en de methode heet niet ``Vraag...``.

De volgorde van de twee methoden maakt niet uit: ``BerekenGemiddelde`` mag evengoed onder ``Main`` staan.
::::


# Voorspel de uitvoer (*Essential*) {#h07-voorspel-de-uitvoer}

Voer onderstaand programma nog niet uit. Schrijf eerst op papier exact op wat er op het scherm zal verschijnen, lijn per lijn.

```java
static void SchrijfA()
{
    Console.Write("A");
}

static void SchrijfB()
{
    Console.Write("B");
    SchrijfA();
}

static void ZetDubbel(int getal)
{
    getal = getal * 2;
    Console.WriteLine($"In de methode: {getal}");
}

static int Test(int x)
{
    if (x > 5)
    {
        return 1;
    }
    Console.WriteLine("Voorbij de if");
    return 2;
}

static int Kwadraat(int x)
{
    return x * x;
}

static void Main(string[] args)
{
    SchrijfB();
    SchrijfA();
    SchrijfB();
    Console.WriteLine();

    int getal = 3;
    ZetDubbel(getal);
    Console.WriteLine($"In Main: {getal}");

    Console.WriteLine(Test(8));
    Console.WriteLine(Test(2));

    Kwadraat(4);
    Console.WriteLine(Kwadraat(getal));
}
```

Voer het programma daarna uit en vergelijk. Klopt een lijn niet? Zet een breakpoint op de eerste lijn van ``Main`` en stap door het programma met **Step Into** (``F11``) in plaats van Step Over. Zo spring je mee in elke methode, en zie je in *Locals* welke waarde de parameters krijgen.

::::{.callout-caution collapse="true" title="Oplossing"}
```text
BAABA
In de methode: 6
In Main: 3
1
Voorbij de if
2
9
```

* ``SchrijfB`` schrijft ``B`` en roept daarna zelf ``SchrijfA`` op. Drie aanroepen in ``Main`` geven dus ``BA``, ``A`` en ``BA``, op één lijn want het is ``Write``.
* ``ZetDubbel`` krijgt een kopie van ``getal``. In de methode wordt die kopie 6, maar de ``getal`` in ``Main`` blijft 3. Dat ze allebei ``getal`` heten, speelt geen rol.
* Bij ``Test(8)`` stopt de methode meteen bij ``return 1;``: ``Voorbij de if`` verschijnt niet. Bij ``Test(2)`` wel, en daarna komt ``2`` terug.
* ``Kwadraat(4);`` rekent 16 uit, maar niemand vangt het resultaat op. Er verschijnt niets.

Zie [Doorgeven van parameters](https://www.ziescherp.be/content/6_methoden/0b_parameters.html#doorgeven-van-parameters) en [Methoden debuggen met step-in](https://www.ziescherp.be/content/6_methoden/3_advancedmethod.html#methoden-debuggen-met-step-in).
::::


# Stevens methoden (*Essential*) {#h07-stevens-methoden}

Stagiair Steven plakte een paar methoden in zijn project zonder ze na te kijken. Een A.I. had ze geschreven.

**Deel 1.** Drie van deze vier stukjes compileren niet. Het vierde compileert wel, maar kost punten op een vaardigheidsproef. Welk is welk? Zoek eerst op papier wat er mis is, en plak ze daarna één voor één in een nieuw project om de foutmeldingen te lezen.

**a.**

```java
static string Beoordeel(int punten)
{
    if (punten >= 10)
    {
        return "geslaagd";
    }
}
```

**b.**

```java
static void ToonBtw(double bedrag)
{
    Console.WriteLine($"De btw is {bedrag * 0.21} euro.");
}

static void Main(string[] args)
{
    double btw = ToonBtw(100);
}
```

**c.**

```java
int Verdubbel(int getal)
{
    return getal * 2;
}

static void Main(string[] args)
{
    Console.WriteLine(Verdubbel(21));
}
```

**d.**

```java
static void Main(string[] args)
{
    ToonWelkom();

    static void ToonWelkom()
    {
        Console.WriteLine("Welkom!");
    }
}
```

::::{.callout-caution collapse="true" title="Oplossing"}

**a.** ``CS0161 'Program.Beoordeel(int)': not all code paths return a value``. Is ``punten`` kleiner dan 10, dan komt de methode aan haar einde zonder ``return``. Voeg onderaan ``return "niet geslaagd";`` toe.

**b.** ``CS0029 Cannot implicitly convert type 'void' to 'double'``. ``ToonBtw`` toont de btw, maar geeft niets terug. Wil Steven de btw verder gebruiken, dan heeft hij een methode ``BerekenBtw`` nodig met returntype ``double``. Wil hij ze enkel tonen, dan schrijft hij gewoon ``ToonBtw(100);``.

**c.** ``CS0120 An object reference is required for the non-static field, method, or property 'Program.Verdubbel(int)'``. ``static`` ontbreekt. Voorlopig schrijf je dat toverwoord voor elke methode.

**d.** Dit compileert en toont ``Welkom!``. Maar ``ToonWelkom`` staat binnen ``Main``: een lokale functie. Op een vaardigheidsproef kost dat [3 punten](https://www.ziescherp.be/content/B_appendix/boete.html#boete-method). Zet de methode naast ``Main``.
::::

**Deel 2.** Onderstaand programma compileert en draait, maar het doet niet wat Steven wil. ``Kwadraat`` moet het kwadraat van 5 berekenen, en de klant moet 10% korting krijgen op 80 euro.

```java
static int Kwadraat(int getal)
{
    getal = int.Parse(Console.ReadLine());
    return getal * getal;
}

static double BerekenKorting(double bedrag)
{
    Console.WriteLine($"Je krijgt {bedrag * 0.1} euro korting.");
    return 0;
}

static void Main(string[] args)
{
    Console.WriteLine($"5 in het kwadraat is {Kwadraat(5)}");
    double bedrag = 80;
    double teBetalen = bedrag - BerekenKorting(bedrag);
    Console.WriteLine($"Je betaalt {teBetalen} euro.");
}
```

Voer het uit. Wat gebeurt er, en wat moet Steven aan de twee methoden veranderen?

::::{.callout-caution collapse="true" title="Oplossing"}
Het programma wacht eerst op invoer. Typt de gebruiker 3, dan verschijnt:

```text
5 in het kwadraat is 9
Je krijgt 8 euro korting.
Je betaalt 80 euro.
```

* ``Kwadraat`` overschrijft de parameter meteen met een ``ReadLine``. De 5 die ``Main`` meegaf, wordt nooit gebruikt. Weg met die lijn: de waarde komt via de parameter binnen.
* ``BerekenKorting`` **toont** de korting, maar **geeft** 0 terug. ``Main`` rekent verder met die 0. Een methode die ``Bereken...`` heet, geeft haar resultaat terug en toont niets.

```java
static int Kwadraat(int getal)
{
    return getal * getal;
}

static double BerekenKorting(double bedrag)
{
    return bedrag * 0.1;
}
```

Nu toont het programma ``5 in het kwadraat is 25`` en ``Je betaalt 72 euro.``
::::

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
* Tonen en teruggeven zijn twee verschillende dingen. Wat op het scherm staat, kan de rest van je programma niet gebruiken. Wat je teruggeeft wel.
* Wat een methode nodig heeft, komt binnen als parameter. Een ``ReadLine`` in een methode die niet ``Vraag...`` heet, is bijna altijd fout.
* Lees de foutmelding. ``not all code paths return a value`` en ``Cannot implicitly convert type 'void'`` ga je nog vaak zien.
::::


# Vraagmethoden (*Essential*) {#h07-vraagmethoden}

In [Herbruikbare gebruikersinvoer vragen](https://www.ziescherp.be/content/6_methoden/1_bibliotheken.html#herbruikbare-gebruikersinvoer-vragen) zag je ``VraagInt``. Methoden die ``Vraag...`` heten, mogen ``WriteLine`` en ``ReadLine`` gebruiken: dat is net hun taak.

**Deel 1.** Schrijf ``static int VraagInt(string vraag)`` en ``static string VraagTekst(string vraag)``. Ze tonen de vraag, lezen het antwoord in en geven het terug. Test ze in ``Main``.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static int VraagInt(string vraag)
{
    Console.WriteLine(vraag);
    return int.Parse(Console.ReadLine());
}

static string VraagTekst(string vraag)
{
    Console.WriteLine(vraag);
    return Console.ReadLine();
}

static void Main(string[] args)
{
    string naam = VraagTekst("Hoe heet je?");
    int leeftijd = VraagInt("Hoe oud ben je?");
    Console.WriteLine($"Dag {naam}, volgend jaar ben je {leeftijd + 1}.");
}
```
::::

**Deel 2.** Schrijf een methode ``VraagIntTussen(string vraag, int min, int max)`` die een ``int`` teruggeeft. Ze blijft vragen tot de gebruiker een getal van ``min`` tot en met ``max`` typt, en geeft dat getal terug. Gebruik er ``VraagInt`` in.

```text
Hoe oud ben je? (0 tot en met 120)
>150
Dat getal ligt niet tussen 0 en 120.
Hoe oud ben je? (0 tot en met 120)
>30
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static int VraagIntTussen(string vraag, int min, int max)
{
    int getal;
    do
    {
        getal = VraagInt($"{vraag} ({min} tot en met {max})");
        if (getal < min || getal > max)
        {
            Console.WriteLine($"Dat getal ligt niet tussen {min} en {max}.");
        }
    } while (getal < min || getal > max);
    return getal;
}
```

In ``Main``:

```java
int leeftijd = VraagIntTussen("Hoe oud ben je?", 0, 120);
```

De invoercontrole uit hoofdstuk 6 zit nu in een methode. Vanaf nu kost ze je overal nog maar één lijn.
::::


# Paswoord generator {#h07-paswoord-generator}

Schrijf een methode ``static string GenereerPaswoord(int lengte)`` die een willekeurig paswoord van de gevraagde lengte teruggeeft. Het paswoord bestaat uit kleine letters, hoofdletters en cijfers door elkaar. Test ze in ``Main`` met een paar lengtes.

:::{.callout-tip}
Een ``char`` is intern een getal. ``(char)rng.Next('a', 'z' + 1)`` geeft dus een willekeurige kleine letter.
:::

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static string GenereerPaswoord(int lengte)
{
    Random rng = new Random();
    string paswoord = "";
    for (int i = 0; i < lengte; i++)
    {
        switch (rng.Next(0, 3))
        {
            case 0:
                paswoord += rng.Next(0, 10);
                break;
            case 1:
                paswoord += (char)rng.Next('a', 'z' + 1);
                break;
            case 2:
                paswoord += (char)rng.Next('A', 'Z' + 1);
                break;
        }
    }
    return paswoord;
}

static void Main(string[] args)
{
    Console.WriteLine(GenereerPaswoord(8));
    Console.WriteLine(GenereerPaswoord(16));
}
```

De ``Random`` wordt één keer gemaakt, voor de lus, en daarna telkens hergebruikt.
::::


# Netflix (*Essential*) {#h07-netflix}

Je bent aangenomen als backend developer bij Netflix. Je eerste taak: enkele hulpmethoden schrijven voor een console-applicatie. Maak een programma met onderstaande methoden, en test ze in ``Main`` met invoer van de gebruiker.

**``ToonWelkomstBericht``**

- Parameter: de naam van de gebruiker (``string``).
- Toont ``Welkom terug, [naam]! Tijd om te bingen.``
- Returntype: ``void``.

**``BerekenKijktijd``**

- Parameters: het aantal afleveringen (``int``) en de minuten per aflevering (``int``).
- Geeft het totaal aantal minuten terug (``int``).

**``MagKijken``**

- Parameters: de leeftijd van de gebruiker (``int``) en de minimumleeftijd van de serie (``int``).
- Geeft ``true`` terug als de gebruiker oud genoeg is, anders ``false``.

**``GenereerTitel``**

- Parameters: de naam van de serie (``string``), het seizoen (``int``) en de aflevering (``int``).
- Geeft een ``string`` terug in het formaat ``[SerieNaam] - S[seizoen]E[aflevering]``.

**Het scenario in ``Main``:**

1. Vraag de naam van de gebruiker en roep ``ToonWelkomstBericht`` op.
2. Vraag de leeftijd van de gebruiker.
3. Vraag de naam van de serie en haar minimumleeftijd.
4. Gebruik ``MagKijken``. Is de gebruiker niet oud genoeg, toon dan ``Helaas, je bent te jong voor deze serie.`` en stop het programma. Anders toon je ``Veel kijkplezier!``
5. Vraag hoeveel afleveringen de gebruiker wil kijken, en hoeveel minuten een aflevering duurt.
6. Gebruik ``BerekenKijktijd`` en toon ``Totale kijktijd: X minuten``.
7. Vraag het seizoen en de aflevering.
8. Gebruik ``GenereerTitel`` en toon ``Je start met: [titel]``.

```text
Voer je naam in:
>Jan
Welkom terug, Jan! Tijd om te bingen.
Voer je leeftijd in:
>18
Naam van de serie:
>Squid Game
Minimumleeftijd van de serie:
>16
Veel kijkplezier!
Hoeveel afleveringen wil je kijken?
>3
Hoeveel minuten duurt één aflevering?
>45
Totale kijktijd: 135 minuten
Seizoen:
>1
Aflevering:
>1
Je start met: Squid Game - S1E1
```

Ander voorbeeld:

```text
Voer je naam in:
>Emma
Welkom terug, Emma! Tijd om te bingen.
Voer je leeftijd in:
>13
Naam van de serie:
>Squid Game
Minimumleeftijd van de serie:
>16
Helaas, je bent te jong voor deze serie.
```

:::{.callout-tip}
Een programma stoppen midden in ``Main`` kan met ``return;``. Hoe dat werkt in een ``void``-methode, lees je in [return](https://www.ziescherp.be/content/6_methoden/0_intromethods.html#return-in-een-void-methode).
:::

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static void ToonWelkomstBericht(string naam)
{
    Console.WriteLine($"Welkom terug, {naam}! Tijd om te bingen.");
}

static int BerekenKijktijd(int aantalAfleveringen, int minutenPerAflevering)
{
    return aantalAfleveringen * minutenPerAflevering;
}

static bool MagKijken(int leeftijdGebruiker, int minimumLeeftijdSerie)
{
    return leeftijdGebruiker >= minimumLeeftijdSerie;
}

static string GenereerTitel(string serieNaam, int seizoen, int aflevering)
{
    return $"{serieNaam} - S{seizoen}E{aflevering}";
}

static void Main(string[] args)
{
    Console.WriteLine("Voer je naam in:");
    string naam = Console.ReadLine();
    ToonWelkomstBericht(naam);

    Console.WriteLine("Voer je leeftijd in:");
    int leeftijd = int.Parse(Console.ReadLine());

    Console.WriteLine("Naam van de serie:");
    string serieNaam = Console.ReadLine();
    Console.WriteLine("Minimumleeftijd van de serie:");
    int minimumLeeftijd = int.Parse(Console.ReadLine());

    if (!MagKijken(leeftijd, minimumLeeftijd))
    {
        Console.WriteLine("Helaas, je bent te jong voor deze serie.");
        return;
    }
    Console.WriteLine("Veel kijkplezier!");

    Console.WriteLine("Hoeveel afleveringen wil je kijken?");
    int aantalAfleveringen = int.Parse(Console.ReadLine());
    Console.WriteLine("Hoeveel minuten duurt één aflevering?");
    int minutenPerAflevering = int.Parse(Console.ReadLine());
    Console.WriteLine($"Totale kijktijd: {BerekenKijktijd(aantalAfleveringen, minutenPerAflevering)} minuten");

    Console.WriteLine("Seizoen:");
    int seizoen = int.Parse(Console.ReadLine());
    Console.WriteLine("Aflevering:");
    int aflevering = int.Parse(Console.ReadLine());
    Console.WriteLine($"Je start met: {GenereerTitel(serieNaam, seizoen, aflevering)}");
}
```
::::

**Deel 2.** ``Main`` telt veel paren van ``WriteLine`` en ``ReadLine``. Herschrijf ``Main`` met je ``VraagTekst`` en ``VraagInt`` uit Vraagmethoden. De uitvoer blijft dezelfde.

::::{.callout-caution collapse="true" title="Oplossing"}
Kopieer ``VraagInt`` en ``VraagTekst`` naar dit project. ``Main`` wordt:

```java
static void Main(string[] args)
{
    string naam = VraagTekst("Voer je naam in:");
    ToonWelkomstBericht(naam);
    int leeftijd = VraagInt("Voer je leeftijd in:");
    string serieNaam = VraagTekst("Naam van de serie:");
    int minimumLeeftijd = VraagInt("Minimumleeftijd van de serie:");

    if (!MagKijken(leeftijd, minimumLeeftijd))
    {
        Console.WriteLine("Helaas, je bent te jong voor deze serie.");
        return;
    }
    Console.WriteLine("Veel kijkplezier!");

    int aantalAfleveringen = VraagInt("Hoeveel afleveringen wil je kijken?");
    int minutenPerAflevering = VraagInt("Hoeveel minuten duurt één aflevering?");
    Console.WriteLine($"Totale kijktijd: {BerekenKijktijd(aantalAfleveringen, minutenPerAflevering)} minuten");

    int seizoen = VraagInt("Seizoen:");
    int aflevering = VraagInt("Aflevering:");
    Console.WriteLine($"Je start met: {GenereerTitel(serieNaam, seizoen, aflevering)}");
}
```

Elke vraag is nu één lijn, en ``Main`` leest bijna als het scenario uit de opgave.
::::

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
* Enkel ``ToonWelkomstBericht`` toont iets. De drie andere geven hun resultaat terug, en ``Main`` beslist wat ermee gebeurt.
* ``return leeftijdGebruiker >= minimumLeeftijdSerie;`` geeft de ``bool`` meteen terug. Een ``if`` met ``return true;`` en ``return false;`` doet hetzelfde, in vijf lijnen meer.
* ``return;`` in ``Main`` stopt het programma. Na die ``if`` hoef je dus geen ``else`` meer te schrijven: wie te jong is, komt er nooit.
::::


# Armstrong (PRO) {#h07-armstrong}

Een getal is een *Armstrong-nummer* als het de som is van zijn eigen cijfers, elk tot de macht verheven van het aantal cijfers. 153 is er een, want 153 = 1³ + 5³ + 3³ = 1 + 125 + 27. In [Armstrong nummer](../6_herhalingen/A_practicasamen.md#h06-armstrong-nummer) van hoofdstuk 6 schreef je al de code die dat test.

Knip die code nu op in methoden:

* ``static int TelCijfers(int getal)`` geeft het aantal cijfers van ``getal`` terug.
* ``static bool IsArmstrong(int getal)`` geeft ``true`` terug als ``getal`` een Armstrong-nummer is. Ze gebruikt ``TelCijfers``.
* ``static void ToonArmstrongNummers(int tot)`` toont alle Armstrong-nummers van 1 tot en met ``tot``. Ze gebruikt ``IsArmstrong``.

```text
Armstrong-nummers tot en met 10000:
1 2 3 4 5 6 7 8 9 153 370 371 407 1634 8208 9474
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static int TelCijfers(int getal)
{
    int aantal = 0;
    do
    {
        aantal++;
        getal /= 10;
    } while (getal > 0);
    return aantal;
}

static bool IsArmstrong(int getal)
{
    int aantalCijfers = TelCijfers(getal);
    int som = 0;
    int rest = getal;
    while (rest > 0)
    {
        int cijfer = rest % 10;
        som += (int)Math.Pow(cijfer, aantalCijfers);
        rest /= 10;
    }
    return som == getal;
}

static void ToonArmstrongNummers(int tot)
{
    for (int i = 1; i <= tot; i++)
    {
        if (IsArmstrong(i))
        {
            Console.Write($"{i} ");
        }
    }
    Console.WriteLine();
}

static void Main(string[] args)
{
    Console.WriteLine("Armstrong-nummers tot en met 10000:");
    ToonArmstrongNummers(10000);
}
```

In ``TelCijfers`` mag je ``getal`` gerust afpellen: het is een kopie, de aanroeper merkt er niets van. In ``IsArmstrong`` pel je een aparte ``rest`` af, want daar heb je ``getal`` op het einde nog nodig voor de vergelijking.
::::


# A.I. assisted oefeningen generator {#h07-ai-oefeningen-generator}

**Dit is geen oefening, maar een manier om zelf extra oefeningen te maken.**

Gebruik volgende prompt in ChatGPT, Copilot Chat of Claude om een oefening over methoden te laten maken. Vervang ``XXXX`` door een onderwerp dat je interesseert (bijvoorbeeld "Counter-Strike", "F1 racing" of "je favoriete voetbalclub").

```text
Je bent een lector van een hogeschool die studenten helpt met programmeren. Je bent heel goed in interessante C#-opgaves bedenken die studenten motiveren om te blijven programmeren.

Verzin een C#-oefening voor mij die me doet oefenen op methoden. Een methode geeft maximum 1 waarde terug. Gebruik dus geen tuples.

Volgende zaken mogen in de oefening voorkomen: variabelen, if else, switch, enum, expressies, de Math-bibliotheek en loops. De nadruk ligt op methoden: parameters, returntypes, void, en methoden die elkaar oproepen.

Volgende zaken mogen niet voorkomen: arrays, lists, LINQ, ref, out, TryParse, try en catch, en objectgeoriënteerd programmeren. Alle methoden zijn static en staan naast Main in class Program. Er zijn geen variabelen buiten Main.

Enkel methoden die Toon... of Vraag... heten, mogen Console.WriteLine of Console.ReadLine gebruiken.

Laat de oefening gaan over XXXX.
Toon geen voorbeeldcode of oplossing.
Toon wel voorbeelduitvoer.
Leg expliciet uit welke methoden ik moet schrijven en hoe ze werken.
Stel ook 3 mogelijke uitbreidingen voor.
```

:::{.callout-warning}
Een A.I. maakt soms toch een oefening met iets wat je nog niet kent, ondanks de prompt. Vraagt de oefening bijvoorbeeld arrays, vereenvoudig ze dan zelf, of vraag de A.I. om dat stuk eruit te halen of uit te leggen.
:::
