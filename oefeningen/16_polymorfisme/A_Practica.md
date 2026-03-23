



# Dierentuin advanced (*Essential*)

# Dierentuin advanced (*Essential*)

:::{.callout-tip}
Voeg een filter toe aan de dierentuin applicatie uit [een eerder hoofdstuk](../13_advancedovererving/A_Practica.md):

* Filter praten: er wordt gevraagd welke dieren moeten praten (``Koe``, ``Slang`` of ``Varken``) vervolgens zullen enkel die dieren praten (tip: "is" operator).


# Pokémon vergelijken (*Essential*)

# Pokémon vergelijken (*Essential*)
Implementeer de ``Equals`` methode (via ``override``) in je ``Pokemon`` klasse. Twee Pokémon zijn dezelfde indien volgende zaken gelijk zijn:

* Basis stats
* Naam
* Level


# Een eigen huis (*Essential*)

# Een eigen huis (*Essential*)

Gebruik compositie én overerving om een klasse ``Huis`` te voorzien van enkele kamers, waarbij iedere kamer een klasse op zich is (denk aan ``BadKamer``, ``Salon``, etc). Alle kamers erven over van de klasse ``Kamer``.
Iedere kamer heeft een oppervlakte (in vierkante meter), een naam en prijs. Standaard is de prijs van een kamer 400euro, maar mogelijke child-klassen zullen deze property soms overriden. De Prijs is een readonly property (zonder setter, en heeft ook geen achterliggende instantievariabele).

Maak minstens volgende klassen:

* Badkamer: kost 500 euro
* Gang: kost 10euro per vierkante meter dat deze kamer groot is
* Salon: kost 300 euro indien er geen schouw aanwezig is (via ``bool`` bijhouden) anders 500euro


De klasse ``Huis`` heeft een lijst van kamers. De klasse heeft ook een methode ``BerekenPrijs`` die de totale prijs van het huis berekent gebaseerd op de prijzen van iedere kamer in de lijst.

Test je klasse door enkele huizen te maken en er enkele kamers in te plaatsen (bepaal zelf hoe je de kamers aan het huis toevoegt: via methode, constructor, etc) en vervolgens de prijs ervan te tonen.


## Mapmaker uitbreiding (PRO)

Voorzie een ``Teken`` methode die een huis kan tekenen, gebruikmakend van de ``Teken``-methoden van de kamers. Hiervoor dien je een ``X`` en ``Y`` coördinaat per , alsook lengte en breedte per huis én kamer te hebben zodat je deze op de juiste plekken op het scherm kan plaatsen.

Kan je ervoor zorgen dat een architect nieuwe kamers kan toevoegen en verwijderen?




# Luchtvaartshow (*Essential*, GPT)

# Luchtvaartshow (*Essential*, GPT)

Ontwerp een applicatie waarin diverse typen vliegende voertuigen meedoen aan een luchtvaartshow en hun unieke vlieg‑gedrag demonstreren. In deze opgave werk je met inheritance, polymorfisme, het base‑keyword, de Dictionary‑klasse en statische methoden.

**Vereisten**

1. Basisklasse Vliegtuig:

* Maak een basisklasse ``Vliegtuig`` met een property ``ModelNaam`` en een constructor die deze initialiseert.

* Implementeer een virtuele methode ``Vlieg()`` die een standaardbericht naar de console schrijft (bijvoorbeeld "Het vliegtuig [ModelNaam] stijgt op.").

* Voeg een static instantievariabele toe: een ``Dictionary<string, Vliegtuig>`` waarin alle aangemaakte vliegtuigobjecten geregistreerd worden (gebruik de modelnaam als sleutel).

* Implementeer een statische methode, ``ToonVliegtuigenRegister()``, die alle geregistreerde objecten uit de dictionary uitleest en hun details (zoals modelnaam en type voertuig) weergeeft op het scherm.

1. Subklassen:

* ``Raket``:
  * Laat Raket overerven van ``Vliegtuig``.
  * Overschrijf de methode ``Vlieg()`` zodat een uniek bericht wordt weergegeven, namelijk  "De raket [ModelNaam] schiet de ruimte in!"”"
