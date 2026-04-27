# Trainingsmissie

![](../assets/briefingslide.jpg)

::: {.callout-important}
## Leerdoelen
Na deze missie kan je:

- Klassen ontwerpen met properties (autoproperty + full property) en constructors
- Methodes schrijven die objecten als parameter gebruiken
- Werken met `static` members en begrijpen wanneer je ze gebruikt
- Lijsten van objecten aanmaken en doorlopen
:::

> *"Eerst moeten we testen hoe vaardig je C#-skills zijn. Dit is je proef — bewijs dat je klaar bent voor het echte werk."*

::: {.callout-tip collapse="true"}
## Optionele uitdaging
Daag jezelf uit: start een timer en probeer deze missie in minder dan 120 minuten af te werken (inclusief lezen en opzetten van je project). Haal je het niet? Geen probleem — het belangrijkste is dat je alles begrijpt.
:::

We maken een applicatie waarmee we vaccins, virussen en vaccinatiecentra simuleren. In deze wereld heeft ieder virus een verborgen "killcode". Als een vaccin de juiste killcode raadt, kan het virus uitgeschakeld worden.

---

## Stap 1 — De Vaccin klasse

Maak een `Vaccin` klasse met:

* Een `Naam` (`string`) als autoproperty met private setter.
* Enkel een overloaded constructor, waarbij je de naam van het vaccin instelt.
* Een autoproperty `Oplossing` van het type `int` — standaard op `-1`.
* Een methode `TryKillCode` die geen parameters aanvaardt en een `int` teruggeeft:
  * Normaal: een random getal tussen 1 en 100.
  * Als `Oplossing` een andere waarde dan `-1` heeft: geef `Oplossing` terug in plaats van een random getal.
* Een methode `ToonInfo` die de naam en de huidige `Oplossing` op het scherm toont.

::: {.callout-tip collapse="true"}
## Checkpoint
Test je `Vaccin` klasse:
```csharp
Vaccin v = new Vaccin("TestVaccin");
Console.WriteLine(v.Naam);           // TestVaccin
Console.WriteLine(v.Oplossing);      // -1
Console.WriteLine(v.TryKillCode());  // willekeurig getal 1-100
v.Oplossing = 42;
Console.WriteLine(v.TryKillCode());  // 42
```
Werkt alles zoals verwacht? Dan ben je klaar voor stap 2.
:::

::: {.callout-warning collapse="true"}
## Hint — Random getallen
Maak een `Random`-object aan (bv. als `static` field of in `Main`) en hergebruik dat overal. Meerdere `Random`-objecten snel na elkaar aanmaken levert vaak dezelfde "willekeurige" waarden op.
:::

---

## Stap 2 — De Virus klasse

Maak een `Virus` klasse met:

* Een `Naam` als autoproperty met private setter.
* Een `DoomCountdown` (`int`) als **full property** met private setter:
  * Wanneer de countdown op 0 of lager wordt gezet, verschijnt `"Game over [Naam virus]"` op het scherm (in de setter).
* Een private `int killcode`.
* Enkel een **default constructor** die:
  * `DoomCountdown` instelt op een getal tussen 10 en 20.
  * `killcode` instelt op een getal tussen 0 en 99.
  * `Naam` samenstelt uit 3 willekeurige letters gevolgd door een getal tussen 1 en 99 (bv. `XKR42`).
* Een methode `TryVaccin` die:
  * Een parameter van het type `Vaccin` aanvaardt.
  * Een `bool` teruggeeft:
    * **`true`** als `TryKillCode()` op het vaccin overeenkomt met de `killcode` van het virus. Stel ook de `Oplossing` van het vaccin in op de werkende killcode.
    * **`false`** als de killcode niet klopt. Verlaag eerst de `DoomCountdown` met 1.

::: {.callout-tip collapse="true"}
## Checkpoint
```csharp
Virus v = new Virus();
Console.WriteLine(v.Naam);           // bv. FKL23
Console.WriteLine(v.DoomCountdown);  // getal tussen 10 en 20
```
:::

::: {.callout-warning collapse="true"}
## Hint — Willekeurige letters genereren
`(char)('A' + random.Next(0, 26))` geeft een willekeurige hoofdletter. Doe dit 3x en plak de letters aan elkaar.
:::

---

## Stap 3 — Fase 1: Het vaccin zoeken

