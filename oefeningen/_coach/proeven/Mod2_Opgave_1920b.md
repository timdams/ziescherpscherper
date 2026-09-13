<!--
  Coach- en quoteergegevens voor oefeningen/EindeTests/Mod2/Opgave_1920b.md.
  Formaat: zie _LEESMIJ.md in deze map.
-->
# Nota

Een vaardigheidsproef met één programma: een alarmsimulatie over hoogstens tien jaar van 52 weken, met een logboek in een array, vier methoden en een eindverslag. Een enum levert extra punten op. Vraag eerst aan welk onderdeel de student bezig is. Geef geen code, en ook geen methodesignaturen die hij zo kan overnemen. StartAlarmGebouw en BerekenSommen tonen zelf iets op het scherm: dat vraagt de opgave, dus de huisregel over Toon- en Vraag-methoden geldt hier niet.

# Aanpak

Hoofdprogramma: eerst het skelet zonder alarmen, een jaarloop met daarin een weekloop van 52 weken. Laat hem zeggen wanneer de jaarloop stopt: er zijn twee redenen, en beide horen in de loopvoorwaarde. Daarna per week de keuze. Wat hebben de testweken gemeen? Hoe maakt hij met Random een kans van één op vier? Laat hem kiezen of hij de weken vanaf 1 of vanaf 0 telt, en die keuze overal volhouden.

StartAlarmGebouw en TestAlarm: klein, dus eerst. Voor 20, 30 en 50 procent: laat hem een willekeurig getal kiezen, zeggen welke waarden bij welk gebouw horen, en narekenen of die verhouding klopt.

ToonLogbook: per week twee dingen, de kleur uit de array en een cijfer van 1 tot en met 9 dat daarna opnieuw begint. Laat hem de cijfers voor week 1 tot en met 20 eerst op papier zetten.

BerekenSommen: tellen hoeveel echte alarmen er waren, en daarna het percentage. Vraag welk type een deling van twee gehele getallen oplevert.

Eindverslag: enkel de jaren die echt doorlopen zijn.

Enum: kan meteen of achteraf. Achteraf moeten de array en de methoden die ermee werken mee veranderen.

# Valkuilen

- Testalarmen in week 10, 20, 30 in plaats van 1, 11, 21.
- In een testweek ook nog een kans op een echt alarm geven.
- Een echt alarm in gebouw 0 laten afgaan, terwijl de gebouwen 1, 2 en 3 zijn.
- De kansen in TestAlarm scheef verdelen door de bovengrens van Next verkeerd te kiezen.
- De weeknummers in ToonLogbook van 1 tot 10 of van 0 tot 8 laten lopen.
- De kleur niet resetten, waardoor alles erna ook gekleurd is.
- In BerekenSommen een gehele deling, waardoor het percentage 0 wordt.
- Enkel de alarmweken in het logboek zetten, zodat de andere weken nog de waarde van vorig jaar hebben.
- De jaarloop enkel laten stoppen op n en niet na tien jaar, of hem verlaten met een `break` (boete).
- In het eindverslag ook de jaren tonen die niet doorlopen zijn.

# Puntenverdeling

De punten per deel komen uit de opgave, samen 20. De deelpunten binnen het hoofdprogramma en binnen elke methode zijn achteraf toegevoegd.

**Hoofdprogramma (6 punten)**

- Een jaarloop die hoogstens 10 keer loopt en stopt als de gebruiker na een jaar n antwoordt: 1,5
- Een weekloop van 52 weken binnen de jaarloop: 0,5
- In week 1, 11, 21, 31, 41 en 51 TestAlarm oproepen: 1
- In de andere weken 25% kans op een echt alarm, in een van de drie gebouwen met gelijke kans, via StartAlarmGebouw met false: 1
- Een weeklogbook van 52 elementen met per week 0 (geen), 1 (test) of 2 (echt): 1
- Na elk jaar ToonLogbook en BerekenSommen oproepen met het weeklogbook, en het resultaat bewaren in een double-array op de plaats van dat jaar: 1

**StartAlarmGebouw (2 punten)**

- Parameters int en bool, geeft niets terug: 1
- Een tekst met het gebouwnummer en of het om een test of een echt alarm gaat: 1

**TestAlarm (2 punten)**

- Geen parameters, geeft niets terug, roept StartAlarmGebouw op met true: 1
- Gebouw 1, 2 of 3 met 20, 30 en 50 procent kans: 1

**ToonLogbook (4 punten)**

- Krijgt het weeklogbook als parameter en toont alle 52 weken na elkaar: 1
- Weeknummers van 1 tot en met 9, daarna opnieuw vanaf 1: 1,5
- Blauw zonder alarm, groen bij een test, rood bij een echt alarm, en de kleur daarna resetten: 1,5

**BerekenSommen (2 punten)**

- Krijgt een int-array, geeft een double terug: 0,5
- Het percentage echte alarmen op 52 weken, zonder gehele deling: 1
- Het percentage tonen en teruggeven: 0,5

**Eindverslag (2 punten)**

- Voor elk doorlopen jaar het jaarnummer vanaf 1 en het percentage op 2 cijfers na de komma: 1
- Een percentage onder 10% in het groen: 1

**Extra, Enum (2 punten)**

- Een enum voor geen alarm, test en echt alarm: 0,5
- Het weeklogbook van dat enumtype, en de methoden die ermee werken aangepast: 1,5

# Beoordeling

- De opgave noemt de array van 52 weken het weeklogbook en de double-array met de percentages per jaar het jaarlogbook. Welke namen de student aan die arrays geeft, is vrij zolang ze duidelijk zijn.
- Wie de enum maakt, laat BerekenSommen en ToonLogbook een array van die enum ontvangen in plaats van een int-array. Dat kost niets in die onderdelen.
- ToonLogbook: de figuren tonen gekleurde blokjes, de tekst zegt enkel "kleur". Voorgrond- of achtergrondkleur is allebei goed.
- De tekst van StartAlarmGebouw hoeft niet letterlijk die uit de figuur te zijn. De lijnen "Log jaar" en "Test alarm van week" en het aantal echte alarmen uit de figuur staan niet in de tekst en zijn niet vereist.
- Een echt alarm in een testweek mag niet ("in de andere weken"): dan is het deelpunt van de andere weken niet af.
- Zes aparte, identieke blokken voor de testweken is de boete voor redundante code. Eén voorwaarde voor alle testweken is de logische aanpak.
- Of na het tiende jaar de vraag nog gesteld wordt, is vrij.
- Het eindverslag toont de percentages op 2 cijfers na de komma, zoals "25,00%". Afronden in BerekenSommen en daarna zonder opmaak tonen, zoals "25%", is dat deelpunt niet af.
- De voorbeeldoplossing zet de Random op het niveau van de klasse, buiten Main: dat valt buiten de leerstof, maar kost niets. Een Random per methode is ook goed.
