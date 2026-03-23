# Figures with interfaces

# Figures with interfaces
Gebruik je [Rechthoek-klasse uit de Figuren oefening](../8_klassen/A_practica.md#figures) die je eerder  hebt aangemaakt. Maak een List aan waarin je een 10 rechthoek-objecten plaatsen, allen met een verschillende grootte. Zorg ervoor dat je nu je rechthoeken met de Sort()-methode kan sorteren op oppervlakte.


Toon de werking aan in een klein voorbeeld programma. 


# Carbon Footprint (*Essential*)

# Carbon Footprint (*Essential*)

Maak 4 klassen:
* ``Huis``
* ``Fabriek``
* ``Auto``
* ``Plant``

Maak een interface ``ICarbonFootPrint`` die 
* 1 methode ``BerekenFootprint`` heeft die een int teruggeeft en geen parameters nodig heeft
* 1 methode ``VerlaagFootprint`` die niets teruggeeft en geen parameters nodig heeft

Breidt de volgende klassen met de interface uit:
* De carbon footprint van een ``huis`` is gebaseerd op het volume van het huis in kubieke meter maal 10.
* De carbon footprint van een ``fabriek`` is gebaseerd op het aantal werknemers maal 100. 
* De carbon footprint van een ``auto`` is gebaseerd op het merk

Het verlagen van de footprint in iedere klasse verzin je zelf (door bijvoorbeeld bij het huis de factor 10 met 1 te verlagen).

Zorg ervoor dat van iedere klasse de footprint kan bevraagd worden (maak/verzin dus de nodige properties per klasse om dit te bereken). De klasse plant moet je niet aanpassen.

Plaats van iedere klasse 2 objecten  in een gemeenschappelijke lijst en zorg ervoor dat:
* de footprint van alle objecten getoond wordt (planten worden overgeslagen)
* de gemiddelde footprint van alle objecten (ook planten worden meegeteld) berekend
* toont welk object de hoogte footprint heeft
* van alle objecten de footprint kan verlaagd worden


# Pokémon interfaces (*Essential*)

# Pokémon interfaces (*Essential*)

Shadow Pokémon zijn een speciaal ras Pokémon ([zie hier](https://bulbapedia.bulbagarden.net/wiki/Shadow_Pok%C3%A9mon)) en kunnen "purified" worden op verschillende manieren. Maak een interface ``IShadow`` die een methode ``Purify`` heeft. Verzin enkele Pokémon die Shadow Pokémon zijn, geef ze de interface, en verzin manieren hoe ze purified kunnen worden (bv door hun HP op -1 te zetten).
Kan je door je lijst van Pokémon gaan enkel de Shadow Pokémon op het scherm tonen?


# PokéDex IList (PRO)

# PokéDex IList (PRO)
Maak een PokéDex die de interface ``IEnumerable`` implementeert zoals [hier uitgelegd](https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerable?view=netcore-3.1). Hierdoor kan je je PokéDex klasse gebruiken als een  ``List``.


# Mapmaker afwerken

# Mapmaker afwerken

Vervolledig het all-in-project  "[Map Maker](../A_DEEL2_AllInOne/1_MapMapker.md)". Inclusief interfaces en is/as .Kan je zelf extra zaken toevoegen zoals andere kamers, andere functionaliteit, etc.


# Game

# Game

:::{.callout-tip}
Maak eerst de [corona missie van dit hoofdstuk](../16_interfaces/coronamissie.md). Die opdracht is veel kleiner dan deze stevige brok.
:::

**Zie onderaan pagina voor minimale klasse-hiërarchie en interfaces.**

Maak een spel dat als volgt werkt:
* De speler dient met zijn pion de overkant van het veld te bereiken.
* Het veld bestaat uit 20 bij 20 vakjes. Op ieder vakje kan maximum één mapelement staan: 
  * De speler zelf
  * Een monster
*	Een rots
*	Een speler kan niet door rotsen of monsters wandelen. 
*	Een speler kan in zijn beurt telkens één vakje bewegen OF naar rechts schieten:
  *	Indien geschoten wordt dan zal het mapelement op het vakje rechts van de speler vernietigd worden (rots of monster)
*	Monsters kunnen ook bewegen. In de beurt van de monsters beweegt ieder monster in een willekeurige richting indien er geen rotsen of spelers LINKS van het monster staan.
  *	Indien er WEL een rots of speler LINKS van het monster staat dan schiet het monster en vernietigd het de speler of rots.
*	Enkel RockDestroyer monsters kunnen schieten.
De setup van het spel bestaat uit volgende stappen:
1. Maak een 20 bij 20 array aan en plaats bepaalde hoeveelheid monsters en rotsen op de kaart, behalve op kolom 0.
2. Plaats de speler op de plek 0,10 in de array (midden van kolom 0)
3. Doorloop de volgende stappen tot er winnaar is

Iedere beurt van het spel bestaat uit volgende stappen:
1. Vraag speler om input (bewegen in 1 van de 4 richtingen OF schieten)
2. Voer actie van speler uit
3. Kijk of speler overkant van kaart heeft bereikt, zo ja: gewonnen!
4. Beweeg ieder monster op de kaart in een willekeurige richting
5. Beweeg iedere RockDestroyer OF laat RockDestroyer schieten
 

Stel de speler voor door een X, een rots door O , een monster door M een RockDestroyer door D.

:::{.callout-tip}
Je zal de meeste logica in je ``Main`` of een ``Manager`` klasse moeten plaatsen. De Speler klasse bijvoorbeeld kan niet beslissen at een monster moet doen, dat zou willen zeggen dat de speler als jet ware " in het monster" beslissingen kan maken, wat tegen het principe van OOP zou zijn.
:::


**Extra’s:**
Voorgaande beschrijving is een ‘minimale’ beschrijving. Voorzie extra functionaliteit naar believen zoals:
* Speler heeft levens
* Monsters hebben levens
* Andere soort monsters (bv slimmere)
* Meerdere levels met telkens andere/meer monsters bijvoorbeeld
* Meerdere spelers
* Verder schieten, of schieten in andere richtingen.

**Klasse-schema**
![Klasse-schema](../assets/9_interfaces/practgame.png)

``Location`` is van het type ``Point`` (compositie). ``Point`` is een zelfgemaakte mini klasse die er als volgt uit (minimaal uitziet): 

```csharp
class Point
{
  public int X{get;set;}
  public int Y{get;set;}
}
```

En dus in je abstracte klasse MapElement zal iets krijgen in de trend van: ``public Point Location {get;set;} = new Point();``

**Enkele screenshots**

![Interfaces](../assets/9_interfaces/practgame2.png)
![Het spel in actie](../assets/9_interfaces/practgame3.png)



# Hacker Simulator (*Final Essentials*, GPT)

*Tijd om in de digitale schaduwen te duiken. Je bouwt een systeem om verschillende soorten computersystemen te infiltreren. Elk systeem heeft zijn eigen zwaktes, maar dankzij een universele interface kan je hacker-tool ze allemaal aan.*

## Stap 1: De Interface
Maak een interface `IHackable`.
*   Methode `bool TryHack(string password)`: Probeert in te breken. Geeft `true` terug bij succes.
*   Property `SecurityLevel` (int): Hoe moeilijk het systeem te kraken is (1-100).
*   Methode `ShowData()`: Toont de geheime data (indien gehackt) of "ACCESS DENIED".

## Stap 2: De Doelwitten
Maak 3 klassen die `IHackable` implementeren:

**1. BankServer**
*   `SecurityLevel`: 90.
*   `TryHack`: Succesvol als het wachtwoord "Money123" is OF als de parameter "BACKDOOR" is.
*   `ShowData`: Toont "Transacties: Miljoenen gestolen!".

**2. SocialMediaAccount**
*   `SecurityLevel`: 30.
*   `TryHack`: Succesvol als het wachtwoord "123456" is (mensen zijn slecht in wachtwoorden).
*   `ShowData`: Toont "DM geschiedenis: Genante selfies gevonden.".
*   *Extra*: Houdt bij of het account al gehackt is (bool). Eenmaal gehackt, blijft `TryHack` altijd `true` teruggeven.

**3. SmartFridge** (IoT device)
*   `SecurityLevel`: 5.
*   `TryHack`: Altijd succesvol, ongeacht het wachtwoord (IoT devices zijn onveilig!).
*   `ShowData`: Toont "Melk is op. Temperatuur: 4 graden.".

## Stap 3: De Brute Force Tool (Polymorfisme via Interface)
Maak een klasse `HackerTool`.
*   Methode `RunBruteForce(List<IHackable> targets)`:
    *   Loopt door de lijst van targets.
    *   Probeert bij elk target een lijst van veelvoorkomende wachtwoorden ("123456", "password", "admin", "Money123").
    *   Als `TryHack` landt:
        *   Print "SYSTEM BREACHED: [Target Type]"
        *   Roept `ShowData()` aan.
        *   Toont "Security Level was: [Level]"
    *   Als niets werkt, print "Failed to crack system."

## Main
Maak een lijst met verschillende `IHackable` objecten (een bank, paar accounts, en die onveilige koelkast). Laat je `HackerTool` los op de lijst en zie wat je buitmaakt.






::::{.callout-caution collapse="true" title="Oplossing"}
# Oplossingen 

# Figures with interfaces

:::{.callout-tip}
**Les(sen) uit deze oefening:** de Array.Sort methode werkt enkel indien je individuele objecten de ``IComparable``-interface implementeren. Polymorfisme komt hier ook bij kijken want de parameter die binnenkomt is van het type object (daar de interface beschreven is voor alle mogelijke klassen). M.b.v. ``is`` en ``as`` is het een goede oefening om steeds te controleren of dat het binnenkomende object wel voldoet.
:::


```csharp
public class Rechthoek: IComparable
{
    //Alle vorige zaken
    //...

    public int CompareTo(object obj)
    {
        Rechthoek temp = obj as Rechthoek;
        if(temp!=null)
        {
            if (temp.Breedte * temp.Lengte > Breedte * Lengte)
                return -1;
            else if (temp.Breedte * temp.Lengte < Breedte * Lengte)
                return 1;
            return 0;
        }
        throw new Exception("Object niet van type Rechthoek");
    }
}
```

# Carbon footprint

:::{.callout-tip}
**Les(sen) uit deze oefening:** Dankzij polymorfisme kunnen we objecten van eender welk type ook tijdelijk beschouwen als een soort "interface-objecten": we kunnen dan enkel die zaken waar de interface uit bestaat aanroepen op het object. Ook hier gebruiken we het ``as`` keyword om een object om te zetten (en te controleren of het gelukt is) naar z'n interface. Vervolgens is het maar een kwestie van de klassieke loop-code om een lopende som en grootste waarde te vinden.
:::



```csharp

List<object> vervuilers = new List<object>();
vervuilers.Add(new Plant());
vervuilers.Add(new Huis() { Volume = 200 });
vervuilers.Add(new Fabriek() { Werknemers = 10 });
vervuilers.Add(new Auto() { Merk = AutoMerk.Audi });
vervuilers.Add(new Plant());
vervuilers.Add(new Huis() { Volume = 100 });
vervuilers.Add(new Fabriek() { Werknemers = 25 });
vervuilers.Add(new Auto() { Merk = AutoMerk.Volvo });

int som = 0;
int max = -1;
int maxindex = -1;
for (int i = 0; i < vervuilers.Count; i++)
{

    var vuileI = vervuilers[i] as ICarbonFootPrint;
    if (vuileI != null)
    {
        int print = vuileI.BerekenFootPrint();
        Console.WriteLine($"{vervuilers[i].GetType()}:{print}");
        som += print;
        if (print > max)
        {
            max = print;
            maxindex = i;
        }
    }
}
Console.WriteLine($"Gemiddelde footprint is {som/vervuilers.Count}");
if(maxindex>-1)
    Console.WriteLine($"{vervuilers[maxindex]} op positie {maxindex} heeft grootste footprint {max}");
```


```csharp
public class Huis : ICarbonFootPrint
{
    public int Volume { get; set; }
    private double footprintfactor = 1;
    public int BerekenFootPrint()
    {
        return (int)(Volume * 10 * footprintfactor);
    }

    public void VerlaagFootprint()
    {
        if (BerekenFootPrint() > 1)
            footprintfactor -= 0.1;
    }
}

public class Fabriek : ICarbonFootPrint
{
    public int Werknemers { get; set; }
    private int factor = 100;
    public int BerekenFootPrint()
    {
        return Werknemers * factor;
    }

    public void VerlaagFootprint()
    {
        if (factor > 5)
            factor--;
    }
}

public enum AutoMerk { BMW, Volvo, Audi }
public class Auto : ICarbonFootPrint
{
    public AutoMerk Merk { get; set; }
    private int factor = 1;
    public int BerekenFootPrint()
    {
        switch (Merk)
        {
            case AutoMerk.BMW:
                return 10 + factor;
                break;
            case AutoMerk.Volvo:
                return 12 + factor;
                break;
            case AutoMerk.Audi:
                return 14 + factor;
                break;
            default:
                break;
        }
        return 0;
    }

    public void VerlaagFootprint()
    {
        if (factor > 0)
            factor--;
    }
}
public class Plant
{ }

public interface ICarbonFootPrint
{
    int BerekenFootPrint();
    void VerlaagFootprint();
}
```
::::
