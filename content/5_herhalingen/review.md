# Review: Loops

> Interne didactische review — niet bedoeld voor publicatie. Bekijk per sectie of de feedback nog actueel is.

## Sterktes

- De **categorisatie van loops** (definite/indefinite/oneindig) in [0_loops_intro.md](0_loops_intro.md) met de bijhorende tabel is didactisch sterk: studenten leren *welk type* loop ze nodig hebben, niet enkel de syntax.
- De *foutieve* som-van-eerste-10 in [1_while_dowhile.md](1_while_dowhile.md) (regel 90-99) is een goed gekozen anti-voorbeeld. Het laat scope-fouten leven binnen een loop — een typische beginner-misser.
- Het foute-input-voorbeeld met `do-while` (regel 174-181 in [1_while_dowhile.md](1_while_dowhile.md)) is de canonieke usecase voor `do-while`. Goed dat dit als motivator dient.
- De callout over **De Morgan-wetten** (regel 201-211 in [1_while_dowhile.md](1_while_dowhile.md)) is een mooie verdieping voor de gevorderde lezer zonder de basisuitleg te overladen.
- De *for-tab-tab*-tip (regel 61-69 in [2_for.md](2_for.md)) is een handig praktisch IDE-trucje dat eerstejaars zelden zelf ontdekken.
- [3_nesting.md](3_nesting.md) toont uitvoer-output expliciet (alle 15 lijnen) waardoor het *ritme* van geneste loops zichtbaar wordt. Sterke didactische keuze.
- De **`goto`-policeman**-callout bij `break`/`continue` is consistent met je houding over goto en zorgt voor stevige normvorming.

## Zwaktes

- **`break` en `continue` worden actief afgeraden** (regel 94-99 in [2_for.md](2_for.md), en regel 75 in [3_nesting.md](3_nesting.md): *"Of beter nog: gewoon niet gebruiken!"*). Dit is een te dogmatische stelling. Er zijn legitieme usecases (vroegtijdig stoppen na vinden van element). Een eerstejaars zou hier minstens *wanneer wel* moeten leren.
- De `foreach`-vermelding in [0_loops_intro.md](0_loops_intro.md) regel 35 is misschien voorbarig — de student ziet "een speciale loop" die in H9 komt, zonder context. Misschien beter pas in H8/9 introduceren.
- [2_for.md](2_for.md) gebruikt `i = i + 2` op regel 12 en `i += 2` op regel 42. Compound assignment-operators (`+=`, `-=`, `++`) worden nergens expliciet uitgelegd. Voor eerstejaars zonder programmeerervaring zijn die niet vanzelfsprekend.
- In [1_while_dowhile.md](1_while_dowhile.md) regel 122 staat een typo: *"de stopconditie gecontroleerd wordt na iedere iteratie getest"* — dubbel werkwoord.
- **Geen `Test jezelf` of expressie-voorspelvragen** zoals in H5. Loops verdienen die net zo goed (of meer): hoe vaak loopt deze code, wat is de eindwaarde van `i`, etc.
- De flowcharts (`while.png`, `dowhile.png`, `for.png`) bevestigen wat al gezegd is, maar er is geen flowchart voor *nesting* in [3_nesting.md](3_nesting.md), terwijl daar de visualisatie net het meeste verschil zou maken.

## Onduidelijkheden

- Op regel 31 van [1_while_dowhile.md](1_while_dowhile.md): *"wil dit zeggen dat het getal 100 nog wel getoond zal worden. Begrijp je waarom?"* — vraag zonder antwoord (zelfs niet in een collapsible callout). Eerstejaars die het *niet* begrijpen, blijven achter zonder houvast.
- In [2_for.md](2_for.md) regel 23: `for (setup; finish test; update)` is goed, maar de termen *setup*, *finish test* en *update* zijn niet de standaard C#/officiele namen (initializer, condition, iterator). Studenten die de Microsoft-docs raadplegen zien andere woorden. Vermeld minstens beide.
- *"Daar de test gebeurt aan het begin van de loop wil dit zeggen dat het getal 100 nog wel getoond zal worden"* — dat is verwarrend. De *test* aan het begin heeft niets te maken met *waarom* 100 wel getoond wordt; het komt door de pre-increment volgorde. Herformuleren of een trace toevoegen.
- In [3_nesting.md](3_nesting.md) ontbreekt uitleg waarom je `tellerB = 0;` opnieuw moet zetten (regel 21). Voor eerstejaars is dit niet evident: waarom wordt `tellerB` niet vanzelf gereset?
- *"Indien je een variabele binnen de loop definieert dan zal deze steeds terug 'gereset' worden"* (regel 87 in [1_while_dowhile.md](1_while_dowhile.md)). Het werkwoord *gereset* is misleidend: de variabele wordt opnieuw *aangemaakt*, niet gereset. Klein verschil, maar conceptueel belangrijk.

## Gemissen

- **`break` met legitieme usecase** (zoek-en-stop-pattern). Zelfs als je het ontmoedigt, een eerstejaars zal dit *wel* nodig hebben in vaardigheidsproef-oefeningen. Toon één goed voorbeeld.
- **Increment/decrement-operators** (`++`, `--`, prefix vs. postfix) worden gebruikt zonder uitleg. Verdient een mini-callout, vooral het verschil tussen `i++` en `++i` in expressies.
- **Compound assignment** (`+=`, `-=`, `*=`, `/=`, `%=`) — ze duiken op zonder introductie.
- **Loop tellen / off-by-one bugs** zijn bij eerstejaars *de* nummer 1 fout. Een sectie *"Hoeveel keer loopt deze loop"* met expliciete voorbeelden (`i<10`, `i<=10`, `i=1`, etc.) zou enorm helpen.
- **Concrete debug-tip voor oneindige loops in VS** (Pause-knop, Ctrl+Alt+Break). Wordt in H4 (debuggen) niet behandeld. Hoort hier thuis als praktische redding.
- **De `for(;;)`-variant** als alternatief voor `while(true)` ontbreekt — niet kritisch maar handig om te kennen voor wie ooit in C/Java terechtkomt.
- **Geen sectie over `break` uit nested loops** met labels of helper-flags. [3_nesting.md](3_nesting.md) zegt enkel dat `break` *uit de huidige loop* haalt — maar geeft geen oplossing voor wie *wel* uit alle loops wil.
- **Geen `Test jezelf`** met loop-trace oefeningen.

