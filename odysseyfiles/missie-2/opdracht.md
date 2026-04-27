# Opdracht

<!-- TODO: briefingslide afbeelding toevoegen -->

::: {.callout-important}
## Leerdoelen
Na deze missie kan je:

- Een abstracte klasse ontwerpen als blauwdruk voor verwante klassen
- Abstracte methodes definiëren en implementeren in afgeleide klassen
- `ToString()` overriden in een overerving-hiërarchie
- Polymorfisme toepassen via een `List<Module>`
:::

> *"Het station zal bestaan uit verwisselbare modules: kwartieren, medische bays, reactoren. We willen alle modules volgens hetzelfde concept uitwerken, zodat het station modulair en uitbreidbaar is. Eén blauwdruk, meerdere varianten."*

Dat "ene concept" is in C# een **abstracte klasse**: een klasse die de gemeenschappelijke structuur vastlegt, maar de details overlaat aan de concrete modules.

---

## Stap 1 — Abstracte klasse Module

Maak een **abstracte** klasse `Module` met:

* Drie autoproperties: `X` (`int`), `Y` (`int`) en `Naam` (`string`).
* Een **abstracte** methode `PrintModule` — geeft niets terug, geen parameters.
* Een override van `ToString` die het volgende formaat teruggeeft (voorbeeld voor een module met naam "MedBay" op locatie 3,4):
  ```
  MedBay (locatie: 3, 4)
  ```
* **Geen** default constructor. Enkel een overloaded constructor die `Naam`, `X` en `Y` als parameters aanvaardt.

::: {.callout-tip collapse="true"}
## Checkpoint
Probeer `new Module("Test", 1, 1)` — dit zou een compilerfout moeten geven, want je kan geen instantie maken van een abstracte klasse. Precies de bedoeling: `Module` is een blauwdruk, geen module zelf.
:::

---

## Stap 2 — Concrete modules

Maak de volgende klassenhiërarchie:

```
        Module (abstract)
       /          \
  Behuizing      Energie
   /    \         /    \
Kwartier Woonblok Reactor FusieReactor
              |
           MedBay
```

`Behuizing` en `Energie` zijn **niet-abstracte** tussenklassen die overerven van `Module` (ze voegen eventueel extra info toe in `ToString`).

Iedere concrete klasse (bladniveau) heeft:

* Een **overloaded constructor** die `X`, `Y` en `Naam` aanvaardt (en doorstuurt naar de parent-constructor).
* Een **override** van `ToString` die extra informatie over de module toont (verzin zelf wat passend is per type, bv. aantal bedden voor een MedBay, vermogen voor een Reactor). De `ToString` van de parent-klasse(n) moet nog steeds uitgevoerd worden.
* Een implementatie van `PrintModule`: deze methode plaatst één karakter op het scherm op positie (`X`, `Y`):

| Klasse | Karakter |
|---|---|
| Kwartier | `k` |
| Woonblok | `K` |
| MedBay | `M` |
| Reactor | `r` |
| FusieReactor | `R` |

::: {.callout-warning collapse="true"}
## Hint — Karakter op positie zetten
```csharp
Console.SetCursorPosition(X, Y);
Console.Write("M");
```
:::

::: {.callout-warning collapse="true"}
## Hint — Base ToString aanroepen
In je `ToString` override kan je `base.ToString()` gebruiken om het resultaat van de parent-klasse op te halen en daar je extra tekst aan toe te voegen.
:::

---

## Stap 3 — Test je station

Plaats deze code in je `Main` en controleer de output:

```csharp
List<Module> station = new List<Module>();
station.Add(new MedBay("Sick Bay Alpha", 4, 5));
station.Add(new Kwartier("Crew Deck 1", 1, 1));
station.Add(new Reactor("Reactor Core", 1, 2));

foreach (var module in station)
{
    module.PrintModule();
}
```

Verwachte output:

```
k
r

   M
```

::: {.callout-tip collapse="true"}
## Checkpoint
Merk op: je `List` is van type `Module`, maar bevat `MedBay`, `Kwartier` en `Reactor` objecten. Dit werkt dankzij polymorfisme — alle concrete klassen *zijn* een `Module`. De juiste `PrintModule` wordt automatisch aangeroepen per type.
:::

---

## Extra uitdaging

### Kleur toevoegen

Zorg dat elk moduletype in een andere kleur op het scherm verschijnt. Een kwartier wordt bv. blauw, een MedBay rood.

::: {.callout-warning collapse="true"}
## Hint — Console kleuren
```csharp
Console.ForegroundColor = ConsoleColor.Red;
Console.Write("M");
Console.ResetColor();
```
:::

### Gangen

Maak een `Gang`-klasse en teken gangen tussen je modules. Mail je mooiste station naar de docent.

---

## Debriefing

::: {.callout-note}
## Reflectie
1. Waarom is `Module` abstract en niet gewoon een normale klasse? Wat zou er mis gaan als je `new Module("X", 1, 1)` zou kunnen doen?
2. Ieder moduletype heeft een eigen `PrintModule`, maar je kan ze allemaal in dezelfde `List<Module>` steken. Waarom is dat krachtig?
3. Stel je wil een nieuw moduletype toevoegen (bv. een `Laboratorium`). Hoeveel bestaande code moet je aanpassen?
:::

> *"De modules staan er. Maar losse modules maken nog geen station. In de volgende missie gaan we ze organiseren tot echte, functionerende ruimtestations — met regels over welke modules erin mogen en hoe ze samenwerken."*
