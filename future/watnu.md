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
- [ ] **Stagiair Steven in de oefeningen en de slides**: boek heeft alle 18 hoofdstukken, de
      oefeningen en de slides enkel H1-H8.
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

- [ ] `::: {.console}` rond de uitvoerblokken: gedaan t/m H9 (`0_intro` .. `8_klassen`), daarna
      vrijwel niets. Nog kale ` ```text `-blokken: 21_bestanden (8), 20_exceptions (4),
      9_meminoop (3), 10_advancedklassen (3).
- [ ] `filename="Student.cs"` op de codefences: 3 van de 8 sterke kandidaten uit het rapport.

## 4. Illustraties in de arme hoofdstukken (29 juni 2026)

Uit [illustratie-aanbevelingen.md](illustratie-aanbevelingen.md). Deze hoofdstukken zijn nooit
aan de beurt geweest in de Excalidraw-run; hun `imagegen/` dateert nog van 29 juni. Gebruik de
skill `afbeelding`, en vraag Tim eerst welke figuur we aanpakken.

- [ ] 21_bestanden (armst): folderboom absoluut/relatief, stream-diagram, serialisatiedoos
- [ ] 20_exceptions: try/catch/finally als flowchart
- [ ] 10_advancedklassen: overloaded constructors en `this()`-chaining
- [ ] 9_meminoop/nullreference.md: stack/heap met een referentie naar `null`
- [ ] 11_arraysvanklassen: foreach-cursor, List die groeit vs vaste array
- [ ] 15_polymorfisme en 16_interfaces (beide mager, geen `imagegen/`-map)

## 5. Hoofdstuk-verbeterrun H9-H18 (24 augustus - 4 september 2026)

De sweep "H1 en tot H8 verbeterd" liep van `0_intro` tot `7_arrays` en pakte daar tekst,
afbeeldingen en een deel van de oude TODO's samen aan.

- [ ] Dezelfde pass voor H9 t/m H18 (`8_klassen` .. `21_bestanden`).

## 6. Slides h10 t/m h18 (4-11 september 2026)

- [ ] h01 t/m h09 staan in sync met de hoofdstukken, h10 t/m h18 niet. Die zijn sinds
      "slides update tot en met 8" enkel meegesleept in globale commits.

## 7. Oefeningenreview H9-H18 (11 september 2026)

De rapporten staan klaar in [oefeningenreview/](oefeningenreview/), met de beslissingen van Tim
in [oefeningenreview/README.md](oefeningenreview/README.md).

- [ ] H9 t/m H18 doorvoeren. H1-H8 zijn gedaan.
- [ ] De drie goedgekeurde figuren die nog niet hertekend zijn: dierenrijk (H13, met
      Nederlandse namen), `bib.png` (H9), `multipplecompuml` (H15). De Stemwijzer (H5) is klaar.
- [ ] `oefeningen/EindeTests/`: valt buiten de review en heeft nog geen coach-data. Het enige
      deel van de oefeningen dat in geen enkele run zit.

---

## Logboek

Afgewerkte items komen hier als één regel, nieuwste bovenaan.

- (nog niets)
