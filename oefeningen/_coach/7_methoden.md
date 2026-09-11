<!--
  Coach-data voor de oefeningen in oefeningen/7_methoden/ (week 1 en week 2).
  Zie oefeningen/_coach/_prompt.md voor het sjabloon en scripts/coach-prompt.mjs voor de werking.
-->

# Leerstof

## Kent al

Hoofdstuk 1 tot en met 6, de basis:

- Console.WriteLine en Write, Console.ReadLine, Console.Clear, de kleuren van de console en Console.ResetColor
- Datatypes, variabelen, const, rekenen, % (modulo), de gehele deling die afkapt, ++ en +=
- Escape characters, string interpolatie en formattering zoals {getal:F2}, .Length op een string
- Casting, int.Parse en double.Parse, de Math-bibliotheek, afronden, Random. Een char is intern een getal: (char)rng.Next('a', 'z' + 1) geeft een letter
- if, else if, else, de relationele en logische operatoren, De Morgan, de ternaire operator, scope, switch, enum en Enum.Parse
- while, do while, for, geneste loops, invoercontrole met een lus. continue mag niet, break enkel in een switch of bij zoek-en-stop
- Debuggen met breakpoints, Step Over en het venster Locals

Hoofdstuk 7, methoden:

- Een methode schrijven: static, een returntype, een naam en een parameterlijst. Alle methoden staan in class Program, naast Main. Een methode in een methode (een lokale functie) kost 3 punten
- De huisregel van de oefeningen: de naam zegt wat de methode doet. Enkel een methode die Toon... of Vraag... heet, mag WriteLine of ReadLine gebruiken. Alle andere krijgen hun gegevens via parameters en geven hun resultaat terug met return
- void betekent dat er niets teruggegeven wordt. Elk ander returntype vraagt een return op elk pad, anders geeft de compiler "not all code paths return a value"
- Zodra return bereikt wordt, stopt de methode. In een void-methode kan dat met return; zonder waarde, en return; in Main stopt het programma
- Het resultaat van een methode moet je opvangen (in een variabele of rechtstreeks gebruiken), anders gaat het verloren
- Parameters worden by value doorgegeven: de methode werkt met een kopie. De naam van de parameter hoeft niet dezelfde te zijn als die van de variabele bij de aanroep
- Methoden kunnen elkaar oproepen. Een methode doet één ding; kan je ze niet in één zin uitleggen, splits ze dan
- VraagInt(string vraag) uit de leerstof, als voorbeeld van een herbruikbare vraagmethode
- Commentaar met /// boven een methode, IntelliSense die de signatuur toont
- Named arguments, optionele parameters (altijd achteraan, enkel van achter naar voor weglaten zonder namen), method overloading (zelfde naam, andere parameterlijst). Een aanroep die op twee versies even goed past, geeft "the call is ambiguous"
- Debuggen met step-in (F11) om in een methode te springen

## Kent nog niet

- Arrays en lijsten. Een methode geeft altijd één enkele waarde terug
- ref, out en tuples. int.TryParse met out kwam enkel in een tip voorbij en wordt in de oefeningen niet gebruikt
- Klassen, objecten en instantievariabelen. Er zijn geen variabelen buiten Main of buiten een methode
- LINQ, foreach, try en catch, recursie, en alles wat daarna komt

# Oefeningen

## Stel jezelf voor

### Nota

Twee delen: eerst zonder parameters, dan met.

### Aanpak

Deel 1: een void-methode zonder parameters die één zin toont, en een aanroep in Main. Deel 2: dezelfde methode krijgt drie parameters, met het juiste type voor elk (tekst, geheel getal, tekst), en de zin gebruikt die parameters via string interpolatie.

### Valkuilen

- De methode schrijven maar nooit oproepen in Main.
- De methode in Main zetten in plaats van ernaast.
- Bij de aanroep de parameters in een andere volgorde meegeven dan in de signatuur.
- Een returntype string kiezen en dan toch WriteLine in de methode doen.

## Opwarmers

### Nota

