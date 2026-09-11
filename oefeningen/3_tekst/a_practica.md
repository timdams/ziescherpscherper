<!--# Hoofdstuk 3-->

::: {.vooraf}
- [Let op]{.let-op} Gebruik in alle oefeningen **string interpolatie** (``$``) om variabelen en berekeningen in tekst te plaatsen. De ``+``-operator gebruik je enkel om een lange tekst over meerdere codelijnen te splitsen.
- Toon je tekens zoals ``€``, ``♥`` of een emoji, zet dan als allereerste lijn in ``Main``: ``Console.OutputEncoding = System.Text.Encoding.UTF8;``. Zonder die lijn worden ze op een Belgische pc een vraagteken of een ander teken. Meer uitleg vind je in [Vreemde tekens in console tonen](https://www.ziescherp.be/content/2_tekst/7_unicode.html).
- De voorbeelduitvoer toont kommagetallen met een komma en geldbedragen in euro, zoals op een pc met Belgische instellingen. Staat je pc in het Engels, dan zie je een punt en een dollarteken.
:::



# Mad Libs (*Essential*) {#h03-mad-libs}

Mad Libs is een populair woordspelletje waarbij de gebruiker een aantal verschillende woorden moet opgeven, zonder te weten waarvoor ze dienen. Vervolgens worden deze woorden in een verhaal geplaatst dat zo plots erg grappig kan worden.

In deze oefening vraag je aan de gebruiker volgende zaken:

* Een naam (bv. Jos)
* Een zelfstandig naamwoord (bv. bal)
* Een adjectief (bv. groene)
* Een werkwoord (bv. springen)

Vervolgens worden deze woorden in volgende zin geplaatst en aan de gebruiker getoond (gebruik hier **string interpolatie** voor).

```text
Op een dag ging [naam] naar de AP Hogeschool. Hij zag daar een [adjectief] [zelfstandig naamwoord] en vond dat zo grappig dat hij begon te [werkwoord].
```

Voorbeeld werking:

```text
Geef een naam:
>Jos
Geef een zelfstandig naamwoord:
>bal
Geef een adjectief:
>groene
Geef een werkwoord:
>springen

Hier komt het!

Op een dag ging Jos naar de AP Hogeschool. Hij zag daar een groene bal en vond dat zo grappig dat hij begon te springen.
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
Console.WriteLine("Geef een naam:");
string naam = Console.ReadLine();
Console.WriteLine("Geef een zelfstandig naamwoord:");
string zelfstNw = Console.ReadLine();
Console.WriteLine("Geef een adjectief:");
string adjectief = Console.ReadLine();
Console.WriteLine("Geef een werkwoord:");
string werkwoord = Console.ReadLine();

Console.WriteLine("\nHier komt het!\n");
Console.WriteLine($"Op een dag ging {naam} naar de AP Hogeschool. Hij zag daar een {adjectief} {zelfstNw} en vond dat zo grappig dat hij begon te {werkwoord}.");
```

::::

**Deel 2.** Vraag er nog een vijfde woord bij: een uitroep (bv. ``Joepie``). Het verhaal wordt zo:

```text
Op een dag ging [naam] naar de AP Hogeschool. Hij zag daar een [adjectief] [zelfstandig naamwoord] en vond dat zo grappig dat hij begon te [werkwoord]. Toen de docent vroeg wat er zo grappig was, riep [naam] "[uitroep]!" De naam [naam] telt [aantal] letters.
```

Dat past niet meer op één codelijn. Splits de tekst in je ``WriteLine`` over drie codelijnen met ``+``, zoals in [Wanneer gebruik je + wel?](https://www.ziescherp.be/content/2_tekst/6_stringInterpolation.html#wanneer-gebruik-je-wel). Zorg dat in het tweede en in het derde stuk ook een variabele staat. Het aantal letters laat je door C# berekenen: tel het niet zelf.

Met de woorden van hierboven en de uitroep ``Joepie`` verschijnt:

```text
Op een dag ging Jos naar de AP Hogeschool. Hij zag daar een groene bal en vond dat zo grappig dat hij begon te springen. Toen de docent vroeg wat er zo grappig was, riep Jos "Joepie!" De naam Jos telt 3 letters.
```

Werkt het? Haal dan bij het tweede stuk de ``$`` weg en voer opnieuw uit. Wat verandert er?

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
Een ``$`` geldt enkel voor het stuk tekst dat er meteen achter staat. Elk stuk tussen aanhalingstekens is een aparte string, dus elk stuk met een variabele heeft zijn eigen ``$`` nodig. Vergeet je er een, dan compileert je code nog altijd, maar staan de accolades letterlijk in je verhaal.
::::

::::{.callout-caution collapse="true" title="Oplossing"}
```java
Console.WriteLine("Geef een naam:");
string naam = Console.ReadLine();
Console.WriteLine("Geef een zelfstandig naamwoord:");
string zelfstNw = Console.ReadLine();
Console.WriteLine("Geef een adjectief:");
string adjectief = Console.ReadLine();
Console.WriteLine("Geef een werkwoord:");
string werkwoord = Console.ReadLine();
Console.WriteLine("Geef een uitroep:");
string uitroep = Console.ReadLine();

Console.WriteLine("\nHier komt het!\n");
Console.WriteLine($"Op een dag ging {naam} naar de AP Hogeschool. Hij zag daar een {adjectief} {zelfstNw} " +
                  $"en vond dat zo grappig dat hij begon te {werkwoord}. Toen de docent vroeg wat er zo " +
                  $"grappig was, riep {naam} \"{uitroep}!\" De naam {naam} telt {naam.Length} letters.");
```

Let op de spatie op het einde van het eerste en het tweede stuk. Zonder die spatie plakken twee woorden aan elkaar.

Zonder ``$`` bij het tweede stuk verschijnt ``...dat hij begon te {werkwoord}. Toen de docent...``. De andere twee stukken werken nog wel.
::::



# Char of string? (*Essential*) {#h03-char-of-string}

Voer onderstaande code nog niet uit. Schrijf eerst op papier exact op wat er op het scherm zal verschijnen, lijn per lijn.

```java
char letter1 = 'A';
char letter2 = 'B';

Console.WriteLine('A' + 'B');
Console.WriteLine("A" + "B");
Console.WriteLine('1' + 1);
Console.WriteLine("1" + 1 + 1);
Console.WriteLine(1 + 1 + "1");
Console.WriteLine($"{letter1}{letter2}");
```

Voer de code daarna uit en vergelijk met wat je opschreef. Klopt een lijn niet, zoek dan uit waar je redenering fout liep voor je naar de oplossing kijkt.

:::{.callout-tip collapse="true" title="Hint voor de derde lijn"}
Welk type heeft ``'1'``? Kijk in de ASCII-tabel in het begin van [hoofdstuk 3](https://www.ziescherp.be/content/2_tekst/5_chars_strings.html).
:::

::::{.callout-caution collapse="true" title="Oplossing"}

```text
131
AB
50
111
21
AB
```

* ``'A' + 'B'``: twee ``char``s. De ``+`` is niet gedefinieerd voor ``char``, dus rekent C# met hun Unicode-waarden: ``65 + 66`` geeft ``131``.
* ``"A" + "B"``: twee ``string``s worden aan elkaar geplakt.
* ``'1' + 1``: ``'1'`` is een ``char``, en die heeft de Unicode-waarde ``49``, niet ``1``. ``49 + 1`` geeft ``50``.
* ``"1" + 1 + 1``: C# werkt van links naar rechts. ``"1" + 1`` geeft de ``string`` ``"11"``, en ``"11" + 1`` geeft ``"111"``.
* ``1 + 1 + "1"``: ook van links naar rechts. ``1 + 1`` is een gewone optelling en geeft ``2``. Pas daarna komt de ``string``: ``2 + "1"`` geeft ``"21"``.
* ``$"{letter1}{letter2}"``: interpolatie zet de twee tekens als tekst naast elkaar. Zo plak je twee ``char``s wel aan elkaar.
::::



# Escape conversatie (*Essential*) {#h03-escape-conversatie}

Gegeven volgende code:

```java
string personage1 = "Alice";
string personage2 = "Bob";

string dialoog = $"X";

Console.WriteLine(dialoog);
```

Zorg ervoor dat volgende dialoog op het scherm, met juiste formatering getoond wordt. Je mag enkel de tekst tussen de aanhalingstekens (in de plaats van ``X``) van de variabele ``dialoog`` gebruiken (en zal dus escape characters nodig hebben):

```text
Alice: "Hoe gaat het met je?"
    Bob: "Goed, dank je! Hoe gaat het met jou?"
Alice: "Ook goed, bedankt dat je het vraagt."
```

Gebruik ``\t`` om de tekst van Bob te doen inspringen. Bij jou springt Bob waarschijnlijk verder in dan hier in het voorbeeld. Dat is geen probleem.


::::{.callout-caution collapse="true" title="Oplossing"}
```java
string personage1 = "Alice";
string personage2 = "Bob";

string dialoog = $"{personage1}: \"Hoe gaat het met je?\"\n\t{personage2}: \"Goed, dank je! Hoe gaat het met jou?\"\n{personage1}: \"Ook goed, bedankt dat je het vraagt.\"";

Console.WriteLine(dialoog);
```

::::

**Deel 2.** Zet een ``@`` voor je string uit deel 1, zodat er ``$@"..."`` staat, en voer opnieuw uit. Wat gebeurt er?

Schrijf de dialoog daarna opnieuw, nu als verbatim string. Zo'n string mag over meerdere codelijnen lopen: een nieuwe lijn in je code is een nieuwe lijn op het scherm. Je gebruikt dus geen enkele escape character meer, en Bob moet nog altijd inspringen. Hoe je in een verbatim string een aanhalingsteken schrijft, lees je in [Het verbatim karakter @](https://www.ziescherp.be/content/2_tekst/escapechars.html#het-verbatim-karakter).

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
In een verbatim string is de backslash een gewoon teken. ``\n`` en ``\t`` doen er niets meer, en een aanhalingsteken schrijf je als ``""``. Alles tussen de aanhalingstekens komt letterlijk op het scherm, ook de nieuwe lijnen en de spaties in je code.
::::

::::{.callout-caution collapse="true" title="Oplossing"}
Met enkel een ``@`` erbij compileert je code niet meer. De backslash in ``\"`` is nu een gewoon teken, dus het aanhalingsteken erna sluit de string af. Wat daarna komt, leest C# als code, en Visual Studio geeft een hele reeks fouten.

```java
string personage1 = "Alice";
string personage2 = "Bob";

string dialoog = $@"{personage1}: ""Hoe gaat het met je?""
    {personage2}: ""Goed, dank je! Hoe gaat het met jou?""
{personage1}: ""Ook goed, bedankt dat je het vraagt.""";

Console.WriteLine(dialoog);
```

De tweede en derde lijn van de string staan tegen de linkerkantlijn, ook als de rest van je code in ``Main`` inspringt. Elke spatie voor ``{personage2}`` komt mee op het scherm: hier springt Bob vier spaties in.
::::



# Stevens bestandspad (*Essential*) {#h03-stevens-bestandspad}

Stagiair Steven moet de gebruiker laten weten waar zijn notities bewaard werden. De A.I. gaf hem deze lijn:

```java
Console.WriteLine("Bestand bewaard in C:\temp\notities.txt");
```

Het compileert, dus Steven levert het in. Op het scherm verschijnt echter:

```text
Bestand bewaard in C:   emp
otities.txt
```

Steven denkt dat het aan de kleine letters ligt, en "fixt" het zo:

```java
Console.WriteLine("Bestand bewaard in C:\Temp\Notities.txt");
```

Nu compileert het programma niet meer. Visual Studio toont twee keer de melding ``CS1009`` *Unrecognized escape sequence*.

1. Verklaar wat er bij de eerste versie op het scherm verscheen.
2. Verklaar waarom de tweede versie niet compileert, terwijl de eerste dat wel deed.
3. Herstel de lijn op twee manieren, zodat ``Bestand bewaard in C:\Temp\Notities.txt`` verschijnt.
4. Welke van Stevens twee versies is het gevaarlijkst?

::::{.callout-caution collapse="true" title="Oplossing"}

1. In een gewone string begint elke backslash een escape character. ``\t`` is een tab en ``\n`` een nieuwe lijn. Van ``temp`` blijft dus enkel ``emp`` over, na een tab, en ``otities.txt`` komt op een nieuwe lijn.
2. ``\T`` en ``\N`` bestaan niet als escape character. De compiler kent ``\t`` en ``\n``, en die zijn hoofdlettergevoelig.
3. Met een ``@`` voor de string, of met een dubbele backslash:

```java
Console.WriteLine(@"Bestand bewaard in C:\Temp\Notities.txt");
Console.WriteLine("Bestand bewaard in C:\\Temp\\Notities.txt");
```

4. De eerste. Bij de tweede houdt de compiler je tegen. De eerste compileert, en je ziet de fout enkel als je je programma test en de uitvoer ook echt leest.
::::



# Prijskaartje (*Essential*) {#h03-prijskaartje}

In de kaaswinkel drukt de weegschaal een etiket af. Maak zo'n etiket na. De gegevens zet je hard in de code:

```java
int artikelnummer = 4217;
string omschrijving = "Jonge kaas";
double gewicht = 0.45;          // in kg
double prijsPerKilo = 27.44;
```

Bereken de prijs en toon het etiket zo:

```text
******************************
Artikel:        004217
Omschrijving:   Jonge kaas
Gewicht:        0,450 kg
Prijs per kg:   € 27,44
Te betalen:     € 12,35
******************************
```

Gebruik voor elke waarde de juiste formattering uit [Strings mooier formatteren](https://www.ziescherp.be/content/2_tekst/6_stringInterpolation.html#strings-mooier-formatteren):

* het artikelnummer altijd met zes cijfers;
* het gewicht altijd met drie cijfers na de komma;
* de twee bedragen als geldbedrag.

De waarden staan onder elkaar dankzij ``\t``. Het euroteken verschijnt enkel juist met de UTF-8-lijn uit de melding bovenaan deze pagina. Probeer ook eens zonder.

Toon daarna ook de prijs zonder formattering. Wat kost de kaas echt? Werd er afgerond of afgekapt?

::::{.callout-caution collapse="true" title="Oplossing"}

```java
Console.OutputEncoding = System.Text.Encoding.UTF8;

int artikelnummer = 4217;
string omschrijving = "Jonge kaas";
double gewicht = 0.45;          // in kg
double prijsPerKilo = 27.44;
double prijs = gewicht * prijsPerKilo;

string lijn = "******************************";
Console.WriteLine(lijn);
Console.WriteLine($"Artikel:\t{artikelnummer:D6}");
Console.WriteLine($"Omschrijving:\t{omschrijving}");
Console.WriteLine($"Gewicht:\t{gewicht:0.000} kg");
Console.WriteLine($"Prijs per kg:\t{prijsPerKilo:C}");
Console.WriteLine($"Te betalen:\t{prijs:C}");
Console.WriteLine(lijn);
```

Zonder formattering toont ``Console.WriteLine(prijs);`` het getal ``12,348``. ``:C`` rondt dat af naar ``€ 12,35``: bij het formatteren wordt er afgerond, niet afgekapt. De waarde in ``prijs`` verandert niet, enkel hoe ze op het scherm komt.

Zonder de UTF-8-lijn staat er op een Belgische pc een ``?`` in plaats van het euroteken.
::::



# Tekens uit de tabel {#h03-tekens-uit-de-tabel}

Zoek op [symbl.cc](https://symbl.cc) twee tekens die niet op je toetsenbord staan, bijvoorbeeld een hartje en een schaakstuk. Noteer telkens de hexadecimale code.

Toon ze op het scherm, elk op een andere manier (zie [UNICODE karakters tonen](https://www.ziescherp.be/content/2_tekst/7_unicode.html#unicode-karakters-tonen)):

1. het eerste met de ``\u``-notatie;
2. het tweede door het teken te kopiëren en in je string te plakken.

Toon daarna een emoji met de ``\U``-notatie. Het lachende gezichtje heeft code ``1F600``.

Zet de UTF-8-lijn bovenaan. Haal ze daarna eens weg en kijk wat er verandert.

Toon tot slot met ``.Length`` hoeveel tekens C# telt in een string met enkel die emoji. Verklaar het resultaat.

:::{.callout-tip}
Zie je een vierkantje in plaats van je teken, dan kent het lettertype van je console dat teken niet. Daar kan je code niets aan doen.
:::

::::{.callout-caution collapse="true" title="Oplossing"}

```java
Console.OutputEncoding = System.Text.Encoding.UTF8;

Console.WriteLine("\u2665");
Console.WriteLine("♞");
Console.WriteLine("\U0001F600");
Console.WriteLine("\U0001F600".Length);
```

```text
♥
♞
😀
2
```

* Het hartje heeft code ``2665``. Achter ``\u`` komen altijd exact vier hexadecimale cijfers.
* Het schaakpaard is geplakt. Dat werkt voor elk teken, zolang je editor en je console het kunnen tonen.
* De code van een emoji heeft meer dan vier cijfers. Daarom de hoofdletter ``\U``, met acht cijfers.
* Zonder de UTF-8-lijn verschijnt er op een Belgische pc geen hartje, een ``?`` voor het schaakpaard en ``??`` voor de emoji.
* ``.Length`` geeft ``2``. Een ``char`` kan enkel tekens tot en met ``FFFF`` bevatten. Een emoji zit daarboven en wordt bewaard als twee ``char``s na elkaar. ``.Length`` telt ``char``s, geen zichtbare tekens. Zie ook de voetnoot in het begin van [hoofdstuk 3](https://www.ziescherp.be/content/2_tekst/5_chars_strings.html).
::::



# Unicode Art {#h03-unicode-art}

Genereer je naam als Unicode Art met een online generator, bijvoorbeeld [patorjk.com/software/taag](https://patorjk.com/software/taag). Kies er een lettertype. Toon de tekening aan de start van een van je bestaande programma's, zodat eerst je naam verschijnt en daarna de rest.

Zet de tekening in een verbatim string met ``@``, zoals in [UNICODE-kunst tonen](https://www.ziescherp.be/content/2_tekst/7_unicode.html#unicode-kunst-tonen). Vergeet de UTF-8-lijn niet. Zonder die lijn worden sommige blokjes op een Belgische pc zonder melding een ander blokje, en vervormen je letters.

:::{.callout-tip}
Kies je een lettertype met backslashes (zoals *Standard* of *Graffiti*), dan heb je de ``@`` zeker nodig. In een gewone string begint elke ``\`` een escape character. ``\_`` bestaat niet en geeft een compileerfout, maar een ``\t`` of ``\n`` in je tekening compileert wel en verandert ze stilletjes.
:::

::::{.callout-caution collapse="true" title="Oplossing"}

```java
Console.OutputEncoding = System.Text.Encoding.UTF8;

string mijnNaam = @"
▄▄▄█████▓ ██▓ ███▄ ▄███▓   ▓█████▄  ▄▄▄       ███▄ ▄███▓  ██████ 
▓  ██▒ ▓▒▓██▒▓██▒▀█▀ ██▒   ▒██▀ ██▌▒████▄    ▓██▒▀█▀ ██▒▒██    ▒ 
▒ ▓██░ ▒░▒██▒▓██    ▓██░   ░██   █▌▒██  ▀█▄  ▓██    ▓██░░ ▓██▄   
░ ▓██▓ ░ ░██░▒██    ▒██    ░▓█▄   ▌░██▄▄▄▄██ ▒██    ▒██   ▒   ██▒
  ▒██▒ ░ ░██░▒██▒   ░██▒   ░▒████▓  ▓█   ▓██▒▒██▒   ░██▒▒██████▒▒
  ▒ ░░   ░▓  ░ ▒░   ░  ░    ▒▒▓  ▒  ▒▒   ▓▒█░░ ▒░   ░  ░▒ ▒▓▒ ▒ ░
    ░     ▒ ░░  ░      ░    ░ ▒  ▒   ▒   ▒▒ ░░  ░      ░░ ░▒  ░ ░
  ░       ▒ ░░      ░       ░ ░  ░   ░   ▒   ░      ░   ░  ░  ░  
          ░         ░         ░          ░  ░       ░         ░  
                            ░                                    ";
Console.WriteLine(mijnNaam);
```

De tekening begint op de lijn na ``@"``. Zo staan alle lijnen in je code netjes onder elkaar. Het nadeel: er komt eerst een lege lijn op het scherm.
::::

**Deel 2.** Met ``@`` moet je tekening tegen de linkerkantlijn van je code staan, terwijl de rest van je code in ``Main`` inspringt. Anders komen die spaties mee op het scherm. Schrijf de tekening nu als [raw string literal](https://www.ziescherp.be/content/2_tekst/7_unicode.html#raw-string-literals), zodat ze even ver inspringt als de rest van je code, zonder dat die spaties op het scherm verschijnen.

::::{.callout-caution collapse="true" title="Oplossing"}

```java
static void Main(string[] args)
{
    Console.OutputEncoding = System.Text.Encoding.UTF8;

    string mijnNaam = """
        ▄▄▄█████▓ ██▓ ███▄ ▄███▓   ▓█████▄  ▄▄▄       ███▄ ▄███▓  ██████ 
        ▓  ██▒ ▓▒▓██▒▓██▒▀█▀ ██▒   ▒██▀ ██▌▒████▄    ▓██▒▀█▀ ██▒▒██    ▒ 
        ▒ ▓██░ ▒░▒██▒▓██    ▓██░   ░██   █▌▒██  ▀█▄  ▓██    ▓██░░ ▓██▄   
        ░ ▓██▓ ░ ░██░▒██    ▒██    ░▓█▄   ▌░██▄▄▄▄██ ▒██    ▒██   ▒   ██▒
          ▒██▒ ░ ░██░▒██▒   ░██▒   ░▒████▓  ▓█   ▓██▒▒██▒   ░██▒▒██████▒▒
          ▒ ░░   ░▓  ░ ▒░   ░  ░    ▒▒▓  ▒  ▒▒   ▓▒█░░ ▒░   ░  ░▒ ▒▓▒ ▒ ░
            ░     ▒ ░░  ░      ░    ░ ▒  ▒   ▒   ▒▒ ░░  ░      ░░ ░▒  ░ ░
          ░       ▒ ░░      ░       ░ ░  ░   ░   ▒   ░      ░   ░  ░  ░  
                  ░         ░         ░          ░  ░       ░         ░  
                                    ░                                    
        """;
    Console.WriteLine(mijnNaam);
}
```

De sluitende ``"""`` staat acht spaties ver. Precies die acht spaties verdwijnen van elke lijn van de tekening. Zet je de sluitende ``"""`` verder dan een lijn van de tekening, dan compileert het niet.
::::



# Systeem informatie (*Essential*) {#h03-systeem-informatie}

Maak een applicatie die met ``Environment`` de belangrijkste informatie over je computer toont. Toon minstens:

* ``UserName``
* ``MachineName``
* ``ProcessorCount``
* ``Is64BitOperatingSystem``
* ``WorkingSet``, in MB en in GB

``WorkingSet`` geeft het geheugen in bytes. Reken het om naar megabytes en gigabytes, en toon beide met twee cijfers na de komma (met ``F2``). Laat de lijnen tussen de streepjes inspringen met ``\t``.

Voorbeelduitvoer:

```text
Systeeminformatie voor admin op damsPowahPC:
---------------------------------------------
        Aantal processors: 8
        64-bit besturingssysteem: True
        Huidig geheugengebruik: 21,79 MB (0,02 GB)
---------------------------------------------
```

Voer je programma daarna twee keer na elkaar uit en vergelijk. Leg je uitvoer ook eens naast die van een medestudent.

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
``Environment`` geeft de gegevens van de computer waarop het programma op dat moment draait. Iedereen krijgt dus een andere uitvoer. ``WorkingSet`` verschilt zelfs bij elke run op dezelfde pc.

Deel door ``1024.0`` en niet door ``1024``. ``geheugenInBytes / (1024 * 1024)`` is een deling van een ``long`` door een ``int``, dus een gehele deling. ``F2`` toont dan altijd ``,00``: ``21,00 MB`` in plaats van ``21,79 MB``.
::::

::::{.callout-caution collapse="true" title="Oplossing"}
```java
int aantalProcessoren = Environment.ProcessorCount;
long geheugenInBytes = Environment.WorkingSet;
string machineNaam = Environment.MachineName;
string gebruikersNaam = Environment.UserName;
bool is64Bit = Environment.Is64BitOperatingSystem;

double geheugenInMB = geheugenInBytes / (1024.0 * 1024);
double geheugenInGB = geheugenInBytes / (1024.0 * 1024 * 1024);

Console.WriteLine($"Systeeminformatie voor {gebruikersNaam} op {machineNaam}:");
Console.WriteLine("---------------------------------------------");
Console.WriteLine($"\tAantal processors: {aantalProcessoren}");
Console.WriteLine($"\t64-bit besturingssysteem: {is64Bit}");
Console.WriteLine($"\tHuidig geheugengebruik: {geheugenInMB:F2} MB ({geheugenInGB:F2} GB)");
Console.WriteLine("---------------------------------------------");
```
::::



# Nooddeur {#h03-nooddeur}

Voer onderstaande code nog niet uit.

```java
Console.WriteLine("Het alarm gaat af.");
Console.WriteLine("Iedereen naar de nooddeur!");
Environment.Exit(3);
Console.WriteLine("Iedereen is buiten.");
```

1. Welke lijnen verschijnen op het scherm?
2. Welke exitcode meldt Visual Studio onderaan het consolevenster als het programma stopt?
3. En welke exitcode als je de lijn met ``Exit`` weghaalt?

Schrijf je antwoorden op, en voer de code daarna uit om ze te controleren. Lees zo nodig [Programma afsluiten](https://www.ziescherp.be/content/2_tekst/8_environment.html) nog eens na.

::::{.callout-caution collapse="true" title="Oplossing"}

1. Enkel de eerste twee lijnen. ``Environment.Exit`` stopt het programma meteen, dus ``Iedereen is buiten.`` verschijnt nooit.
2. Exitcode ``3``: het getal tussen de haakjes. Visual Studio toont iets als ``exited with code 3``.
3. Zonder ``Exit`` verschijnen alle drie de lijnen, en stopt het programma na de laatste lijn van ``Main`` met exitcode ``0``.
::::



# Boardingpass (*Final Essentials*) {#h03-boardingpass}

Maak een applicatie die de gebruiker om **vluchtinformatie** vraagt (naam, vertrek, bestemming, gate) en daarna een **boardingpass** op het scherm toont. De ticketprijs is voor iedereen dezelfde: 249,99 euro. Zet die als constante in je code.

![](../assets/illustraties/h03_boardingpass.jpg){.illustratie fig-alt="Potloodtekening: de robot toont aan de gate een groot ticket, het stokmannetje bekijkt het met een vergrootglas."}

Gebruik hierbij:

1. **String interpolatie** om de data in de tekst te verwerken.
2. **Escape characters** zoals ``\t`` (tab) en ``\n`` (nieuwe lijn) om de tekst netjes uit te lijnen.
3. De formattering voor een **geldbedrag** voor de prijs. Vergeet de UTF-8-lijn niet.
4. ``Environment.UserName`` om onderaan te tonen wie de pass heeft afgedrukt.

**Voorbeeldoutput:** (tekst na ``>`` is invoer)

```text
Boardingpass generator
**********************
Naam passagier:
>Joske Vermeulen
Vertrekplaats:
>Brussel (BRU)
Bestemming:
>New York (JFK)
Gate:
>A45

(Scherm wordt leeg gemaakt...)

****************************************
BOARDINGPASS
****************************************
Passagier:      Joske Vermeulen
Van:            Brussel (BRU)
Naar:           New York (JFK)
Gate:           A45
Prijs:          € 249,99

Vluchtgegevens gecontroleerd door: admin
****************************************
```

:::{.callout-tip}
Een ``\t`` springt naar de volgende tabstop, niet een vast aantal spaties verder. Tel dus per label hoeveel tabs het nodig heeft om de waarden onder elkaar te krijgen. Lees [Over tabstops](https://www.ziescherp.be/content/2_tekst/escapechars.html#over-tabstops) nog eens na.

Vergeet niet ``Console.Clear()`` te gebruiken om het scherm leeg te maken.
:::

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
De tabstops staan om de acht posities: op 8, 16, 24, enzovoort. ``Passagier:`` is 10 tekens lang, dus één ``\t`` brengt de naam naar positie 16. ``Van:`` is maar 4 tekens lang: één ``\t`` brengt je naar positie 8, en pas een tweede naar 16. Daarom krijgen de korte labels twee tabs.
::::

::::{.callout-caution collapse="true" title="Oplossing"}

```java
Console.OutputEncoding = System.Text.Encoding.UTF8;
const double TICKETPRIJS = 249.99;

Console.WriteLine("Boardingpass generator");
Console.WriteLine("**********************");
Console.WriteLine("Naam passagier:");
string naam = Console.ReadLine();
Console.WriteLine("Vertrekplaats:");
string vertrek = Console.ReadLine();
Console.WriteLine("Bestemming:");
string bestemming = Console.ReadLine();
Console.WriteLine("Gate:");
string gate = Console.ReadLine();

Console.Clear();

string lijn = "****************************************";
Console.WriteLine(lijn);
Console.WriteLine("BOARDINGPASS");
Console.WriteLine(lijn);
Console.WriteLine($"Passagier:\t{naam}");
Console.WriteLine($"Van:\t\t{vertrek}");
Console.WriteLine($"Naar:\t\t{bestemming}");
Console.WriteLine($"Gate:\t\t{gate}");
Console.WriteLine($"Prijs:\t\t{TICKETPRIJS:C}");
Console.WriteLine($"\nVluchtgegevens gecontroleerd door: {Environment.UserName}");
Console.WriteLine(lijn);
```

::::



# Shell-starter (PRO) {#h03-shell-starter}

:::{.callout-tip}
PRO oefeningen bevatten leerstof die mogelijk niet in deze cursus wordt behandeld, of die in een later hoofdstuk pas aan bod zal komen. Deze oefening werkt enkel op Windows.
:::

Met ``Process`` kan je vanuit je eigen programma een ander programma starten. Dit vereist wat meer code. Volgend voorbeeld voert het commando ``ipconfig /all`` uit en toont de uitvoer ervan in je console:

```java
System.Diagnostics.Process process = new System.Diagnostics.Process();
process.StartInfo.FileName = "ipconfig";
process.StartInfo.Arguments = "/all"; 
process.StartInfo.UseShellExecute = false;
process.StartInfo.RedirectStandardOutput = true;
process.StartInfo.RedirectStandardError = true;
process.Start(); //start process

// Read the output (or the error)
string output = process.StandardOutput.ReadToEnd(); //normal output
Console.WriteLine(output);
string err = process.StandardError.ReadToEnd(); //error output (if any)
Console.WriteLine(err);
//Continue
Console.WriteLine("Klaar");
```

:::{.callout-tip}
Let er op dat dit voorbeeld niet perfect werkt met een shell-commando dat even duurt. Denk bijvoorbeeld aan ``ping``. De output komt namelijk pas op het scherm als het commando is afgelopen. Test zelf maar eens!
:::

Maak een programma dat de gebruiker vraagt welk commando hij wil uitvoeren, en met welke argumenten. Voer het commando uit en toon de uitvoer. Enkele nuttige commando's in de netwerksfeer zijn bijvoorbeeld:

```text
hostname
arp -a
getmac
nslookup google.com
netstat
```

::::{.callout-caution collapse="true" title="Oplossing"}

```java
Console.WriteLine("Welk commando wil je uitvoeren?");
string commando = Console.ReadLine();
Console.WriteLine("Met welke argumenten? (laat leeg als er geen zijn)");
string argumenten = Console.ReadLine();

System.Diagnostics.Process process = new System.Diagnostics.Process();
process.StartInfo.FileName = commando;
process.StartInfo.Arguments = argumenten;
process.StartInfo.UseShellExecute = false;
process.StartInfo.RedirectStandardOutput = true;
process.StartInfo.RedirectStandardError = true;
process.Start();

string output = process.StandardOutput.ReadToEnd();
Console.WriteLine(output);
string err = process.StandardError.ReadToEnd();
Console.WriteLine(err);
Console.WriteLine("Klaar");
```

::::

**Deel 2.** Met de code hierboven start je enkel programma's. Een document of een website openen lukt zo niet: dan krijg je een fout. Dat laat je aan Windows over, met ``UseShellExecute = true``. De uitvoer kan je dan niet meer opvangen, dus de lijnen met ``Redirect`` moeten weg:

```java
System.Diagnostics.Process process = new System.Diagnostics.Process();
process.StartInfo.FileName = @"C:\Temp\mydocument.docx";
process.StartInfo.UseShellExecute = true;
process.Start();
```

Windows opent het bestand met het programma dat erbij hoort, net alsof je erop dubbelklikt. Een webadres zoals ``https://www.ap.be`` opent zo in je standaardbrowser.

Maak een tweede programma dat de gebruiker om een pad naar een bestand of om een webadres vraagt, en dat opent.

::::{.callout-caution collapse="true" title="Oplossing"}

```java
Console.WriteLine("Welk bestand of welke website wil je openen?");
string doel = Console.ReadLine();

System.Diagnostics.Process process = new System.Diagnostics.Process();
process.StartInfo.FileName = doel;
process.StartInfo.UseShellExecute = true;
process.Start();
```

Typt de gebruiker een pad zoals ``C:\Temp\mydocument.docx`` in, dan heb je geen ``@`` en geen dubbele backslashes nodig. Escape characters bestaan enkel in tekst die tussen aanhalingstekens in je code staat.
::::
