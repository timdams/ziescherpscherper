# H16: Polymorfisme

> **Beslist door Tim (2026-09-11), zie README:** Magic en (Pro²) Methoden als objecten worden geschrapt.

Bronnen: `oefeningen/16_polymorfisme/A_Practica.md`, `oefeningen/_coach/16_polymorfisme.md`,
`content/15_polymorfisme/11_polymo_intro.MD`, `content/15_polymorfisme/polypraktijd.md`,
`content/18_IsAs/1_IsAs.md`, `content/18_IsAs/6_equals.md`, `content/15_polymorfisme/zieverder.md`,
`content/B_appendix/boete.md`, vluchtig `oefeningen/15_compositie/A_PracticaComp.md` en het begin van
`oefeningen/17_interfaces/A_practica.md`. Ter controle ook `oefeningen/14_advancedovererving/A_Practica.md`
(Dierentuin), `oefeningen/10_meminoop/A_poke1.md` (Pokémon), `oefeningen/EindeTests/A_DEEL2_AllInOne/1_MapMapker.md`,
`content/12_overerving/1_virtual_override.md` en `content/10_advancedklassen/5_static.md`. De pagina bevat
geen afbeeldingen. De StackOverflow-pagina van Magic kon ik niet openen.

## 1. Fouten die sowieso weg moeten

- **De kapotte link uit de quarto-melding.** `oefeningen/16_polymorfisme/A_Practica.md:61`:
  `[hier](17_gencols/2_genericclasses_en_constraints.md)`, in de Pro-pro-oplossing van Dierentuin
  advanced. Het pad is relatief, dus Quarto zoekt `oefeningen/16_polymorfisme/17_gencols/...`. Die map
  bestaat nergens meer; de uitleg over constraints staat nu in `content/B_appendix/generics.md:145`
  (`### Constraints`). Omdat de oefeningen een apart Quarto-project zijn, moet een link naar het
  handboek absoluut zijn, zoals in `oefeningen/2_csharpbasics/A_practica.md:11`:
  `https://www.ziescherp.be/content/B_appendix/generics.html#constraints`. Beter: de Pro-pro-oplossing
  schrappen (sectie 3), dan valt de link mee weg.
- **Nog twee dode links op dezelfde pagina.** Quarto noemde er één, maar ook deze wijzen naar een
  bestand dat niet bestaat: `:8` naar `../13_advancedovererving/A_Practica.md` (de Dierentuin staat in
  `oefeningen/14_advancedovererving/A_Practica.md:330`) en `:642` naar `../A_DEEL2_AllInOne/1_MapMapker.md`
  (moet `../EindeTests/A_DEEL2_AllInOne/1_MapMapker.md` zijn).
- **Dierentuin advanced: de oplossing compileert niet.** Puntkomma vergeten na
  `Console.WriteLine("Welk dier?")` (`:27`, CS1002). Is die er, dan geeft `case "Varken":` met enkel
  commentaar en geen `break` (`:41-42`) `CS8070: Control cannot fall out of switch from final case label`
  (geverifieerd met dotnet).
- **Dierentuin advanced: de oplossing leert het omgekeerde van het hoofdstuk.** `Zegt()` is abstract in
  `Dier` (`oefeningen/14_advancedovererving/A_Practica.md:401`), dus `dier.Zegt()` werkt gewoon.
  `(dier as Slang).Zegt()` (`:37`) is een overbodige cast, en de les (`:17`) zegt "enkel die dieren waar
  we van weten dat ze kunnen praten", terwijl elk dier kan praten. Dat is net wat Steven fout doet in
  `content/15_polymorfisme/polypraktijd.md:159-186`. Voorstel in sectie 2.
