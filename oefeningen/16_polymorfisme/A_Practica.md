



# Dierentuin advanced (*Essential*)

:::{.callout-tip}
Voeg een filter toe aan de dierentuin applicatie uit [een eerder hoofdstuk](../14_advancedovererving/A_Practica.md):

* Filter praten: er wordt gevraagd welke dieren moeten praten (``Koe``, ``Slang`` of ``Varken``) vervolgens zullen enkel die dieren praten (tip: "is" operator).
:::

::::{.callout-caution collapse="true" title="Oplossing"}
**Dierentuin advanced**

:::{.callout-tip}
**Les(sen) uit deze oefening:** Via een loop overlopen we alle diertjes. Dankzij ``is`` bevragen we vervolgens ieder dier en enkel die dieren waar we van weten dat ze kunnen praten laten we dan de ``Zegt`` methode aanroepen nadat we met ``as`` tijdelijk omgezet hebben.
:::

In main

```java
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

**Pro-pro oplossing**

Voorgaande resulteert in aardig wat quasi identieke code in de switch. Je kan zelf een generieke methode maken (hebben we niet in leerstof gezien) als volgt (in hoofdprogramma):

```java
static void Zegt<T>(List<Dier>dieren) where T: Dier
{
    foreach(var dier in dieren)
    {
        (dier as T)?.Zegt();
    }
}
```

(de ``where`` is een zogenaamde constraint, uitgelegd [hier](https://www.ziescherp.be/content/B_appendix/generics.html#constraints))

In de switch krijg je dan:

```java
case "Slang":
    Zegt<Slang>(dieren);
    break;
case "Varken":
    Zegt<Varken>(dieren);
    break;
    //...
```
::::


# Stevens dierenshow (*Essential*) {#h16-stevens-dierenshow}

Stagiair Steven werkt verder aan de dierentuin van Dierentuin advanced. Voor de dierenshow moet elk dier één keer op het podium komen en praten, en daarna moet elke koe gemolken worden. Daarvoor gaf hij ``Koe`` een extra methode ``GeefMelk``. De klassen zien er zo uit (in je project staat elke klasse in een eigen bestand):

```java
internal abstract class Dier
{
    public int Gewicht { get; set; }

    public abstract void Zegt();
}

internal class Koe : Dier
{
    public override void Zegt()
    {
        Console.WriteLine("moooeeee");
    }

    public void GeefMelk()
    {
        Console.WriteLine("De koe geeft een emmer melk.");
    }
}

internal class Slang : Dier
{
    public override void Zegt()
    {
        Console.WriteLine("sssss");
    }
}

internal class Vis : Dier
{
    public override void Zegt()
    {
        Console.WriteLine("blub");
    }
}
```

Voor de show zelf vroeg Steven een A.I. om "een lus die bij elk soort dier het juiste doet". Hij plakte dit in ``Main``:

```java
List<Dier> dieren = new List<Dier>();
dieren.Add(new Koe() { Gewicht = 600 });
dieren.Add(new Slang() { Gewicht = 3 });
dieren.Add(new Vis() { Gewicht = 1 });
dieren.Add(new Koe() { Gewicht = 550 });

