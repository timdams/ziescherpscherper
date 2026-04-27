# Opdracht

<!-- TODO: briefingslide afbeelding toevoegen -->

::: {.callout-important}
## Leerdoelen
Na deze missie kan je:

- Het `is` keyword gebruiken om het runtime-type van een object te controleren
- Het `as` keyword gebruiken voor veilige typecasting
- Controleren of een cast `null` opleverde
- Polymorfisme in de praktijk toepassen: een methode die zich aanpast aan het type
:::

> *"Tijd om de stations te laten groeien. Maar opgelet: een basisstation en een hoofdstation hebben andere mogelijkheden. Je groei-methode moet slim genoeg zijn om het verschil te herkennen."*

Deze missie bouwt verder op je applicatie uit missie 3.

---

## Opgelet

Zorg ervoor dat minstens volgende zaken in je code voorkomen:

* Het **`is`** keyword — om te controleren of een object van een bepaald type is
* Het **`as`** keyword — om een object veilig te casten naar een ander type
* Een controle of een object **`null`** is

---

## Stap 1 — GroeiStation

Voeg een methode `GroeiStation` toe aan je **hoofdprogramma**. Deze methode:

1. Aanvaardt een **referentie** naar een object van het type `Station`.
2. Roept eerst `ToonStation` aan zodat de gebruiker het station **voor** de groei ziet.
3. Controleert of het object een `Station` of een `Hoofdstation` is:
   * **Station**: voegt **1** willekeurige module toe (kies random uit de types die een Station mag bevatten).
   * **Hoofdstation**: voegt **2** willekeurige modules toe (kies random uit alle types die een Hoofdstation mag bevatten).
4. Respecteert de compositiebeperkingen uit missie 3: een `Station` kan bijvoorbeeld geen `FusieReactor` hebben.
5. Roept `ToonStation` opnieuw aan zodat de gebruiker het resultaat **na** de groei ziet.
6. Toont in een zinnetje wat er werd toegevoegd door de `PrintModule` van de nieuwe module aan te roepen.

::: {.callout-tip collapse="true"}
## Checkpoint
```
Station 'Voyager' voor groei:
k k
r  M  k

Groei... (Station → 1 module)
Nieuwe module: Kwartier op (5, 3)

Station 'Voyager' na groei:
k k
r  M  k
     k
```
:::

::: {.callout-warning collapse="true"}
## Hint — is en as
```csharp
if (station is Hoofdstation)
{
    Hoofdstation hs = station as Hoofdstation;
    // voeg 2 modules toe...
}
else
{
    // gewoon Station → 1 module
}
```
Controleer altijd **eerst** op `Hoofdstation`, want een `Hoofdstation` is ook een `Station`. Als je eerst op `Station` controleert, zal een `Hoofdstation` daar ook in terechtkomen.
:::

::: {.callout-warning collapse="true"}
## Hint — Null check na as
Het `as` keyword geeft `null` terug als de cast niet lukt:
```csharp
Hoofdstation hs = station as Hoofdstation;
if (hs != null)
{
    // veilig om hs te gebruiken
}
```
:::

---

## Stap 2 — Menu uitbreiden

Voeg een optie "GroeiStation" toe aan je hoofdmenu. De gebruiker kan:

1. Opgeven welk station (via naam in de dictionary) moet groeien.
2. Het gekozen station wordt doorgegeven aan `GroeiStation`.

::: {.callout-tip collapse="true"}
## Checkpoint
```
=== PROJECT ODYSSEY - STATION CONTROL ===
1. Nieuw station aanmaken
2. Bouw kwartier
3. Toon station
4. Groei station
Keuze: 4
Welk station? Artemis
[station wordt getoond, groeit, en wordt opnieuw getoond]
```
:::

---

## Debriefing

::: {.callout-note}
## Reflectie
1. Waarom moet je eerst op `Hoofdstation` controleren en pas daarna op `Station`?
2. Wat is het verschil tussen `as` (met null-check) en een directe cast `(Hoofdstation)station`? Wanneer crasht de ene wel en de andere niet?
3. Je `GroeiStation`-methode accepteert een `Station` maar werkt ook met `Hoofdstation`. Hoe noem je dit principe in OOP?
:::

> *"De stations groeien. De bemanning stabiliseert. Maar dan komt er een bericht binnen van een verkenningsteam: diep in het artefact hebben ze een versleutelde datakern gevonden. Onze wetenschappers denken dat het de oorsprong van het signaal bevat — misschien zelfs coordinaten naar meer artefacten. Als we die kern kunnen kraken, verandert alles."*
