<!--
  Coach-data voor de oefeningen in oefeningen/3_tekst/.
  Zie oefeningen/_coach/_prompt.md voor het sjabloon en scripts/coach-prompt.mjs voor de werking.
-->

# Leerstof

## Kent al

Hoofdstuk 1, de eerste stappen:

- Console.WriteLine en Write, Console.ReadLine, de kleuren van de console en Console.ResetColor

Hoofdstuk 2, de basisconcepten van C#:

- Datatypes: int, long, double, float, decimal, char, string, bool. Variabelen, camel casing, const in hoofdletters
- Rekenen met + - * / en %, de volgorde van bewerkingen, en de gehele deling die alles na de komma afkapt
- De verkorte notaties zoals ++ en +=
- Uit de oefeningen: Console.Clear, met een lege Console.ReadLine als pauze ervoor

Hoofdstuk 3, tekst gebruiken in code:

- Een char is één teken tussen apostrofs, een string is tekst tussen aanhalingstekens
- Twee chars optellen geeft een getal, want intern zit er een Unicode-nummer achter: 'A' + 'B' geeft 131
- De +-operator op strings en getallen werkt van links naar rechts: "1" + 1 + 1 geeft 111, 1 + 1 + "1" geeft 21
- Escape characters: \n voor een nieuwe lijn, \t voor een tab (naar de volgende tabstop, om de 8 posities), \" voor een aanhalingsteken, \' voor een apostrof, \\ voor een backslash, \uXXXX voor een Unicode-teken en \UXXXXXXXX voor een emoji
- Een verbatim string met @ ervoor, waarin escape characters gewoon tekst blijven. Handig voor paden en tekst over meerdere lijnen. Een aanhalingsteken schrijf je daarin als ""
- Een raw string literal met """ voor tekst over meerdere lijnen die mag inspringen met de rest van de code
- Console.OutputEncoding = System.Text.Encoding.UTF8 als allereerste lijn in Main, zodat tekens zoals €, ♥ en emoji juist verschijnen
- String interpolatie met $"..." en formattering met een dubbelpunt: F2, D5, E2, C voor een geldbedrag, en een masker zoals 0.00. Formatteren rondt af, het kapt niet af. Komma of punt en het muntteken hangen af van de landinstellingen van de pc
- De +-operator om één lange tekst over meerdere codelijnen te splitsen, met een $ voor elk stuk waarin een variabele staat
- .Length op een string om te weten hoeveel tekens ze telt. Een emoji telt voor 2
- De Environment-bibliotheek: UserName, MachineName, ProcessorCount, WorkingSet, Is64BitOperatingSystem en NewLine, en Environment.Exit om het programma meteen te stoppen met een exitcode

## Kent nog niet

- Invoer omzetten naar een getal. Convert, Parse en casting komen in het volgende hoofdstuk, dus getallen staan hier nog hard in de code
- De Math-bibliotheek, afronden met Math.Round en Random
- De string-methoden zoals Substring, IndexOf, Replace, ToUpper of Split. Die komen pas bij de arrays
- if, else, switch, vergelijkingen en logische operatoren
- Lussen: while, do while, for
- Zelf methoden schrijven, arrays, klassen, en alles wat daarna komt
- Process om een ander programma te starten. Dat staat enkel in de PRO-oefening Shell-starter

# Oefeningen

## Mad Libs

### Nota

Deel 1 vraagt uitdrukkelijk string interpolatie. In deel 2 mag de + enkel om de lange zin over drie codelijnen te splitsen; elk stuk met een variabele is dan zelf een interpolatie.

### Aanpak

Vier vragen (in deel 2 vijf), elk antwoord in een eigen variabele met een naam die zegt wat erin zit. Daarna één zin waarin de variabelen op de juiste plaats staan. In deel 2 wordt die zin drie stukken met een + ertussen, en elk stuk met een variabele krijgt zijn eigen $. Het aantal letters komt van .Length.

### Valkuilen

- De antwoorden in de verkeerde volgorde in de zin zetten. Adjectief komt voor het zelfstandig naamwoord.
- De dollar voor de string vergeten, waardoor de accolades letterlijk op het scherm komen. In deel 2 gebeurt dat meestal bij het tweede of derde stuk: een $ geldt enkel voor het stuk dat erachter staat.
- Alles met + aan elkaar plakken in plaats van interpolatie te gebruiken.
- De spatie tussen twee stukken vergeten, waardoor twee woorden aan elkaar plakken.
- Het aantal letters zelf tellen en als vast getal typen.
- De aanhalingstekens rond de uitroep zonder backslash schrijven, waardoor de string te vroeg stopt.

## Char of string?

### Nota

Een code-lees-oefening: de student voorspelt eerst op papier. Geef de uitvoer nooit, ook niet van één lijn; vraag welk type elk stuk heeft en wat C# eerst uitrekent.

### Aanpak

Per lijn eerst kijken: staan er apostrofs (char), aanhalingstekens (string) of niets (getal)? Een char optellen met een char of een getal is rekenen met Unicode-waarden. Zodra er een string meedoet, wordt er geplakt, van links naar rechts.

### Valkuilen

- Denken dat '1' de waarde 1 heeft. Het is een teken met een eigen Unicode-waarde.
- Bij "1" + 1 + 1 denken dat C# eerst 1 + 1 uitrekent.
- Bij 1 + 1 + "1" vergeten dat de eerste + nog een gewone optelling is.
- Denken dat twee chars in een interpolatie ook een getal geven.

## Escape conversatie

### Aanpak

Deel 1: alles moet in één string passen, dus de opmaak komt volledig van escape characters: \n voor elke nieuwe lijn, \t voor het inspringen van Bob, en \" voor de aanhalingstekens rond wat er gezegd wordt. De namen komen uit de twee variabelen via interpolatie. Deel 2: met een @ ervoor werken escape characters niet meer. Een nieuwe lijn wordt een echte nieuwe lijn in de code, inspringen doe je met spaties, en een aanhalingsteken schrijf je twee keer.

### Valkuilen

- Extra WriteLine-regels toevoegen. De opgave laat enkel de tekst tussen de aanhalingstekens wijzigen.
- Gewone aanhalingstekens gebruiken binnen de string, waardoor de string vroegtijdig stopt en de compiler klaagt.
- \n en \t verwarren.
- Vergeten dat de dollar voor de string moet blijven staan om de namen erin te krijgen.
- In deel 2 \" blijven gebruiken. In een verbatim string is de backslash een gewoon teken, dus het aanhalingsteken erna sluit de string af.
- In deel 2 de tweede en derde lijn in de code laten inspringen zoals de rest van de code. Die spaties komen mee op het scherm.

## Stevens bestandspad

### Nota

Een zoek-de-fout-oefening met stagiair Steven. Geef de verklaring en de herstelde lijnen nooit; vraag wat er na elke backslash staat en welke escape characters de student kent.

### Aanpak

Elke backslash in een gewone string begint een escape character. Per backslash kijken welk teken erna komt: bestaat die combinatie, dan gebeurt er iets onverwachts op het scherm; bestaat ze niet, dan weigert de compiler. Herstellen kan met een @ voor de string of met een dubbele backslash.

### Valkuilen

- Denken dat de eerste versie in orde is omdat ze compileert.
- Denken dat hoofdletters of kleine letters in een pad het eigenlijke probleem zijn.
- De @ en de dubbele backslash allebei gebruiken, waardoor er twee backslashes op het scherm komen.
- Enkel de eerste backslash herstellen.

## Prijskaartje

### Aanpak

De prijs eerst berekenen en in een variabele bewaren. Bij het tonen krijgt elke waarde haar eigen formattering in de accolades: D6 voor het artikelnummer, een masker met drie nullen na de komma voor het gewicht, C voor de bedragen. De UTF-8-lijn staat bovenaan, en de labels lijnen uit met \t.

### Valkuilen

- D6 op een kommagetal gebruiken. Dx werkt enkel op gehele getallen.
- Het masker 0.00 gebruiken en zich afvragen waarom het gewicht maar twee cijfers na de komma heeft.
- Denken dat de formattering de waarde in de variabele verandert. Ze verandert enkel hoe het getal getoond wordt.
- De UTF-8-lijn vergeten, waardoor het euroteken een vraagteken wordt.
- Een punt of een dollarteken als fout zien. Dat hangt af van de landinstellingen van de pc.
- Het euroteken zelf in de tekst typen naast :C, waardoor het twee keer verschijnt.

## Tekens uit de tabel

### Aanpak

Drie tekens, drie manieren: met \u en vier hexadecimale cijfers, met kopiëren en plakken, en een emoji met \U en acht cijfers. De UTF-8-lijn staat als allereerste lijn in Main. Voor de laatste vraag helpt de voetnoot over surrogate pairs in het begin van het hoofdstuk.

### Valkuilen

- Bij \u meer of minder dan vier cijfers typen.
- Een emoji met \u proberen. Die code heeft meer dan vier cijfers.
- De UTF-8-lijn pas na de eerste WriteLine zetten.
- Een vierkantje op het scherm als fout in de code zien. Dat ligt aan het lettertype van de console.
- Verwachten dat .Length van een emoji 1 geeft.

## Unicode Art

### Nota

Een speelse oefening: de tekening komt van een online generator, de student moet ze enkel in zijn programma krijgen.

### Aanpak

Zo'n tekening staat over meerdere lijnen en kan tekens bevatten die C# anders als escape character leest. Een verbatim string met @ ervoor lost beide op in één keer. In deel 2 doet een raw string literal met """ hetzelfde, en mag de tekening mee inspringen met de rest van de code. De UTF-8-lijn staat bovenaan.