- **Pokémon vergelijken: de oplossing crasht.** `Pokemon tevgl = obj as Pokemon;` (`:91`) zonder
  controle op `null`: `a.Equals("Pikachu")` en `a.Equals(null)` geven allebei een
  `NullReferenceException` (geverifieerd met dotnet). De leerstof toont net drie veilige versies
  (`content/18_IsAs/6_equals.md:14-52`) en de coach-data noemt dit als valkuil
  (`oefeningen/_coach/16_polymorfisme.md:90`). Verder staat er `...` in de code (`:95`) en ontbreekt
  `GetHashCode`. De compiler meldt dat (`warning CS0659: 'Pokemon' overrides Object.Equals(object o) but
  does not override Object.GetHashCode()`) en de leerstof noemt het een "moet"
  (`content/18_IsAs/6_equals.md:56-65`). Voorstel: pattern matching, de zes base-stats voluit
  (`HP_Base`, `Attack_Base`, `Defense_Base`, `SpecialAttack_Base`, `SpecialDefense_Base`, `Speed_Base`,
  zoals in `oefeningen/10_meminoop/A_poke1.md:178-183`) en `GetHashCode` met
  `HashCode.Combine(Naam, Level, HP_Base, ...)`. Dat zijn precies acht waarden, het maximum van `Combine`.
- **Luchtvaartshow: de oplossing compileert niet.** `vliegtuigenRegister[vliegtuig.ModelNaam] = this;`
  (`:262`) geeft `error CS0103: The name 'vliegtuig' does not exist in the current context`. Moet
  `vliegtuigenRegister[ModelNaam] = this;` zijn (geverifieerd met dotnet).
- **Luchtvaartshow: `Vlieg()` wordt nooit aangeroepen.** De opgave belooft dat de toestellen "hun unieke
  vlieg-gedrag demonstreren" (`:216`), maar het hoofdprogramma (`:242-246`, `:320-326`) toont enkel het
  register. Na de fix is de uitvoer vijf regels "Model: ..., Type: ..." en geen enkele `Vlieg`. Van
  polymorfisme is niets te zien. Voorstel in sectie 2.
- **Ganzenbord: opgave en oplossing zijn het oneens over vakje 9.** De opgave behandelt "hoger dan 9"
  (`:413`) en "8 of lager" (`:414`); index 9 zelf valt ertussen. Na het verschuiven zegt de opgave
  "`true` indien hoger dan 8" (`:416`), de oplossing geeft pas `true` boven 9 (`:579`). Beland je via een
  +1-vakje op 9, dan geeft de oplossing `false` terwijl de opgave `true` vraagt (geverifieerd met dotnet,
  met een testje dat de vakjes vastzet). Voorstel: overal "voorbij het laatste vakje (index 10 of meer)
  is gewonnen"; `:414` wordt "9 of lager", `:416` wordt "tussen 0 en 9 geeft `false`, 10 of meer geeft
  `true` en 10 punten". Die 10 punten in het tweede geval staan nu enkel in de oplossing (`:581`).
- **Ganzenbord: de oplossing loopt een boete op.** `private List<Speelvakje> SpeelVakjes;` (`:535`) is
  private met een hoofdletter: naamgeving, -2 (`content/B_appendix/boete.md:257`). De opgave lokt het
  uit (`:395`). Wordt `speelVakjes`. Verder gebruikt de oplossing `static readonly` (`:464`, `:475`),
  terwijl `readonly` volgens `content/8_klassen/2_properties.md:237` "later aan bod komt" en nergens in
  de leerstof staat.
- **De Final Essentials heeft geen oplossing.** GTA (`:746-748`) is leeg, net als Magic (`:345-347`),
  Mapmaker (`:644-646`) en Pro² (`:700-702`). Bij een Final Essentials weegt dat het zwaarst: net daar
  legt de student zijn werk naast de oplossing.
- Kleinere dingen:
  - `:226` "static instantievariabele": het boek zegt dat een static variabele "géén instantievariabele
    meer" is en noemt ze een static field (`content/10_advancedklassen/5_static.md:11`, `:114`).
  - `:234` een losse `"”"` na de raket-zin. `:230` "1. Subklassen" moet "2." zijn, anders begint
    markdown een nieuwe lijst op 1. `:216` "inheritance" wordt overerving.
  - `:416` "gewonnnen-." met een haakje dat nooit sluit. `:429` "was was". `:456` kapotte backtick in
    "``SpeelVakjes`lijst". `:454` en `:458` vragen twee keer hetzelfde. `:124` "per , alsook" (woord
    weg). `:696` "bruikbaardere".
  - Namen die schuiven: `Speelvakje` (`:378`), `SpeelVakje` (`:415`, `:450`), `GanzenBord` (`:456`);
    `Badkamer` (`:112`) tegenover `BadKamer` (`:182`); `diertjes` (`:23`) tegenover `dieren` (`:67`).

