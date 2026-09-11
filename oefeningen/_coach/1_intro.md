<!--
  Coach-data voor de oefeningen in oefeningen/1_intro/.
  Zie oefeningen/_coach/_prompt.md voor het sjabloon en scripts/coach-prompt.mjs voor de werking.
-->

# Leerstof

## Kent al

Hoofdstuk 1, de eerste stappen:

- Console.WriteLine om een lijn tekst te tonen, en Console.Write om te tonen zonder naar de volgende lijn te springen
- Console.WriteLine() zonder iets tussen de haakjes om een lege lijn te tonen
- Console.ReadLine om invoer van de gebruiker te lezen en te bewaren, bv. string naam = Console.ReadLine();
- Een variabele van het type string: een geheugenplekje met een naam waar tekst in past. Zo'n variabele kan ook een vaste tekst krijgen, bv. string lijn = "-----"; (dat komt in de oefeningen voor het eerst voor)
- String interpolatie met $"..." om een variabele in een zin te zetten
- Het verschil tussen "naam" (tekst) en naam (de variabele), en dat spaties enkel meetellen binnen de aanhalingstekens
- Console.ForegroundColor en Console.BackgroundColor instellen met een waarde uit ConsoleColor, en Console.ResetColor om terug te keren naar normaal
- Console.Beep met een frequentie en een duur
- Elke instructie eindigt op een puntkomma, C# is hoofdlettergevoelig, code loopt van boven naar onder en staat in Main
- Commentaar met //
- Fouten opsporen: de rode kronkellijn, de Error List en het lampje. Bij een build met fouten klik je nooit op "Yes"
- Stagiair Steven: een personage dat code van een A.I. inlevert zonder ze na te kijken

## Kent nog niet

- Alle andere datatypes. Enkel string bestaat voor hem, ook voor een leeftijd of een prijs
- Tekst aan elkaar plakken met +. Hij gebruikt string interpolatie of Write
- Rekenen met getallen, en dus ook Convert, Parse en casting
- const en alles over geheugen en datatypes. Dat is het volgende hoofdstuk
- if, else, switch, vergelijkingen en logische operatoren
- Lussen: while, do while, for
- Zelf methoden schrijven, arrays, klassen, en alles wat daarna komt
- Escape characters zoals \n en \t, en verbatim strings met @

# Oefeningen

## Wie ben ik

### Aanpak

Drie keer Console.WriteLine met vaste tekst tussen aanhalingstekens. Er komt geen invoer aan te pas. Dit is vooral een oefening om een nieuwe solution te leren aanmaken en te leren dat elke lijn op een puntkomma eindigt. Daarna maakt de student zijn programma bewust stuk, op drie plekken na elkaar, om de Error List te leren lezen. Laat hem bij elke fout zelf zeggen wat de melding volgens hem betekent.

### Valkuilen

- De aanhalingstekens vergeten, of ze in het Word-formaat plakken.
- Writeline schrijven in plaats van WriteLine. C# is hoofdlettergevoelig.
- De drie fouten tegelijk maken, waardoor hij niet meer weet welke melding bij welke fout hoort.
- Schrikken van drie meldingen voor één vergeten aanhalingsteken. Herstel altijd eerst de bovenste.
- Op "Yes" klikken bij de vraag of hij de laatste werkende versie wil starten. Dan test hij oude code.

## Fake GPT

### Aanpak

Deel 1 is met opzet een lege doos. De vraag wordt gesteld, de invoer wordt gelezen maar niet gebruikt, en daarna komt altijd hetzelfde antwoord. Laat de student vooral uitleggen waarom je hier niets hoeft te bewaren. In deel 2 herhaalt het programma de vraag, en dan moet de invoer wel in een variabele.

### Valkuilen

- Denken dat het programma iets moet begrijpen van de vraag.
- De ReadLine helemaal weglaten, waardoor het antwoord verschijnt voor de gebruiker iets kon typen.
- In deel 2 de spatie tussen de herhaalde vraag en het antwoord vergeten.

## Visitekaart

### Aanpak

Vier keer hetzelfde ritme: een vraag tonen, het antwoord inlezen en bewaren in een eigen variabele met een duidelijke naam. Achteraf pas alles tonen. Het kaartje maakt hij twee keer: eerst met Write voor het label en WriteLine voor het antwoord, daarna met één WriteLine en string interpolatie per lijn. Beide versies geven dezelfde uitvoer. De lege lijn voor "Goed. Hier volgt je visitekaartje:" is een WriteLine zonder iets tussen de haakjes.

### Valkuilen

