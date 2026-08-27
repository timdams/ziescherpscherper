# Workshop: een handboek herschrijven met AI

**Duur:** 60 minuten. **Publiek:** collega-lectoren, gemengd van "ik gebruik ChatGPT soms" tot "ik zit in de terminal".
**Vorm:** show, geen slides over AI. Alles wat je vertelt staat op je scherm in deze repo.

## Wat de zaal meeneemt

Eén zin: *je zet de AI niet naast je cursus maar erin, en dan is het meeste werk het opschrijven van je eigen regels.*

Alles wat volgt is bewijsmateriaal voor die zin. Als iemand na 60 minuten enkel `CLAUDE.md` onthoudt, is de workshop geslaagd.

## Hoe dit draaiboek werkt (de zaagtand)

Elk blok heeft drie niveaus:

| Niveau | Voor wie | Wat het is |
|---|---|---|
| **1** | iedereen, ook wie nooit een terminal opende | het probleem, in gewone mensentaal, met één beeld op het scherm |
| **2** | wie al eens met een chatbot werkte | de oplossing zoals ik ze gebruik, met een echt bestand erbij |
| **3** | de techneuten | de machinerie eronder, mag je gerust missen |

Na niveau 3 valt de moeilijkheidsgraad terug naar 1. Dat is de zaagtand: wie afhaakt bij het diepe stuk, pikt drie minuten later weer aan. **Elk blok start daarom met een instapzin** die letterlijk in dit document staat. Zeg die zin ook echt, ook als je denkt dat iedereen nog mee is. Het is het signaal "je mag hier terug instappen".

Markeer voor jezelf: niveau 3 is altijd het eerste dat sneuvelt als je uitloopt.

### De tweede as: wat er op het scherm staat

De niveaus regelen hoe moeilijk het *idee* is. Daarnaast loopt een tweede as die je makkelijk vergeet: hoe **vreemd het scherm eruitziet**. Een collega die nooit met VS Code werkte, ziet een donker venster met een mappenboom, tabbladen en tekst in een schrijfmachineletter. Die persoon denkt "dit is code, dit is niet voor mij", ook als er gewoon een stuk cursustekst staat.

Daarom deze regel, en ze is belangrijker dan de instapzin: **de eerste keer dat een nieuw soort scherm verschijnt, zeg je één vertaalzin.** Niet verontschuldigend, gewoon benoemend.

| Wat er verschijnt | Je vertaalzin |
|---|---|
| VS Code met een `.md`-bestand | "Dit is geen code. Dit is mijn cursustekst, in Kladblok in plaats van in Word." |
| de mappenboom links | "Dat is gewoon mijn Verkenner: één map per hoofdstuk." |
| een terminal | "Zwart venster, één commando. Ik toon het één keer en dan nooit meer." |
| GitHub in de browser | "Dit is dezelfde map, maar dan online, met de geschiedenis erbij." |

Drie momenten zijn onvermijdelijk technisch: het JavaScript in B4, `settings.json` in B6 en de workflow in C2. Zeg daar telkens expliciet **"dit hoef je niet te kunnen lezen, kijk enkel naar X"**. Dat ene zinnetje is het verschil tussen "hij toont iets ingewikkelds" en "ik ben hier verkeerd".

## Voorbereiding

**Tabbladen open, in deze volgorde** (zo hoef je nooit te zoeken):

1. <https://timdams.github.io/ziescherpscherper/> (de gepubliceerde site)
2. <https://timdams.github.io/ziescherpscherper/slides/> (de slides-overzichtspagina)
3. <https://github.com/timdams/ziescherpscherper/commits/main> (de commitgeschiedenis, vervangt de terminal in de opening)
4. <https://github.com/timdams/ziescherpscherper/commit/3b621fa> (de commit met 34 gewijzigde bestanden, voor A2)
5. GitHub Actions van de repo, bij voorkeur op een geslaagde run
6. VS Code op deze repo, met deze bestanden al open in tabs:
   - `CLAUDE.md`
   - `.claude/skills/afbeelding/SKILL.md`
   - `.claude/skills/afbeelding/references/checklist.md`
   - `content/assets/5_arrays/imagegen/2d.js`
   - `content/0_intro/2_firstprogram.md`
   - `content/2_tekst/zieverder.md`
   - `.github/workflows/publish.yml`
7. Een terminal, **al in de juiste map**:
   `cd content/assets/5_arrays/imagegen`
8. Een verkenner-venster op `content/assets/5_arrays/` met grote iconen, zodat de PNG's zichtbaar zijn
9. Een **tweede VS Code-venster** op de cybersecurity-repo (`NWSecBook`), met deze bestanden open in tabs:
   - `cyberboswachters/slides/authenticatie.qmd`
   - `cyberboswachters/content/1_cryptografie/assets/mermaiddiagrams.md`
   - `cyberboswachters/content/0_het_security_landschap/les1_wordtheterger.md`
   - `.claude/settings.json`
   - `cyberboswachters/content/appendix/bronnen.md`

   *Werkt ook zonder dat tweede venster:* de gerenderde slide met het mermaid-diagram staat online, en het Stuxnet-bijschrift zie je gewoon op de gepubliceerde boekpagina.

**Klaarzetten:**

