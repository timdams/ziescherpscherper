# Checklist

Open elke still met de Read tool en loop dit af. Vink pas af wat je echt gezien hebt.

## Tekst

- [ ] Geen tekst raakt of kruist een lijn, pijl, rand, ovaal of arcering.
- [ ] Geen twee teksten over elkaar, ook niet tijdens een overgang.
- [ ] Reel: niets in de bovenste 250 px of de onderste 420 px, en niets tegen de rechterrand onderaan.
- [ ] Reel: ballontekst past in de ballon (hoogstens 4 regels) en niets is kleiner dan 34 px.
- [ ] Kennisclip: onderschrift hoogstens twee regels, binnen het beeld.
- [ ] Code in een onderschrift of ballon staat in mono (tussen backticks).
- [ ] Ingebrande ondertitels bedekken niets en volgen letterlijk wat er gezegd wordt.
- [ ] Nederlands, geen em-dashes, "instantievariabelen".

## Beeld

- [ ] Frame 0 is leesbaar zonder animatie (reel: de haak).
- [ ] Wat de tekst op dat moment noemt, staat in beeld.
- [ ] Niets schijnt door een gearceerde vorm heen waar dat niet hoort.
- [ ] Voorwerpen zijn herkenbaar op de still van schaal 0.6. Moet je zoeken, dan is het te klein.
- [ ] Rood staat enkel waar het oog heen moet.
- [ ] Geen titel of logo's van anderen in beeld.

## Inhoud

- [ ] Elke zin komt uit het boek, of staat als toegevoegd in een comment en in je eindbericht.
- [ ] Code op het scherm compileert, en getallen en uitvoer zijn nagekeken in .NET.
- [ ] Een vereenvoudiging staat als vereenvoudigd in beeld.
- [ ] De eindkaart noemt het juiste hoofdstuk en de bron.

## Filmpje

- [ ] `npx tsc --noEmit` geeft niets.
- [ ] Een still midden in elke overgang bekeken.
- [ ] Duur nagekeken met ffprobe: reel hoogstens 60 s, kennisclip 1 tot 3 minuten.
- [ ] Coverbeeld gerenderd.
- [ ] Wat bij de start gevraagd is, zit erbij: stem, ondertitels (ingebrand of `.srt`), `bijschrift.md`.