## 2. Wat sterker kan

- **Dierentuin advanced: geef `is` een echte reden.** Nu is `is` enkel een filter op soort en is `as`
  overbodig. Voorstel: één dier krijgt iets wat enkel hij kan, bv. `Koe` krijgt `GeefMelk()`. Een nieuwe
  menu-optie "melken" loopt over de `List<Dier>` met `if (dier is Koe koe) koe.GeefMelk();`. Dat is de
  situatie waarvoor `is` en `as` bestaan (`content/15_polymorfisme/11_polymo_intro.MD:70-72`). De filter
  "enkel dieren van soort X praten" mag blijven, met `is` en zonder cast. Verder:
  - de opgave uit de `callout-tip` halen (`:7-11`);
  - de soorten afstemmen op de Dierentuin van H14. Daar zijn het `Koe`, `Hond` en `Vis`
    (`oefeningen/14_advancedovererving/A_Practica.md:405-425`), hier ineens `Slang` en `Varken`. Of
    zeggen dat de student er twee bij maakt;
  - zeggen welke menuletter erbij komt (de oplossing gebruikt `f`, H14 had a tot d en q), en een
    voorbeelduitvoer tonen.
- **Pattern matching staat in geen enkele oplossing.** De leerstof noemt `if (o is Student temp)` "de
  manier die je vandaag het vaakst zal zien" (`content/18_IsAs/6_equals.md:42`,
  `content/18_IsAs/1_IsAs.md:140-163`) en de coach-data stuurt er ook op aan, maar de oplossingen
  gebruiken `as` zonder controle of `is` gevolgd door `as`. Zet minstens in Dierentuin advanced en
  Pokémon vergelijken de pattern-matchingvorm.
- **Pokémon vergelijken: laat zien waarom je dit doet.** De oefening heeft geen hoofdprogramma. Een
  deel 2: twee identieke Pikachu's maken en `a == b` en `a.Equals(b)` tonen (`False` en `True`), daarna
  een Pokédex zonder dubbels, een `List<Pokemon>` waarin je een Pokémon enkel toevoegt als
  `!pokedex.Contains(p)`. Met de override geeft `Contains` voor een kopie `True` (geverifieerd met
  dotnet), zonder override `False`. Zo komt de callout uit `content/11_arraysvanklassen/4_list.md:116`
  eindelijk terug in een oefening, en dat is meteen de brug naar Stevens Pokédex (sectie 4).
- **Een eigen huis is de beste basisoefening van het hoofdstuk en hoort vooraan.** Een `List<Kamer>`
  met een `virtual Prijs` is polymorfisme zonder franjes. Wat ontbreekt:
  - een verwachte uitvoer: met de `Main` uit de oplossing is dat `1600` (geverifieerd met dotnet);
  - iets met de property `Naam`, die nergens gebruikt wordt. Laat `Huis` een overzicht per kamer tonen
    (naam en prijs), dan ziet de student in één lus elke override draaien;
  - de PRO-uitbreiding (`:122-126`) staat onder een `##`-kop, verwijst naar "de `Teken`-methoden van de
    kamers" die nooit gevraagd zijn en heeft geen oplossing. Ze overlapt met Mapmaker, dat zelf al naar
    deze oefening verwijst (`:642`). Zie sectie 3.
- **Luchtvaartshow: laat ze vliegen.** Een statische methode `Show()` (of een stap in `Main`) die over
  de waarden van het register loopt en van elk toestel `Vlieg()` aanroept. Het register bevat
  `Vliegtuig`-referenties, dus dat is de lijst van het basistype uit de leerstof, en de `Helikopter` toont
  meteen wat `base.Vlieg()` doet. Plus een voorbeelduitvoer; `Console.ReadKey()` (`:328-330`) kan weg.
- **GTA: maak er een Final Essentials van het hele hoofdstuk van.** Nu oefent ze enkel virtual en
  override in een lijst. Een stap 4 met `is` voor iets wat enkel een child heeft: "Er is een
  bankoverval: zet bij alle politiemotoren de sirene aan" met
  `if (voertuig is PolitieMotor motor) motor.SireneAan = true;`, en daarna nog eens de lus met
  `Beweeg()`, waarin de motoren nu 120 rijden. Verder: een oplossing, een voorbeelduitvoer, de slotzin op
  `:744` ("Merk op hoe je dankzij polymorfisme ...") schrappen en de `##`-koppen (`:709`, `:717`, `:735`)
  vervangen door vetgedrukte deelkoppen.
