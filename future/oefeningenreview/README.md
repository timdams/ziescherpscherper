# Oefeningenreview per hoofdstuk

Werkmap voor de herwerking van de oefeningen, hoofdstuk per hoofdstuk. Per hoofdstuk staat hier
één rapport met de analyse: advies, nog niets doorgevoerd. Tim leest het rapport, schrapt of past
aan wat hij niet wil, en start daarna per hoofdstuk een agent die de rest doorvoert (deel B).

[H01_intro.md](H01_intro.md) is het voorbeeld: dat hoofdstuk is volledig doorlopen, van analyse
tot doorgevoerde oefeningen.

Overzicht van alle rapporten, met de rode draden en een startprompt per hoofdstuk:
<https://claude.ai/code/artifact/9393ca87-fc67-46a1-b663-2480c94fa297> (privé; een momentopname
van 2026-09-11, de bestanden hier blijven de bron).

## Status

| H | Rapport | Oefeningen | Status |
|---|---------|------------|--------|
| 1 | [H01_intro.md](H01_intro.md) | `oefeningen/1_intro/` | doorgevoerd (2026-09-11) |
| 2 | [H02_csharpbasics.md](H02_csharpbasics.md) | `oefeningen/2_csharpbasics/` | doorgevoerd (2026-09-11) |
| 3 | [H03_tekst.md](H03_tekst.md) | `oefeningen/3_tekst/` | doorgevoerd (2026-09-11) |
| 4 | [H04_data.md](H04_data.md) | `oefeningen/4_data/` | doorgevoerd (2026-09-11) |
| 5 | [H05_beslissingen.md](H05_beslissingen.md) | `oefeningen/5_beslissingen/` | doorgevoerd (2026-09-11) |
| 6 | [H06_herhalingen.md](H06_herhalingen.md) | `oefeningen/6_herhalingen/` | doorgevoerd (2026-09-11) |
| 7 | [H07_methoden.md](H07_methoden.md) | `oefeningen/7_methoden/` | doorgevoerd (2026-09-11) |
| 8 | [H08_arrays.md](H08_arrays.md) | `oefeningen/8_arrays/` | doorgevoerd (2026-09-11) |
| 9 | [H09_klassen.md](H09_klassen.md) | `oefeningen/9_klassen/` | analyse |
| 10 | [H10_meminoop.md](H10_meminoop.md) | `oefeningen/10_meminoop/` | analyse |
| 11 | [H11_advancedklassen.md](H11_advancedklassen.md) | `oefeningen/11_advancedklassen/` | analyse |
| 12 | [H12_arraysvanklassen.md](H12_arraysvanklassen.md) | `oefeningen/12_arraysvanklassen/` | analyse |
| 13 | [H13_overerving.md](H13_overerving.md) | `oefeningen/13_overerving/` | analyse |
| 14 | [H14_advancedovererving.md](H14_advancedovererving.md) | `oefeningen/14_advancedovererving/` | analyse |
| 15 | [H15_compositie.md](H15_compositie.md) | `oefeningen/15_compositie/` | analyse |
| 16 | [H16_polymorfisme.md](H16_polymorfisme.md) | `oefeningen/16_polymorfisme/` | analyse |
| 17 | [H17_interfaces.md](H17_interfaces.md) | `oefeningen/17_interfaces/` | analyse |
| 18 | [H18_bestandsverwerken.md](H18_bestandsverwerken.md) | `oefeningen/18_bestandsverwerken/` | analyse |

De vaardigheidsproeven en gecombineerde opgaven in `oefeningen/EindeTests/` vallen hier buiten.

De oefeningenmap `N_...` hoort bij hoofdstuk N van het boek. De leerstofbestanden van dat
hoofdstuk staan in `_quarto.yml` (root) onder `part: "HN: ..."`. Let op: die mapnummers lopen
niet gelijk (H2 is `content/1_csharpbasics/`), en sommige hoofdstukken lenen bestanden uit
`content/18_IsAs/` of `content/20_exceptions/`.

## Beslissingen van Tim (2026-09-11)

Deze gelden voor alle hoofdstukken. Zegt een rapport iets anders, dan wint wat hier staat.

