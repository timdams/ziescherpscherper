<!--
  Coach- en quoteergegevens voor oefeningen/EindeTests/Mod2/Opgave_1819.md.
  Formaat: zie _LEESMIJ.md in deze map.
-->
# Nota

Een vaardigheidsproef met één programma: een casino met drie spelletjes, opgebouwd uit methoden. De code van de casinoloop en van ToonMenu staat al in de opgave. De student schrijft SetupCasino, de drie spelmethoden en ShowEnding, en die onderdelen zijn los van elkaar te maken. Vraag eerst aan welk onderdeel hij bezig is. Geef geen code, en ook geen methodesignaturen die hij zo kan overnemen. De spelmethoden vragen en tonen zelf iets op het scherm: dat vraagt de opgave, dus de huisregel dat enkel Toon- en Vraag-methoden dat mogen, geldt hier niet.

# Aanpak

Start: laat de student de gegeven loop en ToonMenu overnemen en aanwijzen welke methoden daarin opgeroepen worden die nog niet bestaan. Laat hem uit de gegeven code afleiden wat elke spelmethode moet teruggeven. Met voorlopige versies die niets winnen, compileert het project al en kan hij elk spel apart afwerken. De puntenverdeling zegt waar hij best begint.

SetupCasino: eerst de parameters. Welke zijn optioneel, en waar moeten die dan staan? Daarna de controle op lengte en breedte. Laat hem nadenken hoe hij een lijn sterretjes precies zo breed maakt als de breedte die binnenkomt, zonder dat aantal vast te typen.

RaadHetGetal: laat hem het verloop in gewone taal zeggen: eerst de schatting, dan raden tot het juist is, en ondertussen tellen. Pas daarna de winst: welke drie gevallen zijn er, en in welke volgorde test hij ze zodat een exacte schatting niet bij "hoogstens 2 ernaast" terechtkomt?

RekenenMaar: vijf keer hetzelfde, dus een loop. Vraag hem welke getallen Random precies kan teruggeven met de grenzen die hij kiest.

ArrayGame: eerst de array vullen en tonen, zodat hij kan testen. Het raden is een loop met twee redenen om te stoppen: een foute gok, of het einde van de array. Laat hem allebei in de loopvoorwaarde krijgen. De winst hangt af van hoe ver hij geraakte.

ShowEnding: krijgt het geld binnen en toont of het winst, verlies of geen van beide is.

# Valkuilen

- SetupCasino: de optionele parameters vóór de naam zetten, wat niet compileert.
- SetupCasino: de lijn sterretjes als vaste tekst in plaats van zo breed als de meegegeven breedte.
- Toch verder gaan met het casino als SetupCasino false teruggeeft.
- RaadHetGetal of RekenenMaar: de bovengrens van Next verkeerd kiezen, waardoor 10 nooit voorkomt.
- RaadHetGetal: de laatste, juiste gok niet meetellen als poging.
- RaadHetGetal: enkel nagaan of hij minder pogingen nodig had dan geschat, niet of het er meer waren.
- RaadHetGetal: "hoogstens 2 ernaast" eerst testen, zodat een exacte schatting maar 5 oplevert.
- Een spelmethode die de winst toont maar niet teruggeeft, of een returntype dat niet past bij de gegeven code.
- ArrayGame: na tien juiste gokken blijven vragen en buiten de array lopen.
- ArrayGame: bij tien juiste gokken 50 geven in plaats van 100.
- ArrayGame: de raadloop verlaten met een `break` bij een foute gok (boete).
- ShowEnding vergeten: de gegeven code roept die op, dus dan compileert het project niet.

# Puntenverdeling

De punten per onderdeel komen uit de opgave, samen 16. De opgave noemt geen totaal. De deelpunten binnen elk onderdeel zijn achteraf toegevoegd.

**Opstarten casino (3 punten)**

- SetupCasino met returntype bool, een naam, en twee optionele gehele getallen: lengte (standaard 40) en breedte (standaard 30): 1
- False bij een lengte of breedte kleiner dan 1. Anders het consolescherm op die breedte en hoogte zetten, en drie lijnen tonen: sterretjes over de volledige breedte, "Welkom bij Casino AP" met de naam, weer sterretjes: 1,5
- Aanroep vanuit Main, en enkel bij true verder naar de casinoloop: 0,5

**CasinoLoop en ToonMenu (0 punten)**

- Gegeven code.

**RaadHetGetal (4 punten)**

- Eerst vragen hoeveel keer hij denkt te moeten raden, en een willekeurig getal kiezen: 1
- Laten raden tot het getal gevonden is, met een teller van de pogingen en een boodschap bij fout en bij juist: 1,5
- Winst: 50 bij een exacte schatting, 5 als het aantal pogingen hoogstens 2 te veel of te weinig was, anders -5, en die winst teruggeven: 1,5

**RekenenMaar (3 punten)**

- Vijf vermenigvuldigingen met willekeurige factoren van 1 tot en met 10, in een loop: 1
- Het antwoord controleren, met de boodschap bij juist en bij fout: 1
- De winst bijhouden (+5 per juiste, -5 per foute), op het einde tonen en teruggeven: 1

**ArrayGame (5 punten)**

- Een bool-array van lengte 10, willekeurig gevuld met true en false: 1
- Raden met 1 of 0 naar de volgende waarde, stoppen bij de eerste foute gok of na tien juiste, zonder buiten de array te lopen: 2
- Winst: 100 bij tien juiste, anders 5 maal het aantal juiste, tonen en teruggeven: 1
- Op het einde de volledige sequentie tonen: 1

**Afsluiten casino (1 punt)**

- ShowEnding krijgt het geld binnen en toont hoeveel winst of verlies er gemaakt is: 1

# Beoordeling

- De casinoloop en ToonMenu staan in de opgave. Wie ze overneemt, krijgt er geen punten voor, en die code telt niet als redundantie. Staat de casinoloop in Main in plaats van in een methode CasinoLoop, dan kost dat niets.
- Het stoppen zelf doet de gegeven loop al. Het punt van "Afsluiten casino" is voor ShowEnding.
- SetupCasino: het consolescherm groter of kleiner zetten valt buiten de leerstof van hoofdstuk 1 tot en met 8, maar de opgave vraagt het. Beoordeel of de code breedte en hoogte instelt. Dat dit enkel op Windows werkt, kost niets. Een lijn sterretjes als vaste tekst levert voor dat stuk niets op. Of het programma bij false nog een boodschap toont, is vrij. De naam, lengte en breedte in Main mogen vast in de code staan, dat zegt de opgave.
- RaadHetGetal: de juiste gok telt mee als poging ("in 5 keer raadde"). Of de teller die tijdens het raden getoond wordt bij 0 of bij 1 begint, is vrij.
- RekenenMaar: de factoren gaan tot en met 10. Kan 10 nooit voorkomen, dan verliest hij 0,5 in het eerste deelpunt.
- ArrayGame: een `break` om de raadloop te verlaten bij een foute gok is geen zoek-en-stop (de loop leest invoer, hij doorzoekt geen reeks): dat is de boete, geen puntverlies. Loopt het programma na tien juiste gokken buiten de array, dan is het tweede deelpunt niet af.
- De spelmethoden geven een geheel getal terug, want de gegeven code telt het resultaat op bij een int. Een returntype dat daar niet bij past, compileert niet: dat is de boete daarvoor.
- De boodschappen hoeven niet letterlijk die van de voorbeelduitvoer te zijn, zolang dezelfde informatie verschijnt.
- Een Random per spelmethode is goed.
