# H13: Overerving

> **Beslist door Tim (2026-09-11), zie README:** de afbeelding van het dierenrijk mag hertekend worden
> met de skill `afbeelding`, met Nederlandse namen.

Bronnen: `oefeningen/13_overerving/A_PracticaSimpel.md`, `oefeningen/_coach/13_overerving.md`,
`content/12_overerving/` (`0_overerving_intro.MD`, `3_constructors_inheritance.md`,
`1_virtual_override.md`, `2_base.md`, `zieverder.md`), `content/B_appendix/boete.md`, de afbeelding
`oefeningen/assets/7_overerving/animals.png`, vluchtig `oefeningen/12_arraysvanklassen/A_practicaMem.md`
en het begin van `oefeningen/14_advancedovererving/A_Practica.md`. Alle oplossingen met code zijn
nagebouwd in dotnet 10, elke klasse in een eigen bestand.

## 1. Fouten die sowieso weg moeten

- **Magische dranken compileert niet.** `oefeningen/13_overerving/A_PracticaSimpel.md:133` staat
  `int bonus 10;`. Dat geeft `error CS1003: Syntax error, '=' expected` (geverifieerd met dotnet). Met
  `int bonus = 10;` loopt het wel: 50, 70 en 60. Dit is een Essential en de enige oefening met
  `base(...)` in een constructor. Een student die de oplossing overneemt, denkt dat `base` of
  `override` het probleem is.
- **HiddenBookmark: de oplossing compileert niet op de klasse van H12.** `:262` schrijft
  `public class HiddenBookMark: BookMark`, maar de BookMark uit H12 is gewoon `class BookMark`
  (`oefeningen/12_arraysvanklassen/A_practicaMem.md:666`). Resultaat: `error CS0060: Inconsistent
  accessibility: base class 'BookMark' is less accessible than class 'HiddenBookMark'` (geverifieerd
  met dotnet). Zonder `public` werkt het. Daarbij schrijft de opgave `Bookmark` en `HiddenBookmark`
  (`:252-256`), H12 en de oplossing `BookMark` en `HiddenBookMark`. Voorstel: `public` weg en overal
  `BookMark` zoals in H12.
- **Drone Delivery System spreekt zichzelf tegen.** De opgave geeft elke drone een eigen verbruik en een
  eigen tekst (`:449-469`), maar zegt niet waar de waarschuwing "Low Battery" hoort. De coach-data
  raadt `base.Fly()` aan (`oefeningen/_coach/13_overerving.md:152`). Wie dat doet, laat de parent ook
  5 aftrekken en een regel tonen. Nagebouwd met een pakje van 45: `Pakjesman vliegt rond. Batterij:
  95%` en meteen daarna `Pakjesman levert zwaar pakketje (Zwaarte: 45). Batterij: 91%`. Wie het niet
  doet, kopieert de waarschuwing in elke child. De batterij kan ook onder nul: `Laatste vliegt rond.
  Batterij: -2%` (geverifieerd met dotnet). `:477` zegt enkel dat een lege drone niet meer vliegt.
  Voorstel, dat netjes past bij de getallen die er al staan (5, 5 + pakje/10, 10 = 5 + 5):
  - `Drone` krijgt een constructor met het model, en `Battery { get; protected set; }` start op 100.
  - `public virtual int BerekenVerbruik()` geeft 5 terug. `DeliveryDrone` geeft
    `base.BerekenVerbruik() + PayloadWeight / 10` terug, `RacingDrone` `base.BerekenVerbruik() + 5`.
  - `public virtual string Beschrijving()` geeft "vliegt rond" terug, de childs hun eigen stuk tekst.
  - `Fly()` staat enkel in `Drone`: verbruik aftrekken (nooit onder 0), één regel tonen, waarschuwing
    onder 20. Zo staat de waarschuwing op één plaats, en het is hetzelfde patroon als bij Ziekenhuis
    (`ToonInfo` roept een virtual methode op).

  Wil Tim `Fly()` zelf virtual houden, dan kan het ook met een `protected` hulpmethode in `Drone` die
  de batterij verlaagt en waarschuwt. Kies één van de twee en zet ze in de opgave en de coach-data.
