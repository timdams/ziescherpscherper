<!--
  Coach-data voor de oefeningen in oefeningen/14_advancedovererving/.
  Wordt door scripts/coach-prompt.mjs samengevoegd met _prompt.md tot de prompt achter de
  coach-knop. De opgave zelf staat hier niet in: die haalt het script uit de pagina zelf.

  De titels onder "# Oefeningen" moeten overeenkomen met de titels van de oefeningen op de
  pagina. De aanduiding (*Essential*) mag je weglaten. Staat een oefening hier niet, dan
  krijgt ze geen knop en waarschuwt het script.
-->

# Leerstof

## Kent al

Hoofdstuk 1 tot en met 8, de basis:

- Console-invoer en -uitvoer, kleuren, variabelen en datatypes, const, rekenen, de gehele deling die afkapt (hoofdstuk 1 en 2)
- Tekst: escape characters, string interpolatie met $"..." en formattering zoals {getal:F2}, ToUpper en ToLower (hoofdstuk 3)
- Converteren met casting, int.Parse en Convert, de Math-bibliotheek, afronden, Random (hoofdstuk 4)
- if, else if, else, switch, een eigen enum (hoofdstuk 5)
- while, do while, for, geneste loops (hoofdstuk 6)
- Methoden: void en een returntype, parameters, method overloading (hoofdstuk 7)
- Arrays van gewone datatypes, .Length, overlopen met een for, string- en char-methoden (hoofdstuk 8)

Hoofdstuk 9 tot en met 13, klassen, collecties en overerving:

- Klassen in een apart bestand, objecten met new, properties in al hun vormen, private en public
- Reference types, objecten by reference doorgeven, null en NullReferenceException
- try, catch, meerdere catch-blokken, e.Message, throw new Exception("..."), finally
- Constructors, overloaded constructors, this(...), base(...), object initializer syntax, static leden
- Arrays en List<T> van objecten, foreach, var, Queue, Stack en Dictionary
- Overerving met een dubbele punt, protected, virtual en override, base.Methode() om de parent-versie op te roepen, en de constructorketen

Hoofdstuk 14, gevorderde overerving:

- Dat elke klasse in C# uiteindelijk van System.Object erft, ook int en bool
- De vier ingebouwde methoden die elk object daardoor al heeft: ToString(), Equals(), GetHashCode() en GetType(). De eerste drie zijn virtual en mag je overriden, GetType() niet
- ToString() overriden zodat Console.WriteLine(mijnObject) meteen iets zinnigs toont. Console.WriteLine roept die methode zelf op
- base.ToString() gebruiken in de child zodat de tekst van de parent niet herhaald hoeft te worden
- Equals() overriden om objecten op inhoud te vergelijken, en dan ook GetHashCode() overriden met HashCode.Combine(...)
- abstract op een klasse: je kan er geen object van maken, ze bestaat om van over te erven
- abstract op een methode of property: geen body, en de child moet ze verplicht overriden
- Het verschil tussen virtual (mag overschreven worden, heeft al code) en abstract (moet overschreven worden, heeft geen code)
- sealed als tegenpool van abstract: daar mag je net niet van overerven
- Een property overriden, en in de override base.Property gebruiken om de get of de set van de parent alsnog te doen
- Zelf een exception opwerpen met een bestaand type, bijvoorbeeld throw new DivideByZeroException("...")
- Een eigen exception-klasse maken door over te erven van Exception

## Kent nog niet

- Compositie en aggregatie als bewuste keuze, en het keyword this (hoofdstuk 15)
- De theorie achter polymorfisme, upcasting en late binding (hoofdstuk 16). Hij vult hier al een List<Dier> met childs en ziet dat de override draait; de uitleg komt later
- is en as, en downcasten naar het child-type (hoofdstuk 16). Zit er een DankMeme in een variabele van het type Meme, dan kan hij daar voorlopig enkel bij wat in Meme staat
- Interfaces en IComparable (hoofdstuk 17)
- Bestanden lezen of schrijven (hoofdstuk 18)
- LINQ en methoden zoals .Sum(), .Average(), .Max() of .Where(). Elke bewerking op een collectie schrijft hij zelf met een lus
- De ternaire operator ? :, switch expressions, pattern matching, lambdas
- TryParse en het keyword out, ref, nullable types (string?, int?), tuples, generics zelf schrijven
- Operator overloading (dat staat in de appendix, niet in de leerstof)

