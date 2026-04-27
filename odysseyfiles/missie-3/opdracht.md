# Opdracht

<!-- TODO: briefingslide afbeelding toevoegen -->

::: {.callout-important}
## Leerdoelen
Na deze missie kan je:

- Compositie toepassen: objecten die andere objecten bevatten
- Het verschil tussen compositie en overerving uitleggen
- Overerving en compositie combineren in één ontwerp
- Werken met lijsten van objecten als properties van een klasse
:::

> *"De modules zijn klaar. Nu moeten we ze samenvoegen tot functionerende ruimtestations — zelfvoorzienende bases diep in de ruimte. Een basisstation biedt het minimum om te overleven. Een hoofdstation kan groeien tot een echt ruimtefort."*

---

## Stap 1 — De Station klasse

Maak 2 klassen: `Station` en `Hoofdstation`.

<!-- TODO: compositiediagram toevoegen -->

Een `Station` bevat via **compositie**:

* **1 MedBay**, **1 Reactor** en **1 of meerdere kwartieren** (als lijst).
* Bij aanmaak start een station met **3 kwartieren**, een werkende reactor en een MedBay. Alle modules komen op een **willekeurige** positie.

Voeg toe:

* Een **virtuele** methode `BouwKwartier`: voegt een nieuw kwartier toe aan het station. Het kwartier komt op een willekeurige locatie, maar **nooit** op een plek waar al een module staat.
* Een **virtuele** methode `ToonStation`: toont alle modules op het scherm via `PrintModule`.

::: {.callout-tip collapse="true"}
## Checkpoint
```csharp
Station s = new Station();
s.ToonStation();  // 3x 'k', 1x 'r' en 1x 'M' op willekeurige posities
s.BouwKwartier();
s.ToonStation();  // Nu 4x 'k', 1x 'r' en 1x 'M'
```
:::

::: {.callout-warning collapse="true"}
## Hint — Collision check
Om te controleren of een locatie al bezet is, loop je door al je modules en vergelijk je hun X- en Y-coordinaten met de gewenste locatie. Pas als geen enkele module op die plek staat, is de locatie vrij.
:::

---

## Stap 2 — De Hoofdstation klasse

`Hoofdstation` erft over van `Station` en heeft extra modules:

* Een **FusieReactor**
* Een **extra MedBay**
* **1 of 2 woonblokken** (als lijst)

Bij aanmaak heeft een `Hoofdstation` enkel de modules die een gewoon `Station` ook heeft (de extra modules komen er later bij).

### Override BouwKwartier

Het hoofdstation voegt nog steeds een kwartier toe, maar: iedere keer als het station **3 kwartieren** bereikt, worden deze **verwijderd** en komt er een **woonblok** in de plaats (op een locatie naar keuze).

### Override ToonStation

Toont alles wat de base-versie toont, plus de extra modules van het hoofdstation (woonblokken, extra MedBay, FusieReactor).

::: {.callout-tip collapse="true"}
## Checkpoint
```csharp
Hoofdstation hs = new Hoofdstation();
// Start met 3 kwartieren (van Station-constructor)
hs.BouwKwartier();  // 4 kwartieren
hs.BouwKwartier();  // 5 kwartieren
hs.BouwKwartier();  // 6 kwartieren → worden kwartieren vervangen door woonblokken?
hs.ToonStation();
```
:::

::: {.callout-warning collapse="true"}
## Hint — Kwartieren vervangen door woonblok
Je kan `Count` op je kwartierenlijst controleren. Als het deelbaar is door 3, verwijder je de kwartieren en voeg je een woonblok toe. Kijk naar methodes als `Clear()` of `RemoveRange()` op je lijst.
:::

---

## Stap 3 — De applicatie

Maak een programma met:

* 2 `Station`-objecten en 2 `Hoofdstation`-objecten.
* Een menu waarin de gebruiker kiest van welk station de `BouwKwartier`-methode moet aangeroepen worden.
* Na elke keuze wordt het gekozen station getoond via `ToonStation`.
* Het menu blijft eindeloos herhalen.

::: {.callout-tip collapse="true"}
## Checkpoint
```
=== PROJECT ODYSSEY - STATION CONTROL ===
1. Station Alpha
2. Station Bravo
3. Hoofdstation Charlie
4. Hoofdstation Delta
Keuze: 3
Kwartier gebouwd in Hoofdstation Charlie!
[station verschijnt op scherm]
```
:::

---

## Stap 4 — Dictionary

Vervang je hardcoded objecten door een `Dictionary<string, Station>`. De `string` is de naam van het station (bv. "Artemis").

Merk op dat zowel `Station`- als `Hoofdstation`-objecten in deze dictionary passen — een `Hoofdstation` *is* immers ook een `Station`.

Breid je menu uit zodat de gebruiker kan:

1. Een **nieuw** station of hoofdstation aanmaken en een naam geven. Zo wordt het in de dictionary bewaard.
2. Via de **naam** van het station kiezen welk station `BouwKwartier` uitvoert.

::: {.callout-tip collapse="true"}
## Checkpoint
```
=== PROJECT ODYSSEY - STATION CONTROL ===
1. Nieuw station aanmaken
2. Bouw kwartier
3. Toon station
Keuze: 1
Type (1=Station, 2=Hoofdstation): 2
Naam: Artemis
Hoofdstation 'Artemis' aangemaakt!

Keuze: 2
Welk station? Artemis
Kwartier gebouwd in Artemis!
```
:::

---

## Debriefing

::: {.callout-note}
## Reflectie
1. Het `Station` *bevat* modules (compositie) en `Hoofdstation` *is een* `Station` (overerving). Waarom is het nuttig om beide principes te combineren?
2. Waarom kan een `Dictionary<string, Station>` ook `Hoofdstation`-objecten bevatten?
3. Wat is het verschil tussen `BouwKwartier` overriden in `Hoofdstation` versus gewoon een nieuwe methode `BouwKwartierHoofd` toevoegen?
:::

> *"De stations draaien. Maar er komen steeds meer bemanningsleden bij. Onze stations moeten uitbreiden — en niet elk station groeit op dezelfde manier. We hebben een systeem nodig dat slim genoeg is om het verschil te zien."*
