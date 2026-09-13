<!--
  Coach- en quoteergegevens voor oefeningen/EindeTests/Mod4/Opgave.md (Hamertje Tik, juni 2019).
  Formaat: zie _LEESMIJ.md in deze map.
-->
# Nota

Een OOP-vaardigheidsproef in één groot project, Hamertje Tik, in drie delen: de klassen voor de vormen (stap 1 tot 5), een menu dat die vormen gebruikt (stap 6) en een PRO-deel (stap 7 en 8). Vraag eerst aan welke stap de student bezig is: de stappen bouwen op elkaar voort. Geef geen code, geen klassedefinities, geen constructors of methodes die hij zo kan overnemen, en ook niet de coördinaten van de onderdelen van het vliegtuig. Het klassediagram in de opgave is enkel een overzicht: de cursus werkt vandaag niet meer met klassediagrammen, dus leg het gerust in woorden uit. De namen van de private instantievariabelen die erin staan, zijn niet verplicht.

# Aanpak

Stap 1 (Vorm): laat de student eerst zeggen wat elke vorm gemeenschappelijk heeft en wat per vorm verschilt. Wat gemeenschappelijk is, komt in Vorm. Wat elke vorm anders doet maar wel moet kunnen, wordt abstract. Wat een standaardwaarde heeft die een kindklasse mag vervangen, wordt virtual. Vraag wat het betekent voor de kindklassen dat Vorm geen default constructor heeft.

Stap 2 (Lijn en Rechthoek): eerst de constructors, die hun x en y doorgeven aan Vorm. Daarna TekenVorm: laat hem op papier nagaan op welke kolom en welke rij elk sterretje komt, vertrekkend van de locatie linksboven. Vraag hoe hij ervoor zorgt dat de kleur uit de property Kleur komt en niet een tweede keer in TekenVorm staat.

Stap 3 (Vliegtuig): teken het vliegtuig op ruitjespapier en schrijf per onderdeel (lichaam, linkervleugel, rechtervleugel) de positie op ten opzichte van de linkerbovenhoek van het vliegtuig. Pas dan maakt hij de drie objecten aan in de constructor. Tekenen is daarna enkel de onderdelen vragen om zichzelf te tekenen.

Stap 4 (Vloot): hoeveel rijen is één vliegtuig hoog? Daaruit volgt waar het tweede en het derde vliegtuig komen. De lijst is van de vloot zelf, dus hij hoort in de klasse.

Stap 5 (IBeweegbaar): eerst de enum en de interface, dan de implementatie. Laat hem een vliegtuig verplaatsen en opnieuw tekenen, en vraag of alle drie de onderdelen mee opschuiven. Zo niet: waar staan hun coördinaten eigenlijk? Vraag ook in welke richting y groter wordt in de console.

Stap 6 (menu): de lijst bevat vormen van alle soorten. Laat hem de volgorde uit de opgave (tekenen, vragen, leegmaken) eerst in woorden uitschrijven, en per menukeuze een aparte methode overwegen. Voor verplaatsen: hoe weet hij van een object in de lijst of het de interface heeft, zonder elk type apart na te gaan?

Stap 7: waar moet het nieuwe vliegtuig komen, gegeven de locatie van de vloot en het aantal vliegtuigen dat ze al heeft? En hoe vindt hij in de lijst van het menu de vormen die een Vloot zijn?

Stap 8: sorteren op een eigen volgorde is precies waarvoor IComparable dient. Laat hem eerst in woorden uitleggen wanneer een vorm voor een andere komt, ook bij een gelijke x.

# Valkuilen

- Stap 1: Kleur als gewone property met een setter maken, of niet virtual, waardoor Lijn en Rechthoek hem niet kunnen overriden.
- Stap 1: toch een default constructor in Vorm zetten omdat de kindklassen anders niet compileren.
- Stap 2: de kleur rechtstreeks in TekenVorm instellen en de property Kleur links laten liggen.
- Stap 2: de lengte en de breedte omwisselen, waardoor het vliegtuig later liggend getekend wordt.
- Stap 2: vergeten de kleur na het tekenen terug te zetten, zodat het menu mee kleurt.
- Stap 3: de sterretjes van het vliegtuig zelf tekenen in plaats van een Rechthoek en twee Lijn-objecten te gebruiken.
- Stap 3: de onderdelen maken met vaste coördinaten in plaats van vertrekkend van x en y van het vliegtuig.
- Stap 4: alle vliegtuigen op dezelfde plaats aanmaken, zodat ze over elkaar getekend worden.
- Stap 5: enkel X en Y van het vliegtuig aanpassen, terwijl de onderdelen hun eigen coördinaten hebben en dus blijven staan.
- Stap 5: bij een vloot de vliegtuigen niet mee verplaatsen, of de vloot zelf niet, waardoor VergrootVloot later op de oude plaats tekent.
- Stap 6: bij verplaatsen elk type apart controleren in plaats van na te gaan of het object de interface heeft.
- Stap 6: bij een ongeldige keuze niets of een lege vorm aan de lijst toevoegen, waardoor het tekenen crasht.
- Stap 6: het menu als een eindeloze loop schrijven die enkel met een `break` stopt (boete).
- Stap 8: bij gelijke x de y vergeten, of in de omgekeerde volgorde sorteren.
- Alle klassen, de interface en de enum in één bestand zetten (boete).

