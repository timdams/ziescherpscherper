# Opdracht

<!-- TODO: briefingslide afbeelding toevoegen -->

::: {.callout-important}
## Leerdoelen
Na deze missie kan je:

- Een interface definiëren en implementeren
- Het verschil uitleggen tussen een interface en een abstracte klasse
- Meerdere interfaces implementeren op één klasse
- Programmeren tegen een interface (`List<IInstalleerbaar>`)
- `is`/`as` gebruiken om te controleren of een object een bepaalde interface implementeert
:::

> *"De reis wordt gevaarlijk. Ons station heeft upgrades nodig — schilden, wapens, scanners — van verschillende fabrikanten. Menselijke technologie, buitenaardse technologie, het maakt niet uit. Zolang ze maar allemaal hetzelfde protocol spreken."*

Dat "protocol" is in C# een **interface**: een contract dat vastlegt *wat* een klasse moet kunnen, zonder te bepalen *hoe*.

---

## Stap 1 — De IInstalleerbaar interface

Definieer een interface `IInstalleerbaar`:

```java
interface IInstalleerbaar
{
    string Naam { get; }
    int EnergieVerbruik { get; }
    bool Installeer();
    void Activeer();
    string Status();
}
```

Elke upgrade die in het station past, moet dit contract naleven — ongeacht waar de technologie vandaan komt.

::: {.callout-tip collapse="true"}
## Checkpoint
Een interface kan je niet instantiëren (`new IInstalleerbaar()` geeft een fout), net als een abstracte klasse. Maar in tegenstelling tot een abstracte klasse kan een klasse **meerdere** interfaces implementeren.
:::

---

## Stap 2 — Upgrade-klassen

Maak minstens de volgende klassen die `IInstalleerbaar` implementeren:

### SchildGenerator

* Erft over van `Module` (het is een fysieke module die op het station komt).
* Implementeert `IInstalleerbaar`.
* Heeft een property `SchildSterkte` (`int`, start op 100).
* `Installeer()` geeft `true` terug en toont "Schild online".
* `Activeer()` toont de huidige schildsterkte op het scherm.
* `Status()` geeft `"Schild: [SchildSterkte]%"` terug.
* `EnergieVerbruik` is 30.

### WapenSysteem

* Erft over van `Module` (fysieke module).
* Implementeert `IInstalleerbaar`.
* Heeft een property `Munitie` (`int`, start op 50).
* `Installeer()` geeft `true` terug, of `false` als `Munitie` 0 is.
* `Activeer()` verlaagt munitie met 1 en toont "Vuur! Munitie: [Munitie]".
* `Status()` geeft `"Wapen: [Munitie] munitie"` terug.
* `EnergieVerbruik` is 20.

### GeavanceerdeScanner

* Erft **NIET** over van `Module` — het is geen fysieke module maar een softwaresysteem.
* Implementeert `IInstalleerbaar`.
* Heeft een property `Bereik` (`int`, in lichtjaren).
* `Installeer()` geeft altijd `true`.
* `Activeer()` toont "Scanning... [Bereik] lichtjaar bereik".
* `Status()` geeft `"Scanner: bereik [Bereik] lj"` terug.
* `EnergieVerbruik` is 15.

### AlienMedKit

* Erft **NIET** over van `Module` — het is buitenaardse technologie die we niet volledig begrijpen.
* Implementeert `IInstalleerbaar`.
* `Installeer()` geeft `true` en toont "Alien medisch systeem geactiveerd".
* `Activeer()` toont "Crew gezondheid hersteld".
* `Status()` geeft `"Alien MedKit: operationeel"` terug.
* `EnergieVerbruik` is 10.

::: {.callout-tip collapse="true"}
## Checkpoint
```java
// Dit WERKT — ondanks dat deze klassen niets met elkaar gemeen hebben
List<IInstalleerbaar> upgrades = new List<IInstalleerbaar>();
upgrades.Add(new SchildGenerator("Schild-1", 2, 3));
upgrades.Add(new GeavanceerdeScanner(500));  // 500 lichtjaar bereik
upgrades.Add(new AlienMedKit());

foreach (IInstalleerbaar u in upgrades)
{
    Console.WriteLine(u.Status());
}
```
Merk op: `SchildGenerator` is een `Module`, maar `GeavanceerdeScanner` en `AlienMedKit` zijn dat niet. Toch passen ze allemaal in dezelfde lijst, want ze implementeren dezelfde **interface**. Dit is het verschil met een abstracte klasse — daar zou je overerving nodig hebben.
:::

::: {.callout-warning collapse="true"}
## Hint — Interface implementeren
```java
class SchildGenerator : Module, IInstalleerbaar
{
    public int EnergieVerbruik { get { return 30; } }

    public bool Installeer()
    {
        Console.WriteLine("Schild online");
        return true;
    }
    // ... etc
}
```
Een klasse kan van één klasse erven EN meerdere interfaces implementeren.
:::

---

## Stap 3 — Tweede interface: IHerstelbaar

Niet alle upgrades kunnen gerepareerd worden na schade. Definieer een tweede interface:

```java
interface IHerstelbaar
{
    int Schade { get; }
    void Herstel();
}
```

Laat `SchildGenerator` en `WapenSysteem` ook `IHerstelbaar` implementeren:

