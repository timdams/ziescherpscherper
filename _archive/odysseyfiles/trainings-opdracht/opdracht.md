# Trainingsmissie

<!-- TODO: briefingslide afbeelding toevoegen -->

::: {.callout-important}
## Leerdoelen
Na deze missie kan je:

- Klassen ontwerpen met properties (autoproperty + full property) en constructors
- Methodes schrijven die objecten als parameter gebruiken
- Werken met `static` members en begrijpen wanneer je ze gebruikt
- Lijsten van objecten aanmaken en doorlopen
:::

> *"Eerst moeten we testen hoe vaardig je C#-skills zijn. Dit is je proef — bewijs dat je klaar bent voor echte ruimtemissies."*

::: {.callout-tip collapse="true"}
## Optionele uitdaging
Daag jezelf uit: start een timer en probeer deze missie in minder dan 120 minuten af te werken (inclusief lezen en opzetten van je project). Haal je het niet? Geen probleem — het belangrijkste is dat je alles begrijpt.
:::

We maken een applicatie waarmee we probes, artefacten en zendstations simuleren. Ergens in de ruimte drijft een buitenaards artefact met een verborgen "signaalcode". Als een probe de juiste frequentie vindt, kunnen we het artefact decoderen — maar de VervaltTimer tikt. Als die op nul staat, vernietigt het artefact zichzelf.

---

## Stap 1 — De Probe klasse

Maak een `Probe` klasse met:

* Een `Naam` (`string`) als autoproperty met private setter.
* Enkel een overloaded constructor, waarbij je de naam van de probe instelt.
* Een autoproperty `Frequentie` van het type `int` — standaard op `-1`.
* Een methode `TryFrequentie` die geen parameters aanvaardt en een `int` teruggeeft:
  * Normaal: een random getal tussen 1 en 100.
  * Als `Frequentie` een andere waarde dan `-1` heeft: geef `Frequentie` terug in plaats van een random getal.
* Een methode `ToonInfo` die de naam en de huidige `Frequentie` op het scherm toont.

::: {.callout-tip collapse="true"}
## Checkpoint
Test je `Probe` klasse:
```java
Probe p = new Probe("TestProbe");
Console.WriteLine(p.Naam);            // TestProbe
Console.WriteLine(p.Frequentie);      // -1
Console.WriteLine(p.TryFrequentie()); // willekeurig getal 1-100
p.Frequentie = 42;
Console.WriteLine(p.TryFrequentie()); // 42
```
Werkt alles zoals verwacht? Dan ben je klaar voor stap 2.
:::

::: {.callout-warning collapse="true"}
## Hint — Random getallen
Maak een `Random`-object aan (bv. als `static` field of in `Main`) en hergebruik dat overal. Meerdere `Random`-objecten snel na elkaar aanmaken levert vaak dezelfde "willekeurige" waarden op.
:::

---

## Stap 2 — De Artefact klasse

Maak een `Artefact` klasse met:

* Een `Naam` als autoproperty met private setter.
* Een `VervaltTimer` (`int`) als **full property** met private setter:
  * Wanneer de timer op 0 of lager wordt gezet, verschijnt `"Artefact verloren: [Naam artefact]"` op het scherm (in de setter).
* Een private `int signaalcode`.
* Enkel een **default constructor** die:
  * `VervaltTimer` instelt op een getal tussen 10 en 20.
  * `signaalcode` instelt op een getal tussen 0 en 99.
  * `Naam` samenstelt uit 3 willekeurige letters gevolgd door een getal tussen 1 en 99 (bv. `XKR42`).
* Een methode `TryProbe` die:
  * Een parameter van het type `Probe` aanvaardt.
  * Een `bool` teruggeeft:
    * **`true`** als `TryFrequentie()` op de probe overeenkomt met de `signaalcode` van het artefact. Stel ook de `Frequentie` van de probe in op de werkende signaalcode.
    * **`false`** als de code niet klopt. Verlaag eerst de `VervaltTimer` met 1.

::: {.callout-tip collapse="true"}
## Checkpoint
```java
Artefact a = new Artefact();
Console.WriteLine(a.Naam);          // bv. FKL23
Console.WriteLine(a.VervaltTimer);  // getal tussen 10 en 20
```
:::

::: {.callout-warning collapse="true"}
## Hint — Willekeurige letters genereren
`(char)('A' + random.Next(0, 26))` geeft een willekeurige hoofdletter. Doe dit 3x en plak de letters aan elkaar.
:::