Zeven korte methoden met een gegeven signatuur. Vraag eerst aan welke de student bezig is. Enkel ToonOnevenNummers toont iets.

### Aanpak

Voor elke methode staat de signatuur er al: wat binnenkomt en wat terug moet. Schrijf de inhoud en test in Main met een paar waarden. BerekenOmtrek en BerekenOppervlakte roepen zelf BerekenStraal op, zodat de straal maar op één plaats berekend wordt. IsEven kan de vergelijking met modulo meteen teruggeven.

### Valkuilen

- Het resultaat in de methode tonen in plaats van het terug te geven.
- De invoer in de methode vragen in plaats van ze als parameter te krijgen.
- De straal opnieuw berekenen in de omtrek en de oppervlakte in plaats van BerekenStraal op te roepen.
- Bij een kommagetal een int als returntype nemen.
- Bij ToonOnevenNummers een return proberen terwijl het returntype void is.

## Grootste methode

### Nota

Twee delen. In deel 2 wordt de methode herschreven met Grootste voor twee getallen uit de Opwarmers. Overloading komt pas in week 2, daarom heet de versie voor drie getallen hier GrootsteVanDrie.

### Aanpak

Deel 1: vergelijk de getallen met if en geef het grootste terug; zorg dat er op elk pad een return is en test met gelijke getallen. Deel 2: het grootste van drie is het grootste van (het grootste van de eerste twee) en het derde. Dat is één aanroep van Grootste in een andere.

### Valkuilen

- Met > vergelijken in plaats van >=. Bij 9, 9 en 5 is dan geen van beide tests waar, en komt het derde getal (5) terug.
- "not all code paths return a value" krijgen omdat onderaan een return ontbreekt.
- In deel 2 de vergelijkingen opnieuw uitschrijven in plaats van Grootste op te roepen.

## Rekenmachine

### Nota

Drie delen: de vier methoden, dan een menu, dan een geheugen. Vraag aan welk deel de student bezig is.

### Aanpak

Deel 1: vier methoden van één lijn, elk met twee double-parameters en een double terug. Deel 2: een do while in Main met een menu, twee getallen inlezen, en een switch die de juiste methode oproept en het resultaat toont. Delen door nul vang je af in Main voor je Deel oproept. Deel 3: een variabele geheugen in Main die op 0 start; elke bewerking roept een methode op met het geheugen en het nieuwe getal, en het resultaat gaat terug in het geheugen.

### Valkuilen

- De getallen in de methoden vragen of het resultaat in de methoden tonen.
- In deel 3 de methode oproepen zonder het resultaat terug in geheugen te stoppen. Dan gebeurt er niets.
- Het geheugen binnen de lus declareren, waardoor het elke ronde op 0 staat.
- Een variabele buiten Main willen maken voor het geheugen. Dat is niet nodig en nog niet gezien.
- De keuze q niet in de lusvoorwaarde opnemen.

## Methodenpuzzel

### Nota

Een puzzel: de student zet gegeven lijnen in de juiste volgorde, voegt accolades toe en zoekt twee indringers. Geef nooit de volgorde of de indringers. Vraag welke lijn de methode begint, welke Main begint, en wat een methode met returntype void wel en niet mag.

### Aanpak

Eerst de twee signaturen herkennen: welke methode geeft iets terug, en welke is Main? Daarna per methode de lijnen die erin horen. Voor de indringers: kan een void-methode return gemiddelde bevatten? En waar komt de waarde van som vandaan als het een parameter is?

### Valkuilen

- De void-signatuur kiezen omdat ze op Main lijkt.
- Denken dat de methode boven Main moet staan.
- De ReadLine laten staan omdat het programma dan "ook werkt".

## Voorspel de uitvoer

### Nota

Een code-lees-oefening. De student schrijft eerst op papier wat er verschijnt en controleert daarna, bij voorkeur met step-in (F11). Geef nooit de uitvoer, ook niet gedeeltelijk. Vraag per aanroep wat er in de methode gebeurt en wat er terugkomt.

### Aanpak

