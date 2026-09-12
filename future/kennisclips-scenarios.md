# Scenario's voor de ontbrekende kennisclips

Opgesteld op 12 september 2026. Eén scenario per clip uit punt 1 van
[kennisclips-rapport.md](kennisclips-rapport.md), de leerstof waarvoor zeker nog geen clip bestaat.
De clip over raw string literals (H3) is gebouwd en dient als referentie; de werkwijze staat in
[`_kennisclips/README.md`](../_kennisclips/README.md).

Vaste afspraken voor elk scenario:

- De inhoud komt uit de boekpagina die bij de clip staat. Code, voorbeelden en onderschriften zijn
  overgenomen of licht ingekort. Wat niet letterlijk in het boek staat, staat apart onder **Toegevoegd**.
- 1920x1080, 30 fps. Een intro van 3 seconden met de titel in Caveat, een afsluiter met de verwijzing
  naar het hoofdstuk.
- Code links, console rechts waar er uitvoer is. De onderschriften zijn de tekst voor de latere voice-over;
  code in een onderschrift staat tussen backticks.
- Een nieuw onderdeel dat ook in andere clips bruikbaar is, komt in `src/stijl/`, niet in de clipmap.

---

## 1. Programmeren met A.I. (H4)

- **Bron:** `content/3_data/ai.md`
- **Duur:** ±90 s
- **Voor je bouwt:** bovenaan de pagina staat nog een verborgen TODO dat de sectie in opbouw is. Wacht
  tot ze af is, anders loopt de clip meteen achter.

**Scène 1: De verboden prompt** (±12 s)
- Beeld: een chatvenster waarin `Schrijf de C# oplossing voor deze opgave: [gevolgd door de opgave].`
  zich uittypt. Een rode doorhaling erover. Ernaast de fietser van `ventoux.png`.
- Onderschrift: "Je zal aan de top geraken, maar je zal zelf weinig geleerd hebben"

**Scène 2: Zoek-de-fout** (±15 s)
- Beeld: de prompt uit het boek (naam vragen, minstens drie fouten, geen uitleg). Het antwoord verschijnt
  als code zonder markering. Na een pauze komen de cirkels rond de fouten.
- Onderschrift: "Laat de A.I. met opzet fouten inbouwen, en zoek ze zelf"
- Toegevoegd: het foute programma. Neem de fouten uit "Meest voorkomende fouten" in
  `0_intro/4_fouten.md`: een vergeten puntkomma, `RaedLine`, `Readline`.

**Scène 3: Vergelijken** (±15 s)
- Beeld: twee codepanelen, "mijn code" en "modeloplossing", met pijlen naar de verschillen. Daarna de
  tutor-variant: de chat stelt een vraag terug.
- Onderschrift: "Vergelijk je oplossing met de modeloplossing, en laat je ondervragen over de verschillen"

**Scène 4: Maak een variant** (±10 s)
- Beeld: een opgavekaart "leeftijden van 10 mensen, bereken het gemiddelde" die verandert in "lengtes van
  30 slangen".
- Onderschrift: "Vaak is de context het enige dat verschilt"

**Scène 5: Wees de compiler** (±12 s)
- Beeld: een codefragment van hoogstens 10 regels, een lege console met een vraagteken, een getypt
  antwoord, dan de echte uitvoer.
- Onderschriften: "Voorspel de uitvoer, en laat de A.I. uitleggen waarom" en daarna "Zeg erbij hoe ver je
  al bent, anders krijg je vragen over leerstof die je nog niet kent"
- Toegevoegd: het codefragment. Neem er een uit een bestaande oefening van H4.

**Scène 6: Vereenvoudigen** (±10 s)
- Beeld: te lange, werkende code die krimpt tot een kortere versie.
- Onderschrift: "Werkende code, maar onnodig complex: maak ze eenvoudiger"
- Toegevoegd: het codefragment, zelfde regel als bij scène 5.

**Scène 7: De as** (±10 s)
- Beeld: `promptladder.png` opgebouwd als animatie, de zes prompts schuiven één voor één op hun plaats.
- Onderschrift: "Links doet de A.I. het denkwerk, rechts doe jij het"

**Afsluiter** (±5 s)
- Onderschrift: "Een prompt is nooit feilloos. Blijf kritisch over de output."

**Nieuwe onderdelen:** `Chatvenster` (prompt die zich uittypt, antwoord dat blok per blok verschijnt),
`Opgavekaart`.

