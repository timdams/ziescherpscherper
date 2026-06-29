# Een afbeelding aanpassen en renderen

Korte handleiding om zelf snel een hand-drawn afbeelding bij te sturen en opnieuw naar PNG te renderen. Achtergrond en stijlafspraken staan in [CLAUDE.md](CLAUDE.md) onder "Afbeeldingen moderniseren".

## Waar staat wat?

Elke afbeelding heeft een `imagegen/`-map naast het origineel, bv. [content/assets/0_intro/imagegen/](content/assets/0_intro/imagegen/). Daarin:

- `<naam>.js` - het generatorscript (dit pas je aan).
- `excal.js` - de gedeelde teken-helpers (rechthoeken, pijlen, tekst, ...). Niet wijzigen zonder reden.
- `caveat-700.ttf` / `caveat-400.ttf` - het handgeschreven font, nodig om naar PNG te renderen.

Het script schrijft twee bestanden weg via `c.save(...)`:

- de **SVG** in de `imagegen/`-map zelf;
- de **PNG** een map hoger (naast het origineel), met een suffix achter de naam.

## Eenmalige setup (al gebeurd op deze pc)

De render-tools (`roughjs`, `jsdom`, `@fontsource/caveat`, `@resvg/resvg-js`) staan **niet** in de repo. Ze zijn eenmaal geinstalleerd in een map buiten het project, zodat `git status` proper blijft:

```powershell
mkdir "$env:USERPROFILE\.imagegen-deps"
cd "$env:USERPROFILE\.imagegen-deps"
npm init -y
npm install roughjs jsdom @fontsource/caveat @resvg/resvg-js
```

Moet je dit ooit op een nieuwe pc opnieuw doen: bovenstaande blok volstaat.

## Een afbeelding renderen

Je wijst Node naar die deps-map via `NODE_PATH` en draait het script. In **PowerShell**:

```powershell
$env:NODE_PATH = "$env:USERPROFILE\.imagegen-deps\node_modules"
node content\assets\0_intro\imagegen\compileAlternatief.js
```

De PNG ([content/assets/0_intro/compileAlternatief.png](content/assets/0_intro/compileAlternatief.png)) en de SVG worden overschreven. Open de PNG om het resultaat te bekijken.

### Tip: NODE_PATH een keer permanent zetten

Wil je niet elke keer die eerste regel typen, zet `NODE_PATH` dan eenmalig vast. Daarna volstaat `node <script>.js` in elke nieuwe terminal:

```powershell
setx NODE_PATH "$env:USERPROFILE\.imagegen-deps\node_modules"
```

(Sluit en heropen je terminal nadat je `setx` hebt gedraaid.)

## Een afbeelding aanpassen

1. Open het `<naam>.js`-script in de juiste `imagegen/`-map.
2. Pas aan wat je wil: teksten, kleuren, coordinaten. Het canvas start linksboven op `(0, 0)`; **x** loopt naar rechts, **y** naar beneden. De canvasgrootte staat bovenaan: `createCanvas(breedte, hoogte)`.
3. Render opnieuw (zie hierboven) en bekijk de PNG. Herhaal tot het goed zit.

De bouwstenen komen uit `excal.js`, bijvoorbeeld:

- `c.txt(x, y, tekst, grootte, kleur, gewicht, uitlijning)` - tekst plaatsen.
- `c.rect(x, y, w, h, opties)` - rechthoek.
- `c.arrow(x1, y1, x2, y2, opties)` - rechte pijl.
- `c.carrow(x1, y1, cx, cy, x2, y2, opties)` - gebogen pijl (`cx, cy` is het buigpunt).
- `c.circle`, `c.line`, `c.cell`, `c.box3d`, `c.bubble` - zie [excal.js](content/assets/0_intro/imagegen/excal.js) voor de volledige lijst en de standaardkleuren (`C.RED`, `C.GRAY`, ...).

## Output-naam bepalen

Onderaan elk script staat:

```js
c.save(__dirname, '<naam>', '<suffix>');
```

- De **SVG** wordt `imagegen/<naam>.svg`.
- De **PNG** wordt `<naam><suffix>.png` een map hoger.

Voor een 1-op-1 vernieuwing van een bestaande afbeelding gebruik je suffix `'NEW'` (bv. `introNEW.png`) zodat het origineel blijft staan. Voor een vrije variant zit `Alternatief` al in de naam en geef je vaak `''` mee, zodat je gewoon diezelfde `...Alternatief.png` overschrijft.
