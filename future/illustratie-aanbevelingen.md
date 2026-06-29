# Waar mist het boek illustraties? - overzicht & aanbevelingen

> Analyse van de **boek-content** in `content/`. Per bestand: prozawoorden (code-blokken en inline-code uitgesloten) versus aantal ingesloten afbeeldingen.
> `review.md` (interne docent-notities) is uitgesloten.
>
> **Correctie t.o.v. eerste versie:** de eerste telling miste de intro-bestanden met hoofdletter-extensie (`.MD`), net daar waar veel beeld zit. Onderstaande cijfers zijn gecorrigeerd (`.md`, `.MD`, `.qmd` allemaal meegerekend). Daardoor zijn de overerving/polymorfisme/interface-hoofdstukken in werkelijkheid prima geïllustreerd.

## Hoofdbevindingen

1. De **quick win is grotendeels al gebeurd**: de diagrammen die ik eerst "alleen in de slides" dacht (paardtulp, gebouwobjecten, klasgebouwen, varkenpaard, intzorro, homo...) staan al in de boek-`.MD`-intro's. De enige echt **ongebruikte** afbeelding is `animals.png` (een generieke is-een-boom). Optioneel embedden, maar het boek heeft al paardtulp + homo voor dat punt.
2. De cursus blijft wél kantelen, maar minder dramatisch dan eerst gedacht. De duidelijke gaten zitten in een handvol hoofdstukken en specifieke bestanden.

## Gecorrigeerde cijfers per hoofdstuk

| Hoofdstuk | woorden | afb. | woorden/afb. | beoordeling |
|---|---:|---:|---:|---|
| 0_intro | 7842 | 26 | 302 | goed |
| 1_csharpbasics | 8524 | 16 | 533 | goed |
| 2_tekst | 4694 | 5 | 939 | mager |
| 3_data | 7868 | 16 | 492 | goed |
| 4_beslissingen | 5539 | 7 | 791 | ok |
| 5_herhalingen | 3390 | 7 | 484 | goed |
| 6_methoden | 4956 | 13 | 381 | goed |
| 7_arrays | 6896 | 14 | 493 | goed |
| 8_klassen | 10523 | 15 | 702 | ok |
| 9_meminoop | 4867 | 10 | 487 | goed |
| **10_advancedklassen** | 5216 | 4 | **1304** | **arm** |
| 11_arraysvanklassen | 4158 | 6 | 693 | ok |
| 12_overerving | 3999 | 8 | 500 | goed |
| **13_advancedovererving** | 3386 | 3 | **1129** | **arm** |
| 14_compositie | 3351 | 7 | 479 | goed |
| 15_polymorfisme | 2163 | 2 | 1082 | mager |
| 16_interfaces | 3752 | 4 | 938 | mager |
| 18_IsAs | 1586 | 2 | 793 | ok |
| **20_exceptions** | 2598 | 2 | **1299** | **arm** |
| **21_bestanden** | 6637 | 2 | **3318** | **armst** |
| B_appendix | 4236 | 23 | 184 | goed |

## Echte prioriteiten voor NIEUWE illustraties

### A. Hoofdstuk 21 - Bestandsverwerking (veruit het armst: 3318 w/afb)

- `bestandenintro.md` (1258w, 0 afb): paden & folders. **Idee:** folderboom met absoluut vs relatief pad en speciale folders.
- `schrijvenenlezen.md` (0 afb in dit bestand): StreamWriter/StreamReader. **Idee:** stream-diagram (programma -> stream -> bestand) + mini-tijdlijn van een `using`-blok (open -> gebruik -> auto-sluiten).
- `serialize.md`: object <-> JSON. **Idee:** serialisatie-doos (object-met-velden -> JSON-tekst en terug), in de `convertdoos`-stijl.

### B. Geheugen / null

- `9_meminoop/nullreference.md` (883w, 0 afb): **Idee:** stack/heap in `memzoom`-stijl met een referentie die naar `null` wijst (geen object op de heap) -> de oorzaak van NullReferenceException.

### C. Advanced klassen (10) - constructors

- `1_constructors.md` + `2_overloadedconstructor.md` (~2000w, 0 afb): **Idee:** diagram van overloaded constructors en `this()`-chaining (pijlen tussen constructors), in de `mmethods`-pijlstijl.

### D. Exceptions (20)

- try/catch/finally (1299 w/afb): **Idee:** exception-flow als flowchart (try -> throw -> catch -> finally) in de bestaande `flow.js`-stijl; eventueel call-stack-unwinding.

### E. Collecties (11)

- `3_foreach.md` (923w, 0 afb): **Idee:** iteratie-visual (cursor die door de elementen loopt).
- `4_list.md` (1042w, 0 afb): **Idee:** dynamisch groeiende List vs. vaste array.

### F. Kleinere wins

- `18_IsAs/1_IsAs.md` (691w, 0 afb): typecheck-diagram (`is`/`as`, pattern matching) met groene-pijl/rode-X-stijl van `staticcall`.
- `2_tekst/6_stringInterpolation.md` (1341w, 0 afb): "string opbouwen"-visual + masker-formattering met placeholders.
- `12_overerving/1_virtual_override.md` (713w, 0 afb): method-dispatch (base vs override).
- `16_interfaces/2_InterfacesInPraktijk.md` (777w, 0 afb): hier past de plug/socket-alternatief.

### Lage prioriteit (lenen zich minder voor beeld)

- `3_data/ai.md` (prompt-patronen, opsomming), `_intro/nuttigeextras.md` (linklijst), `B_appendix/generics.md`.

## Methodologie

- Woorden buiten code-blokken/inline-code; afbeeldingen als `![](...)` en `<img>`.
- Bestandsextensies `.md`, `.MD`, `.qmd` (case-insensitive); `review.md`, oefeningen en slides niet meegerekend in de boek-ratio.