---

## 2. De wetten van De Morgan (H5, toegepast in H6)

- **Bron:** `content/4_beslissingen/1_logic_and_relationsoperator.md` (callout "De wetten van De Morgan"),
  `content/5_herhalingen/1_while_dowhile.md` ("Foute input van gebruiker met loops verwerken")
- **Duur:** ±75 s

**Scène 1: EN en OF** (±12 s)
- Beeld: de waarheidstabel uit het boek bouwt zich rij per rij op.
- Onderschrift: "`&&` geeft enkel `true` als beide operanden `true` zijn, `||` als er minstens één `true` is"

**Scène 2: De eerste wet** (±14 s)
- Beeld: `!(A && B)` groot in beeld. De `!` splitst in twee en schuift voor `A` en voor `B`. Tegelijk
  kantelt `&&` naar `||`, in het rood gemarkeerd.
- Onderschrift: "Breng je de `!` naar binnen, dan wordt EN een OF"

**Scène 3: De tweede wet** (±10 s)
- Beeld: dezelfde beweging voor `!(A || B)`, die `!A && !B` wordt.
- Onderschrift: "De EN verandert daarbij in een OF, en omgekeerd"

**Scène 4: Het voorbeeld** (±14 s)
- Beeld: `!(leeftijd >= 18 && heeftKaart)` wordt `leeftijd < 18 || !heeftKaart`.
- Onderschrift: "`!(leeftijd >= 18 && heeftKaart)` mag je dus herschrijven als `leeftijd < 18 || !heeftKaart`"
- Toegevoegd: de tussenstap `!(leeftijd >= 18) || !heeftKaart`, zodat te zien is waar `<` vandaan komt.

**Scène 5: Waarvoor het dient** (±18 s)
- Beeld: het werkblad met de `do while` uit H6, in de drie stappen van het boek:
  1. `input == "a" || input == "b" || input == "c"` met de noot "wanneer is de invoer goed?"
  2. `!(input == "a" || input == "b" || input == "c")` met de noot "draai het om"
  3. `input != "a" && input != "b" && input != "c"`, waarbij elke `==` en elke `||` apart omklapt
- Onderschriften: "De conditie van een loop zegt wanneer je doorgaat, niet wanneer je stopt" en daarna
  "Welke van beide vormen je schrijft, is persoonlijke smaak"
- Toegevoegd: in de console tikt de gebruiker `x` (de vraag komt terug) en daarna `b` (de loop stopt).

**Afsluiter** (±5 s)

**Nieuw onderdeel:** `Expressie`, een regel code waarvan losse tokens kunnen bewegen, splitsen en
omklappen. Later bruikbaar voor voorrang (`&&` vóór `||`) en kortsluiten, die nu niet in deze clip zitten.

---

## 3. Collection expressions (H8)

- **Bron:** `content/7_arrays/1_ArraysBasics.md` (Manier 1, Manier 2 en de callout erbij)
- **Duur:** ±60 s

**Scène 1: Twee schrijfwijzen, dezelfde array** (±12 s)
- Beeld: `string[] myColors = {"red", "green", "yellow", "orange", "blue"};` Onder de code een rij van
  vijf vakjes, zoals in de arrayfiguren van H8. De accolades veranderen in vierkante haken; de vakjes
  blijven exact hetzelfde.
- Onderschrift: "Sinds C# 12 mag je in de plaats van de accolades ook vierkante haken gebruiken"

**Scène 2: Waar het verschil zit** (±18 s)
- Beeld: twee panelen. Links `string[] myColors;` en daaronder `myColors = {"red", "green"};` met een rode
  golflijn en het label "compilerfout". Rechts dezelfde twee regels met `["red", "green"]`, zonder fout.
- Onderschrift: "De accolade-vorm mag enkel op de lijn waar je de variabele declareert, de vierkante haken
  mogen overal waar C# het type al kent"
- Let op: het boek geeft de tekst van de compilerfout niet. Toon enkel de golflijn en het label, geen
  verzonnen foutboodschap.

**Scène 3: Aan een methode meegeven** (±10 s)
- Beeld: `ToonKleuren(["red", "green"])`
- Onderschrift: "Ook als je een array rechtstreeks aan een methode meegeeft, werkt enkel de vorm met
  vierkante haken"

