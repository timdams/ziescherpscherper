<!--
  Coach- en quoteergegevens voor oefeningen/EindeTests/Mod2/Opgave_1819_2ezit.md.
  Formaat: zie _LEESMIJ.md in deze map.
-->
# Nota

Een vaardigheidsproef met één programma: een stemwijzer in drie fasen, elk in een eigen methode, met twee synchrone arrays voor de namen en de resultaten. Er is een extra opgave met een enum. Vraag eerst aan welke fase de student bezig is. Geef geen code, en ook geen methodesignaturen die hij zo kan overnemen. De opgave laat een List toe, maar die heeft hij nog niet gezien: stuur hem naar arrays. VraagDetails en Stemwijzer vragen en tonen zelf iets: dat vraagt de opgave, dus de huisregel over Toon- en Vraag-methoden geldt hier niet.

# Aanpak

Fase 0: eerst Main. Twee arrays van dezelfde lengte, en een loop die nooit stopt en de drie fasen na elkaar oproept. Laat hem zelf een lengte kiezen. Met voorlopig lege methoden compileert het al.

Fase 1: laat hem twee vragen apart beantwoorden: staat de naam al in de array, en waar is de eerste lege plaats? Vraag wat er op een lege plaats van een nieuwe string-array staat. Het opnieuw vragen is een loop rond vragen en controleren. Denk ook na over wat er met "admin" gebeurt.

Fase 2.1: laat hem de boom in gewone taal overlopen: welke vraag na welk antwoord, en welke partij op het einde. Er zijn drie vragen die telkens enkel ja of nee aanvaarden: wordt dat best een methode? Tel ondertussen de ja's en de nee's.

Fase 2.2: VraagDetails geeft enkel een bool terug. Hoe weet Main dan op welke index de naam van de huidige gebruiker terechtkwam? Laat hem daar eerst een antwoord op zoeken voor hij het resultaat bewaart.

Fase 3: begin met tellen hoeveel keer elke partij voorkomt. De percentages en de sterretjes volgen daaruit. Vraag wat hij doet met de plaatsen in de arrays waar nog niets staat, en welk type een deling van twee gehele getallen oplevert.

Extra: een enum met de vier partijen, en daarna de resultatenarray van dat type. Laat hem nagaan welke methoden daardoor mee moeten veranderen.

# Valkuilen

- De optionele bool vóór de kleur zetten: dat compileert niet.
- In de nee-tak van de eerste vraag toch een ja tellen.
- De controle op ja of nee drie keer kopiëren (redundantie).
- De naam al in de array zetten voor gecontroleerd is of hij er al stond.
- Een resultaat bewaren voor admin, of het resultaat op een andere index zetten dan de naam.
- In de statistieken de lege plaatsen meetellen, of de lengte van een lege naam opvragen, wat crasht.
- Delen door de lengte van de array in plaats van door het aantal gebruikers.
- Het percentage of de gemiddelde naamlengte met een gehele deling berekenen.
- De lus voor de sterretjes per partij kopiëren (redundantie).

# Puntenverdeling

De punten per fase komen uit de opgave, samen 14. De opgave noemt geen totaal. De deelpunten binnen elke fase zijn achteraf toegevoegd.

**Fase 0, Wie ben je? (2 punten)**

- Twee synchrone arrays voor namen en resultaten: 0,5
- Een loop die nooit stopt en per ronde VraagDetails, StemWijzer en ToonStatistieken in die volgorde oproept, met de arrays als parameter: 1,5

**Fase 1, Identificatie (3 punten)**

- VraagDetails met de namenarray en een ConsoleColor (standaard Red) als parameters, en returntype bool: 0,5
- De naam vragen in de meegegeven kleur en bewaren op de eerste lege plaats: 1
- Bestaat de naam al, dan een foutboodschap en opnieuw vragen, tot de naam geldig is: 1
- True teruggeven bij "admin", anders false: 0,5

**Fase 2.1, Welke partij past bij je? (2 punten)**

- StemWijzer met een ConsoleColor en daarna een bool voor admin (standaard false), returntype string: 0,5
- De beslissingsboom met de juiste vragen en partijen, in de meegegeven kleur: 0,5
- Enkel ja of nee aanvaarden, anders de vraag opnieuw stellen: 0,5
- Het aantal ja en nee tellen, het scherm leegmaken en de zin met partij en aantallen tonen: 0,5

**Fase 2.2, Resultaat bewaren (2 punten)**

- StemWijzer geeft de partij terug: 0,5
- Het resultaat enkel bewaren voor wie geen admin is, op dezelfde index als zijn naam: 1,5

**Fase 3, Statistieken tonen (3 punten)**

- ToonStatistieken met de twee arrays, en per partij het percentage: 1
- Per partij een lijn met evenveel sterretjes als stemmen: 0,5
- De gemiddelde lengte van de namen, met cijfers na de komma: 1
- Een overzicht met de eerste letter van elke naam en de partij: 0,5

**Extra, Enum (2 punten)**

- Een enum met de vier partijen: 0,5
- De resultatenarray van dat enumtype, en de code die ermee werkt aangepast: 1,5

# Beoordeling

- Wat de bool in StemWijzer moet doen, zegt de opgave niet. De parameter moet er zijn, met standaard false, maar hoeft niets te doen.
- De opgave laat lists toe. Een List valt buiten de leerstof van hoofdstuk 1 tot en met 8, maar kost hier niets. LINQ-methoden erop blijven de boete.
- De hoofdloop stopt nooit, zo vraagt de opgave. Een loop met een voorwaarde die altijd waar is, zonder `break`, is hier geen boete. Dat een array na een aantal gebruikers vol zit, kost niets.
- Of "admin" zelf in de namenarray komt, zegt de opgave niet. Keur beide goed, zolang naam en resultaat van de gewone gebruikers op dezelfde index blijven. Of Stemwijzer en ToonStatistieken ook na een admin lopen, is vrij.
- Hoe Main de index van de huidige gebruiker vindt (de laatst ingevulde plaats zoeken, of een teller bijhouden), is vrij.
- Elke nee telt als nee, ook in de nee-tak van de eerste vraag.
- Het percentage mag afgerond of afgekapt zijn (66% of 66,67%), zolang het berekend is op het aantal gebruikers en niet op de lengte van de array. Een gehele deling die 0 geeft, of 4 in plaats van 4,75 bij de gemiddelde naamlengte, is dat deelpunt niet af.
- Lege plaatsen in de arrays tellen niet mee. Crasht ToonStatistieken op een lege plaats, dan werkt het deelpunt waar dat gebeurt niet.
- Vier keer dezelfde code per partij, voor het tellen of voor de sterretjes, is de boete voor redundante code. Een teller per partij in een array is de logische aanpak.
- Extra: wie de enum gebruikt, mag Stemwijzer een enum laten teruggeven en ToonStatistieken een array van die enum laten ontvangen. Dat kost niets in fase 2.1, 2.2 of 3. Een enum die wel bestaat maar niet gebruikt wordt voor de resultatenarray, levert enkel het eerste deelpunt van de extra op.
- Enkel "ja" en "nee" in kleine letters aanvaarden is genoeg.