# Puntenverdeling

De verdeling per stap komt uit de originele proef (samen 20 punten). De deelpunten binnen een stap zijn achteraf toegevoegd en tellen op tot het aantal van die stap.

**Deel 1, klassen (11 punten)**

Stap 1, Vorm (2 punten)

- Abstracte klasse Vorm met X en Y als autoproperties, één constructor die x en y vraagt en instelt, geen default constructor: 1
- Abstracte methode TekenVorm, en een virtual read-only property Kleur van het type ConsoleColor die rood teruggeeft: 1

Stap 2, Lijn en Rechthoek (2 punten)

- Lijn: erft van Vorm, autoproperty Lengte, constructor met x, y en lengte, Kleur overridden naar groen, TekenVorm tekent de sterretjes horizontaal vanaf de locatie in de eigen kleur: 1
- Rechthoek: erft van Vorm, autoproperties Lengte en Breedte, constructor met x, y, lengte en breedte en een default constructor (locatie 1,1, lengte en breedte 2), Kleur overridden naar geel, TekenVorm tekent de rechthoek vanaf de locatie in de eigen kleur: 1

Stap 3, Vliegtuig (3 punten)

- Erft van Vorm, constructor met x en y die één Rechthoek en twee Lijn-objecten aanmaakt en bijhoudt in private instantievariabelen: 1
- De onderdelen hebben de juiste afmetingen en posities ten opzichte van de locatie van het vliegtuig (lichaam met lengte 5 en breedte 2, vleugels met lengte 3 links en rechts op de middelste rij): 1
- TekenVorm laat de drie onderdelen zichzelf tekenen, in hun eigen kleur: 1

Stap 4, Vloot (2 punten)

- Erft van Vorm, private lijst van vliegtuigen, constructor met x, y en het aantal, die de vliegtuigen onder elkaar aanmaakt: 1
- TekenVorm tekent alle vliegtuigen uit de lijst: 1

Stap 5, IBeweegbaar (2 punten)

- Enum Richting met Links, Rechts, Boven en Beneden, en interface IBeweegbaar met de methode Beweeg die een Richting krijgt en niets teruggeeft: 1
- Vliegtuig en Vloot implementeren de interface, en na Beweeg staat het volledige object (met alle onderdelen of vliegtuigen) één plaats verder in de juiste richting: 1

**Deel 2, menu (5 punten)**

Stap 6 (5 punten)

- Eén lijst van vormen, en een loop die tot het afsluiten telkens alle vormen tekent, de gebruiker iets vraagt en het scherm leegmaakt: 1,5
- Lijst leegmaken en afsluiten: 0,5
- Vorm toevoegen: keuze uit rechthoek, lijn, vliegtuig en vloot, locatie vragen, de vormafhankelijke gegevens vragen en het juiste object aan de lijst toevoegen: 2
- Verplaatsen: richting vragen, en alle objecten in de lijst die IBeweegbaar zijn, verplaatsen via de interface: 1

**Deel 3, PRO (4 punten)**

Stap 7, Vergroot vloot (2 punten)

- Methode VergrootVloot in Vloot die één vliegtuig toevoegt, onder het laatste, ook na een verplaatsing: 1
- Menu-item dat bij alle Vloot-objecten in de lijst VergrootVloot oproept: 1

Stap 8, Sorteer (2 punten)

- De vormen worden gesorteerd op x, en bij gelijke x op y, van klein naar groot: 1
- Menu-item dat na het sorteren met een loop per vorm het type, x en y toont: 1

# Beoordeling

