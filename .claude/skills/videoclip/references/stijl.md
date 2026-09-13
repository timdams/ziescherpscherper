# src/stijl: wat er al is

Alle paden relatief aan `_kennisclips/src/`. Coördinaten zijn absolute pixels op het canvas
(1920x1080 of 1080x1920), tenzij anders vermeld.

## kleuren.ts

`C.RED`, `C.RED_DARK`, `C.RED_LIGHT`, `C.GRAY`, `C.OFFWHITE`, `C.WHITE` uit `_brand.yml`.
`C.BOX_TOP` en `C.BOX_SIDE` voor de vlakken van een 3D-doos (uit `excal.js`).
`C.CONSOLE_BG`, `C.CONSOLE_BALK`, `C.CONSOLE_RAND`, `C.CONSOLE_LABEL`, `C.CONSOLE_TEKST` uit de
`.console`-blokken van `custom.scss`. Geen losse hex-waarden in een filmpje.

## fonts.ts

- `HAND`: Caveat 400/700.
- `MONO`: JetBrains Mono 400/500/700.
- `SANS`: Inter 700, voor het consolelabel.
- `MONO_BREEDTE = 0.6`: elk teken van JetBrains Mono is 0,6 em breed.
- `handBreedte(tekst, grootte)`: geschatte breedte van een tekst in Caveat, aan de ruime kant. Voor een
  onderlijn onder een titel of een lettergrootte die in de breedte moet passen.

## anim.ts

| Naam | Wat |
|---|---|
| `IN`, `BEWEEG`, `POP`, `WEG` | easings: binnenkomen, verplaatsen, klein overschot, weggaan |
| `voortgang(f, start, duur, easing = IN)` | 0 tot 1 tussen `start` en `start + duur`, geklemd |
| `venster(f, van, tot, fade = 12)` | 1 tussen `van` en `tot`, met een fade aan beide kanten |
| `getypt(tekst, f, start, framesPerTeken = 2)` | typemachine via slicing |
| `herschrijf(f, start, basis, weg, erbij, framesPerTeken = 3)` | eerst `weg` tekens wissen, dan `erbij` typen (`@"` wordt `"""`) |
| `bezig(f, start, eind)` | handig voor de cursor tijdens het typen |
| `opBaan(f, punten)` | plaats en schaal op een baan van `Sleutel`s (`{ f, x, y, s? }`), met `BEWEEG` tussen elk paar; de frames moeten strikt stijgen |

## ruw.tsx

Vormfuncties geven een `Vorm` terug (`{ drawables, vak }`). Maak ze **op moduleniveau** met een
eigen `seed`, niet in de render.

| Functie | |
|---|---|
| `rechthoek(x, y, w, h, o)` | |
| `lijn(x1, y1, x2, y2, o)` | |
| `pijl(x1, y1, x2, y2, o, kop = 18)` | kop op het eindpunt |
| `cirkel(cx, cy, diameter, o)`, `ellips(cx, cy, w, h, o)` | |
| `veelhoek(punten, o)` | `[[x, y], ...]` |
| `pad(d, vak, o)` | een SVG-pad; het omhullende vak geef je zelf mee |
| `samen(...vormen)` | één vorm uit meerdere, samen onthullen of verplaatsen |
| `doos3d(x, y, w, h, { seed, diepte = 36, zij })` | doos zoals in de figuren: lichtroze voorvlak met rode rand, bovenvlak en zijvlak (`zij: "links"` voor een stapel) |

`o` zijn rough.js-opties. Standaard: grijze lijn 2,2 px, roughness 1.5, bowing 1, seed 7. Veel gebruikt:
`{ fill: C.WHITE, fillStyle: "solid" }` voor een vlak, `{ fill: C.RED_LIGHT, fillStyle: "hachure",
hachureGap: 9, fillWeight: 2, stroke: C.RED }` voor een accent, `{ stroke: "none" }` voor een
markeerstift.

`<Ruw vorm toon richting streep opacity schaal />` tekent de vorm.

- `toon` (0 tot 1) onthult de vorm via een clip, in `richting` `vanLinks`, `vanRechts`, `vanOnder` of
  `vanBoven`. Zo tekent een lijn of pijl zichzelf.
- `streep` is een `strokeDasharray` (`"12 12"` voor een stippellijn).
- `schaal` schaalt rond het midden van de vorm.

## op.tsx

`<Op x y hoek schaal opacity>`: zet inhoud met lokale coördinaten rond (0, 0) op een plek, eventueel
gedraaid of geschaald. Voor een maanlander, een wiel, een brokstuk, een vinkje.

