# Review: Beslissingen

> Interne didactische review — niet bedoeld voor publicatie. Bekijk per sectie of de feedback nog actueel is.

## Sterktes

- De brood-koop-metafoor in [0_beslissingen_intro.md](0_beslissingen_intro.md) is laagdrempelig en illustreert *waarom* beslissingen nodig zijn voordat de syntax komt. Goede motiverende intro.
- De **veelgemaakte-fouten-sectie** in [0_if.md](0_if.md) (accolades vergeten, puntkomma na if) is uniek en bijzonder waardevol. Eerstejaars *zullen* deze fouten maken; ze hier expliciet noemen voorkomt veel debugging-frustratie.
- De callout-important rond regel 233 in [0_if.md](0_if.md) over de volgorde van `if-else if`-tests met het concrete voorbeeld (`x>10` vs. `x>100`) is uitstekend — abstract advies wordt heel concreet.
- De *Test jezelf*-sectie aan het einde van [1_logic_and_relationsoperator.md](1_logic_and_relationsoperator.md) is precies wat een hoofdstuk over operators nodig heeft. Korte oefenexpressies, direct toepasbaar.
- [enum.md](enum.md) bouwt op met *"slechte oplossing 1"* en *"slechte oplossing 2"* om de nood aan enums te motiveren. Sterk patroon — eerst probleem voelen, dan oplossing aanbieden.
- De flowcharts (`ifflow.png`, `ifelseflow.png`) en de tip naar code2flow.com zijn een mooie brug voor visuele leerders.

## Zwaktes

- De **leesvolgorde** in `_quarto.yml` (intro -> operators -> if -> scope -> switch -> enum) is afwijkend van de bestandsnummering (waar `0_if.md` voor `1_logic_and_relationsoperator.md` zou komen). Dat is verwarrend bij navigatie in de filesystem en voor toekomstig onderhoud. Verwarrende mapnamen voor wie de cursus ooit moet overnemen.
- [enum.md](enum.md) gebruikt nog `static void Main(string[] args)` (regel 99) terwijl het boek elders al verwijst naar top-level statements (afhankelijk van versie). Inconsistent met moderne C#-stijl die studenten in VS 2022+ standaard zien.
- In [0_if.md](0_if.md) wordt `if-else if` pas erg laat (regel 189) geïntroduceerd, terwijl het *enum*-hoofdstuk er al onmiddellijk vanuit gaat. Een paar oefenvoorbeelden vóór nesting zou de overgang verzachten.
- In [enum.md](enum.md) regel 87 staat *"In je console-applicaties moet dit binnen `class Program` gebeuren, maar niét binnen de `Main` methode"*. Met top-level statements in nieuwere templates klopt dit niet meer. Update of voeg een voetnoot toe.
- De vergelijking `heeftIdentiteitskaart == true` op regel 307 in [0_if.md](0_if.md) is een anti-pattern dat je elders waarschijnlijk wil ontmoedigen. Schrijf gewoon `heeftIdentiteitskaart`.
- Typo in [0_if.md](0_if.md) regel 313: `"Niet toegelaten!);` — ontbrekende sluitende quote.
- Typo in [3_scope.md](3_scope.md) regel 14 en 31: dubbelpunten waar puntkomma's horen na `Console.WriteLine(...)`.

## Onduidelijkheden