Aanroep per aanroep volgen: welke methode roept welke op, en in welke volgorde verschijnt er iets? Bij ZetDubbel: werkt de methode met de variabele uit Main of met een kopie? Bij Test: wat gebeurt er met de code na een return? Bij de kale aanroep van Kwadraat: waar gaat het resultaat naartoe?

### Valkuilen

- Denken dat een parameter met dezelfde naam als een variabele in Main die variabele wijzigt.
- Denken dat de code na een return nog uitgevoerd wordt.
- Denken dat een methode die iets teruggeeft dat ook toont.
- Write en WriteLine door elkaar halen in de eerste lijn.

## Stevens methoden

### Nota

Een zoek-de-fout-oefening met stagiair Steven. Geef de fouten nooit. In deel 1 mag je uitleggen wat een foutmelding betekent, maar niet wat er in deze code aan moet veranderen. In deel 2 vraag je wat er op het scherm komt en wat er teruggegeven wordt, en of dat hetzelfde is.

### Aanpak

Deel 1: plak elk stukje apart in een project en lees de Error List. Welk pad in Beoordeel eindigt zonder return? Wat geeft een void-methode terug? Welk woord staat voor elke andere methode, maar niet voor Verdubbel? En waar staat ToonWelkom ten opzichte van Main? Deel 2: waar komt de waarde van getal vandaan in Kwadraat? Wat toont BerekenKorting, en wat geeft ze terug?

### Valkuilen

- Denken dat stukje d fout is omdat het niet compileert. Het compileert wel, maar kost punten.
- In b de fout oplossen door het returntype te veranderen maar de WriteLine in de methode te laten staan.
- In deel 2 de ReadLine laten staan en in Main een andere waarde meegeven.
- Denken dat een methode die iets toont, dat ook teruggeeft.

## Vraagmethoden

### Nota

Methoden die Vraag... heten, mogen WriteLine en ReadLine gebruiken: dat is de uitzondering op de huisregel.

### Aanpak

Deel 1: VraagInt en VraagTekst krijgen de vraag als parameter, tonen ze, lezen het antwoord in en geven het terug. Deel 2: VraagIntTussen roept VraagInt op in een do while die blijft vragen zolang het getal buiten de grenzen ligt; de grenzen komen als parameters binnen. Pas na de lus geef je het getal terug.

### Valkuilen

- De vraag in de methode vastleggen in plaats van ze als parameter mee te krijgen.
- In VraagIntTussen de invoer zelf opnieuw schrijven in plaats van VraagInt op te roepen.
- De lusvoorwaarde omdraaien: de lus gaat door zolang de invoer fout is.
- Het getal teruggeven binnen de lus, na de eerste poging.

## Paswoord generator

### Aanpak

Een methode met de lengte als parameter en een string als returntype. Binnen de methode één Random, een lege string en een for van lengte rondes. Elke ronde kiest een willekeurig getal of het een cijfer, een kleine letter of een hoofdletter wordt, en voegt dat teken toe met +=. Een letter krijg je door een willekeurig getal tussen de Unicode-waarden van twee letters naar char te casten.

### Valkuilen

- Het paswoord in de methode tonen in plaats van het terug te geven.
- De bovengrens van Next vergeten: 'z' zelf komt pas mee met 'z' + 1.
- Het getal niet naar char casten, waardoor er cijfers in plaats van letters in het paswoord komen.
- De Random in de lus aanmaken. Dat werkt, maar één generator voor de hele methode is de nette manier.

## Netflix

### Nota

Twee delen. In deel 2 wordt Main herschreven met VraagTekst en VraagInt uit de oefening Vraagmethoden. Het programma stoppen doe je met return; in Main, zoals uitgelegd in de leerstof bij return.

### Aanpak

Vier methoden met een gegeven signatuur: één toont iets, drie geven iets terug. Main volgt het scenario stap voor stap. MagKijken beslist of het programma verder mag; zo niet, dan toon je de melding en stop je met return. Deel 2: elk paar WriteLine en ReadLine wordt één aanroep van een vraagmethode.

### Valkuilen

