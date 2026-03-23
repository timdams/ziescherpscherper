*Geschatte tijd om dit te maken: 60 minuten*

## Introductie
We maken een applicatie die leerlingen kunnen gebruiken om beter te weten wat ze moeten doen in tijden van corona.
De applicatie bestaat uit 2 delen:
* Een “Covidbeslissingshelper”: deze zal enkele vragen aan de leerling vragen om te beslissen of de leerling naar school mag blijven gaan of in quarantaine moet
* Een “Covidquiz”: de leerling zal een vraag over Covid moeten oplossen om te zien of de leerling de regels goed genoeg kent.

*3 punten staan op naamgeving, layout en algemene oplossingsmethode*
## Flowchart (2 punten)
Maak een applicatie volgens volgende flowchart en de uitleg verderop:

Gebruik een switch om afhankelijk van de invoer van de gebruiker een ander deel (Covidquiz of Covidbeslissingshelper) uit te voeren:
* Indien de gebruiker iets anders dan ‘c’ of ‘q’ invoert dient de applicatie af te sluiten nadat het de boodschap “Verkeerde invoer” op het scherm heeft getoond.


![Rechterklik op de afbeelding en bewaar of kopieer deze om ze vergroot in je eigen tekenprogramma te zien](../../assets/2_beslissingen/covid.png). 


## Covidbeslissingshelper (4 punten)
Een reeks vragen wordt gesteld, afhankelijk van het vorige antwoord wordt er mogelijk een andere vraag gesteld.

Toon finaal wat de leerling moet doen. Toon dit met tekst wiens achtergrondkleur overeenkomt met die in de flowchart (groen indien naar school mag gegaan worden, rood indien quarantaine)
## Covidquiz (4 punten)
Deze quiz gaat testen of de leerling weet wanneer hij/zij getest moet worden na een risico-contact te hebben gehad. De regel is eenvoudig: bij een contact moet je je na 5 dagen laten testen.

De quiz zal dit testen als volgt:
* •	De quiz genereert een getal tussen 1 en 5 dagen, inclusief 5 zelf. Dit stelt het aantal dagen voor dat de leerling reeds in quarantaine is.
* Dit wordt aan de gebruiker getoond.
* Vervolgens wordt gevraagd hoeveel dagen de leerling nog moet wachten voor deze zich moet laten testen.
* De gebruiker voert dit getal is. Indien dit juist is toon je in groene letters “correct”. Bij fout toon je in rode letters “Fout” gevolgd door het juiste antwoord

Voorbeeld:
*Als de computer 3 toont, dan is het juiste antwoord 2. De student moet namelijk op dag 3 nog 2 dagen wachten om op dag 5 getest te worden.*


*Zorg ervoor dat ieder  deel (ruiten en vierkanten) uit de covidbeslissingshelper maar 1x in code moet beschreven staan. Je kan de covidbeslissingshelper in 40 of minder lijnen code oplossen.*

::::{.callout-caution collapse="true" title="Oplossing"}
![](../../assets/infoclip.png)
[Opname met bespreking van de oplossing](https://ap.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=2d0b313d-148c-46a5-b5cb-ac6f00bdd5c3)

```csharp
const int MIN_DAG= 1;
const int MAX_DAG= 5;

Console.WriteLine("Wat wil je doen? Covidbeslissingshelper (c) of covidquiz (q)");
char keuze = char.Parse(Console.ReadLine());
switch (keuze)
{
    case 'q':
        Random generator = new Random();
        int vraagGetal = generator.Next(MIN_DAG, MAX_DAG+1);
        Console.WriteLine($"Je bent al {vraagGetal} dagen in quarantaine");
        Console.WriteLine("Hoeveel dagen moet je wachten voor je getest moet worden?");
        int antwoordGebruiker = int.Parse(Console.ReadLine());
        int oplossing = MAX_DAG - vraagGetal;
        if(antwoordGebruiker == oplossing)
        {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine("Correct");
        }
        else
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine("Fout");
        }
        break;
    case 'c':
        bool moetInQuarantine = false;
        Console.WriteLine("Vertoon je covid symptomen?(j/n)");
        string symptomenVraag = Console.ReadLine();
        if(symptomenVraag== "n")
        {
            Console.WriteLine("In nauw contact gekomen met iemand die ziek is?(j/n)");
            string nauwcontactVraag = Console.ReadLine();
            if (nauwcontactVraag == "n")
            {
                Console.BackgroundColor = ConsoleColor.Green;
                Console.WriteLine("Je mag naar school blijven gaan");
            }
            else
                moetInQuarantine = true;
        }
        if(symptomenVraag=="j" || moetInQuarantine)
        {
            Console.WriteLine("Ga in quarantaine en laat je testen");
            Console.WriteLine("Heb je een positieve test?(j/n)");
            string posTestGebruiker = Console.ReadLine();
            if(posTestGebruiker=="j")
            {
                Console.BackgroundColor = ConsoleColor.Red;
                Console.WriteLine("7 dagen quarantine");
            }
            else
            {
                Console.BackgroundColor = ConsoleColor.Green;
                Console.WriteLine("Naar school wanneer genezen");
            }
        }
        break;
    default:
        Console.WriteLine("Verkeerde invoer");
        break;
}
```
::::
