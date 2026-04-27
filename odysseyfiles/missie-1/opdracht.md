# Opdracht

<!-- TODO: briefingslide afbeelding toevoegen -->

::: {.callout-important}
## Leerdoelen
Na deze missie kan je:

- Overerving (`inheritance`) toepassen om bestaande klassen uit te breiden
- Methodes `virtual` en `override` maken
- Een `Dictionary<TKey, TValue>` gebruiken als alternatief voor een `List`
:::

> *"De huidige probes zoeken de signaalcode door willekeurig te scannen. Dat is als geblinddoekt op een olifant jagen. Ondertussen wordt het artefact instabiel — soms loopt de timer op in plaats van af. We hebben betere instrumenten nodig."*

Deze missie bouwt verder op de klassen uit de trainingsmissie. Heb je de trainingsmissie niet gemaakt? [Gebruik dan deze startcode](../oplossingen/trainings-opdracht.md).

---

## Stap 1 — Slimmere probes

### Voorbereiding

Maak de methode `TryFrequentie` in je `Probe` klasse **virtual**.

### SlimmeProbe

Maak een klasse `SlimmeProbe` die overerft van `Probe`.

Deze klasse **override** `TryFrequentie` met een slimmere strategie: in plaats van willekeurig te scannen, test de probe systematisch:

1. Eerst alle veelvouden van 10: 0, 10, 20, 30, ..., 90
2. Dan 1, 11, 21, 31, ..., 91
3. Dan 2, 12, 22, 32, ..., 92
4. Enzovoort

Zo wordt elke mogelijke signaalcode gegarandeerd gescand — geen gokwerk meer.

::: {.callout-tip collapse="true"}
## Checkpoint
```csharp
SlimmeProbe sp = new SlimmeProbe("SlimTest");
// Opeenvolgende aanroepen van TryFrequentie() geven:
// 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 1, 11, 21, ...
for (int i = 0; i < 15; i++)
    Console.WriteLine(sp.TryFrequentie());
```
:::

::: {.callout-warning collapse="true"}
## Hint — Teller bijhouden
Je `SlimmeProbe` heeft een extra instantievariabele nodig die bijhoudt welke frequentie als volgende gescand moet worden. Denk aan een teller die bij elke aanroep van `TryFrequentie` verhoogd wordt.
:::

---

## Stap 2 — Instabiele artefacten

### Voorbereiding

Maak de methode `TryProbe` in je `Artefact` klasse **virtual**.

### InstabielArtefact

Maak een klasse `InstabielArtefact` die overerft van `Artefact`.

Dit artefact is beschadigd en gedraagt zich grillig: het voert `TryProbe` nog steeds uit zoals normaal, maar met een twist: **50% van de tijd** wordt de `VervaltTimer` verhoogd in plaats van verlaagd bij een mislukte poging.

Het artefact saboteert zichzelf dus — soms geeft het je onbedoeld meer tijd.

::: {.callout-tip collapse="true"}
## Checkpoint
Test met een `InstabielArtefact` en een gewone `Probe`. Je zou moeten merken dat de `VervaltTimer` soms stijgt en soms daalt bij mislukte pogingen.
:::

::: {.callout-warning collapse="true"}
## Hint — Override strategie
Override `TryProbe`. In 50% van de gevallen roep je de **base** implementatie aan (die verlaagt). In de andere 50%: verhoog de timer zelf met 1 (maar vergeet dan niet om de probe ook effectief te testen, anders mis je een match).

Alternatief: roep altijd `base.TryProbe()` aan, en verhoog daarna in 50% van de mislukte gevallen de timer met 2 (om de verlaging te compenseren + 1 extra).
:::

---

## Stap 3 — Test de nieuwe instrumenten

> *"Laat zien wat je slimme probes kunnen. Test ze op het instabiele artefact."*

Voer Fase 1 uit de trainingsmissie opnieuw uit, maar nu met:

- Een `InstabielArtefact` in plaats van een gewoon `Artefact`
- `SlimmeProbe`s in plaats van gewone `Probe`s

Merk je het verschil? De `SlimmeProbe` zou de signaalcode veel sneller moeten vinden.

::: {.callout-tip collapse="true"}
## Checkpoint
De `SlimmeProbe` test systematisch alle getallen van 0 tot 99. Aangezien de signaalcode een getal is tussen 0 en 99, zal de probe de code gegarandeerd vinden in maximaal 100 pogingen. Vergelijk dat met de originele probe die puur op geluk vertrouwt.
:::

---

## Stap 4 — Zendstations met Dictionary

> *"We gaan de zendstations over het zonnestelsel verspreiden, maar we hebben een betere manier nodig om ze te organiseren dan een simpele lijst."*

### Dictionary

Een `Dictionary` werkt als een `List`, maar in plaats van een numerieke index heeft elk element een **key** van een type dat je zelf kiest.

```csharp
Dictionary<string, Zendstation> stationsDB = new Dictionary<string, Zendstation>();
```

Hier is `string` het type van de key (de locatienaam) en `Zendstation` het type van de waarde.

**Toevoegen:**
```csharp
stationsDB.Add("mars", new Zendstation());
```

**Opvragen:**
```csharp
Probe p = stationsDB["mars"].GeefProbe();
```

### De applicatie

Bouw een programma met een menu waarin de operator kan:

1. **Een station bouwen** op een locatie naar keuze. Controleer of er al een station op die locatie bestaat (zoek op hoe je `ContainsKey` gebruikt op een Dictionary). Waarschuw de operator als die locatie al een station heeft.
2. **Een overzicht tonen** van alle stations:
```csharp
Console.WriteLine("Stations op volgende locaties:");
foreach (var item in stationsDB)
{
    Console.WriteLine(item.Key);
}
```
3. **Probes genereren** vanuit een station naar keuze.

::: {.callout-tip collapse="true"}
## Checkpoint
```
=== PROJECT ODYSSEY ===
1. Nieuw station bouwen
2. Overzicht stations
3. Probes genereren
Keuze: 1
Locatie: mars
Station op mars gebouwd!

Keuze: 1
Locatie: mars
Waarschuwing: mars heeft al een station!

Keuze: 2
Stations op volgende locaties:
mars
```
:::

::: {.callout-warning collapse="true"}
## Hint — Dictionary controleren
`stationsDB.ContainsKey("mars")` geeft `true` als de key al bestaat.
:::

---

## Debriefing

::: {.callout-note}
## Reflectie
1. Wat is het voordeel van `virtual`/`override` ten opzichte van gewoon een compleet nieuwe klasse schrijven?
2. Waarom is een `Dictionary` hier handiger dan een `List`?
3. Het `InstabielArtefact` saboteert zichzelf. Kan je een artefact bedenken dat het juist *moeilijker* maakt om te scannen? Hoe zou dat eruitzien?
:::

> *"De probes werken. De stations draaien. Het artefact is gedecodeerd en de coordinaten zijn binnen — het wijst naar een plek diep in de ruimte. Maar om daar te overleven hebben we meer nodig dan probes. We moeten een ruimtestation bouwen."*
