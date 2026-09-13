# Wat nu? - de openstaande runs

Werklijst van runs die begonnen zijn maar niet afgemaakt. Opgesteld op 2026-09-12 door de
commits, [hoe.md](hoe.md), [waarom.md](waarom.md), de twee rapporten en de `review.md`-bestanden
per hoofdstuk naast elkaar te leggen.

**Volgorde: hoe ouder het gat, hoe belangrijker.** Een item is pas af als het in alle drie de
outputs klopt waar het hoort (boek, oefeningen, slides). Is een item gedaan, dan verdwijnt het
hier volledig, met een regel in het logboek onderaan.

Sneltest of iets nog open staat:

```bash
# openstaande TODO-comments uit de junireview
grep -rho "TODO ed.5" content/ --include=*.md --include=*.MD | wc -l
# console-blokken vs kale text-blokken per hoofdstuk
for d in content/*/; do echo "$(basename $d) $(grep -ro '::: *{\.console}' $d|wc -l) $(grep -rho '^```text' $d|wc -l)"; done
```

---

## 1. Code Literacy in de cursus zelf (idee van mei 2026)

[hoe.md](hoe.md) noemt zes hooks. Enkel Stagiair Steven is er echt.

- [ ] **De drie oefentypes** "Wat doet dit?", "Klopt dit?" en "Welke is beter?" bestaan nergens.
      Dit is de kern van [waarom.md](waarom.md): zolang die er niet zijn, is de rest opsmuk van
      de oude opzet. Begin bij één hoofdstuk als proef, laat Tim dat goedkeuren, pas daarna uitrollen.
      *Geparkeerd op 12 september 2026: een proef voor H8 (boek modelleert met een eigen pagina,
      oefeningen drillen met een label `(*Lezen*)`, slides één klasmoment) overtuigde Tim niet en is
      ongedaan gemaakt. Zoek bij een nieuwe poging eerst een andere vorm.*
- [ ] **Stagiair Steven in de slides**: boek en oefeningen hebben alle 18 hoofdstukken (oefeningen
      H9-H18 op 13 september 2026), de slides enkel H1-H8.
- [ ] **Hall of Shame** (echte AI-blunders per editie): nog geen enkele rubriek.
- [ ] **Interview per hoofdstuk** met iemand uit het werkveld: nog niets.
- [ ] **Code-archeologie met de oermens als gids** (C# 4.0 / 8.0 / nu, om verouderde AI-output te
      herkennen): nog niets.
- [ ] **Code-review mondeling** als apart hoofdstuk of sectie: nog niets.
- [ ] **Lees-volgorde-pijlen** bij moeilijke fragmenten: 3 bestanden van de ~150.
- [ ] **Openstaande beslissing bovenaan [hoe.md](hoe.md)**: de collega wil taalonafhankelijk
      werken met code in meerdere talen. Tim heeft geantwoord, maar de knoop is nooit
      doorgehakt. Vraag het hem voor er hier verder gebouwd wordt.

## 2. TODO-comments uit de junireview (11-12 juni 2026)

Bij het verwerken van de reviews zijn 148 punten als `[c]` in de tekst gezet, als verborgen
`<!-- TODO ed.5 (review): ... -->`. Daar staan er nog ongeveer 90 van open. Goedkoopste item
van de hele lijst, en het zit bij elk hoofdstuk in de weg.

- [ ] 10_advancedklassen (9), 1_csharpbasics (8), 9_meminoop (7), 16_interfaces (7)
- [ ] 0_intro, 2_tekst, 3_data, 8_klassen, 11_arraysvanklassen (elk 6)
- [ ] 20_exceptions, 12_overerving, 6_methoden (elk 4), de rest 1 tot 3
- [ ] In elke `review.md` staat nog "De Future-sectie en de mini-oefeningen zijn nog niet
      aangepakt". Beslis per hoofdstuk of dat blijft staan of weg mag.

H6 (0 over) en H8 (1 over) zijn al opgekuist door de augustussweep.

## 3. Didactische codeblok-tips (25 juni 2026)

Uit [didactische-tips-rapport.md](didactische-tips-rapport.md).

- [ ] `filename="Student.cs"` op de codefences: 3 van de 8 sterke kandidaten uit het rapport.

## 4. Kennisclips lopen achter op het boek (25 juni 2026)

Sinds juni 2026 zijn er geen clips meer bijgekomen, terwijl het boek fors herschreven is. Van de 106
Panopto-clips dateren er 101 van 2018 tot 2022; enkel H18 (mei 2026) en twee properties-clips (2024)
zijn recenter. De volledige vergelijking staat in [kennisclips-rapport.md](kennisclips-rapport.md),
met per clip de opnamedatum (die zit verstopt in de Panopto-ID).

- [ ] **Taggen** met een icoon (oud / nieuw / mist nieuwe leerstof), in de 18 `kennisclips.md` en in
      `allvideos1.md`/`allvideos2.md`. Die laatste mist H18 nog.
- [ ] **Ontbrekende clips** als korte Remotion-filmpjes. Zeker nodig: raw string literals (H3),
      programmeren met A.I. (H4), De Morgan (H5), collection expressions (H8), Pong als rode draad
      (H9-H16), `required` (H11), `Queue`/`Stack` (H12), `IComparable` en sorteren (H17),
      JSON-serialisatie (H18). Plus een vervanger voor "IntelliCode uitschakelen" die ook Copilot in
      VS 2026 uitzet. Nog tien twijfelgevallen staan in punt 2 van het rapport.
      *12 september 2026: eerste clip gebouwd in [`_kennisclips/`](../_kennisclips/README.md),
      raw string literals (H3). Nog zonder stem en nog niet in `kennisclips.md` gezet.
      De scenario's voor de andere ontbrekende clips staan in [kennisclips-scenarios.md](kennisclips-scenarios.md).
      13 september 2026: `Queue` en `Stack` (H12) gebouwd, eveneens zonder stem en nog niet op Panopto.*
- [ ] Een handvol clips past niet meer bij de tekst (class library, class designer, meme-detective,
      fuifsimulator, ...). Houden, verplaatsen of schrappen: beslissing aan Tim.
- [ ] 14 van de 18 `kennisclips.md` linken bij de oefeningen nog naar gitbook.

## 5. Illustraties in de arme hoofdstukken (29 juni 2026)

Uit [illustratie-aanbevelingen.md](illustratie-aanbevelingen.md). Deze hoofdstukken zijn nooit
aan de beurt geweest in de Excalidraw-run; hun `imagegen/` dateert nog van 29 juni. Gebruik de
skill `afbeelding`, en vraag Tim eerst welke figuur we aanpakken.

- [ ] 21_bestanden (armst): folderboom absoluut/relatief, stream-diagram, serialisatiedoos
- [ ] 20_exceptions: try/catch/finally als flowchart
- [ ] 10_advancedklassen: overloaded constructors en `this()`-chaining
- [ ] 9_meminoop/nullreference.md: stack/heap met een referentie naar `null`
- [ ] 11_arraysvanklassen: foreach-cursor, List die groeit vs vaste array
- [ ] 15_polymorfisme en 16_interfaces (beide mager, geen `imagegen/`-map)

## 6. Hoofdstuk-verbeterrun H9-H18 (24 augustus - 4 september 2026)

De sweep "H1 en tot H8 verbeterd" liep van `0_intro` tot `7_arrays` en pakte daar tekst,
afbeeldingen en een deel van de oude TODO's samen aan.

- [ ] Dezelfde pass voor H9 t/m H18 (`8_klassen` .. `21_bestanden`).

## 7. Slides h10 t/m h18 (4-11 september 2026)

- [ ] h01 t/m h09 staan in sync met de hoofdstukken, h10 t/m h18 niet. Die zijn sinds
      "slides update tot en met 8" enkel meegesleept in globale commits.

## 8. Oefeningenreview H9-H18 (11 september 2026)

De rapporten staan klaar in [oefeningenreview/](oefeningenreview/), met de beslissingen van Tim
in [oefeningenreview/README.md](oefeningenreview/README.md).

- [ ] H9 t/m H18 doorvoeren. H1-H8 zijn gedaan.
- [ ] De drie goedgekeurde figuren die nog niet hertekend zijn: dierenrijk (H13, met
      Nederlandse namen), `bib.png` (H9), `multipplecompuml` (H15). De Stemwijzer (H5) is klaar.
- [ ] `oefeningen/EindeTests/`: valt buiten de review en heeft nog geen coach-data. Het enige
      deel van de oefeningen dat in geen enkele run zit.
- [ ] De callout `Les(sen) uit deze oefening` bestaat enkel in H1-H8 (52 stuks op 142 oefeningen).
      In H9 t/m H18 staat er geen enkele, op 68 oefeningen. Scherpste breuklijn tussen de twee
      helften van de oefeningen.

## 9. Kleine gaten, gevonden op 12 september 2026

Losse zaken die bij een scan van de repo bovenkwamen en nergens anders thuishoren.

- [ ] Weesbestanden die in geen enkele `_quarto.yml` staan: `content/papier.md`,
      `content/01_introductie/intro.qmd`, `content/_intro/nuttigeextras.md`. Publiceren,
      archiveren of schrappen. (De 19 `summaryposterprompt.md` laat ik hier buiten: die lijken
      bewust werkbestanden.)
- [ ] Verborgen TODO in `oefeningen/7_methoden/b_practicasamenb.md`: het verhaalgenerator-project
      in `EindeTests/A_DEEL1_AllInOne/3_verhaalgenerator.md` moet eerst hersteld worden.
- [ ] Drie fouten in de boektekst, gevonden bij het uitschrijven van
      [kennisclips-scenarios.md](kennisclips-scenarios.md):
      `10_advancedklassen/2_overloadedconstructor.md` gebruikt `Console.WindowWidth` voor `Y` (moet
      `WindowHeight` zijn); in `13_advancedovererving/5_abstract.md` stopt de Pong-`foreach` midden in
      `//spe`, zonder `TekenOpScherm` en zonder sluitende accolade; in
      `16_interfaces/2_InterfacesInPraktijk.md` gooien de twee versies van `CompareTo` een andere exception.

