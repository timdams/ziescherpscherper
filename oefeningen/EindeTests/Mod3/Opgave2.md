# Maak een "voortplantings-simulator".

# Klasse mens

## Properties
Maak een klasse ``Mens`` met volgende eigenschappen:
* geslacht (enum) : voorlopig enkel Man en Vrouw
* kleur_ogen (enum): blauw, bruin, groen, rood
* maxlengte (in cm): een getal dat niet onder 30 kan gaan. Dit getal geeft aan hoe groot de persoon ooit zal kunnen worden.

## Constructors
Voorzie volgende constructors:
* Een default constructor die bovenstaande eigenschappen op willekeurige waarden instelt. Bij maxlengte is deze waarde 90% van de tijd tussen 150 en 210. 5% van de tijd is deze een getal tussen 40 en 150. 5% van de tijd een getal tussen 210 en 240.
* Een overloaded constructor waarbij de 3 eigenschappen als parameter kunnen doorgegeven worden.

## Methoden
### ToonMens
Voorzie een methode ``ToonMens``. Deze vat de informatie van een Mens-object in één lang samen, hierbij zal de achtergrond van de tekst de kleur van de ogen zijn.
De tekst die verschijnt is: ``maxlengte [in meter], geslacht``

Bijvoorbeeld:

```
1.78 m, man  
```

### Plantvoort
Enkel vrouwen kunnen nieuwe mensen maken. 

* Iedere mens heeft een methode '`Plantvoort`' die als parameter een Mens met geslacht "Man" vereist.
* Enkel bij vrouwen zal deze methode iets doen. Indien deze op mannen wordt aangeroepen geeft de methode ``null`` terug.
* De methode geeft een nieuw mens object terug. De nieuwe mens heeft als lengte de gemiddelde lengte van de man en vrouw. De oogkleur is 50% van de tijd die van de man en 50%van de tijd die van de vrouw. Het geslacht is willekeurig.

# Eerste voortplantingen testen

Maak 12 willekeurige mensen en plaats deze in een List. De eerste 6 mensen zijn vrouwen, de laatste 6 mensen zijn mannen. Alle mensen hebben willekeurige eigenschappen, enkel het geslacht is dus al bepaald.

Laat nu de mensen voortplanten.
* De eerste helft mensen in de List zoeken een willekeurige partner van het andere geslacht in de andere helft lijst. En maakt hier een nieuwe mens mee. De man wordt meegegeven als parameter aan de Plantvoort methode van de vrouw.
* Plaats deze nieuwe mens in de lijst achteraan.

# Generatie bijhouden
Voeg een property ``Generatie`` toe aan je MEns die toelaat om te onthouden wanneer Mens is aangemaakt. Je kan deze via de constructor instellen.

# Simulatie
Herhaal bovenstaande voor 10 generaties (merk op dat ouders dus vermoedelijk kinderen zullen maken met hun eigen kinderen/kleinkinderen. Niet over nadenken) en bekijk wat de resultaten zijn. Plaats deze simulatie in een static methode ``Simuleer`` die een List van mensen als parameter aanvaardt, alsook een getal dat aangeeft hoeveel generaties moet getest worden. Houdt bij iedere Mens die je aanmaakt om welke generatie het gaat.

Toon aan de gebruiker hoeveel de gemiddelde lengte is, hoeveel percent welke kleur ogen heeft, etc.

Maak een applicatie waarbij de gebruiker experimenten kan doen om te zien wat er gebeurt na x generaties.
Bijvoorbeeld:
* Wat als mannen erg klein zijn, vrouwen erg lang
* Wat als mensen met blauwe ogen steeds die kleur aan hun kinderen doorgeven, na hoeveel generaties heeft iedereen blauwe ogen

# Mutaties

Introduceer mutaties tijdens de voortplanting. Iedere keer als er een nieuwe mens wordt aangemaakt tijdens Plantvoort bestaat er 10% kans dat een van de "regels" overtreden wordt (bv i.p.v. gemiddelde lengte wordt lengte van de mama genomen, of i.p.v. kleur van een van ouder krijgt kind bij mutatie altijd groene ogen, etc). Verzin zelf enkele mutatie regels.

Test je mutaties en verzin extra regels en pas toe in de Simulatiemethode.

Voeg een ``bool`` parameter toe aan de simulatiemethode om aan te geven of mutaties zijn toegestaan of niet, aslsook een int parameter om de kans van mutatie mee te geven (bijvoorbeeld 10 = 10%)

# Extra properties

Voeg extra eigenschappen aan je ``Mens`` toe die je ook betrekt als genetische eigenschappen tijdens het voortplanten (denk aan haarkleur, allergieën of aantal armen).

:::{.callout-tip}

**Ter info**

Volgende code toont hoe je je lijst kunt sorteren op Geslacht, veronderstellende dat de lijst ``mensen`` heet:

```csharp
 //using System.Linq  (toevoegen bovenaan)
 mensen = mensen.OrderBy(p => (int)p.Geslacht).ToList();
```
:::

::::{.callout-caution collapse="true" title="Oplossing"}
Onderstaande oplossing is niet 100% conform de opgave. Deze oplossing werd gemaakt in het hoorcollege en hier en daar werd er afgeweken van de opgave.

# Program.cs