- Alle antwoorden in dezelfde variabele bewaren, waardoor enkel het laatste overblijft.
- Het antwoord van de gebruiker niet bewaren, want dan is het weg.
- Overal WriteLine gebruiken, waardoor label en antwoord op aparte lijnen komen.
- In de eerste versie de spatie tussen voornaam en achternaam vergeten.
- Voornaam en achternaam in twee lijnen tonen, terwijl de opgave één naamlijn vraagt.

## Rommel zin

### Aanpak

Vier vragen, vier antwoorden, elk in een eigen variabele. De grap zit in de laatste zin: daar zet je de variabelen bewust op de verkeerde plaats. Laat de student eerst op papier zetten welk antwoord waar terechtkomt. In deel 2 leest hij Stevens code en voorspelt hij de uitvoer zonder ze uit te voeren. Stevens fout zit bij het inlezen: de antwoorden voor auto en boek belanden in de variabele met de verkeerde naam.

### Valkuilen

- Variabelen met verwarrende namen kiezen en zo zelf de kluts kwijtraken.
- De antwoorden zelf omwisselen bij het inlezen in plaats van bij het tonen. Dat werkt wel, maar maakt de code onleesbaar. Dat is precies wat Steven in deel 2 doet.
- De accolades van de interpolatie vergeten, waardoor de variabelenaam letterlijk op het scherm komt.
- In deel 2 enkel naar de laatste lijn kijken, waar alles correct lijkt.

## Frituur in volgorde

### Nota

Een puzzel: de student schrijft zelf geen code, maar zet gegeven lijnen in de juiste volgorde. Eén lijn is een indringer: dezelfde zin zonder $ vooraan. Zeg niet welke lijn dat is.

### Aanpak

Vertrek van de gevraagde uitvoer en werk van boven naar onder: welke lijn zet dit stuk tekst op het scherm? Een variabele moet eerst ingelezen zijn voor ze in een zin gebruikt kan worden. Dat de antwoorden op dezelfde lijn staan als de vragen, komt doordat de vragen met Write getoond worden.

### Valkuilen

- De zin met de variabelen te vroeg zetten, voor de variabelen ingelezen zijn. Visual Studio geeft dan een fout.
- De lege lijn vergeten of op de verkeerde plaats zetten.
- Beide slotzinnen laten staan, of de verkeerde weggooien.

## Voorspel de uitvoer

### Nota

Het doel is dat de student zelf voorspelt, op papier, voor hij de code uitvoert. Geef de uitvoer nooit, ook niet lijn per lijn. Laat hem per lijn code zeggen wat er op het scherm komt en waar de cursor daarna staat.

### Aanpak

Lijn per lijn door de code gaan en telkens twee vragen stellen: wat komt er op het scherm, en springt de cursor naar een nieuwe lijn of niet? Wat de gebruiker intypt, verschijnt op de plek waar de cursor op dat moment staat.

### Valkuilen

- Vergeten dat Write niet naar een nieuwe lijn springt, waardoor Hallo en wereld aan elkaar plakken.
- Niet zien dat wat de gebruiker typt achter de vraag verschijnt, omdat die vraag met Write getoond wordt.
- "naam" tussen aanhalingstekens verwarren met de variabele naam.
- Denken dat de accolades zonder $ toch de inhoud van de variabele tonen.
- Denken dat een spatie buiten de aanhalingstekens meetelt.

## Stevens begroeting

### Aanpak

Deel 1: de vier fouten die Visual Studio vindt, oplossen met de Error List. Het gaat om een ontbrekende puntkomma, Readline met een kleine l, een ontbrekend aanhalingsteken en writeLine met een kleine w. Deel 2: de drie fouten die de compiler niet ziet. Laat de student de uitvoer naast het voorbeeld leggen en per verschil zoeken welke lijn code het veroorzaakt. Het gaat om een ontbrekende $, een ontbrekende ResetColor en een spatie buiten de aanhalingstekens. Wijs niet meteen aan waar een fout zit: laat hem eerst de melding lezen en zeggen wat die volgens hem betekent.

### Valkuilen

- Het ontbrekende aanhalingsteken op lijn 3 geeft ook meldingen bij lijn 4. De student zoekt dan op de verkeerde lijn.
- Readline en writeLine verschijnen pas in de Error List nadat de syntaxfouten opgelost zijn.
- Denken dat het programma klaar is zodra het compileert.
- ResetColor op de verkeerde plaats zetten, waardoor de begroeting niet meer groen is.

## Stad kleuren

### Aanpak

Dit gebeurt in de bestaande solution van Wie ben ik. De kleur instellen is een aparte instructie die je zet vóór de lijn die je gekleurd wil, en na die lijn zet je alles terug met ResetColor. Daarna haalt de student ResetColor even weg om te zien wat er dan gebeurt.

