<!--
  Coach- en quoteergegevens voor oefeningen/EindeTests/Mod2/Opgave_1920.md.
  Formaat: zie _LEESMIJ.md in deze map.
-->
# Nota

Een vaardigheidsproef met één programma in drie fasen: een startbudget berekenen, huizen aanbieden en kopen, en een overzicht met het gemiddelde. Een aanvullende opgave vraagt elke fase in een eigen methode. Er hoeft geen controle op foute invoer te gebeuren. Vraag eerst aan welke fase de student bezig is. Geef geen code, en ook geen methodesignaturen die hij zo kan overnemen. HuisPrijs toont zelf een beschrijving: dat vraagt de opgave, dus de huisregel over Toon- en Vraag-methoden geldt hier niet.

# Aanpak

Fase 1: begin met BudgetGenerator en de berekening zoals ze in woorden in de opgave staat. Laat hem die voor een paar gevallen met de hand narekenen. De figuur met het overzicht (4500 bij moeilijkheidsgraad 5 zonder bonus) is een goed geval om na te rekenen. Daarna de invoer: hoe maakt hij van j of n een bool?

Fase 2: eerst HuisPrijs alleen, en die een paar keer oproepen. Laat hem zeggen hoe hij met Random een kans van één op drie maakt, en waarom het aantal kamers en het terras maar één keer gekozen mogen worden. Daarna de loop: welke twee redenen zijn er om te stoppen? Welke index gebruikt hij voor de twee arrays, en hoe lang moeten die zijn als er hoogstens 20 huizen komen?

Fase 3: hoe weet hij hoeveel huizen er echt getoond werden? Het gemiddelde gaat enkel over de gekochte huizen.

Aanvullende opgave: laat hem per fase zeggen wat die binnenkrijgt en wat ze teruggeeft. Welke gegevens moeten van de ene fase naar de volgende, en wat gebeurt er met een array die hij als parameter meegeeft?

# Valkuilen

- De moeilijkheidsgraad bijtellen in plaats van 100 per graad af te trekken.
- BudgetGenerator oproepen met vaste waarden in plaats van de invoer, of de argumenten in de verkeerde volgorde meegeven.
- De bovengrens van Next verkeerd kiezen, waardoor een huis nooit 3 slaapkamers heeft.
- In HuisPrijs de kamers of het terras opnieuw willekeurig kiezen voor de beschrijving, zodat beschrijving en prijs niet overeenkomen.
- De arrays korter maken dan 20, waardoor het programma crasht als hij veel huizen laat liggen.
- De index enkel verhogen bij een gekocht huis, zodat de twee arrays niet meer synchroon lopen.
- De twee stopvoorwaarden van de loop met "of" verbinden, zodat hij pas stopt als beide waar zijn.
- In fase 3 ook de lege plaatsen van de arrays tonen.
- Het gemiddelde delen door alle huizen in plaats van door de gekochte, of met een gehele deling.
- De loop verlaten met een `break` (boete).

# Puntenverdeling

De punten per fase komen uit de opgave, samen 18. De opgave noemt geen totaal. De deelpunten binnen elke fase zijn achteraf toegevoegd.

**Fase 1, Setup (4 punten)**

- De moeilijkheidsgraad vragen, en de bonus vragen en als bool bewaren: 1
- BudgetGenerator met returntype double, en als parameters de moeilijkheidsgraad als geheel getal (standaard 5) en de startbonus als bool (standaard true), in die volgorde: 1
- De berekening: 5000, plus 2500 bij een bonus, min 100 per moeilijkheidsgraad: 1
- Oproepen met de ingevoerde waarden, het budget bewaren en tonen: 1

**Fase 2, Training (8 punten)**

- HuisPrijs zonder parameters, returntype int: 0,5
- Willekeurig 1, 2 of 3 slaapkamers, en een terras bij een derde van de huizen: 1,5
- De prijs: 1000, plus 120 per slaapkamer, plus 450 voor een terras, en die prijs teruggeven: 1
- In HuisPrijs de beschrijving met kamers, terras en prijs tonen: 0,5
- Een loop die stopt als het budget op is of na 20 huizen: 1,5
- Per huis het huidige budget en de vraag met de prijs tonen: 0,5
- Bij j het budget verminderen met de prijs van het huis: 1
- Per getoond huis de prijs en of het gekocht werd bewaren, in twee arrays op dezelfde index: 1,5

**Fase 3, Afsluiten (4 punten)**

- Een overzicht van de getoonde huizen, zonder de lege plaatsen, met de prijs en of het gekocht werd: 1,5
- BerekenGemiddelde met returntype double, en als parameters de bool-array en de array met prijzen, in die volgorde: 0,5
- Het gemiddelde van enkel de gekochte huizen, met cijfers na de komma: 1,5
- Het gemiddelde in een zin tonen: 0,5

**Aanvullende opgave (2 punten)**

- Elke fase in een eigen methode: 1
- In Main enkel de drie oproepen en de variabelen die gegevens tussen de fasen doorgeven, via parameters en returnwaarden: 1

# Beoordeling

- "Zolang de trainee budget heeft": de voorbeelden tonen dat hij meer mag uitgeven dan hij heeft, en dat de loop daarna stopt. Wie een te duur huis weigert, heeft het ook goed. In elk geval stopt de loop na 20 huizen.
- Of de zin met het gemiddelde in Main of in de methode van fase 3 getoond wordt, is vrij.
- Wat er moet gebeuren als er geen enkel huis gekocht is, zegt de opgave niet. Dat hoeft niet opgevangen te worden.
- Variabelen op het niveau van de klasse, buiten Main, om gegevens tussen de fasen te delen, vallen buiten de leerstof en omzeilen wat de aanvullende opgave toetst: dan is het tweede deelpunt daarvan niet af.
- Een aparte lijn voor een huis met en een huis zonder terras is prima. Een aparte lijn voor elke combinatie van kamers en terras is de boete voor redundante code.