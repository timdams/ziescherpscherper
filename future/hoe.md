# Nieuwe editie *Zie Scherp Scherper* — *hoe*
**Concreet schrijfplan: Code Literacy, hooks en talen-context**

*Tim Dams • mei 2025*

> Dit document beschrijft *wat* er in de nieuwe editie komt en hoe we het in het boek inweven. Voor de motivatie achter deze koers, zie [waarom.md](waarom.md).


**OPGELET**: Volgende aspect moeten we nog bespreken voor we verder deze piste opgaan. Een collega merkt namelijk op: "ok, 2e opmerking... spijtig dat je weer veel werk gaat stoppen in de focus op c#... Ik vind dat we nu beter een cursus zouden geven programming principles & OOP: taalonafhankelijk. En je doet oefeningen (lees laat code genereren) in enkele verschillen talen tijdens de labo's om de verschillen in syntax te zien. " Mijn nieuwe inzicht dat ik hem antwoordde: "ja...ik ga nu changes doen die nog "doenbaar zijn op korte termijn". in een volgende fase zou ik heel graag mijn boek herzien dat bij wijze van spreke ieder codevoorbeeld in een andere taal is. constant switchen, omdat de taal er niet toe doet, wel de concepten"
 "

"Constant van taal wisselen is intellectueel elegant maar cognitief duur voor een échte beginner zonder IT-voorkennis in week 1. Er is een reëel risico dat syntax-ruis de concepten vertroebelt vóór ze stevig zitten. Ik zou pleiten voor sequencing: één ankertaal bij de eerste kennismaking met een concept (om een werkend mentaal model te bouwen), en dáárna hetzelfde concept in andere talen tonen om de taal-onafhankelijkheid te bewijzen. Het "elk voorbeeld in een andere taal"-ideaal werkt beter als bekroning dan als startpunt.

En meteen het labo-format dat beide inzichten verenigt: laat de student via AI hetzelfde concept in meerdere talen genereren en de verschillen beoordelen. Dat is taal-onafhankelijkheid én AI-output-beoordelen in één oefening.

"
---

## 1. Code Literacy — een nieuwe laag bij elk hoofdstuk

### Kernprincipe: verdiepen, niet versnellen

De bestaande opbouw — basisconcepten in semester 1, OOP in semester 2 — heeft een bewuste pedagogische logica die we behouden. Wat we toevoegen is een vaste extra laag bij elk hoofdstuk: **Code Literacy**.

> **Wat is Code Literacy?**
> De vaardigheid om code te lezen, te begrijpen, te beoordelen en te verantwoorden — zonder ze zelf te hoeven schrijven. Dit is de kerncompetentie die een developer onderscheidt van een AI-gebruiker.

### Drie nieuwe oefentypes per hoofdstuk

| Oefentype | Werkvorm | Wat wordt getraind |
|---|---|---|
| **Wat doet dit?** | Codefragment lezen en verklaren zonder IDE of compiler | Begrip van flow en logica |
| **Klopt dit?** | AI-gegenereerde code met subtiele bug — student benoemt de fout | Kritisch evalueren van AI-output |
| **Welke is beter?** | Twee werkende implementaties vergelijken en een keuze verdedigen | Redeneren over kwaliteit en afwegingen |

Deze oefentypes vereisen geen nieuwe leerstof. Ze sluiten aan bij elk bestaand hoofdstuk en voegen diepte toe zonder het tempo te verhogen.

### Aanpassing van de toetsvorm

Naast de huidige schrijftaken introduceren we een vast leesonderdeel in de summatieve toets:

- Eén of twee codefragmenten analyseren en verklaren
- Een bug lokaliseren in AI-gegenereerde code
- Twee implementaties vergelijken en een voorkeur motiveren

Tijdsinvestering: ±20% van de toets. Geen bijkomende leertijd voor studenten — het is een andere manier van tonen wat ze al begrijpen.

---

## 2. Hooks voor de nieuwe (papieren) editie

Naast de Code Literacy-laag krijgt de nieuwe editie zes terugkerende elementen die haar eigen karakter geven en concreet onderscheid maken met digitale alternatieven of vorige drukken. De gemeenschappelijke regel: bouwen op de bestaande sterkte van het boek (humor, laagdrempeligheid, Vlaamse toon) — niet ernaast.

### 2.1 Stagiair Steven — een AI-personage dat meegroeit

Een fictieve junior AI-collega die per hoofdstuk code aflevert. Soms briljant, soms hilarisch fout. Steven krijgt een gezicht, kleine tics en een lichte evolutie doorheen het boek. De drie Code Literacy-oefentypes worden zo *Stevens werk* dat de student moet beoordelen — geen abstracte methodologie maar een verteller. Past direct bij de bestaande personagetoon van het boek (vgl. de tweede persoon in de boetes onder [content/B_appendix/boetes/](../content/B_appendix/boetes/)).