- In [1_logic_and_relationsoperator.md](1_logic_and_relationsoperator.md) regel 24 staat dat *"beide operanden moeten van hetzelfde datatype zijn"*. Maar `int` met `double` vergelijken werkt wel (impliciete promotie). Te absoluut geformuleerd.
- De *"Test jezelf"*-sectie geeft geen oplossingen of links naar oplossingen. Studenten weten niet of ze juist zaten.
- In [2_switch.md](2_switch.md) ontbreekt uitleg over wat er gebeurt als je `break` vergeet. C# verbiedt dit (in tegenstelling tot C/Java) — dat onderscheid is leerzaam en wordt niet gemaakt.
- [3_scope.md](3_scope.md) gebruikt op regel 27-36 *gratuite* accolades om scope te tonen. Voor een eerstejaars die nooit eerder zulke "naked blocks" zag is dat eerder verwarrend dan verhelderend. Voeg een zin toe: *"Dit zie je in praktijk zelden, maar het toont de scope-regel zuiver."*
- In [enum.md](enum.md) regel 165 wordt verteld dat enum intern een `int` is. Maar even later (regel 198) staat `Zaterdag=50, Zondag=60`. De student vraagt zich dan af: kunnen de gaps in de tussenliggende waarden ook bestaan? Dat blijft onbeantwoord.

## Gemissen

- **Ternary operator** (`? :`) ontbreekt volledig. Past hier perfect, vooral voor compacte assignments zoals `string status = age >= 18 ? "volwassen" : "minderjarig";`. Eerstejaars hebben hier echt iets aan.
- **Pattern matching met `is`** (`if (input is int x)`) — modern C# en past thematisch in dit hoofdstuk.
- **Switch expression** (`var result = day switch { ... };`) — sinds C# 8 standaard. Je verwijst nu via een footnote naar een externe blogpost — dat is te weinig in 2026.
- **Short-circuit evaluation** wordt enkel zijdelings genoemd in een callout-tip in [0_if.md](0_if.md). Verdient een eigen mini-sectie met een concreet voorbeeld waarom volgorde belangrijk is (bv. null-check voor dereferentie).
- **`switch` op strings** wordt niet expliciet getoond, terwijl menustructuren met letterkeuze typische beginner-oefeningen zijn.
- **Geen kennisclip voor de logische operators afzonderlijk** — er is er één voor "logische operators en expressies" maar niets specifiek over volgorde van bewerkingen of De Morgan.
- **De Morgan-wetten** worden pas in H6 (loops) geïntroduceerd in een tip. Hadden hier al kunnen verschijnen.

## Concrete suggesties

1. Voeg een sectie *Ternary operator* toe in [0_if.md](0_if.md) na *If/else*:
   ```csharp
   string boodschap = leeftijd >= 18 ? "Welkom" : "Te jong";
   ```
   Korte sectie, één voorbeeld, klaar.

2. Update [enum.md](enum.md) regel 87 om de top-level-statement realiteit te erkennen:
   *"In een klassieke console-applicatie definieer je dit binnen `class Program` (zie hoofdstuk X over project structuur). Bij top-level statements plaats je de enum bovenaan of onderaan je file."*

