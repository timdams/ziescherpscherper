<!--
  Coach- en quoteergegevens voor oefeningen/EindeTests/Mod2/Opgave_2122c.md.
  Formaat: zie _LEESMIJ.md in deze map.
-->
# Nota

Een vaardigheidsproef met één opgave: een kassaprogramma voor hamburgers, opgebouwd uit methoden die de flowchart en de tekst vastleggen (BestelHamburger, BestelFrietjes, BestelDrinken en BerekenTotaal), met een enum, optionele parameters en een visualisatie in kleur. Geef geen code en geen methodesignaturen die hij zo kan overnemen.

# Aanpak

Laat de student eerst de flowchart in gewone taal vertellen: welke methode roept welke andere op, en wat geeft elke methode terug. Main doet weinig: een loop die BestelHamburger oproept en het resultaat in een array bewaart, tot er 100 bestellingen zijn.

BestelFrietjes en BestelDrinken zijn klein: vragen, omzetten, teruggeven. Vraag bij de drank hoe een getal een waarde van de enum wordt, en welk getal bij welke drank hoort.

BestelHamburger: eerst de keuze van de hamburger, die herhaald wordt zolang ze niet geldig is. Laat hem de voorwaarde van die loop in woorden zeggen voor hij ze schrijft. Daarna frietjes en drank: wat geef je door aan BerekenTotaal als de klant geen frietjes of geen drank wil?

BerekenTotaal: laat hem eerst de parameters met hun standaardwaarden opschrijven. Daarna de prijs zonder promoties, dan de promoties: welke voorwaarde test je eerst, zodat een bestelling er hoogstens één krijgt en Hipster voorgaat? De visualisatie als laatste: welke kleur hoort bij welke hamburger, hoeveel keer schrijf je de letter I, en wanneer zet je de kleur terug.

# Valkuilen

- De waarde Geen vergeten in de enum Frisdranken, waardoor de standaardwaarde van de parameter niet te schrijven is.
- BerekenTotaal oproepen zonder het aantal frietjes als de klant geen frietjes wil: de standaardwaarde is 1, dus dan wordt er toch een frietje aangerekend.
- De optionele parameters voor de verplichte zetten.
- De voorwaarde van de loop bij de hamburger met `&&` en `||` door elkaar, waardoor hij nooit stopt of nooit herhaalt.
- De prijs tonen zonder 2 cijfers na de komma, of de prijs tonen maar niet teruggeven.
- De promotie Box geven als er enkel frietjes of enkel drank is.
- Box en Hipster allebei geven aan de hipsterbestelling, of Box eerst testen zodat Hipster nooit voorkomt.
- De voorgrondkleur veranderen in plaats van de achtergrondkleur, of de kleur niet terugzetten, waardoor de rest ook gekleurd is.
- De letters I één voor één uitschrijven voor een vast aantal in plaats van met een loop.
- De index van de array in Main nooit verhogen, of voorbij 100 schrijven.

# Puntenverdeling

De punten per onderdeel komen uit de opgave: methoden 10, uitbreiding 2, samen 12. De deelpunten binnen een onderdeel zijn achteraf toegevoegd.

**BestelHamburger (3 punten)**

- Toont de menukaart en vraagt de hamburger, opnieuw zolang het antwoord niet gewoon, fish of veggie is: 1
- Vraagt met j of n naar frietjes en naar drank, en roept enkel bij ja BestelFrietjes en BestelDrinken op: 1
- Roept BerekenTotaal op met de hamburger, het aantal frietjes en de drank, en geeft het resultaat als double terug: 1

**BestelFrietjes (1 punt)**

- Vraagt het aantal frietjes en geeft het getal terug: 1

**BestelDrinken (2 punten)**

- Enum Frisdranken met Geen, Water, Fanta en Cola: 0,5
- Vraagt een getal, zet het om naar een Frisdranken en geeft die enum terug: 1,5

**BerekenTotaal (4 punten)**

- Parameters: hamburger als verplichte string, aantal frietjes als optionele int met standaard 1, drank als optionele Frisdranken met standaard Geen: 1
- Totaalprijs volgens de menukaart, frietjes aan 2 euro per stuk: 1
- Promoties Box en Hipster toepassen, hoogstens één per bestelling met voorrang voor Hipster, en de promotie vermelden voor de prijs: 1,5
- Prijs tonen met 2 cijfers na de komma en als double teruggeven: 0,5

**Uitbreiding: visualisatie bestelling (2 punten)**

- H met achtergrond groen, blauw of rood volgens de hamburger, en de kleur daarna terugzetten: 1
- Evenveel keer I als frietjes, gevolgd door W, F of C volgens de drank (niets zonder drank): 1

# Beoordeling

- Main heeft in de originele verdeling geen punten. De applicatie stopt na 100 bestellingen. Een loop die altijd doorgaat en telkens op dezelfde plaats of opnieuw vooraan in de array schrijft, kost niets. Een loop die voorbij de array schrijft, mag je als werkpunt noemen.
- Ontbreekt Geen in de enum, dan reken je dat aan bij de enum (0,5). Een standaardwaarde die daardoor stilletjes Water betekent, kost niet nog eens punten bij BerekenTotaal.
- De menukaart heeft geen nummers voor de dranken. Elke nummering is goed, als de vraag in BestelDrinken ze toont en de omzetting ermee klopt.
- De opgave legt vast dat een bestelling hoogstens één promotie krijgt en dat Hipster voorgaat. Beide promoties samen toepassen (de hipsterbestelling komt dan op -1 euro), of Box geven aan de hipsterbestelling, kost de helft van het deelpunt voor de promoties.
- Bij de hamburger en bij j of n moet de invoer exact overeenkomen; hoofdletters of andere antwoorden hoeven niet opgevangen te worden. Bij het aantal frietjes en het drankgetal is er geen controle nodig.
- BerekenTotaal toont zelf de prijs en de visualisatie; dat legt de opgave op.
- De I's zonder loop, voor een paar vaste aantallen uitgeschreven, werkt niet voor elk aantal: 0 op dat deelpunt.
- De kleur per hamburger en de prijs per hamburger in twee aparte, identieke keuzestructuren zetten, is geen fout. Dezelfde berekening op meerdere plaatsen kopiëren wel: dat is de boete voor redundante code, geen verlies in de onderdelen.
