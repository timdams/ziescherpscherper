:::{.callout-tip}
Volgende opgave was de vaardigheidsproefopdracht voor het 2e zit examen van dit vak (OOP) in augustus 2019
:::

We maken een eenvoudige veiling-simulator. Hierbij kunnen spelers bieden op getoonde schilderijen en deze kopen indien ze wensen. Het spel wordt gespeeld door 2 spelers, waarbij 1 speler de gebruiker is, de andere wordt door de computer bestuurd.

De proef staat in totaal op 19 punten.

# Deel 1: Klassen
## Klasse 1: schilderij (3p)

Maak een klasse ``Schilderij``.

Deze heeft minstens 2 methoden
* TekenSchilderij: de methode zal een willekeurig schilderij op het scherm tekenen in linkerbovenhoek. Een schilderij is steeds 10 bij 10 groot en bestaat uit een willekeurige hoeveelheid gele, rode en groene vlakken. Enkele voorbeelden:
  ![](schilder.jpg)        
* Opgelet: ieder object tekent een ander schilderij. Als op hetzelfde object 2x na mekaar TekenSchilderij wordt aangeroepen dan zal uiteraard 2x hetzelfde schilderij getekend worden.
De klasse houdt intern bij uit hoeveel rode, hoeveel gele, en hoeveel groene vlakken het schilderij bestaat.

* ``KrijgData``: deze methode geeft terug uit hoeveel rode vlakken de schilderij bestond.

## Klasse  2: WaardeBepaler (2p)
Maak een klasse ``WaardeBepaler``. Deze bestaat uit 1 static methode genaamd ``BerekenWaarde``. Deze methode aanvaardt 1 int als parameter. Het geeft een double terug als resultaat.

De methode zal de waarde van het schilderij bepalen gebaseerd op het aantal rode vlakken. De waarde van een schilderij is het aantal rode vlakken maal 1000 en daar vervolgens de vierkantswortel van.

Een schilderij met 50 rode vlakken heeft dus een waarde van  €223,6   (vierkantswortel van 1000*50)


Dit getal tot 1 cijfer na de komma wordt door de methode teruggegeven.

## Klasse 3: Koper (4p)
Een koper heeft bij de start steeds een budget van 1500 euro. 

Het budget kan enkel als readonly property van buitenaf uitgelezen worden. De setter is private.

Een koper heeft een lijst  van schilderijen (leeg bij de start) waarin ieder gekocht schilderij komt.

Een koper heeft een constructor die een interne waarde ogenblikkelijk op 1500 zet
* Een methode “Koop”: deze methode aanvaardt 1 parameter van het type schilderij en geeft een bool terug.
  * Eerst wordt de waarde van het meegegeven schilderij berekend mbv van de WaardeBepaler klasse. 
  * Vervolgens: Indien de koper genoeg budget heeft dan zal de waarde van het schilderij van het budget gehaald worden (via de private setter) en wordt het schilderij aan de lijst van gekochte schilderijen van de koper toegevoegd.
     * Vervolgens geeft de methode ‘true’ terug.
  * Indien de koper niet genoeg budget heeft wordt false teruggeven.


Een koper heeft een methode ``TotaleWinst``: deze methode geeft de totale waarde van alle schilderijen samen in zijn lijst  terug als een int.

# Deel 2: Veiling (4p)

Schrijf een programma dat voorgaande klasse gebruikt als volgt:
* 1 speler-object wordt door de gebruiker bedient. 1 door de computer.
* Er verschijnt telkens een schilderij, met daaronder de waarde ervan.
* Er wordt aan de gebruiker gevraagd of hij/zij dit wenst te kopen. Indien ja, en dit kan, dan wordt het schilderij aan zijn lijst toegevoegd en z’n budget verlaagt.
* Indien neen, of indien de gebruiker niet genoeg budget heeft, dan zal de computer het schilderij kopen indien deze nog genoeg budget heeft.
* Vervolgens komt het volgende schilderij.
* Het ‘spel’ stopt wanneer beide spelers het huidige schilderij niet kunnen of willen kopen.
* De “TotaleWinst” van iedere speler wordt vergeleken. De speler wiens TotaleWinst + overgebleven Budget het hoogst is wint.
  * Voorbeeld: speler 1 heeft TotaleWinst 300 en Budget over 300, dus 600
  * Speler 2  (de computer) heeft TotaleWinst 400 en Budget 100, dus 500. Speler 1, de gebruiker, wint de veiling