- Zet je editor-lettergrootte op minstens 16. De helft van de zaal zit achteraan.
- **Maak VS Code zo leeg mogelijk.** Zet de minimap uit, sluit het panel onderaan, en oefen `Ctrl+B` (mappenboom aan en uit). Hoe minder knopjes en icoontjes, hoe minder het op een cockpit lijkt. Voor wie nooit met een editor werkte is elk extra paneel ruis.
- **Overweeg een licht thema.** Een donker scherm met gekleurde tekst leest als "programmeur aan het werk"; een wit scherm met zwarte tekst leest als "document". Je toont in blok A en D vooral gewone tekst, en die mag er ook gewoon uitzien.
- Zet de AI-assistent al open en ingelogd. Niet live inloggen.
- **Test `node 2d.js` de ochtend zelf.** Op mijn machine duurt die render **68 seconden**. Je start hem aan het **einde van B3**, niet bij het begin van B4: dan is hij klaar tegen dat je de PNG nodig hebt en hoef je geen minuut te vullen.
- Zet het wifi-scenario klaar: als het netwerk wegvalt werkt alles behalve de AI-assistent zelf. De hele demo blijft dus overeind, je toont dan resultaten in plaats van een live gesprek.

**Wat je niet doet:**

- Geen live prompt-roulette waarbij je een minuut naar een draaiend tekstje staart. Live gaat alleen wat in tien seconden klaar is.
- Geen enkele slide met bullets over "de kracht van AI". De zaal heeft dat al gezien.
- Niet inloggen, niet installeren, niet updaten tijdens de sessie.

## Tijdlijn

| Tijd | Blok | Kern |
|---|---|---|
| 0:00 - 0:05 | **Opening** | het resultaat eerst, dan pas het proces |
| 0:05 - 0:17 | **A. De tekst** | van chatvenster naar repo, en hoe je je eigen stem bewaakt |
| 0:17 - 0:34 | **B. De afbeeldingen** | van een diagram in tekst tot een tekening in code, en wie de rechten heeft |
| 0:34 - 0:42 | **C. De pipeline** | één bron, drie sites, één push |
| 0:42 - 0:54 | **D. De cursus zelf** | wat AI met de inhoud deed, niet met de productie |
| 0:54 - 1:00 | **Afsluiter** | de ladder voor maandag, en vragen |

---

## Opening (0:00 - 0:05)

**TOON:** de gepubliceerde site. Scrol door een hoofdstuk. Klik één hand-drawn afbeelding open in lightbox. Ga naar de slides, open er één, druk op `E` of toon de PDF-knop.

**ZEG:** "Dit is waar we naartoe gaan. Ik toon jullie niet hoe je met ChatGPT praat, ik toon hoe dit boek gemaakt wordt."

**Woordenlijst, en dit kost je veertig seconden die je de hele sessie terugverdient.** Doe dit vóór je iets technisch toont:

**ZEG:** "Ik ga vijf woorden gebruiken die misschien nieuw zijn, dus die zeg ik nu één keer. Een **repo** is gewoon de map waar mijn cursus in zit. Een **commit** is opslaan met een briefje erbij van wat je veranderd hebt. **Renderen** is van mijn tekst een website maken. **Markdown** is tekst met een paar tekentjes voor de opmaak, zoals sterretjes voor vet. En een **skill** is een mapje met instructies erin. Gebruik ik een zesde woord dat jullie niet kennen, roep dan gewoon."

Die laatste uitnodiging is geen beleefdheidsformule. Meen ze, en als iemand roept: antwoord in één zin en ga door.

**Geef daarna de Word-collega's expliciet een stoel.** Dit is het verschil tussen iemand die een uur beleefd zit te wachten en iemand die meedoet:

**ZEG:** "Nog dit. Een deel van jullie werkt al twintig jaar in Word en gaat dat blijven doen. Prima, en dat is geen probleem voor vanavond. Ik ga vier keer expliciet zeggen: **dit stuk werkt ook in Word.** Op die vier momenten mogen jullie meeschrijven. De rest is een kijkje in mijn keuken, en daar mag je gerust naar kijken zonder het te willen namaken."

Dat doet drie dingen tegelijk: het haalt de spanning weg ("moet ik dit begrijpen?"), het geeft hen een **taak** (letten op die vier momenten), en het maakt van de technische stukken iets vrijblijvends in plaats van iets waar ze buiten vallen. Iemand met een taak dwaalt niet af.

De vier momenten zijn **A2**, **B2**, **B6** en **D1**. Ze staan hieronder gemarkeerd met **[OOK IN WORD]**. Zeg de vlag ook echt hardop, alle vier de keren, en tel gerust mee ("dat was de tweede").

**TOON:** de commitgeschiedenis **op github.com**, niet in een terminal: <https://github.com/timdams/ziescherpscherper/commits/main>

*Bewust geen terminal hier.* Dit is minuut twee, en dat is precies het moment waarop een niet-technische collega beslist of dit voor hem is. Een zwart venster met commando's zegt op dat moment "nee". Dezelfde lijst op een webpagina, met datums en jouw eigen briefjes ernaast, zegt "ja". De terminal komt pas in blok B, als iedereen al binnen is.

Wijs de vier golven aan (dit staat er ook zo op de webpagina):

```
2026-03-23  build pipeline prepping
2026-05-08  cowork incoming
2026-06-11  h1..h18 review verwerkt
2026-06-15  slides fase 1
2026-06-29  stagiari steven
2026-07-01  poster prompts
2026-08-25  afbeeldingen input verwerken
```

**ZEG:** "Vijf maanden, 64 commits. Vier golven: eerst de pipeline, dan een review van elk hoofdstuk, dan de didactiek, dan de tekeningen. Nooit alles tegelijk."