- In MagKijken zelf de melding tonen in plaats van true of false terug te geven.
- Een if met return true en return false schrijven waar de vergelijking zelf al volstaat. Dat is geen fout, wel langer.
- Na de if met return nog een else schrijven. Niet fout, wel overbodig.
- Het resultaat van BerekenKijktijd of GenereerTitel niet opvangen of tonen.

## Armstrong

### Nota

Een PRO-oefening die de code van Armstrong nummer uit hoofdstuk 6 opknipt in drie methoden.

### Aanpak

TelCijfers deelt het getal door 10 tot er niets overblijft en telt de delingen. IsArmstrong roept TelCijfers op, pelt de cijfers af met % 10 en / 10, telt de machten op en geeft de vergelijking met het getal terug. ToonArmstrongNummers loopt over alle getallen en toont die waarvoor IsArmstrong waar is.

### Valkuilen

- In IsArmstrong het getal zelf afpellen en het dan niet meer hebben voor de vergelijking.
- Denken dat TelCijfers het getal van de aanroeper kapotmaakt. De parameter is een kopie.
- Math.Pow geeft een double; er is een cast nodig.
- In ToonArmstrongNummers de Armstrong-test opnieuw uitschrijven in plaats van IsArmstrong op te roepen.

## A.I. assisted oefeningen generator

### Nota

Dit is geen oefening maar een prompt waarmee de student zelf extra oefeningen kan laten maken. Vraagt hij hier iets over, help hem dan de gegenereerde opgave te begrijpen of te vereenvoudigen, en coach daarna op die opgave zoals op elke andere.

### Aanpak

De prompt uit de opgave gebruiken en het onderwerp vervangen. Levert de A.I. toch iets op met arrays of andere leerstof die nog niet gezien is, laat de student dan zelf benoemen welk stuk dat is en hoe hij de opgave kan inkorten.

### Valkuilen

- Een gegenereerde opgave maken die stiekem arrays, lijsten of klassen nodig heeft.
- De gegenereerde oplossing overnemen in plaats van de opgave.

## Film Default

### Aanpak

Eerst de enum met Onbekend erbij, binnen class Program. Dan een void-methode met drie parameters, waarvan de laatste twee een standaardwaarde krijgen in de signatuur. In Main vier aanroepen: met drie, twee en één argument, en één met een named argument voor het genre zonder duur.

### Valkuilen

- De optionele parameters vooraan zetten.
- Het genre meegeven zonder de duur en zonder naam, waardoor het genre in de int-parameter terechtkomt en het niet compileert.
- "minuten" vergeten in de uitvoer.
- De enum binnen Main zetten.

## Opwarmers met geavanceerde methoden

### Nota

Drie opwarmers uit week 1 krijgen een optionele parameter of een overload.

### Aanpak

Macht krijgt een exponent met standaardwaarde 2 en rekent met een lus. ToonOnevenNummers krijgt een optionele startwaarde en toont enkel de oneven getallen vanaf daar. Grootste bestaat in twee versies; de versie met drie parameters roept die met twee op.

### Valkuilen

- De optionele parameter vooraan zetten.
- Bij ToonOnevenNummers met vanaf 10 beginnen bij 10 en in stappen van 2 tellen, waardoor enkel even getallen verschijnen.
- De twee versies van Grootste dezelfde parameterlijst geven, of enkel in returntype laten verschillen.
- In de versie met drie parameters de vergelijkingen opnieuw schrijven.

## Voorspel de uitvoer: optioneel en overload

### Nota

Een code-lees-oefening. Geef nooit welke versie wordt uitgevoerd, wat er verschijnt of welke lijn niet compileert. Vraag per aanroep in welke parameter elke waarde terechtkomt, en welke versies van een overloaded methode passen.

### Aanpak

Per lijn: bij een optionele parameter, welke parameter vult een waarde zonder naam? Bij twee strings: kijkt de compiler naar de betekenis of enkel naar het type? Bij Halveer: welk type heeft 7, 7.0 en 7f, en welke versie past? Bij ToonScore: passen beide versies, en even goed?

### Valkuilen