* Het spel toont wie heeft gewonnen en sluit dan af.

# Deel 3: Picassos (2p)

* Maak een klasse Picasso. Deze klasse is een Schilderij, maar bestaat uit een 15 bij 15 groot schilderij (in plaats van 10 bij 10) en zal dus meestal meer waard zijn.

* Zorg ervoor dat er op de veiling ongeveer 30% van de tijd een Picasso verschijnt die de spelers kunnen kopen. De overige werking blijft dezelfde.

# Deel 4: Koper++ (4p)

* De klasse Koper heeft een extra methode “SorteerBezit”. Wanneer deze wordt aangeroepen dan worden de schilderijen in zijn bezit gesorteerd op basis van hun waarde. De hoogste waarde komt vooraan en zo verder.


* De klasse Koper heeft een extra methode “KrijgSchilderij”: deze methode aanvaardt 1 parameter van het type Koper. Wanneer de methode wordt aangeroepen op een koper en een andere koper wordt als parameter meegegeven, dan krijgt de koper die de methode aanroept het eerste schilderij uit de lijst van de meegegeven koper. Het schilderij verdwijnt vervolgens uit de lijst van deze koper.


* Voeg aan achteraan het spel code toe die aantoont dat deze twee methoden werken.


::::{.callout-caution collapse="true" title="Oplossing"}
> Dank aan Wael Orraby.

Elke klasse en de enum staan in een eigen bestand.

**Kleuren.cs**

```java
namespace Veiling
{
    enum Kleuren { Rood = 1, Geel, Groen }
}
```

**Schilderij.cs**

```java
namespace Veiling
{
    internal class Schilderij : IComparable
    {
        private static Random random = new Random();
        private int aantalRodeVlakken = 0;
        private int aantalGeleVlakken = 0;
        private int aantalGroeneVlakken = 0;
        private Kleuren[,] vlakken;

        public Schilderij(int aantalRijen, int aantalKolommen)
        {
            vlakken = new Kleuren[aantalRijen, aantalKolommen];
            for (int i = 0; i < vlakken.GetLength(0); i++)
            {
                for (int j = 0; j < vlakken.GetLength(1); j++)
                {
                    vlakken[i, j] = (Kleuren)random.Next(1, 4);
                    if (vlakken[i, j] == Kleuren.Rood)
                        aantalRodeVlakken++;
                    else if (vlakken[i, j] == Kleuren.Geel)
                        aantalGeleVlakken++;
                    else
                        aantalGroeneVlakken++;
                }
            }
        }

        public Schilderij() : this(10, 10)
        {
        }

        public void TekenSchilderij()
        {
            Console.SetCursorPosition(0, 0);
            for (int i = 0; i < vlakken.GetLength(0); i++)
            {
                for (int j = 0; j < vlakken.GetLength(1); j++)
                {
                    if (vlakken[i, j] == Kleuren.Rood)
                    {
                        Console.BackgroundColor = ConsoleColor.Red;
                    }
                    else if (vlakken[i, j] == Kleuren.Geel)
                    {
                        Console.BackgroundColor = ConsoleColor.Yellow;
                    }
                    else
                    {
                        Console.BackgroundColor = ConsoleColor.Green;
                    }
                    Console.Write(" ");
                    Console.ResetColor();
                }
                Console.WriteLine();
            }
        }

        public int KrijgData()
        {
            return aantalRodeVlakken;
        }

        public int CompareTo(object obj)
        {
            Schilderij anderSchilderij = obj as Schilderij;
            if (anderSchilderij != null)
            {
                double dezeWaarde = WaardeBepaler.BerekenWaarde(KrijgData());
                double andereWaarde = WaardeBepaler.BerekenWaarde(anderSchilderij.KrijgData());
                //Omgekeerd vergelijken: de hoogste waarde komt vooraan
                return andereWaarde.CompareTo(dezeWaarde);
            }
            else
                throw new ArgumentException("Object is geen Schilderij");
        }
    }
}
```

**Picasso.cs**

```java
namespace Veiling
{
    internal class Picasso : Schilderij
    {
        public Picasso() : base(15, 15)
        {
        }
    }
}
```

**WaardeBepaler.cs**

```java
namespace Veiling
{
    internal class WaardeBepaler
    {
        public static double BerekenWaarde(int aantalRodeVlakken)
        {
            return Math.Round(Math.Sqrt(1000 * aantalRodeVlakken), 1);
        }
    }
}
```