- **`break`**: toegelaten in een `switch` en bij zoek-en-stop (een reeks doorzoeken en stoppen
  zodra het gezochte gevonden is). `continue` en elke andere `break` in een loop, zoals een
  `while (true)` die enkel met `break` stopt, blijven in jaar 1 een boete. Al doorgevoerd in
  `content/B_appendix/boete.md`, `oefeningen/_coach/_prompt.md` en `content/5_herhalingen/2_for.md`.
  De oefeningen en coach-data van H6 en H8 volgen die regel sinds het doorvoeren van die hoofdstukken
  (2026-09-11).
- **`Random` in een lus**: de bewering dat twee generators kort na elkaar dezelfde getallen geven,
  is weg. `content/3_data/random.md` vertelt het nu als verhaal van de verteller (een bug uit het
  oude .NET Framework). `content/10_advancedklassen/5_static.md` onderbouwt de static generator nu
  met de vaste seed. De coach-data van H7, H10, H11, H12, H15 en H16 is mee aangepast. De raad
  "één generator voor je hele programma" blijft staan.
- **Verhuizen en schrappen**: akkoord.
  - Dertien in een dozijn: van H3 naar H2, met de fix uit het H3-rapport.
  - Meetlat: van H10 naar H9. Pas dan ook `oefeningen/11_advancedklassen/A_practica3.md:4` aan.
  - Systeem informatie deel 2 (DriveInfo): van H3 naar H18.
  - Mapmaker afwerken: weg uit H17. Het project blijft bij de gecombineerde opgaven.
  - Schrappen: Fifa ranking (H5), Sport simulator (H11), Magic en (Pro²) Methoden als objecten (H16).
  - Werkwijze bij een verhuis: wie als eerste een van de twee hoofdstukken doorvoert, doet de verhuis
    volledig (weghalen, toevoegen, coach-data aan beide kanten) en noteert dat onderaan beide
    rapporten. De tweede agent kijkt dus eerst of het al gebeurd is.
- **Nullable-waarschuwingen**: een callout in `content/8_klassen/2_properties.md`, bij de eerste
  string-properties van H9, legt uit dat CS8618 en CS8600 mogen blijven staan.
  `content/9_meminoop/nullreference.md` verwijst ernaar, en de coach-data van H9 weet het.
  `string?` en `required` blijven buiten de cursus.
- **Afbeeldingen**: deze vier mogen hertekend worden met de skill `afbeelding`:
  - de Stemwijzer (H5), zonder echte partijen en in lijn met de herwerkte opgave;
  - het dierenrijk (H13), met Nederlandse namen;
  - `bib.png` (H9);
  - `multipplecompuml.png` (H15).

  De regels van de skill blijven gelden: een PNG met suffix `NEW` naast het origineel, en de SVG plus
  het script in `imagegen/`. Tim bekijkt de nieuwe figuur voor ze in een pagina komt. Verandert een
  opgave samen met haar figuur (de Stemwijzer), meld dat dan in het slotoverzicht.

## Uitgesteld

- **Unittest-repo's** (`ZIESCHERPER_TESTS_H1_...` enzovoort): omzetten naar `net10.0` en hernoemen
  naar de huidige hoofdstuknummers. Niet in deze ronde. De oefeningen blijven naar de huidige
  repo's linken, met de omweg van .NET 7 naar een nieuwere versie zoals nu.
- **Afbeeldingen bij H2**: Tim laat voor één of twee oefeningen van H2 een afbeelding maken
  (skill `afbeelding`). Welke oefeningen, kiest hij nog. Tot dan staat er in
  `oefeningen/2_csharpbasics/A_practica.md` geen enkele afbeelding.

## Deel A: de analyse

**De bril.** Je leest alles als een beginnende student die op dit punt in de cursus zit. Hij kent
enkel wat in hoofdstuk 1 tot en met N gezien is (zie ook "Kent al" en "Kent nog niet" in de
coach-data). Wat is voor hem onduidelijk, te groot, te saai, of gewoon fout?

**Wat je leest:**