## code.tsx

- `Raster = { x, y, grootte, hoogte }`: linkerbovenhoek van rij 0, kolom 0, lettergrootte en rijhoogte.
- `tekenBreedte(r)`, `kolomX(r, kolom)`, `rijY(r, rij)`: de exacte plaats van een teken. Markeringen,
  knip-lijnen en pijlen mikken hierop.
- `Regel = { tekst, rij, dx?, dy?, opacity?, cursor?, kleur? }`.
- `<Regels raster regels kleur gewicht keywords />`. Met `keywords` worden `string`, `byte`, `double`,
  `long`, `int`, `while` en `for` vet; een nieuw keyword voeg je toe aan `KEYWORDS`. Regels die met `//` beginnen blijven
  onaangeroerd. De key is de index in de lijst, dus twee regels op dezelfde rij (een die verdwijnt, een
  die binnenschuift) mag.

## panelen.tsx

`<ConsolePaneel vak label="Console" />`: het zwarte venster uit het boek. `CONSOLE_BALK = 60` is de
hoogte van het labelbalkje; de uitvoer begin je daaronder.

## tekst.tsx

- `<Opmaak tekst grootte nadruk />`: `` `code` `` in mono op lichtroze, `*nadruk*` in de nadrukkleur.
- `<Onderschrift regels van tot midden = 972 grootte = 60 kleur = C.RED_DARK />`: het onderschrift van
  een kennisclip, gecentreerd rond `midden`, met fade.
- `<Noot tekst x y opacity grootte = 50 />`: een handgeschreven woordje naast een pijl.
- `label(x, top, grootte = 42, kleur, links = false)`: stijl voor een handgeschreven label, gecentreerd
  rond `x` of links uitgelijnd vanaf `x`. Gebruik: `<div style={label(890, 574, 44)}>Queue</div>`.

## kaartje.tsx

`<Kaartje tekst x y w h seed grootte accent schaal opacity />`: een ruw wit kaartje met handgeschreven
tekst, gecentreerd op (x, y). `accent` (0 tot 1) maakt het lichtroze met een rode rand, voor het
element dat eruit gaat of oplicht.

## weegschaal.tsx

- `<Weegschaal x y hoek seed breedte = 680>`: een driehoekige voet met een kantelende plank, draaipunt op
  (x, y). `hoek` in radialen, negatief laat links zakken. De kinderen staan in het assenstelsel van de plank
  ((0, 0) is het draaipunt, de plank ligt tussen y -14 en 0), dus blokken kantelen vanzelf mee. Gebruikt
  `seed` tot en met `seed + 2`.
- `opPlank(x, y, hoek, lx)`: waar een punt van de plank na het kantelen staat, voor labels die niet mee
  mogen draaien.

## werkblad.tsx (liggend)

- `type Indeling = { codeVak, consoleVak, code, uit }`.
- `NAAST_ELKAAR`: code links, console rechts, onderaan het onderschrift (`h03-raw-strings`).
- `BOVEN`: code en console bovenaan, eronder plaats voor een tekening (`h12-queue-stack`).
- `<Werkblad indeling code uitvoer onderCode bovenCode bovenUitvoer uitvoerOpacity binnen consoleLabel />`.
  `onderCode` ligt onder de codetekst (markeerstift), `bovenCode` en `bovenUitvoer` erboven.
  `binnen` (0 tot 1) laat het werkblad binnenschuiven.

## titelkaart.tsx (liggend)

- `<TitelKaart onderwerp feit seed />`: het onderwerp in Caveat 170 px met een rode onderlijn, eronder
  één feit.
- `<AfsluitKaart tekst seed />`: één regel met een rode onderlijn, bv. "Zie Scherp Scherper, hoofdstuk 12".

## verteller.tsx

`<Verteller x y hoogte opacity />`: `public/verteller.png`, zonder vervaging vergroot.

## reel.tsx (staand)

- `REEL_VERTELLER`, `REEL_BALLON`: vaste plaats van de verteller en zijn ballon.
- `type ReelTekst = { van, tot, regels }`.
- `<VertellerBallon teksten van tot />`: verteller met ballon; de regels van een tekst komen kort na
  elkaar binnen en de verteller wiebelt een beetje.
- `<Haak boven groot onder tot top seed ovaalBreedte = 640 ovaalHoogte = 350 onderAfstand = 375 />`:
  het eerste beeld. Drie cijfers van 340 px passen in 640x350; een breder getal ("125", "4 KB") vraagt
  720 tot 760 breed, 380 hoog en `onderAfstand` 400.
