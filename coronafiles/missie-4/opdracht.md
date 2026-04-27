# Opdracht

![](../assets/briefingslide%20(5).jpg)

::: {.callout-important}
## Leerdoelen
Na deze missie kan je:

- Het `is` keyword gebruiken om het runtime-type van een object te controleren
- Het `as` keyword gebruiken voor veilige typecasting
- Controleren of een cast `null` opleverde
- Polymorfisme in de praktijk toepassen: een methode die zich aanpast aan het type
:::

> *"Tijd om de enclaves te laten groeien. Maar opgelet: een gewone enclave en een stadsenclave hebben andere mogelijkheden. Je groei-methode moet slim genoeg zijn om het verschil te herkennen."*

Deze missie bouwt verder op je applicatie uit missie 3.

---

## Opgelet

Zorg ervoor dat minstens volgende zaken in je code voorkomen:

* Het **`is`** keyword — om te controleren of een object van een bepaald type is
* Het **`as`** keyword — om een object veilig te casten naar een ander type
* Een controle of een object **`null`** is

---

## Stap 1 — GroeiEnclave

Voeg een methode `GroeiEnclave` toe aan je **hoofdprogramma**. Deze methode:

1. Aanvaardt een **referentie** naar een object van het type `Enclave`.
2. Roept eerst `ToonEnclave` aan zodat de gebruiker de enclave **voor** de groei ziet.
3. Controleert of het object een `Enclave` of een `StadsEnclave` is:
   * **Enclave**: voegt **1** willekeurig gebouw toe (kies random uit de types die een Enclave mag bevatten).
   * **StadsEnclave**: voegt **2** willekeurige gebouwen toe (kies random uit alle types die een StadsEnclave mag bevatten).
4. Respecteert de compositiebeperkingen uit missie 3: een `Enclave` kan bijvoorbeeld geen `WaterkrachtCentrale` hebben.
5. Roept `ToonEnclave` opnieuw aan zodat de gebruiker het resultaat **na** de groei ziet.
6. Toont in een zinnetje wat er werd toegevoegd door de `PrintGebouw` van het nieuwe gebouw aan te roepen.

::: {.callout-tip collapse="true"}
## Checkpoint
```
Enclave 'Brugge' voor groei:
w w
g  H  w

Groei... (Enclave → 1 gebouw)
Nieuw gebouw: Woonst op (5, 3)

Enclave 'Brugge' na groei:
w w
g  H  w
     w
```
:::

::: {.callout-warning collapse="true"}
## Hint — is en as
```csharp
if (enclave is StadsEnclave)
{
    StadsEnclave se = enclave as StadsEnclave;
    // voeg 2 gebouwen toe...
}
else
{
    // gewone Enclave → 1 gebouw
}
```
Controleer altijd **eerst** op `StadsEnclave`, want een `StadsEnclave` is ook een `Enclave`. Als je eerst op `Enclave` controleert, zal een `StadsEnclave` daar ook in terechtkomen.
:::

::: {.callout-warning collapse="true"}
## Hint — Null check na as
Het `as` keyword geeft `null` terug als de cast niet lukt:
```csharp
StadsEnclave se = enclave as StadsEnclave;
if (se != null)
{
    // veilig om se te gebruiken
}
```
:::

---

## Stap 2 — Menu uitbreiden

Voeg een optie "GroeiEnclave" toe aan je hoofdmenu. De gebruiker kan:

1. Opgeven welke enclave (via naam in de dictionary) moet groeien.
2. De gekozen enclave wordt doorgegeven aan `GroeiEnclave`.

::: {.callout-tip collapse="true"}
## Checkpoint
```
=== ENCLAVE MANAGER ===
1. Nieuwe enclave aanmaken
2. Bouw woonst
3. Toon enclave
4. Groei enclave
Keuze: 4
Welke enclave? Antwerpen
[enclave wordt getoond, groeit, en wordt opnieuw getoond]
```
:::

---

## Debriefing

::: {.callout-note}
## Reflectie
1. Waarom moet je eerst op `StadsEnclave` controleren en pas daarna op `Enclave`?
2. Wat is het verschil tussen `as` (met null-check) en een directe cast `(StadsEnclave)enclave`? Wanneer crasht de ene wel en de andere niet?
3. Je `GroeiEnclave`-methode accepteert een `Enclave` maar werkt ook met `StadsEnclave`. Hoe noem je dit principe in OOP?
:::

> *"De enclaves groeien. De gemeenschappen stabiliseren. Maar dan komt er een bericht binnen van een veldagent: in de ruines van een verlaten onderzoekslab is een kluis gevonden. Erin zitten versleutelde bestanden — mogelijk data over de oorsprong van VX-42. Als we die kluis kunnen kraken, verandert alles."*