### 2.2 Hall of Shame — echte AI-blunders, anoniem

Een groeiende rubriek met *real-world* AI-flaters: ingestuurd door studenten, oud-studenten, collega's. Per editie 10–20 nieuwe gevallen. Inhoudelijk waardevol (concrete leesvoorbeelden) én structureel belangrijk: de rubriek vernieuwt sowieso elke editie, wat een ingebouwde reden geeft om de nieuwste druk in gebruik te nemen.

### 2.3 Interview per hoofdstuk — een professional aan het woord

Elk hoofdstuk eindigt met een kort interview (1–2 pagina's) met iemand uit het werkveld over hun raakvlak met dit hoofdstuk én met AI/C# vandaag. Bv.: het arrays-hoofdstuk met een data-engineer over hoe LLM's lijsten verwerken, het overervings-hoofdstuk met een legacy-developer over hoe AI met diepe hiërarchieën omgaat. Maakt elk hoofdstuk een momentopname; dwingt impliciet tot updates per editie en geeft het boek een netwerk-dimensie die geen concurrent heeft.

### 2.4 Code-archeologie met de oermens als gids

Korte sectie per hoofdstuk: hoe deed men dit in C# 4.0? In C# 8.0? Nu? Doel: studenten leren verouderde AI-output herkennen — een *concreet* AI-tijdperk-probleem omdat LLM's vaak op oude code getraind zijn. De bestaande oermens-metafoor uit [content/12_overerving/2_base.md](../content/12_overerving/2_base.md) (en de illustratie [homo.png](../content/assets/7_overerving/homo.png)) krijgt zo een rol buiten het overervingshoofdstuk: de oermens als ludieke gids door de evolutie van de taal. Hergebruikt eigen materiaal en geeft het boek een visueel terugkerend element.

### 2.5 Code-review mondeling — verdedigen, niet alleen lezen

Eén apart hoofdstuk (of substantiële sectie) over hoe je code *mondeling* verdedigt: in een stand-up, voor een examinator, voor een collega die je keuze betwist. Soft skill die in geen enkel C#-handboek bestaat en die direct aansluit bij de "verantwoorden"-component van Code Literacy. Past ook natuurlijk bij de bestaande summatieve toetsvorm aan AP.

### 2.6 Lees-volgorde-pijlen in moeilijke fragmenten

Bij complexe codeblokken: genummerde markeringen die tonen *waar het oog moet kijken en in welke volgorde*. Maakt impliciete expert-leesstrategie expliciet en is een direct antwoord op het begrijpend-lezen-probleem. Werkt bovendien op papier even goed als digitaal — geen platformafhankelijkheid.

---

## 3. Inhoudelijke uitbreiding: taalkeuze in context

Een tweede inhoudelijke vernieuwing: de nieuwe editie krijgt expliciete aandacht voor het talenlandschap waarin C# zich bevindt.

### Waarom?

Een AI-developer van de toekomst schrijft minder zelf, maar moet wél kunnen inschatten *welke taal voor welk probleem het juiste antwoord is*. AI-tools genereren even moeiteloos Python, Rust of TypeScript — de student moet kunnen verantwoorden waarom een bepaald domein bij een bepaalde taal hoort, niet enkel hoe je in C# een for-lus schrijft. Wie alleen C# kent, kan de keuze van de AI niet beoordelen.

### Wat komt erbij?

- **Een vroeg "waarom C#?"-hoofdstuk** dat C# positioneert tegenover Python (data/AI), JavaScript/TypeScript (web), Rust/C++ (systems), Java (enterprise), Go (cloud/infra). Geen exhaustieve vergelijking, wel: wanneer kies je wat, en waarom is C# voor déze opleiding (en voor brede inzetbaarheid in het .NET-ecosysteem) een verdedigbare keuze.
- **Korte "in andere talen"-callouts** op strategische punten (bv. bij arrays, OOP, async). Eén of twee regels: *"Python doet dit zo, JavaScript zo — let op het verschil X."* Train studenten in taal-onafhankelijk denken zonder de C#-focus te verliezen.
- **Een afsluitende reflectie** in het slothoofdstuk: *"Als je morgen een Python-codebase moet lezen, welke C#-kennis neem je mee, welke niet?"*

Doel: studenten verlaten het boek niet enkel als C#-gebruiker, maar als *programmeur die C# kent en weet waar hij past*.


Ideen:

*Zie verder*: bij ieder concept het concept ook in een andere taa toelichten in een "zie verder" kader.
*Zie nu*: AI output lezen op bugs.