**Scène 4: De valkuil met `var`** (±10 s)
- Beeld: `var myColors = ["red", "green"];` met een rode golflijn.
- Onderschrift: "C# moet weten wélk soort verzameling je wil. Schrijf het type dus voluit."

**Afsluiter** (±5 s)
- Onderschrift: "Visual Studio stelt die vorm vaak zelf voor, dus je zal ze vroeg of laat tegenkomen"

**Nieuwe onderdelen:** `Foutgolf` (rode golflijn onder een stuk code, met label), `ArrayVakjes`.

---

## 4. Pong als rode draad (H9 tot H16)

Pong loopt door zes hoofdstukken. Eén lange clip past nergens, dus dit worden zes korte clips die elk
bij hun eigen hoofdstuk horen en hetzelfde speelveld delen.

**Gemeenschappelijk onderdeel:** `PongVeld`, een consolepaneel waarin balletjes (`O`) botsen. Remotion
rendert frames in willekeurige volgorde, dus de positie moet een zuivere functie van het frame zijn
(een driehoeksgolf over breedte en hoogte), zonder bijgehouden toestand. Toeval via `random()` van
Remotion met een vaste seed, nooit `Math.random()`.

### 4a. Een wereld zonder en met OOP (H9)

- **Bron:** `content/8_klassen/00_oop_pong.md`
- **Duur:** ±75 s

1. **Eén balletje:** de code met `balX`, `balY`, `vX`, `vY` links, het botsende balletje rechts.
   Onderschrift: "De belangrijkste informatie zit in `balX`, `balY`, `vX` en `vY`"
2. **Twee balletjes zonder OOP:** de code verdubbelt regel per regel, elke gekopieerde regel licht op.
   Onderschrift: "Bijna iedere lijn code moeten we verdubbelen"
3. **De klasse:** de vier variabelen vliegen in een kader `class Balletje` en worden properties,
   `Update()` en `TekenOpScherm()` komen erbij.
   Onderschrift: "Een klasse is een blauwdruk, objecten zijn de echte dingen die volgens die beschrijving werken"
4. **Twee objecten:** `bal1.Update(); bal2.Update();` en twee balletjes in het veld.
   Onderschrift: "In onze main zeggen we aan beide balletjes: update je zelf eens, teken je zelf eens"
5. **Honderd balletjes:** de array met de lus, het veld loopt vol.
   Onderschrift: "De kracht van OOP zit in het feit dat we de logica in de objecten zelf plaatsen"

### 4b. Constructors (H11)

- **Bron:** `content/10_advancedklassen/2_overloadedconstructor.md`, "Een wereld met OOP: Pong constructors"
- **Duur:** ±45 s

1. `new Balletje()`: een pijl van de default constructor via `this(5,5,1,1)` naar de overloaded
   constructor. Het balletje verschijnt op 5,5 en beweegt naar rechtsonder.
   Onderschrift: "Een default constructor die een balletje aanmaakt dat naar rechtsonder beweegt"
2. `new Balletje(10,8,-2,1)`: de vier argumenten vliegen in `X`, `Y`, `VX` en `VY`.
   Onderschrift: "Of je kiest zelf de beginwaarden"
3. De tip met `Random`: nieuwe balletjes verschijnen telkens op een andere plek.
- **Let op:** in die tip staat `Y = rng.Next(0, Console.WindowWidth);`. Dat moet `WindowHeight` zijn.
  Eerst in het boek rechtzetten.

### 4c. List (H12)

- **Bron:** `content/11_arraysvanklassen/4_list.md`, "Een wereld met OOP: Pong list" en Stagiair Steven
- **Duur:** ±50 s

1. De arraycode en de `List`-code naast elkaar. De vierkante haken vervagen, `foreach(var bal in veelBalletjes)`
   verschijnt. Onderschrift: "Een `List` maakt je code vaak leesbaarder dan een array"
2. `veelBalletjes.Add(new Balletje())`: balletjes verschijnen één voor één in het veld.
   Onderschrift: "Een lijst groeit en krimpt, zonder dat je daar zelf code voor schrijft"
3. Stagiair Steven: de `foreach` met `Remove`. Een balletje vliegt buiten beeld, de console toont
   `InvalidOperationException: Collection was modified; enumeration operation may not execute.`
   Onderschrift: "Je mag een lijst niet wijzigen terwijl je er met een `foreach` overheen loopt"

### 4d. Overerving (H13)

