> Volgende opgave was de vaardigheidsproefopdracht voor het inhaalexamen van dit vak (OOP) in augustus 2022

# Inleiding

Na vele jaren vloeken op de roosters, heeft de firma "Roosteren-maar" eindelijk besloten hun roostersoftware aan te passen. Aan jou deze taak om een deftig roosterprogramma te schrijven. Veel succes gewenst!

# Basisklassen

De applicatie bestaat vooreerst uit een aantal elementaire klassen die gebruikt zullen worden om een dagrooster op te stellen.

## Vak

Een vak heeft een titel (type ``string``), een duur (``int``) en een toegewezen lector (type ``Lector``, zie verder). Voorzie de nodige properties hiervoor, wetende dat:
a) de duur enkel 1 of 2 uur kan zijn, niets anders. Controleer hier op.
b) de titel standaard "Onbekend" is.

De klasse override ``ToString`` en toont een object  als volgt: ``Titel - Lector`` (bijvoorbeeld: ``OOP - Jansens``).

Standaard heeft een nieuw gemaakt Vak-object een Lector-object met als naam "Nog Toe te wijzen``.

## Lector

Een lector heeft een naam (``string``) en een maximaal aantal uur (``maxUur``, type ``int``) dat de persoon les kan geven op een week. De  waarde van ``maxUur`` is altijd 6. Voorzie dit via een readonly property. 


## Rooster

Deze klasse heeft een private lijst van Vakken die standaard leeg is. Deze lijst stelt de dagrooster voor en bevat alle vakken van de dag. 

De klasse heeft een property ``VrijeUren``: deze geeft een ``int`` terug en bevat de totale som van alle duren van de vakken in de lijst. Als er dus 2 vakken in de lijst staan, 1 van 1 uur duur, de andere van 2uur duur, dan zal deze property 3 teruggeven (1+2).

De klasse heeft voorts volgende methoden:

a) ``ToonRooster``: deze methode zal ieder vak in de lijst via ``ToString`` op het scherm onder elkaar tonen. Indien een vak 2uur duurt dan zal het vak 2x onder elkaar getoond worden. Voorbeeld output:

```
OOP -Jansens
Programming Principles - DuBru
Programming Principles - DuBru
Java - Gates
```

b) ``VoegVakToe``: deze methode aanvaardt een ``Vak``-object. Dit object wordt aan de lijst toegevoegd indien dat kan. Een rooster kan nooit meer dan 8uur totale duur bevatten (gebruik ``VrijeUren`` hiervoor). Als je dus een vak van 2uur probeert probeert toe te voegen terwijl de roosterlijst reeds 7uur bevat, dan zal dit niet lukken en wordt er een RoosterException teruggegooid (maak deze Exception klasse zelf aan).

c) ``VerbeterRooster``: wanneer deze methode wordt aangeroepen dan zal de lijst met vakken gesorteerd worden volgens 1° hun naam alfabetisch 2° hun duur (lange vakken eerst).

d) ``WijsLectorToe`` : deze methode aanvaart een index x (``int``) en een ``Lector`` object. De methode zal de meegegeven lector toewijzen (en de bestaande overschrijven) aan het vak in lijst met de index "x" die je als parameter hebt meegeven. Indien er geen vak bestaat met die index dan verschijnt er een foutboodschap.


# Specialisatieklassen

## LaboVak

LaboVak is een Vak. Deze zal als ``ToString`` aangeroepen wordt vooraan de titel nog "(labo)" toevoegen. Bijvoorbeeld: ``(labo) OOP - Jansens``.

Deze heeft een constructor waar je een ``Vak``-object aan kan meegeven. De informatie van dit object wordt gebruikt om het LaboVak in te stellen (je neemt dus de duur, lector en titel over uit het object en wijst dit toe aan het huidige LaboVak-object).


Een labovak kan ook 3uur duren en is dus niet beperkt tot 1 of 2 uur duur.

Voeg voorts aan de klasse ``Rooster`` een nieuwe methode ``ToonLabos`` toe. Deze zal net als ``ToonRooster`` het rooster visualiseren, maar enkel voor vakken van het type ``LaboVak``.

## HalfTijdseLector