- **Twee oefeningen zonder oplossing**, waaronder de Final Essentials: Drone Delivery System
  (`:480-482`) en Ballspel met overerving (`:433-435`). Voor de Drone is een oplossing met
  voorbeelduitvoer nodig. Ballspel zie punt 2.
- **Ziekenhuis: de oplossing toont het aantal uur niet.** De opgave vraagt naam, aantal uur en kost
  (`:173`), de oplossing toont `American Jos (Kost:250)` (`:200`, geverifieerd met dotnet). In
  `:224-227` staan de lokale variabelen `JosFromUSA` en `JosFromBelgium`: hoofdletter en Engels in een
  verder Nederlands programma, dat zijn twee boetes (naamgeving en consistentie). Twee delen, maar één
  Oplossing-callout (`:181`): splits die per deel.
- **Het dierenrijk: de oplossing doet niet wat de opgave vraagt.** "Verzin voor iedere klasse een
  property" (`:7`), maar `Dog`, `Reptile` en `Iguana` zijn leeg (`:69-70`, `:82`). "Maak van iedere klasse
  een object" (`:11`), maar `Main` maakt enkel een Animal, een Cow en twee Snakes (`:18-21`). De koe
  toont daardoor `En heeft als biotoop:` met niets erachter (geverifieerd met dotnet). Verder: typfout
  "ratelstraat" (`:79`), `HeeftRattelstaart` met dubbele t, geen spatie in `biotoop:{Biotoop}` (`:49`), en
  de opgave noemt `BeweegVoort` als voorbeeld terwijl de oplossing `NaamBeest` gebruikt.
  Engelse klassennamen (uit de figuur) met Nederlandse properties levert een boete op voor
  consistentie. Voorstel: vervang de figuur door een tekstschema met Nederlandse namen (Dier, Zoogdier,
  Reptiel, Konijn, Koe, Hond, Slang, Leguaan), of laat Tim ze hertekenen via de skill `afbeelding`.
- **GPT-resten in Magische dranken:** een em-dash en twee emoji in de inleiding (`:89`, tussen
  "elixers" en "elke slok telt!"), een los `”*` in `:91`, en in `:93` en `:98` een niet-brekend
  streepje (U+2011) in "basis-klasse" en "sub-klasse". Wie op "sub-klasse" zoekt, vindt het niet.
- **Ballspel werkt enkel op Windows.** `Console.WindowHeight` en `Console.WindowWidth` instellen
  (`:390-391`) geeft bij het compileren `warning CA1416: ... 'Console.WindowWidth.set' is only supported
  on: 'windows'` (geverifieerd met dotnet). Op Mac en Linux crasht het. Meld dat, of laat die twee
  lijnen weg.
- **`##`-koppen binnen een oefening** vullen "Op deze pagina": Ballspel (`:284`, `:346`, `:382`) en
  Drone (`:444`, `:454`, `:471`). Maak er vetgedrukte inleidingen van.

## 2. Wat sterker kan