- Stap 1 tot 5: encapsulatie volgens de opgave. De onderdelen van Vliegtuig en de lijst van Vloot zijn private instantievariabelen. Een publieke lijst of publieke onderdelen kosten een half punt in het onderdeel waar ze horen. X, Y, Lengte en Breedte zijn autoproperties zoals gevraagd.
- Stap 1: Kleur moet read-only zijn en virtual. Heeft Kleur een publieke setter, of is hij niet virtual en krijgen Lijn en Rechthoek hun kleur op een andere manier, dan is het tweede onderdeel van stap 1 hoogstens een half punt.
- Stap 2: "in hun eigen kleur" betekent dat TekenVorm de property Kleur gebruikt. Wie de kleur vast in TekenVorm zet en Kleur niet overridet, verliest een half punt per klasse.
- Stap 2: bij een rechthoek is de lengte het aantal rijen en de breedte het aantal kolommen, zoals de opgave en het voorbeeld (lengte 4, breedte 2) zeggen. Wie ze omwisselt maar rechthoek en vliegtuig consequent houdt en het vliegtuig juist tekent, krijgt voor het onderdeel Rechthoek een half punt.
- Stap 2 tot 4: de voorbeelden en de oplossing zetten een spatie tussen de sterretjes. Sterretjes tegen elkaar is ook goed, zolang het vliegtuig en de vloot dezelfde vorm hebben. De uitlijning van de tekstvoorbeelden in de opgave is niet exact (tabs en spaties door elkaar): de figuur met de coördinaten van het vliegtuig en het voorbeeld van de vloot zijn de maatstaf.
- Stap 3: compositie is gevraagd. Een vliegtuig dat zijn sterretjes zelf tekent zonder Rechthoek- en Lijn-objecten, krijgt voor stap 3 hoogstens het punt voor de juiste vorm.
- Stap 5: de opgave zegt dat de onderdelen van een vliegtuig en de vliegtuigen van een vloot mee verplaatst moeten worden. Beoordeel op het resultaat. Elke aanpak waarbij het hele vliegtuig en de hele vloot na Beweeg één plaats opschuiven, is goed. Blijven de onderdelen staan, dan is het tweede onderdeel van stap 5 0.
- Stap 5: in de console wordt y groter naar beneden. De opgave zegt dat niet, dus wie Boven en Beneden omwisselt, verliest niets, zolang de vier richtingen elk een andere kant op gaan.
- Stap 5: Vliegtuig en Vloot moeten allebei Beweeg implementeren omdat de interface het vraagt. Dat de richtingkeuze in beide klassen gelijkaardig is, is geen redundante code.
- Stap 6: de oplossing zet het menu met SetCursorPosition bovenaan, maar de opgave legt de plaats van het menu niet vast. Een menu dat over de vormen heen komt, kost niets. De tekst en nummering van de menukeuzes zijn vrij.
- Stap 6: verplaatsen hoort via de interface te gaan (is of as met IBeweegbaar). Wie apart op Vliegtuig en op Vloot test, krijgt voor dat onderdeel een half punt.
- Stap 6: een loop die enkel met een `break` stopt, is de boete, geen puntverlies in het eerste onderdeel.
- Stap 6: een ongeldige menukeuze of vormkeuze afhandelen staat niet in de opgave en levert niets extra op. Maar een programma dat bij een ongeldige vormkeuze een lege waarde aan de lijst toevoegt en daarna crasht, heeft het derde onderdeel niet volledig: een half punt minder.
- Stap 7: het nieuwe vliegtuig moet onder de bestaande komen, vertrekkend van de huidige locatie van de vloot en het huidige aantal vliegtuigen. Een vaste positie of een vliegtuig dat na een verplaatsing op de oude plaats verschijnt, geeft een half punt voor dat onderdeel.
- Stap 8: IComparable in Vorm met List.Sort is de verwachte aanpak. Een zelfgeschreven sorteerlus die correct sorteert, is ook goed. Sorteren met LINQ (OrderBy) of met een lambda is leerstof die nog niet gezien is: dan is het sorteeronderdeel 0. Sorteert hij in de omgekeerde volgorde, of kijkt hij bij gelijke x niet naar y, dan is het een half punt.
- Stap 8: "VormType" is de naam van de klasse van het object, opgevraagd of via een eigen ToString. De spaties in de voorbeelduitvoer ("3, 5" en "3,6") tellen niet mee. Dat het scherm na het tonen meteen leeggemaakt wordt, rekent de opgave niet aan: een pauze is niet verplicht.
- De opgave schrijft "overloaded constructor" voor een constructor met parameters. Dat is de oude benaming; wat telt, is welke parameters de constructor vraagt.
- De klassen, de interface en de enum in één bestand is de boete voor klassen in hetzelfde bestand. Een enum of interface in het bestand van een klasse die ze gebruikt, reken je daar mee.