Een halftijdse lector kan maar de helft van een gewone lector aan maximale uren ingeroosterd worden.


# Hoofdprogramma

In het hoofdprogramma wordt een lijst van 3 lectoren aangemaakt (kies zelf de namen), waarvan 1 een halftijdselector is.

Maak een applicatie die bovenstaande klassen gebruikt door aan de gebruiker een menu aan te bieden met volgende items (bepaal zelf hoe je de input van de gebruiker gaat verwerken):

* **Toon rooster**: de huidige rooster wordt op het scherm getoond.
* **Voeg vak toe**: de gebruiker dient vervolgens de naam van het vak te geven, de duur, en welke lector (voor de lector geeft hij gewoon de index in, 0, 1 of 2 en gebruik je vervolgens de lector in de lijst die je aanmaakte aan de start van het programma). Indien de gebruiker bij duur 3 ingeeft dan wordt dit vak automatisch een labovak.
* **Verbeter rooster**: dit zal de VerbeterRooster methode aanroepen.
* **Toon labo's**: Enkel de LaboVak-objecten in het rooster worden op het scherm getoond.

# WeekRooster


Maak een klasse ``WeekRooster``. Deze klasse heeft 5 lijsten van het type ``Vak``, 1 voor iedere weekdag. De klasse heeft een default constructor en zal een random rooster aanmaken door de 5 week-lijsten te vullen met telkens 4 willekeurige ``Vak``-objecten (20% kans op een ``LaboVak``).

De klasse heeft volgende methode:

* **Toon rooster**: deze zal de rooster per dag onder elkaar op het scherm tonen en voor iedere lijst de dag tonen.

Voeg aan het hoofdmenu de optie **Toon weekrooster**. Deze zorgt ervoor dat een ``WeekRooster`` object wordt aangemaakt dat vervolgens op het scherm wordt getoond.

::::{.callout-caution collapse="true" title="Oplossing"}
> Dank aan Wael Orraby.


Klassen:
```java
internal class Vak: IComparable​
{
    public Vak()
    {
        vakLector = new Lector() { Naam = "Nog Toe te wijzen" };

    }
    public string Titel { get; set; } = "Onbekend";
    private Lector vakLector;

    public Lector VakLector
    {
        get { return vakLector; }
        set { vakLector = value; }
    }

    protected int duur;

    public virtual int Duur
    {
        get { return duur; }
        set
        {
            if (value > 0 && value < 3)
                duur = value;
        }
    }
    public override string ToString()
    {
        return $"{this.Titel} - {this.VakLector.Naam}";
    }

    public int CompareTo(object? obj)
    {
        Vak temp = obj as Vak;
        if(temp != null)
        {
            int stringC = this.Titel.CompareTo(temp.Titel);
            if (stringC == 0)
            {
                return this.Duur.CompareTo(temp.Duur);
            }
            else return stringC;

        }
        return 0;
    }
}

internal class LaboVak : Vak
{
    public LaboVak(Vak v)
    {
        this.Duur = v.Duur;
        this.VakLector = v.VakLector;
        this.Titel = v.Titel;
    }
    public override int Duur {
        get { return base.Duur; }
        set 
        { 
            if (value > 0 && value < 4) 
                this.duur = value; 
        } 
    }
    public override string ToString()
    {
        return "(labo) "+ base.ToString();
    }
}

internal class Lector
{
    public string Naam { get; set; } = "Nog toe te wijzen";

    public virtual int MaxUur
    {
        get { return 6; }
    }
}

internal class HalfTijdseLector : Lector
{
    public override int MaxUur
    {
        get 
        { 
            return base.MaxUur / 2; 
        }
    }
}

internal class RoosterException : Exception
{
    public RoosterException(string message) : base(message)
    {
    }
}

internal class Rooster
{
    private List<Vak> vakkenLijst = new List<Vak>();
    private int vrijeUren;

    public int VrijeUren
    {
        get
        {
            int result = 0;
            foreach (var item in vakkenLijst)
            {
                result += item.Duur;
            }
            return result;
        }
    }
    public void ToonRooster()
    {
        foreach (var item in vakkenLijst)
        {
            for (int i = 0; i < item.Duur; i++)
            {
                Console.WriteLine(item);
            }
        }
    }
    public void VoegVakToe(Vak niewVak)
    {
        if ((VrijeUren + niewVak.Duur) <= 8)
        {
            vakkenLijst.Add(niewVak);
        }
        else
            throw new RoosterException($"Kan niet togevoegd worden, omdat de rooster mag max 8 uur bevatten en de huidige duur in de rooster is {VrijeUren}");
    }
    public void VerbeterRooster()
    {
        vakkenLijst.Sort();
    }
    public void WijsLectorToe(int index, Lector l)
    {
        if (index >= 0 && index < vakkenLijst.Count)
            vakkenLijst[index].VakLector = l;
        else
            Console.WriteLine("Index id out of Range of the list!");
    }

    internal void ToonLabos()
    {
        foreach (var item in vakkenLijst)
        {
            if (item is LaboVak)
            {
                for (int i = 0; i < item.Duur; i++)
                {
                    Console.WriteLine(item);
                }
            }
        }
    }
}

internal class WeekRooster
{
    static Random r = new Random();

    List<Vak>[] weekLijsten = new List<Vak>[]{new List<Vak>(),new List<Vak>(),new List<Vak>(),new List<Vak>(),new List<Vak>()};

    public WeekRooster()
    {
        for (int j = 0; j < 5; j++)
        {
            for (int i = 0; i < 4; i++)
            {
                if (r.Next(1, 6) == 1)
                {
                    weekLijsten[j].Add(new LaboVak(new Vak()));        
                }
                else
                {
                    weekLijsten[j].Add(new Vak());
                }
            }
        }

    }
    public void ToonRooster()
    {
        for (int i = 0; i < weekLijsten.Length; i++)
        {
            if(i==0)
                Console.WriteLine("Maandag : ");
            else if (i == 1)
                Console.WriteLine("Dinsdag : ");
            else if (i == 2)
                Console.WriteLine("Woensdag : ");
            else if (i == 3)
                Console.WriteLine("Donderdag : ");
            else
                Console.WriteLine("Vrijdag : ");
            foreach (var item in weekLijsten[i])
            {
                Console.WriteLine(item);
            }
            Console.WriteLine();
        }
        
    }
}

```