Getallen die je hier één keer noemt en daarna nooit meer: 520 tekstbestanden, ongeveer 380.000 woorden, 462 afbeeldingen. Niet meer opsommen dan dat, anders wordt het een opscheppagina.

---

## Blok A. De tekst (0:04 - 0:17)

> **Instapzin:** "We beginnen bij het stuk dat iedereen al eens geprobeerd heeft: een AI iets laten schrijven voor je cursus."

### A1. Het chatvenster loopt vast (0:05 - 0:09)

**TOON:** open je AI-assistent en vraag live, in het bijzijn van de zaal:

> "Schrijf een paragraaf over string interpolation in C# voor een cursus voor eerstejaars."

Terwijl het antwoord komt: niets zeggen, laat het even staan.

**TOON:** zet er `content/2_tekst/6_stringInterpolation.md` naast op het scherm. Twee vensters, echt naast elkaar.

**Dit is de eerste keer dat VS Code op het scherm komt. Zeg hier de belangrijkste zin van de hele workshop voor de niet-technici:** "Wat je rechts ziet is geen code. Dat is mijn cursustekst, letterlijk de paragraaf die de student leest. Ik schrijf ze alleen in Kladblok in plaats van in Word, en die mappen links zijn gewoon mijn hoofdstukken."

Zet daarna de mappenboom links **dicht** (`Ctrl+B`) voor de rest van blok A. Er blijft dan alleen tekst op het scherm staan, en dat scheelt meer dan je denkt.

**ZEG:** "Kijk naar het verschil. Het antwoord is niet fout. Het is alleen niet van mij, het weet niet dat ik nog geen `var` heb uitgelegd, het weet niet dat ik hier al een figuur heb staan, en het gebruikt een em-dash die ik nergens in het boek wil."

**Het punt van niveau 1:** het probleem is niet de kwaliteit van het antwoord. Het probleem is dat het antwoord jouw boek niet kent. Kopiëren en plakken schaalt naar drie paragrafen, niet naar 520 bestanden.

### A2. De AI in de map zetten (0:09 - 0:13) **[OOK IN WORD]**

**TOON:** `CLAUDE.md`, van boven naar beneden scrollen. Blijf hangen bij:

- de tabel met de vier outputs
- "de hoofdstuknummering loopt niet synchroon"
- "Nog geen nullables gebruiken"
- "gebruik instantievariabelen, niet velden"

**ZEG:** "Dit bestand ligt in de map. Elke keer dat ik de assistent open, leest hij dit eerst. Het is geen prompt, het is een contract. En let op wat er in staat: dat zijn geen AI-instructies, dat zijn mijn eigen cursusafspraken die ik nog nooit ergens had opgeschreven."

Dat is de kernboodschap van het hele blok, gerust twee keer zeggen: **het werk zit niet in het prompten, het zit in het expliciteren van wat je al twintig jaar impliciet doet.**

**Vlag hier je eerste Word-moment, en wacht tot je hun aandacht hebt:** "Dit is het eerste stuk dat ook in Word werkt. Wat jullie hier zien is geen programmacode, het is een lijst afspraken. Bij mij heet dat bestand `CLAUDE.md` en ligt het in mijn map. Bij jullie mag dat perfect een Word-document zijn met dezelfde inhoud: mijn vak, mijn doelgroep, mijn taal, wat ik niet wil zien. Dat document plak je bovenaan elk gesprek, of je hangt het één keer op in een project of een custom GPT, en dan geldt het voor al je gesprekken."

Krijg je hier de vraag *"maar mijn cursus is één grote Word-file, kan die er ook in?"*: het antwoord is ja. Je kan je hoofdstukken als bestand meegeven. **Het verschil is niet of de AI je tekst kan lezen. Het verschil is dat ik ze ook laat terugschrijven naar mijn bestanden, en dat jij ze zelf zal moeten kopiëren.** Zeg dat er eerlijk bij, dat is precies wat de repo je oplevert en verder niets.

**TOON:** wat dat oplevert, opnieuw gewoon in de browser: <https://github.com/timdams/ziescherpscherper/commit/3b621fa>

Bovenaan staat "34 changed files". Scrol traag door de lijst bestandsnamen: elk hoofdstuk komt voorbij. Je hoeft geen enkele regel van de wijzigingen te tonen, de lijst namen ís het argument. **ZEG:** "Eén opdracht, één avond, alle hoofdstukken consistent aangepast. Dát is wat je niet krijgt uit een chatvenster."

### A3. Je eigen stem bewaken (0:13 - 0:17)

**TOON:** de sectie **Anti-AI-stijl** in `CLAUDE.md`. Lees er twee regels letterlijk voor: "geen samenvattende wijze slotzin" en "geen symmetrische antithese".

**Zaalmoment (dit werkt echt, plan er een minuut voor):** zet twee zinnen op het scherm en vraag met handopsteking welke van de AI is.

1. "Leer je deze manier van werken goed aan, dan voel je je meteen thuis in heel wat andere talen."
2. "Zet een `@` voor de string zodat de backslashes gewoon tekst zijn."

Beide staan in `content/2_tekst/zieverder.md`. De eerste is precies de gladde slotzin waar mijn eigen regel voor waarschuwt en die er nog steeds staat.

**ZEG:** "Die regels in `CLAUDE.md` staan er niet omdat ik ze bedacht heb. Ze staan er omdat ik die zinnen keer op keer terugvond en er ziek van werd. De stijlgids is een logboek van ergernissen."

**Ga niet in discussie over of AI-tekst herkenbaar is.** Als iemand daarop doorgaat: "daar kom ik in het laatste blok op terug" en door.

