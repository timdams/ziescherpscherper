# Fouten in de vaardigheidsproeven

Gevonden op 13 september 2026, bij het schrijven van de coach- en quoteergegevens in
`oefeningen/_coach/proeven/`. Dezelfde dag rechtgezet: in de opgaven, in de oplossingen en in de
quoteergegevens. Elke aangepaste oplossing is gecompileerd en uitgevoerd met dotnet en volgt de
boeteregels (Main in een class Program, elke klasse in een apart bestand, geen nullables, geen koppen
in de oplossingscallout).

Paden onder `oefeningen/EindeTests/`.

## Wat er rechtgezet is

- **Verkeerde oplossingen op de pagina.** `Mod4/Opgave_2223.md` (manifest) toonde de Pharaoh-oplossing en
  heeft nu een eigen, nieuwe oplossing. `Mod4/Opgave_2324.md` (Pharaoh) toonde een kopie van de oude
  oplossing van `Mod2/Opgave_2324.md`; die is weg en de Pharaoh-oplossing staat er nu, rechtgezet.
- **Puntentotalen.** `Mod2/Opgave_2122c.md`: BerekenTotaal van 3 naar 4 punten, samen 12.
  `Mod2/Opgave_2223.md`: het onbestaande deel 5 is uit de opsomming, samen 12. `Mod4/Opgave_2425.md`:
  "12p" werd "15p", samen 19. `Mod4/Opgave_1819_2ezit.md` vermeldt nu het totaal van 19.
  `Mod4/Opgave_2223.md` telt op tot 20.
- **Tegenstrijdigheden in de opgaven**, telkens in de richting van de voorbeelduitvoer, onder meer:
  - Mod2 1819: 1 tot en met 10, CasinoLoop en SetupCasino, welke methoden de student schrijft.
  - Mod2 1819_2ezit: parameters van StemWijzer in een volgorde die compileert, geen "vorig jaar" en geen tekst centreren meer, het sterretjesvoorbeeld.
  - Mod2 1920: budget 4500 bij bonus "n", int-arrays, trainee beslist.
  - Mod2 1920b: weeklogbook en jaarlogbook, om de 10 weken vanaf week 1, StartAlarmGebouw.
  - Mod2 2021: 0 verdachte tekens is niet verdacht.
  - Mod2 2122: de grenzen van het risico.
  - Mod2 2122b: Helium en waterstof, aantal vragen in ronde 1, sudden death.
  - Mod2 2122c: BestelDrinken en BerekenTotaal, Geen in de enum, promoties niet samen.
  - Mod2 2223: regels bij een mis en bij een gelijkstand, sterretjes, DoeGame void.
  - Mod2 2324: "tussen onder en boven" inclusief, vergelijken met het getal zelf.
  - Mod2 2324b: Casino geeft het resterende geld terug, voorbeeldkapitalen uit een echte run.
  - Mod2 2425: sauna en flowchart, optionele landcode als laatste parameter, using-regels bij VerkrijgIP.
  - Mod2 2526: groen vanaf 8, Film1, voorbeeld 2 vraagt de prijs, vier deelmethoden.
  - Mod4 Opgave: lengte is rijen, breedte is kolommen, onderdelen verschuiven mee.
  - Mod4 1819_2ezit: groene vlakken, stoppen bij te weinig budget.
  - Mod4 1920: schema gevolgd (RapportStatus abstract, risicograad via de constructor), geen List-capaciteit, publieke leden met hoofdletter.
  - Mod4 2021: Height, ToString-vorm, voorbeeld van Visualiseer.
  - Mod4 2021b: IEnergieGever en ReisBestemming overal gelijk, zoals in het diagram.
  - Mod4 2122: DeathWall, IDodelijk, klimelementen van 10 tot en met 50.
  - Mod4 2122b: VrijeUren geeft vrije uren terug, sorteren op titel, stopoptie in het menu.
  - Mod4 2223: PostDoos kost zoals een Doos, GeefAantalLeesAttempts, elke lezing telt, DHLSchip met naam, nummering 4.1 tot 4.3.
  - Mod4 2324: eindjaar 0 mag, verwisselen enkel in de constructor.
  - Mod4 2425: teller enkel bij een succesvolle toevoeging, "minstens" de opgegeven grootte.