- Denken dat een waarde zonder naam in de parameter terechtkomt die de programmeur bedoelde.
- Denken dat de compiler omgewisselde strings opmerkt.
- Vergeten dat de int-versie van Halveer een gehele deling doet.
- Denken dat bij twijfel de eerste versie wint.

## Roulette

### Nota

Het doel is aantonen dat gokken verlies oplevert. De getallen in het voorbeeld hangen van het toeval af.

### Aanpak

SimuleerRoulette: een Random, een kapitaal dat start op het startkapitaal, een lus over het aantal rondes, per ronde twee willekeurige getallen vergelijken en het kapitaal aanpassen, en op het einde het kapitaal teruggeven. Het aantal rondes is optioneel. ToonResultaat berekent het verschil en toont het in de juiste kleur. In Main één aanroep zonder aantal rondes, daarna een lus die het aantal rondes telkens met tien vermenigvuldigt.

### Valkuilen

- Het resultaat in SimuleerRoulette tonen in plaats van het terug te geven.
- De optionele parameter nooit weglaten, terwijl de opgave één aanroep zonder vraagt.
- Next(0, 59) schrijven, waardoor 59 nooit valt.
- Vier bijna gelijke lijnen onder elkaar schrijven in plaats van een lus. Dat is onnodige code.
- ResetColor vergeten na het gekleurde verschil.

## Helm's Deep opgekuist

### Nota

De student vertrekt van zijn eigen oplossing van De slag om Helm's Deep uit hoofdstuk 6. De uitvoer mag niet veranderen.

### Aanpak

Zoek eerst de stukken die meerdere keren voorkomen: een vraag stellen en het antwoord inlezen, punten toekennen per vijand, een tekst in kleur tonen en de kleur terugzetten. Elk stuk wordt een methode met een duidelijke naam. PuntenVoorVijand geeft een int terug en toont niets. ToonGekleurd krijgt de kleur als optionele parameter. Test na elke methode of het programma nog hetzelfde doet.

### Valkuilen

- In PuntenVoorVijand ook de melding voor een onbekende vijand tonen. Die hoort in Main.
- ResetColor in ToonGekleurd vergeten.
- Een methode maken die drie dingen doet, zoals vragen, rekenen en tonen. Kan je ze niet in één zin uitleggen, splits ze dan.
- Variabelen zoals de scores buiten Main zetten om ze in methoden te kunnen gebruiken. Geef ze mee als parameter of laat ze in Main.

## Havenbeheer

### Nota

Dit is de Final Essentials van het hoofdstuk: optionele parameters, named arguments en overloading komen samen. Het programma stoppen doe je met return; in Main.

### Aanpak

Eerst de methoden, elk met het juiste returntype: ControleerDiepgang geeft een bool, de twee versies van BerekenHavengeld een double, BerekenTotaleKost een int. In Main eerst kade 1 testen met de standaardwaarde, dan het Deurganckdok met een named argument, en anders stoppen met return. Het type van de variabele die je meegeeft, bepaalt welke versie van BerekenHavengeld draait.

### Valkuilen

- Het aantal containers als double inlezen, waardoor de versie voor bulk gekozen wordt en de prijs niet klopt.
- De twee versies van BerekenHavengeld dezelfde parameterlijst geven.
- De kadediepte altijd meegeven, waardoor de standaardwaarde nooit gebruikt wordt.
- De 30% bij het havengeld tellen in plaats van erbovenop te rekenen.
- Het rapport of de berekening in de methoden tonen.

## Hoe ver geraak je?

### Nota

Een bonus met externe uitdagingen op edabit.com. Veel ervan vragen arrays of andere leerstof die nog niet gezien is; de opgave zegt die over te slaan.

### Aanpak

Help de student een uitdaging kiezen die enkel methoden, beslissingen en lussen vraagt. Werk dan zoals bij elke andere oefening: eerst de signatuur, dan de inhoud.

### Valkuilen

- Een uitdaging kiezen met [] in de signatuur.
- De oplossing van de site bekijken voor het zelf geprobeerd is.