---

## Blok B. De afbeeldingen (0:17 - 0:34)

> **Instapzin:** "Nieuw blok, we beginnen weer laag. Even weg van de tekst, we gaan tekenen."

**Vooraf voor jezelf:** dit blok springt één keer naar mijn andere cursus (cybersecurity). Kondig dat gewoon aan bij B3 (*"ik spring even naar mijn andere vak, want daar heb ik dit probleem anders opgelost"*): dat is geen zwakte maar het bewijs dat het geen eenmalige truc is.

De zaagtand loopt hier over zes stappen: **1 → 1 → 1½ → 2½ → 3 → 1**. Twee keer niveau 1 na elkaar is geen vergissing: B2 is de stap waar de Word-collega's binnenkomen, en die mag niet meteen weer weg zijn. Je eindigt dus laag, wat de instap naar blok C makkelijker maakt.

### B1. Het probleem in één beeld (0:17 - 0:20)

**TOON:** de verkenner op `content/assets/`, klik door een paar mappen. Screenshots uit oude Visual Studio-versies, schema's uit PowerPoint, iets uit Paint, allemaal in een andere stijl.

**ZEG:** "462 afbeeldingen, opgebouwd over tien jaar, in ongeveer tien verschillende stijlen. Elke keer als ik er één wou aanpassen, moest ik terugvinden in welk programma ik ze ooit gemaakt had. Meestal vond ik dat niet terug, dus paste ik ze niet aan."

**TOON:** een oude figuur naast de nieuwe hand-drawn versie in hetzelfde hoofdstuk. Het contrast doet het werk, je hoeft er weinig bij te zeggen.

**Eén zin toevoegen, die de rest van het blok opspant:** "En er is nog een tweede probleem dat ik jarenlang genegeerd heb: een deel van die 462 afbeeldingen is niet van mij. Daar kom ik op terug."

### B2. Het antwoord dat vanavond al werkt: laat de AI het beeld maken (0:20 - 0:23) **[OOK IN WORD]**

*Niveau 1, en dit is de stap waar je Word-collega's binnenkomen. Sla ze nooit over, ook niet als je uitloopt.*

**TOON:** eerst het resultaat, en **op de website**, niet in een editor: de samenvattende poster onderaan een hoofdstuk (`content/assets/posters/H3_tekst_gebruken.png` staat ingebed in de kennisclips-pagina van hoofdstuk 3).

Laat de zaal even kijken. Meestal komt de vraag vanzelf: heb jij dat getekend?

**ZEG:** "Nee. Die poster komt uit ChatGPT. En dit is het enige stuk van vanavond waarvoor je niets nodig hebt dat je nog niet hebt: geen editor, geen mappen, geen installatie. Dit kan vanavond in Word."

**TOON:** de prompt die erachter zit, `content/2_tekst/summaryposterprompt.md`. Het is gewoon een tekstje. Scrol traag en wijs twee dingen aan:

- de bovenste helft: de kernpunten van het hoofdstuk, in gewone zinnen
- de onderste helft, en dat is het interessante deel: de vormgeving, met mijn huisstijlkleuren er letterlijk in (`#FF0000`, `#B30000`), plus regels als *"tekst mag nooit overlappen met lijnen, pijlen of kaders"* en *"rustig en professioneel, geen kinderlijke clipart"*

**ZEG:** "Kijk naar die tweede helft. Dat is exact dezelfde beweging als dat contractbestand van daarnet: ik heb één keer opgeschreven wat ik wél en niet wil zien, en nu staat dat in een documentje dat ik achttien keer hergebruik. Ik heb achttien posters, één per hoofdstuk, en voor elke nieuwe pas ik alleen de bovenste helft aan."

**Dit is de kernboodschap voor iedereen die in Word werkt, en zeg ze traag:** "Het verschil tussen een AI die je één keer iets vraagt en een AI waar je echt iets aan hebt, is niet een repo of een terminal. Het is dat je je vraag **bewaart** in plaats van ze weg te gooien. Een prompt die je bijhoudt in een Word-document is precies hetzelfde idee als mijn contractbestand. Alleen de map verschilt."

**TOON tot slot** het bijschrift onder de poster in de cursus:

```
Een handige samenvattende poster (Opgelet: gemaakt m.b.v. ChatGPT Image Gen 2)
```

**ZEG:** "En ik zet erbij waar het vandaan komt. Mijn studenten mogen weten wat ik met AI gemaakt heb. Dat is niet meer dan één zinnetje, en het scheelt een hoop discussie."

*Loop je krap in de tijd? Toon dan alleen de poster en de onderste helft van de prompt. Die twee dingen samen zijn de hele boodschap.*

### B3. Een diagram dat gewoon tekst is (0:23 - 0:26)

*Dit is het niveau waar de niet-technische helft van de zaal moet blijven hangen. Niet overslaan, ook niet als je uitloopt: dit is wat ze maandag effectief kunnen doen.*

**ZEG:** "Voor ik iets toon dat op programmeren lijkt: dit is de versie die geen installatie nodig heeft. Ik spring even naar mijn cybersecurity-cursus."

**TOON:** `cyberboswachters/slides/authenticatie.qmd`, rond regel 108. Zet het tekstblok en de gerenderde slide naast elkaar:

```
graph LR
    A("Plaintext 🚫") --> B("Hashing")
    B --> C("Hashing + Salting")
    C --> D("CRAM / SCRAM")
```