### Valkuilen

- De kleur pas instellen na de WriteLine, waardoor er niets gekleurd lijkt.
- ResetColor vergeten, waardoor de rest van de console gekleurd blijft.
- ForegroundColor en BackgroundColor omwisselen.
- Een nieuwe solution aanmaken terwijl de opgave uitdrukkelijk in de bestaande wil werken.

## Kleurige chat

### Aanpak

Vertrekt van Fake GPT deel 2. Voor elke lijn die de computer toont, stel je cyaan in. Vlak voor de ReadLine stel je geel in: tekst die de gebruiker intypt, krijgt de voorgrondkleur die op dat moment ingesteld is. Laat de student dat zelf ontdekken door te experimenteren, zeg het niet meteen.

### Valkuilen

- Proberen de variabele een kleur te geven in plaats van de console.
- De kleur pas na de ReadLine instellen, waardoor de invoer nog cyaan is.
- Na de ReadLine vergeten terug op cyaan te zetten.
- ResetColor vergeten op het einde.

## Woordenslinger

### Aanpak

Per woord de kleur instellen en dan het woord tonen. Binnen een lijn gebruik je Write, en enkel voor het laatste woord van de lijn WriteLine. Op het einde de kleuren resetten. In de uitbreiding (de Stroop-test) krijgt elk woord net een andere kleur dan wat het woord zegt, met een spatie tussen de woorden.

### Valkuilen

- Overal WriteLine gebruiken, waardoor elk woord op een eigen lijn staat.
- De kleur maar één keer instellen voor de hele lijn.
- De tweede lijn maar drie woorden geven: het zijn er vier.
- ResetColor vergeten op het einde.

## Tekening

### Aanpak

De tekening bestaat volledig uit spaties met een gekleurde achtergrond. Het schema in de opgave toont per lijn welke spatie welke kleur heeft. Per stukje van een rij stel je de BackgroundColor in en toon je het juiste aantal spaties met Write, en op het einde van elke rij een WriteLine. Laat de student de tekening eerst op ruitjespapier natellen: hoeveel rijen, en per rij hoeveel vakjes van elke kleur. Twee spaties naast elkaar zijn ongeveer even breed als één lijn hoog. In deel 2 tekent hij de Italiaanse vlag (groen, wit, rood, elke band 4 spaties breed, 4 lijnen hoog), in deel 3 een eigen tekening.

### Valkuilen

- Tekens gebruiken in plaats van spaties, waardoor de vakjes niet vol lijken.
- Vergeten dat een rij pas eindigt met een WriteLine.
- De achtergrondkleur niet terugzetten voor het volgende stuk van dezelfde rij.
- ResetColor vergeten, waardoor de hele console gekleurd blijft.
- Een lus willen gebruiken voor de herhaling. Die kent hij nog niet: hier mag het gewoon herhaald worden.

## Regenboog Ticket

### Nota

Dit is een Final Essentials: alles van het hoofdstuk komt hier samen. De prijs wordt gewoon als tekst ingelezen, want rekenen kan hij nog niet.

### Aanpak

Eerst de drie vragen stellen en de antwoorden bewaren. Daarna het ticket tonen. De streepjeslijn komt twee keer voor, dus die mag in een eigen variabele. Op de drie middelste lijnen toont hij eerst het label met Write in de gewone kleur, stelt dan de kleur in, toont de waarde met WriteLine en zet de kleuren terug met ResetColor. Achter de prijs komt het woord euro, bv. met string interpolatie.

### Valkuilen

- De kleuren instellen na het tonen van de lijn.
- De achtergrondkleur van de streepjeslijnen laten staan voor de gekleurde tekstlijnen.
- De achtergrond zelf op zwart zetten in plaats van ResetColor te gebruiken. Dat vraagt de opgave uitdrukkelijk niet te doen.
- Het label mee inkleuren, terwijl enkel de waarde gekleurd moet zijn.
- ResetColor vergeten op het einde.
- De prijs als getal proberen in te lezen. Alles is hier nog tekst.

## Muziek

### Nota

Deze oefening hoort niet bij de leerstof en is puur voor de lol. Console.Beep met twee getallen werkt enkel op Windows. Op een Mac of onder Linux crasht het programma met een PlatformNotSupportedException: daar slaat de student deze oefening over.

### Aanpak

Console.Beep krijgt twee getallen mee: de toonhoogte en hoelang die duurt. Enkele beeps na elkaar vormen een deuntje. Dat plakt hij bovenaan een eerder gemaakte oefening.

### Valkuilen

- De twee getallen omwisselen, waardoor er een heel korte of een oneindig lange toon komt.
- De beeps onderaan zetten in plaats van bij het opstarten.
