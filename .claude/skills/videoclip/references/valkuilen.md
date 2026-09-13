# Valkuilen

Elk probleem hieronder is echt voorgekomen bij een van de kennisclips of reels. Geen enkel ervan gaf
een foutmelding: ze vielen pas op bij het bekijken van een still.

## Tekenen

| Wat je zag | Oorzaak | Oplossing |
|---|---|---|
| Alle vormen trillen bij het afspelen | rough.js krabbelt zonder vaste seed elk frame opnieuw | elke vorm een eigen `seed`, vormen op moduleniveau aanmaken |
| Een lijn loopt zichtbaar door een gearceerde loc | `hachure` is doorzichtig tussen de streepjes | eerst dezelfde vorm wit en `solid` zonder rand eronder (`LOC` in `h02-256-assen/Spoorscene.tsx`) |
| Boven de gearceerde maan steekt een witte rand uit | de witte ondergrond had een andere seed, dus een andere krabbel dan de arcering | ondergrond en arcering dezelfde seed geven |
| De maanlander zweeft boven de maan in plaats van te landen | de voetjes stonden op de wiskundige rand van de ellips, en de getekende rand ligt daar lager | het voorwerp een paar pixels in de vorm laten zakken, en nakijken op een uitsnede op ware grootte (schaal 0.5 verbergt zo'n kier) |
| De knip-lijn raakt de tekens | de ruwe uitwijking van rough.js | de lijn 8 px voor de kolom zetten |
| Een onderlijn raakt de voet van een backslash | lijn op de basislijn | onder het teken: `rijY + 55` bij een rijhoogte van 56 |
| De ovaal raakt het grote getal | te krap berekend | 640x350 voor drie smalle cijfers, 720 tot 760 breed voor "125" of "4 KB"; altijd op een still nakijken |
| Een sonde van 50 px is op een gsm een stipje | op het scherm van de pc lijkt het groot genoeg | minstens 150 px breed; ook de explosie groter (200 px) en trager (70 frames) |
| `=` tussen twee rijen oogt piepklein | leestekens in Caveat zijn kleiner dan letters | leestekens een maat groter zetten (72 px) |
| Twee pijlen lopen dwars door de getallen van een as die later verschijnt | de pijlen van de vorige fase bleven staan | wat een nieuwe tekening in de weg staat, faadt weg vóór die tekening binnenkomt |

## Tekst

| Wat je zag | Oorzaak | Oplossing |
|---|---|---|
| `"""` in een onderschrift wordt een rij schuine streepjes | Caveat tekent aanhalingstekens schuin | code tussen backticks: `Opmaak` zet ze in mono |
| Het etiket "pound-force seconden" viel weg terwijl de ballon er nog over sprak | de animatie liep voor op de tekst | wat de ballon noemt, blijft in beeld tot de ballon wisselt |
| Het laatste onderschrift van een scène verdwijnt voor de overgang | `tot` gelijk aan de scèneduur, en de fade begint vroeger | `tot={S_DUUR + 20}` voor het laatste onderschrift |
| Tekst valt onder de naam of de knoppen van Instagram | buiten de veilige zone | bovenaan 250 px en onderaan 420 px vrij laten |
| "Dequeue() Stack" las als één label | het label "Stack" stond los tussen twee tekeningen | een label vlak onder of boven zijn eigen tekening zetten |
| Een label raakt bijna de tekening eronder of een streepje op de as | net te weinig marge berekend | minstens 15 px tussen de onderkant van het label en de tekening |
| `☺` (of een ander symbool) is piepklein of duwt de rest van de regel opzij | JetBrains Mono (subset latin) kent het teken niet, de browser neemt een ander lettertype | elk teken in een eigen vakje zetten (`FortRaster` in `h03-dwarf-fortress/fort.tsx`) en zo'n teken 1,3 keer groter |
| Code op 28 px om een lange regel te laten passen | het paneel was te smal | het paneel breder maken (40 tot 1040) in plaats van onder 30 px te gaan |

## Timing

| Wat je zag | Oorzaak | Oplossing |
|---|---|---|
| De trein schokt | interpoleren over het aantal assen in plaats van over de afstand | de afstand interpoleren, al de rest daaruit afleiden |
| De teller loopt uit de pas met de trein | twee aparte timers | één positie per frame (`voorkantX(f)`), de teller telt wat die positie gepasseerd is |
| Wielen glijden in plaats van te rollen | een vaste draaisnelheid | hoek = afgelegde weg gedeeld door de straal |
| 256 assen tellen duurt veel te lang | echte snelheid | vooruitspoelen met een getekend ⏩-teken, pauzeren met ⏸ terwijl de ballon uitlegt |
| De haak is op frame 0 leeg | de tekst faadt in | tekst staat er vanaf frame 0, enkel de ovaal of versiering animeert |
| Een reel van 63 s | te veel ballonnen | `FASE.eind` hoogstens 1800 (60 s); een story knipt anders |

## Code en project

| Wat je zag | Oorzaak | Oplossing |
|---|---|---|
| TypeScript-fout op `.includes()` | `tsconfig` kent enkel `es2015` | `indexOf(...) >= 0` |
| `interpolate` geeft een fout over het invoerbereik | twee sleutelpunten op hetzelfde frame | de frames van een baan strikt laten stijgen |
| Elke render ziet er anders uit | `Math.random()` | vaste data, `random(seed)` uit remotion, of een eigen generator met seed |
| Een beweging rendert niet in de mp4 | CSS-animatie of -transition | enkel `useCurrentFrame()` en `interpolate()` |
| Getallen op het scherm klopten niet met C# | zelf bedacht | de code eerst in .NET draaien (`dotnet fsi`) |
| De haak stond boven het tikje 42-43, de klok en de seeds zeiden 41 | de waarde apart ingetikt, los van de tekening | een getal dat bij een plek op een as hoort, uit die plek afleiden, of beide op de still naast elkaar nakijken |
| Na de verbetering stond de oude uitvoer nog in de console | enkel de code aangepast | verandert de code, dan verdwijnt de oude uitvoer; toon de echte uitvoer van de nieuwe code (voor oude runtimes: `csc.exe` uit `C:\Windows\Microsoft.NET\Framework64\v4.0.30319`, C# 5) |
| Een verhuizende coderegel schuift schuin door een andere regel | een diagonale beweging over rijen die zelf ook schuiven | in stappen: de regel faadt weg, de rest schuift, de regel faadt in op zijn nieuwe plek |
| Het blanco sjabloon van `create-video` bracht Tailwind mee | standaard in het sjabloon | al verwijderd in `_kennisclips`; niet opnieuw toevoegen |
| Stills renderen duurt lang | elke still start een bundel | een reeks in één PowerShell-lus; het volledige filmpje op de achtergrond |
| `Start-Process dotnet ... -Wait -RedirectStandardOutput` blijft hangen | `-Wait` wacht ook op de build-servers die dotnet laat openstaan | `dotnet run bestand.cs` rechtstreeks draaien en de uitvoer in een variabele vangen |
| Nagaan wat een console met code page 850 toont, lukt niet | `chcp 850` in de PowerShell-tool verandert niets: de console blijft op 65001 | zo'n uitvoer niet tonen als je ze niet echt gezien hebt; kies een scène die zonder die bewering werkt |
