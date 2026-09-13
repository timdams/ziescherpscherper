<!--
  Coach- en quoteergegevens voor oefeningen/EindeTests/Mod4/Opgave_1819_2ezit.md (veiling, augustus 2019).
  Formaat: zie _LEESMIJ.md in deze map.
-->
# Nota

Een OOP-vaardigheidsproef in één project: een veiling met schilderijen. Vier delen: drie klassen (Schilderij, WaardeBepaler, Koper), het veilingprogramma, de kindklasse Picasso, en twee extra methoden in Koper. Vraag eerst aan welk deel de student bezig is. Geef geen code, geen klassedefinities en geen methodes die hij zo kan overnemen. Laat hem zelf kiezen hoe een schilderij zijn vlakken onthoudt. Kiest hij een tweedimensionale array, dan is dat leerstof uit hoofdstuk 8; een gewone array mag evengoed.

# Aanpak

Schilderij: laat de student eerst uitleggen waarom twee keer TekenSchilderij op hetzelfde object hetzelfde schilderij moet geven. Wat moet het object dus onthouden, en wanneer wordt dat bepaald: bij het aanmaken of bij het tekenen? Tel de rode vlakken op het moment dat ze gekozen worden. Denk bij het tekenen na over hoe breed één vlak op het scherm moet zijn om een vierkant te lijken.

WaardeBepaler: een static methode, dus zonder object. Laat hem eerst met de hand het voorbeeld van 50 rode vlakken narekenen en zeggen welke methodes uit de Math-bibliotheek hij nodig heeft. Afronden gebeurt in de methode, niet bij het tonen.

Koper: welke gegevens heeft een koper, en wie mag ze aanpassen? Het budget mag enkel van binnenuit veranderen. Koop is drie stappen: waarde vragen aan WaardeBepaler, nagaan of het budget volstaat, en dan pas afhouden en toevoegen. TotaleWinst is een loop over zijn schilderijen.

Veiling: schrijf eerst in woorden één ronde uit. Wie mag eerst? Wanneer probeert de computer? Wanneer is er in die ronde niets verkocht? Dat laatste is meteen de voorwaarde van de loop. Pas na de loop vergelijk je de twee kopers.

Picasso: wat verschilt er precies met een gewoon schilderij? Enkel de grootte. Vraag hoe hij die ene waarde kan laten verschillen zonder de code van Schilderij te kopiëren. Voor de 30 procent: welk getal uit Random betekent "Picasso"?

Koper++: sorteren op een eigen volgorde is waarvoor IComparable dient. Laat hem uitleggen wanneer een schilderij voor een ander komt. Voor KrijgSchilderij: wat moet er bij de ene koper bijkomen en bij de andere verdwijnen, en in welke volgorde doe je dat?

# Valkuilen

- Schilderij: de kleuren pas kiezen in TekenSchilderij, waardoor elke aanroep een ander schilderij tekent.
- Schilderij: de rode vlakken bij het tekenen tellen, waardoor het aantal oploopt bij elke aanroep.
- Schilderij: vergeten de achtergrondkleur na het tekenen terug te zetten.
- WaardeBepaler: afronden met een formattering bij het tonen, terwijl de methode een onafgeronde waarde teruggeeft.
- WaardeBepaler: eerst de vierkantswortel en dan maal 1000, in plaats van omgekeerd.
- Koper: het budget een publieke setter geven, of de lijst publiek maken zodat iedereen er schilderijen in kan steken.
- Koper: het schilderij toevoegen of het budget verlagen voor de controle of het budget volstaat.
- Veiling: het spel stoppen zodra één van beiden niet koopt, in plaats van wanneer beiden het huidige schilderij laten liggen.
- Veiling: TotaleWinst vergelijken zonder het overgebleven budget erbij te tellen.
- Picasso: de hele klasse Schilderij kopiëren en er 15 van maken (redundante code).
- Picasso: een kans van 3 op 11 of 4 op 10 kiezen door een verkeerde grens bij Next.
- Koper++: sorteren van laag naar hoog in plaats van hoogste waarde vooraan.
- Koper++: bij KrijgSchilderij het schilderij wel toevoegen maar niet weghalen bij de andere koper.
- Het spel schrijven als een eindeloze loop die enkel met een `break` stopt (boete).

# Puntenverdeling

De punten per deel komen uit de originele proef en tellen op tot 19. De opgave vermeldt dat totaal. De deelpunten binnen een deel zijn achteraf toegevoegd en tellen op tot het aantal van dat deel.

**Deel 1, klasse Schilderij (3 punten)**

- Elk object bepaalt eenmalig een willekeurig schilderij van 10 bij 10 met gele, rode en groene vlakken en onthoudt het, zodat meerdere aanroepen van TekenSchilderij hetzelfde schilderij tonen: 1,5
- TekenSchilderij tekent het schilderij in kleur, met de kleuren nadien teruggezet: 1
- KrijgData geeft het aantal rode vlakken terug: 0,5

**Deel 1, klasse WaardeBepaler (2 punten)**

- Klasse met één static methode BerekenWaarde die een int krijgt en een double teruggeeft: 0,5
- Berekent de vierkantswortel van 1000 maal het aantal rode vlakken, afgerond op 1 cijfer na de komma: 1,5

**Deel 1, klasse Koper (4 punten)**

