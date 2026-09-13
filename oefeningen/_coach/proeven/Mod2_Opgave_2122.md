<!--
  Coach- en quoteergegevens voor oefeningen/EindeTests/Mod2/Opgave_2122.md.
  Formaat: zie _LEESMIJ.md in deze map.
-->
# Nota

Een vaardigheidsproef met één programma: namen en toegang registreren in twee synchrone arrays, een rapport met een risiconiveau, de namen anoniem maken, en opnieuw beginnen. Vraag eerst aan welke fase de student bezig is. Geef geen code, en ook geen methodesignaturen die hij zo kan overnemen.

# Aanpak

Fase 1: eerst de twee arrays, en de namen op "leeg". De naamloop stopt bij "stop": laat hem nadenken hoe dat in de loopvoorwaarde komt zonder dat "stop" als naam bewaard wordt. Het persoonnummer is ook de index in de arrays. De vraag naar j of n is een eigen loop binnen de naamloop.

Fase 2a: laat hem eerst zeggen welke plaatsen in de arrays echt een persoon zijn, en wat er in de bool-array staat op een lege plaats. Dan tellen, dan het percentage, dan het risico. Grenswaarden die na initialisatie niet meer mogen veranderen: welk keyword kent hij daarvoor? Het risico zelf bewaart hij in een enum.

Fase 2b: arrays zijn reference types. Vraag wat er met de originele namen gebeurt als hij de array gewoon aan een nieuwe variabele toekent en daarin sterretjes zet. Welke plaatsen krijgen sterretjes en welke niet?

Fase 3: een loop rond alles. Wat moet er terug op de beginwaarde voor een nieuwe ronde?

# Valkuilen

- "stop" toch als naam bewaren, of het persoonnummer dan nog verhogen.
- De naamloop verlaten met een `break` bij "stop" (boete).
- Het persoonnummer verhogen bij een ongeldig antwoord op de vraag naar j of n.
- In ToonTracerRapport alle 100 plaatsen overlopen zonder "leeg" over te slaan: een lege plaats staat op false en telt dan als niet toegelaten.
- Enkel de toegelaten personen tellen als "ingevoerde personen".
- Het percentage met een gehele deling, waardoor het 0 wordt.
- De grenswaarden als gewone variabelen of als losse getallen in de voorwaarden.
- De namenarray kopiëren met een gewone toekenning, waardoor ook het origineel sterretjes krijgt.
- Sterretjes zetten op de lege plaatsen.
- Bij een nieuwe ronde de arrays of het persoonnummer niet terugzetten, zodat de namen van de vorige ronde blijven staan.

# Puntenverdeling

De originele proef had geen puntenverdeling. Deze is achteraf toegevoegd, op 20.

**Fase 1, Data verzamelen (7 punten)**

- Twee arrays van lengte 100, de namenarray gevuld met "leeg": 1
- Een loop die stopt als de naam "stop" is, zonder "stop" te bewaren, met "Voer de naam in van persoon x" en x vanaf 1: 1,5
- De naam bewaren op de juiste index: 1
- "Werd deze persoon toegelaten (j/n)?" opnieuw stellen tot het antwoord j of n is: 1,5
- Het antwoord als bool bewaren op dezelfde index: 1
- De zin "De persoon met naam X werd ingevoerd. Hij werd Y." met toegelaten of niet toegelaten: 1

**Fase 2a, Data verwerken (6 punten)**

- ToonTracerRapport krijgt de twee arrays en telt enkel de plaatsen met een persoon: 1,5
- Het aantal niet toegelaten personen en hun percentage op het totaal aantal ingevoerde personen, zonder gehele deling: 1,5
- Het risico in een enum, de grenswaarden als constante, en het juiste niveau: Laag onder 35%, Verhoogd van 35% tot en met 75%, Kritiek erboven: 1,5
- De uitvoer: aantal personen, de zin met aantal en percentage, het risico, en de lijst met de namen van wie niet toegelaten werd: 1,5

**Fase 2b, Data anonimiseren (4 punten)**

- Vragen of de namen anoniem moeten, en enkel bij j verder: 0,5
- MaakAnoniem krijgt de twee arrays en geeft een nieuwe string-array terug: 0,5
- Een echte kopie van de namenarray, zodat het origineel niet verandert: 1
- Sterretjes enkel bij wie niet toegelaten werd, niet op de lege plaatsen: 1
- Het resultaat in een nieuwe variabele bewaren en ToonTracerRapport opnieuw oproepen met die array: 1

**Fase 3, Afsluiten (3 punten)**

- Vragen of het programma moet afsluiten, en bij n terug naar fase 1 via een loop: 1,5
- Voor een nieuwe ronde de arrays leegmaken (namen weer "leeg", toegang weer false) en het persoonnummer weer vanaf 1: 1,5

# Beoordeling

- Het percentage mag als verhouding of in procent berekend worden, zolang de grenswaarden daarbij passen. De opmaak (12,5% of 12,50 %) is vrij.
- De opgave vraagt uitdrukkelijk een enum voor het risico en grenswaarden die na initialisatie niet meer kunnen veranderen. Gewone variabelen of losse getallen in de voorwaarden: dan is dat deelpunt niet af.
- "Aantal ingevoerde personen" is iedereen die ingevoerd werd, toegelaten of niet.
- De zin dat lege plaatsen "ook niet getoond" worden, staat bij MaakAnoniem, maar geldt voor het rapport: ToonTracerRapport toont nooit een lege plaats.
- Een echte kopie mag met een loop of met Array.Copy. Een gewone toekenning van de array is geen kopie: dan is dat deelpunt niet af, ook als het tweede rapport er goed uitziet.
- Schrijft hij het rapport voor de anonieme namen opnieuw uit in plaats van ToonTracerRapport nog eens op te roepen, dan is het laatste deelpunt van fase 2b niet af. Dat is dan geen boete voor redundantie erbovenop.
- De namenarray vullen met "leeg" mag met een loop of met Array.Fill.
- De vraag "Werd deze persoon toegelaten (j/n)?" en de bevestigingszin geeft de opgave letterlijk. Kleine verschillen in leestekens kosten niets.
- Wat er gebeurt bij meer dan 100 personen, als er niemand ingevoerd is, of bij een ander antwoord dan j of n in fase 2b en fase 3, zegt de opgave niet. Dat hoeft niet opgevangen te worden.
- Nieuwe arrays aanmaken voor een nieuwe ronde is ook leegmaken, zolang de namen weer op "leeg" staan.
