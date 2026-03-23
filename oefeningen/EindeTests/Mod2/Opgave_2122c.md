# Inleiding

Helaas, de Mac-DamsCamp slaagt niet aan. Toch heeft APDonalds™ je gevraagd om hun kassa-software grondig te vernieuwen. Aan jou de taak om de bestelling van een hamburger, met optioneel drank en frietjes, te stroomlijnen. Go get’m!

# Basis werking
Hier de algemene flow van de applicatie (merk op dat de methoden BestelFrietjes,BestelDrinken en BerekenTotaal allemaal vanuit BestelHamburger worden aangeroepen, wat later wordt uitgelegd)

![](flowopgave7.png)
 
De applicatie loopt oneindig door en kan dus niet afgesloten worden).

In de hoofdapplicatie bewaar je in een array (met grootte 100) van doubles telkens het resultaat van de BestelHamburger-methode. (met deze array doe je voor de rest niets).

# Methoden (10 p)

## BestelHamburger (3p)

1.	Deze methode toont het menu( zie onderaan) en heeft een double als resultaat. De methode vraagt eerst welke hamburger de gebruiker wenst. De gebruiker voert een string in voor z’n keuze (“gewoon”, “fish”, “veggie”). Zolang de gebruiker geen juist antwoord geeft wordt de vraag opnieuw gesteld en de input uitgelezen.
2.	Vervolgens dient de gebruiker met “j” of “n” te antwoorden of deze frietjes wilt .Indien ja dan wordt de methode “BestelFrietjes” aangeroepen.
3.	Vervolgens dient de gebruiker met “j” of “n” te antwoorden of deze frisdrank wenst. Indien ja dan wordt de methode “BestelDrinken” aangeroepen.
4.	Finaal roept deze methode de BerekenTotaalMethode aan en zal alle verzamelde informatie aan deze methode meegeven (zie verder). Het resultaat van de BerekenTotaalMethode (een double) wordt teruggegeven als resultaat van deze methode.

## BestelFrietjes (1p)

Deze methode vraagt hoeveel frietjes de gebruiker wenst en zal het resultaat (een getal) teruggeven als resultaat. De gebruiker voert een getal in tussen 1 en 10 (geen controle nodig) en dit getal geeft deze methode terug.

## BestelFrisdrank (2p)

De methode vraagt welke frisdrank de gebruiker wenst (zie menu), wederom voert de gebruiker een getal in. Dit getal wordt omgezet naar een enum van het type Frisdranken (met als waarden Water, Fanta, Cola) dat zal teruggeven als resultaat van de methode.

## Berekentotaal (3p)

Deze methode geeft de prijs als double tot 2 cijfers na de komma op het scherm weer en zal deze waarde ook als return teruggeven. De methode aanvaardt volgende parameters:

1. hamburger, string, verplicht
2. aantalfrietjes, int, optioneel (standaard: 1)
3. drank, enum type Frisdranken, optioneel (standaard: "geen") 

Volgende menukaart wordt gebruikt om met voorgaande informatie de totaalprijs te bereken.

De menukaart:
 
* Gewone hamburger: 	€5
* Fishburger:		    €6
* Veggieburger:	    	€3
* Water			        €2
* Fanta		           	€3
* Cola		        	€3
* Frietjes:	        	€2 per frietje
 
### Promoties

Volgende promoties zijn actief en worden toegepast indien relevant:

* Box: Indien de gebruiker én frisdrank én frietjes besteld krijgt hij 5€ korting op de totaalprijs.
* Hipster: Indien de gebruiker Water, een Veggieburger en 1 frietje besteld krijgt hij €3 korting op de totaalprijs.

Indien de gebruiker een promotie heeft gekozen dan wordt dit op het scherm getoond vlak voor de prijs wordt getoond. 

# Uitbreidingen (2p)

Voeg volgende uitbreidingen toe aan de applicatie.

**Visualisatie bestelling (2p)**: In de methode BerekenTotaal wordt de bestelling gevisualiseerd als volgt:
* Hamburger wordt voorgesteld als de letter “H” met als achtergrond groen bij gewone hamburger, blauw voor fish, rood voor veggie.
* Het aantal frietjes wordt voorgesteld als evenveel keer de letter “I” (hoofdletter i) als er frietjes zijn besteld.
* De frisdank wordt voorgesteld door een letter (“W” voor water, “F” voor Fanta, “C” voor cola)