---

## Stap 3 — Fase 1: Het signaal vinden

> *"De timer tikt, agent. Het artefact vernietigt zichzelf als we te lang wachten. Vind de signaalcode — nu."*

Maak een artefact aan en een lijst met 5 probes. Blijf de probes herhaaldelijk testen op het artefact:

* **Succes:** een probe vindt de signaalcode. Onthoud welke probe werkte en ga naar Fase 2.
* **Verloren:** de `VervaltTimer` bereikt 0. Het programma stopt — de gebruiker moet opnieuw starten en hopen op meer geluk.

::: {.callout-tip collapse="true"}
## Checkpoint
Als alles werkt, zou je output er ongeveer zo uitzien:
```
Artefact FKL23 gedetecteerd (timer: 15)
Poging: Probe-Alpha scant 73... mis.
Poging: Probe-Beta scant 12... mis.
...
Poging: Probe-Alpha scant 47... MATCH! Signaalcode gevonden!
```
:::

::: {.callout-warning collapse="true"}
## Hint — Programmastructuur
Gebruik een `while`-loop die draait zolang:

1. Er nog geen werkende probe gevonden is, EN
2. Het artefact nog "leeft" (VervaltTimer > 0)

Loop in elke iteratie door je lijst van probes met een `foreach`.
:::

---

## Stap 4 — Fase 2: Zendstations verspreiden

> *"Uitstekend. Je hebt de signaalcode gevonden. Nu moeten we deze frequentie over het hele zonnestelsel verspreiden zodat al onze schepen het artefact kunnen bereiken. Bouw de infrastructuur."*

### De Zendstation klasse

Maak een `Zendstation` klasse met:

* Een `static` autoproperty `Frequentie` (`int`, standaard `-1`) — bevat de signaalcode.
* Een `static` methode `BewaarFrequentie` die een `int` als parameter aanvaardt en deze in `Frequentie` bewaart. Je haalt de signaalcode uit de `Frequentie`-property van de werkende probe.
* Een methode `GeefProbe` (niet static) die:
  * `null` teruggeeft als `Frequentie` nog op `-1` staat.
  * Anders een nieuwe `Probe` teruggeeft waarbij de `Frequentie` al correct is ingesteld.

### Extra Probe constructor

Voeg een extra constructor toe aan je `Probe` klasse die naast de naam ook een `int` aanvaardt. Deze constructor stelt `Frequentie` meteen in op de meegegeven waarde. Zo zal `TryFrequentie()` meteen de juiste code teruggeven (dit zat normaal al goed door je eerdere implementatie).

### Stations verspreiden

1. Stel via `BewaarFrequentie` eenmalig de gevonden signaalcode in (uit de probe die in Fase 1 werkte).
2. Maak 5 nieuwe `Zendstation`-objecten aan en plaats ze in een lijst.
3. Roep op elk station 7x `GeefProbe` aan.
4. Verzamel alle probes in een grote lijst (35 stuks).
5. Loop door de lijst en roep `ToonInfo` aan op elke probe.

Je zou nu 35x dezelfde frequentie moeten zien. Controleer via een breakpoint of deze overeenkomt met de signaalcode van je artefact uit Fase 1.

::: {.callout-tip collapse="true"}
## Checkpoint
Je output zou er zo moeten uitzien:
```
Probe-1 - Frequentie: 47
Probe-2 - Frequentie: 47
Probe-3 - Frequentie: 47
... (35x hetzelfde getal)
```
:::

---

## Debriefing

::: {.callout-note}
## Reflectie
1. Waarom is het handig dat `Frequentie` en `BewaarFrequentie` in `Zendstation` **static** zijn? Wat zou er veranderen als ze dat niet waren?
2. Wat zou er gebeuren als `TryFrequentie` altijd random bleef, ook wanneer `Frequentie` al ingesteld was?
3. De huidige probes zoeken de signaalcode door *blind te gokken*. Kan jij een strategie bedenken die slimmer scant?

*(Die laatste vraag is geen toeval — bereid je voor op Missie 1.)*
:::

> *"Goed werk, agent. Project Odyssey is onder de indruk. Maar die blinde scanstrategie van je probes... daar moeten we dringend iets aan doen. En onze sensoren detecteren iets vreemds: het artefact lijkt instabiel te worden."*