## 10. Pdf-lay-out (13 september 2026)

De lay-outrun op de pdf is gedaan (avatars, figuurmaat, weesregels, blanco pagina's), zie
[../.claude/pdf-afspraken.md](../.claude/pdf-afspraken.md). Wat overbleef:

- [ ] Nog niet gecommit: filters, partial, `_quarto.yml`, `scripts/pdf-controle/`, de afspraken.
- [ ] De website is na de wijzigingen niet opnieuw gerenderd. De filters doen enkel iets voor Typst en
      `{pdf-width=..}` hoort genegeerd te worden, maar dat is niet nagekeken.
- [ ] De bijlage heet in de pdf "1. Oefeningen" in plaats van "A. Oefeningen".
- [ ] Bij de "Meer weten"-hoofdstukken schuift de poster door en blijft de pagina ervoor halfleeg.

## 11. Gevonden bij de Steven-oefeningen H9-H18 (13 september 2026)

- [ ] **Diepe links naar ziescherp.be zijn stuk.** `www.ziescherp.be/content/...` en `ziescherp.be/...`
      sturen door naar de hoofdpagina van `timdams.github.io/ziescherpscherper/` en laten het pad vallen.
      Elke link naar een hoofdstuk of anker in de oefeningen (ook H1-H8) belandt dus op de voorpagina.
      De repo heeft geen `CNAME` en de workflow zet geen custom domain: het is een doorverwijzing bij de
      registrar. Oplossing: GitHub Pages een custom domain geven (CNAME-bestand in `build/` via de
      workflow, DNS-record bij de registrar). Werk voor Tim, want DNS.
- [ ] **De coach-prompt verklapt het antwoord bij zoek-de-fout-oefeningen.** `scripts/coach-prompt.mjs`
      zet Aanpak en Valkuilen uit de coach-data in de prompt die de student plakt. Bij de Steven-oefeningen
      noemen die de fouten bij naam (zo al in H1-H8, en de nieuwe volgen dat; H18 bewust niet). Dat botst
      met de regel in CLAUDE.md. Beslissing aan Tim: Aanpak bij code-lees-oefeningen vaag houden, of het
      script die secties laten weglaten.
- [ ] Leerstof die niet klopt met wat de compiler doet:
      `content/10_advancedklassen/2_overloadedconstructor.md:35` en `zieverder.md:16` noemen CS1729 bij
      `new Student()`, met één constructor geeft dotnet CS7036;
      `content/21_bestanden/schrijvenenlezen.md:255` en `zieverder.md:17` zeggen dat een verkeerde
      leesvolgorde met `BinaryReader` crasht, dat is niet zo;
      de nullable-callout in `content/8_klassen/2_properties.md` noemt CS8618 en CS8600, maar niet
      CS8765, die elke correcte `Equals(object obj)` geeft.

## 12. Vaardigheidsproeven: fouten in opgaven en oplossingen (13 september 2026)

De proeven hebben nu een coach- en een quoteerprompt (zie CLAUDE.md). Bij het schrijven daarvan kwamen
veel fouten in de oude opgaven en oplossingen boven. De volledige lijst staat in
[vaardigheidsproeven-fouten.md](vaardigheidsproeven-fouten.md).

Dezelfde dag rechtgezet: de verkeerde oplossingen (Mod4 2223 heeft nu een eigen oplossing, Mod4 2324 de
Pharaoh-oplossing), de puntentotalen, de tegenstrijdigheden in de opgaven, de vijf afbeeldingen die
niet klopten en de kleine tekstzaken. Wat overblijft:

- [ ] De keuzes in de quoteergegevens nakijken, vooral de nieuwe die strenger zijn dan voorheen.
- [ ] `Mod4/1920schemaNEW.png` bekijken; de opgave gebruikt die al in plaats van het oude schema.

---

## Logboek

Afgewerkte items komen hier als één regel, nieuwste bovenaan.

- **12 september 2026** - Item 9: de twee kapotte links naar `LICENSE.MD` in `oefeningen/README.md`
  geschrapt in plaats van een licentiebestand aan te maken. De licentie (CC BY-NC 4.0) staat er nog
  gewoon bij naam in de kop, met de badges en de samenvatting.
- **12 september 2026** - Item 9 (kleine gaten), eerste punt: `content/18_IsAs/` en
  `content/20_exceptions/` hebben geen eigen `kennisclips.md` nodig. Hun pagina's hangen in H10, H14,
  H16 en H17, en de clips erover staan daar al ("Werken met exception", "Zelf uitzonderingen maken",
  "Is en as keywords", "Vloekende mensen"). Of die clips nog kloppen, zit nu in item 4.
- **12 september 2026** - Kapotte paden in de oefeningen hersteld. 17 afbeeldingen in
  `oefeningen/EindeTests/` wezen één map te hoog (`../assets/` in `A_DEEL1_AllInOne` en
  `A_DEEL2_AllInOne`, `/assets/` in `Mod4`) en waren dus stuk op de site; nu `../../assets/`,
  gelijk aan wat `Mod1` t/m `Mod3` al deden. Quarto waarschuwt hier niet voor: wil je dit later
  hercontroleren, kijk dan of de PNG's effectief in `build/oefeningen/assets/` belanden. Ook de vijf
  interne links gerepareerd waar Quarto wél over klaagde (dierentuin naar
  `14_advancedovererving`, Figuren naar `9_klassen/A_practica.md#figuren`, twee keer Map Maker
  naar `../EindeTests/A_DEEL2_AllInOne/`, en de constraints-link nu naar
  `ziescherp.be/content/B_appendix/generics.html#constraints`). Meteen ook de twee em-dashes in
  de oefeningen weg en één "velden" vervangen door "instantievariabelen".
- **12 september 2026** - Item 3, eerste punt: `::: {.console}` rond de uitvoerblokken. 19 blokken
  gewikkeld in `2_tekst`, `7_arrays`, `8_klassen`, `9_meminoop`, `10_advancedklassen`,
  `11_arraysvanklassen`, `12_overerving`, `20_exceptions` en `21_bestanden`. De 17 overblijvende
  kale ` ```text `-blokken zijn geen programma-uitvoer en blijven bewust kaal: pseudocode
  (bakkersalgoritme, fiets oppompen, natrium), syntaxvormen (`using`-blok, expression body,
  het escape-lijstje), de exception-hiërarchie als boom, de spelkaart-array, de losse paths in
  `bestandenintro.md`, de JSON-bestandsinhoud in `serialize.md` en de bestandslijstjes in het
  boeteblad. Wie de sneltest draait, telt die 17 dus nog: dat is correct.