- **Datums** in de openingszin volgen het academiejaar (Mod2 1819, 1920, 2021 en Mod4 2223).

## Laatste open zaken, ook rechtgezet

**Afbeeldingen.** De originele PNG's van de eerste vier zitten nog in git.

- `Mod2/1920a1.png`: de invoer is nu moeilijkheidsgraad 5 zonder bonus, zodat 4500 klopt met de
  berekening. Enkel die twee tekens zijn in de PNG vervangen, in hetzelfde lettertype.
- `Mod2/1920b1.png` en `1920b2.png`: het ontbrekende haakje in "(dit was een test)." staat erbij.
- `Mod2/underlook1.png`: het schot is nu "raak met kracht 6"; de uitleg boven de figuur is weg.
- `Mod4/1920schema.png` is hertekend als `1920schemaNEW.png` (Excalidraw, script in
  `Mod4/imagegen/schema1920.js`), met de constructor, RapportStatus en Vertrek van SpecialeBrandweer.
  De opgave verwijst nu naar de nieuwe figuur.
- Diagram van Mod4 2021b: niet de figuur maar de tekst en de oplossing volgen nu het diagram
  (`ReisBestemming`, een private instantievariabele `energie` achter de property Energie). De
  oplossing is opnieuw gecompileerd en uitgevoerd.

**Tekst.**

- Mod2 1819_2ezit: de opgave zegt nu dat de admin-bool in deze fase enkel een parameter is.
- Mod2 2324: bij gelijke grenzen ligt het getal tussen de ondergrens en 2 keer de bovengrens,
  zoals de oplossing doet.
- Mod2 2324b: "van 0 tot 60 (60 niet inbegrepen)".
- Tikfouten: Mod2 2122b, Mod2 2122c, Mod4 2021b ("uitvoer", "volgorde"), Mod4 2122b, en de a) en b)
  bij Vak staan nu op aparte regels.
- Mod4 2223: Deel 2 is een `#`-kop zoals de andere delen.

De quoteergegevens die naar deze fouten verwezen, zijn mee aangepast.

## Keuzes in de quoteergegevens die Tim best nakijkt

Eerder gemaakt:

- Mod2 2021: IsVerdacht bij 0 telt als vereiste (0,5).
- Mod2 1819: een `break` in ArrayGame bij een foute gok is een boete, geen zoek-en-stop.
- Mod2 2324b, oefening 3: 0,5 aftrek (één keer) als een Is-methode zelf tekst toont in plaats van een bool terug te geven.
- Mod2 2223: de schietlogica van DoeTraining kopiëren in DoeGevecht is de boete voor redundante code.
- Mod4 2122 en 2223: namen die de opgave oplegt (parameters x en y, een publieke `vrachtRuim`) en een opgelegde mix van Nederlands en Engels leveren geen naamgevingsboete op.

Nieuw sinds het rechtzetten. Waar de opgave vroeger twee lezingen toeliet, is ze nu eenduidig, en dus
strenger:

- Mod2 2324: een crash bij letters in de menukeuze kost 0,5.
- Mod2 2122c: Geen ontbreekt in de enum kost 0,5; beide promoties samen, of Box bij een Hipster-bestelling, kost de helft van het promotiedeelpunt.
- Mod4 Opgave: lengte en breedte omwisselen kost 0,5.
- Mod4 1819_2ezit: tekenen op de huidige cursorpositie in plaats van linksboven kost 0,5; stoppen zodra de gebruiker "ja" zegt zonder budget maakt het stoponderdeel 0.
- Mod4 1920: een virtual RapportStatus kost 0,5, een constructor zonder parameter die zelf 6 invult ook.
- Mod4 2122: een grens die 50 uitsluit, is niet het maximum.
- Mod4 2122b: VrijeUren die de bezette uren teruggeeft, krijgt hoogstens de helft; een menu zonder stopoptie hoogstens 0,5.
- Mod4 2223: enkel de lezingen na het verzegelen tellen kost 0,5.
- Mod4 2425: strikt groter dan de grens kost 0,5.