Voorbeeld voor iemand met fishburger, 3 frietjes en fanta:

```text
HIIIF
```  

*(de H heeft een blauwe achtergrond)*

Vervolgens wordt de prijs en eventuele promotievermelding getoond.



::::{.callout-caution collapse="true" title="Oplossing"}
```java
static void Main(string[] args)
    {
        double[] verkochteMenus = new double[100];
        int teller = 0;
        while (teller < verkochteMenus.Length)
        {
            verkochteMenus[teller] = BestelHamburger();
        }
    }

    static double BestelHamburger()
    {

        ToonMenu();
        string keuzeHamburger = "";

        do
        {
            Console.WriteLine("Welke hamburger wenst u?(gewoon, fish, veggie)");
            keuzeHamburger = Console.ReadLine();
        } while (!(keuzeHamburger == "gewoon" || keuzeHamburger == "fish" || keuzeHamburger == "veggie"));

        Console.WriteLine("Wenst u frietjes? (j/n)");
        string wilFrietjes = Console.ReadLine();
        int aantalFrietjes = 0;
        if (wilFrietjes == "j")
            aantalFrietjes = BestelFrietjes();

        Console.WriteLine("Wenst u drank? (j/n)");
        string wilFrisdrank = Console.ReadLine();
        Frisdranken keuzeDrank = Frisdranken.Geen;
        if (wilFrisdrank == "j")
            keuzeDrank = BestelDrinken();

        return BerekenTotaal(keuzeHamburger, aantalFrietjes, keuzeDrank);
    }

    private static void ToonMenu()
    {
        Console.WriteLine("Euro tekens zullen als vraagteken getoond worden");
        Console.WriteLine("\nGewone hamburger: €5");
        Console.WriteLine("Fishburger: €6");
        Console.WriteLine("Veggieburger: €3");
        Console.WriteLine("Water €2");
        Console.WriteLine("Fanta €3");
        Console.WriteLine("Cola €3");
        Console.WriteLine("Frietjes: €2 per frietje");
    }

    static double BerekenTotaal(string hamburger, int aantalFriet = 1, Frisdranken frisdrank = Frisdranken.Geen)
    {
        double totaal = 0;
        switch (hamburger)
        {
            case "gewoon": totaal += 5; Console.BackgroundColor = ConsoleColor.Green; break;
            case "fish": totaal += 6; Console.BackgroundColor = ConsoleColor.Blue; break;
            case "veggie": totaal += 3; Console.BackgroundColor = ConsoleColor.Red; break;
        }
        Console.Write("H");
        Console.ResetColor();

        totaal += (aantalFriet * 2);
        for (int i = 0; i < aantalFriet; i++)
        {
            Console.Write("I");
        }


        switch (frisdrank)
        {

            case Frisdranken.Water:
                totaal += 2;
                Console.WriteLine("W");
                break;
            case Frisdranken.Fanta:
                totaal += 3;
                Console.WriteLine("F");
                break;
            case Frisdranken.Cola:
                totaal += 3;
                Console.WriteLine("C");
                break;
            default:
                break;
        }

        //Promoties
        if (aantalFriet > 0 && frisdrank != Frisdranken.Geen)
        {
            totaal -= 5;
            Console.WriteLine("Je hebt de box promotie!");
        }
        if (hamburger == "veggie" && aantalFriet == 1 && frisdrank == Frisdranken.Water)
        {
            totaal -= 3;
            Console.WriteLine("Je hebt de hipster promotie!");
        }

        Console.WriteLine($"Dit kost je: {totaal:0.00}");
        return totaal;
    }

    enum Frisdranken { Geen, Water = 1, Fanta, Cola };
    static Frisdranken BestelDrinken()
    {
        Console.WriteLine("Welke frisdrank wenst u? 1.Water, 2.Fanta, 3. Cola");
        return (Frisdranken)int.Parse(Console.ReadLine());


    }
    static int BestelFrietjes()
    {
        Console.WriteLine("Hoeveel frietjes wenst u? (1 tot 10)");
        return int.Parse(Console.ReadLine());
    }
```
::::
