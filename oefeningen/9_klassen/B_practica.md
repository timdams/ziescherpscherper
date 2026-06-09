<!--## Week 2-->

<!--## Week 2-->




# BankManager (*Essential*)

:::{.callout-tip}
[Maak je oplossing in een kopie van volgende solution met bijhorende unittests](https://github.com/timdams/ZIESCHERPER_TESTS_H1_BankManager).
:::

**Deel 1: Basisrekening**

**Specificaties:**

*   **Klassenaam:** `Rekening`
*   **Variabelen:**
    *   `balans` (`int`): Houdt het saldo bij (private field).

*   **Properties:**
    *   `NaamKlant` (`string`): Autoproperty.
    *   `RekeningNummer` (`string`): Autoproperty.
    *   `Balans` (`int`): Readonly property die het veld `balans` teruggeeft. Er is géén achterliggende private set.

*   **Methoden:**
    *   `StortGeld(int bedrag)`: Voegt `bedrag` toe aan `balans`.
    *   `HaalGeldAf(int bedrag)`:
        *   Indien `bedrag > balans`: Haal de volledige rest van de rekening af (zet `balans` op 0), toon fout "Rekening leeg nu" en returneer de rest.
        *   Indien `bedrag <= balans`: Verminder `balans` met `bedrag` en returneer `bedrag`.
    *   `ToonInfo()`: Toont naam, rekeningnummer en huidige balans.


:::{.callout-tip}
In deze oefening hebben we geen private set voor balans, waardoor dus alle methoden rechtstreeks het veld `balans` moeten aanpassen. Meestal is het echter een goed idee om een private set te gebruiken, zodat je de logica van het aanpassen van de balans centraal in de property setter kan houden. In dat geval zouden de methoden `StortGeld` en `HaalGeldAf` de property `Balans` moeten aanpassen in plaats van het veld `balans` direct. Maar voor deze oefening houden we het simpel en werken we rechtstreeks met het veld.
:::
**Deel 2: Rekeningstaat**

Voeg functionaliteit toe om een rekening te blokkeren.

**Extra Specificaties:**

*   **Enum:** `RekeningStaat` (waarden: `Geldig`, `Geblokkeerd`).
*   **Property:** `Staat` (`RekeningStaat`): Autoproperty met `private set`.
*   **Methode:** `VeranderStaat()`: Wisselt de staat om (Geldig -> Geblokkeerd, en omgekeerd).

**Gewijzigd Gedrag:**
Pas de methoden van Deel 1 aan met deze regels:

| Actie | Als Staat == Geldig | Als Staat == Geblokkeerd |
| :--- | :--- | :--- |
| **StortGeld** | Voer storting uit. | Toon error: "Gaat niet. Rekening geblokkeerd." |
| **HaalGeldAf** | Voer afhaling uit (zie regels Deel 1). <br> *Extra:* Als balans op 0 komt door afhaling -> Zet Staat automatisch op `Geblokkeerd`. | Toon error: "Gaat niet. Rekening geblokkeerd." |

**Testscenario:**

1.  Maak rekeningen aan met geld.
2.  Schrijf over van rek1 naar rek2: `rek2.StortGeld(rek1.HaalGeldAf(300));`
3.  Test blokkering door over de limiet te gaan.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
public enum RekeningStaat { Geblokkeerd, Geldig }
public class Rekening
{

    public RekeningStaat Staat { get; private set; } = RekeningStaat.Geldig;

    public string RekeningNummer { get; set; }
    public string NaamKlant { get; set; }

    private int balans;
    public int Balans
    {
        get {return balans;}
    }
    //methoden
    public int HaalGeldAf(int bedrag)
    {
        if (Staat == RekeningStaat.Geldig)
        {
            if (bedrag > balans)
            {
                int over = balans;
                balans = 0;
                Console.WriteLine("Rekening leeg nu");
                VeranderStaat();
                return over;
            }
            else
            {
                balans -= bedrag;
                return bedrag;
            }
        }
        else
        {
            Console.WriteLine("Gaat niet. Rekening geblokkeerd.");
            return 0;
        }
    }
    public void StortGeld(int bedrag)
    {
        if (Staat == RekeningStaat.Geldig)
            balans += bedrag;
        else
            Console.WriteLine("Gaat niet. Rekening geblokkeerd.");
    }
    public void ToonInfo()
    {
        Console.Write($"Naam:\t\t{NaamKlant}\nRekeningnummer: {RekeningNummer}\nStaat:\t\t{Staat}\nBalans:\t\t");
        Console.ForegroundColor = ConsoleColor.Green;
        Console.WriteLine($"${balans}\n");
        Console.ResetColor();
    }
    public void VeranderStaat()
    {
        if (Staat == RekeningStaat.Geldig)
            Staat = RekeningStaat.Geblokkeerd;
        else
            Staat = RekeningStaat.Geldig;
    }

}

```

```java
Rekening tim = new Rekening();
tim.StortGeld(1000);
Rekening student = new Rekening();
do
{
    Console.WriteLine("Hoeveel geld wil je naar de student overschrijven ?");
    int bedrag = int.Parse(Console.ReadLine());

    student.StortGeld(tim.HaalGeldAf(bedrag));

    tim.ToonInfo();
    student.ToonInfo();
} while (true);
```
::::


# Persoon (*Essential*)

:::{.callout-tip}
[Maak je oplossing in een kopie van volgende solution met bijhorende unittests](https://github.com/timdams/ZIESCHERPER_TESTS_H1_Persoon).
:::

**Specificaties:**

*   **Klassenaam:** `Persoon`
*   **Properties:**
    *   `Voornaam` (`string`)
    *   `Achternaam` (`string`)
    *   `GeboorteDatum` (`DateTime`): Full property.
        *   *Validatie (in set):* De datum moet liggen tussen `01/01/1990` en `DateTime.Today`.
        *   *Bij ongeldige invoer:* Stel in op `DateTime.Today`.

*   **Methoden:**
    *   `BerekenLeeftijd()`: Geeft leeftijd (`int`) terug op basis van verschil tussen vandaag en `GeboorteDatum`.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
public class Persoon
{
    public string Voornaam { get; set; }
    public string Achternaam { get; set; }
    private DateTime geboorteDatum;

    public DateTime GeboorteDatum
    {
        get { return geboorteDatum; }
        set
        {

            {
                if (value > new DateTime(1990, 1, 1) && value < DateTime.Today)
                    geboorteDatum = value;
                else
                    geboorteDatum = DateTime.Today;
            }
        }
    }

    public int BerekenLeeftijd()
    {
       
        int leeftijd = DateTime.Now.Year - geboorteDatum.Year;

        if (DateTime.Now.Month < geboorteDatum.Month || (DateTime.Now.Month == geboorteDatum.Month && DateTime.Now.Day < geboorteDatum.Day))
            leeftijd--;

        return leeftijd;
    }
}
```
::::


# Verjaardag

**Doel:**
Bereken hoelang het duurt tot de volgende verjaardag.

**Vereisten:**

*   Vraag de gebruiker om een geboortedatum (dag/maand).
*   Gebruik `DateTime` en `TimeSpan`.
*   Toon:
    1.  Welke dag van de week (bv. maandag) de *volgende* verjaardag is.
    2.  Hoeveel dagen wachten dit nog is.

**Tip voor dagnaam:**
```java
string dagNaam = System.Globalization.DateTimeFormatInfo.CurrentInfo.GetDayName(datum.DayOfWeek);
```

**Voorbeeld:**
```text
Wanneer is je verjaardag (d/m, bv 18/3)
Invoer: 20/5
Output: Je bent over 124 dagen jarig op een Dinsdag
```

::::{.callout-caution collapse="true" title="Oplossing"}
```java
Console.WriteLine("Geef je verjaardag (formaat: d/m . Bv 18/3)");
DateTime verj = DateTime.Parse(Console.ReadLine());


if (verj < DateTime.Today)
    verj = verj.AddYears(1);


string dagLokaal = System.Globalization.DateTimeFormatInfo.CurrentInfo.GetDayName(verj.DayOfWeek);
TimeSpan dagenOver = verj - DateTime.Today;

Console.WriteLine($"Je ben jarig over {dagenOver.Days} dagen en dat is op een {dagLokaal}.");
```
::::


# Sports


Maak een klasse die een speler voorstelt.

**Optie A: Kies zelf**
Kies je favoriete sport en bedenk zelf 4 eigenschappen (zoals positie, rugnummer, ...) en 2 acties.

**Optie B: Voorbeeld (Voetballer)**
Gebruik deze specificaties als je geen eigen sport wil kiezen.

*   **Klasse:** `Voetballer`
*   **Properties:**
    *   `Naam` (`string`)
    *   `Rugnummer` (`int`) - Validatie: tussen 1 en 99.
    *   `Positie` (`string`) - "Aanvaller", "Middenvelder", "Verdediger".
    *   `IsKapitein` (`bool`)

*   **Methoden:**
    *   `StelIn(string naam, int rugnummer, string positie, bool isKapitein)`: Stelt alle properties in.
    *   `SchietOpDoel()`: Toont tekst "Naam schiet op doel!".
    *   `MaakOvertreding()`: Toont tekst "Naam krijgt gele kaart.".

**Opdracht:**
Maak een console-applicatie, maak enkele spelers aan, en roep de methoden aan.

::::{.callout-caution collapse="true" title="Oplossing"}

::::


# Dobbelstenen

**Doel:**
Simuleer het werpen van twee dobbelstenen.

**Specificaties:**

*   **Klassenaam:** `Dobbelstenen`
*   **Methoden:**
    *   `WerpEnTel6()` (`void`)

**Werking (WerpEnTel6):**

1.  Maak een lus die 1000 keer herhaalt.
2.  In elke iteratie:
    *   Genereer twee willekeurige getallen tussen 1 en 6 (gebruik `Random`).
    *   Controleer of **beide** getallen 6 zijn.
    *   Indien ja: tel 1 op bij een teller.

3.  Na de lus: Toon het totaal aantal keer dat dubbel-6 is gegooid op het scherm.

::::{.callout-caution collapse="true" title="Oplossing"}
```java
public class Dobbelstenen
{
    public void WerpEnTel6()
    {
        Random r = new Random();
        int aantalZes = 0;
        for (int i = 0; i < 1000; i++)
        {
            if (r.Next(1, 7) == 6 && r.Next(1, 7) == 6)
                aantalZes++;
        }
        Console.WriteLine($"{aantalZes} keren 6 gegooid. Dat is {aantalZes/10.0}%");
    }
}
```
::::


# De Campingmanager: "Het Nullpointerke" (*Final Essential*)

**Scenario:**
Je bent zojuist aangenomen als lead developer voor **Camping "Het Nullpointerke"**. De eigenares, Gerda, doet haar boekingen momenteel nog op bierviltjes, maar sinds de doorbraak van "Glamping" verliest ze het overzicht. Ze heeft vooral problemen met gasten die bij het uitchecken niet genoeg geld blijken te hebben, en ze vergeet vaak de seniorenekorting toe te passen (wat tot boze bejaarden aan de receptie leidt).

Aan jou de taak om een digitaal boekingssysteem te bouwen dat deze problemen oplost.

**Doel:**
Ontwerp een klasse `Boeking` die fungeert als de digitale receptioniste. De klasse moet invoer streng valideren (Gerda houdt van orde), prijzen berekenen op basis van luxe-niveau, en controleren of de gast wel kan betalen *voordat* de boeking definitief wordt.

**Specificaties:**

1.  **De Accommodatie (Enum)**
    *   Definieer een enum `VerblijfType` met opties: `Tentplek` (basic), `Stacaravan` (comfort), en `LuxeChalet` (voor de echte IT-managers).

2.  **De Boeking (Klasse)**
    *   **Klassenaam:** `Boeking`
    *   **Properties (met Validatie):**
        *   `Hoofdboeker` (`string`): De naam van de gast. Mag **niet leeg** zijn. Als iemand een lege naam opgeeft, noem je hem "Onbekende Gast".
        *   `GeboorteDatum` (`DateTime`): Mag **niet in de toekomst** liggen. (Tijdreizigers worden niet toegelaten). Indien fout: stel in op vandaag.
        *   `HuidigBudget` (`double`): De inhoud van de portemonnee van de gast. Mag **niet negatief** zijn bij het instellen (geen schulden bij aankomst!).
        *   `Type` (`VerblijfType`): Het gekozen verblijf.
        *   `CheckInDatum` (`DateTime`): Wordt bij het aanmaken van het object (in de constructor) standaard op **Vandaag** gezet. (We boeken enkel last-minute).

    *   **Methoden:**
        *   `BerekenTotaalPrijs(int aantalNachten)` (returntype: `double`):
            *   *Basisprijzen:* Tentplek = €25, Stacaravan = €50, LuxeChalet = €95 (prijzen per nacht).
            *   *Korting:* Gerda heeft een zwak voor gepensioneerden. Is de gast **ouder dan 60 jaar**? Geef dan **15% korting** op het totaalbedrag.

        *   `BevestigBoeking(int aantalNachten)` (returntype: `void`):
            *   Dit is de grote finale. Roep `BerekenTotaalPrijs` aan om te weten wat het kost.
            *   **Check:** Heeft de gast genoeg `HuidigBudget`?
            *   **Scenario A (Genoeg geld):** 
                *   Trek het bedrag af van het `HuidigBudget`.
                *   Bereken de uitcheck-datum (`CheckInDatum` + aantal nachten).
                *   Toon in de console: *"Boeking geslaagd voor [Naam]! U checkt uit op [Datum]. Restbudget: €[Bedrag]"*.
            *   **Scenario B (Te weinig geld):**
                *   Toon in de console: *"Helaas [Naam], dit kost €[Prijs], maar u heeft slechts €[Budget]. Ga eerst langs de bankautomaat."*

**Voorbeeldgebruik (in je Main):**

```java
// Scenario: Opa Pol wil 5 nachten in een Chalet, maar is zijn portefeuille vergeten.
Boeking boeking1 = new Boeking();
boeking1.Hoofdboeker = "Pol";
boeking1.GeboorteDatum = new DateTime(1955, 3, 12); // Pol is ouder dan 60
boeking1.Type = VerblijfType.LuxeChalet;
boeking1.HuidigBudget = 200; // Oei, dat is krap voor een chalet

// Test de logica
Console.WriteLine("--- Poging 1 ---");
boeking1.BevestigBoeking(5); 
// Verwacht: Foutmelding over budget (Prijs is ong. €400 met korting, budget is 200)

// Pol vindt 300 euro in zijn andere broekzak
Console.WriteLine("\n--- Poging 2 (met meer geld) ---");
boeking1.HuidigBudget += 300; 
boeking1.BevestigBoeking(5);
// Verwacht: Succesbericht + correcte uitcheckdatum + restsaldo.
```

::::{.callout-caution collapse="true" title="Oplossing"}

::::
