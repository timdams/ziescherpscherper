<!--
  Coach- en quoteergegevens voor oefeningen/EindeTests/Mod2/Opgave_2021.md.
  Formaat: zie _LEESMIJ.md in deze map.
-->
# Nota

Een vaardigheidsproef met één programma in vier delen: een signaal van 100 letters maken, het tonen met de verdachte letters in het rood, het analyseren, en opnieuw beginnen. Bijna alles zit in kleine methoden waarvan de opgave de naam, de parameters en het returntype vastlegt. Vraag eerst aan welk deel de student bezig is. Geef geen code, en ook geen methodesignaturen die hij zo kan overnemen.

# Aanpak

Deel 1: een char is intern een getal. Laat hem nadenken hoe hij daarmee een willekeurige hoofdletter van A tot en met Z maakt, en welke grenzen hij aan Random geeft zodat Z ook kan voorkomen. MaakSignaal toont niets: het tonen gebeurt op de plek waar de methode opgeroepen wordt.

Deel 2: begin met de twee hulpmethoden en test ze apart met een paar letters. VisualiseerCode is daarna een loop die per teken NeedsColor vraagt en kiest tussen het teken in het rood en een punt.

Deel 3: CountSpecials lijkt op VisualiseerCode, maar telt in plaats van te tonen, en gebruikt ook NeedsColor. IsVerdacht: hoe test je of een getal een veelvoud van 3 is? Laat hem de inleiding van deel 3 nog eens lezen en zeggen wat er bij 0 moet gebeuren. AnalyseerCode roept beide op en toont de zinnen.

Deel 4: een loop rond deel 1 tot en met 3. Welke loop past het best als alles zeker één keer moet gebeuren?

# Valkuilen

- De bovengrens van Next zo kiezen dat Z nooit voorkomt.
- Het signaal al tonen in MaakSignaal.
- MaakSignaal meer dan één keer per ronde oproepen, zodat VisualiseerCode en AnalyseerCode een ander signaal krijgen.
- In NeedsColor "en" gebruiken waar "of" hoort, zodat nooit iets rood wordt.
- In WriteCharInRed de kleur niet resetten, of WriteLine gebruiken zodat elk teken op een nieuwe lijn staat.
- In CountSpecials X, Y, Z en Q opnieuw zelf testen in plaats van NeedsColor te gebruiken.
- IsVerdacht die true teruggeeft bij 0.
- IsVerdacht of CountSpecials die iets tonen in plaats van iets teruggeven.
- Count() of Contains() op de char-array gebruiken (boete).
- Deel 4 schrijven met een loop die enkel met een `break` stopt (boete).

# Puntenverdeling

De originele proef had geen puntenverdeling. Deze is achteraf toegevoegd, op 20.

**Deel 1, Signaal namaken (5 punten)**

- MaakSignaal zonder parameters, geeft een char-array terug: 1
- De array is 100 lang en gevuld met willekeurige hoofdletters van A tot en met Z: 2
- MaakSignaal toont niets: 1
- Bij de start opgeroepen, en de code op het scherm getoond: 1

**Deel 2, Visualisatie signaal (6 punten)**

- NeedsColor: krijgt een char, geeft een bool terug, true enkel bij X, Y, Z en Q: 1,5
- WriteCharInRed: krijgt een char, geeft niets terug, toont het teken in het rood met Write en reset daarna de kleur: 1,5
- VisualiseerCode: krijgt een char-array, geeft niets terug, overloopt elk element: 1
- VisualiseerCode gebruikt NeedsColor en WriteCharInRed, en toont een punt voor elk ander teken: 2

**Deel 3, Analyse signaal (7 punten)**

- CountSpecials: krijgt een char-array, geeft een int terug, telt de speciale tekens met NeedsColor: 2
- IsVerdacht: krijgt een int, geeft een bool terug, true bij een veelvoud van 3: 1,5
- IsVerdacht: false bij 0: 0,5
- AnalyseerCode: krijgt een char-array, geeft niets terug, roept CountSpecials op en toont het aantal speciale tekens: 1,5
- AnalyseerCode geeft dat aantal aan IsVerdacht en toont "Dit is een verdacht signaal" of "Dit is geen verdacht signaal": 1,5

**Deel 4, Opnieuw? (2 punten)**

- Deel 1 tot en met 3 opnieuw, met een nieuw signaal, zolang de gebruiker j ingeeft, en anders stoppen: 2

# Beoordeling

- MaakSignaal mag niets tonen, dat zegt de opgave letterlijk. Toont de methode het signaal toch, dan is dat deelpunt 0.
- Het signaal tonen mag in Main of in een aparte methode, als één tekst of teken per teken.
- IsVerdacht: de opgave zegt dat 0 niet verdacht is, zowel in de inleiding van deel 3 als bij IsVerdacht zelf. Een signaal van 100 letters zonder één X, Y, Z of Q komt zo goed als nooit voor: beoordeel dit door de code te lezen.
- Het signaal bestaat enkel uit hoofdletters. NeedsColor hoeft kleine letters niet te herkennen.
- NeedsColor met een switch, met een voorwaarde met "of", of met Contains op een string: allemaal goed. Contains op een char-array is LINQ en dus de boete.
- AnalyseerCode mag CountSpecials één keer oproepen en het resultaat bewaren, of twee keer oproepen. Het tweede is geen boete.
- De twee zinnen over het verdachte signaal geeft de opgave letterlijk; kleine verschillen in leestekens kosten niets. De zin met het aantal speciale tekens is vrij, zolang het aantal erin staat.
- Deel 4: de opgave vraagt j "als karakter". De invoer als tekst vergelijken met j is ook goed. Dat het programma crasht bij een lege invoer als hij die omzet naar een char, kost niets: de voorbeeldoplossing doet hetzelfde.
- Toont VisualiseerCode de gewone letters in plaats van een punt, dan is het laatste deelpunt van deel 2 niet af.