- **Constructors bij overerving worden amper geoefend.** Enkel Magische dranken laat de student zelf
  `base(...)` schrijven. Dierenrijk, Ziekenhuis, HiddenBookmark en Drone werken met object initializers.
  Voorstel:
  - Ziekenhuis: `Patient(string naam, int uren)` en `VerzekerdePatient(string naam, int uren) : base(naam, uren)`.
  - Drone: constructors zoals in punt 1.
  - Magische dranken: de opgave zegt niets over de constructor van `Elixer`. Laat dat zo, maar zet er
    een hint bij: "Krijg je `There is no argument given that corresponds to the required parameter
    'naam'`? Lees in het boek wat `base(...)` doet." (Die tekst komt letterlijk van de compiler, zie
    de fout CS7036 bij punt 4.2.)
- **Ziekenhuis: het beste moment van de oefening staat niet in de opgave.** `ToonInfo` wordt niet
  overschreven en toont toch de korting, omdat ze de virtual `BerekenKost` oproept. De coach-data zegt
  het (`oefeningen/_coach/13_overerving.md:98`), de student leest het nergens. Voeg na deel 2 de vraag
  toe: "`ToonInfo` heb je niet aangepast. Waarom toont Belgische Jos toch 225?" Geef voorbeelduitvoer
  (bv. `American Jos: 10 uur, 250 euro` en `Belgische Jos: 10 uur, 225 euro`) en een callout
  "Les(sen) uit deze oefening". Nagekeken voor 0 tot 40 uur: de korting met `double` geeft nergens
  een afrondingsfout (geverifieerd met dotnet).
- **Het dierenrijk: maak de keten zichtbaar.** Het is de enige oefening met drie niveaus
  `base.ToonInfo()`. Laat de student vóór het uitvoeren opschrijven welke regels een `Rabbit` toont
  en in welke volgorde. En maak van "kijk wat er gebeurt" (`:13`) twee concrete vragen: wat zie je in
  de `foreach`, en wat verandert er als je `override` bij `Cow` vervangt door niets? Dat laatste is
  hiding, en de compiler geeft dan `warning CS0108: ... hides inherited member ... Use the new keyword
  if hiding was intended.` (geverifieerd met dotnet). Die valkuil staat in de leerstof
  (`content/12_overerving/1_virtual_override.md:108-110`) maar in geen enkele oefening. Acht klassen
  is veel: `Dog` en `Iguana` mogen optioneel.
- **HiddenBookmark: maak "test wat er gebeurt" concreet.** `:256` zegt niet wat de student moet zien, en
  de coach-data doet net het omgekeerde: de lijst blijft een `List<BookMark>` (`:123` in de coach-data).
  Voorstel: "Voeg een menukeuze toe die een HiddenBookMark in dezelfde `List<BookMark>` zet. Welke
  `ToonSite` draait er bij 'show'?" Het is de enige oefening waarin `base` in het midden staat, met code
  ervoor en erna. Dat verdient een callout "Les", met een verwijzing naar `content/12_overerving/2_base.md:47`.
- **Ballspel: geen `virtual` of `override`, en de klasse is niet die uit het boek.** De tip zegt dat de
  oefening verderbouwt op Pong uit H9, maar `Ball` is een andere klasse dan `Balletje`
  (`content/8_klassen/00_oop_pong.md:122-151`: publieke `X`, `Y`, `VX`, `VY`, `TekenOpScherm`), en ook het
  `CentreerBalletje` met `virtual Update` uit `content/12_overerving/2_base.md:97-110` komt niet terug.
  Voorstel: één verplichte, concrete stap, bv. "maak `Update` virtual en schrijf een `CentreerBall` die
  aan de zijkant naar het midden springt, met `base.Update()`". De lijst uitbreidingen (`:425-431`) wordt
  dan bonus, met een oplossing voor minstens die ene stap. Kleinere dingen in de gegeven code:
  - `protected` instantievariabelen (`:298-301`), terwijl het boek `protected set` op een property
    aanraadt (`content/12_overerving/0_overerving_intro.MD:168-179`);
  - de parameters `xin` en `yin`;
  - `while (true)` zonder uitweg: na "Gewonnen!" loopt het spel gewoon verder (`:414-419`).
- **Drone:** vraag er uitdrukkelijk bij dat de `while` stopt "zonder LINQ" (een lus met een `bool`),
  anders komt `Any()` uit een A.I. Zet `(Polymorfisme)` in de kop (`:471`) om naar "één lijst voor
  alle drones": het woord komt pas in H16. "Low Battery!" kan gewoon Nederlands. Geef een stukje
  voorbeelduitvoer.
- **Magische dranken:** geef voorbeelduitvoer. `IsZeldzaam` kan `{ get; private set; }` zijn, want de
  waarde komt via de constructor.
- **Nergens een callout "Les(sen) uit deze oefening"** in dit hoofdstuk. Kandidaten: Ziekenhuis (virtual
  via een niet-virtual methode), HiddenBookmark (`base` in het midden), Drone.

## 3. Wat weg kan (of verhuist)

- **Niets schrappen.** HiddenBookmark moet blijven: H14 bouwt erop verder met `ToString`
  (`oefeningen/14_advancedovererving/A_Practica.md:21-34`).
- **Ballspel met overerving** naar het einde, als bonus na de Final Essentials. Het is lang, speelt enkel
  op Windows en traint na punt 2 één stap.
- **Het dierenrijk** is geen Essential en hoeft niet de eerste oefening te zijn: met acht klassen is het
  de grootste opgave van het hoofdstuk op één na.

## 4. Gaten: kansen voor nieuwe oefeningen

In het hoofdstuk leest de student nergens code: geen voorspel-de-uitvoer, geen Steven, geen puzzel.
Constructorvolgorde, `protected`, hiding en "is een" tegenover "heeft een" komen in geen enkele oefening
terug.

1. **Wie bouwt eerst?** (*Essential*, voorspel de uitvoer). Drie klassen, elk in een eigen bestand:
   `Voertuig` met een constructor zonder parameters ("Voertuig klaar") en een met `int wielen`
   ("Voertuig met {wielen} wielen"), plus `virtual Toeter()` ("Toet"). `Auto : Voertuig` roept
   `base(4)` op ("Auto klaar") en overschrijft `Toeter` met "Biep" en daarna `base.Toeter()`.
   `Taxi : Auto` heeft enkel een constructor "Taxi klaar", zonder `base`. `Main`:
   `new Voertuig()`, `new Taxi()`, `t.Toeter()`, `v.Toeter()`. Uitvoer (geverifieerd met dotnet):

   ```text
   Voertuig klaar
   ---
   Voertuig met 4 wielen
   Auto klaar
   Taxi klaar
   ---
   Biep
   Toet
   ---
   Toet
   ```

   De val zit in `Taxi`: geen `base`, en toch komt "Voertuig met 4 wielen" en niet "Voertuig klaar".
   Traint de constructorketen, de keuze van de parentconstructor via `base(...)` en `base` in een
   override. Vervolgvraag: wat als `Voertuig` enkel de constructor met `int` had?
2. **Stevens dierentuin** (*Essential*, zoek de fout). Steven laat de A.I. een `Dier` en een `Paard`
   schrijven. Er zitten vier fouten in, drie die de compiler vindt en één die hij niet vindt. De
   meldingen komen letterlijk van dotnet 10 (geverifieerd):
   - `override` zonder `virtual`: `error CS0506: 'Paard.Eet()': cannot override inherited member
     'Dier.Eet()' because it is not marked virtual, abstract, or override`;
   - een private instantievariabele van de parent gebruiken: `error CS0122: 'Dier.geboortejaar' is
     inaccessible due to its protection level`;
   - geen `base(...)` terwijl de parent enkel een constructor met parameters heeft: `error CS7036: There
     is no argument given that corresponds to the required parameter 'kanSchieten' of
     'Soldaat.Soldaat(bool)'` (in de oefening met dierennamen, opnieuw te genereren);
   - `override` vergeten bij een tweede methode: enkel `warning CS0108`, en via een `List<Dier>` draait
     de versie van `Dier`.

   Mooi om mee te geven: CS0122 en CS7036 verschijnen pas nadat CS0506 opgelost is. De compiler stopt
   eerst bij de fouten in de klassekop. Traint `virtual`/`override`, `protected`, `base(...)` en hiding.
3. **Is een of heeft een?** (geen Essential, kort, als opwarmer). Tien paren en de student kiest:
   overerving, "heeft een", of geen van beide. Bv. Paard/Dier, Auto/Motor, Tulp/Plant, Klas/Student,
   Lector/Persoon, Boek/Hoofdstuk, Elixer/Drank, Monster/Held (beide een Karakter), en Vierkant/Rechthoek
   als strikvraag (`content/12_overerving/0_overerving_intro.MD:46-48`). Traint de test uit
   `0_overerving_intro.MD:28-44`.

`protected set` krijgt geen eigen oefening, maar zit in de herwerkte Drone (punt 1).

## 5. Voorgestelde volgorde

Is een of heeft een? → Magische dranken → Ziekenhuis → Wie bouwt eerst? → Het dierenrijk →
Stevens dierentuin → HiddenBookmark → Drone Delivery System (Final Essentials) → Ballspel met
overerving (bonus)

Magische dranken eerst: twee klassen, één override, één `base(...)`. Ziekenhuis voegt de virtual
oproep via `ToonInfo` toe. Het voorspel-stuk komt vóór het dierenrijk, zodat de student de keten al
op papier gevolgd heeft voor hij er acht klassen voor schrijft. Tegenover H12 (CodeChella, drie
collecties en een menu) is dit hoofdstuk kleiner van omvang. Dat mag bij een nieuw concept, de Drone
is als afsluiter groot genoeg.

## 6. Nevenvondsten

- **Coach-data:**
  - `sealed` staat onder "Kent nog niet (hoofdstuk 14)" (`oefeningen/_coach/13_overerving.md:48`), maar
    wordt in H13 uitgelegd (`content/12_overerving/0_overerving_intro.MD:193-213`). H14 vermeldt het
    enkel nog eens (`content/13_advancedovererving/5_abstract.md:55`).
  - De Drone-aanpak (`:152`) moet mee met de keuze uit punt 1.
  - Bij HiddenBookmark (`:123`) moet opgave en coach hetzelfde zeggen.
  - Nieuwe oefeningen en titelwijzigingen moeten erin, anders geen Coach-knop.
- `content/12_overerving/3_constructors_inheritance.md:164` staat
  `public bool HeeftTuintje { get; private set; };`. Dat geeft `error CS1597: Semicolon after method
  or accessor block is not valid` (geverifieerd met dotnet).
- `content/12_overerving/3_constructors_inheritance.md:20` en `:28` gebruiken `Debug.WriteLine`. Wie dat
  in een consoleapp overtypt, ziet niets in de console en heeft `using System.Diagnostics` nodig. Met
  `Console.WriteLine` kan de student de volgorde zelf zien, en dan sluit oefening 4.1 er meteen op aan.
- `content/12_overerving/0_overerving_intro.MD:187` verwijst voor interfaces naar hoofdstuk 16; volgens
  `_quarto.yml` is dat H17.
- **Voor het H12-rapport:** de Bookmark Manager
  - gebruikt `WebClient` (`oefeningen/12_arraysvanklassen/A_practicaMem.md:673`), wat `warning
    SYSLIB0014: 'WebClient.WebClient()' is obsolete` geeft (geverifieerd met dotnet);
  - vraagt in de oplossing 2 sites in plaats van 5 (`:749`);
  - heeft een `while (true)` zonder uitweg (`:718`).
- **Voor het H14-rapport:** de oefening Boek (`oefeningen/14_advancedovererving/A_Practica.md:81-186`)
  - is grotendeels H13-leerstof: een virtual property overschrijven met `base.Price`;
  - heeft `CoffeeTableBook` genest in `TextBook` (`:161`);
  - schrijft `toResturn` tegenover `toReturn` (`:47`, `:52`, compileert niet);
  - spreekt van "velden" (`:83`, `:95`).

  In Money, money, money geeft de getter `return Saldo;` (`:207`) oneindige recursie. Die H14-punten
  zijn gelezen, niet uitgevoerd.
- Kleine taalzaken in de opgaven:
  - "klassenhierarchie" en "parentklasse , mammal" (`:5`);
  - "50euro+  20euro" (`:171`);
  - "variabelen" waar "instantievariabelen" hoort (`:288`);
  - de titel "Ballspel met overerving " eindigt op een spatie (`:275`).