**ZEG:** "Vier regels beschrijven het diagram, de rest van het blok is kleur. Meer staat er niet in mijn markdown, en Quarto tekent het. Geen programma, geen export, geen 'in welke PowerPoint zat dat ook alweer'. En let op: je kan dit lezen zonder één regel code te kennen. Staat er een pijl verkeerd, dan verplaats je een woord."

**TOON, en dit mag je overslaan als je krap zit:** een tweede, rijker voorbeeld, rond regel 213 in hetzelfde bestand: het sequence diagram van de pass-the-hash-aanval. Aanvaller, slachtoffer-pc, server, pijlen ertussen.

**ZEG:** "Dit heb ik niet getekend. Ik heb aan de assistent gevraagd: zet de uitleg uit het handboek om in een sequentiediagram. Wat ik terugkreeg was tekst die ik zelf kon nalezen en corrigeren. Dat is de kern van dit hele blok: ik wil geen plaatje terug, ik wil iets terug dat ik nog kan aanpassen."

**Eerlijke voetnoot, en zeg ze ook echt:** **TOON** `cyberboswachters/content/1_cryptografie/assets/mermaiddiagrams.md`. Dat staat vol diagrammen die volledig in commentaar staan, met notities aan mezelf zoals `%% TIM: TTT vervangen door -- > (zonder spatie)`.

**ZEG:** "Dit is een kerkhof. Deze diagrammen raakten niet door de PDF-versie van het boek, de pijlen kwamen er verminkt uit. Ze leven nu alleen in de slides. Ik toon jullie dat expres: dit werkt níét overal, en ik heb er een halve avond aan verloren."

**START NU DE RENDER** voor het volgende stukje, en laat hem draaien terwijl je verder praat:

```
node 2d.js
```

### B4. Een tekening is code geworden (0:26 - 0:30)

**ZEG:** "Nu een trapje hoger. Voor de tekeningen in déze cursus was tekst alleen niet genoeg, want die moeten er handgetekend uitzien."

**TOON:** `content/assets/5_arrays/imagegen/2d.js`. Het hele bestand past op het scherm, acht regels:

```js
const { createCanvas, C, cellRow } = require('./arr');
const c = createCanvas(1320, 800);
c.rect(60, 150, 840, 510, { fill: C.RED_LIGHT, ... });
const rows = [[34,45,0,34,12,0,23], ...];
rows.forEach((r, i) => cellRow(c, 100, 190 + i * 115, 110, 115, r, { size: 42 }));
c.bubble(1090, 30, 230, 120, 'regen', 890, 165, 46);
c.save('.', '2d', 'NEW');
```

**ZEG:** "Dit is een tweedimensionale array uit hoofdstuk arrays. Acht regels. Ik heb dit niet getypt, de assistent heeft het geschreven nadat hij de oude PNG bekeken had. Maar het staat er nu wel, in de repo, naast het hoofdstuk. Volgend jaar als er een getal moet veranderen, verander ik dat getal."

Toon ondertussen `HOWTORENDER.md` en **ZEG:** "En dit heb ik gemaakt zodat ik het over zes maanden zelf nog kan. Dat document is trouwens ook door de assistent geschreven, na afloop, met de vraag: leg uit hoe ik dit zelf opnieuw doe."

**TOON:** de PNG die net verscheen in de map erboven. Open ze groot.

**Eén verbindende zin naar B3:** "Zelfde principe als dat diagram van daarnet, alleen duurder. Mermaid kost je niks en kan weinig. Dit kost je een avond opzetwerk en kan alles."

### B5. De skill: fouten die niet terugkomen (0:30 - 0:32)

**TOON:** de map `.claude/skills/afbeelding/`, en dan `SKILL.md`.

**ZEG:** "Dit is geen prompt die ik elke keer plak. Dit is een mapje in de repo. Zeg ik 'teken de figuur van hoofdstuk 7 opnieuw', dan laadt hij dit vanzelf: de werkwijze, de tekenbibliotheek, de huisregels."

Wijs drie regels aan in `SKILL.md`:

- "vraag eerst welke afbeelding, nooit zelf kiezen"
- "verwerk de afbeelding niet in het boek, Tim bekijkt eerst zelf"
- "bekijk de gerenderde PNG met de Read tool"

Die laatste is het interessantste: de assistent kijkt naar zijn eigen resultaat, ziet dat een pijl door een label loopt, past het script aan en rendert opnieuw. Zonder dat je iets zegt.

**TOON:** `references/checklist.md`, en lees de eerste regel voor: *"Open de gerenderde PNG met de Read tool en loop dit af. Bijna elke fout hieronder is al eens gebeurd."*

**ZEG:** "Dat zinnetje is het hele verhaal. Elke regel in die checklist is een tekening die ik ooit heb moeten afkeuren. Ik heb die fout één keer uitgelegd, en nu staat ze in de map. Dat is het verschil tussen een tool gebruiken en een tool opbouwen."

Cijfer om af te sluiten: 14 hoofdstukken hebben zo'n `imagegen`-map, samen ongeveer 130 tekenscripts.

### B6. De helft van het probleem die niet over tekenen gaat (0:32 - 0:34) **[OOK IN WORD]**

*Terug naar niveau 1. Iedereen kan hier weer instappen.*

**Zaalmoment, en dit werkt gegarandeerd:** "Handen op. Wie heeft ooit een afbeelding uit Google Afbeeldingen in een cursus of een slide gezet?" Wacht tot zowat de hele zaal de hand opsteekt. Steek de jouwe ook op.

