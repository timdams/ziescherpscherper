> Volgende opgave was de vaardigheidsproefopdracht voor het 2e zit examen van dit vak (Programming Principles) in augustus 2019

# Introductie

De verkiezingen komen er aan in Nederland. Jouw bedrijf werd ingeroepen om een applicatie te maken die de burger kan gebruiken om te ontdekken op welke partij hij het best kan stemmen. Je gaat dus een zogenaamde stemwijzer maken.

# Fase 0: Wie ben je? (2 punten)

Het programma bestaat uit een loop die telkens uit volgende stappen bestaat:

* Fase 1: **Identificatie**: vragen wie de gebruiker is mbv VraagDetails-methode.
* Fase 2: **Stemwijzer** starten: de gebruiker doorloopt enkele vragen om te zien op welke partij hij best stemt. Met behulp van de StemWijzer-methode.
* Fase 3: **Statistieken** tonen: gebaseerd op de stemwijzer resultaten van de vorige fase wordt getoond hoe het resultaat zich verhoudt tegenover de resultaten van iedereen die de test reeds heeft afgelegd. Met behulp van de ToonStatistieken-methode.


Iedere fase (1,2&3) bestaat uit een methode die vanuit deze fase 0 wordt opgeroepen. De fase 0 loop stopt nooit.

Twee arrays houden volgende informatie bij en worden aangevuld naarmate de informatie beschikbaar is:

* **Naamarray**: 1 array houdt de naam van iedere persoon die de tool heeft gebruikt
* **Resultaatarray**: 1 array houdt het stemresultaat uit fase 2 van de persoon bij

Beide array werken dus synchroon: op dezelfde index staat steeds de naam en stemresultaat van 1 persoon.[kies zelf of je arrays of lists gebruikt]

# Fase 1: identificatie (3 punten)

Maak een methode “VraagDetails”. Deze methode vereist 2 parameters:
* namelijk de array met de namen uit fase 0 (naamarray).
* De kleur (ConsoleColor) waarin de boodschap in de methode moet getoond worden op het scherm. De standaardkleur is Red.

De methode vraagt de naam van de gebruiker (in de kleur die werd meegegeven) en voegt die aan de array toe op de eerste lege plek.

Indien de naam reeds voorkomt in de array verschijnt er een foutboodschap en wordt de naam opnieuw gevraagd. Dit blijft gevraagd worden tot de gebruiker een geldige naam (of "admin") invoert

De methode geeft een bool terug als volgt:

* True indien de gebruiker de naam "admin" heeft ingegeven
* False in alle andere gevallen


# Fase 2.1: Welke partij past bij je? (2 punten)
Maak een methode “StemWijzer”, deze methode vereist 2 parameters van het type ConsoleColor en bool. De Methode geeft een string terug als resultaat.

De eerste parameter is wederom de kleur waarmee de tekst in de methode zal getoond worden.

De tweede parameter die je moet meegeven is een bool die aangeeft of het om een admin gaat of niet. De standaard waarde van deze parameter is false. In deze proef doet de methode zelf niets met die bool: je voorziet de parameter enkel. Wat er voor een admin anders gebeurt, staat in fase 2.2.

Wanneer de methode opstart wordt er een reeks vragen gesteld. Afhankelijk van het vorige antwoord krijg je andere vragen. Je dient volgende beslissingsboom in te voeren, startende aan de linkerkant:
 
![](18192ezit.png)

De eerste vraag zal dus zijn “Vrije sluitingstijden in de horeca”. De volgende vraag zal zijn “Extra evenementen?” als bij de vorige vraag “neen” werd geantwoord, anders is de volgende vraag “Politie moet harder optreden”

* De gebruiker mag enkel “ja” of “nee” antwoorden.
* Je houdt bij hoe vaak de gebruiker ja  heeft geantwoord, en hoe vaak er nee werd geantwoord. [x] en [y]
* Indien de gebruiker een niet geldige invoer geeft dan zal de vraag opnieuw gesteld worden tot hij correct (ja,nee) invoert.


Het scherm wordt na de vragen leeggemaakt en daarna komt de tekst:
``De partij waar je best op stemt is [uitgekomen partij] je hebt hiervoor [x] keer ja geantwoord en [y] keer nee``


# Fase 2.2: Resultaat bewaren (2 punten)
De  methode geeft vervolgens de partij als string terug waar de stemwijzer is op uitgekomen.

Enkel indien de gebruiker géén admin is (wat je hebt teruggekregen via de bool van de VraagDetails() methode) wordt vervolgens z’n stemresultaat bewaard in de tweede array: dit resultaat wordt in de 2e array van fase 0 bewaard op de respectievelijke index waar ook de naam van de huidige gebruiker in de andere array staat. 


# Fase 3: Statistieken tonen (3 punten)

Als laatste fase wordt een methode ``ToonStatistieken`` aangeroepen. Deze methode verwacht twee arrays. De eerste array bevat namen (string), de andere de stemresultaten (string of enum als je de volgende fase ook maakt).

De methode gebruikt de 2 arrays om enkele interessante statistieken te tonen:

1.	Het toont het percentage dat partijen vertegenwoordigd zijn. Als dus de array bestaat uit vvd,d66,vvd. Dan zal vvd 66% vertegenwoordigen, d66 33%
2.	Je toont ook het aantal keer dat iedere partij voorkwam aan de hand van een lijn bestaande uit zoveel sterren. Als vvd 6 stemmen kreeg, d66 3 en bas 5 dan toont de methode dit als volgt:


```text
vvd ******
d66 ***
bas *****
```
3.	Het toont de gemiddelde lengte van de namen van de gebruikers. Als de namen bestaan uit Tim,Jos,Frederik, Frans dan is dit gemiddelde 4,75 letters
4.	Het geeft een overzicht van alle stemresultaten maar toont enkel de eerste letter van iedere naam. Als bijvoorbeeld Tom op d66 uitkwam, Gerolf op vvd en Frans op bas dan verschijnt er:

    ```text
	T, d66
	G, vvd
	F, bas
    ```


# Extra: Enum (2 punten)
Gebruik een enum type om de partijen voor te stellen in je code en vervang ook de array door een array die die enums kan bevatten in plaats van strings voor de partijen.


::::{.callout-caution collapse="true" title="Oplossing"}
```java
using System;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] naamArray = new string[100];
            string[] resultaatArray = new string[100];
            bool isAdmin = false;

            while (true)
            {
                isAdmin = VraagDetails(naamArray);
                if (!isAdmin)
                {
                    string resultaat = StemWijzer(ConsoleColor.Green, isAdmin);

                    int teller = 0;
                    do
                    {
                        teller++;
                    } while (teller < naamArray.Length && naamArray[teller] != null);
                    resultaatArray[teller - 1] = resultaat;

                    ToonStatistieken(naamArray, resultaatArray);
                }
                else
                {
                    StemWijzer(ConsoleColor.Red, isAdmin);
                }
            }

        }
        enum Partijen { VVD, D66, BAS, LA }
        private static void ToonStatistieken(string[] naamArray, string[] resultaatArray)
        {
            //Stemmen per partij tellen: index 0 is VVD, 1 is D66, enz.
            int[] totalen = new int[4];
            int aantalStemmen = 0;
            for (int i = 0; i < resultaatArray.Length; i++)
            {
                if (resultaatArray[i] != null)
                {
                    aantalStemmen++;
                    for (int j = 0; j < totalen.Length; j++)
                    {
                        if (resultaatArray[i] == ((Partijen)j).ToString())
                        {
                            totalen[j]++;
                        }
                    }
                }
            }

            for (int j = 0; j < totalen.Length; j++)
            {
                double percentage = 100.0 * totalen[j] / aantalStemmen;
                Console.WriteLine($"{(Partijen)j} percentage={percentage:F2}%");
            }

            for (int j = 0; j < totalen.Length; j++)
            {
                ToonPartijAantal(((Partijen)j).ToString(), totalen[j]);
            }

            //Gemiddelde naamlengte
            int totaalLetters = 0;
            int totaalNamen = 0;
            for (int i = 0; i < naamArray.Length; i++)
            {
                if (naamArray[i] != null)
                {
                    totaalNamen++;
                    totaalLetters += naamArray[i].Length;
                }
            }
            Console.WriteLine($"Gemiddelde naamlengte= {(double)totaalLetters / totaalNamen}");
            Console.WriteLine("Stemoverzicht");
            for (int i = 0; i < naamArray.Length; i++)
            {
                if (naamArray[i] != null)
                    Console.WriteLine($"{naamArray[i][0]}, {resultaatArray[i]}");
            }
        }

        static void ToonPartijAantal(string naam, int aantal)
        {
            Console.Write($"{naam} ");
            for (int i = 0; i < aantal; i++)
            {
                Console.Write("*");
            }
            Console.WriteLine();
        }
        static bool VraagDetails(string[] naamIn, ConsoleColor kleur = ConsoleColor.Red)
        {
            Console.ForegroundColor = kleur;
            bool opnieuw = false;
            int teller = 0; string naam;

            do
            {
                opnieuw = false;
                Console.WriteLine("Geef je naam");
                naam = Console.ReadLine();
                teller = -1;
                do
                {
                    teller++;
                    if (naamIn[teller] == naam)
                    {
                        Console.WriteLine("Naam bestaat reeds!");
                        opnieuw = true;
                    }


                } while (teller < naamIn.Length - 1 && naamIn[teller] != null);
            } while (opnieuw);
            Console.ResetColor();
            if (naam != "admin")
            {
                naamIn[teller] = naam;
                return false;
            }
            else
                return true;

        }
        static string StemWijzer(ConsoleColor kleur, bool isAdmin = false)
        {
            Console.ForegroundColor = kleur;
            int aantalJa = 0;
            int aantalNee = 0;
            string resultaat = "";

            if (Vraag("Vrije sluitingstijden in de horeca?"))
            {
                aantalJa++;
                if (Vraag("Politie moet harder optreden?"))
                {
                    aantalJa++;
                    resultaat = "VVD";

                }
                else
                {
                    aantalNee++;
                    resultaat = "D66";
                }
            }
            else
            {
                aantalNee++;
                if (Vraag("Extra evenementen?"))
                {
                    aantalJa++;
                    resultaat = "BAS";
                }
                else
                {
                    aantalNee++;
                    resultaat = "LA";
                }

            }
            Console.ResetColor();
            ToonResultaat(resultaat, aantalJa, aantalNee);
            return resultaat;
        }

        static void ToonResultaat(string keuze, int aantalJa, int aantalNee)
        {
            Console.Clear();
            Console.WriteLine($"De partij waar je best op stemt is {keuze} je hebt hiervoor {aantalJa} keer ja geantwoord en {aantalNee} keer nee");
        }
        static bool Vraag(string vraagZin)
        {

            string input = "";
            do
            {
                Console.WriteLine($"{vraagZin}(ja/nee)");
                input = Console.ReadLine();
            } while (input != "ja" && input != "nee");
            if (input == "ja")
                return true;
            return false;
        }
    }
}

```
::::