- **Bron:** `content/12_overerving/2_base.md`, "Een wereld met OOP: Pong overerving"
- **Duur:** ±45 s

1. `virtual` verschijnt voor `public void Update()`.
   Onderschrift: "Eerst de vraag: welke werking willen we in een child-klasse kunnen aanpassen?"
2. `CentreerBalletje : Balletje` met de `override`. In het veld raakt het balletje de zijkant en springt
   het naar het midden; een pijl van `base.Update()` naar de parent.
   Onderschrift: "Het balletje teleporteert terug naar het midden wanneer het de linker- of rechterzijde raakt"
3. Vooruitblik: `Balletje bal1 = new CentreerBalletje();`
   Onderschrift: "Dankzij polymorfisme mag zelfs dit"

### 4e. Abstract (H14)

- **Bron:** `content/13_advancedovererving/5_abstract.md`, "Een wereld met OOP: Pong en `abstract`"
- **Duur:** ±55 s

1. `abstract class SpelObject` met `X`, `Y` en de abstracte `TekenOpScherm`. Een klassediagram bouwt op:
   `SpelObject` met daaronder `Balletje` en `ScoreBoard`.
   Onderschrift: "We weten niet hoe die zaken getoond worden, dus wordt dit een abstracte klasse"
2. `ScoreBoard` tekent `0 - 0` op positie 5,5, zwart op geel zoals in de code.
3. `List<SpelObject>` met `is Balletje`: enkel de balletjes bewegen, het scorebord blijft staan.
   `score.ScoreSpeler2++` en het bord toont `0 - 1`.
   Onderschrift: "Scoort een speler, dan tel je gewoon op"
- **Let op:** in de bron stopt de `foreach` midden in een commentaarregel (`//spe`) en ontbreekt de aanroep
  van `TekenOpScherm`. Eerst in het boek aanvullen.

### 4f. Polymorfisme (H16)

- **Bron:** `content/15_polymorfisme/11_polymo_intro.MD`, "Een wereld met OOP: Pong polymorfisme"
- **Duur:** ±50 s

1. Vier soorten balletjes in het veld, elk met zijn eigen gedrag: `Balletje`, `CentreerBalletje`,
   `InstabielBalletje` (staat soms plots stil) en `TeleportBalletje` (springt elke 10 ticks naar een
   willekeurige plek). De code van `InstabielBalletje` komt in beeld.
2. De vijf `Add`-regels in `List<Balletje>`. De lus daaronder blijft grijs en onaangeroerd.
   Onderschrift: "De code waarin we de lijst doorlopen, moet niet aangepast worden"
- **Toegevoegd:** het gedrag van `TeleportBalletje` wordt getoond, de code niet: die staat niet in het boek.

---

## 5. `required` properties (H11)

- **Bron:** `content/10_advancedklassen/2_objectinitsyntax.md`
- **Duur:** ±55 s
- **Voor je bouwt:** in de bron staat een TODO om `init`-properties toe te voegen tussen object
  initializer syntax en `required`. Komt die sectie er, dan hoort ze in deze clip tussen scène 2 en 3.

**Scène 1: Object initializer syntax** (±15 s)
- Beeld: de klasse `Meting` en `new Meting() { Temperatuur = 3.4, IsGeconfirmeerd = true};`. Een objectdoos
  met twee vakjes vult zich. Daarna vouwt de regel open tot de drie regels die intern gebeuren.
- Onderschrift: "Eerst wordt de default constructor aangeroepen, pas daarna krijgen de properties hun waarden"

**Scène 2: Het probleem** (±12 s)
- Beeld: `new Meting { Temperatuur = 0.7};`. In de objectdoos blijft `IsGeconfirmeerd` op zijn defaultwaarde.
- Onderschrift: "Met overloaded constructors kon je begininformatie verplichten, met object initializer syntax niet"
- Toegevoegd: de objectdoos die `false` toont (de defaultwaarde van een `bool`).

**Scène 3: `required`** (±15 s)
- Beeld: `required` typt zich voor `bool IsGeconfirmeerd`. Dezelfde regel uit scène 2 krijgt een rode
  golflijn met de foutboodschap uit het boek: *Required member 'Meting.IsGeconfirmeerd' must be set in the
  object initializer or attribute constructor.*
- Onderschrift: "Met `required` moet die property ingesteld worden wanneer je het object aanmaakt"

**Scène 4: Opgelost** (±8 s)
- Beeld: `new Meting { IsGeconfirmeerd = true};` zonder fout.