**ZEG:** "Dat is dus het tweede probleem van daarnet. Niet alles kan ik zelf tekenen. In mijn security-cursus staan foto's van Snowden, van de kerncentrale in Natanz, schema's van hoe Stuxnet werkte. Die ga ik niet natekenen, en dat moet ik ook niet: die bestaan, netjes vrijgegeven. Alleen moet ik dan wel zeggen van wie ze zijn."

**TOON:** `cyberboswachters/content/0_het_security_landschap/les1_wordtheterger.md`, het bijschrift van de Stuxnet-figuur:

```markdown
![Stuxnet plaatst een eigen DLL tussen Step 7 en de PLC. Bron:
[Wikimedia Commons](...), auteur Grixlkraxl, CC BY-SA 3.0.](assets/stuxnet_modifying_plc.svg){ width=70% }
```

**ZEG:** "Bron, auteur, licentie. In het bijschrift, waar de student het ziet, niet in een lijstje achteraan dat niemand leest. Ik heb niet gevraagd 'zoek een plaatje van Stuxnet'. Ik heb gevraagd: zoek een figuur die ik mág hergebruiken, download ze, en zet auteur en licentie in het bijschrift. Dat laatste stukje is precies het werk dat ik tien jaar lang heb uitgesteld."

**TOON:** `.claude/settings.json` van die repo. Wijs één van de curl-regels aan:

```
curl -A 'NWSecBookBuild/1.0 (timdams@gmail.com) curl' -L -o .../atomanlage_natanz_2022.jpg ...
```

**ZEG:** "Twee dingen. Eén: elke download staat als expliciet goedgekeurd commando in de repo. Ik kan achteraf zien waar elk beeld vandaan komt. Twee, en dat vind ik het mooiste detail: daar staat mijn naam en mijn mailadres in. Wikimedia vraagt dat je jezelf identificeert als je hun servers aanspreekt. Dat is geen AI-magie, dat is gewoon beleefdheid die ik zelf nooit had opgezocht."

**TOON, en wees hier eerlijk:** de appendix `bronnen.md`, en dan het GitHub-issue *"Bronvermeldingen"*: open sinds december 2024, label `big`.

**ZEG:** "Dit is niet af. Dat issue staat er al anderhalf jaar. Wat wél veranderd is: het is nu een taak die ik hoofdstuk per hoofdstuk kán afwerken, in plaats van een berg waar ik nooit aan begon."

**Vlag hier je derde Word-moment, vóór de slotzin:** "Ook dit werkt vanavond al in Word. Je hoeft geen enkele van mijn mappen te hebben. Vraag niet 'zoek een plaatje van X', maar: **zoek een figuur die ik mag hergebruiken, en geef me de bijschrifttekst met auteur en licentie erbij.** Dan krijg je twee dingen terug die je allebei gewoon plakt: het beeld en het zinnetje eronder. Dat zinnetje is het werk dat wij allemaal al jaren uitstellen."

**Slotzin van het blok, en die zeg je traag:** "Twee cursussen, twee antwoorden op hetzelfde probleem. In C# teken ik ze zelf, want het zijn schema's die alleen in mijn hoofd bestaan. In security bestaan de goede beelden al en is de enige vraag of ik ze mag gebruiken. De AI is in geen van beide gevallen de tekenaar. Ze is de administratie."

---

## Blok C. De pipeline (0:34 - 0:42)

> **Instapzin:** "Terug naar nul. Dit blok gaat niet meer over AI, het gaat over wat er gebeurt als je op opslaan duwt."

### C1. Eén bron, drie sites (0:34 - 0:38)

**TOON:** teken het op een bord of toon het gewoon met mappen naast elkaar:

```
content/   -->  het handboek (html + pdf)
slides/    -->  de lesslides (reveal.js + pdf)
oefeningen/ --> de practica en vaardigheidsproeven
```

**ZEG:** "Drie Quarto-projecten, één repo, één website. De cursus, de slides en de oefeningen kunnen niet meer uit elkaar lopen, want ze staan naast elkaar en ik pas ze in dezelfde beweging aan."

**TOON:** open `content/2_tekst/6_stringInterpolation.md` en dan de overeenkomstige pagina op de site. Gewone markdown links, geen mysterie.

**Dit is het niveau waarop de niet-technische collega's moeten kunnen aanhaken.** Besteed hier gerust je volle vier minuten aan, want dit is voor de meesten het meest bruikbare idee van de hele workshop.

### C2. Slides uit dezelfde bron, en wat er bij een push gebeurt (0:38 - 0:42)

**TOON:** `slides/h09_oop.qmd` naast het overeenkomstige hoofdstuk.

**ZEG:** "De slides zijn geen tweede versie van de cursus, het zijn dezelfde voorbeelden, dezelfde afbeeldingen, dezelfde volgorde. Wat ik in de cursus verbeter, wil ik niet nog eens in PowerPoint gaan zoeken."

**TOON, eerlijk:** `slidesBlend/` staat er ook nog. Dat is een tweede, rijkere variant van dezelfde slides waar ik nog niet uit ben.

**ZEG:** "Dat is meteen ook mijn waarschuwing: zodra genereren goedkoop wordt, maak je varianten die je niet afwerkt. Dat is een echt risico, niet alleen bij mij."

**TOON dan, en hou het kort:** `.github/workflows/publish.yml`, scrol er in tien seconden door. Eén ding aanwijzen volstaat: de decktape-stap die van elke slidereeks automatisch een PDF maakt.

**TOON:** een geslaagde run op GitHub Actions, met de groene vinkjes en de duurtijd.