- Budget als property die van buitenaf enkel leesbaar is, met een private setter, en een constructor die het budget op 1500 zet; een private lijst van schilderijen, leeg bij de start: 1
- Koop: krijgt een Schilderij, berekent de waarde met WaardeBepaler, en bij voldoende budget het budget verlagen, het schilderij toevoegen en true teruggeven, anders false: 2
- TotaleWinst geeft de som van de waarden van alle schilderijen in de lijst terug als int: 1

**Deel 2, veiling (4 punten)**

- Twee Koper-objecten, één voor de gebruiker en één voor de computer; per ronde een nieuw schilderij met de waarde eronder: 1
- De gebruiker kiest of hij koopt; koopt hij niet, dan koopt de computer als zijn budget volstaat: 1,5
- De loop stopt wanneer het huidige schilderij door niemand gekocht wordt: 0,5
- Winnaar bepaald op TotaleWinst plus overgebleven budget, en getoond: 1

**Deel 3, Picasso (2 punten)**

- Klasse Picasso die een Schilderij is, met een schilderij van 15 bij 15, zonder de code van Schilderij te herhalen: 1
- In de veiling is het schilderij in ongeveer 30 procent van de rondes een Picasso, de rest werkt ongewijzigd: 1

**Deel 4, Koper++ (4 punten)**

- SorteerBezit sorteert de schilderijen van de koper op waarde, hoogste vooraan: 1,5
- KrijgSchilderij krijgt een Koper, neemt het eerste schilderij uit diens lijst over en verwijdert het daar: 1,5
- Code achteraan het spel die aantoont dat beide methoden werken (voor en na tonen): 1

# Beoordeling

- Schilderij: de opgave zegt dat de klasse bijhoudt hoeveel rode, gele en groene vlakken er zijn. Enkel het aantal rode vlakken wordt verder gebruikt. Het aantal gele en groene bijhouden is niet nodig voor de punten en ontbreken kost niets.
- Schilderij: wie de kleuren elke keer opnieuw kiest in TekenSchilderij, heeft het eerste onderdeel niet (0), ook als het schilderij er goed uitziet. Dan klopt KrijgData ook niet met wat getekend werd; dat reken je niet nog eens aan.
- Schilderij: de opgave vraagt het schilderij in de linkerbovenhoek te tekenen. Tekent hij gewoon op de huidige plaats van de cursor, dan is het tweede onderdeel een half punt. Of een vlak één of twee tekens breed is, maakt niet uit.
- Schilderij: een eigen Random per object is in de huidige .NET geen probleem meer (in het oude .NET Framework gaf dat vaak identieke schilderijen). Een static Random is netter maar niet verplicht.
- WaardeBepaler: de methode moet de afgeronde waarde teruggeven. Enkel bij het tonen afronden, met een formattering, kost een half punt in het tweede onderdeel.
- Koper: het type van het budget is niet vastgelegd. Een double is logisch. Een int is ook goed, als de waarde bewust omgezet wordt.
- Koper: de constructor die het budget op 1500 zet, is gevraagd. Enkel een beginwaarde bij de declaratie zonder constructor kost een half punt. Een publieke setter op Budget kost het eerste onderdeel een half punt; een publieke lijst ook.
- Koper: of Koop een budget dat precies gelijk is aan de waarde nog toelaat, legt de opgave niet vast. Beide zijn goed.
- Koper: TotaleWinst mag elke waarde eerst naar een int omzetten of de som op het einde. Beide zijn goed. De naam TotaleWinst is die van de opgave, ook al is het eigenlijk de totale waarde.
- Veiling: zegt de gebruiker "ja" maar heeft hij niet genoeg budget, dan mag de computer het schilderij nog kopen, zoals de opgave zegt. Stopt het spel in dat geval meteen, dan is het onderdeel over het stoppen van de loop 0.
- Veiling: een gelijke stand staat niet in de opgave. Hoe de student die afhandelt, is vrij.
- Veiling: de waarde onder het schilderij moet berekend worden met WaardeBepaler, niet opnieuw uitgeschreven in Main. Een kopie van de formule is de boete voor redundante code.
- Picasso: overerving is gevraagd. Een Picasso die de volledige teken- en vulcode van Schilderij kopieert in plaats van de grootte via de ouderklasse te regelen, krijgt voor het eerste onderdeel een half punt. Dat is dan geen aparte boete voor redundante code. Een constructor met de grootte als parameter, een protected instantievariabele of een virtual property voor de grootte zijn allemaal goed.
- Picasso: "ongeveer 30 procent" moet ook ongeveer 30 procent zijn. Een grens die 3 op 11 of 40 procent geeft, kost een half punt.
- Koper++: IComparable op Schilderij met List.Sort is de verwachte aanpak. Een zelfgeschreven sorteerlus die juist sorteert, is ook goed. OrderBy, LINQ of een lambda is leerstof die nog niet gezien is: dan is dat onderdeel 0. Van laag naar hoog sorteren kost een half punt.
- Koper++: SorteerBezit mag void zijn of de lijst teruggeven; de opgave legt dat niet vast. Een controle op een lege lijst in KrijgSchilderij vraagt de opgave niet: ontbreekt ze, dan geen aftrek.
- Koper++: KrijgSchilderij mag rechtstreeks aan de private lijst van de andere koper, want dat is dezelfde klasse. Een extra publieke methode of property om een schilderij weg te halen is ook goed.
- De opgave zegt "Het spel toont wie heeft gewonnen en sluit dan af", en in deel 4 "voeg achteraan het spel code toe". De demonstratie na de winnaar is dus geen tegenspraak.
- Klassen in één bestand is de boete, geen puntverlies in de onderdelen. Een enum voor de kleuren in het bestand van Schilderij reken je daar mee.