- **Ganzenbord is een examenopgave en hoort achteraan, net voor de Final Essentials.** Het eigenlijke
  polymorfisme (`KleurVakje` in een `List<Speelvakje>`) is vijf regels, de rest is herhaling van H9 tot
  H12. Prima als herhaling, niet als zesde van negen. De opgave heeft tien `##`- en `###`-koppen (`:358`
  tot `:446`) die de inhoudsopgave vullen met "Intro", "Te maken klassen" enzovoort: vetgedrukte
  tussentitels van maken. De kansverdeling in de oplossing klopt (30/20/50, geverifieerd met dotnet op
  100.000 vakjes).
- **Les-callouts worden geen knop.** De lessen staan als `:::{.callout-tip}` met een vetgedrukt
  "Les(sen) uit deze oefening:" binnen de oplossing (`:16-18`, `:139-142`). `oefeningen/opmaak.html`
  herkent enkel callouts met die tekst als `title`, zoals in `oefeningen/1_intro/A_Practica.md:90`. Nu
  zit de les achter het oplossingsslot.
- **Meldingen bovenaan.** De pagina begint met vier lege regels en heeft geen `::: {.vooraf}`. Een
  blokje met "Dierentuin advanced bouwt verder op de Dierentuin uit H14, Pokémon vergelijken op je
  Pokémon-klasse uit H10 en H11" helpt, want twee van de eerste drie oefeningen hangen af van oude code.

## 3. Wat weg kan (of verhuist)

- **(Pro²) Methoden als objecten** (`:649-702`): delegates, `Action` en `Func` hebben niets met
  polymorfisme te maken, staan in "Kent nog niet" van de coach-data, plakken tekst met `+` (`:670`) en
  hebben geen oplossing. Verhuizen naar een appendix-achtige pagina of schrappen.
- **Magic** (`:338-347`): de hele opgave hangt aan een StackOverflow-antwoord uit 2013 (ik kon het niet
  openen om na te gaan welke leerstof het gebruikt), er is geen oplossing en de coach kan enkel gissen.
  Vervangen door Kaarthand (sectie 4).
- **Pro-pro-oplossing bij Dierentuin advanced** (`:47-73`): een generieke methode en `?.`, geen van
  beide gezien, en de bron van de kapotte link. Schrappen.
- **PRO-uitbreiding van Een eigen huis** (`:122-126`): schrappen en in de Mapmaker-oefening zeggen dat
  dat project hier verder op bouwt.
- **Mapmaker** blijft als optionele verwijzing, met de link hersteld. Let wel: het stuk `Is/as` in het
  project (`oefeningen/EindeTests/A_DEEL2_AllInOne/1_MapMapker.md:364`) komt pas na `Interface` (`:306`)
  en werkt met een interface. Met "stop aan de sectie interfaces" oefent de student in Mapmaker dus geen
  `is` of `as`. Dat is terecht, maar dan moet de rest van de pagina dat dragen.

## 4. Gaten: kansen voor nieuwe oefeningen

Wat de leerstof behandelt en nergens geoefend wordt: het verschil tussen het type van de variabele en
het type van het object, wat je via een parent-referentie niet mag aanroepen, een gewone cast die crasht
tegenover `as` dat `null` geeft, de volgorde van `is`-tests in een hiërarchie, `==` tegenover `Equals`,
`GetHashCode` en hiding. Er staat ook geen enkele code-leesoefening op de pagina.

