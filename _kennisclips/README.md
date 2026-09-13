# Kennisclips (Remotion)

Kennisclips (liggend) en Instagram-reels (staand) bij Zie Scherp Scherper. Quarto negeert deze map
(ze begint met een underscore), dus niets hiervan belandt op de site.

De werkwijze, de huisstijl en de valkuilen staan in de skill `.claude/skills/videoclip/` in de repo.

## Gebruik

```bash
npm i
npm run dev                                              # Remotion Studio
npx remotion still Reel-256-assen out/test.png --frame=60 --scale=0.6
npm run render:raw-strings                               # of render:reel-256, render:reel-mars, render:reel-seeds
```

## Opbouw

- `src/stijl/`: gedeeld door alle clips. Kleuren uit `_brand.yml` en de console uit `custom.scss`,
  de fonts (Caveat, JetBrains Mono, Inter), timing, rough.js-vormen, code op een raster, het
  consolepaneel en de onderschriften.
- `src/clips/<hoofdstuk>-<onderwerp>/`: één map per clip, één bestand per scène. De duur van een
  scène staat bovenaan dat bestand, de volgorde en de overgangen in het hoofdbestand van de clip.
- `src/reels/<hoofdstuk>-<onderwerp>/`: staande Instagram-reels (1080x1920). Alles hangt aan één
  `tijdlijn.ts`, zodat een beeld zoals de trein over de scènes heen kan doorlopen. Bovenaan ±250 px en
  onderaan ±420 px blijven leeg voor de knoppen en het bijschrift van Instagram.
- `public/`: beelden uit het boek die in een clip of reel terugkomen, zoals het vertellermannetje.

## Afspraken

- De inhoud komt uit het boek. Niets verzinnen, zelfde regel als voor de figuren.
- Elke rough.js-vorm krijgt een vaste `seed`. Zonder seed krabbelt hij elk frame opnieuw en trilt het beeld.
- Animeren enkel via `useCurrentFrame()` en `interpolate()`. CSS-animaties renderen niet.
- Code staat op een raster: JetBrains Mono is 0,6 em breed, dus `kolomX()` en `rijY()` geven exact
  de plaats van een teken. Markeringen en pijlen mikken daarop.
- Stem, ondertitels en bijschrift worden per filmpje gevraagd. Zonder stem staat de uitleg in de
  onderschriften en ballonnen.