**Koper.cs**

```java
namespace Veiling
{
    internal class Koper
    {
        private List<Schilderij> schilderijen;
        private double budget;

        public Koper()
        {
            Budget = 1500;
            schilderijen = new List<Schilderij>();
        }

        public double Budget
        {
            get { return budget; }
            private set { budget = value; }
        }

        public bool Koop(Schilderij schilderij)
        {
            double schilderijWaarde = WaardeBepaler.BerekenWaarde(schilderij.KrijgData());
            if (Budget >= schilderijWaarde)
            {
                Budget -= schilderijWaarde;
                schilderijen.Add(schilderij);
                return true;
            }
            return false;
        }

        public int TotaleWinst()
        {
            int totaleWinst = 0;
            foreach (var schilderij in schilderijen)
            {
                totaleWinst += (int)WaardeBepaler.BerekenWaarde(schilderij.KrijgData());
            }
            return totaleWinst;
        }

        public List<Schilderij> SorteerBezit()
        {
            schilderijen.Sort();
            return schilderijen;
        }

        public void KrijgSchilderij(Koper andereKoper)
        {
            if (andereKoper.schilderijen.Count > 0)
            {
                schilderijen.Add(andereKoper.schilderijen[0]);
                andereKoper.schilderijen.RemoveAt(0);
            }
        }
    }
}
```

**Program.cs**

```java
namespace Veiling
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Koper speler = new Koper();
            Koper computer = new Koper();
            Random random = new Random();
            bool verkocht = true;
            while (verkocht)
            {
                Schilderij bieding;
                if (random.Next(1, 11) <= 3)
                    bieding = new Picasso();
                else
                    bieding = new Schilderij();

                Console.Clear();
                bieding.TekenSchilderij();
                Console.WriteLine($"Waarde van het schilderij: {WaardeBepaler.BerekenWaarde(bieding.KrijgData())}");
                Console.WriteLine($"Je budget: {speler.Budget:0.0}");
                Console.WriteLine("Wil je dit schilderij kopen? (j/n)");
                string antwoord = Console.ReadLine().ToLower();

                verkocht = false;
                if (antwoord == "j")
                {
                    if (speler.Koop(bieding))
                    {
                        Console.WriteLine("Je hebt het schilderij gekocht!");
                        verkocht = true;
                    }
                    else
                        Console.WriteLine("Je budget is niet genoeg.");
                }
                //Niet gewild of niet gekund: dan probeert de computer het
                if (!verkocht)
                {
                    if (computer.Koop(bieding))
                    {
                        Console.WriteLine("De computer koopt het schilderij.");
                        verkocht = true;
                    }
                    else
                        Console.WriteLine("De computer heeft niet genoeg budget. De veiling stopt.");
                }
                Console.WriteLine("Druk op enter om verder te gaan.");
                Console.ReadLine();
            }

            double totaalSpeler = speler.TotaleWinst() + speler.Budget;
            double totaalComputer = computer.TotaleWinst() + computer.Budget;
            Console.WriteLine($"Jij: {speler.TotaleWinst()} + {speler.Budget:0.0} = {totaalSpeler:0.0}");
            Console.WriteLine($"Computer: {computer.TotaleWinst()} + {computer.Budget:0.0} = {totaalComputer:0.0}");
            if (totaalSpeler > totaalComputer)
                Console.WriteLine("Je hebt gewonnen!");
            else
                Console.WriteLine("De computer heeft gewonnen.");

            //Deel 4: SorteerBezit en KrijgSchilderij
            Console.WriteLine("Jouw schilderijen na het sorteren:");
            ToonBezit(speler.SorteerBezit());
            Console.WriteLine("Schilderijen van de computer na het sorteren:");
            ToonBezit(computer.SorteerBezit());

            speler.KrijgSchilderij(computer);
            Console.WriteLine("Jouw schilderijen na KrijgSchilderij:");
            ToonBezit(speler.SorteerBezit());
            Console.WriteLine("Schilderijen van de computer na KrijgSchilderij:");
            ToonBezit(computer.SorteerBezit());
        }

        private static void ToonBezit(List<Schilderij> schilderijen)
        {
            foreach (var schilderij in schilderijen)
            {
                Console.WriteLine($"- waarde {WaardeBepaler.BerekenWaarde(schilderij.KrijgData())}");
            }
        }
    }
}
```
::::