> *"De klok tikt, agent. Het virus verspreidt zich. Iedere mislukte poging brengt de DoomCountdown een stap dichter bij nul. Vind de killcode — nu."*

*Maak een virus aan* en een lijst met 5 vaccins. Blijf de vaccins herhaaldelijk testen op het virus:

* **Succes:** een vaccin vindt de killcode. Onthoud welk vaccin werkte en ga naar Fase 2.
* **Game over:** de `DoomCountdown` bereikt 0. Het programma stopt — de gebruiker moet opnieuw starten en hopen op meer geluk.

::: {.callout-tip collapse="true"}
## Checkpoint
Als alles werkt, zou je output er ongeveer zo uitzien:
```
Virus FKL23 aangemaakt (doom: 15)
Poging: Vaccin-Alpha probeert 73... mis.
Poging: Vaccin-Beta probeert 12... mis.
...
Poging: Vaccin-Alpha probeert 47... MATCH! Killcode gevonden!
```
:::

::: {.callout-warning collapse="true"}
## Hint — Programmastructuur
Gebruik een `while`-loop die draait zolang:

1. Er nog geen werkend vaccin gevonden is, EN
2. Het virus nog "leeft" (DoomCountdown > 0)

Loop in elke iteratie door je lijst van vaccins met een `foreach`.
:::

---

## Stap 4 — Fase 2: Vaccinatiecentra verspreiden

> *"Uitstekend. Je hebt de killcode gevonden. Nu moeten we dit vaccin massaal produceren en over de wereld verspreiden. Bouw de infrastructuur."*

### De VaccinatieCentrum klasse

Maak een `VaccinatieCentrum` klasse met:

* Een `static` autoproperty `Oplossing` (`int`, standaard `-1`) — bevat de killcode.
* Een `static` methode `BewaarVaccin` die een `int` als parameter aanvaardt en deze in `Oplossing` bewaart. Je haalt de killcode uit de `Oplossing`-property van het werkende vaccin.
* Een methode `GeefVaccin` (niet static) die:
  * `null` teruggeeft als `Oplossing` nog op `-1` staat.
  * Anders een nieuw `Vaccin` teruggeeft waarbij de `Oplossing` al correct is ingesteld.

### Extra Vaccin constructor

Voeg een extra constructor toe aan je `Vaccin` klasse die naast de naam ook een `int` aanvaardt. Deze constructor stelt `Oplossing` meteen in op de meegegeven waarde. Zo zal `TryKillCode()` meteen de juiste killcode teruggeven (dit zat normaal al goed door je eerdere implementatie).

### Centra verspreiden

1. Stel via `BewaarVaccin` eenmalig de gevonden killcode in (uit het vaccin dat in Fase 1 werkte).
2. Maak 5 nieuwe `VaccinatieCentrum`-objecten aan en plaats ze in een lijst.
3. Roep op elk centrum 7x `GeefVaccin` aan.
4. Verzamel alle vaccins in een grote lijst (35 stuks).
5. Loop door de lijst en roep `ToonInfo` aan op elk vaccin.

Je zou nu 35x dezelfde oplossing moeten zien. Controleer via een breakpoint of deze overeenkomt met de killcode van je virus uit Fase 1.

::: {.callout-tip collapse="true"}
## Checkpoint
Je output zou er zo moeten uitzien:
```
Vaccin-1 - Oplossing: 47
Vaccin-2 - Oplossing: 47
Vaccin-3 - Oplossing: 47
... (35x hetzelfde getal)
```
:::

---

## Debriefing

::: {.callout-note}
## Reflectie
1. Waarom is het handig dat `Oplossing` en `BewaarVaccin` in `VaccinatieCentrum` **static** zijn? Wat zou er veranderen als ze dat niet waren?
2. Wat zou er gebeuren als `TryKillCode` altijd random bleef, ook wanneer `Oplossing` al ingesteld was?
3. De huidige vaccins zoeken de killcode door *blind te gokken*. Kan jij een strategie bedenken die slimmer zoekt?

*(Die laatste vraag is geen toeval — bereid je voor op Missie 1.)*
:::

> *"Goed werk, agent. De Task Force is onder de indruk. Maar die blinde zoekstrategie van je vaccins... daar moeten we dringend iets aan doen. En er zijn verontrustende berichten: het virus begint te muteren."*