**Afsluiter** (±5 s)
- Onderschrift: "`required` bestaat sinds C# 11 en werkt vanaf .NET 7"

**Nieuwe onderdelen:** `ObjectDoos` (een object met benoemde vakjes), `Foutgolf` (gedeeld met clip 3).

---

## 6. `Queue` en `Stack` (H12)

- **Bron:** `content/11_arraysvanklassen/dict.md`
- **Duur:** ±70 s
- **Stijl:** sluit aan bij de hertekende `queue.png` en `stack.png` in `content/assets/10_generics/`.

**Scène 1: Queue** (±25 s)
- Beeld: de code uit het boek. Elke `Enqueue` laat een kaartje met de tekst achteraan in een horizontale
  rij schuiven. Elke `Dequeue` haalt het eerste kaartje weg; het vliegt naar de console en wordt daar een
  regel uitvoer: "Ik stond hier eerste." en "Ik tweedes."
- Onderschrift: "Een queue is first in, first out, zoals aanschuiven aan de kassa van de supermarkt"
- Kort daarna: het voorste kaartje licht op zonder weg te gaan. Onderschrift: "`Peek()` kijkt wie vooraan
  staat, zonder het element te verwijderen"

**Scène 2: Stack** (±25 s)
- Beeld: de code uit het boek. Elke `Push` legt een kaartje bovenop een verticale stapel, elke `Pop` tilt
  het bovenste eraf naar de console: "Ik als laatste." en "Ik tweede."
- Onderschrift: "Een stack is last in, first out, zoals een stapel papieren"

**Scène 3: Naast elkaar** (±10 s)
- Beeld: de rij en de stapel met dezelfde drie teksten, het element dat eruit gaat licht op.
- Onderschrift: "`Dequeue` geeft het oudste element terug, `Pop` het nieuwste"

**Afsluiter** (±5 s)

**Nieuw onderdeel:** `Kaartje` (ruw kaartje met tekst) en twee schikkingen: `Rij` en `Stapel`.
`Dictionary` zit er bewust niet in: daar bestaat al een clip.

---

## 7. `IComparable` en sorteren (H17)

- **Bron:** `content/16_interfaces/2_InterfacesInPraktijk.md`
- **Duur:** ±80 s
- **Voor je bouwt:** in de bron staat een TODO om de niet-generieke `IComparable` te vervangen door
  `IComparable<Land>`. Beslis dat eerst, anders klopt de code in de clip niet meer.

**Scène 1: Het probleem** (±15 s)
- Beeld: de klasse `Land` en de array met België (5), Frankrijk (7) en Nederland (6). `Array.Sort(eurolanden);`
  en de console toont `InvalidOperationException: Failed to compare two elements in the array`. Drie
  landkaartjes schuiven besluiteloos heen en weer, met "naam?" en "inwoners?" erbij.
- Onderschrift: ".NET heeft geen flauw benul hoe objecten van het type `Land` gesorteerd moeten worden"

**Scène 2: De afspraak** (±15 s)
- Beeld: `int CompareTo(Object obj)` en de tabel uit het boek. Kleiner dan 0, 0 en groter dan 0 worden
  drie plaatsen op een lijn: ervoor, dezelfde plaats, erna.
- Onderschrift: "Enkel jij als ontwikkelaar weet hoe er gesorteerd moet worden"

**Scène 3: Implementeren** (±18 s)
- Beeld: `Land : IComparable` met de `CompareTo` op `Oppervlakte`. Telkens twee kaartjes worden
  vergeleken, met de uitkomst (-1, 0 of 1) erboven. Ze eindigen in de volgorde België, Nederland, Frankrijk.
- Onderschrift: "`Sort()` bevraagt ieder object via `CompareTo()`"
- Toegevoegd: welke paren vergeleken worden. Het boek zegt enkel dat `Sort` een eigen intern
  sorteeralgoritme gebruikt, dus de animatie mag geen bepaald algoritme suggereren.

**Scène 4: Een tweede criterium** (±10 s)
- Beeld: de uitgebreide `CompareTo` die bij gelijke oppervlakte op `Inwoners` sorteert. Enkel de code,
  geen demo: het voorbeeld in het boek heeft geen landen met dezelfde oppervlakte.