* **SchildGenerator**: `Schade` is `100 - SchildSterkte`. `Herstel()` zet `SchildSterkte` terug op 100.
* **WapenSysteem**: `Schade` is `50 - Munitie`. `Herstel()` zet `Munitie` terug op 50.

De `GeavanceerdeScanner` en `AlienMedKit` implementeren `IHerstelbaar` **niet** — ze hebben geen herstelbaar onderdeel.

::: {.callout-tip collapse="true"}
## Checkpoint
```java
// Niet elke IInstalleerbaar is IHerstelbaar
foreach (IInstalleerbaar u in upgrades)
{
    if (u is IHerstelbaar)
    {
        IHerstelbaar h = u as IHerstelbaar;
        Console.WriteLine($"{u.Naam}: schade = {h.Schade}");
    }
    else
    {
        Console.WriteLine($"{u.Naam}: niet herstelbaar");
    }
}
```
:::

---

## Stap 4 — UpgradeManager

Maak een klasse `UpgradeManager` met:

* Een `List<IInstalleerbaar>` van geinstalleerde upgrades.
* Een methode `Installeer(IInstalleerbaar upgrade)` die:
  * `Installeer()` aanroept op de upgrade.
  * Bij succes: voegt de upgrade toe aan de lijst.
  * Bij mislukking: toont een waarschuwing.
* Een methode `ToonAlles()` die `Status()` toont van elke geinstalleerde upgrade.
* Een methode `TotaalEnergie()` die de som van alle `EnergieVerbruik` teruggeeft.
* Een methode `HerstelAlles()` die alle upgrades die `IHerstelbaar` zijn herstelt (gebruik `is`/`as`).

::: {.callout-tip collapse="true"}
## Checkpoint
```java
UpgradeManager manager = new UpgradeManager();
manager.Installeer(new SchildGenerator("Schild-1", 2, 3));
manager.Installeer(new GeavanceerdeScanner(500));
manager.Installeer(new AlienMedKit());

manager.ToonAlles();
// Schild: 100%
// Scanner: bereik 500 lj
// Alien MedKit: operationeel

Console.WriteLine($"Totaal energieverbruik: {manager.TotaalEnergie()}");
// Totaal energieverbruik: 55
```
:::

---

## Stap 5 — De Grote Reis (simulatie)

> *"Alle systemen online. De reis begint. Hou je vast."*

Bouw een simulatie die de reis naar het volgende artefact nabootst. De reis duurt **10 rondes**. Elke ronde gebeurt er een willekeurig event:

| Event | Effect |
|---|---|
| Kosmische straling | Alle `IHerstelbaar` upgrades krijgen schade (verlaag hun waarde met een random getal) |
| Ruimtepuin | `WapenSysteem` vuurt (`Activeer()`) om het puin te vernietigen |
| Scan nodig | `GeavanceerdeScanner` scant (`Activeer()`) |
| Medische nood | `AlienMedKit` activeert (`Activeer()`) |
| Rustige ronde | Alle `IHerstelbaar` upgrades worden hersteld |

Na elke ronde toon je de status van alle upgrades via de `UpgradeManager`.

Na 10 rondes: als het `WapenSysteem` nog munitie heeft EN het `SchildGenerator` nog schildsterkte heeft, is de missie geslaagd.

::: {.callout-tip collapse="true"}
## Checkpoint
```
=== RONDE 3: Kosmische straling! ===
Schild beschadigd! Sterkte: 72%
Wapen beschadigd! Munitie: 43

--- STATUS ---
Schild: 72%
Wapen: 43 munitie
Scanner: bereik 500 lj
Alien MedKit: operationeel
Totaal energie: 75

=== RONDE 4: Rustige ronde ===
Schild hersteld! Sterkte: 100%
Wapen hersteld! Munitie: 50
...

=== MISSIE VOLTOOID ===
De reis is geslaagd! Het volgende artefact is bereikt.
```
:::

::: {.callout-warning collapse="true"}
## Hint — Random events
```java
Random r = new Random();
string[] events = { "straling", "puin", "scan", "medisch", "rust" };
string huidigEvent = events[r.Next(events.Length)];
```
Gebruik een `switch` om per event de juiste upgrades aan te spreken.
:::

---

## Debriefing

::: {.callout-note}
## Reflectie
1. `SchildGenerator` erft van `Module` EN implementeert `IInstalleerbaar`. `GeavanceerdeScanner` implementeert enkel `IInstalleerbaar` zonder van `Module` te erven. Waarom is dit met een abstracte klasse niet mogelijk?
2. Wat is het voordeel van `List<IInstalleerbaar>` boven `List<Module>`? Welke objecten passen in de ene lijst maar niet in de andere?
3. `IHerstelbaar` is een aparte interface van `IInstalleerbaar`. Waarom zijn dit twee losse interfaces in plaats van één grote? Wat is het voordeel?
4. Kan je een situatie bedenken in een echt softwareproject waar interfaces nuttig zijn? (Denk aan plugins, drivers, betaalsystemen...)
:::

> *"Je hebt het gedaan, agent. Het station is geupgraded, de reis is voltooid, en het volgende artefact is bereikt. De data erin bevestigt wat we al vermoedden: we zijn niet alleen in het universum. En dankzij jouw werk staan we klaar om dat universum te verkennen. Bedankt voor je dienst bij Project Odyssey."*