# Oefeningen

## Extra ToString aan bestaande projecten

### Nota

Twee kleine opdrachten op bestaande projecten: Pokémon en Bookmark. Vraag eerst aan welke van de twee de student bezig is en of die klasse nog werkt.

### Aanpak

ToString() bestaat al in System.Object, dus je schrijft er een override van met exact dezelfde signatuur: public override string ToString(). De methode geeft een string terug en toont niets zelf. Bij HiddenBookmark hergebruik je de tekst van de parent met base.ToString() en plak je er enkel het extra stukje aan.

### Valkuilen

- In ToString() Console.WriteLine gebruiken in plaats van de tekst terug te geven.
- override vergeten, waardoor Console.WriteLine(mijnObject) nog altijd de klassenaam toont.
- De methode ToonInfo of PrintInfo noemen. De naam ligt vast, anders roept Console.WriteLine ze niet op.
- Bij HiddenBookmark de hele tekst van de parent overtypen.
- Bij Pokémon een lange tekst opbouwen zonder \n, waardoor alles op één regel komt.

## Boek

### Nota

Drie dingen tegelijk: overerving, een property overriden, en een static methode die een nieuw object teruggeeft. Vraag eerst waar de student aan bezig is.

### Aanpak

Prijs is in Boek een full property, en om ze te kunnen overschrijven moet ze virtual zijn. In de childs staat in de get gewoon base.Prijs, en in de set de controle rond base.Prijs = value. Zo blijft de opslag op één plaats: de private instantievariabele van de parent blijft private. TelOp is static omdat het optellen bij geen van de twee boeken hoort: de methode krijgt twee boeken binnen, maakt een nieuw Boek en geeft het terug.

### Valkuilen

- De private instantievariabele van de parent in de child willen aanspreken. Die is private; via base.Prijs gaat het wel.
- virtual vergeten op Prijs.
- In de child een nieuwe instantievariabele voor de prijs beginnen bijhouden. Dan zijn er twee prijzen in één boek.
- TelOp als gewone methode schrijven, waardoor je er al een boek voor nodig hebt.
- In TelOp één van de twee bestaande boeken aanpassen in plaats van een nieuw object te maken.
- De ISBN als int declareren. Die past niet, vandaar long.
- ToString() in elke child opnieuw schrijven terwijl die van Boek volstaat.

## Money, money, money

### Nota

De eerste oefening met een abstracte klasse. Laat de student eerst uitleggen waarom je van Rekening geen object mag kunnen maken.

### Aanpak

Rekening is abstract: ze regelt het saldo (private instantievariabele, read-only property, en twee methoden die het aanpassen) en legt vast dat elke rekening een rente kan berekenen, zonder te zeggen hoe. BerekenRente is dus abstract, zonder body. De drie childs vullen elk hun eigen berekening in. ProRekening erft van SpaarRekening en niet van Rekening, en gebruikt base.BerekenRente() om de 2 procent op te halen voor hij zijn eigen bonus optelt.

### Valkuilen

- Een object van Rekening proberen te maken. Dat is precies wat abstract verhindert.
- Aan de abstracte methode toch een body geven met accolades. Een abstracte methode eindigt op een puntkomma.
- De klasse zelf niet abstract maken terwijl er een abstracte methode in staat. Dat compileert niet.
- ProRekening rechtstreeks van Rekening laten erven, waardoor de 2 procent van SpaarRekening gekopieerd moet worden.
- Het saldo public maken of er een set aan geven, waardoor VoegGeldToe en HaalGeldAf zinloos worden.
- De rente per 1000 euro berekenen met een gehele deling zonder na te denken over wat er met 1500 euro gebeurt. Hier is dat net de bedoeling: laat hem uitleggen waarom.

