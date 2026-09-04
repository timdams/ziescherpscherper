# De cover van het handboek

`cover.svg` is de voorpagina van de PDF-render. Het bestand wordt door
[../typst-show.typ](../typst-show.typ) als paginavullende afbeelding op pagina 1
gezet; het kale titelblok van het orange-book-sjabloon is daar leeggemaakt.

Alles in de SVG is vector, ook de tekst: die is omgezet naar outlines. Dat is
nodig omdat de GitHub Action die de site bouwt geen Arial heeft. Zou de tekst
als `<text>` blijven staan, dan koos de bouwmachine zelf maar een font.

## Opnieuw genereren

```powershell
python cover/maak_cover.py                 # cover.svg + cover.png (voorbeeld)
python cover/maak_cover.py --kleur rood    # andere kleur uit VARIANTEN
python cover/maak_cover.py --varianten     # kleurproeven in varianten/
```

Nodig: `pip install fonttools pillow numpy`. De fonts (Arial) komen uit
`C:\Windows\Fonts`, dus dit draai je op Windows. `cover.png` is enkel een
voorbeeld om naar te kijken, de PDF gebruikt de SVG.

## Wat staat waar

| Bestand | Rol |
|---|---|
| `maak_cover.py` | de lay-out: teksten, groottes, posities, kleuren |
| `cover.svg` | het resultaat dat in de PDF belandt (committen!) |
| `cover.png` | voorbeeldrender, handig om snel te bekijken |
| `bril.json` | de bril als SVG-pad, getraceerd uit de vorige editie |
| `extract_bril.py` | maakt `bril.json`; enkel opnieuw draaien als de bril wijzigt |
| `bitmaptrace.py` | marching squares: bitmap naar gladde contouren |
| `svgtekst.py` | letters uit een TTF naar SVG-paden |

## Iets aanpassen

Teksten en verhoudingen staan bovenaan `maak_cover.py` als constanten:
`TITEL`, `ONDERTITEL`, `BANNER`, `AUTEUR`, `EDITIE`, en daaronder de verticale
opbouw (`Y_...`) en breedtes (`B_...`) als fractie van de pagina. Alles is
A4-relatief, dus je kan gerust schuiven zonder iets anders te breken.
Na een wijziging: `python cover/maak_cover.py` en dan `quarto render . --to typst`.
