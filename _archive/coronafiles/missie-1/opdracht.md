# Opdracht

![](../assets/briefingslide%20(2).jpg)

::: {.callout-important}
## Leerdoelen
Na deze missie kan je:

- Overerving (`inheritance`) toepassen om bestaande klassen uit te breiden
- Methodes `virtual` en `override` maken
- Een `Dictionary<TKey, TValue>` gebruiken als alternatief voor een `List`
:::

> *"Het huidige vaccin vindt de killcode door willekeurig te gokken. Dat is als geblinddoekt op een olifant jagen. Ondertussen muteert het virus — sommige mutaties saboteren zelfs onze countdown. We hebben betere wapens nodig."*

Deze missie bouwt verder op de klassen uit de trainingsmissie. Heb je de trainingsmissie niet gemaakt? [Gebruik dan deze startcode](../oplossingen/trainings-opdracht.md).

---

## Stap 1 — Slimmere vaccins

### Voorbereiding

Maak de methode `TryKillCode` in je `Vaccin` klasse **virtual**.

### SlimVaccin

Maak een klasse `SlimVaccin` die overerft van `Vaccin`.

Deze klasse **override** `TryKillCode` met een slimmere strategie: in plaats van willekeurig te raden, test het vaccin systematisch:

1. Eerst alle veelvouden van 10: 0, 10, 20, 30, ..., 90
2. Dan 1, 11, 21, 31, ..., 91
3. Dan 2, 12, 22, 32, ..., 92
4. Enzovoort

Zo wordt elke mogelijke killcode gegarandeerd getest — geen gokwerk meer.

::: {.callout-tip collapse="true"}
## Checkpoint
```java
SlimVaccin sv = new SlimVaccin("SlimTest");
// Opeenvolgende aanroepen van TryKillCode() geven:
// 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 1, 11, 21, ...
for (int i = 0; i < 15; i++)
    Console.WriteLine(sv.TryKillCode());
```
:::

::: {.callout-warning collapse="true"}
## Hint — Teller bijhouden
Je `SlimVaccin` heeft een extra instantievariabele nodig die bijhoudt welk getal als volgende getest moet worden. Denk aan een teller die bij elke aanroep van `TryKillCode` verhoogd wordt.
:::

---

## Stap 2 — Virusmutaties

### Voorbereiding

Maak de methode `TryVaccin` in je `Virus` klasse **virtual**.

### DomVirus

Maak een klasse `DomVirus` die overerft van `Virus`.

Dit gemuteerd virus voert `TryVaccin` nog steeds uit zoals normaal, maar met een twist: **50% van de tijd** wordt de `DoomCountdown` verhoogd in plaats van verlaagd bij een mislukte poging.

Het virus saboteert zichzelf dus — soms helpt het je onbedoeld door meer tijd te geven.

::: {.callout-tip collapse="true"}
## Checkpoint
Test met een `DomVirus` en een gewoon `Vaccin`. Je zou moeten merken dat de `DoomCountdown` soms stijgt en soms daalt bij mislukte pogingen.
:::

::: {.callout-warning collapse="true"}
## Hint — Override strategie
Override `TryVaccin`. In 50% van de gevallen roep je de **base** implementatie aan (die verlaagt). In de andere 50%: verhoog de countdown zelf met 1 (maar vergeet dan niet om het vaccin ook effectief te testen, anders mis je een match).

Alternatief: roep altijd `base.TryVaccin()` aan, en verhoog daarna in 50% van de mislukte gevallen de countdown met 2 (om de verlaging te compenseren + 1 extra).
:::

---

## Stap 3 — Test de nieuwe wapens

> *"Laat zien wat je slimme vaccins kunnen. Test ze op het gemuteerde virus."*

Voer Fase 1 uit de trainingsmissie opnieuw uit, maar nu met:

- Een `DomVirus` in plaats van een gewoon `Virus`
- `SlimVaccin`s in plaats van gewone `Vaccin`s

Merk je het verschil? Het `SlimVaccin` zou de killcode veel sneller moeten vinden.

::: {.callout-tip collapse="true"}
## Checkpoint
Het `SlimVaccin` test systematisch alle getallen van 0 tot 99. Aangezien de killcode een getal is tussen 0 en 99, zal het `SlimVaccin` de code gegarandeerd vinden in maximaal 100 pogingen. Vergelijk dat met het originele vaccin dat puur op geluk vertrouwt.
:::

---

## Stap 4 — Vaccinatiecentra met Dictionary

> *"We gaan de centra over de continenten verspreiden, maar we hebben een betere manier nodig om ze te organiseren dan een simpele lijst."*

### Dictionary

Een `Dictionary` werkt als een `List`, maar in plaats van een numerieke index heeft elk element een **key** van een type dat je zelf kiest.

```java
Dictionary<string, VaccinatieCentrum> centraDB = new Dictionary<string, VaccinatieCentrum>();
```

Hier is `string` het type van de key (de landnaam) en `VaccinatieCentrum` het type van de waarde.

**Toevoegen:**
```java
centraDB.Add("frankrijk", new VaccinatieCentrum());
```

**Opvragen:**
```java
Vaccin vac = centraDB["frankrijk"].GeefVaccin();
```

### De applicatie

Bouw een programma met een menu waarin de operator kan:

1. **Een centrum aanmaken** in een land naar keuze. Controleer of er al een centrum in dat land bestaat (zoek op hoe je `ContainsKey` gebruikt op een Dictionary). Waarschuw de operator als het land al een centrum heeft.
2. **Een overzicht tonen** van alle centra:
```java
Console.WriteLine("Centra in volgende landen:");
foreach (var item in centraDB)
{
    Console.WriteLine(item.Key);
}
```
3. **Vaccins genereren** uit een centrum naar keuze.

::: {.callout-tip collapse="true"}
## Checkpoint
```
=== CORONA TASK FORCE ===
1. Nieuw centrum bouwen
2. Overzicht centra
3. Vaccins genereren
Keuze: 1
Land: belgie
Centrum in belgie gebouwd!

Keuze: 1
Land: belgie
Waarschuwing: belgie heeft al een centrum!

Keuze: 2
Centra in volgende landen:
belgie
```
:::

::: {.callout-warning collapse="true"}
## Hint — Dictionary controleren
`centraDB.ContainsKey("belgie")` geeft `true` als de key al bestaat.
:::

---

## Debriefing

::: {.callout-note}
## Reflectie
1. Wat is het voordeel van `virtual`/`override` ten opzichte van gewoon een compleet nieuwe klasse schrijven?
2. Waarom is een `Dictionary` hier handiger dan een `List`?
3. Het `DomVirus` saboteert zichzelf — best dom. Kan je een virus bedenken dat het vaccin juist *moeilijker* maakt? Hoe zou dat eruitzien?
:::

> *"De vaccins werken. De centra draaien. Maar er komt verontrustend nieuws binnen: VX-42 muteert sneller dan we vaccins kunnen ontwikkelen. We kunnen het virus niet langer bijhouden. Het is tijd voor Plan B."*
