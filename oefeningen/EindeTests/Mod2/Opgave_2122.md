> Volgende opgave was de vaardigheidsproefopdracht voor examen van dit vak (Programming Principles) in januari 2022

# Discovid safe tracker

De discotheek *"Damsing Van Camp"* heeft jouw diensten ingehuurd om een Covidsafe tracker te ontwikkelen. Ze willen op deze manier potentiële uitbraken in de wachtrij detecteren voor de contactracers.

## Werking

De tool wordt gebruikt door het personeel van het onthaal aan de kassa die het volgende zal doen:

* Ze zal met een andere app het covid safe ticket scannen.
* **Fase 1**: Vervolgens start ze jouw tool en voert in:
    * De naam van de gescande persoon.
    * Of deze persoon wel of niet werd toegelaten.
* **Fase 2**: De volgende dag kan de manager van de discotheek (*de wereldberoemde Vinny Timzo*) de resultaten van de app raadplegen en de nodige statistieken genereren die hij dan aan de contacttracers kan doorgeven.
*  **Fase 3**: Beslissen of het programma nog eens moet uitgevoerd worden of niet.

## Fase 1: data verzamelen

2 arrays worden aangemaakt van lengte 100. Vul de namenarray met de string ``leeg`` in ieder element, zo kan je verderop makkelijker tellen.

1. Het programma start met een loop die zich blijft herhalen tot de gebruiker "stop" invoert als naam. In de loop gebeurt het volgende:
    1. Een zinnetje toont ``Voer de naam in van persoon x`` waarbij de `x` vervangen door een getal dat aangeeft de hoeveelste persoon nu komt (begint bij 1 en wordt telkens met 1 verhoogd).
    2. De gebruiker voert de naam in (indien hier ``stop`` wordt ingevoerd stopt de verdere werking van de loop). 
    3. Deze naam wordt bewaard in een array (type ``string``).
    4. Een zinnetje toont ``Werd deze persoon toegelaten (j/n)?``. 
    5. De gebruiker moet ``j`` of ``n`` (ja of nee) invoeren. Enkel dan wordt er naar de volgende stap gegaan, anders wordt naar stap 4 gegaan.
    6. Het antwoord (j of n) wordt in een array van het type ``bool`` bewaard.
    7. Een zinnetje toont ``De persoon met naam X werd ingevoerd. Hij werd Y.`` waarbij ``X`` de ingevoerde naam is en ``Y`` ofwel ``toegelaten`` of ``niet toegelaten`` afhankelijk van de invoer bij stap 5.
2. Na de loop worden de statistieken getoond zoals uitgelegd in de volgende sectie (Fase 2)


Voorbeelduitvoer fase 1a (de namen en j of n werden door gebruiker ingevoerd):

```text
Voer de naam in van persoon 1
tim
Werd deze persoon toegelaten (j/n)?
n
De persoon met naam tim werd ingevoerd. Hij werd niet toegelaten.
Voer de naam in van persoon 2
jos
Werd deze persoon toegelaten (j/n)?
j
De persoon met naam jos werd ingevoerd. Hij werd toegelaten.
Voer de naam in van persoon 3
anna
Werd deze persoon toegelaten (j/n)?
Wat?
Werd deze persoon toegelaten (j/n)?
j
De persoon met naam anna werd ingevoerd. Hij werd toegelaten.
Voer de naam in van persoon 4
stop
```


## Fase 2a: data verwerken

Er wordt een methode ``ToonTracerRapport`` aangeroepen. Aan deze methode geef je de 2 arrays mee. 

Gebaseerd op het percentage niet toegelaten personen wordt een risico berekend: onder de 35% is Laag, tussen de 35% en 75% Verhoogd en boven 75% Kritiek. Het risico is gebaseerd op de verhouding tussen het aantal ingevoerde personen en degene die daarvan niet zijn toegelaten. Als er dus 10 personen in totaal werden ingevoerd en daarvan waren er 4 niet toegelaten, dan is het risico 40% (4 van de 10).

Deze grenswaarden kunnen na initialisatie niet meer aangepast worden.

Gebruik een enum type om het risico te bewaren.

Deze methode zal vervolgens een samenvatting van de ingevoerde data uitvoeren, als volgt (fictieve data):


```text
Aantal ingevoerde personen = 24
Daarvan werden 3 personen niet toegelaten, dat is 12,5%.
Risico: laag

Volgende personen werden niet toegelaten:
- Franky Vermeulen
- Raphael Palinsky
- Freya Versavel
```

## Fase 2b: data anonimiseren

Vervolgens vraagt het programma aan de gebruiker of de gebruikersnamen anoniem moeten gemaakt worden. De gebruiker antwoordt met j of n. Bij neen wordt deze fase overgeslagen en wordt er naar fase 2c gegaan. Bij j gebeurt het volgende:

Een methode ``MaakAnoniem`` wordt aangeroepen. Aan deze methode geef je de 2 arrays mee. 

Kopieer de naam-array naar een nieuwe array van string. Vervang de naam van ieder persoon in deze nieuwe array door ``*****`` indien deze persoon niet werd toegelaten (het aantal sterretjes is altijd even lang). De methode geeft een nieuwe array terug waarin de aangepaste namen staan.

