# Checklist na een pdf-render

Renderen slaagt bijna altijd. De vormgeving kapotmaken doe je zonder foutmelding, dus kijk naar de
pagina's. Zet ze om naar png en lees ze in met de Read tool:

```bash
pdftoppm -png -r 75 -f 1 -l 12 preview/laatste.pdf preview/p
```

Loop dan af:

- [ ] **Pagina 1** is de cover, paginavullend, en er staat geen titel of auteursnaam overheen.
- [ ] **Het papier is wit.** Geen grijze waas (zie `#set page(fill: none)`).
- [ ] **De tekst is bijna-zwart**, niet middengrijs.
- [ ] **Het font is Inter**, niet Libertinus Serif (dat is Typst's standaard, en dus het teken dat
      de fontregels niet gedraaid hebben).
- [ ] **Code staat in JetBrains Mono** en `>=`, `!=`, `<=`, `==`, `=>`, `->` staan als twee losse
      tekens.
- [ ] **`::: {.console}`-blokken** zijn zwarte vensters met groene tekst en het balkje
      "VERWACHT RESULTAAT".
- [ ] **De mascottes** in de notitieblokjes hebben allemaal dezelfde hoogte.
- [ ] **De koptekst zegt "Hoofdstuk"**, niet "Chapter".
- [ ] **Afbeeldingen** lopen niet van de pagina af en staan niet op een eigen pagina ver van hun
      tekst.
- [ ] **De inhoudstafel** klopt: alle delen staan erin, de diepte is redelijk.
- [ ] **De laatste pagina's** (appendix, bibliografie) zijn niet halverwege afgebroken.

Bij twijfel over een enkel hoofdstuk: zet dat hoofdstuk in `boekPrintTest/_quarto.yml` en render
enkel dat.