## Geometric figures

### Aanpak

GeometricFigure is abstract en bevat de twee auto-properties, een read-only Oppervlakte die in haar get de abstracte methode oproept, en die abstracte methode zelf. Elke child vult enkel BerekenOppervlakte in. Vierkant erft van Rechthoek en hoeft dus niets te berekenen: hij zorgt in zijn twee constructors alleen dat hoogte en breedte gelijk zijn.

### Valkuilen

- Aan Oppervlakte een set geven. De opgave legt uit waarom dat bugs geeft.
- De oppervlakte in de get herberekenen met de formule in plaats van BerekenOppervlakte() op te roepen.
- Vierkant van GeometricFigure laten erven in plaats van van Rechthoek, waardoor de berekening gekopieerd moet worden.
- In Vierkant BerekenOppervlakte toch overschrijven. Die van Rechthoek klopt al.
- Bij de driehoek delen door 2 in plaats van door 2.0.
- In de constructor van Vierkant de parameter b aanpassen in plaats van de properties gelijk te zetten. De parameter is een kopie en verdwijnt.

## Dierentuin

### Nota

Vraagt uitdrukkelijk om modulair te werken: elk menu-item krijgt zijn eigen methode met de lijst als parameter.

### Aanpak

Dier is abstract met een gewicht en een abstracte methode Zegt(). De childs vullen enkel dat geluid in. In Main staat een List<Dier> met een menulus errond. Verwijderen is RemoveAt met een gecontroleerd nummer, het gemiddelde is een eigen lus over de lijst, praten is een foreach, en opnieuw beginnen is Clear gevolgd door het opnieuw vullen. Dat vullen zet je in een methode, want je hebt het twee keer nodig.

### Valkuilen

- Het gemiddelde berekenen met een int-totaal en Count, waardoor het afkapt.
- Het gemiddelde berekenen van een lege lijst. Dat is delen door nul.
- Het ingetypte nummer niet controleren tegen Count.
- De startdieren twee keer uitschrijven in plaats van er een methode van te maken.
- De lijst binnen de menulus aanmaken.
- Zegt() virtual maken met een lege body in plaats van abstract. Dan mag een child ze vergeten.

## Meme Lord Simulator

### Nota

Een Final Essentials over het hele hoofdstuk: abstracte klasse, abstracte methode, virtuele property, ToString overriden en een static methode. Laat de student eerst benoemen wat er in Meme hoort en wat per soort verschilt.

### Aanpak

Meme is abstract met de drie properties, de abstracte BerekenMemeWaarde() en de virtuele property IsCringe die al een standaardantwoord heeft. Elke child overschrijft wat afwijkt en meer niet: NormieMeme heeft geen extra property, DeepFriedMeme overschrijft daarbovenop ToString() en gebruikt daar base.ToString() met ToUpper() erop. GenerateFeed is static en krijgt de lijst binnen: eerst de cringe eruit tonen, dan de rest tonen, dan het gemiddelde van wat getoond werd.

### Valkuilen

- IsCringe abstract maken. De opgave vraagt virtual, want er is een standaardgedrag.
- In DeepFriedMeme de volledige tekst van ToString() opnieuw opbouwen in plaats van base.ToString() te gebruiken.
- Het gemiddelde berekenen over alle memes in plaats van over de getoonde.
- Het gemiddelde met .Average() halen. LINQ mag niet.
- De memes tijdens de foreach uit de lijst verwijderen. Dat crasht met "Collection was modified".
- Voor elke soort een aparte lijst bijhouden, waardoor GenerateFeed drie keer nodig is.
- GenerateFeed in Program.cs zetten terwijl de opgave uitdrukkelijk de klasse Meme vraagt.
