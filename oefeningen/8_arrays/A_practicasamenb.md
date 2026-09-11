<!--# Oefeningen week 2-->

::: {.vooraf}
- Deze week komen de rest van het hoofdstuk aan bod: strings als arrays, ``Split`` en ``Join``, arrays in methoden, en 2D-arrays.
- [Let op]{.let-op} Vanaf nu werk je met methoden. Bepaal telkens zelf welke methoden je nodig hebt, met welke parameters en welk returntype. De huisregel van hoofdstuk 7 blijft gelden: ``ReadLine`` en ``WriteLine`` enkel in methoden die ``Toon...`` of ``Vraag...`` heten.
- Een array die je aan een methode meegeeft, is geen kopie: de methode werkt op het origineel. Zie [Methoden en arrays](https://www.ziescherp.be/content/7_arrays/3_arrays_en_methoden.html).
- In de voorbeelduitvoer begint gebruikersinvoer met ``>``.
:::

<!--# Oefeningen week 2-->



# Snelle invoer (*Essential*) {#h08-snelle-invoer}

Getallen één voor één intypen is traag. Met ``Split`` gaat het in één lijn: zie [Split en Join](https://www.ziescherp.be/content/7_arrays/stringarray.html#split-en-join-van-string-naar-array-en-terug).

**Deel 1.** Schrijf een methode ``static int[] VraagGetallen(string vraag)``. Ze toont de vraag, leest één lijn in zoals ``4 5 8 7 5 2``, splitst die op de spaties en geeft een ``int[]`` terug, precies zo lang als het aantal getallen dat de gebruiker typte. Toon in ``Main`` hoeveel getallen er waren en wat hun som is.

```text
Geef je getallen, gescheiden door een spatie:
>4 5 8 7 5 2
Je gaf 6 getallen in. Hun som is 31.
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static int[] VraagGetallen(string vraag)
{
    Console.WriteLine(vraag);
    string[] stukken = Console.ReadLine().Split(' ');
    int[] getallen = new int[stukken.Length];
    for (int i = 0; i < stukken.Length; i++)
    {
        getallen[i] = int.Parse(stukken[i]);
    }
    return getallen;
}

static void Main(string[] args)
{
    int[] getallen = VraagGetallen("Geef je getallen, gescheiden door een spatie:");
    int som = 0;
    for (int i = 0; i < getallen.Length; i++)
    {
        som += getallen[i];
    }
    Console.WriteLine($"Je gaf {getallen.Length} getallen in. Hun som is {som}.");
}
```

De lengte van de array kies je niet zelf: ze volgt uit het aantal stukken dat ``Split`` teruggeeft.
::::

**Deel 2.** Toon de getallen daarna op één lijn, gescheiden door een komma en een spatie. Gebruik ``string.Join``.

```text
Je getallen: 4, 5, 8, 7, 5, 2
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
Console.WriteLine($"Je getallen: {string.Join(", ", getallen)}");
```

``string.Join`` werkt niet enkel op een ``string[]``, maar ook op een ``int[]``.
::::

**Deel 3.** Vraag een zin en toon ze woord per woord omgedraaid: ``Ik ben Tim`` wordt ``Tim ben Ik``.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
Console.WriteLine("Geef een zin:");
string[] woorden = Console.ReadLine().Split(' ');
Array.Reverse(woorden);
Console.WriteLine(string.Join(" ", woorden));
```

``Split`` maakt van de zin een array, ``Array.Reverse`` keert die om, en ``Join`` plakt de woorden terug aan elkaar.
::::


# Bob {#h08-bob}

Kan jij "Bob" programmeren, een tiener die niet veel zegt?

> Bob is a lackadaisical teenager. In conversation, his responses are very limited.
> Bob answers 'Sure.' if you ask him a question.
> He answers 'Whoa, chill out!' if you yell at him.
> He answers 'Calm down, I know what I'm doing!' if you yell a question at him.
> He says 'Fine. Be that way!' if you address him without actually saying anything.
> He answers 'Whatever.' to anything else.

Wat betekent dat voor je programma?

* Een **vraag** eindigt op een ``?`` (spaties achteraan tellen niet mee).
* **Roepen** is: er staat minstens één hoofdletter in, en geen enkele kleine letter. ``WATCH OUT!`` is roepen, ``1, 2, 3`` niet.
* **Niets zeggen** is: de zin bevat enkel spaties, of helemaal niets.

Zet de vijf antwoorden van Bob in een ``string[]``. Laat een methode beslissen welk antwoord het wordt, door de index van dat antwoord terug te geven.

```text
Zeg iets tegen Bob:
>WATCH OUT!
Whoa, chill out!
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static bool IsGeroepen(string zin)
{
    bool heeftHoofdletter = false;
    bool heeftKleineLetter = false;
    for (int i = 0; i < zin.Length; i++)
    {
        if (char.IsUpper(zin[i]))
        {
            heeftHoofdletter = true;
        }
        if (char.IsLower(zin[i]))
        {
            heeftKleineLetter = true;
        }
    }
    return heeftHoofdletter && !heeftKleineLetter;
}

static int KiesAntwoord(string zin)
{
    string opgekuist = zin.Trim();
    if (opgekuist == "")
    {
        return 3;
    }
    bool isVraag = opgekuist[opgekuist.Length - 1] == '?';
    bool geroepen = IsGeroepen(opgekuist);
    if (isVraag && geroepen)
    {
        return 2;
    }
    if (isVraag)
    {
        return 0;
    }
    if (geroepen)
    {
        return 1;
    }
    return 4;
}

static void Main(string[] args)
{
    string[] antwoorden = { "Sure.", "Whoa, chill out!", "Calm down, I know what I'm doing!", "Fine. Be that way!", "Whatever." };
    Console.WriteLine("Zeg iets tegen Bob:");
    string zin = Console.ReadLine();
    Console.WriteLine(antwoorden[KiesAntwoord(zin)]);
}
```

* ``Trim()`` geeft een nieuwe string terug. De originele ``zin`` blijft ongewijzigd, daarom komt het resultaat in ``opgekuist``.
* De volgorde van de tests in ``KiesAntwoord`` telt: een geroepen vraag moet je testen voor een gewone vraag.
* Test met alle vijf de gevallen, en met ``WATCH OUT!``, ``   `` (enkel spaties) en ``1, 2, 3``.
::::


# Hamming distance (*Essential*) {#h08-hamming-distance}

De *hamming distance* tussen twee reeksen is het aantal plaatsen waar ze verschillen. Bij de volgende twee DNA-strings is dat 7 (aangeduid met ``^``):

```text
GAGCCTACTAACGGGAT
CATCGTAATGACGGCCT
^ ^ ^  ^ ^    ^^
```

Vraag de gebruiker twee DNA-strings: reeksen die enkel uit de letters G, A, C en T bestaan. Toon hun hamming distance. Zijn ze niet even lang, of staat er een andere letter in, toon dan een foutmelding. Schrijf een methode die de afstand berekent en een methode die controleert of een string een geldige DNA-string is.

```text
Geef DNA-string 1:
>GAGCCTACTAACGGGAT
Geef DNA-string 2:
>CATCGTAATGACGGCCT
De hamming distance is 7.
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static bool IsGeldigDna(string dna)
{
    bool geldig = true;
    for (int i = 0; i < dna.Length && geldig; i++)
    {
        char teken = dna[i];
        if (teken != 'G' && teken != 'A' && teken != 'C' && teken != 'T')
        {
            geldig = false;
        }
    }
    return geldig;
}

static int BerekenHammingDistance(string dna1, string dna2)
{
    int afstand = 0;
    for (int i = 0; i < dna1.Length; i++)
    {
        if (dna1[i] != dna2[i])
        {
            afstand++;
        }
    }
    return afstand;
}

static void Main(string[] args)
{
    Console.WriteLine("Geef DNA-string 1:");
    string dna1 = Console.ReadLine();
    Console.WriteLine("Geef DNA-string 2:");
    string dna2 = Console.ReadLine();

    if (dna1.Length != dna2.Length)
    {
        Console.WriteLine("De twee strings zijn niet even lang.");
    }
    else if (!IsGeldigDna(dna1) || !IsGeldigDna(dna2))
    {
        Console.WriteLine("Er staan andere letters in dan G, A, C en T.");
    }
    else
    {
        Console.WriteLine($"De hamming distance is {BerekenHammingDistance(dna1, dna2)}.");
    }
}
```

Een string kan je lezen zoals een array: ``dna1[i]`` is een ``char``. Omzetten met ``ToCharArray`` is dus niet nodig zolang je enkel leest.
::::


# Caesar-encryptie {#h08-caesar-encryptie}

Bij de Caesar-code vervang je elke letter door de letter die een vast aantal plaatsen verder in het alfabet staat. Bij een verschuiving van 3 wordt A een D, B een E, en Z een C: na de Z begin je opnieuw bij A.

![Caesar-encryptie](../assets/5_arrays/practarray8.png)

Nummer je de letters van 0 (A) tot 25 (Z), dan is dat ``nieuweIndex = (oudeIndex + sleutel) % 26``. Ontcijferen gaat met ``(oudeIndex - sleutel + 26) % 26``. Die ``+ 26`` is nodig, want ``%`` op een negatief getal blijft in C# negatief.

Vraag een tekst en een sleutel (1 tot en met 25). Versleutel de tekst, en ontcijfer het resultaat daarna weer. Hoofdletters blijven hoofdletters, kleine letters blijven kleine letters, en al de rest (spaties, leestekens, cijfers) blijft ongemoeid. Werk intern met een ``char[]``.

```text
Welke tekst wil je versleutelen?
>Hallo, wereld!
Welke sleutel (1 tot en met 25)?
>3
Versleuteld: Kdoor, zhuhog!
Ontcijferd: Hallo, wereld!
```

:::{.callout-tip}
Een ``char`` is intern een getal. ``'D' - 'A'`` geeft dus 3: de index van D. En ``(char)('A' + 3)`` geeft terug een D.
:::

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static char VerschuifLetter(char teken, int verschuiving)
{
    if (char.IsUpper(teken))
    {
        int index = teken - 'A';
        return (char)('A' + (index + verschuiving) % 26);
    }
    if (char.IsLower(teken))
    {
        int index = teken - 'a';
        return (char)('a' + (index + verschuiving) % 26);
    }
    return teken;
}

static string Versleutel(string tekst, int sleutel)
{
    char[] tekens = tekst.ToCharArray();
    for (int i = 0; i < tekens.Length; i++)
    {
        tekens[i] = VerschuifLetter(tekens[i], sleutel);
    }
    return new string(tekens);
}

static string Ontcijfer(string tekst, int sleutel)
{
    return Versleutel(tekst, 26 - sleutel);
}

static void Main(string[] args)
{
    Console.WriteLine("Welke tekst wil je versleutelen?");
    string tekst = Console.ReadLine();
    Console.WriteLine("Welke sleutel (1 tot en met 25)?");
    int sleutel = int.Parse(Console.ReadLine());

    string versleuteld = Versleutel(tekst, sleutel);
    Console.WriteLine($"Versleuteld: {versleuteld}");
    Console.WriteLine($"Ontcijferd: {Ontcijfer(versleuteld, sleutel)}");
}
```

``Ontcijfer`` verschuift over ``26 - sleutel`` plaatsen. Dat is exact de formule ``(oudeIndex - sleutel + 26) % 26``: drie plaatsen terug is hetzelfde als 23 plaatsen vooruit.

Een string kan je niet wijzigen. Daarom ga je via ``ToCharArray`` naar een array, pas je die aan, en maak je er met ``new string(tekens)`` weer een string van.
::::


# Array Viewer (*Essential*) {#h08-array-viewer}

Een methode die elke array netjes op één lijn toont, heb je de rest van het hoofdstuk nog vaak nodig.

**Deel 1.** Schrijf een methode ``ToonArray`` die een ``int[]`` op één lijn toont, met een tab tussen de elementen. Na het laatste element staat er **geen** tab. De methode moet werken voor arrays van elke lengte, ook een lege. Toon in ``Main`` minstens twee arrays, en een lege.

```text
15	6	9
0	1	2	3	4	5	6

```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static void ToonArray(int[] getallen)
{
    for (int i = 0; i < getallen.Length; i++)
    {
        Console.Write(getallen[i]);
        if (i < getallen.Length - 1)
        {
            Console.Write("\t");
        }
    }
    Console.WriteLine();
}

static void Main(string[] args)
{
    int[] kort = { 15, 6, 9 };
    int[] lang = { 0, 1, 2, 3, 4, 5, 6 };
    int[] leeg = new int[0];
    ToonArray(kort);
    ToonArray(lang);
    ToonArray(leeg);
}
```

Schrijf je het laatste element apart, na de lus, met ``getallen[getallen.Length - 1]``, dan crasht je methode op een lege array: index -1 bestaat niet.

Het kan ook in één lijn: ``Console.WriteLine(string.Join("\t", getallen));``.
::::

**Deel 2.** Maak de parameter ``params int[] getallen``. Nu werkt zowel ``ToonArray(kort)`` als ``ToonArray(15, 6, 9)``. Zie [Een onbepaald aantal parameters met params](https://www.ziescherp.be/content/7_arrays/3_arrays_en_methoden.html#een-onbepaald-aantal-parameters-met-params).

::::{.callout-caution collapse="true" title="Oplossing"}
Enkel de signatuur verandert:

```java
static void ToonArray(params int[] getallen)
```

In ``Main``:

```java
ToonArray(kort);
ToonArray(15, 6, 9);
ToonArray();
```

Bij ``ToonArray(15, 6, 9)`` maakt C# zelf een array van de drie getallen. ``ToonArray()`` geeft een lege array mee, en daarom was het nodig dat je methode ook dat aankon.
::::


# Wegwijzers (*Essential*) {#h08-wegwijzers}

Een array-variabele bevat geen getallen, maar een wegwijzer naar de getallen. Voer onderstaand programma nog niet uit. Schrijf eerst op papier wat elke lijn met een nummer toont.

```java
static void Verdubbel(int[] getallen)
{
    for (int i = 0; i < getallen.Length; i++)
    {
        getallen[i] *= 2;
    }
}

static void Sorteer(int[] getallen)
{
    Array.Sort(getallen);
}

static void Vervang(int[] getallen)
{
    getallen = new int[] { 7, 7, 7 };
}

static void Main(string[] args)
{
    int[] a = { 3, 1, 2 };
    int[] b = a;
    b[0] = 99;
    Console.WriteLine($"1: {a[0]}");

    int[] c = { 3, 1, 2 };
    int x = c[1];
    x = 50;
    Console.WriteLine($"2: {c[1]}");

    int[] d = { 3, 1, 2 };
    Verdubbel(d);
    Console.WriteLine($"3: {d[0]}");

    int[] e = { 3, 1, 2 };
    Sorteer(e);
    Console.WriteLine($"4: {e[0]}");

    int[] f = { 3, 1, 2 };
    Vervang(f);
    Console.WriteLine($"5: {f[0]}");

    int[] g = { 3, 1, 2 };
    int[] kopie = new int[g.Length];
    for (int i = 0; i < g.Length; i++)
    {
        kopie[i] = g[i];
    }
    kopie[0] = 42;
    Console.WriteLine($"6: {g[0]} en {kopie[0]}");
}
```

Voer het programma daarna uit en vergelijk. Klopt een lijn niet, zoek dan eerst zelf waar je redenering fout liep.

::::{.callout-caution collapse="true" title="Oplossing"}
```text
1: 99
2: 1
3: 6
4: 1
5: 3
6: 3 en 42
```

1. ``int[] b = a;`` kopieert de wegwijzer, niet de array. ``a`` en ``b`` wijzen naar dezelfde getallen, dus ``b[0] = 99`` verandert ook ``a[0]``.
2. ``x`` is een ``int``, en die krijgt een kopie van de waarde. ``x`` aanpassen verandert niets aan de array.
3. ``Verdubbel`` krijgt een kopie van de wegwijzer, maar die wijst naar dezelfde array. De methode past dus de array van ``Main`` aan.
4. ``Array.Sort`` in een methode sorteert net zo goed de originele array.
5. ``Vervang`` laat haar eigen kopie van de wegwijzer naar een nieuwe array wijzen. De ``f`` in ``Main`` wijst nog altijd naar de oude array. Dat is de fout van Steven met ``Reset`` in [Methoden en arrays](https://www.ziescherp.be/content/7_arrays/3_arrays_en_methoden.html#stagiair-steven).
6. De lus maakt een echte kopie: twee aparte arrays. ``kopie`` aanpassen laat ``g`` met rust.

Zie ook [Geheugengebruik bij arrays](https://www.ziescherp.be/content/7_arrays/arraysgeheugen.html).
::::


# Puzzelen met arrays deel 2 (*Essential*) {#h08-puzzelen-deel-2}

Schrijf voor elk probleem een methode. Let goed op het verschil tussen een methode die een **nieuwe** array teruggeeft (het origineel blijft ongewijzigd) en een methode die de meegegeven array zelf **aanpast** (``void``). Toon in ``Main`` telkens het resultaat én het origineel na de aanroep, met je ``ToonArray`` uit Array Viewer.

1.  ``static int[] Omgekeerd(int[] bron)`` geeft een nieuwe array terug met de elementen in omgekeerde volgorde.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static int[] Omgekeerd(int[] bron)
{
    int[] resultaat = new int[bron.Length];
    for (int i = 0; i < bron.Length; i++)
    {
        resultaat[i] = bron[bron.Length - 1 - i];
    }
    return resultaat;
}
```

In ``Main``:

```java
int[] getallen = { 1, 2, 3, 4, 5 };
ToonArray(Omgekeerd(getallen));   //5 4 3 2 1
ToonArray(getallen);              //1 2 3 4 5: ongewijzigd
```
::::

2.  ``static void KeerOm(int[] getallen)`` keert de volgorde om in de array zelf.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static void KeerOm(int[] getallen)
{
    for (int i = 0; i < getallen.Length / 2; i++)
    {
        int hulp = getallen[i];
        getallen[i] = getallen[getallen.Length - 1 - i];
        getallen[getallen.Length - 1 - i] = hulp;
    }
}
```

In ``Main``:

```java
int[] getallen = { 1, 2, 3, 4, 5 };
KeerOm(getallen);
ToonArray(getallen);   //5 4 3 2 1
```

De lus gaat maar tot de helft: elke ronde wisselt een element vooraan met zijn spiegelbeeld achteraan. Loop je tot het einde, dan wissel je alles twee keer, en staat alles terug op zijn plaats.
::::

3.  ``static void RoteerLinks(int[] getallen)`` schuift alles één plaats naar links in de array zelf. Het eerste element komt achteraan.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static void RoteerLinks(int[] getallen)
{
    int eerste = getallen[0];
    for (int i = 0; i < getallen.Length - 1; i++)
    {
        getallen[i] = getallen[i + 1];
    }
    getallen[getallen.Length - 1] = eerste;
}
```

In ``Main``:

```java
int[] getallen = { 1, 2, 3, 4, 5 };
RoteerLinks(getallen);
ToonArray(getallen);   //2 3 4 5 1
```
::::

4.  ``static int[] GeroteerdLinks(int[] bron)`` doet hetzelfde, maar geeft het resultaat in een nieuwe array terug.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static int[] GeroteerdLinks(int[] bron)
{
    int[] resultaat = new int[bron.Length];
    for (int i = 0; i < bron.Length - 1; i++)
    {
        resultaat[i] = bron[i + 1];
    }
    resultaat[bron.Length - 1] = bron[0];
    return resultaat;
}
```

In ``Main``:

```java
int[] getallen = { 1, 2, 3, 4, 5 };
ToonArray(GeroteerdLinks(getallen));   //2 3 4 5 1
ToonArray(getallen);                   //1 2 3 4 5
```
::::

5.  Overload ``GeroteerdLinks`` met een tweede parameter ``x``: een nieuwe array waarin alles ``x`` plaatsen naar links geschoven is.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static int[] GeroteerdLinks(int[] bron, int x)
{
    int[] resultaat = new int[bron.Length];
    for (int i = 0; i < bron.Length; i++)
    {
        resultaat[i] = bron[(i + x) % bron.Length];
    }
    return resultaat;
}
```

In ``Main``:

```java
int[] getallen = { 1, 2, 3, 4, 5, 6, 7 };
ToonArray(GeroteerdLinks(getallen, 3));   //4 5 6 7 1 2 3
```
::::

6.  Overload ``RoteerLinks`` met een tweede parameter ``x``: de array zelf schuift ``x`` plaatsen naar links.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static void RoteerLinks(int[] getallen, int x)
{
    for (int keer = 0; keer < x; keer++)
    {
        RoteerLinks(getallen);
    }
}
```

In ``Main``:

```java
int[] getallen = { 1, 2, 3, 4, 5, 6, 7 };
RoteerLinks(getallen, 3);
ToonArray(getallen);   //4 5 6 7 1 2 3
```

De nieuwe versie roept de versie van oefening 3 gewoon ``x`` keer op.
::::

7.  ``static int[] Uniek(int[] bron)`` geeft een nieuwe array terug zonder dubbels, precies zo lang als het aantal verschillende getallen.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static int[] Uniek(int[] bron)
{
    int[] tijdelijk = new int[bron.Length];
    int aantal = 0;
    for (int i = 0; i < bron.Length; i++)
    {
        bool alGezien = false;
        for (int j = 0; j < aantal && !alGezien; j++)
        {
            if (tijdelijk[j] == bron[i])
            {
                alGezien = true;
            }
        }
        if (!alGezien)
        {
            tijdelijk[aantal] = bron[i];
            aantal++;
        }
    }

    int[] resultaat = new int[aantal];
    Array.Copy(tijdelijk, resultaat, aantal);
    return resultaat;
}
```

In ``Main``:

```java
int[] getallen = { 1, 2, 3, 2, 4, 1, 5 };
ToonArray(Uniek(getallen));   //1 2 3 4 5
```

Hoeveel getallen er overblijven, weet je pas op het einde. Daarom vul je eerst een tijdelijke array die groot genoeg is, en kopieer je op het einde het gevulde stuk naar een array van de juiste lengte.
::::

8.  ``static int[] UniekGesorteerd(int[] gesorteerd)`` doet hetzelfde voor een array die al gesorteerd is. Omdat gelijke getallen dan naast elkaar staan, hoef je elk element enkel met het vorige te vergelijken.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static int[] UniekGesorteerd(int[] gesorteerd)
{
    int[] tijdelijk = new int[gesorteerd.Length];
    int aantal = 0;
    for (int i = 0; i < gesorteerd.Length; i++)
    {
        if (i == 0 || gesorteerd[i] != gesorteerd[i - 1])
        {
            tijdelijk[aantal] = gesorteerd[i];
            aantal++;
        }
    }

    int[] resultaat = new int[aantal];
    Array.Copy(tijdelijk, resultaat, aantal);
    return resultaat;
}
```

In ``Main``:

```java
int[] getallen = { 1, 1, 2, 3, 3, 3, 4, 5, 5 };
ToonArray(UniekGesorteerd(getallen));   //1 2 3 4 5
```

``i == 0`` staat vooraan in de test. Bij het eerste element stopt ``||`` daar al, en wordt ``gesorteerd[i - 1]`` (index -1) nooit gelezen.
::::

9.  Schrijf ``Maximum(int[] getallen)``, ``AantalKeer(int[] getallen, int waarde)`` en ``EersteIndex(int[] getallen, int waarde)``. Toon daarmee het maximum van een reeks, hoe vaak het voorkomt, en de index van de eerste keer.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static int Maximum(int[] getallen)
{
    int max = getallen[0];
    for (int i = 1; i < getallen.Length; i++)
    {
        if (getallen[i] > max)
        {
            max = getallen[i];
        }
    }
    return max;
}

static int AantalKeer(int[] getallen, int waarde)
{
    int aantal = 0;
    for (int i = 0; i < getallen.Length; i++)
    {
        if (getallen[i] == waarde)
        {
            aantal++;
        }
    }
    return aantal;
}

static int EersteIndex(int[] getallen, int waarde)
{
    int index = -1;
    for (int i = 0; i < getallen.Length && index == -1; i++)
    {
        if (getallen[i] == waarde)
        {
            index = i;
        }
    }
    return index;
}
```

In ``Main``:

```java
int[] getallen = { 3, 7, 2, 7, 5, 7, 1 };
int max = Maximum(getallen);
Console.WriteLine($"Maximum {max}, {AantalKeer(getallen, max)} keer, eerst op index {EersteIndex(getallen, max)}");
//Maximum 7, 3 keer, eerst op index 1
```

Een methode geeft maar één waarde terug. Drie vragen worden dus drie methoden, en die zijn elk ook op zich bruikbaar.
::::

10. Schrijf ``Minimum(int[] getallen)`` en ``LaatsteIndex(int[] getallen, int waarde)``. Toon het minimum, hoe vaak het voorkomt (met ``AantalKeer``), en de index van de laatste keer.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static int Minimum(int[] getallen)
{
    int min = getallen[0];
    for (int i = 1; i < getallen.Length; i++)
    {
        if (getallen[i] < min)
        {
            min = getallen[i];
        }
    }
    return min;
}

static int LaatsteIndex(int[] getallen, int waarde)
{
    int index = -1;
    for (int i = getallen.Length - 1; i >= 0 && index == -1; i--)
    {
        if (getallen[i] == waarde)
        {
            index = i;
        }
    }
    return index;
}
```

In ``Main``:

```java
int[] getallen = { 5, 2, 8, 2, 6, 2, 9 };
int min = Minimum(getallen);
Console.WriteLine($"Minimum {min}, {AantalKeer(getallen, min)} keer, laatst op index {LaatsteIndex(getallen, min)}");
//Minimum 2, 3 keer, laatst op index 5
```

Wie van achteren begint te zoeken, vindt de laatste keer als eerste.
::::

11. ``static int AantalVerschillende(int[] getallen)`` telt hoeveel verschillende getallen er in een array staan. Kan het in één lijn, met een methode die je al hebt?

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static int AantalVerschillende(int[] getallen)
{
    return Uniek(getallen).Length;
}
```

In ``Main``:

```java
int[] getallen = { 1, 2, 3, 2, 4, 1, 5 };
Console.WriteLine(AantalVerschillende(getallen));   //5
```
::::

12. (PRO) De **zeef van Eratosthenes**. Schrijf ``static bool[] Zeef(int max)``. Ze geeft een ``bool[]`` terug waarin op index ``i`` staat of ``i`` een priemgetal is.

    * Zet alle getallen vanaf 2 op "mogelijk priem".
    * Begin bij 2 en streep alle veelvouden van 2 weg (behalve 2 zelf).
    * Ga naar het volgende getal dat nog niet weggestreept is (3), en streep zijn veelvouden weg.
    * Herhaal tot het einde.

    Toon in ``Main`` de eerste 20 priemgetallen onder 100 000, en hoeveel het er in totaal zijn.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static bool[] Zeef(int max)
{
    bool[] isPriem = new bool[max + 1];
    for (int i = 2; i <= max; i++)
    {
        isPriem[i] = true;
    }
    for (int i = 2; i <= max; i++)
    {
        if (isPriem[i])
        {
            for (int veelvoud = i * 2; veelvoud <= max; veelvoud += i)
            {
                isPriem[veelvoud] = false;
            }
        }
    }
    return isPriem;
}
```

In ``Main``:

```java
const int MAX = 100000;
bool[] isPriem = Zeef(MAX);
int aantal = 0;
for (int i = 2; i <= MAX; i++)
{
    if (isPriem[i])
    {
        aantal++;
        if (aantal <= 20)
        {
            Console.Write($"{i} ");
        }
    }
}
Console.WriteLine();
Console.WriteLine($"Er zijn {aantal} priemgetallen onder {MAX}.");
```

Dat zijn er 9592.
::::

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
Een ``void``-methode zoals ``KeerOm`` geeft niets terug, en toch zie je het resultaat in ``Main``. De methode krijgt een kopie van de wegwijzer, maar die wijst naar dezelfde array. Een methode die een nieuwe array teruggeeft, laat het origineel net met rust. Kies dus bewust: moet het origineel veranderen, of wil je een nieuw resultaat?
::::


# Parkeergarage (*Essential*) {#h08-parkeergarage}

Schrijf een programma dat parkeerkosten berekent. Het vraagt eerst hoeveel auto's er zijn, en daarna per auto hoe lang hij geparkeerd stond (in uren).

![](../assets/illustraties/h08_parkeergarage.jpg){.illustratie fig-alt="Potloodtekening: de robot als parkeerwachter geeft aan de slagboom een ticket aan het stokmannetje in zijn auto."}

**De tarieven.** Tot en met 3 uur betaal je 2 euro. Sta je er langer, dan komt er 0,50 euro bij per begonnen uur na die 3 uur. Een dag kost nooit meer dan 10 euro. Een auto staat er nooit langer dan 24 uur.

Toon op het einde een tabel met per auto de duur en de kost, en daaronder de totalen. Schrijf minstens een methode die de kost van één parkeerbeurt berekent.

```text
Hoeveel auto's?
>3
Parkeertijd van auto 1 (uren):
>1,5
Parkeertijd van auto 2 (uren):
>4
Parkeertijd van auto 3 (uren):
>24

Auto	Duur	Kost
1	1,5	2,00
2	4,0	2,50
3	24,0	10,00
Totaal	29,5	14,50
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static double BerekenKost(double duur)
{
    const double BASISPRIJS = 2;
    const double PRIJS_PER_EXTRA_UUR = 0.5;
    const double MAXIMUM = 10;

    double kost = BASISPRIJS;
    if (duur > 3)
    {
        kost += Math.Ceiling(duur - 3) * PRIJS_PER_EXTRA_UUR;
    }
    return Math.Min(kost, MAXIMUM);
}

static void ToonOverzicht(double[] duren)
{
    double totaleDuur = 0;
    double totaleKost = 0;
    Console.WriteLine("Auto\tDuur\tKost");
    for (int i = 0; i < duren.Length; i++)
    {
        double kost = BerekenKost(duren[i]);
        totaleDuur += duren[i];
        totaleKost += kost;
        Console.WriteLine($"{i + 1}\t{duren[i]:F1}\t{kost:F2}");
    }
    Console.WriteLine($"Totaal\t{totaleDuur:F1}\t{totaleKost:F2}");
}

static void Main(string[] args)
{
    Console.WriteLine("Hoeveel auto's?");
    int aantal = int.Parse(Console.ReadLine());
    double[] duren = new double[aantal];
    for (int i = 0; i < duren.Length; i++)
    {
        Console.WriteLine($"Parkeertijd van auto {i + 1} (uren):");
        duren[i] = double.Parse(Console.ReadLine());
    }
    Console.WriteLine();
    ToonOverzicht(duren);
}
```

``Math.Ceiling(duur - 3)`` maakt van elk begonnen uur een heel uur. ``Math.Min`` zorgt ervoor dat de kost nooit boven de 10 euro gaat.
::::


# 2D Array Viewer (*Essential*) {#h08-2d-array-viewer}

Nu hetzelfde voor een 2D-array, en daarna reken je ermee.

**Deel 1.** Schrijf ``static void ToonMatrix(int[,] matrix)``: ze toont een 2D-array rij per rij, met een tab tussen de getallen.

```java
int[,] matrix = { { 2, 4 }, { 3, 5 } };
ToonMatrix(matrix);
```

```text
2	4
3	5
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static void ToonMatrix(int[,] matrix)
{
    for (int rij = 0; rij < matrix.GetLength(0); rij++)
    {
        for (int kolom = 0; kolom < matrix.GetLength(1); kolom++)
        {
            Console.Write(matrix[rij, kolom]);
            if (kolom < matrix.GetLength(1) - 1)
            {
                Console.Write("\t");
            }
        }
        Console.WriteLine();
    }
}
```

``GetLength(0)`` is het aantal rijen, ``GetLength(1)`` het aantal kolommen. De eerste index is altijd de rij.
::::

**Deel 2.** De determinant van een 2x2-matrix ``[[a, b], [c, d]]`` is ``a * d - b * c``. Schrijf ``static int BerekenDeterminant(int[,] matrix)`` voor een 2x2-matrix. Voor de matrix hierboven is het resultaat -2.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static int BerekenDeterminant(int[,] matrix)
{
    return matrix[0, 0] * matrix[1, 1] - matrix[0, 1] * matrix[1, 0];
}
```

In ``Main``:

```java
Console.WriteLine($"De determinant is {BerekenDeterminant(matrix)}.");   //-2
```
::::

**Deel 3 (PRO).** Laat ``BerekenDeterminant`` ook werken voor een 3x3-matrix ``[[a, b, c], [d, e, f], [g, h, i]]``: dan is de determinant ``a(ei - fh) - b(di - fg) + c(dh - eg)``. Test met ``{ { 1, 2, 3 }, { 0, 4, 5 }, { 1, 0, 6 } }``: dat geeft 22.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static int BerekenDeterminant(int[,] matrix)
{
    if (matrix.GetLength(0) == 2)
    {
        return matrix[0, 0] * matrix[1, 1] - matrix[0, 1] * matrix[1, 0];
    }
    return matrix[0, 0] * (matrix[1, 1] * matrix[2, 2] - matrix[1, 2] * matrix[2, 1])
         - matrix[0, 1] * (matrix[1, 0] * matrix[2, 2] - matrix[1, 2] * matrix[2, 0])
         + matrix[0, 2] * (matrix[1, 0] * matrix[2, 1] - matrix[1, 1] * matrix[2, 0]);
}
```

``GetLength(0)`` zegt hoe groot de matrix is, en dus welke formule er nodig is.
::::


# Voetbalcoach (*Essential*) {#h08-voetbalcoach}

Een voetbalcoach wil bijhouden hoeveel positieve en negatieve acties elk van zijn 12 spelers (rugnummers 1 tot en met 12) maakt. Gebruik een ``int[,]`` met 12 rijen en 2 kolommen: kolom 0 voor de positieve acties, kolom 1 voor de negatieve. De speler met rugnummer 2 staat op rij 1 (het rugnummer min 1).

De coach typt telkens een rugnummer, het soort actie (``P`` of ``N``) en hoe vaak die actie voorkwam. Het aantal komt bij wat er al stond. Typt de coach 99 als rugnummer, dan stopt de invoer en toont het programma voor elke speler zijn positieve en negatieve acties en het verschil. Daaronder toont het de meest en de minst performante speler: die met het grootste en die met het kleinste verschil. Eindigen meerdere spelers gelijk, toon ze dan allemaal.

```text
Rugnummer (1 tot en met 12, 99 om te stoppen):
>2
Positieve of negatieve actie (P/N)?
>P
Hoeveel keer?
>6
Rugnummer (1 tot en met 12, 99 om te stoppen):
>99

Rugnummer	Positief	Negatief	Verschil
1		5		2		3
2		6		7		-1
3		0		0		0
...
7		3		0		3
...

Meest performant: 1 7 (verschil 3)
Minst performant: 2 (verschil -1)
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
const int AANTAL_SPELERS = 12;
const int STOP = 99;
int[,] acties = new int[AANTAL_SPELERS, 2];

int rugnummer;
do
{
    Console.WriteLine($"Rugnummer (1 tot en met {AANTAL_SPELERS}, {STOP} om te stoppen):");
    rugnummer = int.Parse(Console.ReadLine());
    if (rugnummer != STOP)
    {
        Console.WriteLine("Positieve of negatieve actie (P/N)?");
        string soort = Console.ReadLine();
        Console.WriteLine("Hoeveel keer?");
        int aantal = int.Parse(Console.ReadLine());

        int kolom = 0;
        if (soort == "N")
        {
            kolom = 1;
        }
        acties[rugnummer - 1, kolom] += aantal;
    }
} while (rugnummer != STOP);

Console.WriteLine();
Console.WriteLine("Rugnummer\tPositief\tNegatief\tVerschil");
int hoogste = acties[0, 0] - acties[0, 1];
int laagste = hoogste;
for (int rij = 0; rij < acties.GetLength(0); rij++)
{
    int verschil = acties[rij, 0] - acties[rij, 1];
    Console.WriteLine($"{rij + 1}\t\t{acties[rij, 0]}\t\t{acties[rij, 1]}\t\t{verschil}");
    if (verschil > hoogste)
    {
        hoogste = verschil;
    }
    if (verschil < laagste)
    {
        laagste = verschil;
    }
}

Console.WriteLine();
Console.Write("Meest performant:");
for (int rij = 0; rij < acties.GetLength(0); rij++)
{
    if (acties[rij, 0] - acties[rij, 1] == hoogste)
    {
        Console.Write($" {rij + 1}");
    }
}
Console.WriteLine($" (verschil {hoogste})");

Console.Write("Minst performant:");
for (int rij = 0; rij < acties.GetLength(0); rij++)
{
    if (acties[rij, 0] - acties[rij, 1] == laagste)
    {
        Console.Write($" {rij + 1}");
    }
}
Console.WriteLine($" (verschil {laagste})");
```

* ``+=`` en niet ``=``: voert de coach twee keer iets in voor dezelfde speler, dan telt het samen.
* Eerst zoek je het hoogste en laagste verschil. Pas daarna kan je in een tweede lus alle spelers tonen die dat verschil halen.
* Wil je verder: steek het tonen van de tabel en het zoeken van de spelers in methoden.
::::


# Levelkaart (*Essential*) {#h08-levelkaart}

In de inleiding van het hoofdstuk stond een level van een spel als een raster van tekens. Nu maak je het echt:

```java
string[] level =
{
    "##########",
    "#........#",
    "#.####.#.#",
    "#....#...#",
    "#.##...#@#",
    "##########"
};
```

``#`` is een muur, ``.`` een vrij vakje, en ``@`` de speler.

**Deel 1.** Schrijf ``static char[,] MaakKaart(string[] rijen)``. Ze zet het level om naar een ``char[,]`` met een rij per string en een kolom per teken. Schrijf ook ``static void ToonKaart(char[,] kaart)``, en toon de kaart.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static char[,] MaakKaart(string[] rijen)
{
    char[,] kaart = new char[rijen.Length, rijen[0].Length];
    for (int rij = 0; rij < kaart.GetLength(0); rij++)
    {
        for (int kolom = 0; kolom < kaart.GetLength(1); kolom++)
        {
            kaart[rij, kolom] = rijen[rij][kolom];
        }
    }
    return kaart;
}

static void ToonKaart(char[,] kaart)
{
    for (int rij = 0; rij < kaart.GetLength(0); rij++)
    {
        for (int kolom = 0; kolom < kaart.GetLength(1); kolom++)
        {
            Console.Write(kaart[rij, kolom]);
        }
        Console.WriteLine();
    }
}
```

``rijen[rij][kolom]``: eerst haal je de string van die rij uit de array, en daaruit het teken op die kolom.
::::

**Deel 2.** Zoek de positie van de speler, en tel het aantal vrije vakjes.

```text
De speler staat op rij 4, kolom 8.
Er zijn 22 vrije vakjes.
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static int TelVrijeVakjes(char[,] kaart)
{
    int aantal = 0;
    for (int rij = 0; rij < kaart.GetLength(0); rij++)
    {
        for (int kolom = 0; kolom < kaart.GetLength(1); kolom++)
        {
            if (kaart[rij, kolom] == '.')
            {
                aantal++;
            }
        }
    }
    return aantal;
}
```

In ``Main``, na het tonen van de kaart:

```java
int spelerRij = -1;
int spelerKolom = -1;
for (int rij = 0; rij < kaart.GetLength(0); rij++)
{
    for (int kolom = 0; kolom < kaart.GetLength(1); kolom++)
    {
        if (kaart[rij, kolom] == '@')
        {
            spelerRij = rij;
            spelerKolom = kolom;
        }
    }
}
Console.WriteLine($"De speler staat op rij {spelerRij}, kolom {spelerKolom}.");
Console.WriteLine($"Er zijn {TelVrijeVakjes(kaart)} vrije vakjes.");
```

Een methode geeft maar één waarde terug, en hier zijn het er twee (rij en kolom). Daarom staat het zoeken van de speler in ``Main``.
::::

**Deel 3.** Vraag een reeks commando's zoals ``NNNWWWZ``: ``N`` is een stap naar boven, ``Z`` naar beneden, ``O`` naar rechts en ``W`` naar links. Voer ze één voor één uit. Staat er een muur waar de speler naartoe wil, dan blijft hij staan en meld je dat. Toon op het einde de kaart.

```text
Welke commando's (N, O, Z, W)?
>NNNWWWZ
Commando Z: daar staat een muur.
##########
#....@...#
#.####.#.#
#....#...#
#.##...#.#
##########
```

::::{.callout-caution collapse="true" title="Oplossing"}
In ``Main``, na deel 2:

```java
Console.WriteLine("Welke commando's (N, O, Z, W)?");
string commandos = Console.ReadLine();
for (int i = 0; i < commandos.Length; i++)
{
    int nieuweRij = spelerRij;
    int nieuweKolom = spelerKolom;
    switch (commandos[i])
    {
        case 'N':
            nieuweRij--;
            break;
        case 'Z':
            nieuweRij++;
            break;
        case 'O':
            nieuweKolom++;
            break;
        case 'W':
            nieuweKolom--;
            break;
    }

    if (kaart[nieuweRij, nieuweKolom] == '#')
    {
        Console.WriteLine($"Commando {commandos[i]}: daar staat een muur.");
    }
    else
    {
        kaart[spelerRij, spelerKolom] = '.';
        kaart[nieuweRij, nieuweKolom] = '@';
        spelerRij = nieuweRij;
        spelerKolom = nieuweKolom;
    }
}
ToonKaart(kaart);
```

Eerst bereken je waar de speler naartoe wil, dan pas kijk je of dat mag. Zo hoef je nooit een stap terug te zetten. Uit de kaart lopen kan hier niet: de rand is overal muur.
::::


# Fraude Detectie (*Final Essentials*) {#h08-fraude-detectie}

Tijdens de examens vermoedt de leerkracht dat er gespiekt wordt. Schrijf een programma dat opspoort welke studenten opvallend vaak dezelfde fouten maken.

1.  Vraag de **antwoordsleutel** van het examen: een reeks letters, zoals ``ABCDE``.
2.  Vraag hoeveel studenten er zijn, en daarna de antwoorden van elke student. Bewaar ze in een ``string[]``. Je mag ervan uitgaan dat elke student evenveel antwoorden typt als de sleutel lang is.
3.  Toon na elke student zijn **score** (1 punt per juist antwoord).
4.  Vergelijk daarna **elk paar** studenten. Geven ze op dezelfde vraag hetzelfde **foute** antwoord, dan is dat een "verdachte gelijkenis".
5.  Heeft een paar 2 of meer verdachte gelijkenissen, toon dan een ``FRAUDE ALARM!`` voor dat paar. Is er geen enkel verdacht paar, meld dat dan.

Schrijf minstens een methode die de score van één student berekent, en een methode die de verdachte gelijkenissen tussen twee studenten telt.

```text
Geef de correcte examensleutel:
>ABCDE
Hoeveel studenten?
>3
Geef de antwoorden van student 1:
>AABDD
Score student 1: 2/5
Geef de antwoorden van student 2:
>AACDD
Score student 2: 3/5
Geef de antwoorden van student 3:
>ABCDD
Score student 3: 4/5

FRAUDE ALARM! Student 1 en student 2: 2 verdachte gelijkenissen.
```

Met enkel student 1 en student 3 verschijnt er ``Geen fraude gedetecteerd.``

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static int BerekenScore(string sleutel, string antwoorden)
{
    int score = 0;
    for (int i = 0; i < sleutel.Length; i++)
    {
        if (antwoorden[i] == sleutel[i])
        {
            score++;
        }
    }
    return score;
}

static int TelVerdachteGelijkenissen(string sleutel, string antwoorden1, string antwoorden2)
{
    int aantal = 0;
    for (int i = 0; i < sleutel.Length; i++)
    {
        if (antwoorden1[i] == antwoorden2[i] && antwoorden1[i] != sleutel[i])
        {
            aantal++;
        }
    }
    return aantal;
}

static void Main(string[] args)
{
    const int GRENS = 2;
    Console.WriteLine("Geef de correcte examensleutel:");
    string sleutel = Console.ReadLine();
    Console.WriteLine("Hoeveel studenten?");
    int aantalStudenten = int.Parse(Console.ReadLine());

    string[] antwoorden = new string[aantalStudenten];
    for (int i = 0; i < antwoorden.Length; i++)
    {
        Console.WriteLine($"Geef de antwoorden van student {i + 1}:");
        antwoorden[i] = Console.ReadLine();
        Console.WriteLine($"Score student {i + 1}: {BerekenScore(sleutel, antwoorden[i])}/{sleutel.Length}");
    }

    Console.WriteLine();
    int aantalVerdachteParen = 0;
    for (int i = 0; i < antwoorden.Length; i++)
    {
        for (int j = i + 1; j < antwoorden.Length; j++)
        {
            int gelijkenissen = TelVerdachteGelijkenissen(sleutel, antwoorden[i], antwoorden[j]);
            if (gelijkenissen >= GRENS)
            {
                Console.WriteLine($"FRAUDE ALARM! Student {i + 1} en student {j + 1}: {gelijkenissen} verdachte gelijkenissen.");
                aantalVerdachteParen++;
            }
        }
    }
    if (aantalVerdachteParen == 0)
    {
        Console.WriteLine("Geen fraude gedetecteerd.");
    }
}
```

``j`` start bij ``i + 1``. Zo vergelijk je elk paar precies één keer, en nooit een student met zichzelf.
::::


# Zwerkbaltraining met methoden {#h08-zwerkbaltraining}

Tijdens de zwerkbaltraining houdt de trainer bij hoeveel punten zijn 3 jagers maken. Deze extra oefening doet hetzelfde als Havenmanifest van week 1, maar nu met methoden:

* ``static void VraagJagers(string[] namen, int[] scores)`` vraagt voor elke jager zijn naam en score, en vult de twee arrays.
* ``static void ToonOverzicht(string[] namen, int[] scores)`` toont alle jagers met hun score.
* ``static int BerekenTotaal(int[] scores)`` geeft de som van de scores terug.
* ``static int ZoekIndex(string[] namen, string gezocht)`` geeft de index van een naam terug, of -1 als die er niet in staat. Schrijf de zoeklus zelf.

```text
Geef de naam van jager 1:
>Ginny
Geef de score van jager 1:
>40
Geef de naam van jager 2:
>Katie
Geef de score van jager 2:
>30
Geef de naam van jager 3:
>Demelza
Geef de score van jager 3:
>50

--- Wedstrijdstatistieken ---
Jager Ginny: 40 punten
Jager Katie: 30 punten
Jager Demelza: 50 punten

Totaal punten: 120
Gemiddelde score: 40

Welke jager zoek je?
>Katie
Jager Katie scoorde 30 punten.
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
static void VraagJagers(string[] namen, int[] scores)
{
    for (int i = 0; i < namen.Length; i++)
    {
        Console.WriteLine($"Geef de naam van jager {i + 1}:");
        namen[i] = Console.ReadLine();
        Console.WriteLine($"Geef de score van jager {i + 1}:");
        scores[i] = int.Parse(Console.ReadLine());
    }
}

static void ToonOverzicht(string[] namen, int[] scores)
{
    Console.WriteLine("--- Wedstrijdstatistieken ---");
    for (int i = 0; i < namen.Length; i++)
    {
        Console.WriteLine($"Jager {namen[i]}: {scores[i]} punten");
    }
}

static int BerekenTotaal(int[] scores)
{
    int totaal = 0;
    for (int i = 0; i < scores.Length; i++)
    {
        totaal += scores[i];
    }
    return totaal;
}

static int ZoekIndex(string[] namen, string gezocht)
{
    int index = -1;
    for (int i = 0; i < namen.Length && index == -1; i++)
    {
        if (namen[i] == gezocht)
        {
            index = i;
        }
    }
    return index;
}

static void Main(string[] args)
{
    const int AANTAL_JAGERS = 3;
    string[] namen = new string[AANTAL_JAGERS];
    int[] scores = new int[AANTAL_JAGERS];

    VraagJagers(namen, scores);
    Console.WriteLine();
    ToonOverzicht(namen, scores);

    int totaal = BerekenTotaal(scores);
    Console.WriteLine();
    Console.WriteLine($"Totaal punten: {totaal}");
    Console.WriteLine($"Gemiddelde score: {(double)totaal / scores.Length}");

    Console.WriteLine();
    Console.WriteLine("Welke jager zoek je?");
    string gezocht = Console.ReadLine();
    int index = ZoekIndex(namen, gezocht);
    if (index == -1)
    {
        Console.WriteLine($"Jager {gezocht} deed niet mee.");
    }
    else
    {
        Console.WriteLine($"Jager {gezocht} scoorde {scores[index]} punten.");
    }
}
```

``VraagJagers`` geeft niets terug, en toch staan de namen en scores daarna in de arrays van ``Main``. Een methode kan maar één waarde teruggeven, maar twee arrays vullen die ze meekrijgt, lukt wel: ze werkt op het origineel.
::::
