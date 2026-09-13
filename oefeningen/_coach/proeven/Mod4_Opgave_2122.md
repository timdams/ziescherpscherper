<!--
  Coach- en quoteergegevens voor oefeningen/EindeTests/Mod4/Opgave_2122.md.
  Formaat: zie _LEESMIJ.md in deze map.
-->
# Nota

Een vaardigheidsproef OOP met één opgave, Ultimate Beast Master: een hiërarchie van toestellen met een abstracte klasse en een interface, een klasse Parkoer met een lijst van toestellen, en een kort hoofdprogramma. De interface IDodelijk staat al in de opgave. Vraag eerst aan welke klasse of welk deel de student bezig is. Geef geen code, ook geen klassehoofdingen, constructors of propertydefinities die hij zo kan overnemen.

# Aanpak

Basisklassen: vertrek van het klassendiagram. Laat de student per klasse zeggen van wie ze erft, of ze IDodelijk heeft, welk teken ze gebruikt en hoe haar moeilijkheidsgraad bepaald wordt. Pas daarna Toestel: waarom is die klasse abstract, en waarom moet tekenChar protected zijn en niet private?

Trampoline en UltraTrampoline: de willekeurige waarde wordt één keer gekozen, in de constructor. Vraag waar die waarde bewaard wordt, en hoe UltraTrampoline aan diezelfde waarde geraakt zonder zelf een nieuwe te trekken.

Klimmuur en DeathWall: vraag hoe een DeathWall zijn 21 klimelementen doorgeeft aan de constructor van Klimmuur, en waar de bool terechtkomt die VeiligheidsActief later teruggeeft.

Parkoer: eerst de constructor, een lus die x keer een toestel kiest uit vier mogelijkheden met even veel kans. Dan VerwijderDodelijke: vraag hoe hij aan een toestel ziet dat het dodelijk is zonder naar de concrete klasse te kijken, en wat er gebeurt als je uit een lijst verwijdert terwijl je ze aan het overlopen bent. De moeilijkheidsgraad van het parkoers is een som over de lijst, en ToonParkoers gebruikt die.

Hoofdprogramma: vijf parkoersen in een lijst, ze tonen met een nummer, een keuze vragen, vragen of de dodelijke toestellen eruit moeten, en opnieuw tonen. Laat hem nadenken over hoe het nummer dat de gebruiker intypt overeenkomt met een index.

# Valkuilen

- Toestel niet abstract maken, of BerekenMoeilijkheidsgraad een lege body geven in plaats van abstract.
- In een kindklasse een nieuwe instantievariabele tekenChar declareren in plaats van die van Toestel in te stellen.
- De willekeurige waarde van Trampoline pas in BerekenMoeilijkheidsgraad trekken, waardoor ze bij elke oproep verandert.
- De bovengrens van Next verkeerd kiezen, waardoor 4 nooit voorkomt of 5 wel.
- In UltraTrampoline een nieuwe willekeurige waarde trekken in plaats van 10 op te tellen bij de waarde van Trampoline.
- In UltraTrampoline of DeathWall new gebruiken in plaats van override, waardoor Parkoer via een Toestel de verkeerde moeilijkheidsgraad krijgt.
- De 21 klimelementen van DeathWall niet via de constructor van Klimmuur doorgeven.
- In Parkoer testen op UltraTrampoline en DeathWall in plaats van op IDodelijk.
- Verwijderen uit de lijst binnen een foreach over diezelfde lijst (exception), of in een for vooruit verwijderen, waardoor van twee dodelijke toestellen naast elkaar er eentje blijft staan.
- BerekenMoeilijkheidsgraad in Parkoer public maken, terwijl de opgave private vraagt.
- De achtergrondkleur niet terugzetten, waardoor de rest van de console mee kleurt.
- Het parkoernummer van de gebruiker rechtstreeks als index gebruiken.
- Alle klassen in één bestand zetten (boete).

# Puntenverdeling

De originele proef had geen puntenverdeling. Deze is achteraf toegevoegd, op 20.

**Basisklassen (9 punten)**

- Toestel: abstract, protected instantievariabele tekenChar standaard o, methode Teken die het teken met Write toont, abstracte methode BerekenMoeilijkheidsgraad zonder parameters die een int teruggeeft. De interface IDodelijk staat in het project: 2
- Trampoline: erft van Toestel, default constructor die een willekeurige waarde van 1 tot en met 4 kiest en bewaart, tekenChar t, BerekenMoeilijkheidsgraad geeft die waarde terug: 1,5
- UltraTrampoline: erft van Trampoline, implementeert IDodelijk met VeiligheidsActief die altijd false is, tekenChar T, moeilijkheidsgraad 10 plus de waarde uit de constructor van Trampoline: 2
- Klimmuur: erft van Toestel, constructor met het aantal klimelementen als int, tekenChar m, moeilijkheidsgraad 3 bij een even aantal en anders 4: 1,5
- DeathWall: erft van Klimmuur, constructor met een bool, altijd 21 klimelementen, tekenChar M, implementeert IDodelijk en geeft de bool terug in VeiligheidsActief, moeilijkheidsgraad 5 met netten en anders 10: 2

