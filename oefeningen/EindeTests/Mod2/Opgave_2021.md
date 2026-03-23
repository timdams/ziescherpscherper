> Volgende opgave was de vaardigheidsproefopdracht voor examen van dit vak (Programming Principles) in januari 2020

## Opgave

*De geheime diensten hebben je hulp ingeroepen. De laatste weken onderscheppen ze vreemde signalen uit de lucht en ze hebben software nodig om deze signalen te analyseren. Jouw opdracht bestaat er uit een tool te ontwikkelen die de geheime diensten zal vertellen wanneer een signaal verdacht is of niet.*


## Deel 1 : signaal namaken 

*De signalen die onderschept worden bestaan steeds uit een willekeurige reeks hoofdletters van A tot en met Z. Ze zijn steeds 100 karakters lang.*

Een voorbeeld van zo’n signaal:
``BAMKHVSSJDUHCDGDQWQXYSXPVHOMRALPNNAKIRHVBEQWQOFDMQFKQLAIDXPAHGBJSEUPCWUYOVVTBBZGCKZBVBYCNSHLCHNUDHDL``

* Maak een methode (genaamd MaakSignaal) die geen parameters aanvaardt en een array van chars teruggeeft:
  * De methode genereert een random array met lengte 100 die de eigenschappen heeft van het signaal hierboven in de kader beschreven. 
  * (Denk eraan: “Een methode mag enkel datgene doen, wat de identifier van de methode laat vermoeden. Dus een signaal maken en NIET afdrukken”)
* Roep deze methode aan bij de start van je applicatie. De array (we zullen deze code noemen) die je terugkrijgt zal je vervolgens gebruiken in de volgende delen
* Toon de gegenereerde code op het scherm

## Deel 2 : visualisatie signaal
*Onderzoekers hebben ontdekt dat enkel de letters X,Y, Z en Q verdacht zijn. Alle overige informatie is niet nodig om het signaal te analyseren.*

* Maak een methode (genaamd ``VisualiseerCode``) die 1 parameter van het type char-array aanvaardt en niets teruggeeft:  
  * De methode zal element per element van de meegegeven parameter overlopen en het volgende doen:
    * Het huidige element wordt aan een methode ``NeedsColor`` (zie verder) meegegeven. Deze methode zal een bool teruggeven
    * Indien het resultaat van NeedsColor waar is dan zal het huidige element aan een methode ``WriteCharInRed`` meegegeven worden (zie verder)
    * Indien het resultaat van ``NeedsColor`` NIET waar is, dan zal er een punt (.) op het scherm geplaatst worden in plaats van het karakter.

 

### Hulpmethoden:
* ``NeedsColor``: deze methode geeft een bool terug en aanvaardt 1 parameter van het type char. De methode geeft enkel true terug indien de parameter een X,Y,Z of Q karakter is.
* ``WriteCharInRed``: deze methode geeft niets terug en aanvaardt 1 parameter van het type char. De methode zal de meegegeven parameter in het rood op het scherm tonen (m.b.v Write) op de huidige plaats van de cursor, en vervolgens de kleur terug resetten.

## Deel 3 : analyse signaal 
*Het aantal keer dat de speciale tekens X,Y,Z en Q voorkomen bepaalt hoe verdacht het signaal juist is. Enkel indien de verdachte tekens in totaal een veelvoud van 3 zijn is het signaal interessant om op te volgen. Een bericht zonder verdachte tekens is niet verdacht.*

* Maak een methode (genaamd AnalyseerCode) die 1 parameter van het type char-array aanvaardt en niets teruggeeft:  
  * De methode zal de methode ``CountSpecials`` aanroepen (zie verder) om te weten hoeveel verdachte tekens er voorkomen. Vervolgens zal de methode een zin tonen die zegt hoeveel speciale tekens er gevonden werden.
  * Vervolgens wordt een methode ``IsVerdacht`` aangeroepen (zie verder) waar het resultaat van ``CountSpecials`` als parameter aan wordt meegegeven. Indien het resultaat van ``IsVerdacht`` true is dan zal er op het scherm verschijnen “Dit is een verdacht signaal” , anders verschijnt er “Dit is geen verdacht signaal”.
 

### Hulpmethoden:

* ``CountSpecials``: deze methode aanvaardt een array van chars en geeft een int terug als resultaat. De methode zal teruggeven hoe vaak de speciale letters X,Y,Z en Q voorkomen in de meegegeven array.
  * De methode zal de eerder geschreven methode NeedsColor gebruiken om te weten of een char speciaal is of niet
* ``IsVerdacht``: deze methode aanvaardt een int als parameter en geeft een bool terug als resultaat. Het resultaat van deze methode is true indien de meegegeven parameter een veelvoud van 3 is (3 zelf dus ook) .

### Deel 4 : opnieuw?
Finaal verschijnt de vraag of de gebruiker opnieuw deel 1 tot 3 wil doorlopen.  We starten terug bij deel 1 indien de gebruiker ‘j’ (als karakter) invoert. In alle andere gevallen sluit het programma zich af.


::::{.callout-caution collapse="true" title="Oplossing"}
#

```java
static void Main(string[] args)
{
    char input = 'j';
    do
    {
        Console.WriteLine("Onderschepte code");
        char[] code = MaakSignaal();
        Console.WriteLine();
        VisualiseerCode(code);
        AnalyseerCode(code);
        Console.WriteLine("Wenst u opnieuw te beginnen?");
        input = char.Parse(Console.ReadLine());
    } while (input == 'j');
}

private static void AnalyseerCode(char[] code)
{
    Console.WriteLine();
    Console.Write($"Er werden {CountSpecials(code)} speciale tekens gevonden. Dit is ");
    if (!IsVerdacht(CountSpecials(code)))
    {
        Console.Write("g");
    }
    Console.WriteLine("een verdacht signaal");
}

private static void VisualiseerCode(char[] code)
{
    Console.WriteLine("Detectie van de speciale tekens:");
    for (int i = 0; i < code.Length; i++)
    {
        if (NeedsColor(code[i]))
        {
            WriteCharInRed(code[i]);
        }
        else
            Console.Write(".");
    }
}

private static char[] MaakSignaal()
{
    const int S_LENGTH = 100;
    Random r = new Random();
    char[] code = new char[S_LENGTH];
    for (int i = 0; i < code.Length; i++)
    {
        code[i] = (char)r.Next('A', 'Z' + 1);
        Console.Write(code[i]);
    }
    return code;
}

private static bool IsVerdacht(int v)
{

    if (v % 3 == 0)
    {
        return true;
    }
    return false;
}

static bool NeedsColor(char c)
{
    switch (c)
    {
        case 'X':
        case 'Y':
        case 'Z':
        case 'Q':
            return true;
    }
    return false;
}

static void WriteCharInRed(char c)
{
    Console.ForegroundColor = ConsoleColor.Red;
    Console.Write(c);
    Console.ResetColor();
}

static int CountSpecials(char[] ar)
{
    int total = 0;
    for (int i = 0; i < ar.Length; i++)
    {
        if (NeedsColor(ar[i]))
            total++;
    }
    return total;
}
```
::::