3. Fix de typos in [0_if.md](0_if.md) regel 313 (ontbrekende quote) en in [3_scope.md](3_scope.md) regel 14, 31 (puntkomma's).

4. Voeg in [2_switch.md](2_switch.md) een korte sectie *"`break` vergeten"* toe, met de C# compiler-error als voorbeeld. Dit voorkomt verwarring bij studenten die uit C/Java/JavaScript komen.

5. Voeg na de *Test jezelf*-sectie in [1_logic_and_relationsoperator.md](1_logic_and_relationsoperator.md) een details-block met de antwoorden:
   ```markdown
   :::{.callout-tip collapse="true"}
   ## Antwoorden
   * `3>2` → true
   ...
   :::
   ```

6. Hernoem `0_if.md` naar `2_if.md` (of pas de leesvolgorde aan in `_quarto.yml`) zodat filesystem-volgorde overeenkomt met leesvolgorde. Vermijdt verwarring voor toekomstige onderhouders.

---

## Future — ideeën voor de nieuwe editie

> Aanknopingspunten bij dit hoofdstuk voor de toekomstvisie uit [../../future/hoe.md](../../future/hoe.md). Bouwt voort op wat hierboven al opgemerkt is.

### Code Literacy — drie oefentypes
- **Wat doet dit?** — geef een geneste `if-else if`-keten met `x>10` als eerste tak en `x>100` als tweede (zoals in de Sterkte rond regel 233 van [0_if.md](0_if.md)). Vraag: wat verschijnt bij `x=150`? Bestaande callout wordt zo formele Code Literacy-oefening.
- **Klopt dit?** — Steven schrijft `if (heeftIdentiteitskaart == true)` (zie Zwakte regel 307) en `if (leeftijd = 18)` (assignment i.p.v. vergelijking). Twee klassiekers in één snippet.
- **Welke is beter?** — een lange `if-else if`-keten met dagen-van-de-week versus een `switch` versus een switch expression (`day switch { ... }`). Sluit aan op het Gemis rond switch expressions én op de motivatie-aanpak uit [enum.md](enum.md) ("eerst slechte oplossing").

### Stagiair Steven
- Steven gebruikt in [2_switch.md](2_switch.md) `break;` *vergeten* zoals hij dat in JavaScript gewoon was — student moet uitleggen waarom de C# compiler hem hier redt (zie Onduidelijkheden rond fall-through).
- Steven schrijft `if (leeftijd >= 18) ; { Console.WriteLine("volwassen"); }` (puntkomma na if): klassieke beginnersfout uit de Sterkte. Steven beweert dat het "altijd volwassen prints" — wat klopt, maar niet om de reden die hij denkt.

### Hall of Shame
- Genre: AI die `if (a == true && a != null)` schrijft (volgorde fout — zou eerst null moeten checken, sluit aan op Gemis rond short-circuit), of die geneste `if`-piramides van 6 niveaus diep oplevert waar één `switch` of guard-clauses volstaan. Ook: AI die enums door `int`-magic-numbers vervangt (`if (status == 3)` zonder uitleg) — exact het anti-pattern dat de "slechte oplossing" in [enum.md](enum.md) toont.

### Interview-suggestie
- Een **QA-engineer of test-automatiseerder** over hoe één verkeerde operator-volgorde in een `if` een hele production release doet falen. Vraag: "wat is de subtielste boolean-bug die ooit door je code review glipte?" Sluit aan bij de Sterkte rond de veelgemaakte-fouten-sectie.

### Code-archeologie (oermens)
- Evolutie van keuze-constructies in C#: C# 1 (`if-else if`-kettingen) → C# 7 (pattern matching met `is`) → C# 8 (switch expressions) → C# 9+ (relational + logical patterns: `case > 18 and < 65`). Eén pagina, vier varianten van "kies-een-bericht-op-basis-van-leeftijd". Lost meteen de Gemissen rond pattern matching, switch expression en ternary in één keer op.

### Lees-volgorde-pijlen
- De volgorde-gevoelige `if-else if`-keten uit [0_if.md](0_if.md) (regel 233) leent zich uitstekend tot genummerde pijlen: 1=eerste test (`x>10` slokt 100 op), 2=tweede tak wordt nooit bereikt. Maakt het volgorde-effect visueel ondubbelzinnig — exact het "expert-leesstrategie expliciet maken" uit hoe.md.

### Taalkeuze-callout
- Bij switch in [2_switch.md](2_switch.md): 1-regels-callout *"In C/Java/JavaScript moet je `break;` *zelf* schrijven, anders 'val' je door naar de volgende case. C# verbiedt fall-through. Pijnlijke bug minder."* Lost meteen de Onduidelijkheid op én positioneert C# tegenover andere C-familietalen.

### Mondelinge code-review
- De "antwoorden onder collapse"-suggestie (concrete suggestie 5) verandert van een leesoefening in een mondelinge: student moet hardop motiveren *waarom* `3>2` true is voor zijn klasgenoot, niet alleen het antwoord checken. Past natuurlijk bij de Test-jezelf-sectie in [1_logic_and_relationsoperator.md](1_logic_and_relationsoperator.md).