**Parkoer (8 punten)**

- Een lijst van toestellen, en een constructor met twee parameters die x willekeurige toestellen toevoegt met gelijke kans per type, een Klimmuur met 10 tot en met 50 klimelementen, en een DeathWall met de bool y: 3
- VerwijderDodelijke: verwijdert alle toestellen die IDodelijk zijn, en enkel die: 2
- Private BerekenMoeilijkheidsgraad: de som van de moeilijkheidsgraden van alle toestellen in de lijst: 1
- ToonParkoers: alle toestellen na elkaar via Teken, rode achtergrond voor IDodelijk en groene voor de rest, daarna de totale moeilijkheidsgraad: 2

**Hoofdprogramma (3 punten)**

- Vijf Parkoer-objecten in een lijst, alle vijf getoond met hun nummer: 1
- Keuze van het parkoers vragen, vragen of de dodelijke toestellen weg moeten en dat dan doen, het gekozen parkoers opnieuw tonen: 2

# Beoordeling

- De interface IDodelijk staat letterlijk in de opgave. Overtypen levert niets op, ze gebruiken wel.
- Toestel: tekenChar moet protected zijn en standaard o. Wie tekenChar in een kindklasse opnieuw declareert, overschaduwt die van Toestel: dan toont Teken nog altijd o en werkt het teken van die klasse niet. BerekenMoeilijkheidsgraad moet abstract zijn, een virtual methode met een lege of vaste body is niet het maximum.
- Trampoline: de waarde wordt in de constructor gekozen en in een instantievariabele bewaard. Wie ze bij elke oproep van BerekenMoeilijkheidsgraad opnieuw trekt, doet niet wat gevraagd is. Een grens die 4 uitsluit of 5 toelaat, is niet het maximum.
- UltraTrampoline: het maximum enkel als de moeilijkheidsgraad de bestaande waarde van Trampoline hergebruikt, via base of via een protected instantievariabele. Een nieuwe willekeurige waarde van 11 tot en met 14 geeft dezelfde uitkomsten, maar is niet de waarde "die in de default constructor van de Trampoline werd berekend". VeiligheidsActief is een property zonder set die altijd false geeft.
- DeathWall: een constructor met een bool als parameter. De 21 klimelementen via de constructor van Klimmuur doorgeven is de logische aanpak. Zet de student ze via een extra default constructor of een protected instantievariabele en werkt de moeilijkheidsgraad, keur dat ook goed.
- Parkoer, constructor: een Klimmuur krijgt van 10 tot en met 50 klimelementen. Een grens die 50 uitsluit, is niet het maximum. Gelijke kans betekent één willekeurig getal met vier mogelijke uitkomsten per toestel. Een vaste volgorde of een verdeling die één type bevoordeelt, is niet het maximum. Een List van Toestel is de logische keuze, want VerwijderDodelijke haalt er elementen uit.
- De opgave noemt de parameters van die constructor zelf x en y. Gebruikt de student exact die namen, dan is dat geen boete voor naamgeving.
- VerwijderDodelijke: testen met is of as op IDodelijk is wat gevraagd is. Testen op UltraTrampoline en DeathWall werkt vandaag, maar zegt niets over "alle IDodelijke toestellen": hoogstens 1 van de 2. Verwijderen binnen een foreach crasht, en vooruit verwijderen in een for slaat het volgende element over: in beide gevallen werkt het onderdeel niet voor elk parkoers, dus hoogstens 0,5. Controleer met twee dodelijke toestellen naast elkaar. RemoveAll met een lambda valt onder "nog niet gezien": dan levert het verwijderen niets op.
- BerekenMoeilijkheidsgraad in Parkoer moet private zijn en roept BerekenMoeilijkheidsgraad van elk toestel op, zonder te kijken welk type het is. Public in plaats van private kost 0,5. Sum met een lambda is nog niet gezien: dan is dat onderdeel 0.
- ToonParkoers: de kleur hangt af van IDodelijk, ongeacht VeiligheidsActief. Een DeathWall met netten is dus ook rood. Het teken komt uit Teken van het toestel. De voorgrondkleur mag de student zelf kiezen.
- Hoofdprogramma: de opgave zegt niet hoeveel toestellen een parkoers heeft of welke waarde y krijgt. Een vaste waarde of een willekeurige waarde zijn allebei goed. De nummering mag bij 1 of bij 0 beginnen, zolang het getoonde nummer en de keuze overeenkomen. Controle op ongeldige invoer is niet gevraagd.
- Vijf keer dezelfde regels onder elkaar om de parkoersen te maken of te tonen, is de boete voor redundante code, geen puntverlies in het onderdeel.
- De boete voor klassen in hetzelfde bestand gaat over klassen. Staan Toestel, Trampoline en de rest samen in één bestand, dan is dat -3, één keer.