## Concrete suggesties

1. Voeg in [2_for.md](2_for.md) een korte mini-sectie toe over compound assignment vóór regel 42:
   ```csharp
   i = i + 2; //werkt
   i += 2;    //compacter, identiek
   i++;       //hetzelfde als i = i + 1
   ```

2. Beantwoord de retorische vraag *"Begrijp je waarom?"* in [1_while_dowhile.md](1_while_dowhile.md) regel 31 met een collapsible callout:
   ```markdown
   :::{.callout-tip collapse="true"}
   ## Antwoord
   Omdat we eerst incrementeren en dan printen — wanneer tellertje 99 is, wordt het 100, en print het 100. Bij teller 100 mislukt de test (`100<100`) en stopt de loop.
   :::
   ```

3. Verzacht het `break`/`continue`-dogma in [2_for.md](2_for.md) en [3_nesting.md](3_nesting.md). Vervang *"gewoon niet gebruiken!"* door iets als *"gebruik enkel als de alternatieve booleaanse expressie de leesbaarheid significant verslechtert"*. Geef één concreet *wel-toelaatbaar* voorbeeld (bv. early exit bij gevonden waarde).

4. Voeg in [3_nesting.md](3_nesting.md) een korte uitleg toe waarom `tellerB = 0` herzet moet worden — de meest verwarrende lijn voor beginners:
   *"Bij elke nieuwe iteratie van de outer loop willen we dat de inner loop opnieuw vanaf 0 begint. Vergeet je deze reset, dan loopt de inner loop maar 1 keer (in totaal)."*

5. Voeg een *Test jezelf* sectie toe aan het einde van [3_nesting.md](3_nesting.md) of als nieuw bestand:
   ```markdown
   ### Test jezelf
   Hoeveel keer wordt 'X' geprint?
   * `for(int i=0;i<5;i++) for(int j=i;j<5;j++) Console.Write('X');`
   ```

6. Update [0_loops_intro.md](0_loops_intro.md) tabel: schrap `Foreach` of voeg een voetnoot toe dat dit pas in H9 aan bod komt — anders zien studenten een onbekend looptype zonder context.

---

## Future — ideeën voor de nieuwe editie

> Aanknopingspunten bij dit hoofdstuk voor de toekomstvisie uit [../../future/hoe.md](../../future/hoe.md). Bouwt voort op wat hierboven al opgemerkt is.

### Code Literacy — drie oefentypes
- **Wat doet dit?** — laat studenten zonder IDE de output van de ster-pyramide / geneste loops in [3_nesting.md](3_nesting.md) voorspellen voor `n=4`. Sluit aan bij het al-gemiste *Test jezelf*.
- **Klopt dit?** — geef een AI-versie van de "som van eerste 10" met de exacte scope-bug uit [1_while_dowhile.md](1_while_dowhile.md) (variabele binnen loop). Klassieke AI-flater want LLM's herhalen dit patroon.
- **Welke is beter?** — twee versies van "zoek getal in lijst": één met `break` (early exit), één met booleaanse vlag. Sluit direct aan bij het verzachten van het `break`-dogma uit punt 3 hierboven.

### Stagiair Steven
- Steven levert een `for`-loop af met klassieke off-by-one (`i<=arr.Length`). Past bij het gemis "Loop tellen / off-by-one bugs".
- Steven gebruikt `goto` om uit een geneste loop te springen — perfecte aanleiding voor de goto-politie-callout én voor het gemis "break uit nested loops".

### Hall of Shame
- AI die `while(true)` zonder exit-conditie genereert en de student laat opdraaien met een hangende console — directe link met de gemis over "debug-tip voor oneindige loops in VS".
- AI die `i++` en `++i` door elkaar gebruikt in expressies en zo subtiel verkeerde sommen bouwt.

### Interview-suggestie
- Een performance-engineer of game-developer over: *"hoeveel mag die binnenste loop kosten?"* — koppelt nesting aan reële kostenintuïtie zonder dat we Big-O moeten introduceren.

### Code-archeologie (oermens)
- Tijdlijn van iteratie: klassieke `for` (C# 1.0) → `foreach` (C# 1.2) → LINQ (`.Where`, `.Sum`) (C# 3.0) → `Range`/`Index` (C# 8). Sluit aan bij de gemiste LINQ-vooruitblik en bij de `foreach`-vraag uit [0_loops_intro.md](0_loops_intro.md).

### Lees-volgorde-pijlen
- De geneste loop in [3_nesting.md](3_nesting.md) schreeuwt om genummerde pijlen: 1) outer init, 2) outer test, 3) inner init (incl. `tellerB = 0`), 4) inner body, 5) inner update, 6) terug naar 3, 7) outer update. Lost meteen het *"waarom moet `tellerB = 0` opnieuw?"*-mysterie op.

### Taalkeuze-callout
- *"Python: `for x in range(10)`, geen counter — dichter bij `foreach`. JavaScript: `for...of` vs. `for...in` (let op: indices vs. values)."* Eén regel volstaat in [2_for.md](2_for.md).