Program.cs
```java
List<Lector> lectorsList = new List<Lector>(3);
Rooster r = new Rooster()​;
lectorsList.Add(new Lector { Naam = "Dams" });
lectorsList.Add(new Lector { Naam = "Van Eyken" });
lectorsList.Add(new HalfTijdseLector { Naam = "segers" });
int antwoord = 0;
while (antwoord != 666)
{


    Console.WriteLine("Kies een nummer uit dit menu : ");
    Console.WriteLine("1- Toon rooster.");
    Console.WriteLine("2- Voeg vak toe.");
    Console.WriteLine("3- Verbeter rooster.");
    Console.WriteLine("4- Toon labo's.");
    Console.WriteLine("5- Toon weekrooster.");
    Console.WriteLine("666- Stoppen");
    antwoord = int.Parse(Console.ReadLine());

    if (antwoord == 1)
        r.ToonRooster();

    if (antwoord == 2)
    {
        Console.WriteLine("Vaknaam : ");
        string vaknaam = Console.ReadLine();
        Console.WriteLine("Duur : ");
        int duur = int.Parse(Console.ReadLine());
        Console.WriteLine("Kies een nummer van de lector : ");
        Console.WriteLine("0 : Dams");
        Console.WriteLine("1 : Van Eyken");
        Console.WriteLine("2 : Horsman");
        int lector = int.Parse(Console.ReadLine());
        Vak v = new Vak() { Titel = vaknaam, Duur = duur , VakLector = lectorsList[lector]};
        if (duur == 3)
        {
            LaboVak lv = new LaboVak(v);
            lv.Duur = duur;
            r.VoegVakToe(lv);
        }
        else
            r.VoegVakToe(v);
    }
    if (antwoord == 3)
        r.VerbeterRooster();
    if (antwoord == 4)
    {
        r.ToonLabos();
    }
    if (antwoord == 5)
    {
        WeekRooster wr = new WeekRooster();
        wr.ToonRooster();
    }
}
```
::::