De plekken in de array waar geen namen stonden worden niet door sterretjes vervangen én ook niet getoond.

Wanneer de methode terugkeert bewaar je het resultaat van deze methode (de naam array) in een nieuwe variabele.

Roep nu terug het ``ToonTracerRapport`` aan met deze nieuwe array. Het resultaat zou moeten zijn:


```text
Aantal ingevoerde personen = 24
Daarvan werden 3 personen niet toegelaten, dat is 12,5%.
Risico: laag

Volgende personen werden niet toegelaten:
- *****
- *****
- *****
```


## Fase 3: afsluiten

Het programma vraagt of er moet afgesloten worden of niet (j/n). Bij neen worden alle arrays leegemaakt en wordt er terug naar fase 1 gegaan en begint alles van voor af aan.




::::{.callout-caution collapse="true" title="Oplossing"}

```java

enum risicoNiveau { Laag, Verhoogd, Kritiek };
static void Main(string[] args)
{
    const int arrayLengte = 100;
    bool afsluiten = false;

    while (!afsluiten)
    {
        int nummerPersoon = 0;
        string[] namen = new string[arrayLengte];
        string[] namenAnoniem = new string[namen.Length];
        bool[] toegelatenArray = new bool[namen.Length];

        for (int i = 0; i < namen.Length; i++)
        {
            namen[i] = "leeg";
        }

        Console.Clear();
        bool herhalen = true;
        while (herhalen)
        {
            Console.WriteLine($"Voer de naam in van persoon {nummerPersoon + 1}");
            string naam = Console.ReadLine().ToLower();
            if (naam == "stop")
            {
                herhalen = false;
            }
            else
            {
                namen[nummerPersoon] = naam;
                bool goedAntwoord = true;

                do
                {
                    Console.WriteLine("Werd deze persoon toegelaten? j/n");
                    string keuze = Console.ReadLine().ToLower();
                    switch (keuze)
                    {
                        case "j":
                            goedAntwoord = true;
                            toegelatenArray[nummerPersoon] = true;
                            break;
                        case "n":
                            goedAntwoord = true;
                            toegelatenArray[nummerPersoon] = false;
                            break;
                        default:
                            goedAntwoord = false;
                            break;
                    }
                } while (!goedAntwoord);
                if (toegelatenArray[nummerPersoon])
                {
                    Console.WriteLine($"De persoon met naam {namen[nummerPersoon]} werd ingevoerd. Hij werd toegelaten");
                }
                else
                {
                    Console.WriteLine($"De persoon met naam {namen[nummerPersoon]} werd ingevoerd. Hij werd niet toegelaten");
                }
                nummerPersoon++;
            }

        }
        ToonTracerRapport(namen, toegelatenArray);
        Console.WriteLine("Moeten de gebruikersnamen anoniem gemaakt worden? j/n");
        if (Console.ReadLine().ToLower() == "j")
        {
            namenAnoniem = MaakAnoniem(namen, toegelatenArray);
            ToonTracerRapport(namenAnoniem, toegelatenArray);
        }
        Console.WriteLine("Wilt u afsluiten? j/n");
        if (Console.ReadLine().ToLower() == "j")
        {
            afsluiten = true;
        }
    }

}
static void ToonTracerRapport(string[] namenArray, bool[] toegelatenArray)
{
    int aantalPersonen = 0;
    int aantalNietToegelaten = 0;
    double procentNietToegelaten = 0;
    risicoNiveau risico = risicoNiveau.Laag;
    const double kritiek = 0.75;
    const double verhoogd = 0.35;

    for (int i = 0; i < toegelatenArray.Length; i++)
    {
        if (!toegelatenArray[i] && namenArray[i] != "leeg")
        {
            aantalNietToegelaten++;
        }
        else if (toegelatenArray[i] && namenArray[i] != "leeg")
        {
            aantalPersonen++;
        }
    }
    procentNietToegelaten = Convert.ToDouble(aantalNietToegelaten) / aantalPersonen;
    if (procentNietToegelaten > kritiek)
    {
        risico = risicoNiveau.Kritiek;
    }
    else if (procentNietToegelaten > verhoogd)
    {
        risico = risicoNiveau.Verhoogd;
    }
    Console.Clear();
    Console.WriteLine($"Aantal ingevoerde personen = {aantalPersonen}");
    Console.WriteLine($"Daarvan werden er {aantalNietToegelaten} personen niet toegelaten, dat is {procentNietToegelaten:P}.");
    Console.WriteLine($"Risico : {risico}\n");

    Console.WriteLine("Volgende personen werden niet toegelaten:");
    for (int i = 0; i < aantalPersonen; i++)
    {
        if (!toegelatenArray[i] && namenArray[i] != "leeg")
        {
            Console.WriteLine($"- {namenArray[i]}");
        }
    }
}
static string[] MaakAnoniem(string[] namen, bool[] toegelatenArray)
{
    string[] anoniemeNamen = new string[namen.Length];
    Array.Copy(namen, anoniemeNamen, namen.Length);
    for (int i = 0; i < anoniemeNamen.Length; i++)
    {
        if (namen[i] != "leeg")
        {
            if (!toegelatenArray[i] && namen[i] != "leeg")
            {
                anoniemeNamen[i] = "*****";
            }
        }

    }
    return anoniemeNamen;
}

```
::::