**Scène 5: Een `List` sorteren** (±10 s)
- Beeld: `landLijst.Sort();`, en daarnaast `Array.Sort(landArray);`
- Onderschrift: "`landLijst.Sort()` sorteert de lijst zelf, `Array.Sort` geeft niets terug maar sorteert
  de array ter plaatse"

**Afsluiter** (±5 s)
- Onderschrift: "Bestaande types zoals `string` hebben `IComparable` al ingebakken"
- **Let op:** in de bron gooit de eerste `CompareTo` een `NotImplementedException`, de tweede een
  `ArgumentException`. Eerst gelijktrekken in het boek.

---

## 8. Klassen serialiseren naar JSON (H18)

- **Bron:** `content/21_bestanden/serialize.md`
- **Duur:** ±80 s

**Scène 1: Waarom** (±10 s)
- Beeld: een objectdoos `Student` wordt een bestandje `studentdata.json`, en later weer een objectdoos.
- Onderschrift: "Je maakt letterlijk een savepoint van je programma"

**Scène 2: JSON lezen** (±12 s)
- Beeld: het JSON-voorbeeld met Barry uit het boek; sleutels en waarden lichten afwisselend op. Daarnaast
  kort de XML-versie.
- Onderschrift: "Een JSON-bestand is ogenblikkelijk herkenbaar en leesbaar"

**Scène 3: Serialiseren** (±18 s)
- Beeld: de klasse `Student` en het object met Barry, 25 en `true` in de objectdoos.
  `JsonSerializer.Serialize(student)` rolt de vakjes uit tot `{"Naam":"Barry","Leeftijd":25,"Uitgeschreven":true}`
  in de console. `File.WriteAllText("studentdata.json", jsonString);` zet het in het bestandje. Daarna
  vouwt de regel open tot de ingesprongen versie met `WriteIndented`.
- Onderschrift: "Enkel de publieke kant van een object wordt geserialiseerd"

**Scène 4: Deserialiseren** (±12 s)
- Beeld: de omgekeerde beweging met `JsonSerializer.Deserialize<Student>(jsonText)`.
- Onderschrift: "De methode krijgt een `string` en kan niet raden bij welke klasse die hoort, dus geef je het type mee"

**Scène 5: Bijsturen met attributen** (±15 s)
- Beeld: `[JsonIgnore]` boven `Uitgeschreven`, en de sleutel verdwijnt uit de JSON. Daarna
  `[JsonPropertyName("VolledigeNaam")]`, en de sleutel `Naam` hernoemt zich.
- Onderschrift: "Met attributen stuur je bij wat er geserialiseerd wordt, en onder welke naam"

**Afsluiter** (±8 s)
- Onderschrift: "Heb je JSON van elders? Edit, Paste Special, Paste JSON as Classes"

**Nieuwe onderdelen:** `Bestandje` (icoon met bestandsnaam). `ObjectDoos` komt uit clip 5.

---

## Niet in deze reeks

- **IntelliCode en Copilot uitschakelen in Visual Studio 2026:** dat is een schermopname in Visual
  Studio, geen werk voor Remotion.
- **De tien twijfelgevallen** uit punt 2 van het rapport: eerst de oude clips bekijken.

## Voorgestelde bouwvolgorde

1. **Queue en Stack:** klein, sterk beeld, levert `Kaartje` op.
2. **Collection expressions** en **`required`:** allebei klein, samen leveren ze `Foutgolf` en `ObjectDoos`.
3. **De Morgan:** levert `Expressie` op.
4. **JSON:** hergebruikt `ObjectDoos`.
5. **IComparable:** na de beslissing over `IComparable<Land>`.
6. **A.I.-prompts:** zodra `ai.md` af is.
7. **Pong:** het meeste werk (`PongVeld`), zes clips, en eerst de twee fouten in de bron rechtzetten.

## Fouten in de bron die bij het uitschrijven opvielen

- `content/10_advancedklassen/2_overloadedconstructor.md`, tip bij Pong constructors:
  `Y = rng.Next(0, Console.WindowWidth);` moet `Console.WindowHeight` zijn.
- `content/13_advancedovererving/5_abstract.md`: de `foreach` bij Pong en `abstract` stopt midden in een
  commentaarregel (`//spe`); de aanroep van `TekenOpScherm` en de sluitende accolade van de `while` ontbreken.
- `content/16_interfaces/2_InterfacesInPraktijk.md`: de eerste `CompareTo` gooit een
  `NotImplementedException`, de tweede een `ArgumentException`.
