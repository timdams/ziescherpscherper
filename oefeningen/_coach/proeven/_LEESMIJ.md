# Coach- en quoteergegevens bij de vaardigheidsproeven

Elke vaardigheidsproef (de lijsten "Voorbeeld vaardigheidsproeven" in `oefeningen/_quarto.yml`)
krijgt bovenaan een blok met [_bovenaan.md](_bovenaan.md) en twee knoppen:

- **Coach**: het gewone sjabloon [../_prompt.md](../_prompt.md), dezelfde coach als bij de oefeningen.
- **Quoteer**: [../_quoteer.md](../_quoteer.md), een strenge verbetering met puntenverdeling en boetes.

Het script [scripts/coach-prompt.mjs](../../../scripts/coach-prompt.mjs) zet ze na het renderen in de
pagina. De proef zelf haalt het uit de pagina, zonder de oplossingen.

## Eén bestand per proef

Naam: `<map>_<bestand>.md`. Voor `oefeningen/EindeTests/Mod2/Opgave_2526.md` is dat
`Mod2_Opgave_2526.md`. Bestanden die met `_` beginnen, slaat het script over. Een proef zonder
bestand krijgt geen knoppen, en het script waarschuwt.

De leerstofgrens komt uit de coach-data van het laatste hoofdstuk: `Mod2` gebruikt
`../8_arrays.md` (hoofdstuk 1 tot en met 8, semester 1), `Mod4` gebruikt
`../18_bestandsverwerken.md` (hoofdstuk 1 tot en met 18, semester 2).

Vijf koppen van niveau 1, in deze volgorde:

| Kop | Komt in | Wat erin staat |
|---|---|---|
| `# Nota` | coach | Wat voor proef het is, hoeveel opgaven, wat de coach zeker niet mag geven. |
| `# Aanpak` | coach | Per opgave hoe je eraan begint: welke stappen, welke vragen je jezelf stelt. Niet het antwoord. |
| `# Valkuilen` | coach | Een lijstje van wat studenten typisch fout doen bij deze proef. |
| `# Puntenverdeling` | quoteer | Per opgave en per onderdeel de punten. |
| `# Beoordeling` | quoteer | Waar de verbeteraar op let: wat nodig is voor het maximum, onduidelijkheden in de opgave en hoe je die beoordeelt, wat een boete is in plaats van puntverlies in een onderdeel. |

## Afspraken

- **Nergens code.** De student ziet de prompt die hij plakt. Geen methodes, geen fragmenten, geen
  formules die je zo kan overtypen. Namen die de opgave zelf al oplegt, mogen wel.
- **De puntenverdeling van de proef zelf** neem je letterlijk over. Tellen de punten niet op tot het
  totaal dat de opgave noemt, schrijf dat erbij en kies het totaal van de onderdelen.
- **Had de proef geen puntenverdeling**, verdeel dan op 20, en begin de sectie met: "De originele
  proef had geen puntenverdeling. Deze is achteraf toegevoegd, op 20." Verdeel naar werk en
  moeilijkheid, in halve punten.
- **Beoordeling** vult het sjabloon aan, ze herhaalt het niet. De boetes en de regels tegen dubbel
  straffen staan al in `_quoteer.md`.
- Schrijfstijl zoals in de rest van de cursus: Nederlands, je-vorm, geen em-dashes,
  "instantievariabelen" en niet "velden".

Voorbeeld: [Mod2_Opgave_2526.md](Mod2_Opgave_2526.md).
