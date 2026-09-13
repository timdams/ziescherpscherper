<!--
  Coach- en quoteergegevens voor oefeningen/EindeTests/Mod4/Opgave_2122b.md.
  Formaat: zie _LEESMIJ.md in deze map.
-->
# Nota

Een vaardigheidsproef OOP met één opgave, een roosterprogramma, in vier stukken: de basisklassen Vak, Lector en Rooster, de specialisatieklassen LaboVak en HalfTijdseLector, een menu in het hoofdprogramma, en een klasse WeekRooster. Vraag eerst aan welk stuk de student bezig is. Geef geen code, ook geen property, CompareTo of constructor die hij zo kan overnemen.

# Aanpak

Vak en Lector: beslis per property eerst of een autoproperty volstaat, of dat er een controle nodig is en dus een full property met een instantievariabele. Vraag welke standaardwaarden al moeten kloppen op het moment dat er een nieuw Vak gemaakt wordt. Laat de student ook al vooruitkijken: een LaboVak mag 3 uur duren, dus hoe kan een kindklasse de controle op de duur later anders maken?

Rooster: VrijeUren rekent uit hoeveel van de 8 uur nog vrij is, en VoegVakToe gebruikt die waarde voor er iets bijkomt. De exception-klasse maakt hij zelf. Voor VerbeterRooster: vraag hoe een lijst kan weten of het ene vak voor het andere komt. Laat hem eerst in woorden zeggen wat er moet gebeuren als twee titels gelijk zijn.

LaboVak en HalfTijdseLector: welke leden van de ouder moeten virtual zijn zodat de kindklasse ze kan overschrijven? Bij de constructor van LaboVak: welke gegevens neem je over uit het meegegeven Vak, en kan dat Vak eigenlijk wel 3 uur duren?

Hoofdprogramma: een menulus. Bij toevoegen: de invoer vragen, de lector uit de lijst halen met de index, en beslissen of het een Vak of een LaboVak wordt. Vraag wat er moet gebeuren als het rooster vol zit.

WeekRooster: vijf lijsten, één per dag. Vraag hoe hij die vijf bijhoudt zonder dezelfde code vijf keer te schrijven, en hoe hij met Random een kans van 20% maakt.

# Valkuilen

- Duur als autoproperty zonder controle, of een controle die ook 0 of 3 toelaat.
- De standaardlector niet aanmaken, waardoor ToString een NullReferenceException geeft.
- In ToString het Lector-object zelf tonen in plaats van zijn naam, waardoor de naam van de klasse op het scherm komt.
- MaxUur een setter geven, of er een gewone instantievariabele van maken.
- VrijeUren bijhouden met een aparte teller in plaats van het uit de lijst te berekenen.
- VrijeUren de bezette uren laten teruggeven in plaats van de uren die nog vrij zijn.
- In VoegVakToe enkel kijken of er nog vrije uren zijn, en niet of het nieuwe vak er nog in past.
- De RoosterException in het menu niet opvangen, waardoor het programma stopt bij een vol rooster.
- Bij het sorteren de duur oplopend zetten, terwijl lange vakken eerst moeten.
- Duur in Vak niet virtual maken, waardoor LaboVak geen 3 uur toelaat.
- In LaboVak de duur van het meegegeven Vak overnemen en vergeten dat een gewoon Vak nooit 3 uur duurt.
- HalfTijdseLector een vaste 3 laten teruggeven in plaats van de helft van een gewone lector.
- In WijsLectorToe niet controleren of de index bestaat.
- WeekRooster vullen met vijf keer dezelfde gekopieerde lus (boete).
- Het menu schrijven als een `while (true)` met een `break` (boete).

# Puntenverdeling

De originele proef had geen puntenverdeling. Deze is achteraf toegevoegd, op 20.

**Basisklassen (10,5 punten)**

- Vak: Titel standaard "Onbekend", Duur met controle op 1 of 2 uur, een property van het type Lector die standaard een Lector met de naam "Nog Toe te wijzen" bevat: 2
- Vak: ToString toont titel en naam van de lector: 0,5
- Lector: naam, en MaxUur als readonly property die 6 teruggeeft: 1
- Rooster: private lijst van vakken die standaard leeg is, property VrijeUren met het aantal uren dat van de 8 nog vrij is: 1
- ToonRooster: elk vak via ToString onder elkaar, zo vaak getoond als het uren duurt: 1
- VoegVakToe: voegt toe als het vak nog in de VrijeUren past, gooit anders een RoosterException, een zelfgemaakte exception-klasse: 2
- VerbeterRooster: sorteert op titel alfabetisch, en bij gelijke titel het langste vak eerst: 2
- WijsLectorToe: wijst de lector toe aan het vak op index x, met een foutboodschap bij een index die niet bestaat: 1

**Specialisatieklassen (4 punten)**

- LaboVak: erft van Vak, ToString met "(labo) " vooraan, constructor die titel, duur en lector overneemt uit een meegegeven Vak, duur tot en met 3 uur toegelaten: 2
- ToonLabos in Rooster: toont zoals ToonRooster, maar enkel de LaboVak-objecten: 1
- HalfTijdseLector: erft van Lector, MaxUur is de helft van die van een gewone lector: 1