- `<EindKaart start hoofdstuk bron />`: verteller, "Zie Scherp Scherper", hoofdstuk, ziescherp.be en
  de bron in klein (`bron={[]}` als er geen is).

## Nog in een filmpjesmap (verhuizen zodra je ze een tweede keer nodig hebt)

| Waar | Wat |
|---|---|
| `clips/h03-raw-strings/vormen.ts` | `markeer` (markeerstift achter tekens), `knip` (verticale knip-lijn), gearceerde stroken over code of uitvoer |
| `clips/h12-queue-stack/hulp.tsx` | `KaartOpBaan`: een kaartje dat verschijnt, een baan volgt, oplicht en verdwijnt |
| `reels/h04-minecraft-seeds/hulp.tsx` | `cijfer` en `handOp` (gecentreerde tekststijlen) |
| `reels/h04-minecraft-seeds/random.ts` | `System.Random` met seed in TypeScript, dezelfde getallen als .NET |
| `reels/h04-minecraft-seeds/Tegels.tsx` | een wereld uit getekende tegels |
| `reels/h02-256-assen/tijdlijn.ts` | beweging over afstand, en een teller die uit de positie volgt |
| `reels/h04-mars-climate-orbiter/Computers.tsx` | twee getekende monitors |
| `reels/h02-apollo/Maan.tsx` | de maan en een maanlander |
| `reels/h02-apollo/Toestellen.tsx` | sensor in een plantenpot, bankkaart, deurbel, Apollo-computer, laptop |
| `reels/h02-apollo/Weefsel.tsx` | ringetjes met een draad erdoor (1) of eromheen (0) |
| `reels/h06-roostertool/Klok.tsx` | een klok met draaiende wijzers die van groot naar een hoek schuift |
| `reels/h06-roostertool/Computer.tsx` | een scherm met een lessenrooster, een geheugenbalk die volloopt, een tijdlijn op schaal |
| `reels/h06-roostertool/Lus.tsx` | een draaiende lus-pijl en een stopbord |
| `reels/h06-roostertool/CSharp.tsx` | een console die volloopt en meeschuift (de laatste tien regels) |
| `reels/h04-dobbelsteen/onderdelen.tsx` | `Dobbelsteen` (elke waarde van 1 tot 6, in lokale coördinaten) en `Machine` (een generator met trechter en "new Random()") |
| `reels/h04-dobbelsteen/Tikjes.tsx` | een klokvak dat meetelt met een wijzer die over een getallenas loopt, en een rode haak boven één tikje |
| `reels/h04-dobbelsteen/CSharp.tsx` | code die herschikt wordt (een regel verhuist boven de lus) en twee consoles naast elkaar die opnieuw draaien |
| `reels/h03-dwarf-fortress/fort.tsx` | `FortRaster`: een rooster van tekens met elk teken in een eigen vakje (blijft kloppen met tekens uit een ander lettertype), in drie thema's (spel, code, console), met water dat breedte-eerst door de gangen stroomt |
| `reels/h03-dwarf-fortress/Wereld.tsx` | een venster dat over sleutelpunten verhuist, en `schuin(plat)`: een vlak als vloer in doorsnede (`scaleY` plus `skewX`) dat openklapt naar recht van voren |
| `reels/h03-dwarf-fortress/Jaren.tsx` | een tijdas met jaartallen, kaartjes boven een jaar en een rode lijn die de tussenliggende jaren overtrekt |
| `reels/h07-log4shell/onderdelen.tsx` | `Server`: een serverkast met schuiven, een schermpje met logregels (groen, of rood als ze gehackt is) en een alarmlamp; `knipper(f)` voor een knipperende waarde zonder toeval |
| `reels/h07-log4shell/Lek.tsx` | een loep die een detail van een tekening vergroot, met een barst erin |
| `reels/h07-log4shell/Logbericht.tsx` | een blad met regels waar een kaartje in schuift, en een rode stempel die over het gedimde beeld valt |
| `reels/h07-log4shell/Wereldwijd.tsx` | een wereldbol met knipperende alarmen, een maansikkel (`pad`) en een doorgestreept zzz |
| `reels/h07-log4shell/CSharp.tsx` | een IntelliSense-lijst met icoontjes (kubus, Engelse sleutel, bliksem) en een markering die met de pijltjes naar beneden loopt; de leden haal je echt op met reflection in `dotnet fsi` |