foreach (Dier dier in dieren)
{
    if (dier is Dier)
        Console.WriteLine($"Op het podium: een dier van {dier.Gewicht} kg");
    else if (dier is Koe)
        ((Koe)dier).GeefMelk();

    switch (dier.GetType().Name)
    {
        case "Koe":
            ((Koe)dier).Zegt();
            break;
        case "Slang":
            ((Slang)dier).Zegt();
            break;
    }
}
```

**Deel 1.** Het compileert zonder één waarschuwing. Voer het uit. Er wordt geen enkele koe gemolken. Waarom niet?

::::{.callout-caution collapse="true" title="Oplossing"}
De uitvoer is:

```text
Op het podium: een dier van 600 kg
moooeeee
Op het podium: een dier van 3 kg
sssss
Op het podium: een dier van 1 kg
Op het podium: een dier van 550 kg
moooeeee
```

De eerste test is ``dier is Dier``. Elk object in een ``List<Dier>`` is een ``Dier``, ook een koe: een ``Koe`` **is een** ``Dier``. Die test is dus altijd ``true``, en bij een ``if`` met een ``else if`` voert C# enkel de eerste tak uit die klopt. De test ``dier is Koe`` wordt nooit bekeken.

Enkel de twee tests van plaats wisselen helpt maar half. Dan krijgen de koeien hun melk, maar komen ze niet meer op het podium, want nog altijd draait maar één van de twee takken. De test ``dier is Dier`` is gewoon overbodig: het podium is voor elk dier.
::::

**Deel 2.** Ook de vis zegt niets. Waarom niet? En waarom had Steven die hele ``switch`` niet nodig?

::::{.callout-caution collapse="true" title="Oplossing"}
De ``switch`` kijkt naar de naam van het type, en heeft enkel een ``case`` voor ``"Koe"`` en ``"Slang"``. Voor ``"Vis"`` is er geen ``case``, dus zwijgt de vis. Zet Steven morgen een ``Hond`` in de dierentuin, dan zwijgt die ook, zonder dat iemand een foutmelding krijgt. Een tikfout zoals ``"koe"`` merkt de compiler evenmin op.

``Zegt`` is ``abstract`` in ``Dier``. Elk dier heeft die methode dus, en dankzij late binding draait vanzelf de versie van het echte object in de heap. Eén regel ``dier.Zegt();`` doet wat de ``switch`` probeert, voor elk dier, ook voor soorten die nog niet bestaan. Daarom zijn de casts ``((Koe)dier)`` en ``((Slang)dier)`` ook overbodig.
::::

**Deel 3.** Herschrijf de lus. Elk dier komt op het podium en praat, en elke koe geeft daarna melk. Gebruik geen cast met haakjes.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
foreach (Dier dier in dieren)
{
    Console.WriteLine($"Op het podium: een dier van {dier.Gewicht} kg");
    dier.Zegt();
    if (dier is Koe koe)
    {
        koe.GeefMelk();
    }
}
```

``GeefMelk`` staat niet in ``Dier``, dus daarvoor moet je wel terug naar ``Koe``. Met pattern matching doe je de controle en de omzetting in één keer. De uitvoer wordt:

```text
Op het podium: een dier van 600 kg
moooeeee
De koe geeft een emmer melk.
Op het podium: een dier van 3 kg
sssss
Op het podium: een dier van 1 kg
blub
Op het podium: een dier van 550 kg
moooeeee
De koe geeft een emmer melk.
```
::::

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
* ``is Dier`` op een element van een ``List<Dier>`` is altijd ``true``, tenzij het element ``null`` is. Test je in een ``if`` met ``else if`` op meerdere types, zet dan het meest specifieke type eerst.
* Heeft elk object de methode al, omdat ze ``virtual`` of ``abstract`` is in de parent, dan heb je ``is`` niet nodig. ``is`` is voor wat enkel een child kan, zoals ``GeefMelk``.
* Zie [Het is keyword](https://www.ziescherp.be/content/18_IsAs/1_IsAs.html#het-is-keyword), [Pattern matching: is met een variabele](https://www.ziescherp.be/content/18_IsAs/1_IsAs.html#pattern-matching-is-met-een-variabele) en de stagiair in [Polymorfisme in de praktijk](https://www.ziescherp.be/content/15_polymorfisme/polypraktijd.html).
::::


# Pokémon vergelijken (*Essential*)
Implementeer de ``Equals`` methode (via ``override``) in je ``Pokemon`` klasse. Twee Pokémon zijn dezelfde indien volgende zaken gelijk zijn:

* Basis stats
* Naam
* Level

::::{.callout-caution collapse="true" title="Oplossing"}
In klasse ``Pokemon``:

```java
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
::::


# Stevens Pokédex (*Essential*) {#h16-stevens-pokedex}

Stagiair Steven houdt een pokedex bij: een lijst waarin elke Pokémon maar één keer mag staan. Om het kort te houden werkt hij met een ingekorte ``Pokemon``-klasse, met een naam, een level en twee base-stats. Voor het vergelijken vroeg hij een A.I. om een ``Equals``, en die zette hij in de klasse:

```java
internal class Pokemon
{
    public string Naam { get; private set; }
    public int Level { get; private set; }
    public int HP_Base { get; private set; }
    public int Attack_Base { get; private set; }

    public Pokemon(string naam, int level, int hpBase, int attackBase)
    {
        Naam = naam;
        Level = level;
        HP_Base = hpBase;
        Attack_Base = attackBase;
    }

    public bool Equals(Pokemon andere)
    {
        return Naam == andere.Naam && Level == andere.Level
            && HP_Base == andere.HP_Base && Attack_Base == andere.Attack_Base;
    }
}
```

Om te testen schreef hij in ``Main``:

```java
Pokemon a = new Pokemon("Pikachu", 5, 35, 55);
Pokemon b = new Pokemon("Pikachu", 5, 35, 55);
Console.WriteLine($"a.Equals(b): {a.Equals(b)}");

List<Pokemon> pokedex = new List<Pokemon>();
pokedex.Add(a);
if (!pokedex.Contains(b))
{
    pokedex.Add(b);
}
Console.WriteLine($"Aantal in de pokedex: {pokedex.Count}");

Pokemon[] team = new Pokemon[6];
team[0] = new Pokemon("Bulbasaur", 5, 45, 49);
team[1] = a;

bool zitInTeam = false;
for (int i = 0; i < team.Length; i++)
{
    if (b.Equals(team[i]))
    {
        zitInTeam = true;
    }
}
Console.WriteLine($"Pikachu zit in het team: {zitInTeam}");
```

"De eerste regel toont ``True``, dus mijn ``Equals`` werkt", zegt hij.

**Deel 1.** Het compileert zonder één waarschuwing. Voer het uit. Waarom staan er twee Pikachu's in de pokedex, terwijl ``a.Equals(b)`` ``True`` geeft? Dat het programma daarna crasht, is voor deel 2.

::::{.callout-caution collapse="true" title="Oplossing"}
De uitvoer begint met:

```text
a.Equals(b): True
Aantal in de pokedex: 2
```

Stevens ``Equals`` heeft een ``Pokemon`` als parameter en geen ``override``. Het is dus een nieuwe methode naast de ``Equals`` met een ``object`` als parameter, die ``Pokemon`` van ``System.Object`` erft: een overload, geen override. Bij ``a.Equals(b)`` is ``b`` een ``Pokemon``, dus kiest de compiler Stevens versie. ``Contains`` gebruikt de ``Equals`` met een ``object`` als parameter. Die is nooit overschreven en vergelijkt dus nog altijd de referenties. Probeer maar: ``a.Equals((object)b)`` geeft ``False``.

Zet je ``override`` voor Stevens methode, dan compileert het niet meer:

```text
error CS0115: 'Pokemon.Equals(Pokemon)': no suitable method found to override
```

De signatuur van ``Equals`` ligt vast: ``public virtual bool Equals(Object o)``. Enkel met precies die parameter kan je ze overriden.
::::

**Deel 2.** Na die twee regels crasht het programma. Welke regel is de schuldige, en waarom?

::::{.callout-caution collapse="true" title="Oplossing"}
```text
Unhandled exception. System.NullReferenceException: Object reference not set to an instance of an object.
```

De crash gebeurt in Stevens ``Equals``. Het team heeft zes plaatsen, maar er zitten maar twee Pokémon in: ``team[2]`` tot en met ``team[5]`` zijn ``null``. Bij ``b.Equals(team[2])`` is ``andere`` dus ``null``, en ``andere.Naam`` crasht. Stevens ``Equals`` controleert nergens of er wel een Pokémon meegegeven werd, terwijl de afspraak is dat ``Equals`` bij ``null`` gewoon ``false`` teruggeeft.
::::

**Deel 3.** Herschrijf de ``Equals`` van Steven zodat de pokedex en het team kloppen, en vergeet ``GetHashCode`` niet. Welke uitvoer verwacht je nu?

::::{.callout-caution collapse="true" title="Oplossing"}
Stevens ``Equals(Pokemon andere)`` gaat weg. In de plaats komen:

```java
public override bool Equals(object obj)
{
    if (obj is Pokemon andere)
    {
        return Naam == andere.Naam && Level == andere.Level
            && HP_Base == andere.HP_Base && Attack_Base == andere.Attack_Base;
    }
    return false;
}

public override int GetHashCode()
{
    return HashCode.Combine(Naam, Level, HP_Base, Attack_Base);
}
```

Is ``obj`` ``null`` of geen ``Pokemon``, dan is ``obj is Pokemon andere`` ``false`` en geeft ``Equals`` ``false`` terug. De uitvoer wordt:

```text
a.Equals(b): True
Aantal in de pokedex: 1
Pikachu zit in het team: True
```

Laat je Stevens versie naast de nieuwe staan, dan kiest de compiler bij ``a.Equals(b)`` en ``b.Equals(team[i])`` nog altijd zijn versie, want de parameter is daar een ``Pokemon``. De crash blijft dan.

De compiler geeft bij de nieuwe ``Equals`` wel ``warning CS8765: Nullability of type of parameter 'obj' doesn't match overridden member (possibly because of nullability attributes).`` Die mag je laten staan, net als de waarschuwingen uit het kader *Groene kronkels onder je properties?* bij de [properties](https://www.ziescherp.be/content/8_klassen/2_properties.html).
::::

::::{.callout-caution collapse="true" title="Les(sen) uit deze oefening"}
* Zonder ``override`` is een methode met dezelfde naam en een andere parameter een overload. De compiler zegt daar niets van, en een test met twee ``Pokemon``-variabelen slaagt gewoon. Test daarom ook met de code die je ``Equals`` echt gaat gebruiken, zoals ``Contains``.
* De parameter van ``Equals`` is een ``object``. Controleer eerst of het een ``Pokemon`` is: daarmee vang je ook ``null`` op.
* Zie [Method overloading](https://www.ziescherp.be/content/6_methoden/3_advancedmethod.html#method-overloading), [De Equals() methode](https://www.ziescherp.be/content/13_advancedovererving/4_System_Object.html#de-equals-methode), [Wat kan een List nog?](https://www.ziescherp.be/content/11_arraysvanklassen/4_list.html#wat-kan-een-list-nog) en [Is, as en polymorfisme: een krachtige bende](https://www.ziescherp.be/content/18_IsAs/6_equals.html).
::::


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

::::{.callout-caution collapse="true" title="Oplossing"}
**Een eigen huis**

:::{.callout-tip}
In volgende filmpje leg ik de oplossing stap voor stap uit: [video oplossing](https://ap.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=3cdd897c-14e6-4bac-aff3-ae94009e0c4b)

Hier kan je de bijhorende code terugvinden: [Github oplossing](https://github.com/timdams/EenEigenHuis)

De code hieronder is een iets andere oplossing dan in het filmpje. Beide zijn evenwaardig.
:::

:::{.callout-tip}
**Les(sen) uit deze oefening:** Properties kunnen vele vormen hebben. In deze oefening spelen we met ``Prijs`` getter (**set mag niet bestaan**, er mag ook geen achterliggende instantievariable ``prijs`` zijn!) waarbij we deze soms een hardcoded waarde laten teruggeven (500 bij ``BadKamer``, 400 bij ``Kamer``) en soms een berekening laten doen zoals in ``Salon``. 
Wanneer je ``Prijs`` ``override`` krijg je standaard in VS de syntax met *pijltjes* (``=>``). Door op het lampje te klikken kan je kiezen om dit om te zetten naar de klassieke vorm zoals in deze oplossing.
:::

**Main:**

```java
Huis myHuis = new Huis();
myHuis.Kamers.Add(new Salon() { HeeftSchouw = true });
myHuis.Kamers.Add(new Gang() {Oppervlakte=20 });
myHuis.Kamers.Add(new BadKamer());
myHuis.Kamers.Add(new Kamer());

Console.WriteLine(myHuis.BerekenPrijs());
```

**Klassen**

```java
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
::::


# Luchtvaartshow (*Essential*, GPT)

Ontwerp een applicatie waarin diverse typen vliegende voertuigen meedoen aan een luchtvaartshow en hun unieke vlieg‑gedrag demonstreren. In deze opgave werk je met inheritance, polymorfisme, het base‑keyword, de Dictionary‑klasse en statische methoden.

![](../assets/illustraties/h16_luchtvaartshow.jpg){.illustratie fig-alt="Potloodtekening: een dubbeldekker, een straaljager, een helikopter en een luchtballon vliegen elk op hun eigen manier, de robot kondigt aan met een megafoon."}

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

::::{.callout-caution collapse="true" title="Oplossing"}
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


# Magic
Bekijk de vraag en het goedgekeurde antwoord op [volgende pagina](https://stackoverflow.com/questions/20524837/card-game-architecture-for-cards)

Kan je de manager aanpassen zodat deze niet met ``card1`` en ``card2`` werkt, maar met een ``List<Card>``.

Voeg zelf enkele kaarten toe en verzin ook enkele afgeleide ``Card``-types  , bv ``Land`` en ``Artifact``.

::::{.callout-caution collapse="true" title="Oplossing"}

::::


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

::::{.callout-caution collapse="true" title="Oplossing"}
```java
public class Dobbelsteen
{
    private static readonly Random rng = new Random();

    public static int Rol()
    {
        return rng.Next(1, 4);
    }
}

public class Speelvakje
{

    private static readonly Random rng = new Random();

    public int BeweegVakjes { get; private set; }

    public Speelvakje()
    {
        int kans = rng.Next(0, 100);

        if (kans < 30)
        {
            if (rng.Next(0, 2) == 0)
                BeweegVakjes = 1;
            else BeweegVakjes = 2;
        }
        else if (kans < 50)
        {
            if (rng.Next(0, 2) == 0)
                BeweegVakjes = -1;
            else BeweegVakjes = -2;
        }
        else
        {
            BeweegVakjes = 0;
        }
    }

    public virtual void ToonVakje()
    {
        if (BeweegVakjes >= 0)
            Console.Write($"+{BeweegVakjes}");
        else
            Console.Write($"{BeweegVakjes}"); 
    }
}

public class KleurVakje : Speelvakje
{
    public override void ToonVakje()
    {
        

        if (BeweegVakjes < 0)
        {
            Console.BackgroundColor = ConsoleColor.Red;
            Console.ForegroundColor = ConsoleColor.White;
        }
        else
        {
            Console.BackgroundColor = ConsoleColor.Green;
            Console.ForegroundColor = ConsoleColor.Black;
        }

        base.ToonVakje();

        Console.ResetColor();
    }
}

public class Ganzenbord
{
    private List<Speelvakje> SpeelVakjes;
    private int pionIndex;

    public int HuidigeScore { get; set; }

    public Ganzenbord() : this(false) { }

    public Ganzenbord(bool kleur)
    {
        SpeelVakjes = new List<Speelvakje>();
        for (int i = 0; i < 10; i++)
        {
            if (kleur)
                SpeelVakjes.Add(new KleurVakje());
            else
                SpeelVakjes.Add(new Speelvakje());
        }
        pionIndex = 0;
        HuidigeScore = 0;
    }

    public bool BeweegPion(int worp)
    {
        pionIndex += worp;


        if (pionIndex > 9)
        {
            HuidigeScore += 10;
            return true;
        }


        pionIndex += SpeelVakjes[pionIndex].BeweegVakjes;


        if (pionIndex < 0)
        {
            HuidigeScore -= 10;
            pionIndex = 0;
            return false;
        }


        if (pionIndex > 9)
        {
            HuidigeScore += 10;
            return true;
        }

        return false;
    }

    public void TekenBord()
    {
        int regel = Console.CursorTop;

        
        for (int i = 0; i < SpeelVakjes.Count; i++)
        {
            SpeelVakjes[i].ToonVakje();
        }


        int cursorLeft = pionIndex * 2 + 1;
        Console.SetCursorPosition(cursorLeft, regel);
        Console.Write('T');


        Console.SetCursorPosition(0, regel + 1);
    }
}

class Program
{
    static void Main()
    {
        Console.Write("Wil je de kleurenversie spelen? (j/n): ");
        string keuze = Console.ReadLine();
        bool kleur = keuze != null && keuze.Trim().ToLower().StartsWith("j");

        Ganzenbord bord = new Ganzenbord(kleur);
        bool gewonnen = false;

        while (!gewonnen)
        {
            bord.TekenBord();

            int worp = Dobbelsteen.Rol();
            Console.WriteLine($"Je rolde {worp}");

            gewonnen = bord.BeweegPion(worp);

            Console.WriteLine("Druk op enter om verder te gaan...");
            Console.ReadLine();
            Console.Clear();
        }

        Console.WriteLine($"Spel afgelopen! Je eindscore is: {bord.HuidigeScore}");
    }
}
```
::::


# Mapmaker "all-in-one-project"

Begin aan het all-in-project  "[Map Maker](../EindeTests/A_DEEL2_AllInOne/1_MapMapker.md)". Stop aan de sectie interfaces (die je pas in volgend hoofdstuk zult leren gebruiken). Je zal in dit project dingen herkennen die je eerder al in de "Een eigen huis" oefening hebt moeten maken. 

::::{.callout-caution collapse="true" title="Oplossing"}

::::


# (Pro²) Methoden als objecten

:::{.callout-tip}
Deze oefening gaat erg ver voorbij de leerstof van dit boek en is enkel bedoeld voor diegene die 'above and beyond' willen gaan in hun kennis.
:::

Tot hiertoe hebben we altijd gepraat over enerzijds objecten, en anderzijds methoden. Twee zaken die wel een relatie met elkaar hebben (een klasse kan methoden hebben, een methode kan objecten als parameter of return type hebben). Maar wat als ik je vertel dat je ook methoden als objecten kunt gebruiken. Het concept "delegate" laat ons toe om methoden als parameters doorheen een applicatie door te geven. Hier een droog, maar duidelijk voorbeeld ([bron](https://www.tutorialsteacher.com/csharp/csharp-delegates))

```java
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

```java
del("Hello World!");
```

Of zelfs doorgeven als parameter

```java
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

::::{.callout-caution collapse="true" title="Oplossing"}

::::


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

::::