* ``Helikopter``:
  * Laat ``Helikopter`` erven van ``Vliegtuig`` en voeg een extra property toe, ``RotorSnelheid``.
  * Overschrijf de methode ``Vlieg()`` zodat eerst het standaardgedrag van Vliegtuig wordt aangeroepen (met base.Vlieg()) en daarna een extra bericht wordt getoond met de huidige rotor snelheid (namelijk "De helikopter [ModelNaam] draait met een rotor snelheid van [RotorSnelheid] RPM.").

**Hoofdprogramma**

Maak in het hoofdprogramma meerdere objecten van de types Vliegtuig, Raket en Helikopter.

Zorg ervoor dat elk nieuw vliegtuigobject automatisch wordt toegevoegd aan het statische dictionary-register ( via  de constructor).

Roep ten slotte de statische methode ``ToonVliegtuigenRegister()`` aan om een overzicht van alle geregistreerde voertuigen te tonen.



# Magic

# Magic
Bekijk de vraag en het goedgekeurde antwoord op [volgende pagina](https://stackoverflow.com/questions/20524837/card-game-architecture-for-cards)

Kan je de manager aanpassen zodat deze niet met ``card1`` en ``card2`` werkt, maar met een ``List<Card>``.

Voeg zelf enkele kaarten toe en verzin ook enkele afgeleide ``Card``-types  , bv ``Land`` en ``Artifact``.




# Ganzenbord Dams Van Camp editie (*Essential*)

# Ganzenbord Dams Van Camp editie (*Essential*)

Bordspelen zoals Ganzenbord of Monopoly zijn goede oefeningen om je polymorfisme mee te oefenen. Het speelbord is niet meer dan een lijst van objecten, met ieder vakje een object in die lijst. Echter, sommige vakjes kunnen meer dan andere en je lijst bevat dus objecten van verschillende child-klassen die allemaal overerven van een basisklasse ``Vakje`` of iets dergelijks. Volgende opgave uit een oud examen toont dit. Kan je deze oefening maken?

:::{.callout-tip}
Volgende opgave komt uit  de vaardigheidsproefopdracht voor 2e zit examen van dit vak (OOP) in augustus 2021.
:::

## Intro

De kinderen van meneer Dams en Van Camp spelen graag Ganzenbord. Laatst toen we speelden vroegen ze zich af of mijn studenten eigenlijk ganzenbord zouden kunnen programmeren?
"Uiteraard!" antwoordde meneer Dams. "Weliswaar een vereenvoudigde versie, maar toch. Ze zouden dat wel kunnen, ja", vulde hij fier aan.

En hier zit je nu dus, opgescheept met het programmeren van de basisfunctionaliteit van ganzenbord voor 1 speler (geen flauw benul hoe ganzenbord werkt? Geen probleem! Alles wordt duidelijk doorheen de opgave!)


## Ganzenbord single player edition

Ganzenbord, *the single player edition*, wordt gespeeld door één speler die moet proberen zo ver mogelijk te geraken op een traject van vakjes. Sommige vakjes doen iets met de speler wanneer deze op het vakje belandt (bijvoorbeeld een stapje vooruit), anderen doen niets.

Het bord wordt aan de start van ieder spel random aangemaakt. De speler moet een dobbelsteen werpen om te weten hoeveel stappen z'n pion vooruit zal gaan. De speler verdient punten hoe verder hij geraakt.

## Te maken klassen

### ``Dobbelsteen`` 

Deze eenvoudige klasse heeft een statische methode ``Rol`` en geeft een willekeurig getal, namelijk 1, 2 of 3. 

###  ``Speelvakje`` 

Het spelbord zal opgebouwd worden door een reeks van speelvakjes. Daarom maken we eerst dit vakje.

Een vakje wordt gedefinieerd door:

* Een read-only int-property ``BeweegVakjes`` (met private set): deze eigenschap geeft aan hoeveel vakjes vooruit (positief) of achteruit (negatief) de speler zal gaan als op dit vakje wordt geland.
* Een default constructor die de ``BeweegVakjes`` instelt op een waarde als volgt:
	* 30% kans op +1 of +2
    * 20% kans op -1 of -2
    * 50% kans op 0
* Een virtuele methode ``ToonVakje`` dat op de huidige locatie van de cursor in de console de ``BeweegVakjes``waarde van het vakje op het scherm schrijft. Indien de waarde positief of 0 is, toon je dit met een + voor. Bijvoorbeeld: +2 of +0. Een negatief toon je met de - , zoals -2.


### ``Ganzenbord`` 

Een ganzenbord heeft altijd een lijst,``SpeelVakjes`` van 10 ``Speelvakje``-objecten. Deze zijn niet publiek zichtbaar.

Een ganzenbord heeft:

* Een default constructor die de lijst vult met 10 ``Speelvakje``-objecten.
* Een instantievariabele ``pionIndex`` die aangeeft op welke vakje in de lijst de speler zich momenteel bevindt. 
* Een autoproperty ``HuidigeScore`` die standaard op 0 staat.
* Een methode ``BeweegPion`` die een ``int`` als parameter aanvaardt en een ``bool`` teruggeeft. De werking van de methode wordt verderop uitgelegd.
* Een methode ``TekenBord`` die het ganzenbord op het scherm toont zoals verderop uitgelegd.

### ``BeweegPion()`` 

Deze methode zal de speler voortbewegen op het bord en laten weten of de speler het einde heeft gehaald heeft of niet.

De speler kan een getal (het getal dat hij met de dobbelsteen verderop zal rollen) aan deze methode meegeven zodat het volgende gebeurt:

De ``pionIndex`` wordt verhoogd met het getal dat wordt meegeven, vervolgens: 

* Indien ``pionIndex`` hierdoor hoger wordt dan 9 en dus voorbij het laatste vakje wordt gegaan, dan wint de speler en wordt eerst de ``HuidigeScore`` met 10 verhoogd en wordt vervolgens ``true`` teruggegeven om aan te geven dat de speler gewonnen is.
* Indien ``pionIndex`` eindigt op een getal 8 of lager, dan gebeurt het volgende:
    * In de lijst van ``SpeelVakje``-objecten wordt gekeken op welk vakje de speler is aangekomen. De ``BeweegVakjes`` waarde van dit vakje wordt bijgeteld of afgetrokken van ``pionIndex``. Dit wordt de nieuwe locatie van de speler. Er gebeurt niets meer na het belanden op dit nieuwe vakje (ook al is het een vakje waar vooruit of achteruit zou moeten gegaan worden). 
    * De methode geeft ``false`` terug indien ``pionIndex`` terug een getal tussen 0 en 8 wordt, anders ``true`` indien hoger dan 8 (hij is dan gewonnnen-. Indien de speler op een index onder 0 belandt wordt ``false`` teruggegeven, wordt de score met 10 verlaagd én wordt de ``pionIndex`` finaal op 0 teruggezet (reset), ongeacht waar de speler op negatief belandde.

### ``TekenBord()``

Deze methode zal de 10 vakjes naast elkaar op het scherm visualiseren door de lijst ``SpeelVakjes`` te overlopen en van ieder object de ``ToonVakje`` methode aan te roepen.
Vervolgens wordt de ``pionIndex`` locatie gebruikt om dat vakje op het scherm te overschrijven met een 'T'

Indien de speler dus op index 3 (het vierde vakje) zit van een willekeurig bord, dan kan de output zijn:

```text
-1+2+1-T+0+0-2+1+1+0
```

Dus het eerste vakje heeft waarde -1, het volgende 2, het derde 1, het vierde zien we niet want daar staat het mannetje (het was was blijkbaar een negatief vakje) en  zien we een T, dan krijgen we twee vakjes met waarde 0.

## Main spelloop

De main spelloop werkt als volgt:

* Een nieuw ``Ganzenbord`` object wordt aangemaakt.
* Een loop wordt gestart die blijft duren tot de speler aan het einde geraakt. Deze loop doet het volgende:
  
  * Het spelbord wordt getoond mbv van de ``TekenBord`` methode.
  * Een nieuw getal wordt met de ``Rol`` methode van de dobbelsteen gerold. Dit getal wordt op het scherm getoond , onder het spelbord ``Je rolde 2``
  * Het gerolde getal wordt aan de  ``BeweegPion``-methode meegeven en het resultaat van die methode wordt gebruikt om te bepalen of de loop nog een iteratie zal doen of niet.
  * De loop pauzeert nu tot de gebruiker op enter duwt.
  * Het scherm wordt leeggemaakt.
* Finaal wordt de ``HuidigeScore`` van de speler getoond.

## Polymorfisme komt er aan

Voeg volgende uitbreidingen toe nadat je een werkend geheel hebt.

Maak een klasse ``KleurVakje`` dat overerft van ``SpeelVakje``

Dit vakje doet alles wat een gewoon vakje doet, het zal enkel de ``ToonVakje`` method aanvullen zodat het huidige vakje een rode achtergrond met witte letters heeft indien de ``BeweegVakjes`` waarde negatief is. Anders groen met zwarte letters bij positieve of waarde  0.

Aan de start van het spel wordt aan de speler gevraagd of hij de kleuren of zwartwit versie van het spel wil spelen.

Voeg een overloaded constructor aan ``GanzenBord`` toe die een bool aanvaardt. Deze bool geeft aan of de speler een kleuren of klassiek zwart/wit speelbord wil gebruiken. Afhankelijk van deze parameter wordt dan het juiste soort vakjes in de ``SpeelVakjes`lijst geplaatst.

Bij het opstarten van het spel vraag je aan de gebruiker of hij de kleur of de zwartwit versie van Ganzenbord wil spelen.


# Mapmaker "all-in-one-project"

# Mapmaker "all-in-one-project"

Begin aan het all-in-project  "[Map Maker](../A_DEEL2_AllInOne/1_MapMapker.md)". Stop aan de sectie interfaces (die je pas in volgend hoofdstuk zult leren gebruiken). Je zal in dit project dingen herkennen die je eerder al in de "Een eigen huis" oefening hebt moeten maken. 


# (Pro²) Methoden als objecten

# (Pro²) Methoden als objecten

:::{.callout-tip}
Deze oefening gaat erg ver voorbij de leerstof van dit boek en is enkel bedoeld voor diegene die 'above and beyond' willen gaan in hun kennis.
:::

Tot hiertoe hebben we altijd gepraat over enerzijds objecten, en anderzijds methoden. Twee zaken die wel een relatie met elkaar hebben (een klasse kan methoden hebben, een methode kan objecten als parameter of return type hebben). Maar wat als ik je vertel dat je ook methoden als objecten kunt gebruiken. Het concept "delegate" laat ons toe om methoden als parameters doorheen een applicatie door te geven. Hier een droog, maar duidelijk voorbeeld ([bron](https://www.tutorialsteacher.com/csharp/csharp-delegates))

```csharp
public delegate void MyDelegate(string msg); //declaring a delegate

class Program
{
    static void Main(string[] args)
    {
        MyDelegate del = MethodA; //same as MyDelegate del = new MyDelegate(MethodA);
        del("Hello world");
    }

    static void MethodA(string message)
    {
        Console.WriteLine("Called ClassA.MethodA() with parameter: " + message);
    }
}
```

Vanaf nu kan je de variabele ``del`` als object gebruiken én aanroepen:

```csharp
del("Hello World!");
```

Of zelfs doorgeven als parameter

```csharp
static void Main(string[] args)
{
    MyDelegate del = MethodA;
    InvokeDelegate(del);
}

static void InvokeDelegate(MyDelegate del) // MyDelegate type parameter
{
    del("Hello World");
}
```

Omdat delegates al wat oldschool zijn geworden, heeft .NET ook al vele jaren wat meer generieke (en dus bruikbaardere) versies hiervan, namelijk ``Action<T>`` en ``Func<T>``. De werking hiervan legt deze gekende man stap voor stap [uit in deze blog](https://timdams.com/2012/04/19/using-delegates-func-and-lambdas-a-tutorial-with-soldiers/).

**Kan je de hele tekst volgen en de gemaakte finale oefening uitbreiden naar een echte "applicatie"?**



# Grand Theft Auto: San Andreas - Polymorphism (*Final Essentials*, GPT)

*Los Santos heeft een divers wagenpark. Het is jouw taak om een universeel bestuurssysteem te maken dat werkt voor elk voertuig, van lowriders tot gevechtshelikopters.*

## Stap 1: De Abstracte Wegen
Maak een abstracte klasse `Voertuig`:
*   Eigenschap `Merk` (string).
*   Eigenschap `Snelheid` (int), default 0.
*   Abstracte methode `Beweeg()`: Voert de specifieke beweging uit.
*   Virtuele methode `ToonInfo()`: Print "Dit is een voertuig van merk [Merk]."

## Stap 2: De Garage
Maak 3 klassen die overerven van `Voertuig`:

**1. Sportwagen**
*   `Beweeg()`: Zet `Snelheid` op 150 en print "ZOEF! De [Merk] scheurt over de snelweg met 150 km/u."
*   Override `ToonInfo()`: Print "Een glimmende sportwagen van [Merk]. Pas op voor krassen!"

**2. Pantserwagen**
*   `Beweeg()`: Zet `Snelheid` op 60 en print "BROEM... De [Merk] rijdt traag maar stopt voor niets of niemand."
*   Override `ToonInfo()`: Print "Een gepantserd voertuig van [Merk]. Kogelvrij!"

**3. PolitieMotor**
*   `Beweeg()`: Zet `Snelheid` op 120 en print "WIEUWIEUWIEU! De [Merk] achtervolgt de verdachte!"
    *   *Extra*: Heeft een `bool SireneAan`. Als deze niet aanstaat, rijdt hij rustig met 50 km/u in plaats van 120.

## Stap 3: De Wanted Level (Polymorfisme in actie)
Maak een console-applicatie:
1.  Maak een `List<Voertuig>`.
2.  Vul de lijst met een mix van Sportwagens (bv. Infernus, Cheetah), Pantserwagens (bv. Rhino) en Politiemotoren (bv. HPV-1000).
3.  *De politie inval*: Er is een bankoverval gemeld!
4.  **Loop door de lijst** en roep voor elk voertuig `Beweeg()` aan.
5.  Roep daarna `ToonInfo()` aan om te zien wat er precies allemaal rondrijdt in de chaos.

*Merk op hoe je dankzij polymorfisme de lijst als één geheel kunt behandelen, terwijl elk object zich toch anders gedraagt.*





::::{.callout-caution collapse="true" title="Oplossing"}
# Dierentuin advanced

:::{.callout-tip}
**Les(sen) uit deze oefening:** Via een loop overlopen we alle diertjes. Dankzij ``is`` bevragen we vervolgens ieder dier en enkel die dieren waar we van weten dat ze kunnen praten laten we dan de ``Zegt`` methode aanroepen nadat we met ``as`` tijdelijk omgezet hebben.
:::

In main

```csharp
//dieren staan ergens in List<Dier> diertjes
//gebruiker gaf bij invoer f in als keuze:
if(userinput=="f")
{
    Console.WriteLine("Welk dier?")
    string dierkeuze=Console.ReadLine();

    switch(dierkeuze)
    {
        case "Slang":
            foreach(var dier in diertjes)
            {
                if(dier is Slang)
                {
                    (dier as Slang).Zegt();
                }
            }
            break;
        case "Varken":
            //idem met Varken 
    }
}
```

## Pro-pro oplossing

Voorgaande resulteert in aardig wat quasi identieke code in de switch. Je kan zelf een generieke methode maken (hebben we niet in leerstof gezien) als volgt (in hoofdprogramma):

```csharp
static void Zegt<T>(List<Dier>dieren) where T: Dier
{
    foreach(var dier in dieren)
    {
        (dier as T)?.Zegt();
    }
}
```

(de ``where`` is een zogenaamde constraint, uitgelegd [hier](17_gencols/2_genericclasses_en_constraints.md))

In de switch krijg je dan:

```csharp
case "Slang":
    Zegt<Slang>(dieren);
    break;
case "Varken":
    Zegt<Varken>(dieren);
    break;
    //...
```

# Pokémon vergelijken

In klasse ``Pokemon``:

```csharp
public override bool Equals(object obj)
{

    Pokemon tevgl = obj as Pokemon;

    if(Naam==tevgl.Naam && Level == tevgl.Level)
    {
        if (HP_Base == tevgl.HP_Base && Attack_Base == tevgl.Attack_Base && ... )
            return true;
    }

    return false;
}
```

# Een eigen huis

:::{.callout-tip}
In volgende filmpje leg ik de oplossing stap voor stap uit: [video oplossing](https://ap.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=3cdd897c-14e6-4bac-aff3-ae94009e0c4b)

Hier kan je de bijhorende code terugvinden: [Github oplossing](https://github.com/timdams/EenEigenHuis)

De code hieronder is een iets andere oplossing dan in het filmpje. Beide zijn evenwaardig.
:::

:::{.callout-tip}
**Les(sen) uit deze oefening:** Properties kunnen vele vormen hebben. In deze oefening spelen we met ``Prijs`` getter (**set mag niet bestaan**, er mag ook geen achterliggende instantievariable ``prijs`` zijn!) waarbij we deze soms een hardcoded waarde laten teruggeven (500 bij ``BadKamer``, 400 bij ``Kamer``) en soms een berekening laten doen zoals in ``Salon``. 
Wanneer je ``Prijs`` ``override`` krijg je standaard in VS de syntax met *pijltjes* (``=>``). Door op het lampje te klikken kan je kiezen om dit om te zetten naar de klassieke vorm zoals in deze oplossing.
:::

## Main:

```csharp
Huis myHuis = new Huis();
myHuis.Kamers.Add(new Salon() { HeeftSchouw = true });
myHuis.Kamers.Add(new Gang() {Oppervlakte=20 });
myHuis.Kamers.Add(new BadKamer());
myHuis.Kamers.Add(new Kamer());

Console.WriteLine(myHuis.BerekenPrijs());
```

## Klassen

```csharp
public class Huis
{
    public List<Kamer> Kamers { get; set; } = new List<Kamer>();
    public int BerekenPrijs()
    {
        int totaal = 0;
        foreach (var kamer in Kamers)
        {
            totaal += kamer.Prijs;

        }
        return totaal;
    }
}

public class Kamer
{
    public int Oppervlakte { get; set; }
    public string Naam { get; set; }
    public virtual int Prijs {get {return 400;}}

}

public class BadKamer : Kamer
{
    public override int Prijs {get {return 500;}} 
}

public class Salon : Kamer
{
    public bool HeeftSchouw { get; set; }
    public override int Prijs
    {
        get
        {
            if (!HeeftSchouw) return 300;
            return 500;
        }
    }
}
public class Gang : Kamer
{
    public override int Prijs 
    {
        get
        {
            return Oppervlakte * 10;
        }    
    } 
    
}
```

# Luchtvaartshow

```java
// Basisklasse Vliegtuig
class Vliegtuig
{
    public string ModelNaam { get; set; }


    private static Dictionary<string, Vliegtuig> vliegtuigenRegister = new Dictionary<string, Vliegtuig>();

    public Vliegtuig(string modelNaam)
    {
        ModelNaam = modelNaam;
        // Registreer het vliegtuig direct bij de aanmaak
        vliegtuigenRegister[vliegtuig.ModelNaam] = this;
    }

    public virtual void Vlieg()
    {
        Console.WriteLine($"Het vliegtuig {ModelNaam} stijgt op.");
    }


    // Toont een overzicht van alle geregistreerde vliegtuigen
    public static void ToonVliegtuigenRegister()
    {
        Console.WriteLine("Overzicht van geregistreerde vliegtuigen:");
        foreach (var item in vliegtuigenRegister)
        {
            Console.WriteLine($"Model: {item.Key}, Type: {item.Value.GetType().Name}");
        }
    }
}

// Subklasse Raket
class Raket : Vliegtuig
{
    public Raket(string modelNaam) : base(modelNaam)
    {
    }

    // Uniek vlieg-gedrag voor Raket
    public override void Vlieg()
    {
        Console.WriteLine($"De raket {ModelNaam} schiet de ruimte in!");
    }
}

// Subklasse Helikopter
class Helikopter : Vliegtuig
{
    public int RotorSnelheid { get; set; }

    public Helikopter(string modelNaam, int rotorSnelheid) : base(modelNaam)
    {
        RotorSnelheid = rotorSnelheid;
    }

    // Eerst het standaardgedrag uitvoeren, daarna extra bericht over rotor snelheid
    public override void Vlieg()
    {
        base.Vlieg();
        Console.WriteLine($"De helikopter {ModelNaam} draait met een rotor snelheid van {RotorSnelheid} RPM.");
    }
}

// Hoofdprogramma
class Program
{
    static void Main(string[] args)
    {
        
        Vliegtuig vliegtuig1 = new Vliegtuig("Boeing 747");
        Raket raket1 = new Raket("Saturn V");
        Helikopter helikopter1 = new Helikopter("AH-64 Apache", 2500);
        Vliegtuig vliegtuig2 = new Vliegtuig("Airbus A320");
        Helikopter helikopter2 = new Helikopter("Sikorsky S-76", 1800);
        // Toon het volledige register met alle geregistreerde voertuigen
        Vliegtuig.ToonVliegtuigenRegister();

        // Wacht op een toets voordat het programma afsluit (handig bij console-applicaties)
        Console.WriteLine("\nDruk op een toets om af te sluiten...");
        Console.ReadKey();
    }
}

```
::::
