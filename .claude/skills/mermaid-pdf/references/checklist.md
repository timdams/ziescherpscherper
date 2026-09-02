# Nakijken na het renderen

Geen enkele fout hieronder geeft een foutmelding. De render slaagt, het bestand is er, en het is
stuk. Bekijk de pagina's dus met de Read tool, ook als het script netjes afliep.

## Per figuur

- [ ] **staat er een figuur, of staat er broncode?** Zie je `flowchart TD` als tekst in de pdf, dan
      is de fence niet omgezet naar een `{mermaid}`-cel
- [ ] **is de onderste rij compleet?** Vergelijk het laatste vakje in de pdf met het laatste vakje in
      de bron. Dit is de valkuil die het vaakst blijft zitten, want de figuur ziet er verder normaal
      uit. In de hoofdroute van deze repo waren het ROUTE C en ROUTE D
- [ ] **is de rechterrand compleet?** Zelfde verhaal, bij een brede boom
- [ ] **kan je de labels lezen?** Zo niet, dan is de schaal te klein en hoort de figuur op een eigen
      pagina, of hoort de boom op LR
- [ ] **overlappen twee kantlabels?** Bij een LR-boom met veel takken staan ze te dicht op elkaar.
      Verhoog `nodeSpacing`
- [ ] **loopt een lijn dwars door een label?** Dat mag niet, zie de harde regel in de skill
      [`afbeelding`](../../afbeelding/SKILL.md)

## Per document

- [ ] **staat er een pagina met enkel een kop erop?** Een figuur van bijna een volle pagina duwt
      zichzelf naar de volgende. Verlaag `PH_FIG` in het script of kort de figuur in
- [ ] **klopt het aantal figuren?** Het script meldt hoeveel er gepast zijn. Vier bomen in de bron
      en drie in de melding betekent dat er één niet herkend is
- [ ] **staat de pdf waar hij hoort?** Naast het bronbestand, tenzij `--uit` iets anders zegt

## Als je de bron aanpast

- [ ] laat de fences plain (```` ```mermaid ````). De omzetting gebeurt bij het renderen
- [ ] `flowchart LR` en `flowchart TD` horen wel in de bron, want die keuze geldt ook in de
      editorpreview
- [ ] de init-regel met `htmlLabels` en `useMaxWidth` hoort niet in de bron. Die is enkel voor pdf
