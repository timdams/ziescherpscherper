<!--
  Coach-data voor de oefeningen in oefeningen/1_intro/.
  Zie oefeningen/_coach/_prompt.md voor het sjabloon en scripts/coach-prompt.mjs voor de werking.
-->

# Leerstof

## Kent al

Hoofdstuk 1, de eerste stappen:

- Console.WriteLine om een lijn tekst te tonen, en Console.Write om te tonen zonder naar de volgende lijn te springen
- Console.ReadLine om invoer van de gebruiker te lezen en te bewaren, bv. string naam = Console.ReadLine();
- Een variabele van het type string: een geheugenplekje met een naam waar tekst in past
- String interpolatie met $"..." om een variabele in een zin te zetten
- Console.ForegroundColor en Console.BackgroundColor instellen met een waarde uit ConsoleColor, en Console.ResetColor om terug te keren naar normaal
- Console.Beep met een frequentie en een duur
- Elke instructie eindigt op een puntkomma, C# is hoofdlettergevoelig, en de code staat in Main
- Een foutmelding met een rode kronkellijn opzoeken in de Error List van Visual Studio

## Kent nog niet

- Alle andere datatypes. Enkel string bestaat voor hem, ook voor een leeftijd of een prijs
- Rekenen met getallen, en dus ook Convert, Parse en casting
- const en alles over geheugen en datatypes. Dat is het volgende hoofdstuk
- if, else, switch, vergelijkingen en logische operatoren
- Lussen: while, do while, for
- Zelf methoden schrijven, arrays, klassen, en alles wat daarna komt
- Escape characters zoals \n en \t, en verbatim strings met @

# Oefeningen

## Wie ben ik

### Aanpak

Drie keer Console.WriteLine met vaste tekst tussen aanhalingstekens. Er komt geen invoer aan te pas. Dit is vooral een oefening om een nieuwe solution te leren aanmaken en te leren dat elke lijn op een puntkomma eindigt.

### Valkuilen

- De aanhalingstekens vergeten, of ze in het Word-formaat plakken.
- Writeline schrijven in plaats van WriteLine. C# is hoofdlettergevoelig.
- Het programma sluit meteen, waardoor de student denkt dat er niets werkt.

## Visitekaart

### Aanpak

Vier keer hetzelfde ritme: een vraag tonen, het antwoord inlezen en bewaren in een eigen variabele met een duidelijke naam. Achteraf pas alles tonen. Het label en het antwoord op één lijn krijgen kan met Write voor het label en WriteLine voor het antwoord, of met string interpolatie.

### Valkuilen

- Alle antwoorden in dezelfde variabele bewaren, waardoor enkel het laatste overblijft.
- Het antwoord van de gebruiker niet bewaren, want dan is het weg.
- Overal WriteLine gebruiken, waardoor label en antwoord op aparte lijnen komen.
- Voornaam en achternaam in twee lijnen tonen, terwijl de opgave één naamlijn vraagt.

## Fake GPT

### Aanpak

Dit is met opzet een lege doos. De vraag wordt gesteld, de invoer wordt gelezen maar niet gebruikt, en daarna komt altijd hetzelfde antwoord. Laat de student vooral uitleggen waarom je hier niets hoeft te bewaren.

### Valkuilen

- Denken dat het programma iets moet begrijpen van de vraag.
- De ReadLine helemaal weglaten, waardoor het antwoord verschijnt voor de gebruiker iets kon typen.

## Stad kleuren

### Aanpak

Dit gebeurt in de bestaande solution van Wie ben ik. De kleur instellen is een aparte instructie die je zet vóór de lijn die je gekleurd wil, en na die lijn zet je alles terug met ResetColor.

### Valkuilen

- De kleur pas instellen na de WriteLine, waardoor er niets gekleurd lijkt.
- ResetColor vergeten, waardoor de rest van de console gekleurd blijft.
- ForegroundColor en BackgroundColor omwisselen.
- Een nieuwe solution aanmaken terwijl de opgave uitdrukkelijk in de bestaande wil werken.

## Rommel zin

### Aanpak

Vier vragen, vier antwoorden, elk in een eigen variabele. De grap zit in de laatste zin: daar zet je de variabelen bewust op de verkeerde plaats. Laat de student eerst op papier zetten welk antwoord waar terechtkomt.

### Valkuilen

- Variabelen met verwarrende namen kiezen en zo zelf de kluts kwijtraken.
- De antwoorden zelf omwisselen bij het inlezen in plaats van bij het tonen. Dat werkt wel, maar maakt de code onleesbaar.
- De accolades van de interpolatie vergeten, waardoor de variabelenaam letterlijk op het scherm komt.

## Woordenslinger

### Aanpak

Per woord de kleur instellen en dan het woord tonen. Binnen een lijn gebruik je Write, en enkel voor het laatste woord van de lijn WriteLine. Op het einde de kleuren resetten.

### Valkuilen

- Overal WriteLine gebruiken, waardoor elk woord op een eigen lijn staat.
- De kleur maar één keer instellen voor de hele lijn.
- ResetColor vergeten op het einde.

## Tekening

### Aanpak

De tekening bestaat volledig uit spaties met een gekleurde achtergrond. Per stukje van een rij stel je de BackgroundColor in en toon je het juiste aantal spaties met Write, en op het einde van elke rij een WriteLine. Laat de student de tekening eerst op ruitjespapier natellen: hoeveel rijen, en per rij hoeveel vakjes van elke kleur.

### Valkuilen

- Tekens gebruiken in plaats van spaties, waardoor de vakjes niet vol lijken.
- Vergeten dat een rij pas eindigt met een WriteLine.
- De achtergrondkleur niet terugzetten voor het volgende stuk van dezelfde rij.
- ResetColor vergeten, waardoor de hele console gekleurd blijft.

## Muziek

### Nota

Deze oefening hoort niet bij de leerstof en is puur voor de lol. Op een Mac hoort de student niets.

### Aanpak

Console.Beep krijgt twee getallen mee: de toonhoogte en hoelang die duurt. Enkele beeps na elkaar vormen een deuntje. Dat plakt hij bovenaan een eerder gemaakte oefening.

### Valkuilen

- De twee getallen omwisselen, waardoor er een heel korte of een oneindig lange toon komt.
- De beeps onderaan zetten in plaats van bij het opstarten.

## Regenboog Ticket

### Nota

Dit is een Final Essentials: alles van het hoofdstuk komt hier samen. De prijs wordt gewoon als tekst ingelezen, want rekenen kan hij nog niet.

### Aanpak

Eerst de drie vragen stellen en de antwoorden bewaren. Daarna het ticket tonen: per lijn eerst de juiste voorgrond- en achtergrondkleur instellen en dan de lijn tonen. De streepjeslijn komt twee keer voor, dus die mag in een eigen variabele.

### Valkuilen

- De kleuren instellen na het tonen van de lijn.
- De achtergrondkleur van de streepjeslijnen laten staan voor de gekleurde tekstlijnen.
- ResetColor vergeten op het einde.
- De prijs als getal proberen in te lezen. Alles is hier nog tekst.
