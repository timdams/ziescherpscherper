<!--
  Coach-data voor de oefeningen in oefeningen/3_tekst/.
  Zie oefeningen/_coach/_prompt.md voor het sjabloon en scripts/coach-prompt.mjs voor de werking.
-->

# Leerstof

## Kent al

Hoofdstuk 1, de eerste stappen:

- Console.WriteLine en Write, Console.ReadLine, de kleuren van de console en Console.ResetColor

Hoofdstuk 2, de basisconcepten van C#:

- Datatypes: int, long, double, float, decimal, char, string, bool. Variabelen, camel casing, const en Console.Clear
- Rekenen met + - * / en %, de volgorde van bewerkingen, en de gehele deling die alles na de komma afkapt

Hoofdstuk 3, tekst gebruiken in code:

- Een char is één teken tussen apostrofs, een string is tekst tussen aanhalingstekens
- Twee chars optellen geeft een getal, want intern zit er een Unicode-nummer achter
- Escape characters: \n voor een nieuwe lijn, \t voor een tab, \" voor een aanhalingsteken, \\ voor een backslash, \uXXXX voor een Unicode-teken
- Een verbatim string met @ ervoor, waarin escape characters gewoon tekst blijven. Handig voor paden en tekst over meerdere lijnen
- String interpolatie met $"..." en formattering met een dubbelpunt, bv. {getal:F2} voor twee cijfers na de komma of {bedrag:C} voor een geldbedrag
- De +-operator om stukken tekst aan elkaar te plakken, vooral om één lange tekst over meerdere codelijnen te splitsen
- .Length op een string om te weten hoeveel tekens ze telt
- De Environment-bibliotheek: MachineName, UserName, ProcessorCount, WorkingSet, Is64BitOperatingSystem

## Kent nog niet

- Invoer omzetten naar een getal. Convert, Parse en casting komen in het volgende hoofdstuk, dus getallen staan hier nog hard in de code
- De Math-bibliotheek, afronden en Random
- De string-methoden zoals Substring, IndexOf, Replace, ToUpper of Split. Die komen pas bij de arrays
- if, else, switch, vergelijkingen en logische operatoren
- Lussen: while, do while, for
- Zelf methoden schrijven, arrays, klassen, en alles wat daarna komt

# Oefeningen

## Mad Libs

### Nota

De opgave vraagt uitdrukkelijk string interpolatie. Plakken met + is hier geen goede oplossing.

### Aanpak

Vier vragen, vier antwoorden, elk in een eigen variabele met een naam die zegt wat erin zit. Daarna één zin waarin de vier variabelen op de juiste plaats staan.

### Valkuilen

- De antwoorden in de verkeerde volgorde in de zin zetten. Adjectief komt voor het zelfstandig naamwoord.
- De dollar voor de string vergeten, waardoor de accolades letterlijk op het scherm komen.
- Alles met + aan elkaar plakken terwijl de opgave interpolatie vraagt.

## Dertien in een dozijn

### Aanpak

Twee berekeningen op dezelfde twee getallen: de gehele deling geeft het aantal volle dozen, de modulo geeft wat overblijft. Beide resultaten bewaar je in een eigen variabele en toon je in één zin.

### Valkuilen

- Met doubles werken, waardoor er 15,5 dozen uitkomen. Hier is de gehele deling net wat je wil.
- Deling en modulo omwisselen.
- De doosgrootte opnieuw intypen in de berekening in plaats van de const te gebruiken, waardoor het programma niet meer werkt met een andere doosgrootte.
- Het antwoord zelf uitrekenen en als vaste tekst tonen.

## Escape conversatie

### Aanpak

Alles moet in één string passen, dus de opmaak komt volledig van escape characters: \n voor elke nieuwe lijn, \t voor het inspringen van Bob, en \" voor de aanhalingstekens rond wat er gezegd wordt. De namen komen uit de twee variabelen via interpolatie.

### Valkuilen

- Extra WriteLine-regels toevoegen. De opgave laat enkel de tekst tussen de aanhalingstekens wijzigen.
- Gewone aanhalingstekens gebruiken binnen de string, waardoor de string vroegtijdig stopt en de compiler klaagt.
- \n en \t verwarren.
- Vergeten dat de dollar voor de string moet blijven staan om de namen erin te krijgen.

## Systeem informatie

### Nota

Onderaan deze oefening staat nog een PRO-uitbreiding over harde schijven. Die hoort niet bij de leerstof; helpt de student daarmee, hou het dan bij het idee en niet bij de details.

### Aanpak

Elke waarde van Environment eerst in een variabele met het juiste type bewaren, en pas daarna tonen. Bytes omrekenen naar megabytes is twee keer delen door 1024, naar gigabytes drie keer. De opmaak met twee cijfers na de komma doe je met de formattering in de interpolatie, niet met afronden.

### Valkuilen

- Delen door gehele getallen, waardoor de omrekening naar GB nul geeft. Er moet een kommagetal in de deling zitten.
- Het geheugen in een int proberen te steken. WorkingSet is een long.
- F2 buiten de accolades zetten, of denken dat je daarvoor moet afronden.
- De tabs vergeten waardoor de uitvoer niet inspringt zoals in het voorbeeld.

## Unicode Art

### Nota

Een speelse oefening: de tekening komt van een online generator, de student moet ze enkel in zijn programma krijgen.

### Aanpak

Zo een tekening staat over meerdere lijnen en zit vol tekens die C# anders als escape character leest. Een verbatim string met @ ervoor lost beide op in één keer.

### Valkuilen

- Een gewone string gebruiken, waardoor elke backslash een fout geeft.
- Per lijn een aparte WriteLine schrijven en zo de tekening uit de hand laten lopen.
- Aanhalingstekens in de tekening zelf, die in een verbatim string verdubbeld moeten worden.

## Boardingpass

### Nota

Dit is een Final Essentials: alles van het hoofdstuk komt samen.

### Aanpak

Eerst de vier vragen stellen en de antwoorden bewaren, dan het scherm leegmaken, en dan de pass tonen. De uitlijning komt volledig van \t na de dubbele punten, niet van zelf spaties tellen. Onderaan komt de gebruikersnaam uit Environment.

### Valkuilen

- Spaties tellen in plaats van tabs gebruiken, waardoor de uitlijning scheef loopt zodra een naam langer is.
- Clear zetten voor de antwoorden ingelezen zijn.
- Vergeten dat een lange lijn sterretjes ook gewoon een variabele mag zijn.
- Environment.UserName tussen aanhalingstekens zetten, waardoor de tekst zelf verschijnt.

## Shell-starter

### Nota

Een PRO-oefening met code die pas veel later in de cursus uitgelegd wordt. De student hoeft niet te begrijpen wat elke lijn doet.

### Aanpak

De voorbeeldcode uit de opgave overnemen en enkel de twee lijnen wijzigen die zeggen welk programma gestart wordt en met welke argumenten. Die twee kan hij aan de gebruiker vragen.

### Valkuilen

- Het commando en de argumenten in één lijn samen proberen mee te geven.
- Denken dat de output tijdens het uitvoeren verschijnt. Ze komt pas op het einde.