### Valkuilen

- Een gewone string gebruiken. Een onbekende combinatie zoals \_ geeft een compileerfout, maar \t of \n compileren wel en veranderen stilletjes de tekening.
- De UTF-8-lijn vergeten. Op een Belgische pc worden sommige blokjes dan zonder melding een ander blokje, en andere tekens een vraagteken.
- Met @ de tekening laten inspringen zoals de rest van de code, waardoor die spaties mee op het scherm komen.
- Bij de raw string de sluitende """ verder laten inspringen dan de tekening. Dat compileert niet.
- Aanhalingstekens in de tekening zelf, die in een verbatim string verdubbeld moeten worden.
- Per lijn een aparte WriteLine schrijven en zo de tekening uit de hand laten lopen.

## Systeem informatie

### Aanpak

Elke waarde van Environment eerst in een variabele met het juiste type bewaren, en pas daarna tonen. Bytes omrekenen naar megabytes is twee keer delen door 1024, naar gigabytes drie keer, en er moet een kommagetal in die deling zitten. Twee cijfers na de komma doe je met F2 in de interpolatie. Het inspringen doe je met \t.

### Valkuilen

- Delen door gehele getallen: geheugenInBytes / (1024 * 1024) is een gehele deling, en F2 toont dan altijd ,00. Voor GB geeft het zelfs 0.
- Het geheugen in een int proberen te steken. WorkingSet is een long.
- F2 buiten de accolades zetten, of denken dat je daarvoor moet afronden.
- Denken dat een andere uitvoer dan in het voorbeeld een fout is. Environment geeft de gegevens van de pc waarop het programma draait, en WorkingSet verschilt zelfs bij elke run.

## Nooddeur

### Nota

Een code-lees-oefening. Zeg niet welke lijnen verschijnen en ook niet welke exitcode er komt; vraag wat Environment.Exit doet met de lijnen die erna komen en wat het getal tussen de haakjes betekent.

### Aanpak

De code lijn per lijn volgen tot aan Environment.Exit. Daar stopt het programma meteen, met het getal tussen de haakjes als exitcode. Zonder Exit stopt het na de laatste lijn van Main, met exitcode 0.

### Valkuilen

- Denken dat de lijn na Exit toch nog uitgevoerd wordt.
- Denken dat de exitcode via een WriteLine op het scherm komt. Visual Studio toont ze zelf onderaan het consolevenster.
- Denken dat een programma zonder Exit geen exitcode heeft.

## Boardingpass

### Nota

Dit is een Final Essentials: alles van het hoofdstuk komt samen. De prijs staat als const in de code, want getallen inlezen kent hij nog niet.

### Aanpak

Eerst de vier vragen stellen en de antwoorden bewaren, dan het scherm leegmaken, en dan de pass tonen. De uitlijning komt van \t: een tab springt naar de volgende tabstop, om de 8 posities. Een kort label zoals Van: heeft dus twee tabs nodig, Passagier: maar één. De prijs toon je met :C, en daarvoor staat de UTF-8-lijn bovenaan. Onderaan komt de gebruikersnaam uit Environment.

### Valkuilen

- Na elk label één tab zetten, waardoor de waarden bij de korte labels op positie 8 beginnen en bij Passagier op positie 16.
- Spaties tellen in plaats van tabs gebruiken.
- Clear zetten voor de antwoorden ingelezen zijn.
- De UTF-8-lijn vergeten, waardoor het euroteken een vraagteken wordt.
- Vergeten dat een lange lijn sterretjes ook gewoon een variabele mag zijn.
- Environment.UserName tussen aanhalingstekens zetten, waardoor de tekst zelf verschijnt.

## Shell-starter

### Nota

Een PRO-oefening met code die in de cursus niet uitgelegd wordt. De student hoeft niet te begrijpen wat elke lijn doet. Ze werkt enkel op Windows.

### Aanpak

Deel 1: de voorbeeldcode uit de opgave overnemen en enkel de twee lijnen wijzigen die zeggen welk programma gestart wordt en met welke argumenten. Die twee vraagt hij aan de gebruiker. Deel 2: het tweede codevoorbeeld, met UseShellExecute op true en zonder de lijnen met Redirect, en het pad of webadres komt van de gebruiker.

### Valkuilen

- Het commando en de argumenten samen in één lijn meegeven.
- Denken dat de output tijdens het uitvoeren verschijnt. Ze komt pas op het einde.
- In deel 2 UseShellExecute op false laten staan. Dan kan Windows een document of website niet openen.
- In deel 2 de lijnen met Redirect laten staan. Die gaan niet samen met UseShellExecute.
- Denken dat een pad dat de gebruiker intypt een @ of dubbele backslashes nodig heeft. Dat geldt enkel voor tekst die in de code zelf staat.