```java
List<Mens> mensen = new List<Mens>();

for (int i = 0; i < 100000; i++)
{
    mensen.Add(new Mens(Geslacht.Vrouw));
}
for (int i = 0; i < 100000; i++)
{
    mensen.Add(new Mens(Geslacht.Man));
}

Mens.Simuleer(mensen, 10);
```

# Mens.cs

```java
using System;
using System.Collections.Generic;
using System.Text;

namespace gen
{
    enum Geslacht { Man, Vrouw }
    enum OogKleur { Blauw, Bruin, Groen, Rood, Geel }

    class Mens
    {
        static Random r = new Random();
        //Default constructor
        public Mens()
        {
            Generatie = 0;
            if (r.Next(0, 2) == 0)
                Geslacht = Geslacht.Vrouw;
            else Geslacht = Geslacht.Man;

            OogKleur = (OogKleur)r.Next(0, 4);

            int percentlengte = r.Next(0, 100);
            if (percentlengte < 5)
                MaxLengte = r.Next(40, 151);
            else if (percentlengte >= 95)
                MaxLengte = r.Next(210, 241);
            else
                MaxLengte = r.Next(151, 210);
        }

        //Overloaded constructor
        public Mens(OogKleur oogin, Geslacht geslin, int maxLengtein, int genin)
        {
            OogKleur = oogin;
            Geslacht = geslin;
            MaxLengte = maxLengtein;
            Generatie = genin;
        }

        public Mens(Geslacht geslin) : this()
        {
            Geslacht = geslin;
        }

        //Properties

        public int Generatie { get; private set; }
        public Geslacht Geslacht { get; private set; }
        public OogKleur OogKleur { get; private set; }
        private int maxLengte;


        public int MaxLengte
        {
            get { return maxLengte; }
            private set { if (value >= 30) maxLengte = value; }
        }

        public void ToonMens()
        {
            switch (OogKleur)
            {
                case OogKleur.Blauw:
                    Console.BackgroundColor = ConsoleColor.Blue;
                    break;
                case OogKleur.Bruin:
                    Console.BackgroundColor = ConsoleColor.Black;
                    break;
                case OogKleur.Groen:
                    Console.BackgroundColor = ConsoleColor.Green;
                    break;
                case OogKleur.Rood:
                    Console.BackgroundColor = ConsoleColor.Red;
                    break;
                case OogKleur.Geel:
                    Console.BackgroundColor = ConsoleColor.Yellow;
                    break;
                default:
                    break;
            }

            Console.WriteLine($"{MaxLengte / 100.0: 0.00} m, {Geslacht} ({Generatie})");

            Console.ResetColor();
        }

        public Mens Plantvoort(Mens man)
        {
            if (Geslacht == Geslacht.Vrouw && man.Geslacht == Geslacht.Man && man != this )
            {
                // && man != this zorgt ervoor dat een vrouw niet met zichzelf kan voortplanten
                int lengteind = (man.MaxLengte + this.MaxLengte) / 2;
                OogKleur oogkind = this.OogKleur;
                if (r.Next(0, 2) == 0) oogkind = man.OogKleur;
                
                Geslacht g = Geslacht.Man;
                if (r.Next(0, 2) == 0) g = Geslacht.Vrouw;

                return new Mens(oogkind, g, lengteind, Generatie + 1);

            }
            else return null;
        }

        public static void Simuleer(List<Mens> testlijst, int gentest = 5)
        {
            for (int i = 0; i < gentest; i++)
            {
                List<Mens> deKribbe = new List<Mens>();
                foreach (var mens in testlijst)
                {
                    int partner = r.Next(0, testlijst.Count);
                    Mens babynew = mens.Plantvoort(testlijst[partner]);
                    if (babynew != null)
                        deKribbe.Add(babynew);
                }
                //statistieken verkrijgen
                
                testlijst.AddRange(deKribbe);


            }
            GenereerStatistieken(testlijst, gentest);
            //foreach (var mens in testlijst)
            //{
            //    mens.ToonMens();
            //}
        }

        private static void GenereerStatistieken(List<Mens> deKribbe, int aantalgens)
        {
            for (int i = 0; i < aantalgens; i++)
            {
                int aantalVrouwen = 0;
                double gemiddeldeLengte = 0.0;
                int aantalinGen = 0;
                int aantalGeel = 0;
                foreach (var mens in deKribbe)
                {

                    if (mens.Generatie == i)
                    {
                        if (mens.OogKleur == OogKleur.Geel) aantalGeel++;
                        if (mens.Geslacht == Geslacht.Vrouw) aantalVrouwen++;

                        gemiddeldeLengte += mens.MaxLengte;
                        aantalinGen++;
                    }
                }

                gemiddeldeLengte = gemiddeldeLengte /aantalinGen;

                Console.WriteLine($"Generatie {i}");
                Console.WriteLine($"\tGemiddelde lengte= {gemiddeldeLengte}");
                Console.WriteLine($"\tAantal vrouwen: {aantalVrouwen}/{aantalinGen}");
                if(aantalinGen!=0)
                    Console.WriteLine($"\tMensen met gele ogen:{aantalGeel} ({((double)aantalGeel/aantalinGen)*100:0.0}%)");
            }


           
        }
    }
}
```
::::