- de oefeningenpagina('s) van het hoofdstuk, volledig, en de afbeeldingen die in de opgaven staan;
- de coach-data `oefeningen/_coach/<map>.md`;
- de leerstof van het hoofdstuk (de bestanden uit `_quarto.yml`), zodat je weet wat er gezien is;
- de oefeningen van het vorige hoofdstuk (vluchtig, voor de moeilijkheidscurve) en het begin van
  het volgende (voor de overgang);
- `content/B_appendix/boete.md`: de oplossingen moeten zelf de codeafspraken volgen.

**Wat je nakijkt:**

1. Klopt alles met elkaar: opgave, voorbeelduitvoer, afbeelding en oplossing? Een beginner legt
   zijn werk naast het voorbeeld en de oplossing. Elk verschil doet hem denken dat hij iets fout
   deed.
2. Is de oplossing correct? Twijfel je, compileer en voer ze dan uit met dotnet, in je eigen
   scratchmap en nooit in de repo. Zet het fragment in het klassieke skelet (`namespace`,
   `class Program`, `static void Main`) en geef invoer mee via stdin. Vermeld in het rapport
   "(geverifieerd met dotnet)" als je dat gedaan hebt.
3. Gebruikt de oplossing enkel leerstof die al gezien is? Doet ze iets wat het boek zelf afraadt,
   of wat een boete oplevert?
4. De moeilijkheidscurve: staat de volgorde goed, en waar is de sprong te groot?
5. Welke leerstof uit het hoofdstuk wordt niet (of amper) geoefend? Welke valkuil uit de leerstof
   komt in geen enkele oefening terug?
6. Code lezen: zijn er oefeningen waarin de student code leest in plaats van schrijft? Denk aan
   "voorspel de uitvoer", "zoek de fout" met stagiair Steven (een personage uit het boek dat code
   van een A.I. inlevert zonder ze na te kijken) en puzzels waarin gegeven lijnen in de juiste
   volgorde moeten.
7. Opmaakafspraken uit `CLAUDE.md`: meldingen bovenaan in één `::: {.vooraf}`, `#` per oefening,
   de callouts `Oplossing` en `Les(sen) uit deze oefening`, labels als `(*Essential*)`.
8. Stijl: Nederlands, je-vorm. Geen em-dashes, geen nullables in de leerstof tot ze gezien zijn,
   "instantievariabelen" in plaats van "velden", geen gezwollen of AI-achtige zinnen.

**Rapportformaat.** Schrijf `future/oefeningenreview/HNN_<map>.md` met exact deze koppen:

```
# HN: <titel van het hoofdstuk>

Bronnen: <welke bestanden je gelezen hebt>

## 1. Fouten die sowieso weg moeten
## 2. Wat sterker kan
## 3. Wat weg kan (of verhuist)
## 4. Gaten: kansen voor nieuwe oefeningen
## 5. Voorgestelde volgorde
## 6. Nevenvondsten
```

- Elk punt is concreet: welke oefening, waar (`pad:lijn`, vanaf de root van de repo), wat er mis
  is, en een concreet voorstel.
- Bij een nieuwe oefening: een titel, het idee in een paar zinnen, wat ze traint, en of ze
  *Essential* moet zijn.
- Sectie 6 is voor alles buiten de oefeningen zelf: coach-data die niet klopt, leerstof die iets
  anders zegt dan de oefeningen, iets wat je in een ander hoofdstuk zag.
- Belangrijkste eerst. Liever tien sterke punten dan dertig kleine.
- Het rapport is advies. Je verandert niets in de repo buiten dit ene bestand.

## Deel B: doorvoeren

Werkwijze zoals bij H1. Neem enkel de punten over die Tim in het rapport heeft laten staan.

1. **Lees** deze README, het rapport van het hoofdstuk, en `H01_intro.md` met
   `oefeningen/1_intro/A_Practica.md` als voorbeeld van het resultaat.
2. **Test elk codefragment** dat je toevoegt of wijzigt: een dotnet-consoleproject in je
   scratchmap, het fragment in het klassieke `Main`-skelet, compileren en uitvoeren met invoer via
   stdin. Vermeld je een foutmelding van de compiler in een opgave of oplossing, laat ze dan echt
   genereren en neem de tekst letterlijk over. Houd er rekening mee dat Visual Studio ze iets anders
   kan formuleren dan de compiler op de commandline.
3. **Schrijf de pagina** volgens deze afspraken:
   - `# Titel (*Essential*) {#hNN-slug}`. Bestaande ankers niet veranderen, er kan naar gelinkt
     worden. Nieuwe oefeningen krijgen een nieuw anker in dezelfde stijl.
   - Oplossing: `::::{.callout-caution collapse="true" title="Oplossing"}`. Les:
     `title="Les(sen) uit deze oefening"`. Code in oplossingen staat in ```` ```java ````, zoals in
     de rest van de oefeningen.
   - Een oefening in delen: een vetgedrukte inleiding (`**Deel 2.**`) met per deel een eigen
     Oplossing-callout. Geen `##`-koppen, die vullen de inhoudsopgave.
   - Geen twee koppen van hetzelfde niveau in één oplossingscallout (anders valt de helft buiten
     het slot, zie `CLAUDE.md`).
   - Meldingen bovenaan de pagina: in één `::: {.vooraf}` met een lijstje.
   - Voorbeelduitvoer in een console mét kleuren: `::: {.console .kleur}` met daarin een raw
     html-blok. De klassen staan in `oefeningen/oefeningen.scss` (`k-rood`, `k-groen`, `k-blauw`,
     `k-geel`, `k-cyaan`, `k-wit-zwart`). Voorbeeld in de oefening Regenboog Ticket van H1.
   - Een oefening waarin de student code leest, toont die code in de opgave. Het slot-script meldt
     dan een paar woordgroepen "oplossingstekst op de pagina". Dat is onschuldig.
4. **Coach-data** `oefeningen/_coach/<map>.md` bijwerken: de titels moeten exact overeenkomen met
   de pagina (zonder labels), "Kent al" en "Kent nog niet" kloppen, en per oefening een aanpak en
   valkuilen. Bij code-lees-oefeningen een `### Nota` dat de coach het antwoord nooit geeft.
5. **Controleren:**
   - `quarto render oefeningen/` (enkel het subproject: een bestand van het boek renderen maakt
     `build/` leeg en bouwt het hele boek opnieuw).
   - Kopieer `build/oefeningen` naar je scratchmap en draai op die kopie, in deze volgorde:
     `node scripts/oplossingen-lock.mjs <kopie> --code testsleutel123` (er mag niets lekken in de
     zoekindex) en `node scripts/coach-prompt.mjs <kopie>` (geen "let op" voor dit hoofdstuk).
     Nooit het slot-script op `build/` zelf.
   - Kijk de gerenderde pagina na, bv. met een screenshot via Edge headless:
     `msedge --headless=new --window-size=1100,4200 --screenshot=<png> file:///<pad>/A_Practica.html#<anker>`.
     Het anker klapt die oefening open.
6. **Niet doen:** mappen hernoemen of `_quarto.yml` aanpassen. Zelf nieuwe afbeeldingen maken:
   daarvoor is er de skill `afbeelding`, en Tim kiest eerst. Klopt een afbeelding niet meer, vervang
   ze dan door een tekstschema of een `.console .kleur`-blok, of meld het. Niet committen tenzij
   Tim erom vraagt.
7. Zet de status in de tabel hierboven op "doorgevoerd (datum)" en noteer onderaan het rapport wat
   er doorgevoerd is en wat bewust niet.

### Startprompt voor de uitvoerende agent

```
Voer de oefeningenreview van hoofdstuk N door. Lees eerst future/oefeningenreview/README.md
(de beslissingen van Tim gelden voor alle hoofdstukken, deel B is je werkwijze), daarna
future/oefeningenreview/HNN_<map>.md. Voer enkel de punten
door die in dat rapport blijven staan; wat Tim geschrapt of aangepast heeft, volg je zoals het er
nu staat. Gebruik oefeningen/1_intro/A_Practica.md en H01_intro.md als voorbeeld van het
resultaat. Test alle code met dotnet, render oefeningen/, draai het slot- en coach-script op een
kopie van de build, en geef op het einde een kort overzicht van wat je gedaan hebt en wat niet.
Niet committen.
```