**ZEG:** "Ik duw op push en tien minuten later staat alles online: boek, PDF, slides, slidespdf's, oefeningen. Ik heb sinds maart geen enkel bestand nog met de hand ergens naartoe gekopieerd."

Dit is het diepste punt van de sessie, en het is bewust kort gehouden. Kijk naar de zaal: als er glazige blikken zijn, meteen naar blok D. Blok D vangt iedereen weer op.

*Is de zaal technischer dan verwacht? Dan is dit de plek om te blijven hangen: de workflow bouwt enkel de PDF's opnieuw van slides die effectief gewijzigd zijn, met een cache erbovenop.*

---

## Blok D. De cursus zelf (0:42 - 0:54)

> **Instapzin:** "Laatste blok, en het minst technische. Tot nu ging het over hoe ik de cursus máák. Nu over wat er in de cursus veranderd is."

Dit is het blok waar de meeste collega's iets aan hebben. Loop het niet af.

### D1. Stagiair Steven (0:42 - 0:47) **[OOK IN WORD]**

**TOON:** `content/0_intro/2_firstprogram.md`, de introductie van Steven. Lees het kadertje voor:

> Steven is onze stagiair. Hij is slim genoeg, maar hij laat zijn code tegenwoordig volledig door A.I. schrijven en kijkt zelf amper nog na wat er staat.

En de code eronder:

```csharp
Console.Writeline(Hallo)
```

**Zaalmoment, maar geef eerst de spelregels, anders kan alleen de helft van de zaal meedoen.**

**ZEG:** "Drie regels van C#, dan mag je meespelen ook al programmeer je nooit. Eén: tekst die op het scherm moet komen, staat tussen aanhalingstekens. Twee: elke opdracht eindigt op een puntkomma. Drie: hoofdletters tellen mee, `WriteLine` met een grote L. Er zitten drie fouten in dat ene regeltje. Wie ziet er één?"

Laat het even hangen. Met die drie regels erbij vindt een collega uit een andere opleiding ze evengoed, en dat is precies het punt dat je daarna maakt: **code lezen is aanleerbaar, ook zonder te kunnen programmeren.**

**Vlag hier je vierde en laatste Word-moment:** "En dit is het laatste stuk waarvan ik zei dat het ook in Word werkt. Kijk naar wat hier op het scherm staat: er zit geen enkele techniek in. Het is een personage en een foute code-snippet. Als je hier vanavond mee thuiskomt, heb je alles wat je nodig hebt."

**ZEG:** "Steven komt in twintig hoofdstukken terug, telkens met code die er plausibel uitziet en net niet werkt. De student moet niet schrijven, de student moet lezen en beoordelen. Dat is de vaardigheid die er nu toe doet."

**TOON, en dit is de mooiste pointe van de workshop:** de tegenstelling. Open `content/0_intro/1_killai.md` en lees:

> je leert ook niet hoofdrekenen door vanaf dag 1 met een zakrekenmachine aan de slag te gaan

**ZEG:** "Ja. Een boek dat met AI herschreven is, en dat zijn studenten in hoofdstuk 1 leert hoe ze Copilot uitschakelen. Ik vind dat geen tegenspraak: ik kan dit doen omdat ik zelf twintig jaar zonder heb gewerkt. Dat is precies het argument waarom zij het eerst zonder moeten leren."

Verwacht hier discussie. Dit is het moment waarop je ze wil hebben, en het is een goed moment: er blijven nog zeven minuten over.

### D2. Zie verder (0:47 - 0:51)

**TOON:** `content/2_tekst/zieverder.md`. Scrol traag door de vaste opbouw:

1. Even terugblikken
2. De kern op een rij, met een valkuilen-callout
3. Zoek de fout
4. In andere talen (hier Python, JavaScript en C)

**ZEG:** "Dit is een sjabloon dat ik in elk van de achttien hoofdstukken wou. Vroeger was dat een project van een jaar en deed ik het dus nooit. Nu was het een namiddag. Niet omdat de AI het beter schrijft dan ik, maar omdat ik het niet achttien keer opnieuw moet beginnen."

**Belangrijk om er eerlijk bij te zeggen:** ik heb elk van die achttien nagelezen en aangepast. De eerste versie zat vol van precies die gladde slotzinnen uit blok A. Wat AI je bespaart is het lege blad, niet het nalezen.

### D3. Wat het niet kan (0:51 - 0:54)

Kort en zonder omhaal, dit is het stuk dat je geloofwaardig maakt:

- **Het dwaalt af van je afspraken.** Vandaar de regels over nullables en over "instantievariabelen" in plaats van "velden": dat waren fouten die bleven terugkomen.
- **Het maakt dingen die er goed uitzien.** De tekening van hierboven kwam er de eerste keer met een pijl dwars door een label. rough.js geeft geen foutmelding voor lelijk.
- **Het produceert meer dan je afwerkt.** `slidesBlend/`, `future/`, de posterprompts: allemaal echt werk, allemaal nog niet af.
- **Mijn eigen `CLAUDE.md` klopt niet meer helemaal.** Er staat een map in beschreven die intussen verhuisd is. Ook dat onderhoud is werk.
- **Nalezen blijft van mij.** Elke regel in dit boek is door mij gelezen. Dat is niet minder werk geworden, dat is ander werk geworden.

---

## Afsluiter (0:54 - 1:00)

**ZEG:** "Ik ga niemand overtuigen om dit ook te doen. Wel dit: waar je vandaag ook zit, er is een volgende stap die klein genoeg is."