1. **Wie praat er?** (*Essential*). Voorspel de uitvoer, eerst op papier, dan uitvoeren. Een `Dier` met
   een `virtual MaakGeluid()` en een `virtual Beweeg()`. `Varken` doet `override` op `MaakGeluid`, maar
   vergeet `override` bij `Beweeg`. Daarna `Dier d = new Varken();` en een reeks regels: `d.MaakGeluid()`,
   `d.Beweeg()`, `new Varken().Beweeg()`, `d is Dier`, `d is Varken`, `d is Paard`, `(p as Varken) == null`
   met `Dier p = new Paard();`, en `v1 == v2` voor twee nieuwe varkens. Uitvoer (geverifieerd met
   dotnet): `Oinkoink`, `Het dier beweegt`, `Het varken rolt in de modder`, `True`, `True`, `False`,
   `True`, `False`. Het vergeten `override` geeft enkel `warning CS0114: 'Varken.Beweeg()' hides inherited
   member 'Dier.Beweeg()'. To make the current member override that implementation, add the override
   keyword. Otherwise add the new keyword.` en via `d` draait dan de versie van `Dier`, precies wat
   `content/12_overerving/1_virtual_override.md:109` beschrijft.
   **Deel 2: compileert het, crasht het of werkt het?** Vier regels om te sorteren, allemaal
   nagekeken met dotnet (de compiler zet de namespace voor de klassenamen):
   - `d.Krulstaart` geeft `CS1061: 'Dier' does not contain a definition for 'Krulstaart' ...`;
   - `object o = new Varken(); o.MaakGeluid();` geeft ook CS1061, nu voor `'object'`;
   - `Varken v = new Dier();` geeft `CS0266: Cannot implicitly convert type 'Dier' to 'Varken'. An
     explicit conversion exists (are you missing a cast?)`;
   - `Varken y = (Varken)p;` compileert, maar crasht met `InvalidCastException: Unable to cast object
     of type 'Paard' to type 'Varken'.`

   Traint late binding, upcasting en het verschil tussen een compileerfout en een crash.
2. **Stevens dierenshow** (*Essential*). Zoek de fout. Steven moet de koeien laten melken en alle
   dieren laten praten. De A.I. gaf hem:
   ```java
   foreach (Dier dier in dieren)
   {
       if (dier is Dier)
           Console.WriteLine("Een dier");
       else if (dier is Koe)
           ((Koe)dier).GeefMelk();

       switch (dier.GetType().Name)
       {
           case "Koe": ((Koe)dier).Zegt(); break;
           case "Slang": ((Slang)dier).Zegt(); break;
       }
   }
   ```
   Drie problemen: de `Koe`-tak wordt nooit bereikt omdat elk dier een `Dier` is (nagekeken met dotnet),
   de `switch` op de typenaam bouwt met de hand na wat `dier.Zegt()` gratis doet (een `Vis` zwijgt
   voortaan), en de casts zijn overbodig of te vervangen door `is Koe koe`. Traint de volgorde van
   `is`-tests en herkennen wanneer je `is` niet nodig hebt. Sluit aan bij de Steven in `polypraktijd.md`
   en het Hall of Shame-idee in `content/15_polymorfisme/review.md:69`.
3. **Stevens Pokédex** (*Essential*, na Pokémon vergelijken). Steven schrijft
   `public bool Equals(Pokemon andere)`, zonder `override` en met een `Pokemon` als parameter.
   `a.Equals(b)` geeft `True`, dus hij denkt dat het werkt, maar `pokedex.Contains(b)` en
   `a.Equals((object)b)` geven `False` (geverifieerd met dotnet): het is een overload, geen override, en
   `List` roept de versie met `object` aan. In dezelfde code ontbreekt de controle op `null`. Traint het
   verschil tussen overload en override en waarom de signatuur van `Equals` vastligt. De valkuil staat al
   in de coach-data (`oefeningen/_coach/16_polymorfisme.md:91`), maar in geen enkele oefening.
4. **Equals in de juiste volgorde** (puzzel). De regels van een `Equals` met pattern matching en een
   `GetHashCode` door elkaar, met één indringer (`Student temp = (Student)o;`). De student zet ze in
   volgorde en zegt waarom de indringer eruit moet. Kort, voor wie Pokémon vergelijken te groot vindt.
   Geen Essential.
5. **Kaarthand** (vervangt Magic). Een eigen mini-kaartspel: `Kaart` met `Naam` en een `virtual Speel()`,
   childs `Land`, `Wezen` (met `Aanval`) en `Spreuk`. Een `List<Kaart>` als hand, alle kaarten spelen in
   één lus, daarna met `is Wezen wezen` de totale aanvalskracht van de wezens optellen, en een kaart uit
   de hand halen die gelijk is aan een meegegeven kaart (met een eigen `Equals`). Het hele hoofdstuk in
   één oefening, zonder externe bron. Geen Essential; GTA blijft de Final Essentials.