**Hoofdprogramma (3,5 punten)**

- Lijst van 3 lectoren, waarvan 1 halftijds, en een menu dat blijft terugkomen tot de gebruiker kiest om te stoppen: 1
- Voeg vak toe: naam, duur en index van de lector vragen, de lector uit de lijst gebruiken, bij duur 3 een LaboVak, een vol rooster opgevangen zonder crash: 2
- Toon rooster, Verbeter rooster en Toon labo's roepen de juiste methode op: 0,5

**WeekRooster (2 punten)**

- Klasse met 5 lijsten van Vak, default constructor die elke lijst vult met 4 vakken, met 20% kans op een LaboVak: 1,5
- Methode om het rooster per dag te tonen met de naam van de dag, en de menu-optie Toon weekrooster die een WeekRooster maakt en toont: 0,5

# Beoordeling

- Vak, Duur: een full property met een instantievariabele en een controle op 1 of 2. Wat er bij een ongeldige waarde gebeurt (negeren of een exception), legt de opgave niet vast: beide goed. Een autoproperty is 0 voor dat stuk.
- Vak, lector: het standaard Lector-object mag in de constructor of bij de declaratie gemaakt worden. De opgave schrijft "Nog Toe te wijzen" met hoofdletters; hoofdletters in die tekst tellen niet.
- Lector: MaxUur zonder set. Een property die altijd 6 teruggeeft of een readonly instantievariabele erachter zijn allebei goed. MaxUur wordt nergens anders in de opgave gebruikt: een controle op het aantal uren van een lector is niet gevraagd en levert niets extra op.
- VrijeUren geeft het aantal uren terug dat van de 8 nog vrij is. Het moet een property zijn, geen methode, en VoegVakToe moet ze gebruiken. Een property die de bezette uren teruggeeft, levert voor dat stuk hoogstens de helft op; werkt VoegVakToe daarmee wel correct, dan kost dat daar niets meer.
- VoegVakToe: een vak van 1 uur bij 7 uur mag nog, een vak van 2 uur niet. De RoosterException erft van Exception. Een boodschap meegeven is niet verplicht.
- VerbeterRooster: het maximum enkel met beide criteria en lange vakken eerst bij een gelijke titel. Sorteren via IComparable en Sort is de aanpak uit het boek; zelf sorteren met een lus mag ook. OrderBy of Sort met een lambda valt onder "nog niet gezien": dan is dit onderdeel 0. Heeft CompareTo een parameter van het type object? omdat Visual Studio die signatuur zo genereert, dan is dat geen fout.
- WijsLectorToe: "er verschijnt een foutboodschap" mag een melding in de methode zelf zijn, of een exception die het hoofdprogramma opvangt en toont. Een crash is het niet. WijsLectorToe hoeft niet in het menu te staan.
- LaboVak, ToString: base.ToString() met "(labo) " ervoor is de logische aanpak. Titel en lector zelf opnieuw samenstellen telt als redundante code (boete), niet als puntverlies hier.
- LaboVak, duur: een LaboVak moet 1, 2 of 3 uur kunnen duren. Via een virtual Duur met override, of via een protected instantievariabele, allebei goed. Omdat een gewoon Vak nooit 3 uur duurt, moet een labo van 3 uur zijn duur ergens anders krijgen: na de constructor of met een extra constructor erbij. De constructor met een Vak-object moet er wel zijn.
- ToonLabos: filteren met is, as of GetType. Een labo tonen zo vaak als het uren duurt, is de logische lezing van "net als ToonRooster". Een labo van 3 uur maar twee keer tonen omdat de opgave enkel over 2 uur spreekt, niet afkeuren. Dezelfde lus uit ToonRooster kopiëren is de boete voor redundantie, geen puntverlies.
- HalfTijdseLector: MaxUur virtual in Lector en override met de helft van de waarde van de ouder. Een vaste 3 teruggeven is een waarde die berekend moet worden: 0,5.
- Hoofdprogramma: het menu heeft een optie om te stoppen. Ontbreekt die, dan is het eerste onderdeel hoogstens 0,5. Een lus die enkel met een `break` stopt, is de boete, geen puntverlies hier. Hoe de gebruiker kiest (cijfers, letters, woorden), bepaalt de student zelf.
- Voeg vak toe: een labo van 3 uur moet in het rooster ook echt 3 uur duren. Verliest het zijn duur onderweg (bijvoorbeeld 0 omdat Vak de 3 weigerde), dan is dat stuk niet af. Een crash bij een vol rooster kost 0,5.
- WeekRooster: de opgave zegt niet wat er willekeurig moet zijn aan de vakken, buiten de 20% kans op een LaboVak. Standaardvakken met titel "Onbekend" zijn goed. De vijf lijsten in een array of een lijst bijhouden is de logische aanpak. Vijf losse lijsten met telkens dezelfde vulcode is de boete voor redundantie. Een kans die niet 20% is, levert voor dat stuk niets op. De methode heet in de opgave "Toon rooster": ToonRooster of een gelijkaardige naam is goed. Per dag de vakken herhalen per uur is niet gevraagd.