**TOON** deze ladder, dat mag gerust het enige geschreven ding van de hele sessie zijn:

| Als je vandaag | Dan is je volgende stap |
|---|---|
| je cursus in Word hebt en soms iets aan ChatGPT vraagt | drie dingen, en alle drie deze week haalbaar: **(1)** schrijf één A4 met je eigen afspraken (taal, aanspreekvorm, wat je niet wil zien) en plak die vooraan in elk gesprek; **(2)** maak één samenvattende poster voor één hoofdstuk en **bewaar de prompt** in een Word-document naast je cursus; **(3)** zet bij je volgende geleende afbeelding auteur en licentie in het bijschrift, en laat de AI die tekst opzoeken. |
| al met markdown of Quarto werkt | zet die A4 als `CLAUDE.md` in je map en laat de AI je hele cursus lezen in plaats van één paragraaf, en vraag je volgende diagram als mermaid-tekst in plaats van als plaatje |
| al in een repo met CI werkt | maak van je eerste terugkerende taak een skill, en schrijf de checklist erbij van de fouten die je al hebt zien passeren |

**Slotzin, en dan stoppen:** "Het meeste werk van de voorbije vijf maanden was niet AI leren gebruiken. Het was opschrijven wat ik al wist."

Daarna vragen. Reken op vier minuten, dat is genoeg voor drie vragen.

---

## Als het misloopt

| Probleem | Wat je doet |
|---|---|
| Uitgelopen, nog 5 minuten voor blok D | Schrap B5 en D2. Blok D1 en de ladder móéten erin. |
| Uitgelopen in blok B | Schrap **B5** (de skill), niet B2 of B6. B5 is het enige stuk dat niemand maandag zelf gaat doen. |
| De render van `2d.js` faalt | Toon gewoon de bestaande PNG in de map ernaast, en zeg dat dit exact de uitvoer van dat script is. Niemand merkt het. |
| Geen netwerk | Alles blijft werken behalve de live vraag in A1. Vervang die door: toon een AI-geschreven paragraaf op je scherm die je vooraf bewaard hebt. |
| Iemand kaapt de sessie met de auteurschapsvraag | "Goede vraag, ik behandel ze in het laatste blok, hou ze even vast." Dan D3, en dan mag het gesprek. |
| De zaal is technischer dan verwacht | Blijf langer in B5 en C2, en toon dan ook `.claude/skills/afbeelding/references/api.md`. |
| Glazige blikken zodra VS Code opengaat | Sluit de mappenboom (`Ctrl+B`) en zeg de vertaalzin opnieuw: "dit is mijn cursustekst, niet mijn code". Herhaal ze gerust drie keer in de sessie, niemand ergert zich daaraan. |
| Iemand zegt "ik ga dit toch nooit doen" | "Klopt, en dat hoeft ook niet. Blijf kijken tot het laatste blok, want dát gaat over jullie cursus, niet over de mijne." Blok D en de ladder werken volledig zonder editor. |
| De zaal is minder technisch dan verwacht | Kort B4 in tot "kijk, acht regels, meer moet je er niet van weten" en geef die tijd aan B2 en B6. Sla C2 over, verleng D1. Blok D werkt volledig zonder enige technische voorkennis. |

## Spiekbriefje

```
# de site
https://timdams.github.io/ziescherpscherper/

# de vier golven (browser, geen terminal)
https://github.com/timdams/ziescherpscherper/commits/main

# één opdracht, 34 bestanden (browser, geen terminal)
https://github.com/timdams/ziescherpscherper/commit/3b621fa

# het enige terminalmoment van de sessie
# (duurt ~68 seconden, starten aan het einde van B3)
cd content/assets/5_arrays/imagegen
node 2d.js
```

**De vier vertaalzinnen, voor als je ze kwijt bent:**

- VS Code met tekst: "dit is geen code, dit is mijn cursustekst"
- mappenboom: "dat is gewoon mijn Verkenner, één map per hoofdstuk"
- terminal: "zwart venster, één commando, en dan nooit meer"
- iets echt technisch (B4, B6, C2): "dit hoef je niet te kunnen lezen, kijk enkel naar..." 

**Bestanden in volgorde van tonen:**

| Blok | Bestand |
|---|---|
| A2 | `CLAUDE.md` |
| A3 | `CLAUDE.md` (sectie Anti-AI-stijl), `content/2_tekst/zieverder.md` |
| B2 | `content/2_tekst/summaryposterprompt.md`, `content/assets/posters/H3_tekst_gebruken.png`, `content/2_tekst/kennisclips.md` |
| B3 | `cyberboswachters/slides/authenticatie.qmd` (r. 108 en 213), `cyberboswachters/content/1_cryptografie/assets/mermaiddiagrams.md` |
| B4 | `content/assets/5_arrays/imagegen/2d.js`, `HOWTORENDER.md` |
| B5 | `.claude/skills/afbeelding/SKILL.md`, `.claude/skills/afbeelding/references/checklist.md` |
| B6 | `cyberboswachters/content/0_het_security_landschap/les1_wordtheterger.md`, `.claude/settings.json` (van die repo), `cyberboswachters/content/appendix/bronnen.md`, issue #45 "Bronvermeldingen" |
| C2 | `slides/h09_oop.qmd`, map `slidesBlend/`, `.github/workflows/publish.yml` |
| D1 | `content/0_intro/2_firstprogram.md`, `content/0_intro/1_killai.md` |
| D2 | `content/2_tekst/zieverder.md` |