## 5. Voorgestelde volgorde

Wie praat er? → Een eigen huis → Luchtvaartshow → Dierentuin advanced → Stevens dierenshow → Pokémon
vergelijken → Stevens Pokédex → Equals in de juiste volgorde → Kaarthand → Ganzenbord Dams Van Camp
editie → Grand Theft Auto: San Andreas (Final Essentials) → Mapmaker (optioneel)

Eerst polymorfisme zonder cast (een virtuele methode in een lijst), dan `is` voor wat enkel een child
kan, dan `Equals`. Het examen en de Final Essentials staan achteraan.

## 6. Nevenvondsten

- **Coach-data** (`oefeningen/_coach/16_polymorfisme.md`):
  - `:67` (Dierentuin advanced): "met pattern matching zit het omgezette object meteen in een variabele"
    past niet bij de huidige opgave, want voor `Zegt()` is geen omzetting nodig. Mee aanpassen met
    sectie 2.
  - `:86` noemt `GetHashCode` in de aanpak; de oplossing heeft het niet.
  - `:124` (Luchtvaartshow): "twee vliegtuigen met dezelfde modelnaam geven een fout bij Add", maar de
    oplossing gebruikt de indexer, die stil overschrijft. Kies één van beide.
  - `:138-145` (Magic) gist naar de inhoud van een externe pagina. Vervalt als Magic vervangen wordt.
  - "Kent nog niet" (`:48-55`) mist de null-conditional `?.`, die de Pro-pro-oplossing gebruikt.
  - Bij elke titelwijziging en nieuwe oefening moet de coach-data mee, anders geen Coach-knop. De
    code-leesoefeningen krijgen een `### Nota` dat de coach het antwoord niet geeft.
- **De leerstof stuurt voor is/as naar het verkeerde hoofdstuk**: `content/15_polymorfisme/11_polymo_intro.MD:72`
  ("die we in hoofdstuk 18 bekijken") en `content/15_polymorfisme/zieverder.md:16` ("downcasten
  (hoofdstuk 18)"), terwijl `1_IsAs.md` in `_quarto.yml:194` gewoon onder H16 staat. Ook
  `content/11_arraysvanklassen/4_list.md:116` stuurt voor `Equals` naar "hoofdstuk 13"; `System.Object`
  staat in H14 (`_quarto.yml:179`), `Equals` overriden in H16.
- **De Zoek de fout in `content/15_polymorfisme/zieverder.md:92-114` spreekt zichzelf tegen.** De vraag
  zegt dat elk dier bij de uitvoer "Een dier maakt geluid" roept, het antwoord zegt dat de code niet
  compileert. Dat laatste klopt: `override` op een niet-virtuele methode geeft `error CS0506: ... cannot
  override inherited member ... because it is not marked virtual, abstract, or override` (nagekeken met
  dotnet in dezelfde situatie). De vraag wordt dus "deze code compileert niet, waarom?", of `Varken`
  laat het woord `override` weg: dan compileert het met een waarschuwing en roept elk dier via een
  `Dier`-variabele wel "Een dier maakt geluid".
- **Hiding met `new`** staat in de leerstof enkel als waarschuwing
  (`content/12_overerving/1_virtual_override.md:109`) en als TODO in
  `content/15_polymorfisme/11_polymo_intro.MD:58`. Wie praat er? gebruikt daarom het vergeten
  `override`, niet het keyword `new`. Komt die sectie er, dan kan er een regel met `new` bij.
- **H17 heeft dezelfde dode Mapmaker-link**: `oefeningen/17_interfaces/A_practica.md:207`.
- `content/18_IsAs/1_IsAs.md:109` raadt `as` aan als je het object daarna wil gebruiken; een paar
  alinea's verder heet pattern matching de moderne vorm (`:140-163`). De tip kan dat laatste ook zeggen.
- `content/18_IsAs/6_equals.md:78`: "Bijgevolg kan dit element dan doen dan wanneer hij kan in de
  vermomming is van z'n eigen basistype" loopt niet.
